import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RippleDirective } from '../../../../../../../shared/directives/ripple.directive';

// Alerta mostrado quando a conta já foi conectada mas o Stripe ainda pede informações
// (charges_enabled/payouts_enabled falso) — ver OwnerStripePageComponent#needsOnboarding.
@Component({
  selector: 'app-owner-stripe-onboarding-card',
  standalone: true,
  imports: [RippleDirective],
  templateUrl: './owner-stripe-onboarding-card.component.html',
  styleUrl: './owner-stripe-onboarding-card.component.scss'
})
export class OwnerStripeOnboardingCardComponent {
  @Input() isLoading = false;

  @Output() readonly continueOnboarding = new EventEmitter<void>();
}
