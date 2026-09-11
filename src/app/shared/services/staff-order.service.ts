import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export type StaffOrderItemStatus = 'REQUESTED' | 'PREPARING' | 'ON_THE_WAY' | 'DELIVERED' | 'CANCELLED';
export type StaffComandaStatus = 'OPEN' | 'CLOSED';

export interface StaffComandaLineItem {
  id: string;
  orderId: string;
  customerId: string;
  customerName: string;
  menuItemId?: string;
  name: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
  notes?: string;
  status: StaffOrderItemStatus;
  createdAt: string;
}

export interface StaffComandaResponse {
  id: string | null;
  status: StaffComandaStatus | null;
  items: StaffComandaLineItem[];
  totalAmount: number;
  paidAmount: number;
  remainingAmount: number;
  discountAmount: number;
  amountToPay: number;
}

export interface StaffOrderItemRequest {
  menuItemId: string;
  quantity: number;
  notes?: string;
}

export interface CreateStaffOrderRequest {
  items: StaffOrderItemRequest[];
  notes?: string;
}

export interface ApiErrorResponse {
  titulo?: string;
  mensagem?: string;
  mensagemErro?: string;
  codigoErro?: string;
}

// Fala com a api-comanda-unica-menu (não com a api-comanda-unica-admin, como os demais serviços
// deste diretório) — ver StaffOrderController lá. Reaproveita o mesmo JWT de funcionário emitido
// pelo login do painel (ver auth.interceptor.ts).
@Injectable({ providedIn: 'root' })
export class StaffOrderService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.menuApiBaseUrl;

  openOrEnter(tableId: string): Observable<StaffComandaResponse> {
    return this.http.get<StaffComandaResponse>(`${this.baseUrl}/api/v1/staff/tables/${tableId}/comanda`);
  }

  createOrder(tableId: string, payload: CreateStaffOrderRequest): Observable<StaffComandaResponse> {
    return this.http.post<StaffComandaResponse>(`${this.baseUrl}/api/v1/staff/tables/${tableId}/comanda/orders`, payload);
  }
}
