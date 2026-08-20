import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export type WeekDay = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

export interface BusinessHoursDay {
  dayOfWeek: WeekDay;
  closed: boolean;
  // "HH:mm:ss" vindo da API (java.time.LocalTime); undefined quando closed = true.
  openTime?: string;
  closeTime?: string;
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
