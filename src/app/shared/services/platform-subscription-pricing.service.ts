import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface SubscriptionPriceTier {
  id?: string;
  upToTables: number;
  monthlyAmount: number;
  annualAmount?: number;
}

export interface PageResponse<T> {
  content: T[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}

export type PricingSource = 'OVERRIDE' | 'TIER' | 'FALLBACK';

export interface CompanySubscriptionPricing {
  companyId: string;
  companyName: string;
  tableCount: number;
  monthlyAmount: number;
  annualAmount: number;
  source: PricingSource;
  customized: boolean;
  overrideNote: string | null;
}

// Painel exclusivo da Comanda Única (ver PlatformSubscriptionPricingController) — precificação da
// assinatura por faixa de mesas + valor negociado por estabelecimento.
@Injectable({ providedIn: 'root' })
export class PlatformSubscriptionPricingService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1/platform/subscription-pricing`;

  listTiers(): Observable<SubscriptionPriceTier[]> {
    return this.http.get<SubscriptionPriceTier[]>(`${this.baseUrl}/tiers`);
  }

  replaceTiers(tiers: Pick<SubscriptionPriceTier, 'upToTables' | 'monthlyAmount'>[]): Observable<SubscriptionPriceTier[]> {
    return this.http.put<SubscriptionPriceTier[]>(`${this.baseUrl}/tiers`, { tiers });
  }

  listCompanies(search: string, page: number, size: number): Observable<PageResponse<CompanySubscriptionPricing>> {
    const params: Record<string, string> = { page: String(page), size: String(size) };
    if (search) {
      params['search'] = search;
    }
    return this.http.get<PageResponse<CompanySubscriptionPricing>>(`${this.baseUrl}/companies`, { params });
  }

  upsertOverride(companyId: string, monthlyAmount: number, note: string | null): Observable<CompanySubscriptionPricing> {
    return this.http.put<CompanySubscriptionPricing>(`${this.baseUrl}/companies/${companyId}`, { monthlyAmount, note });
  }

  removeOverride(companyId: string): Observable<CompanySubscriptionPricing> {
    return this.http.delete<CompanySubscriptionPricing>(`${this.baseUrl}/companies/${companyId}`);
  }
}
