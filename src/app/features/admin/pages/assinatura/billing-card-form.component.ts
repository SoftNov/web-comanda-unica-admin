import { HttpErrorResponse } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
  computed,
  inject,
  signal
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import { AuthService } from '../../../auth/services/auth.service';
import { SubscriptionService, SubscriptionStatusResponse } from '../../../../shared/services/subscription.service';

// Resumo do que acontece ao salvar (ex.: o plano que vai ser assinado logo depois).
export interface BillingCardFormSummary {
  title: string;
  amount?: string;
  note?: string;
}

const onlyDigits = (value: string | null | undefined): string => (value ?? '').replace(/\D/g, '');

// Bandeira pelo prefixo do número — só para exibir enquanto o usuário digita.
function detectBrand(number: string): string | null {
  if (/^4/.test(number)) return 'Visa';
  if (/^(5[1-5]|2[2-7])/.test(number)) return 'Mastercard';
  if (/^3[47]/.test(number)) return 'Amex';
  if (/^(4011|4312|4389|4514|4576|5041|5066|5067|509|6277|6362|6363|650|6516|6550)/.test(number)) return 'Elo';
  if (/^(606282|3841)/.test(number)) return 'Hipercard';
  if (/^3(0[0-5]|[68])/.test(number)) return 'Diners';
  return null;
}

// Luhn — evita mandar para a Asaas um número claramente digitado errado.
function luhnValid(number: string): boolean {
  let sum = 0;
  let double = false;
  for (let i = number.length - 1; i >= 0; i--) {
    let digit = Number(number[i]);
    if (double) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    double = !double;
  }
  return number.length >= 13 && sum % 10 === 0;
}

