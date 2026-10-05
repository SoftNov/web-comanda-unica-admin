import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, inject, signal } from '@angular/core';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import { SubscriptionService, SubscriptionStatusResponse } from '../../../../shared/services/subscription.service';
import { loadStripeJs } from '../../../../shared/utils/stripe-js.loader';

// Cadastro/troca do cartão de cobrança (assinatura + taxas semanais). O número do cartão é
// digitado num Stripe Element (iframe do Stripe) e confirmado direto com o Stripe por um
// SetupIntent — a API só recebe o id do PaymentMethod resultante e guarda bandeira/final/validade.
@Component({
  selector: 'app-billing-card-form',
  standalone: true,
  imports: [RippleDirective],
  template: `
    <div class="card-form">
      <label class="field__label" for="billing-card-name">Nome impresso no cartão</label>
      <input id="billing-card-name" class="field__input" type="text" autocomplete="cc-name"
             [value]="holderName()" (input)="holderName.set($any($event.target).value)"
             [disabled]="isBusy()" />

      <span class="field__label">Dados do cartão</span>
      <div class="card-form__element" [class.card-form__element--loading]="isPreparing()" #cardContainer></div>
      @if (isPreparing()) {
        <p class="field__hint">Preparando ambiente seguro do Stripe…</p>
      }

      @if (error()) {
        <div class="form-alert form-alert--error" role="alert">
          <span class="material-icons" aria-hidden="true">error_outline</span>
          {{ error() }}
        </div>
      }

      <p class="field__hint">
        <span class="material-icons card-form__lock" aria-hidden="true">lock</span>
        Os dados do cartão são enviados direto ao Stripe e ficam guardados lá com segurança. A Comanda
        Única guarda só a bandeira, o final e a validade para identificar o cartão.
      </p>

      <div class="card-form__actions">
        <button type="button" class="btn btn--primary" appRipple
                [disabled]="isBusy() || !cardComplete() || !holderName().trim()" (click)="submit()">
          {{ isSaving() ? 'Salvando…' : submitLabel }}
        </button>
        <button type="button" class="btn btn--ghost" [disabled]="isSaving()" (click)="cancel.emit()">Cancelar</button>
      </div>
    </div>
  `,
  styles: `
    .card-form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 20px;
      border: 1px solid var(--color-border-strong);
      border-radius: var(--radius-md, 12px);
      background: var(--color-bg-elevated);
    }
    .card-form__element {
      padding: 14px 16px;
      border-radius: var(--radius-sm);
      border: 1px solid var(--color-border-strong);
      background: var(--color-bg);
      min-height: 46px;
    }
    .card-form__element--loading {
      opacity: 0.5;
    }
    .card-form__lock {
      font-size: 14px;
      vertical-align: -2px;
      color: var(--color-success);
    }
    .card-form__actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 6px;
    }
  `
})
export class BillingCardFormComponent implements OnInit, OnDestroy {
  private readonly subscriptionService = inject(SubscriptionService);

  @Input() submitLabel = 'Salvar cartão';
  @Output() readonly saved = new EventEmitter<SubscriptionStatusResponse>();
  @Output() readonly cancel = new EventEmitter<void>();

  @ViewChild('cardContainer', { static: true }) private cardContainer!: ElementRef<HTMLElement>;

  readonly holderName = signal('');
  readonly isPreparing = signal(true);
  readonly isSaving = signal(false);
  readonly cardComplete = signal(false);
  readonly error = signal<string | null>(null);

  private stripe: any = null;
  private cardElement: any = null;
  private clientSecret: string | null = null;

  isBusy(): boolean {
    return this.isPreparing() || this.isSaving();
  }

  ngOnInit(): void {
    this.subscriptionService.createSetupIntent().subscribe({
      next: ({ clientSecret, publishableKey }) => {
        this.clientSecret = clientSecret;
        loadStripeJs()
          .then((Stripe) => {
            this.stripe = Stripe(publishableKey);
            this.mountCard();
            this.isPreparing.set(false);
          })
          .catch(() => this.fail('Não foi possível carregar o formulário seguro do Stripe. Verifique a conexão e tente novamente.'));
      },
      error: (err: unknown) => this.fail(this.apiMessage(err) ?? 'Não foi possível iniciar o cadastro do cartão. Tente novamente em instantes.')
    });
  }

  ngOnDestroy(): void {
    this.cardElement?.destroy();
  }

  submit(): void {
    if (!this.stripe || !this.cardElement || !this.clientSecret || this.isBusy()) {
      return;
    }
    this.isSaving.set(true);
    this.error.set(null);

    this.stripe
      .confirmCardSetup(this.clientSecret, {
        payment_method: {
          card: this.cardElement,
          billing_details: { name: this.holderName().trim() }
        }
      })
      .then((result: any) => {
        if (result.error) {
          this.isSaving.set(false);
          this.error.set(result.error.message ?? 'O cartão não foi aceito. Confira os dados ou use outro cartão.');
          return;
        }
        const paymentMethodId = result.setupIntent?.payment_method as string;
        this.subscriptionService.savePaymentMethod(paymentMethodId).subscribe({
          next: (status) => {
            this.isSaving.set(false);
            this.saved.emit(status);
          },
          error: (err: unknown) => {
            this.isSaving.set(false);
            this.error.set(this.apiMessage(err) ?? 'Não foi possível salvar o cartão. Tente novamente em instantes.');
          }
        });
      });
  }

  private mountCard(): void {
    const elements = this.stripe.elements({ locale: 'pt-BR' });
    this.cardElement = elements.create('card', {
      hidePostalCode: true,
      style: {
        base: {
          color: '#ffffff',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '15px',
          '::placeholder': { color: 'rgba(203, 213, 225, 0.6)' }
        },
        invalid: { color: '#f87171' }
      }
    });
    this.cardElement.mount(this.cardContainer.nativeElement);
    this.cardElement.on('change', (event: any) => {
      this.cardComplete.set(!!event.complete);
      this.error.set(event.error ? event.error.message : null);
    });
  }

  private fail(message: string): void {
    this.isPreparing.set(false);
    this.error.set(message);
  }

  private apiMessage(err: unknown): string | null {
    const body = err instanceof HttpErrorResponse ? (err.error as { mensagem?: string } | undefined) : undefined;
    return body?.mensagem ?? null;
  }
}
