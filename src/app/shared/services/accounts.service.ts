import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface OwnerRequest {
  fullName: string;
  cpf: string;
  email: string;
  phone: string;
  password: string;
}

export interface CompanyRequest {
  businessName: string;
  cnpj: string;
  segment: string;
  phone: string;
  email: string;
}

export interface AddressRequest {
  zipCode: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface CreateAccountRequest {
  owner: OwnerRequest;
  company: CompanyRequest;
  address: AddressRequest;
  acceptedTerms: boolean;
}

export interface CreateAccountResponse {
  accountId: string;
  companyId: string;
  activationExpiresAt: string;
  message: string;
}

export interface ActivationResponse {
  accountId: string;
  activatedAt: string;
  message: string;
}

export interface ApiErrorResponse {
  titulo?: string;
  mensagem?: string;
  mensagemErro?: string;
  codigoErro?: string;
}

@Injectable({ providedIn: 'root' })
export class AccountsService {
  private readonly http = inject(HttpClient);

  createAccount(payload: CreateAccountRequest): Observable<CreateAccountResponse> {
    return this.http.post<CreateAccountResponse>(`${environment.apiBaseUrl}/api/v1/accounts`, payload);
  }

  activateAccount(token: string): Observable<ActivationResponse> {
    return this.http.get<ActivationResponse>(`${environment.apiBaseUrl}/api/v1/accounts/activate/${encodeURIComponent(token)}`);
  }
}
