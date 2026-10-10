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
// Métodos aceitos para registro (ver ComandaApi#registerPayment no backend) — ONLINE só existe em
// pagamentos antigos, de quando o cardápio processava pagamentos.
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
  // Parcela de amount que é o valor base (sem a taxa da plataforma embutida) — só para auditoria.
  baseAmount?: number;
  paidAt: string;
  // Taxa da Comanda Única gerada por este pagamento (cobrada na cobrança semanal) — nulo quando
  // não gerou taxa.
  pendingFeeAmount?: number;
}

// Taxas da Comanda Única sobre os pagamentos da comanda (espelho de ComandaFeesResponse).
export interface ComandaFeesResponse {
  platformFeeAmount: number;
  // Parte ainda não liquidada — entra na próxima cobrança semanal no cartão do estabelecimento.
  pendingFeeAmount: number;
}

export interface ComandaResponse {
  id: string;
  tableId: string;
  tableNumber: number;
  tableName?: string;
  // Nome do responsável pela reserva que originou esta comanda (check-in por CPF no QR Code) —
  // ausente quando aberta pelo fluxo normal de checkout, sem reserva envolvida.
  guestName?: string;
  // Preenchidos só na comanda individual de um Passe de Consumo (cartão com QR Code).
  consumptionPassId?: string;
  consumptionPassToken?: string;
  consumptionPassNumber?: number;
  status: ComandaStatus;
  displayStatus: ComandaDisplayStatus;
  totalOrdersAmount: number;
  totalPaidAmount: number;
  balanceAmount: number;
  // Quanto a equipe deve realmente pedir ao cliente para fechar a comanda (pagamento manual em
  // dinheiro) — igual a balanceAmount na maioria dos casos, com desconto quando a taxa da
  // plataforma embutida no preço dos itens ultrapassa o valor padronizado da faixa.
  amountToCollect: number;
  discountAmount: number;
  openedAt: string;
  closedAt?: string;
  closedByUserId?: string;
  closedByUserName?: string;
  orders: ComandaOrderResponse[];
  payments: ComandaPaymentResponse[];
  // Taxas da Comanda Única sobre os pagamentos — ausente quando nenhum pagamento gerou taxa.
  fees?: ComandaFeesResponse;
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

  // Consulta de uma comanda isolada — usada, por exemplo, quando o extrato financeiro abre a
  // comanda vinculada a um pagamento (deep link /painel/comandas?comanda=<id>).
  getById(id: string): Observable<ComandaResponse> {
    return this.http.get<ComandaResponse>(`${this.baseUrl}/${id}`);
  }

  updateStatus(id: string, payload: UpdateComandaStatusRequest): Observable<ComandaResponse> {
    return this.http.patch<ComandaResponse>(`${this.baseUrl}/${id}/status`, payload);
  }

  registerPayment(id: string, payload: RegisterComandaPaymentRequest): Observable<ComandaResponse> {
    return this.http.post<ComandaResponse>(`${this.baseUrl}/${id}/payments`, payload);
  }

}
