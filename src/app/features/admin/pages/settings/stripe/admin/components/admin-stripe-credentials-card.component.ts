import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RippleDirective } from '../../../../../../../shared/directives/ripple.directive';
import { PlatformStripeConfig, StripeConnectionTestResult } from '../../../../../../../shared/services/platform-stripe-config.service';

// Credenciais da PLATAFORMA (nunca de uma empresa) — Publishable Key, Secret Key e Webhook Secret
// vêm só de variável de ambiente do servidor (ver StripeProperties/PlatformStripeConfigServiceImpl
// no backend), nunca são digitadas nesta tela. O front só exibe o status mascarado e permite
// testar a conexão.
@Component({
  selector: 'app-admin-stripe-credentials-card',
  standalone: true,
  imports: [RippleDirective],
  templateUrl: './admin-stripe-credentials-card.component.html',
  styleUrl: './admin-stripe-credentials-card.component.scss'
})
export class AdminStripeCredentialsCardComponent {
  @Input({ required: true }) config!: PlatformStripeConfig;
  @Input() testResult: StripeConnectionTestResult | null = null;
  @Input() isTesting = false;

  @Output() readonly test = new EventEmitter<void>();
}
