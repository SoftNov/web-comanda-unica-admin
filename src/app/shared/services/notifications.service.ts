import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { Subscription, retry, timer } from 'rxjs';
import { AuthService } from '../../features/auth/services/auth.service';
import { OrderQueueItemResponse, OrderQueueService } from './order-queue.service';
import { NotificationSoundService } from './notification-sound.service';
import { ServiceRequestType, ServiceRequestsService, TableServiceRequestResponse } from './service-requests.service';

// Perfis com acesso à fila de pedidos / aos serviços gerais no backend (ver
// OrderQueueController/TableServiceRequestController, @RequireProfile) — o sino só abre conexão
// para quem realmente tem permissão, senão o handshake do WebSocket rejeitaria com 403. KITCHEN
// fica de fora dos serviços gerais (não lida com limpeza/pagamento/reclamação de mesa).
export const ORDER_QUEUE_NOTIFICATION_PROFILES = ['OWNER', 'ADMIN', 'MANAGER', 'CASHIER', 'WAITER', 'KITCHEN'];
export const SERVICE_REQUEST_NOTIFICATION_PROFILES = ['OWNER', 'ADMIN', 'MANAGER', 'CASHIER', 'WAITER'];

export const SERVICE_TYPE_LABELS: Record<ServiceRequestType, string> = {
  CLEANING: 'Limpeza',
  CALL_WAITER: 'Chamar garçom',
  CALL_CASHIER: 'Chamar caixa',
  COMPLAINT: 'Reclamação',
  HELP: 'Ajuda'
};

const WS_RETRY_DELAY_MS = 5000;
const TOAST_DURATION_MS = 6000;

export interface NotificationToast {
  icon: string;
  message: string;
}

// Fonte única de "o que ainda não foi atendido" — alimenta o sino de notificações no topo (ver
// AdminLayoutComponent), funciona em qualquer página (não só na home) e independe de
// PedidosComponent/ServicosComponent estarem montados: mantém conexões WebSocket próprias com a
// fila de pedidos e com os serviços gerais (concorrentes de propósito com as que esses componentes
// abrem enquanto estão em tela — o backend suporta múltiplas sessões por empresa sem problema).
@Injectable({ providedIn: 'root' })
export class NotificationsService {
  private readonly authService = inject(AuthService);
  private readonly orderQueueService = inject(OrderQueueService);
  private readonly serviceRequestsService = inject(ServiceRequestsService);
  private readonly notificationSoundService = inject(NotificationSoundService);

  // "Pendente" = ainda não chegou ao fim do fluxo: pedido ainda não entregue (REQUESTED/PREPARING/
  // ON_THE_WAY — DELIVERED sai da lista) e solicitação de serviço ainda não atendida (OPEN/
  // IN_PROGRESS — o backend já não retorna RESOLVED em listActive, então tudo que chega aqui já é
  // "pendente" por definição).
  readonly pendingOrders = signal<OrderQueueItemResponse[]>([]);
  readonly pendingServiceRequests = signal<TableServiceRequestResponse[]>([]);
  readonly pendingOrdersCount = computed(() => this.pendingOrders().length);
  readonly pendingServiceRequestsCount = computed(() => this.pendingServiceRequests().length);
  readonly totalPendingCount = computed(() => this.pendingOrdersCount() + this.pendingServiceRequestsCount());

  readonly toast = signal<NotificationToast | null>(null);

  private knownOrderIds?: Set<string>;
  private knownServiceRequestIds?: Set<string>;
  private toastTimeoutId?: ReturnType<typeof setTimeout>;

