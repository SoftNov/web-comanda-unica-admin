import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  ApiErrorResponse,
  ComandaDisplayStatus,
  ComandaOrderResponse,
  ComandaOrderStatus,
  ComandaPaymentMethod,
  ComandaPaymentType,
  ComandaResponse,
  ComandaStatus,
  ComandasService,
  ManualComandaPaymentMethod
} from '../../../../shared/services/comandas.service';
import { RestaurantTableResponse, TablesService } from '../../../../shared/services/tables.service';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import { autoDismiss } from '../../../../shared/utils/auto-dismiss.util';
import { AuthService } from '../../../auth/services/auth.service';

const PAGE_SIZE = 10;

type StatusFilter = 'all' | ComandaStatus;

@Component({
  selector: 'app-admin-comandas',
  standalone: true,
  imports: [ReactiveFormsModule, RippleDirective],
  templateUrl: './comandas.component.html',
  styleUrl: './comandas.component.scss'
})
export class ComandasComponent {
  private readonly fb = new FormBuilder();
  private readonly comandasService = inject(ComandasService);
  private readonly tablesService = inject(TablesService);
  private readonly authService = inject(AuthService);

  private readonly currencyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  private readonly dateTimeFormatter = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' });

  readonly selectedCompany = this.authService.selectedCompany;

  // --- Listagem/paginação -----------------------------------------------------
  readonly comandas = signal<ComandaResponse[]>([]);
  readonly page = signal(0);
  readonly totalPages = signal(0);
  readonly totalElements = signal(0);
  readonly isLast = signal(true);
  readonly isLoadingList = signal(true);
  readonly listError = signal<string | null>(null);

  readonly pageLabel = computed(() => `Página ${this.page() + 1} de ${Math.max(this.totalPages(), 1)}`);

  // --- Filtros ------------------------------------------------------------------
  readonly filterStatus = signal<StatusFilter>('all');
  readonly filterTableId = signal('');
  readonly sortDirection = signal<'ASC' | 'DESC'>('DESC');

  readonly tables = signal<RestaurantTableResponse[]>([]);

  // --- Detalhe da comanda (modal) ------------------------------------------------
  readonly selectedComanda = signal<ComandaResponse | null>(null);

  // --- Alterar status manualmente -----------------------------------------------
  readonly statusForm = this.fb.nonNullable.group({
    status: this.fb.nonNullable.control<ComandaStatus>('OPEN', Validators.required)
  });
  readonly isSubmittingStatus = signal(false);
  readonly statusError = signal<string | null>(null);

  // --- Registrar pagamento em dinheiro --------------------------------------------
  readonly paymentForm = this.fb.nonNullable.group({
    amount: this.fb.control<number | null>(null, [Validators.required, Validators.min(0.01)]),
    method: this.fb.nonNullable.control<ManualComandaPaymentMethod>('CASH_REGISTER', Validators.required)
  });
  readonly isSubmittingPayment = signal(false);
  readonly paymentError = signal<string | null>(null);

  // --- Finalizar rapidamente (saldo já zerado) ------------------------------------
  readonly finalizingComandaId = signal<string | null>(null);
  readonly finalizeError = signal<string | null>(null);

  constructor() {
    this.loadTables();
    this.loadComandas(0);
  }

  // --- Apresentação -------------------------------------------------------------
  displayStatusLabel(status: ComandaDisplayStatus): string {
    switch (status) {
      case 'CLOSED':
        return 'Encerrada';
      case 'OPEN_PARTIAL':
        return 'Aberta — pagamento parcial';
      default:
        return 'Em aberto';
    }
  }

  displayStatusBadgeClass(status: ComandaDisplayStatus): string {
    switch (status) {
      case 'CLOSED':
        return 'badge--success';
      case 'OPEN_PARTIAL':
        return 'badge--warning';
      default:
        return 'badge--muted';
    }
  }

  orderStatusLabel(status: ComandaOrderStatus): string {
    switch (status) {
      case 'RECEIVED':
        return 'Recebido';
      case 'IN_PREPARATION':
        return 'Em preparo';
      case 'READY':
        return 'Pronto';
      case 'DELIVERED':
        return 'Entregue';
      case 'CLOSED':
        return 'Fechado';
      default:
        return 'Cancelado';
    }
  }

