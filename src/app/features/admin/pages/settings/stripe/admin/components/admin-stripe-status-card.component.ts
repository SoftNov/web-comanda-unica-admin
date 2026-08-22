import { Component, Input } from '@angular/core';
import { PlatformStripeConfig } from '../../../../../../../shared/services/platform-stripe-config.service';

// Resumo geral da integração — primeira coisa que o administrador da plataforma vê ao entrar.
@Component({
  selector: 'app-admin-stripe-status-card',
  standalone: true,
  templateUrl: './admin-stripe-status-card.component.html',
  styleUrl: './admin-stripe-status-card.component.scss'
})
export class AdminStripeStatusCardComponent {
  @Input({ required: true }) config!: PlatformStripeConfig;
}
