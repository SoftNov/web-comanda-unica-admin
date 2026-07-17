import { HttpErrorResponse } from '@angular/common/http';
import { Component, WritableSignal, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  AccountProfileResponse,
  AccountsService,
  ApiErrorResponse,
  UpdateProfileRequest
} from '../../../../../shared/services/accounts.service';
import { CepService } from '../../../../../shared/services/cep.service';
import { cepValidator, fullNameValidator, phoneValidator } from '../../../../../shared/validators/br-document.validator';
import { formatCEP, formatCellphone, onlyDigits } from '../../../../../shared/utils/br-format.util';
import { RippleDirective } from '../../../../../shared/directives/ripple.directive';
import { AuthService } from '../../../../auth/services/auth.service';

const MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

@Component({
  selector: 'app-admin-profile',
  standalone: true,
  imports: [ReactiveFormsModule, RippleDirective],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  private readonly fb = new FormBuilder();
  private readonly accountsService = inject(AccountsService);
  private readonly cepService = inject(CepService);
  private readonly authService = inject(AuthService);

  readonly profileCode = computed(() => this.authService.selectedCompany()?.profileCode ?? null);
  readonly canEditCompany = computed(() => this.profileCode() === 'OWNER' || this.profileCode() === 'ADMIN');

  readonly activeTab = signal<'personal' | 'company'>('personal');

  readonly isLoadingProfile = signal(true);
  readonly loadProfileError = signal<string | null>(null);

  readonly isSubmittingProfile = signal(false);
  readonly profileSuccess = signal(false);
  readonly profileError = signal<string | null>(null);

  readonly isLookingUpCep = signal(false);
  readonly cepNotFound = signal(false);

  readonly personalEmail = signal(this.authService.currentUser()?.email ?? '');

  readonly avatarPreviewUrl = signal<string | null>(this.authService.currentUser()?.avatarUrl ?? null);
  readonly isUploadingAvatar = signal(false);
  readonly avatarError = signal<string | null>(null);

  readonly logoPreviewUrl = signal<string | null>(null);
  readonly isUploadingLogo = signal(false);
  readonly logoError = signal<string | null>(null);

  readonly personalForm = this.fb.nonNullable.group({
    fullName: [this.authService.currentUser()?.fullName ?? '', [Validators.required, fullNameValidator()]],
    phone: ['', [Validators.required, phoneValidator()]]
  });

  readonly companyForm = this.fb.nonNullable.group({
    businessName: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, phoneValidator()]],
    email: ['', [Validators.required, Validators.email]]
  });

  readonly addressForm = this.fb.nonNullable.group({
    cep: ['', [Validators.required, cepValidator()]],
    street: ['', [Validators.required]],
    number: ['', [Validators.required]],
    complement: [''],
    neighborhood: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]]
  });

  constructor() {
    this.loadProfile();
  }

  onPersonalPhoneInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.personalForm.controls.phone.setValue(formatCellphone(input.value));
  }

  onCompanyPhoneInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.companyForm.controls.phone.setValue(formatCellphone(input.value));
  }

  onCepInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.addressForm.controls.cep.setValue(formatCEP(input.value));
    this.cepNotFound.set(false);
  }

  onCepBlur(): void {
    const digits = onlyDigits(this.addressForm.controls.cep.value);
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
        this.addressForm.patchValue({
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

  onSubmitProfile(): void {
    const isPersonalValid = this.personalForm.valid;
    const isCompanyValid = !this.canEditCompany() || (this.companyForm.valid && this.addressForm.valid);

    if (!isPersonalValid || !isCompanyValid) {
      this.personalForm.markAllAsTouched();
      if (this.canEditCompany()) {
        this.companyForm.markAllAsTouched();
        this.addressForm.markAllAsTouched();
      }
      // Errors can be on a tab that isn't currently visible — switch to it so the user can see what's wrong.
      this.activeTab.set(isPersonalValid ? 'company' : 'personal');
      this.profileError.set('Verifique os campos destacados antes de salvar.');
      return;
    }

    this.profileError.set(null);
    this.isSubmittingProfile.set(true);

    this.accountsService.updateProfile(this.buildPayload()).subscribe({
     
      next: () => {
        this.isSubmittingProfile.set(false);
        this.profileSuccess.set(true);
        this.authService.updateProfileName(this.personalForm.controls.fullName.value.trim());
      },
      error: (error: HttpErrorResponse) => {
        this.isSubmittingProfile.set(false);
        this.profileError.set(this.resolveErrorMessage(error));
      }
    });
  }

  onAvatarFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file || !this.validateImageFile(file, this.avatarError)) {
      return;
    }

    const previousPreview = this.avatarPreviewUrl();
    this.readFileAsDataUrl(file, (dataUrl) => this.avatarPreviewUrl.set(dataUrl));

    this.avatarError.set(null);
    this.isUploadingAvatar.set(true);

    this.accountsService.uploadAvatar(file).subscribe({
      next: (response) => {
        this.isUploadingAvatar.set(false);
        this.avatarPreviewUrl.set(response.avatarUrl);
        this.authService.updateAvatarUrl(response.avatarUrl);
      },
      error: (error: HttpErrorResponse) => {
        this.isUploadingAvatar.set(false);
        this.avatarPreviewUrl.set(previousPreview);
        this.avatarError.set(this.resolveImageErrorMessage(error));
      }
    });
  }

  onLogoFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file || !this.validateImageFile(file, this.logoError)) {
      return;
    }

    const previousPreview = this.logoPreviewUrl();
    this.readFileAsDataUrl(file, (dataUrl) => this.logoPreviewUrl.set(dataUrl));

    this.logoError.set(null);
    this.isUploadingLogo.set(true);

    this.accountsService.uploadLogo(file).subscribe({
      next: (response) => {
        this.isUploadingLogo.set(false);
        this.logoPreviewUrl.set(response.logoUrl);
        const companyId = this.authService.selectedCompany()?.companyId;
        if (companyId) {
          this.authService.updateCompanyLogoUrl(companyId, response.logoUrl);
        }
      },
      error: (error: HttpErrorResponse) => {
        this.isUploadingLogo.set(false);
        this.logoPreviewUrl.set(previousPreview);
        this.logoError.set(this.resolveImageErrorMessage(error));
      }
    });
  }

  private loadProfile(): void {
    this.isLoadingProfile.set(true);
    this.loadProfileError.set(null);

    this.accountsService.getProfile().subscribe({
      next: (response) => {
        this.isLoadingProfile.set(false);
        this.applyProfileResponse(response);
      },
      error: () => {
        this.isLoadingProfile.set(false);
        this.loadProfileError.set('Não foi possível carregar os dados do perfil.');
      }
    });
  }

  private applyProfileResponse(response: AccountProfileResponse): void {
    const owner = response.owner;
    this.personalForm.patchValue({
      fullName: owner.fullName ?? '',
      phone: owner.phone ? formatCellphone(owner.phone) : ''
    });
    if (owner.email) {
      this.personalEmail.set(owner.email);
    }
    if (owner.avatarUrl) {
      this.avatarPreviewUrl.set(owner.avatarUrl);
      this.authService.updateAvatarUrl(owner.avatarUrl);
    }

    const company = response.company;
    if (!company) {
      return;
    }

    this.companyForm.patchValue({
      businessName: company.businessName ?? '',
      phone: company.phone ? formatCellphone(company.phone) : '',
      email: company.email ?? ''
    });
    if (company.logoUrl) {
      this.logoPreviewUrl.set(company.logoUrl);
      const companyId = this.authService.selectedCompany()?.companyId;
      if (companyId) {
        this.authService.updateCompanyLogoUrl(companyId, company.logoUrl);
      }
    }

    const address = company.address;
    if (address) {
      this.addressForm.patchValue({
        cep: address.zipCode ? formatCEP(address.zipCode) : '',
        street: address.street ?? '',
        number: address.number ?? '',
        complement: address.complement ?? '',
        neighborhood: address.neighborhood ?? '',
        city: address.city ?? '',
        state: address.state ?? ''
      });
    }
  }

  private validateImageFile(file: File, errorSignal: WritableSignal<string | null>): boolean {
    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      errorSignal.set('Formato inválido. Envie um arquivo JPG, PNG ou WEBP.');
      return false;
    }
    if (file.size > MAX_IMAGE_SIZE_BYTES) {
      errorSignal.set('O arquivo deve ter no máximo 5MB.');
      return false;
    }
    return true;
  }

  private readFileAsDataUrl(file: File, onLoad: (dataUrl: string) => void): void {
    const reader = new FileReader();
    reader.onload = () => onLoad(reader.result as string);
    reader.readAsDataURL(file);
  }

  private buildPayload(): UpdateProfileRequest {
    const personal = this.personalForm.getRawValue();
    const owner = {
      fullName: personal.fullName.trim(),
      phone: onlyDigits(personal.phone)
    };

    if (this.canEditCompany()) {
      const company = this.companyForm.getRawValue();
      const address = this.addressForm.getRawValue();
      return {
        owner,
        company: {
          businessName: company.businessName.trim(),
          phone: onlyDigits(company.phone),
          email: company.email.trim()
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
      };
    }

    // Backend requires company/address to be schema-valid even when the caller's
    // profile isn't OWNER/ADMIN, but silently discards those values in that case.
    return {
      owner,
      company: {
        businessName: owner.fullName,
        phone: owner.phone,
        email: this.authService.currentUser()?.email ?? 'sem-email@comandaunica.com'
      },
      address: {
        zipCode: '00000000',
        street: '-',
        number: '0',
        neighborhood: '-',
        city: '-',
        state: 'SP'
      }
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
    if (error.status === 403) {
      return 'Você não tem permissão para alterar esses dados.';
    }
    if (error.status === 422) {
      return 'Verifique os dados informados e tente novamente.';
    }
    return 'Não foi possível atualizar o perfil. Tente novamente em instantes.';
  }

  private resolveImageErrorMessage(error: HttpErrorResponse): string {
    const body = error.error as ApiErrorResponse | undefined;
    if (body?.mensagem) {
      return body.mensagem;
    }
    if (error.status === 403) {
      return 'Você não tem permissão para alterar esta imagem.';
    }
    if (error.status === 422) {
      return 'Arquivo inválido ou maior que o limite permitido.';
    }
    return 'Não foi possível enviar a imagem. Tente novamente em instantes.';
  }
}
