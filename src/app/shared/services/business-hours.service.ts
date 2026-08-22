import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export type WeekDay = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

export interface TimeRange {
  // "HH:mm:ss" vindo da API (java.time.LocalTime).
  openTime: string;
  closeTime: string;
}

export interface BusinessHoursDay {
  dayOfWeek: WeekDay;
  // Vazia = dia fechado; um dia pode ter mais de uma faixa (ex: almoço e jantar, ou um
  // horário que passa da meia-noite cadastrado como duas faixas em dias diferentes).
  ranges: TimeRange[];
}

export interface BusinessHoursResponse {
  companyId: string;
  days: BusinessHoursDay[];
}

export interface UpdateBusinessHoursRequest {
  days: BusinessHoursDay[];
}

export interface ApiErrorResponse {
  titulo?: string;
  mensagem?: string;
  mensagemErro?: string;
  codigoErro?: string;
}

@Injectable({ providedIn: 'root' })
export class BusinessHoursService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1/business-hours`;

  get(): Observable<BusinessHoursResponse> {
    return this.http.get<BusinessHoursResponse>(this.baseUrl);
  }

  update(payload: UpdateBusinessHoursRequest): Observable<BusinessHoursResponse> {
    return this.http.put<BusinessHoursResponse>(this.baseUrl, payload);
  }
}
