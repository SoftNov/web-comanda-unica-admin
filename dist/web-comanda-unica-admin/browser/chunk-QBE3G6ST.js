import {
  HttpClient,
  inject,
  ɵɵdefineInjectable
} from "./chunk-NIMDKY6Z.js";

// src/environments/environment.ts
var environment = {
  production: false,
  // Relative path: proxied to http://localhost:8080 by proxy.conf.json (ng serve) to avoid CORS in dev.
  apiBaseUrl: "/comanda-unica-api"
};

// src/app/shared/services/accounts.service.ts
var AccountsService = class _AccountsService {
  http = inject(HttpClient);
  createAccount(payload) {
    return this.http.post(`${environment.apiBaseUrl}/api/v1/accounts`, payload);
  }
  activateAccount(token) {
    return this.http.get(`${environment.apiBaseUrl}/api/v1/accounts/activate/${encodeURIComponent(token)}`);
  }
  static \u0275fac = function AccountsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AccountsService, factory: _AccountsService.\u0275fac, providedIn: "root" });
};

export {
  AccountsService
};
//# sourceMappingURL=chunk-QBE3G6ST.js.map
