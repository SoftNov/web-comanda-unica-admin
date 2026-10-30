import {
  TablesService
} from "./chunk-AINUU7VH.js";
import {
  autoDismiss
} from "./chunk-JD6JJHYZ.js";
import {
  RippleDirective
} from "./chunk-UVFWKPXF.js";
import {
  ServiceRequestsService
} from "./chunk-PRMWQI6D.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-BTGRTOWH.js";
import {
  AuthService
} from "./chunk-6ERKNQ3W.js";
import {
  brDateTimeFormat,
  parseApiDate
} from "./chunk-ZLRUWLWP.js";
import {
  EMPTY,
  computed,
  defer,
  inject,
  input,
  retry,
  signal,
  timer,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-QBSIROZR.js";

// src/app/features/admin/pages/servicos/servicos.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ServicosComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h1", 4);
    \u0275\u0275text(2, "Servi\xE7os");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 5);
    \u0275\u0275text(4, "Limpeza, chamar gar\xE7om/caixa, reclama\xE7\xE3o e ajuda pedidos pelas mesas.");
    \u0275\u0275elementEnd()();
  }
}
function ServicosComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "span", 6);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.actionError(), " ");
  }
}
function ServicosComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "Carregando servi\xE7os\u2026");
    \u0275\u0275elementEnd();
  }
}
function ServicosComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "span", 6);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.listError(), " ");
  }
}
function ServicosComponent_Conditional_4_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 9)(1, "span", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const type_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-type", type_r3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.typeIcon(type_r3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.typeLabel(type_r3), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.countByType().get(type_r3));
  }
}
function ServicosComponent_Conditional_4_ForEmpty_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 10);
    \u0275\u0275text(1, "Nenhuma solicita\xE7\xE3o no momento.");
    \u0275\u0275elementEnd();
  }
}
function ServicosComponent_Conditional_4_For_11_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1, "Vazio");
    \u0275\u0275elementEnd();
  }
}
function ServicosComponent_Conditional_4_For_11_For_9_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28)(1, "span", 6);
    \u0275\u0275text(2, "sticky_note_2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const request_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", request_r4.notes, " ");
  }
}
function ServicosComponent_Conditional_4_For_11_For_9_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "span", 31)(2, "span", 6);
    \u0275\u0275text(3, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const request_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("title", "Assumiu \xE0s " + ctx_r0.formatDateTime(request_r4.assignedAt));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", request_r4.assignedToUserName, " ");
  }
}
function ServicosComponent_Conditional_4_For_11_For_9_Conditional_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 33);
    \u0275\u0275text(1, " Movendo\u2026 ");
  }
}
function ServicosComponent_Conditional_4_For_11_For_9_Conditional_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
  }
  if (rf & 2) {
    const request_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(request_r4.status === "OPEN" ? "front_hand" : "task_alt");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.nextActionLabel(request_r4.status), " ");
  }
}
function ServicosComponent_Conditional_4_For_11_For_9_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "button", 32);
    \u0275\u0275listener("click", function ServicosComponent_Conditional_4_For_11_For_9_Conditional_14_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const request_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.advance(request_r4));
    });
    \u0275\u0275template(2, ServicosComponent_Conditional_4_For_11_For_9_Conditional_14_Conditional_2_Template, 2, 0)(3, ServicosComponent_Conditional_4_For_11_For_9_Conditional_14_Conditional_3_Template, 3, 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const request_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("request-card__advance--outline", request_r4.status === "IN_PROGRESS");
    \u0275\u0275property("disabled", ctx_r0.movingRequestId() === request_r4.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.movingRequestId() === request_r4.id ? 2 : 3);
  }
}
function ServicosComponent_Conditional_4_For_11_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "span", 23)(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 25);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 26);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 27);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ServicosComponent_Conditional_4_For_11_For_9_Conditional_12_Template, 4, 1, "p", 28)(13, ServicosComponent_Conditional_4_For_11_For_9_Conditional_13_Template, 5, 2, "div", 29)(14, ServicosComponent_Conditional_4_For_11_For_9_Conditional_14_Template, 4, 4, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const request_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("request-card--in-progress", request_r4.status === "IN_PROGRESS");
    \u0275\u0275attribute("data-type", request_r4.type);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.typeIcon(request_r4.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.typeLabel(request_r4.type), " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r0.formatDateTime(request_r4.createdAt));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.formatTime(request_r4.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Mesa ", request_r4.tableNumber, "", request_r4.tableName ? " \u2014 " + request_r4.tableName : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.requestOrigin(request_r4));
    \u0275\u0275advance();
    \u0275\u0275conditional(request_r4.notes ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(request_r4.assignedToUserName ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.canAdvance(request_r4) ? 14 : -1);
  }
}
function ServicosComponent_Conditional_4_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 15)(2, "h2", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 18);
    \u0275\u0275template(7, ServicosComponent_Conditional_4_For_11_Conditional_7_Template, 2, 0, "p", 19);
    \u0275\u0275repeaterCreate(8, ServicosComponent_Conditional_4_For_11_For_9_Template, 15, 13, "div", 20, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const column_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.statusLabel(column_r6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.requestsFor(column_r6).length);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.requestsFor(column_r6).length === 0 ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.requestsFor(column_r6));
  }
}
function ServicosComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "ul", 8);
    \u0275\u0275repeaterCreate(2, ServicosComponent_Conditional_4_For_3_Template, 6, 4, "li", 9, \u0275\u0275repeaterTrackByIdentity, false, ServicosComponent_Conditional_4_ForEmpty_4_Template, 2, 0, "li", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 11);
    \u0275\u0275listener("click", function ServicosComponent_Conditional_4_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openCreateModal());
    });
    \u0275\u0275elementStart(6, "span", 6);
    \u0275\u0275text(7, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Nova ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 12);
    \u0275\u0275repeaterCreate(10, ServicosComponent_Conditional_4_For_11_Template, 10, 3, "div", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.activeLegendTypes());
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r0.columns);
  }
}
function ServicosComponent_Conditional_5_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const table_r8 = ctx.$implicit;
    \u0275\u0275property("value", table_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("Mesa ", table_r8.number, "", table_r8.name ? " \u2014 " + table_r8.name : "", "");
  }
}
function ServicosComponent_Conditional_5_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "Selecione a mesa.");
    \u0275\u0275elementEnd();
  }
}
function ServicosComponent_Conditional_5_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", type_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.typeLabel(type_r9));
  }
}
function ServicosComponent_Conditional_5_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "span", 6);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.createError(), " ");
  }
}
function ServicosComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275listener("click", function ServicosComponent_Conditional_5_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeCreateModal());
    });
    \u0275\u0275elementStart(1, "div", 35);
    \u0275\u0275listener("click", function ServicosComponent_Conditional_5_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 36)(3, "h2", 37);
    \u0275\u0275text(4, "Nova solicita\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 38);
    \u0275\u0275listener("click", function ServicosComponent_Conditional_5_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeCreateModal());
    });
    \u0275\u0275elementStart(6, "span", 6);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "form", 39);
    \u0275\u0275listener("submit", function ServicosComponent_Conditional_5_Template_form_submit_8_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r0.submitCreate());
    });
    \u0275\u0275elementStart(9, "div", 40)(10, "label", 41);
    \u0275\u0275text(11, "Mesa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 42)(13, "select", 43)(14, "option", 44);
    \u0275\u0275text(15, "Selecione a mesa");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(16, ServicosComponent_Conditional_5_For_17_Template, 2, 3, "option", 45, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, ServicosComponent_Conditional_5_Conditional_18_Template, 2, 0, "span", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 40)(20, "label", 47);
    \u0275\u0275text(21, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 42)(23, "select", 48);
    \u0275\u0275repeaterCreate(24, ServicosComponent_Conditional_5_For_25_Template, 2, 2, "option", 45, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 40)(27, "label", 49);
    \u0275\u0275text(28, "Observa\xE7\xE3o (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 42);
    \u0275\u0275element(30, "textarea", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, ServicosComponent_Conditional_5_Conditional_31_Template, 4, 1, "div", 1);
    \u0275\u0275elementStart(32, "div", 51)(33, "button", 52);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 53);
    \u0275\u0275listener("click", function ServicosComponent_Conditional_5_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeCreateModal());
    });
    \u0275\u0275text(36, "Cancelar");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx_r0.createForm);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("field__input--invalid", ctx_r0.createForm.controls.tableId.invalid && ctx_r0.createForm.controls.tableId.touched);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.tables());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.createForm.controls.tableId.invalid && ctx_r0.createForm.controls.tableId.touched ? 18 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r0.types());
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r0.createError() ? 31 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isSubmittingCreate());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isSubmittingCreate() ? "Abrindo\u2026" : "Abrir solicita\xE7\xE3o", " ");
  }
}
var WS_RETRY_DELAY_MS = 5e3;
var WS_SILENT_RETRIES = 3;
var RECENT_MOVE_GUARD_MS = 8e3;
var STATUS_RANK = {
  OPEN: 0,
  IN_PROGRESS: 1,
  RESOLVED: 2
};
var BOARD_COLUMNS = ["OPEN", "IN_PROGRESS"];
var STATUS_LABELS = {
  OPEN: "Aberta",
  IN_PROGRESS: "Em atendimento",
  RESOLVED: "Atendida"
};
var TYPE_LABELS = {
  CLEANING: "Limpeza",
  CALL_WAITER: "Chamar gar\xE7om",
  CALL_CASHIER: "Chamar caixa",
  COMPLAINT: "Reclama\xE7\xE3o",
  HELP: "Ajuda"
};
var TYPE_ICONS = {
  CLEANING: "cleaning_services",
  CALL_WAITER: "room_service",
  CALL_CASHIER: "point_of_sale",
  COMPLAINT: "report_problem",
  HELP: "help"
};
var LEGEND_TYPES = ["CALL_WAITER", "CALL_CASHIER", "CLEANING", "HELP", "COMPLAINT"];
var NEXT_STATUS = {
  OPEN: "IN_PROGRESS",
  IN_PROGRESS: "RESOLVED"
};
var NEXT_ACTION_LABEL = {
  OPEN: "Assumir",
  IN_PROGRESS: "Concluir atendimento"
};
var ServicosComponent = class _ServicosComponent {
  // Dentro da home (aba do DashboardComponent): sem o cabeçalho da página, que a aba já faz.
  embedded = input(false);
  fb = new FormBuilder();
  serviceRequestsService = inject(ServiceRequestsService);
  tablesService = inject(TablesService);
  authService = inject(AuthService);
  dateTimeFormatter = brDateTimeFormat({ dateStyle: "short", timeStyle: "short" });
  timeFormatter = brDateTimeFormat({ timeStyle: "short" });
  selectedCompany = this.authService.selectedCompany;
  requests = signal([]);
  isLoading = signal(true);
  listError = signal(null);
  columns = BOARD_COLUMNS;
  requestsByStatus = computed(() => {
    const grouped = /* @__PURE__ */ new Map();
    for (const request of this.requests()) {
      const bucket = grouped.get(request.status) ?? [];
      bucket.push(request);
      grouped.set(request.status, bucket);
    }
    return grouped;
  });
  movingRequestId = signal(null);
  actionError = signal(null);
  // --- Nova solicitação (modal) ---------------------------------------------------
  tables = signal([]);
  types = signal([]);
  isCreateModalOpen = signal(false);
  isSubmittingCreate = signal(false);
  createError = signal(null);
  createForm = this.fb.nonNullable.group({
    tableId: this.fb.nonNullable.control("", Validators.required),
    type: this.fb.nonNullable.control("CLEANING", Validators.required),
    notes: this.fb.control(null)
  });
  requestsSubscription;
  // Solicitações movidas/concluídas por esta tela há pouco: id -> estado gravado (null = resolvida).
  recentMoves = /* @__PURE__ */ new Map();
  constructor() {
    this.loadTables();
    this.loadTypes();
    this.connectRealtimeRequests();
  }
  ngOnDestroy() {
    this.requestsSubscription?.unsubscribe();
  }
  // --- Apresentação -------------------------------------------------------------
  statusLabel(status) {
    return STATUS_LABELS[status];
  }
  typeLabel(type) {
    return TYPE_LABELS[type];
  }
  typeIcon(type) {
    return TYPE_ICONS[type];
  }
  // Quantas solicitações ativas (abertas + em atendimento) há de cada tipo — números da legenda.
  countByType = computed(() => {
    const counts = /* @__PURE__ */ new Map();
    for (const status of this.columns) {
      for (const request of this.requestsFor(status)) {
        counts.set(request.type, (counts.get(request.type) ?? 0) + 1);
      }
    }
    return counts;
  });
  activeLegendTypes = computed(() => LEGEND_TYPES.filter((type) => this.countByType().get(type)));
  nextActionLabel(status) {
    return NEXT_ACTION_LABEL[status];
  }
  canAdvance(request) {
    return !!NEXT_STATUS[request.status];
  }
  requestOrigin(request) {
    if (request.requestedByCustomerName) {
      return `Cliente: ${request.requestedByCustomerName}`;
    }
    if (request.requestedByUserName) {
      return `Aberto por ${request.requestedByUserName}`;
    }
    return "\u2014";
  }
  formatDateTime(value) {
    const parsed = parseApiDate(value);
    return parsed ? this.dateTimeFormatter.format(parsed) : "\u2014";
  }
  formatTime(value) {
    const parsed = parseApiDate(value);
    return parsed ? this.timeFormatter.format(parsed) : "\u2014";
  }
  requestsFor(status) {
    return this.requestsByStatus().get(status) ?? [];
  }
  // --- Tempo real ---------------------------------------------------------------
  refresh() {
    this.connectRealtimeRequests();
  }
  connectRealtimeRequests() {
    const companyId = this.selectedCompany()?.companyId;
    if (!companyId) {
      return;
    }
    this.requestsSubscription?.unsubscribe();
    this.isLoading.set(true);
    this.listError.set(null);
    this.requestsSubscription = defer(() => {
      const token = this.authService.getAccessToken();
      if (!token) {
        this.authService.logout();
        return EMPTY;
      }
      return this.serviceRequestsService.connectRealtime(companyId, token);
    }).pipe(retry({
      delay: (_, retryCount) => {
        if (retryCount >= WS_SILENT_RETRIES) {
          this.isLoading.set(false);
          this.listError.set("N\xE3o foi poss\xEDvel conectar \xE0 atualiza\xE7\xE3o em tempo real dos servi\xE7os.");
        }
        return timer(WS_RETRY_DELAY_MS);
      },
      resetOnSuccess: true
    })).subscribe({
      next: (response) => {
        this.requests.set(this.withRecentMoves(response));
        this.isLoading.set(false);
        this.listError.set(null);
      },
      error: () => {
        this.isLoading.set(false);
        this.listError.set("N\xE3o foi poss\xEDvel conectar \xE0 atualiza\xE7\xE3o em tempo real dos servi\xE7os.");
      }
    });
  }
  // --- Movimentação de status -----------------------------------------------------
  advance(request) {
    const next = NEXT_STATUS[request.status];
    if (!next || this.movingRequestId()) {
      return;
    }
    this.movingRequestId.set(request.id);
    this.actionError.set(null);
    this.serviceRequestsService.updateStatus(request.id, { status: next }).subscribe({
      next: (updated) => {
        this.movingRequestId.set(null);
        this.applyUpdatedRequest(request, updated);
      },
      error: (error) => {
        this.movingRequestId.set(null);
        if (error.status === 422) {
          this.actionError.set("Esta solicita\xE7\xE3o j\xE1 tinha sido atualizada \u2014 a lista foi recarregada.");
          this.refresh();
        } else {
          this.actionError.set(this.resolveErrorMessage(error));
        }
        autoDismiss(this.actionError, null);
      }
    });
  }
  withRecentMoves(snapshot) {
    const now = Date.now();
    for (const [id, move] of this.recentMoves) {
      if (move.until <= now) {
        this.recentMoves.delete(id);
      }
    }
    if (this.recentMoves.size === 0) {
      return snapshot;
    }
    const merged = [];
    for (const request of snapshot) {
      const move = this.recentMoves.get(request.id);
      if (!move) {
        merged.push(request);
      } else if (move.request && STATUS_RANK[request.status] < STATUS_RANK[move.request.status]) {
        merged.push(move.request);
      } else if (move.request) {
        this.recentMoves.delete(request.id);
        merged.push(request);
      }
    }
    return merged;
  }
  applyUpdatedRequest(original, updated) {
    this.recentMoves.set(original.id, {
      request: updated.status === "RESOLVED" ? null : updated,
      until: Date.now() + RECENT_MOVE_GUARD_MS
    });
    this.requests.update((list) => {
      if (updated.status === "RESOLVED") {
        return list.filter((current) => current.id !== original.id);
      }
      return list.map((current) => current.id === original.id ? updated : current);
    });
  }
  // --- Nova solicitação (modal) ----------------------------------------------------
  openCreateModal() {
    this.createError.set(null);
    this.createForm.reset({ tableId: "", type: "CLEANING", notes: null });
    this.isCreateModalOpen.set(true);
  }
  closeCreateModal() {
    this.isCreateModalOpen.set(false);
  }
  submitCreate() {
    if (this.createForm.invalid) {
      this.createForm.markAllAsTouched();
      return;
    }
    const value = this.createForm.getRawValue();
    this.isSubmittingCreate.set(true);
    this.createError.set(null);
    const payload = {
      tableId: value.tableId,
      type: value.type,
      notes: value.notes || void 0
    };
    this.serviceRequestsService.create(payload).subscribe({
      next: (created) => {
        this.isSubmittingCreate.set(false);
        this.isCreateModalOpen.set(false);
        this.requests.update((list) => [...list, created]);
      },
      error: (error) => {
        this.isSubmittingCreate.set(false);
        this.createError.set(this.resolveErrorMessage(error));
        autoDismiss(this.createError, null);
      }
    });
  }
  loadTables() {
    this.tablesService.list({ status: "ACTIVE", page: 0, size: 200, sortBy: "number", sortDirection: "ASC" }).subscribe({
      next: (response) => this.tables.set(response.content),
      error: () => this.tables.set([])
    });
  }
  loadTypes() {
    this.serviceRequestsService.listTypes().subscribe({
      next: (types) => this.types.set(types),
      error: () => this.types.set(["CLEANING", "CALL_WAITER", "CALL_CASHIER", "COMPLAINT", "HELP"])
    });
  }
  // --- Erros --------------------------------------------------------------------
  resolveErrorMessage(error) {
    const body = error.error;
    if (body?.mensagem) {
      return body.mensagem;
    }
    if (body?.titulo) {
      return body.titulo;
    }
    if (error.status === 404) {
      return "Mesa ou solicita\xE7\xE3o n\xE3o encontrada.";
    }
    if (error.status === 403) {
      return "Voc\xEA n\xE3o tem permiss\xE3o para realizar esta a\xE7\xE3o.";
    }
    if (error.status === 422) {
      return "N\xE3o \xE9 poss\xEDvel mover a solicita\xE7\xE3o para este status a partir do status atual.";
    }
    return "N\xE3o foi poss\xEDvel concluir a opera\xE7\xE3o. Tente novamente em instantes.";
  }
  static \u0275fac = function ServicosComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServicosComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServicosComponent, selectors: [["app-admin-servicos"]], inputs: { embedded: [1, "embedded"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 4, consts: [[1, "page-header"], ["role", "alert", 1, "form-alert", "form-alert--error"], [1, "field__hint"], [1, "modal-backdrop"], [1, "page-title"], [1, "page-subtitle"], ["aria-hidden", "true", 1, "material-icons"], [1, "services-toolbar"], ["aria-label", "Solicita\xE7\xF5es ativas por tipo", 1, "type-legend"], [1, "type-legend__item"], [1, "services-toolbar__idle"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", "btn--sm", "services-toolbar__new", 3, "click"], [1, "board"], [1, "board-column"], [1, "type-legend__count"], [1, "board-column__header"], [1, "board-column__title"], [1, "badge", "badge--muted"], [1, "board-column__list"], [1, "board-column__empty"], [1, "request-card", "card", 3, "request-card--in-progress"], [1, "request-card", "card"], [1, "request-card__header"], [1, "request-card__type"], ["aria-hidden", "true", 1, "request-card__icon", "material-icons"], [1, "request-card__time", 3, "title"], [1, "request-card__table"], [1, "request-card__origin"], [1, "request-card__notes"], [1, "request-card__footer"], [1, "request-card__actions"], [1, "request-card__assigned", 3, "title"], ["type", "button", 1, "btn", "btn--sm", "request-card__advance", 3, "click", "disabled"], ["aria-hidden", "true", 1, "request-card__spinner"], [1, "modal-backdrop", 3, "click"], [1, "modal-card", "modal-card--sm", "card", 3, "click"], [1, "modal-card__header"], [1, "step-heading"], ["type", "button", "aria-label", "Fechar", 1, "icon-btn", 3, "click"], ["novalidate", "", 3, "submit", "formGroup"], [1, "field"], ["for", "request-table", 1, "field__label"], [1, "field__control"], ["id", "request-table", "formControlName", "tableId", 1, "field__input"], ["value", "", "disabled", ""], [3, "value"], [1, "field__error"], ["for", "request-type", 1, "field__label"], ["id", "request-type", "formControlName", "type", 1, "field__input"], ["for", "request-notes", 1, "field__label"], ["id", "request-notes", "rows", "3", "formControlName", "notes", "placeholder", "Detalhe a solicita\xE7\xE3o, se necess\xE1rio", 1, "field__input"], [1, "step-actions"], ["type", "submit", "appRipple", "", 1, "btn", "btn--primary", 3, "disabled"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"]], template: function ServicosComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ServicosComponent_Conditional_0_Template, 5, 0, "div", 0)(1, ServicosComponent_Conditional_1_Template, 4, 1, "div", 1)(2, ServicosComponent_Conditional_2_Template, 2, 0, "p", 2)(3, ServicosComponent_Conditional_3_Template, 4, 1, "div", 1)(4, ServicosComponent_Conditional_4_Template, 12, 1)(5, ServicosComponent_Conditional_5_Template, 37, 7, "div", 3);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.embedded() ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.actionError() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 2 : ctx.listError() ? 3 : 4);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isCreateModalOpen() ? 5 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RippleDirective], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-header--row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\nselect.field__input[_ngcontent-%COMP%] {\n  appearance: none;\n  cursor: pointer;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: var(--radius-full);\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.badge--muted[_ngcontent-%COMP%] {\n  background: rgba(203, 213, 225, 0.12);\n  color: var(--color-text-muted);\n}\n[data-type=CALL_WAITER][_ngcontent-%COMP%] {\n  --tone: #60a5fa;\n  --tone-bg: rgba(96, 165, 250, 0.14);\n}\n[data-type=CALL_CASHIER][_ngcontent-%COMP%] {\n  --tone: #4ade80;\n  --tone-bg: rgba(74, 222, 128, 0.14);\n}\n[data-type=CLEANING][_ngcontent-%COMP%] {\n  --tone: #22d3ee;\n  --tone-bg: rgba(34, 211, 238, 0.14);\n}\n[data-type=HELP][_ngcontent-%COMP%] {\n  --tone: #fbbf24;\n  --tone-bg: rgba(251, 191, 36, 0.14);\n}\n[data-type=COMPLAINT][_ngcontent-%COMP%] {\n  --tone: #f87171;\n  --tone-bg: rgba(248, 113, 113, 0.16);\n}\n.services-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.services-toolbar__new[_ngcontent-%COMP%] {\n  margin-left: auto;\n  flex-shrink: 0;\n}\n.services-toolbar__idle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n.type-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  min-width: 0;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.type-legend__item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 8px 6px 10px;\n  border-radius: var(--radius-full);\n  border: 1px solid color-mix(in srgb, var(--tone) 35%, transparent);\n  background: var(--tone-bg);\n  color: var(--color-text);\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.type-legend__item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--tone);\n}\n.type-legend__count[_ngcontent-%COMP%] {\n  min-width: 22px;\n  padding: 1px 7px;\n  border-radius: var(--radius-full);\n  background: var(--tone);\n  color: #0b1220;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-align: center;\n}\n.board[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  overflow-x: auto;\n  padding-bottom: 8px;\n}\n.board-column[_ngcontent-%COMP%] {\n  flex: 1 0 300px;\n  max-width: 360px;\n  min-width: 280px;\n  background: var(--color-bg-elevated);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.board-column__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.board-column__title[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: var(--color-text);\n}\n.board-column__list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  min-height: 40px;\n}\n.board-column__empty[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n  text-align: center;\n  padding: 16px 0;\n}\n.request-card[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 14px 16px 14px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  overflow: hidden;\n  border-color: color-mix(in srgb, var(--tone) 32%, var(--color-border));\n  background:\n    linear-gradient(\n      135deg,\n      var(--tone-bg),\n      transparent 60%),\n    var(--color-bg-card);\n  transition: border-color var(--transition-fast);\n}\n.request-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0 auto 0 0;\n  width: 4px;\n  background: var(--tone);\n}\n.request-card[_ngcontent-%COMP%]:hover {\n  border-color: color-mix(in srgb, var(--tone) 60%, var(--color-border));\n}\n.request-card--in-progress[_ngcontent-%COMP%] {\n  background: var(--color-bg-card);\n}\n.request-card[data-type=COMPLAINT][_ngcontent-%COMP%]:not(.request-card--in-progress) {\n  animation: _ngcontent-%COMP%_request-card-attention 2.4s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_request-card-attention {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(248, 113, 113, 0);\n  }\n  50% {\n    box-shadow: 0 0 0 4px rgba(248, 113, 113, 0.18);\n  }\n}\n.request-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.request-card__type[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 600;\n  font-size: 0.9375rem;\n  color: var(--color-text);\n}\n.request-card__icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: var(--tone-bg);\n  color: var(--tone);\n  font-size: 18px;\n}\n.request-card__time[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.request-card__table[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: var(--color-text);\n  font-weight: 500;\n}\n.request-card__origin[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.request-card__notes[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n  font-style: italic;\n}\n.request-card__notes[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: 1px;\n}\n.request-card__footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding-top: 8px;\n  border-top: 1px solid var(--color-border);\n}\n.request-card__assigned[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.request-card__assigned[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.request-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.request-card__advance[_ngcontent-%COMP%] {\n  flex: 1;\n  background: var(--tone);\n  color: #0b1220;\n  font-weight: 700;\n}\n.request-card__advance[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.request-card__advance[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(1.08);\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px -6px var(--tone);\n}\n.request-card__advance[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--tone);\n  outline-offset: 2px;\n}\n.request-card__advance[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: progress;\n}\n.request-card__advance--outline[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: var(--tone);\n  color: var(--tone);\n}\n.request-card__advance--outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--tone-bg);\n  filter: none;\n}\n.request-card__spinner[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  border: 2px solid currentColor;\n  border-top-color: transparent;\n  animation: _ngcontent-%COMP%_request-card-spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_request-card-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .request-card[data-type=COMPLAINT][_ngcontent-%COMP%]:not(.request-card--in-progress) {\n    animation: none;\n    box-shadow: 0 0 0 2px rgba(248, 113, 113, 0.3);\n  }\n  .request-card__advance[_ngcontent-%COMP%]:hover:not(:disabled) {\n    transform: none;\n  }\n}\n.icon-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius-sm);\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text);\n}\n.icon-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(4, 8, 20, 0.64);\n  backdrop-filter: blur(2px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  z-index: 100;\n}\n.modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 520px;\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n  padding: 32px;\n}\n.modal-card--sm[_ngcontent-%COMP%] {\n  max-width: 420px;\n}\n.modal-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.step-heading[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n}\n.step-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 24px;\n}\n/*# sourceMappingURL=servicos.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServicosComponent, { className: "ServicosComponent", filePath: "src\\app\\features\\admin\\pages\\servicos\\servicos.component.ts", lineNumber: 78 });
})();

export {
  ServicosComponent
};
//# sourceMappingURL=chunk-MSA33VGP.js.map
