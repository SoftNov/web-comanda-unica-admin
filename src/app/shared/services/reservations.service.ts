import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ApiErrorResponse {
  titulo?: string;
  mensagem?: string;
  mensagemErro?: string;
  codigoErro?: string;
}

export type ReservationStatus = 'ACTIVE' | 'SEATED' | 'HONORED' | 'EXPIRED' | 'RELEASED';

// HONORED = "o grupo chegou, libere a mesa"; RELEASED = "cancelar a reserva". Ambos liberam a mesa
// para pedidos — a distinção é só histórica (ver TableReservationApi no backend).
export type ReservationResolution = 'HONORED' | 'RELEASED';

export interface TableReservationResponse {
  id: string;
  tableId: string;
  tableNumber: number;
  tableName?: string;
  guestName?: string;
  guestPhone?: string;
  guestDocument?: string;
  notes?: string;
  holdUntil: string;
  status: ReservationStatus;
  createdByUserName?: string;
  resolvedByUserName?: string;
  resolvedAt?: string;
  createdAt: string;
}

export interface CreateReservationRequest {
  tableId: string;
  holdUntil: string;
  guestName?: string;
  guestPhone?: string;
  // Obrigatório: é contra este CPF que o cliente confirma a chegada pelo QR Code (ver
  // PublicMenuServiceImpl#checkInReservation na api-comanda-unica-menu).
  guestDocument: string;
  notes?: string;
}

export interface UpdateReservationRequest {
  holdUntil?: string;
  guestName?: string;
  guestPhone?: string;
  guestDocument?: string;
  notes?: string;
}

@Injectable({ providedIn: 'root' })
export class ReservationsService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1/reservations`;

  list(includeResolved = false): Observable<TableReservationResponse[]> {
    const params: Record<string, string> = {};
    if (includeResolved) {
      params['includeResolved'] = 'true';
    }
    return this.http.get<TableReservationResponse[]>(this.baseUrl, { params });
  }

  create(payload: CreateReservationRequest): Observable<TableReservationResponse> {
    return this.http.post<TableReservationResponse>(this.baseUrl, payload);
  }

  update(id: string, payload: UpdateReservationRequest): Observable<TableReservationResponse> {
    return this.http.patch<TableReservationResponse>(`${this.baseUrl}/${id}`, payload);
  }

  resolve(id: string, outcome: ReservationResolution): Observable<TableReservationResponse> {
    return this.http.post<TableReservationResponse>(`${this.baseUrl}/${id}/resolve`, { outcome });
  }
}
