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
  generatedAt: string;
}

export interface RevenuePoint {
  date: string;
  // Faturado (bruto) no dia.
  amount: number;
  // Líquido recebido no dia (dinheiro cheio + online já sem taxa Stripe e taxa Comanda Única).
  netAmount: number;
}

export interface StripeBalanceResponse {
  availableAmount: number;
  currency: string;
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
