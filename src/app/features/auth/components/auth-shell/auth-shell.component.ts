import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-shell',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './auth-shell.component.html',
  styleUrl: './auth-shell.component.scss'
})
export class AuthShellComponent {
  @Input() eyebrow = '';
  @Input({ required: true }) title!: string;
  @Input() subtitle = '';

  readonly year = new Date().getFullYear();

  readonly highlights: string[] = [
    'Sem mensalidade — pague apenas pelas comandas utilizadas',
    'Usuários, mesas e comandas ilimitados',
    'Implantação rápida, 100% na nuvem'
  ];
}
