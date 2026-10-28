import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export type AsaasIntegrationStatus = 'ACTIVE' | 'INVALID';
export type ComandaPixChargeStatus = 'PENDING' | 'PAID' | 'EXPIRED' | 'CANCELED' | 'REFUNDED';

// A chave de API nunca volta do backend — só keyMasked (••••1234).
export interface ComandaPixSettings {
  platformReady: boolean;
  configured: boolean;
  status: AsaasIntegrationStatus | null;
  keyMasked: string | null;
  asaasWalletId: string | null;
  asaasAccountName: string | null;
  asaasAccountDoc: string | null;
  lastError: string | null;
  pixEnabled: boolean;
  minPixAmount: number;
  asaasMinAmount: number;
  suggestedMinAmount: number;
  asaasPixFeeReference: number;
}

export interface ComandaPixReportItem {
  id: string;
  asaasPaymentId: string | null;
  status: ComandaPixChargeStatus;
  paidAt: string;
  amount: number;
  platformFeeAmount: number;
  overpaidAmount: number | null;
  comandaId: string;
  tableNumber: number | null;
  tableName: string | null;
}

export interface ComandaPixReport {
  date: string;
  count: number;
  totalAmount: number;
  totalPlatformFee: number;
  totalOverpaid: number;
  payments: ComandaPixReportItem[];
}

// Pix na comanda (ver ComandaPixController na API admin): conta Asaas do estabelecimento, ativação,
// valor mínimo e relatório diário dos Pix pagos pelo cardápio.
@Injectable({ providedIn: 'root' })
export class ComandaPixService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1/comanda-pix`;

  getSettings(): Observable<ComandaPixSettings> {
    return this.http.get<ComandaPixSettings>(`${this.baseUrl}/settings`);
  }

  saveApiKey(apiKey: string): Observable<ComandaPixSettings> {
    return this.http.put<ComandaPixSettings>(`${this.baseUrl}/settings/api-key`, { apiKey });
  }

  removeApiKey(): Observable<ComandaPixSettings> {
    return this.http.delete<ComandaPixSettings>(`${this.baseUrl}/settings/api-key`);
  }

  update(pixEnabled: boolean, minPixAmount: number): Observable<ComandaPixSettings> {
    return this.http.put<ComandaPixSettings>(`${this.baseUrl}/settings`, { pixEnabled, minPixAmount });
  }

  // date = yyyy-MM-dd (dia de Brasília); sem date, hoje.
  report(date?: string): Observable<ComandaPixReport> {
    const params: Record<string, string> = date ? { date } : {};
    return this.http.get<ComandaPixReport>(`${this.baseUrl}/report`, { params });
  }
}
