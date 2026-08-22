import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { RippleDirective } from '../../../../../../../shared/directives/ripple.directive';
import { PlatformStripeConfig, StripeConnectionTestResult } from '../../../../../../../shared/services/platform-stripe-config.service';

// Eventos monitorados pelo StripeWebhookServiceImpl no backend — lista só informativa (o Stripe
// Dashboard é quem realmente decide quais eventos são enviados, configurado lá pelo administrador
// junto com esta mesma URL de endpoint).
const MONITORED_EVENTS = [
  'account.updated',
  'payment_intent.succeeded',
  'payment_intent.payment_failed',
  'charge.refunded'
];

// O Webhook Secret vem só de variável de ambiente do servidor (ver StripeProperties) — nunca é
// digitado nesta tela. O front só exibe o status mascarado, a URL do endpoint e o botão de teste.
@Component({
  selector: 'app-admin-stripe-webhook-card',
  standalone: true,
  imports: [RippleDirective],
  templateUrl: './admin-stripe-webhook-card.component.html',
  styleUrl: './admin-stripe-webhook-card.component.scss'
})
export class AdminStripeWebhookCardComponent {
  @Input({ required: true }) config!: PlatformStripeConfig;
  @Input() testResult: StripeConnectionTestResult | null = null;
  @Input() isTesting = false;

  @Output() readonly test = new EventEmitter<void>();

  readonly monitoredEvents = MONITORED_EVENTS;
  readonly urlCopied = signal(false);

  copyEndpointUrl(): void {
    navigator.clipboard.writeText(this.config.webhookEndpointUrl).then(() => {
      this.urlCopied.set(true);
      setTimeout(() => this.urlCopied.set(false), 2000);
    });
  }
}