  orderStatusBadgeClass(status: ComandaOrderStatus): string {
    switch (status) {
      case 'CANCELLED':
        return 'badge--danger';
      case 'DELIVERED':
      case 'CLOSED':
        return 'badge--success';
      case 'READY':
        return 'badge--warning';
      default:
        return 'badge--muted';
    }
  }

  paymentTypeLabel(type: ComandaPaymentType): string {
    switch (type) {
      case 'FULL':
        return 'Integral';
      case 'OWN_BILL':
        return 'Própria conta';
      default:
        return 'Parcial';
    }
  }

  paymentMethodLabel(method: ComandaPaymentMethod): string {
    switch (method) {
      case 'CASH_REGISTER':
        return 'Dinheiro (caixa)';
      case 'CASH_WAITER':
        return 'Dinheiro (garçom)';
      default:
        return 'App do cliente';
    }
  }

  // Comanda sem saldo em aberto (já quitada, ou sem pedidos) pode ser encerrada com um clique,
  // sem precisar passar pelo formulário genérico de alteração manual de status.
  canFinalize(comanda: ComandaResponse): boolean {
    return comanda.status === 'OPEN' && comanda.balanceAmount <= 0;
  }

  formatCurrency(value: number | undefined | null): string {
    return value != null ? this.currencyFormatter.format(value) : '—';
  }

  formatDateTime(value: string | undefined | null): string {
    return value ? this.dateTimeFormatter.format(new Date(value)) : '—';
  }

  // "2x X-Burger, 1x Coca-Cola" — itens cancelados individualmente já não vêm nesta lista (ver
  // ComandaServiceImpl#loadItemsByOrderId no backend), então o que aparece aqui é exatamente o
  // que compõe o totalAmount do pedido.
  orderItemsSummary(order: ComandaOrderResponse): string {
    if (order.items.length === 0) {
      return '—';
    }
    return order.items.map((item) => `${item.quantity}x ${item.itemName}`).join(', ');
  }

  // --- Listagem -------------------------------------------------------------------
  loadTables(): void {
    this.tablesService.list({ status: 'ACTIVE', page: 0, size: 200, sortBy: 'number', sortDirection: 'ASC' }).subscribe({
      next: (response) => this.tables.set(response.content),
      error: () => this.tables.set([])
    });
  }

  loadComandas(page: number): void {
    this.isLoadingList.set(true);
    this.listError.set(null);

    const status = this.filterStatus();
    this.comandasService
      .list({
        status: status === 'all' ? undefined : status,
        tableId: this.filterTableId() || undefined,
        page,
        size: PAGE_SIZE,
        sortBy: 'openedAt',
        sortDirection: this.sortDirection()
      })
      .subscribe({
        next: (response) => {
          this.comandas.set(response.content);
          this.page.set(response.page);
          this.totalPages.set(response.totalPages);
          this.totalElements.set(response.totalElements);
          this.isLast.set(response.last);
          this.isLoadingList.set(false);
        },
        error: () => {
          this.isLoadingList.set(false);
          this.listError.set('Não foi possível carregar as comandas.');
        }
      });
  }

  refreshComandas(): void {
    this.loadComandas(this.page());
  }

  goToPage(page: number): void {
    if (page < 0 || page >= this.totalPages() || page === this.page()) {
      return;
    }
    this.loadComandas(page);
  }

  previousPage(): void {
    this.goToPage(this.page() - 1);
  }

  nextPage(): void {
    this.goToPage(this.page() + 1);
  }

  // --- Filtros ----------------------------------------------------------------------
  setStatusFilter(value: StatusFilter): void {
    this.filterStatus.set(value);
    this.loadComandas(0);
  }

  setTableFilter(value: string): void {
    this.filterTableId.set(value);
    this.loadComandas(0);
  }

  toggleSortDirection(): void {
    this.sortDirection.set(this.sortDirection() === 'ASC' ? 'DESC' : 'ASC');
    this.loadComandas(0);
  }

  resetFilters(): void {
    this.filterStatus.set('all');
    this.filterTableId.set('');
    this.sortDirection.set('DESC');
    this.loadComandas(0);
  }

