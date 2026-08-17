import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from '../../../environments/environment';

export type OrderQueueItemStatus = 'REQUESTED' | 'PREPARING' | 'ON_THE_WAY' | 'DELIVERED' | 'CANCELLED';
export type KitchenSector = 'COZINHA' | 'BAR' | 'CONFEITARIA' | 'CHAPA' | 'COPA' | 'SOBREMESAS';

// Unidade de fila é o ITEM do pedido, não o pedido inteiro: cada item pertence a um setor de
// preparo (kitchenSector) e avança pela fila de forma independente dos demais itens do mesmo
// pedido (ex: uma coca do setor BAR pode ser entregue antes de uma porção do setor COZINHA ficar
// pronta) — ver OrderQueueApi no backend.
export interface OrderQueueItemResponse {
  id: string;
  orderId: string;
  tableId: string;
  tableNumber: number;
  tableName?: string;
  comandaId?: string;
  customerName: string;
  kitchenSector?: KitchenSector;
  itemName: string;
  quantity: number;
  status: OrderQueueItemStatus;
  notes?: string;
  createdAt: string;
  pickedUpByUserId?: string;
  pickedUpByUserName?: string;
  pickedUpAt?: string;
  // Data/hora da última mudança de status do item — como DELIVERED é terminal, equivale ao
  // momento da entrega para itens já entregues (ver PedidosComponent.itemsFor).
  updatedAt: string;
}

export interface OrderQueueListParams {
  status?: OrderQueueItemStatus;
  sector?: KitchenSector;
}

export interface UpdateOrderQueueItemStatusRequest {
  status: OrderQueueItemStatus;
}

export interface ApiErrorResponse {
  titulo?: string;
  mensagem?: string;
  mensagemErro?: string;
  codigoErro?: string;
}

@Injectable({ providedIn: 'root' })
export class OrderQueueService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1/order-queue`;

  listQueue(params: OrderQueueListParams = {}): Observable<OrderQueueItemResponse[]> {
    const httpParams: Record<string, string> = {};
    if (params.status) {
      httpParams['status'] = params.status;
    }
    if (params.sector) {
      httpParams['sector'] = params.sector;
    }
    return this.http.get<OrderQueueItemResponse[]>(this.baseUrl, { params: httpParams });
  }

  updateStatus(itemId: string, payload: UpdateOrderQueueItemStatusRequest): Observable<OrderQueueItemResponse> {
    return this.http.patch<OrderQueueItemResponse>(`${this.baseUrl}/${itemId}/status`, payload);
  }

  listSectors(): Observable<KitchenSector[]> {
    return this.http.get<KitchenSector[]>(`${this.baseUrl}/sectors`);
  }

  // Abre a conexão em tempo real da fila de pedidos. O token vai por query param pelo mesmo motivo
  // do dashboard (ver DashboardService.connectRealtime): o WebSocket nativo do browser não permite
  // header Authorization no handshake — ver OrderQueueHandshakeInterceptor no backend, que valida o
  // mesmo token e o acesso à empresa/perfil. sector é opcional: sem ele, a conexão recebe a fila de
  // todos os setores; quem chama é responsável por fechar a subscription (ex: ngOnDestroy).
  connectRealtime(companyId: string, token: string, sector?: KitchenSector): WebSocketSubject<OrderQueueItemResponse[]> {
    return webSocket<OrderQueueItemResponse[]>(this.buildWsUrl(companyId, token, sector));
  }

  private buildWsUrl(companyId: string, token: string, sector?: KitchenSector): string {
    const base = environment.apiBaseUrl;
    const wsBase = /^https?:\/\//.test(base)
      ? base.replace(/^http/, 'ws')
      : `${window.location.protocol === 'https:' ? 'wss:' : 'ws:'}//${window.location.host}${base}`;
    const sectorParam = sector ? `&sector=${encodeURIComponent(sector)}` : '';
    return `${wsBase}/ws/order-queue/${companyId}?token=${encodeURIComponent(token)}${sectorParam}`;
  }
}
