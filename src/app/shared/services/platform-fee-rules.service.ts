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

// Taxa fixa que o cliente paga em cada pagamento da comanda, por cima do valor que abate. No app
// (Pix/cartão) vai para a Comanda Única pelo split; no caixa/garçom fica com o estabelecimento.
export interface PlatformFeeRuleResponse {
  fixedAmount: number;
  updatedAt: string;
}

export interface CompanyFeeRuleResponse {
  companyId: string;
  companyName: string;
  // Taxa efetiva: a exceção da empresa, se houver, senão a padrão vigente.
  fixedAmount: number;
  customized: boolean;
  updatedAt: string;
}

export interface UpsertPlatformFeeRuleRequest {
  fixedAmount: number;
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