import {
  TABLE_LIMIT_ERROR_CODE,
  TablesService
} from "./chunk-YOR34W3A.js";
import {
  autoDismiss
} from "./chunk-JD6JJHYZ.js";
import {
  RippleDirective
} from "./chunk-ZBOLJN4C.js";
import {
  formatTableLabel
} from "./chunk-XFEDBWXJ.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxValidator,
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
} from "./chunk-GNNS5J5Q.js";
import {
  AuthService
} from "./chunk-GDZY7PI7.js";
import {
  brDateTimeFormat,
  parseApiDate
} from "./chunk-MQ3P2GIM.js";
import "./chunk-HZABO7FL.js";
import {
  environment
} from "./chunk-IKIQHSDP.js";
import {
  Router
} from "./chunk-JC7LZX74.js";
import {
  HttpClient,
  Subject,
  catchError,
  computed,
  debounceTime,
  distinctUntilChanged,
  forkJoin,
  from,
  inject,
  map,
  mergeMap,
  of,
  signal,
  toArray,
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-MRKXMG4P.js";

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
function TablesComponent_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function TablesComponent_Conditional_7_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCreateTableModal());
    });
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nova mesa ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("btn--limit", !ctx_r1.canCreateMoreTables());
    \u0275\u0275attribute("title", ctx_r1.canCreateMoreTables() ? null : "Limite de mesas do plano atingido");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.canCreateMoreTables() ? "add" : "lock");
  }
}
function TablesComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function TablesComponent_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.printAllQrCodes());
    });
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275text(2, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, TablesComponent_Conditional_7_Conditional_4_Template, 4, 4, "button", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.isPrintingAllQr());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isPrintingAllQr() ? "Preparando\u2026" : "Imprimir QR Codes", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canManageTables() ? 4 : -1);
  }
}
function TablesComponent_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function TablesComponent_Conditional_8_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCreateSectorModal());
    });
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Novo setor ");
    \u0275\u0275elementEnd();
  }
}
function TablesComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TablesComponent_Conditional_8_Conditional_0_Template, 4, 0, "button", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.canManageSectors() ? 0 : -1);
  }
}
function TablesComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 9);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.printAllQrError(), " ");
  }
}
function TablesComponent_Conditional_15_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sector_r6 = ctx.$implicit;
    \u0275\u0275property("value", sector_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sector_r6.name);
  }
}
function TablesComponent_Conditional_15_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r7 = ctx.$implicit;
    \u0275\u0275property("value", option_r7.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r7.label);
  }
}
function TablesComponent_Conditional_15_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 35);
    \u0275\u0275text(1, "Carregando mesas\u2026");
    \u0275\u0275elementEnd();
  }
}
function TablesComponent_Conditional_15_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 9);
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
function TablesComponent_Conditional_15_Conditional_47_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 9);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.markCleanedError(), " ");
  }
}
function TablesComponent_Conditional_15_Conditional_47_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 49)(3, "button", 33);
    \u0275\u0275listener("click", function TablesComponent_Conditional_15_Conditional_47_Conditional_1_Conditional_4_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.requestBulk("enable"));
    });
    \u0275\u0275elementStart(4, "span", 9);
    \u0275\u0275text(5, "toggle_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Ativar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 33);
    \u0275\u0275listener("click", function TablesComponent_Conditional_15_Conditional_47_Conditional_1_Conditional_4_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.requestBulk("disable"));
    });
    \u0275\u0275elementStart(8, "span", 9);
    \u0275\u0275text(9, "toggle_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Desativar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 50);
    \u0275\u0275listener("click", function TablesComponent_Conditional_15_Conditional_47_Conditional_1_Conditional_4_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.requestBulk("delete"));
    });
    \u0275\u0275elementStart(12, "span", 9);
    \u0275\u0275text(13, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Excluir ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 33);
    \u0275\u0275listener("click", function TablesComponent_Conditional_15_Conditional_47_Conditional_1_Conditional_4_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.clearSelection());
    });
    \u0275\u0275text(16, " Limpar sele\xE7\xE3o ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.selectedCount(), " selecionada(s)");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isRunningBulk());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.isRunningBulk());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.isRunningBulk());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.isRunningBulk());
  }
}
function TablesComponent_Conditional_15_Conditional_47_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1, "Marque as mesas para ativar, desativar ou excluir v\xE1rias de uma vez.");
    \u0275\u0275elementEnd();
  }
}
function TablesComponent_Conditional_15_Conditional_47_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "label", 45)(2, "input", 46);
    \u0275\u0275listener("change", function TablesComponent_Conditional_15_Conditional_47_Conditional_1_Template_input_change_2_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleSelectPage());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, TablesComponent_Conditional_15_Conditional_47_Conditional_1_Conditional_4_Template, 17, 5)(5, TablesComponent_Conditional_15_Conditional_47_Conditional_1_Conditional_5_Template, 2, 0, "span", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bulk-bar--active", ctx_r1.selectedCount() > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.allPageSelected());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.allPageSelected() ? "Desmarcar p\xE1gina" : "Selecionar p\xE1gina", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedCount() > 0 ? 4 : 5);
  }
}
function TablesComponent_Conditional_15_Conditional_47_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 35);
    \u0275\u0275text(1, "Aplicando nas mesas selecionadas\u2026");
    \u0275\u0275elementEnd();
  }
}
function TablesComponent_Conditional_15_Conditional_47_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 9);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.bulkResult(), " ");
  }
}
function TablesComponent_Conditional_15_Conditional_47_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 9);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.bulkError(), " ");
  }
}
function TablesComponent_Conditional_15_Conditional_47_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 35);
    \u0275\u0275text(1, "Nenhuma mesa encontrada.");
    \u0275\u0275elementEnd();
  }
}
function TablesComponent_Conditional_15_Conditional_47_For_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 65);
    \u0275\u0275listener("change", function TablesComponent_Conditional_15_Conditional_47_For_8_Conditional_3_Template_input_change_0_listener() {
      \u0275\u0275restoreView(_r12);
      const table_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleSelected(table_r13));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const table_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("checked", ctx_r1.isSelected(table_r13.id));
    \u0275\u0275attribute("aria-label", "Selecionar " + ctx_r1.tableLabel(table_r13.number, table_r13.name));
  }
}
function TablesComponent_Conditional_15_Conditional_47_For_8_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const table_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(table_r13.name);
  }
}
function TablesComponent_Conditional_15_Conditional_47_For_8_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 57)(1, "span", 9);
    \u0275\u0275text(2, "event_seat");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const table_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Reservada at\xE9 ", ctx_r1.formatShortDateTime(table_r13.reservedUntil), " ");
  }
}
function TablesComponent_Conditional_15_Conditional_47_For_8_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function TablesComponent_Conditional_15_Conditional_47_For_8_Conditional_40_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const table_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.markCleaned(table_r13));
    });
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275text(2, "cleaning_services");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const table_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.markingCleanedTableId() === table_r13.id);
  }
}
function TablesComponent_Conditional_15_Conditional_47_For_8_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function TablesComponent_Conditional_15_Conditional_47_For_8_Conditional_41_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const table_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.requestRegenerateQr(table_r13));
    });
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275text(2, "autorenew");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 68);
    \u0275\u0275listener("click", function TablesComponent_Conditional_15_Conditional_47_For_8_Conditional_41_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r15);
      const table_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEditTableModal(table_r13));
    });
    \u0275\u0275elementStart(4, "span", 9);
    \u0275\u0275text(5, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 29);
    \u0275\u0275listener("click", function TablesComponent_Conditional_15_Conditional_47_For_8_Conditional_41_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r15);
      const table_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleTableStatus(table_r13));
    });
    \u0275\u0275elementStart(7, "span", 9);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 69);
    \u0275\u0275listener("click", function TablesComponent_Conditional_15_Conditional_47_For_8_Conditional_41_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r15);
      const table_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.requestDeleteTable(table_r13));
    });
    \u0275\u0275elementStart(10, "span", 9);
    \u0275\u0275text(11, "delete");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const table_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275property("title", table_r13.status === "ACTIVE" ? "Desativar" : "Ativar");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r13.status === "ACTIVE" ? "toggle_on" : "toggle_off");
  }
}
function TablesComponent_Conditional_15_Conditional_47_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52)(2, "div", 53);
    \u0275\u0275template(3, TablesComponent_Conditional_15_Conditional_47_For_8_Conditional_3_Template, 1, 2, "input", 54);
    \u0275\u0275elementStart(4, "span", 9);
    \u0275\u0275text(5, "table_bar");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 55);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, TablesComponent_Conditional_15_Conditional_47_For_8_Conditional_9_Template, 2, 1, "p", 56)(10, TablesComponent_Conditional_15_Conditional_47_For_8_Conditional_10_Template, 4, 1, "p", 57);
    \u0275\u0275elementStart(11, "dl", 58)(12, "div")(13, "dt");
    \u0275\u0275text(14, "Setor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "dd");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "dt");
    \u0275\u0275text(19, "Capacidade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "dd");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div")(23, "dt");
    \u0275\u0275text(24, "QR Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "dd");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 59)(28, "button", 60);
    \u0275\u0275listener("click", function TablesComponent_Conditional_15_Conditional_47_For_8_Template_button_click_28_listener() {
      const table_r13 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openQrModal(table_r13));
    });
    \u0275\u0275elementStart(29, "span", 9);
    \u0275\u0275text(30, "qr_code_2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "button", 61);
    \u0275\u0275listener("click", function TablesComponent_Conditional_15_Conditional_47_For_8_Template_button_click_31_listener() {
      const table_r13 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.downloadQrCode(table_r13, "png"));
    });
    \u0275\u0275elementStart(32, "span", 9);
    \u0275\u0275text(33, "image");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "button", 62);
    \u0275\u0275listener("click", function TablesComponent_Conditional_15_Conditional_47_For_8_Template_button_click_34_listener() {
      const table_r13 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.downloadQrCode(table_r13, "pdf"));
    });
    \u0275\u0275elementStart(35, "span", 9);
    \u0275\u0275text(36, "picture_as_pdf");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "button", 63);
    \u0275\u0275listener("click", function TablesComponent_Conditional_15_Conditional_47_For_8_Template_button_click_37_listener() {
      const table_r13 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.printQrCode(table_r13));
    });
    \u0275\u0275elementStart(38, "span", 9);
    \u0275\u0275text(39, "print");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(40, TablesComponent_Conditional_15_Conditional_47_For_8_Conditional_40_Template, 3, 1, "button", 64)(41, TablesComponent_Conditional_15_Conditional_47_For_8_Conditional_41_Template, 12, 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const table_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("table-item--selected", ctx_r1.isSelected(table_r13.id));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.canManageTables() ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Mesa ", table_r13.number, " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.tableStatusBadgeClass(table_r13));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.tableStatusLabel(table_r13));
    \u0275\u0275advance();
    \u0275\u0275conditional(table_r13.name ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(table_r13.operationalStatus === "RESERVED" && table_r13.reservedUntil ? 10 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(table_r13.sectorName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", table_r13.capacity, " pessoa(s)");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(table_r13.allowQr ? "Sim" : "N\xE3o");
    \u0275\u0275advance(14);
    \u0275\u0275conditional(table_r13.operationalStatus === "CLEANING" ? 40 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canManageTables() ? 41 : -1);
  }
}
function TablesComponent_Conditional_15_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, TablesComponent_Conditional_15_Conditional_47_Conditional_0_Template, 4, 1, "div", 6)(1, TablesComponent_Conditional_15_Conditional_47_Conditional_1_Template, 6, 5, "div", 36)(2, TablesComponent_Conditional_15_Conditional_47_Conditional_2_Template, 2, 0, "p", 35)(3, TablesComponent_Conditional_15_Conditional_47_Conditional_3_Template, 4, 1, "div", 37)(4, TablesComponent_Conditional_15_Conditional_47_Conditional_4_Template, 4, 1, "div", 6);
    \u0275\u0275elementStart(5, "div", 38);
    \u0275\u0275template(6, TablesComponent_Conditional_15_Conditional_47_Conditional_6_Template, 2, 0, "p", 35);
    \u0275\u0275repeaterCreate(7, TablesComponent_Conditional_15_Conditional_47_For_8_Template, 42, 14, "div", 39, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 40)(10, "div", 41)(11, "span", 42);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 43)(14, "button", 33);
    \u0275\u0275listener("click", function TablesComponent_Conditional_15_Conditional_47_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.previousPage());
    });
    \u0275\u0275elementStart(15, "span", 9);
    \u0275\u0275text(16, "chevron_left");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Anterior ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 33);
    \u0275\u0275listener("click", function TablesComponent_Conditional_15_Conditional_47_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275text(19, " Pr\xF3xima ");
    \u0275\u0275elementStart(20, "span", 9);
    \u0275\u0275text(21, "chevron_right");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.markCleanedError() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canManageTables() && ctx_r1.tables().length > 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isRunningBulk() && !ctx_r1.bulkAction() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.bulkResult() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.bulkError() ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.tables().length === 0 ? 6 : -1);
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
function TablesComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "div", 15)(3, "label", 16);
    \u0275\u0275text(4, "Setor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "select", 18);
    \u0275\u0275listener("change", function TablesComponent_Conditional_15_Template_select_change_6_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSectorFilter($event.target.value));
    });
    \u0275\u0275elementStart(7, "option", 19);
    \u0275\u0275text(8, "Todos");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, TablesComponent_Conditional_15_For_10_Template, 2, 2, "option", 20, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 15)(12, "label", 21);
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 17)(15, "select", 22);
    \u0275\u0275listener("change", function TablesComponent_Conditional_15_Template_select_change_15_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setStatusFilter($event.target.value));
    });
    \u0275\u0275elementStart(16, "option", 23);
    \u0275\u0275text(17, "Todas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 24);
    \u0275\u0275text(19, "Ativas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 25);
    \u0275\u0275text(21, "Inativas");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 15)(23, "label", 26);
    \u0275\u0275text(24, "Ordenar por");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 27)(26, "select", 28);
    \u0275\u0275listener("change", function TablesComponent_Conditional_15_Template_select_change_26_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSortBy($event.target.value));
    });
    \u0275\u0275repeaterCreate(27, TablesComponent_Conditional_15_For_28_Template, 2, 2, "option", 20, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 29);
    \u0275\u0275listener("click", function TablesComponent_Conditional_15_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSortDirection());
    });
    \u0275\u0275elementStart(30, "span", 9);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 30)(33, "label", 31);
    \u0275\u0275text(34, "Buscar por n\xFAmero ou nome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 17)(36, "input", 32);
    \u0275\u0275listener("input", function TablesComponent_Conditional_15_Template_input_input_36_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchInput($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "button", 33);
    \u0275\u0275listener("click", function TablesComponent_Conditional_15_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshTables());
    });
    \u0275\u0275elementStart(38, "span", 9);
    \u0275\u0275text(39, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " Atualizar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 34);
    \u0275\u0275listener("click", function TablesComponent_Conditional_15_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetFilters());
    });
    \u0275\u0275elementStart(42, "span", 9);
    \u0275\u0275text(43, "filter_alt_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " Limpar filtros ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(45, TablesComponent_Conditional_15_Conditional_45_Template, 2, 0, "p", 35)(46, TablesComponent_Conditional_15_Conditional_46_Template, 4, 1, "div", 6)(47, TablesComponent_Conditional_15_Conditional_47_Template, 22, 10);
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
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isLoadingList());
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.isLoadingList() ? 45 : ctx_r1.listError() ? 46 : 47);
  }
}
function TablesComponent_Conditional_16_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 35);
    \u0275\u0275text(1, "Carregando setores\u2026");
    \u0275\u0275elementEnd();
  }
}
function TablesComponent_Conditional_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 9);
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
function TablesComponent_Conditional_16_Conditional_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 73);
    \u0275\u0275text(1, "A\xE7\xF5es");
    \u0275\u0275elementEnd();
  }
}
function TablesComponent_Conditional_16_Conditional_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 74);
    \u0275\u0275text(2, "Nenhum setor cadastrado.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.canManageSectors() ? 4 : 3);
  }
}
function TablesComponent_Conditional_16_Conditional_2_For_15_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 73)(1, "button", 68);
    \u0275\u0275listener("click", function TablesComponent_Conditional_16_Conditional_2_For_15_Conditional_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const sector_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEditSectorModal(sector_r17));
    });
    \u0275\u0275elementStart(2, "span", 9);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 75);
    \u0275\u0275listener("click", function TablesComponent_Conditional_16_Conditional_2_For_15_Conditional_8_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r16);
      const sector_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.requestDeleteSector(sector_r17));
    });
    \u0275\u0275elementStart(5, "span", 9);
    \u0275\u0275text(6, "delete_outline");
    \u0275\u0275elementEnd()()();
  }
}
function TablesComponent_Conditional_16_Conditional_2_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 55);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, TablesComponent_Conditional_16_Conditional_2_For_15_Conditional_8_Template, 7, 0, "td", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sector_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sector_r17.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sector_r17.displayOrder);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge--success", sector_r17.active)("badge--muted", !sector_r17.active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sector_r17.active ? "Ativo" : "Inativo", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canManageSectors() ? 8 : -1);
  }
}
function TablesComponent_Conditional_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 71)(2, "table", 72)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Setor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Ordem");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, TablesComponent_Conditional_16_Conditional_2_Conditional_11_Template, 2, 0, "th", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275template(13, TablesComponent_Conditional_16_Conditional_2_Conditional_13_Template, 3, 1, "tr");
    \u0275\u0275repeaterCreate(14, TablesComponent_Conditional_16_Conditional_2_For_15_Template, 9, 8, "tr", null, _forTrack0);
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
function TablesComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TablesComponent_Conditional_16_Conditional_0_Template, 2, 0, "p", 35)(1, TablesComponent_Conditional_16_Conditional_1_Template, 4, 1, "div", 6)(2, TablesComponent_Conditional_16_Conditional_2_Template, 16, 2, "div", 70);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.isLoadingSectors() ? 0 : ctx_r1.sectorsError() ? 1 : 2);
  }
}
function TablesComponent_Conditional_17_Conditional_9_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Informe de 1 a ", ctx_r1.maxBatchTables, " mesas.");
  }
}
function TablesComponent_Conditional_17_Conditional_9_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Seu plano ainda comporta s\xF3 ", (tmp_3_0 = ctx_r1.quota()) == null ? null : tmp_3_0.remaining, " mesa(s). Diminua a quantidade ou suba o plano.");
  }
}
function TablesComponent_Conditional_17_Conditional_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Para criar v\xE1rias mesas iguais de uma vez (mesmo setor e capacidade), numeradas em sequ\xEAncia.");
    \u0275\u0275elementEnd();
  }
}
function TablesComponent_Conditional_17_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "label", 101);
    \u0275\u0275text(2, "Quantidade de mesas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275element(4, "input", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, TablesComponent_Conditional_17_Conditional_9_Conditional_5_Template, 2, 1, "span", 84)(6, TablesComponent_Conditional_17_Conditional_9_Conditional_6_Template, 2, 1, "span", 84)(7, TablesComponent_Conditional_17_Conditional_9_Conditional_7_Template, 2, 0, "span", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.tableForm.controls.quantity.invalid && ctx_r1.tableForm.controls.quantity.touched);
    \u0275\u0275property("max", ctx_r1.maxBatchTables);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tableForm.controls.quantity.invalid && ctx_r1.tableForm.controls.quantity.touched ? 5 : ctx_r1.exceedsQuota() ? 6 : 7);
  }
}
function TablesComponent_Conditional_17_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 84);
    \u0275\u0275text(1, "Informe o n\xFAmero da mesa.");
    \u0275\u0275elementEnd();
  }
}
function TablesComponent_Conditional_17_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.batchRangeLabel());
  }
}
function TablesComponent_Conditional_17_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "label", 103);
    \u0275\u0275text(2, "Nome/Apelido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275element(4, "input", 104);
    \u0275\u0275elementEnd()();
  }
}
function TablesComponent_Conditional_17_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sector_r19 = ctx.$implicit;
    \u0275\u0275property("value", sector_r19.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sector_r19.name);
  }
}
function TablesComponent_Conditional_17_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 105);
    \u0275\u0275listener("click", function TablesComponent_Conditional_17_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCreateSectorModal(true));
    });
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Novo ");
    \u0275\u0275elementEnd();
  }
}
function TablesComponent_Conditional_17_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 84);
    \u0275\u0275text(1, "Selecione um setor.");
    \u0275\u0275elementEnd();
  }
}
function TablesComponent_Conditional_17_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 84);
    \u0275\u0275text(1, "Informe a capacidade da mesa.");
    \u0275\u0275elementEnd();
  }
}
function TablesComponent_Conditional_17_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 9);
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
function TablesComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 76);
    \u0275\u0275listener("click", function TablesComponent_Conditional_17_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 77)(3, "h2", 78);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 79);
    \u0275\u0275listener("click", function TablesComponent_Conditional_17_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeTableModal());
    });
    \u0275\u0275elementStart(6, "span", 9);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "form", 80);
    \u0275\u0275listener("submit", function TablesComponent_Conditional_17_Template_form_submit_8_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.submitTable());
    });
    \u0275\u0275template(9, TablesComponent_Conditional_17_Conditional_9_Template, 8, 4, "div", 15);
    \u0275\u0275elementStart(10, "div", 81)(11, "div", 15)(12, "label", 82);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 17);
    \u0275\u0275element(15, "input", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, TablesComponent_Conditional_17_Conditional_16_Template, 2, 0, "span", 84)(17, TablesComponent_Conditional_17_Conditional_17_Template, 2, 1, "span", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, TablesComponent_Conditional_17_Conditional_18_Template, 5, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 15)(20, "label", 85);
    \u0275\u0275text(21, "Setor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 86)(23, "select", 87)(24, "option", 88);
    \u0275\u0275text(25, "Selecione um setor");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(26, TablesComponent_Conditional_17_For_27_Template, 2, 2, "option", 20, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, TablesComponent_Conditional_17_Conditional_28_Template, 4, 0, "button", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, TablesComponent_Conditional_17_Conditional_29_Template, 2, 0, "span", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 81)(31, "div", 15)(32, "label", 90);
    \u0275\u0275text(33, "Capacidade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 17);
    \u0275\u0275element(35, "input", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, TablesComponent_Conditional_17_Conditional_36_Template, 2, 0, "span", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 15)(38, "label", 92);
    \u0275\u0275text(39, "Status inicial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 17)(41, "select", 93)(42, "option", 24);
    \u0275\u0275text(43, "Ativa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option", 25);
    \u0275\u0275text(45, "Inativa");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(46, "div", 81)(47, "label", 94);
    \u0275\u0275element(48, "input", 95);
    \u0275\u0275text(49, " Permite QR Code");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 15)(51, "label", 96);
    \u0275\u0275text(52, "Observa\xE7\xF5es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 17);
    \u0275\u0275element(54, "textarea", 97);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(55, TablesComponent_Conditional_17_Conditional_55_Template, 4, 1, "div", 6);
    \u0275\u0275elementStart(56, "div", 98)(57, "button", 99);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "button", 100);
    \u0275\u0275listener("click", function TablesComponent_Conditional_17_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeTableModal());
    });
    \u0275\u0275text(60, "Cancelar");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.tableModalMode() === "create" ? ctx_r1.isBatchCreate() ? "Novas mesas" : "Nova mesa" : "Editar mesa");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.tableForm);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tableModalMode() === "create" ? 9 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isBatchCreate() ? "N\xFAmero da primeira mesa" : "N\xFAmero da mesa");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.tableForm.controls.number.invalid && ctx_r1.tableForm.controls.number.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tableForm.controls.number.invalid && ctx_r1.tableForm.controls.number.touched ? 16 : ctx_r1.batchRangeLabel() ? 17 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.isBatchCreate() ? 18 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.tableForm.controls.sectorId.invalid && ctx_r1.tableForm.controls.sectorId.touched);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.sectors());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.canManageSectors() ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tableForm.controls.sectorId.invalid && ctx_r1.tableForm.controls.sectorId.touched ? 29 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.tableForm.controls.capacity.invalid && ctx_r1.tableForm.controls.capacity.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tableForm.controls.capacity.invalid && ctx_r1.tableForm.controls.capacity.touched ? 36 : -1);
    \u0275\u0275advance(19);
    \u0275\u0275conditional(ctx_r1.tableFormError() ? 55 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSubmittingTable());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSubmittingTable() ? "Salvando\u2026" : ctx_r1.isBatchCreate() ? "Criar " + ctx_r1.tableForm.controls.quantity.value + " mesas" : "Salvar", " ");
  }
}
function TablesComponent_Conditional_18_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 84);
    \u0275\u0275text(1, "Informe um nome entre 2 e 100 caracteres.");
    \u0275\u0275elementEnd();
  }
}
function TablesComponent_Conditional_18_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 9);
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
function TablesComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 106);
    \u0275\u0275listener("click", function TablesComponent_Conditional_18_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r21);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 77)(3, "h2", 78);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 79);
    \u0275\u0275listener("click", function TablesComponent_Conditional_18_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSectorModal());
    });
    \u0275\u0275elementStart(6, "span", 9);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "form", 80);
    \u0275\u0275listener("submit", function TablesComponent_Conditional_18_Template_form_submit_8_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.submitSector());
    });
    \u0275\u0275elementStart(9, "div", 15)(10, "label", 107);
    \u0275\u0275text(11, "Nome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 17);
    \u0275\u0275element(13, "input", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, TablesComponent_Conditional_18_Conditional_14_Template, 2, 0, "span", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 15)(16, "label", 109);
    \u0275\u0275text(17, "Ordem de exibi\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 17);
    \u0275\u0275element(19, "input", 110);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 81)(21, "label", 94);
    \u0275\u0275element(22, "input", 111);
    \u0275\u0275text(23, " Ativo");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, TablesComponent_Conditional_18_Conditional_24_Template, 4, 1, "div", 6);
    \u0275\u0275elementStart(25, "div", 98)(26, "button", 99);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 100);
    \u0275\u0275listener("click", function TablesComponent_Conditional_18_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r21);
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
function TablesComponent_Conditional_19_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 9);
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
function TablesComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 106);
    \u0275\u0275listener("click", function TablesComponent_Conditional_19_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r22);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h2", 78);
    \u0275\u0275text(3, "Regenerar QR Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 35);
    \u0275\u0275text(5, " O QR Code atual da ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " deixar\xE1 de funcionar imediatamente. Voc\xEA precisar\xE1 imprimir e substituir o QR Code f\xEDsico da mesa. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, TablesComponent_Conditional_19_Conditional_9_Template, 4, 1, "div", 6);
    \u0275\u0275elementStart(10, "div", 98)(11, "button", 112);
    \u0275\u0275listener("click", function TablesComponent_Conditional_19_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmRegenerateQr());
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 100);
    \u0275\u0275listener("click", function TablesComponent_Conditional_19_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r22);
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
function TablesComponent_Conditional_20_Conditional_6_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115);
    \u0275\u0275element(1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", 100, "%");
  }
}
function TablesComponent_Conditional_20_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 35);
    \u0275\u0275text(1, " Voc\xEA j\xE1 tem ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, TablesComponent_Conditional_20_Conditional_6_Conditional_8_Template, 2, 2, "div", 115);
  }
  if (rf & 2) {
    const q_r24 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r24.tableCount);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" mesa(s) e ", q_r24.courtesy ? "o per\xEDodo gr\xE1tis" : "seu plano atual", " comporta at\xE9 ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r24.tableLimit);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(q_r24.tableLimit != null ? 8 : -1);
  }
}
function TablesComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 113);
    \u0275\u0275listener("click", function TablesComponent_Conditional_20_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r23);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "span", 114);
    \u0275\u0275text(3, "workspace_premium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 78);
    \u0275\u0275text(5, "Limite de mesas do plano atingido");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TablesComponent_Conditional_20_Conditional_6_Template, 9, 4);
    \u0275\u0275elementStart(7, "p", 35);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 98)(10, "button", 11);
    \u0275\u0275listener("click", function TablesComponent_Conditional_20_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToSubscription());
    });
    \u0275\u0275elementStart(11, "span", 9);
    \u0275\u0275text(12, "upgrade");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 100);
    \u0275\u0275listener("click", function TablesComponent_Conditional_20_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUpgradeModal());
    });
    \u0275\u0275text(15, "Agora n\xE3o");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional((tmp_1_0 = ctx_r1.quota()) ? 6 : -1, tmp_1_0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_2_0 = ctx_r1.quota()) == null ? null : tmp_2_0.courtesy) ? "Assine um plano" : "Suba para um plano maior", " para cadastrar mais mesas. Se alguma mesa n\xE3o \xE9 mais usada, voc\xEA tamb\xE9m pode exclu\xED-la para liberar espa\xE7o. ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ((tmp_3_0 = ctx_r1.quota()) == null ? null : tmp_3_0.courtesy) ? "Ver planos" : "Subir de plano", " ");
  }
}
function TablesComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 106);
    \u0275\u0275listener("click", function TablesComponent_Conditional_21_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r25);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h2", 78);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 35);
    \u0275\u0275text(5, " As mesas selecionadas saem da lista e do mapa do sal\xE3o, os QR Codes impressos param de funcionar e os n\xFAmeros ficam livres. O hist\xF3rico de pedidos, comandas e pagamentos continua nos relat\xF3rios. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 35);
    \u0275\u0275text(7, " Mesas com comanda aberta ou reserva ativa n\xE3o s\xE3o exclu\xEDdas e continuam selecionadas. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 98)(9, "button", 112);
    \u0275\u0275listener("click", function TablesComponent_Conditional_21_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmBulk());
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 116);
    \u0275\u0275listener("click", function TablesComponent_Conditional_21_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelBulk());
    });
    \u0275\u0275text(12, "Cancelar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Excluir ", ctx_r1.selectedCount(), " mesa(s)");
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.isRunningBulk());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isRunningBulk() ? "Excluindo\u2026" : "Excluir " + ctx_r1.selectedCount() + " mesa(s)", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isRunningBulk());
  }
}
function TablesComponent_Conditional_22_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 9);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.deleteTableError(), " ");
  }
}
function TablesComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 106);
    \u0275\u0275listener("click", function TablesComponent_Conditional_22_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r26);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h2", 78);
    \u0275\u0275text(3, "Excluir mesa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 35);
    \u0275\u0275text(5, " Excluir a ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "? Ela sai da lista e do mapa do sal\xE3o, o QR Code impresso para de funcionar e o n\xFAmero fica livre para outra mesa. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 35);
    \u0275\u0275text(10, " O hist\xF3rico de pedidos, comandas e pagamentos dela continua nos relat\xF3rios. Se a ideia \xE9 s\xF3 tirar de uso por um tempo, prefira ");
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12, "desativar");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, TablesComponent_Conditional_22_Conditional_14_Template, 4, 1, "div", 6);
    \u0275\u0275elementStart(15, "div", 98)(16, "button", 112);
    \u0275\u0275listener("click", function TablesComponent_Conditional_22_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDeleteTable());
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 116);
    \u0275\u0275listener("click", function TablesComponent_Conditional_22_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDeleteTable());
    });
    \u0275\u0275text(19, "Cancelar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const table_r27 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.tableLabel(table_r27.number, table_r27.name));
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.deleteTableError() ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isDeletingTable());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isDeletingTable() ? "Excluindo\u2026" : "Excluir mesa", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isDeletingTable());
  }
}
function TablesComponent_Conditional_23_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 9);
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
function TablesComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 106);
    \u0275\u0275listener("click", function TablesComponent_Conditional_23_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r28);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h2", 78);
    \u0275\u0275text(3, "Excluir setor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 35);
    \u0275\u0275text(5, " Tem certeza que deseja excluir ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "? Esta a\xE7\xE3o n\xE3o pode ser desfeita. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, TablesComponent_Conditional_23_Conditional_9_Template, 4, 1, "div", 6);
    \u0275\u0275elementStart(10, "div", 98)(11, "button", 112);
    \u0275\u0275listener("click", function TablesComponent_Conditional_23_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDeleteSector());
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 100);
    \u0275\u0275listener("click", function TablesComponent_Conditional_23_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r28);
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
function TablesComponent_Conditional_24_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 35);
    \u0275\u0275text(1, "Carregando QR Code\u2026");
    \u0275\u0275elementEnd();
  }
}
function TablesComponent_Conditional_24_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 9);
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
function TablesComponent_Conditional_24_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117);
    \u0275\u0275element(1, "img", 118);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const table_r30 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl)("alt", "QR Code da Mesa " + table_r30.number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r30.publicUrl);
  }
}
function TablesComponent_Conditional_24_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TablesComponent_Conditional_24_Conditional_10_Conditional_0_Template, 4, 3);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_3_0 = ctx_r1.qrImageUrl()) ? 0 : -1, tmp_3_0);
  }
}
function TablesComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 106);
    \u0275\u0275listener("click", function TablesComponent_Conditional_24_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r29);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 77)(3, "h2", 78);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 79);
    \u0275\u0275listener("click", function TablesComponent_Conditional_24_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeQrModal());
    });
    \u0275\u0275elementStart(6, "span", 9);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(8, TablesComponent_Conditional_24_Conditional_8_Template, 2, 0, "p", 35)(9, TablesComponent_Conditional_24_Conditional_9_Template, 4, 1, "div", 6)(10, TablesComponent_Conditional_24_Conditional_10_Template, 1, 1);
    \u0275\u0275elementStart(11, "div", 98)(12, "button", 105);
    \u0275\u0275listener("click", function TablesComponent_Conditional_24_Template_button_click_12_listener() {
      const table_r30 = \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadQrCode(table_r30, "png"));
    });
    \u0275\u0275elementStart(13, "span", 9);
    \u0275\u0275text(14, "image");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Baixar PNG ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 105);
    \u0275\u0275listener("click", function TablesComponent_Conditional_24_Template_button_click_16_listener() {
      const table_r30 = \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadQrCode(table_r30, "pdf"));
    });
    \u0275\u0275elementStart(17, "span", 9);
    \u0275\u0275text(18, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Baixar PDF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 105);
    \u0275\u0275listener("click", function TablesComponent_Conditional_24_Template_button_click_20_listener() {
      const table_r30 = \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.printQrCode(table_r30));
    });
    \u0275\u0275elementStart(21, "span", 9);
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
var MAX_BATCH_TABLES = 100;
var TABLE_SORT_OPTIONS = [
  { value: "number", label: "N\xFAmero" },
  { value: "name", label: "Nome" },
  { value: "capacity", label: "Capacidade" }
];
var TablesComponent = class _TablesComponent {
  tableLabel = formatTableLabel;
  fb = new FormBuilder();
  router = inject(Router);
  tablesService = inject(TablesService);
  tableSectorsService = inject(TableSectorsService);
  authService = inject(AuthService);
  selectedCompany = this.authService.selectedCompany;
  sortOptions = TABLE_SORT_OPTIONS;
  profileCode = computed(() => this.selectedCompany()?.profileCode ?? null);
  canManageTables = computed(() => ["ADMIN", "OWNER", "COMMERCIAL", "MANAGER"].includes(this.profileCode() ?? ""));
  canManageSectors = computed(() => ["ADMIN", "OWNER", "COMMERCIAL"].includes(this.profileCode() ?? ""));
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
  maxBatchTables = MAX_BATCH_TABLES;
  tableToRegenerateQr = signal(null);
  isRegeneratingQr = signal(false);
  regenerateQrError = signal(null);
  markingCleanedTableId = signal(null);
  markCleanedError = signal(null);
  // --- Mesas: modal de QR Code -----------------------------------------------
  qrModalTable = signal(null);
  qrImageUrl = signal(null);
  isLoadingQr = signal(false);
  qrError = signal(null);
  isPrintingAllQr = signal(false);
  printAllQrError = signal(null);
  tableForm = this.fb.nonNullable.group({
    sectorId: ["", Validators.required],
    // Só no cadastro: > 1 cria várias mesas iguais, numeradas a partir de `number`.
    quantity: this.fb.nonNullable.control(1, [Validators.required, Validators.min(1), Validators.max(MAX_BATCH_TABLES)]),
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
  // Seleção de várias mesas para ação em lote (ativar/desativar/excluir). Guarda a mesa inteira
  // por id, então a seleção sobrevive à troca de página/filtro.
  selectedTables = signal(/* @__PURE__ */ new Map());
  selectedCount = computed(() => this.selectedTables().size);
  allPageSelected = computed(() => {
    const tables = this.tables();
    const selected = this.selectedTables();
    return tables.length > 0 && tables.every((table) => selected.has(table.id));
  });
  bulkAction = signal(null);
  isRunningBulk = signal(false);
  bulkError = signal(null);
  bulkResult = signal(null);
  // Cota de mesas do plano: com o limite atingido, "Nova mesa" mostra o aviso de upgrade em vez
  // do formulário (a API também barra — ver SubscriptionAccessService#assertCanAddTables).
  quota = signal(null);
  isUpgradeModalOpen = signal(false);
  canCreateMoreTables = computed(() => !this.quota()?.limitReached);
  tableToDelete = signal(null);
  isDeletingTable = signal(false);
  deleteTableError = signal(null);
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
    this.loadQuota();
    this.loadTables(0);
  }
  // --- Abas ---------------------------------------------------------------
  setActiveTab(tab) {
    this.activeTab.set(tab);
  }
  dateTimeFormatter = brDateTimeFormat({ day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
  // --- Mesas: apresentação --------------------------------------------------
  formatShortDateTime(value) {
    const parsed = parseApiDate(value);
    return parsed ? this.dateTimeFormatter.format(parsed) : "\u2014";
  }
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
  // Status operacional (livre/ocupada/limpeza) muda por ações de outros apps (cliente pedindo/
  // pagando no cardápio digital) — sem isso, a tela só reflete essas mudanças ao trocar filtro
  // ou paginação, o que já dispara loadTables por conta própria.
  refreshTables() {
    this.loadTables(this.page());
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
  loadQuota() {
    if (!this.canManageTables()) {
      return;
    }
    this.tablesService.getQuota().subscribe({
      next: (quota) => this.quota.set(quota),
      // Sem a cota, não trava nada no front — a API continua barrando no limite.
      error: () => this.quota.set(null)
    });
  }
  closeUpgradeModal() {
    this.isUpgradeModalOpen.set(false);
  }
  goToSubscription() {
    this.isUpgradeModalOpen.set(false);
    this.router.navigate(["/painel/assinatura"]);
  }
  // Erro da API por limite do plano (ex.: cota mudou entre abrir o formulário e salvar): fecha o
  // formulário e mostra o mesmo aviso de upgrade.
  handleTableLimitError(error) {
    const body = error.error;
    if (body?.codigoErro !== TABLE_LIMIT_ERROR_CODE) {
      return false;
    }
    this.isTableModalOpen.set(false);
    this.loadQuota();
    this.isUpgradeModalOpen.set(true);
    return true;
  }
  openCreateTableModal() {
    if (this.quota()?.limitReached) {
      this.isUpgradeModalOpen.set(true);
      return;
    }
    this.tableModalMode.set("create");
    this.editingTable.set(null);
    this.tableFormError.set(null);
    this.tableForm.reset({
      quantity: 1,
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
      quantity: 1,
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
      autoDismiss(this.tableFormError, null);
      return;
    }
    this.tableFormError.set(null);
    this.isSubmittingTable.set(true);
    if (this.exceedsQuota()) {
      this.isTableModalOpen.set(false);
      this.isUpgradeModalOpen.set(true);
      return;
    }
    if (this.tableModalMode() === "create" && this.isBatchCreate()) {
      this.tablesService.createBatch(this.buildBatchPayload()).subscribe({
        next: () => {
          this.isSubmittingTable.set(false);
          this.isTableModalOpen.set(false);
          this.loadTables(0);
          this.loadQuota();
        },
        error: (error) => {
          this.isSubmittingTable.set(false);
          if (this.handleTableLimitError(error)) {
            return;
          }
          this.tableFormError.set(this.resolveErrorMessage(error, "table"));
          autoDismiss(this.tableFormError, null);
        }
      });
      return;
    }
    if (this.tableModalMode() === "create") {
      this.tablesService.create(this.buildTablePayload()).subscribe({
        next: () => {
          this.isSubmittingTable.set(false);
          this.isTableModalOpen.set(false);
          this.loadTables(0);
          this.loadQuota();
        },
        error: (error) => {
          this.isSubmittingTable.set(false);
          if (this.handleTableLimitError(error)) {
            return;
          }
          this.tableFormError.set(this.resolveErrorMessage(error, "table"));
          autoDismiss(this.tableFormError, null);
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
        autoDismiss(this.tableFormError, null);
      }
    });
  }
  // --- Mesas: ativar/desativar --------------------------------------------------
  toggleTableStatus(table) {
    const request$ = table.status === "ACTIVE" ? this.tablesService.disable(table.id) : this.tablesService.enable(table.id);
    request$.subscribe({
      next: (updated) => this.replaceTable(updated),
      error: () => {
        this.listError.set("N\xE3o foi poss\xEDvel atualizar o status da mesa.");
        autoDismiss(this.listError, null);
      }
    });
  }
  // --- Mesas: concluir limpeza ------------------------------------------------------
  markCleaned(table) {
    this.markCleanedError.set(null);
    this.markingCleanedTableId.set(table.id);
    this.tablesService.markCleaned(table.id).subscribe({
      next: (updated) => {
        this.markingCleanedTableId.set(null);
        this.replaceTable(updated);
      },
      error: (error) => {
        this.markingCleanedTableId.set(null);
        this.markCleanedError.set(this.resolveErrorMessage(error, "table"));
        autoDismiss(this.markCleanedError, null);
      }
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
        autoDismiss(this.regenerateQrError, null);
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
  // Imprime, numa única janela (uma mesa por página, com quebra de página no CSS de impressão),
  // o QR Code de todas as mesas ATIVAS da empresa — não só as da página atual da listagem, que é
  // paginada (ver PAGE_SIZE). Mesas INACTIVE ficam de fora: não estão em uso, não faz sentido
  // imprimir a plaquinha delas.
  printAllQrCodes() {
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      this.printAllQrError.set("N\xE3o foi poss\xEDvel abrir a janela de impress\xE3o. Verifique o bloqueador de pop-ups.");
      autoDismiss(this.printAllQrError, null);
      return;
    }
    printWindow.document.title = "QR Codes \u2014 Mesas";
    printWindow.document.body.innerHTML = '<p style="font-family: sans-serif; text-align: center; margin-top: 40vh;">Carregando QR Codes\u2026</p>';
    this.isPrintingAllQr.set(true);
    this.printAllQrError.set(null);
    this.tablesService.list({ status: "ACTIVE", page: 0, size: 500, sortBy: "number", sortDirection: "ASC" }).subscribe({
      next: (response) => {
        const tables = response.content;
        if (tables.length === 0) {
          this.isPrintingAllQr.set(false);
          printWindow.close();
          this.printAllQrError.set("Nenhuma mesa ativa encontrada para imprimir.");
          autoDismiss(this.printAllQrError, null);
          return;
        }
        forkJoin(tables.map((table) => this.tablesService.getQrCodePng(table.id).pipe(map((blob) => ({ table, url: URL.createObjectURL(blob) }))))).subscribe({
          next: (items) => {
            this.isPrintingAllQr.set(false);
            this.renderAllQrPrintDocument(printWindow, items);
          },
          error: () => {
            this.isPrintingAllQr.set(false);
            printWindow.close();
            this.printAllQrError.set("N\xE3o foi poss\xEDvel carregar os QR Codes para impress\xE3o.");
            autoDismiss(this.printAllQrError, null);
          }
        });
      },
      error: () => {
        this.isPrintingAllQr.set(false);
        printWindow.close();
        this.printAllQrError.set("N\xE3o foi poss\xEDvel carregar a lista de mesas.");
        autoDismiss(this.printAllQrError, null);
      }
    });
  }
  renderAllQrPrintDocument(printWindow, items) {
    const doc = printWindow.document;
    doc.open();
    doc.write("<!doctype html><html><head><title>QR Codes \u2014 Mesas</title><style>* { box-sizing: border-box; } body { margin: 0; font-family: sans-serif; color: #111; } .qr-page { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; padding: 24px; page-break-after: always; text-align: center; } .qr-page:last-child { page-break-after: auto; } .qr-page img { max-width: 80%; max-height: 65vh; } .qr-page h2 { margin: 20px 0 4px; font-size: 1.5rem; } .qr-page p { margin: 0; color: #555; }</style></head><body></body></html>");
    doc.close();
    items.forEach(({ table, url }) => {
      const page = doc.createElement("div");
      page.className = "qr-page";
      const img = doc.createElement("img");
      img.src = url;
      page.appendChild(img);
      const title = doc.createElement("h2");
      title.textContent = `Mesa ${table.number}${table.name ? " \u2014 " + table.name : ""}`;
      page.appendChild(title);
      const subtitle = doc.createElement("p");
      subtitle.textContent = table.sectorName;
      page.appendChild(subtitle);
      doc.body.appendChild(page);
    });
    this.printWhenImagesReady(printWindow);
  }
  // Só chama print() depois que todo mundo carregou — chamar cedo demais imprime páginas em
  // branco (imagem ainda não decodificada).
  printWhenImagesReady(printWindow) {
    const images = Array.from(printWindow.document.images);
    if (images.length === 0) {
      printWindow.print();
      return;
    }
    let remaining = images.length;
    const onSettled = () => {
      remaining--;
      if (remaining === 0) {
        printWindow.print();
      }
    };
    images.forEach((image) => {
      if (image.complete) {
        onSettled();
      } else {
        image.addEventListener("load", onSettled, { once: true });
        image.addEventListener("error", onSettled, { once: true });
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
  // Cadastro em lote: quantidade > 1 no modal de nova mesa.
  isBatchCreate() {
    return this.tableModalMode() === "create" && this.tableForm.controls.quantity.value > 1;
  }
  // Lote maior do que o que ainda cabe no plano.
  exceedsQuota() {
    const remaining = this.quota()?.remaining;
    return this.tableModalMode() === "create" && remaining != null && this.tableForm.controls.quantity.value > remaining;
  }
  // "Mesas 10 a 14" — prévia do intervalo que o lote vai criar.
  batchRangeLabel() {
    const start = this.tableForm.controls.number.value;
    const quantity = this.tableForm.controls.quantity.value;
    if (!start || start < 1 || !quantity || quantity < 2) {
      return null;
    }
    return `Ser\xE3o criadas ${quantity} mesas: n\xBA ${start} a ${start + quantity - 1}.`;
  }
  buildBatchPayload() {
    const value = this.tableForm.getRawValue();
    return {
      sectorId: value.sectorId,
      quantity: value.quantity,
      startNumber: value.number ?? void 0,
      capacity: value.capacity ?? 0,
      status: value.status,
      allowQr: value.allowQr,
      notes: value.notes.trim() || void 0
    };
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
      autoDismiss(this.sectorFormError, null);
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
          autoDismiss(this.sectorFormError, null);
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
        autoDismiss(this.sectorFormError, null);
      }
    });
  }
  // --- Mesas: seleção e ações em lote ----------------------------------------------
  isSelected(tableId) {
    return this.selectedTables().has(tableId);
  }
  toggleSelected(table) {
    const next = new Map(this.selectedTables());
    if (next.has(table.id)) {
      next.delete(table.id);
    } else {
      next.set(table.id, table);
    }
    this.selectedTables.set(next);
  }
  toggleSelectPage() {
    const next = new Map(this.selectedTables());
    if (this.allPageSelected()) {
      this.tables().forEach((table) => next.delete(table.id));
    } else {
      this.tables().forEach((table) => next.set(table.id, table));
    }
    this.selectedTables.set(next);
  }
  clearSelection() {
    this.selectedTables.set(/* @__PURE__ */ new Map());
    this.bulkError.set(null);
    this.bulkResult.set(null);
  }
  requestBulk(action) {
    if (this.selectedCount() === 0 || this.isRunningBulk()) {
      return;
    }
    this.bulkError.set(null);
    this.bulkResult.set(null);
    if (action === "delete") {
      this.bulkAction.set(action);
      return;
    }
    this.runBulk(action);
  }
  cancelBulk() {
    if (!this.isRunningBulk()) {
      this.bulkAction.set(null);
    }
  }
  confirmBulk() {
    const action = this.bulkAction();
    if (action) {
      this.runBulk(action);
    }
  }
  // Uma requisição por mesa (até 4 em paralelo), sem parar na primeira falha: no fim, as que
  // deram certo saem da seleção e as que falharam (ex.: mesa com comanda aberta) continuam
  // selecionadas, com o motivo.
  runBulk(action) {
    const tables = [...this.selectedTables().values()];
    this.isRunningBulk.set(true);
    this.bulkError.set(null);
    from(tables).pipe(mergeMap((table) => this.bulkRequest(action, table).pipe(map(() => ({ table, error: null })), catchError((error) => of({ table, error: this.resolveErrorMessage(error, "table") }))), 4), toArray()).subscribe((results) => {
      this.isRunningBulk.set(false);
      this.bulkAction.set(null);
      if (action === "delete") {
        this.loadQuota();
      }
      const failed = results.filter((result) => result.error);
      const succeededIds = new Set(results.filter((result) => !result.error).map((result) => result.table.id));
      this.selectedTables.set(new Map(failed.map((result) => [result.table.id, result.table])));
      const verb = action === "delete" ? "exclu\xEDda(s)" : action === "disable" ? "desativada(s)" : "ativada(s)";
      if (succeededIds.size > 0) {
        this.bulkResult.set(`${succeededIds.size} mesa(s) ${verb}.`);
        autoDismiss(this.bulkResult, null);
      }
      if (failed.length > 0) {
        const labels = failed.map((result) => this.tableLabel(result.table.number, result.table.name)).join(", ");
        this.bulkError.set(`N\xE3o foi poss\xEDvel concluir em ${failed.length} mesa(s) (${labels}): ${failed[0].error}`);
      }
      const page = this.page();
      const pageEmptied = action === "delete" && this.tables().every((table) => succeededIds.has(table.id));
      this.loadTables(pageEmptied && page > 0 ? page - 1 : page);
    });
  }
  bulkRequest(action, table) {
    switch (action) {
      case "delete":
        return this.tablesService.delete(table.id);
      case "disable":
        return this.tablesService.disable(table.id);
      default:
        return this.tablesService.enable(table.id);
    }
  }
  requestDeleteTable(table) {
    this.deleteTableError.set(null);
    this.tableToDelete.set(table);
  }
  cancelDeleteTable() {
    if (!this.isDeletingTable()) {
      this.tableToDelete.set(null);
    }
  }
  confirmDeleteTable() {
    const table = this.tableToDelete();
    if (!table) {
      return;
    }
    this.isDeletingTable.set(true);
    this.deleteTableError.set(null);
    this.tablesService.delete(table.id).subscribe({
      next: () => {
        this.isDeletingTable.set(false);
        this.tableToDelete.set(null);
        this.loadQuota();
        const page = this.page();
        this.loadTables(this.tables().length === 1 && page > 0 ? page - 1 : page);
      },
      error: (error) => {
        this.isDeletingTable.set(false);
        this.deleteTableError.set(this.resolveErrorMessage(error, "table"));
        autoDismiss(this.deleteTableError, null);
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
        autoDismiss(this.deleteSectorError, null);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TablesComponent, selectors: [["app-admin-tables"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 16, consts: [[1, "page-header", "page-header--row"], [1, "page-title"], [1, "page-subtitle"], [1, "page-header__actions"], [1, "tabs"], ["type", "button", 1, "tabs__item", 3, "click"], ["role", "alert", 1, "form-alert", "form-alert--error"], [1, "modal-backdrop"], ["type", "button", "appRipple", "", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["aria-hidden", "true", 1, "material-icons"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", 3, "btn--limit"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", 3, "click"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary"], [1, "card", "filters-card"], [1, "filters-row"], [1, "field"], ["for", "filter-sector", 1, "field__label"], [1, "field__control"], ["id", "filter-sector", 1, "field__input", 3, "change", "value"], ["value", ""], [3, "value"], ["for", "filter-status", 1, "field__label"], ["id", "filter-status", 1, "field__input", 3, "change", "value"], ["value", "all"], ["value", "ACTIVE"], ["value", "INACTIVE"], ["for", "filter-sort", 1, "field__label"], [1, "field__control", "filters-row__sort"], ["id", "filter-sort", 1, "field__input", 3, "change", "value"], ["type", "button", 1, "icon-btn", 3, "click", "title"], [1, "field", "filters-row__search"], ["for", "filter-search", 1, "field__label"], ["id", "filter-search", "type", "text", "placeholder", "Ex: 12, Varanda", 1, "field__input", 3, "input", "value"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", "filters-row__reset", 3, "click"], [1, "field__hint"], [1, "bulk-bar", 3, "bulk-bar--active"], ["role", "status", 1, "form-alert", "form-alert--success"], [1, "tables-grid"], [1, "card", "table-item", 3, "table-item--selected"], [1, "card", "pagination-card"], [1, "pagination"], [1, "pagination__info"], [1, "pagination__controls"], [1, "bulk-bar"], [1, "bulk-bar__select-all"], ["type", "checkbox", 3, "change", "checked"], [1, "bulk-bar__hint"], [1, "bulk-bar__count"], [1, "bulk-bar__actions"], ["type", "button", 1, "btn", "btn--danger", "btn--sm", 3, "click", "disabled"], [1, "card", "table-item"], [1, "table-item__header"], [1, "table-item__number"], ["type", "checkbox", 1, "table-item__check", 3, "checked"], [1, "badge"], [1, "table-item__name"], [1, "table-item__reserved"], [1, "table-item__meta"], [1, "table-item__actions"], ["type", "button", "title", "Visualizar QR Code", 1, "icon-btn", 3, "click"], ["type", "button", "title", "Baixar PNG", 1, "icon-btn", 3, "click"], ["type", "button", "title", "Baixar PDF", 1, "icon-btn", 3, "click"], ["type", "button", "title", "Imprimir QR Code", 1, "icon-btn", 3, "click"], ["type", "button", "title", "Concluir limpeza", 1, "icon-btn", 3, "disabled"], ["type", "checkbox", 1, "table-item__check", 3, "change", "checked"], ["type", "button", "title", "Concluir limpeza", 1, "icon-btn", 3, "click", "disabled"], ["type", "button", "title", "Regenerar QR Code", 1, "icon-btn", 3, "click"], ["type", "button", "title", "Editar", 1, "icon-btn", 3, "click"], ["type", "button", "title", "Excluir mesa", 1, "icon-btn", "icon-btn--danger", 3, "click"], [1, "card", "table-card"], [1, "table-wrapper"], [1, "data-table"], [1, "data-table__actions-col"], [1, "data-table__empty"], ["type", "button", "title", "Excluir", 1, "icon-btn", "icon-btn--danger", 3, "click"], [1, "modal-card", "card", 3, "click"], [1, "modal-card__header"], [1, "step-heading"], ["type", "button", "aria-label", "Fechar", 1, "icon-btn", 3, "click"], ["novalidate", "", 3, "submit", "formGroup"], [1, "field__row"], ["for", "table-number", 1, "field__label"], ["id", "table-number", "type", "number", "min", "1", "formControlName", "number", "placeholder", "Ex: 12", 1, "field__input"], [1, "field__error"], ["for", "table-sector", 1, "field__label"], [1, "field__control", "field__control--with-action"], ["id", "table-sector", "formControlName", "sectorId", 1, "field__input"], ["value", "", "disabled", ""], ["type", "button", 1, "btn", "btn--ghost", "btn--sm"], ["for", "table-capacity", 1, "field__label"], ["id", "table-capacity", "type", "number", "min", "1", "formControlName", "capacity", "placeholder", "Ex: 4", 1, "field__input"], ["for", "table-status", 1, "field__label"], ["id", "table-status", "formControlName", "status", 1, "field__input"], [1, "field__checkbox"], ["type", "checkbox", "formControlName", "allowQr"], ["for", "table-notes", 1, "field__label"], ["id", "table-notes", "rows", "3", "formControlName", "notes", "placeholder", "Opcional", 1, "field__input"], [1, "step-actions"], ["type", "submit", "appRipple", "", 1, "btn", "btn--primary", 3, "disabled"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["for", "table-quantity", 1, "field__label"], ["id", "table-quantity", "type", "number", "min", "1", "formControlName", "quantity", 1, "field__input", 3, "max"], ["for", "table-name", 1, "field__label"], ["id", "table-name", "type", "text", "formControlName", "name", "placeholder", "Opcional", 1, "field__input"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], [1, "modal-card", "modal-card--sm", "card", 3, "click"], ["for", "sector-name", 1, "field__label"], ["id", "sector-name", "type", "text", "formControlName", "name", "placeholder", "Ex: Sal\xE3o, Varanda", 1, "field__input"], ["for", "sector-display-order", 1, "field__label"], ["id", "sector-display-order", "type", "number", "min", "0", "formControlName", "displayOrder", 1, "field__input"], ["type", "checkbox", "formControlName", "active"], ["type", "button", 1, "btn", "btn--danger", 3, "click", "disabled"], [1, "modal-card", "modal-card--sm", "card", "upgrade-modal", 3, "click"], ["aria-hidden", "true", 1, "upgrade-modal__icon", "material-icons"], ["aria-hidden", "true", 1, "upgrade-modal__meter"], ["type", "button", 1, "btn", "btn--ghost", 3, "click", "disabled"], [1, "qr-preview"], [3, "src", "alt"]], template: function TablesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Mesas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3);
      \u0275\u0275template(7, TablesComponent_Conditional_7_Template, 5, 3)(8, TablesComponent_Conditional_8_Template, 1, 1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 4)(10, "button", 5);
      \u0275\u0275listener("click", function TablesComponent_Template_button_click_10_listener() {
        return ctx.setActiveTab("mesas");
      });
      \u0275\u0275text(11, " Mesas ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 5);
      \u0275\u0275listener("click", function TablesComponent_Template_button_click_12_listener() {
        return ctx.setActiveTab("setores");
      });
      \u0275\u0275text(13, " Setores ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(14, TablesComponent_Conditional_14_Template, 4, 1, "div", 6)(15, TablesComponent_Conditional_15_Template, 48, 8)(16, TablesComponent_Conditional_16_Template, 3, 1)(17, TablesComponent_Conditional_17_Template, 61, 18, "div", 7)(18, TablesComponent_Conditional_18_Template, 30, 8, "div", 7)(19, TablesComponent_Conditional_19_Template, 15, 4, "div", 7)(20, TablesComponent_Conditional_20_Template, 16, 3, "div", 7)(21, TablesComponent_Conditional_21_Template, 13, 4, "div", 7)(22, TablesComponent_Conditional_22_Template, 20, 5, "div", 7)(23, TablesComponent_Conditional_23_Template, 15, 4, "div", 7)(24, TablesComponent_Conditional_24_Template, 24, 2, "div", 7);
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_8_0;
      let tmp_11_0;
      let tmp_12_0;
      let tmp_13_0;
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" Gerencie as mesas e setores do sal\xE3o de ", (tmp_0_0 = (tmp_0_0 = ctx.selectedCompany()) == null ? null : tmp_0_0.companyName) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : "sua empresa", ". ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.activeTab() === "mesas" ? 7 : 8);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("tabs__item--active", ctx.activeTab() === "mesas");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("tabs__item--active", ctx.activeTab() === "setores");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.printAllQrError() ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "mesas" ? 15 : 16);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isTableModalOpen() ? 17 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isSectorModalOpen() ? 18 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_8_0 = ctx.tableToRegenerateQr()) ? 19 : -1, tmp_8_0);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isUpgradeModalOpen() ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.bulkAction() === "delete" ? 21 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_11_0 = ctx.tableToDelete()) ? 22 : -1, tmp_11_0);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_12_0 = ctx.sectorToDelete()) ? 23 : -1, tmp_12_0);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_13_0 = ctx.qrModalTable()) ? 24 : -1, tmp_13_0);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, RippleDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-header--row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.page-header__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 20px;\n  border-bottom: 1px solid var(--color-border);\n}\n.tabs__item[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  border: none;\n  background: transparent;\n  color: var(--color-text-muted);\n  font-size: 0.9375rem;\n  font-weight: 600;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  transition: color var(--transition-fast), border-color var(--transition-fast);\n}\n.tabs__item[_ngcontent-%COMP%]:hover {\n  color: var(--color-text);\n}\n.tabs__item--active[_ngcontent-%COMP%] {\n  color: var(--color-text);\n  border-bottom-color: var(--color-primary, #6366f1);\n}\n.filters-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-bottom: 20px;\n}\n.filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.filters-row[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  min-width: 160px;\n}\n.filters-row__search[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 220px;\n}\n.filters-row__sort[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.filters-row__reset[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.tables-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.table-item[_ngcontent-%COMP%] {\n  padding: 18px;\n  border: 1px solid transparent;\n  transition: border-color var(--transition-fast), background var(--transition-fast);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.table-item__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.table-item__number[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.0625rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.table-item__number[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--color-text-muted);\n}\n.table-item__name[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  margin: 0;\n}\n.table-item__reserved[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.8125rem;\n  color: var(--color-danger, #dc2626);\n  margin: 0;\n}\n.table-item__reserved[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.table-item__meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin: 0;\n}\n.table-item__meta[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  font-size: 0.8125rem;\n}\n.table-item__meta[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n}\n.table-item__meta[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-text);\n  font-weight: 600;\n}\n.table-item__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  margin-top: 4px;\n  padding-top: 10px;\n  border-top: 1px solid var(--color-border);\n}\n.qr-preview[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 16px 0;\n}\n.qr-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 220px;\n  width: 100%;\n  border-radius: var(--radius-sm);\n  background: #fff;\n  padding: 8px;\n}\n.table-card[_ngcontent-%COMP%] {\n  padding: 8px 0 0;\n  overflow: hidden;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.9375rem;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  text-align: left;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: 1px solid var(--color-border);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--color-border);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.02);\n}\n.data-table__actions-col[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.data-table__empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--color-text-muted);\n  padding: 32px 20px;\n  white-space: normal;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: var(--radius-full);\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.badge--success[_ngcontent-%COMP%] {\n  background: var(--color-success-bg);\n  color: var(--color-success);\n}\n.badge--muted[_ngcontent-%COMP%] {\n  background: rgba(203, 213, 225, 0.12);\n  color: var(--color-text-muted);\n}\n.badge--warning[_ngcontent-%COMP%] {\n  background: rgba(250, 204, 21, 0.14);\n  color: #facc15;\n}\n.badge--danger[_ngcontent-%COMP%] {\n  background: rgba(248, 113, 113, 0.14);\n  color: #f87171;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius-sm);\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text);\n}\n.icon-btn[_ngcontent-%COMP%]    + .icon-btn[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.icon-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(248, 113, 113, 0.12);\n  color: #f87171;\n}\n.pagination-card[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  padding: 16px 20px;\n}\n.pagination__info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n.pagination__controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(4, 8, 20, 0.64);\n  backdrop-filter: blur(2px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  z-index: 100;\n}\n.modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 640px;\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n  padding: 32px;\n}\n.modal-card--sm[_ngcontent-%COMP%] {\n  max-width: 420px;\n}\n.modal-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.step-heading[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n}\n.field__row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.field__row[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 180px;\n}\n.field__control--with-action[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.field__control--with-action[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.step-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-top: 24px;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #f87171;\n  color: #2a0a0a;\n}\n.btn--danger[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n  transform: translateY(-2px);\n}\nselect.field__input[_ngcontent-%COMP%] {\n  appearance: none;\n  cursor: pointer;\n}\n.table-item--selected[_ngcontent-%COMP%] {\n  border-color: var(--color-accent);\n  background: color-mix(in srgb, var(--color-accent) 6%, var(--color-bg-card));\n}\n.table-item__check[_ngcontent-%COMP%], \n.bulk-bar__select-all[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  margin: 0;\n  accent-color: var(--color-accent);\n  cursor: pointer;\n}\n.bulk-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px 16px;\n  margin-bottom: 16px;\n  padding: 10px 14px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n}\n.bulk-bar--active[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 8px;\n  z-index: 5;\n  border-color: var(--color-accent);\n  background: var(--color-bg-card);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n.bulk-bar__select-all[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.bulk-bar__count[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--color-accent);\n}\n.bulk-bar__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.bulk-bar__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-left: auto;\n}\n.btn--limit[_ngcontent-%COMP%] {\n  opacity: 0.85;\n}\n.upgrade-modal[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.upgrade-modal[_ngcontent-%COMP%]   .step-actions[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.upgrade-modal__icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 52px;\n  height: 52px;\n  margin: 0 auto 8px;\n  border-radius: var(--radius-full);\n  background: rgba(214, 164, 79, 0.16);\n  color: #d6a44f;\n  font-size: 28px;\n}\n.upgrade-modal__meter[_ngcontent-%COMP%] {\n  height: 8px;\n  margin: 4px 0 12px;\n  border-radius: var(--radius-full);\n  background: var(--color-border);\n  overflow: hidden;\n}\n.upgrade-modal__meter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  background: #d6a44f;\n}\n/*# sourceMappingURL=tables.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TablesComponent, { className: "TablesComponent", filePath: "src\\app\\features\\admin\\pages\\tables\\tables.component.ts", lineNumber: 59 });
})();
export {
  TablesComponent
};
//# sourceMappingURL=chunk-5D3K7CJH.js.map
