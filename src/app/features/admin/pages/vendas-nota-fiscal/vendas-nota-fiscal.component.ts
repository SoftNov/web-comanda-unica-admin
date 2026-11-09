import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { CompanyFeeRuleResponse, PlatformFeeRulesService } from '../../../../shared/services/platform-fee-rules.service';
import {
  AvisoFiscal,
  EmitenteFiscal,
  FormatoExportacaoFiscal,
  PagamentoFiscal,
  ResumoFiscal,
  VendaFiscal,
  VendasNotaFiscalService
} from '../../../../shared/services/vendas-nota-fiscal.service';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import { brDateTimeFormat, parseApiDate } from '../../../../shared/utils/datetime.util';

type PeriodPresetId = 'hoje' | 'ontem' | '7d' | '30d' | 'este-mes' | 'mes-anterior' | 'personalizado';

const PERIOD_PRESETS: { id: PeriodPresetId; label: string }[] = [
  { id: 'hoje', label: 'Hoje' },
  { id: 'ontem', label: 'Ontem' },
  { id: '7d', label: '7 dias' },
  { id: '30d', label: '30 dias' },
  { id: 'este-mes', label: 'Este mês' },
  { id: 'mes-anterior', label: 'Mês anterior' }
];

// Ícone por aviso geral (código vindo do backend); o resto cai no ícone padrão.
const AVISO_ICONS: Record<string, string> = {
  PRODUTO_SEM_DADOS_FISCAIS: 'inventory_2',
  EMITENTE_INCOMPLETO: 'storefront',
  FORMA_A_CONFIRMAR: 'point_of_sale'
};

const CRT_LABELS: Record<string, string> = {
  '1': 'Simples Nacional',
  '2': 'Simples (excesso de sublimite)',
  '3': 'Regime normal',
  '4': 'MEI'
};

const PAGE_SIZE = 20;

