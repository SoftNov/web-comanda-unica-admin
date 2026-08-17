import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface PageResponse<T> {
  content: T[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}

export type ComandaStatus = 'OPEN' | 'CLOSED';
export type ComandaDisplayStatus = 'OPEN' | 'OPEN_PARTIAL' | 'CLOSED';
export type ComandaOrderStatus = 'RECEIVED' | 'IN_PREPARATION' | 'READY' | 'DELIVERED' | 'CLOSED' | 'CANCELLED';
export type ComandaPaymentType = 'FULL' | 'PARTIAL' | 'OWN_BILL';
export type ComandaPaymentMethod = 'ONLINE' | 'CASH_REGISTER' | 'CASH_WAITER';
// Métodos aceitos para registro manual (ver ComandaApi#registerPayment no backend) — ONLINE é
// exclusivo do fluxo do app do cliente, não pode ser selecionado pela equipe.
export type ManualComandaPaymentMethod = Extract<ComandaPaymentMethod, 'CASH_REGISTER' | 'CASH_WAITER'>;

export interface ComandaOrderItemResponse {
  itemName: string;
  quantity: number;
}

export interface ComandaOrderResponse {
  id: string;
  customerName: string;
  status: ComandaOrderStatus;
  totalAmount: number;
  createdAt: string;
  items: ComandaOrderItemResponse[];
}

export interface ComandaPaymentResponse {
  id: string;
  customerName?: string;
  type: ComandaPaymentType;
  method: ComandaPaymentMethod;
  registeredByUserId?: string;
  registeredByUserName?: string;
  amount: number;
  paidAt: string;
}

export interface ComandaResponse {
  id: string;
  tableId: string;
  tableNumber: number;
  tableName?: string;
  status: ComandaStatus;
  displayStatus: ComandaDisplayStatus;
  totalOrdersAmount: number;
  totalPaidAmount: number;
  balanceAmount: number;
  openedAt: string;
  closedAt?: string;
  closedByUserId?: string;
  closedByUserName?: string;
  orders: ComandaOrderResponse[];
  payments: ComandaPaymentResponse[];
}

export interface ComandaListParams {
  status?: ComandaStatus;
  tableId?: string;
  page: number;
  size: number;
  sortBy: string;
  sortDirection: 'ASC' | 'DESC';
}

export interface UpdateComandaStatusRequest {
  status: ComandaStatus;
}

export interface RegisterComandaPaymentRequest {
  amount: number;
  method: ManualComandaPaymentMethod;
}

export interface ApiErrorResponse {
  titulo?: string;
  mensagem?: string;
  mensagemErro?: string;
  codigoErro?: string;
}

@Injectable({ providedIn: 'root' })
export class ComandasService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1/comandas`;

  list(params: ComandaListParams): Observable<PageResponse<ComandaResponse>> {
    const httpParams: Record<string, string | number> = {
      page: params.page,
      size: params.size,
      sortBy: params.sortBy,
      sortDirection: params.sortDirection
    };
    if (params.status) {
      httpParams['status'] = params.status;
    }
    if (params.tableId) {
      httpParams['tableId'] = params.tableId;
    }
    return this.http.get<PageResponse<ComandaResponse>>(this.baseUrl, { params: httpParams });
  }

  updateStatus(id: string, payload: UpdateComandaStatusRequest): Observable<ComandaResponse> {
    return this.http.patch<ComandaResponse>(`${this.baseUrl}/${id}/status`, payload);
  }

  registerPayment(id: string, payload: RegisterComandaPaymentRequest): Observable<ComandaResponse> {
    return this.http.post<ComandaResponse>(`${this.baseUrl}/${id}/payments`, payload);
  }
}
