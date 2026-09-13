import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiErrorResponse } from '../../../../shared/services/comandas.service';
import { RestaurantTableResponse, TablesService } from '../../../../shared/services/tables.service';
import { StaffComandaLineItem, StaffComandaResponse, StaffOrderItemStatus, StaffOrderService } from '../../../../shared/services/staff-order.service';
import { autoDismiss } from '../../../../shared/utils/auto-dismiss.util';

// Itens já lançados na comanda (StaffComandaResponse.items, achatados) agrupados por pedido no
// front — a API não agrupa (ver orderId em cada item), mesmo padrão de OrderGroup no
// comanda.component.ts do web-comanda-unica-menu (visão do cliente).
interface StaffOrderGroup {
  orderId: string;
  customerName: string;
  notes: string | null;
  items: StaffComandaLineItem[];
  activeTotal: number;
  allCancelled: boolean;
  // Cancelamento do pedido inteiro só é permitido enquanto nenhum item começou a ser preparado
  // (ver StaffOrderServiceImpl#cancelOrder no backend, mesma regra do autocancelamento do
  // cliente) — true só se todo item ainda ativo estiver em "Solicitado".
  canCancel: boolean;
}

// Página dedicada da comanda da mesa (equivalente à rota /comanda do cardápio digital do
// cliente — ver comanda.component.ts em web-comanda-unica-menu) — separada da tela de montar
// pedido (LancarPedidoComponent) de propósito: numa mesa com muitos pedidos já lançados, essa
// lista sozinha já é pesada; misturá-la com o catálogo de produtos na mesma tela é o que deixava
// a experiência carregada e lenta.
@Component({
  selector: 'app-comanda-mesa',
  standalone: true,
  imports: [],
  templateUrl: './comanda-mesa.component.html',
  styleUrl: './comanda-mesa.component.scss'
})
export class ComandaMesaComponent {
  private readonly tablesService = inject(TablesService);
  private readonly staffOrderService = inject(StaffOrderService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  private readonly currencyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

  readonly tableId = this.route.snapshot.paramMap.get('tableId') ?? '';
  readonly table = signal<RestaurantTableResponse | null>(null);

  readonly orderComanda = signal<StaffComandaResponse | null>(null);
  readonly isLoading = signal(true);
  readonly loadError = signal<string | null>(null);

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
          allCancelled: true,
          canCancel: true
        };
        byOrderId.set(item.orderId, group);
        groups.push(group);
      }
      group.items.push(item);
      if (item.status !== 'CANCELLED') {
        group.activeTotal += item.totalPrice;
        group.allCancelled = false;
        if (item.status !== 'REQUESTED') {
          group.canCancel = false;
        }
      }
    }
    return groups;
  });

  constructor() {
    if (!this.tableId) {
      this.loadError.set('Mesa não informada.');
      this.isLoading.set(false);
      return;
    }
    this.loadTable();
    this.loadComanda();
  }

  private loadTable(): void {
    this.tablesService.list({ status: 'ACTIVE', page: 0, size: 200, sortBy: 'number', sortDirection: 'ASC' }).subscribe({
      next: (response) => this.table.set(response.content.find((item) => item.id === this.tableId) ?? null),
      error: () => this.table.set(null)
    });
  }

  private loadComanda(): void {
    this.isLoading.set(true);
    this.loadError.set(null);

    this.staffOrderService.openOrEnter(this.tableId).subscribe({
      next: (comanda) => {
        this.isLoading.set(false);
        this.orderComanda.set(comanda);
      },
      error: (error: HttpErrorResponse) => {
        this.isLoading.set(false);
        this.loadError.set(this.resolveErrorMessage(error));
      }
    });
  }

  goToMenu(): void {
    this.router.navigate(['/painel/comandas/lancar-pedido'], { queryParams: { mesa: this.tableId } });
  }

  formatCurrency(value: number | undefined | null): string {
    return value != null ? this.currencyFormatter.format(value) : '—';
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
    const reason = this.reasonInput().trim();
    if (!orderId || !reason || this.cancellingOrderId()) {
      return;
    }

    this.cancellingOrderId.set(orderId);
    this.orderActionError.set(null);

    this.staffOrderService.cancelOrder(this.tableId, orderId, reason).subscribe({
      next: (comanda) => {
        this.cancellingOrderId.set(null);
        this.pendingCancelOrderId.set(null);
        this.reasonInput.set('');
        this.orderComanda.set(comanda);
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
    const reason = this.reasonInput().trim();
    if (!itemId || !reason || this.removingItemId()) {
      return;
    }

    this.removingItemId.set(itemId);
    this.orderActionError.set(null);

    this.staffOrderService.removeItem(this.tableId, itemId, reason).subscribe({
      next: (comanda) => {
        this.removingItemId.set(null);
        this.pendingRemoveItemId.set(null);
        this.reasonInput.set('');
        this.orderComanda.set(comanda);
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
    if (this.isSavingNotes()) {
      return;
    }

    this.isSavingNotes.set(true);
    this.orderActionError.set(null);

    this.staffOrderService.updateOrderNotes(this.tableId, orderId, this.notesInput().trim() || null).subscribe({
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
      return 'Mesa ou comanda não encontrada.';
    }
    if (error.status === 409) {
      return 'Esta comanda já está encerrada.';
    }
    if (error.status === 403) {
      return 'Você não tem permissão para realizar esta ação.';
    }
    return 'Não foi possível carregar a comanda. Tente novamente em instantes.';
  }
}
