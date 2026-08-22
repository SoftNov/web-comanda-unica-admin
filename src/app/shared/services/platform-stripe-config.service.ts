import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

// Config da conta Stripe da PRÓPRIA Comanda Única (plataforma) — nunca das contas Stripe Connect
// das empresas clientes (ver StripeConnectService, para o lado do proprietário). Publishable Key,
// Secret Key e Webhook Secret vêm de variável de ambiente do servidor e nunca trafegam em texto
// puro: só mascaradas (ex: "sk_live_••••••••7f2a"). Não são editáveis por esta tela.
export interface PlatformStripeConfig {
  credentialsConfigured: boolean;
  environment: 'live' | 'test' | null;
  publishableKeyMasked: string | null;
  secretKeyMasked: string | null;

  connectEnabled: boolean;
  connectedAccountsCount: number;

  webhookConfigured: boolean;
  webhookEndpointUrl: string;
  webhookSecretMasked: string | null;

  paymentMethodCard: boolean;
  paymentMethodPix: boolean;
  paymentMethodOther: boolean;

  updatedByUserEmail: string | null;
  updatedAt: string | null;
}

export interface UpdatePlatformStripeSettingsRequest {
  connectEnabled: boolean;
  paymentMethodCard: boolean;
  paymentMethodPix: boolean;
  paymentMethodOther: boolean;
}

export interface StripeConnectionTestResult {
  success: boolean;
  message: string;
}

export interface ApiErrorResponse {
  titulo?: string;
  mensagem?: string;
  mensagemErro?: string;
  codigoErro?: string;
}

@Injectable({ providedIn: 'root' })
export class PlatformStripeConfigService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1/platform/stripe-config`;

  get(): Observable<PlatformStripeConfig> {
    return this.http.get<PlatformStripeConfig>(this.baseUrl);
  }

  updateSettings(request: UpdatePlatformStripeSettingsRequest): Observable<PlatformStripeConfig> {
    return this.http.put<PlatformStripeConfig>(`${this.baseUrl}/settings`, request);
  }

  testConnection(): Observable<StripeConnectionTestResult> {
    return this.http.post<StripeConnectionTestResult>(`${this.baseUrl}/test-connection`, {});
  }

  testWebhook(): Observable<StripeConnectionTestResult> {
    return this.http.post<StripeConnectionTestResult>(`${this.baseUrl}/test-webhook`, {});
  }
}
