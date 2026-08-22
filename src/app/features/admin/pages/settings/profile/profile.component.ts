import { HttpErrorResponse } from '@angular/common/http';
import { Component, WritableSignal, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  AccountProfileResponse,
  AccountsService,
  ApiErrorResponse,
  UpdateProfileRequest
} from '../../../../../shared/services/accounts.service';
import {
  BusinessHoursDay,
  BusinessHoursResponse,
  BusinessHoursService,
  WeekDay
} from '../../../../../shared/services/business-hours.service';
import { CepService } from '../../../../../shared/services/cep.service';
import { GeocodingService } from '../../../../../shared/services/geocoding.service';
import { cepValidator, fullNameValidator, phoneValidator } from '../../../../../shared/validators/br-document.validator';
import { formatCEP, formatCellphone, onlyDigits } from '../../../../../shared/utils/br-format.util';
import { autoDismiss } from '../../../../../shared/utils/auto-dismiss.util';
import { RippleDirective } from '../../../../../shared/directives/ripple.directive';
import { AddressRadiusMapComponent } from '../../../../../shared/components/address-radius-map/address-radius-map.component';
import { AuthService } from '../../../../auth/services/auth.service';

const MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const DEFAULT_DELIVERY_RADIUS_METERS = 300;
const MAX_DELIVERY_RADIUS_METERS = 500;

const WEEK_DAYS: { key: WeekDay; label: string }[] = [
  { key: 'MONDAY', label: 'Segunda-feira' },
  { key: 'TUESDAY', label: 'Terça-feira' },
  { key: 'WEDNESDAY', label: 'Quarta-feira' },
  { key: 'THURSDAY', label: 'Quinta-feira' },
  { key: 'FRIDAY', label: 'Sexta-feira' },
  { key: 'SATURDAY', label: 'Sábado' },
  { key: 'SUNDAY', label: 'Domingo' }
];

// "HH:mm:ss" (java.time.LocalTime) -> "HH:mm" ('<input type="time">' não aceita segundos).
function toTimeInputValue(time?: string): string {
  return time ? time.slice(0, 5) : '';
}

