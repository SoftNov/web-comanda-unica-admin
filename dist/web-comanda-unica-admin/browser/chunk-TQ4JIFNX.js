import {
  environment
} from "./chunk-3BRF5UDA.js";
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
} from "./chunk-TY3XV2JK.js";

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
  createCheckoutSession() {
    return this.http.post(`${this.baseUrl}/checkout-session`, {});
  }
  createPortalSession() {
    return this.http.post(`${this.baseUrl}/portal-session`, {});
  }
  // Movimentações de crédito (concessão / consumo / devolução / expiração), mais recentes primeiro.
  getCreditMovements(page = 0, size = 20) {
    return this.http.get(`${this.baseUrl}/credit/movements`, {
      params: { page: String(page), size: String(size) }
    });
  }
  // Atualiza a assinatura ativa no meio do ciclo (proração pelo Stripe). Sem argumento:
  // sincroniza ao valor da faixa de mesas atual (botão "Atualizar plano" do planOutdated). Com
  // upToTables: move para a faixa escolhida no seletor. Devolve o estado atualizado e atualiza o cache.
  changePlan(upToTables) {
    const body = upToTables != null ? { upToTables } : {};
    return this.http.post(`${this.baseUrl}/change-plan`, body).pipe(tap((data) => {
      const cached = this.cache();
      if (cached) {
        this.cache.set(__spreadProps(__spreadValues({}, cached), { fetchedAt: Date.now(), data }));
      }
    }));
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
//# sourceMappingURL=chunk-TQ4JIFNX.js.map
