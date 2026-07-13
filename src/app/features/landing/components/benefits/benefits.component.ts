import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss'
})
export class BenefitsComponent {
  readonly benefits: Benefit[] = [
    { icon: 'description', title: 'Comanda Digital', description: 'Elimine papel e reduza erros no atendimento.' },
    { icon: 'qr_code_2', title: 'QR Code', description: 'Clientes acessam o cardápio e a comanda rapidamente.' },
    { icon: 'bolt', title: 'Pedidos em Tempo Real', description: 'Garçons e cozinha sincronizados, sem retrabalho.' },
    { icon: 'account_balance_wallet', title: 'Gestão Financeira', description: 'Controle total do caixa em tempo real.' },
    { icon: 'badge', title: 'Gestão de Funcionários', description: 'Permissões por perfil de acesso.' },
    { icon: 'store', title: 'Multiempresa', description: 'Gerencie várias unidades em um só lugar.' }
  ];
}
