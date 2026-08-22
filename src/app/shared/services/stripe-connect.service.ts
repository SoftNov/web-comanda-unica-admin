import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

// Nunca inclui credenciais — só o estado da conexão Stripe Connect da própria empresa.
// "accountId" vem sempre mascarado do backend (ex: "acct_********1234").
export interface StripeAccountStatus {
  connected: boolean;
  accountId?: string;
  chargesEnabled?: boolean;
  payoutsEnabled?: boolean;
  detailsSubmitted?: boolean;
  onboardingCompleted: boolean;
}

export interface StripeOnboardingLinkResponse {
  url: string;
}

export interface StripeDashboardLinkResponse {
  url: string;
}

export interface ApiErrorResponse {
  titulo?: string;
  mensagem?: string;
  mensagemErro?: string;
  codigoErro?: string;
}

@Injectable({ providedIn: 'root' })
export class StripeConnectService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1/stripe-connect`;

  getAccount(): Observable<StripeAccountStatus> {
    return this.http.get<StripeAccountStatus>(`${this.baseUrl}/account`);
  }

  createOnboardingLink(): Observable<StripeOnboardingLinkResponse> {
    return this.http.post<StripeOnboardingLinkResponse>(`${this.baseUrl}/onboarding-link`, {});
  }

  createDashboardLink(): Observable<StripeDashboardLinkResponse> {
    return this.http.post<StripeDashboardLinkResponse>(`${this.baseUrl}/dashboard-link`, {});
  }
}
