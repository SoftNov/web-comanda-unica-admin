import { HttpErrorResponse } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  computed,
  inject,
  signal
} from '@angular/core';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import { SubscriptionService, SubscriptionStatusResponse } from '../../../../shared/services/subscription.service';
import { loadStripeJs, stripeErrorMessage } from '../../../../shared/utils/stripe-js.loader';

// Resumo do que acontece ao salvar (ex.: o plano que vai ser assinado logo depois).
export interface BillingCardFormSummary {
  title: string;
  amount?: string;
  note?: string;
}

type CardField = 'number' | 'expiry' | 'cvc';

interface CardFieldState {
  complete: boolean;
  empty: boolean;
  focused: boolean;
  error: string | null;
}

const EMPTY_FIELD: CardFieldState = { complete: false, empty: true, focused: false, error: null };

const MISSING_FIELD_MESSAGES: Record<CardField, string> = {
  number: 'Informe o número do cartão.',
  expiry: 'Informe a validade.',
  cvc: 'Informe o código de segurança.'
};

const BRAND_LABELS: Record<string, string> = {
  visa: 'Visa',
  mastercard: 'Mastercard',
  amex: 'Amex',
  elo: 'Elo',
  hipercard: 'Hipercard',
  diners: 'Diners',
  discover: 'Discover',
  jcb: 'JCB'
};

