import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthShellComponent } from '../../components/auth-shell/auth-shell.component';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import { AccountsService, ApiErrorResponse, CreateAccountRequest } from '../../../../shared/services/accounts.service';
import { CepService } from '../../../../shared/services/cep.service';
import { cepValidator, cnpjValidator, cpfValidator } from '../../../../shared/validators/br-document.validator';
import { passwordStrengthValidator } from '../../../../shared/validators/password.validator';
import { formatCEP, formatCNPJ, formatCPF, formatCellphone, onlyDigits } from '../../../../shared/utils/br-format.util';
import { PasswordRulesComponent } from '../../../../shared/components/password-rules/password-rules.component';

function passwordsMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  return password && confirmPassword && password !== confirmPassword ? { passwordMismatch: true } : null;
}

const STEP_COUNT = 3;

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, AuthShellComponent, RippleDirective, PasswordRulesComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private readonly fb = new FormBuilder();
  private readonly cepService = inject(CepService);
  private readonly accountsService = inject(AccountsService);

  readonly stepCount = STEP_COUNT;
  readonly currentStep = signal(1);

  readonly isSubmitting = signal(false);
  readonly submitted = signal(false);
  readonly submitError = signal<string | null>(null);
  readonly showPassword = signal(false);
  readonly showConfirmPassword = signal(false);
  readonly isLookingUpCep = signal(false);
  readonly cepNotFound = signal(false);

  readonly segments: readonly string[] = [
    'Restaurante',
    'Bar',
    'Lanchonete',
    'Cafeteria',
    'Padaria e Confeitaria',
    'Food Truck',
    'Pizzaria',
    'Sorveteria',
    'Outro'
  ];

  readonly account = this.fb.nonNullable.group(
    {
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      cpf: ['', [Validators.required, cpfValidator()]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required, passwordStrengthValidator()]],
      confirmPassword: ['', [Validators.required]]
    },
    { validators: passwordsMatchValidator }
  );

  readonly company = this.fb.nonNullable.group({
    businessName: ['', [Validators.required, Validators.minLength(2)]],
    cnpj: ['', [Validators.required, cnpjValidator()]],
    segment: ['', [Validators.required]],
    businessPhone: ['', [Validators.required]],
    businessEmail: ['', [Validators.required, Validators.email]]
  });

  readonly address = this.fb.nonNullable.group({
    cep: ['', [Validators.required, cepValidator()]],
    street: ['', [Validators.required]],
    number: ['', [Validators.required]],
    complement: [''],
    neighborhood: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]]
  });

  readonly acceptTerms = this.fb.nonNullable.control(false, Validators.requiredTrue);

  readonly form = this.fb.group({
    account: this.account,
    company: this.company,
    address: this.address,
    acceptTerms: this.acceptTerms
  });

  togglePassword(): void {
    this.showPassword.update((v) => !v);
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword.update((v) => !v);
  }

  onCpfInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.account.controls.cpf.setValue(formatCPF(input.value));
  }

  onCnpjInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.company.controls.cnpj.setValue(formatCNPJ(input.value));
  }

  onAccountPhoneInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.account.controls.phone.setValue(formatCellphone(input.value));
  }

  onBusinessPhoneInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.company.controls.businessPhone.setValue(formatCellphone(input.value));
  }

  onCepInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.address.controls.cep.setValue(formatCEP(input.value));
    this.cepNotFound.set(false);
  }

  onCepBlur(): void {
    const digits = onlyDigits(this.address.controls.cep.value);
    if (digits.length !== 8) {
      return;
    }

    this.isLookingUpCep.set(true);
    this.cepNotFound.set(false);

    this.cepService.lookup(digits).subscribe({
      next: (result) => {
        this.isLookingUpCep.set(false);
        if (!result) {
          this.cepNotFound.set(true);
          return;
        }
        this.address.patchValue({
          street: result.street,
          neighborhood: result.neighborhood,
          city: result.city,
          state: result.state
        });
      },
      error: () => {
        this.isLookingUpCep.set(false);
        this.cepNotFound.set(true);
      }
    });
  }

  goToNextStep(): void {
    const group = this.currentStep() === 1 ? this.account : this.company;
    if (group.invalid) {
      group.markAllAsTouched();
      return;
    }
    this.currentStep.update((step) => Math.min(step + 1, this.stepCount));
  }

  goToPreviousStep(): void {
    this.currentStep.update((step) => Math.max(step - 1, 1));
  }

  onSubmit(): void {
    if (this.address.invalid || this.acceptTerms.invalid) {
      this.address.markAllAsTouched();
      this.acceptTerms.markAsTouched();
      return;
    }

    this.submitError.set(null);
    this.isSubmitting.set(true);

    this.accountsService.createAccount(this.buildPayload()).subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.submitted.set(true);
      },
      error: (error: HttpErrorResponse) => {
        this.isSubmitting.set(false);
        this.submitError.set(this.resolveErrorMessage(error));
      }
    });
  }

  private buildPayload(): CreateAccountRequest {
    const account = this.account.getRawValue();
    const company = this.company.getRawValue();
    const address = this.address.getRawValue();

    return {
      owner: {
        fullName: account.fullName.trim(),
        cpf: onlyDigits(account.cpf),
        email: account.email.trim(),
        phone: onlyDigits(account.phone),
        password: account.password
      },
      company: {
        businessName: company.businessName.trim(),
        cnpj: onlyDigits(company.cnpj),
        segment: company.segment,
        phone: onlyDigits(company.businessPhone),
        email: company.businessEmail.trim()
      },
      address: {
        zipCode: onlyDigits(address.cep),
        street: address.street.trim(),
        number: address.number.trim(),
        complement: address.complement.trim() || undefined,
        neighborhood: address.neighborhood.trim(),
        city: address.city.trim(),
        state: address.state.trim().toUpperCase()
      },
      acceptedTerms: this.acceptTerms.value
    };
  }

  private resolveErrorMessage(error: HttpErrorResponse): string {
    const body = error.error as ApiErrorResponse | undefined;
    if (body?.mensagem) {
      return body.mensagem;
    }
    if (body?.titulo) {
      return body.titulo;
    }
    if (error.status === 409) {
      return 'E-mail, CPF ou CNPJ já cadastrado no sistema.';
    }
    if (error.status === 422) {
      return 'Verifique os dados informados e tente novamente.';
    }
    return 'Não foi possível criar a conta. Tente novamente em instantes.';
  }
}
