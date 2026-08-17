import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface PageResponse<T> {
  content: T[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}

// Cobrança por faixa: comanda com valor <= thresholdAmount paga percentageRate sobre o próprio
// valor; acima de thresholdAmount, paga maxAmount fixo (não é um teto que o percentual atinge, é
// um valor fixo direto assim que ultrapassa a faixa).
export interface PlatformFeeRuleResponse {
  percentageRate: number;
  thresholdAmount: number;
  maxAmount: number;
  updatedAt: string;
}

export interface CompanyFeeRuleResponse {
  companyId: string;
  companyName: string;
  // Regra efetiva: a customizada, se houver, senão a padrão vigente.
  percentageRate: number;
  thresholdAmount: number;
  maxAmount: number;
  customized: boolean;
  updatedAt: string;
}

export interface UpsertPlatformFeeRuleRequest {
  percentageRate: number;
  thresholdAmount: number;
  maxAmount: number;
}

export interface ListCompanyFeeRulesParams {
  search?: string;
  page?: number;
  size?: number;
}

// Painel financeiro exclusivo da Comanda Única (ver PlatformFeeRuleApi no backend) — fora do
// modelo de empresas, não precisa de X-Company-Id (o interceptor de auth ainda o envia, mas o
// backend simplesmente ignora esse header aqui; a permissão real é User.isPlatformAdmin).
@Injectable({ providedIn: 'root' })
export class PlatformFeeRulesService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1/platform/fee-rules`;

  getDefault(): Observable<PlatformFeeRuleResponse> {
    return this.http.get<PlatformFeeRuleResponse>(`${this.baseUrl}/default`);
  }

  updateDefault(payload: UpsertPlatformFeeRuleRequest): Observable<PlatformFeeRuleResponse> {
    return this.http.put<PlatformFeeRuleResponse>(`${this.baseUrl}/default`, payload);
  }

  listCompanies(params: ListCompanyFeeRulesParams = {}): Observable<PageResponse<CompanyFeeRuleResponse>> {
    const httpParams: Record<string, string> = {
      page: String(params.page ?? 0),
      size: String(params.size ?? 20)
    };
    if (params.search) {
      httpParams['search'] = params.search;
    }
    return this.http.get<PageResponse<CompanyFeeRuleResponse>>(`${this.baseUrl}/companies`, { params: httpParams });
  }

  upsertCompanyRule(companyId: string, payload: UpsertPlatformFeeRuleRequest): Observable<CompanyFeeRuleResponse> {
    return this.http.put<CompanyFeeRuleResponse>(`${this.baseUrl}/companies/${companyId}`, payload);
  }

  removeCompanyRule(companyId: string): Observable<CompanyFeeRuleResponse> {
    return this.http.delete<CompanyFeeRuleResponse>(`${this.baseUrl}/companies/${companyId}`);
  }
}