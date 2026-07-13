import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [ScrollRevealDirective, RippleDirective, RouterLink],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  readonly included: string[] = [
    'Usuários ilimitados',
    'Mesas ilimitadas',
    'Produtos ilimitados',
    'Empresas (conforme contrato)',
    'Atualizações automáticas',
    'Suporte',
    'Dashboard',
    'API',
    'Backup',
    'Segurança',
    'Todas as funcionalidades'
  ];
}
