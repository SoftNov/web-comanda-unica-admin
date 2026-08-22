import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RippleDirective } from '../../../../../../../shared/directives/ripple.directive';

export type StripeConnectionCardState = 'not-connected' | 'connecting' | 'error';

// Cobre os três primeiros estados do fluxo de conexão (ver spec): "não conectada" com a lista de
// benefícios e o CTA, "conectando" (loading, botão desabilitado) e "erro" (mensagem amigável +
// tentar de novo). O estado "conectada" vive em OwnerStripeStatusCard — este componente nem
// aparece nesse caso (ver OwnerStripePageComponent).
@Component({
  selector: 'app-owner-stripe-connection-card',
  standalone: true,
  imports: [RippleDirective],
  templateUrl: './owner-stripe-connection-card.component.html',
  styleUrl: './owner-stripe-connection-card.component.scss'
})
export class OwnerStripeConnectionCardComponent {
  @Input() state: StripeConnectionCardState = 'not-connected';

  @Output() readonly connect = new EventEmitter<void>();
  @Output() readonly retry = new EventEmitter<void>();
}
