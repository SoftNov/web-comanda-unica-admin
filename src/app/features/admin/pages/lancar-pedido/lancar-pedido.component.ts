import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiErrorResponse } from '../../../../shared/services/comandas.service';
import { RestaurantTableResponse, TablesService } from '../../../../shared/services/tables.service';
import { MenuCategoryResponse, MenuCategoriesService } from '../../../../shared/services/menu-categories.service';
import { MenuItemResponse, MenuItemsService } from '../../../../shared/services/menu-items.service';
import { StaffComandaResponse, StaffOrderService } from '../../../../shared/services/staff-order.service';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import { autoDismiss } from '../../../../shared/utils/auto-dismiss.util';
import { parseApiDate } from '../../../../shared/utils/datetime.util';

// Item em montagem no pedido lançado pela equipe — só no front, nada é persistido até o clique
// em "Enviar pedido" (ver StaffOrderService#createOrder). Mesmo shape do LocalCartItem do
// carrinho do cliente (web-comanda-unica-menu/cart.model.ts) — notes é por item (ex: "sem
// cebola"), não do pedido inteiro, e vai em items[].notes na request.
interface OrderDraftItem {
  menuItemId: string;
  name: string;
  imageUrl?: string;
  unitPrice: number;
  quantity: number;
  notes: string;
}

interface OrderItemBadge {
  icon: string;
  label: string;
}

// Página dedicada (não mais um modal) para a equipe lançar pedido direto na comanda da mesa —
// espelha o cardápio digital do cliente (ver PublicMenuComponent em web-comanda-unica-menu):
// catálogo de produtos nesta tela, carrinho como drawer flutuante (não inline) e a comanda já
// lançada numa rota separada (ver ComandaMesaComponent) — assim a tela não fica pesada/carregada
// quando a mesa já tem muitos pedidos, já que essa lista nem é renderizada aqui.
@Component({
  selector: 'app-lancar-pedido',
  standalone: true,
  imports: [RippleDirective, RouterLink, FormsModule],
  templateUrl: './lancar-pedido.component.html',
  styleUrl: './lancar-pedido.component.scss'
})
export class LancarPedidoComponent {
  private readonly tablesService = inject(TablesService);
  private readonly menuCategoriesService = inject(MenuCategoriesService);
  private readonly menuItemsService = inject(MenuItemsService);
  private readonly staffOrderService = inject(StaffOrderService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  private readonly currencyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

  readonly tables = signal<RestaurantTableResponse[]>([]);

  readonly orderTableId = signal('');
  readonly orderComanda = signal<StaffComandaResponse | null>(null);
  readonly isLoadingOrderComanda = signal(false);
  readonly orderComandaError = signal<string | null>(null);

  // Mesmo papel do "hasPlacedOrder" do PublicMenuComponent: só pra habilitar o botão flutuante
  // "Comanda" — a lista em si só é buscada/renderizada na página separada (ComandaMesaComponent).
  readonly hasPlacedOrder = computed(() => (this.orderComanda()?.items.length ?? 0) > 0);

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
  readonly orderDraftCount = computed(() => this.orderDraftItems().reduce((sum, item) => sum + item.quantity, 0));

  // Carrinho como drawer flutuante por cima da página (ver .cart-overlay/.cart-drawer), igual ao
  // CartComponent do cliente — não é mais uma seção fixa da página.
  readonly isCartOpen = signal(false);

  readonly isSubmittingOrder = signal(false);
  readonly submitOrderError = signal<string | null>(null);

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
    this.loadOrderCatalog();

    // Chegar direto numa mesa (ex.: voltando da página da comanda, ou recarregando a página com
    // ?mesa= na URL — ver selectOrderTable) pula a etapa de escolher a mesa no select. Só aplica
    // depois que as mesas carregarem (loadTables): setar orderTableId antes de o <option>
    // correspondente existir no DOM faz o <select> nativo não mostrar nada selecionado, mesmo com
    // o valor certo no signal — o mesmo motivo, aliás, por que o rascunho ficava "perdido"
    // visualmente ao voltar da página da comanda.
    const tableIdFromLink = this.route.snapshot.queryParamMap.get('mesa');
    this.loadTables(tableIdFromLink);
  }

  goBack(): void {
    if (this.isSubmittingOrder()) {
      return;
    }
    this.router.navigate(['/painel/comandas']);
  }

