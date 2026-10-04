import { Component, computed, inject, signal } from '@angular/core';
import { PaymentSettingsService } from '../../../../../../shared/services/payment-settings.service';
import { StripeAccountStatus, StripeConnectService } from '../../../../../../shared/services/stripe-connect.service';
import { OwnerStripeAccountCardComponent } from './components/owner-stripe-account-card.component';
import { OwnerStripeConnectionCardComponent, StripeConnectionCardState } from './components/owner-stripe-connection-card.component';
import { OwnerStripeHowItWorksComponent } from './components/owner-stripe-how-it-works.component';
import { OwnerStripeOnboardingCardComponent } from './components/owner-stripe-onboarding-card.component';
import { OwnerStripeStatusCardComponent } from './components/owner-stripe-status-card.component';

// Orquestra toda a tela de "Pagamentos" do proprietário: busca o status uma vez ao entrar e
// decide qual card mostrar. Os componentes filhos são "burros" (só recebem estado via @Input e
// emitem intenção via @Output) — toda chamada à API e toda decisão de estado fica aqui.
@Component({
  selector: 'app-owner-stripe-page',
  standalone: true,
  imports: [
    OwnerStripeConnectionCardComponent,
    OwnerStripeOnboardingCardComponent,
    OwnerStripeStatusCardComponent,
    OwnerStripeHowItWorksComponent,
    OwnerStripeAccountCardComponent
  ],
  templateUrl: './owner-stripe-page.component.html',
  styleUrl: './owner-stripe-page.component.scss'
})
export class OwnerStripePageComponent {
  private readonly stripeConnectService = inject(StripeConnectService);
  private readonly paymentSettingsService = inject(PaymentSettingsService);

  // Liga/desliga o pagamento pelo cardápio digital — desligado, os cards da Stripe somem desta tela.
  readonly onlinePaymentsEnabled = this.paymentSettingsService.onlinePaymentsEnabled;
  readonly isLoadingSettings = signal(true);
  readonly isSavingSettings = signal(false);
  readonly settingsError = signal<string | null>(null);

  readonly isLoading = signal(true);
  readonly loadError = signal(false);

  readonly account = signal<StripeAccountStatus | null>(null);
  readonly connectionState = signal<StripeConnectionCardState>('not-connected');

  readonly isRefreshing = signal(false);
  readonly isContinuingOnboarding = signal(false);
  readonly isOpeningDashboard = signal(false);

  readonly needsOnboarding = computed(() => {
    const account = this.account();
    return !!account && account.connected && !account.onboardingCompleted;
  });

  constructor() {
    this.loadSettings();
    this.loadStatus();
  }

  toggleOnlinePayments(enabled: boolean, checkbox?: HTMLInputElement): void {
    if (
      !enabled &&
      !confirm('Desativar pagamentos na comanda? Os clientes passam a pagar só no caixa ou com o garçom.')
    ) {
      if (checkbox) {
        checkbox.checked = true;
      }
      return;
    }
    this.isSavingSettings.set(true);
    this.settingsError.set(null);
    this.paymentSettingsService.updateSettings(enabled).subscribe({
      next: () => {
        this.isSavingSettings.set(false);
        if (enabled) {
          this.loadStatus();
        }
      },
      error: () => {
        this.isSavingSettings.set(false);
        this.settingsError.set('Não foi possível salvar a configuração de pagamentos.');
        if (checkbox) {
          checkbox.checked = !enabled;
        }
      }
    });
  }

  connect(): void {
    this.connectionState.set('connecting');
    this.stripeConnectService.createOnboardingLink().subscribe({
      next: (response) => {
        window.location.href = response.url;
      },
      error: () => {
        this.connectionState.set('error');
      }
    });
  }

  retryConnect(): void {
    this.connectionState.set('not-connected');
  }

  retryLoad(): void {
    this.loadStatus();
  }

  continueOnboarding(): void {
    this.isContinuingOnboarding.set(true);
    this.stripeConnectService.createOnboardingLink().subscribe({
      next: (response) => {
        window.location.href = response.url;
      },
      error: () => {
        this.isContinuingOnboarding.set(false);
      }
    });
  }

  refreshStatus(): void {
    this.isRefreshing.set(true);
    this.stripeConnectService.getAccount().subscribe({
      next: (account) => {
        this.isRefreshing.set(false);
        this.account.set(account);
      },
      error: () => {
        this.isRefreshing.set(false);
      }
    });
  }

  manageAccount(): void {
    this.isOpeningDashboard.set(true);
    this.stripeConnectService.createDashboardLink().subscribe({
      next: (response) => {
        window.open(response.url, '_blank', 'noopener');
        this.isOpeningDashboard.set(false);
      },
      error: () => {
        this.isOpeningDashboard.set(false);
      }
    });
  }

  private loadSettings(): void {
    this.isLoadingSettings.set(true);
    this.paymentSettingsService.getSettings().subscribe({
      next: () => this.isLoadingSettings.set(false),
      error: () => {
        this.isLoadingSettings.set(false);
        this.settingsError.set('Não foi possível carregar a configuração de pagamentos.');
      }
    });
  }

  private loadStatus(): void {
    this.isLoading.set(true);
    this.loadError.set(false);

    this.stripeConnectService.getAccount().subscribe({
      next: (account) => {
        this.isLoading.set(false);
        this.account.set(account);
        this.connectionState.set('not-connected');
      },
      error: () => {
        this.isLoading.set(false);
        this.loadError.set(true);
      }
    });
  }
}
