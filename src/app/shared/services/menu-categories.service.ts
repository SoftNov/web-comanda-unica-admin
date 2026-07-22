import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface MenuCategoryResponse {
  id: string;
  companyId: string;
  name: string;
  description?: string;
  icon?: string;
  color?: string;
  displayOrder: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateMenuCategoryRequest {
  name: string;
  description?: string;
  icon?: string;
  color?: string;
  displayOrder?: number;
  active?: boolean;
}

export interface UpdateMenuCategoryRequest {
  name: string;
  description?: string;
  icon?: string;
  color?: string;
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
export class MenuCategoriesService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1/menu-categories`;

  list(active?: boolean): Observable<MenuCategoryResponse[]> {
    const params: Record<string, boolean> = {};
    if (active !== undefined) {
      params['active'] = active;
    }
    return this.http.get<MenuCategoryResponse[]>(this.baseUrl, { params });
  }

  get(id: string): Observable<MenuCategoryResponse> {
    return this.http.get<MenuCategoryResponse>(`${this.baseUrl}/${id}`);
  }

  create(payload: CreateMenuCategoryRequest): Observable<MenuCategoryResponse> {
    return this.http.post<MenuCategoryResponse>(this.baseUrl, payload);
  }

  update(id: string, payload: UpdateMenuCategoryRequest): Observable<MenuCategoryResponse> {
    return this.http.put<MenuCategoryResponse>(`${this.baseUrl}/${id}`, payload);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
