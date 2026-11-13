import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

// Onde o pagamento foi recebido — espelha PaymentMethod do backend. ONLINE só aparece em
// pagamentos antigos, de quando o cardápio processava pagamentos; PIX_COMANDA é o Pix pago pelo
// cliente no cardápio (a taxa por pagamento foi para a Comanda Única pelo split).
export type ExtratoMetodo = 'CASH_REGISTER' | 'CASH_WAITER' | 'ONLINE' | 'PIX_COMANDA' | 'CARD_COMANDA';

export interface ExtratoResumo {
  totalRecebido: number;
  quantidadePagamentos: number;
  recebidoCaixa: number;
  recebidoGarcom: number;
  recebidoOnline: number;
  recebidoPixComanda: number;
  recebidoCartaoComanda: number;
  // Taxas por pagamento pagas pelos clientes por cima do valor: as do app foram para a Comanda
  // Única (split); as do caixa/garçom ficaram com o estabelecimento.
  taxasPlataforma: number;
  taxasEstabelecimento: number;
  // O que ficou com o estabelecimento: totalRecebido + taxasEstabelecimento.
  liquido: number;
}

export interface ExtratoTransacao {
  id: string;
  data: string;
  comandaId: string;
  mesaNumero: number | null;
  mesaNome: string | null;
  cliente: string | null;
  metodo: ExtratoMetodo;
  tipo: 'FULL' | 'PARTIAL' | 'OWN_BILL' | 'ITEMS' | null;
  valor: number;
  // Taxa paga pelo cliente por cima do valor (null = sem taxa). taxaParaPlataforma: true = foi para a
  // Comanda Única (app); false = ficou com o estabelecimento (caixa/garçom).
  taxaComandaUnica: number | null;
  taxaParaPlataforma: boolean | null;
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
// taxa por pagamento que o cliente pagou por cima de cada um.
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
