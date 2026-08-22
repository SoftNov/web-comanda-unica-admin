import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RippleDirective } from '../../../../../../../shared/directives/ripple.directive';
import { PlatformStripeConfig, UpdatePlatformStripeSettingsRequest } from '../../../../../../../shared/services/platform-stripe-config.service';

// Stripe Connect (tipo Express) + métodos de pagamento aceitos pela plataforma — afeta todas as
// empresas que conectarem conta daqui pra frente. Não mexe em credencial nenhuma, só flags.
@Component({
  selector: 'app-admin-stripe-connect-card',
  standalone: true,
  imports: [ReactiveFormsModule, RippleDirective],
  templateUrl: './admin-stripe-connect-card.component.html',
  styleUrl: './admin-stripe-connect-card.component.scss'
})
export class AdminStripeConnectCardComponent implements OnChanges {
  private readonly fb = inject(FormBuilder);

  @Input({ required: true }) config!: PlatformStripeConfig;
  @Input() isSaving = false;
  @Input() error: string | null = null;

  @Output() readonly save = new EventEmitter<UpdatePlatformStripeSettingsRequest>();

  readonly form = this.fb.nonNullable.group({
    connectEnabled: this.fb.nonNullable.control(true),
    paymentMethodCard: this.fb.nonNullable.control(true),
    paymentMethodPix: this.fb.nonNullable.control(true),
    paymentMethodOther: this.fb.nonNullable.control(false)
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['config'] && this.config) {
      this.form.reset({
        connectEnabled: this.config.connectEnabled,
        paymentMethodCard: this.config.paymentMethodCard,
        paymentMethodPix: this.config.paymentMethodPix,
        paymentMethodOther: this.config.paymentMethodOther
      });
    }
  }

  submit(): void {
    this.save.emit(this.form.getRawValue());
  }
}
