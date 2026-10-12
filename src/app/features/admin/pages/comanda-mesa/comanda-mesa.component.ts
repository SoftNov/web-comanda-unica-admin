import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, expand, reduce } from 'rxjs';
import { ConsumptionPassResponse, ConsumptionPassesService } from '../../../../shared/services/consumption-passes.service';
import { ApiErrorResponse } from '../../../../shared/services/comandas.service';
import { RestaurantTableResponse, TablesService } from '../../../../shared/services/tables.service';
import { StaffComandaLineItem, StaffComandaResponse, StaffOrderItemStatus, StaffOrderService } from '../../../../shared/services/staff-order.service';
import { autoDismiss } from '../../../../shared/utils/auto-dismiss.util';

import { formatTableLabel } from '../../../../shared/utils/table-label.util';
import { QrTargetResolverService } from '../../../../shared/services/qr-target-resolver.service';
import { QrScannerComponent } from '../../../../shared/components/qr-scanner/qr-scanner.component';
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
  imports: [QrScannerComponent],
  templateUrl: './comanda-mesa.component.html',
  styleUrl: './comanda-mesa.component.scss'
})
export class ComandaMesaComponent {
  readonly tableLabel = formatTableLabel;

  private readonly tablesService = inject(TablesService);
  private readonly staffOrderService = inject(StaffOrderService);
  private readonly consumptionPassesService = inject(ConsumptionPassesService);
  private readonly qrResolver = inject(QrTargetResolverService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  private readonly currencyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

  readonly tableId = this.route.snapshot.paramMap.get('tableId') ?? '';
  readonly table = signal<RestaurantTableResponse | null>(null);
  // Estabelecimento com cartão de consumo: a tela de lançar pedido manda o token do cartão
  // (?cartao=) e esta página mostra a comanda individual do cartão, não a compartilhada da mesa.
  // Signal (não snapshot): escolher um cartão da mesa troca o ?cartao= sem remontar a página.
  readonly passToken = signal<string | null>(this.route.snapshot.queryParamMap.get('cartao'));

  // Cartão obrigatório e página aberta pela MESA (sem ?cartao=, ex.: "Ver comanda" da home): a
  // mesa não tem comanda compartilhada — cada cliente consome no próprio cartão (ver
  // StaffOrderServiceImpl#openOrEnter na API do cardápio). Então lista os cartões em uso nesta
  // mesa para escolher qual comanda abrir.
  readonly tablePasses = signal<ConsumptionPassResponse[] | null>(null);
  readonly isLoadingPasses = signal(false);

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
      next: (response) => {
        const table = response.content.find((item) => item.id === this.tableId);
        if (table) {
          this.table.set(table);
          return;
        }
        // Mesa virtual do balcão não vem na listagem de mesas.
        this.tablesService.getCounter().subscribe({
          next: (counter) => this.table.set(counter.id === this.tableId ? counter : null),
          error: () => this.table.set(null)
        });
      },
      error: () => this.table.set(null)
    });
  }

  private loadComanda(): void {
    this.isLoading.set(true);
    this.loadError.set(null);

    const passToken = this.passToken();
    const request$ = passToken
      ? this.staffOrderService.enterWithPass(this.tableId, passToken)
      : this.staffOrderService.openOrEnter(this.tableId);
    request$.subscribe({
      next: (comanda) => {
        this.isLoading.set(false);
        this.orderComanda.set(comanda);
        if (!passToken && comanda.consumptionPassRequired) {
          this.loadTablePasses();
        }
      },
      error: (error: HttpErrorResponse) => {
        this.isLoading.set(false);
        this.loadError.set(this.resolveErrorMessage(error));
      }
    });
  }

  private loadTablePasses(): void {
    this.isLoadingPasses.set(true);
    this.fetchInUsePasses().subscribe({
      next: (passes) => {
        this.isLoadingPasses.set(false);
        const onTable = passes.filter((pass) => pass.tableId === this.tableId);
        this.tablePasses.set(onTable);
        // Um cartão só: abre direto a comanda dele, sem passo extra.
        if (onTable.length === 1) {
          this.selectPass(onTable[0]);
        }
      },
      error: () => {
        this.isLoadingPasses.set(false);
        this.tablePasses.set([]);
        this.loadError.set('Não foi possível carregar os cartões de consumo desta mesa.');
      }
    });
  }

  // GET /consumption-passes devolve no máximo 100 por página — junta as páginas de IN_USE.
  private fetchInUsePasses(): Observable<ConsumptionPassResponse[]> {
    const pageOf = (page: number) => this.consumptionPassesService.list({ status: 'IN_USE', page, size: 100 });
    return pageOf(0).pipe(
      expand((response) => (response.last || response.page >= 9 ? EMPTY : pageOf(response.page + 1))),
      reduce((all, response) => all.concat(response.content), [] as ConsumptionPassResponse[])
    );
  }

  // Ler o cartão (câmera ou digitado/leitor USB) em vez de procurar na lista.
  readonly isScanningPass = signal(false);
  readonly passInput = signal('');
  readonly isResolvingPass = signal(false);
  readonly passReadError = signal<string | null>(null);

  startPassScan(): void {
    this.passReadError.set(null);
    this.isScanningPass.set(true);
  }

  onPassScanned(value: string): void {
    this.isScanningPass.set(false);
    this.readPass(value);
  }

  submitPassInput(): void {
    if (this.passInput().trim()) {
      this.readPass(this.passInput());
    }
  }

  // Cartão desta mesa (ou livre — fica vinculado a ela, como no lançamento): abre aqui. Cartão em
  // uso em outra mesa: abre a comanda dele lá.
  private readPass(value: string): void {
    if (this.isResolvingPass()) {
      return;
    }
    this.isResolvingPass.set(true);
    this.passReadError.set(null);
    const request$ = QrTargetResolverService.isPassCode(value) || /^\s*\d+\s*$/.test(value)
      ? this.qrResolver.resolvePass(value, [])
      : this.qrResolver.resolveScan(value, []);
    request$.subscribe({
      next: (target) => {
        this.isResolvingPass.set(false);
        if (target.kind !== 'pass') {
          this.passReadError.set('Esse QR Code não é de um cartão de consumo.');
          return;
        }
        this.passInput.set('');
        const pass = target.pass;
        if (pass.status === 'IN_USE' && pass.tableId && pass.tableId !== this.tableId) {
          this.router.navigate(['/painel/comandas/lancar-pedido/comanda', pass.tableId], {
            queryParams: { cartao: pass.token }
          });
          return;
        }
        this.selectPass(pass);
      },
      error: (error: unknown) => {
        this.isResolvingPass.set(false);
        this.passReadError.set(
          error instanceof HttpErrorResponse
            ? 'Não foi possível consultar o cartão. Tente novamente.'
            : error instanceof Error ? error.message : 'Não foi possível ler o cartão.'
        );
      }
    });
  }

  readonly showPassPicker = computed(() => !this.passToken() && this.tablePasses() !== null);

  selectPass(pass: ConsumptionPassResponse): void {
    this.passToken.set(pass.token);
    this.router.navigate([], { relativeTo: this.route, queryParams: { cartao: pass.token }, replaceUrl: true });
    this.loadComanda();
  }

  // Volta à lista dos cartões em uso na mesa (só oferecido quando há mais de um).
  backToTablePasses(): void {
    this.passToken.set(null);
    this.orderComanda.set(null);
    this.router.navigate([], { relativeTo: this.route, queryParams: { cartao: null }, replaceUrl: true });
  }

  goToMenu(): void {
    this.router.navigate(['/painel/comandas/lancar-pedido'], {
      queryParams: { mesa: this.tableId, cartao: this.passToken() || null }
    });
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
