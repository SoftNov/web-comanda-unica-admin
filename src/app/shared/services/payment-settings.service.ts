import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface PaymentSettingsResponse {
  onlinePaymentsEnabled: boolean;
}

@Injectable({ providedIn: 'root' })
export class PaymentSettingsService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1/payment-settings`;

  // O cliente pode pagar a comanda online (Stripe) pelo cardápio? Desligado, o painel esconde o
  // Extrato Financeiro (menu + rota), os cards da Stripe na página Pagamentos e no dashboard — fica
  // só o recebido no caixa/garçom. Começa true (padrão do backend) para não piscar a tela de quem
  // usa Stripe; atualizado por refreshEnabled/updateSettings.
  readonly onlinePaymentsEnabled = signal(true);

  refreshEnabled(): void {
    this.getSettings().subscribe({
      next: (settings) => this.onlinePaymentsEnabled.set(settings.onlinePaymentsEnabled),
      error: () => this.onlinePaymentsEnabled.set(true)
    });
  }

  getSettings(): Observable<PaymentSettingsResponse> {
    return this.http
      .get<PaymentSettingsResponse>(this.baseUrl)
      .pipe(tap((settings) => this.onlinePaymentsEnabled.set(settings.onlinePaymentsEnabled)));
  }

  updateSettings(onlinePaymentsEnabled: boolean): Observable<PaymentSettingsResponse> {
    return this.http
      .put<PaymentSettingsResponse>(this.baseUrl, { onlinePaymentsEnabled })
      .pipe(tap((settings) => this.onlinePaymentsEnabled.set(settings.onlinePaymentsEnabled)));
  }
}
