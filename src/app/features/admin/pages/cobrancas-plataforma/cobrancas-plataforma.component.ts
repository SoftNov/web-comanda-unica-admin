import { Component, computed, inject, signal } from '@angular/core';
import { LineChartComponent, LineChartPoint } from '../../../../shared/components/line-chart/line-chart.component';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import { PlatformFinanceService, PlatformFinanceSummary } from '../../../../shared/services/platform-finance.service';
import { PlatformChargeStatusFilter, PlatformExtratoService } from '../../../../shared/services/platform-extrato.service';
import { PlatformCharge } from '../../../../shared/services/subscription.service';
import { brDateTimeFormat, parseApiDate } from '../../../../shared/utils/datetime.util';

const PAGE_SIZE = 20;

const STATUS_OPTIONS: { value: PlatformChargeStatusFilter | ''; label: string }[] = [
  { value: '', label: 'Todas' },
  { value: 'PAID', label: 'Pagas' },
  { value: 'OPEN', label: 'Em aberto' },
  { value: 'FAILED', label: 'Recusadas / estornadas' }
];

// Painel da plataforma (platform admin): taxas geradas sobre os pagamentos das comandas e as
// cobranças da Comanda Única na Asaas (mensalidades e taxas semanais) — só com o que está
// registrado na base.
@Component({
  selector: 'app-admin-cobrancas-plataforma',
  standalone: true,
  imports: [LineChartComponent, RippleDirective],
  templateUrl: './cobrancas-plataforma.component.html',
  styleUrl: './cobrancas-plataforma.component.scss'
})
export class CobrancasPlataformaComponent {
  private readonly financeService = inject(PlatformFinanceService);
  private readonly extratoService = inject(PlatformExtratoService);
  private readonly currencyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  private readonly dateTimeFormatter = brDateTimeFormat({ dateStyle: 'short', timeStyle: 'short' });

  readonly statusOptions = STATUS_OPTIONS;

  readonly startDate = signal(this.toIsoDate(this.daysAgo(29)));
  readonly endDate = signal(this.toIsoDate(new Date()));
  readonly statusFilter = signal<PlatformChargeStatusFilter | ''>('');

  readonly summary = signal<PlatformFinanceSummary | null>(null);
  readonly summaryError = signal(false);
  readonly feePoints = computed<LineChartPoint[]>(() =>
    (this.summary()?.feeSeries ?? []).map((point) => ({ date: point.date, amount: point.amount }))
  );

  readonly charges = signal<PlatformCharge[]>([]);
  readonly page = signal(0);
  readonly hasMore = signal(false);
  readonly isLoading = signal(false);
  readonly isLoadingMore = signal(false);
  readonly loadError = signal<string | null>(null);
  readonly isExporting = signal(false);

  constructor() {
    this.reload();
  }

  formatCurrency(value: number | null | undefined): string {
    return value != null ? this.currencyFormatter.format(value) : '—';
  }

  formatDateTime(value: string | null | undefined): string {
    const parsed = parseApiDate(value ?? null);
    return parsed ? this.dateTimeFormatter.format(parsed) : '—';
  }

  kindLabel(charge: PlatformCharge): string {
    return charge.kind === 'SUBSCRIPTION' ? 'Mensalidade' : 'Taxas';
  }

  statusLabel(charge: PlatformCharge): string {
    if (charge.paid) {
      return 'Paga';
    }
    switch (charge.status) {
      case 'PENDING':
      case 'AWAITING_RISK_ANALYSIS':
        return 'Em aberto';
      case 'OVERDUE':
        return 'Recusada';
      case 'REFUNDED':
      case 'REFUND_REQUESTED':
        return 'Estornada';
      default:
        return charge.status;
    }
  }

  onStartDateChange(value: string): void {
    this.startDate.set(value);
    this.reload();
  }

  onEndDateChange(value: string): void {
    this.endDate.set(value);
    this.reload();
  }

  onStatusFilterChange(value: string): void {
    this.statusFilter.set(value as PlatformChargeStatusFilter | '');
    this.loadCharges(0, false);
  }

  reload(): void {
    this.loadSummary();
    this.loadCharges(0, false);
  }

  loadMore(): void {
    this.loadCharges(this.page() + 1, true);
  }

  exportCsv(): void {
    this.isExporting.set(true);
    this.extratoService.exportCsv({
      startDate: this.startDate(),
      endDate: this.endDate(),
      status: this.statusFilter() || null
    }).subscribe({
      next: (blob) => {
        this.isExporting.set(false);
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `cobrancas-plataforma-${this.startDate()}-a-${this.endDate()}.csv`;
        link.click();
        URL.revokeObjectURL(url);
      },
      error: () => this.isExporting.set(false)
    });
  }

  private loadSummary(): void {
    this.summaryError.set(false);
    this.financeService.getSummary(this.startDate(), this.endDate()).subscribe({
      next: (summary) => this.summary.set(summary),
      error: () => {
        this.summary.set(null);
        this.summaryError.set(true);
      }
    });
  }

  private loadCharges(page: number, append: boolean): void {
    if (append) {
      this.isLoadingMore.set(true);
    } else {
      this.isLoading.set(true);
    }
    this.loadError.set(null);
    this.extratoService.getCharges({
      startDate: this.startDate(),
      endDate: this.endDate(),
      status: this.statusFilter() || null,
      page,
      size: PAGE_SIZE
    }).subscribe({
      next: (result) => {
        this.charges.update((current) => (append ? [...current, ...result.content] : result.content));
        this.page.set(result.page);
        this.hasMore.set(!result.last);
        this.isLoading.set(false);
        this.isLoadingMore.set(false);
      },
      error: () => {
        this.loadError.set('Não foi possível carregar as cobranças do período selecionado.');
        this.isLoading.set(false);
        this.isLoadingMore.set(false);
      }
    });
  }

  private daysAgo(days: number): Date {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return date;
  }

  private toIsoDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
