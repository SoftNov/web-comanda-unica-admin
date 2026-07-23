import {
  environment
} from "./chunk-3BRF5UDA.js";
import {
  HttpClient,
  inject,
  ɵɵdefineInjectable
} from "./chunk-ZGOR3PJA.js";

// src/app/shared/services/tables.service.ts
var TablesService = class _TablesService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiBaseUrl}/api/v1/tables`;
  list(params) {
    const httpParams = {
      page: params.page,
      size: params.size,
      sortBy: params.sortBy,
      sortDirection: params.sortDirection
    };
    if (params.status) {
      httpParams["status"] = params.status;
    }
    if (params.sectorId) {
      httpParams["sectorId"] = params.sectorId;
    }
    if (params.search) {
      httpParams["search"] = params.search;
    }
    return this.http.get(this.baseUrl, { params: httpParams });
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
  disable(id) {
    return this.http.patch(`${this.baseUrl}/${id}/disable`, {});
  }
  enable(id) {
    return this.http.patch(`${this.baseUrl}/${id}/enable`, {});
  }
  regenerateQrCode(id) {
    return this.http.post(`${this.baseUrl}/${id}/regenerate-qrcode`, {});
  }
  getQrCodePng(id) {
    return this.http.get(`${this.baseUrl}/${id}/qrcode/png`, { responseType: "blob" });
  }
  getQrCodePdf(id) {
    return this.http.get(`${this.baseUrl}/${id}/qrcode/pdf`, { responseType: "blob" });
  }
  static \u0275fac = function TablesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TablesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TablesService, factory: _TablesService.\u0275fac, providedIn: "root" });
};

export {
  TablesService
};
//# sourceMappingURL=chunk-KAJWRVGE.js.map