// Cadastro/troca do cartão de cobrança (assinatura + taxas semanais). Número, validade e CVV são
// digitados em Stripe Elements (iframes do Stripe) e confirmados direto com o Stripe por um
// SetupIntent — a API só recebe o id do PaymentMethod resultante e guarda bandeira/final/validade.
@Component({
  selector: 'app-billing-card-form',
  standalone: true,
  imports: [RippleDirective],
  template: `
    <form class="card-form" #formRoot novalidate (submit)="$event.preventDefault(); submit()"
          [attr.aria-busy]="isBusy()">
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

      @if (initError()) {
        <div class="form-alert form-alert--error card-form__alert" role="alert">
          <span class="material-icons" aria-hidden="true">error_outline</span>
          <span>{{ initError() }}</span>
          <button type="button" class="btn btn--ghost btn--sm" (click)="init()">Tentar novamente</button>
        </div>
      }

      <div class="card-form__field">
        <label class="field__label" for="billing-card-name">Nome impresso no cartão</label>
        <input #nameInput id="billing-card-name" class="field__input" type="text" autocomplete="cc-name"
               autocapitalize="characters" spellcheck="false" placeholder="Como aparece no cartão"
               [class.field__input--invalid]="nameError()"
               [attr.aria-invalid]="!!nameError()"
               [attr.aria-describedby]="nameError() ? 'billing-card-name-error' : null"
               [value]="holderName()" (input)="holderName.set($any($event.target).value)"
               (blur)="nameTouched.set(true)" [disabled]="isSaving()" />
        @if (nameError()) {
          <span id="billing-card-name-error" class="field__error">{{ nameError() }}</span>
        }
      </div>

      <div class="card-form__field">
        <span class="field__label" (click)="focusField('number')">Número do cartão</span>
        <div class="card-form__element card-form__element--number"
             [class.skeleton]="isPreparing()"
             [class.card-form__element--focused]="fields().number.focused"
             [class.card-form__element--invalid]="fieldError('number')"
             [class.card-form__element--complete]="fields().number.complete">
          <div class="card-form__mount" #numberMount></div>
          <span class="card-form__brand" [class.card-form__brand--known]="brandLabel()" aria-hidden="true">
            @if (brandLabel()) {
              {{ brandLabel() }}
            } @else {
              <span class="material-icons">credit_card</span>
            }
          </span>
        </div>
        @if (fieldError('number')) {
          <span class="field__error" role="alert">{{ fieldError('number') }}</span>
        }
      </div>

      <div class="card-form__row">
        <div class="card-form__field">
          <span class="field__label" (click)="focusField('expiry')">Validade</span>
          <div class="card-form__element"
               [class.skeleton]="isPreparing()"
               [class.card-form__element--focused]="fields().expiry.focused"
               [class.card-form__element--invalid]="fieldError('expiry')"
               [class.card-form__element--complete]="fields().expiry.complete">
            <div class="card-form__mount" #expiryMount></div>
          </div>
          @if (fieldError('expiry')) {
            <span class="field__error" role="alert">{{ fieldError('expiry') }}</span>
          }
        </div>
        <div class="card-form__field">
          <span class="field__label" (click)="focusField('cvc')">
            CVV
            <span class="material-icons card-form__help" aria-hidden="true"
                  title="Os 3 dígitos no verso do cartão (4 na frente, no Amex)">help_outline</span>
          </span>
          <div class="card-form__element"
               [class.skeleton]="isPreparing()"
               [class.card-form__element--focused]="fields().cvc.focused"
               [class.card-form__element--invalid]="fieldError('cvc')"
               [class.card-form__element--complete]="fields().cvc.complete">
            <div class="card-form__mount" #cvcMount></div>
          </div>
          @if (fieldError('cvc')) {
            <span class="field__error" role="alert">{{ fieldError('cvc') }}</span>
          }
        </div>
      </div>

      @if (submitError()) {
        <div class="form-alert form-alert--error card-form__alert" role="alert">
          <span class="material-icons" aria-hidden="true">error_outline</span>
          <span>{{ submitError() }}</span>
        </div>
      }

      <div class="card-form__actions">
        <button type="submit" class="btn btn--primary card-form__submit" appRipple [disabled]="isBusy() || !!initError()">
          @if (isSaving()) {
            <span class="card-form__spinner" aria-hidden="true"></span>
            {{ savingStep() === 'bank' ? 'Confirmando com o banco…' : 'Salvando cartão…' }}
          } @else {
            <span class="material-icons" aria-hidden="true">lock</span>
            {{ submitLabel }}
          }
        </button>
        <button type="button" class="btn btn--ghost" [disabled]="isSaving()" (click)="cancel.emit()">Cancelar</button>
      </div>

      <p class="card-form__secure" aria-live="polite">
        @if (isSaving() && savingStep() === 'bank') {
          <span class="material-icons" aria-hidden="true">verified_user</span>
          Seu banco pode pedir uma confirmação (aplicativo ou SMS). Não feche esta página.
        } @else {
          <span class="material-icons" aria-hidden="true">lock</span>
          Dados criptografados e guardados pelo Stripe. A Comanda Única nunca vê o número nem o CVV —
          só a bandeira, o final e a validade, para identificar o cartão.
        }
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
    }
    .card-form__row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    .card-form__element {
      position: relative;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 0 16px;
      min-height: 48px;
      border-radius: var(--radius-sm);
      border: 1px solid var(--color-border-strong);
      background: var(--color-bg);
      cursor: text;
      transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
    }
    .card-form__element--focused {
      border-color: var(--color-accent);
      box-shadow: 0 0 0 3px var(--color-accent-bg);
    }
    .card-form__element--invalid {
      border-color: #f87171;
      &.card-form__element--focused { box-shadow: 0 0 0 3px rgba(248, 113, 113, 0.16); }
    }
    .card-form__mount {
      flex: 1;
      min-width: 0;
    }
    .card-form__brand {
      display: inline-flex;
      align-items: center;
      flex-shrink: 0;
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
    .card-form__help {
      font-size: 15px;
      vertical-align: -3px;
      color: var(--color-text-muted);
      cursor: help;
    }
    .card-form__alert {
      margin: 0;
      align-items: center;
      button { margin-left: auto; flex-shrink: 0; }
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
    @media (max-width: 480px) {
      .card-form { padding: 16px; }
      .card-form__actions .btn { flex: 1 1 100%; }
    }
    @media (prefers-reduced-motion: reduce) {
      .card-form { animation: none; }
    }
  `
})
export class BillingCardFormComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly subscriptionService = inject(SubscriptionService);
  private readonly zone = inject(NgZone);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  @Input() submitLabel = 'Salvar cartão';
  @Input() heading = 'Cartão de cobrança';
  @Input() summary: BillingCardFormSummary | null = null;
  @Output() readonly saved = new EventEmitter<SubscriptionStatusResponse>();
  @Output() readonly cancel = new EventEmitter<void>();

  @ViewChild('numberMount', { static: true }) private numberMount!: ElementRef<HTMLElement>;
  @ViewChild('expiryMount', { static: true }) private expiryMount!: ElementRef<HTMLElement>;
  @ViewChild('cvcMount', { static: true }) private cvcMount!: ElementRef<HTMLElement>;
  @ViewChild('nameInput', { static: true }) private nameInput!: ElementRef<HTMLInputElement>;

  readonly holderName = signal('');
  readonly nameTouched = signal(false);
  readonly isPreparing = signal(true);
  readonly isSaving = signal(false);
  readonly savingStep = signal<'bank' | 'save'>('bank');
  readonly initError = signal<string | null>(null);
  readonly submitError = signal<string | null>(null);
  readonly brand = signal<string | null>(null);
  readonly fields = signal<Record<CardField, CardFieldState>>({
    number: { ...EMPTY_FIELD },
    expiry: { ...EMPTY_FIELD },
    cvc: { ...EMPTY_FIELD }
  });
  // Campos que já perderam o foco (ou tentativa de envio): só então "vazio" vira erro na tela.
  private readonly touchedFields = signal<Set<CardField>>(new Set());

  readonly nameError = computed(() =>
    this.nameTouched() && !this.holderName().trim() ? 'Informe o nome como está impresso no cartão.' : null
  );

  readonly brandLabel = computed(() => {
    const b = this.brand();
    return b && b !== 'unknown' ? (BRAND_LABELS[b] ?? b.toUpperCase()) : null;
  });

  private stripe: any = null;
  private elements: Partial<Record<CardField, any>> = {};
  private clientSecret: string | null = null;
  // PaymentMethod já confirmado no Stripe cuja gravação na API falhou: o SetupIntent já foi usado,
  // então uma nova tentativa só repete o PUT (confirmar de novo daria erro de estado no Stripe).
  private confirmedPaymentMethodId: string | null = null;

  isBusy(): boolean {
    return this.isPreparing() || this.isSaving();
  }

  ngOnInit(): void {
    this.init();
  }

  ngAfterViewInit(): void {
    // O formulário abre embaixo do seletor de plano — traz ele pra vista e já põe o foco no nome.
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    this.host.nativeElement.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'nearest' });
    this.nameInput.nativeElement.focus({ preventScroll: true });
  }

  ngOnDestroy(): void {
    this.destroyElements();
  }

  @HostListener('keydown.escape')
  onEscape(): void {
    if (!this.isSaving()) {
      this.cancel.emit();
    }
  }

  init(): void {
    this.isPreparing.set(true);
    this.initError.set(null);
    this.submitError.set(null);
    this.confirmedPaymentMethodId = null;
    this.subscriptionService.createSetupIntent().subscribe({
      next: ({ clientSecret, publishableKey }) => {
        this.clientSecret = clientSecret;
        loadStripeJs()
          .then((Stripe) => {
            this.stripe = Stripe(publishableKey, { locale: 'pt-BR' });
            this.mountElements();
            this.isPreparing.set(false);
          })
          .catch(() => this.failInit('Não foi possível carregar o formulário seguro do Stripe. Verifique a conexão e tente novamente.'));
      },
      error: (err: unknown) => this.failInit(this.apiMessage(err) ?? 'Não foi possível iniciar o cadastro do cartão. Tente novamente em instantes.')
    });
  }

  fieldError(field: CardField): string | null {
    const state = this.fields()[field];
    if (state.error) {
      return state.error;
    }
    if (this.touchedFields().has(field) && !state.focused && !state.complete) {
      return state.empty ? MISSING_FIELD_MESSAGES[field] : 'Preencha este campo por completo.';
    }
    return null;
  }

  focusField(field: CardField): void {
    this.elements[field]?.focus();
  }

  submit(): void {
    if (this.isBusy() || this.initError()) {
      return;
    }
    this.submitError.set(null);

    if (this.confirmedPaymentMethodId) {
      this.savePaymentMethod(this.confirmedPaymentMethodId);
      return;
    }

    // Validação no envio: marca tudo como tocado e leva o foco ao primeiro campo pendente, em vez
    // de deixar o botão desabilitado sem explicar o porquê.
    this.nameTouched.set(true);
    this.touchedFields.set(new Set<CardField>(['number', 'expiry', 'cvc']));
    if (!this.holderName().trim()) {
      this.nameInput.nativeElement.focus();
      return;
    }
    const pending = (['number', 'expiry', 'cvc'] as CardField[]).find((f) => !this.fields()[f].complete);
    if (pending) {
      this.focusField(pending);
      return;
    }
    if (!this.stripe || !this.elements.number || !this.clientSecret) {
      return;
    }

    this.isSaving.set(true);
    this.savingStep.set('bank');
    this.setElementsDisabled(true);

    this.stripe
      .confirmCardSetup(this.clientSecret, {
        payment_method: {
          card: this.elements.number,
          billing_details: { name: this.holderName().trim() }
        }
      })
      .then((result: any) => this.zone.run(() => {
        if (result.error) {
          this.stopSaving();
          this.submitError.set(this.stripeErrorMessage(result.error));
          return;
        }
        const paymentMethodId = result.setupIntent?.payment_method as string;
        this.confirmedPaymentMethodId = paymentMethodId;
        this.savePaymentMethod(paymentMethodId);
      }))
      .catch(() => this.zone.run(() => {
        this.stopSaving();
        this.submitError.set('Não foi possível falar com o Stripe agora. Verifique a conexão e tente novamente.');
      }));
  }

  private savePaymentMethod(paymentMethodId: string): void {
    this.isSaving.set(true);
    this.savingStep.set('save');
    this.subscriptionService.savePaymentMethod(paymentMethodId).subscribe({
      next: (status) => {
        this.isSaving.set(false);
        this.saved.emit(status);
      },
      error: (err: unknown) => {
        this.isSaving.set(false);
        this.submitError.set(this.apiMessage(err)
          ?? 'O cartão foi validado, mas não conseguimos salvá-lo agora. Clique em salvar de novo para tentar outra vez.');
      }
    });
  }

  private mountElements(): void {
    this.destroyElements();
    const style = {
      base: {
        color: '#ffffff',
        fontFamily: 'Inter, system-ui, sans-serif',
        fontSize: '15px',
        lineHeight: '46px',
        iconColor: '#cbd5e1',
        '::placeholder': { color: 'rgba(203, 213, 225, 0.55)' }
      },
      invalid: { color: '#f87171', iconColor: '#f87171' }
    };
    const elements = this.stripe.elements({
      locale: 'pt-BR',
      fonts: [{ cssSrc: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap' }]
    });
    this.elements = {
      number: elements.create('cardNumber', { style, showIcon: false, placeholder: '0000 0000 0000 0000' }),
      expiry: elements.create('cardExpiry', { style, placeholder: 'MM/AA' }),
      cvc: elements.create('cardCvc', { style, placeholder: '123' })
    };
    this.elements.number.mount(this.numberMount.nativeElement);
    this.elements.expiry.mount(this.expiryMount.nativeElement);
    this.elements.cvc.mount(this.cvcMount.nativeElement);

    (Object.keys(this.elements) as CardField[]).forEach((field) => {
      const el = this.elements[field];
      el.on('change', (event: any) => this.zone.run(() => {
        this.patchField(field, { complete: !!event.complete, empty: !!event.empty, error: event.error?.message ?? null });
        if (field === 'number') {
          this.brand.set(event.brand ?? null);
        }
        if (this.submitError()) {
          this.submitError.set(null);
        }
        // Validade completa → pula pro CVV; número completo → pula pra validade.
        if (event.complete && field === 'number') {
          this.elements.expiry?.focus();
        } else if (event.complete && field === 'expiry') {
          this.elements.cvc?.focus();
        }
      }));
      el.on('focus', () => this.zone.run(() => this.patchField(field, { focused: true })));
      el.on('blur', () => this.zone.run(() => {
        this.patchField(field, { focused: false });
        this.touchedFields.update((set) => new Set(set).add(field));
      }));
    });
  }

  private patchField(field: CardField, patch: Partial<CardFieldState>): void {
    this.fields.update((all) => ({ ...all, [field]: { ...all[field], ...patch } }));
  }

  private setElementsDisabled(disabled: boolean): void {
    Object.values(this.elements).forEach((el) => el?.update({ disabled }));
  }

  private stopSaving(): void {
    this.isSaving.set(false);
    this.setElementsDisabled(false);
  }

  private destroyElements(): void {
    Object.values(this.elements).forEach((el) => el?.destroy());
    this.elements = {};
  }

  private stripeErrorMessage(error: any): string {
    if (error?.type === 'card_error') {
      return `${error.message ?? 'O cartão não foi aceito.'} Confira os dados ou use outro cartão.`;
    }
    return stripeErrorMessage(error,
      'Não foi possível validar o cartão agora por um problema no processamento de pagamentos. '
      + 'Tente novamente mais tarde ou fale com o suporte da Comanda Única.');
  }

  private failInit(message: string): void {
    this.isPreparing.set(false);
    this.initError.set(message);
  }

  private apiMessage(err: unknown): string | null {
    const body = err instanceof HttpErrorResponse ? (err.error as { mensagem?: string } | undefined) : undefined;
    return body?.mensagem ?? null;
  }
}
