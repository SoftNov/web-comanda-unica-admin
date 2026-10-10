import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import {
  ExtratoMetodo,
  ExtratoResumo,
  ExtratoService,
  ExtratoStatusTaxa,
  ExtratoTransacao
} from '../../../../shared/services/extrato.service';
import { CompanyFeeRuleResponse, PlatformFeeRulesService } from '../../../../shared/services/platform-fee-rules.service';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import { brDateTimeFormat, parseApiDate } from '../../../../shared/utils/datetime.util';

type PeriodPresetId = 'hoje' | 'ontem' | '7d' | '30d' | 'este-mes' | 'mes-anterior' | 'personalizado';

interface PeriodPreset {
  id: PeriodPresetId;
  label: string;
}

const PERIOD_PRESETS: PeriodPreset[] = [
  { id: 'hoje', label: 'Hoje' },
  { id: 'ontem', label: 'Ontem' },
  { id: '7d', label: 'Últimos 7 dias' },
  { id: '30d', label: 'Últimos 30 dias' },
  { id: 'este-mes', label: 'Este mês' },
  { id: 'mes-anterior', label: 'Mês anterior' }
];

const METHOD_OPTIONS: { value: ExtratoMetodo | ''; label: string }[] = [
  { value: '', label: 'Todos' },
  { value: 'CASH_REGISTER', label: 'Caixa' },
  { value: 'CASH_WAITER', label: 'Garçom' },
  { value: 'ONLINE', label: 'App (antigo)' }
];

const METHOD_LABELS: Record<ExtratoMetodo, string> = {
  CASH_REGISTER: 'Caixa',
  CASH_WAITER: 'Garçom',
  ONLINE: 'App (antigo)'
};

const FEE_STATUS_LABELS: Record<ExtratoStatusTaxa, string> = {
  PENDING: 'A cobrar',
  PROCESSING: 'Em cobrança',
  SETTLED: 'Paga',
  FAILED: 'Recusada',
  CANCELED: 'Cancelada'
};

const PAGE_SIZE = 20;

// Extrato financeiro do estabelecimento, só com o que está registrado na base da Comanda Única:
// pagamentos das comandas (caixa/garçom) e a taxa da plataforma sobre cada um.
@Component({
  selector: 'app-extrato-financeiro',
  standalone: true,
  imports: [RippleDirective, RouterLink],
  templateUrl: './extrato-financeiro.component.html',
  styleUrl: './extrato-financeiro.component.scss'
})
export class ExtratoFinanceiroComponent {
  private readonly authService = inject(AuthService);
  private readonly extratoService = inject(ExtratoService);
  private readonly platformFeeRulesService = inject(PlatformFeeRulesService);
  private readonly currencyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  private readonly dateTimeFormatter = brDateTimeFormat({ dateStyle: 'short', timeStyle: 'short' });

  readonly isPlatformAdmin = this.authService.isPlatformAdmin;
  readonly myCompanies = this.authService.companies;
  readonly periodPresets = PERIOD_PRESETS;
  readonly methodOptions = METHOD_OPTIONS;

  // Empresa consultada — para quem não é platform admin, vem das próprias empresas (session);
  // platform admin busca entre todos os estabelecimentos (ver PlatformFeeRulesService).
  readonly selectedCompanyId = signal<string | null>(this.authService.selectedCompany()?.companyId ?? null);
  readonly selectedCompanyName = signal<string | null>(this.authService.selectedCompany()?.companyName ?? null);
  readonly hasCompany = computed(() => !!this.selectedCompanyId());

  readonly companySearchTerm = signal('');
  readonly companySearchResults = signal<CompanyFeeRuleResponse[]>([]);
  readonly isSearchingCompanies = signal(false);

  readonly activePresetId = signal<PeriodPresetId>('30d');
  readonly startDate = signal(this.toIsoDate(this.daysAgo(29)));
  readonly endDate = signal(this.toIsoDate(new Date()));
  readonly methodFilter = signal<ExtratoMetodo | ''>('');

  readonly resumo = signal<ExtratoResumo | null>(null);
  readonly transacoes = signal<ExtratoTransacao[]>([]);
  readonly page = signal(0);
  readonly hasMore = signal(false);
  readonly isLoading = signal(false);
  readonly isLoadingMore = signal(false);
  readonly loadError = signal<string | null>(null);

  readonly isExporting = signal(false);
  readonly exportError = signal<string | null>(null);

  constructor() {
    this.resetAndLoad();
  }

  formatCurrency(value: number | null | undefined): string {
    return value != null ? this.currencyFormatter.format(value) : '—';
  }

  formatDateTime(value: string | null | undefined): string {
    const parsed = parseApiDate(value ?? null);
    return parsed ? this.dateTimeFormatter.format(parsed) : '—';
  }

  methodLabel(method: ExtratoMetodo): string {
    return METHOD_LABELS[method] ?? method;
  }

  feeStatusLabel(status: ExtratoStatusTaxa | null): string {
    return status ? (FEE_STATUS_LABELS[status] ?? status) : '—';
  }

