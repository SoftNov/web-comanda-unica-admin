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
export type ComandaPaymentType = 'FULL' | 'PARTIAL' | 'OWN_BILL' | 'ITEMS';
// PIX_COMANDA / CARD_COMANDA = Pix / cartão de crédito pago pelo próprio cliente no cardápio (Asaas do
// estabelecimento) — a taxa por pagamento vai para a Comanda Única pelo split.
export type ComandaPaymentMethod = 'ONLINE' | 'CASH_REGISTER' | 'CASH_WAITER' | 'PIX_COMANDA' | 'CARD_COMANDA';
// Métodos aceitos para registro (ver ComandaApi#registerPayment no backend) — ONLINE só existe em
// pagamentos antigos, de quando o cardápio processava pagamentos.
export type ManualComandaPaymentMethod = Extract<ComandaPaymentMethod, 'CASH_REGISTER' | 'CASH_WAITER'>;
// Forma real do pagamento manual — espelha FiscalPaymentForm do backend; vira o tPag da nota fiscal.
export type ComandaPaymentForm = 'CASH' | 'CREDIT_CARD' | 'DEBIT_CARD' | 'PIX' | 'MEAL_VOUCHER' | 'FOOD_VOUCHER' | 'OTHER';

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
  // Forma real (dinheiro, cartão, Pix...) — só nos pagamentos manuais registrados depois dela existir.
  paymentForm?: ComandaPaymentForm | null;
  registeredByUserId?: string;
  registeredByUserName?: string;
  // O que abateu da comanda.
  amount: number;
  // Taxa fixa paga pelo cliente por cima de amount. No app (PIX_COMANDA/CARD_COMANDA) foi para a
  // Comanda Única pelo split; no caixa/garçom ficou com o estabelecimento.
  feeAmount?: number | null;
  paidAt: string;
}

export interface ComandaResponse {
  id: string;
  tableId: string;
  tableNumber: number;
  tableName?: string;
  // Nome do responsável pela reserva que originou esta comanda (check-in por CPF no QR Code) —
  // ausente quando aberta pelo fluxo normal de checkout, sem reserva envolvida.
  guestName?: string;
  // CPF/CNPJ (só dígitos) para sair na nota fiscal.
  consumerDocument?: string | null;
  // Preenchidos só na comanda individual de um Passe de Consumo (cartão com QR Code).
  consumptionPassId?: string;
  consumptionPassToken?: string;
  consumptionPassNumber?: number;
  status: ComandaStatus;
  displayStatus: ComandaDisplayStatus;
  totalOrdersAmount: number;
  totalPaidAmount: number;
  balanceAmount: number;
  // Quanto ainda falta abater da comanda (= balanceAmount).
  amountToCollect: number;
  // Taxa fixa da Comanda Única que o cliente paga por cima de cada pagamento — no caixa/garçom
  // ela fica com o estabelecimento. 0 = sem taxa.
  feePerPayment: number;
  // Soma das taxas já pagas pelos clientes nesta comanda.
  totalFeeAmount: number;
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
  paymentForm: ComandaPaymentForm;
  // Opcional — CPF ou CNPJ para sair na nota.
  consumerDocument?: string | null;
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
