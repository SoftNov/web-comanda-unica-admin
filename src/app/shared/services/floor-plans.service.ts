import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface FloorPlanResponse {
  id: string;
  companyId: string;
  name: string;
  width: number;
  height: number;
  backgroundColor?: string;
  createdAt: string;
  updatedAt: string;
}

export interface FloorPlanPayload {
  name: string;
  width: number;
  height: number;
  backgroundColor?: string;
}

export type CreateFloorPlanRequest = FloorPlanPayload;
export type UpdateFloorPlanRequest = FloorPlanPayload;

export interface ApiErrorResponse {
  titulo?: string;
  mensagem?: string;
  mensagemErro?: string;
  codigoErro?: string;
}

@Injectable({ providedIn: 'root' })
export class FloorPlansService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1/floor-plans`;

  list(): Observable<FloorPlanResponse[]> {
    return this.http.get<FloorPlanResponse[]>(this.baseUrl);
  }

  get(id: string): Observable<FloorPlanResponse> {
    return this.http.get<FloorPlanResponse>(`${this.baseUrl}/${id}`);
  }

  create(payload: CreateFloorPlanRequest): Observable<FloorPlanResponse> {
    return this.http.post<FloorPlanResponse>(this.baseUrl, payload);
  }

  update(id: string, payload: UpdateFloorPlanRequest): Observable<FloorPlanResponse> {
    return this.http.put<FloorPlanResponse>(`${this.baseUrl}/${id}`, payload);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
