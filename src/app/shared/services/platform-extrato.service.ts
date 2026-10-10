import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PlatformCharge } from './subscription.service';

export type PlatformChargeStatusFilter = 'PAID' | 'OPEN' | 'FAILED';

export interface PlatformChargePage {
  content: PlatformCharge[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}

export interface PlatformChargeFilters {
  startDate?: string;
  endDate?: string;
  companyId?: string | null;
  status?: PlatformChargeStatusFilter | null;
  page?: number;
  size?: number;
}

// Extrato da plataforma (platform admin): cobranças da Comanda Única na Asaas — mensalidades e
// taxas semanais de todos os estabelecimentos —, só com o que está registrado na base (ver
// GET /api/v1/platform/finance/charges no backend).
@Injectable({ providedIn: 'root' })
export class PlatformExtratoService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1/platform/finance/charges`;

  getCharges(filters: PlatformChargeFilters = {}): Observable<PlatformChargePage> {
    return this.http.get<PlatformChargePage>(this.baseUrl, { params: this.toParams(filters) });
  }

  exportCsv(filters: Omit<PlatformChargeFilters, 'page' | 'size'> = {}): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/export`, { params: this.toParams(filters), responseType: 'blob' });
  }

  private toParams(filters: PlatformChargeFilters): Record<string, string> {
    const params: Record<string, string> = {};
    if (filters.startDate) params['startDate'] = filters.startDate;
    if (filters.endDate) params['endDate'] = filters.endDate;
    if (filters.companyId) params['companyId'] = filters.companyId;
    if (filters.status) params['status'] = filters.status;
    if (filters.page != null) params['page'] = String(filters.page);
    if (filters.size != null) params['size'] = String(filters.size);
    return params;
  }
}
