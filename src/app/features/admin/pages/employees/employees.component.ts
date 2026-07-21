import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  ApiErrorResponse,
  CreateEmployeeRequest,
  EmployeeResponse,
  EmployeesService,
  UpdateEmployeeRequest
} from '../../../../shared/services/employees.service';
import { ProfileResponse, ProfilesService } from '../../../../shared/services/profiles.service';
import { cpfValidator, fullNameValidator, phoneValidator } from '../../../../shared/validators/br-document.validator';
import { formatCPF, formatCellphone, onlyDigits } from '../../../../shared/utils/br-format.util';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import { AuthService } from '../../../auth/services/auth.service';

const PAGE_SIZE = 10;
const PASSWORD_PATTERN = /^(?=.*[a-zA-Z])(?=.*\d).+$/;

type ModalMode = 'create' | 'edit';

@Component({
  selector: 'app-admin-employees',
  standalone: true,
  imports: [ReactiveFormsModule, RippleDirective],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent {
  private readonly fb = new FormBuilder();
  private readonly employeesService = inject(EmployeesService);
  private readonly profilesService = inject(ProfilesService);
  private readonly authService = inject(AuthService);

  readonly selectedCompany = this.authService.selectedCompany;

  readonly employees = signal<EmployeeResponse[]>([]);
  readonly page = signal(0);
  readonly totalPages = signal(0);
  readonly totalElements = signal(0);
  readonly isLast = signal(true);

  readonly isLoadingList = signal(true);
  readonly listError = signal<string | null>(null);

  readonly profileOptions = signal<ProfileResponse[]>([]);
  readonly isLoadingProfiles = signal(false);

  readonly isModalOpen = signal(false);
  readonly modalMode = signal<ModalMode>('create');
  readonly editingEmployeeId = signal<string | null>(null);
  readonly isSubmitting = signal(false);
  readonly formError = signal<string | null>(null);

  readonly employeeToDeactivate = signal<EmployeeResponse | null>(null);
  readonly isDeactivating = signal(false);
  readonly deactivateError = signal<string | null>(null);

  readonly pageLabel = computed(() => `Página ${this.page() + 1} de ${Math.max(this.totalPages(), 1)}`);

  readonly employeeForm = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, fullNameValidator()]],
    cpf: [''],
    email: [''],
    phone: ['', [Validators.required, phoneValidator()]],
    password: [''],
    profileId: ['', Validators.required]
  });

  constructor() {
    this.loadEmployees(0);
  }

  formatPhoneDisplay(phone: string): string {
    return formatCellphone(phone);
  }

  loadEmployees(page: number): void {
    this.isLoadingList.set(true);
    this.listError.set(null);

    this.employeesService.list(page, PAGE_SIZE).subscribe({
      next: (response) => {
        this.employees.set(response.content);
        this.page.set(response.page);
        this.totalPages.set(response.totalPages);
        this.totalElements.set(response.totalElements);
        this.isLast.set(response.last);
        this.isLoadingList.set(false);
      },
      error: () => {
        this.isLoadingList.set(false);
        this.listError.set('Não foi possível carregar os funcionários.');
      }
    });
  }

  goToPage(page: number): void {
    if (page < 0 || page >= this.totalPages() || page === this.page()) {
      return;
    }
    this.loadEmployees(page);
  }

  previousPage(): void {
    this.goToPage(this.page() - 1);
  }

  nextPage(): void {
    this.goToPage(this.page() + 1);
  }

  openCreateModal(): void {
    this.modalMode.set('create');
    this.editingEmployeeId.set(null);
    this.formError.set(null);
    this.employeeForm.reset({ fullName: '', cpf: '', email: '', phone: '', password: '', profileId: '' });

    this.employeeForm.controls.cpf.setValidators([Validators.required, cpfValidator()]);
    this.employeeForm.controls.email.setValidators([Validators.required, Validators.email]);
    this.employeeForm.controls.password.setValidators([
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(PASSWORD_PATTERN)
    ]);
    this.updateConditionalValidity();

    this.isModalOpen.set(true);
    this.ensureProfileOptionsLoaded();
  }

  openEditModal(employee: EmployeeResponse): void {
    this.modalMode.set('edit');
    this.editingEmployeeId.set(employee.employeeId);
    this.formError.set(null);
    this.employeeForm.reset({
      fullName: employee.fullName,
      cpf: '',
      email: '',
      phone: formatCellphone(employee.phone),
      password: '',
      profileId: employee.profileId
    });

    this.employeeForm.controls.cpf.clearValidators();
    this.employeeForm.controls.email.clearValidators();
    this.employeeForm.controls.password.clearValidators();
    this.updateConditionalValidity();

    this.isModalOpen.set(true);
    this.ensureProfileOptionsLoaded();
  }

  closeModal(): void {
    this.isModalOpen.set(false);
  }

  onCpfInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.employeeForm.controls.cpf.setValue(formatCPF(input.value));
  }

  onPhoneInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.employeeForm.controls.phone.setValue(formatCellphone(input.value));
  }

  submitEmployee(): void {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      this.formError.set('Verifique os campos destacados antes de salvar.');
      return;
    }

    this.formError.set(null);
    this.isSubmitting.set(true);

    if (this.modalMode() === 'create') {
      this.employeesService.create(this.buildCreatePayload()).subscribe({
        next: () => {
          this.isSubmitting.set(false);
          this.isModalOpen.set(false);
          this.loadEmployees(0);
        },
        error: (error: HttpErrorResponse) => {
          this.isSubmitting.set(false);
          this.formError.set(this.resolveErrorMessage(error));
        }
      });
      return;
    }

    const employeeId = this.editingEmployeeId();
    if (!employeeId) {
      return;
    }

    this.employeesService.update(employeeId, this.buildUpdatePayload()).subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.isModalOpen.set(false);
        this.loadEmployees(this.page());
      },
      error: (error: HttpErrorResponse) => {
        this.isSubmitting.set(false);
        this.formError.set(this.resolveErrorMessage(error));
      }
    });
  }

  requestDeactivate(employee: EmployeeResponse): void {
    this.deactivateError.set(null);
    this.employeeToDeactivate.set(employee);
  }

  cancelDeactivate(): void {
    this.employeeToDeactivate.set(null);
  }

  confirmDeactivate(): void {
    const employee = this.employeeToDeactivate();
    if (!employee) {
      return;
    }

    this.isDeactivating.set(true);
    this.deactivateError.set(null);

    this.employeesService.deactivate(employee.employeeId).subscribe({
      next: () => {
        this.isDeactivating.set(false);
        this.employeeToDeactivate.set(null);
        this.loadEmployees(this.page());
      },
      error: (error: HttpErrorResponse) => {
        this.isDeactivating.set(false);
        this.deactivateError.set(this.resolveErrorMessage(error));
      }
    });
  }

  private ensureProfileOptionsLoaded(): void {
    if (this.profileOptions().length > 0 || this.isLoadingProfiles()) {
      return;
    }

    this.isLoadingProfiles.set(true);
    this.profilesService.list().subscribe({
      next: (profiles) => {
        this.isLoadingProfiles.set(false);
        this.profileOptions.set(profiles.filter((profile) => profile.isActive !== false));
      },
      error: () => {
        this.isLoadingProfiles.set(false);
      }
    });
  }

  private updateConditionalValidity(): void {
    this.employeeForm.controls.cpf.updateValueAndValidity();
    this.employeeForm.controls.email.updateValueAndValidity();
    this.employeeForm.controls.password.updateValueAndValidity();
  }

  private buildCreatePayload(): CreateEmployeeRequest {
    const value = this.employeeForm.getRawValue();
    return {
      fullName: value.fullName.trim(),
      cpf: onlyDigits(value.cpf),
      email: value.email.trim(),
      phone: onlyDigits(value.phone),
      password: value.password,
      profileId: value.profileId
    };
  }

  private buildUpdatePayload(): UpdateEmployeeRequest {
    const value = this.employeeForm.getRawValue();
    return {
      fullName: value.fullName.trim(),
      phone: onlyDigits(value.phone),
      profileId: value.profileId
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
      return 'E-mail ou CPF já pertence a outro usuário, ou o funcionário já está vinculado a esta empresa.';
    }
    if (error.status === 403) {
      return 'Você não tem permissão para realizar esta ação.';
    }
    if (error.status === 404) {
      return 'Funcionário ou perfil informado não encontrado.';
    }
    if (error.status === 422) {
      return 'Verifique os dados informados e tente novamente.';
    }
    return 'Não foi possível concluir a operação. Tente novamente em instantes.';
  }
}
