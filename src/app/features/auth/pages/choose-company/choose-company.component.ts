import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthShellComponent } from '../../components/auth-shell/auth-shell.component';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import { AuthService, CompanyAccessResponse } from '../../services/auth.service';

// Tela intermediária entre o login e o painel para o dono de mais de uma empresa (ver
// AuthService#shouldChooseCompany) — sem ela, o painel entraria direto na primeira empresa da
// lista (companies[0]) sem o dono ter escolhido nada. Só é alcançada a partir de
// LoginComponent#onSubmit; quem cair aqui sem se enquadrar (ex: acesso direto pela URL depois de
// já ter escolhido) é mandado de volta para o painel.
@Component({
  selector: 'app-choose-company',
  standalone: true,
  imports: [AuthShellComponent, RippleDirective],
  templateUrl: './choose-company.component.html',
  styleUrl: './choose-company.component.scss'
})
export class ChooseCompanyComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly companies = this.authService.companies;

  constructor() {
    if (!this.authService.shouldChooseCompany()) {
      this.router.navigateByUrl('/painel');
    }
  }

  choose(company: CompanyAccessResponse): void {
    this.authService.selectCompany(company.companyId);
    this.router.navigateByUrl('/painel');
  }

  logout(): void {
    this.authService.logout();
  }
}