// Vendas do período no formato da NFC-e, para o contador emitir as notas fora da Comanda Única
// e, mais tarde, para uma integração com API de nota fiscal (o JSON exportado já segue o layout).
@Component({
  selector: 'app-vendas-nota-fiscal',
  standalone: true,
  imports: [RippleDirective, RouterLink],
  templateUrl: './vendas-nota-fiscal.component.html',
  styleUrl: './vendas-nota-fiscal.component.scss'
})
export class VendasNotaFiscalComponent {
  private readonly authService = inject(AuthService);
  private readonly vendasService = inject(VendasNotaFiscalService);
  private readonly platformFeeRulesService = inject(PlatformFeeRulesService);
  private readonly currencyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  private readonly numberFormatter = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 3 });
  private readonly dateTimeFormatter = brDateTimeFormat({ dateStyle: 'short', timeStyle: 'short' });

  readonly isPlatformAdmin = this.authService.isPlatformAdmin;
  readonly myCompanies = this.authService.companies;
  readonly periodPresets = PERIOD_PRESETS;
  readonly skeletonRows = [1, 2, 3, 4, 5];

  readonly selectedCompanyId = signal<string | null>(this.authService.selectedCompany()?.companyId ?? null);
  readonly selectedCompanyName = signal<string | null>(this.authService.selectedCompany()?.companyName ?? null);
  readonly hasCompany = computed(() => !!this.selectedCompanyId());

  readonly companySearchTerm = signal('');
  readonly companySearchResults = signal<CompanyFeeRuleResponse[]>([]);
  readonly isSearchingCompanies = signal(false);

  readonly activePresetId = signal<PeriodPresetId>('30d');
  readonly startDate = signal(this.toIsoDate(this.daysAgo(29)));
  readonly endDate = signal(this.toIsoDate(new Date()));
  readonly today = this.toIsoDate(new Date());

  readonly emitente = signal<EmitenteFiscal | null>(null);
  readonly resumo = signal<ResumoFiscal | null>(null);
  readonly avisos = signal<AvisoFiscal[]>([]);
  readonly vendas = signal<VendaFiscal[]>([]);
  readonly totalVendas = signal(0);
  readonly page = signal(0);
  readonly hasMore = signal(false);
  readonly isLoading = signal(false);
  readonly isLoadingMore = signal(false);
  readonly loadError = signal<string | null>(null);

  readonly expandedId = signal<string | null>(null);
  readonly onlyPending = signal(false);
  readonly showAvisos = signal(true);
  readonly copiedId = signal<string | null>(null);

  readonly exportingFormat = signal<FormatoExportacaoFiscal | null>(null);
  readonly exportError = signal<string | null>(null);

  readonly pendingLoaded = computed(() => this.vendas().filter((venda) => venda.pendencias.length > 0).length);
  readonly visibleVendas = computed(() =>
    this.onlyPending() ? this.vendas().filter((venda) => venda.pendencias.length > 0) : this.vendas()
  );
  readonly hasSales = computed(() => (this.resumo()?.quantidadeVendas ?? 0) > 0);

  constructor() {
    this.resetAndLoad();
  }

  // --- Formatação -------------------------------------------------------------

  formatCurrency(value: number | null | undefined): string {
    return value != null ? this.currencyFormatter.format(value) : '—';
  }

  formatNumber(value: number | null | undefined): string {
    return value != null ? this.numberFormatter.format(value) : '—';
  }

  formatDateTime(value: string | null | undefined): string {
    const parsed = parseApiDate(value ?? null);
    return parsed ? this.dateTimeFormatter.format(parsed) : '—';
  }

  formatCnpj(cnpj: string | null | undefined): string {
    const digits = (cnpj ?? '').replace(/\D/g, '');
    return digits.length === 14
      ? digits.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5')
      : cnpj || '—';
  }

  formatCep(cep: string | null | undefined): string {
    const digits = (cep ?? '').replace(/\D/g, '');
    return digits.length === 8 ? `${digits.slice(0, 5)}-${digits.slice(5)}` : cep || '';
  }

  regimeLabel(crt: string | null): string {
    return crt ? (CRT_LABELS[crt] ?? crt) : 'Não informado';
  }

  formatNcm(ncm: string | null): string {
    return ncm && ncm.length === 8 ? `${ncm.slice(0, 4)}.${ncm.slice(4, 6)}.${ncm.slice(6)}` : ncm || '—';
  }

  formatDocument(documento: string): string {
    const d = documento.replace(/\D/g, '');
    return d.length === 14
      ? d.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5')
      : d.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
  }

  // Avisos resolvidos em Dados Fiscais ganham o atalho para lá.
  avisoLinksToSettings(aviso: AvisoFiscal): boolean {
    return aviso.codigo === 'EMITENTE_INCOMPLETO' || aviso.codigo === 'PRODUTO_SEM_DADOS_FISCAIS';
  }

  avisoIcon(aviso: AvisoFiscal): string {
    return AVISO_ICONS[aviso.codigo] ?? 'info';
  }

  itemCount(venda: VendaFiscal): number {
    return venda.itens.reduce((total, item) => total + item.quantidade, 0);
  }

  paymentIcon(pagamento: Pick<PagamentoFiscal, 'origem'>): string {
    switch (pagamento.origem) {
      case 'PIX_COMANDA':
        return 'qr_code_2';
      case 'CARD_COMANDA':
        return 'credit_card';
      case 'CASH_WAITER':
        return 'room_service';
      default:
        return 'point_of_sale';
    }
  }

  // Formas distintas da venda, para o resumo da linha (a mesma forma pode aparecer em vários
  // pagamentos parciais).
  paymentSummary(venda: VendaFiscal): PagamentoFiscal[] {
    const seen = new Set<string>();
    return venda.pagamentos.filter((pagamento) => {
      if (seen.has(pagamento.origem)) {
        return false;
      }
      seen.add(pagamento.origem);
      return true;
    });
  }

  shortReference(referencia: string): string {
    return referencia.slice(0, 8).toUpperCase();
  }

  // --- Interação ----------------------------------------------------------------

  toggleExpanded(venda: VendaFiscal): void {
    this.expandedId.update((current) => (current === venda.referencia ? null : venda.referencia));
  }

  toggleOnlyPending(): void {
    this.onlyPending.update((value) => !value);
  }

  toggleAvisos(): void {
    this.showAvisos.update((value) => !value);
  }

  async copyReference(venda: VendaFiscal, event: Event): Promise<void> {
    event.stopPropagation();
    try {
      await navigator.clipboard.writeText(venda.referencia);
      this.copiedId.set(venda.referencia);
      setTimeout(() => this.copiedId.update((id) => (id === venda.referencia ? null : id)), 1800);
    } catch {
      // Sem permissão de área de transferência — a referência continua visível no detalhe.
    }
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

  // --- Período -----------------------------------------------------------------

  applyPreset(presetId: PeriodPresetId): void {
    this.activePresetId.set(presetId);
    const today = new Date();
    switch (presetId) {
      case 'hoje':
        this.setRange(today, today);
        break;
      case 'ontem':
        this.setRange(this.daysAgo(1), this.daysAgo(1));
        break;
      case '7d':
        this.setRange(this.daysAgo(6), today);
        break;
      case '30d':
        this.setRange(this.daysAgo(29), today);
        break;
      case 'este-mes':
        this.setRange(new Date(today.getFullYear(), today.getMonth(), 1), today);
        break;
      case 'mes-anterior':
        this.setRange(new Date(today.getFullYear(), today.getMonth() - 1, 1), new Date(today.getFullYear(), today.getMonth(), 0));
        break;
    }
    this.resetAndLoad();
  }

  onCustomStartDateChange(value: string): void {
    if (!value) return;
    this.activePresetId.set('personalizado');
    this.startDate.set(value);
    this.resetAndLoad();
  }

  onCustomEndDateChange(value: string): void {
    if (!value) return;
    this.activePresetId.set('personalizado');
    this.endDate.set(value);
    this.resetAndLoad();
  }

  refresh(): void {
    this.resetAndLoad();
  }

  loadMore(): void {
    this.load(this.page() + 1, true);
  }

  // --- Exportação ----------------------------------------------------------------

  export(formato: FormatoExportacaoFiscal): void {
    const companyId = this.selectedCompanyId();
    if (!companyId || this.exportingFormat()) {
      return;
    }
    this.exportingFormat.set(formato);
    this.exportError.set(null);
    this.vendasService.export(companyId, formato, { startDate: this.startDate(), endDate: this.endDate() }).subscribe({
      next: (blob) => {
        this.exportingFormat.set(null);
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `vendas-nota-fiscal-${this.startDate()}-a-${this.endDate()}.${formato}`;
        link.click();
        URL.revokeObjectURL(url);
      },
      error: () => {
        this.exportingFormat.set(null);
        this.exportError.set('Não foi possível gerar o arquivo agora. Tente novamente em instantes.');
      }
    });
  }

  // --- Carregamento ---------------------------------------------------------------

  private resetAndLoad(): void {
    this.vendas.set([]);
    this.resumo.set(null);
    this.expandedId.set(null);
    this.load(0, false);
  }

  private load(page: number, append: boolean): void {
    const companyId = this.selectedCompanyId();
    if (!companyId) {
      return;
    }
    (append ? this.isLoadingMore : this.isLoading).set(true);
    this.loadError.set(null);

    this.vendasService.list(companyId, { startDate: this.startDate(), endDate: this.endDate(), page, size: PAGE_SIZE }).subscribe({
      next: (response) => {
        this.emitente.set(response.emitente);
        this.resumo.set(response.resumo);
        this.avisos.set(response.avisos);
        this.vendas.update((current) => (append ? [...current, ...response.vendas.content] : response.vendas.content));
        this.totalVendas.set(response.vendas.totalElements);
        this.page.set(response.vendas.page);
        this.hasMore.set(!response.vendas.last);
        this.isLoading.set(false);
        this.isLoadingMore.set(false);
      },
      error: () => {
        this.loadError.set('Não foi possível carregar as vendas do período selecionado.');
        this.isLoading.set(false);
        this.isLoadingMore.set(false);
      }
    });
  }

  private setRange(start: Date, end: Date): void {
    this.startDate.set(this.toIsoDate(start));
    this.endDate.set(this.toIsoDate(end));
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
