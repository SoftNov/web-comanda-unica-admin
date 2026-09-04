import {
  TablesService
} from "./chunk-4BGHJL5Z.js";
import {
  cpfValidator
} from "./chunk-XZ5ZAXHN.js";
import {
  formatCPF,
  formatCellphone,
  maskCPF,
  onlyDigits
} from "./chunk-5JXQFZ3G.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
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
  apiDateTime,
  brDateTimeFormat,
  brDateTimeLocalFromNow,
  brDateTimeLocalToApi,
  parseApiDate
} from "./chunk-XDLONSRE.js";
import {
  environment
} from "./chunk-3BRF5UDA.js";
import {
  HttpClient,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate4
} from "./chunk-74GQPZJ4.js";

// src/app/shared/services/reservations.service.ts
var ReservationsService = class _ReservationsService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiBaseUrl}/api/v1/reservations`;
  list(includeResolved = false) {
    const params = {};
    if (includeResolved) {
      params["includeResolved"] = "true";
    }
    return this.http.get(this.baseUrl, { params });
  }
  history(params) {
    const httpParams = {
      page: params.page,
      size: params.size,
      sortBy: params.sortBy,
      sortDirection: params.sortDirection
    };
    if (params.startDate) {
      httpParams["startDate"] = params.startDate;
    }
    if (params.endDate) {
      httpParams["endDate"] = params.endDate;
    }
    if (params.status) {
      httpParams["status"] = params.status;
    }
    if (params.search) {
      httpParams["search"] = params.search;
    }
    return this.http.get(`${this.baseUrl}/history`, { params: httpParams });
  }
  create(payload) {
    return this.http.post(this.baseUrl, payload);
  }
  update(id, payload) {
    return this.http.patch(`${this.baseUrl}/${id}`, payload);
  }
  resolve(id, outcome) {
    return this.http.post(`${this.baseUrl}/${id}/resolve`, { outcome });
  }
  static \u0275fac = function ReservationsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReservationsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReservationsService, factory: _ReservationsService.\u0275fac, providedIn: "root" });
};

// src/app/features/admin/pages/reservas/reservas.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function ReservasComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 5);
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
function ReservasComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "Carregando reservas\u2026");
    \u0275\u0275elementEnd();
  }
}
function ReservasComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 5);
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
function ReservasComponent_Conditional_18_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "Nenhuma reserva ativa no momento.");
    \u0275\u0275elementEnd();
  }
}
function ReservasComponent_Conditional_18_Conditional_6_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23)(1, "span", 5);
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reservation_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", reservation_r4.guestName || "Sem nome", "", reservation_r4.guestPhone ? " \xB7 " + reservation_r4.guestPhone : "", " ", reservation_r4.guestDocument ? " \xB7 CPF " + ctx_r0.maskDocument(reservation_r4.guestDocument) : "", " ");
  }
}
function ReservasComponent_Conditional_18_Conditional_6_For_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24)(1, "span", 5);
    \u0275\u0275text(2, "sticky_note_2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reservation_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", reservation_r4.notes, " ");
  }
}
function ReservasComponent_Conditional_18_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "span", 19)(3, "span", 5);
    \u0275\u0275text(4, "event_seat");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 21)(9, "span", 5);
    \u0275\u0275text(10, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Segura at\xE9 ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 22);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, ReservasComponent_Conditional_18_Conditional_6_For_2_Conditional_16_Template, 4, 3, "p", 23)(17, ReservasComponent_Conditional_18_Conditional_6_For_2_Conditional_17_Template, 4, 1, "p", 24);
    \u0275\u0275elementStart(18, "p", 25);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 26)(21, "button", 27);
    \u0275\u0275listener("click", function ReservasComponent_Conditional_18_Conditional_6_For_2_Template_button_click_21_listener() {
      const reservation_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.resolve(reservation_r4, "HONORED"));
    });
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 28);
    \u0275\u0275listener("click", function ReservasComponent_Conditional_18_Conditional_6_For_2_Template_button_click_23_listener() {
      const reservation_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.resolve(reservation_r4, "RELEASED"));
    });
    \u0275\u0275text(24, " Cancelar reserva ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const reservation_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("reserva-card--overdue", ctx_r0.isOverdue(reservation_r4));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" Mesa ", reservation_r4.tableNumber, "", reservation_r4.tableName ? " \u2014 " + reservation_r4.tableName : "", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("badge--danger", ctx_r0.isOverdue(reservation_r4))("badge--success", !ctx_r0.isOverdue(reservation_r4));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isOverdue(reservation_r4) ? "Atrasada" : "Ativa", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.formatDateTime(reservation_r4.holdUntil));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xB7 ", ctx_r0.holdCountdown(reservation_r4), "");
    \u0275\u0275advance();
    \u0275\u0275conditional(reservation_r4.guestName || reservation_r4.guestPhone || reservation_r4.guestDocument ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(reservation_r4.notes ? 17 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Criada por ", reservation_r4.createdByUserName || "\u2014", " em ", ctx_r0.formatDateTime(reservation_r4.createdAt), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.resolvingId() === reservation_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.resolvingId() === reservation_r4.id ? "Liberando\u2026" : "Liberar mesa", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.resolvingId() === reservation_r4.id);
  }
}
function ReservasComponent_Conditional_18_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30)(4, "button", 28);
    \u0275\u0275listener("click", function ReservasComponent_Conditional_18_Conditional_6_Conditional_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.previousActivePage());
    });
    \u0275\u0275elementStart(5, "span", 5);
    \u0275\u0275text(6, "chevron_left");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Anterior ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 28);
    \u0275\u0275listener("click", function ReservasComponent_Conditional_18_Conditional_6_Conditional_3_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.nextActivePage());
    });
    \u0275\u0275text(9, " Pr\xF3xima ");
    \u0275\u0275elementStart(10, "span", 5);
    \u0275\u0275text(11, "chevron_right");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", ctx_r0.activeReservations().length, " reserva(s) ativa(s) \u2014 p\xE1gina ", ctx_r0.activePage() + 1, " de ", ctx_r0.activeTotalPages(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.activePage() === 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.activePage() >= ctx_r0.activeTotalPages() - 1);
  }
}
function ReservasComponent_Conditional_18_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275repeaterCreate(1, ReservasComponent_Conditional_18_Conditional_6_For_2_Template, 25, 18, "div", 15, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ReservasComponent_Conditional_18_Conditional_6_Conditional_3_Template, 12, 5, "div", 16);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.pagedActiveReservations());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.activeTotalPages() > 1 ? 3 : -1);
  }
}
function ReservasComponent_Conditional_18_Conditional_12_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 40);
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
function ReservasComponent_Conditional_18_Conditional_12_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "Carregando hist\xF3rico\u2026");
    \u0275\u0275elementEnd();
  }
}
function ReservasComponent_Conditional_18_Conditional_12_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 5);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.historyError(), " ");
  }
}
function ReservasComponent_Conditional_18_Conditional_12_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "Nenhuma reserva encontrada para os filtros selecionados.");
    \u0275\u0275elementEnd();
  }
}
function ReservasComponent_Conditional_18_Conditional_12_Conditional_33_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 47)(1, "span", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 49);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 50);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reservation_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Mesa ", reservation_r9.tableNumber, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.statusLabel(reservation_r9.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4(" ", reservation_r9.guestName || "Sem nome", "", reservation_r9.guestDocument ? " \xB7 CPF " + ctx_r0.maskDocument(reservation_r9.guestDocument) : "", " ", reservation_r9.guestPhone ? " \xB7 " + reservation_r9.guestPhone : "", " \xB7 segurava at\xE9 ", ctx_r0.formatDateTime(reservation_r9.holdUntil), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.formatDateTime(reservation_r9.resolvedAt), "", reservation_r9.resolvedByUserName ? " \xB7 por " + reservation_r9.resolvedByUserName : "", " ");
  }
}
function ReservasComponent_Conditional_18_Conditional_12_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", 46);
    \u0275\u0275repeaterCreate(1, ReservasComponent_Conditional_18_Conditional_12_Conditional_33_For_2_Template, 9, 8, "li", 47, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16)(4, "span", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 30)(7, "button", 28);
    \u0275\u0275listener("click", function ReservasComponent_Conditional_18_Conditional_12_Conditional_33_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.previousHistoryPage());
    });
    \u0275\u0275elementStart(8, "span", 5);
    \u0275\u0275text(9, "chevron_left");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Anterior ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 28);
    \u0275\u0275listener("click", function ReservasComponent_Conditional_18_Conditional_12_Conditional_33_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.nextHistoryPage());
    });
    \u0275\u0275text(12, " Pr\xF3xima ");
    \u0275\u0275elementStart(13, "span", 5);
    \u0275\u0275text(14, "chevron_right");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.historyResults());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate3(" ", ctx_r0.historyTotalElements(), " reserva(s) \u2014 p\xE1gina ", ctx_r0.historyPage() + 1, " de ", ctx_r0.historyTotalPages(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.historyPage() === 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.historyPage() >= ctx_r0.historyTotalPages() - 1);
  }
}
function ReservasComponent_Conditional_18_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 31);
    \u0275\u0275listener("submit", function ReservasComponent_Conditional_18_Conditional_12_Template_form_submit_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r0.applyHistoryFilters());
    });
    \u0275\u0275elementStart(1, "div", 32)(2, "label", 33);
    \u0275\u0275text(3, "De");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 34)(5, "input", 35);
    \u0275\u0275listener("change", function ReservasComponent_Conditional_18_Conditional_12_Template_input_change_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onHistoryStartDateChange($event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 32)(7, "label", 36);
    \u0275\u0275text(8, "At\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 34)(10, "input", 37);
    \u0275\u0275listener("change", function ReservasComponent_Conditional_18_Conditional_12_Template_input_change_10_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onHistoryEndDateChange($event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 32)(12, "label", 38);
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 34)(15, "select", 39);
    \u0275\u0275listener("change", function ReservasComponent_Conditional_18_Conditional_12_Template_select_change_15_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onHistoryStatusChange($event.target.value));
    });
    \u0275\u0275repeaterCreate(16, ReservasComponent_Conditional_18_Conditional_12_For_17_Template, 2, 2, "option", 40, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 41)(19, "label", 42);
    \u0275\u0275text(20, "Nome, CPF ou telefone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 34)(22, "input", 43);
    \u0275\u0275listener("input", function ReservasComponent_Conditional_18_Conditional_12_Template_input_input_22_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onHistorySearchChange($event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 44)(24, "button", 45)(25, "span", 5);
    \u0275\u0275text(26, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Buscar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 28);
    \u0275\u0275listener("click", function ReservasComponent_Conditional_18_Conditional_12_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearHistoryFilters());
    });
    \u0275\u0275text(29, " Limpar filtros ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(30, ReservasComponent_Conditional_18_Conditional_12_Conditional_30_Template, 2, 0, "p", 8)(31, ReservasComponent_Conditional_18_Conditional_12_Conditional_31_Template, 4, 1, "div", 7)(32, ReservasComponent_Conditional_18_Conditional_12_Conditional_32_Template, 2, 0, "p", 8)(33, ReservasComponent_Conditional_18_Conditional_12_Conditional_33_Template, 15, 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r0.historyStartDate());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r0.historyEndDate());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r0.historyStatus());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.historyStatusOptions);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r0.historySearch());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.historyLoading());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.historyLoading());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.historyLoading() ? 30 : ctx_r0.historyError() ? 31 : ctx_r0.historyResults().length === 0 ? 32 : 33);
  }
}
function ReservasComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 10)(1, "h2", 11);
    \u0275\u0275text(2, "Reservas ativas ");
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, ReservasComponent_Conditional_18_Conditional_5_Template, 2, 0, "p", 8)(6, ReservasComponent_Conditional_18_Conditional_6_Template, 4, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "section", 10)(8, "button", 13);
    \u0275\u0275listener("click", function ReservasComponent_Conditional_18_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleHistory());
    });
    \u0275\u0275elementStart(9, "span", 5);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Hist\xF3rico de reservas ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ReservasComponent_Conditional_18_Conditional_12_Template, 34, 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.activeReservations().length);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeReservations().length === 0 ? 5 : 6);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.showHistory() ? "expand_less" : "expand_more");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.showHistory() ? 12 : -1);
  }
}
function ReservasComponent_Conditional_19_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const table_r11 = ctx.$implicit;
    \u0275\u0275property("value", table_r11.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("Mesa ", table_r11.number, "", table_r11.name ? " \u2014 " + table_r11.name : "", "");
  }
}
function ReservasComponent_Conditional_19_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1, "Selecione a mesa.");
    \u0275\u0275elementEnd();
  }
}
function ReservasComponent_Conditional_19_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1, "Informe um CPF v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function ReservasComponent_Conditional_19_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 5);
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
function ReservasComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function ReservasComponent_Conditional_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeCreateModal());
    });
    \u0275\u0275elementStart(1, "div", 52);
    \u0275\u0275listener("click", function ReservasComponent_Conditional_19_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 53)(3, "h2", 54);
    \u0275\u0275text(4, "Nova reserva");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 55);
    \u0275\u0275listener("click", function ReservasComponent_Conditional_19_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeCreateModal());
    });
    \u0275\u0275elementStart(6, "span", 5);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "form", 56);
    \u0275\u0275listener("submit", function ReservasComponent_Conditional_19_Template_form_submit_8_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r0.submitCreate());
    });
    \u0275\u0275elementStart(9, "div", 57)(10, "label", 58);
    \u0275\u0275text(11, "Mesa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 34)(13, "select", 59)(14, "option", 60);
    \u0275\u0275text(15, "Selecione a mesa");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(16, ReservasComponent_Conditional_19_For_17_Template, 2, 3, "option", 40, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, ReservasComponent_Conditional_19_Conditional_18_Template, 2, 0, "span", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 57)(20, "label", 62);
    \u0275\u0275text(21, "Segurar at\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 34);
    \u0275\u0275element(23, "input", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 8);
    \u0275\u0275text(25, "M\xE1ximo de 24 horas a partir de agora. Depois desse hor\xE1rio, sem comanda aberta, a reserva expira.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 57)(27, "label", 64);
    \u0275\u0275text(28, "Nome do respons\xE1vel (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 34);
    \u0275\u0275element(30, "input", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 57)(32, "label", 66);
    \u0275\u0275text(33, "Telefone (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 34)(35, "input", 67);
    \u0275\u0275listener("input", function ReservasComponent_Conditional_19_Template_input_input_35_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPhoneInput($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 57)(37, "label", 68);
    \u0275\u0275text(38, "CPF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 34)(40, "input", 69);
    \u0275\u0275listener("input", function ReservasComponent_Conditional_19_Template_input_input_40_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onCpfInput($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "span", 8);
    \u0275\u0275text(42, "\xC9 contra este CPF que o cliente confirma a chegada pelo QR Code da mesa.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(43, ReservasComponent_Conditional_19_Conditional_43_Template, 2, 0, "span", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 57)(45, "label", 70);
    \u0275\u0275text(46, "Observa\xE7\xE3o (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 34);
    \u0275\u0275element(48, "textarea", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(49, ReservasComponent_Conditional_19_Conditional_49_Template, 4, 1, "div", 7);
    \u0275\u0275elementStart(50, "div", 72)(51, "button", 73);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "button", 74);
    \u0275\u0275listener("click", function ReservasComponent_Conditional_19_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeCreateModal());
    });
    \u0275\u0275text(54, "Cancelar");
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
    \u0275\u0275advance(5);
    \u0275\u0275classProp("field__input--invalid", ctx_r0.createForm.controls.holdUntil.invalid && ctx_r0.createForm.controls.holdUntil.touched);
    \u0275\u0275advance(17);
    \u0275\u0275classProp("field__input--invalid", ctx_r0.createForm.controls.guestDocument.invalid && ctx_r0.createForm.controls.guestDocument.touched);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.createForm.controls.guestDocument.invalid && ctx_r0.createForm.controls.guestDocument.touched ? 43 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.createError() ? 49 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isSubmittingCreate());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isSubmittingCreate() ? "Reservando\u2026" : "Reservar mesa", " ");
  }
}
var AUTO_REFRESH_MS = 6e4;
var STATUS_LABELS = {
  ACTIVE: "Ativa",
  SEATED: "Cliente na mesa",
  HONORED: "Cliente chegou",
  EXPIRED: "Expirada",
  RELEASED: "Cancelada"
};
var HISTORY_STATUS_OPTIONS = [
  { value: "", label: "Todos os status" },
  { value: "SEATED", label: STATUS_LABELS.SEATED },
  { value: "HONORED", label: STATUS_LABELS.HONORED },
  { value: "EXPIRED", label: STATUS_LABELS.EXPIRED },
  { value: "RELEASED", label: STATUS_LABELS.RELEASED }
];
var HISTORY_PAGE_SIZE = 10;
var ReservasComponent = class _ReservasComponent {
  fb = new FormBuilder();
  reservationsService = inject(ReservationsService);
  tablesService = inject(TablesService);
  dateTimeFormatter = brDateTimeFormat({ day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
  reservations = signal([]);
  isLoading = signal(true);
  listError = signal(null);
  actionError = signal(null);
  resolvingId = signal(null);
  // now() reavaliado a cada refresh — usado para marcar reservas atrasadas (holdUntil já passou,
  // mas o scheduler ainda não rodou).
  now = signal(Date.now());
  activeReservations = computed(() => this.reservations().filter((r) => r.status === "ACTIVE").sort((a, b) => {
    const overdueDiff = Number(this.isOverdue(b)) - Number(this.isOverdue(a));
    return overdueDiff !== 0 ? overdueDiff : apiDateTime(a.holdUntil) - apiDateTime(b.holdUntil);
  }));
  // --- Paginação das ativas (client-side — a API devolve a lista inteira) --------
  activePageSize = 6;
  activePage = signal(0);
  activeTotalPages = computed(() => Math.max(1, Math.ceil(this.activeReservations().length / this.activePageSize)));
  pagedActiveReservations = computed(() => {
    const page = Math.min(this.activePage(), this.activeTotalPages() - 1);
    const start = page * this.activePageSize;
    return this.activeReservations().slice(start, start + this.activePageSize);
  });
  previousActivePage() {
    this.activePage.update((p) => Math.max(0, p - 1));
  }
  nextActivePage() {
    this.activePage.update((p) => Math.min(this.activeTotalPages() - 1, p + 1));
  }
  // --- Histórico (paginado e filtrável no servidor — GET .../history) -----------
  historyStatusOptions = HISTORY_STATUS_OPTIONS;
  showHistory = signal(false);
  historyLoadedOnce = false;
  // Filtros — só entram na busca ao clicar "Buscar" (applyHistoryFilters), não a cada tecla.
  historyStartDate = signal("");
  historyEndDate = signal("");
  historyStatus = signal("");
  historySearch = signal("");
  historyResults = signal([]);
  historyPage = signal(0);
  historyTotalPages = signal(1);
  historyTotalElements = signal(0);
  historyLoading = signal(false);
  historyError = signal(null);
  toggleHistory() {
    this.showHistory.update((v) => !v);
    if (this.showHistory() && !this.historyLoadedOnce) {
      this.historyLoadedOnce = true;
      this.loadHistory();
    }
  }
  onHistoryStartDateChange(value) {
    this.historyStartDate.set(value);
  }
  onHistoryEndDateChange(value) {
    this.historyEndDate.set(value);
  }
  onHistoryStatusChange(value) {
    this.historyStatus.set(value);
  }
  onHistorySearchChange(value) {
    this.historySearch.set(value);
  }
  applyHistoryFilters() {
    this.historyPage.set(0);
    this.loadHistory();
  }
  clearHistoryFilters() {
    this.historyStartDate.set("");
    this.historyEndDate.set("");
    this.historyStatus.set("");
    this.historySearch.set("");
    this.historyPage.set(0);
    this.loadHistory();
  }
  previousHistoryPage() {
    if (this.historyPage() === 0) {
      return;
    }
    this.historyPage.update((p) => p - 1);
    this.loadHistory();
  }
  nextHistoryPage() {
    if (this.historyPage() >= this.historyTotalPages() - 1) {
      return;
    }
    this.historyPage.update((p) => p + 1);
    this.loadHistory();
  }
  loadHistory() {
    this.historyLoading.set(true);
    this.historyError.set(null);
    this.reservationsService.history({
      // Filtro é por dia inteiro no horário de Brasília, convertido para o UTC que a API espera.
      startDate: this.historyStartDate() ? brDateTimeLocalToApi(`${this.historyStartDate()}T00:00`) : void 0,
      endDate: this.historyEndDate() ? brDateTimeLocalToApi(`${this.historyEndDate()}T23:59`) : void 0,
      status: this.historyStatus() || void 0,
      search: this.historySearch().trim() || void 0,
      page: this.historyPage(),
      size: HISTORY_PAGE_SIZE,
      sortBy: "resolvedAt",
      sortDirection: "DESC"
    }).subscribe({
      next: (response) => {
        this.historyResults.set(response.content);
        this.historyTotalPages.set(Math.max(1, response.totalPages));
        this.historyTotalElements.set(response.totalElements);
        this.historyLoading.set(false);
      },
      error: () => {
        this.historyResults.set([]);
        this.historyLoading.set(false);
        this.historyError.set("N\xE3o foi poss\xEDvel carregar o hist\xF3rico de reservas.");
      }
    });
  }
  // --- Nova reserva (modal) -----------------------------------------------------
  tables = signal([]);
  isCreateModalOpen = signal(false);
  isSubmittingCreate = signal(false);
  createError = signal(null);
  createForm = this.fb.nonNullable.group({
    tableId: this.fb.nonNullable.control("", Validators.required),
    holdUntil: this.fb.nonNullable.control("", Validators.required),
    guestName: this.fb.control(null),
    guestPhone: this.fb.control(null),
    // Obrigatório: é contra este CPF que o cliente confirma a chegada pelo QR Code.
    guestDocument: this.fb.nonNullable.control("", [Validators.required, cpfValidator()]),
    notes: this.fb.control(null)
  });
  refreshTimer;
  constructor() {
    this.loadTables();
    this.load();
    this.refreshTimer = setInterval(() => this.load(true), AUTO_REFRESH_MS);
  }
  ngOnDestroy() {
    if (this.refreshTimer) {
      clearInterval(this.refreshTimer);
    }
  }
  // --- Apresentação -----------------------------------------------------------
  statusLabel(status) {
    return STATUS_LABELS[status];
  }
  formatDateTime(value) {
    const parsed = parseApiDate(value);
    return parsed ? this.dateTimeFormatter.format(parsed) : "\u2014";
  }
  isOverdue(reservation) {
    return reservation.status === "ACTIVE" && apiDateTime(reservation.holdUntil) < this.now();
  }
  // "faltam 25 min" / "venceu há 3 min" — dica rápida ao lado do horário.
  holdCountdown(reservation) {
    const diffMs = apiDateTime(reservation.holdUntil) - this.now();
    const minutes = Math.round(Math.abs(diffMs) / 6e4);
    if (minutes < 1) {
      return diffMs >= 0 ? "vence agora" : "venceu agora";
    }
    const label = minutes >= 60 ? `${Math.floor(minutes / 60)}h${String(minutes % 60).padStart(2, "0")}` : `${minutes} min`;
    return diffMs >= 0 ? `faltam ${label}` : `venceu h\xE1 ${label}`;
  }
  // --- Carregamento ----------------------------------------------------------
  refresh() {
    this.load();
  }
  load(silent = false) {
    if (!silent) {
      this.isLoading.set(true);
    }
    this.listError.set(null);
    this.now.set(Date.now());
    this.reservationsService.list().subscribe({
      next: (list) => {
        this.reservations.set(list);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
        if (!silent) {
          this.listError.set("N\xE3o foi poss\xEDvel carregar as reservas.");
        }
      }
    });
  }
  loadTables() {
    this.tablesService.list({ status: "ACTIVE", page: 0, size: 200, sortBy: "number", sortDirection: "ASC" }).subscribe({
      next: (response) => this.tables.set(response.content),
      error: () => this.tables.set([])
    });
  }
  // --- Liberar reserva -----------------------------------------------------------
  resolve(reservation, outcome) {
    if (this.resolvingId()) {
      return;
    }
    this.resolvingId.set(reservation.id);
    this.actionError.set(null);
    this.reservationsService.resolve(reservation.id, outcome).subscribe({
      next: (updated) => {
        this.resolvingId.set(null);
        this.reservations.update((list) => list.map((r) => r.id === reservation.id ? updated : r));
      },
      error: (error) => {
        this.resolvingId.set(null);
        this.actionError.set(this.resolveErrorMessage(error));
        autoDismiss(this.actionError, null);
        this.load(true);
      }
    });
  }
  // --- Nova reserva ---------------------------------------------------------------
  openCreateModal() {
    this.createError.set(null);
    this.createForm.reset({ tableId: "", holdUntil: this.defaultHoldUntil(), guestName: null, guestPhone: null, guestDocument: "", notes: null });
    this.isCreateModalOpen.set(true);
  }
  closeCreateModal() {
    this.isCreateModalOpen.set(false);
  }
  onCpfInput(event) {
    const input = event.target;
    this.createForm.controls.guestDocument.setValue(formatCPF(input.value));
  }
  onPhoneInput(event) {
    const input = event.target;
    this.createForm.controls.guestPhone.setValue(formatCellphone(input.value));
  }
  maskDocument(value) {
    return maskCPF(value);
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
      // O input datetime-local devolve "yyyy-MM-ddTHH:mm" no horário de Brasília; o backend guarda
      // tudo em UTC, então convertemos antes de enviar (ver datetime.util).
      holdUntil: brDateTimeLocalToApi(value.holdUntil) ?? value.holdUntil,
      guestName: value.guestName?.trim() || void 0,
      guestPhone: value.guestPhone?.trim() || void 0,
      guestDocument: onlyDigits(value.guestDocument),
      notes: value.notes?.trim() || void 0
    };
    this.reservationsService.create(payload).subscribe({
      next: (created) => {
        this.isSubmittingCreate.set(false);
        this.isCreateModalOpen.set(false);
        this.reservations.update((list) => [created, ...list]);
      },
      error: (error) => {
        this.isSubmittingCreate.set(false);
        this.createError.set(this.resolveErrorMessage(error));
      }
    });
  }
  // datetime-local precisa do formato "yyyy-MM-ddTHH:mm" no horário de Brasília — default: daqui a 1h.
  defaultHoldUntil() {
    return brDateTimeLocalFromNow(60);
  }
  resolveErrorMessage(error) {
    const body = error.error;
    if (body?.mensagem) {
      return body.mensagem;
    }
    if (body?.titulo) {
      return body.titulo;
    }
    if (error.status === 404) {
      return "Mesa ou reserva n\xE3o encontrada.";
    }
    if (error.status === 403) {
      return "Voc\xEA n\xE3o tem permiss\xE3o para realizar esta a\xE7\xE3o.";
    }
    return "N\xE3o foi poss\xEDvel concluir a opera\xE7\xE3o. Tente novamente em instantes.";
  }
  static \u0275fac = function ReservasComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReservasComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReservasComponent, selectors: [["app-admin-reservas"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 4, consts: [[1, "page-header", "page-header--row"], [1, "page-title"], [1, "page-subtitle"], [1, "page-header__actions"], ["type", "button", "appRipple", "", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["aria-hidden", "true", 1, "material-icons"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", 3, "click"], ["role", "alert", 1, "form-alert", "form-alert--error"], [1, "field__hint"], [1, "modal-backdrop"], [1, "reservas-section"], [1, "reservas-section__title"], [1, "badge", "badge--muted"], ["type", "button", 1, "reservas-section__toggle", 3, "click"], [1, "reservas-grid"], [1, "reserva-card", "card", 3, "reserva-card--overdue"], [1, "pagination"], [1, "reserva-card", "card"], [1, "reserva-card__header"], [1, "reserva-card__table"], [1, "badge"], [1, "reserva-card__hold"], [1, "reserva-card__countdown"], [1, "reserva-card__guest"], [1, "reserva-card__notes"], [1, "reserva-card__meta"], [1, "reserva-card__actions"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", "btn--sm", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click", "disabled"], [1, "pagination__info"], [1, "pagination__controls"], ["novalidate", "", 1, "history-filters", 3, "submit"], [1, "field", "history-filters__field"], ["for", "history-start", 1, "field__label"], [1, "field__control"], ["id", "history-start", "type", "date", 1, "field__input", 3, "change", "value"], ["for", "history-end", 1, "field__label"], ["id", "history-end", "type", "date", 1, "field__input", 3, "change", "value"], ["for", "history-status", 1, "field__label"], ["id", "history-status", 1, "field__input", 3, "change", "value"], [3, "value"], [1, "field", "history-filters__field", "history-filters__field--search"], ["for", "history-search", 1, "field__label"], ["id", "history-search", "type", "text", "placeholder", "Buscar por nome, CPF ou telefone do respons\xE1vel", 1, "field__input", 3, "input", "value"], [1, "history-filters__actions"], ["type", "submit", "appRipple", "", 1, "btn", "btn--primary", "btn--sm", 3, "disabled"], [1, "reservas-resolved"], [1, "reservas-resolved__item"], [1, "reservas-resolved__table"], [1, "reservas-resolved__info"], [1, "reservas-resolved__when"], [1, "modal-backdrop", 3, "click"], [1, "modal-card", "modal-card--sm", "card", 3, "click"], [1, "modal-card__header"], [1, "step-heading"], ["type", "button", "aria-label", "Fechar", 1, "icon-btn", 3, "click"], ["novalidate", "", 3, "submit", "formGroup"], [1, "field"], ["for", "reserva-table", 1, "field__label"], ["id", "reserva-table", "formControlName", "tableId", 1, "field__input"], ["value", "", "disabled", ""], [1, "field__error"], ["for", "reserva-hold", 1, "field__label"], ["id", "reserva-hold", "type", "datetime-local", "formControlName", "holdUntil", 1, "field__input"], ["for", "reserva-guest", 1, "field__label"], ["id", "reserva-guest", "type", "text", "formControlName", "guestName", "maxlength", "150", 1, "field__input"], ["for", "reserva-phone", 1, "field__label"], ["id", "reserva-phone", "type", "tel", "inputmode", "numeric", "formControlName", "guestPhone", "placeholder", "(00) 00000-0000", "maxlength", "15", "autocomplete", "tel", 1, "field__input", 3, "input"], ["for", "reserva-document", 1, "field__label"], ["id", "reserva-document", "type", "text", "inputmode", "numeric", "formControlName", "guestDocument", "placeholder", "000.000.000-00", "maxlength", "14", 1, "field__input", 3, "input"], ["for", "reserva-notes", 1, "field__label"], ["id", "reserva-notes", "rows", "2", "formControlName", "notes", "maxlength", "1000", 1, "field__input"], [1, "step-actions"], ["type", "submit", "appRipple", "", 1, "btn", "btn--primary", 3, "disabled"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"]], template: function ReservasComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Reservas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, " Reserve mesas com um hor\xE1rio limite. Enquanto a reserva est\xE1 ativa, a mesa n\xE3o aceita pedidos pelo QR Code \u2014 libere quando o grupo chegar ou deixe expirar sozinha no hor\xE1rio. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3)(7, "button", 4);
      \u0275\u0275listener("click", function ReservasComponent_Template_button_click_7_listener() {
        return ctx.refresh();
      });
      \u0275\u0275elementStart(8, "span", 5);
      \u0275\u0275text(9, "refresh");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Atualizar ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 6);
      \u0275\u0275listener("click", function ReservasComponent_Template_button_click_11_listener() {
        return ctx.openCreateModal();
      });
      \u0275\u0275elementStart(12, "span", 5);
      \u0275\u0275text(13, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " Nova reserva ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(15, ReservasComponent_Conditional_15_Template, 4, 1, "div", 7)(16, ReservasComponent_Conditional_16_Template, 2, 0, "p", 8)(17, ReservasComponent_Conditional_17_Template, 4, 1, "div", 7)(18, ReservasComponent_Conditional_18_Template, 13, 4)(19, ReservasComponent_Conditional_19_Template, 55, 12, "div", 9);
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", ctx.isLoading());
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.actionError() ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 16 : ctx.listError() ? 17 : 18);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isCreateModalOpen() ? 19 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, RippleDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-header--row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.page-header__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n  max-width: 60ch;\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\nselect.field__input[_ngcontent-%COMP%], \ninput.field__input[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: var(--radius-full);\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.badge--muted[_ngcontent-%COMP%] {\n  background: rgba(203, 213, 225, 0.12);\n  color: var(--color-text-muted);\n}\n.badge--success[_ngcontent-%COMP%] {\n  background: var(--color-success-bg);\n  color: var(--color-success);\n}\n.badge--danger[_ngcontent-%COMP%] {\n  background: var(--color-error-bg, rgba(220, 38, 38, 0.12));\n  color: var(--color-error, #dc2626);\n}\n.reservas-section[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.reservas-section__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n  margin-bottom: 14px;\n}\n.reservas-section__toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 0;\n  font: inherit;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: var(--color-text);\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n.reservas-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 14px;\n}\n.reserva-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.reserva-card--overdue[_ngcontent-%COMP%] {\n  border-color: var(--color-error, #dc2626);\n}\n.reserva-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.reserva-card__table[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 600;\n  font-size: 0.9375rem;\n  color: var(--color-text);\n}\n.reserva-card__table[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--color-accent-hover);\n}\n.reserva-card__hold[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n  font-size: 0.875rem;\n  color: var(--color-text);\n}\n.reserva-card__hold[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--color-text-muted);\n}\n.reserva-card__countdown[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 0.8125rem;\n}\n.reserva-card__guest[_ngcontent-%COMP%], \n.reserva-card__notes[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.reserva-card__guest[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.reserva-card__notes[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-top: 1px;\n}\n.reserva-card__notes[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.reserva-card__meta[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.reserva-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: 4px;\n  flex-wrap: wrap;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin-top: 14px;\n  padding: 14px 16px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n}\n.pagination__info[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.pagination__controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.history-filters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 12px 14px;\n  align-items: end;\n  margin: 14px 0 18px;\n  padding: 16px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n}\n.history-filters__field[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.history-filters__field--search[_ngcontent-%COMP%] {\n  grid-column: span 2;\n  min-width: 220px;\n}\n.history-filters__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.reservas-resolved[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 12px 0 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.reservas-resolved__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  padding: 8px 12px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.reservas-resolved__table[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-text);\n}\n.reservas-resolved__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n}\n.reservas-resolved__when[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n}\n.icon-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius-sm);\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text);\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(4, 8, 20, 0.64);\n  backdrop-filter: blur(2px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  z-index: 100;\n}\n.modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 520px;\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n  padding: 32px;\n}\n.modal-card--sm[_ngcontent-%COMP%] {\n  max-width: 440px;\n}\n.modal-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.step-heading[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n}\n.step-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 24px;\n}\n/*# sourceMappingURL=reservas.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReservasComponent, { className: "ReservasComponent", filePath: "src\\app\\features\\admin\\pages\\reservas\\reservas.component.ts", lineNumber: 57 });
})();
export {
  ReservasComponent
};
//# sourceMappingURL=chunk-FZYQTMWZ.js.map
