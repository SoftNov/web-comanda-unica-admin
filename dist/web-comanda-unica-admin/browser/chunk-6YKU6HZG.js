import {
  environment
} from "./chunk-IKIQHSDP.js";
import {
  HttpClient,
  inject,
  ɵɵdefineInjectable
} from "./chunk-QBSIROZR.js";

// src/app/shared/services/platform-finance.service.ts
var SITUATION_LABELS = {
  ACTIVE: "Assinatura ativa",
  TRIAL: "Em teste",
  PAST_DUE: "Em atraso",
  TRIAL_EXPIRED: "Teste encerrado",
  PENDING: "Aguardando pagamento",
  EXPIRED: "Expirada",
  CANCELLED: "Cancelada",
  NONE: "Sem assinatura"
};
function situationTone(situation) {
  if (situation === "ACTIVE" || situation === "TRIAL")
    return "ok";
  if (situation === "PAST_DUE" || situation === "PENDING")
    return "warn";
  return "off";
}
var PlatformFinanceService = class _PlatformFinanceService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiBaseUrl}/api/v1/platform/finance`;
  getSummary(startDate, endDate) {
    const params = {};
    if (startDate)
      params["startDate"] = startDate;
    if (endDate)
      params["endDate"] = endDate;
    return this.http.get(`${this.baseUrl}/summary`, { params });
  }
  getOverview() {
    return this.http.get(`${this.baseUrl}/overview`);
  }
  getCompanyReport(startDate, endDate) {
    const params = {};
    if (startDate)
      params["startDate"] = startDate;
    if (endDate)
      params["endDate"] = endDate;
    return this.http.get(`${this.baseUrl}/companies-report`, { params });
  }
  static \u0275fac = function PlatformFinanceService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlatformFinanceService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PlatformFinanceService, factory: _PlatformFinanceService.\u0275fac, providedIn: "root" });
};

export {
  SITUATION_LABELS,
  situationTone,
  PlatformFinanceService
};
//# sourceMappingURL=chunk-6YKU6HZG.js.map
