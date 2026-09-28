import {
  environment
} from "./chunk-IKIQHSDP.js";
import {
  HttpClient,
  inject,
  ɵɵdefineInjectable
} from "./chunk-SZBF2MTG.js";

// src/app/shared/services/menu-categories.service.ts
var MenuCategoriesService = class _MenuCategoriesService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiBaseUrl}/api/v1/menu-categories`;
  list(active) {
    const params = {};
    if (active !== void 0) {
      params["active"] = active;
    }
    return this.http.get(this.baseUrl, { params });
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
  static \u0275fac = function MenuCategoriesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuCategoriesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MenuCategoriesService, factory: _MenuCategoriesService.\u0275fac, providedIn: "root" });
};

// src/app/shared/services/menu-items.service.ts
var MenuItemsService = class _MenuItemsService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiBaseUrl}/api/v1/menu`;
  list(params) {
    const httpParams = {
      page: params.page,
      size: params.size,
      sortBy: params.sortBy,
      sortDirection: params.sortDirection
    };
    if (params.categoryId) {
      httpParams["categoryId"] = params.categoryId;
    }
    if (params.active !== void 0) {
      httpParams["active"] = params.active;
    }
    if (params.available !== void 0) {
      httpParams["available"] = params.available;
    }
    if (params.highlight !== void 0) {
      httpParams["highlight"] = params.highlight;
    }
    if (params.name) {
      httpParams["name"] = params.name;
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
  delete(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  updateStatus(id, active) {
    return this.http.patch(`${this.baseUrl}/${id}/status`, { active });
  }
  updateAvailability(id, available) {
    return this.http.patch(`${this.baseUrl}/${id}/availability`, { available });
  }
  updateHighlight(id, highlight) {
    return this.http.patch(`${this.baseUrl}/${id}/highlight`, { highlight });
  }
  updatePrice(id, payload) {
    return this.http.patch(`${this.baseUrl}/${id}/price`, payload);
  }
  addImage(id, file) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(`${this.baseUrl}/${id}/image`, formData);
  }
  removeImage(id, imageId) {
    return this.http.delete(`${this.baseUrl}/${id}/image`, { params: { imageId } });
  }
  static \u0275fac = function MenuItemsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuItemsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MenuItemsService, factory: _MenuItemsService.\u0275fac, providedIn: "root" });
};

export {
  MenuCategoriesService,
  MenuItemsService
};
//# sourceMappingURL=chunk-7T5KA4OU.js.map
