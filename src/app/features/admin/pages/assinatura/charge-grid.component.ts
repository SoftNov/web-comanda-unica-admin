import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardBrandLogoComponent } from '../../../../shared/components/card-brand-logo/card-brand-logo.component';
import { PlatformCharge } from '../../../../shared/services/subscription.service';
import { parseApiDate } from '../../../../shared/utils/datetime.util';

type ChargeTone = 'success' | 'warning' | 'danger' | 'muted';

// Faturas da assinatura (mensalidades e taxas semanais) em grid de cards — 2 colunas no celular.
@Component({
  selector: 'app-charge-grid',
  standalone: true,
  imports: [CardBrandLogoComponent],
  templateUrl: './charge-grid.component.html',
  styleUrl: './charge-grid.component.scss'
})
export class ChargeGridComponent {
  @Input() charges: PlatformCharge[] = [];
  @Input() loading = false;
  @Input() error = false;
  @Output() readonly retry = new EventEmitter<void>();

  readonly skeletons = [1, 2, 3];

  private readonly currencyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  private readonly dateFormatter = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'medium' });

  kindLabel(charge: PlatformCharge): string {
    return charge.kind === 'SUBSCRIPTION' ? 'Mensalidade' : 'Taxas da semana';
  }

  statusLabel(charge: PlatformCharge): string {
    if (charge.paid) {
      return 'Paga';
    }
    switch (charge.status) {
      case 'PENDING':
      case 'AWAITING_RISK_ANALYSIS':
        return 'Processando';
      case 'OVERDUE':
        return 'Recusada';
      case 'REFUNDED':
      case 'REFUND_REQUESTED':
        return 'Estornada';
      default:
        return charge.status;
    }
  }

  // Cor do card: paga (verde), processando (amarelo), recusada (vermelho), estornada (neutro).
  tone(charge: PlatformCharge): ChargeTone {
    if (charge.paid) {
      return 'success';
    }
    switch (charge.status) {
      case 'PENDING':
      case 'AWAITING_RISK_ANALYSIS':
        return 'warning';
      case 'OVERDUE':
        return 'danger';
      default:
        return 'muted';
    }
  }

  amountLabel(value: number | null | undefined): string {
    return value != null ? this.currencyFormatter.format(value) : '—';
  }

  dateLabel(value: string | null | undefined): string {
    const parsed = parseApiDate(value ?? null);
    return parsed ? this.dateFormatter.format(parsed) : '—';
  }
}
