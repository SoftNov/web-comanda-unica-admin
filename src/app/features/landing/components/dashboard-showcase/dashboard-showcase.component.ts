import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-dashboard-showcase',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './dashboard-showcase.component.html',
  styleUrl: './dashboard-showcase.component.scss'
})
export class DashboardShowcaseComponent {
  readonly modules: string[] = [
    'Dashboard',
    'Empresas',
    'Funcionários',
    'Mesas',
    'Produtos',
    'Categorias',
    'Estoque',
    'Comandas',
    'Caixa',
    'Relatórios',
    'Financeiro',
    'Usuários',
    'Permissões',
    'Auditoria',
    'Configurações'
  ];
}
