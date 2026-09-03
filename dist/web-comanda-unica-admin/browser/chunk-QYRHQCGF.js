import {
  webSocket
} from "./chunk-J55EEC34.js";
import {
  environment
} from "./chunk-3BRF5UDA.js";
import {
  HttpClient,
  inject,
  ɵɵdefineInjectable
} from "./chunk-POVL776E.js";

// src/app/shared/services/service-requests.service.ts
var ServiceRequestsService = class _ServiceRequestsService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiBaseUrl}/api/v1/service-requests`;
  create(payload) {
    return this.http.post(this.baseUrl, payload);
  }
  updateStatus(id, payload) {
    return this.http.patch(`${this.baseUrl}/${id}/status`, payload);
  }
  listTypes() {
    return this.http.get(`${this.baseUrl}/types`);
  }
  // Abre a conexão em tempo real das solicitações ativas. Mesmo padrão de OrderQueueService/
  // DashboardService.connectRealtime: token via query param (WebSocket nativo não permite header
  // Authorization no handshake) — ver TableServiceRequestHandshakeInterceptor no backend. Quem
  // chama é responsável por fechar a subscription (ex: ngOnDestroy).
  connectRealtime(companyId, token) {
    return webSocket(this.buildWsUrl(companyId, token));
  }
  buildWsUrl(companyId, token) {
    const base = environment.apiBaseUrl;
    const wsBase = /^https?:\/\//.test(base) ? base.replace(/^http/, "ws") : `${window.location.protocol === "https:" ? "wss:" : "ws:"}//${window.location.host}${base}`;
    return `${wsBase}/ws/service-requests/${companyId}?token=${encodeURIComponent(token)}`;
  }
  static \u0275fac = function ServiceRequestsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceRequestsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ServiceRequestsService, factory: _ServiceRequestsService.\u0275fac, providedIn: "root" });
};

export {
  ServiceRequestsService
};
//# sourceMappingURL=chunk-QYRHQCGF.js.map
