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
import { MenuCategoryResponse, MenuCategoriesService } from '../../../../shared/services/menu-categories.service';
import { MenuItemResponse, MenuItemsService } from '../../../../shared/services/menu-items.service';
import { StaffComandaLineItem, StaffComandaResponse, StaffOrderItemStatus, StaffOrderService } from '../../../../shared/services/staff-order.service';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import { autoDismiss } from '../../../../shared/utils/auto-dismiss.util';
import { brDateTimeFormat, parseApiDate } from '../../../../shared/utils/datetime.util';
import { AuthService } from '../../../auth/services/auth.service';

const PAGE_SIZE = 10;

type StatusFilter = 'all' | ComandaStatus;

// Item em montagem no pedido lançado pela equipe (ver seção "Lançar pedido" mais abaixo) — só no
// front, nada é persistido até o clique em "Enviar pedido" (ver StaffOrderService#createOrder).
interface OrderDraftItem {
  menuItemId: string;
  name: string;
  unitPrice: number;
  quantity: number;
}

interface OrderItemBadge {
  icon: string;
  label: string;
}

// Itens já lançados na comanda (StaffComandaResponse.items, achatados) agrupados por pedido no
// front — a API não agrupa (ver orderId em cada item), mesmo padrão de OrderGroup no
// comanda.component.ts do web-comanda-unica-menu (visão do cliente).
interface StaffOrderGroup {
  orderId: string;
  customerName: string;
  notes: string | null;
  items: StaffComandaLineItem[];
  // Soma dos itens ainda ativos (não cancelados) — usada pra mostrar o total real do pedido e pra
  // decidir se ainda faz sentido oferecer "Cancelar pedido" (já cancelado por inteiro não precisa).
  activeTotal: number;
  allCancelled: boolean;
}

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
  private readonly menuCategoriesService = inject(MenuCategoriesService);
  private readonly menuItemsService = inject(MenuItemsService);
  private readonly staffOrderService = inject(StaffOrderService);
  private readonly authService = inject(AuthService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  private readonly currencyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  private readonly dateTimeFormatter = brDateTimeFormat({ dateStyle: 'short', timeStyle: 'short' });

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

  // --- Lançar pedido pela equipe (modal) -------------------------------------------
  // Para estabelecimentos em que o cliente não usa o cardápio digital: a própria equipe
  // (qualquer perfil desta tela — todos exceto KITCHEN) abre/entra na comanda da mesa e lança o
  // pedido direto, sem exigir login (social ou convidado) do cliente final. Ver StaffOrderService,
  // que fala com a api-comanda-unica-menu (não a api-comanda-unica-admin, como o resto da tela).
  readonly isOrderModalOpen = signal(false);
  readonly orderTableId = signal('');
  readonly orderComanda = signal<StaffComandaResponse | null>(null);
  readonly isLoadingOrderComanda = signal(false);
  readonly orderComandaError = signal<string | null>(null);

  readonly orderCategories = signal<MenuCategoryResponse[]>([]);
  readonly orderMenuItems = signal<MenuItemResponse[]>([]);
  readonly isLoadingOrderCatalog = signal(false);
  readonly orderCatalogError = signal<string | null>(null);
  readonly orderCategoryFilter = signal('');
  private catalogLoaded = false;

  readonly orderDraftItems = signal<OrderDraftItem[]>([]);
  readonly orderDraftTotal = computed(() =>
    this.orderDraftItems().reduce((sum, item) => sum + item.unitPrice * item.quantity, 0)
  );

  readonly isSubmittingOrder = signal(false);
  readonly submitOrderError = signal<string | null>(null);

  // --- Gerenciar pedidos já lançados (cancelar pedido, remover item, editar observação) ----------
  // Justificativa pedida inline no próprio card do pedido/item (não um modal por cima do modal) —
  // só uma pendência por vez: abrir uma fecha a outra (ver askCancelOrder/askRemoveItem).
  readonly pendingCancelOrderId = signal<string | null>(null);
  readonly pendingRemoveItemId = signal<string | null>(null);
  readonly reasonInput = signal('');
  readonly cancellingOrderId = signal<string | null>(null);
  readonly removingItemId = signal<string | null>(null);
  readonly orderActionError = signal<string | null>(null);

  readonly editingNotesOrderId = signal<string | null>(null);
  readonly notesInput = signal('');
  readonly isSavingNotes = signal(false);

  readonly orderGroups = computed<StaffOrderGroup[]>(() => {
    const comanda = this.orderComanda();
    if (!comanda) {
      return [];
    }
    const byOrderId = new Map<string, StaffOrderGroup>();
    const groups: StaffOrderGroup[] = [];
    for (const item of comanda.items) {
      let group = byOrderId.get(item.orderId);
      if (!group) {
        group = {
          orderId: item.orderId,
          customerName: item.customerName,
          notes: item.orderNotes ?? null,
          items: [],
          activeTotal: 0,
          allCancelled: true
        };
        byOrderId.set(item.orderId, group);
        groups.push(group);
      }
      group.items.push(item);
      if (item.status !== 'CANCELLED') {
        group.activeTotal += item.totalPrice;
        group.allCancelled = false;
      }
    }
    return groups;
  });

  readonly visibleOrderMenuItems = computed(() => {
    const categoryId = this.orderCategoryFilter();
    const items = this.orderMenuItems();
    return categoryId ? items.filter((item) => item.categoryId === categoryId) : items;
  });

  // Imagens quebradas do cardápio (ver menu-item__image no público) — mesmo padrão do
  // PublicMenuComponent#brokenImageIds: só um Set imperativo, não precisa ser signal (nunca lido
  // em template reativo diretamente, só consultado a cada render via hasOrderItemImage).
  private readonly brokenOrderImageIds = new Set<string>();

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
    return comanda.status === 'OPEN' && comanda.amountToCollect <= 0;
  }

  formatCurrency(value: number | undefined | null): string {
    return value != null ? this.currencyFormatter.format(value) : '—';
  }

  formatDateTime(value: string | undefined | null): string {
    const parsed = parseApiDate(value);
    return parsed ? this.dateTimeFormatter.format(parsed) : '—';
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

  // Mesma exibição do cardápio digital do cliente (ver PublicMenuComponent#hasImage/getBadges/
  // hasActivePromotion no web-comanda-unica-menu) — o garçom vê o produto igual ao que o cliente
  // veria no app, só que dentro do painel e sem precisar de login/QR Code.
  hasOrderItemImage(item: MenuItemResponse): boolean {
    return !!item.imageUrl && !this.brokenOrderImageIds.has(item.id);
  }

  onOrderItemImageError(itemId: string): void {
    this.brokenOrderImageIds.add(itemId);
  }

  hasActivePromotionForOrder(item: MenuItemResponse): boolean {
    if (!item.promotionalPrice || item.promotionalPrice >= item.price) {
      return false;
    }
    const now = Date.now();
    const start = parseApiDate(item.promotionStart);
    if (start && start.getTime() > now) {
      return false;
    }
    const end = parseApiDate(item.promotionEnd);
    if (end && end.getTime() < now) {
      return false;
    }
    return true;
  }

  orderItemBadges(item: MenuItemResponse): OrderItemBadge[] {
    const badges: OrderItemBadge[] = [];
    if (item.vegan) {
      badges.push({ icon: 'eco', label: 'Vegano' });
    }
    if (item.vegetarian) {
      badges.push({ icon: 'spa', label: 'Vegetariano' });
    }
    if (item.glutenFree) {
      badges.push({ icon: 'grain', label: 'Sem glúten' });
    }
    if (item.lactoseFree) {
      badges.push({ icon: 'icecream', label: 'Sem lactose' });
    }
    if (item.alcoholic) {
      badges.push({ icon: 'local_bar', label: 'Contém álcool' });
    }
    return badges;
  }

  getDraftQuantity(menuItemId: string): number {
    return this.orderDraftItems().find((draft) => draft.menuItemId === menuItemId)?.quantity ?? 0;
  }

  // --- Lançar pedido pela equipe (modal) -------------------------------------------
  openOrderModal(): void {
    this.orderTableId.set('');
    this.orderComanda.set(null);
    this.orderComandaError.set(null);
    this.orderDraftItems.set([]);
    this.submitOrderError.set(null);
    this.orderCategoryFilter.set('');
    this.resetOrderManagementState();
    this.isOrderModalOpen.set(true);

    if (!this.catalogLoaded) {
      this.loadOrderCatalog();
    }
  }

  closeOrderModal(): void {
    if (this.isSubmittingOrder()) {
      return;
    }
    this.isOrderModalOpen.set(false);
  }

  private loadOrderCatalog(): void {
    this.catalogLoaded = true;
    this.isLoadingOrderCatalog.set(true);
    this.orderCatalogError.set(null);

    this.menuCategoriesService.list(true).subscribe({
      next: (categories) => this.orderCategories.set(categories),
      error: () => this.orderCategories.set([])
    });

    this.menuItemsService
      .list({ active: true, available: true, page: 0, size: 500, sortBy: 'displayOrder', sortDirection: 'ASC' })
      .subscribe({
        next: (response) => {
          this.isLoadingOrderCatalog.set(false);
          this.orderMenuItems.set(response.content);
        },
        error: () => {
          this.isLoadingOrderCatalog.set(false);
          this.orderCatalogError.set('Não foi possível carregar o cardápio.');
        }
      });
  }

  setOrderCategoryFilter(categoryId: string): void {
    this.orderCategoryFilter.set(categoryId);
  }

  // Abre/entra na comanda da mesa escolhida (mesmo comportamento do primeiro scan do QR Code
  // pelo cliente — ver StaffOrderService#openOrEnter) para mostrar o que já foi pedido antes de
  // a equipe lançar itens novos.
  selectOrderTable(tableId: string): void {
    this.orderTableId.set(tableId);
    this.orderComanda.set(null);
    this.orderComandaError.set(null);
    this.orderDraftItems.set([]);
    this.resetOrderManagementState();

    if (!tableId) {
      return;
    }

    this.isLoadingOrderComanda.set(true);
    this.staffOrderService.openOrEnter(tableId).subscribe({
      next: (comanda) => {
        this.isLoadingOrderComanda.set(false);
        this.orderComanda.set(comanda);
      },
      error: (error: HttpErrorResponse) => {
        this.isLoadingOrderComanda.set(false);
        this.orderComandaError.set(this.resolveErrorMessage(error));
      }
    });
  }

  addDraftItem(item: MenuItemResponse): void {
    const price = this.hasActivePromotionForOrder(item) ? item.promotionalPrice! : item.price;
    this.orderDraftItems.update((current) => {
      const existing = current.find((draft) => draft.menuItemId === item.id);
      if (existing) {
        return current.map((draft) => (draft.menuItemId === item.id ? { ...draft, quantity: draft.quantity + 1 } : draft));
      }
      return [...current, { menuItemId: item.id, name: item.name, unitPrice: price, quantity: 1 }];
    });
  }

  decrementDraftItem(menuItemId: string): void {
    this.orderDraftItems.update((current) =>
      current
        .map((draft) => (draft.menuItemId === menuItemId ? { ...draft, quantity: draft.quantity - 1 } : draft))
        .filter((draft) => draft.quantity > 0)
    );
  }

  submitOrder(): void {
    const tableId = this.orderTableId();
    const items = this.orderDraftItems();
    if (!tableId || items.length === 0 || this.isSubmittingOrder()) {
      return;
    }

    this.isSubmittingOrder.set(true);
    this.submitOrderError.set(null);

    this.staffOrderService
      .createOrder(tableId, { items: items.map((item) => ({ menuItemId: item.menuItemId, quantity: item.quantity })) })
      .subscribe({
        next: (comanda) => {
          this.isSubmittingOrder.set(false);
          this.orderComanda.set(comanda);
          this.orderDraftItems.set([]);
          this.loadComandas(this.page());
        },
        error: (error: HttpErrorResponse) => {
          this.isSubmittingOrder.set(false);
          this.submitOrderError.set(this.resolveErrorMessage(error));
          autoDismiss(this.submitOrderError, null);
        }
      });
  }

  staffItemStatusLabel(status: StaffOrderItemStatus): string {
    switch (status) {
      case 'REQUESTED':
        return 'Solicitado';
      case 'PREPARING':
        return 'Em preparo';
      case 'ON_THE_WAY':
        return 'A caminho';
      case 'DELIVERED':
        return 'Entregue';
      default:
        return 'Cancelado';
    }
  }

  private resetOrderManagementState(): void {
    this.pendingCancelOrderId.set(null);
    this.pendingRemoveItemId.set(null);
    this.reasonInput.set('');
    this.orderActionError.set(null);
    this.editingNotesOrderId.set(null);
    this.notesInput.set('');
  }

  // --- Cancelar pedido / remover item (com justificativa obrigatória) -----------------------------
  askCancelOrder(orderId: string): void {
    this.pendingRemoveItemId.set(null);
    this.editingNotesOrderId.set(null);
    this.pendingCancelOrderId.set(orderId);
    this.reasonInput.set('');
    this.orderActionError.set(null);
  }

  askRemoveItem(itemId: string): void {
    this.pendingCancelOrderId.set(null);
    this.editingNotesOrderId.set(null);
    this.pendingRemoveItemId.set(itemId);
    this.reasonInput.set('');
    this.orderActionError.set(null);
  }

  dismissOrderAction(): void {
    if (this.cancellingOrderId() || this.removingItemId()) {
      return;
    }
    this.pendingCancelOrderId.set(null);
    this.pendingRemoveItemId.set(null);
    this.reasonInput.set('');
  }

  confirmCancelOrder(): void {
    const orderId = this.pendingCancelOrderId();
    const tableId = this.orderTableId();
    const reason = this.reasonInput().trim();
    if (!orderId || !tableId || !reason || this.cancellingOrderId()) {
      return;
    }

    this.cancellingOrderId.set(orderId);
    this.orderActionError.set(null);

    this.staffOrderService.cancelOrder(tableId, orderId, reason).subscribe({
      next: (comanda) => {
        this.cancellingOrderId.set(null);
        this.pendingCancelOrderId.set(null);
        this.reasonInput.set('');
        this.orderComanda.set(comanda);
        this.loadComandas(this.page());
      },
      error: (error: HttpErrorResponse) => {
        this.cancellingOrderId.set(null);
        this.orderActionError.set(this.resolveErrorMessage(error));
        autoDismiss(this.orderActionError, null);
      }
    });
  }

  confirmRemoveItem(): void {
    const itemId = this.pendingRemoveItemId();
    const tableId = this.orderTableId();
    const reason = this.reasonInput().trim();
    if (!itemId || !tableId || !reason || this.removingItemId()) {
      return;
    }

    this.removingItemId.set(itemId);
    this.orderActionError.set(null);

    this.staffOrderService.removeItem(tableId, itemId, reason).subscribe({
      next: (comanda) => {
        this.removingItemId.set(null);
        this.pendingRemoveItemId.set(null);
        this.reasonInput.set('');
        this.orderComanda.set(comanda);
        this.loadComandas(this.page());
      },
      error: (error: HttpErrorResponse) => {
        this.removingItemId.set(null);
        this.orderActionError.set(this.resolveErrorMessage(error));
        autoDismiss(this.orderActionError, null);
      }
    });
  }

  // --- Anotações do pedido ---------------------------------------------------------------------
  startEditOrderNotes(group: StaffOrderGroup): void {
    this.pendingCancelOrderId.set(null);
    this.pendingRemoveItemId.set(null);
    this.editingNotesOrderId.set(group.orderId);
    this.notesInput.set(group.notes ?? '');
    this.orderActionError.set(null);
  }

  cancelEditOrderNotes(): void {
    if (this.isSavingNotes()) {
      return;
    }
    this.editingNotesOrderId.set(null);
    this.notesInput.set('');
  }

  saveOrderNotes(orderId: string): void {
    const tableId = this.orderTableId();
    if (!tableId || this.isSavingNotes()) {
      return;
    }

    this.isSavingNotes.set(true);
    this.orderActionError.set(null);

    this.staffOrderService.updateOrderNotes(tableId, orderId, this.notesInput().trim() || null).subscribe({
      next: (comanda) => {
        this.isSavingNotes.set(false);
        this.editingNotesOrderId.set(null);
        this.notesInput.set('');
        this.orderComanda.set(comanda);
      },
      error: (error: HttpErrorResponse) => {
        this.isSavingNotes.set(false);
        this.orderActionError.set(this.resolveErrorMessage(error));
        autoDismiss(this.orderActionError, null);
      }
    });
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