import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CompanyAccessResponse } from '../../../features/auth/services/auth.service';
import { ApiErrorResponse } from '../../services/accounts.service';
import { CepService } from '../../services/cep.service';
import { CompaniesService } from '../../services/companies.service';
import { cepValidator, cnpjValidator } from '../../validators/br-document.validator';
import { formatCEP, formatCNPJ, formatCellphone, onlyDigits } from '../../utils/br-format.util';

// Versão enxuta de RegisterComponent (só os passos "empresa" + "endereço", sem "responsável pela
// conta" nem aceite de termos) — usada por quem já tem conta para cadastrar mais uma empresa
// (filial) vinculada a ela. Ver AdminLayoutComponent, que abre este modal a partir do seletor de
// empresas do topo, e CompaniesService/CompanyController (backend) que fazem o cadastro em si.
@Component({
  selector: 'app-add-company-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-company-modal.component.html',
  styleUrl: './add-company-modal.component.scss'
})
export class AddCompanyModalComponent {
  private readonly fb = new FormBuilder();
  private readonly companiesService = inject(CompaniesService);
  private readonly cepService = inject(CepService);

  @Output() closed = new EventEmitter<void>();
  @Output() created = new EventEmitter<CompanyAccessResponse>();

  readonly isSubmitting = signal(false);
  readonly submitError = signal<string | null>(null);
  readonly isLookingUpCep = signal(false);
  readonly cepNotFound = signal(false);

  // Precisa bater exatamente com business_type.name (ver ERR_BUSINESS_TYPE_NOT_FOUND em
  // AccountServiceImpl#createAdditionalCompany) — mesma lista de register.component.ts.
  readonly segments: readonly string[] = [
    'Restaurante',
    'Bar',
    'Lanchonete',
    'Hamburgueria',
    'Cafeteria',
    'Padaria e Confeitaria',
    'Food Truck',
    'Pizzaria',
    'Sorveteria',
    'Outro'
  ];

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

  readonly form = this.fb.group({
    company: this.company,
    address: this.address
  });

  onCnpjInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.company.controls.cnpj.setValue(formatCNPJ(input.value));
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

  dismiss(): void {
    if (this.isSubmitting()) {
      return;
    }
    this.closed.emit();
  }

  submit(): void {
    if (this.company.invalid || this.address.invalid) {
      this.company.markAllAsTouched();
      this.address.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.submitError.set(null);

    const company = this.company.getRawValue();
    const address = this.address.getRawValue();

    this.companiesService
      .createAdditionalCompany({
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
        }
      })
      .subscribe({
        next: (response) => {
          this.isSubmitting.set(false);
          this.created.emit(response);
        },
        error: (error: HttpErrorResponse) => {
          this.isSubmitting.set(false);
          this.submitError.set(this.resolveErrorMessage(error));
        }
      });
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
      return 'Este CNPJ já está cadastrado no sistema.';
    }
    if (error.status === 422) {
      return 'Verifique os dados informados e tente novamente.';
    }
    return 'Não foi possível cadastrar a empresa. Tente novamente em instantes.';
  }
}
