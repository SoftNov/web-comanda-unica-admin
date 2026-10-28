import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../auth/services/auth.service';
import { RippleDirective } from '../../../../../shared/directives/ripple.directive';
import {
  ComandaPixChargeStatus,
  ComandaPixReport,
  ComandaPixService,
  ComandaPixSettings
} from '../../../../../shared/services/comanda-pix.service';
import { brDateTimeFormat, brToday, parseApiDate } from '../../../../../shared/utils/datetime.util';

type Message = { type: 'ok' | 'error'; text: string } | null;

const STATUS_LABELS: Record<ComandaPixChargeStatus, string> = {
  PENDING: 'Aguardando',
  PAID: 'Pago',
  EXPIRED: 'Expirado',
  CANCELED: 'Cancelado',
  REFUNDED: 'Estornado'
};

// Pix na comanda (opt-in): o cliente paga a comanda pelo celular, via Pix, na conta Asaas DO
// ESTABELECIMENTO. A chave de API vai direto para o Key Vault e nunca volta para a tela. Sem
// integração, tudo segue como hoje (caixa/garçom). Ver pagamento-pix-comanda.md.
@Component({
  selector: 'app-comanda-pix',
  standalone: true,
  imports: [FormsModule, RippleDirective],
  templateUrl: './comanda-pix.component.html',
  styleUrl: './comanda-pix.component.scss'
})
export class ComandaPixComponent {
  private readonly pixService = inject(ComandaPixService);
  private readonly authService = inject(AuthService);
  private readonly currencyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  private readonly dateTimeFormatter = brDateTimeFormat({ day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });

  readonly settings = signal<ComandaPixSettings | null>(null);
  readonly isLoading = signal(true);
  readonly loadError = signal(false);

  // Cadastro/substituição da chave.
  readonly editingKey = signal(false);
  readonly apiKey = signal('');
  readonly isSavingKey = signal(false);
  readonly keyMessage = signal<Message>(null);
  readonly confirmingRemoval = signal(false);
  readonly isRemovingKey = signal(false);

  // Ativação e valor mínimo.
  readonly pixEnabled = signal(false);
  readonly minPixAmount = signal<number | null>(null);
  readonly isSavingSettings = signal(false);
  readonly settingsMessage = signal<Message>(null);

  // Relatório diário.
  readonly reportDate = signal(brToday());
  readonly report = signal<ComandaPixReport | null>(null);
  readonly isLoadingReport = signal(false);

  // Só OWNER/ADMIN mexem na chave e na ativação (o backend também restringe).
  readonly canManage = computed(() => {
    const company = this.authService.selectedCompany();
    return !!company && ['OWNER', 'ADMIN'].includes(company.profileCode);
  });

  // "Com mínimo de R$ X, a tarifa equivale a no máximo Y% da venda."
  readonly feeSimulation = computed(() => {
    const s = this.settings();
    const min = this.minPixAmount();
    if (!s || !min || min <= 0) {
      return null;
    }
    return {
      fee: s.asaasPixFeeReference,
      percent: (s.asaasPixFeeReference / min) * 100
    };
  });

  constructor() {
    this.load();
    this.loadReport();
  }

  currency(value: number | null | undefined): string {
    return value != null ? this.currencyFormatter.format(value) : '—';
  }

  percent(value: number): string {
    return `${value.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}%`;
  }

  dateTime(value: string | null | undefined): string {
    const parsed = parseApiDate(value);
    return parsed ? this.dateTimeFormatter.format(parsed) : '—';
  }

  statusLabel(status: ComandaPixChargeStatus): string {
    return STATUS_LABELS[status] ?? status;
  }

  tableLabel(name: string | null, number: number | null): string {
    return name?.trim() ? name : number != null ? `Mesa ${number}` : '—';
  }

  load(): void {
    this.isLoading.set(true);
    this.loadError.set(false);
    this.pixService.getSettings().subscribe({
      next: (settings) => {
        this.applySettings(settings);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
        this.loadError.set(true);
      }
    });
  }

  startKeyEdit(): void {
    this.apiKey.set('');
    this.keyMessage.set(null);
    this.editingKey.set(true);
  }

  cancelKeyEdit(): void {
    this.apiKey.set('');
    this.editingKey.set(false);
  }

  saveKey(): void {
    const key = this.apiKey().trim();
    if (!key) {
      this.keyMessage.set({ type: 'error', text: 'Cole a chave de API da Asaas.' });
      return;
    }
    this.isSavingKey.set(true);
    this.keyMessage.set(null);
    this.pixService.saveApiKey(key).subscribe({
      next: (settings) => {
        // A chave sai da memória da tela assim que o backend confirma.
        this.apiKey.set('');
        this.editingKey.set(false);
        this.isSavingKey.set(false);
        this.applySettings(settings);
        this.keyMessage.set({ type: 'ok', text: 'Conta Asaas conectada. Agora defina o valor mínimo e ative o Pix na comanda.' });
      },
      error: (error) => {
        this.isSavingKey.set(false);
        this.keyMessage.set({ type: 'error', text: this.errorText(error, 'Não foi possível validar a chave agora. Tente novamente.') });
      }
    });
  }

  removeKey(): void {
    this.isRemovingKey.set(true);
    this.pixService.removeApiKey().subscribe({
      next: (settings) => {
        this.isRemovingKey.set(false);
        this.confirmingRemoval.set(false);
        this.applySettings(settings);
        this.keyMessage.set({ type: 'ok', text: 'Chave removida. O Pix na comanda foi desativado.' });
      },
      error: (error) => {
        this.isRemovingKey.set(false);
        this.keyMessage.set({ type: 'error', text: this.errorText(error, 'Não foi possível remover a chave agora.') });
      }
    });
  }

  saveSettings(): void {
    const s = this.settings();
    const min = this.minPixAmount();
    if (!s || min == null || min < s.asaasMinAmount) {
      this.settingsMessage.set({ type: 'error', text: `O valor mínimo precisa ser de pelo menos ${this.currency(s?.asaasMinAmount)}.` });
      return;
    }
    this.isSavingSettings.set(true);
    this.settingsMessage.set(null);
    this.pixService.update(this.pixEnabled(), min).subscribe({
      next: (settings) => {
        this.isSavingSettings.set(false);
        this.applySettings(settings);
        this.settingsMessage.set({
          type: 'ok',
          text: settings.pixEnabled ? 'Pix na comanda ativo. Os clientes já veem a opção no cardápio.' : 'Configuração salva. Pix na comanda desativado.'
        });
      },
      error: (error) => {
        this.isSavingSettings.set(false);
        this.settingsMessage.set({ type: 'error', text: this.errorText(error, 'Não foi possível salvar a configuração.') });
      }
    });
  }

  loadReport(): void {
    this.isLoadingReport.set(true);
    this.pixService.report(this.reportDate()).subscribe({
      next: (report) => {
        this.report.set(report);
        this.isLoadingReport.set(false);
      },
      error: () => {
        this.report.set(null);
        this.isLoadingReport.set(false);
      }
    });
  }

  changeReportDate(value: string): void {
    if (!value) {
      return;
    }
    this.reportDate.set(value);
    this.loadReport();
  }

  private applySettings(settings: ComandaPixSettings): void {
    this.settings.set(settings);
    this.pixEnabled.set(settings.pixEnabled);
    this.minPixAmount.set(settings.minPixAmount);
  }

  private errorText(error: unknown, fallback: string): string {
    const body = error instanceof HttpErrorResponse ? (error.error as { mensagem?: string } | undefined) : undefined;
    return body?.mensagem ?? fallback;
  }
}
