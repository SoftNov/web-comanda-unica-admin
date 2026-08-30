import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

// Tipo de movimentação — espelha StripeTransactionType do backend.
export type ExtratoTipo =
  | 'CHARGE'
  | 'PAYMENT'
  | 'REFUND'
  | 'PAYMENT_REFUND'
  | 'PAYOUT'
  | 'TRANSFER'
  | 'APPLICATION_FEE'
  | 'APPLICATION_FEE_REFUND'
  | 'DISPUTE'
  | 'ADJUSTMENT'
  | 'STRIPE_FEE'
  | 'OTHER';

// Uma Balance Transaction só tem esses dois status na Stripe — ver ExtratoStatus no backend.
export type ExtratoStatusFiltro = 'AVAILABLE' | 'PENDING';

export interface ExtratoResumo {
  saldoDisponivel: number;
  saldoPendente: number;
  entradas: number;
  saidas: number;
  taxasStripe: number;
  // Repasses/taxas pagos à Comanda Única (application_fee confirmado na nossa base).
  taxasComandaUnica: number;
  estornos: number;
  liquido: number;
}

export interface ExtratoStripeRef {
  balanceTransactionId: string;
  paymentIntentId: string | null;
  chargeId: string | null;
}

// Sem pedidoId/numeroPedido: uma cobrança Stripe quita o saldo de uma comanda, não de um pedido
// específico neste sistema (ver o backend, ExtratoComandaUnicaRefResponse).
export interface ExtratoComandaUnicaRef {
  vinculado: boolean;
  estabelecimentoId: string | null;
  comandaId: string | null;
  numeroComanda: string | null;
  mesa: number | null;
  cliente: string | null;
}

export interface ExtratoTransacao {
  id: string;
  tipo: ExtratoTipo;
  // Status da Balance Transaction na Stripe (liberação de saldo p/ saque) — NÃO indica se o
  // pagamento foi concluído. Ver pagamentoConfirmado para isso (confrontado com a nossa base).
  status: ExtratoStatusFiltro;
  // payment_charge.status == SUCCEEDED na nossa base — reflete o mesmo "Concluído" que aparece no
  // Dashboard da própria Stripe para a cobrança, independente do prazo de liberação do saldo.
  pagamentoConfirmado: boolean;
  data: string;
  descricao: string | null;
  valorBruto: number;
  taxaStripe: number;
  // Taxa da Comanda Única confirmada (nunca inferida da taxa da Stripe) — null para categorias que
  // não são recebimento (payout/transfer/etc).
  taxaComandaUnica: number | null;
  valorLiquido: number;
  moeda: string;
  stripe: ExtratoStripeRef;
  comandaUnica: ExtratoComandaUnicaRef;
}

export interface ExtratoPaginacao {
  hasMore: boolean;
  nextCursor: string | null;
}

export interface ExtratoResponse {
  resumo: ExtratoResumo;
  transacoes: ExtratoTransacao[];
  paginacao: ExtratoPaginacao;
}

export interface ExtratoFiltros {
  startDate?: string;
  endDate?: string;
  type?: ExtratoTipo;
  status?: ExtratoStatusFiltro;
  search?: string;
  cursor?: string;
  limit?: number;
}

// Extrato financeiro da conta Stripe Connect de um estabelecimento (ver
// GET /api/v1/companies/{companyId}/extrato no backend) — a Stripe é a fonte oficial dos valores;
// o banco da Comanda Única só enriquece com dados de negócio (comanda/mesa/cliente).
@Injectable({ providedIn: 'root' })
export class ExtratoService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1/companies`;

  getExtrato(companyId: string, filtros: ExtratoFiltros = {}): Observable<ExtratoResponse> {
    return this.http.get<ExtratoResponse>(`${this.baseUrl}/${companyId}/extrato`, { params: this.toHttpParams(filtros) });
  }

  // Sem cursor/limit — a exportação sempre traz todas as transações do período filtrado.
  exportCsv(companyId: string, filtros: Omit<ExtratoFiltros, 'cursor' | 'limit'> = {}): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/${companyId}/extrato/export`, {
      params: this.toHttpParams(filtros),
      responseType: 'blob'
    });
  }

  private toHttpParams(filtros: ExtratoFiltros): Record<string, string> {
    const params: Record<string, string> = {};
    if (filtros.startDate) params['startDate'] = filtros.startDate;
    if (filtros.endDate) params['endDate'] = filtros.endDate;
    if (filtros.type) params['type'] = filtros.type;
    if (filtros.status) params['status'] = filtros.status;
    if (filtros.search) params['search'] = filtros.search;
    if (filtros.cursor) params['cursor'] = filtros.cursor;
    if (filtros.limit) params['limit'] = String(filtros.limit);
    return params;
  }
}
