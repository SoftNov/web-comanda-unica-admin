import {
  webSocket
} from "./chunk-QVW7NBHD.js";
import {
  environment
} from "./chunk-3BRF5UDA.js";
import {
  HttpClient,
  inject,
  ɵɵdefineInjectable
} from "./chunk-MHTOAZDV.js";

// src/app/shared/services/order-queue.service.ts
var OrderQueueService = class _OrderQueueService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiBaseUrl}/api/v1/order-queue`;
  listQueue(params = {}) {
    const httpParams = {};
    if (params.status) {
      httpParams["status"] = params.status;
    }
    if (params.sector) {
      httpParams["sector"] = params.sector;
    }
    return this.http.get(this.baseUrl, { params: httpParams });
  }
  updateStatus(itemId, payload) {
    return this.http.patch(`${this.baseUrl}/${itemId}/status`, payload);
  }
  listSectors() {
    return this.http.get(`${this.baseUrl}/sectors`);
  }
  // Abre a conexão em tempo real da fila de pedidos. O token vai por query param pelo mesmo motivo
  // do dashboard (ver DashboardService.connectRealtime): o WebSocket nativo do browser não permite
  // header Authorization no handshake — ver OrderQueueHandshakeInterceptor no backend, que valida o
  // mesmo token e o acesso à empresa/perfil. sector é opcional: sem ele, a conexão recebe a fila de
  // todos os setores; quem chama é responsável por fechar a subscription (ex: ngOnDestroy).
  connectRealtime(companyId, token, sector) {
    return webSocket(this.buildWsUrl(companyId, token, sector));
  }
  buildWsUrl(companyId, token, sector) {
    const base = environment.apiBaseUrl;
    const wsBase = /^https?:\/\//.test(base) ? base.replace(/^http/, "ws") : `${window.location.protocol === "https:" ? "wss:" : "ws:"}//${window.location.host}${base}`;
    const sectorParam = sector ? `&sector=${encodeURIComponent(sector)}` : "";
    return `${wsBase}/ws/order-queue/${companyId}?token=${encodeURIComponent(token)}${sectorParam}`;
  }
  static \u0275fac = function OrderQueueService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderQueueService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderQueueService, factory: _OrderQueueService.\u0275fac, providedIn: "root" });
};

export {
  OrderQueueService
};
//# sourceMappingURL=chunk-GXBVLERB.js.map
