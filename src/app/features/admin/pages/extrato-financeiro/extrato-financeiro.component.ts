import { Component, computed, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../../auth/services/auth.service';
import {
  ExtratoComandaUnicaRef,
  ExtratoExportJobResponse,
  ExtratoResumo,
  ExtratoService,
  ExtratoStatusFiltro,
  ExtratoTipo,
  ExtratoTransacao
} from '../../../../shared/services/extrato.service';
import {
  PlatformExtratoDirecao,
  PlatformExtratoResumo,
  PlatformExtratoService,
  PlatformExtratoTransacao
} from '../../../../shared/services/platform-extrato.service';
import { CompanyFeeRuleResponse, PlatformFeeRulesService } from '../../../../shared/services/platform-fee-rules.service';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';

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

const TYPE_OPTIONS: { value: ExtratoTipo | ''; label: string }[] = [
  { value: '', label: 'Todos' },
  { value: 'CHARGE', label: 'Pagamentos (cartão)' },
  { value: 'PAYMENT', label: 'Pagamentos (outros)' },
  { value: 'REFUND', label: 'Estornos' },
  { value: 'PAYMENT_REFUND', label: 'Estornos (outros)' },
  { value: 'PAYOUT', label: 'Payouts' },
  { value: 'STRIPE_FEE', label: 'Taxas' },
  { value: 'TRANSFER', label: 'Transferências' },
  { value: 'APPLICATION_FEE', label: 'Repasses / Taxa Comanda Única' }
];

const STATUS_OPTIONS: { value: ExtratoStatusFiltro | ''; label: string }[] = [
  { value: '', label: 'Todos' },
  { value: 'AVAILABLE', label: 'Disponível' },
  { value: 'PENDING', label: 'Pendente' }
];

const DIRECTION_OPTIONS: { value: PlatformExtratoDirecao | ''; label: string }[] = [
  { value: '', label: 'Todas' },
  { value: 'CREDIT', label: 'Entrada' },
  { value: 'DEBIT', label: 'Saída' }
];

// Pseudo-empresa fixa no seletor, só para platform admin — troca a fonte do extrato para a conta
// Stripe da própria plataforma (ver PlatformExtratoService) em vez da conta de um estabelecimento.
const PLATFORM_ACCOUNT_LABEL = 'Conta Comanda Única (plataforma)';

const TIPO_LABELS: Record<ExtratoTipo, string> = {
  CHARGE: 'Pagamento',
  PAYMENT: 'Pagamento',
  REFUND: 'Estorno',
  PAYMENT_REFUND: 'Estorno',
  PAYOUT: 'Payout',
  TRANSFER: 'Transferência',
  APPLICATION_FEE: 'Taxa Comanda Única',
  APPLICATION_FEE_REFUND: 'Estorno de taxa',
  DISPUTE: 'Disputa',
  ADJUSTMENT: 'Ajuste',
  STRIPE_FEE: 'Taxa Stripe',
  OTHER: 'Outro'
};

const PAGE_SIZE = 20;

@Component({
  selector: 'app-extrato-financeiro',
  standalone: true,
  imports: [RippleDirective],
  templateUrl: './extrato-financeiro.component.html',
  styleUrl: './extrato-financeiro.component.scss'
})
export class ExtratoFinanceiroComponent {
  private readonly authService = inject(AuthService);
  private readonly extratoService = inject(ExtratoService);
  private readonly platformExtratoService = inject(PlatformExtratoService);
  private readonly platformFeeRulesService = inject(PlatformFeeRulesService);
  private readonly currencyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  private readonly dateTimeFormatter = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' });

  readonly isPlatformAdmin = this.authService.isPlatformAdmin;
  readonly myCompanies = this.authService.companies;
  readonly periodPresets = PERIOD_PRESETS;
  readonly typeOptions = TYPE_OPTIONS;
  readonly statusOptions = STATUS_OPTIONS;
  readonly directionOptions = DIRECTION_OPTIONS;
  readonly platformAccountLabel = PLATFORM_ACCOUNT_LABEL;

  // Modo plataforma — só platform admin: troca a fonte do extrato para a conta Stripe da própria
  // Comanda Única (ver selectPlatformAccount), sem estabelecimento selecionado.
  readonly platformMode = signal(false);
  readonly platformResumo = signal<PlatformExtratoResumo | null>(null);
  readonly platformTransacoes = signal<PlatformExtratoTransacao[]>([]);
  readonly directionFilter = signal<PlatformExtratoDirecao | ''>('');
  readonly selectedPlatformTransacao = signal<PlatformExtratoTransacao | null>(null);

  // Empresa consultada — para quem não é platform admin, vem das próprias empresas (session);
  // platform admin busca entre todos os estabelecimentos (ver PlatformFeeRulesService,
  // reaproveitado do painel financeiro da plataforma).
  readonly selectedCompanyId = signal<string | null>(this.authService.selectedCompany()?.companyId ?? null);
  readonly selectedCompanyName = signal<string | null>(this.authService.selectedCompany()?.companyName ?? null);

  readonly companySearchTerm = signal('');
  readonly companySearchResults = signal<CompanyFeeRuleResponse[]>([]);
  readonly isSearchingCompanies = signal(false);

  readonly activePresetId = signal<PeriodPresetId>('30d');
  readonly startDate = signal(this.toIsoDate(this.daysAgo(29)));
  readonly endDate = signal(this.toIsoDate(new Date()));
  readonly typeFilter = signal<ExtratoTipo | ''>('');
  readonly statusFilter = signal<ExtratoStatusFiltro | ''>('');
  readonly searchTerm = signal('');

  readonly resumo = signal<ExtratoResumo | null>(null);
  readonly transacoes = signal<ExtratoTransacao[]>([]);
  readonly hasMore = signal(false);
  readonly isLoading = signal(false);
  readonly isLoadingMore = signal(false);
  readonly loadError = signal<string | null>(null);

  readonly selectedTransacao = signal<ExtratoTransacao | null>(null);
  readonly isExporting = signal(false);
  readonly exportError = signal<string | null>(null);

  private nextCursor: string | null = null;

  readonly hasCompany = computed(() => this.platformMode() || !!this.selectedCompanyId());

  constructor() {
    if (this.selectedCompanyId()) {
      this.loadExtrato(false);
    }
  }

  formatCurrency(value: number | null | undefined): string {
    return value != null ? this.currencyFormatter.format(value) : '—';
  }

  formatDateTime(value: string | null | undefined): string {
    if (!value) {
      return '—';
    }
    return this.dateTimeFormatter.format(new Date(value));
  }

  tipoLabel(tipo: ExtratoTipo): string {
    return TIPO_LABELS[tipo] ?? tipo;
  }

  // No extrato da PLATAFORMA, application_fee é a plataforma RECEBENDO o repasse da empresa (ver
  // PlatformExtratoResumoResponse no backend) — rótulo diferente do extrato por estabelecimento
  // (onde a mesma categoria aparece como "Taxa Comanda Única", a taxa que a empresa paga).
  platformTipoLabel(tipo: ExtratoTipo): string {
    if (tipo === 'APPLICATION_FEE') {
      return 'Repasse recebido';
    }
    return this.tipoLabel(tipo);
  }

  // "status" é sobre liberação de saldo na Stripe (quando o dinheiro fica disponível para saque) —
  // não sobre o pagamento/estorno em si. Um pagamento pode estar concluído (ver pagamentoConfirmado,
  // confrontado com a nossa base) e ainda assim ter o saldo pendente de liberação; o mesmo vale para
  // um estorno já efetivado (ver estornoConfirmado). Por isso o texto exibido prioriza essas
  // confirmações — é o que corresponde ao "Concluído" do Dashboard da própria Stripe.
  statusLabel(transacao: ExtratoTransacao): string {
    if (transacao.pagamentoConfirmado) {
      return transacao.status === 'AVAILABLE' ? 'Pago' : 'Pago (saldo pendente)';
    }
    if (transacao.estornoConfirmado) {
      return transacao.status === 'AVAILABLE' ? 'Estornado' : 'Estornado (saldo pendente)';
    }
    if (this.isLedgerOnlyType(transacao.tipo)) {
      return transacao.status === 'AVAILABLE' ? 'Concluído' : 'Concluído (saldo pendente)';
    }
    return transacao.status === 'AVAILABLE' ? 'Disponível' : 'Pendente';
  }

  isStatusPending(transacao: ExtratoTransacao): boolean {
    return !transacao.pagamentoConfirmado
      && !transacao.estornoConfirmado
      && !this.isLedgerOnlyType(transacao.tipo)
      && transacao.status === 'PENDING';
  }

  // Extrato da plataforma não tem o conceito de "pagamento confirmado" (não é uma cobrança de
  // estabelecimento) — mas o mesmo raciocínio de isLedgerOnlyType abaixo se aplica: repasse, taxa,
  // estorno de taxa, payout etc. são lançamentos que só existem na Stripe depois de já terem
  // acontecido — "status" ali é só sobre liberação de saldo, nunca sobre o evento ainda não ter
  // se concretizado.
  platformStatusLabel(transacao: PlatformExtratoTransacao): string {
    if (this.isLedgerOnlyType(transacao.category)) {
      return transacao.status === 'AVAILABLE' ? 'Concluído' : 'Concluído (saldo pendente)';
    }
    return transacao.status === 'AVAILABLE' ? 'Disponível' : 'Pendente';
  }

  isPlatformStatusPending(transacao: PlatformExtratoTransacao): boolean {
    return !this.isLedgerOnlyType(transacao.category) && transacao.status === 'PENDING';
  }

  // Categorias que só aparecem no extrato depois de já terem se efetivado na Stripe — uma cobrança
  // que falhou ou foi cancelada nunca chega a gerar Balance Transaction (ver ExtratoStatus no
  // backend), e o mesmo vale com ainda mais força para repasse/taxa/estorno de taxa/payout/
  // transferência/disputa/ajuste: não existe um estado intermediário "ainda não aconteceu" para
  // essas categorias, então "Pendente" (que aqui é só sobre liberação de saldo) fica confuso —
  // parece que o lançamento ainda não terminou. CHARGE/PAYMENT/REFUND/PAYMENT_REFUND ficam de fora
  // porque esses têm um gap real de consistência eventual com a NOSSA base (ver pagamentoConfirmado/
  // estornoConfirmado) que as demais categorias não têm.
  private isLedgerOnlyType(tipo: ExtratoTipo): boolean {
    return tipo === 'APPLICATION_FEE'
      || tipo === 'APPLICATION_FEE_REFUND'
      || tipo === 'STRIPE_FEE'
      || tipo === 'PAYOUT'
      || tipo === 'TRANSFER'
      || tipo === 'DISPUTE'
      || tipo === 'ADJUSTMENT';
  }

  comandaResumo(ref: ExtratoComandaUnicaRef): string {
    if (!ref.vinculado) {
      return 'Sem pedido vinculado';
    }
    const partes: string[] = [];
    if (ref.numeroComanda) {
      partes.push(`Comanda ${ref.numeroComanda.slice(0, 8)}`);
    }
    if (ref.mesa != null) {
      partes.push(`Mesa ${ref.mesa}`);
    }
    return partes.length > 0 ? partes.join(' — ') : 'Vinculado';
  }

  // --- Empresa -------------------------------------------------------------

  selectPlatformAccount(): void {
    this.platformMode.set(true);
    this.selectedCompanyId.set(null);
    this.selectedCompanyName.set(this.platformAccountLabel);
    this.companySearchResults.set([]);
    this.companySearchTerm.set('');
    this.resetAndLoad();
  }

  onMyCompanyChange(companyId: string): void {
    const company = this.myCompanies().find((c) => c.companyId === companyId);
    this.platformMode.set(false);
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
    this.platformMode.set(false);
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

  onTypeFilterChange(value: string): void {
    this.typeFilter.set(value as ExtratoTipo | '');
    this.resetAndLoad();
  }

  onStatusFilterChange(value: string): void {
    this.statusFilter.set(value as ExtratoStatusFiltro | '');
    this.resetAndLoad();
  }

  // Só se aplica ao modo plataforma (ver platformMode) — o extrato por estabelecimento usa
  // statusFilter/onStatusFilterChange acima.
  onDirectionFilterChange(value: string): void {
    this.directionFilter.set(value as PlatformExtratoDirecao | '');
    this.resetAndLoad();
  }

  onSearchTermChange(value: string): void {
    this.searchTerm.set(value);
  }

  submitSearch(): void {
    this.resetAndLoad();
  }

  refresh(): void {
    this.resetAndLoad();
  }

  loadMore(): void {
    this.loadExtrato(true);
  }

  // --- Detalhe ---------------------------------------------------------------

  openDetail(transacao: ExtratoTransacao): void {
    this.selectedTransacao.set(transacao);
  }

  closeDetail(): void {
    this.selectedTransacao.set(null);
  }

  openPlatformDetail(transacao: PlatformExtratoTransacao): void {
    this.selectedPlatformTransacao.set(transacao);
  }

  closePlatformDetail(): void {
    this.selectedPlatformTransacao.set(null);
  }

  // --- Exportação --------------------------------------------------------------
  //
  // Assíncrona (fila tarefa.extrato.exportacao.csv.queue): dispara o job via POST .../export/async
  // e faz polling em GET .../export/{jobId} até status DONE/FAILED, em vez de segurar a requisição
  // HTTP durante a varredura completa da Stripe (era o que o GET .../export síncrono fazia).

  private static readonly EXPORT_POLL_INTERVAL_MS = 2000;
  private static readonly EXPORT_POLL_MAX_ATTEMPTS = 60; // ~2min

  exportCsv(): void {
    if (this.platformMode()) {
      this.isExporting.set(true);
      this.exportError.set(null);
      this.platformExtratoService
        .exportCsvAsync({
          startDate: this.startDate(),
          endDate: this.endDate(),
          type: this.typeFilter() || undefined,
          direction: this.directionFilter() || undefined,
          search: this.searchTerm().trim() || undefined
        })
        .subscribe({
          next: (job) => this.pollExportJob((jobId) => this.platformExtratoService.getExportJob(jobId), job.jobId),
          error: () => this.onExportError()
        });
      return;
    }

    const companyId = this.selectedCompanyId();
    if (!companyId) {
      return;
    }
    this.isExporting.set(true);
    this.exportError.set(null);
    this.extratoService
      .exportCsvAsync(companyId, {
        startDate: this.startDate(),
        endDate: this.endDate(),
        type: this.typeFilter() || undefined,
        status: this.statusFilter() || undefined,
        search: this.searchTerm().trim() || undefined
      })
      .subscribe({
        next: (job) => this.pollExportJob((jobId) => this.extratoService.getExportJob(companyId, jobId), job.jobId),
        error: () => this.onExportError()
      });
  }

  private pollExportJob(
    fetchJob: (jobId: string) => Observable<ExtratoExportJobResponse>,
    jobId: string,
    attempt = 0
  ): void {
    if (attempt >= ExtratoFinanceiroComponent.EXPORT_POLL_MAX_ATTEMPTS) {
      this.exportError.set('A exportação está demorando mais que o esperado. Tente novamente em instantes.');
      this.isExporting.set(false);
      return;
    }

    fetchJob(jobId).subscribe({
      next: (job) => {
        if (job.status === 'DONE') {
          if (job.downloadUrl) {
            window.open(job.downloadUrl, '_blank');
          }
          this.isExporting.set(false);
          return;
        }
        if (job.status === 'FAILED') {
          this.exportError.set(job.error ?? 'Não foi possível exportar o extrato.');
          this.isExporting.set(false);
          return;
        }
        // PENDING/PROCESSING — tenta de novo depois do intervalo.
        setTimeout(
          () => this.pollExportJob(fetchJob, jobId, attempt + 1),
          ExtratoFinanceiroComponent.EXPORT_POLL_INTERVAL_MS
        );
      },
      error: () => this.onExportError()
    });
  }

  private onExportError(): void {
    this.exportError.set('Não foi possível exportar o extrato.');
    this.isExporting.set(false);
  }

  // -------------------------------------------------------------------------

  private resetAndLoad(): void {
    this.nextCursor = null;
    this.transacoes.set([]);
    this.platformTransacoes.set([]);
    this.hasMore.set(false);
    this.loadExtrato(false);
  }

  private loadExtrato(append: boolean): void {
    if (this.platformMode()) {
      this.loadPlatformExtrato(append);
      return;
    }

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

    this.extratoService
      .getExtrato(companyId, {
        startDate: this.startDate(),
        endDate: this.endDate(),
        type: this.typeFilter() || undefined,
        status: this.statusFilter() || undefined,
        search: this.searchTerm().trim() || undefined,
        cursor: append ? (this.nextCursor ?? undefined) : undefined,
        limit: PAGE_SIZE
      })
      .subscribe({
        next: (response) => {
          this.resumo.set(response.resumo);
          this.transacoes.update((current) => (append ? [...current, ...response.transacoes] : response.transacoes));
          this.hasMore.set(response.paginacao.hasMore);
          this.nextCursor = response.paginacao.nextCursor;
          this.isLoading.set(false);
          this.isLoadingMore.set(false);
        },
        error: () => {
          this.loadError.set('Não foi possível carregar o extrato financeiro do período selecionado.');
          this.isLoading.set(false);
          this.isLoadingMore.set(false);
        }
      });
  }

  private loadPlatformExtrato(append: boolean): void {
    if (append) {
      this.isLoadingMore.set(true);
    } else {
      this.isLoading.set(true);
    }
    this.loadError.set(null);

    this.platformExtratoService
      .getExtrato({
        startDate: this.startDate(),
        endDate: this.endDate(),
        type: this.typeFilter() || undefined,
        direction: this.directionFilter() || undefined,
        search: this.searchTerm().trim() || undefined,
        cursor: append ? (this.nextCursor ?? undefined) : undefined,
        limit: PAGE_SIZE
      })
      .subscribe({
        next: (response) => {
          this.platformResumo.set(response.resumo);
          this.platformTransacoes.update((current) => (append ? [...current, ...response.transacoes] : response.transacoes));
          this.hasMore.set(response.paginacao.hasMore);
          this.nextCursor = response.paginacao.nextCursor;
          this.isLoading.set(false);
          this.isLoadingMore.set(false);
        },
        error: () => {
          this.loadError.set('Não foi possível carregar o extrato da conta plataforma do período selecionado.');
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
