import { HttpErrorResponse } from '@angular/common/http';
import { Component, DestroyRef, Input, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PasswordRulesComponent } from '../../../../shared/components/password-rules/password-rules.component';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import { passwordStrengthValidator, passwordsMatchValidator } from '../../../../shared/validators/password.validator';
import { extractUnlockTime, formatCountdown, secondsUntil } from '../../../../shared/utils/countdown.util';
import { ApiErrorResponse, AuthService } from '../../services/auth.service';

type Step = 'start' | 'code' | 'password' | 'done';
type CountdownPurpose = 'code' | 'resetToken' | 'blocked';

// Fluxo de código de verificação + nova senha, compartilhado entre a
// recuperação de senha pública (e-mail digitado pelo visitante) e a
// redefinição de senha da área logada (e-mail fixo, o do usuário autenticado).
@Component({
  selector: 'app-password-reset-flow',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RippleDirective, PasswordRulesComponent],
  templateUrl: './password-reset-flow.component.html',
  styleUrl: './password-reset-flow.component.scss'
})
export class PasswordResetFlowComponent {
  private readonly fb = new FormBuilder();
  private readonly authService = inject(AuthService);
  private readonly destroyRef = inject(DestroyRef);

  @Input() lockedEmail: string | null = null;
  @Input() successMessage = 'Sua senha foi redefinida com sucesso.';
  @Input() doneLinkPath = '/entrar';
  @Input() doneLinkLabel = 'Ir para a tela de login';
  @Input() footerLinkPath: string | null = '/entrar';
  @Input() footerLinkLabel = 'Voltar para o login';

  readonly formatCountdown = formatCountdown;

  readonly step = signal<Step>('start');
  readonly isSubmitting = signal(false);
  readonly submitError = signal<string | null>(null);
  readonly isBlocked = signal(false);
  readonly blockedUntil = signal<Date | null>(null);
  readonly remainingSeconds = signal(0);
  readonly doneAt = signal<string | null>(null);

  readonly showPassword = signal(false);
  readonly showConfirmPassword = signal(false);

  private resetToken: string | null = null;
  private intervalId: ReturnType<typeof setInterval> | null = null;
  private countdownPurpose: CountdownPurpose | null = null;

