import {
  environment
} from "./chunk-IKIQHSDP.js";
import {
  HttpClient,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  of,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-PLJAEWUA.js";

// src/app/shared/services/subscription.service.ts
var CACHE_TTL_MS = 3e4;
var SubscriptionService = class _SubscriptionService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiBaseUrl}/api/v1/subscription`;
  cache = signal(null);
  status = computed(() => this.cache()?.data ?? null);
  // Usado pelo guard: devolve o estado da empresa, do cache quando fresco, senão busca.
  ensureStatus(companyId) {
    const cached = this.cache();
    const fresh = cached && cached.companyId === companyId && Date.now() - cached.fetchedAt < CACHE_TTL_MS;
    return fresh ? of(cached.data) : this.fetch(companyId);
  }
  refresh(companyId) {
    return this.fetch(companyId);
  }
  // Chamado pelo interceptor ao receber 402 — força o guard a re-buscar na próxima navegação.
  clear() {
    this.cache.set(null);
  }
  // Cadastra/troca o cartão de cobrança: a API tokeniza na Asaas e guarda só o token e
  // bandeira/final/validade.
  savePaymentMethod(card) {
    return this.http.put(`${this.baseUrl}/payment-method`, card).pipe(tap((data) => this.updateCache(data)));
  }
  // Assina cobrando no cartão salvo (a 1ª mensalidade é cobrada na hora). Sem argumento: faixa de
  // preço da quantidade de mesas cadastrada hoje. Com upToTables: a faixa escolhida no seletor.
  subscribe(upToTables) {
    const body = upToTables != null ? { upToTables } : {};
    return this.http.post(`${this.baseUrl}/subscribe`, body).pipe(tap((data) => this.updateCache(data)));
  }
  // Cancela a renovação — o acesso segue até o fim do período já pago.
  cancelRenewal() {
    return this.http.post(`${this.baseUrl}/cancel`, {}).pipe(tap((data) => this.updateCache(data)));
  }
  // Faturas (mensalidades e taxas semanais) na Asaas, mais recentes primeiro.
  getCharges(page = 0, size = 10) {
    return this.http.get(`${this.baseUrl}/charges`, {
      params: { page: String(page), size: String(size) }
    });
  }
  // Movimentações de crédito (concessão / consumo / devolução / expiração), mais recentes primeiro.
  getCreditMovements(page = 0, size = 20) {
    return this.http.get(`${this.baseUrl}/credit/movements`, {
      params: { page: String(page), size: String(size) }
    });
  }
  // Muda o valor da assinatura ativa — vale a partir da próxima mensalidade. Sem argumento:
  // sincroniza ao valor da faixa de mesas atual (botão "Atualizar plano" do planOutdated). Com
  // upToTables: move para a faixa escolhida no seletor. Devolve o estado atualizado e atualiza o cache.
  changePlan(upToTables) {
    const body = upToTables != null ? { upToTables } : {};
    return this.http.post(`${this.baseUrl}/change-plan`, body).pipe(tap((data) => this.updateCache(data)));
  }
  updateCache(data) {
    const cached = this.cache();
    if (cached) {
      this.cache.set(__spreadProps(__spreadValues({}, cached), { fetchedAt: Date.now(), data }));
    }
  }
  fetch(companyId) {
    return this.http.get(this.baseUrl).pipe(tap((data) => this.cache.set({ companyId, fetchedAt: Date.now(), data })));
  }
  static \u0275fac = function SubscriptionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SubscriptionService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SubscriptionService, factory: _SubscriptionService.\u0275fac, providedIn: "root" });
};

export {
  SubscriptionService
};
//# sourceMappingURL=chunk-D37HLWCB.js.map
