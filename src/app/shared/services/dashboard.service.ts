import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from '../../../environments/environment';

// Indicadores operacionais — mesmo payload enviado ao conectar e periodicamente pelo
// WebSocket /ws/dashboard/{companyId} (ver DashboardWebSocketHandler no backend).
export interface DashboardSummaryResponse {
  openComandas: number;
  openComandasValue: number;
  totalTables: number;
  occupiedTables: number;
  freeTables: number;
  cleaningTables: number;
  activeEmployees: number;
  ordersValueToday: number;
  openCartItemsCount: number;
  revenueToday: number;
  // Saldo de taxas da Comanda Única pendentes de liquidação (pagamentos em dinheiro ainda não
  // repassados via cobrança Stripe) — ver PendingPlatformFeeRepository no backend.
  pendingFeeBalance: number;
  generatedAt: string;
}

export interface RevenuePoint {
  date: string;
  // Faturado (bruto) no dia.
  amount: number;
  // Líquido recebido no dia (dinheiro cheio + online já sem taxa Stripe e taxa Comanda Única).
  netAmount: number;
  // Saldo acumulado no período (soma corrida do líquido de TODAS as categorias, não só
  // charge/payment — inclui payouts, repasses e taxas isoladas). Só vem preenchido pelo relatório
  // financeiro da Stripe (ver getFinancialReport); undefined nas demais origens (getRevenueSeries).
  cumulativeAmount?: number;
}

export interface StripeBalanceResponse {
  availableAmount: number;
  currency: string;
}

// Espelha StripeAccountBalanceResponse do backend (ver GET /api/v1/dashboard/financeiro).
export interface StripeAccountBalance {
  currentAmount: number;
  availableAmount: number;
  pendingAmount: number;
  currency: string;
}

export interface StripeFinancialSummary {
  totalReceipts: number;
  totalGross: number;
  totalStripeFees: number;
  totalPlatformFees: number;
  totalRefunds: number;
  totalPayouts: number;
  // Soma dos repasses recebidos da Comanda Única no período (application_fee/platform_earning) —
  // a tarifa que a Stripe transfere automaticamente da conta da empresa para a conta da plataforma
  // em cada cobrança direta. Só relevante para o platform admin.
  totalRepasses: number;
  // Outras saídas não cobertas pelos totais acima (dispute, adjustment, other com líquido negativo).
  totalOtherDebits: number;
  totalNet: number;
  currency: string;
}

export interface StripeFinancialTransaction {
  balanceTransactionId: string;
  sourceId: string | null;
  paymentIntentId: string | null;
  type: string;
  category: string;
  description: string | null;
  grossAmount: number;
  stripeFeeAmount: number;
  platformFeeAmount: number | null;
  netAmount: number;
  currency: string;
  status: string;
  createdAt: string;
  availableOn: string | null;
}

export interface StripeFinancialPage {
  hasMore: boolean;
  nextCursor: string | null;
}

// Espelha StripeFinancialReportResponse do backend — relatório financeiro da conta Stripe Connect
// do estabelecimento (saldo, resumo do período, série diária para o gráfico e uma página de
// transações), consultado diretamente na Stripe (ver DashboardApi#getFinancialReport).
export interface StripeFinancialReport {
  balance: StripeAccountBalance;
  summary: StripeFinancialSummary;
  dailySeries: RevenuePoint[];
  transactions: StripeFinancialTransaction[];
  page: StripeFinancialPage;
}

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1/dashboard`;

  getSummary(): Observable<DashboardSummaryResponse> {
    return this.http.get<DashboardSummaryResponse>(this.baseUrl);
  }

  // startDate/endDate no formato yyyy-MM-dd; sem eles, o backend retorna os últimos 30 dias.
  getRevenueSeries(startDate?: string, endDate?: string): Observable<RevenuePoint[]> {
    const params: Record<string, string> = {};
    if (startDate) {
      params['startDate'] = startDate;
    }
    if (endDate) {
      params['endDate'] = endDate;
    }
    return this.http.get<RevenuePoint[]>(`${this.baseUrl}/revenue`, { params });
  }

  // Saldo disponível na conta Stripe Connect do estabelecimento — valor atual (cache curto no
  // servidor), não série histórica.
  getStripeBalance(): Observable<StripeBalanceResponse> {
    return this.http.get<StripeBalanceResponse>(`${this.baseUrl}/stripe-balance`);
  }

  // Relatório financeiro da conta Stripe Connect do estabelecimento — fonte do gráfico de
  // faturamento (dailySeries) e dos saldos "atual"/"liberado" da home (ver
  // DashboardComponent#loadFinancialReport). Consulta a Stripe diretamente no backend, não o banco
  // interno. startDate/endDate no formato yyyy-MM-dd; sem eles, o backend retorna os últimos 30 dias.
  getFinancialReport(startDate?: string, endDate?: string): Observable<StripeFinancialReport> {
    const params: Record<string, string> = {};
    if (startDate) {
      params['startDate'] = startDate;
    }
    if (endDate) {
      params['endDate'] = endDate;
    }
    return this.http.get<StripeFinancialReport>(`${this.baseUrl}/financeiro`, { params });
  }

  // Abre a conexão em tempo real dos indicadores operacionais. O token vem por query param
  // porque o WebSocket nativo do browser não permite header Authorization no handshake — ver
  // DashboardHandshakeInterceptor no backend, que valida o mesmo token e o acesso à empresa.
  // Quem chama é responsável por fechar a subscription (ex: ngOnDestroy) para encerrar o socket.
  connectRealtime(companyId: string, token: string): WebSocketSubject<DashboardSummaryResponse> {
    return webSocket<DashboardSummaryResponse>(this.buildWsUrl(companyId, token));
  }

  private buildWsUrl(companyId: string, token: string): string {
    const base = environment.apiBaseUrl;
    const wsBase = /^https?:\/\//.test(base)
      ? base.replace(/^http/, 'ws')
      : `${window.location.protocol === 'https:' ? 'wss:' : 'ws:'}//${window.location.host}${base}`;
    return `${wsBase}/ws/dashboard/${companyId}?token=${encodeURIComponent(token)}`;
  }
}
