import { HttpClient, HttpHeaders } from '@angular/common/http';
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
export type ComandaChargeMethod = 'CREDIT_CARD' | 'PIX';
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
  // Taxa da Comanda Única gerada por este pagamento fora da Stripe — nulo para pagamentos online
  // (a taxa já sai direto da cobrança Stripe, ver ComandaChargeFeeResponse.platformFeeAmount).
  pendingFeeAmount?: number;
}

// PAID/PARTIALLY_REFUNDED/REFUNDED — derivado pelo backend (ver PaymentChargeDisplayStatus),
// nunca o status bruto do PaymentIntent.
export type ComandaChargeDisplayStatus = 'PAID' | 'PARTIALLY_REFUNDED' | 'REFUNDED';
export type RefundReason = 'CUSTOMER_REQUEST' | 'ORDER_CANCELLED' | 'DUPLICATE_CHARGE' | 'OPERATIONAL_ERROR' | 'OTHER';
export type RefundStatus = 'PROCESSING' | 'SUCCEEDED' | 'FAILED' | 'CANCELED';

export interface PaymentRefundHistoryResponse {
  id: string;
  amount: number;
  reason: RefundReason;
  description?: string;
  status: RefundStatus;
  requestedByUserId?: string;
  requestedByUserName?: string;
  stripeRefundId?: string;
  failureReason?: string;
  createdAt: string;
  completedAt?: string;
}

export interface ComandaChargeFeeResponse {
  id: string;
  customerName?: string;
  method: ComandaChargeMethod;
  type: ComandaPaymentType;
  amount: number;
  // Nulos enquanto o Stripe não confirmou a repartição (webhook), ou em cobranças antigas.
  stripeFeeAmount?: number;
  platformFeeAmount?: number;
  // Parcela de platformFeeAmount que é taxa PENDENTE de pagamentos manuais anteriores, liquidada
  // junto nesta cobrança — nulo/zero quando esta cobrança não reservou nenhuma taxa pendente.
  pendingFeeAmountIncluded?: number;
  netAmount?: number;
  paidAt: string;
  stripePaymentIntentId?: string;
  stripeChargeId?: string;
  status: ComandaChargeDisplayStatus;
  refundedAmount: number;
  availableAmount: number;
  refundable: boolean;
  refunds: PaymentRefundHistoryResponse[];
}

export interface ComandaFeesResponse {
  grossOnlineAmount: number;
  stripeFeeAmount: number;
  platformFeeAmount: number;
  netToEstablishmentAmount: number;
  hasPendingBreakdown: boolean;
  // Soma das taxas de pagamento manual (dinheiro) ainda não liquidadas — pode existir mesmo sem
  // nenhuma cobrança online (comanda paga só em dinheiro).
  pendingFeeAmount: number;
  charges: ComandaChargeFeeResponse[];
}

export interface ComandaResponse {
  id: string;
  tableId: string;
  tableNumber: number;
  tableName?: string;
  // Nome do responsável pela reserva que originou esta comanda (check-in por CPF no QR Code) —
  // ausente quando aberta pelo fluxo normal de checkout, sem reserva envolvida.
  guestName?: string;
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
  // Repartição das taxas dos pagamentos online (cartão/Pix) — ausente quando não houve nenhum.
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

export interface RefundPaymentRequest {
  amount: number;
  reason: RefundReason;
  description?: string;
}

export interface RefundPaymentResponse {
  paymentId: string;
  refundId: string;
  stripeRefundId?: string;
  amount: number;
  status: RefundStatus;
  createdAt: string;
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
  private readonly paymentsBaseUrl = `${environment.apiBaseUrl}/api/v1/payments`;

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

  // idempotencyKey: gerado uma vez ao abrir o modal de estorno e reaproveitado em qualquer reenvio
  // (timeout, duplo clique) — ver PaymentApi no backend. Sem isso, um reenvio criaria um segundo
  // Refund na Stripe.
  refundPayment(paymentId: string, payload: RefundPaymentRequest, idempotencyKey: string): Observable<RefundPaymentResponse> {
    return this.http.post<RefundPaymentResponse>(
      `${this.paymentsBaseUrl}/${paymentId}/refund`,
      payload,
      { headers: new HttpHeaders({ 'Idempotency-Key': idempotencyKey }) }
    );
  }
}
