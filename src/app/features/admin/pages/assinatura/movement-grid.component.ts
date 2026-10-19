import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CreditMovement, CreditMovementType } from '../../../../shared/services/subscription.service';
import { parseApiDate } from '../../../../shared/utils/datetime.util';

// Movimentações do crédito da assinatura em grid de cards, paginado pela API (2 colunas no celular).
@Component({
  selector: 'app-movement-grid',
  standalone: true,
  templateUrl: './movement-grid.component.html',
  styleUrl: './movement-grid.component.scss'
})
export class MovementGridComponent {
  @Input() movements: CreditMovement[] = [];
  @Input() loading = false;
  @Input() error = false;
  @Input() page = 0;
  @Input() totalPages = 0;
  @Input() totalElements = 0;
  @Output() readonly pageChange = new EventEmitter<number>();
  @Output() readonly retry = new EventEmitter<void>();

  readonly skeletons = [1, 2, 3, 4];

  private readonly currencyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  private readonly dateFormatter = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'medium' });

  private static readonly LABELS: Record<CreditMovementType, string> = {
    SUBSCRIPTION_CREDIT: 'Crédito concedido',
    FEE_CREDIT_CONSUMPTION: 'Crédito usado em taxa',
    FEE_CREDIT_CONSUMPTION_REVERSAL: 'Crédito devolvido',
    CREDIT_EXPIRATION: 'Saldo transferido'
  };

  private static readonly ICONS: Record<CreditMovementType, string> = {
    SUBSCRIPTION_CREDIT: 'add_card',
    FEE_CREDIT_CONSUMPTION: 'receipt',
    FEE_CREDIT_CONSUMPTION_REVERSAL: 'undo',
    CREDIT_EXPIRATION: 'swap_horiz'
  };

  label(type: CreditMovementType): string {
    return MovementGridComponent.LABELS[type] ?? type;
  }

  icon(type: CreditMovementType): string {
    return MovementGridComponent.ICONS[type] ?? 'swap_horiz';
  }

  // Entra crédito na concessão / devolução; sai no consumo / transferência para o período novo.
  isIncoming(type: CreditMovementType): boolean {
    return type === 'SUBSCRIPTION_CREDIT' || type === 'FEE_CREDIT_CONSUMPTION_REVERSAL';
  }

  amountLabel(value: number | null | undefined): string {
    return value != null ? this.currencyFormatter.format(value) : '—';
  }

  dateLabel(value: string | null | undefined): string {
    const parsed = parseApiDate(value ?? null);
    return parsed ? this.dateFormatter.format(parsed) : '—';
  }

  goTo(page: number): void {
    if (page < 0 || page >= this.totalPages || page === this.page || this.loading) {
      return;
    }
    this.pageChange.emit(page);
  }
}
