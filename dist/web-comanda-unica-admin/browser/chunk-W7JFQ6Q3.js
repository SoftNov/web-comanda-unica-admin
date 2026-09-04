import {
  TablesService
} from "./chunk-4BGHJL5Z.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
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
  brDateTimeFormat,
  parseApiDate
} from "./chunk-XDLONSRE.js";
import "./chunk-R67ZKZZ4.js";
import {
  environment
} from "./chunk-3BRF5UDA.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-EVJN5Z2J.js";
import {
  HttpClient,
  HttpHeaders,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-74GQPZJ4.js";

// src/app/shared/services/comandas.service.ts
var ComandasService = class _ComandasService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiBaseUrl}/api/v1/comandas`;
  paymentsBaseUrl = `${environment.apiBaseUrl}/api/v1/payments`;
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
    if (params.tableId) {
      httpParams["tableId"] = params.tableId;
    }
    return this.http.get(this.baseUrl, { params: httpParams });
  }
  // Consulta de uma comanda isolada — usada, por exemplo, quando o extrato financeiro abre a
  // comanda vinculada a um pagamento (deep link /painel/comandas?comanda=<id>).
  getById(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  updateStatus(id, payload) {
    return this.http.patch(`${this.baseUrl}/${id}/status`, payload);
  }
  registerPayment(id, payload) {
    return this.http.post(`${this.baseUrl}/${id}/payments`, payload);
  }
  // idempotencyKey: gerado uma vez ao abrir o modal de estorno e reaproveitado em qualquer reenvio
  // (timeout, duplo clique) — ver PaymentApi no backend. Sem isso, um reenvio criaria um segundo
  // Refund na Stripe.
  refundPayment(paymentId, payload, idempotencyKey) {
    return this.http.post(`${this.paymentsBaseUrl}/${paymentId}/refund`, payload, { headers: new HttpHeaders({ "Idempotency-Key": idempotencyKey }) });
  }
  static \u0275fac = function ComandasService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComandasService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ComandasService, factory: _ComandasService.\u0275fac, providedIn: "root" });
};

// src/app/features/admin/pages/comandas/comandas.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ComandasComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const table_r1 = ctx.$implicit;
    \u0275\u0275property("value", table_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("Mesa ", table_r1.number, "", table_r1.name ? " \u2014 " + table_r1.name : "", "");
  }
}
function ComandasComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "Abrindo a comanda indicada pelo link\u2026");
    \u0275\u0275elementEnd();
  }
}
function ComandasComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 19);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.openFromLinkError(), " ");
  }
}
function ComandasComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "Carregando comandas\u2026");
    \u0275\u0275elementEnd();
  }
}
function ComandasComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 19);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.listError(), " ");
  }
}
function ComandasComponent_Conditional_48_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 19);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.finalizeError(), " ");
  }
}
function ComandasComponent_Conditional_48_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 32);
    \u0275\u0275text(2, "Nenhuma comanda encontrada.");
    \u0275\u0275elementEnd()();
  }
}
function ComandasComponent_Conditional_48_For_25_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function ComandasComponent_Conditional_48_For_25_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const comanda_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.finalizeComanda(comanda_r5));
    });
    \u0275\u0275elementStart(1, "span", 19);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const comanda_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.finalizingComandaId() === comanda_r5.id);
  }
}
function ComandasComponent_Conditional_48_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 28)(17, "button", 34);
    \u0275\u0275listener("click", function ComandasComponent_Conditional_48_For_25_Template_button_click_17_listener() {
      const comanda_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDetail(comanda_r5));
    });
    \u0275\u0275elementStart(18, "span", 19);
    \u0275\u0275text(19, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, ComandasComponent_Conditional_48_For_25_Conditional_20_Template, 3, 1, "button", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const comanda_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Mesa ", comanda_r5.tableNumber, "", comanda_r5.tableName ? " \u2014 " + comanda_r5.tableName : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.displayStatusBadgeClass(comanda_r5.displayStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.displayStatusLabel(comanda_r5.displayStatus), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(comanda_r5.orders.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(comanda_r5.totalOrdersAmount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(comanda_r5.totalPaidAmount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(comanda_r5.balanceAmount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDateTime(comanda_r5.openedAt));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.canFinalize(comanda_r5) ? 20 : -1);
  }
}
function ComandasComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, ComandasComponent_Conditional_48_Conditional_0_Template, 4, 1, "div", 23);
    \u0275\u0275elementStart(1, "div", 24)(2, "div", 26)(3, "table", 27)(4, "thead")(5, "tr")(6, "th");
    \u0275\u0275text(7, "Mesa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Pedidos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Total pedidos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Total pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Saldo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Aberta em");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 28);
    \u0275\u0275text(21, "A\xE7\xF5es");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, ComandasComponent_Conditional_48_Conditional_23_Template, 3, 0, "tr");
    \u0275\u0275repeaterCreate(24, ComandasComponent_Conditional_48_For_25_Template, 21, 11, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 29)(27, "span", 30);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 31)(30, "button", 20);
    \u0275\u0275listener("click", function ComandasComponent_Conditional_48_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.previousPage());
    });
    \u0275\u0275elementStart(31, "span", 19);
    \u0275\u0275text(32, "chevron_left");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, " Anterior ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 20);
    \u0275\u0275listener("click", function ComandasComponent_Conditional_48_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275text(35, " Pr\xF3xima ");
    \u0275\u0275elementStart(36, "span", 19);
    \u0275\u0275text(37, "chevron_right");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.finalizeError() ? 0 : -1);
    \u0275\u0275advance(23);
    \u0275\u0275conditional(ctx_r1.comandas().length === 0 ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.comandas());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.totalElements(), " comanda(s) \u2014 ", ctx_r1.pageLabel(), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.page() === 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.isLast());
  }
}
function ComandasComponent_Conditional_49_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function ComandasComponent_Conditional_49_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const comanda_r9 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.finalizeComanda(comanda_r9));
    });
    \u0275\u0275elementStart(1, "span", 19);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comanda_r9 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.finalizingComandaId() === comanda_r9.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.finalizingComandaId() === comanda_r9.id ? "Finalizando\u2026" : "Finalizar comanda", " ");
  }
}
function ComandasComponent_Conditional_49_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 19);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.finalizeError(), " ");
  }
}
function ComandasComponent_Conditional_49_Conditional_35_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comanda_r9 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("por ", comanda_r9.closedByUserName, "");
  }
}
function ComandasComponent_Conditional_49_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2, "Encerrada em");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275template(5, ComandasComponent_Conditional_49_Conditional_35_Conditional_5_Template, 2, 1, "span", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const comanda_r9 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDateTime(comanda_r9.closedAt), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(comanda_r9.closedByUserName ? 5 : -1);
  }
}
function ComandasComponent_Conditional_49_Conditional_36_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 45)(1, "h3", 46);
    \u0275\u0275text(2, "Taxa da Comanda \xDAnica pendente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 22);
    \u0275\u0275text(4, " Gerada por pagamento fora da Stripe (dinheiro) \u2014 ser\xE1 somada automaticamente \xE0 pr\xF3xima cobran\xE7a online deste estabelecimento. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "dl", 55)(6, "div")(7, "dt");
    \u0275\u0275text(8, "Valor pendente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "dd");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const fees_r10 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(fees_r10.pendingFeeAmount));
  }
}
function ComandasComponent_Conditional_49_Conditional_36_Conditional_1_For_13_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function ComandasComponent_Conditional_49_Conditional_36_Conditional_1_For_13_Conditional_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const charge_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openRefundModal(charge_r12));
    });
    \u0275\u0275elementStart(1, "span", 19);
    \u0275\u0275text(2, "undo");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Estornar ");
    \u0275\u0275elementEnd();
  }
}
function ComandasComponent_Conditional_49_Conditional_36_Conditional_1_For_13_Conditional_32_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const charge_r12 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 Charge: ", charge_r12.stripeChargeId, "");
  }
}
function ComandasComponent_Conditional_49_Conditional_36_Conditional_1_For_13_Conditional_32_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "Nenhum estorno registrado para esta cobran\xE7a.");
    \u0275\u0275elementEnd();
  }
}
function ComandasComponent_Conditional_49_Conditional_36_Conditional_1_For_13_Conditional_32_Conditional_5_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const refund_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("por ", refund_r14.requestedByUserName, "");
  }
}
function ComandasComponent_Conditional_49_Conditional_36_Conditional_1_For_13_Conditional_32_Conditional_5_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const refund_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(refund_r14.description);
  }
}
function ComandasComponent_Conditional_49_Conditional_36_Conditional_1_For_13_Conditional_32_Conditional_5_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const refund_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(refund_r14.failureReason);
  }
}
function ComandasComponent_Conditional_49_Conditional_36_Conditional_1_For_13_Conditional_32_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ComandasComponent_Conditional_49_Conditional_36_Conditional_1_For_13_Conditional_32_Conditional_5_For_2_Conditional_7_Template, 2, 1, "span");
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ComandasComponent_Conditional_49_Conditional_36_Conditional_1_For_13_Conditional_32_Conditional_5_For_2_Conditional_10_Template, 2, 1, "span", 68)(11, ComandasComponent_Conditional_49_Conditional_36_Conditional_1_For_13_Conditional_32_Conditional_5_For_2_Conditional_11_Template, 2, 1, "span", 69);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const refund_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.refundStatusBadgeClass(refund_r14.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.refundStatusLabel(refund_r14.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(refund_r14.amount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.refundReasonLabel(refund_r14.reason));
    \u0275\u0275advance();
    \u0275\u0275conditional(refund_r14.requestedByUserName ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDateTime(refund_r14.createdAt));
    \u0275\u0275advance();
    \u0275\u0275conditional(refund_r14.description ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(refund_r14.failureReason ? 11 : -1);
  }
}
function ComandasComponent_Conditional_49_Conditional_36_Conditional_1_For_13_Conditional_32_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 67);
    \u0275\u0275repeaterCreate(1, ComandasComponent_Conditional_49_Conditional_36_Conditional_1_For_13_Conditional_32_Conditional_5_For_2_Template, 12, 9, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const charge_r12 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(charge_r12.refunds);
  }
}
function ComandasComponent_Conditional_49_Conditional_36_Conditional_1_For_13_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "p", 22);
    \u0275\u0275text(2);
    \u0275\u0275template(3, ComandasComponent_Conditional_49_Conditional_36_Conditional_1_For_13_Conditional_32_Conditional_3_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ComandasComponent_Conditional_49_Conditional_36_Conditional_1_For_13_Conditional_32_Conditional_4_Template, 2, 0, "p", 22)(5, ComandasComponent_Conditional_49_Conditional_36_Conditional_1_For_13_Conditional_32_Conditional_5_Template, 3, 0, "ul", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_16_0;
    const charge_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" PaymentIntent: ", (tmp_16_0 = charge_r12.stripePaymentIntentId) !== null && tmp_16_0 !== void 0 ? tmp_16_0 : "\u2014", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(charge_r12.stripeChargeId ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(charge_r12.refunds.length === 0 ? 4 : 5);
  }
}
function ComandasComponent_Conditional_49_Conditional_36_Conditional_1_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 59)(2, "span", 60)(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 33);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 61);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "dl", 62)(11, "div")(12, "dt");
    \u0275\u0275text(13, "Valor pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "dd");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "dt");
    \u0275\u0275text(18, "J\xE1 estornado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "dd");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div")(22, "dt");
    \u0275\u0275text(23, "Dispon\xEDvel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "dd");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 63)(27, "button", 21);
    \u0275\u0275listener("click", function ComandasComponent_Conditional_49_Conditional_36_Conditional_1_For_13_Template_button_click_27_listener() {
      const charge_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleChargeDetails(charge_r12.id));
    });
    \u0275\u0275elementStart(28, "span", 19);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " Ver detalhes ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, ComandasComponent_Conditional_49_Conditional_36_Conditional_1_For_13_Conditional_31_Template, 4, 0, "button", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, ComandasComponent_Conditional_49_Conditional_36_Conditional_1_For_13_Conditional_32_Template, 6, 3, "div", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_20_0;
    const charge_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("payment-card--refundable", ctx_r1.canRefund() && charge_r12.refundable);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(charge_r12.method === "PIX" ? "pix" : "credit_card");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.chargeMethodLabel(charge_r12.method), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.chargeStatusBadgeClass(charge_r12.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.chargeStatusLabel(charge_r12.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", (tmp_20_0 = charge_r12.customerName) !== null && tmp_20_0 !== void 0 ? tmp_20_0 : "\u2014", " \xB7 ", ctx_r1.formatDateTime(charge_r12.paidAt), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(charge_r12.amount));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(charge_r12.refundedAmount));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(charge_r12.availableAmount));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isChargeExpanded(charge_r12.id) ? "expand_less" : "expand_more");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.canRefund() && charge_r12.refundable ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isChargeExpanded(charge_r12.id) ? 32 : -1);
  }
}
function ComandasComponent_Conditional_49_Conditional_36_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 45)(1, "h3", 46);
    \u0275\u0275text(2, "Pagamentos online");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 22);
    \u0275\u0275text(4, "Pagamentos feitos pelo cliente direto no app (cart\xE3o ou Pix).");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "dl", 55)(6, "div")(7, "dt");
    \u0275\u0275text(8, "Total pago pelos clientes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "dd");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 56);
    \u0275\u0275repeaterCreate(12, ComandasComponent_Conditional_49_Conditional_36_Conditional_1_For_13_Template, 33, 15, "div", 57, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fees_r10 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(fees_r10.grossOnlineAmount));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(fees_r10.charges);
  }
}
function ComandasComponent_Conditional_49_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ComandasComponent_Conditional_49_Conditional_36_Conditional_0_Template, 11, 1, "section", 45)(1, ComandasComponent_Conditional_49_Conditional_36_Conditional_1_Template, 14, 1, "section", 45);
  }
  if (rf & 2) {
    const fees_r10 = ctx;
    \u0275\u0275conditional(fees_r10.pendingFeeAmount > 0 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(fees_r10.charges.length > 0 ? 1 : -1);
  }
}
function ComandasComponent_Conditional_49_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "Nenhum pedido registrado nesta comanda.");
    \u0275\u0275elementEnd();
  }
}
function ComandasComponent_Conditional_49_Conditional_41_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 33);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r15.customerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.orderItemsSummary(order_r15));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.orderStatusBadgeClass(order_r15.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.orderStatusLabel(order_r15.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(order_r15.totalAmount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDateTime(order_r15.createdAt));
  }
}
function ComandasComponent_Conditional_49_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "table", 70)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Itens");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Valor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Hor\xE1rio");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, ComandasComponent_Conditional_49_Conditional_41_For_16_Template, 12, 7, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const comanda_r9 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275repeater(comanda_r9.orders);
  }
}
function ComandasComponent_Conditional_49_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "Nenhum pagamento registrado nesta comanda.");
    \u0275\u0275elementEnd();
  }
}
function ComandasComponent_Conditional_49_Conditional_46_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const payment_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_13_0 = payment_r16.customerName) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : payment_r16.registeredByUserName ? "Registrado por " + payment_r16.registeredByUserName : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.paymentMethodLabel(payment_r16.method));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.paymentTypeLabel(payment_r16.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(payment_r16.amount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(payment_r16.pendingFeeAmount != null ? ctx_r1.formatCurrency(payment_r16.pendingFeeAmount) : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDateTime(payment_r16.paidAt));
  }
}
function ComandasComponent_Conditional_49_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "table", 70)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Quem pagou");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "M\xE9todo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Valor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Taxa pendente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Hor\xE1rio");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, ComandasComponent_Conditional_49_Conditional_46_For_18_Template, 13, 6, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const comanda_r9 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(comanda_r9.payments);
  }
}
function ComandasComponent_Conditional_49_Conditional_47_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73);
    \u0275\u0275text(1, "Informe um valor maior que zero.");
    \u0275\u0275elementEnd();
  }
}
function ComandasComponent_Conditional_49_Conditional_47_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 19);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.paymentError(), " ");
  }
}
function ComandasComponent_Conditional_49_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 45)(1, "h3", 46);
    \u0275\u0275text(2, "Registrar pagamento em dinheiro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 22);
    \u0275\u0275text(4, "Use quando o cliente optar por pagar em dinheiro no caixa ou diretamente com o gar\xE7om, em vez de pelo app.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "form", 47);
    \u0275\u0275listener("submit", function ComandasComponent_Conditional_49_Conditional_47_Template_form_submit_5_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.submitPayment());
    });
    \u0275\u0275elementStart(6, "div", 48)(7, "div", 5)(8, "label", 71);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 7);
    \u0275\u0275element(11, "input", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ComandasComponent_Conditional_49_Conditional_47_Conditional_12_Template, 2, 0, "span", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 5)(14, "label", 74);
    \u0275\u0275text(15, "Onde foi pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 7)(17, "select", 75)(18, "option", 76);
    \u0275\u0275text(19, "Dinheiro no caixa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 77);
    \u0275\u0275text(21, "Dinheiro com o gar\xE7om");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(22, ComandasComponent_Conditional_49_Conditional_47_Conditional_22_Template, 4, 1, "div", 23);
    \u0275\u0275elementStart(23, "div", 51)(24, "button", 78);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const comanda_r9 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r1.paymentForm);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Valor (saldo: ", ctx_r1.formatCurrency(comanda_r9.balanceAmount), ")");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.paymentForm.controls.amount.invalid && ctx_r1.paymentForm.controls.amount.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.paymentForm.controls.amount.invalid && ctx_r1.paymentForm.controls.amount.touched ? 12 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r1.paymentError() ? 22 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSubmittingPayment());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSubmittingPayment() ? "Registrando\u2026" : "Registrar pagamento", " ");
  }
}
function ComandasComponent_Conditional_49_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 19);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.statusError(), " ");
  }
}
function ComandasComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 37);
    \u0275\u0275listener("click", function ComandasComponent_Conditional_49_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 38)(3, "h2", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 40);
    \u0275\u0275listener("click", function ComandasComponent_Conditional_49_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementStart(6, "span", 19);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 41)(9, "div", 42)(10, "span", 33);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ComandasComponent_Conditional_49_Conditional_12_Template, 4, 2, "button", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ComandasComponent_Conditional_49_Conditional_13_Template, 4, 1, "div", 23);
    \u0275\u0275elementStart(14, "dl", 44)(15, "div")(16, "dt");
    \u0275\u0275text(17, "Total pedidos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "dd");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div")(21, "dt");
    \u0275\u0275text(22, "Total pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "dd");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div")(26, "dt");
    \u0275\u0275text(27, "Saldo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "dd");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div")(31, "dt");
    \u0275\u0275text(32, "Aberta em");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "dd");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, ComandasComponent_Conditional_49_Conditional_35_Template, 6, 2, "div");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(36, ComandasComponent_Conditional_49_Conditional_36_Template, 2, 2);
    \u0275\u0275elementStart(37, "section", 45)(38, "h3", 46);
    \u0275\u0275text(39, "Pedidos");
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, ComandasComponent_Conditional_49_Conditional_40_Template, 2, 0, "p", 22)(41, ComandasComponent_Conditional_49_Conditional_41_Template, 17, 0, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "section", 45)(43, "h3", 46);
    \u0275\u0275text(44, "Pagamentos manuais");
    \u0275\u0275elementEnd();
    \u0275\u0275template(45, ComandasComponent_Conditional_49_Conditional_45_Template, 2, 0, "p", 22)(46, ComandasComponent_Conditional_49_Conditional_46_Template, 19, 0, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(47, ComandasComponent_Conditional_49_Conditional_47_Template, 26, 8, "section", 45);
    \u0275\u0275elementStart(48, "section", 45)(49, "h3", 46);
    \u0275\u0275text(50, "Alterar status manualmente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "p", 22);
    \u0275\u0275text(52, "Sobrep\xF5e o fluxo autom\xE1tico \u2014 use apenas em situa\xE7\xF5es excepcionais (ex: comanda que deveria ter sido encerrada e n\xE3o foi).");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "form", 47);
    \u0275\u0275listener("submit", function ComandasComponent_Conditional_49_Template_form_submit_53_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.submitStatusChange());
    });
    \u0275\u0275elementStart(54, "div", 48)(55, "div", 5)(56, "label", 49);
    \u0275\u0275text(57, "Novo status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 7)(59, "select", 50)(60, "option", 10);
    \u0275\u0275text(61, "Em aberto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "option", 11);
    \u0275\u0275text(63, "Encerrada");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(64, ComandasComponent_Conditional_49_Conditional_64_Template, 4, 1, "div", 23);
    \u0275\u0275elementStart(65, "div", 51)(66, "button", 52);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const comanda_r9 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" Comanda \u2014 Mesa ", comanda_r9.tableNumber, "", comanda_r9.tableName ? " \u2014 " + comanda_r9.tableName : "", " ");
    \u0275\u0275advance(6);
    \u0275\u0275classMap(ctx_r1.displayStatusBadgeClass(comanda_r9.displayStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.displayStatusLabel(comanda_r9.displayStatus), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canFinalize(comanda_r9) ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.finalizeError() ? 13 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(comanda_r9.totalOrdersAmount));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(comanda_r9.totalPaidAmount));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(comanda_r9.balanceAmount));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDateTime(comanda_r9.openedAt));
    \u0275\u0275advance();
    \u0275\u0275conditional(comanda_r9.closedAt ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_12_0 = comanda_r9.fees) ? 36 : -1, tmp_12_0);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(comanda_r9.orders.length === 0 ? 40 : 41);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(comanda_r9.payments.length === 0 ? 45 : 46);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(comanda_r9.status === "OPEN" ? 47 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r1.statusForm);
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r1.statusError() ? 64 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSubmittingStatus());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSubmittingStatus() ? "Salvando\u2026" : "Salvar status", " ");
  }
}
function ComandasComponent_Conditional_50_Conditional_2_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73);
    \u0275\u0275text(1, "Informe um valor maior que zero e at\xE9 o dispon\xEDvel.");
    \u0275\u0275elementEnd();
  }
}
function ComandasComponent_Conditional_50_Conditional_2_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 19);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.refundError(), " ");
  }
}
function ComandasComponent_Conditional_50_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "h2", 39);
    \u0275\u0275text(2, "Estornar pagamento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 40);
    \u0275\u0275listener("click", function ComandasComponent_Conditional_50_Conditional_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelRefundModal());
    });
    \u0275\u0275elementStart(4, "span", 19);
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "form", 47);
    \u0275\u0275listener("submit", function ComandasComponent_Conditional_50_Conditional_2_Template_form_submit_6_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.askRefundConfirmation());
    });
    \u0275\u0275elementStart(7, "p", 22);
    \u0275\u0275text(8, "Dispon\xEDvel para estorno: ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 5)(12, "label", 80);
    \u0275\u0275text(13, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 81)(15, "label", 82)(16, "input", 83);
    \u0275\u0275listener("change", function ComandasComponent_Conditional_50_Conditional_2_Template_input_change_16_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onRefundTypeChange("TOTAL"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Total ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "label", 82)(19, "input", 84);
    \u0275\u0275listener("change", function ComandasComponent_Conditional_50_Conditional_2_Template_input_change_19_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onRefundTypeChange("PARTIAL"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " Parcial ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 5)(22, "label", 85);
    \u0275\u0275text(23, "Valor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 7);
    \u0275\u0275element(25, "input", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, ComandasComponent_Conditional_50_Conditional_2_Conditional_26_Template, 2, 0, "span", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 5)(28, "label", 87);
    \u0275\u0275text(29, "Motivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 7)(31, "select", 88)(32, "option", 89);
    \u0275\u0275text(33, "Solicita\xE7\xE3o do cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 90);
    \u0275\u0275text(35, "Pedido cancelado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 91);
    \u0275\u0275text(37, "Cobran\xE7a duplicada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 92);
    \u0275\u0275text(39, "Erro operacional");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option", 93);
    \u0275\u0275text(41, "Outro");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(42, "div", 5)(43, "label", 94);
    \u0275\u0275text(44, "Observa\xE7\xE3o (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 7);
    \u0275\u0275element(46, "textarea", 95);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(47, ComandasComponent_Conditional_50_Conditional_2_Conditional_47_Template, 4, 1, "div", 23);
    \u0275\u0275elementStart(48, "div", 51)(49, "button", 96);
    \u0275\u0275listener("click", function ComandasComponent_Conditional_50_Conditional_2_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelRefundModal());
    });
    \u0275\u0275text(50, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 97);
    \u0275\u0275text(52, "Continuar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const charge_r20 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r1.refundForm);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(charge_r20.availableAmount));
    \u0275\u0275advance(6);
    \u0275\u0275property("checked", ctx_r1.refundForm.controls.type.value === "TOTAL");
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r1.refundForm.controls.type.value === "PARTIAL");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.refundForm.controls.amount.invalid && ctx_r1.refundForm.controls.amount.touched);
    \u0275\u0275property("max", charge_r20.availableAmount)("readOnly", ctx_r1.refundForm.controls.type.value === "TOTAL");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.refundForm.controls.amount.invalid && ctx_r1.refundForm.controls.amount.touched ? 26 : -1);
    \u0275\u0275advance(21);
    \u0275\u0275conditional(ctx_r1.refundError() ? 47 : -1);
  }
}
function ComandasComponent_Conditional_50_Conditional_3_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 19);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.refundError(), " ");
  }
}
function ComandasComponent_Conditional_50_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "h2", 39);
    \u0275\u0275text(2, "Confirmar estorno?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "p", 22);
    \u0275\u0275text(4, "Voc\xEA est\xE1 prestes a estornar:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "dl", 44)(6, "div")(7, "dt");
    \u0275\u0275text(8, "M\xE9todo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "dd");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "dt");
    \u0275\u0275text(13, "Valor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "dd");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "dt");
    \u0275\u0275text(18, "Motivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "dd");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "p", 22);
    \u0275\u0275text(22, "Essa opera\xE7\xE3o n\xE3o poder\xE1 ser desfeita.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, ComandasComponent_Conditional_50_Conditional_3_Conditional_23_Template, 4, 1, "div", 23);
    \u0275\u0275elementStart(24, "div", 51)(25, "button", 98);
    \u0275\u0275listener("click", function ComandasComponent_Conditional_50_Conditional_3_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelRefundConfirmation());
    });
    \u0275\u0275text(26, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 99);
    \u0275\u0275listener("click", function ComandasComponent_Conditional_50_Conditional_3_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmRefund());
    });
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const charge_r20 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.chargeMethodLabel(charge_r20.method));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency((tmp_4_0 = ctx_r1.refundForm.getRawValue().amount) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : 0));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.refundReasonLabel(ctx_r1.refundForm.getRawValue().reason));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.refundError() ? 23 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSubmittingRefund());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSubmittingRefund());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSubmittingRefund() ? "Estornando\u2026" : "Confirmar estorno", " ");
  }
}
function ComandasComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 79);
    \u0275\u0275listener("click", function ComandasComponent_Conditional_50_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(2, ComandasComponent_Conditional_50_Conditional_2_Template, 53, 10)(3, ComandasComponent_Conditional_50_Conditional_3_Template, 29, 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.confirmingRefund() ? 2 : 3);
  }
}
var PAGE_SIZE = 10;
var ComandasComponent = class _ComandasComponent {
  fb = new FormBuilder();
  comandasService = inject(ComandasService);
  tablesService = inject(TablesService);
  authService = inject(AuthService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  currencyFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
  dateTimeFormatter = brDateTimeFormat({ dateStyle: "short", timeStyle: "short" });
  selectedCompany = this.authService.selectedCompany;
  // Estorno restrito a OWNER/ADMIN/MANAGER (ver seed de permissão payment.refund no backend,
  // 02-perfil e acesso.sql) — CASHIER/WAITER não veem o botão "Estornar". Mesmo padrão de
  // canManageTables em tables.component.ts.
  canRefund = computed(() => ["OWNER", "ADMIN", "MANAGER"].includes(this.selectedCompany()?.profileCode ?? ""));
  // --- Listagem/paginação -----------------------------------------------------
  comandas = signal([]);
  page = signal(0);
  totalPages = signal(0);
  totalElements = signal(0);
  isLast = signal(true);
  isLoadingList = signal(true);
  listError = signal(null);
  pageLabel = computed(() => `P\xE1gina ${this.page() + 1} de ${Math.max(this.totalPages(), 1)}`);
  // --- Filtros ------------------------------------------------------------------
  filterStatus = signal("all");
  filterTableId = signal("");
  sortDirection = signal("DESC");
  tables = signal([]);
  // --- Detalhe da comanda (modal) ------------------------------------------------
  selectedComanda = signal(null);
  // --- Alterar status manualmente -----------------------------------------------
  statusForm = this.fb.nonNullable.group({
    status: this.fb.nonNullable.control("OPEN", Validators.required)
  });
  isSubmittingStatus = signal(false);
  statusError = signal(null);
  // --- Registrar pagamento em dinheiro --------------------------------------------
  paymentForm = this.fb.nonNullable.group({
    amount: this.fb.control(null, [Validators.required, Validators.min(0.01)]),
    method: this.fb.nonNullable.control("CASH_REGISTER", Validators.required)
  });
  isSubmittingPayment = signal(false);
  paymentError = signal(null);
  // --- Finalizar rapidamente (saldo já zerado) ------------------------------------
  finalizingComandaId = signal(null);
  finalizeError = signal(null);
  // --- Estornar pagamento online (Stripe) -----------------------------------------
  chargeToRefund = signal(null);
  confirmingRefund = signal(false);
  isSubmittingRefund = signal(false);
  refundError = signal(null);
  expandedChargeIds = signal(/* @__PURE__ */ new Set());
  refundForm = this.fb.nonNullable.group({
    type: this.fb.nonNullable.control("TOTAL"),
    amount: this.fb.control(null, [Validators.required, Validators.min(0.01)]),
    reason: this.fb.nonNullable.control("CUSTOMER_REQUEST", Validators.required),
    description: this.fb.control(null)
  });
  // Gerada uma vez ao abrir o modal, reaproveitada em qualquer reenvio (timeout, duplo clique) —
  // ver ComandasService#refundPayment. Só uma nova chave ao reabrir o modal do zero.
  refundIdempotencyKey = null;
  // Comanda aberta por deep link (?comanda=<id>) — ex.: link do extrato financeiro para a comanda
  // paga. Carregada isoladamente (não depende de estar na página atual da listagem).
  openingFromLink = signal(false);
  openFromLinkError = signal(null);
  constructor() {
    this.loadTables();
    this.loadComandas(0);
    const comandaIdFromLink = this.route.snapshot.queryParamMap.get("comanda");
    if (comandaIdFromLink) {
      this.openComandaFromLink(comandaIdFromLink);
    }
  }
  openComandaFromLink(comandaId) {
    this.openingFromLink.set(true);
    this.openFromLinkError.set(null);
    this.comandasService.getById(comandaId).subscribe({
      next: (comanda) => {
        this.openingFromLink.set(false);
        this.openDetail(comanda);
      },
      error: () => {
        this.openingFromLink.set(false);
        this.openFromLinkError.set("N\xE3o foi poss\xEDvel abrir a comanda indicada pelo link.");
      }
    });
    this.router.navigate([], { relativeTo: this.route, queryParams: {}, replaceUrl: true });
  }
  // --- Apresentação -------------------------------------------------------------
  displayStatusLabel(status) {
    switch (status) {
      case "CLOSED":
        return "Encerrada";
      case "OPEN_PARTIAL":
        return "Aberta \u2014 pagamento parcial";
      default:
        return "Em aberto";
    }
  }
  displayStatusBadgeClass(status) {
    switch (status) {
      case "CLOSED":
        return "badge--success";
      case "OPEN_PARTIAL":
        return "badge--warning";
      default:
        return "badge--muted";
    }
  }
  orderStatusLabel(status) {
    switch (status) {
      case "RECEIVED":
        return "Recebido";
      case "IN_PREPARATION":
        return "Em preparo";
      case "READY":
        return "Pronto";
      case "DELIVERED":
        return "Entregue";
      case "CLOSED":
        return "Fechado";
      default:
        return "Cancelado";
    }
  }
  orderStatusBadgeClass(status) {
    switch (status) {
      case "CANCELLED":
        return "badge--danger";
      case "DELIVERED":
      case "CLOSED":
        return "badge--success";
      case "READY":
        return "badge--warning";
      default:
        return "badge--muted";
    }
  }
  paymentTypeLabel(type) {
    switch (type) {
      case "FULL":
        return "Integral";
      case "OWN_BILL":
        return "Pr\xF3pria conta";
      default:
        return "Parcial";
    }
  }
  paymentMethodLabel(method) {
    switch (method) {
      case "CASH_REGISTER":
        return "Dinheiro (caixa)";
      case "CASH_WAITER":
        return "Dinheiro (gar\xE7om)";
      default:
        return "App do cliente";
    }
  }
  chargeMethodLabel(method) {
    return method === "PIX" ? "Pix" : "Cart\xE3o de cr\xE9dito";
  }
  chargeStatusLabel(status) {
    switch (status) {
      case "REFUNDED":
        return "Estornado";
      case "PARTIALLY_REFUNDED":
        return "Parcialmente estornado";
      default:
        return "Pago";
    }
  }
  chargeStatusBadgeClass(status) {
    switch (status) {
      case "REFUNDED":
        return "badge--danger";
      case "PARTIALLY_REFUNDED":
        return "badge--warning";
      default:
        return "badge--success";
    }
  }
  refundReasonLabel(reason) {
    switch (reason) {
      case "CUSTOMER_REQUEST":
        return "Solicita\xE7\xE3o do cliente";
      case "ORDER_CANCELLED":
        return "Pedido cancelado";
      case "DUPLICATE_CHARGE":
        return "Cobran\xE7a duplicada";
      case "OPERATIONAL_ERROR":
        return "Erro operacional";
      default:
        return "Outro";
    }
  }
  refundStatusLabel(status) {
    switch (status) {
      case "SUCCEEDED":
        return "Conclu\xEDdo";
      case "FAILED":
        return "Falhou";
      case "CANCELED":
        return "Cancelado";
      default:
        return "Processando";
    }
  }
  refundStatusBadgeClass(status) {
    switch (status) {
      case "SUCCEEDED":
        return "badge--success";
      case "FAILED":
      case "CANCELED":
        return "badge--danger";
      default:
        return "badge--muted";
    }
  }
  isChargeExpanded(chargeId) {
    return this.expandedChargeIds().has(chargeId);
  }
  toggleChargeDetails(chargeId) {
    this.expandedChargeIds.update((current) => {
      const next = new Set(current);
      if (next.has(chargeId)) {
        next.delete(chargeId);
      } else {
        next.add(chargeId);
      }
      return next;
    });
  }
  // Comanda sem saldo em aberto (já quitada, ou sem pedidos) pode ser encerrada com um clique,
  // sem precisar passar pelo formulário genérico de alteração manual de status.
  canFinalize(comanda) {
    return comanda.status === "OPEN" && comanda.balanceAmount <= 0;
  }
  formatCurrency(value) {
    return value != null ? this.currencyFormatter.format(value) : "\u2014";
  }
  formatDateTime(value) {
    const parsed = parseApiDate(value);
    return parsed ? this.dateTimeFormatter.format(parsed) : "\u2014";
  }
  // "2x X-Burger, 1x Coca-Cola" — itens cancelados individualmente já não vêm nesta lista (ver
  // ComandaServiceImpl#loadItemsByOrderId no backend), então o que aparece aqui é exatamente o
  // que compõe o totalAmount do pedido.
  orderItemsSummary(order) {
    if (order.items.length === 0) {
      return "\u2014";
    }
    return order.items.map((item) => `${item.quantity}x ${item.itemName}`).join(", ");
  }
  // --- Listagem -------------------------------------------------------------------
  loadTables() {
    this.tablesService.list({ status: "ACTIVE", page: 0, size: 200, sortBy: "number", sortDirection: "ASC" }).subscribe({
      next: (response) => this.tables.set(response.content),
      error: () => this.tables.set([])
    });
  }
  loadComandas(page) {
    this.isLoadingList.set(true);
    this.listError.set(null);
    const status = this.filterStatus();
    this.comandasService.list({
      status: status === "all" ? void 0 : status,
      tableId: this.filterTableId() || void 0,
      page,
      size: PAGE_SIZE,
      sortBy: "openedAt",
      sortDirection: this.sortDirection()
    }).subscribe({
      next: (response) => {
        this.comandas.set(response.content);
        this.page.set(response.page);
        this.totalPages.set(response.totalPages);
        this.totalElements.set(response.totalElements);
        this.isLast.set(response.last);
        this.isLoadingList.set(false);
      },
      error: () => {
        this.isLoadingList.set(false);
        this.listError.set("N\xE3o foi poss\xEDvel carregar as comandas.");
      }
    });
  }
  refreshComandas() {
    this.loadComandas(this.page());
  }
  goToPage(page) {
    if (page < 0 || page >= this.totalPages() || page === this.page()) {
      return;
    }
    this.loadComandas(page);
  }
  previousPage() {
    this.goToPage(this.page() - 1);
  }
  nextPage() {
    this.goToPage(this.page() + 1);
  }
  // --- Filtros ----------------------------------------------------------------------
  setStatusFilter(value) {
    this.filterStatus.set(value);
    this.loadComandas(0);
  }
  setTableFilter(value) {
    this.filterTableId.set(value);
    this.loadComandas(0);
  }
  toggleSortDirection() {
    this.sortDirection.set(this.sortDirection() === "ASC" ? "DESC" : "ASC");
    this.loadComandas(0);
  }
  resetFilters() {
    this.filterStatus.set("all");
    this.filterTableId.set("");
    this.sortDirection.set("DESC");
    this.loadComandas(0);
  }
  // --- Detalhe --------------------------------------------------------------------
  openDetail(comanda) {
    this.statusError.set(null);
    this.paymentError.set(null);
    this.finalizeError.set(null);
    this.statusForm.reset({ status: comanda.status === "CLOSED" ? "OPEN" : "CLOSED" });
    this.paymentForm.reset({ amount: null, method: "CASH_REGISTER" });
    this.expandedChargeIds.set(/* @__PURE__ */ new Set());
    this.cancelRefundModal();
    this.selectedComanda.set(comanda);
  }
  closeDetail() {
    this.selectedComanda.set(null);
  }
  // --- Alterar status manualmente -----------------------------------------------
  submitStatusChange() {
    const comanda = this.selectedComanda();
    if (!comanda || this.statusForm.invalid) {
      return;
    }
    this.isSubmittingStatus.set(true);
    this.statusError.set(null);
    this.comandasService.updateStatus(comanda.id, { status: this.statusForm.getRawValue().status }).subscribe({
      next: (updated) => {
        this.isSubmittingStatus.set(false);
        this.statusForm.reset({ status: updated.status === "CLOSED" ? "OPEN" : "CLOSED" });
        this.applyUpdatedComanda(updated);
      },
      error: (error) => {
        this.isSubmittingStatus.set(false);
        this.statusError.set(this.resolveErrorMessage(error));
        autoDismiss(this.statusError, null);
      }
    });
  }
  // --- Finalizar rapidamente (saldo já zerado) ------------------------------------
  finalizeComanda(comanda) {
    if (!this.canFinalize(comanda)) {
      return;
    }
    this.finalizeError.set(null);
    this.finalizingComandaId.set(comanda.id);
    this.comandasService.updateStatus(comanda.id, { status: "CLOSED" }).subscribe({
      next: (updated) => {
        this.finalizingComandaId.set(null);
        this.applyUpdatedComanda(updated);
        if (this.selectedComanda()?.id === updated.id) {
          this.statusForm.reset({ status: "OPEN" });
        }
      },
      error: (error) => {
        this.finalizingComandaId.set(null);
        this.finalizeError.set(this.resolveErrorMessage(error));
        autoDismiss(this.finalizeError, null);
      }
    });
  }
  // --- Registrar pagamento em dinheiro --------------------------------------------
  submitPayment() {
    const comanda = this.selectedComanda();
    if (!comanda || this.paymentForm.invalid) {
      this.paymentForm.markAllAsTouched();
      return;
    }
    const value = this.paymentForm.getRawValue();
    this.isSubmittingPayment.set(true);
    this.paymentError.set(null);
    this.comandasService.registerPayment(comanda.id, { amount: value.amount ?? 0, method: value.method }).subscribe({
      next: (updated) => {
        this.isSubmittingPayment.set(false);
        this.paymentForm.reset({ amount: null, method: "CASH_REGISTER" });
        this.applyUpdatedComanda(updated);
      },
      error: (error) => {
        this.isSubmittingPayment.set(false);
        this.paymentError.set(this.resolveErrorMessage(error));
        autoDismiss(this.paymentError, null);
      }
    });
  }
  // --- Estornar pagamento online (Stripe) -----------------------------------------
  openRefundModal(charge) {
    if (!charge.refundable) {
      return;
    }
    this.refundError.set(null);
    this.confirmingRefund.set(false);
    this.refundIdempotencyKey = crypto.randomUUID();
    this.refundForm.reset({
      type: "TOTAL",
      amount: charge.availableAmount,
      reason: "CUSTOMER_REQUEST",
      description: null
    });
    this.chargeToRefund.set(charge);
  }
  cancelRefundModal() {
    if (this.isSubmittingRefund()) {
      return;
    }
    this.chargeToRefund.set(null);
    this.confirmingRefund.set(false);
    this.refundError.set(null);
    this.refundIdempotencyKey = null;
  }
  // "Total" trava o valor no disponível (sempre em dia com o que já foi estornado antes); "Parcial"
  // libera o campo para o usuário digitar, começando do próprio disponível.
  onRefundTypeChange(type) {
    const charge = this.chargeToRefund();
    if (!charge) {
      return;
    }
    this.refundForm.patchValue({ type, amount: type === "TOTAL" ? charge.availableAmount : this.refundForm.controls.amount.value });
  }
  askRefundConfirmation() {
    if (this.refundForm.invalid) {
      this.refundForm.markAllAsTouched();
      return;
    }
    const charge = this.chargeToRefund();
    const amount = this.refundForm.getRawValue().amount ?? 0;
    if (!charge) {
      return;
    }
    if (amount <= 0 || amount > charge.availableAmount) {
      this.refundForm.controls.amount.markAsTouched();
      this.refundError.set("O valor informado ultrapassa o valor dispon\xEDvel para estorno.");
      return;
    }
    this.refundError.set(null);
    this.confirmingRefund.set(true);
  }
  cancelRefundConfirmation() {
    this.confirmingRefund.set(false);
  }
  confirmRefund() {
    const charge = this.chargeToRefund();
    if (!charge || this.isSubmittingRefund() || !this.refundIdempotencyKey) {
      return;
    }
    const value = this.refundForm.getRawValue();
    this.isSubmittingRefund.set(true);
    this.refundError.set(null);
    this.comandasService.refundPayment(charge.id, { amount: value.amount ?? 0, reason: value.reason, description: value.description || void 0 }, this.refundIdempotencyKey).subscribe({
      next: (response) => {
        this.isSubmittingRefund.set(false);
        this.applyRefundLocally(charge.id, value.amount ?? 0, value.reason, value.description, response);
        this.chargeToRefund.set(null);
        this.confirmingRefund.set(false);
        this.refundIdempotencyKey = null;
      },
      error: (error) => {
        this.isSubmittingRefund.set(false);
        this.confirmingRefund.set(false);
        this.refundError.set(this.resolveErrorMessage(error));
      }
    });
  }
  // Atualiza só a cobrança estornada (e o resumo de taxas) dentro da comanda já carregada — sem
  // recarregar a página inteira, seguindo o mesmo padrão de applyUpdatedComanda.
  applyRefundLocally(chargeId, amount, reason, description, response) {
    const comanda = this.selectedComanda();
    if (!comanda?.fees) {
      return;
    }
    const updatedCharges = comanda.fees.charges.map((current) => {
      if (current.id !== chargeId) {
        return current;
      }
      const refundedAmount = current.refundedAmount + amount;
      const availableAmount = Math.max(0, current.amount - refundedAmount);
      return __spreadProps(__spreadValues({}, current), {
        refundedAmount,
        availableAmount,
        refundable: availableAmount > 0,
        status: availableAmount <= 0 ? "REFUNDED" : "PARTIALLY_REFUNDED",
        refunds: [
          {
            id: response.refundId,
            amount,
            reason,
            description: description ?? void 0,
            status: response.status,
            stripeRefundId: response.stripeRefundId,
            createdAt: response.createdAt
          },
          ...current.refunds
        ]
      });
    });
    this.applyUpdatedComanda(__spreadProps(__spreadValues({}, comanda), { fees: __spreadProps(__spreadValues({}, comanda.fees), { charges: updatedCharges }) }));
  }
  applyUpdatedComanda(updated) {
    this.selectedComanda.set(updated);
    this.comandas.update((list) => list.map((current) => current.id === updated.id ? updated : current));
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
      return "Comanda n\xE3o encontrada.";
    }
    if (error.status === 409) {
      return "Esta comanda j\xE1 est\xE1 encerrada.";
    }
    if (error.status === 403) {
      return "Voc\xEA n\xE3o tem permiss\xE3o para realizar esta a\xE7\xE3o.";
    }
    if (error.status === 422) {
      return "Verifique os dados informados e tente novamente.";
    }
    return "N\xE3o foi poss\xEDvel concluir a opera\xE7\xE3o. Tente novamente em instantes.";
  }
  static \u0275fac = function ComandasComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComandasComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComandasComponent, selectors: [["app-admin-comandas"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 51, vars: 11, consts: [[1, "page-header", "page-header--row"], [1, "page-title"], [1, "page-subtitle"], [1, "card", "filters-card"], [1, "filters-row"], [1, "field"], ["for", "filter-status", 1, "field__label"], [1, "field__control"], ["id", "filter-status", 1, "field__input", 3, "change", "value"], ["value", "all"], ["value", "OPEN"], ["value", "CLOSED"], ["for", "filter-table", 1, "field__label"], ["id", "filter-table", 1, "field__input", 3, "change", "value"], ["value", ""], [3, "value"], [1, "field", "filters-row__actions"], ["aria-hidden", "true", 1, "field__label"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click", "title"], ["aria-hidden", "true", 1, "material-icons"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], [1, "field__hint"], ["role", "alert", 1, "form-alert", "form-alert--error"], [1, "card", "table-card"], [1, "modal-backdrop"], [1, "table-wrapper"], [1, "data-table"], [1, "data-table__actions-col"], [1, "pagination"], [1, "pagination__info"], [1, "pagination__controls"], ["colspan", "8", 1, "data-table__empty"], [1, "badge"], ["type", "button", "title", "Ver detalhes", 1, "icon-btn", 3, "click"], ["type", "button", "title", "Finalizar comanda (saldo zerado)", 1, "icon-btn", "icon-btn--success", 3, "disabled"], ["type", "button", "title", "Finalizar comanda (saldo zerado)", 1, "icon-btn", "icon-btn--success", 3, "click", "disabled"], [1, "modal-card", "modal-card--lg", "card", 3, "click"], [1, "modal-card__header"], [1, "step-heading"], ["type", "button", "aria-label", "Fechar", 1, "icon-btn", 3, "click"], [1, "comanda-summary"], [1, "comanda-summary__status"], ["type", "button", 1, "btn", "btn--success", "btn--sm", 3, "disabled"], [1, "comanda-summary__stats"], [1, "comanda-section"], [1, "comanda-section__title"], ["novalidate", "", 3, "submit", "formGroup"], [1, "field__row"], ["for", "comanda-status", 1, "field__label"], ["id", "comanda-status", "formControlName", "status", 1, "field__input"], [1, "step-actions"], ["type", "submit", 1, "btn", "btn--ghost", 3, "disabled"], ["type", "button", 1, "btn", "btn--success", "btn--sm", 3, "click", "disabled"], [1, "comanda-summary__by"], [1, "comanda-fees"], [1, "payment-cards"], [1, "payment-card", 3, "payment-card--refundable"], [1, "payment-card"], [1, "payment-card__header"], [1, "payment-card__method"], [1, "payment-card__meta"], [1, "payment-card__stats"], [1, "payment-card__actions"], ["type", "button", 1, "btn", "btn--danger", "btn--sm"], [1, "charge-details"], ["type", "button", 1, "btn", "btn--danger", "btn--sm", 3, "click"], [1, "refund-history"], [1, "refund-history__description"], [1, "refund-history__description", "refund-history__description--error"], [1, "data-table", "data-table--compact"], ["for", "payment-amount", 1, "field__label"], ["id", "payment-amount", "type", "number", "min", "0.01", "step", "0.01", "formControlName", "amount", "placeholder", "0,00", 1, "field__input"], [1, "field__error"], ["for", "payment-method", 1, "field__label"], ["id", "payment-method", "formControlName", "method", 1, "field__input"], ["value", "CASH_REGISTER"], ["value", "CASH_WAITER"], ["type", "submit", "appRipple", "", 1, "btn", "btn--primary", 3, "disabled"], [1, "modal-card", "card", 3, "click"], [1, "field__label"], [1, "refund-type-options"], [1, "refund-type-option"], ["type", "radio", "name", "refund-type", "value", "TOTAL", 3, "change", "checked"], ["type", "radio", "name", "refund-type", "value", "PARTIAL", 3, "change", "checked"], ["for", "refund-amount", 1, "field__label"], ["id", "refund-amount", "type", "number", "min", "0.01", "step", "0.01", "formControlName", "amount", "placeholder", "0,00", 1, "field__input", 3, "max", "readOnly"], ["for", "refund-reason", 1, "field__label"], ["id", "refund-reason", "formControlName", "reason", 1, "field__input"], ["value", "CUSTOMER_REQUEST"], ["value", "ORDER_CANCELLED"], ["value", "DUPLICATE_CHARGE"], ["value", "OPERATIONAL_ERROR"], ["value", "OTHER"], ["for", "refund-description", 1, "field__label"], ["id", "refund-description", "rows", "2", "maxlength", "500", "formControlName", "description", 1, "field__input"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "submit", 1, "btn", "btn--danger"], ["type", "button", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn--danger", 3, "click", "disabled"]], template: function ComandasComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Comandas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "label", 6);
      \u0275\u0275text(10, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 7)(12, "select", 8);
      \u0275\u0275listener("change", function ComandasComponent_Template_select_change_12_listener($event) {
        return ctx.setStatusFilter($event.target.value);
      });
      \u0275\u0275elementStart(13, "option", 9);
      \u0275\u0275text(14, "Todas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "option", 10);
      \u0275\u0275text(16, "Em aberto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "option", 11);
      \u0275\u0275text(18, "Encerradas");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(19, "div", 5)(20, "label", 12);
      \u0275\u0275text(21, "Mesa");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 7)(23, "select", 13);
      \u0275\u0275listener("change", function ComandasComponent_Template_select_change_23_listener($event) {
        return ctx.setTableFilter($event.target.value);
      });
      \u0275\u0275elementStart(24, "option", 14);
      \u0275\u0275text(25, "Todas");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(26, ComandasComponent_For_27_Template, 2, 3, "option", 15, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div", 16)(29, "span", 17);
      \u0275\u0275text(30, "\xA0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 7)(32, "button", 18);
      \u0275\u0275listener("click", function ComandasComponent_Template_button_click_32_listener() {
        return ctx.toggleSortDirection();
      });
      \u0275\u0275elementStart(33, "span", 19);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd();
      \u0275\u0275text(35, " Abertura ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 20);
      \u0275\u0275listener("click", function ComandasComponent_Template_button_click_36_listener() {
        return ctx.refreshComandas();
      });
      \u0275\u0275elementStart(37, "span", 19);
      \u0275\u0275text(38, "refresh");
      \u0275\u0275elementEnd();
      \u0275\u0275text(39, " Atualizar ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "button", 21);
      \u0275\u0275listener("click", function ComandasComponent_Template_button_click_40_listener() {
        return ctx.resetFilters();
      });
      \u0275\u0275elementStart(41, "span", 19);
      \u0275\u0275text(42, "filter_alt_off");
      \u0275\u0275elementEnd();
      \u0275\u0275text(43, " Limpar filtros ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(44, ComandasComponent_Conditional_44_Template, 2, 0, "p", 22)(45, ComandasComponent_Conditional_45_Template, 4, 1, "div", 23)(46, ComandasComponent_Conditional_46_Template, 2, 0, "p", 22)(47, ComandasComponent_Conditional_47_Template, 4, 1, "div", 23)(48, ComandasComponent_Conditional_48_Template, 38, 6, "div", 24)(49, ComandasComponent_Conditional_49_Template, 68, 20, "div", 25)(50, ComandasComponent_Conditional_50_Template, 4, 1, "div", 25);
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_10_0;
      let tmp_11_0;
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" Acompanhe as comandas abertas e encerradas de ", (tmp_0_0 = (tmp_0_0 = ctx.selectedCompany()) == null ? null : tmp_0_0.companyName) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : "sua empresa", ", com pedidos e pagamentos de cada uma. ");
      \u0275\u0275advance(7);
      \u0275\u0275property("value", ctx.filterStatus());
      \u0275\u0275advance(11);
      \u0275\u0275property("value", ctx.filterTableId());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.tables());
      \u0275\u0275advance(6);
      \u0275\u0275property("title", ctx.sortDirection() === "DESC" ? "Mais recentes primeiro" : "Mais antigas primeiro");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.sortDirection() === "DESC" ? "arrow_downward" : "arrow_upward");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isLoadingList());
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.openingFromLink() ? 44 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.openFromLinkError() ? 45 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoadingList() ? 46 : ctx.listError() ? 47 : 48);
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_10_0 = ctx.selectedComanda()) ? 49 : -1, tmp_10_0);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_11_0 = ctx.chargeToRefund()) ? 50 : -1, tmp_11_0);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, MinValidator, MaxValidator, FormGroupDirective, FormControlName, RippleDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-header--row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.filters-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-bottom: 20px;\n}\n.filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.filters-row[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  min-width: 160px;\n  margin-top: 0;\n}\n.filters-row__actions[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.filters-row__actions[_ngcontent-%COMP%]   .field__label[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.filters-row__actions[_ngcontent-%COMP%]   .field__control[_ngcontent-%COMP%] {\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.table-card[_ngcontent-%COMP%] {\n  padding: 8px 0 0;\n  overflow: hidden;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.9375rem;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  text-align: left;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: 1px solid var(--color-border);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--color-border);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.02);\n}\n.data-table--compact[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.data-table--compact[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n}\n.data-table__actions-col[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.data-table__empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--color-text-muted);\n  padding: 32px 20px;\n  white-space: normal;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: var(--radius-full);\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.badge--success[_ngcontent-%COMP%] {\n  background: var(--color-success-bg);\n  color: var(--color-success);\n}\n.badge--muted[_ngcontent-%COMP%] {\n  background: rgba(203, 213, 225, 0.12);\n  color: var(--color-text-muted);\n}\n.badge--warning[_ngcontent-%COMP%] {\n  background: rgba(250, 204, 21, 0.14);\n  color: #facc15;\n}\n.badge--danger[_ngcontent-%COMP%] {\n  background: rgba(248, 113, 113, 0.14);\n  color: #f87171;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius-sm);\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text);\n}\n.icon-btn[_ngcontent-%COMP%]    + .icon-btn[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  padding: 16px 20px;\n}\n.pagination__info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n.pagination__controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(4, 8, 20, 0.64);\n  backdrop-filter: blur(2px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  z-index: 100;\n}\n.modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 640px;\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n  padding: 32px;\n}\n.modal-card--lg[_ngcontent-%COMP%] {\n  max-width: 820px;\n}\n.modal-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.step-heading[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n}\n.field__row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.field__row[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 180px;\n}\n.step-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\nselect.field__input[_ngcontent-%COMP%] {\n  appearance: none;\n  cursor: pointer;\n}\n.icon-btn--success[_ngcontent-%COMP%]:hover {\n  background: var(--color-success-bg);\n  color: var(--color-success);\n}\n.comanda-summary[_ngcontent-%COMP%] {\n  margin: 16px 0 24px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--color-border);\n}\n.comanda-summary__status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.comanda-summary__stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 12px;\n  margin: 16px 0 0;\n}\n.comanda-summary__stats[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.comanda-summary__stats[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.comanda-summary__stats[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.comanda-summary__by[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  font-weight: 400;\n  color: var(--color-text-muted);\n}\n.comanda-section[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.comanda-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.comanda-section__title[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 0.9375rem;\n  color: var(--color-text);\n}\n.comanda-fees[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 12px;\n  margin: 14px 0;\n  padding: 16px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n}\n.comanda-fees[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.comanda-fees[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.comanda-fees[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #f87171;\n  color: #2a0a0a;\n}\n.btn--danger[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n}\n.btn--danger[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.icon-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(248, 113, 113, 0.14);\n  color: #f87171;\n}\n.payment-cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.payment-card[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  background: var(--color-bg-card);\n}\n.payment-card--refundable[_ngcontent-%COMP%] {\n  border-color: rgba(248, 113, 113, 0.4);\n}\n.payment-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.payment-card__method[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.payment-card__method[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--color-text-muted);\n}\n.payment-card__meta[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.payment-card__stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: 10px;\n  margin: 12px 0 0;\n}\n.payment-card__stats[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.payment-card__stats[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  color: var(--color-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.payment-card__stats[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.payment-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 12px;\n}\n.payment-card__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.charge-details[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  padding-top: 12px;\n  border-top: 1px solid var(--color-border);\n}\n.refund-history[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 8px 0 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.refund-history[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.refund-history__description[_ngcontent-%COMP%] {\n  width: 100%;\n  font-style: italic;\n}\n.refund-history__description--error[_ngcontent-%COMP%] {\n  color: #f87171;\n  font-style: normal;\n}\n.refund-type-options[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-top: 4px;\n}\n.refund-type-option[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.875rem;\n  color: var(--color-text);\n  cursor: pointer;\n}\n.refund-type-option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=comandas.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComandasComponent, { className: "ComandasComponent", filePath: "src\\app\\features\\admin\\pages\\comandas\\comandas.component.ts", lineNumber: 39 });
})();
export {
  ComandasComponent
};
//# sourceMappingURL=chunk-W7JFQ6Q3.js.map
