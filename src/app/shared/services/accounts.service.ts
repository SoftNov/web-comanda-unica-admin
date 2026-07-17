import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, shareReplay, tap } from 'rxjs';
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

export interface UpdatePersonalInfoRequest {
  fullName: string;
  phone: string;
}

export interface UpdateCompanyInfoRequest {
  businessName: string;
  phone: string;
  email: string;
}

export interface UpdateProfileRequest {
  owner: UpdatePersonalInfoRequest;
  company: UpdateCompanyInfoRequest;
  address: AddressRequest;
}

export interface UpdateProfileResponse {
  userId: string;
  companyId: string;
  updatedAt: string;
  message: string;
}

export interface UpdateLogoResponse {
  companyId: string;
  logoUrl: string;
  updatedAt: string;
  message: string;
}

export interface UpdateAvatarResponse {
  userId: string;
  avatarUrl: string;
  updatedAt: string;
  message: string;
}

export interface AddressResponse {
  zipCode: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface OwnerProfileResponse {
  userId: string;
  fullName: string;
  cpf: string;
  email: string;
  phone: string;
  avatarUrl?: string;
}

export interface CompanyProfileResponse {
  companyId: string;
  businessName: string;
  corporateName: string;
  cnpj: string;
  businessType: string;
  status: string;
  logoUrl?: string;
  phone: string;
  email: string;
  address: AddressResponse;
}

export interface AccountProfileResponse {
  profileCode: string;
  profileName: string;
  owner: OwnerProfileResponse;
  company: CompanyProfileResponse | null;
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

  private profileCache$: Observable<AccountProfileResponse> | null = null;

  createAccount(payload: CreateAccountRequest): Observable<CreateAccountResponse> {
    return this.http.post<CreateAccountResponse>(`${environment.apiBaseUrl}/api/v1/accounts`, payload);
  }

  activateAccount(token: string): Observable<ActivationResponse> {
    return this.http.get<ActivationResponse>(`${environment.apiBaseUrl}/api/v1/accounts/activate/${encodeURIComponent(token)}`);
  }

  // Shared across simultaneous callers (e.g. the admin shell and the profile page both
  // fetch this on load) so a single page load triggers one HTTP call, not one per caller.
  getProfile(): Observable<AccountProfileResponse> {
    if (!this.profileCache$) {
      this.profileCache$ = this.http
        .get<AccountProfileResponse>(`${environment.apiBaseUrl}/api/v1/accounts/me`)
        .pipe(shareReplay({ bufferSize: 1, refCount: false }));
    }
    return this.profileCache$;
  }

  invalidateProfileCache(): void {
    this.profileCache$ = null;
  }

  updateProfile(payload: UpdateProfileRequest): Observable<UpdateProfileResponse> {
    return this.http
      .put<UpdateProfileResponse>(`${environment.apiBaseUrl}/api/v1/accounts/update/me`, payload)
      .pipe(tap(() => this.invalidateProfileCache()));
  }

  uploadAvatar(file: File): Observable<UpdateAvatarResponse> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http
      .post<UpdateAvatarResponse>(`${environment.apiBaseUrl}/api/v1/accounts/me/avatar`, formData)
      .pipe(tap(() => this.invalidateProfileCache()));
  }

  uploadLogo(file: File): Observable<UpdateLogoResponse> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http
      .post<UpdateLogoResponse>(`${environment.apiBaseUrl}/api/v1/accounts/me/logo`, formData)
      .pipe(tap(() => this.invalidateProfileCache()));
  }
}