  tableLabel(transacao: ExtratoTransacao): string {
    if (transacao.mesaNome) {
      return transacao.mesaNome;
    }
    return transacao.mesaNumero != null ? `Mesa ${transacao.mesaNumero}` : '—';
  }

  // --- Empresa ---------------------------------------------------------------

  onMyCompanyChange(companyId: string): void {
    const company = this.myCompanies().find((c) => c.companyId === companyId);
    this.selectedCompanyId.set(companyId);
    this.selectedCompanyName.set(company?.companyName ?? null);
    this.resetAndLoad();
  }

  onCompanySearchTermChange(value: string): void {
    this.companySearchTerm.set(value);
  }

  searchCompanies(): void {
    const term = this.companySearchTerm().trim();
    if (!term) {
      this.companySearchResults.set([]);
      return;
    }
    this.isSearchingCompanies.set(true);
    this.platformFeeRulesService.listCompanies({ search: term, size: 10 }).subscribe({
      next: (page) => {
        this.companySearchResults.set(page.content);
        this.isSearchingCompanies.set(false);
      },
      error: () => {
        this.companySearchResults.set([]);
        this.isSearchingCompanies.set(false);
      }
    });
  }

  selectCompanyFromSearch(company: CompanyFeeRuleResponse): void {
    this.selectedCompanyId.set(company.companyId);
    this.selectedCompanyName.set(company.companyName);
    this.companySearchResults.set([]);
    this.companySearchTerm.set('');
    this.resetAndLoad();
  }

  // --- Filtros ---------------------------------------------------------------

  applyPreset(presetId: PeriodPresetId): void {
    this.activePresetId.set(presetId);
    const today = new Date();
    switch (presetId) {
      case 'hoje':
        this.startDate.set(this.toIsoDate(today));
        this.endDate.set(this.toIsoDate(today));
        break;
      case 'ontem': {
        const yesterday = this.daysAgo(1);
        this.startDate.set(this.toIsoDate(yesterday));
        this.endDate.set(this.toIsoDate(yesterday));
        break;
      }
      case '7d':
        this.startDate.set(this.toIsoDate(this.daysAgo(6)));
        this.endDate.set(this.toIsoDate(today));
        break;
      case '30d':
        this.startDate.set(this.toIsoDate(this.daysAgo(29)));
        this.endDate.set(this.toIsoDate(today));
        break;
      case 'este-mes':
        this.startDate.set(this.toIsoDate(new Date(today.getFullYear(), today.getMonth(), 1)));
        this.endDate.set(this.toIsoDate(today));
        break;
      case 'mes-anterior': {
        const firstDayLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        const lastDayLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        this.startDate.set(this.toIsoDate(firstDayLastMonth));
        this.endDate.set(this.toIsoDate(lastDayLastMonth));
        break;
      }
    }
    this.resetAndLoad();
  }

  onCustomStartDateChange(value: string): void {
    this.activePresetId.set('personalizado');
    this.startDate.set(value);
    this.resetAndLoad();
  }

  onCustomEndDateChange(value: string): void {
    this.activePresetId.set('personalizado');
    this.endDate.set(value);
    this.resetAndLoad();
  }

  onMethodFilterChange(value: string): void {
    this.methodFilter.set(value as ExtratoMetodo | '');
    this.resetAndLoad();
  }

  refresh(): void {
    this.resetAndLoad();
  }

  loadMore(): void {
    this.load(this.page() + 1, true);
  }

  exportCsv(): void {
    const companyId = this.selectedCompanyId();
    if (!companyId) {
      return;
    }
    this.isExporting.set(true);
    this.exportError.set(null);
    this.extratoService.exportCsv(companyId, {
      startDate: this.startDate(),
      endDate: this.endDate(),
      method: this.methodFilter() || null
    }).subscribe({
      next: (blob) => {
        this.isExporting.set(false);
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `extrato-${this.startDate()}-a-${this.endDate()}.csv`;
        link.click();
        URL.revokeObjectURL(url);
      },
      error: () => {
        this.isExporting.set(false);
        this.exportError.set('Não foi possível exportar o extrato agora. Tente novamente em instantes.');
      }
    });
  }

  // --- Carregamento -------------------------------------------------------------

  private resetAndLoad(): void {
    this.transacoes.set([]);
    this.resumo.set(null);
    this.load(0, false);
  }

  private load(page: number, append: boolean): void {
    const companyId = this.selectedCompanyId();
    if (!companyId) {
      return;
    }
    if (append) {
      this.isLoadingMore.set(true);
    } else {
      this.isLoading.set(true);
    }
    this.loadError.set(null);

    this.extratoService.getExtrato(companyId, {
      startDate: this.startDate(),
      endDate: this.endDate(),
      method: this.methodFilter() || null,
      page,
      size: PAGE_SIZE
    }).subscribe({
      next: (response) => {
        this.resumo.set(response.resumo);
        this.transacoes.update((current) => (append ? [...current, ...response.transacoes.content] : response.transacoes.content));
        this.page.set(response.transacoes.page);
        this.hasMore.set(!response.transacoes.last);
        this.isLoading.set(false);
        this.isLoadingMore.set(false);
      },
      error: () => {
        this.loadError.set('Não foi possível carregar o extrato do período selecionado.');
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
