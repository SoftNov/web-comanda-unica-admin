import { Component, computed, inject, signal } from '@angular/core';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import {
  CompanySubscriptionSituation,
  PlatformCompanyReport,
  PlatformCompanyReportRow,
  PlatformFinanceService,
  SITUATION_LABELS,
  situationTone
} from '../../../../shared/services/platform-finance.service';
import { brDateTimeFormat, parseApiDate } from '../../../../shared/utils/datetime.util';

type SituationFilter = 'ALL' | 'OPERATING' | CompanySubscriptionSituation | 'INACTIVE';

type SortKey =
  | 'tradeName'
  | 'situation'
  | 'periodEnd'
  | 'tableCount'
  | 'comandaCount'
  | 'averageCustomersPerDay'
  | 'revenue'
  | 'averageTicket'
  | 'pendingFeeAmount';

const SITUATION_FILTERS: { value: SituationFilter; label: string }[] = [
  { value: 'ALL', label: 'Todos' },
  { value: 'OPERATING', label: 'Ativos (pagos + teste)' },
  { value: 'ACTIVE', label: 'Assinatura ativa' },
  { value: 'TRIAL', label: 'Em teste' },
  { value: 'PAST_DUE', label: 'Em atraso' },
  { value: 'INACTIVE', label: 'Inativos' }
];

const OPERATING: CompanySubscriptionSituation[] = ['ACTIVE', 'TRIAL', 'PAST_DUE'];

const PRESETS = [
  { label: '7 dias', days: 7 },
  { label: '30 dias', days: 30 },
  { label: '90 dias', days: 90 }
];

