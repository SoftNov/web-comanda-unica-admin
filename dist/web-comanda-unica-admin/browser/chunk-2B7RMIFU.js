import {
  environment
} from "./chunk-IKIQHSDP.js";
import {
  HttpClient,
  inject,
  ɵɵdefineInjectable
} from "./chunk-SZBF2MTG.js";

// src/app/shared/services/staff-order.service.ts
var StaffOrderService = class _StaffOrderService {
  http = inject(HttpClient);
  baseUrl = environment.menuApiBaseUrl;
  openOrEnter(tableId) {
    return this.http.get(`${this.baseUrl}/api/v1/staff/tables/${tableId}/comanda`);
  }
  createOrder(tableId, payload) {
    return this.http.post(`${this.baseUrl}/api/v1/staff/tables/${tableId}/comanda/orders`, payload);
  }
  cancelOrder(tableId, orderId, reason) {
    return this.http.patch(`${this.baseUrl}/api/v1/staff/tables/${tableId}/comanda/orders/${orderId}/cancel`, { reason });
  }
  removeItem(tableId, itemId, reason) {
    return this.http.patch(`${this.baseUrl}/api/v1/staff/tables/${tableId}/comanda/items/${itemId}/remove`, { reason });
  }
  updateOrderNotes(tableId, orderId, notes) {
    return this.http.patch(`${this.baseUrl}/api/v1/staff/tables/${tableId}/comanda/orders/${orderId}/notes`, { notes });
  }
  static \u0275fac = function StaffOrderService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StaffOrderService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StaffOrderService, factory: _StaffOrderService.\u0275fac, providedIn: "root" });
};

export {
  StaffOrderService
};
//# sourceMappingURL=chunk-2B7RMIFU.js.map
