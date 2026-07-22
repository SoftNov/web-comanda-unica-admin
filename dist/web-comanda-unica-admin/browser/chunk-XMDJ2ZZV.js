import {
  onlyDigits
} from "./chunk-BXBL77KJ.js";
import {
  HttpClient,
  inject,
  map,
  ɵɵdefineInjectable
} from "./chunk-4IFGYJZR.js";

// src/app/shared/services/cep.service.ts
var CepService = class _CepService {
  http = inject(HttpClient);
  lookup(cep) {
    const digits = onlyDigits(cep);
    return this.http.get(`https://viacep.com.br/ws/${digits}/json/`).pipe(map((response) => {
      if (!response || response.erro) {
        return null;
      }
      return {
        street: response.logradouro,
        neighborhood: response.bairro,
        city: response.localidade,
        state: response.uf
      };
    }));
  }
  static \u0275fac = function CepService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CepService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CepService, factory: _CepService.\u0275fac, providedIn: "root" });
};

export {
  CepService
};
//# sourceMappingURL=chunk-XMDJ2ZZV.js.map
