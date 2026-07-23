import {
  environment
} from "./chunk-3BRF5UDA.js";
import {
  HttpClient,
  inject,
  ɵɵdefineInjectable
} from "./chunk-ZGOR3PJA.js";

// src/app/shared/services/floor-plans.service.ts
var FloorPlansService = class _FloorPlansService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiBaseUrl}/api/v1/floor-plans`;
  list() {
    return this.http.get(this.baseUrl);
  }
  get(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  create(payload) {
    return this.http.post(this.baseUrl, payload);
  }
  update(id, payload) {
    return this.http.put(`${this.baseUrl}/${id}`, payload);
  }
  delete(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  static \u0275fac = function FloorPlansService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FloorPlansService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FloorPlansService, factory: _FloorPlansService.\u0275fac, providedIn: "root" });
};

export {
  FloorPlansService
};
//# sourceMappingURL=chunk-2PCEBGEC.js.map
