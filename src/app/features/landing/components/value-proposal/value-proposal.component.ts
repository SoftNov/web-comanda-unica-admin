import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { CountUpDirective } from '../../../../shared/directives/count-up.directive';

interface ValueCard {
  icon: string;
  label: string;
}

@Component({
  selector: 'app-value-proposal',
  standalone: true,
  imports: [ScrollRevealDirective, CountUpDirective],
  templateUrl: './value-proposal.component.html',
  styleUrl: './value-proposal.component.scss'
})
export class ValueProposalComponent {
  readonly cards: ValueCard[] = [
    { icon: 'money_off', label: 'Sem mensalidade' },
    { icon: 'link_off', label: 'Sem fidelidade' },
    { icon: 'groups', label: 'Sem limite de usuários' },
    { icon: 'table_bar', label: 'Sem limite de mesas' },
    { icon: 'receipt_long', label: 'Sem limite de comandas' },
    { icon: 'cloud_done', label: '100% Cloud' }
  ];
}
