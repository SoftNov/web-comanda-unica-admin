import {
  TablesService
} from "./chunk-4BGHJL5Z.js";
import {
  cpfValidator
} from "./chunk-XZ5ZAXHN.js";
import {
  formatCPF,
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
  ɵɵtextInterpolate3
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
    \u0275\u0275elementStart(0, "p", 22)(1, "span", 5);
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
    \u0275\u0275elementStart(0, "p", 23)(1, "span", 5);
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
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "span", 18)(3, "span", 5);
    \u0275\u0275text(4, "event_seat");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 19);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 20)(9, "span", 5);
    \u0275\u0275text(10, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Segura at\xE9 ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 21);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, ReservasComponent_Conditional_18_Conditional_6_For_2_Conditional_16_Template, 4, 3, "p", 22)(17, ReservasComponent_Conditional_18_Conditional_6_For_2_Conditional_17_Template, 4, 1, "p", 23);
    \u0275\u0275elementStart(18, "p", 24);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 25)(21, "button", 26);
    \u0275\u0275listener("click", function ReservasComponent_Conditional_18_Conditional_6_For_2_Template_button_click_21_listener() {
      const reservation_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.resolve(reservation_r4, "HONORED"));
    });
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 27);
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
    \u0275\u0275textInterpolate1("Criada por ", reservation_r4.createdByUserName || "\u2014", "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.resolvingId() === reservation_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.resolvingId() === reservation_r4.id ? "Liberando\u2026" : "Liberar mesa", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.resolvingId() === reservation_r4.id);
  }
}
function ReservasComponent_Conditional_18_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275repeaterCreate(1, ReservasComponent_Conditional_18_Conditional_6_For_2_Template, 25, 17, "div", 15, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.activeReservations());
  }
}
function ReservasComponent_Conditional_18_Conditional_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "Nenhuma reserva resolvida nas \xFAltimas 24h.");
    \u0275\u0275elementEnd();
  }
}
function ReservasComponent_Conditional_18_Conditional_12_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 29)(1, "span", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reservation_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Mesa ", reservation_r5.tableNumber, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.statusLabel(reservation_r5.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", reservation_r5.guestName || "Sem nome", "", reservation_r5.guestDocument ? " \xB7 CPF " + ctx_r0.maskDocument(reservation_r5.guestDocument) : "", " \xB7 segurava at\xE9 ", ctx_r0.formatDateTime(reservation_r5.holdUntil), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDateTime(reservation_r5.resolvedAt));
  }
}
function ReservasComponent_Conditional_18_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 28);
    \u0275\u0275repeaterCreate(1, ReservasComponent_Conditional_18_Conditional_12_Conditional_1_For_2_Template, 9, 6, "li", 29, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.resolvedReservations());
  }
}
function ReservasComponent_Conditional_18_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ReservasComponent_Conditional_18_Conditional_12_Conditional_0_Template, 2, 0, "p", 8)(1, ReservasComponent_Conditional_18_Conditional_12_Conditional_1_Template, 3, 0, "ul", 28);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.resolvedReservations().length === 0 ? 0 : 1);
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
    \u0275\u0275template(5, ReservasComponent_Conditional_18_Conditional_5_Template, 2, 0, "p", 8)(6, ReservasComponent_Conditional_18_Conditional_6_Template, 3, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "section", 10)(8, "button", 14);
    \u0275\u0275listener("click", function ReservasComponent_Conditional_18_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleResolved());
    });
    \u0275\u0275elementStart(9, "span", 5);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Resolvidas nas \xFAltimas 24h ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ReservasComponent_Conditional_18_Conditional_12_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.activeReservations().length);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeReservations().length === 0 ? 5 : 6);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.showResolved() ? "expand_less" : "expand_more");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.showResolved() ? 12 : -1);
  }
}
function ReservasComponent_Conditional_19_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const table_r7 = ctx.$implicit;
    \u0275\u0275property("value", table_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("Mesa ", table_r7.number, "", table_r7.name ? " \u2014 " + table_r7.name : "", "");
  }
}
function ReservasComponent_Conditional_19_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "Selecione a mesa.");
    \u0275\u0275elementEnd();
  }
}
function ReservasComponent_Conditional_19_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
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
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("click", function ReservasComponent_Conditional_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeCreateModal());
    });
    \u0275\u0275elementStart(1, "div", 34);
    \u0275\u0275listener("click", function ReservasComponent_Conditional_19_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 35)(3, "h2", 36);
    \u0275\u0275text(4, "Nova reserva");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 37);
    \u0275\u0275listener("click", function ReservasComponent_Conditional_19_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeCreateModal());
    });
    \u0275\u0275elementStart(6, "span", 5);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "form", 38);
    \u0275\u0275listener("submit", function ReservasComponent_Conditional_19_Template_form_submit_8_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r0.submitCreate());
    });
    \u0275\u0275elementStart(9, "div", 39)(10, "label", 40);
    \u0275\u0275text(11, "Mesa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 41)(13, "select", 42)(14, "option", 43);
    \u0275\u0275text(15, "Selecione a mesa");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(16, ReservasComponent_Conditional_19_For_17_Template, 2, 3, "option", 44, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, ReservasComponent_Conditional_19_Conditional_18_Template, 2, 0, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 39)(20, "label", 46);
    \u0275\u0275text(21, "Segurar at\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 41);
    \u0275\u0275element(23, "input", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 8);
    \u0275\u0275text(25, "M\xE1ximo de 24 horas a partir de agora. Depois desse hor\xE1rio, sem comanda aberta, a reserva expira.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 39)(27, "label", 48);
    \u0275\u0275text(28, "Nome do respons\xE1vel (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 41);
    \u0275\u0275element(30, "input", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 39)(32, "label", 50);
    \u0275\u0275text(33, "Telefone (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 41);
    \u0275\u0275element(35, "input", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 39)(37, "label", 52);
    \u0275\u0275text(38, "CPF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 41)(40, "input", 53);
    \u0275\u0275listener("input", function ReservasComponent_Conditional_19_Template_input_input_40_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onCpfInput($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "span", 8);
    \u0275\u0275text(42, "\xC9 contra este CPF que o cliente confirma a chegada pelo QR Code da mesa.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(43, ReservasComponent_Conditional_19_Conditional_43_Template, 2, 0, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 39)(45, "label", 54);
    \u0275\u0275text(46, "Observa\xE7\xE3o (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 41);
    \u0275\u0275element(48, "textarea", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(49, ReservasComponent_Conditional_19_Conditional_49_Template, 4, 1, "div", 7);
    \u0275\u0275elementStart(50, "div", 56)(51, "button", 57);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "button", 58);
    \u0275\u0275listener("click", function ReservasComponent_Conditional_19_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r6);
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
  showResolved = signal(false);
  // now() reavaliado a cada refresh — usado para marcar reservas atrasadas (holdUntil já passou,
  // mas o scheduler ainda não rodou).
  now = signal(Date.now());
  activeReservations = computed(() => this.reservations().filter((r) => r.status === "ACTIVE"));
  resolvedReservations = computed(() => this.reservations().filter((r) => r.status !== "ACTIVE").sort((a, b) => (b.resolvedAt ?? "").localeCompare(a.resolvedAt ?? "")));
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
  toggleResolved() {
    this.showResolved.update((v) => !v);
    this.load();
  }
  load(silent = false) {
    if (!silent) {
      this.isLoading.set(true);
    }
    this.listError.set(null);
    this.now.set(Date.now());
    this.reservationsService.list(this.showResolved()).subscribe({
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReservasComponent, selectors: [["app-admin-reservas"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 4, consts: [[1, "page-header", "page-header--row"], [1, "page-title"], [1, "page-subtitle"], [1, "page-header__actions"], ["type", "button", "appRipple", "", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["aria-hidden", "true", 1, "material-icons"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", 3, "click"], ["role", "alert", 1, "form-alert", "form-alert--error"], [1, "field__hint"], [1, "modal-backdrop"], [1, "reservas-section"], [1, "reservas-section__title"], [1, "badge", "badge--muted"], [1, "reservas-grid"], ["type", "button", 1, "reservas-section__toggle", 3, "click"], [1, "reserva-card", "card", 3, "reserva-card--overdue"], [1, "reserva-card", "card"], [1, "reserva-card__header"], [1, "reserva-card__table"], [1, "badge"], [1, "reserva-card__hold"], [1, "reserva-card__countdown"], [1, "reserva-card__guest"], [1, "reserva-card__notes"], [1, "reserva-card__meta"], [1, "reserva-card__actions"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", "btn--sm", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click", "disabled"], [1, "reservas-resolved"], [1, "reservas-resolved__item"], [1, "reservas-resolved__table"], [1, "reservas-resolved__info"], [1, "reservas-resolved__when"], [1, "modal-backdrop", 3, "click"], [1, "modal-card", "modal-card--sm", "card", 3, "click"], [1, "modal-card__header"], [1, "step-heading"], ["type", "button", "aria-label", "Fechar", 1, "icon-btn", 3, "click"], ["novalidate", "", 3, "submit", "formGroup"], [1, "field"], ["for", "reserva-table", 1, "field__label"], [1, "field__control"], ["id", "reserva-table", "formControlName", "tableId", 1, "field__input"], ["value", "", "disabled", ""], [3, "value"], [1, "field__error"], ["for", "reserva-hold", 1, "field__label"], ["id", "reserva-hold", "type", "datetime-local", "formControlName", "holdUntil", 1, "field__input"], ["for", "reserva-guest", 1, "field__label"], ["id", "reserva-guest", "type", "text", "formControlName", "guestName", "maxlength", "150", 1, "field__input"], ["for", "reserva-phone", 1, "field__label"], ["id", "reserva-phone", "type", "tel", "formControlName", "guestPhone", "maxlength", "30", 1, "field__input"], ["for", "reserva-document", 1, "field__label"], ["id", "reserva-document", "type", "text", "inputmode", "numeric", "formControlName", "guestDocument", "placeholder", "000.000.000-00", "maxlength", "14", 1, "field__input", 3, "input"], ["for", "reserva-notes", 1, "field__label"], ["id", "reserva-notes", "rows", "2", "formControlName", "notes", "maxlength", "1000", 1, "field__input"], [1, "step-actions"], ["type", "submit", "appRipple", "", 1, "btn", "btn--primary", 3, "disabled"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"]], template: function ReservasComponent_Template(rf, ctx) {
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
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, RippleDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-header--row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.page-header__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n  max-width: 60ch;\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\nselect.field__input[_ngcontent-%COMP%], \ninput.field__input[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: var(--radius-full);\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.badge--muted[_ngcontent-%COMP%] {\n  background: rgba(203, 213, 225, 0.12);\n  color: var(--color-text-muted);\n}\n.badge--success[_ngcontent-%COMP%] {\n  background: var(--color-success-bg);\n  color: var(--color-success);\n}\n.badge--danger[_ngcontent-%COMP%] {\n  background: var(--color-error-bg, rgba(220, 38, 38, 0.12));\n  color: var(--color-error, #dc2626);\n}\n.reservas-section[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.reservas-section__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n  margin-bottom: 14px;\n}\n.reservas-section__toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 0;\n  font: inherit;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: var(--color-text);\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n.reservas-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 14px;\n}\n.reserva-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.reserva-card--overdue[_ngcontent-%COMP%] {\n  border-color: var(--color-error, #dc2626);\n}\n.reserva-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.reserva-card__table[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 600;\n  font-size: 0.9375rem;\n  color: var(--color-text);\n}\n.reserva-card__table[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--color-accent-hover);\n}\n.reserva-card__hold[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n  font-size: 0.875rem;\n  color: var(--color-text);\n}\n.reserva-card__hold[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--color-text-muted);\n}\n.reserva-card__countdown[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 0.8125rem;\n}\n.reserva-card__guest[_ngcontent-%COMP%], \n.reserva-card__notes[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.reserva-card__guest[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.reserva-card__notes[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-top: 1px;\n}\n.reserva-card__notes[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.reserva-card__meta[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.reserva-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: 4px;\n  flex-wrap: wrap;\n}\n.reservas-resolved[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 12px 0 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.reservas-resolved__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  padding: 8px 12px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.reservas-resolved__table[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-text);\n}\n.reservas-resolved__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n}\n.reservas-resolved__when[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n}\n.icon-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius-sm);\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text);\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(4, 8, 20, 0.64);\n  backdrop-filter: blur(2px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  z-index: 100;\n}\n.modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 520px;\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n  padding: 32px;\n}\n.modal-card--sm[_ngcontent-%COMP%] {\n  max-width: 440px;\n}\n.modal-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.step-heading[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n}\n.step-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 24px;\n}\n/*# sourceMappingURL=reservas.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReservasComponent, { className: "ReservasComponent", filePath: "src\\app\\features\\admin\\pages\\reservas\\reservas.component.ts", lineNumber: 44 });
})();
export {
  ReservasComponent
};
//# sourceMappingURL=chunk-5IPKMBC4.js.map
