import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ExtratoMetodo } from './extrato.service';

// Vendas no formato da NFC-e — espelha VendaFiscalModels do backend
// (GET /api/v1/companies/{companyId}/vendas-nota-fiscal). Campos fiscais que a Comanda Única ainda
// não cadastra (inscrição estadual, NCM, CFOP, CSOSN/CST) vêm null.

export interface AvisoFiscal {
  codigo: string;
  mensagem: string;
}

export interface EnderecoFiscal {
  logradouro: string;
  numero: string;
  complemento: string | null;
  bairro: string;
  municipio: string;
  codigoMunicipio: string | null;
  uf: string;
  cep: string;
}

export interface EmitenteFiscal {
  cnpj: string;
  razaoSocial: string | null;
  nomeFantasia: string;
  inscricaoEstadual: string | null;
  // CRT: 1 Simples, 2 Simples com excesso, 3 normal, 4 MEI.
  regimeTributario: string | null;
  endereco: EnderecoFiscal | null;
}

export interface TotalPorForma {
  origem: ExtratoMetodo;
  // tPag da NFC-e; null quando a forma real não é conhecida (caixa/garçom).
  formaPagamento: string | null;
  descricao: string;
  valor: number;
  quantidadeVendas: number;
}

export interface ResumoFiscal {
  quantidadeVendas: number;
  valorProdutos: number;
  valorRecebido: number;
  vendasComFormaAConfirmar: number;
  porForma: TotalPorForma[];
}

export interface ItemFiscal {
  numero: number;
  codigo: string | null;
  descricao: string;
  categoria: string | null;
  ncm: string | null;
  cfop: string | null;
  cest: string | null;
  csosnCst: string | null;
  origem: string | null;
  unidade: string;
  quantidade: number;
  valorUnitario: number;
  valorBruto: number;
  desconto: number;
  valorLiquido: number;
  observacao: string | null;
}

export interface PagamentoFiscal {
  origem: ExtratoMetodo;
  formaPagamento: string | null;
  descricao: string;
  valor: number;
  dataPagamento: string;
  // tpIntegra: "1" pago no app (Asaas), "2" maquininha do estabelecimento.
  tipoIntegracao: string | null;
  cnpjInstituicao: string | null;
}

export interface TotaisFiscais {
  valorProdutos: number;
  desconto: number;
  valorNota: number;
  valorPago: number;
  troco: number;
}

export interface VendaFiscal {
  // ID da comanda — referência única da venda (chave de idempotência numa integração).
  referencia: string;
  dataVenda: string;
  mesa: string | null;
  consumidor: { tipoDocumento: 'CPF' | 'CNPJ'; documento: string } | null;
  itens: ItemFiscal[];
  pagamentos: PagamentoFiscal[];
  totais: TotaisFiscais;
  pendencias: AvisoFiscal[];
}

export interface VendasFiscaisPage {
  content: VendaFiscal[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}

export interface VendasFiscaisResponse {
  emitente: EmitenteFiscal;
  resumo: ResumoFiscal;
  avisos: AvisoFiscal[];
  vendas: VendasFiscaisPage;
}

export interface VendasFiscaisFiltros {
  startDate?: string;
  endDate?: string;
  page?: number;
  size?: number;
}

export type FormatoExportacaoFiscal = 'csv' | 'json';

@Injectable({ providedIn: 'root' })
export class VendasNotaFiscalService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1/companies`;

  list(companyId: string, filtros: VendasFiscaisFiltros = {}): Observable<VendasFiscaisResponse> {
    return this.http.get<VendasFiscaisResponse>(`${this.baseUrl}/${companyId}/vendas-nota-fiscal`, {
      params: this.toHttpParams(filtros)
    });
  }

  // csv: planilha (uma linha por item) para o contador; json: layout comanda-unica.vendas-nfce,
  // para importar num emissor ou numa futura integração com API de NFC-e.
  export(companyId: string, formato: FormatoExportacaoFiscal, filtros: Omit<VendasFiscaisFiltros, 'page' | 'size'> = {}): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/${companyId}/vendas-nota-fiscal/export/${formato}`, {
      params: this.toHttpParams(filtros),
      responseType: 'blob'
    });
  }

  private toHttpParams(filtros: VendasFiscaisFiltros): Record<string, string> {
    const params: Record<string, string> = {};
    if (filtros.startDate) params['startDate'] = filtros.startDate;
    if (filtros.endDate) params['endDate'] = filtros.endDate;
    if (filtros.page != null) params['page'] = String(filtros.page);
    if (filtros.size != null) params['size'] = String(filtros.size);
    return params;
  }
}
