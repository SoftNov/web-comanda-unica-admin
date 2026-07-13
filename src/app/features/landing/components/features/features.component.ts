import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

interface Differential {
  icon: string;
  label: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  readonly differentials: Differential[] = [
    { icon: 'bolt', label: 'Muito rápido' },
    { icon: 'cloud', label: '100% Cloud' },
    { icon: 'lock', label: 'Segurança Bancária' },
    { icon: 'devices', label: 'Funciona em qualquer dispositivo' },
    { icon: 'insights', label: 'Relatórios Inteligentes' },
    { icon: 'credit_card', label: 'Integração com pagamentos' },
    { icon: 'receipt_long', label: 'Emissão de documentos fiscais' },
    { icon: 'notifications_active', label: 'Notificações em tempo real' },
    { icon: 'trending_up', label: 'Escalável' },
    { icon: 'rocket_launch', label: 'Atualizações automáticas' }
  ];
}
