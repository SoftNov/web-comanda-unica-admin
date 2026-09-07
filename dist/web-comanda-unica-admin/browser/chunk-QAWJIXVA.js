import {
  formatCurrencyInput,
  parseCurrencyInput
} from "./chunk-5JXQFZ3G.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-FNN634HN.js";
import {
  RippleDirective
} from "./chunk-P26S26B7.js";
import {
  autoDismiss
} from "./chunk-JD6JJHYZ.js";
import {
  AuthService
} from "./chunk-2VOFBJJ2.js";
import {
  apiDateTime,
  apiToBrDateTimeLocal,
  brDateTimeLocalToApi
} from "./chunk-XDLONSRE.js";
import "./chunk-R67ZKZZ4.js";
import {
  environment
} from "./chunk-3BRF5UDA.js";
import "./chunk-EVJN5Z2J.js";
import {
  HttpClient,
  Subject,
  computed,
  debounceTime,
  distinctUntilChanged,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-74GQPZJ4.js";

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

// src/app/shared/services/menu-theme.service.ts
var MenuThemeService = class _MenuThemeService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiBaseUrl}/api/v1/menu-theme`;
  get() {
    return this.http.get(this.baseUrl);
  }
  update(payload) {
    return this.http.put(this.baseUrl, payload);
  }
  updateCover(file) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(`${this.baseUrl}/cover`, formData);
  }
  static \u0275fac = function MenuThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MenuThemeService, factory: _MenuThemeService.\u0275fac, providedIn: "root" });
};

// src/app/features/admin/pages/menu/menu.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function MenuComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function MenuComponent_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreateItemModal());
    });
    \u0275\u0275elementStart(1, "span", 8);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Novo produto ");
    \u0275\u0275elementEnd();
  }
}
function MenuComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function MenuComponent_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreateCategoryModal());
    });
    \u0275\u0275elementStart(1, "span", 8);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nova categoria ");
    \u0275\u0275elementEnd();
  }
}
function MenuComponent_Conditional_15_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r5 = ctx.$implicit;
    \u0275\u0275property("value", category_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(category_r5.name);
  }
}
function MenuComponent_Conditional_15_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r6 = ctx.$implicit;
    \u0275\u0275property("value", option_r6.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r6.label);
  }
}
function MenuComponent_Conditional_15_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1, "Carregando produtos\u2026");
    \u0275\u0275elementEnd();
  }
}
function MenuComponent_Conditional_15_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 8);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.listError(), " ");
  }
}
function MenuComponent_Conditional_15_Conditional_54_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 42);
    \u0275\u0275text(2, "Nenhum produto encontrado.");
    \u0275\u0275elementEnd()();
  }
}
function MenuComponent_Conditional_15_Conditional_54_For_24_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 43);
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", item_r9.imageUrl, \u0275\u0275sanitizeUrl)("alt", item_r9.name);
  }
}
function MenuComponent_Conditional_15_Conditional_54_For_24_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "restaurant");
    \u0275\u0275elementEnd();
  }
}
function MenuComponent_Conditional_15_Conditional_54_For_24_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 53);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(item_r9.price));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(item_r9.promotionalPrice));
  }
}
function MenuComponent_Conditional_15_Conditional_54_For_24_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatCurrency(item_r9.price), " ");
  }
}
function MenuComponent_Conditional_15_Conditional_54_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275template(2, MenuComponent_Conditional_15_Conditional_54_For_24_Conditional_2_Template, 1, 2, "img", 43)(3, MenuComponent_Conditional_15_Conditional_54_For_24_Conditional_3_Template, 2, 0, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275template(9, MenuComponent_Conditional_15_Conditional_54_For_24_Conditional_9_Template, 4, 2)(10, MenuComponent_Conditional_15_Conditional_54_For_24_Conditional_10_Template, 1, 1);
    \u0275\u0275elementStart(11, "span", 45);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "button", 46);
    \u0275\u0275listener("click", function MenuComponent_Conditional_15_Conditional_54_For_24_Template_button_click_14_listener() {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleStatus(item_r9));
    });
    \u0275\u0275elementStart(15, "span", 47);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "td")(18, "button", 48);
    \u0275\u0275listener("click", function MenuComponent_Conditional_15_Conditional_54_For_24_Template_button_click_18_listener() {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleAvailability(item_r9));
    });
    \u0275\u0275elementStart(19, "span", 47);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "td")(22, "button", 49);
    \u0275\u0275listener("click", function MenuComponent_Conditional_15_Conditional_54_For_24_Template_button_click_22_listener() {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleHighlight(item_r9));
    });
    \u0275\u0275elementStart(23, "span", 8);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "td", 37)(26, "button", 50);
    \u0275\u0275listener("click", function MenuComponent_Conditional_15_Conditional_54_For_24_Template_button_click_26_listener() {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEditItemModal(item_r9));
    });
    \u0275\u0275elementStart(27, "span", 8);
    \u0275\u0275text(28, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "button", 51);
    \u0275\u0275listener("click", function MenuComponent_Conditional_15_Conditional_54_For_24_Template_button_click_29_listener() {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.requestDeleteItem(item_r9));
    });
    \u0275\u0275elementStart(30, "span", 8);
    \u0275\u0275text(31, "delete_outline");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r9.imageUrl ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9.categoryName);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isPromotionActive(item_r9) ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Voc\xEA recebe ", ctx_r1.formatCurrency(item_r9.basePrice), " \xB7 taxa ", ctx_r1.formatCurrency(ctx_r1.feeAmount(item_r9)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("badge--success", item_r9.active)("badge--muted", !item_r9.active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r9.active ? "Ativo" : "Inativo", " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("badge--success", item_r9.available)("badge--muted", !item_r9.available);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r9.available ? "Dispon\xEDvel" : "Indispon\xEDvel", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("icon-btn--highlight", item_r9.highlight);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9.highlight ? "star" : "star_border");
  }
}
function MenuComponent_Conditional_15_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "table", 36)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Imagem");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Nome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Categoria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Pre\xE7o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Disponibilidade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Destaque");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 37);
    \u0275\u0275text(20, "A\xE7\xF5es");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275template(22, MenuComponent_Conditional_15_Conditional_54_Conditional_22_Template, 3, 0, "tr");
    \u0275\u0275repeaterCreate(23, MenuComponent_Conditional_15_Conditional_54_For_24_Template, 32, 19, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 38)(26, "span", 39);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 40)(29, "button", 41);
    \u0275\u0275listener("click", function MenuComponent_Conditional_15_Conditional_54_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.previousPage());
    });
    \u0275\u0275elementStart(30, "span", 8);
    \u0275\u0275text(31, "chevron_left");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " Anterior ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 41);
    \u0275\u0275listener("click", function MenuComponent_Conditional_15_Conditional_54_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275text(34, " Pr\xF3xima ");
    \u0275\u0275elementStart(35, "span", 8);
    \u0275\u0275text(36, "chevron_right");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(22);
    \u0275\u0275conditional(ctx_r1.items().length === 0 ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.items());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.totalElements(), " produto(s) \u2014 ", ctx_r1.pageLabel(), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.page() === 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.isLast());
  }
}
function MenuComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "label", 12);
    \u0275\u0275text(4, "Categoria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 13)(6, "select", 14);
    \u0275\u0275listener("change", function MenuComponent_Conditional_15_Template_select_change_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setCategoryFilter($event.target.value));
    });
    \u0275\u0275elementStart(7, "option", 15);
    \u0275\u0275text(8, "Todas");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, MenuComponent_Conditional_15_For_10_Template, 2, 2, "option", 16, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 11)(12, "label", 17);
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 13)(15, "select", 18);
    \u0275\u0275listener("change", function MenuComponent_Conditional_15_Template_select_change_15_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setActiveFilter($event.target.value));
    });
    \u0275\u0275elementStart(16, "option", 19);
    \u0275\u0275text(17, "Todos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 20);
    \u0275\u0275text(19, "Ativo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 21);
    \u0275\u0275text(21, "Inativo");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 11)(23, "label", 22);
    \u0275\u0275text(24, "Disponibilidade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 13)(26, "select", 23);
    \u0275\u0275listener("change", function MenuComponent_Conditional_15_Template_select_change_26_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setAvailableFilter($event.target.value));
    });
    \u0275\u0275elementStart(27, "option", 19);
    \u0275\u0275text(28, "Todas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 20);
    \u0275\u0275text(30, "Dispon\xEDvel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 21);
    \u0275\u0275text(32, "Indispon\xEDvel");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "div", 11)(34, "label", 24);
    \u0275\u0275text(35, "Ordenar por");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 25)(37, "select", 26);
    \u0275\u0275listener("change", function MenuComponent_Conditional_15_Template_select_change_37_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSortBy($event.target.value));
    });
    \u0275\u0275repeaterCreate(38, MenuComponent_Conditional_15_For_39_Template, 2, 2, "option", 16, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 27);
    \u0275\u0275listener("click", function MenuComponent_Conditional_15_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSortDirection());
    });
    \u0275\u0275elementStart(41, "span", 8);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div", 28)(44, "label", 29);
    \u0275\u0275text(45, "Buscar por nome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 13)(47, "input", 30);
    \u0275\u0275listener("input", function MenuComponent_Conditional_15_Template_input_input_47_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchInput($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "button", 31);
    \u0275\u0275listener("click", function MenuComponent_Conditional_15_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetFilters());
    });
    \u0275\u0275elementStart(49, "span", 8);
    \u0275\u0275text(50, "filter_alt_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, " Limpar filtros ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(52, MenuComponent_Conditional_15_Conditional_52_Template, 2, 0, "p", 32)(53, MenuComponent_Conditional_15_Conditional_53_Template, 4, 1, "div", 33)(54, MenuComponent_Conditional_15_Conditional_54_Template, 37, 5, "div", 34);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r1.filterCategoryId());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.categories());
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r1.filterActive());
    \u0275\u0275advance(11);
    \u0275\u0275property("value", ctx_r1.filterAvailable());
    \u0275\u0275advance(11);
    \u0275\u0275property("value", ctx_r1.sortBy());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.sortOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r1.sortDirection() === "ASC" ? "Crescente" : "Decrescente");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.sortDirection() === "ASC" ? "arrow_upward" : "arrow_downward");
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.searchName());
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.isLoadingList() ? 52 : ctx_r1.listError() ? 53 : 54);
  }
}
function MenuComponent_Conditional_16_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1, "Carregando categorias\u2026");
    \u0275\u0275elementEnd();
  }
}
function MenuComponent_Conditional_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 8);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.categoriesError(), " ");
  }
}
function MenuComponent_Conditional_16_Conditional_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 54);
    \u0275\u0275text(2, "Nenhuma categoria cadastrada.");
    \u0275\u0275elementEnd()();
  }
}
function MenuComponent_Conditional_16_Conditional_2_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 55);
    \u0275\u0275element(3, "span", 56);
    \u0275\u0275elementStart(4, "span", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 47);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 37)(13, "button", 50);
    \u0275\u0275listener("click", function MenuComponent_Conditional_16_Conditional_2_For_16_Template_button_click_13_listener() {
      const category_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEditCategoryModal(category_r11));
    });
    \u0275\u0275elementStart(14, "span", 8);
    \u0275\u0275text(15, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 51);
    \u0275\u0275listener("click", function MenuComponent_Conditional_16_Conditional_2_For_16_Template_button_click_16_listener() {
      const category_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.requestDeleteCategory(category_r11));
    });
    \u0275\u0275elementStart(17, "span", 8);
    \u0275\u0275text(18, "delete_outline");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const category_r11 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", category_r11.color || "var(--color-border)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r11.icon || "restaurant");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r11.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r11.displayOrder);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge--success", category_r11.active)("badge--muted", !category_r11.active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r11.active ? "Ativo" : "Inativo", " ");
  }
}
function MenuComponent_Conditional_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "table", 36)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Categoria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Ordem");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 37);
    \u0275\u0275text(12, "A\xE7\xF5es");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275template(14, MenuComponent_Conditional_16_Conditional_2_Conditional_14_Template, 3, 0, "tr");
    \u0275\u0275repeaterCreate(15, MenuComponent_Conditional_16_Conditional_2_For_16_Template, 19, 10, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275conditional(ctx_r1.categories().length === 0 ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories());
  }
}
function MenuComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MenuComponent_Conditional_16_Conditional_0_Template, 2, 0, "p", 32)(1, MenuComponent_Conditional_16_Conditional_1_Template, 4, 1, "div", 33)(2, MenuComponent_Conditional_16_Conditional_2_Template, 17, 1, "div", 34);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.isLoadingCategories() ? 0 : ctx_r1.categoriesError() ? 1 : 2);
  }
}
function MenuComponent_Conditional_17_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1, "Carregando tema\u2026");
    \u0275\u0275elementEnd();
  }
}
function MenuComponent_Conditional_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 8);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.themeError(), " ");
  }
}
function MenuComponent_Conditional_17_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 63);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.coverPreviewUrl(), \u0275\u0275sanitizeUrl);
  }
}
function MenuComponent_Conditional_17_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "image");
    \u0275\u0275elementEnd();
  }
}
function MenuComponent_Conditional_17_Conditional_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.coverError());
  }
}
function MenuComponent_Conditional_17_Conditional_2_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1, "Informe uma cor v\xE1lida.");
    \u0275\u0275elementEnd();
  }
}
function MenuComponent_Conditional_17_Conditional_2_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const font_r13 = ctx.$implicit;
    \u0275\u0275property("value", font_r13.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(font_r13.label);
  }
}
function MenuComponent_Conditional_17_Conditional_2_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1, "Selecione uma fonte.");
    \u0275\u0275elementEnd();
  }
}
function MenuComponent_Conditional_17_Conditional_2_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "span", 8);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Tema atualizado com sucesso. ");
    \u0275\u0275elementEnd();
  }
}
function MenuComponent_Conditional_17_Conditional_2_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 8);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.themeFormError(), " ");
  }
}
function MenuComponent_Conditional_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 58);
    \u0275\u0275listener("submit", function MenuComponent_Conditional_17_Conditional_2_Template_form_submit_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.submitTheme());
    });
    \u0275\u0275elementStart(1, "div", 59)(2, "h3", 60);
    \u0275\u0275text(3, "Capa do card\xE1pio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 61)(5, "div", 62);
    \u0275\u0275template(6, MenuComponent_Conditional_17_Conditional_2_Conditional_6_Template, 1, 1, "img", 63)(7, MenuComponent_Conditional_17_Conditional_2_Conditional_7_Template, 2, 0, "span", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 64)(9, "label", 65);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 66);
    \u0275\u0275listener("change", function MenuComponent_Conditional_17_Conditional_2_Template_input_change_11_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCoverFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 32);
    \u0275\u0275text(13, "JPG, PNG ou WEBP, at\xE9 5MB.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, MenuComponent_Conditional_17_Conditional_2_Conditional_14_Template, 2, 1, "span", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "h3", 60);
    \u0275\u0275text(16, "Cores");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 68)(18, "div", 11)(19, "label", 69);
    \u0275\u0275text(20, "Cor prim\xE1ria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 13);
    \u0275\u0275element(22, "input", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, MenuComponent_Conditional_17_Conditional_2_Conditional_23_Template, 2, 0, "span", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 11)(25, "label", 71);
    \u0275\u0275element(26, "input", 72);
    \u0275\u0275text(27, " Usar cor secund\xE1ria ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 13);
    \u0275\u0275element(29, "input", 73);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "h3", 60);
    \u0275\u0275text(31, "Fonte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 11)(33, "label", 74);
    \u0275\u0275text(34, "Fonte da p\xE1gina do card\xE1pio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 13)(36, "select", 75);
    \u0275\u0275repeaterCreate(37, MenuComponent_Conditional_17_Conditional_2_For_38_Template, 2, 2, "option", 16, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(39, MenuComponent_Conditional_17_Conditional_2_Conditional_39_Template, 2, 0, "span", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, MenuComponent_Conditional_17_Conditional_2_Conditional_40_Template, 4, 0, "div", 76)(41, MenuComponent_Conditional_17_Conditional_2_Conditional_41_Template, 4, 1, "div", 33);
    \u0275\u0275elementStart(42, "div", 77)(43, "button", 78);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.themeForm);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.coverPreviewUrl() ? 6 : 7);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isUploadingCover() ? "Enviando\u2026" : "Escolher capa", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isUploadingCover());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.coverError() ? 14 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.themeForm.controls.primaryColor.invalid && ctx_r1.themeForm.controls.primaryColor.touched ? 23 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("field__input--disabled", !ctx_r1.themeForm.controls.useSecondaryColor.value);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.fontOptions);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.themeForm.controls.fontFamily.invalid && ctx_r1.themeForm.controls.fontFamily.touched ? 39 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.themeSuccess() ? 40 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.themeFormError() ? 41 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSubmittingTheme());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSubmittingTheme() ? "Salvando\u2026" : "Salvar", " ");
  }
}
function MenuComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MenuComponent_Conditional_17_Conditional_0_Template, 2, 0, "p", 32)(1, MenuComponent_Conditional_17_Conditional_1_Template, 4, 1, "div", 33)(2, MenuComponent_Conditional_17_Conditional_2_Template, 45, 13, "form", 57);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.isLoadingTheme() ? 0 : ctx_r1.themeError() ? 1 : 2);
  }
}
function MenuComponent_Conditional_18_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r15 = ctx.$implicit;
    \u0275\u0275property("value", category_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(category_r15.name);
  }
}
function MenuComponent_Conditional_18_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1, "Selecione uma categoria.");
    \u0275\u0275elementEnd();
  }
}
function MenuComponent_Conditional_18_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1, "Informe um nome entre 2 e 150 caracteres.");
    \u0275\u0275elementEnd();
  }
}
function MenuComponent_Conditional_18_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1, "Informe um pre\xE7o v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function MenuComponent_Conditional_18_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Hoje no card\xE1pio: ", ctx_r1.formatCurrency(ctx.price), "");
  }
}
function MenuComponent_Conditional_18_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r16 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Hoje no card\xE1pio: ", item_r16.promotionalPrice != null ? ctx_r1.formatCurrency(item_r16.promotionalPrice) : "\u2014", " ");
  }
}
function MenuComponent_Conditional_18_Conditional_54_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122)(1, "span", 123);
    \u0275\u0275text(2, "Pre\xE7o normal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 124)(4, "span");
    \u0275\u0275text(5, "Voc\xEA recebe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 124)(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 125)(14, "span");
    \u0275\u0275text(15, "Pre\xE7o no card\xE1pio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const breakdown_r17 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(breakdown_r17.base));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Taxa Comanda \xDAnica", ctx_r1.feePercentLabel() ? " (" + ctx_r1.feePercentLabel() + "%)" : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("+ ", ctx_r1.formatCurrency(breakdown_r17.fee), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(breakdown_r17.total));
  }
}
function MenuComponent_Conditional_18_Conditional_54_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122)(1, "span", 123);
    \u0275\u0275text(2, "Pre\xE7o promocional");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 124)(4, "span");
    \u0275\u0275text(5, "Voc\xEA recebe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 124)(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 125)(14, "span");
    \u0275\u0275text(15, "Pre\xE7o no card\xE1pio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const breakdown_r18 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(breakdown_r18.base));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Taxa Comanda \xDAnica", ctx_r1.feePercentLabel() ? " (" + ctx_r1.feePercentLabel() + "%)" : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("+ ", ctx_r1.formatCurrency(breakdown_r18.fee), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(breakdown_r18.total));
  }
}
function MenuComponent_Conditional_18_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96);
    \u0275\u0275template(1, MenuComponent_Conditional_18_Conditional_54_Conditional_1_Template, 18, 4, "div", 122)(2, MenuComponent_Conditional_18_Conditional_54_Conditional_2_Template, 18, 4, "div", 122);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_2_0 = ctx_r1.priceBreakdown()) ? 1 : -1, tmp_2_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_3_0 = ctx_r1.promotionalPriceBreakdown()) ? 2 : -1, tmp_3_0);
  }
}
function MenuComponent_Conditional_18_For_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r19 = ctx.$implicit;
    \u0275\u0275property("value", option_r19.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r19.label);
  }
}
function MenuComponent_Conditional_18_Conditional_130_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 127);
    \u0275\u0275element(1, "img", 130);
    \u0275\u0275elementStart(2, "button", 131);
    \u0275\u0275listener("click", function MenuComponent_Conditional_18_Conditional_130_For_4_Template_button_click_2_listener() {
      const image_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeImage(image_r22.id));
    });
    \u0275\u0275elementStart(3, "span", 8);
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const image_r22 = ctx.$implicit;
    const item_r23 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", image_r22.imageUrl, \u0275\u0275sanitizeUrl)("alt", item_r23.name);
  }
}
function MenuComponent_Conditional_18_Conditional_130_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1, "Nenhuma imagem cadastrada.");
    \u0275\u0275elementEnd();
  }
}
function MenuComponent_Conditional_18_Conditional_130_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1, "Enviando imagem\u2026");
    \u0275\u0275elementEnd();
  }
}
function MenuComponent_Conditional_18_Conditional_130_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.imageError());
  }
}
function MenuComponent_Conditional_18_Conditional_130_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h3", 60);
    \u0275\u0275text(1, "Galeria de imagens");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 126);
    \u0275\u0275repeaterCreate(3, MenuComponent_Conditional_18_Conditional_130_For_4_Template, 5, 2, "div", 127, _forTrack0);
    \u0275\u0275template(5, MenuComponent_Conditional_18_Conditional_130_Conditional_5_Template, 2, 0, "p", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 11)(7, "label", 128);
    \u0275\u0275text(8, "Adicionar imagem");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 13)(10, "input", 129);
    \u0275\u0275listener("change", function MenuComponent_Conditional_18_Conditional_130_Template_input_change_10_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onImageFileSelected($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, MenuComponent_Conditional_18_Conditional_130_Conditional_11_Template, 2, 0, "span", 32)(12, MenuComponent_Conditional_18_Conditional_130_Conditional_12_Template, 2, 1, "span", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r23 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(item_r23.images);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r23.images.length === 0 ? 5 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.isUploadingImage());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isUploadingImage() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.imageError() ? 12 : -1);
  }
}
function MenuComponent_Conditional_18_Conditional_131_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 126)(1, "div", 127);
    \u0275\u0275element(2, "img", 132);
    \u0275\u0275elementStart(3, "button", 131);
    \u0275\u0275listener("click", function MenuComponent_Conditional_18_Conditional_131_Conditional_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removePendingImage());
    });
    \u0275\u0275elementStart(4, "span", 8);
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl);
  }
}
function MenuComponent_Conditional_18_Conditional_131_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "label", 128);
    \u0275\u0275text(2, "Adicionar imagem");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13)(4, "input", 133);
    \u0275\u0275listener("change", function MenuComponent_Conditional_18_Conditional_131_Conditional_3_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onImageFileSelected($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 32);
    \u0275\u0275text(6, "A imagem ser\xE1 enviada assim que o produto for salvo.");
    \u0275\u0275elementEnd()();
  }
}
function MenuComponent_Conditional_18_Conditional_131_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.imageError());
  }
}
function MenuComponent_Conditional_18_Conditional_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 60);
    \u0275\u0275text(1, "Imagem");
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, MenuComponent_Conditional_18_Conditional_131_Conditional_2_Template, 6, 1, "div", 126)(3, MenuComponent_Conditional_18_Conditional_131_Conditional_3_Template, 7, 0, "div", 11)(4, MenuComponent_Conditional_18_Conditional_131_Conditional_4_Template, 2, 1, "span", 67);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_2_0 = ctx_r1.pendingImagePreviewUrl()) ? 2 : 3, tmp_2_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.imageError() ? 4 : -1);
  }
}
function MenuComponent_Conditional_18_Conditional_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 8);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.itemFormError(), " ");
  }
}
function MenuComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 79);
    \u0275\u0275listener("click", function MenuComponent_Conditional_18_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 80)(3, "h2", 81);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 82);
    \u0275\u0275listener("click", function MenuComponent_Conditional_18_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeItemModal());
    });
    \u0275\u0275elementStart(6, "span", 8);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "form", 58);
    \u0275\u0275listener("submit", function MenuComponent_Conditional_18_Template_form_submit_8_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.submitItem());
    });
    \u0275\u0275elementStart(9, "h3", 60);
    \u0275\u0275text(10, "Dados b\xE1sicos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 11)(12, "label", 83);
    \u0275\u0275text(13, "Categoria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 84)(15, "select", 85)(16, "option", 86);
    \u0275\u0275text(17, "Selecione uma categoria");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(18, MenuComponent_Conditional_18_For_19_Template, 2, 2, "option", 16, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 87);
    \u0275\u0275listener("click", function MenuComponent_Conditional_18_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreateCategoryModal(true));
    });
    \u0275\u0275elementStart(21, "span", 8);
    \u0275\u0275text(22, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Nova ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, MenuComponent_Conditional_18_Conditional_24_Template, 2, 0, "span", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 11)(26, "label", 88);
    \u0275\u0275text(27, "Nome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 13);
    \u0275\u0275element(29, "input", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, MenuComponent_Conditional_18_Conditional_30_Template, 2, 0, "span", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 11)(32, "label", 90);
    \u0275\u0275text(33, "Descri\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 13);
    \u0275\u0275element(35, "textarea", 91);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "h3", 60);
    \u0275\u0275text(37, "Pre\xE7o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p", 32);
    \u0275\u0275text(39, " Informe o valor que voc\xEA quer receber por este produto \u2014 a taxa da Comanda \xDAnica \xE9 somada automaticamente ao pre\xE7o exibido no card\xE1pio, para o cliente pagar. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 68)(41, "div", 11)(42, "label", 92);
    \u0275\u0275text(43, "Pre\xE7o normal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 13)(45, "input", 93);
    \u0275\u0275listener("input", function MenuComponent_Conditional_18_Template_input_input_45_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPriceInput($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(46, MenuComponent_Conditional_18_Conditional_46_Template, 2, 0, "span", 67)(47, MenuComponent_Conditional_18_Conditional_47_Template, 2, 1, "span", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 11)(49, "label", 94);
    \u0275\u0275text(50, "Pre\xE7o promocional");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 13)(52, "input", 95);
    \u0275\u0275listener("input", function MenuComponent_Conditional_18_Template_input_input_52_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPromotionalPriceInput($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(53, MenuComponent_Conditional_18_Conditional_53_Template, 2, 1, "span", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(54, MenuComponent_Conditional_18_Conditional_54_Template, 3, 2, "div", 96);
    \u0275\u0275elementStart(55, "div", 68)(56, "div", 11)(57, "label", 97);
    \u0275\u0275text(58, "In\xEDcio da promo\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 13);
    \u0275\u0275element(60, "input", 98);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 11)(62, "label", 99);
    \u0275\u0275text(63, "Fim da promo\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 13);
    \u0275\u0275element(65, "input", 100);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "h3", 60);
    \u0275\u0275text(67, "Caracter\xEDsticas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 101)(69, "label", 102);
    \u0275\u0275element(70, "input", 103);
    \u0275\u0275text(71, " Destaque");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "label", 102);
    \u0275\u0275element(73, "input", 104);
    \u0275\u0275text(74, " Novidade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "label", 102);
    \u0275\u0275element(76, "input", 105);
    \u0275\u0275text(77, " Picante");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "label", 102);
    \u0275\u0275element(79, "input", 106);
    \u0275\u0275text(80, " Vegano");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "label", 102);
    \u0275\u0275element(82, "input", 107);
    \u0275\u0275text(83, " Vegetariano");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "label", 102);
    \u0275\u0275element(85, "input", 108);
    \u0275\u0275text(86, " Sem lactose");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "label", 102);
    \u0275\u0275element(88, "input", 109);
    \u0275\u0275text(89, " Sem gl\xFAten");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "label", 102);
    \u0275\u0275element(91, "input", 110);
    \u0275\u0275text(92, " Alco\xF3lico");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "h3", 60);
    \u0275\u0275text(94, "Dados extras");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 68)(96, "div", 11)(97, "label", 111);
    \u0275\u0275text(98, "Calorias");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "div", 13);
    \u0275\u0275element(100, "input", 112);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "div", 11)(102, "label", 113);
    \u0275\u0275text(103, "Peso (kg)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "div", 13);
    \u0275\u0275element(105, "input", 114);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(106, "div", 68)(107, "div", 11)(108, "label", 115);
    \u0275\u0275text(109, "Setor de produ\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "div", 13)(111, "select", 116)(112, "option", 15);
    \u0275\u0275text(113, "Selecione um setor");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(114, MenuComponent_Conditional_18_For_115_Template, 2, 2, "option", 16, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(116, "div", 11)(117, "label", 117);
    \u0275\u0275text(118, "Ordem de exibi\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "div", 13);
    \u0275\u0275element(120, "input", 118);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(121, "h3", 60);
    \u0275\u0275text(122, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "div", 68)(124, "label", 102);
    \u0275\u0275element(125, "input", 119);
    \u0275\u0275text(126, " Ativo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "label", 102);
    \u0275\u0275element(128, "input", 120);
    \u0275\u0275text(129, " Dispon\xEDvel para venda");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(130, MenuComponent_Conditional_18_Conditional_130_Template, 13, 4)(131, MenuComponent_Conditional_18_Conditional_131_Template, 5, 2)(132, MenuComponent_Conditional_18_Conditional_132_Template, 4, 1, "div", 33);
    \u0275\u0275elementStart(133, "div", 77)(134, "button", 78);
    \u0275\u0275text(135);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "button", 121);
    \u0275\u0275listener("click", function MenuComponent_Conditional_18_Template_button_click_136_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeItemModal());
    });
    \u0275\u0275text(137, "Cancelar");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_11_0;
    let tmp_14_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.itemModalMode() === "create" ? "Novo produto" : "Editar produto");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.itemForm);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.itemForm.controls.categoryId.invalid && ctx_r1.itemForm.controls.categoryId.touched);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.categories());
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.itemForm.controls.categoryId.invalid && ctx_r1.itemForm.controls.categoryId.touched ? 24 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.itemForm.controls.name.invalid && ctx_r1.itemForm.controls.name.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.itemForm.controls.name.invalid && ctx_r1.itemForm.controls.name.touched ? 30 : -1);
    \u0275\u0275advance(15);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.itemForm.controls.price.invalid && ctx_r1.itemForm.controls.price.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.itemForm.controls.price.invalid && ctx_r1.itemForm.controls.price.touched ? 46 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_10_0 = ctx_r1.editingItem()) ? 47 : -1, tmp_10_0);
    \u0275\u0275advance(6);
    \u0275\u0275conditional((tmp_11_0 = ctx_r1.editingItem()) ? 53 : -1, tmp_11_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.priceBreakdown() || ctx_r1.promotionalPriceBreakdown() ? 54 : -1);
    \u0275\u0275advance(60);
    \u0275\u0275repeater(ctx_r1.kitchenSectorOptions);
    \u0275\u0275advance(16);
    \u0275\u0275conditional((tmp_14_0 = ctx_r1.itemModalMode() === "edit" && ctx_r1.editingItem()) ? 130 : ctx_r1.itemModalMode() === "create" ? 131 : -1, tmp_14_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.itemFormError() ? 132 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSubmittingItem());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSubmittingItem() ? "Salvando\u2026" : "Salvar", " ");
  }
}
function MenuComponent_Conditional_19_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1, "Informe um nome entre 2 e 100 caracteres.");
    \u0275\u0275elementEnd();
  }
}
function MenuComponent_Conditional_19_Conditional_32_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 154);
    \u0275\u0275listener("click", function MenuComponent_Conditional_19_Conditional_32_For_5_Template_button_click_0_listener() {
      const icon_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectIcon(icon_r29));
    });
    \u0275\u0275elementStart(1, "span", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const icon_r29 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("icon-picker__option--selected", ctx_r1.categoryForm.controls.icon.value === icon_r29);
    \u0275\u0275property("title", icon_r29);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(icon_r29);
  }
}
function MenuComponent_Conditional_19_Conditional_32_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 153);
    \u0275\u0275text(1, "Nenhum \xEDcone encontrado.");
    \u0275\u0275elementEnd();
  }
}
function MenuComponent_Conditional_19_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 148);
    \u0275\u0275listener("click", function MenuComponent_Conditional_19_Conditional_32_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeIconPicker());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 149);
    \u0275\u0275listener("click", function MenuComponent_Conditional_19_Conditional_32_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r27);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "input", 150);
    \u0275\u0275listener("input", function MenuComponent_Conditional_19_Conditional_32_Template_input_input_2_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onIconSearchInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 151);
    \u0275\u0275repeaterCreate(4, MenuComponent_Conditional_19_Conditional_32_For_5_Template, 3, 4, "button", 152, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275template(6, MenuComponent_Conditional_19_Conditional_32_Conditional_6_Template, 2, 0, "p", 153);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.iconSearchTerm());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.filteredIconOptions());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.filteredIconOptions().length === 0 ? 6 : -1);
  }
}
function MenuComponent_Conditional_19_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 8);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.categoryFormError(), " ");
  }
}
function MenuComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 134);
    \u0275\u0275listener("click", function MenuComponent_Conditional_19_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r26);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 80)(3, "h2", 81);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 82);
    \u0275\u0275listener("click", function MenuComponent_Conditional_19_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCategoryModal());
    });
    \u0275\u0275elementStart(6, "span", 8);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "form", 58);
    \u0275\u0275listener("submit", function MenuComponent_Conditional_19_Template_form_submit_8_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.submitCategory());
    });
    \u0275\u0275elementStart(9, "div", 11)(10, "label", 135);
    \u0275\u0275text(11, "Nome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 13);
    \u0275\u0275element(13, "input", 136);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, MenuComponent_Conditional_19_Conditional_14_Template, 2, 0, "span", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 11)(16, "label", 137);
    \u0275\u0275text(17, "Descri\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 13);
    \u0275\u0275element(19, "textarea", 138);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 68)(21, "div", 11)(22, "label", 139);
    \u0275\u0275text(23, "\xCDcone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 140)(25, "button", 141);
    \u0275\u0275listener("click", function MenuComponent_Conditional_19_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleIconPicker());
    });
    \u0275\u0275elementStart(26, "span", 8);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 142);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 143);
    \u0275\u0275text(31, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, MenuComponent_Conditional_19_Conditional_32_Template, 7, 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 11)(34, "label", 144);
    \u0275\u0275text(35, "Cor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 13);
    \u0275\u0275element(37, "input", 145);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 11)(39, "label", 146);
    \u0275\u0275text(40, "Ordem de exibi\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 13);
    \u0275\u0275element(42, "input", 147);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 68)(44, "label", 102);
    \u0275\u0275element(45, "input", 119);
    \u0275\u0275text(46, " Ativa");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(47, MenuComponent_Conditional_19_Conditional_47_Template, 4, 1, "div", 33);
    \u0275\u0275elementStart(48, "div", 77)(49, "button", 78);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 121);
    \u0275\u0275listener("click", function MenuComponent_Conditional_19_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCategoryModal());
    });
    \u0275\u0275text(52, "Cancelar");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.categoryModalMode() === "create" ? "Nova categoria" : "Editar categoria");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.categoryForm);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.categoryForm.controls.name.invalid && ctx_r1.categoryForm.controls.name.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.categoryForm.controls.name.invalid && ctx_r1.categoryForm.controls.name.touched ? 14 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275attribute("aria-expanded", ctx_r1.isIconPickerOpen());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.categoryForm.controls.icon.value || "restaurant");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.categoryForm.controls.icon.value || "Selecionar \xEDcone");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isIconPickerOpen() ? 32 : -1);
    \u0275\u0275advance(15);
    \u0275\u0275conditional(ctx_r1.categoryFormError() ? 47 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSubmittingCategory());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSubmittingCategory() ? "Salvando\u2026" : "Salvar", " ");
  }
}
function MenuComponent_Conditional_20_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 8);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.deleteItemError(), " ");
  }
}
function MenuComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 134);
    \u0275\u0275listener("click", function MenuComponent_Conditional_20_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r30);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h2", 81);
    \u0275\u0275text(3, "Excluir produto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 32);
    \u0275\u0275text(5, " Tem certeza que deseja excluir ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "? Esta a\xE7\xE3o n\xE3o pode ser desfeita. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, MenuComponent_Conditional_20_Conditional_9_Template, 4, 1, "div", 33);
    \u0275\u0275elementStart(10, "div", 77)(11, "button", 155);
    \u0275\u0275listener("click", function MenuComponent_Conditional_20_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDeleteItem());
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 121);
    \u0275\u0275listener("click", function MenuComponent_Conditional_20_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDeleteItem());
    });
    \u0275\u0275text(14, "Cancelar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.name);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.deleteItemError() ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isDeletingItem());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isDeletingItem() ? "Excluindo\u2026" : "Excluir", " ");
  }
}
function MenuComponent_Conditional_21_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 8);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.deleteCategoryError(), " ");
  }
}
function MenuComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 134);
    \u0275\u0275listener("click", function MenuComponent_Conditional_21_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r31);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h2", 81);
    \u0275\u0275text(3, "Excluir categoria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 32);
    \u0275\u0275text(5, " Tem certeza que deseja excluir ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "? Esta a\xE7\xE3o n\xE3o pode ser desfeita. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, MenuComponent_Conditional_21_Conditional_9_Template, 4, 1, "div", 33);
    \u0275\u0275elementStart(10, "div", 77)(11, "button", 155);
    \u0275\u0275listener("click", function MenuComponent_Conditional_21_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDeleteCategory());
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 121);
    \u0275\u0275listener("click", function MenuComponent_Conditional_21_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDeleteCategory());
    });
    \u0275\u0275text(14, "Cancelar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.name);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.deleteCategoryError() ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isDeletingCategory());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isDeletingCategory() ? "Excluindo\u2026" : "Excluir", " ");
  }
}
var PAGE_SIZE = 10;
var MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024;
var ALLOWED_IMAGE_TYPES = ["image/png", "image/jpeg", "image/webp"];
var HEX_COLOR_PATTERN = /^#[0-9A-Fa-f]{6}$/;
var FONT_OPTIONS = [
  { value: "Inter", label: "Inter" },
  { value: "Roboto", label: "Roboto" },
  { value: "Poppins", label: "Poppins" },
  { value: "Montserrat", label: "Montserrat" },
  { value: "Lato", label: "Lato" },
  { value: "Open Sans", label: "Open Sans" },
  { value: "Nunito", label: "Nunito" },
  { value: "Playfair Display", label: "Playfair Display" },
  { value: "Merriweather", label: "Merriweather" },
  { value: "Oswald", label: "Oswald" }
];
var SORT_OPTIONS = [
  { value: "displayOrder", label: "Ordem de exibi\xE7\xE3o" },
  { value: "name", label: "Nome" },
  { value: "price", label: "Pre\xE7o" }
];
var KITCHEN_SECTOR_OPTIONS = [
  { value: "COZINHA", label: "Cozinha" },
  { value: "BAR", label: "Bar" },
  { value: "CONFEITARIA", label: "Confeitaria" },
  { value: "CHAPA", label: "Chapa" },
  { value: "COPA", label: "Copa" },
  { value: "SOBREMESAS", label: "Sobremesas" }
];
var CATEGORY_ICON_OPTIONS = [
  "restaurant",
  "restaurant_menu",
  "local_dining",
  "local_pizza",
  "local_bar",
  "local_cafe",
  "local_drink",
  "fastfood",
  "icecream",
  "cake",
  "cookie",
  "coffee",
  "coffee_maker",
  "bakery_dining",
  "breakfast_dining",
  "brunch_dining",
  "lunch_dining",
  "dinner_dining",
  "egg_alt",
  "kebab_dining",
  "ramen_dining",
  "rice_bowl",
  "set_meal",
  "soup_kitchen",
  "tapas",
  "sports_bar",
  "wine_bar",
  "liquor",
  "emoji_food_beverage",
  "outdoor_grill",
  "blender",
  "takeout_dining",
  "delivery_dining",
  "food_bank",
  "storefront",
  "star",
  "local_fire_department",
  "ac_unit",
  "spa",
  "eco"
];
var MenuComponent = class _MenuComponent {
  fb = new FormBuilder();
  menuItemsService = inject(MenuItemsService);
  menuCategoriesService = inject(MenuCategoriesService);
  menuThemeService = inject(MenuThemeService);
  authService = inject(AuthService);
  selectedCompany = this.authService.selectedCompany;
  sortOptions = SORT_OPTIONS;
  kitchenSectorOptions = KITCHEN_SECTOR_OPTIONS;
  fontOptions = FONT_OPTIONS;
  activeTab = signal("produtos");
  // --- Produtos: listagem/paginação -------------------------------------
  items = signal([]);
  page = signal(0);
  totalPages = signal(0);
  totalElements = signal(0);
  isLast = signal(true);
  isLoadingList = signal(true);
  listError = signal(null);
  pageLabel = computed(() => `P\xE1gina ${this.page() + 1} de ${Math.max(this.totalPages(), 1)}`);
  // --- Produtos: filtros --------------------------------------------------
  filterCategoryId = signal("");
  filterActive = signal("all");
  filterAvailable = signal("all");
  searchName = signal("");
  sortBy = signal("displayOrder");
  sortDirection = signal("ASC");
  searchInput = new Subject();
  // --- Produtos: modal de criar/editar --------------------------------------
  isItemModalOpen = signal(false);
  itemModalMode = signal("create");
  editingItem = signal(null);
  isSubmittingItem = signal(false);
  itemFormError = signal(null);
  itemToDelete = signal(null);
  isDeletingItem = signal(false);
  deleteItemError = signal(null);
  isUploadingImage = signal(false);
  imageError = signal(null);
  pendingImageFile = signal(null);
  pendingImagePreviewUrl = signal(null);
  // Espelham o texto digitado nos campos de preço para recalcular, em tempo real, o valor que o
  // cliente verá no cardápio (valor base + taxa da Comanda Única).
  priceInput = signal("");
  promotionalPriceInput = signal("");
  // Fator de acréscimo da taxa (preço no cardápio ÷ valor base) — a taxa embutida no preço é um
  // percentual puro (ver PlatformFeeCalculator.applyMarkup no backend), então basta a razão de
  // qualquer produto já cadastrado da empresa para projetar o preço de um novo valor.
  markupFactor = computed(() => {
    const candidates = [this.editingItem(), ...this.items()];
    for (const candidate of candidates) {
      if (candidate && candidate.basePrice > 0 && candidate.price > 0) {
        return candidate.price / candidate.basePrice;
      }
    }
    return null;
  });
  feePercentLabel = computed(() => {
    const factor = this.markupFactor();
    return factor == null ? null : this.percentFormatter.format((factor - 1) * 100);
  });
  priceBreakdown = computed(() => this.buildPriceBreakdown(this.priceInput()));
  promotionalPriceBreakdown = computed(() => this.buildPriceBreakdown(this.promotionalPriceInput()));
  itemForm = this.fb.nonNullable.group({
    categoryId: ["", Validators.required],
    name: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
    description: ["", Validators.maxLength(1e3)],
    price: ["", Validators.required],
    promotionalPrice: [""],
    promotionStart: this.fb.control(null),
    promotionEnd: this.fb.control(null),
    active: [true],
    available: [true],
    highlight: [false],
    newItem: [false],
    spicy: [false],
    vegan: [false],
    vegetarian: [false],
    lactoseFree: [false],
    glutenFree: [false],
    alcoholic: [false],
    calories: this.fb.control(null, Validators.min(0)),
    weight: this.fb.control(null, Validators.min(0)),
    kitchenSector: [""],
    displayOrder: this.fb.control(null, Validators.min(0))
  });
  // --- Categorias -----------------------------------------------------------
  categories = signal([]);
  isLoadingCategories = signal(true);
  categoriesError = signal(null);
  isCategoryModalOpen = signal(false);
  categoryModalMode = signal("create");
  editingCategoryId = signal(null);
  isSubmittingCategory = signal(false);
  categoryFormError = signal(null);
  categoryModalReturnsToProductForm = false;
  categoryToDelete = signal(null);
  isDeletingCategory = signal(false);
  deleteCategoryError = signal(null);
  categoryForm = this.fb.nonNullable.group({
    name: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    description: ["", Validators.maxLength(500)],
    icon: ["restaurant", Validators.maxLength(100)],
    color: ["#3b82f6"],
    displayOrder: [0, Validators.min(0)],
    active: [true]
  });
  isIconPickerOpen = signal(false);
  iconSearchTerm = signal("");
  filteredIconOptions = computed(() => {
    const term = this.iconSearchTerm().trim().toLowerCase();
    return term ? CATEGORY_ICON_OPTIONS.filter((icon) => icon.includes(term)) : CATEGORY_ICON_OPTIONS;
  });
  // --- Tema ---------------------------------------------------------------
  isLoadingTheme = signal(true);
  themeError = signal(null);
  isSubmittingTheme = signal(false);
  themeSuccess = signal(false);
  themeFormError = signal(null);
  coverPreviewUrl = signal(null);
  isUploadingCover = signal(false);
  coverError = signal(null);
  themeForm = this.fb.nonNullable.group({
    primaryColor: ["#FF5500", [Validators.required, Validators.pattern(HEX_COLOR_PATTERN)]],
    useSecondaryColor: [false],
    secondaryColor: ["#000000", [Validators.pattern(HEX_COLOR_PATTERN)]],
    fontFamily: ["Inter", [Validators.required, Validators.maxLength(60)]]
  });
  currencyFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
  percentFormatter = new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 2 });
  constructor() {
    this.searchInput.pipe(debounceTime(400), distinctUntilChanged()).subscribe((value) => {
      this.searchName.set(value);
      this.loadItems(0);
    });
    this.loadCategories();
    this.loadItems(0);
    this.loadTheme();
  }
  // --- Abas -------------------------------------------------------------
  setActiveTab(tab) {
    this.activeTab.set(tab);
  }
  // --- Formatação ---------------------------------------------------------
  formatCurrency(value) {
    return value != null ? this.currencyFormatter.format(value) : "\u2014";
  }
  isPromotionActive(item) {
    if (item.promotionalPrice == null) {
      return false;
    }
    const now = Date.now();
    if (item.promotionStart && apiDateTime(item.promotionStart) > now) {
      return false;
    }
    if (item.promotionEnd && apiDateTime(item.promotionEnd) < now) {
      return false;
    }
    return true;
  }
  categoryName(categoryId) {
    return this.categories().find((category) => category.id === categoryId)?.name ?? "\u2014";
  }
  // --- Produtos: listagem -------------------------------------------------
  loadItems(page) {
    this.isLoadingList.set(true);
    this.listError.set(null);
    const params = {
      categoryId: this.filterCategoryId() || void 0,
      active: this.filterActive() === "all" ? void 0 : this.filterActive() === "true",
      available: this.filterAvailable() === "all" ? void 0 : this.filterAvailable() === "true",
      name: this.searchName() || void 0,
      page,
      size: PAGE_SIZE,
      sortBy: this.sortBy(),
      sortDirection: this.sortDirection()
    };
    this.menuItemsService.list(params).subscribe({
      next: (response) => {
        this.items.set(response.content);
        this.page.set(response.page);
        this.totalPages.set(response.totalPages);
        this.totalElements.set(response.totalElements);
        this.isLast.set(response.last);
        this.isLoadingList.set(false);
      },
      error: () => {
        this.isLoadingList.set(false);
        this.listError.set("N\xE3o foi poss\xEDvel carregar os produtos.");
      }
    });
  }
  goToPage(page) {
    if (page < 0 || page >= this.totalPages() || page === this.page()) {
      return;
    }
    this.loadItems(page);
  }
  previousPage() {
    this.goToPage(this.page() - 1);
  }
  nextPage() {
    this.goToPage(this.page() + 1);
  }
  // --- Produtos: filtros ----------------------------------------------------
  onSearchInput(event) {
    const input = event.target;
    this.searchInput.next(input.value);
  }
  setCategoryFilter(value) {
    this.filterCategoryId.set(value);
    this.loadItems(0);
  }
  setActiveFilter(value) {
    this.filterActive.set(value);
    this.loadItems(0);
  }
  setAvailableFilter(value) {
    this.filterAvailable.set(value);
    this.loadItems(0);
  }
  setSortBy(value) {
    this.sortBy.set(value);
    this.loadItems(0);
  }
  toggleSortDirection() {
    this.sortDirection.set(this.sortDirection() === "ASC" ? "DESC" : "ASC");
    this.loadItems(0);
  }
  resetFilters() {
    this.filterCategoryId.set("");
    this.filterActive.set("all");
    this.filterAvailable.set("all");
    this.searchName.set("");
    this.sortBy.set("displayOrder");
    this.sortDirection.set("ASC");
    this.loadItems(0);
  }
  // --- Produtos: modal de criar/editar --------------------------------------
  openCreateItemModal() {
    this.itemModalMode.set("create");
    this.editingItem.set(null);
    this.itemFormError.set(null);
    this.imageError.set(null);
    this.clearPendingImage();
    this.itemForm.reset({
      categoryId: "",
      name: "",
      description: "",
      price: "",
      promotionalPrice: "",
      promotionStart: null,
      promotionEnd: null,
      active: true,
      available: true,
      highlight: false,
      newItem: false,
      spicy: false,
      vegan: false,
      vegetarian: false,
      lactoseFree: false,
      glutenFree: false,
      alcoholic: false,
      calories: null,
      weight: null,
      kitchenSector: "",
      displayOrder: null
    });
    this.priceInput.set("");
    this.promotionalPriceInput.set("");
    this.isItemModalOpen.set(true);
  }
  openEditItemModal(item) {
    this.itemModalMode.set("edit");
    this.editingItem.set(item);
    this.itemFormError.set(null);
    this.imageError.set(null);
    this.clearPendingImage();
    this.itemForm.reset({
      categoryId: item.categoryId,
      name: item.name,
      description: item.description ?? "",
      // O formulário edita sempre o valor BASE (o que o lojista recebe) — o preço com taxa
      // embutida (item.price) é calculado pelo backend e só exibido, não editado diretamente.
      price: this.toMaskedCurrency(item.basePrice),
      promotionalPrice: this.toMaskedCurrency(item.basePromotionalPrice),
      promotionStart: apiToBrDateTimeLocal(item.promotionStart),
      promotionEnd: apiToBrDateTimeLocal(item.promotionEnd),
      active: item.active,
      available: item.available,
      highlight: item.highlight,
      newItem: item.newItem,
      spicy: item.spicy,
      vegan: item.vegan,
      vegetarian: item.vegetarian,
      lactoseFree: item.lactoseFree,
      glutenFree: item.glutenFree,
      alcoholic: item.alcoholic,
      calories: item.calories ?? null,
      weight: item.weight ?? null,
      kitchenSector: item.kitchenSector ?? "",
      displayOrder: item.displayOrder
    });
    this.priceInput.set(this.toMaskedCurrency(item.basePrice));
    this.promotionalPriceInput.set(this.toMaskedCurrency(item.basePromotionalPrice));
    this.isItemModalOpen.set(true);
  }
  closeItemModal() {
    this.isItemModalOpen.set(false);
    this.clearPendingImage();
  }
  submitItem() {
    if (this.itemForm.invalid) {
      this.itemForm.markAllAsTouched();
      this.itemFormError.set("Verifique os campos destacados antes de salvar.");
      autoDismiss(this.itemFormError, null);
      return;
    }
    this.itemFormError.set(null);
    this.isSubmittingItem.set(true);
    if (this.itemModalMode() === "create") {
      this.menuItemsService.create(this.buildItemPayload()).subscribe({
        next: (created) => {
          const pendingFile = this.pendingImageFile();
          this.clearPendingImage();
          if (!pendingFile) {
            this.isSubmittingItem.set(false);
            this.isItemModalOpen.set(false);
            this.loadItems(0);
            return;
          }
          this.itemModalMode.set("edit");
          this.editingItem.set(created);
          this.isUploadingImage.set(true);
          this.menuItemsService.addImage(created.id, pendingFile).subscribe({
            next: () => {
              this.isSubmittingItem.set(false);
              this.isUploadingImage.set(false);
              this.isItemModalOpen.set(false);
              this.loadItems(0);
            },
            error: (error) => {
              this.isSubmittingItem.set(false);
              this.isUploadingImage.set(false);
              this.imageError.set(this.resolveErrorMessage(error, "item"));
              this.loadItems(0);
            }
          });
        },
        error: (error) => {
          this.isSubmittingItem.set(false);
          this.itemFormError.set(this.resolveErrorMessage(error, "item"));
          autoDismiss(this.itemFormError, null);
        }
      });
      return;
    }
    const item = this.editingItem();
    if (!item) {
      return;
    }
    this.menuItemsService.update(item.id, this.buildItemPayload()).subscribe({
      next: (updated) => {
        this.isSubmittingItem.set(false);
        this.isItemModalOpen.set(false);
        this.replaceItem(updated);
      },
      error: (error) => {
        this.isSubmittingItem.set(false);
        this.itemFormError.set(this.resolveErrorMessage(error, "item"));
        autoDismiss(this.itemFormError, null);
      }
    });
  }
  requestDeleteItem(item) {
    this.deleteItemError.set(null);
    this.itemToDelete.set(item);
  }
  cancelDeleteItem() {
    this.itemToDelete.set(null);
  }
  confirmDeleteItem() {
    const item = this.itemToDelete();
    if (!item) {
      return;
    }
    this.isDeletingItem.set(true);
    this.deleteItemError.set(null);
    this.menuItemsService.delete(item.id).subscribe({
      next: () => {
        this.isDeletingItem.set(false);
        this.itemToDelete.set(null);
        this.loadItems(this.isLast() && this.items().length === 1 && this.page() > 0 ? this.page() - 1 : this.page());
      },
      error: (error) => {
        this.isDeletingItem.set(false);
        this.deleteItemError.set(this.resolveErrorMessage(error, "item"));
        autoDismiss(this.deleteItemError, null);
      }
    });
  }
  // --- Produtos: ações rápidas ---------------------------------------------
  toggleStatus(item) {
    this.menuItemsService.updateStatus(item.id, !item.active).subscribe({
      next: (updated) => this.replaceItem(updated),
      error: () => this.listError.set("N\xE3o foi poss\xEDvel atualizar o status do produto.")
    });
  }
  toggleAvailability(item) {
    this.menuItemsService.updateAvailability(item.id, !item.available).subscribe({
      next: (updated) => this.replaceItem(updated),
      error: () => this.listError.set("N\xE3o foi poss\xEDvel atualizar a disponibilidade do produto.")
    });
  }
  toggleHighlight(item) {
    this.menuItemsService.updateHighlight(item.id, !item.highlight).subscribe({
      next: (updated) => this.replaceItem(updated),
      error: () => this.listError.set("N\xE3o foi poss\xEDvel atualizar o destaque do produto.")
    });
  }
  replaceItem(updated) {
    this.items.update((list) => list.map((current) => current.id === updated.id ? updated : current));
    if (this.editingItem()?.id === updated.id) {
      this.editingItem.set(updated);
    }
  }
  // --- Produtos: galeria de imagens -----------------------------------------
  onImageFileSelected(event) {
    const input = event.target;
    const file = input.files?.[0];
    input.value = "";
    if (!file) {
      return;
    }
    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      this.imageError.set("Envie uma imagem nos formatos JPG, PNG ou WEBP.");
      return;
    }
    if (file.size > MAX_IMAGE_SIZE_BYTES) {
      this.imageError.set("O arquivo enviado excede o tamanho m\xE1ximo permitido de 5MB.");
      return;
    }
    this.imageError.set(null);
    if (this.itemModalMode() === "create") {
      this.clearPendingImage();
      this.pendingImageFile.set(file);
      this.pendingImagePreviewUrl.set(URL.createObjectURL(file));
      return;
    }
    const item = this.editingItem();
    if (!item) {
      return;
    }
    this.isUploadingImage.set(true);
    this.menuItemsService.addImage(item.id, file).subscribe({
      next: (updated) => {
        this.isUploadingImage.set(false);
        this.replaceItem(updated);
      },
      error: (error) => {
        this.isUploadingImage.set(false);
        this.imageError.set(this.resolveErrorMessage(error, "item"));
      }
    });
  }
  removePendingImage() {
    this.clearPendingImage();
  }
  clearPendingImage() {
    const currentPreviewUrl = this.pendingImagePreviewUrl();
    if (currentPreviewUrl) {
      URL.revokeObjectURL(currentPreviewUrl);
    }
    this.pendingImageFile.set(null);
    this.pendingImagePreviewUrl.set(null);
  }
  removeImage(imageId) {
    const item = this.editingItem();
    if (!item) {
      return;
    }
    this.imageError.set(null);
    this.menuItemsService.removeImage(item.id, imageId).subscribe({
      next: (updated) => this.replaceItem(updated),
      error: (error) => this.imageError.set(this.resolveErrorMessage(error, "item"))
    });
  }
  buildItemPayload() {
    const value = this.itemForm.getRawValue();
    return {
      categoryId: value.categoryId,
      name: value.name.trim(),
      description: value.description.trim() || void 0,
      // O campo digitado é sempre o valor BASE (o que o lojista recebe) — o backend calcula e
      // devolve o preço final com a taxa da plataforma embutida (ver MenuItemResponse.price).
      basePrice: parseCurrencyInput(value.price) ?? 0,
      basePromotionalPrice: parseCurrencyInput(value.promotionalPrice) ?? void 0,
      promotionStart: brDateTimeLocalToApi(value.promotionStart),
      promotionEnd: brDateTimeLocalToApi(value.promotionEnd),
      active: value.active,
      available: value.available,
      highlight: value.highlight,
      newItem: value.newItem,
      spicy: value.spicy,
      vegan: value.vegan,
      vegetarian: value.vegetarian,
      lactoseFree: value.lactoseFree,
      glutenFree: value.glutenFree,
      alcoholic: value.alcoholic,
      calories: value.calories ?? void 0,
      weight: value.weight ?? void 0,
      kitchenSector: value.kitchenSector || void 0,
      displayOrder: value.displayOrder ?? void 0
    };
  }
  toMaskedCurrency(value) {
    return value != null ? formatCurrencyInput(String(Math.round(value * 100))) : "";
  }
  onPriceInput(event) {
    const input = event.target;
    const masked = formatCurrencyInput(input.value);
    this.itemForm.controls.price.setValue(masked);
    this.priceInput.set(masked);
  }
  onPromotionalPriceInput(event) {
    const input = event.target;
    const masked = formatCurrencyInput(input.value);
    this.itemForm.controls.promotionalPrice.setValue(masked);
    this.promotionalPriceInput.set(masked);
  }
  // Valor base + taxa projetados a partir do texto digitado. Retorna null enquanto não houver um
  // valor digitado ou uma referência de taxa (empresa sem nenhum produto cadastrado).
  buildPriceBreakdown(maskedValue) {
    const factor = this.markupFactor();
    const base = parseCurrencyInput(maskedValue);
    if (factor == null || base == null) {
      return null;
    }
    const total = Math.round(base * factor * 100) / 100;
    return { base, fee: Math.round((total - base) * 100) / 100, total };
  }
  // Taxa embutida no preço exibido de um produto já cadastrado (preço no cardápio − valor base).
  feeAmount(item) {
    return Math.round((item.price - item.basePrice) * 100) / 100;
  }
  // --- Categorias -------------------------------------------------------
  loadCategories() {
    this.isLoadingCategories.set(true);
    this.categoriesError.set(null);
    this.menuCategoriesService.list().subscribe({
      next: (categories) => {
        this.categories.set(categories);
        this.isLoadingCategories.set(false);
      },
      error: () => {
        this.isLoadingCategories.set(false);
        this.categoriesError.set("N\xE3o foi poss\xEDvel carregar as categorias.");
      }
    });
  }
  openCreateCategoryModal(fromProductForm = false) {
    this.categoryModalMode.set("create");
    this.editingCategoryId.set(null);
    this.categoryFormError.set(null);
    this.categoryModalReturnsToProductForm = fromProductForm;
    this.categoryForm.reset({
      name: "",
      description: "",
      icon: "restaurant",
      color: "#3b82f6",
      displayOrder: 0,
      active: true
    });
    this.closeIconPicker();
    this.isCategoryModalOpen.set(true);
  }
  openEditCategoryModal(category) {
    this.categoryModalMode.set("edit");
    this.editingCategoryId.set(category.id);
    this.categoryFormError.set(null);
    this.categoryModalReturnsToProductForm = false;
    this.categoryForm.reset({
      name: category.name,
      description: category.description ?? "",
      icon: category.icon ?? "",
      color: category.color ?? "#3b82f6",
      displayOrder: category.displayOrder,
      active: category.active
    });
    this.closeIconPicker();
    this.isCategoryModalOpen.set(true);
  }
  closeCategoryModal() {
    this.isCategoryModalOpen.set(false);
    this.closeIconPicker();
  }
  toggleIconPicker() {
    this.isIconPickerOpen.set(!this.isIconPickerOpen());
  }
  closeIconPicker() {
    this.isIconPickerOpen.set(false);
    this.iconSearchTerm.set("");
  }
  selectIcon(icon) {
    this.categoryForm.controls.icon.setValue(icon);
    this.closeIconPicker();
  }
  onIconSearchInput(event) {
    const input = event.target;
    this.iconSearchTerm.set(input.value);
  }
  submitCategory() {
    if (this.categoryForm.invalid) {
      this.categoryForm.markAllAsTouched();
      this.categoryFormError.set("Verifique os campos destacados antes de salvar.");
      autoDismiss(this.categoryFormError, null);
      return;
    }
    this.categoryFormError.set(null);
    this.isSubmittingCategory.set(true);
    const value = this.categoryForm.getRawValue();
    if (this.categoryModalMode() === "create") {
      const payload2 = {
        name: value.name.trim(),
        description: value.description.trim() || void 0,
        icon: value.icon.trim() || void 0,
        color: value.color || void 0,
        displayOrder: value.displayOrder,
        active: value.active
      };
      this.menuCategoriesService.create(payload2).subscribe({
        next: (created) => {
          this.isSubmittingCategory.set(false);
          this.isCategoryModalOpen.set(false);
          this.loadCategories();
          if (this.categoryModalReturnsToProductForm) {
            this.itemForm.controls.categoryId.setValue(created.id);
          }
        },
        error: (error) => {
          this.isSubmittingCategory.set(false);
          this.categoryFormError.set(this.resolveErrorMessage(error, "category"));
          autoDismiss(this.categoryFormError, null);
        }
      });
      return;
    }
    const categoryId = this.editingCategoryId();
    if (!categoryId) {
      return;
    }
    const payload = {
      name: value.name.trim(),
      description: value.description.trim() || void 0,
      icon: value.icon.trim() || void 0,
      color: value.color || void 0,
      displayOrder: value.displayOrder,
      active: value.active
    };
    this.menuCategoriesService.update(categoryId, payload).subscribe({
      next: () => {
        this.isSubmittingCategory.set(false);
        this.isCategoryModalOpen.set(false);
        this.loadCategories();
      },
      error: (error) => {
        this.isSubmittingCategory.set(false);
        this.categoryFormError.set(this.resolveErrorMessage(error, "category"));
        autoDismiss(this.categoryFormError, null);
      }
    });
  }
  requestDeleteCategory(category) {
    this.deleteCategoryError.set(null);
    this.categoryToDelete.set(category);
  }
  cancelDeleteCategory() {
    this.categoryToDelete.set(null);
  }
  confirmDeleteCategory() {
    const category = this.categoryToDelete();
    if (!category) {
      return;
    }
    this.isDeletingCategory.set(true);
    this.deleteCategoryError.set(null);
    this.menuCategoriesService.delete(category.id).subscribe({
      next: () => {
        this.isDeletingCategory.set(false);
        this.categoryToDelete.set(null);
        this.loadCategories();
      },
      error: (error) => {
        this.isDeletingCategory.set(false);
        this.deleteCategoryError.set(this.resolveErrorMessage(error, "category"));
        autoDismiss(this.deleteCategoryError, null);
      }
    });
  }
  // --- Tema -----------------------------------------------------------------
  loadTheme() {
    this.isLoadingTheme.set(true);
    this.themeError.set(null);
    this.menuThemeService.get().subscribe({
      next: (response) => {
        this.isLoadingTheme.set(false);
        this.applyThemeResponse(response);
      },
      error: () => {
        this.isLoadingTheme.set(false);
        this.themeError.set("N\xE3o foi poss\xEDvel carregar o tema do card\xE1pio.");
      }
    });
  }
  submitTheme() {
    if (this.themeForm.invalid) {
      this.themeForm.markAllAsTouched();
      this.themeFormError.set("Verifique os campos destacados antes de salvar.");
      autoDismiss(this.themeFormError, null);
      return;
    }
    this.themeFormError.set(null);
    this.themeSuccess.set(false);
    this.isSubmittingTheme.set(true);
    this.menuThemeService.update(this.buildThemePayload()).subscribe({
      next: (response) => {
        this.isSubmittingTheme.set(false);
        this.themeSuccess.set(true);
        autoDismiss(this.themeSuccess, false);
        this.applyThemeResponse(response);
      },
      error: (error) => {
        this.isSubmittingTheme.set(false);
        this.themeFormError.set(this.resolveThemeErrorMessage(error));
        autoDismiss(this.themeFormError, null);
      }
    });
  }
  onCoverFileSelected(event) {
    const input = event.target;
    const file = input.files?.[0];
    input.value = "";
    if (!file) {
      return;
    }
    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      this.coverError.set("Envie uma imagem nos formatos JPG, PNG ou WEBP.");
      return;
    }
    if (file.size > MAX_IMAGE_SIZE_BYTES) {
      this.coverError.set("O arquivo enviado excede o tamanho m\xE1ximo permitido de 5MB.");
      return;
    }
    this.coverError.set(null);
    const previousPreview = this.coverPreviewUrl();
    const objectUrl = URL.createObjectURL(file);
    this.coverPreviewUrl.set(objectUrl);
    this.isUploadingCover.set(true);
    this.menuThemeService.updateCover(file).subscribe({
      next: (response) => {
        this.isUploadingCover.set(false);
        URL.revokeObjectURL(objectUrl);
        this.applyThemeResponse(response);
      },
      error: (error) => {
        this.isUploadingCover.set(false);
        URL.revokeObjectURL(objectUrl);
        this.coverPreviewUrl.set(previousPreview);
        this.coverError.set(this.resolveThemeErrorMessage(error));
      }
    });
  }
  applyThemeResponse(response) {
    this.themeForm.reset({
      primaryColor: response.primaryColor || "#FF5500",
      useSecondaryColor: !!response.secondaryColor,
      secondaryColor: response.secondaryColor || "#000000",
      fontFamily: response.fontFamily || "Inter"
    });
    this.coverPreviewUrl.set(response.coverImageUrl ?? null);
  }
  buildThemePayload() {
    const value = this.themeForm.getRawValue();
    return {
      primaryColor: value.primaryColor,
      secondaryColor: value.useSecondaryColor ? value.secondaryColor : void 0,
      fontFamily: value.fontFamily.trim()
    };
  }
  resolveThemeErrorMessage(error) {
    const body = error.error;
    if (body?.mensagem) {
      return body.mensagem;
    }
    if (body?.titulo) {
      return body.titulo;
    }
    if (error.status === 403) {
      return "Voc\xEA n\xE3o tem permiss\xE3o para alterar o tema do card\xE1pio.";
    }
    if (error.status === 422) {
      return "Verifique os dados informados e tente novamente.";
    }
    return "N\xE3o foi poss\xEDvel concluir a opera\xE7\xE3o. Tente novamente em instantes.";
  }
  // --- Erros ---------------------------------------------------------------
  resolveErrorMessage(error, domain) {
    const body = error.error;
    if (body?.mensagem) {
      return body.mensagem;
    }
    if (body?.titulo) {
      return body.titulo;
    }
    if (domain === "item") {
      if (error.status === 409) {
        return "J\xE1 existe um produto com este SKU nesta empresa.";
      }
      if (error.status === 404) {
        return "Produto ou categoria informada n\xE3o encontrada nesta empresa.";
      }
    } else {
      if (error.status === 409) {
        return "Existem produtos vinculados a esta categoria. Mova ou remova os produtos antes de exclu\xED-la.";
      }
      if (error.status === 404) {
        return "Categoria n\xE3o encontrada nesta empresa.";
      }
    }
    if (error.status === 403) {
      return "Voc\xEA n\xE3o tem permiss\xE3o para realizar esta a\xE7\xE3o.";
    }
    if (error.status === 422) {
      return "Verifique os dados informados e tente novamente.";
    }
    return "N\xE3o foi poss\xEDvel concluir a opera\xE7\xE3o. Tente novamente em instantes.";
  }
  static \u0275fac = function MenuComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuComponent, selectors: [["app-admin-menu"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 13, consts: [[1, "page-header", "page-header--row"], [1, "page-title"], [1, "page-subtitle"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary"], [1, "tabs"], ["type", "button", 1, "tabs__item", 3, "click"], [1, "modal-backdrop"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", 3, "click"], ["aria-hidden", "true", 1, "material-icons"], [1, "card", "filters-card"], [1, "filters-row"], [1, "field"], ["for", "filter-category", 1, "field__label"], [1, "field__control"], ["id", "filter-category", 1, "field__input", 3, "change", "value"], ["value", ""], [3, "value"], ["for", "filter-active", 1, "field__label"], ["id", "filter-active", 1, "field__input", 3, "change", "value"], ["value", "all"], ["value", "true"], ["value", "false"], ["for", "filter-available", 1, "field__label"], ["id", "filter-available", 1, "field__input", 3, "change", "value"], ["for", "filter-sort", 1, "field__label"], [1, "field__control", "filters-row__sort"], ["id", "filter-sort", 1, "field__input", 3, "change", "value"], ["type", "button", 1, "icon-btn", 3, "click", "title"], [1, "field", "filters-row__search"], ["for", "filter-search", 1, "field__label"], ["id", "filter-search", "type", "text", "placeholder", "Nome do produto", 1, "field__input", 3, "input", "value"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", "filters-row__reset", 3, "click"], [1, "field__hint"], ["role", "alert", 1, "form-alert", "form-alert--error"], [1, "card", "table-card"], [1, "table-wrapper"], [1, "data-table"], [1, "data-table__actions-col"], [1, "pagination"], [1, "pagination__info"], [1, "pagination__controls"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click", "disabled"], ["colspan", "8", 1, "data-table__empty"], [1, "item-thumb", 3, "src", "alt"], ["aria-hidden", "true", 1, "item-thumb", "item-thumb--placeholder", "material-icons"], [1, "price-base-hint"], ["type", "button", "title", "Alternar status", 1, "badge-btn", 3, "click"], [1, "badge"], ["type", "button", "title", "Alternar disponibilidade", 1, "badge-btn", 3, "click"], ["type", "button", "title", "Alternar destaque", 1, "icon-btn", 3, "click"], ["type", "button", "title", "Editar", 1, "icon-btn", 3, "click"], ["type", "button", "title", "Excluir", 1, "icon-btn", "icon-btn--danger", 3, "click"], [1, "price-old"], [1, "price-promo"], ["colspan", "4", 1, "data-table__empty"], [1, "category-chip"], [1, "category-chip__dot"], ["novalidate", "", 3, "formGroup"], ["novalidate", "", 3, "submit", "formGroup"], [1, "card", "theme-card"], [1, "form-section-title"], [1, "image-upload"], [1, "image-upload__preview", "image-upload__preview--cover"], ["alt", "", 3, "src"], [1, "image-upload__actions"], ["for", "theme-cover-input", 1, "btn", "btn--ghost", "btn--sm"], ["id", "theme-cover-input", "type", "file", "accept", "image/jpeg,image/png,image/webp", "hidden", "", 3, "change", "disabled"], [1, "field__error"], [1, "field__row"], ["for", "theme-primary-color", 1, "field__label"], ["id", "theme-primary-color", "type", "color", "formControlName", "primaryColor", 1, "field__input", "field__input--color"], ["for", "theme-use-secondary-color", 1, "field__checkbox"], ["id", "theme-use-secondary-color", "type", "checkbox", "formControlName", "useSecondaryColor"], ["id", "theme-secondary-color", "type", "color", "formControlName", "secondaryColor", 1, "field__input", "field__input--color"], ["for", "theme-font-family", 1, "field__label"], ["id", "theme-font-family", "formControlName", "fontFamily", 1, "field__input"], ["role", "status", 1, "form-alert", "form-alert--success"], [1, "step-actions"], ["type", "submit", "appRipple", "", 1, "btn", "btn--primary", 3, "disabled"], [1, "modal-card", "card", 3, "click"], [1, "modal-card__header"], [1, "step-heading"], ["type", "button", "aria-label", "Fechar", 1, "icon-btn", 3, "click"], ["for", "item-category", 1, "field__label"], [1, "field__control", "field__control--with-action"], ["id", "item-category", "formControlName", "categoryId", 1, "field__input"], ["value", "", "disabled", ""], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], ["for", "item-name", 1, "field__label"], ["id", "item-name", "type", "text", "formControlName", "name", "placeholder", "Nome do produto", 1, "field__input"], ["for", "item-description", 1, "field__label"], ["id", "item-description", "rows", "3", "formControlName", "description", "placeholder", "Descri\xE7\xE3o do produto (opcional)", 1, "field__input"], ["for", "item-price", 1, "field__label"], ["id", "item-price", "type", "text", "inputmode", "decimal", "formControlName", "price", "placeholder", "R$ 0,00", 1, "field__input", 3, "input"], ["for", "item-promotional-price", 1, "field__label"], ["id", "item-promotional-price", "type", "text", "inputmode", "decimal", "formControlName", "promotionalPrice", "placeholder", "Opcional", 1, "field__input", 3, "input"], [1, "price-preview"], ["for", "item-promotion-start", 1, "field__label"], ["id", "item-promotion-start", "type", "datetime-local", "formControlName", "promotionStart", 1, "field__input"], ["for", "item-promotion-end", 1, "field__label"], ["id", "item-promotion-end", "type", "datetime-local", "formControlName", "promotionEnd", 1, "field__input"], [1, "field__row", "field__row--checkboxes"], [1, "field__checkbox"], ["type", "checkbox", "formControlName", "highlight"], ["type", "checkbox", "formControlName", "newItem"], ["type", "checkbox", "formControlName", "spicy"], ["type", "checkbox", "formControlName", "vegan"], ["type", "checkbox", "formControlName", "vegetarian"], ["type", "checkbox", "formControlName", "lactoseFree"], ["type", "checkbox", "formControlName", "glutenFree"], ["type", "checkbox", "formControlName", "alcoholic"], ["for", "item-calories", 1, "field__label"], ["id", "item-calories", "type", "number", "min", "0", "formControlName", "calories", "placeholder", "Opcional", 1, "field__input"], ["for", "item-weight", 1, "field__label"], ["id", "item-weight", "type", "number", "step", "0.01", "min", "0", "formControlName", "weight", "placeholder", "Opcional", 1, "field__input"], ["for", "item-kitchen-sector", 1, "field__label"], ["id", "item-kitchen-sector", "formControlName", "kitchenSector", 1, "field__input"], ["for", "item-display-order", 1, "field__label"], ["id", "item-display-order", "type", "number", "min", "0", "formControlName", "displayOrder", "placeholder", "0", 1, "field__input"], ["type", "checkbox", "formControlName", "active"], ["type", "checkbox", "formControlName", "available"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], [1, "price-preview__group"], [1, "price-preview__title"], [1, "price-preview__line"], [1, "price-preview__line", "price-preview__line--total"], [1, "gallery"], [1, "gallery__item"], ["for", "item-image-upload", 1, "field__label"], ["id", "item-image-upload", "type", "file", "accept", "image/png,image/jpeg,image/webp", 1, "field__input", 3, "change", "disabled"], [3, "src", "alt"], ["type", "button", "title", "Remover imagem", 1, "icon-btn", "icon-btn--danger", "gallery__remove", 3, "click"], ["alt", "Pr\xE9-visualiza\xE7\xE3o da imagem do produto", 3, "src"], ["id", "item-image-upload", "type", "file", "accept", "image/png,image/jpeg,image/webp", 1, "field__input", 3, "change"], [1, "modal-card", "modal-card--sm", "card", 3, "click"], ["for", "category-name", 1, "field__label"], ["id", "category-name", "type", "text", "formControlName", "name", "placeholder", "Ex: Bebidas, Sobremesas", 1, "field__input"], ["for", "category-description", 1, "field__label"], ["id", "category-description", "rows", "2", "formControlName", "description", "placeholder", "Opcional", 1, "field__input"], ["id", "category-icon-label", 1, "field__label"], [1, "field__control", "icon-picker"], ["type", "button", "aria-haspopup", "true", "aria-labelledby", "category-icon-label", 1, "icon-picker__trigger", 3, "click"], [1, "icon-picker__trigger-label"], ["aria-hidden", "true", 1, "material-icons", "icon-picker__chevron"], ["for", "category-color", 1, "field__label"], ["id", "category-color", "type", "color", "formControlName", "color", 1, "field__input", "field__input--color"], ["for", "category-display-order", 1, "field__label"], ["id", "category-display-order", "type", "number", "min", "0", "formControlName", "displayOrder", 1, "field__input"], [1, "icon-picker__overlay", 3, "click"], [1, "icon-picker__panel", 3, "click"], ["type", "text", "placeholder", "Buscar \xEDcone\u2026", 1, "field__input", "icon-picker__search", 3, "input", "value"], [1, "icon-picker__grid"], ["type", "button", 1, "icon-picker__option", 3, "icon-picker__option--selected", "title"], [1, "field__hint", "icon-picker__empty"], ["type", "button", 1, "icon-picker__option", 3, "click", "title"], ["type", "button", 1, "btn", "btn--danger", 3, "click", "disabled"]], template: function MenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Card\xE1pio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, MenuComponent_Conditional_6_Template, 4, 0, "button", 3)(7, MenuComponent_Conditional_7_Template, 4, 0, "button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 4)(9, "button", 5);
      \u0275\u0275listener("click", function MenuComponent_Template_button_click_9_listener() {
        return ctx.setActiveTab("produtos");
      });
      \u0275\u0275text(10, " Produtos ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 5);
      \u0275\u0275listener("click", function MenuComponent_Template_button_click_11_listener() {
        return ctx.setActiveTab("categorias");
      });
      \u0275\u0275text(12, " Categorias ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 5);
      \u0275\u0275listener("click", function MenuComponent_Template_button_click_13_listener() {
        return ctx.setActiveTab("tema");
      });
      \u0275\u0275text(14, " Tema ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(15, MenuComponent_Conditional_15_Template, 55, 8)(16, MenuComponent_Conditional_16_Template, 3, 1)(17, MenuComponent_Conditional_17_Template, 3, 1)(18, MenuComponent_Conditional_18_Template, 138, 18, "div", 6)(19, MenuComponent_Conditional_19_Template, 53, 12, "div", 6)(20, MenuComponent_Conditional_20_Template, 15, 4, "div", 6)(21, MenuComponent_Conditional_21_Template, 15, 4, "div", 6);
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_8_0;
      let tmp_9_0;
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" Gerencie os produtos e categorias do card\xE1pio de ", (tmp_0_0 = (tmp_0_0 = ctx.selectedCompany()) == null ? null : tmp_0_0.companyName) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : "sua empresa", ". ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "produtos" ? 6 : ctx.activeTab() === "categorias" ? 7 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("tabs__item--active", ctx.activeTab() === "produtos");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("tabs__item--active", ctx.activeTab() === "categorias");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("tabs__item--active", ctx.activeTab() === "tema");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.activeTab() === "produtos" ? 15 : ctx.activeTab() === "categorias" ? 16 : 17);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isItemModalOpen() ? 18 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCategoryModalOpen() ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_8_0 = ctx.itemToDelete()) ? 20 : -1, tmp_8_0);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_9_0 = ctx.categoryToDelete()) ? 21 : -1, tmp_9_0);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, RippleDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-header--row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 20px;\n  border-bottom: 1px solid var(--color-border);\n}\n.tabs__item[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  border: none;\n  background: transparent;\n  color: var(--color-text-muted);\n  font-size: 0.9375rem;\n  font-weight: 600;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  transition: color var(--transition-fast), border-color var(--transition-fast);\n}\n.tabs__item[_ngcontent-%COMP%]:hover {\n  color: var(--color-text);\n}\n.tabs__item--active[_ngcontent-%COMP%] {\n  color: var(--color-text);\n  border-bottom-color: var(--color-primary, #6366f1);\n}\n.filters-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-bottom: 20px;\n}\n.filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.filters-row[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  min-width: 160px;\n}\n.filters-row__search[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 220px;\n}\n.filters-row__sort[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.filters-row__reset[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.table-card[_ngcontent-%COMP%] {\n  padding: 8px 0 0;\n  overflow: hidden;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.9375rem;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  text-align: left;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: 1px solid var(--color-border);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--color-border);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.02);\n}\n.data-table__actions-col[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.data-table__empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--color-text-muted);\n  padding: 32px 20px;\n  white-space: normal;\n}\n.item-thumb[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: var(--radius-sm);\n  object-fit: cover;\n  display: block;\n}\n.item-thumb--placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text-muted);\n  font-size: 20px;\n}\n.price-old[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: var(--color-text-muted);\n  font-size: 0.8125rem;\n  margin-right: 6px;\n}\n.price-promo[_ngcontent-%COMP%] {\n  color: var(--color-success);\n  font-weight: 600;\n}\n.price-base-hint[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.price-preview[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 14px 16px;\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-sm);\n  background: var(--color-bg-elevated);\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px 32px;\n}\n.price-preview__group[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 220px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.price-preview__title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n}\n.price-preview__line[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.price-preview__line[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  white-space: nowrap;\n  font-variant-numeric: tabular-nums;\n}\n.price-preview__line--total[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  padding-top: 8px;\n  border-top: 1px solid var(--color-border);\n  color: var(--color-text);\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n.badge-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  padding: 0;\n  cursor: pointer;\n}\n.category-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.category-chip[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.category-chip__dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: var(--radius-full);\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.badge--success[_ngcontent-%COMP%] {\n  background: var(--color-success-bg);\n  color: var(--color-success);\n}\n.badge--muted[_ngcontent-%COMP%] {\n  background: rgba(203, 213, 225, 0.12);\n  color: var(--color-text-muted);\n}\n.icon-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius-sm);\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text);\n}\n.icon-btn[_ngcontent-%COMP%]    + .icon-btn[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.icon-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(248, 113, 113, 0.12);\n  color: #f87171;\n}\n.icon-btn--highlight[_ngcontent-%COMP%] {\n  color: #facc15;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  padding: 16px 20px;\n  border-top: 1px solid var(--color-border);\n}\n.pagination__info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n.pagination__controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(4, 8, 20, 0.64);\n  backdrop-filter: blur(2px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  z-index: 100;\n}\n.modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 640px;\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n  padding: 32px;\n}\n.modal-card--sm[_ngcontent-%COMP%] {\n  max-width: 420px;\n}\n.modal-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.step-heading[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n}\n.form-section-title[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n  margin: 24px 0 12px;\n}\n.form-section-title[_ngcontent-%COMP%]:first-of-type {\n  margin-top: 8px;\n}\n.field__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.field__row[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 180px;\n}\n.field__row--checkboxes[_ngcontent-%COMP%] {\n  gap: 12px 24px;\n}\n.field__control--with-action[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.field__control--with-action[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.field__input--color[_ngcontent-%COMP%] {\n  padding: 4px;\n  height: 42px;\n  cursor: pointer;\n}\n.step-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 24px;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #f87171;\n  color: #2a0a0a;\n}\n.btn--danger[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n  transform: translateY(-2px);\n}\nselect.field__input[_ngcontent-%COMP%] {\n  appearance: none;\n  cursor: pointer;\n}\n.icon-picker[_ngcontent-%COMP%] {\n  position: relative;\n}\n.icon-picker__trigger[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border);\n  background: transparent;\n  color: var(--color-text);\n  cursor: pointer;\n  font-size: 0.9375rem;\n  text-align: left;\n}\n.icon-picker__trigger[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--color-text-muted);\n}\n.icon-picker__trigger[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.04);\n}\n.icon-picker__trigger-label[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.icon-picker__chevron[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n}\n.icon-picker__overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 150;\n  background: transparent;\n}\n.icon-picker__panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 6px);\n  left: 0;\n  right: 0;\n  z-index: 151;\n  background: var(--color-surface, #12141f);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);\n  padding: 12px;\n}\n.icon-picker__search[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.icon-picker__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 6px;\n  max-height: 220px;\n  overflow-y: auto;\n}\n.icon-picker__option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  aspect-ratio: 1;\n  border-radius: var(--radius-sm);\n  border: 1px solid transparent;\n  background: rgba(255, 255, 255, 0.03);\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.icon-picker__option[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.icon-picker__option[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: var(--color-text);\n}\n.icon-picker__option--selected[_ngcontent-%COMP%] {\n  border-color: var(--color-primary, #6366f1);\n  color: var(--color-primary, #6366f1);\n  background: rgba(99, 102, 241, 0.12);\n}\n.icon-picker__empty[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  text-align: center;\n  padding: 12px 0;\n}\n.gallery[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.gallery__item[_ngcontent-%COMP%] {\n  position: relative;\n  width: 84px;\n  height: 84px;\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n}\n.gallery__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.gallery__remove[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  width: 24px;\n  height: 24px;\n  background: rgba(4, 8, 20, 0.72);\n  color: #fff;\n}\n.gallery__remove[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.gallery__remove[_ngcontent-%COMP%]:hover {\n  background: rgba(248, 113, 113, 0.85);\n  color: #fff;\n}\n.theme-card[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 640px;\n}\n.image-upload[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.image-upload__preview[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 88px;\n  height: 88px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border-strong);\n  background: var(--color-bg-elevated);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  color: var(--color-text-muted);\n}\n.image-upload__preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.image-upload__preview[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n.image-upload__preview--cover[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 90px;\n}\n.image-upload__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 6px;\n}\n.field__input--disabled[_ngcontent-%COMP%] {\n  opacity: 0.4;\n  pointer-events: none;\n}\n/*# sourceMappingURL=menu.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuComponent, { className: "MenuComponent", filePath: "src\\app\\features\\admin\\pages\\menu\\menu.component.ts", lineNumber: 142 });
})();
export {
  MenuComponent
};
//# sourceMappingURL=chunk-QAWJIXVA.js.map
