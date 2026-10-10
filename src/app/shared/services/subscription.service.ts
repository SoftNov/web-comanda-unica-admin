import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

export type SubscriptionStatus = 'PENDING' | 'ACTIVE' | 'PAST_DUE' | 'EXPIRED' | 'CANCELLED';

// Espelho de SubscriptionResponse no backend (api-comanda-unica-admin).
export interface SubscriptionStatusResponse {
  exists: boolean;
  status: SubscriptionStatus | null;
  // Libera o acesso ao sistema (ACTIVE, ou PAST_DUE ainda em carência).
  active: boolean;
  // Período grátis (cortesia) — ainda não assinou de verdade.
  courtesy: boolean;
  // Limite de mesas do período grátis, e se o estabelecimento já passou dele (nesse caso a
  // cortesia deixa de liberar o acesso — precisa assinar).
  courtesyTableLimit: number | null;
  courtesyTableLimitExceeded: boolean;
  // Valor contratado na assinatura vigente (anual) + mensal-equivalente + nº de mesas na
  // contratação.
  amount: number | null;
  monthlyAmount: number | null;
  subscriptionTableCount: number | null;
  currency: string | null;
  // Valor VIGENTE hoje para o estabelecimento (faixa de mesas ou valor negociado). planAmount é
  // anual (= 12 × planMonthlyAmount).
  planAmount: number | null;
  planMonthlyAmount: number | null;
  planCurrency: string | null;
  // Mesas cadastradas hoje — base da faixa de preço.
  tableCount: number | null;
  // Quantas mesas o plano contratado comporta. null = ilimitado (faixa topo / valor negociado).
  // Para cortesia, é o limite do período grátis.
  contractedTableLimit: number | null;
  // Faixas para o seletor de upgrade/downgrade (vazio quando não há assinatura paga ativa).
  availablePlans: PlanOption[];
  // O preço vigente difere do contratado (mudou de faixa de mesas) — dá pra atualizar o plano
  // sem esperar o fim do contrato (ver changePlan).
  planOutdated: boolean;
  startDate: string | null;
  currentPeriodStart: string | null;
  currentPeriodEnd: string | null;
  cancelAtPeriodEnd: boolean;
  autoRenew: boolean;
  // Há uma assinatura paga renovando — pode cancelar a renovação (POST /subscription/cancel).
  cancellable: boolean;
  // Cartão de cobrança salvo (assinatura + taxas semanais). null quando nenhum foi cadastrado.
  paymentMethod: SavedPaymentMethod | null;
  // Resumo do crédito da assinatura do período vigente. null quando nunca houve crédito
  // (cortesia / nunca assinou).
  credit: CreditSummary | null;
}

export type SubscriptionCreditStatus = 'ACTIVE' | 'EXPIRED';

export interface CreditSummary {
  granted: number;
  consumed: number;
  expired: number;
  available: number;
  periodStart: string;
  periodEnd: string;
  status: SubscriptionCreditStatus;
}

export type CreditMovementType =
  | 'SUBSCRIPTION_CREDIT'
  | 'FEE_CREDIT_CONSUMPTION'
  | 'FEE_CREDIT_CONSUMPTION_REVERSAL'
  | 'CREDIT_EXPIRATION';

export interface CreditMovement {
  type: CreditMovementType;
  amount: number;
  description: string | null;
  referenceType: string | null;
  referenceId: string | null;
  createdAt: string;
}