  readonly emailForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]]
  });

  readonly codeForm = this.fb.nonNullable.group({
    code: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]]
  });

  readonly passwordForm = this.fb.nonNullable.group(
    {
      newPassword: ['', [Validators.required, passwordStrengthValidator()]],
      confirmPassword: ['', [Validators.required]]
    },
    { validators: passwordsMatchValidator('newPassword', 'confirmPassword') }
  );

  constructor() {
    this.destroyRef.onDestroy(() => this.stopCountdown());
  }

  private get currentEmail(): string {
    return (this.lockedEmail ?? this.emailForm.getRawValue().email).trim();
  }

  togglePassword(): void {
    this.showPassword.update((v) => !v);
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword.update((v) => !v);
  }

  onSubmitStart(): void {
    if (this.lockedEmail) {
      this.requestCode(this.lockedEmail);
      return;
    }

    this.submitError.set(null);

    if (this.emailForm.invalid) {
      this.emailForm.markAllAsTouched();
      return;
    }

    this.requestCode(this.emailForm.getRawValue().email.trim());
  }

  onSubmitCode(): void {
    this.submitError.set(null);

    if (this.codeForm.invalid) {
      this.codeForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    const email = this.currentEmail;
    const code = this.codeForm.getRawValue().code;

    this.authService.verifyResetCode({ email, code }).subscribe({
      next: (response) => {
        this.isSubmitting.set(false);
        this.resetToken = response.resetToken;
        this.passwordForm.reset();
        this.step.set('password');
        this.startCountdown(new Date(response.resetTokenExpiresAt), 'resetToken');
      },
      error: (error: HttpErrorResponse) => {
        this.isSubmitting.set(false);

        if (error.status === 410) {
          this.goToStartStep(this.extractMessage(error, { 410: 'O código expirou. Solicite um novo código para continuar.' }));
          return;
        }

        this.handleError(error, {
          404: 'Nenhuma conta ou solicitação de código encontrada.',
          422: 'Código incorreto. Verifique e tente novamente.'
        });
      }
    });
  }

  onSubmitPassword(): void {
    this.submitError.set(null);

    if (this.passwordForm.invalid) {
      this.passwordForm.markAllAsTouched();
      return;
    }

    if (!this.resetToken) {
      this.goToStartStep('Sua sessão de redefinição expirou. Solicite um novo código.');
      return;
    }

    this.isSubmitting.set(true);
    const email = this.currentEmail;
    const { newPassword, confirmPassword } = this.passwordForm.getRawValue();

    this.authService.resetPassword({ email, resetToken: this.resetToken, newPassword, confirmPassword }).subscribe({
      next: (response) => {
        this.isSubmitting.set(false);
        this.resetToken = null;
        this.stopCountdown();
        this.doneAt.set(response.resetAt);
        this.step.set('done');
      },
      error: (error: HttpErrorResponse) => {
        this.isSubmitting.set(false);

        if (error.status === 410 || error.status === 422) {
          this.goToStartStep(
            this.extractMessage(error, {
              410: 'O token de redefinição expirou. Solicite um novo código.',
              422: 'Este token já foi utilizado ou invalidado. Solicite um novo código.'
            })
          );
          return;
        }

        this.handleError(error, { 404: 'Token de redefinição não encontrado. Solicite um novo código.' });
      }
    });
  }

  requestNewCode(): void {
    // Reenvia o código com o e-mail já confirmado nesta sessão em vez de
    // voltar para a tela inicial, evitando uma segunda solicitação manual.
    this.requestCode(this.currentEmail);
  }

  retryAfterBlock(): void {
    this.isBlocked.set(false);
    this.blockedUntil.set(null);
    this.submitError.set(null);
  }

  private requestCode(email: string): void {
    this.submitError.set(null);
    this.isSubmitting.set(true);

    this.authService.forgotPassword({ email }).subscribe({
      next: (response) => {
        this.isSubmitting.set(false);
        this.resetToken = null;
        this.codeForm.reset();
        this.step.set('code');
        this.startCountdown(new Date(response.codeExpiresAt), 'code');
      },
      error: (error: HttpErrorResponse) => {
        this.isSubmitting.set(false);
        this.handleError(error, {
          404: 'Nenhuma conta encontrada com o e-mail informado.',
          422: 'Informe um e-mail válido.'
        });
      }
    });
  }

  private goToStartStep(message: string | null): void {
    this.resetToken = null;
    this.stopCountdown();
    this.isBlocked.set(false);
    this.blockedUntil.set(null);
    this.codeForm.reset();
    this.passwordForm.reset();
    this.step.set('start');
    this.submitError.set(message);
  }

  private extractMessage(error: HttpErrorResponse, fallbacks: Partial<Record<number, string>> = {}): string {
    const body = error.error as ApiErrorResponse | undefined;
    return (
      body?.mensagemErro ||
      body?.mensagem ||
      body?.titulo ||
      fallbacks[error.status] ||
      'Ocorreu um erro. Tente novamente em instantes.'
    );
  }

  private handleError(error: HttpErrorResponse, fallbacks: Partial<Record<number, string>> = {}): void {
    const message = this.extractMessage(error, fallbacks);
    this.submitError.set(message);

    if (error.status === 429) {
      this.isBlocked.set(true);
      const unlock = extractUnlockTime(message);
      this.blockedUntil.set(unlock);
      if (unlock) {
        this.startCountdown(unlock, 'blocked');
      }
    }
  }

  private startCountdown(target: Date, purpose: CountdownPurpose): void {
    this.stopCountdown();
    this.countdownPurpose = purpose;

    const tick = () => {
      const remaining = secondsUntil(target);
      this.remainingSeconds.set(remaining);
      if (remaining <= 0) {
        this.stopCountdown();
        this.onCountdownExpired(purpose);
      }
    };

    tick();
    this.intervalId = setInterval(tick, 1000);
  }

  private stopCountdown(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.countdownPurpose = null;
  }

  private onCountdownExpired(purpose: CountdownPurpose): void {
    if (purpose === 'blocked') {
      this.isBlocked.set(false);
      this.blockedUntil.set(null);
      this.submitError.set(null);
      return;
    }

    if (purpose === 'code') {
      this.goToStartStep('O código expirou. Solicite um novo código para continuar.');
      return;
    }

    this.goToStartStep('O tempo para redefinir sua senha expirou. Solicite um novo código.');
  }
}
