import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

// Dados fiscais para a NFC-e — espelha FiscalSettingsModels do backend (/api/v1/fiscal-settings).
// O produto herda da categoria o que estiver em branco.

export type RegimeTributario = 'SIMPLES_NACIONAL' | 'SIMPLES_EXCESSO' | 'NORMAL' | 'MEI';

export interface CamposFiscais {
  ncm: string | null;
  cest: string | null;
  cfop: string | null;
  csosnCst: string | null;
  origem: string | null;
  unidade: string | null;
}

export interface EmitenteDadosFiscais {
  cnpj: string;
  razaoSocial: string | null;
  nomeFantasia: string;
  cep: string | null;
  municipio: string | null;
  uf: string | null;
  inscricaoEstadual: string | null;
  regimeTributario: RegimeTributario | null;
  codigoMunicipioIbge: string | null;
}

export interface CategoriaDadosFiscais {
  id: string;
  nome: string;
  fiscal: CamposFiscais;
  quantidadeProdutos: number;
  produtosCompletos: number;
}

export interface ProdutoDadosFiscais {
  id: string;
  nome: string;
  codigo: string | null;
  categoriaId: string | null;
  categoriaNome: string | null;
  ativo: boolean;
  proprio: CamposFiscais;
  efetivo: CamposFiscais;
  completo: boolean;
}

export interface DadosFiscaisResponse {
  emitente: EmitenteDadosFiscais;
  categorias: CategoriaDadosFiscais[];
  produtos: ProdutoDadosFiscais[];
  completude: {
    emitenteCompleto: boolean;
    produtosAtivos: number;
    produtosAtivosCompletos: number;
  };
}

export interface AtualizarEmitenteRequest {
  inscricaoEstadual: string | null;
  regimeTributario: RegimeTributario | null;
  codigoMunicipioIbge: string | null;
}

@Injectable({ providedIn: 'root' })
export class DadosFiscaisService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1/fiscal-settings`;

  get(): Observable<DadosFiscaisResponse> {
    return this.http.get<DadosFiscaisResponse>(this.baseUrl);
  }

  updateEmitter(payload: AtualizarEmitenteRequest): Observable<DadosFiscaisResponse> {
    return this.http.put<DadosFiscaisResponse>(`${this.baseUrl}/emitter`, payload);
  }

  updateCategory(categoryId: string, payload: CamposFiscais): Observable<DadosFiscaisResponse> {
    return this.http.put<DadosFiscaisResponse>(`${this.baseUrl}/categories/${categoryId}`, payload);
  }

  updateItem(itemId: string, payload: CamposFiscais): Observable<DadosFiscaisResponse> {
    return this.http.put<DadosFiscaisResponse>(`${this.baseUrl}/items/${itemId}`, payload);
  }
}
