import { Component, computed, inject, signal } from '@angular/core';
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
    this.loadStatus();
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
