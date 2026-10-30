import {
  environment
} from "./chunk-IKIQHSDP.js";
import {
  HttpClient,
  inject,
  ɵɵdefineInjectable
} from "./chunk-MRKXMG4P.js";

// src/app/shared/services/extrato.service.ts
var ExtratoService = class _ExtratoService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiBaseUrl}/api/v1/companies`;
  getExtrato(companyId, filtros = {}) {
    return this.http.get(`${this.baseUrl}/${companyId}/extrato`, { params: this.toHttpParams(filtros) });
  }
  // Mesmos filtros do extrato, sem paginação — CSV gerado na hora pelo backend.
  exportCsv(companyId, filtros = {}) {
    return this.http.get(`${this.baseUrl}/${companyId}/extrato/export`, {
      params: this.toHttpParams(filtros),
      responseType: "blob"
    });
  }
  toHttpParams(filtros) {
    const params = {};
    if (filtros.startDate)
      params["startDate"] = filtros.startDate;
    if (filtros.endDate)
      params["endDate"] = filtros.endDate;
    if (filtros.method)
      params["method"] = filtros.method;
    if (filtros.page != null)
      params["page"] = String(filtros.page);
    if (filtros.size != null)
      params["size"] = String(filtros.size);
    return params;
  }
  static \u0275fac = function ExtratoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExtratoService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExtratoService, factory: _ExtratoService.\u0275fac, providedIn: "root" });
};

export {
  ExtratoService
};
//# sourceMappingURL=chunk-ZYO5PHN2.js.map
