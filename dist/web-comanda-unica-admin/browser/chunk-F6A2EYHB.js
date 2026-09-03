import {
  environment
} from "./chunk-3BRF5UDA.js";
import {
  HttpClient,
  inject,
  ɵɵdefineInjectable
} from "./chunk-XAWTBWXY.js";

// src/app/shared/services/platform-fee-rules.service.ts
var PlatformFeeRulesService = class _PlatformFeeRulesService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiBaseUrl}/api/v1/platform/fee-rules`;
  getDefault() {
    return this.http.get(`${this.baseUrl}/default`);
  }
  updateDefault(payload) {
    return this.http.put(`${this.baseUrl}/default`, payload);
  }
  listCompanies(params = {}) {
    const httpParams = {
      page: String(params.page ?? 0),
      size: String(params.size ?? 20)
    };
    if (params.search) {
      httpParams["search"] = params.search;
    }
    return this.http.get(`${this.baseUrl}/companies`, { params: httpParams });
  }
  upsertCompanyRule(companyId, payload) {
    return this.http.put(`${this.baseUrl}/companies/${companyId}`, payload);
  }
  removeCompanyRule(companyId) {
    return this.http.delete(`${this.baseUrl}/companies/${companyId}`);
  }
  static \u0275fac = function PlatformFeeRulesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlatformFeeRulesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PlatformFeeRulesService, factory: _PlatformFeeRulesService.\u0275fac, providedIn: "root" });
};

export {
  PlatformFeeRulesService
};
//# sourceMappingURL=chunk-F6A2EYHB.js.map
