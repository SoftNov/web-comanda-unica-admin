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

  // Taxa de processamento cobrada pela adquirente sobre pagamentos com cartão feitos pelo
  // cardápio digital — separada da taxa de uso da plataforma (pricing__note acima). Só incide
  // sobre o que for efetivamente pago com cartão pelo app; dinheiro/cartão na maquininha da casa
  // não passam por aqui.
  readonly paymentFees: { label: string; value: string }[] = [{ label: 'Cartão nacional', value: '3,99% + R$ 0,39 por transação' }];
}
