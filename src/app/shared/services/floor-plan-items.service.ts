import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export type FloorPlanItemType = 'TABLE' | 'TEXT' | 'WALL' | 'DOOR' | 'BAR' | 'KITCHEN' | 'BATHROOM' | 'IMAGE' | 'CUSTOM';

export interface FloorPlanItemResponse {
  id: string;
  floorPlanId: string;
  itemType: FloorPlanItemType;
  tableId?: string;
  tableNumber?: number;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  zIndex: number;
  color?: string;
  label?: string;
  propertiesJson?: string;
  createdAt: string;
  updatedAt: string;
}

export interface FloorPlanItemPayload {
  itemType: FloorPlanItemType;
  tableId?: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation?: number;
  zIndex?: number;
  color?: string;
  label?: string;
  propertiesJson?: string;
}

export interface FloorPlanItemSyncPayload extends FloorPlanItemPayload {
  id?: string;
}

export interface ApiErrorResponse {
  titulo?: string;
  mensagem?: string;
  mensagemErro?: string;
  codigoErro?: string;
}

@Injectable({ providedIn: 'root' })
export class FloorPlanItemsService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1/floor-plans`;

  list(floorPlanId: string): Observable<FloorPlanItemResponse[]> {
    return this.http.get<FloorPlanItemResponse[]>(`${this.baseUrl}/${floorPlanId}/items`);
  }

  create(floorPlanId: string, payload: FloorPlanItemPayload): Observable<FloorPlanItemResponse> {
    return this.http.post<FloorPlanItemResponse>(`${this.baseUrl}/${floorPlanId}/items`, payload);
  }

  update(itemId: string, payload: FloorPlanItemPayload): Observable<FloorPlanItemResponse> {
    return this.http.put<FloorPlanItemResponse>(`${this.baseUrl}/items/${itemId}`, payload);
  }

  delete(itemId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/items/${itemId}`);
  }

  syncLayout(floorPlanId: string, items: FloorPlanItemSyncPayload[]): Observable<FloorPlanItemResponse[]> {
    return this.http.put<FloorPlanItemResponse[]>(`${this.baseUrl}/${floorPlanId}/layout`, { items });
  }
}
