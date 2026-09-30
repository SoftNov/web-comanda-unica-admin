import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import {
  ConsumptionPassEventResponse,
  ConsumptionPassEventType,
  ConsumptionPassesService,
  ConsumptionPassResponse,
  ConsumptionPassSettingsResponse,
  ConsumptionPassStatus
} from '../../../../shared/services/consumption-passes.service';
import { ApiErrorResponse } from '../../../../shared/services/reservations.service';
import { autoDismiss } from '../../../../shared/utils/auto-dismiss.util';
import { brDateTimeFormat, parseApiDate } from '../../../../shared/utils/datetime.util';

const PAGE_SIZE = 20;

const STATUS_LABELS: Record<ConsumptionPassStatus, string> = {
  AVAILABLE: 'Disponível',
  IN_USE: 'Em uso',
  BLOCKED: 'Bloqueado',
  EXPIRED: 'Expirado'
};

const EVENT_LABELS: Record<ConsumptionPassEventType, string> = {
  GENERATED: 'Passe gerado',
  LINKED: 'Vinculado à mesa',
  LINK_REJECTED: 'Vínculo recusado',
  TABLE_CHANGED: 'Troca de mesa',
  PAYMENT: 'Pagamento',
  EXIT_ALLOWED: 'Saída validada',
  EXIT_DENIED: 'Saída bloqueada',
  RELEASED: 'Saída liberada',
  BLOCKED: 'Bloqueado',
  UNBLOCKED: 'Reativado'
};

// Gestão dos Passes de Consumo (cartões com QR Code): exigência no cardápio digital, geração em
// lote, impressão, bloqueio/reativação e histórico de cada cartão. A liberação de saída fica na
// tela "Controle de Saída".
@Component({
  selector: 'app-admin-passes-consumo',
  standalone: true,
  imports: [FormsModule, RippleDirective, RouterLink],
  templateUrl: './passes-consumo.component.html',
  styleUrl: './passes-consumo.component.scss'
})
export class PassesConsumoComponent implements OnInit, OnDestroy {
  private readonly passesService = inject(ConsumptionPassesService);