export interface PagedResponse<T> {
  content: T[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}

// Uma faixa de plano no seletor de upgrade/downgrade (espelho de PlanOptionResponse no backend).
export interface PlanOption {
  upToTables: number;
  monthlyAmount: number;
  annualAmount: number;
  // Faixa do valor atualmente contratado.
  current: boolean;
  // false quando as mesas cadastradas hoje não cabem nesta faixa (downgrade bloqueado).
  allowed: boolean;
}

// Cartão de cobrança salvo — só dados de exibição; o cartão em si fica tokenizado na Asaas.
export interface SavedPaymentMethod {
  brand: string | null;
  last4: string | null;
  expMonth: number | null;
  expYear: number | null;
}

// Cartão + titular enviados uma única vez para a API tokenizar na Asaas (espelho de
// SaveCreditCardRequest no backend). Número e CVV não são guardados pela Comanda Única.
export interface SaveCreditCardRequest {
  holderName: string;
  number: string;
  expiryMonth: string;
  expiryYear: string;
  ccv: string;
  cpfCnpj: string;
  email: string;
  postalCode: string;
  addressNumber: string;
  addressComplement?: string | null;
  phone: string;
}

export type PlatformChargeKind = 'SUBSCRIPTION' | 'PLATFORM_FEE';

// Uma cobrança da Comanda Única na Asaas — mensalidade ou taxas semanais (espelho de
// PlatformChargeResponse). companyName só vem no extrato da plataforma.
export interface PlatformCharge {
  id: string;
  companyId: string | null;
  companyName: string | null;
  kind: PlatformChargeKind;
  description: string | null;
  status: string;
  paid: boolean;
  value: number;
  netValue: number | null;
  dueDate: string | null;
  paidAt: string | null;
  createdAt: string;
  cardBrand: string | null;
  cardLast4: string | null;
  invoiceUrl: string | null;
  receiptUrl: string | null;
  asaasPaymentId: string;
}

// Estado da assinatura mantido em memória para o guard não bater na API a cada navegação. É
// re-buscado quando a empresa selecionada muda, quando passa o TTL curto, ou quando o interceptor
// recebe um 402 (ver auth.interceptor).
const CACHE_TTL_MS = 30_000;

@Injectable({ providedIn: 'root' })
export class SubscriptionService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1/subscription`;

  private readonly cache = signal<{ companyId: string; fetchedAt: number; data: SubscriptionStatusResponse } | null>(null);

  readonly status = computed(() => this.cache()?.data ?? null);

  // Usado pelo guard: devolve o estado da empresa, do cache quando fresco, senão busca.
  ensureStatus(companyId: string): Observable<SubscriptionStatusResponse> {
    const cached = this.cache();
    const fresh = cached && cached.companyId === companyId && Date.now() - cached.fetchedAt < CACHE_TTL_MS;
    return fresh ? of(cached!.data) : this.fetch(companyId);
  }

  refresh(companyId: string): Observable<SubscriptionStatusResponse> {
    return this.fetch(companyId);
  }

  // Chamado pelo interceptor ao receber 402 — força o guard a re-buscar na próxima navegação.
  clear(): void {
    this.cache.set(null);
  }

  // Cadastra/troca o cartão de cobrança: a API tokeniza na Asaas e guarda só o token e
  // bandeira/final/validade.
  savePaymentMethod(card: SaveCreditCardRequest): Observable<SubscriptionStatusResponse> {
    return this.http.put<SubscriptionStatusResponse>(`${this.baseUrl}/payment-method`, card).pipe(
      tap((data) => this.updateCache(data))
    );
  }

  // Assina cobrando no cartão salvo (a 1ª mensalidade é cobrada na hora). Sem argumento: faixa de
  // preço da quantidade de mesas cadastrada hoje. Com upToTables: a faixa escolhida no seletor.
  subscribe(upToTables?: number): Observable<SubscriptionStatusResponse> {
    const body = upToTables != null ? { upToTables } : {};
    return this.http.post<SubscriptionStatusResponse>(`${this.baseUrl}/subscribe`, body).pipe(
      tap((data) => this.updateCache(data))
    );
  }

  // Cancela a renovação — o acesso segue até o fim do período já pago.
  cancelRenewal(): Observable<SubscriptionStatusResponse> {
    return this.http.post<SubscriptionStatusResponse>(`${this.baseUrl}/cancel`, {}).pipe(
      tap((data) => this.updateCache(data))
    );
  }

  // Faturas (mensalidades e taxas semanais) na Asaas, mais recentes primeiro.
  getCharges(page = 0, size = 10): Observable<PagedResponse<PlatformCharge>> {
    return this.http.get<PagedResponse<PlatformCharge>>(`${this.baseUrl}/charges`, {
      params: { page: String(page), size: String(size) }
    });
  }

  // Movimentações de crédito (concessão / consumo / devolução / expiração), mais recentes primeiro.
  getCreditMovements(page = 0, size = 20): Observable<PagedResponse<CreditMovement>> {
    return this.http.get<PagedResponse<CreditMovement>>(`${this.baseUrl}/credit/movements`, {
      params: { page: String(page), size: String(size) }
    });
  }

  // Muda o valor da assinatura ativa — vale a partir da próxima mensalidade. Sem argumento:
  // sincroniza ao valor da faixa de mesas atual (botão "Atualizar plano" do planOutdated). Com
  // upToTables: move para a faixa escolhida no seletor. Devolve o estado atualizado e atualiza o cache.
  changePlan(upToTables?: number): Observable<SubscriptionStatusResponse> {
    const body = upToTables != null ? { upToTables } : {};
    return this.http.post<SubscriptionStatusResponse>(`${this.baseUrl}/change-plan`, body).pipe(
      tap((data) => this.updateCache(data))
    );
  }

  private updateCache(data: SubscriptionStatusResponse): void {
    const cached = this.cache();
    if (cached) {
      this.cache.set({ ...cached, fetchedAt: Date.now(), data });
    }
  }

  private fetch(companyId: string): Observable<SubscriptionStatusResponse> {
    return this.http.get<SubscriptionStatusResponse>(this.baseUrl).pipe(
      tap((data) => this.cache.set({ companyId, fetchedAt: Date.now(), data }))
    );
  }
}