@Component({
  selector: 'app-admin-profile',
  standalone: true,
  imports: [ReactiveFormsModule, RippleDirective, AddressRadiusMapComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  readonly maxRadiusMeters = MAX_DELIVERY_RADIUS_METERS;

  readonly weekDays = WEEK_DAYS;

  private readonly fb = new FormBuilder();
  private readonly accountsService = inject(AccountsService);
  private readonly businessHoursService = inject(BusinessHoursService);
  private readonly cepService = inject(CepService);
  private readonly geocodingService = inject(GeocodingService);
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

  readonly isGeocoding = signal(false);
  readonly geocodeError = signal<string | null>(null);

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
    state: ['', [Validators.required]],
    latitude: this.fb.control<number | null>(null, Validators.required),
    longitude: this.fb.control<number | null>(null, Validators.required),
    radius: this.fb.nonNullable.control(DEFAULT_DELIVERY_RADIUS_METERS, [
      Validators.required,
      Validators.min(100),
      Validators.max(MAX_DELIVERY_RADIUS_METERS)
    ])
  });

  readonly businessHoursForm = this.fb.array(WEEK_DAYS.map(() => this.newBusinessHoursDayGroup()));

  readonly isLoadingBusinessHours = signal(true);
  readonly loadBusinessHoursError = signal<string | null>(null);
  readonly isSavingBusinessHours = signal(false);
  readonly businessHoursTouched = signal(false);
  readonly businessHoursSuccess = signal(false);
  readonly businessHoursError = signal<string | null>(null);

  constructor() {
    this.loadProfile();
    if (this.canEditCompany()) {
      this.loadBusinessHours();
    }
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
        this.locateAddressOnMap();
      },
      error: () => {
        this.isLookingUpCep.set(false);
        this.cepNotFound.set(true);
      }
    });
  }

  onNumberBlur(): void {
    if (this.addressForm.controls.number.value.trim()) {
      this.locateAddressOnMap();
    }
  }

  onLocateAddressClick(): void {
    this.locateAddressOnMap();
  }

  onMapPositionChange(position: { latitude: number; longitude: number }): void {
    this.geocodeError.set(null);
    this.addressForm.patchValue({ latitude: position.latitude, longitude: position.longitude });
  }

  onRadiusInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.addressForm.controls.radius.setValue(Number(input.value));
  }

  formatRadius(meters: number): string {
    if (meters >= 1000) {
      return `${(meters / 1000).toLocaleString('pt-BR', { maximumFractionDigits: 1 })} km`;
    }
    return `${meters} m`;
  }

  private locateAddressOnMap(): void {
    const address = this.addressForm.getRawValue();
    if (!address.street || !address.city || !address.state) {
      return;
    }

    const query = [address.street, address.number, address.neighborhood, address.city, address.state, 'Brasil']
      .map((part) => part?.trim())
      .filter(Boolean)
      .join(', ');

    this.isGeocoding.set(true);
    this.geocodeError.set(null);

    this.geocodingService.geocodeAddress(query).subscribe({
      next: (result) => {
        this.isGeocoding.set(false);
        if (!result) {
          this.geocodeError.set('Não foi possível localizar este endereço no mapa. Ajuste o marcador manualmente.');
          return;
        }
        this.addressForm.patchValue({ latitude: result.latitude, longitude: result.longitude });
      },
      error: () => {
        this.isGeocoding.set(false);
        this.geocodeError.set('Não foi possível localizar este endereço no mapa. Ajuste o marcador manualmente.');
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
      autoDismiss(this.profileError, null);
      return;
    }

    this.profileError.set(null);
    this.isSubmittingProfile.set(true);

    this.accountsService.updateProfile(this.buildPayload()).subscribe({

      next: () => {
        this.isSubmittingProfile.set(false);
        this.profileSuccess.set(true);
        autoDismiss(this.profileSuccess, false);
        this.authService.updateProfileName(this.personalForm.controls.fullName.value.trim());
      },
      error: (error: HttpErrorResponse) => {
        this.isSubmittingProfile.set(false);
        this.profileError.set(this.resolveErrorMessage(error));
        autoDismiss(this.profileError, null);
      }
    });
  }

  businessHoursRangesAt(dayIndex: number) {
    return this.businessHoursForm.at(dayIndex).controls.ranges;
  }

  addBusinessHoursRange(dayIndex: number): void {
    this.businessHoursRangesAt(dayIndex).push(this.newBusinessHoursRangeGroup());
  }

  removeBusinessHoursRange(dayIndex: number, rangeIndex: number): void {
    this.businessHoursRangesAt(dayIndex).removeAt(rangeIndex);
  }

  // Cada faixa precisa de abertura antes do fechamento, e as faixas de um mesmo dia não podem
  // se sobrepor. Um horário que passa da meia-noite (ex: abre 17:00, fecha 02:00) é cadastrado
  // como duas faixas em dias diferentes (uma terminando 23:59, outra começando 00:00 no dia
  // seguinte) — não há campo "fechado": dia sem nenhuma faixa já é fechado.
  isBusinessHoursDayValid(dayIndex: number): boolean {
    const ranges = this.businessHoursRangesAt(dayIndex).controls.map((group) => group.getRawValue());
    if (!ranges.length) {
      return true;
    }

    const sorted = ranges.slice().sort((a, b) => (a.openTime < b.openTime ? -1 : a.openTime > b.openTime ? 1 : 0));
    for (let i = 0; i < sorted.length; i++) {
      const range = sorted[i];
      if (!range.openTime || !range.closeTime || range.openTime >= range.closeTime) {
        return false;
      }
      if (i > 0 && range.openTime < sorted[i - 1].closeTime) {
        return false;
      }
    }
    return true;
  }

  onSubmitBusinessHours(): void {
    this.businessHoursTouched.set(true);
    const allValid = this.businessHoursForm.controls.every((_, index) => this.isBusinessHoursDayValid(index));

    if (!allValid) {
      this.businessHoursSuccess.set(false);
      this.businessHoursError.set('Verifique os dias destacados: cada faixa precisa de abertura e fechamento, com o fechamento depois da abertura, e as faixas não podem se sobrepor.');
      autoDismiss(this.businessHoursError, null);
      return;
    }

    this.businessHoursError.set(null);
    this.businessHoursSuccess.set(false);
    this.isSavingBusinessHours.set(true);

    const days: BusinessHoursDay[] = WEEK_DAYS.map((day, index) => ({
      dayOfWeek: day.key,
      ranges: this.businessHoursRangesAt(index).controls.map((group) => group.getRawValue())
    }));

    this.businessHoursService.update({ days }).subscribe({
      next: (response) => {
        this.isSavingBusinessHours.set(false);
        this.businessHoursTouched.set(false);
        this.businessHoursSuccess.set(true);
        autoDismiss(this.businessHoursSuccess, false);
        this.applyBusinessHoursResponse(response);
      },
      error: (error: HttpErrorResponse) => {
        this.isSavingBusinessHours.set(false);
        this.businessHoursError.set(this.resolveBusinessHoursErrorMessage(error));
        autoDismiss(this.businessHoursError, null);
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

    // companyLogoUrl vem preenchida para qualquer perfil (ao contrário de "company",
    // que só vem para OWNER/ADMIN), então é sempre essa fonte que alimenta o menu.
    if (response.companyLogoUrl) {
      this.logoPreviewUrl.set(response.companyLogoUrl);
      const companyId = this.authService.selectedCompany()?.companyId;
      if (companyId) {
        this.authService.updateCompanyLogoUrl(companyId, response.companyLogoUrl);
      }
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

    const address = company.address;
    if (address) {
      this.addressForm.patchValue({
        cep: address.zipCode ? formatCEP(address.zipCode) : '',
        street: address.street ?? '',
        number: address.number ?? '',
        complement: address.complement ?? '',
        neighborhood: address.neighborhood ?? '',
        city: address.city ?? '',
        state: address.state ?? '',
        latitude: address.latitude ?? null,
        longitude: address.longitude ?? null,
        radius: address.deliveryRadiusMeters ?? DEFAULT_DELIVERY_RADIUS_METERS
      });
    }
  }

  private loadBusinessHours(): void {
    this.isLoadingBusinessHours.set(true);
    this.loadBusinessHoursError.set(null);

    this.businessHoursService.get().subscribe({
      next: (response) => {
        this.isLoadingBusinessHours.set(false);
        this.applyBusinessHoursResponse(response);
      },
      error: () => {
        this.isLoadingBusinessHours.set(false);
        this.loadBusinessHoursError.set('Não foi possível carregar o horário de funcionamento.');
      }
    });
  }

  private applyBusinessHoursResponse(response: BusinessHoursResponse): void {
    const byDay: { [key in WeekDay]?: BusinessHoursDay } = {};
    response.days.forEach((day) => byDay[day.dayOfWeek] = day);

    WEEK_DAYS.forEach((day, index) => {
      const found = byDay[day.key];
      const ranges = this.businessHoursRangesAt(index);
      ranges.clear();
      (found ? found.ranges : []).forEach((range) => {
        ranges.push(this.newBusinessHoursRangeGroup(toTimeInputValue(range.openTime), toTimeInputValue(range.closeTime)));
      });
    });
  }

  private newBusinessHoursRangeGroup(openTime = '', closeTime = '') {
    return this.fb.nonNullable.group({
      openTime: this.fb.nonNullable.control(openTime),
      closeTime: this.fb.nonNullable.control(closeTime)
    });
  }

  private newBusinessHoursDayGroup() {
    return this.fb.group({
      ranges: this.fb.array([] as ReturnType<typeof this.newBusinessHoursRangeGroup>[])
    });
  }

  private resolveBusinessHoursErrorMessage(error: HttpErrorResponse): string {
    const body = error.error as ApiErrorResponse | undefined;
    if (body?.mensagem) {
      return body.mensagem;
    }
    if (error.status === 403) {
      return 'Você não tem permissão para alterar o horário de funcionamento.';
    }
    if (error.status === 422) {
      return 'Verifique os dias destacados: informe abertura e fechamento, e eles não podem ser iguais.';
    }
    return 'Não foi possível salvar o horário de funcionamento. Tente novamente em instantes.';
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
          state: address.state.trim().toUpperCase(),
          latitude: address.latitude ?? undefined,
          longitude: address.longitude ?? undefined,
          deliveryRadiusMeters: address.radius
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
