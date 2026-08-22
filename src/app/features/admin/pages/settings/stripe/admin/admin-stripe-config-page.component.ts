import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import {
  ApiErrorResponse,
  PlatformStripeConfig,
  PlatformStripeConfigService,
  StripeConnectionTestResult,
  UpdatePlatformStripeSettingsRequest
} from '../../../../../../shared/services/platform-stripe-config.service';
import { autoDismiss } from '../../../../../../shared/utils/auto-dismiss.util';
import { AdminStripeAuditCardComponent } from './components/admin-stripe-audit-card.component';
import { AdminStripeConnectCardComponent } from './components/admin-stripe-connect-card.component';
import { AdminStripeCredentialsCardComponent } from './components/admin-stripe-credentials-card.component';
import { AdminStripeFeeCardComponent } from './components/admin-stripe-fee-card.component';
import { AdminStripeSecurityCardComponent } from './components/admin-stripe-security-card.component';
import { AdminStripeStatusCardComponent } from './components/admin-stripe-status-card.component';
import { AdminStripeWebhookCardComponent } from './components/admin-stripe-webhook-card.component';

// Orquestra a tela de Stripe da plataforma (exclusiva de platformAdminGuard): busca a config uma
// vez ao entrar e centraliza toda chamada à API. Os cards filhos só recebem estado via @Input e
// emitem intenção via @Output — nenhum deles fala com o backend diretamente. Publishable Key,
// Secret Key e Webhook Secret vêm de variável de ambiente do servidor — não são editáveis por
// esta tela; o backend só devolve versões mascaradas (ver PlatformStripeConfigServiceImpl#mask).
@Component({
  selector: 'app-admin-stripe-config-page',
  standalone: true,
  imports: [
    AdminStripeStatusCardComponent,
    AdminStripeCredentialsCardComponent,
    AdminStripeConnectCardComponent,
    AdminStripeFeeCardComponent,
    AdminStripeWebhookCardComponent,
    AdminStripeSecurityCardComponent,
    AdminStripeAuditCardComponent
  ],
  templateUrl: './admin-stripe-config-page.component.html',
  styleUrl: './admin-stripe-config-page.component.scss'
})
export class AdminStripeConfigPageComponent {
  private readonly platformStripeConfigService = inject(PlatformStripeConfigService);

  readonly isLoading = signal(true);
  readonly loadError = signal(false);
  readonly config = signal<PlatformStripeConfig | null>(null);

  readonly isSavingSettings = signal(false);
  readonly settingsError = signal<string | null>(null);

  readonly isTestingConnection = signal(false);
  readonly connectionTestResult = signal<StripeConnectionTestResult | null>(null);

  readonly isTestingWebhook = signal(false);
  readonly webhookTestResult = signal<StripeConnectionTestResult | null>(null);

  constructor() {
    this.loadConfig();
  }

  retryLoad(): void {
    this.loadConfig();
  }

  submitSettings(request: UpdatePlatformStripeSettingsRequest): void {
    this.isSavingSettings.set(true);
    this.settingsError.set(null);

    this.platformStripeConfigService.updateSettings(request).subscribe({
      next: (config) => {
        this.isSavingSettings.set(false);
        this.config.set(config);
      },
      error: (error: HttpErrorResponse) => {
        this.isSavingSettings.set(false);
        this.settingsError.set(this.resolveErrorMessage(error));
        autoDismiss(this.settingsError, null);
      }
    });
  }

  testConnection(): void {
    this.isTestingConnection.set(true);
    this.connectionTestResult.set(null);

    this.platformStripeConfigService.testConnection().subscribe({
      next: (result) => {
        this.isTestingConnection.set(false);
        this.connectionTestResult.set(result);
        autoDismiss(this.connectionTestResult, null, 5000);
      },
      error: () => {
        this.isTestingConnection.set(false);
        this.connectionTestResult.set({ success: false, message: 'Não foi possível testar a conexão com o Stripe.' });
        autoDismiss(this.connectionTestResult, null, 5000);
      }
    });
  }

  testWebhook(): void {
    this.isTestingWebhook.set(true);
    this.webhookTestResult.set(null);

    this.platformStripeConfigService.testWebhook().subscribe({
      next: (result) => {
        this.isTestingWebhook.set(false);
        this.webhookTestResult.set(result);
        autoDismiss(this.webhookTestResult, null, 5000);
      },
      error: () => {
        this.isTestingWebhook.set(false);
        this.webhookTestResult.set({ success: false, message: 'Não foi possível testar o webhook.' });
        autoDismiss(this.webhookTestResult, null, 5000);
      }
    });
  }

  private loadConfig(): void {
    this.isLoading.set(true);
    this.loadError.set(false);

    this.platformStripeConfigService.get().subscribe({
      next: (config) => {
        this.isLoading.set(false);
        this.config.set(config);
      },
      error: () => {
        this.isLoading.set(false);
        this.loadError.set(true);
      }
    });
  }

  private resolveErrorMessage(error: HttpErrorResponse): string {
    const body = error.error as ApiErrorResponse | undefined;
    if (body?.mensagem) {
      return body.mensagem;
    }
    if (body?.titulo) {
      return body.titulo;
    }
    if (error.status === 422 || error.status === 400) {
      return 'Verifique os dados informados.';
    }
    return 'Não foi possível concluir a operação. Tente novamente em instantes.';
  }
}
