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
type Tone = 'ok' | 'warning' | 'error' | 'neutral';
type Overview = { tone: Tone; icon: string; title: string; text: string };

const KEY_PREFIX = '$aact_';

const STATUS_TONES: Record<ComandaPixChargeStatus, Tone> = {
  PENDING: 'neutral',
  PAID: 'ok',
  EXPIRED: 'neutral',
  CANCELED: 'neutral',
  REFUNDED: 'warning',
  CHARGEBACK: 'error'
};

const STATUS_LABELS: Record<ComandaPixChargeStatus, string> = {
  PENDING: 'Aguardando',
  PAID: 'Pago',
  EXPIRED: 'Expirado',
  CANCELED: 'Cancelado',
  REFUNDED: 'Estornado',
  CHARGEBACK: 'Contestado (chargeback)'
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
  readonly cardEnabled = signal(false);
  readonly minCardAmount = signal<number | null>(null);
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

  // Cadastro da chave: aviso na hora quando o texto colado não parece uma chave da Asaas.
  readonly keyVisible = signal(false);
  readonly keyFormatError = computed(() => {
    const key = this.apiKey().trim();
    return key.length > 0 && !key.startsWith(KEY_PREFIX);
  });

  // Situação geral, no topo da página.
  readonly overview = computed<Overview | null>(() => {
    const s = this.settings();
    if (!s) {
      return null;
    }
    if (!s.configured) {
      return { tone: 'neutral', icon: 'link', title: 'Pagamento pelo cardápio desligado',
        text: 'Conecte a conta Asaas do estabelecimento para os clientes pagarem a comanda pelo celular.' };
    }
    if (s.status !== 'ACTIVE') {
      return { tone: 'error', icon: 'error', title: 'Conta Asaas desconectada',
        text: 'A Asaas recusou a chave. Os clientes estão pagando só no caixa ou com o garçom até você informar uma nova chave.' };
    }
    const methods = [s.pixEnabled ? 'Pix' : null, s.cardEnabled ? 'cartão de crédito' : null].filter(Boolean);
    if (!methods.length) {
      return { tone: 'warning', icon: 'toggle_off', title: 'Conta conectada, nenhuma forma ativa',
        text: 'Ative o Pix, o cartão de crédito ou os dois para os clientes verem a opção de pagar no cardápio.' };
    }
    return { tone: 'ok', icon: 'check_circle', title: `Ativo: ${methods.join(' e ')}`,
      text: 'Os clientes já veem a opção de pagar a comanda pelo cardápio.' };
  });

  // Ativação e mínimos editados e ainda não salvos.
  readonly settingsDirty = computed(() => {
    const s = this.settings();
    return !!s && (
      this.pixEnabled() !== s.pixEnabled
      || this.cardEnabled() !== s.cardEnabled
      || Number(this.minPixAmount()) !== s.minPixAmount
      || Number(this.minCardAmount()) !== s.minCardAmount
    );
  });
  readonly pixMinError = computed(() => this.minError(this.minPixAmount()));
  readonly cardMinError = computed(() => this.minError(this.minCardAmount()));

  readonly today = brToday();
  readonly isReportToday = computed(() => this.reportDate() >= this.today);

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

  statusTone(status: ComandaPixChargeStatus): Tone {
    return STATUS_TONES[status] ?? 'neutral';
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
    this.keyVisible.set(false);
    this.editingKey.set(false);
  }

  saveKey(): void {
    const key = this.apiKey().trim();
    if (!key) {
      this.keyMessage.set({ type: 'error', text: 'Cole a chave de API da Asaas.' });
      return;
    }
    if (this.isSavingKey() || this.keyFormatError()) {
      return;
    }
    this.isSavingKey.set(true);
    this.keyMessage.set(null);
    this.pixService.saveApiKey(key).subscribe({
      next: (settings) => {
        // A chave sai da memória da tela assim que o backend confirma.
        const firstConnection = !this.settings()?.configured;
        this.apiKey.set('');
        this.keyVisible.set(false);
        this.editingKey.set(false);
        this.isSavingKey.set(false);
        this.applySettings(settings);
        this.keyMessage.set({
          type: 'ok',
          text: firstConnection
            ? 'Conta Asaas conectada. Agora escolha abaixo as formas de pagamento e salve.'
            : 'Chave salva. Os dados do estabelecimento foram atualizados na Asaas.'
        });
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
        this.keyMessage.set({ type: 'ok', text: 'Conta Asaas removida. O pagamento pelo cardápio foi desativado.' });
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
    const cardMin = this.minCardAmount();
    if (!s || min == null || cardMin == null || this.pixMinError() || this.cardMinError()) {
      this.settingsMessage.set({ type: 'error', text: 'Confira os valores mínimos destacados.' });
      return;
    }
    this.isSavingSettings.set(true);
    this.settingsMessage.set(null);
    this.pixService.update(this.pixEnabled(), min, this.cardEnabled(), cardMin).subscribe({
      next: (settings) => {
        this.isSavingSettings.set(false);
        this.applySettings(settings);
        const active = [settings.pixEnabled ? 'Pix' : null, settings.cardEnabled ? 'cartão de crédito' : null].filter(Boolean);
        this.settingsMessage.set({
          type: 'ok',
          text: active.length
            ? `Ativo na comanda: ${active.join(' e ')}. Os clientes já veem a opção no cardápio.`
            : 'Configuração salva. Pagamento pelo cardápio desativado.'
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

  discardSettings(): void {
    const s = this.settings();
    if (s) {
      this.applySettings(s);
    }
    this.settingsMessage.set(null);
  }

  shiftReportDate(days: number): void {
    const [year, month, day] = this.reportDate().split('-').map(Number);
    const shifted = new Date(Date.UTC(year, month - 1, day + days));
    this.changeReportDate(shifted.toISOString().slice(0, 10));
  }

  changeReportDate(value: string): void {
    if (!value) {
      return;
    }
    if (value > this.today) {
      value = this.today;
    }
    this.reportDate.set(value);
    this.loadReport();
  }

  private applySettings(settings: ComandaPixSettings): void {
    this.settings.set(settings);
    this.pixEnabled.set(settings.pixEnabled);
    this.minPixAmount.set(settings.minPixAmount);
    this.cardEnabled.set(settings.cardEnabled);
    this.minCardAmount.set(settings.minCardAmount);
  }

  private minError(value: number | null): string | null {
    const s = this.settings();
    if (!s) {
      return null;
    }
    if (value == null || (value as unknown) === '' || isNaN(Number(value))) {
      return 'Informe o valor mínimo.';
    }
    return Number(value) < s.asaasMinAmount ? `O mínimo aceito pela Asaas é ${this.currency(s.asaasMinAmount)}.` : null;
  }

  private errorText(error: unknown, fallback: string): string {
    const body = error instanceof HttpErrorResponse ? (error.error as { mensagem?: string } | undefined) : undefined;
    return body?.mensagem ?? fallback;
  }
}
