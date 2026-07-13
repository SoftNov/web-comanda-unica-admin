import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

interface Step {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  readonly steps: Step[] = [
    { icon: 'storefront', title: 'Cadastre seu estabelecimento', description: 'Configure seu restaurante, bar ou hamburgueria em minutos.' },
    { icon: 'badge', title: 'Cadastre funcionários', description: 'Defina perfis e permissões de acesso para sua equipe.' },
    { icon: 'restaurant_menu', title: 'Cadastre produtos', description: 'Monte seu cardápio com categorias, preços e estoque.' },
    { icon: 'qr_code_2', title: 'Imprima QR Codes', description: 'Um código por mesa, pronto para o cliente escanear.' },
    { icon: 'phone_iphone', title: 'Clientes iniciam comandas', description: 'O cliente abre a comanda digital direto pelo celular.' },
    { icon: 'bolt', title: 'Pedidos chegam automaticamente', description: 'Garçons e cozinha recebem tudo em tempo real.' },
    { icon: 'point_of_sale', title: 'Feche a conta', description: 'Divisão, pagamento e fechamento de caixa simplificados.' },
    { icon: 'payments', title: 'Pague somente pelas comandas utilizadas', description: 'Sem mensalidade fixa — a cobrança acompanha seu movimento.' }
  ];
}
