import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface TableSectorResponse {
  id: string;
  companyId: string;
  name: string;
  displayOrder: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTableSectorRequest {
  name: string;
  displayOrder?: number;
  active?: boolean;
}

export interface UpdateTableSectorRequest {
  name: string;
  displayOrder?: number;
  active: boolean;
}

export interface ApiErrorResponse {
  titulo?: string;
  mensagem?: string;
  mensagemErro?: string;
  codigoErro?: string;
}

@Injectable({ providedIn: 'root' })
export class TableSectorsService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1/table-sectors`;

  list(active?: boolean): Observable<TableSectorResponse[]> {
    const params: Record<string, boolean> = {};
    if (active !== undefined) {
      params['active'] = active;
    }
    return this.http.get<TableSectorResponse[]>(this.baseUrl, { params });
  }

  get(id: string): Observable<TableSectorResponse> {
    return this.http.get<TableSectorResponse>(`${this.baseUrl}/${id}`);
  }

  create(payload: CreateTableSectorRequest): Observable<TableSectorResponse> {
    return this.http.post<TableSectorResponse>(this.baseUrl, payload);
  }

  update(id: string, payload: UpdateTableSectorRequest): Observable<TableSectorResponse> {
    return this.http.put<TableSectorResponse>(`${this.baseUrl}/${id}`, payload);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
