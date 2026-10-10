import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { RevenuePoint } from './dashboard.service';

// Espelho de PlatformFinanceResponse — só com o que está registrado na base da Comanda Única.
export interface PlatformFinanceSummary {
  // Taxas geradas por dia sobre os pagamentos registrados nas comandas de todos os estabelecimentos.
  feeSeries: RevenuePoint[];
  totalFeeAmount: number;
  // Recebido na Asaas no período (cobranças semanais de taxas e mensalidades).
  receivedFeeAmount: number;
  receivedSubscriptionAmount: number;
  // Saldo atual de taxas ainda não liquidadas (independe do período).
  pendingFeeBalance: number;
}

@Injectable({ providedIn: 'root' })
export class PlatformFinanceService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1/platform/finance`;

  getSummary(startDate?: string, endDate?: string): Observable<PlatformFinanceSummary> {
    const params: Record<string, string> = {};
    if (startDate) params['startDate'] = startDate;
    if (endDate) params['endDate'] = endDate;
    return this.http.get<PlatformFinanceSummary>(`${this.baseUrl}/summary`, { params });
  }
}
