import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, computed, inject, signal } from '@angular/core';
import { Subscription, retry, timer } from 'rxjs';
import {
  ApiErrorResponse,
  KitchenSector,
  OrderQueueItemResponse,
  OrderQueueItemStatus,
  OrderQueueService
} from '../../../../shared/services/order-queue.service';
import { autoDismiss } from '../../../../shared/utils/auto-dismiss.util';
import { AuthService } from '../../../auth/services/auth.service';

const WS_RETRY_DELAY_MS = 5000;
const WS_SILENT_RETRIES = 3;

// Perfis que podem movimentar a fila (pegar/preparar/entregar/cancelar) — mesma regra de
// @RequireProfile em OrderQueueController#updateStatus no backend. CASHIER só visualiza.
const QUEUE_MANAGER_PROFILES = ['OWNER', 'ADMIN', 'MANAGER', 'WAITER', 'KITCHEN'];

// Colunas fixas do kanban, sempre nesta ordem — CANCELLED não vira coluna: um item cancelado
// simplesmente some do board (ver applyUpdatedItem).
const BOARD_COLUMNS: OrderQueueItemStatus[] = ['REQUESTED', 'PREPARING', 'ON_THE_WAY', 'DELIVERED'];

const SECTOR_LABELS: Record<KitchenSector, string> = {
  COZINHA: 'Cozinha',
  BAR: 'Bar',
  CONFEITARIA: 'Confeitaria',
  CHAPA: 'Chapa',
  COPA: 'Copa',
  SOBREMESAS: 'Sobremesas'
};

const STATUS_LABELS: Record<OrderQueueItemStatus, string> = {
  REQUESTED: 'Fila',
  PREPARING: 'Em preparo',
  ON_THE_WAY: 'Finalizados',
  DELIVERED: 'Entregue',
  CANCELLED: 'Cancelado'
};

// Próximo status ao avançar o item na fila (botão principal de cada card) — undefined nos status
// terminais, onde não há mais avanço possível.
const NEXT_STATUS: Partial<Record<OrderQueueItemStatus, OrderQueueItemStatus>> = {
  REQUESTED: 'PREPARING',
  PREPARING: 'ON_THE_WAY',
  ON_THE_WAY: 'DELIVERED'
};

const NEXT_ACTION_LABEL: Partial<Record<OrderQueueItemStatus, string>> = {
  REQUESTED: 'Pegar item',
  PREPARING: 'Marcar como finalizado',
  ON_THE_WAY: 'Marcar como entregue'
};

// Status a partir dos quais ainda é possível cancelar — mesma regra de ALLOWED_TRANSITIONS no
// OrderQueueServiceImpl (backend).
const CANCELLABLE_STATUSES: OrderQueueItemStatus[] = ['REQUESTED', 'PREPARING', 'ON_THE_WAY'];

@Component({
  selector: 'app-admin-pedidos',
  standalone: true,
  imports: [],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.scss'
})
export class PedidosComponent implements OnDestroy {
  private readonly orderQueueService = inject(OrderQueueService);
  private readonly authService = inject(AuthService);

  private readonly dateTimeFormatter = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
  private readonly timeFormatter = new Intl.DateTimeFormat('pt-BR', { timeStyle: 'short' });

  readonly selectedCompany = this.authService.selectedCompany;

  readonly canManageQueue = computed(() => {
    const profileCode = this.selectedCompany()?.profileCode;
    return !!profileCode && QUEUE_MANAGER_PROFILES.includes(profileCode);
  });

  readonly items = signal<OrderQueueItemResponse[]>([]);
  readonly isLoading = signal(true);
  readonly listError = signal<string | null>(null);

  readonly sectorFilter = signal<KitchenSector | ''>('');
  readonly sectors = signal<KitchenSector[]>([]);

  readonly columns = BOARD_COLUMNS;

  readonly itemsByStatus = computed<Map<OrderQueueItemStatus, OrderQueueItemResponse[]>>(() => {
    const grouped = new Map<OrderQueueItemStatus, OrderQueueItemResponse[]>();
    for (const item of this.items()) {
      const bucket = grouped.get(item.status) ?? [];
      bucket.push(item);
      grouped.set(item.status, bucket);
    }
    return grouped;
  });

  readonly movingItemId = signal<string | null>(null);
  readonly actionError = signal<string | null>(null);

  readonly itemToCancel = signal<OrderQueueItemResponse | null>(null);
  readonly isCancelling = signal(false);
  readonly cancelError = signal<string | null>(null);

  private queueSubscription?: Subscription;

  constructor() {
    this.loadSectors();
    this.connectRealtimeQueue();
  }

  ngOnDestroy(): void {
    this.queueSubscription?.unsubscribe();
  }

  // --- Apresentação -------------------------------------------------------------
  statusLabel(status: OrderQueueItemStatus): string {
    return STATUS_LABELS[status];
  }

  sectorLabel(sector: KitchenSector): string {
    return SECTOR_LABELS[sector];
  }

  nextActionLabel(status: OrderQueueItemStatus): string | undefined {
    return NEXT_ACTION_LABEL[status];
  }

  canCancel(item: OrderQueueItemResponse): boolean {
    return this.canManageQueue() && CANCELLABLE_STATUSES.includes(item.status);
  }

  canAdvance(item: OrderQueueItemResponse): boolean {
    return this.canManageQueue() && !!NEXT_STATUS[item.status];
  }

  formatDateTime(value: string | undefined | null): string {
    return value ? this.dateTimeFormatter.format(new Date(value)) : '—';
  }

  formatTime(value: string | undefined | null): string {
    return value ? this.timeFormatter.format(new Date(value)) : '—';
  }

