import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ExtratoExportJobResponse, ExtratoStatusFiltro, ExtratoTipo } from './extrato.service';

// Direção da movimentação — espelha MovementDirection do backend. Derivada só do sinal do amount:
// não depende da categoria (ex.: um application_fee pode ser CREDIT, um payout é sempre DEBIT).
export type PlatformExtratoDirecao = 'CREDIT' | 'DEBIT';

export interface PlatformExtratoResumo {
  saldoDisponivel: number;
  saldoPendente: number;
  // Derivado (saldoFinal - líquido do período) — ver PlatformExtratoResumoResponse no backend para
  // a limitação quando o período consultado não termina hoje.
  saldoInicial: number;
  totalEntradas: number;
  totalTaxas: number;
  totalReembolsos: number;
  totalPayouts: number;
  // Repasses recebidos da Comanda Única (application_fee) — a tarifa que a Stripe transfere
  // automaticamente da conta da empresa para a conta da plataforma em cada cobrança direta. Já
  // está somado em totalEntradas; este campo é só o destaque dessa parcela.
  totalRepasses: number;
  totalOutrasSaidas: number;
  totalSaidas: number;
  saldoFinal: number;
  currency: string;
}

export interface PlatformExtratoTransacao {
  balanceTransactionId: string;
  stripeType: string;
  reportingCategory: string | null;
  sourceId: string | null;
  amount: number;
  fee: number;
  net: number;
  currency: string;
  direction: PlatformExtratoDirecao;
  category: ExtratoTipo;
  createdAt: string;
  availableAt: string | null;
  description: string | null;
  status: ExtratoStatusFiltro;
  // Só preenchido para category == TRANSFER, quando o destino é a conta Stripe de uma empresa
  // conhecida — null não remove a movimentação da lista, só deixa de mostrar a empresa relacionada.
  relatedCompanyId: string | null;
  relatedCompanyName: string | null;
}

export interface PlatformExtratoPaginacao {
  hasMore: boolean;
  nextCursor: string | null;
}

export interface PlatformExtratoResponse {
  resumo: PlatformExtratoResumo;
  transacoes: PlatformExtratoTransacao[];
  paginacao: PlatformExtratoPaginacao;
}

export interface PlatformExtratoFiltros {
  startDate?: string;
  endDate?: string;
  type?: ExtratoTipo;
  direction?: PlatformExtratoDirecao;
  relatedCompanyId?: string;
  search?: string;
  cursor?: string;
  limit?: number;
}

// Extrato financeiro da conta Admin/Plataforma da Comanda Única (ver GET /api/v1/platform/extrato
// no backend) — a mesma conta Stripe usada pelo relatório financeiro da home para platform admin
// (ver DashboardService#getFinancialReport), não a conta de uma empresa. Acesso restrito a
// platform admin (o backend valida via @RequirePlatformAdmin; não usa X-Company-Id).
@Injectable({ providedIn: 'root' })
export class PlatformExtratoService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1/platform/extrato`;

  getExtrato(filtros: PlatformExtratoFiltros = {}): Observable<PlatformExtratoResponse> {
    return this.http.get<PlatformExtratoResponse>(this.baseUrl, { params: this.toHttpParams(filtros) });
  }

  // Sem cursor/limit — a exportação sempre traz todas as transações do período filtrado.
  // Assíncrona: responde na hora com um jobId e processa em segundo plano (fila
  // tarefa.extrato.exportacao.csv.queue) — evita segurar a requisição HTTP durante a varredura
  // completa da Stripe. Acompanhar com getExportJob.
  exportCsvAsync(filtros: Omit<PlatformExtratoFiltros, 'cursor' | 'limit'> = {}): Observable<ExtratoExportJobResponse> {
    return this.http.post<ExtratoExportJobResponse>(
      `${this.baseUrl}/export/async`,
      null,
      { params: this.toHttpParams(filtros) }
    );
  }

  // Polling do job criado por exportCsvAsync.
  getExportJob(jobId: string): Observable<ExtratoExportJobResponse> {
    return this.http.get<ExtratoExportJobResponse>(`${this.baseUrl}/export/${jobId}`);
  }

  private toHttpParams(filtros: PlatformExtratoFiltros): Record<string, string> {
    const params: Record<string, string> = {};
    if (filtros.startDate) params['startDate'] = filtros.startDate;
    if (filtros.endDate) params['endDate'] = filtros.endDate;
    if (filtros.type) params['type'] = filtros.type;
    if (filtros.direction) params['direction'] = filtros.direction;
    if (filtros.relatedCompanyId) params['relatedCompanyId'] = filtros.relatedCompanyId;
    if (filtros.search) params['search'] = filtros.search;
    if (filtros.cursor) params['cursor'] = filtros.cursor;
    if (filtros.limit) params['limit'] = String(filtros.limit);
    return params;
  }
}
