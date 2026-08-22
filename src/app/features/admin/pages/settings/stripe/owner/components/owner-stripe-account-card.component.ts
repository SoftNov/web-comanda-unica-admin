import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RippleDirective } from '../../../../../../../shared/directives/ripple.directive';
import { StripeAccountStatus } from '../../../../../../../shared/services/stripe-connect.service';

// Tabela de referência com os dados não sensíveis da conta conectada — complementa
// OwnerStripeStatusCardComponent (que já mostra um resumo em destaque logo após conectar).
// Tipo de conta e país são sempre "Express"/"Brasil": é o que o backend sempre cria (ver
// StripeConnectServiceImpl#createStripeAccount na API), por isso ficam fixos aqui.
@Component({
  selector: 'app-owner-stripe-account-card',
  standalone: true,
  imports: [RippleDirective],
  templateUrl: './owner-stripe-account-card.component.html',
  styleUrl: './owner-stripe-account-card.component.scss'
})
export class OwnerStripeAccountCardComponent {
  @Input({ required: true }) status!: StripeAccountStatus;
  @Input() isOpeningDashboard = false;

  @Output() readonly manage = new EventEmitter<void>();
}