  constructor() {
    // Reabre as conexões sempre que a empresa selecionada mudar (troca de empresa, login) — o
    // effect roda de novo, onCleanup encerra as conexões da empresa anterior antes de abrir as
    // novas. Sem empresa/token, zera as listas (ex: logout).
    effect((onCleanup) => {
      const company = this.authService.selectedCompany();
      const token = this.authService.getAccessToken();

      this.knownOrderIds = undefined;
      this.knownServiceRequestIds = undefined;

      if (!company || !token) {
        this.pendingOrders.set([]);
        this.pendingServiceRequests.set([]);
        return;
      }

      const subscriptions: Subscription[] = [];

      if (ORDER_QUEUE_NOTIFICATION_PROFILES.includes(company.profileCode)) {
        subscriptions.push(this.connectOrders(company.companyId, token));
      } else {
        this.pendingOrders.set([]);
      }

      if (SERVICE_REQUEST_NOTIFICATION_PROFILES.includes(company.profileCode)) {
        subscriptions.push(this.connectServiceRequests(company.companyId, token));
      } else {
        this.pendingServiceRequests.set([]);
      }

      onCleanup(() => subscriptions.forEach((subscription) => subscription.unsubscribe()));
    });
  }

  dismissToast(): void {
    if (this.toastTimeoutId) {
      clearTimeout(this.toastTimeoutId);
    }
    this.toast.set(null);
  }

  private connectOrders(companyId: string, token: string): Subscription {
    return this.orderQueueService
      .connectRealtime(companyId, token)
      .pipe(retry({ delay: () => timer(WS_RETRY_DELAY_MS) }))
      .subscribe((items) => this.handleOrdersSnapshot(items));
  }

  private connectServiceRequests(companyId: string, token: string): Subscription {
    return this.serviceRequestsService
      .connectRealtime(companyId, token)
      .pipe(retry({ delay: () => timer(WS_RETRY_DELAY_MS) }))
      .subscribe((requests) => this.handleServiceRequestsSnapshot(requests));
  }

  // O primeiro snapshot recebido só define a base de comparação, sem disparar notificação — senão
  // todo pedido/serviço já em aberto notificaria de novo cada vez que o sino reconecta.
  private handleOrdersSnapshot(items: OrderQueueItemResponse[]): void {
    const pending = items.filter((item) => item.status !== 'DELIVERED');
    const currentIds = new Set(pending.map((item) => item.id));

    if (this.knownOrderIds) {
      const newItems = pending.filter((item) => !this.knownOrderIds!.has(item.id));
      if (newItems.length > 0) {
        this.notifyNewOrders(newItems);
      }
    }

    this.knownOrderIds = currentIds;
    this.pendingOrders.set(pending);
  }

  private handleServiceRequestsSnapshot(requests: TableServiceRequestResponse[]): void {
    const currentIds = new Set(requests.map((request) => request.id));

    if (this.knownServiceRequestIds) {
      const newRequests = requests.filter((request) => !this.knownServiceRequestIds!.has(request.id));
      if (newRequests.length > 0) {
        this.notifyNewServiceRequests(newRequests);
      }
    }

    this.knownServiceRequestIds = currentIds;
    this.pendingServiceRequests.set(requests);
  }

  private notifyNewOrders(newItems: OrderQueueItemResponse[]): void {
    const [first, ...rest] = newItems;
    this.showToast('point_of_sale', `Novo pedido — Mesa ${first.tableNumber}${rest.length > 0 ? ` (+${rest.length})` : ''}`);
    this.notificationSoundService.playChime();
  }

  private notifyNewServiceRequests(newRequests: TableServiceRequestResponse[]): void {
    const [first, ...rest] = newRequests;
    const typeLabel = SERVICE_TYPE_LABELS[first.type];
    this.showToast(
      'support_agent',
      `Nova solicitação — Mesa ${first.tableNumber} (${typeLabel})${rest.length > 0 ? ` (+${rest.length})` : ''}`
    );
    this.notificationSoundService.playChime();
  }

  private showToast(icon: string, message: string): void {
    this.toast.set({ icon, message });
    if (this.toastTimeoutId) {
      clearTimeout(this.toastTimeoutId);
    }
    this.toastTimeoutId = setTimeout(() => this.toast.set(null), TOAST_DURATION_MS);
  }
}