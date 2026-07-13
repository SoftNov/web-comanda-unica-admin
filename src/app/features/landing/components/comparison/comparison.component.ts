import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

interface ComparisonRow {
  others: string;
  ours: string;
}

@Component({
  selector: 'app-comparison',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './comparison.component.html',
  styleUrl: './comparison.component.scss'
})
export class ComparisonComponent {
  readonly rows: ComparisonRow[] = [
    { others: 'Mensalidade fixa', ours: 'Pague apenas pelo uso' },
    { others: 'Limite de usuários', ours: 'Usuários ilimitados' },
    { others: 'Limite de mesas', ours: 'Mesas ilimitadas' },
    { others: 'Planos diferentes', ours: 'Mesmo plano para todos' },
    { others: 'Upgrade obrigatório', ours: 'Sem upgrade' },
    { others: 'Cobrança mesmo sem movimento', ours: 'Sem uso, sem cobrança' }
  ];
}
