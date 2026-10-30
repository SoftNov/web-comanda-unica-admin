import {
  environment
} from "./chunk-IKIQHSDP.js";
import {
  HttpClient,
  inject,
  ɵɵdefineInjectable
} from "./chunk-QBSIROZR.js";

// src/app/shared/services/tables.service.ts
var TABLE_LIMIT_ERROR_CODE = "ERR_SUBSCRIPTION_TABLE_LIMIT_REACHED";
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
  // Mesa virtual do balcão do estabelecimento (criada pela API na primeira chamada): é onde fica a
  // comanda do cartão de consumo quando o cliente retira no balcão, sem ocupar mesa. Não aparece
  // em list() nem no cadastro de mesas.
  getCounter() {
    return this.http.get(`${this.baseUrl}/counter`);
  }
  get(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  create(payload) {
    return this.http.post(this.baseUrl, payload);
  }
  createBatch(payload) {
    return this.http.post(`${this.baseUrl}/batch`, payload);
  }
  update(id, payload) {
    return this.http.put(`${this.baseUrl}/${id}`, payload);
  }
  disable(id) {
    return this.http.patch(`${this.baseUrl}/${id}/disable`, {});
  }
  getQuota() {
    return this.http.get(`${this.baseUrl}/quota`);
  }
  // Exclui (arquiva) a mesa: some da listagem e do mapa, o número fica livre e o QR Code deixa de
  // funcionar; o histórico de pedidos/comandas é preservado. 409 com comanda aberta ou reserva ativa.
  delete(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  enable(id) {
    return this.http.patch(`${this.baseUrl}/${id}/enable`, {});
  }
  markCleaned(id) {
    return this.http.patch(`${this.baseUrl}/${id}/mark-cleaned`, {});
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
  TABLE_LIMIT_ERROR_CODE,
  TablesService
};
//# sourceMappingURL=chunk-AINUU7VH.js.map
