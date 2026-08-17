import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from '../../../environments/environment';

export type ServiceRequestType = 'CLEANING' | 'CALL_WAITER' | 'CALL_CASHIER' | 'COMPLAINT' | 'HELP';
export type ServiceRequestStatus = 'OPEN' | 'IN_PROGRESS' | 'RESOLVED';

// Solicitação de atendimento de uma mesa (limpeza, chamar garçom/caixa, reclamação, ajuda) — ver
// TableServiceRequestApi no backend. Pode ter sido aberta pelo cliente via app (fora desta API,
// requestedByCustomerName preenchido) ou manualmente pela equipe (requestedByUserName preenchido).
export interface TableServiceRequestResponse {
  id: string;
  tableId: string;
  tableNumber: number;
  tableName?: string;
  type: ServiceRequestType;
  status: ServiceRequestStatus;
  notes?: string;
  requestedByCustomerName?: string;
  requestedByUserName?: string;
  assignedToUserId?: string;
  assignedToUserName?: string;
  assignedAt?: string;
  createdAt: string;
}

export interface CreateTableServiceRequestRequest {
  tableId: string;
  type: ServiceRequestType;
  notes?: string;
}

export interface UpdateTableServiceRequestStatusRequest {
  status: ServiceRequestStatus;
}

export interface ApiErrorResponse {
  titulo?: string;
  mensagem?: string;
  mensagemErro?: string;
  codigoErro?: string;
}

@Injectable({ providedIn: 'root' })
export class ServiceRequestsService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1/service-requests`;

  create(payload: CreateTableServiceRequestRequest): Observable<TableServiceRequestResponse> {
    return this.http.post<TableServiceRequestResponse>(this.baseUrl, payload);
  }

  updateStatus(id: string, payload: UpdateTableServiceRequestStatusRequest): Observable<TableServiceRequestResponse> {
    return this.http.patch<TableServiceRequestResponse>(`${this.baseUrl}/${id}/status`, payload);
  }

  listTypes(): Observable<ServiceRequestType[]> {
    return this.http.get<ServiceRequestType[]>(`${this.baseUrl}/types`);
  }

  // Abre a conexão em tempo real das solicitações ativas. Mesmo padrão de OrderQueueService/
  // DashboardService.connectRealtime: token via query param (WebSocket nativo não permite header
  // Authorization no handshake) — ver TableServiceRequestHandshakeInterceptor no backend. Quem
  // chama é responsável por fechar a subscription (ex: ngOnDestroy).
  connectRealtime(companyId: string, token: string): WebSocketSubject<TableServiceRequestResponse[]> {
    return webSocket<TableServiceRequestResponse[]>(this.buildWsUrl(companyId, token));
  }

  private buildWsUrl(companyId: string, token: string): string {
    const base = environment.apiBaseUrl;
    const wsBase = /^https?:\/\//.test(base)
      ? base.replace(/^http/, 'ws')
      : `${window.location.protocol === 'https:' ? 'wss:' : 'ws:'}//${window.location.host}${base}`;
    return `${wsBase}/ws/service-requests/${companyId}?token=${encodeURIComponent(token)}`;
  }
}