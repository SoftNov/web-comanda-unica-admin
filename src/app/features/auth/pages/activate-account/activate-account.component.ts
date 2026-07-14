import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AuthShellComponent } from '../../components/auth-shell/auth-shell.component';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import { AccountsService, ApiErrorResponse } from '../../../../shared/services/accounts.service';

type ActivationStatus = 'loading' | 'success' | 'error';

@Component({
  selector: 'app-activate-account',
  standalone: true,
  imports: [RouterLink, AuthShellComponent, RippleDirective],
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss'
})
export class ActivateAccountComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly accountsService = inject(AccountsService);

  readonly status = signal<ActivationStatus>('loading');
  readonly successMessage = signal('');
  readonly errorTitle = signal('');
  readonly errorMessage = signal('');

  ngOnInit(): void {
    const token = this.route.snapshot.paramMap.get('token');
    if (!token) {
      this.status.set('error');
      this.errorTitle.set('Link inválido');
      this.errorMessage.set('Nenhum código de ativação foi informado. Verifique se você abriu o link completo enviado por e-mail.');
      return;
    }

    this.accountsService.activateAccount(token).subscribe({
      next: (response) => {
        this.status.set('success');
        this.successMessage.set(response.message || 'Sua conta foi ativada com sucesso.');
      },
      error: (error: HttpErrorResponse) => {
        this.status.set('error');
        const body = error.error as ApiErrorResponse | undefined;
        this.errorTitle.set(body?.titulo || this.fallbackTitle(error.status));
        this.errorMessage.set(body?.mensagem || this.fallbackMessage(error.status));
      }
    });
  }

  private fallbackTitle(status: number): string {
    switch (status) {
      case 404:
        return 'Código não encontrado';
      case 410:
        return 'Código expirado';
      case 422:
        return 'Código já utilizado';
      default:
        return 'Não foi possível ativar sua conta';
    }
  }

  private fallbackMessage(status: number): string {
    switch (status) {
      case 404:
        return 'O código de ativação informado não foi encontrado. Verifique o link enviado por e-mail.';
      case 410:
        return 'Este código de ativação expirou. Os links são válidos por 48 horas após o cadastro.';
      case 422:
        return 'Este código de ativação já foi utilizado anteriormente.';
      default:
        return 'Ocorreu um erro ao tentar ativar sua conta. Tente novamente em instantes ou entre em contato com o suporte.';
    }
  }
}