// Relatório de estabelecimentos (platform admin): situação da assinatura, plano, vencimento,
// mesas, média de clientes por dia e faturamento no período — ver
// PlatformFinanceServiceImpl#getCompanyReport no backend.
@Component({
  selector: 'app-admin-relatorio-estabelecimentos',
  standalone: true,
  imports: [RippleDirective],
  templateUrl: './relatorio-estabelecimentos.component.html',
  styleUrl: './relatorio-estabelecimentos.component.scss'
})
export class RelatorioEstabelecimentosComponent {
  private readonly financeService = inject(PlatformFinanceService);
  private readonly currencyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  private readonly decimalFormatter = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 1 });
  private readonly dateFormatter = brDateTimeFormat({ day: '2-digit', month: '2-digit', year: 'numeric' });

  readonly presets = PRESETS;
  readonly situationFilters = SITUATION_FILTERS;
  readonly situationLabels = SITUATION_LABELS;
  readonly situationTone = situationTone;

  readonly startDate = signal(this.toIsoDate(this.daysAgo(29)));
  readonly endDate = signal(this.toIsoDate(new Date()));
  readonly activePresetDays = signal<number | null>(30);
  readonly search = signal('');
  readonly situationFilter = signal<SituationFilter>('ALL');
  readonly sortKey = signal<SortKey>('revenue');
  readonly sortDesc = signal(true);

  readonly report = signal<PlatformCompanyReport | null>(null);
  readonly isLoading = signal(false);
  readonly loadError = signal<string | null>(null);

  readonly rows = computed<PlatformCompanyReportRow[]>(() => {
    const term = this.search().trim().toLocaleLowerCase('pt-BR');
    const digits = term.replace(/\D/g, '');
    const filter = this.situationFilter();
    const key = this.sortKey();
    const direction = this.sortDesc() ? -1 : 1;
    return (this.report()?.companies ?? [])
      .filter((row) => this.matchesSituation(row.situation, filter))
      .filter(
        (row) =>
          !term ||
          row.tradeName?.toLocaleLowerCase('pt-BR').includes(term) ||
          (!!digits && (row.cnpj ?? '').replace(/\D/g, '').includes(digits))
      )
      .sort((a, b) => this.compare(a, b, key) * direction);
  });

  readonly totals = computed(() => {
    const rows = this.rows();
    const revenue = rows.reduce((sum, row) => sum + row.revenue, 0);
    const comandas = rows.reduce((sum, row) => sum + row.comandaCount, 0);
    return {
      count: rows.length,
      operating: rows.filter((row) => OPERATING.includes(row.situation)).length,
      trial: rows.filter((row) => row.situation === 'TRIAL').length,
      tables: rows.reduce((sum, row) => sum + row.tableCount, 0),
      comandas,
      customersPerDay: rows.reduce((sum, row) => sum + row.averageCustomersPerDay, 0),
      revenue,
      averageTicket: comandas > 0 ? revenue / comandas : 0,
      pendingFees: rows.reduce((sum, row) => sum + row.pendingFeeAmount, 0)
    };
  });

  constructor() {
    this.load();
  }

  applyPreset(days: number): void {
    this.activePresetDays.set(days);
    this.startDate.set(this.toIsoDate(this.daysAgo(days - 1)));
    this.endDate.set(this.toIsoDate(new Date()));
    this.load();
  }

  onStartDateChange(value: string): void {
    this.activePresetDays.set(null);
    this.startDate.set(value);
    this.load();
  }

  onEndDateChange(value: string): void {
    this.activePresetDays.set(null);
    this.endDate.set(value);
    this.load();
  }

  onSituationFilterChange(value: string): void {
    this.situationFilter.set(value as SituationFilter);
  }

  sortBy(key: SortKey): void {
    if (this.sortKey() === key) {
      this.sortDesc.update((desc) => !desc);
    } else {
      this.sortKey.set(key);
      this.sortDesc.set(key !== 'tradeName' && key !== 'periodEnd');
    }
  }

  sortIcon(key: SortKey): string {
    if (this.sortKey() !== key) return '';
    return this.sortDesc() ? 'arrow_downward' : 'arrow_upward';
  }

  load(): void {
    this.isLoading.set(true);
    this.loadError.set(null);
    this.financeService.getCompanyReport(this.startDate(), this.endDate()).subscribe({
      next: (report) => {
        this.report.set(report);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
        this.loadError.set('Não foi possível carregar o relatório do período selecionado.');
      }
    });
  }

  formatCurrency(value: number | null | undefined): string {
    return value != null ? this.currencyFormatter.format(value) : '—';
  }

  formatDecimal(value: number | null | undefined): string {
    return value != null ? this.decimalFormatter.format(value) : '—';
  }

  formatDate(value: string | null | undefined): string {
    const date = parseApiDate(value ?? null);
    return date ? this.dateFormatter.format(date) : '—';
  }

  isOverdue(row: PlatformCompanyReportRow): boolean {
    const date = parseApiDate(row.periodEnd);
    return !!date && date.getTime() < Date.now();
  }

  planLabel(row: PlatformCompanyReportRow): string {
    if (row.courtesy) return 'Teste grátis';
    const amount = row.monthlyAmount != null ? `${this.formatCurrency(row.monthlyAmount)}/mês` : null;
    if (row.planTableLimit != null) {
      return amount ? `Até ${row.planTableLimit} mesas · ${amount}` : `Até ${row.planTableLimit} mesas`;
    }
    return amount ?? '—';
  }

  exportCsv(): void {
    const header = [
      'Estabelecimento',
      'CNPJ',
      'Cadastro',
      'Situação',
      'Plano',
      'Vencimento',
      'Não renova',
      'Mesas',
      'Comandas no período',
      'Média de clientes/dia',
      'Faturamento',
      'Ticket médio',
      'Taxas pendentes'
    ];
    const number = (value: number) => value.toFixed(2).replace('.', ',');
    const lines = this.rows().map((row) => [
      row.tradeName,
      row.cnpj ?? '',
      this.formatDate(row.createdAt),
      SITUATION_LABELS[row.situation],
      this.planLabel(row),
      this.formatDate(row.periodEnd),
      row.cancelAtPeriodEnd ? 'Sim' : 'Não',
      String(row.tableCount),
      String(row.comandaCount),
      number(row.averageCustomersPerDay),
      number(row.revenue),
      number(row.averageTicket),
      number(row.pendingFeeAmount)
    ]);
    const csv = [header, ...lines].map((cols) => cols.map((col) => this.csvField(col)).join(';')).join('\n');
    // BOM para o Excel abrir os acentos corretamente.
    const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `relatorio-estabelecimentos-${this.startDate()}-a-${this.endDate()}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }

  private matchesSituation(situation: CompanySubscriptionSituation, filter: SituationFilter): boolean {
    switch (filter) {
      case 'ALL':
        return true;
      case 'OPERATING':
        return OPERATING.includes(situation);
      case 'INACTIVE':
        return !OPERATING.includes(situation);
      default:
        return situation === filter;
    }
  }

  private compare(a: PlatformCompanyReportRow, b: PlatformCompanyReportRow, key: SortKey): number {
    switch (key) {
      case 'tradeName':
        return (a.tradeName ?? '').localeCompare(b.tradeName ?? '', 'pt-BR');
      case 'situation':
        return SITUATION_LABELS[a.situation].localeCompare(SITUATION_LABELS[b.situation], 'pt-BR');
      case 'periodEnd':
        return (parseApiDate(a.periodEnd)?.getTime() ?? Infinity) - (parseApiDate(b.periodEnd)?.getTime() ?? Infinity);
      default:
        return a[key] - b[key];
    }
  }

  private csvField(value: string): string {
    const escaped = value.replace(/"/g, '""');
    return /[;"\n]/.test(escaped) ? `"${escaped}"` : escaped;
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
