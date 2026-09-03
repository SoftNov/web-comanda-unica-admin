import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ApiErrorResponse,
  ComandaChargeFeeResponse,
  ComandaChargeMethod,
  ComandaDisplayStatus,
  ComandaOrderResponse,
  ComandaOrderStatus,
  ComandaChargeDisplayStatus,
  ComandaPaymentMethod,
  ComandaPaymentType,
  ComandaResponse,
  ComandaStatus,
  ComandasService,
  ManualComandaPaymentMethod,
  RefundReason,
  RefundStatus
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
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  private readonly currencyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  private readonly dateTimeFormatter = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' });

  readonly selectedCompany = this.authService.selectedCompany;
  // Estorno restrito a OWNER/ADMIN/MANAGER (ver seed de permissão payment.refund no backend,
  // 02-perfil e acesso.sql) — CASHIER/WAITER não veem o botão "Estornar". Mesmo padrão de
  // canManageTables em tables.component.ts.
  readonly canRefund = computed(() => ['OWNER', 'ADMIN', 'MANAGER'].includes(this.selectedCompany()?.profileCode ?? ''));

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

  // --- Estornar pagamento online (Stripe) -----------------------------------------
  readonly chargeToRefund = signal<ComandaChargeFeeResponse | null>(null);
  readonly confirmingRefund = signal(false);
  readonly isSubmittingRefund = signal(false);
  readonly refundError = signal<string | null>(null);
  readonly expandedChargeIds = signal<ReadonlySet<string>>(new Set());
  readonly refundForm = this.fb.nonNullable.group({
    type: this.fb.nonNullable.control<'TOTAL' | 'PARTIAL'>('TOTAL'),
    amount: this.fb.control<number | null>(null, [Validators.required, Validators.min(0.01)]),
    reason: this.fb.nonNullable.control<RefundReason>('CUSTOMER_REQUEST', Validators.required),
    description: this.fb.control<string | null>(null)
  });
  // Gerada uma vez ao abrir o modal, reaproveitada em qualquer reenvio (timeout, duplo clique) —
  // ver ComandasService#refundPayment. Só uma nova chave ao reabrir o modal do zero.
  private refundIdempotencyKey: string | null = null;

  // Comanda aberta por deep link (?comanda=<id>) — ex.: link do extrato financeiro para a comanda
  // paga. Carregada isoladamente (não depende de estar na página atual da listagem).
  readonly openingFromLink = signal(false);
  readonly openFromLinkError = signal<string | null>(null);

  constructor() {
    this.loadTables();
    this.loadComandas(0);

    const comandaIdFromLink = this.route.snapshot.queryParamMap.get('comanda');
    if (comandaIdFromLink) {
      this.openComandaFromLink(comandaIdFromLink);
    }
  }

  private openComandaFromLink(comandaId: string): void {
    this.openingFromLink.set(true);
    this.openFromLinkError.set(null);
    this.comandasService.getById(comandaId).subscribe({
      next: (comanda) => {
        this.openingFromLink.set(false);
        this.openDetail(comanda);
      },
      error: () => {
        this.openingFromLink.set(false);
        this.openFromLinkError.set('Não foi possível abrir a comanda indicada pelo link.');
      }
    });
    // Remove o parâmetro da URL para não reabrir o modal a cada refresh/navegação.
    this.router.navigate([], { relativeTo: this.route, queryParams: {}, replaceUrl: true });
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

  chargeMethodLabel(method: ComandaChargeMethod): string {
    return method === 'PIX' ? 'Pix' : 'Cartão de crédito';
  }

  chargeStatusLabel(status: ComandaChargeDisplayStatus): string {
    switch (status) {
      case 'REFUNDED':
        return 'Estornado';
      case 'PARTIALLY_REFUNDED':
        return 'Parcialmente estornado';
      default:
        return 'Pago';
    }
  }

  chargeStatusBadgeClass(status: ComandaChargeDisplayStatus): string {
    switch (status) {
      case 'REFUNDED':
        return 'badge--danger';
      case 'PARTIALLY_REFUNDED':
        return 'badge--warning';
      default:
        return 'badge--success';
    }
  }

  refundReasonLabel(reason: RefundReason): string {
    switch (reason) {
      case 'CUSTOMER_REQUEST':
        return 'Solicitação do cliente';
      case 'ORDER_CANCELLED':
        return 'Pedido cancelado';
      case 'DUPLICATE_CHARGE':
        return 'Cobrança duplicada';
      case 'OPERATIONAL_ERROR':
        return 'Erro operacional';
      default:
        return 'Outro';
    }
  }

  refundStatusLabel(status: RefundStatus): string {
    switch (status) {
      case 'SUCCEEDED':
        return 'Concluído';
      case 'FAILED':
        return 'Falhou';
      case 'CANCELED':
        return 'Cancelado';
      default:
        return 'Processando';
    }
  }

  refundStatusBadgeClass(status: RefundStatus): string {
    switch (status) {
      case 'SUCCEEDED':
        return 'badge--success';
      case 'FAILED':
      case 'CANCELED':
        return 'badge--danger';
      default:
        return 'badge--muted';
    }
  }

  isChargeExpanded(chargeId: string): boolean {
    return this.expandedChargeIds().has(chargeId);
  }

  toggleChargeDetails(chargeId: string): void {
    this.expandedChargeIds.update((current) => {
      const next = new Set(current);
      if (next.has(chargeId)) {
        next.delete(chargeId);
      } else {
        next.add(chargeId);
      }
      return next;
    });
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
    this.expandedChargeIds.set(new Set());
    this.cancelRefundModal();
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

  // --- Estornar pagamento online (Stripe) -----------------------------------------
  openRefundModal(charge: ComandaChargeFeeResponse): void {
    if (!charge.refundable) {
      return;
    }
    this.refundError.set(null);
    this.confirmingRefund.set(false);
    this.refundIdempotencyKey = crypto.randomUUID();
    this.refundForm.reset({
      type: 'TOTAL',
      amount: charge.availableAmount,
      reason: 'CUSTOMER_REQUEST',
      description: null
    });
    this.chargeToRefund.set(charge);
  }

  cancelRefundModal(): void {
    if (this.isSubmittingRefund()) {
      return;
    }
    this.chargeToRefund.set(null);
    this.confirmingRefund.set(false);
    this.refundError.set(null);
    this.refundIdempotencyKey = null;
  }

  // "Total" trava o valor no disponível (sempre em dia com o que já foi estornado antes); "Parcial"
  // libera o campo para o usuário digitar, começando do próprio disponível.
  onRefundTypeChange(type: 'TOTAL' | 'PARTIAL'): void {
    const charge = this.chargeToRefund();
    if (!charge) {
      return;
    }
    this.refundForm.patchValue({ type, amount: type === 'TOTAL' ? charge.availableAmount : this.refundForm.controls.amount.value });
  }

  askRefundConfirmation(): void {
    if (this.refundForm.invalid) {
      this.refundForm.markAllAsTouched();
      return;
    }
    const charge = this.chargeToRefund();
    const amount = this.refundForm.getRawValue().amount ?? 0;
    if (!charge) {
      return;
    }
    if (amount <= 0 || amount > charge.availableAmount) {
      this.refundForm.controls.amount.markAsTouched();
      this.refundError.set('O valor informado ultrapassa o valor disponível para estorno.');
      return;
    }
    this.refundError.set(null);
    this.confirmingRefund.set(true);
  }

  cancelRefundConfirmation(): void {
    this.confirmingRefund.set(false);
  }

  confirmRefund(): void {
    const charge = this.chargeToRefund();
    if (!charge || this.isSubmittingRefund() || !this.refundIdempotencyKey) {
      return;
    }

    const value = this.refundForm.getRawValue();
    this.isSubmittingRefund.set(true);
    this.refundError.set(null);

    this.comandasService
      .refundPayment(
        charge.id,
        { amount: value.amount ?? 0, reason: value.reason, description: value.description || undefined },
        this.refundIdempotencyKey
      )
      .subscribe({
        next: (response) => {
          this.isSubmittingRefund.set(false);
          this.applyRefundLocally(charge.id, value.amount ?? 0, value.reason, value.description, response);
          this.chargeToRefund.set(null);
          this.confirmingRefund.set(false);
          this.refundIdempotencyKey = null;
        },
        error: (error: HttpErrorResponse) => {
          this.isSubmittingRefund.set(false);
          this.confirmingRefund.set(false);
          this.refundError.set(this.resolveErrorMessage(error));
        }
      });
  }

  // Atualiza só a cobrança estornada (e o resumo de taxas) dentro da comanda já carregada — sem
  // recarregar a página inteira, seguindo o mesmo padrão de applyUpdatedComanda.
  private applyRefundLocally(
    chargeId: string,
    amount: number,
    reason: RefundReason,
    description: string | null | undefined,
    response: { refundId: string; stripeRefundId?: string; status: RefundStatus; createdAt: string }
  ): void {
    const comanda = this.selectedComanda();
    if (!comanda?.fees) {
      return;
    }

    const updatedCharges = comanda.fees.charges.map((current) => {
      if (current.id !== chargeId) {
        return current;
      }
      const refundedAmount = current.refundedAmount + amount;
      const availableAmount = Math.max(0, current.amount - refundedAmount);
      return {
        ...current,
        refundedAmount,
        availableAmount,
        refundable: availableAmount > 0,
        status: availableAmount <= 0 ? 'REFUNDED' : 'PARTIALLY_REFUNDED',
        refunds: [
          {
            id: response.refundId,
            amount,
            reason,
            description: description ?? undefined,
            status: response.status,
            stripeRefundId: response.stripeRefundId,
            createdAt: response.createdAt
          },
          ...current.refunds
        ]
      } as ComandaChargeFeeResponse;
    });

    this.applyUpdatedComanda({ ...comanda, fees: { ...comanda.fees, charges: updatedCharges } });
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