  private readonly dateTimeFormatter = brDateTimeFormat({ day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
  private readonly currencyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

  readonly statusOptions: { value: ConsumptionPassStatus | ''; label: string }[] = [
    { value: '', label: 'Todos os status' },
    { value: 'AVAILABLE', label: STATUS_LABELS.AVAILABLE },
    { value: 'IN_USE', label: STATUS_LABELS.IN_USE },
    { value: 'BLOCKED', label: STATUS_LABELS.BLOCKED },
    { value: 'EXPIRED', label: STATUS_LABELS.EXPIRED }
  ];

  // --- Configuração -------------------------------------------------------------
  readonly settings = signal<ConsumptionPassSettingsResponse | null>(null);
  readonly isSavingSettings = signal(false);

  // --- Lista --------------------------------------------------------------------
  readonly passes = signal<ConsumptionPassResponse[]>([]);
  readonly isLoading = signal(true);
  readonly listError = signal<string | null>(null);
  readonly actionError = signal<string | null>(null);
  readonly actionSuccess = signal<string | null>(null);
  readonly page = signal(0);
  readonly totalPages = signal(1);
  readonly totalElements = signal(0);

  // Filtros — aplicados ao clicar "Buscar" (não a cada tecla).
  readonly filterStatus = signal<ConsumptionPassStatus | ''>('');
  readonly filterSearch = signal('');

  // Seleção para impressão — ids de qualquer página (a seleção sobrevive à paginação).
  readonly selectedIds = signal<Set<string>>(new Set());
  readonly allOnPageSelected = computed(() => {
    const ids = this.selectedIds();
    const page = this.passes();
    return page.length > 0 && page.every((pass) => ids.has(pass.id));
  });
  readonly isPrinting = signal(false);
  readonly isDownloadingAll = signal(false);

  // --- Gerar --------------------------------------------------------------------
  readonly showGenerate = signal(false);
  readonly generateQuantity = signal(20);
  readonly isGenerating = signal(false);
  readonly generateError = signal<string | null>(null);

  // --- QR -----------------------------------------------------------------------
  readonly qrPass = signal<ConsumptionPassResponse | null>(null);
  readonly qrImageUrl = signal<string | null>(null);

  // --- Bloquear -----------------------------------------------------------------
  readonly blockPass = signal<ConsumptionPassResponse | null>(null);
  readonly blockReason = signal('');
  readonly isBlocking = signal(false);

  // --- Histórico ----------------------------------------------------------------
  readonly historyPass = signal<ConsumptionPassResponse | null>(null);
  readonly historyEvents = signal<ConsumptionPassEventResponse[]>([]);
  readonly historyLoading = signal(false);
  readonly historyError = signal<string | null>(null);

  ngOnInit(): void {
    this.loadSettings();
    this.load(0);
  }

  ngOnDestroy(): void {
    this.revokeQrUrl();
  }

  // --- Configuração -------------------------------------------------------------
  loadSettings(): void {
    this.passesService.getSettings().subscribe({
      next: (settings) => this.settings.set(settings),
      error: () => this.settings.set(null)
    });
  }

  toggleRequired(required: boolean, checkbox?: HTMLInputElement): void {
    const current = this.settings();
    if (required && current && current.availableCount === 0) {
      if (checkbox) {
        checkbox.checked = false;
      }
      this.flashError('Gere os cartões antes de ativar — sem cartões disponíveis, nenhum cliente conseguiria pedir pelo cardápio.');
      return;
    }
    if (!required && !confirm('Desativar o cartão de consumo? Os clientes voltam a pedir direto na comanda da mesa, sem cartão.')) {
      if (checkbox) {
        checkbox.checked = true;
      }
      return;
    }
    this.isSavingSettings.set(true);
    this.actionError.set(null);
    this.passesService.updateSettings(required).subscribe({
      next: (settings) => {
        this.isSavingSettings.set(false);
        this.settings.set(settings);
        this.flashSuccess(required
          ? 'Cartão de consumo ativado: o cliente agora vincula o cartão para pedir pelo cardápio.'
          : 'Cartão de consumo desativado: o sistema volta a funcionar só com a comanda da mesa.');
      },
      error: (error: HttpErrorResponse) => {
        this.isSavingSettings.set(false);
        this.flashError(this.resolveErrorMessage(error, 'Não foi possível salvar a configuração.'));
        this.loadSettings();
      }
    });
  }

  // --- Lista --------------------------------------------------------------------
  load(page: number = this.page()): void {
    this.isLoading.set(true);
    this.listError.set(null);
    this.passesService
      .list({
        page,
        size: PAGE_SIZE,
        status: this.filterStatus() || undefined,
        search: this.filterSearch().trim() || undefined
      })
      .subscribe({
        next: (result) => {
          this.isLoading.set(false);
          this.passes.set(result.content);
          this.page.set(result.page);
          this.totalPages.set(Math.max(1, result.totalPages));
          this.totalElements.set(result.totalElements);
        },
        error: (error: HttpErrorResponse) => {
          this.isLoading.set(false);
          this.listError.set(this.resolveErrorMessage(error, 'Não foi possível carregar os passes.'));
        }
      });
  }

  applyFilters(): void {
    this.load(0);
  }

  clearFilters(): void {
    this.filterStatus.set('');
    this.filterSearch.set('');
    this.load(0);
  }

  refresh(): void {
    this.loadSettings();
    this.load();
  }

  previousPage(): void {
    if (this.page() > 0) {
      this.load(this.page() - 1);
    }
  }

  nextPage(): void {
    if (this.page() < this.totalPages() - 1) {
      this.load(this.page() + 1);
    }
  }

  // --- Seleção/impressão --------------------------------------------------------
  isSelected(pass: ConsumptionPassResponse): boolean {
    return this.selectedIds().has(pass.id);
  }

  toggleSelected(pass: ConsumptionPassResponse): void {
    this.selectedIds.update((ids) => {
      const next = new Set(ids);
      if (next.has(pass.id)) {
        next.delete(pass.id);
      } else {
        next.add(pass.id);
      }
      return next;
    });
  }

  toggleAllOnPage(): void {
    const selectAll = !this.allOnPageSelected();
    this.selectedIds.update((ids) => {
      const next = new Set(ids);
      this.passes().forEach((pass) => (selectAll ? next.add(pass.id) : next.delete(pass.id)));
      return next;
    });
  }

  clearSelection(): void {
    this.selectedIds.set(new Set());
  }

  printSelected(): void {
    this.print([...this.selectedIds()]);
  }

  // Baixa (não abre) um único PDF com todos os cartões — para mandar para a gráfica de uma vez.
  downloadAll(): void {
    if (this.isDownloadingAll()) {
      return;
    }
    this.isDownloadingAll.set(true);
    this.passesService.printAllPdf().subscribe({
      next: (blob) => {
        this.isDownloadingAll.set(false);
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'cartoes-de-consumo.pdf';
        link.click();
        setTimeout(() => URL.revokeObjectURL(url), 60_000);
      },
      error: (error: HttpErrorResponse) => {
        this.isDownloadingAll.set(false);
        this.flashError(this.resolveBlobErrorMessage(error));
      }
    });
  }

  private print(ids: string[]): void {
    if (!ids.length || this.isPrinting()) {
      return;
    }
    // Abre a aba já no clique (antes da resposta) — senão o navegador trata como pop-up e bloqueia.
    const printWindow = window.open('', '_blank');
    this.isPrinting.set(true);
    this.passesService.printPdf(ids).subscribe({
      next: (blob) => {
        this.isPrinting.set(false);
        const url = URL.createObjectURL(blob);
        if (printWindow) {
          printWindow.location.href = url;
        } else {
          window.open(url, '_blank');
        }
        setTimeout(() => URL.revokeObjectURL(url), 60_000);
      },
      error: (error: HttpErrorResponse) => {
        this.isPrinting.set(false);
        printWindow?.close();
        this.flashError(this.resolveErrorMessage(error, 'Não foi possível gerar o PDF para impressão.'));
      }
    });
  }

  // --- Gerar --------------------------------------------------------------------
  openGenerate(): void {
    this.generateError.set(null);
    this.generateQuantity.set(20);
    this.showGenerate.set(true);
  }

  closeGenerate(): void {
    this.showGenerate.set(false);
  }

  submitGenerate(printAfter: boolean): void {
    const quantity = Math.floor(Number(this.generateQuantity()));
    if (!quantity || quantity < 1 || quantity > 500) {
      this.generateError.set('Informe uma quantidade entre 1 e 500.');
      return;
    }
    this.isGenerating.set(true);
    this.generateError.set(null);
    this.passesService.generate(quantity).subscribe({
      next: (created) => {
        this.isGenerating.set(false);
        this.showGenerate.set(false);
        this.flashSuccess(`${created.length} passe(s) gerado(s): cartões Nº ${created[0]?.number} a ${created[created.length - 1]?.number}.`);
        this.refresh();
        if (printAfter) {
          this.print(created.map((pass) => pass.id));
        }
      },
      error: (error: HttpErrorResponse) => {
        this.isGenerating.set(false);
        this.generateError.set(this.resolveErrorMessage(error, 'Não foi possível gerar os passes.'));
      }
    });
  }

  // --- QR -----------------------------------------------------------------------
  openQr(pass: ConsumptionPassResponse): void {
    this.revokeQrUrl();
    this.qrPass.set(pass);
    this.passesService.getQrCodePng(pass.id).subscribe({
      next: (blob) => this.qrImageUrl.set(URL.createObjectURL(blob)),
      error: () => {
        this.qrPass.set(null);
        this.flashError('Não foi possível carregar o QR Code.');
      }
    });
  }

  closeQr(): void {
    this.qrPass.set(null);
    this.revokeQrUrl();
  }

  printQr(pass: ConsumptionPassResponse): void {
    this.print([pass.id]);
  }

  private revokeQrUrl(): void {
    const url = this.qrImageUrl();
    if (url) {
      URL.revokeObjectURL(url);
    }
    this.qrImageUrl.set(null);
  }

  // --- Bloquear/reativar ------------------------------------------------------------
  openBlock(pass: ConsumptionPassResponse): void {
    this.blockReason.set('');
    this.blockPass.set(pass);
  }

  closeBlock(): void {
    this.blockPass.set(null);
  }

  submitBlock(): void {
    const pass = this.blockPass();
    if (!pass || this.isBlocking()) {
      return;
    }
    this.isBlocking.set(true);
    this.passesService.block(pass.id, this.blockReason().trim()).subscribe({
      next: () => {
        this.isBlocking.set(false);
        this.blockPass.set(null);
        this.flashSuccess(`Cartão Nº ${pass.number} bloqueado.`);
        this.refresh();
      },
      error: (error: HttpErrorResponse) => {
        this.isBlocking.set(false);
        this.blockPass.set(null);
        this.flashError(this.resolveErrorMessage(error, 'Não foi possível bloquear o passe.'));
      }
    });
  }

  unblock(pass: ConsumptionPassResponse): void {
    this.passesService.unblock(pass.id).subscribe({
      next: () => {
        this.flashSuccess(`Cartão Nº ${pass.number} reativado.`);
        this.refresh();
      },
      error: (error: HttpErrorResponse) => this.flashError(this.resolveErrorMessage(error, 'Não foi possível reativar o passe.'))
    });
  }

  // --- Histórico ----------------------------------------------------------------
  openHistory(pass: ConsumptionPassResponse): void {
    this.historyPass.set(pass);
    this.historyEvents.set([]);
    this.historyError.set(null);
    this.historyLoading.set(true);
    this.passesService.events(pass.id).subscribe({
      next: (events) => {
        this.historyLoading.set(false);
        this.historyEvents.set(events);
      },
      error: (error: HttpErrorResponse) => {
        this.historyLoading.set(false);
        this.historyError.set(this.resolveErrorMessage(error, 'Não foi possível carregar o histórico.'));
      }
    });
  }

  closeHistory(): void {
    this.historyPass.set(null);
  }

  // --- Formatação ---------------------------------------------------------------
  statusLabel(status: ConsumptionPassStatus): string {
    return STATUS_LABELS[status];
  }

  eventLabel(type: ConsumptionPassEventType): string {
    return EVENT_LABELS[type];
  }

  eventTone(type: ConsumptionPassEventType): string {
    switch (type) {
      case 'RELEASED':
      case 'EXIT_ALLOWED':
      case 'PAYMENT':
      case 'UNBLOCKED':
        return 'success';
      case 'LINK_REJECTED':
      case 'EXIT_DENIED':
      case 'BLOCKED':
        return 'danger';
      case 'LINKED':
      case 'TABLE_CHANGED':
        return 'warning';
      default:
        return 'muted';
    }
  }

  formatDateTime(value: string | null | undefined): string {
    const date = parseApiDate(value);
    return date ? this.dateTimeFormatter.format(date) : '—';
  }

  formatCurrency(value: number | null | undefined): string {
    return value == null ? '—' : this.currencyFormatter.format(value);
  }

  tableLabel(tableNumber?: number, tableName?: string): string {
    if (tableNumber == null) {
      return '—';
    }
    return `Mesa ${tableNumber}${tableName ? ' — ' + tableName : ''}`;
  }

  private flashSuccess(message: string): void {
    this.actionError.set(null);
    this.actionSuccess.set(message);
    autoDismiss(this.actionSuccess, null);
  }

  private flashError(message: string): void {
    this.actionSuccess.set(null);
    this.actionError.set(message);
    autoDismiss(this.actionError, null);
  }

  // Com responseType 'blob', o corpo de erro da API também chega como Blob (não como JSON) — sem
  // como ler a mensagem de forma síncrona, usa o texto padrão por status.
  private resolveBlobErrorMessage(error: HttpErrorResponse): string {
    if (error.status === 422) {
      return 'Não há cartões para baixar, ou são mais de 5.000 — nesse caso, selecione e imprima em partes.';
    }
    if (error.status === 403) {
      return 'Seu perfil não tem permissão para esta ação.';
    }
    return 'Não foi possível gerar o PDF com todos os cartões.';
  }

  private resolveErrorMessage(error: HttpErrorResponse, fallback: string): string {
    const body = error.error as ApiErrorResponse | undefined;
    if (error.status === 403 && !body?.mensagem) {
      return 'Seu perfil não tem permissão para esta ação.';
    }
    return body?.mensagem || body?.titulo || fallback;
  }
}