  // Colunas em fila (REQUESTED/PREPARING/ON_THE_WAY) mantêm a ordem FIFO que já vem do backend
  // (createdAt ascendente — ver OrderQueueItemRepository#findQueue), certo para "quem chegou
  // primeiro" numa fila operacional. A coluna Entregue é diferente: o que importa lá é o que
  // acabou de sair, não o que foi pedido primeiro — por isso ordena por updatedAt decrescente
  // (DELIVERED é status terminal, então updatedAt é o momento da entrega).
  itemsFor(status: OrderQueueItemStatus): OrderQueueItemResponse[] {
    const bucket = this.itemsByStatus().get(status) ?? [];
    if (status !== 'DELIVERED') {
      return bucket;
    }
    return [...bucket].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  }

  // --- Listagem -------------------------------------------------------------------
  loadSectors(): void {
    this.orderQueueService.listSectors().subscribe({
      next: (sectors) => this.sectors.set(sectors),
      error: () => this.sectors.set([])
    });
  }

  // A fila chega via WebSocket (ver connectRealtimeQueue) — ao conectar, o backend já envia o
  // estado atual (ver OrderQueueWebSocketHandler#afterConnectionEstablished), e depois a cada ~4s
  // (ver OrderQueueBroadcastScheduler), então não existe mais um fetch REST único aqui.
  refresh(): void {
    this.connectRealtimeQueue();
  }

  setSectorFilter(value: string): void {
    this.sectorFilter.set(value as KitchenSector | '');
    // O filtro de setor viaja no handshake do WebSocket (query param "sector"), não como parâmetro
    // de uma chamada REST — trocar o setor precisa reabrir a conexão.
    this.connectRealtimeQueue();
  }

  private connectRealtimeQueue(): void {
    const companyId = this.selectedCompany()?.companyId;
    const token = this.authService.getAccessToken();
    if (!companyId || !token) {
      return;
    }

    this.queueSubscription?.unsubscribe();
    this.isLoading.set(true);
    this.listError.set(null);

    // Mesma estratégia de reconexão do dashboard (ver DashboardComponent.connectRealtimeSummary):
    // o WebSocket se reconecta sozinho com um pequeno atraso; só expõe erro na tela depois de
    // algumas tentativas seguidas sem sucesso, resetando a contagem após reconectar.
    this.queueSubscription = this.orderQueueService
      .connectRealtime(companyId, token, this.sectorFilter() || undefined)
      .pipe(
        retry({
          delay: (_, retryCount) => {
            if (retryCount >= WS_SILENT_RETRIES) {
              this.isLoading.set(false);
              this.listError.set('Não foi possível conectar à atualização em tempo real da fila de pedidos.');
            }
            return timer(WS_RETRY_DELAY_MS);
          },
          resetOnSuccess: true
        })
      )
      .subscribe({
        next: (response) => {
          this.items.set(response);
          this.isLoading.set(false);
          this.listError.set(null);
        },
        error: () => {
          this.isLoading.set(false);
          this.listError.set('Não foi possível conectar à atualização em tempo real da fila de pedidos.');
        }
      });
  }

  // --- Movimentação de status -----------------------------------------------------
  advance(item: OrderQueueItemResponse): void {
    const next = NEXT_STATUS[item.status];
    if (!next || this.movingItemId()) {
      return;
    }
    this.moveStatus(item, next);
  }

  requestCancel(item: OrderQueueItemResponse): void {
    this.cancelError.set(null);
    this.itemToCancel.set(item);
  }

  closeCancelModal(): void {
    this.itemToCancel.set(null);
  }

  confirmCancel(): void {
    const item = this.itemToCancel();
    if (!item) {
      return;
    }

    this.isCancelling.set(true);
    this.cancelError.set(null);

    this.orderQueueService.updateStatus(item.id, { status: 'CANCELLED' }).subscribe({
      next: (updated) => {
        this.isCancelling.set(false);
        this.itemToCancel.set(null);
        this.applyUpdatedItem(item, updated);
      },
      error: (error: HttpErrorResponse) => {
        this.isCancelling.set(false);
        this.cancelError.set(this.resolveErrorMessage(error));
        autoDismiss(this.cancelError, null);
      }
    });
  }

  private moveStatus(item: OrderQueueItemResponse, status: OrderQueueItemStatus): void {
    this.movingItemId.set(item.id);
    this.actionError.set(null);

    this.orderQueueService.updateStatus(item.id, { status }).subscribe({
      next: (updated) => {
        this.movingItemId.set(null);
        this.applyUpdatedItem(item, updated);
      },
      error: (error: HttpErrorResponse) => {
        this.movingItemId.set(null);
        this.actionError.set(this.resolveErrorMessage(error));
        autoDismiss(this.actionError, null);
      }
    });
  }

  // Todas as colunas do board (REQUESTED/PREPARING/ON_THE_WAY/DELIVERED) ficam sempre visíveis —
  // só CANCELLED não tem coluna, então um item cancelado some da lista; os demais são só movidos
  // para a coluna do novo status, sem precisar recarregar a fila inteira a cada ação.
  private applyUpdatedItem(original: OrderQueueItemResponse, updated: OrderQueueItemResponse): void {
    this.items.update((list) => {
      if (updated.status === 'CANCELLED') {
        return list.filter((current) => current.id !== original.id);
      }
      return list.map((current) => (current.id === original.id ? updated : current));
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
      return 'Item de pedido não encontrado.';
    }
    if (error.status === 403) {
      return 'Você não tem permissão para realizar esta ação.';
    }
    if (error.status === 422) {
      return 'Não é possível mover o item para este status a partir do status atual.';
    }
    return 'Não foi possível concluir a operação. Tente novamente em instantes.';
  }
}
