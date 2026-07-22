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
  allowQr: boolean;
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

  get(id: string): Observable<RestaurantTableResponse> {
    return this.http.get<RestaurantTableResponse>(`${this.baseUrl}/${id}`);
  }

  create(payload: CreateTableRequest): Observable<RestaurantTableResponse> {
    return this.http.post<RestaurantTableResponse>(this.baseUrl, payload);
  }

  update(id: string, payload: UpdateTableRequest): Observable<RestaurantTableResponse> {
    return this.http.put<RestaurantTableResponse>(`${this.baseUrl}/${id}`, payload);
  }

  disable(id: string): Observable<RestaurantTableResponse> {
    return this.http.patch<RestaurantTableResponse>(`${this.baseUrl}/${id}/disable`, {});
  }

  enable(id: string): Observable<RestaurantTableResponse> {
    return this.http.patch<RestaurantTableResponse>(`${this.baseUrl}/${id}/enable`, {});
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