  formatCurrency(value: number | undefined | null): string {
    return value != null ? this.currencyFormatter.format(value) : '—';
  }

  loadTables(preselectTableId?: string | null): void {
    this.tablesService.list({ status: 'ACTIVE', page: 0, size: 200, sortBy: 'number', sortDirection: 'ASC' }).subscribe({
      next: (response) => {
        this.tables.set(response.content);
        if (preselectTableId) {
          this.selectOrderTable(preselectTableId);
        }
      },
      error: () => this.tables.set([])
    });
  }

  private loadOrderCatalog(): void {
    if (this.catalogLoaded) {
      return;
    }
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
  // pelo cliente — ver StaffOrderService#openOrEnter): só pra saber se já existe pedido (habilita
  // o botão "Comanda") e ter o contexto pra lançar itens novos — não renderiza a lista aqui.
  selectOrderTable(tableId: string): void {
    // Reflete a mesa escolhida na URL (?mesa=) sem empilhar histórico — assim recarregar a
    // página, ou voltar da página da comanda (browser back, não só o link "Lançar mais itens"),
    // mantém a mesma mesa selecionada em vez de voltar pro select vazio.
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { mesa: tableId || null },
      queryParamsHandling: 'merge',
      replaceUrl: true
    });

    this.orderTableId.set(tableId);
    this.orderComanda.set(null);
    this.orderComandaError.set(null);
    this.orderDraftItems.set([]);
    this.isCartOpen.set(false);

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

  addDraftItem(item: MenuItemResponse): void {
    const price = this.hasActivePromotionForOrder(item) ? item.promotionalPrice! : item.price;
    this.orderDraftItems.update((current) => {
      const existing = current.find((draft) => draft.menuItemId === item.id);
      if (existing) {
        return current.map((draft) => (draft.menuItemId === item.id ? { ...draft, quantity: draft.quantity + 1 } : draft));
      }
      return [
        ...current,
        { menuItemId: item.id, name: item.name, imageUrl: item.imageUrl, unitPrice: price, quantity: 1, notes: '' }
      ];
    });
  }

  incrementDraftItem(menuItemId: string): void {
    this.orderDraftItems.update((current) =>
      current.map((draft) => (draft.menuItemId === menuItemId ? { ...draft, quantity: draft.quantity + 1 } : draft))
    );
  }

  decrementDraftItem(menuItemId: string): void {
    this.orderDraftItems.update((current) =>
      current
        .map((draft) => (draft.menuItemId === menuItemId ? { ...draft, quantity: draft.quantity - 1 } : draft))
        .filter((draft) => draft.quantity > 0)
    );
  }

  removeDraftItem(menuItemId: string): void {
    this.orderDraftItems.update((current) => current.filter((draft) => draft.menuItemId !== menuItemId));
  }

  // Observação por item do rascunho (ver OrderDraftItem#notes) — sempre visível no campo, sem
  // toggle/salvar, igual ao carrinho do cliente (ver CartComponent#updateNotes no
  // web-comanda-unica-menu): confirma ao sair do campo (evento "change" do textarea).
  updateDraftItemNotes(menuItemId: string, notes: string): void {
    this.orderDraftItems.update((current) =>
      current.map((draft) => (draft.menuItemId === menuItemId ? { ...draft, notes } : draft))
    );
  }

  openCart(): void {
    if (this.orderDraftItems().length === 0) {
      return;
    }
    this.isCartOpen.set(true);
  }

  closeCart(): void {
    if (this.isSubmittingOrder()) {
      return;
    }
    this.isCartOpen.set(false);
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
      .createOrder(tableId, {
        items: items.map((item) => ({
          menuItemId: item.menuItemId,
          quantity: item.quantity,
          notes: item.notes.trim() || undefined
        }))
      })
      .subscribe({
        next: (comanda) => {
          this.isSubmittingOrder.set(false);
          this.orderComanda.set(comanda);
          this.orderDraftItems.set([]);
          this.isCartOpen.set(false);
        },
        error: (error: HttpErrorResponse) => {
          this.isSubmittingOrder.set(false);
          this.submitOrderError.set(this.resolveErrorMessage(error));
          autoDismiss(this.submitOrderError, null);
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
    if (error.status === 422) {
      return 'Verifique os dados informados e tente novamente.';
    }
    return 'Não foi possível concluir a operação. Tente novamente em instantes.';
  }
}
