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

export type TableStatus = 'ACTIVE' | 'INACTIVE';
export type TableOperationalStatus = 'FREE' | 'OCCUPIED' | 'RESERVED' | 'CLEANING';

export interface RestaurantTableResponse {
  id: string;
  companyId: string;
  sectorId: string;
  sectorName: string;
  number: number;
  name?: string;
  capacity: number;
  status: TableStatus;
  operationalStatus: TableOperationalStatus;
  cleaningSince?: string;
  // Horário limite da reserva ativa (quando operationalStatus === 'RESERVED'); ausente caso contrário.
  reservedUntil?: string;
  allowQr: boolean;
  // Mesa virtual do balcão (retirada no balcão com cartão de consumo) — ver getCounter.
  counter?: boolean;
  publicToken: string;
  publicUrl: string;
  qrCodeVersion: number;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface TablePayload {
  sectorId: string;
  number: number;
  name?: string;
  capacity: number;
  status: TableStatus;
  allowQr: boolean;
  notes?: string;
}

export type CreateTableRequest = TablePayload;

// Cota de mesas frente ao plano (GET /tables/quota — em cache no Redis na API). tableLimit/remaining
// nulos = sem limite.
export interface TableQuotaResponse {
  tableCount: number;
  tableLimit: number | null;
  remaining: number | null;
  limitReached: boolean;
  courtesy: boolean;
}

// Código do erro da API quando a criação passa do limite do plano.
export const TABLE_LIMIT_ERROR_CODE = 'ERR_SUBSCRIPTION_TABLE_LIMIT_REACHED';

// Várias mesas iguais de uma vez, numeradas em sequência a partir de startNumber (sem ele, a API
// continua do maior número já cadastrado).
export interface CreateTablesBatchRequest {
  sectorId: string;
  quantity: number;
  startNumber?: number;
  capacity: number;
  status: TableStatus;
  allowQr: boolean;
  notes?: string;
}
export type UpdateTableRequest = TablePayload;

export interface TableListParams {
  status?: TableStatus;
  sectorId?: string;
  search?: string;
  page: number;
  size: number;
  sortBy: string;
  sortDirection: 'ASC' | 'DESC';
}

export interface ApiErrorResponse {
  titulo?: string;
  mensagem?: string;
  mensagemErro?: string;
  codigoErro?: string;
}

@Injectable({ providedIn: 'root' })
export class TablesService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1/tables`;

  list(params: TableListParams): Observable<PageResponse<RestaurantTableResponse>> {
    const httpParams: Record<string, string | number> = {
      page: params.page,
      size: params.size,
      sortBy: params.sortBy,
      sortDirection: params.sortDirection
    };
    if (params.status) {
      httpParams['status'] = params.status;
    }
    if (params.sectorId) {
      httpParams['sectorId'] = params.sectorId;
    }
    if (params.search) {
      httpParams['search'] = params.search;
    }
    return this.http.get<PageResponse<RestaurantTableResponse>>(this.baseUrl, { params: httpParams });
  }

  // Mesa virtual do balcão do estabelecimento (criada pela API na primeira chamada): é onde fica a
  // comanda do cartão de consumo quando o cliente retira no balcão, sem ocupar mesa. Não aparece
  // em list() nem no cadastro de mesas.
  getCounter(): Observable<RestaurantTableResponse> {
    return this.http.get<RestaurantTableResponse>(`${this.baseUrl}/counter`);
  }

  get(id: string): Observable<RestaurantTableResponse> {
    return this.http.get<RestaurantTableResponse>(`${this.baseUrl}/${id}`);
  }

  create(payload: CreateTableRequest): Observable<RestaurantTableResponse> {
    return this.http.post<RestaurantTableResponse>(this.baseUrl, payload);
  }

  createBatch(payload: CreateTablesBatchRequest): Observable<RestaurantTableResponse[]> {
    return this.http.post<RestaurantTableResponse[]>(`${this.baseUrl}/batch`, payload);
  }

  update(id: string, payload: UpdateTableRequest): Observable<RestaurantTableResponse> {
    return this.http.put<RestaurantTableResponse>(`${this.baseUrl}/${id}`, payload);
  }

  disable(id: string): Observable<RestaurantTableResponse> {
    return this.http.patch<RestaurantTableResponse>(`${this.baseUrl}/${id}/disable`, {});
  }

  getQuota(): Observable<TableQuotaResponse> {
    return this.http.get<TableQuotaResponse>(`${this.baseUrl}/quota`);
  }

  // Exclui (arquiva) a mesa: some da listagem e do mapa, o número fica livre e o QR Code deixa de
  // funcionar; o histórico de pedidos/comandas é preservado. 409 com comanda aberta ou reserva ativa.
  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  enable(id: string): Observable<RestaurantTableResponse> {
    return this.http.patch<RestaurantTableResponse>(`${this.baseUrl}/${id}/enable`, {});
  }

  markCleaned(id: string): Observable<RestaurantTableResponse> {
    return this.http.patch<RestaurantTableResponse>(`${this.baseUrl}/${id}/mark-cleaned`, {});
  }

  regenerateQrCode(id: string): Observable<RestaurantTableResponse> {
    return this.http.post<RestaurantTableResponse>(`${this.baseUrl}/${id}/regenerate-qrcode`, {});
  }

  getQrCodePng(id: string): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/${id}/qrcode/png`, { responseType: 'blob' });
  }

  getQrCodePdf(id: string): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/${id}/qrcode/pdf`, { responseType: 'blob' });
  }
}