  // --- Detalhe --------------------------------------------------------------------
  openDetail(comanda: ComandaResponse): void {
    this.statusError.set(null);
    this.paymentError.set(null);
    this.finalizeError.set(null);
    this.statusForm.reset({ status: comanda.status === 'CLOSED' ? 'OPEN' : 'CLOSED' });
    this.paymentForm.reset({ amount: null, method: 'CASH_REGISTER' });
    this.selectedComanda.set(comanda);
  }

  closeDetail(): void {
    this.selectedComanda.set(null);
  }

  // --- Alterar status manualmente -----------------------------------------------
  submitStatusChange(): void {
    const comanda = this.selectedComanda();
    if (!comanda || this.statusForm.invalid) {
      return;
    }

    this.isSubmittingStatus.set(true);
    this.statusError.set(null);

    this.comandasService.updateStatus(comanda.id, { status: this.statusForm.getRawValue().status }).subscribe({
      next: (updated) => {
        this.isSubmittingStatus.set(false);
        this.statusForm.reset({ status: updated.status === 'CLOSED' ? 'OPEN' : 'CLOSED' });
        this.applyUpdatedComanda(updated);
      },
      error: (error: HttpErrorResponse) => {
        this.isSubmittingStatus.set(false);
        this.statusError.set(this.resolveErrorMessage(error));
        autoDismiss(this.statusError, null);
      }
    });
  }

  // --- Finalizar rapidamente (saldo já zerado) ------------------------------------
  finalizeComanda(comanda: ComandaResponse): void {
    if (!this.canFinalize(comanda)) {
      return;
    }

    this.finalizeError.set(null);
    this.finalizingComandaId.set(comanda.id);

    this.comandasService.updateStatus(comanda.id, { status: 'CLOSED' }).subscribe({
      next: (updated) => {
        this.finalizingComandaId.set(null);
        this.applyUpdatedComanda(updated);
        if (this.selectedComanda()?.id === updated.id) {
          this.statusForm.reset({ status: 'OPEN' });
        }
      },
      error: (error: HttpErrorResponse) => {
        this.finalizingComandaId.set(null);
        this.finalizeError.set(this.resolveErrorMessage(error));
        autoDismiss(this.finalizeError, null);
      }
    });
  }

  // --- Registrar pagamento em dinheiro --------------------------------------------
  submitPayment(): void {
    const comanda = this.selectedComanda();
    if (!comanda || this.paymentForm.invalid) {
      this.paymentForm.markAllAsTouched();
      return;
    }

    const value = this.paymentForm.getRawValue();
    this.isSubmittingPayment.set(true);
    this.paymentError.set(null);

    this.comandasService
      .registerPayment(comanda.id, { amount: value.amount ?? 0, method: value.method })
      .subscribe({
        next: (updated) => {
          this.isSubmittingPayment.set(false);
          this.paymentForm.reset({ amount: null, method: 'CASH_REGISTER' });
          this.applyUpdatedComanda(updated);
        },
        error: (error: HttpErrorResponse) => {
          this.isSubmittingPayment.set(false);
          this.paymentError.set(this.resolveErrorMessage(error));
          autoDismiss(this.paymentError, null);
        }
      });
  }

  private applyUpdatedComanda(updated: ComandaResponse): void {
    this.selectedComanda.set(updated);
    this.comandas.update((list) => list.map((current) => (current.id === updated.id ? updated : current)));
  }

  // --- Erros --------------------------------------------------------------------
  private resolveErrorMessage(error: HttpErrorResponse): string {
    const body = error.error as ApiErrorResponse | undefined;
    if (body?.mensagem) {
      return body.mensagem;
    }
    if (body?.titulo) {
      return body.titulo;
    }
    if (error.status === 404) {
      return 'Comanda não encontrada.';
    }
    if (error.status === 409) {
      return 'Esta comanda já está encerrada.';
    }
    if (error.status === 403) {
      return 'Você não tem permissão para realizar esta ação.';
    }
    if (error.status === 422) {
      return 'Verifique os dados informados e tente novamente.';
    }
    return 'Não foi possível concluir a operação. Tente novamente em instantes.';
  }
}