// Cadastro/troca do cartão de cobrança (assinatura + taxas semanais). Os dados do cartão e do
// titular vão uma única vez para a API, que tokeniza o cartão na Asaas e guarda só o token e
// bandeira/final/validade — número e CVV nunca são gravados pela Comanda Única.
@Component({
  selector: 'app-billing-card-form',
  standalone: true,
  imports: [ReactiveFormsModule, RippleDirective],
  template: `
    <form class="card-form" novalidate [formGroup]="form" (ngSubmit)="submit()" [attr.aria-busy]="isSaving()">
      <div class="card-form__head">
        <div>
          <p class="card-form__title">{{ heading }}</p>
          <p class="card-form__subtitle">Cartão de crédito usado na mensalidade e nas taxas da Comanda Única.</p>
        </div>
        <button type="button" class="card-form__close" aria-label="Fechar"
                [disabled]="isSaving()" (click)="cancel.emit()">
          <span class="material-icons" aria-hidden="true">close</span>
        </button>
      </div>

      @if (summary) {
        <div class="card-form__summary">
          <span class="material-icons" aria-hidden="true">receipt_long</span>
          <div class="card-form__summary-text">
            <span class="card-form__summary-title">{{ summary.title }}</span>
            @if (summary.note) {
              <span class="card-form__summary-note">{{ summary.note }}</span>
            }
          </div>
          @if (summary.amount) {
            <span class="card-form__summary-amount">{{ summary.amount }}<small>/mês</small></span>
          }
        </div>
      }

      <p class="card-form__section">Cartão</p>

      <div class="card-form__field">
        <label class="field__label" for="billing-card-name">Nome impresso no cartão</label>
        <input #nameInput id="billing-card-name" class="field__input" type="text" autocomplete="cc-name"
               autocapitalize="characters" spellcheck="false" placeholder="Como aparece no cartão"
               formControlName="holderName" [class.field__input--invalid]="invalid('holderName')" />
        @if (invalid('holderName')) {
          <span class="field__error">Informe o nome como está impresso no cartão.</span>
        }
      </div>

      <div class="card-form__field">
        <label class="field__label" for="billing-card-number">Número do cartão</label>
        <div class="card-form__number">
          <input id="billing-card-number" class="field__input" type="text" inputmode="numeric" autocomplete="cc-number"
                 placeholder="0000 0000 0000 0000" maxlength="23" formControlName="number"
                 [class.field__input--invalid]="numberInvalid()" (input)="formatNumber()" />
          <span class="card-form__brand" [class.card-form__brand--known]="brand()" aria-hidden="true">
            @if (brand()) { {{ brand() }} } @else { <span class="material-icons">credit_card</span> }
          </span>
        </div>
        @if (numberInvalid()) {
          <span class="field__error">Confira o número do cartão.</span>
        }
      </div>

      <div class="card-form__row">
        <div class="card-form__field">
          <label class="field__label" for="billing-card-expiry">Validade</label>
          <input id="billing-card-expiry" class="field__input" type="text" inputmode="numeric" autocomplete="cc-exp"
                 placeholder="MM/AA" maxlength="5" formControlName="expiry"
                 [class.field__input--invalid]="expiryInvalid()" (input)="formatExpiry()" />
          @if (expiryInvalid()) {
            <span class="field__error">Validade inválida.</span>
          }
        </div>
        <div class="card-form__field">
          <label class="field__label" for="billing-card-ccv">CVV</label>
          <input id="billing-card-ccv" class="field__input" type="text" inputmode="numeric" autocomplete="cc-csc"
                 placeholder="123" maxlength="4" formControlName="ccv" [class.field__input--invalid]="invalid('ccv')" />
          @if (invalid('ccv')) {
            <span class="field__error">3 ou 4 dígitos.</span>
          }
        </div>
      </div>

      <p class="card-form__section">Titular do cartão</p>

      <div class="card-form__row">
        <div class="card-form__field">
          <label class="field__label" for="billing-card-doc">CPF ou CNPJ</label>
          <input id="billing-card-doc" class="field__input" type="text" inputmode="numeric" placeholder="Só números"
                 maxlength="18" formControlName="cpfCnpj" [class.field__input--invalid]="docInvalid()" />
          @if (docInvalid()) {
            <span class="field__error">Informe 11 (CPF) ou 14 (CNPJ) dígitos.</span>
          }
        </div>
        <div class="card-form__field">
          <label class="field__label" for="billing-card-phone">Telefone</label>
          <input id="billing-card-phone" class="field__input" type="tel" autocomplete="tel" placeholder="(11) 99999-9999"
                 maxlength="16" formControlName="phone" [class.field__input--invalid]="phoneInvalid()" />
          @if (phoneInvalid()) {
            <span class="field__error">DDD + número.</span>
          }
        </div>
      </div>

      <div class="card-form__field">
        <label class="field__label" for="billing-card-email">E-mail</label>
        <input id="billing-card-email" class="field__input" type="email" autocomplete="email"
               formControlName="email" [class.field__input--invalid]="invalid('email')" />
        @if (invalid('email')) {
          <span class="field__error">Informe um e-mail válido.</span>
        }
      </div>

      <div class="card-form__row card-form__row--address">
        <div class="card-form__field">
          <label class="field__label" for="billing-card-cep">CEP</label>
          <input id="billing-card-cep" class="field__input" type="text" inputmode="numeric" autocomplete="postal-code"
                 placeholder="00000-000" maxlength="9" formControlName="postalCode" [class.field__input--invalid]="cepInvalid()" />
          @if (cepInvalid()) {
            <span class="field__error">CEP com 8 dígitos.</span>
          }
        </div>
        <div class="card-form__field">
          <label class="field__label" for="billing-card-addr-number">Número</label>
          <input id="billing-card-addr-number" class="field__input" type="text" formControlName="addressNumber"
                 [class.field__input--invalid]="invalid('addressNumber')" />
          @if (invalid('addressNumber')) {
            <span class="field__error">Obrigatório.</span>
          }
        </div>
        <div class="card-form__field">
          <label class="field__label" for="billing-card-addr-complement">Complemento <small>(opcional)</small></label>
          <input id="billing-card-addr-complement" class="field__input" type="text" formControlName="addressComplement" />
        </div>
      </div>

      @if (submitError()) {
        <div class="form-alert form-alert--error card-form__alert" role="alert">
          <span class="material-icons" aria-hidden="true">error_outline</span>
          <span>{{ submitError() }}</span>
        </div>
      }

      <div class="card-form__actions">
        <button type="submit" class="btn btn--primary card-form__submit" appRipple [disabled]="isSaving()">
          @if (isSaving()) {
            <span class="card-form__spinner" aria-hidden="true"></span>
            Salvando cartão…
          } @else {
            <span class="material-icons" aria-hidden="true">lock</span>
            {{ submitLabel }}
          }
        </button>
        <button type="button" class="btn btn--ghost" [disabled]="isSaving()" (click)="cancel.emit()">Cancelar</button>
      </div>

      <p class="card-form__secure">
        <span class="material-icons" aria-hidden="true">lock</span>
        O cartão é tokenizado pela Asaas, nossa plataforma de pagamentos. A Comanda Única não guarda o
        número nem o CVV — só a bandeira, o final e a validade, para identificar o cartão.
      </p>
    </form>
  `,
  styles: `
    :host {
      display: block;
      scroll-margin: 24px;
    }
    .card-form {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 20px;
      border: 1px solid var(--color-border-strong);
      border-radius: var(--radius-md, 12px);
      background: var(--color-bg-elevated);
      box-shadow: var(--shadow-md);
      animation: card-form-in var(--transition-base) both;
    }
    @keyframes card-form-in {
      from { opacity: 0; transform: translateY(-6px); }
    }
    .card-form__head {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
    }
    .card-form__title {
      font-weight: 600;
      font-size: 1rem;
      color: var(--color-text);
    }
    .card-form__subtitle {
      margin-top: 2px;
      font-size: 0.8125rem;
      color: var(--color-text-muted);
    }
    .card-form__section {
      margin-bottom: -6px;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--color-text-muted);
    }
    .card-form__close {
      display: inline-flex;
      padding: 4px;
      border: none;
      border-radius: var(--radius-sm);
      background: none;
      color: var(--color-text-muted);
      cursor: pointer;
      transition: color var(--transition-fast), background var(--transition-fast);
      &:hover:not(:disabled) { color: var(--color-text); background: rgba(255, 255, 255, 0.06); }
      &:disabled { opacity: 0.4; cursor: default; }
    }
    .card-form__summary {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 14px;
      border: 1px solid rgba(59, 130, 246, 0.35);
      border-radius: var(--radius-sm);
      background: var(--color-accent-bg);
      > .material-icons { color: var(--color-accent-hover); flex-shrink: 0; }
    }
    .card-form__summary-text {
      display: flex;
      flex-direction: column;
      gap: 2px;
      flex: 1;
      min-width: 0;
    }
    .card-form__summary-title {
      font-weight: 600;
      font-size: 0.9375rem;
      color: var(--color-text);
    }
    .card-form__summary-note {
      font-size: 0.8125rem;
      color: var(--color-text-muted);
    }
    .card-form__summary-amount {
      font-weight: 700;
      font-size: 1.125rem;
      color: var(--color-text);
      white-space: nowrap;
      small { font-size: 0.8125rem; font-weight: 500; color: var(--color-text-muted); }
    }
    .card-form__field {
      display: flex;
      flex-direction: column;
      gap: 8px;
      min-width: 0;
      small { font-weight: 400; color: var(--color-text-muted); }
    }
    .card-form__row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    .card-form__row--address {
      grid-template-columns: 1fr 0.7fr 1.3fr;
    }
    .card-form__number {
      position: relative;
      .field__input { width: 100%; padding-right: 92px; }
    }
    .card-form__brand {
      position: absolute;
      top: 50%;
      right: 12px;
      transform: translateY(-50%);
      display: inline-flex;
      align-items: center;
      color: var(--color-text-muted);
      .material-icons { font-size: 20px; }
    }
    .card-form__brand--known {
      padding: 2px 8px;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.1);
      color: var(--color-text);
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.02em;
    }
    .card-form__alert {
      margin: 0;
      align-items: center;
    }
    .card-form__actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 4px;
    }
    .card-form__submit {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      .material-icons { font-size: 18px; }
    }
    .card-form__spinner {
      width: 16px;
      height: 16px;
      border: 2px solid rgba(255, 255, 255, 0.35);
      border-top-color: #fff;
      border-radius: 50%;
      animation: card-form-spin 0.8s linear infinite;
    }
    @keyframes card-form-spin {
      to { transform: rotate(360deg); }
    }
    .card-form__secure {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      font-size: 0.8125rem;
      line-height: 1.5;
      color: var(--color-text-muted);
      .material-icons { font-size: 16px; margin-top: 1px; color: var(--color-success); flex-shrink: 0; }
    }
    @media (max-width: 560px) {
      .card-form { padding: 16px; }
      .card-form__row, .card-form__row--address { grid-template-columns: 1fr; }
      .card-form__actions .btn { flex: 1 1 100%; }
    }
    @media (prefers-reduced-motion: reduce) {
      .card-form { animation: none; }
    }
  `
})
export class BillingCardFormComponent implements AfterViewInit {
  private readonly subscriptionService = inject(SubscriptionService);
  private readonly authService = inject(AuthService);
  private readonly fb = inject(FormBuilder);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  @Input() submitLabel = 'Salvar cartão';
  @Input() heading = 'Cartão de cobrança';
  @Input() summary: BillingCardFormSummary | null = null;
  @Output() readonly saved = new EventEmitter<SubscriptionStatusResponse>();
  @Output() readonly cancel = new EventEmitter<void>();

