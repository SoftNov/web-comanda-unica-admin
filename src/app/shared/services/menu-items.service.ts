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

export interface MenuItemImageResponse {
  id: string;
  imageUrl: string;
  displayOrder: number;
}

export interface MenuItemResponse {
  id: string;
  companyId: string;
  categoryId: string;
  categoryName: string;
  name: string;
  description?: string;
  internalCode?: string;
  sku?: string;
  imageUrl?: string;
  images: MenuItemImageResponse[];
  price: number;
  promotionalPrice?: number;
  promotionStart?: string;
  promotionEnd?: string;
  active: boolean;
  available: boolean;
  highlight: boolean;
  newItem: boolean;
  spicy: boolean;
  vegan: boolean;
  vegetarian: boolean;
  lactoseFree: boolean;
  glutenFree: boolean;
  alcoholic: boolean;
  calories?: number;
  weight?: number;
  kitchenSector?: string;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface MenuItemPayload {
  categoryId: string;
  name: string;
  description?: string;
  internalCode?: string;
  sku?: string;
  price: number;
  promotionalPrice?: number;
  promotionStart?: string;
  promotionEnd?: string;
  active?: boolean;
  available?: boolean;
  highlight?: boolean;
  newItem?: boolean;
  spicy?: boolean;
  vegan?: boolean;
  vegetarian?: boolean;
  lactoseFree?: boolean;
  glutenFree?: boolean;
  alcoholic?: boolean;
  calories?: number;
  weight?: number;
  kitchenSector?: string;
  displayOrder?: number;
}

export type CreateMenuItemRequest = MenuItemPayload;

export interface UpdateMenuItemRequest extends MenuItemPayload {
  active: boolean;
  available: boolean;
}

export interface UpdatePriceRequest {
  price: number;
  promotionalPrice?: number;
  promotionStart?: string;
  promotionEnd?: string;
}

export interface MenuItemListParams {
  categoryId?: string;
  active?: boolean;
  available?: boolean;
  highlight?: boolean;
  name?: string;
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
export class MenuItemsService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1/menu`;

  list(params: MenuItemListParams): Observable<PageResponse<MenuItemResponse>> {
    const httpParams: Record<string, string | number | boolean> = {
      page: params.page,
      size: params.size,
      sortBy: params.sortBy,
      sortDirection: params.sortDirection
    };
    if (params.categoryId) {
      httpParams['categoryId'] = params.categoryId;
    }
    if (params.active !== undefined) {
      httpParams['active'] = params.active;
    }
    if (params.available !== undefined) {
      httpParams['available'] = params.available;
    }
    if (params.highlight !== undefined) {
      httpParams['highlight'] = params.highlight;
    }
    if (params.name) {
      httpParams['name'] = params.name;
    }
    return this.http.get<PageResponse<MenuItemResponse>>(this.baseUrl, { params: httpParams });
  }

  get(id: string): Observable<MenuItemResponse> {
    return this.http.get<MenuItemResponse>(`${this.baseUrl}/${id}`);
  }

  create(payload: CreateMenuItemRequest): Observable<MenuItemResponse> {
    return this.http.post<MenuItemResponse>(this.baseUrl, payload);
  }

  update(id: string, payload: UpdateMenuItemRequest): Observable<MenuItemResponse> {
    return this.http.put<MenuItemResponse>(`${this.baseUrl}/${id}`, payload);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  updateStatus(id: string, active: boolean): Observable<MenuItemResponse> {
    return this.http.patch<MenuItemResponse>(`${this.baseUrl}/${id}/status`, { active });
  }

  updateAvailability(id: string, available: boolean): Observable<MenuItemResponse> {
    return this.http.patch<MenuItemResponse>(`${this.baseUrl}/${id}/availability`, { available });
  }

  updateHighlight(id: string, highlight: boolean): Observable<MenuItemResponse> {
    return this.http.patch<MenuItemResponse>(`${this.baseUrl}/${id}/highlight`, { highlight });
  }

  updatePrice(id: string, payload: UpdatePriceRequest): Observable<MenuItemResponse> {
    return this.http.patch<MenuItemResponse>(`${this.baseUrl}/${id}/price`, payload);
  }

  addImage(id: string, file: File): Observable<MenuItemResponse> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<MenuItemResponse>(`${this.baseUrl}/${id}/image`, formData);
  }

  removeImage(id: string, imageId: string): Observable<MenuItemResponse> {
    return this.http.delete<MenuItemResponse>(`${this.baseUrl}/${id}/image`, { params: { imageId } });
  }
}
