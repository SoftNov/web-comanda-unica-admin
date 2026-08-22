import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RippleDirective } from '../../../../../../../shared/directives/ripple.directive';
import { StripeAccountStatus } from '../../../../../../../shared/services/stripe-connect.service';

// Card de destaque mostrado assim que a conta está conectada — status resumido + ações
// principais. Informações mais detalhadas (tipo de conta, país) ficam em
// OwnerStripeAccountCardComponent, mais abaixo na página.
@Component({
  selector: 'app-owner-stripe-status-card',
  standalone: true,
  imports: [RippleDirective],
  templateUrl: './owner-stripe-status-card.component.html',
  styleUrl: './owner-stripe-status-card.component.scss'
})
export class OwnerStripeStatusCardComponent {
  @Input({ required: true }) status!: StripeAccountStatus;
  @Input() isRefreshing = false;
  @Input() isOpeningDashboard = false;

  @Output() readonly manage = new EventEmitter<void>();
  @Output() readonly refresh = new EventEmitter<void>();
}
