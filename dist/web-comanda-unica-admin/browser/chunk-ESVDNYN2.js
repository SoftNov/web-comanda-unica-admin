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
} from "./chunk-ALTQOTXH.js";
import {
  RippleDirective
} from "./chunk-G7AZFESP.js";
import {
  TablesService
} from "./chunk-KAJWRVGE.js";
import {
  AuthService
} from "./chunk-JIG4QTYX.js";
import "./chunk-LADLI4RN.js";
import {
  environment
} from "./chunk-3BRF5UDA.js";
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
  ɵɵclassMap,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ZGOR3PJA.js";

// src/app/shared/services/table-sectors.service.ts
var TableSectorsService = class _TableSectorsService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiBaseUrl}/api/v1/table-sectors`;
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
  static \u0275fac = function TableSectorsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableSectorsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TableSectorsService, factory: _TableSectorsService.\u0275fac, providedIn: "root" });
};

// src/app/features/admin/pages/tables/tables.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function TablesComponent_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function TablesComponent_Conditional_6_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCreateTableModal());
    });
    \u0275\u0275elementStart(1, "span", 8);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nova mesa ");
    \u0275\u0275elementEnd();
  }
}
function TablesComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TablesComponent_Conditional_6_Conditional_0_Template, 4, 0, "button", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.canManageTables() ? 0 : -1);
  }
}
function TablesComponent_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function TablesComponent_Conditional_7_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCreateSectorModal());
    });
    \u0275\u0275elementStart(1, "span", 8);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Novo setor ");
    \u0275\u0275elementEnd();
  }
}
function TablesComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TablesComponent_Conditional_7_Conditional_0_Template, 4, 0, "button", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.canManageSectors() ? 0 : -1);
  }
}
function TablesComponent_Conditional_13_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sector_r5 = ctx.$implicit;
    \u0275\u0275property("value", sector_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sector_r5.name);
  }
}
function TablesComponent_Conditional_13_For_28_Template(rf, ctx) {
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
function TablesComponent_Conditional_13_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1, "Carregando mesas\u2026");
    \u0275\u0275elementEnd();
  }
}
function TablesComponent_Conditional_13_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 8);
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
function TablesComponent_Conditional_13_Conditional_43_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1, "Nenhuma mesa encontrada.");
    \u0275\u0275elementEnd();
  }
}
function TablesComponent_Conditional_13_Conditional_43_For_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const table_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(table_r9.name);
  }
}
function TablesComponent_Conditional_13_Conditional_43_For_3_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function TablesComponent_Conditional_13_Conditional_43_For_3_Conditional_38_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const table_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.requestRegenerateQr(table_r9));
    });
    \u0275\u0275elementStart(1, "span", 8);
    \u0275\u0275text(2, "autorenew");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 50);
    \u0275\u0275listener("click", function TablesComponent_Conditional_13_Conditional_43_For_3_Conditional_38_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r10);
      const table_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEditTableModal(table_r9));
    });
    \u0275\u0275elementStart(4, "span", 8);
    \u0275\u0275text(5, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 25);
    \u0275\u0275listener("click", function TablesComponent_Conditional_13_Conditional_43_For_3_Conditional_38_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r10);
      const table_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleTableStatus(table_r9));
    });
    \u0275\u0275elementStart(7, "span", 8);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const table_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275property("title", table_r9.status === "ACTIVE" ? "Desativar" : "Ativar");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r9.status === "ACTIVE" ? "toggle_on" : "toggle_off");
  }
}
function TablesComponent_Conditional_13_Conditional_43_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 39)(2, "div", 40)(3, "span", 8);
    \u0275\u0275text(4, "table_bar");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 41);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, TablesComponent_Conditional_13_Conditional_43_For_3_Conditional_8_Template, 2, 1, "p", 42);
    \u0275\u0275elementStart(9, "dl", 43)(10, "div")(11, "dt");
    \u0275\u0275text(12, "Setor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "dd");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "dt");
    \u0275\u0275text(17, "Capacidade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "dd");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div")(21, "dt");
    \u0275\u0275text(22, "QR Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "dd");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 44)(26, "button", 45);
    \u0275\u0275listener("click", function TablesComponent_Conditional_13_Conditional_43_For_3_Template_button_click_26_listener() {
      const table_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openQrModal(table_r9));
    });
    \u0275\u0275elementStart(27, "span", 8);
    \u0275\u0275text(28, "qr_code_2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "button", 46);
    \u0275\u0275listener("click", function TablesComponent_Conditional_13_Conditional_43_For_3_Template_button_click_29_listener() {
      const table_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.downloadQrCode(table_r9, "png"));
    });
    \u0275\u0275elementStart(30, "span", 8);
    \u0275\u0275text(31, "image");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "button", 47);
    \u0275\u0275listener("click", function TablesComponent_Conditional_13_Conditional_43_For_3_Template_button_click_32_listener() {
      const table_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.downloadQrCode(table_r9, "pdf"));
    });
    \u0275\u0275elementStart(33, "span", 8);
    \u0275\u0275text(34, "picture_as_pdf");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "button", 48);
    \u0275\u0275listener("click", function TablesComponent_Conditional_13_Conditional_43_For_3_Template_button_click_35_listener() {
      const table_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.printQrCode(table_r9));
    });
    \u0275\u0275elementStart(36, "span", 8);
    \u0275\u0275text(37, "print");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(38, TablesComponent_Conditional_13_Conditional_43_For_3_Conditional_38_Template, 9, 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const table_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Mesa ", table_r9.number, " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.tableStatusBadgeClass(table_r9));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.tableStatusLabel(table_r9));
    \u0275\u0275advance();
    \u0275\u0275conditional(table_r9.name ? 8 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(table_r9.sectorName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", table_r9.capacity, " pessoa(s)");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(table_r9.allowQr ? "Sim" : "N\xE3o");
    \u0275\u0275advance(14);
    \u0275\u0275conditional(ctx_r1.canManageTables() ? 38 : -1);
  }
}
function TablesComponent_Conditional_13_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275template(1, TablesComponent_Conditional_13_Conditional_43_Conditional_1_Template, 2, 0, "p", 30);
    \u0275\u0275repeaterCreate(2, TablesComponent_Conditional_13_Conditional_43_For_3_Template, 39, 9, "div", 33, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 34)(5, "div", 35)(6, "span", 36);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 37)(9, "button", 38);
    \u0275\u0275listener("click", function TablesComponent_Conditional_13_Conditional_43_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.previousPage());
    });
    \u0275\u0275elementStart(10, "span", 8);
    \u0275\u0275text(11, "chevron_left");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Anterior ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 38);
    \u0275\u0275listener("click", function TablesComponent_Conditional_13_Conditional_43_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275text(14, " Pr\xF3xima ");
    \u0275\u0275elementStart(15, "span", 8);
    \u0275\u0275text(16, "chevron_right");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tables().length === 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.tables());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.totalElements(), " mesa(s) \u2014 ", ctx_r1.pageLabel(), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.page() === 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.isLast());
  }
}
function TablesComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "label", 12);
    \u0275\u0275text(4, "Setor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 13)(6, "select", 14);
    \u0275\u0275listener("change", function TablesComponent_Conditional_13_Template_select_change_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSectorFilter($event.target.value));
    });
    \u0275\u0275elementStart(7, "option", 15);
    \u0275\u0275text(8, "Todos");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, TablesComponent_Conditional_13_For_10_Template, 2, 2, "option", 16, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 11)(12, "label", 17);
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 13)(15, "select", 18);
    \u0275\u0275listener("change", function TablesComponent_Conditional_13_Template_select_change_15_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setStatusFilter($event.target.value));
    });
    \u0275\u0275elementStart(16, "option", 19);
    \u0275\u0275text(17, "Todas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 20);
    \u0275\u0275text(19, "Ativas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 21);
    \u0275\u0275text(21, "Inativas");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 11)(23, "label", 22);
    \u0275\u0275text(24, "Ordenar por");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 23)(26, "select", 24);
    \u0275\u0275listener("change", function TablesComponent_Conditional_13_Template_select_change_26_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSortBy($event.target.value));
    });
    \u0275\u0275repeaterCreate(27, TablesComponent_Conditional_13_For_28_Template, 2, 2, "option", 16, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 25);
    \u0275\u0275listener("click", function TablesComponent_Conditional_13_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSortDirection());
    });
    \u0275\u0275elementStart(30, "span", 8);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 26)(33, "label", 27);
    \u0275\u0275text(34, "Buscar por n\xFAmero ou nome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 13)(36, "input", 28);
    \u0275\u0275listener("input", function TablesComponent_Conditional_13_Template_input_input_36_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchInput($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "button", 29);
    \u0275\u0275listener("click", function TablesComponent_Conditional_13_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetFilters());
    });
    \u0275\u0275elementStart(38, "span", 8);
    \u0275\u0275text(39, "filter_alt_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " Limpar filtros ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(41, TablesComponent_Conditional_13_Conditional_41_Template, 2, 0, "p", 30)(42, TablesComponent_Conditional_13_Conditional_42_Template, 4, 1, "div", 31)(43, TablesComponent_Conditional_13_Conditional_43_Template, 17, 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r1.filterSectorId());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.sectors());
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r1.filterStatus());
    \u0275\u0275advance(11);
    \u0275\u0275property("value", ctx_r1.sortBy());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.sortOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r1.sortDirection() === "ASC" ? "Crescente" : "Decrescente");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.sortDirection() === "ASC" ? "arrow_upward" : "arrow_downward");
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.searchTerm());
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.isLoadingList() ? 41 : ctx_r1.listError() ? 42 : 43);
  }
}
function TablesComponent_Conditional_14_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1, "Carregando setores\u2026");
    \u0275\u0275elementEnd();
  }
}
function TablesComponent_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 8);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.sectorsError(), " ");
  }
}
function TablesComponent_Conditional_14_Conditional_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 54);
    \u0275\u0275text(1, "A\xE7\xF5es");
    \u0275\u0275elementEnd();
  }
}
function TablesComponent_Conditional_14_Conditional_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 55);
    \u0275\u0275text(2, "Nenhum setor cadastrado.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.canManageSectors() ? 4 : 3);
  }
}
function TablesComponent_Conditional_14_Conditional_2_For_15_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 54)(1, "button", 50);
    \u0275\u0275listener("click", function TablesComponent_Conditional_14_Conditional_2_For_15_Conditional_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const sector_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEditSectorModal(sector_r12));
    });
    \u0275\u0275elementStart(2, "span", 8);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 56);
    \u0275\u0275listener("click", function TablesComponent_Conditional_14_Conditional_2_For_15_Conditional_8_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const sector_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.requestDeleteSector(sector_r12));
    });
    \u0275\u0275elementStart(5, "span", 8);
    \u0275\u0275text(6, "delete_outline");
    \u0275\u0275elementEnd()()();
  }
}
function TablesComponent_Conditional_14_Conditional_2_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 41);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, TablesComponent_Conditional_14_Conditional_2_For_15_Conditional_8_Template, 7, 0, "td", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sector_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sector_r12.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sector_r12.displayOrder);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge--success", sector_r12.active)("badge--muted", !sector_r12.active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sector_r12.active ? "Ativo" : "Inativo", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canManageSectors() ? 8 : -1);
  }
}
function TablesComponent_Conditional_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52)(2, "table", 53)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Setor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Ordem");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, TablesComponent_Conditional_14_Conditional_2_Conditional_11_Template, 2, 0, "th", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275template(13, TablesComponent_Conditional_14_Conditional_2_Conditional_13_Template, 3, 1, "tr");
    \u0275\u0275repeaterCreate(14, TablesComponent_Conditional_14_Conditional_2_For_15_Template, 9, 8, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r1.canManageSectors() ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.sectors().length === 0 ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.sectors());
  }
}
function TablesComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TablesComponent_Conditional_14_Conditional_0_Template, 2, 0, "p", 30)(1, TablesComponent_Conditional_14_Conditional_1_Template, 4, 1, "div", 31)(2, TablesComponent_Conditional_14_Conditional_2_Template, 16, 2, "div", 51);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.isLoadingSectors() ? 0 : ctx_r1.sectorsError() ? 1 : 2);
  }
}
function TablesComponent_Conditional_15_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "Informe o n\xFAmero da mesa.");
    \u0275\u0275elementEnd();
  }
}
function TablesComponent_Conditional_15_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sector_r14 = ctx.$implicit;
    \u0275\u0275property("value", sector_r14.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sector_r14.name);
  }
}
function TablesComponent_Conditional_15_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 85);
    \u0275\u0275listener("click", function TablesComponent_Conditional_15_Conditional_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCreateSectorModal(true));
    });
    \u0275\u0275elementStart(1, "span", 8);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Novo ");
    \u0275\u0275elementEnd();
  }
}
function TablesComponent_Conditional_15_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "Selecione um setor.");
    \u0275\u0275elementEnd();
  }
}
function TablesComponent_Conditional_15_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "Informe a capacidade da mesa.");
    \u0275\u0275elementEnd();
  }
}
function TablesComponent_Conditional_15_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 8);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.tableFormError(), " ");
  }
}
function TablesComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275listener("click", function TablesComponent_Conditional_15_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeTableModal());
    });
    \u0275\u0275elementStart(1, "div", 58);
    \u0275\u0275listener("click", function TablesComponent_Conditional_15_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 59)(3, "h2", 60);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 61);
    \u0275\u0275listener("click", function TablesComponent_Conditional_15_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeTableModal());
    });
    \u0275\u0275elementStart(6, "span", 8);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "form", 62);
    \u0275\u0275listener("submit", function TablesComponent_Conditional_15_Template_form_submit_8_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.submitTable());
    });
    \u0275\u0275elementStart(9, "div", 63)(10, "div", 11)(11, "label", 64);
    \u0275\u0275text(12, "N\xFAmero da mesa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 13);
    \u0275\u0275element(14, "input", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, TablesComponent_Conditional_15_Conditional_15_Template, 2, 0, "span", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 11)(17, "label", 67);
    \u0275\u0275text(18, "Nome/Apelido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 13);
    \u0275\u0275element(20, "input", 68);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 11)(22, "label", 69);
    \u0275\u0275text(23, "Setor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 70)(25, "select", 71)(26, "option", 72);
    \u0275\u0275text(27, "Selecione um setor");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(28, TablesComponent_Conditional_15_For_29_Template, 2, 2, "option", 16, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, TablesComponent_Conditional_15_Conditional_30_Template, 4, 0, "button", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, TablesComponent_Conditional_15_Conditional_31_Template, 2, 0, "span", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 63)(33, "div", 11)(34, "label", 74);
    \u0275\u0275text(35, "Capacidade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 13);
    \u0275\u0275element(37, "input", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, TablesComponent_Conditional_15_Conditional_38_Template, 2, 0, "span", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 11)(40, "label", 76);
    \u0275\u0275text(41, "Status inicial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 13)(43, "select", 77)(44, "option", 20);
    \u0275\u0275text(45, "Ativa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 21);
    \u0275\u0275text(47, "Inativa");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(48, "div", 63)(49, "label", 78);
    \u0275\u0275element(50, "input", 79);
    \u0275\u0275text(51, " Permite QR Code");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 11)(53, "label", 80);
    \u0275\u0275text(54, "Observa\xE7\xF5es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 13);
    \u0275\u0275element(56, "textarea", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(57, TablesComponent_Conditional_15_Conditional_57_Template, 4, 1, "div", 31);
    \u0275\u0275elementStart(58, "div", 82)(59, "button", 83);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "button", 84);
    \u0275\u0275listener("click", function TablesComponent_Conditional_15_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeTableModal());
    });
    \u0275\u0275text(62, "Cancelar");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.tableModalMode() === "create" ? "Nova mesa" : "Editar mesa");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.tableForm);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.tableForm.controls.number.invalid && ctx_r1.tableForm.controls.number.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tableForm.controls.number.invalid && ctx_r1.tableForm.controls.number.touched ? 15 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.tableForm.controls.sectorId.invalid && ctx_r1.tableForm.controls.sectorId.touched);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.sectors());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.canManageSectors() ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tableForm.controls.sectorId.invalid && ctx_r1.tableForm.controls.sectorId.touched ? 31 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.tableForm.controls.capacity.invalid && ctx_r1.tableForm.controls.capacity.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tableForm.controls.capacity.invalid && ctx_r1.tableForm.controls.capacity.touched ? 38 : -1);
    \u0275\u0275advance(19);
    \u0275\u0275conditional(ctx_r1.tableFormError() ? 57 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSubmittingTable());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSubmittingTable() ? "Salvando\u2026" : "Salvar", " ");
  }
}
function TablesComponent_Conditional_16_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "Informe um nome entre 2 e 100 caracteres.");
    \u0275\u0275elementEnd();
  }
}
function TablesComponent_Conditional_16_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 8);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.sectorFormError(), " ");
  }
}
function TablesComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275listener("click", function TablesComponent_Conditional_16_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSectorModal());
    });
    \u0275\u0275elementStart(1, "div", 86);
    \u0275\u0275listener("click", function TablesComponent_Conditional_16_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 59)(3, "h2", 60);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 61);
    \u0275\u0275listener("click", function TablesComponent_Conditional_16_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSectorModal());
    });
    \u0275\u0275elementStart(6, "span", 8);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "form", 62);
    \u0275\u0275listener("submit", function TablesComponent_Conditional_16_Template_form_submit_8_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.submitSector());
    });
    \u0275\u0275elementStart(9, "div", 11)(10, "label", 87);
    \u0275\u0275text(11, "Nome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 13);
    \u0275\u0275element(13, "input", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, TablesComponent_Conditional_16_Conditional_14_Template, 2, 0, "span", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 11)(16, "label", 89);
    \u0275\u0275text(17, "Ordem de exibi\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 13);
    \u0275\u0275element(19, "input", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 63)(21, "label", 78);
    \u0275\u0275element(22, "input", 91);
    \u0275\u0275text(23, " Ativo");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, TablesComponent_Conditional_16_Conditional_24_Template, 4, 1, "div", 31);
    \u0275\u0275elementStart(25, "div", 82)(26, "button", 83);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 84);
    \u0275\u0275listener("click", function TablesComponent_Conditional_16_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSectorModal());
    });
    \u0275\u0275text(29, "Cancelar");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.sectorModalMode() === "create" ? "Novo setor" : "Editar setor");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.sectorForm);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.sectorForm.controls.name.invalid && ctx_r1.sectorForm.controls.name.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.sectorForm.controls.name.invalid && ctx_r1.sectorForm.controls.name.touched ? 14 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r1.sectorFormError() ? 24 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSubmittingSector());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSubmittingSector() ? "Salvando\u2026" : "Salvar", " ");
  }
}
function TablesComponent_Conditional_17_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 8);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.regenerateQrError(), " ");
  }
}
function TablesComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275listener("click", function TablesComponent_Conditional_17_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelRegenerateQr());
    });
    \u0275\u0275elementStart(1, "div", 86);
    \u0275\u0275listener("click", function TablesComponent_Conditional_17_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h2", 60);
    \u0275\u0275text(3, "Regenerar QR Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 30);
    \u0275\u0275text(5, " O QR Code atual da ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " deixar\xE1 de funcionar imediatamente. Voc\xEA precisar\xE1 imprimir e substituir o QR Code f\xEDsico da mesa. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, TablesComponent_Conditional_17_Conditional_9_Template, 4, 1, "div", 31);
    \u0275\u0275elementStart(10, "div", 82)(11, "button", 92);
    \u0275\u0275listener("click", function TablesComponent_Conditional_17_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmRegenerateQr());
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 84);
    \u0275\u0275listener("click", function TablesComponent_Conditional_17_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelRegenerateQr());
    });
    \u0275\u0275text(14, "Cancelar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Mesa ", ctx.number, "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.regenerateQrError() ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isRegeneratingQr());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isRegeneratingQr() ? "Regenerando\u2026" : "Regenerar", " ");
  }
}
function TablesComponent_Conditional_18_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 8);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.deleteSectorError(), " ");
  }
}
function TablesComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275listener("click", function TablesComponent_Conditional_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDeleteSector());
    });
    \u0275\u0275elementStart(1, "div", 86);
    \u0275\u0275listener("click", function TablesComponent_Conditional_18_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h2", 60);
    \u0275\u0275text(3, "Excluir setor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 30);
    \u0275\u0275text(5, " Tem certeza que deseja excluir ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "? Esta a\xE7\xE3o n\xE3o pode ser desfeita. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, TablesComponent_Conditional_18_Conditional_9_Template, 4, 1, "div", 31);
    \u0275\u0275elementStart(10, "div", 82)(11, "button", 92);
    \u0275\u0275listener("click", function TablesComponent_Conditional_18_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDeleteSector());
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 84);
    \u0275\u0275listener("click", function TablesComponent_Conditional_18_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDeleteSector());
    });
    \u0275\u0275text(14, "Cancelar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.name);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.deleteSectorError() ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isDeletingSector());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isDeletingSector() ? "Excluindo\u2026" : "Excluir", " ");
  }
}
function TablesComponent_Conditional_19_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1, "Carregando QR Code\u2026");
    \u0275\u0275elementEnd();
  }
}
function TablesComponent_Conditional_19_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 8);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.qrError(), " ");
  }
}
function TablesComponent_Conditional_19_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275element(1, "img", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const table_r20 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl)("alt", "QR Code da Mesa " + table_r20.number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r20.publicUrl);
  }
}
function TablesComponent_Conditional_19_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TablesComponent_Conditional_19_Conditional_10_Conditional_0_Template, 4, 3);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_3_0 = ctx_r1.qrImageUrl()) ? 0 : -1, tmp_3_0);
  }
}
function TablesComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275listener("click", function TablesComponent_Conditional_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeQrModal());
    });
    \u0275\u0275elementStart(1, "div", 86);
    \u0275\u0275listener("click", function TablesComponent_Conditional_19_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r19);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 59)(3, "h2", 60);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 61);
    \u0275\u0275listener("click", function TablesComponent_Conditional_19_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeQrModal());
    });
    \u0275\u0275elementStart(6, "span", 8);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(8, TablesComponent_Conditional_19_Conditional_8_Template, 2, 0, "p", 30)(9, TablesComponent_Conditional_19_Conditional_9_Template, 4, 1, "div", 31)(10, TablesComponent_Conditional_19_Conditional_10_Template, 1, 1);
    \u0275\u0275elementStart(11, "div", 82)(12, "button", 85);
    \u0275\u0275listener("click", function TablesComponent_Conditional_19_Template_button_click_12_listener() {
      const table_r20 = \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadQrCode(table_r20, "png"));
    });
    \u0275\u0275elementStart(13, "span", 8);
    \u0275\u0275text(14, "image");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Baixar PNG ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 85);
    \u0275\u0275listener("click", function TablesComponent_Conditional_19_Template_button_click_16_listener() {
      const table_r20 = \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadQrCode(table_r20, "pdf"));
    });
    \u0275\u0275elementStart(17, "span", 8);
    \u0275\u0275text(18, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Baixar PDF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 85);
    \u0275\u0275listener("click", function TablesComponent_Conditional_19_Template_button_click_20_listener() {
      const table_r20 = \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.printQrCode(table_r20));
    });
    \u0275\u0275elementStart(21, "span", 8);
    \u0275\u0275text(22, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Imprimir ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("QR Code \u2014 Mesa ", ctx.number, "");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.isLoadingQr() ? 8 : ctx_r1.qrError() ? 9 : 10);
  }
}
var PAGE_SIZE = 12;
var TABLE_SORT_OPTIONS = [
  { value: "number", label: "N\xFAmero" },
  { value: "name", label: "Nome" },
  { value: "capacity", label: "Capacidade" }
];
var TablesComponent = class _TablesComponent {
  fb = new FormBuilder();
  tablesService = inject(TablesService);
  tableSectorsService = inject(TableSectorsService);
  authService = inject(AuthService);
  selectedCompany = this.authService.selectedCompany;
  sortOptions = TABLE_SORT_OPTIONS;
  profileCode = computed(() => this.selectedCompany()?.profileCode ?? null);
  canManageTables = computed(() => ["ADMIN", "OWNER", "MANAGER"].includes(this.profileCode() ?? ""));
  canManageSectors = computed(() => ["ADMIN", "OWNER"].includes(this.profileCode() ?? ""));
  activeTab = signal("mesas");
  // --- Mesas: listagem/paginação ------------------------------------------
  tables = signal([]);
  page = signal(0);
  totalPages = signal(0);
  totalElements = signal(0);
  isLast = signal(true);
  isLoadingList = signal(true);
  listError = signal(null);
  pageLabel = computed(() => `P\xE1gina ${this.page() + 1} de ${Math.max(this.totalPages(), 1)}`);
  // --- Mesas: filtros -------------------------------------------------------
  filterSectorId = signal("");
  filterStatus = signal("all");
  searchTerm = signal("");
  sortBy = signal("number");
  sortDirection = signal("ASC");
  searchInput = new Subject();
  // --- Mesas: modal de criar/editar ------------------------------------------
  isTableModalOpen = signal(false);
  tableModalMode = signal("create");
  editingTable = signal(null);
  isSubmittingTable = signal(false);
  tableFormError = signal(null);
  tableToRegenerateQr = signal(null);
  isRegeneratingQr = signal(false);
  regenerateQrError = signal(null);
  // --- Mesas: modal de QR Code -----------------------------------------------
  qrModalTable = signal(null);
  qrImageUrl = signal(null);
  isLoadingQr = signal(false);
  qrError = signal(null);
  tableForm = this.fb.nonNullable.group({
    sectorId: ["", Validators.required],
    number: this.fb.control(null, [Validators.required, Validators.min(1)]),
    name: ["", Validators.maxLength(50)],
    capacity: this.fb.control(null, [Validators.required, Validators.min(1)]),
    status: this.fb.nonNullable.control("ACTIVE", Validators.required),
    allowQr: [true],
    notes: ["", Validators.maxLength(500)]
  });
  // --- Setores ----------------------------------------------------------------
  sectors = signal([]);
  isLoadingSectors = signal(true);
  sectorsError = signal(null);
  isSectorModalOpen = signal(false);
  sectorModalMode = signal("create");
  editingSectorId = signal(null);
  isSubmittingSector = signal(false);
  sectorFormError = signal(null);
  sectorModalReturnsToTableForm = false;
  sectorToDelete = signal(null);
  isDeletingSector = signal(false);
  deleteSectorError = signal(null);
  sectorForm = this.fb.nonNullable.group({
    name: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    displayOrder: [0, Validators.min(0)],
    active: [true]
  });
  constructor() {
    this.searchInput.pipe(debounceTime(400), distinctUntilChanged()).subscribe((value) => {
      this.searchTerm.set(value);
      this.loadTables(0);
    });
    this.loadSectors();
    this.loadTables(0);
  }
  // --- Abas ---------------------------------------------------------------
  setActiveTab(tab) {
    this.activeTab.set(tab);
  }
  // --- Mesas: apresentação --------------------------------------------------
  tableStatusLabel(table) {
    if (table.status === "INACTIVE") {
      return "Inativa";
    }
    switch (table.operationalStatus) {
      case "OCCUPIED":
        return "Ocupada";
      case "RESERVED":
        return "Reservada";
      case "CLEANING":
        return "Limpeza";
      default:
        return "Livre";
    }
  }
  tableStatusBadgeClass(table) {
    if (table.status === "INACTIVE") {
      return "badge--muted";
    }
    switch (table.operationalStatus) {
      case "OCCUPIED":
        return "badge--warning";
      case "RESERVED":
        return "badge--danger";
      case "CLEANING":
        return "badge--muted";
      default:
        return "badge--success";
    }
  }
  // --- Mesas: listagem --------------------------------------------------------
  loadTables(page) {
    this.isLoadingList.set(true);
    this.listError.set(null);
    const status = this.filterStatus();
    const params = {
      status: status === "all" ? void 0 : status,
      sectorId: this.filterSectorId() || void 0,
      search: this.searchTerm() || void 0,
      page,
      size: PAGE_SIZE,
      sortBy: this.sortBy(),
      sortDirection: this.sortDirection()
    };
    this.tablesService.list(params).subscribe({
      next: (response) => {
        this.tables.set(response.content);
        this.page.set(response.page);
        this.totalPages.set(response.totalPages);
        this.totalElements.set(response.totalElements);
        this.isLast.set(response.last);
        this.isLoadingList.set(false);
      },
      error: () => {
        this.isLoadingList.set(false);
        this.listError.set("N\xE3o foi poss\xEDvel carregar as mesas.");
      }
    });
  }
  goToPage(page) {
    if (page < 0 || page >= this.totalPages() || page === this.page()) {
      return;
    }
    this.loadTables(page);
  }
  previousPage() {
    this.goToPage(this.page() - 1);
  }
  nextPage() {
    this.goToPage(this.page() + 1);
  }
  // --- Mesas: filtros -----------------------------------------------------------
  onSearchInput(event) {
    const input = event.target;
    this.searchInput.next(input.value);
  }
  setSectorFilter(value) {
    this.filterSectorId.set(value);
    this.loadTables(0);
  }
  setStatusFilter(value) {
    this.filterStatus.set(value);
    this.loadTables(0);
  }
  setSortBy(value) {
    this.sortBy.set(value);
    this.loadTables(0);
  }
  toggleSortDirection() {
    this.sortDirection.set(this.sortDirection() === "ASC" ? "DESC" : "ASC");
    this.loadTables(0);
  }
  resetFilters() {
    this.filterSectorId.set("");
    this.filterStatus.set("all");
    this.searchTerm.set("");
    this.sortBy.set("number");
    this.sortDirection.set("ASC");
    this.loadTables(0);
  }
  // --- Mesas: modal de criar/editar -------------------------------------------
  openCreateTableModal() {
    this.tableModalMode.set("create");
    this.editingTable.set(null);
    this.tableFormError.set(null);
    this.tableForm.reset({
      sectorId: "",
      number: null,
      name: "",
      capacity: null,
      status: "ACTIVE",
      allowQr: true,
      notes: ""
    });
    this.isTableModalOpen.set(true);
  }
  openEditTableModal(table) {
    this.tableModalMode.set("edit");
    this.editingTable.set(table);
    this.tableFormError.set(null);
    this.tableForm.reset({
      sectorId: table.sectorId,
      number: table.number,
      name: table.name ?? "",
      capacity: table.capacity,
      status: table.status,
      allowQr: table.allowQr,
      notes: table.notes ?? ""
    });
    this.isTableModalOpen.set(true);
  }
  closeTableModal() {
    this.isTableModalOpen.set(false);
  }
  submitTable() {
    if (this.tableForm.invalid) {
      this.tableForm.markAllAsTouched();
      this.tableFormError.set("Verifique os campos destacados antes de salvar.");
      return;
    }
    this.tableFormError.set(null);
    this.isSubmittingTable.set(true);
    if (this.tableModalMode() === "create") {
      this.tablesService.create(this.buildTablePayload()).subscribe({
        next: () => {
          this.isSubmittingTable.set(false);
          this.isTableModalOpen.set(false);
          this.loadTables(0);
        },
        error: (error) => {
          this.isSubmittingTable.set(false);
          this.tableFormError.set(this.resolveErrorMessage(error, "table"));
        }
      });
      return;
    }
    const table = this.editingTable();
    if (!table) {
      return;
    }
    this.tablesService.update(table.id, this.buildTablePayload()).subscribe({
      next: (updated) => {
        this.isSubmittingTable.set(false);
        this.isTableModalOpen.set(false);
        this.replaceTable(updated);
      },
      error: (error) => {
        this.isSubmittingTable.set(false);
        this.tableFormError.set(this.resolveErrorMessage(error, "table"));
      }
    });
  }
  // --- Mesas: ativar/desativar --------------------------------------------------
  toggleTableStatus(table) {
    const request$ = table.status === "ACTIVE" ? this.tablesService.disable(table.id) : this.tablesService.enable(table.id);
    request$.subscribe({
      next: (updated) => this.replaceTable(updated),
      error: () => this.listError.set("N\xE3o foi poss\xEDvel atualizar o status da mesa.")
    });
  }
  // --- Mesas: regenerar QR Code ---------------------------------------------------
  requestRegenerateQr(table) {
    this.regenerateQrError.set(null);
    this.tableToRegenerateQr.set(table);
  }
  cancelRegenerateQr() {
    this.tableToRegenerateQr.set(null);
  }
  confirmRegenerateQr() {
    const table = this.tableToRegenerateQr();
    if (!table) {
      return;
    }
    this.isRegeneratingQr.set(true);
    this.regenerateQrError.set(null);
    this.tablesService.regenerateQrCode(table.id).subscribe({
      next: (updated) => {
        this.isRegeneratingQr.set(false);
        this.tableToRegenerateQr.set(null);
        this.replaceTable(updated);
      },
      error: (error) => {
        this.isRegeneratingQr.set(false);
        this.regenerateQrError.set(this.resolveErrorMessage(error, "table"));
      }
    });
  }
  // --- Mesas: ações de QR Code -----------------------------------------------------
  openQrModal(table) {
    this.qrModalTable.set(table);
    this.qrError.set(null);
    this.qrImageUrl.set(null);
    this.isLoadingQr.set(true);
    this.tablesService.getQrCodePng(table.id).subscribe({
      next: (blob) => {
        this.isLoadingQr.set(false);
        this.qrImageUrl.set(URL.createObjectURL(blob));
      },
      error: () => {
        this.isLoadingQr.set(false);
        this.qrError.set("N\xE3o foi poss\xEDvel carregar o QR Code.");
      }
    });
  }
  closeQrModal() {
    const url = this.qrImageUrl();
    if (url) {
      URL.revokeObjectURL(url);
    }
    this.qrModalTable.set(null);
    this.qrImageUrl.set(null);
  }
  downloadQrCode(table, format) {
    const request$ = format === "png" ? this.tablesService.getQrCodePng(table.id) : this.tablesService.getQrCodePdf(table.id);
    request$.subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `mesa-${table.number}-qrcode.${format}`;
        link.click();
        URL.revokeObjectURL(url);
      },
      error: () => this.qrError.set("N\xE3o foi poss\xEDvel baixar o QR Code.")
    });
  }
  printQrCode(table) {
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      this.qrError.set("N\xE3o foi poss\xEDvel abrir a janela de impress\xE3o. Verifique o bloqueador de pop-ups.");
      return;
    }
    printWindow.document.title = `QR Code \u2014 Mesa ${table.number}`;
    printWindow.document.body.style.margin = "0";
    printWindow.document.body.style.display = "flex";
    printWindow.document.body.style.alignItems = "center";
    printWindow.document.body.style.justifyContent = "center";
    printWindow.document.body.style.height = "100vh";
    this.tablesService.getQrCodePng(table.id).subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        const image = printWindow.document.createElement("img");
        image.src = url;
        image.style.maxWidth = "100%";
        image.onload = () => printWindow.print();
        printWindow.document.body.appendChild(image);
      },
      error: () => {
        printWindow.close();
        this.qrError.set("N\xE3o foi poss\xEDvel carregar o QR Code para impress\xE3o.");
      }
    });
  }
  replaceTable(updated) {
    this.tables.update((list) => list.map((current) => current.id === updated.id ? updated : current));
    if (this.editingTable()?.id === updated.id) {
      this.editingTable.set(updated);
    }
    if (this.qrModalTable()?.id === updated.id) {
      this.qrModalTable.set(updated);
    }
  }
  buildTablePayload() {
    const value = this.tableForm.getRawValue();
    return {
      sectorId: value.sectorId,
      number: value.number ?? 0,
      name: value.name.trim() || void 0,
      capacity: value.capacity ?? 0,
      status: value.status,
      allowQr: value.allowQr,
      notes: value.notes.trim() || void 0
    };
  }
  // --- Setores --------------------------------------------------------------------
  loadSectors() {
    this.isLoadingSectors.set(true);
    this.sectorsError.set(null);
    this.tableSectorsService.list().subscribe({
      next: (sectors) => {
        this.sectors.set(sectors);
        this.isLoadingSectors.set(false);
      },
      error: () => {
        this.isLoadingSectors.set(false);
        this.sectorsError.set("N\xE3o foi poss\xEDvel carregar os setores.");
      }
    });
  }
  openCreateSectorModal(fromTableForm = false) {
    this.sectorModalMode.set("create");
    this.editingSectorId.set(null);
    this.sectorFormError.set(null);
    this.sectorModalReturnsToTableForm = fromTableForm;
    this.sectorForm.reset({
      name: "",
      displayOrder: 0,
      active: true
    });
    this.isSectorModalOpen.set(true);
  }
  openEditSectorModal(sector) {
    this.sectorModalMode.set("edit");
    this.editingSectorId.set(sector.id);
    this.sectorFormError.set(null);
    this.sectorModalReturnsToTableForm = false;
    this.sectorForm.reset({
      name: sector.name,
      displayOrder: sector.displayOrder,
      active: sector.active
    });
    this.isSectorModalOpen.set(true);
  }
  closeSectorModal() {
    this.isSectorModalOpen.set(false);
  }
  submitSector() {
    if (this.sectorForm.invalid) {
      this.sectorForm.markAllAsTouched();
      this.sectorFormError.set("Verifique os campos destacados antes de salvar.");
      return;
    }
    this.sectorFormError.set(null);
    this.isSubmittingSector.set(true);
    const value = this.sectorForm.getRawValue();
    if (this.sectorModalMode() === "create") {
      const payload2 = {
        name: value.name.trim(),
        displayOrder: value.displayOrder,
        active: value.active
      };
      this.tableSectorsService.create(payload2).subscribe({
        next: (created) => {
          this.isSubmittingSector.set(false);
          this.isSectorModalOpen.set(false);
          this.loadSectors();
          if (this.sectorModalReturnsToTableForm) {
            this.tableForm.controls.sectorId.setValue(created.id);
          }
        },
        error: (error) => {
          this.isSubmittingSector.set(false);
          this.sectorFormError.set(this.resolveErrorMessage(error, "sector"));
        }
      });
      return;
    }
    const sectorId = this.editingSectorId();
    if (!sectorId) {
      return;
    }
    const payload = {
      name: value.name.trim(),
      displayOrder: value.displayOrder,
      active: value.active
    };
    this.tableSectorsService.update(sectorId, payload).subscribe({
      next: () => {
        this.isSubmittingSector.set(false);
        this.isSectorModalOpen.set(false);
        this.loadSectors();
      },
      error: (error) => {
        this.isSubmittingSector.set(false);
        this.sectorFormError.set(this.resolveErrorMessage(error, "sector"));
      }
    });
  }
  requestDeleteSector(sector) {
    this.deleteSectorError.set(null);
    this.sectorToDelete.set(sector);
  }
  cancelDeleteSector() {
    this.sectorToDelete.set(null);
  }
  confirmDeleteSector() {
    const sector = this.sectorToDelete();
    if (!sector) {
      return;
    }
    this.isDeletingSector.set(true);
    this.deleteSectorError.set(null);
    this.tableSectorsService.delete(sector.id).subscribe({
      next: () => {
        this.isDeletingSector.set(false);
        this.sectorToDelete.set(null);
        this.loadSectors();
      },
      error: (error) => {
        this.isDeletingSector.set(false);
        this.deleteSectorError.set(this.resolveErrorMessage(error, "sector"));
      }
    });
  }
  // --- Erros ------------------------------------------------------------------------
  resolveErrorMessage(error, domain) {
    const body = error.error;
    if (body?.mensagem) {
      return body.mensagem;
    }
    if (body?.titulo) {
      return body.titulo;
    }
    if (domain === "table") {
      if (error.status === 409) {
        return "J\xE1 existe uma mesa com este n\xFAmero nesta empresa.";
      }
      if (error.status === 404) {
        return "Mesa ou setor informado n\xE3o encontrado nesta empresa.";
      }
    } else {
      if (error.status === 409) {
        return "Existem mesas vinculadas a este setor. Mova ou remova as mesas antes de exclu\xED-lo.";
      }
      if (error.status === 404) {
        return "Setor n\xE3o encontrado nesta empresa.";
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
  static \u0275fac = function TablesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TablesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TablesComponent, selectors: [["app-admin-tables"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 12, consts: [[1, "page-header", "page-header--row"], [1, "page-title"], [1, "page-subtitle"], [1, "tabs"], ["type", "button", 1, "tabs__item", 3, "click"], [1, "modal-backdrop"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", 3, "click"], ["aria-hidden", "true", 1, "material-icons"], [1, "card", "filters-card"], [1, "filters-row"], [1, "field"], ["for", "filter-sector", 1, "field__label"], [1, "field__control"], ["id", "filter-sector", 1, "field__input", 3, "change", "value"], ["value", ""], [3, "value"], ["for", "filter-status", 1, "field__label"], ["id", "filter-status", 1, "field__input", 3, "change", "value"], ["value", "all"], ["value", "ACTIVE"], ["value", "INACTIVE"], ["for", "filter-sort", 1, "field__label"], [1, "field__control", "filters-row__sort"], ["id", "filter-sort", 1, "field__input", 3, "change", "value"], ["type", "button", 1, "icon-btn", 3, "click", "title"], [1, "field", "filters-row__search"], ["for", "filter-search", 1, "field__label"], ["id", "filter-search", "type", "text", "placeholder", "Ex: 12, Varanda", 1, "field__input", 3, "input", "value"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", "filters-row__reset", 3, "click"], [1, "field__hint"], ["role", "alert", 1, "form-alert", "form-alert--error"], [1, "tables-grid"], [1, "card", "table-item"], [1, "card", "pagination-card"], [1, "pagination"], [1, "pagination__info"], [1, "pagination__controls"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click", "disabled"], [1, "table-item__header"], [1, "table-item__number"], [1, "badge"], [1, "table-item__name"], [1, "table-item__meta"], [1, "table-item__actions"], ["type", "button", "title", "Visualizar QR Code", 1, "icon-btn", 3, "click"], ["type", "button", "title", "Baixar PNG", 1, "icon-btn", 3, "click"], ["type", "button", "title", "Baixar PDF", 1, "icon-btn", 3, "click"], ["type", "button", "title", "Imprimir QR Code", 1, "icon-btn", 3, "click"], ["type", "button", "title", "Regenerar QR Code", 1, "icon-btn", 3, "click"], ["type", "button", "title", "Editar", 1, "icon-btn", 3, "click"], [1, "card", "table-card"], [1, "table-wrapper"], [1, "data-table"], [1, "data-table__actions-col"], [1, "data-table__empty"], ["type", "button", "title", "Excluir", 1, "icon-btn", "icon-btn--danger", 3, "click"], [1, "modal-backdrop", 3, "click"], [1, "modal-card", "card", 3, "click"], [1, "modal-card__header"], [1, "step-heading"], ["type", "button", "aria-label", "Fechar", 1, "icon-btn", 3, "click"], ["novalidate", "", 3, "submit", "formGroup"], [1, "field__row"], ["for", "table-number", 1, "field__label"], ["id", "table-number", "type", "number", "min", "1", "formControlName", "number", "placeholder", "Ex: 12", 1, "field__input"], [1, "field__error"], ["for", "table-name", 1, "field__label"], ["id", "table-name", "type", "text", "formControlName", "name", "placeholder", "Opcional", 1, "field__input"], ["for", "table-sector", 1, "field__label"], [1, "field__control", "field__control--with-action"], ["id", "table-sector", "formControlName", "sectorId", 1, "field__input"], ["value", "", "disabled", ""], ["type", "button", 1, "btn", "btn--ghost", "btn--sm"], ["for", "table-capacity", 1, "field__label"], ["id", "table-capacity", "type", "number", "min", "1", "formControlName", "capacity", "placeholder", "Ex: 4", 1, "field__input"], ["for", "table-status", 1, "field__label"], ["id", "table-status", "formControlName", "status", 1, "field__input"], [1, "field__checkbox"], ["type", "checkbox", "formControlName", "allowQr"], ["for", "table-notes", 1, "field__label"], ["id", "table-notes", "rows", "3", "formControlName", "notes", "placeholder", "Opcional", 1, "field__input"], [1, "step-actions"], ["type", "submit", "appRipple", "", 1, "btn", "btn--primary", 3, "disabled"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], [1, "modal-card", "modal-card--sm", "card", 3, "click"], ["for", "sector-name", 1, "field__label"], ["id", "sector-name", "type", "text", "formControlName", "name", "placeholder", "Ex: Sal\xE3o, Varanda", 1, "field__input"], ["for", "sector-display-order", 1, "field__label"], ["id", "sector-display-order", "type", "number", "min", "0", "formControlName", "displayOrder", 1, "field__input"], ["type", "checkbox", "formControlName", "active"], ["type", "button", 1, "btn", "btn--danger", 3, "click", "disabled"], [1, "qr-preview"], [3, "src", "alt"]], template: function TablesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Mesas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, TablesComponent_Conditional_6_Template, 1, 1)(7, TablesComponent_Conditional_7_Template, 1, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 3)(9, "button", 4);
      \u0275\u0275listener("click", function TablesComponent_Template_button_click_9_listener() {
        return ctx.setActiveTab("mesas");
      });
      \u0275\u0275text(10, " Mesas ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 4);
      \u0275\u0275listener("click", function TablesComponent_Template_button_click_11_listener() {
        return ctx.setActiveTab("setores");
      });
      \u0275\u0275text(12, " Setores ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(13, TablesComponent_Conditional_13_Template, 44, 7)(14, TablesComponent_Conditional_14_Template, 3, 1)(15, TablesComponent_Conditional_15_Template, 63, 15, "div", 5)(16, TablesComponent_Conditional_16_Template, 30, 8, "div", 5)(17, TablesComponent_Conditional_17_Template, 15, 4, "div", 5)(18, TablesComponent_Conditional_18_Template, 15, 4, "div", 5)(19, TablesComponent_Conditional_19_Template, 24, 2, "div", 5);
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_7_0;
      let tmp_8_0;
      let tmp_9_0;
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" Gerencie as mesas e setores do sal\xE3o de ", (tmp_0_0 = (tmp_0_0 = ctx.selectedCompany()) == null ? null : tmp_0_0.companyName) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : "sua empresa", ". ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "mesas" ? 6 : 7);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("tabs__item--active", ctx.activeTab() === "mesas");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("tabs__item--active", ctx.activeTab() === "setores");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.activeTab() === "mesas" ? 13 : 14);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isTableModalOpen() ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isSectorModalOpen() ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_7_0 = ctx.tableToRegenerateQr()) ? 17 : -1, tmp_7_0);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_8_0 = ctx.sectorToDelete()) ? 18 : -1, tmp_8_0);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_9_0 = ctx.qrModalTable()) ? 19 : -1, tmp_9_0);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, RippleDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-header--row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 20px;\n  border-bottom: 1px solid var(--color-border);\n}\n.tabs__item[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  border: none;\n  background: transparent;\n  color: var(--color-text-muted);\n  font-size: 0.9375rem;\n  font-weight: 600;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  transition: color var(--transition-fast), border-color var(--transition-fast);\n}\n.tabs__item[_ngcontent-%COMP%]:hover {\n  color: var(--color-text);\n}\n.tabs__item--active[_ngcontent-%COMP%] {\n  color: var(--color-text);\n  border-bottom-color: var(--color-primary, #6366f1);\n}\n.filters-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-bottom: 20px;\n}\n.filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.filters-row[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  min-width: 160px;\n}\n.filters-row__search[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 220px;\n}\n.filters-row__sort[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.filters-row__reset[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.tables-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.table-item[_ngcontent-%COMP%] {\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.table-item__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.table-item__number[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.0625rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.table-item__number[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--color-text-muted);\n}\n.table-item__name[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  margin: 0;\n}\n.table-item__meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin: 0;\n}\n.table-item__meta[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  font-size: 0.8125rem;\n}\n.table-item__meta[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n}\n.table-item__meta[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-text);\n  font-weight: 600;\n}\n.table-item__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  margin-top: 4px;\n  padding-top: 10px;\n  border-top: 1px solid var(--color-border);\n}\n.qr-preview[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 16px 0;\n}\n.qr-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 220px;\n  width: 100%;\n  border-radius: var(--radius-sm);\n  background: #fff;\n  padding: 8px;\n}\n.table-card[_ngcontent-%COMP%] {\n  padding: 8px 0 0;\n  overflow: hidden;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.9375rem;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  text-align: left;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: 1px solid var(--color-border);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--color-border);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.02);\n}\n.data-table__actions-col[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.data-table__empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--color-text-muted);\n  padding: 32px 20px;\n  white-space: normal;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: var(--radius-full);\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.badge--success[_ngcontent-%COMP%] {\n  background: var(--color-success-bg);\n  color: var(--color-success);\n}\n.badge--muted[_ngcontent-%COMP%] {\n  background: rgba(203, 213, 225, 0.12);\n  color: var(--color-text-muted);\n}\n.badge--warning[_ngcontent-%COMP%] {\n  background: rgba(250, 204, 21, 0.14);\n  color: #facc15;\n}\n.badge--danger[_ngcontent-%COMP%] {\n  background: rgba(248, 113, 113, 0.14);\n  color: #f87171;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius-sm);\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text);\n}\n.icon-btn[_ngcontent-%COMP%]    + .icon-btn[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.icon-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(248, 113, 113, 0.12);\n  color: #f87171;\n}\n.pagination-card[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  padding: 16px 20px;\n}\n.pagination__info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n.pagination__controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(4, 8, 20, 0.64);\n  backdrop-filter: blur(2px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  z-index: 100;\n}\n.modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 640px;\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n  padding: 32px;\n}\n.modal-card--sm[_ngcontent-%COMP%] {\n  max-width: 420px;\n}\n.modal-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.step-heading[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n}\n.field__row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.field__row[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 180px;\n}\n.field__control--with-action[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.field__control--with-action[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.step-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-top: 24px;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #f87171;\n  color: #2a0a0a;\n}\n.btn--danger[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n  transform: translateY(-2px);\n}\nselect.field__input[_ngcontent-%COMP%] {\n  appearance: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=tables.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TablesComponent, { className: "TablesComponent", filePath: "src\\app\\features\\admin\\pages\\tables\\tables.component.ts", lineNumber: 47 });
})();
export {
  TablesComponent
};
//# sourceMappingURL=chunk-ESVDNYN2.js.map
