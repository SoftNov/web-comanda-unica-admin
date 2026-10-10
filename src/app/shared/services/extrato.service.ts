import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

// Onde o pagamento foi recebido — espelha PaymentMethod do backend. ONLINE só aparece em
// pagamentos antigos, de quando o cardápio processava pagamentos.
export type ExtratoMetodo = 'CASH_REGISTER' | 'CASH_WAITER' | 'ONLINE';

// Situação da taxa da Comanda Única sobre o pagamento — espelha PendingPlatformFeeStatus.
export type ExtratoStatusTaxa = 'PENDING' | 'PROCESSING' | 'SETTLED' | 'FAILED' | 'CANCELED';

export interface ExtratoResumo {
  totalRecebido: number;
  quantidadePagamentos: number;
  recebidoCaixa: number;
  recebidoGarcom: number;
  recebidoOnline: number;
  taxasComandaUnica: number;
  liquido: number;
  // Saldo ATUAL de taxas ainda não pagas (independe do período).
  taxasPendentes: number;
}

export interface ExtratoTransacao {
  id: string;
  data: string;
  comandaId: string;
  mesaNumero: number | null;
  mesaNome: string | null;
  cliente: string | null;
  metodo: ExtratoMetodo;
  tipo: 'FULL' | 'PARTIAL' | 'OWN_BILL' | null;
  valor: number;
  taxaComandaUnica: number | null;
  statusTaxa: ExtratoStatusTaxa | null;
  liquido: number;
  registradoPor: string | null;
}

export interface ExtratoPage {
  content: ExtratoTransacao[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}

export interface ExtratoResponse {
  resumo: ExtratoResumo;
  transacoes: ExtratoPage;
}

export interface ExtratoFiltros {
  startDate?: string;
  endDate?: string;
  method?: ExtratoMetodo | null;
  page?: number;
  size?: number;
}

// Extrato financeiro do estabelecimento a partir da base da Comanda Única (ver
// GET /api/v1/companies/{companyId}/extrato no backend): pagamentos registrados nas comandas e a
// taxa da plataforma sobre cada um.
@Injectable({ providedIn: 'root' })
export class ExtratoService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1/companies`;

  getExtrato(companyId: string, filtros: ExtratoFiltros = {}): Observable<ExtratoResponse> {
    return this.http.get<ExtratoResponse>(`${this.baseUrl}/${companyId}/extrato`, { params: this.toHttpParams(filtros) });
  }

  // Mesmos filtros do extrato, sem paginação — CSV gerado na hora pelo backend.
  exportCsv(companyId: string, filtros: Omit<ExtratoFiltros, 'page' | 'size'> = {}): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/${companyId}/extrato/export`, {
      params: this.toHttpParams(filtros),
      responseType: 'blob'
    });
  }

  private toHttpParams(filtros: ExtratoFiltros): Record<string, string> {
    const params: Record<string, string> = {};
    if (filtros.startDate) params['startDate'] = filtros.startDate;
    if (filtros.endDate) params['endDate'] = filtros.endDate;
    if (filtros.method) params['method'] = filtros.method;
    if (filtros.page != null) params['page'] = String(filtros.page);
    if (filtros.size != null) params['size'] = String(filtros.size);
    return params;
  }
}
