import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

export type ConsumptionPassStatus = 'AVAILABLE' | 'IN_USE' | 'BLOCKED' | 'EXPIRED';

export type ConsumptionPassEventType =
  | 'GENERATED'
  | 'LINKED'
  | 'LINK_REJECTED'
  | 'TABLE_CHANGED'
  | 'PAYMENT'
  | 'EXIT_ALLOWED'
  | 'EXIT_DENIED'
  | 'RELEASED'
  | 'BLOCKED'
  | 'UNBLOCKED';

export interface ConsumptionPassResponse {
  id: string;
  token: string;
  number: number;
  status: ConsumptionPassStatus;
  // Uso atual — só preenchidos enquanto IN_USE.
  currentComandaId?: string;
  tableId?: string;
  tableNumber?: number;
  tableName?: string;
  customerName?: string;
  activatedAt?: string;
  releasedAt?: string;
  blockedAt?: string;
  blockedReason?: string;
  createdAt: string;
}

export interface ConsumptionPassEventResponse {
  id: string;
  type: ConsumptionPassEventType;
  comandaId?: string;
  tableNumber?: number;
  tableName?: string;
  customerName?: string;
  userName?: string;
  totalAmount?: number;
  paidAmount?: number;
  pendingAmount?: number;
  details?: string;
  createdAt: string;
}

export interface ConsumptionPassExitResponse {
  passId: string;
  token: string;
  number: number;
  passStatus: ConsumptionPassStatus;
  // true somente com saldo zerado (ver ConsumptionPassServiceImpl#validateExit no backend).
  allowed: boolean;
  // true depois de POST /exit/release — o passe já voltou para AVAILABLE.
  released: boolean;
  comandaId?: string;
  comandaStatus?: 'OPEN' | 'CLOSED';
  tableNumber?: number;
  tableName?: string;
  customerName?: string;
  totalAmount?: number;
  paidAmount?: number;
  pendingAmount?: number;
  activatedAt?: string;
  releasedAt?: string;
}

export interface ConsumptionPassSettingsResponse {
  required: boolean;
  totalCount: number;
  availableCount: number;
  inUseCount: number;
  blockedCount: number;
}

export interface ConsumptionPassPage {
  content: ConsumptionPassResponse[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}

export interface ConsumptionPassListParams {
  status?: ConsumptionPassStatus;
  // Parte do código (token) ou número exato do cartão.
  search?: string;
  page: number;
  size: number;
}

@Injectable({ providedIn: 'root' })
export class ConsumptionPassesService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1/consumption-passes`;

  // O estabelecimento selecionado usa o cartão de consumo? Opcional por estabelecimento — desligado
  // (padrão), o sistema funciona só com a comanda compartilhada da mesa e o menu lateral esconde o
  // "Controle de Saída" (ver AdminLayoutComponent). Atualizado por refreshEnabled/updateSettings.
  readonly enabled = signal(false);

  refreshEnabled(): void {
    this.getSettings().subscribe({
      next: (settings) => this.enabled.set(settings.required),
      // KITCHEN não tem acesso à rota (403) — para esse perfil o item nem aparece.
      error: () => this.enabled.set(false)
    });
  }

  list(params: ConsumptionPassListParams): Observable<ConsumptionPassPage> {
    const httpParams: Record<string, string | number> = { page: params.page, size: params.size };
    if (params.status) {
      httpParams['status'] = params.status;
    }
    if (params.search) {
      httpParams['search'] = params.search;
    }
    return this.http.get<ConsumptionPassPage>(this.baseUrl, { params: httpParams });
  }

  generate(quantity: number): Observable<ConsumptionPassResponse[]> {
    return this.http.post<ConsumptionPassResponse[]>(this.baseUrl, { quantity });
  }

  block(id: string, reason?: string): Observable<ConsumptionPassResponse> {
    return this.http.patch<ConsumptionPassResponse>(`${this.baseUrl}/${id}/block`, { reason: reason || undefined });
  }

  unblock(id: string): Observable<ConsumptionPassResponse> {
    return this.http.patch<ConsumptionPassResponse>(`${this.baseUrl}/${id}/unblock`, {});
  }

  events(id: string): Observable<ConsumptionPassEventResponse[]> {
    return this.http.get<ConsumptionPassEventResponse[]>(`${this.baseUrl}/${id}/events`);
  }

  getQrCodePng(id: string): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/${id}/qrcode/png`, { responseType: 'blob' });
  }

  printPdf(ids: string[]): Observable<Blob> {
    return this.http.post(`${this.baseUrl}/print`, { ids }, { responseType: 'blob' });
  }

  // PDF com TODOS os cartões da empresa (qualquer status, até 5.000) — download direto.
  printAllPdf(): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/print/all`, { responseType: 'blob' });
  }

  getSettings(): Observable<ConsumptionPassSettingsResponse> {
    return this.http.get<ConsumptionPassSettingsResponse>(`${this.baseUrl}/settings`);
  }

  // required=true: o estabelecimento usa o cartão (e ele passa a ser obrigatório para pedir pelo
  // cardápio); false: não usa. Desativar com cartões em uso é recusado pelo backend (409).
  updateSettings(required: boolean): Observable<ConsumptionPassSettingsResponse> {
    return this.http
      .put<ConsumptionPassSettingsResponse>(`${this.baseUrl}/settings`, { required })
      .pipe(tap((settings) => this.enabled.set(settings.required)));
  }

  // Token no corpo (não na URL) — ver ConsumptionPassTokenRequest no backend.
  validateExit(token: string): Observable<ConsumptionPassExitResponse> {
    return this.http.post<ConsumptionPassExitResponse>(`${this.baseUrl}/exit/validate`, { token });
  }

  release(token: string): Observable<ConsumptionPassExitResponse> {
    return this.http.post<ConsumptionPassExitResponse>(`${this.baseUrl}/exit/release`, { token });
  }
}
