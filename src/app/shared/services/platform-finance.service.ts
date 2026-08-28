import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface PlatformFeePoint {
  date: string; // yyyy-MM-dd
  amount: number;
}

export interface PlatformFinanceResponse {
  feeSeries: PlatformFeePoint[];
  totalFeeAmount: number;
  stripeAvailableBalance: number;
}

// Painel financeiro da Comanda Única (platform admin) — taxas recebidas sobre as cobranças dos
// estabelecimentos + saldo na conta Stripe da plataforma. Ver PlatformFinanceApi no backend.
@Injectable({ providedIn: 'root' })
export class PlatformFinanceService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1/platform/finance`;

  // startDate/endDate no formato yyyy-MM-dd; sem eles, o backend retorna os últimos 30 dias.
  getFinanceSummary(startDate?: string, endDate?: string): Observable<PlatformFinanceResponse> {
    const params: Record<string, string> = {};
    if (startDate) {
      params['startDate'] = startDate;
    }
    if (endDate) {
      params['endDate'] = endDate;
    }
    return this.http.get<PlatformFinanceResponse>(`${this.baseUrl}/summary`, { params });
  }
}