  @ViewChild('nameInput', { static: true }) private nameInput!: ElementRef<HTMLInputElement>;

  readonly isSaving = signal(false);
  readonly submitError = signal<string | null>(null);
  private readonly submitted = signal(false);
  private readonly numberDigits = signal('');

  readonly brand = computed(() => detectBrand(this.numberDigits()));

  readonly form = this.fb.nonNullable.group({
    holderName: ['', [Validators.required, Validators.maxLength(100)]],
    number: ['', Validators.required],
    expiry: ['', Validators.required],
    ccv: ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]],
    cpfCnpj: ['', Validators.required],
    phone: ['', Validators.required],
    email: [this.authService.currentUser()?.email ?? '', [Validators.required, Validators.email]],
    postalCode: ['', Validators.required],
    addressNumber: ['', [Validators.required, Validators.maxLength(20)]],
    addressComplement: ['', Validators.maxLength(100)]
  });

  ngAfterViewInit(): void {
    // O formulário abre embaixo do seletor de plano — traz ele pra vista e já põe o foco no nome.
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    this.host.nativeElement.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'nearest' });
    this.nameInput.nativeElement.focus({ preventScroll: true });
  }

  @HostListener('keydown.escape')
  onEscape(): void {
    if (!this.isSaving()) {
      this.cancel.emit();
    }
  }

  invalid(field: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[field];
    return control.invalid && (control.touched || this.submitted());
  }

  private shown(field: keyof typeof this.form.controls): boolean {
    return this.form.controls[field].touched || this.submitted();
  }

  numberInvalid(): boolean {
    return this.shown('number') && !luhnValid(onlyDigits(this.form.controls.number.value));
  }

  expiryInvalid(): boolean {
    return this.shown('expiry') && this.parseExpiry() === null;
  }

  docInvalid(): boolean {
    const digits = onlyDigits(this.form.controls.cpfCnpj.value);
    return this.shown('cpfCnpj') && digits.length !== 11 && digits.length !== 14;
  }

  phoneInvalid(): boolean {
    const digits = onlyDigits(this.form.controls.phone.value);
    return this.shown('phone') && (digits.length < 10 || digits.length > 11);
  }

  cepInvalid(): boolean {
    return this.shown('postalCode') && onlyDigits(this.form.controls.postalCode.value).length !== 8;
  }

  formatNumber(): void {
    const digits = onlyDigits(this.form.controls.number.value).slice(0, 19);
    this.numberDigits.set(digits);
    this.form.controls.number.setValue(digits.replace(/(\d{4})(?=\d)/g, '$1 '), { emitEvent: false });
  }

  formatExpiry(): void {
    const digits = onlyDigits(this.form.controls.expiry.value).slice(0, 4);
    this.form.controls.expiry.setValue(digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits, { emitEvent: false });
  }

  // { month: '07', year: '2029' } ou null se inválida/vencida.
  private parseExpiry(): { month: string; year: string } | null {
    const digits = onlyDigits(this.form.controls.expiry.value);
    if (digits.length !== 4) {
      return null;
    }
    const month = Number(digits.slice(0, 2));
    const year = 2000 + Number(digits.slice(2));
    if (month < 1 || month > 12) {
      return null;
    }
    const now = new Date();
    if (year < now.getFullYear() || (year === now.getFullYear() && month < now.getMonth() + 1)) {
      return null;
    }
    return { month: String(month).padStart(2, '0'), year: String(year) };
  }

  submit(): void {
    this.submitted.set(true);
    this.submitError.set(null);
    const expiry = this.parseExpiry();
    if (this.form.invalid || !expiry || this.numberInvalid() || this.docInvalid() || this.phoneInvalid() || this.cepInvalid()) {
      return;
    }

    const value = this.form.getRawValue();
    this.isSaving.set(true);
    this.subscriptionService.savePaymentMethod({
      holderName: value.holderName.trim(),
      number: onlyDigits(value.number),
      expiryMonth: expiry.month,
      expiryYear: expiry.year,
      ccv: value.ccv,
      cpfCnpj: onlyDigits(value.cpfCnpj),
      email: value.email.trim(),
      postalCode: onlyDigits(value.postalCode),
      addressNumber: value.addressNumber.trim(),
      addressComplement: value.addressComplement.trim() || null,
      phone: onlyDigits(value.phone)
    }).subscribe({
      next: (status) => {
        this.isSaving.set(false);
        // Não deixa os dados do cartão no formulário depois de salvo.
        this.form.controls.number.reset('');
        this.form.controls.ccv.reset('');
        this.saved.emit(status);
      },
      error: (error: unknown) => {
        this.isSaving.set(false);
        const body = error instanceof HttpErrorResponse ? (error.error as { mensagem?: string } | undefined) : undefined;
        this.submitError.set(body?.mensagem
          ?? 'Não foi possível salvar o cartão agora. Confira os dados e tente novamente em instantes.');
      }
    });
  }
}
