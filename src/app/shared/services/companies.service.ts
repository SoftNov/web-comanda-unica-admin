import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CompanyAccessResponse } from '../../features/auth/services/auth.service';
import { AddressRequest, CompanyRequest } from './accounts.service';

export interface CreateCompanyRequest {
  company: CompanyRequest;
  address: AddressRequest;
}

// Cadastra mais uma empresa (filial) para o usuário JÁ autenticado, reaproveitando a mesma
// conta/CPF — diferente de AccountsService#createAccount, que é o cadastro público (sem login)
// de uma conta nova. Ver CompanyController na api-comanda-unica-admin.
@Injectable({ providedIn: 'root' })
export class CompaniesService {
  private readonly http = inject(HttpClient);

  createAdditionalCompany(payload: CreateCompanyRequest): Observable<CompanyAccessResponse> {
    return this.http.post<CompanyAccessResponse>(`${environment.apiBaseUrl}/api/v1/companies`, payload);
  }
}
