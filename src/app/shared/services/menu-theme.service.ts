import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface MenuThemeResponse {
  companyId: string;
  primaryColor: string;
  secondaryColor?: string;
  fontFamily: string;
  coverImageUrl?: string;
  updatedAt: string;
}

export interface UpdateMenuThemeRequest {
  primaryColor: string;
  secondaryColor?: string;
  fontFamily: string;
}

export interface ApiErrorResponse {
  titulo?: string;
  mensagem?: string;
  mensagemErro?: string;
  codigoErro?: string;
}

@Injectable({ providedIn: 'root' })
export class MenuThemeService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1/menu-theme`;

  get(): Observable<MenuThemeResponse> {
    return this.http.get<MenuThemeResponse>(this.baseUrl);
  }

  update(payload: UpdateMenuThemeRequest): Observable<MenuThemeResponse> {
    return this.http.put<MenuThemeResponse>(this.baseUrl, payload);
  }

  updateCover(file: File): Observable<MenuThemeResponse> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<MenuThemeResponse>(`${this.baseUrl}/cover`, formData);
  }
}
