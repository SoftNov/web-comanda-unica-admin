import {
  onlyDigits
} from "./chunk-5JXQFZ3G.js";
import {
  environment
} from "./chunk-3BRF5UDA.js";
import {
  HttpClient,
  catchError,
  inject,
  of,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-74GQPZJ4.js";

// src/app/shared/services/cep.service.ts
var CepService = class _CepService {
  http = inject(HttpClient);
  lookup(cep) {
    const digits = onlyDigits(cep);
    return this.http.get(`${environment.apiBaseUrl}/api/v1/cep/${digits}`).pipe(catchError((error) => error.status === 404 ? of(null) : throwError(() => error)));
  }
  static \u0275fac = function CepService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CepService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CepService, factory: _CepService.\u0275fac, providedIn: "root" });
};

export {
  CepService
};
//# sourceMappingURL=chunk-Q3R7YXKS.js.map
