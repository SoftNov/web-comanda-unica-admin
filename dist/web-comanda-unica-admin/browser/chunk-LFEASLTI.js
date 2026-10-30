import {
  StaffOrderService
} from "./chunk-HZKDTF2P.js";
import {
  QrTargetResolverService
} from "./chunk-AEZWW7KB.js";
import {
  QrScannerComponent
} from "./chunk-NLLVBTSU.js";
import {
  TablesService
} from "./chunk-YOR34W3A.js";
import {
  autoDismiss
} from "./chunk-JD6JJHYZ.js";
import {
  ConsumptionPassesService
} from "./chunk-CNMFBBFG.js";
import {
  formatTableLabel
} from "./chunk-XFEDBWXJ.js";
import "./chunk-IKIQHSDP.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-JC7LZX74.js";
import {
  EMPTY,
  HttpErrorResponse,
  computed,
  expand,
  inject,
  reduce,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
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
  ɵɵtextInterpolate1
} from "./chunk-MRKXMG4P.js";

// src/app/features/admin/pages/comanda-mesa/comanda-mesa.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.orderId;
function ComandaMesaComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r1 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" \u2014 ", ctx_r1.tableLabel(t_r1.number, t_r1.name), " ");
  }
}
function ComandaMesaComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" \u2014 Cart\xE3o ", ctx, " ");
  }
}
function ComandaMesaComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Nesta mesa cada cliente consome no pr\xF3prio cart\xE3o \u2014 escolha o cart\xE3o para ver a comanda. ");
  }
}
function ComandaMesaComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r1.passToken() ? "Todos os pedidos j\xE1 lan\xE7ados neste cart\xE3o." : "Todos os pedidos j\xE1 lan\xE7ados nesta mesa.", " ");
  }
}
function ComandaMesaComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function ComandaMesaComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToTablePasses());
    });
    \u0275\u0275elementStart(1, "span", 6);
    \u0275\u0275text(2, "credit_card");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Outros cart\xF5es da mesa ");
    \u0275\u0275elementEnd();
  }
}
function ComandaMesaComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.isLoadingPasses() ? "Carregando cart\xF5es da mesa\u2026" : "Carregando comanda\u2026");
  }
}
function ComandaMesaComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 6);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.loadError(), " ");
  }
}
function ComandaMesaComponent_Conditional_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-qr-scanner", 14);
    \u0275\u0275listener("scanned", function ComandaMesaComponent_Conditional_17_Conditional_1_Template_app_qr_scanner_scanned_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPassScanned($event));
    })("closed", function ComandaMesaComponent_Conditional_17_Conditional_1_Template_app_qr_scanner_closed_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isScanningPass.set(false));
    });
    \u0275\u0275elementEnd();
  }
}
function ComandaMesaComponent_Conditional_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 15);
    \u0275\u0275listener("submit", function ComandaMesaComponent_Conditional_17_Conditional_2_Template_form_submit_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.submitPassInput());
    });
    \u0275\u0275elementStart(1, "button", 16);
    \u0275\u0275listener("click", function ComandaMesaComponent_Conditional_17_Conditional_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startPassScan());
    });
    \u0275\u0275elementStart(2, "span", 6);
    \u0275\u0275text(3, "qr_code_scanner");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Ler cart\xE3o ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 17);
    \u0275\u0275listener("input", function ComandaMesaComponent_Conditional_17_Conditional_2_Template_input_input_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.passInput.set($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 18);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isResolvingPass());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.passInput())("disabled", ctx_r1.isResolvingPass());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.passInput().trim() || ctx_r1.isResolvingPass());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isResolvingPass() ? "Buscando\u2026" : "Abrir", " ");
  }
}
function ComandaMesaComponent_Conditional_17_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 6);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.passReadError(), " ");
  }
}
function ComandaMesaComponent_Conditional_17_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "p");
    \u0275\u0275text(2, "Nenhum cart\xE3o de consumo em uso nesta mesa. Leia o cart\xE3o do cliente acima ou lance um pedido.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 19);
    \u0275\u0275listener("click", function ComandaMesaComponent_Conditional_17_Conditional_4_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToMenu());
    });
    \u0275\u0275elementStart(4, "span", 6);
    \u0275\u0275text(5, "add_shopping_cart");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Lan\xE7ar pedido com cart\xE3o ");
    \u0275\u0275elementEnd()();
  }
}
function ComandaMesaComponent_Conditional_17_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function ComandaMesaComponent_Conditional_17_Conditional_5_For_2_Template_button_click_0_listener() {
      const pass_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectPass(pass_r8));
    });
    \u0275\u0275elementStart(1, "span", 22);
    \u0275\u0275text(2, "credit_card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 6);
    \u0275\u0275text(9, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pass_r8 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Cart\xE3o N\xBA ", pass_r8.number, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pass_r8.customerName || "Cliente sem nome");
  }
}
function ComandaMesaComponent_Conditional_17_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275repeaterCreate(1, ComandaMesaComponent_Conditional_17_Conditional_5_For_2_Template, 10, 2, "button", 20, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.tablePasses());
  }
}
function ComandaMesaComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, ComandaMesaComponent_Conditional_17_Conditional_1_Template, 1, 0, "app-qr-scanner", 10)(2, ComandaMesaComponent_Conditional_17_Conditional_2_Template, 8, 5, "form", 11)(3, ComandaMesaComponent_Conditional_17_Conditional_3_Template, 4, 1, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ComandaMesaComponent_Conditional_17_Conditional_4_Template, 7, 0, "div", 12)(5, ComandaMesaComponent_Conditional_17_Conditional_5_Template, 3, 0, "div", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isScanningPass() ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.passReadError() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tablePasses().length === 0 ? 4 : 5);
  }
}
function ComandaMesaComponent_Conditional_18_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 6);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.orderActionError(), " ");
  }
}
function ComandaMesaComponent_Conditional_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "Nenhum pedido lan\xE7ado nesta mesa ainda.");
    \u0275\u0275elementEnd();
  }
}
function ComandaMesaComponent_Conditional_18_Conditional_2_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "Pedido cancelado");
    \u0275\u0275elementEnd();
  }
}
function ComandaMesaComponent_Conditional_18_Conditional_2_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function ComandaMesaComponent_Conditional_18_Conditional_2_For_2_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const group_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.askCancelOrder(group_r10.orderId));
    });
    \u0275\u0275text(1, " Cancelar pedido ");
    \u0275\u0275elementEnd();
  }
}
function ComandaMesaComponent_Conditional_18_Conditional_2_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "label", 38);
    \u0275\u0275text(2, "Motivo do cancelamento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 39);
    \u0275\u0275listener("input", function ComandaMesaComponent_Conditional_18_Conditional_2_For_2_Conditional_10_Template_textarea_input_3_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.reasonInput.set($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 40)(5, "button", 41);
    \u0275\u0275listener("click", function ComandaMesaComponent_Conditional_18_Conditional_2_For_2_Conditional_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.dismissOrderAction());
    });
    \u0275\u0275text(6, " Voltar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 42);
    \u0275\u0275listener("click", function ComandaMesaComponent_Conditional_18_Conditional_2_For_2_Conditional_10_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.confirmCancelOrder());
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const group_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("for", "cancel-reason-" + group_r10.orderId);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "cancel-reason-" + group_r10.orderId)("value", ctx_r1.reasonInput());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.cancellingOrderId() === group_r10.orderId);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.reasonInput().trim() || ctx_r1.cancellingOrderId() === group_r10.orderId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.cancellingOrderId() === group_r10.orderId ? "Cancelando\u2026" : "Confirmar cancelamento", " ");
  }
}
function ComandaMesaComponent_Conditional_18_Conditional_2_For_2_For_13_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function ComandaMesaComponent_Conditional_18_Conditional_2_For_2_For_13_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const item_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.askRemoveItem(item_r13.id));
    });
    \u0275\u0275elementStart(1, "span", 6);
    \u0275\u0275text(2, "delete_outline");
    \u0275\u0275elementEnd()();
  }
}
function ComandaMesaComponent_Conditional_18_Conditional_2_For_2_For_13_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Obs: ", item_r13.notes, "");
  }
}
function ComandaMesaComponent_Conditional_18_Conditional_2_For_2_For_13_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Motivo: ", item_r13.removalReason, "");
  }
}
function ComandaMesaComponent_Conditional_18_Conditional_2_For_2_For_13_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "label", 38);
    \u0275\u0275text(2, "Motivo da remo\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 53);
    \u0275\u0275listener("input", function ComandaMesaComponent_Conditional_18_Conditional_2_For_2_For_13_Conditional_13_Template_textarea_input_3_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.reasonInput.set($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 40)(5, "button", 41);
    \u0275\u0275listener("click", function ComandaMesaComponent_Conditional_18_Conditional_2_For_2_For_13_Conditional_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.dismissOrderAction());
    });
    \u0275\u0275text(6, " Voltar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 42);
    \u0275\u0275listener("click", function ComandaMesaComponent_Conditional_18_Conditional_2_For_2_For_13_Conditional_13_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.confirmRemoveItem());
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("for", "remove-reason-" + item_r13.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "remove-reason-" + item_r13.id)("value", ctx_r1.reasonInput());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.removingItemId() === item_r13.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.reasonInput().trim() || ctx_r1.removingItemId() === item_r13.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.removingItemId() === item_r13.id ? "Removendo\u2026" : "Confirmar remo\xE7\xE3o", " ");
  }
}
function ComandaMesaComponent_Conditional_18_Conditional_2_For_2_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 43)(1, "div", 44)(2, "span", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 46);
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span", 47);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 48);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ComandaMesaComponent_Conditional_18_Conditional_2_For_2_For_13_Conditional_10_Template, 3, 0, "button", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ComandaMesaComponent_Conditional_18_Conditional_2_For_2_For_13_Conditional_11_Template, 2, 1, "p", 50)(12, ComandaMesaComponent_Conditional_18_Conditional_2_For_2_For_13_Conditional_12_Template, 2, 1, "p", 51)(13, ComandaMesaComponent_Conditional_18_Conditional_2_For_2_For_13_Conditional_13_Template, 9, 6, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("staff-order-item--cancelled", item_r13.status === "CANCELLED");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r13.quantity, "x");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r13.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.staffItemStatusLabel(item_r13.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(item_r13.totalPrice));
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r13.status === "REQUESTED" && ctx_r1.pendingRemoveItemId() !== item_r13.id ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r13.notes ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r13.status === "CANCELLED" && item_r13.removalReason ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.pendingRemoveItemId() === item_r13.id ? 13 : -1);
  }
}
function ComandaMesaComponent_Conditional_18_Conditional_2_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "label", 38);
    \u0275\u0275text(2, "Observa\xE7\xE3o do pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 54);
    \u0275\u0275listener("input", function ComandaMesaComponent_Conditional_18_Conditional_2_For_2_Conditional_14_Template_textarea_input_3_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.notesInput.set($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 40)(5, "button", 41);
    \u0275\u0275listener("click", function ComandaMesaComponent_Conditional_18_Conditional_2_For_2_Conditional_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.cancelEditOrderNotes());
    });
    \u0275\u0275text(6, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 55);
    \u0275\u0275listener("click", function ComandaMesaComponent_Conditional_18_Conditional_2_For_2_Conditional_14_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r15);
      const group_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveOrderNotes(group_r10.orderId));
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const group_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("for", "order-notes-" + group_r10.orderId);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "order-notes-" + group_r10.orderId)("value", ctx_r1.notesInput());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSavingNotes());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSavingNotes());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSavingNotes() ? "Salvando\u2026" : "Salvar observa\xE7\xE3o", " ");
  }
}
function ComandaMesaComponent_Conditional_18_Conditional_2_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275listener("click", function ComandaMesaComponent_Conditional_18_Conditional_2_For_2_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const group_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.startEditOrderNotes(group_r10));
    });
    \u0275\u0275elementStart(1, "span", 6);
    \u0275\u0275text(2, "edit_note");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", group_r10.notes ? group_r10.notes : "Adicionar anota\xE7\xE3o ao pedido", " ");
  }
}
function ComandaMesaComponent_Conditional_18_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "span", 6);
    \u0275\u0275text(3, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 29);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ComandaMesaComponent_Conditional_18_Conditional_2_For_2_Conditional_8_Template, 2, 0, "span", 30)(9, ComandaMesaComponent_Conditional_18_Conditional_2_For_2_Conditional_9_Template, 2, 0, "button", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ComandaMesaComponent_Conditional_18_Conditional_2_For_2_Conditional_10_Template, 9, 6, "div", 32);
    \u0275\u0275elementStart(11, "ul", 33);
    \u0275\u0275repeaterCreate(12, ComandaMesaComponent_Conditional_18_Conditional_2_For_2_For_13_Template, 14, 10, "li", 34, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ComandaMesaComponent_Conditional_18_Conditional_2_For_2_Conditional_14_Template, 9, 6, "div", 35)(15, ComandaMesaComponent_Conditional_18_Conditional_2_For_2_Conditional_15_Template, 4, 1, "button", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("staff-order-group--cancelled", group_r10.allCancelled);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(group_r10.customerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(group_r10.activeTotal));
    \u0275\u0275advance();
    \u0275\u0275conditional(group_r10.allCancelled ? 8 : group_r10.canCancel && ctx_r1.pendingCancelOrderId() !== group_r10.orderId ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.pendingCancelOrderId() === group_r10.orderId ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r10.items);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.editingNotesOrderId() === group_r10.orderId ? 14 : 15);
  }
}
function ComandaMesaComponent_Conditional_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275repeaterCreate(1, ComandaMesaComponent_Conditional_18_Conditional_2_For_2_Template, 16, 7, "div", 25, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.orderGroups());
  }
}
function ComandaMesaComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ComandaMesaComponent_Conditional_18_Conditional_0_Template, 4, 1, "div", 8)(1, ComandaMesaComponent_Conditional_18_Conditional_1_Template, 2, 0, "p", 12)(2, ComandaMesaComponent_Conditional_18_Conditional_2_Template, 3, 0, "div", 24);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.orderActionError() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.orderGroups().length === 0 ? 1 : 2);
  }
}
var ComandaMesaComponent = class _ComandaMesaComponent {
  tableLabel = formatTableLabel;
  tablesService = inject(TablesService);
  staffOrderService = inject(StaffOrderService);
  consumptionPassesService = inject(ConsumptionPassesService);
  qrResolver = inject(QrTargetResolverService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  currencyFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
  tableId = this.route.snapshot.paramMap.get("tableId") ?? "";
  table = signal(null);
  // Estabelecimento com cartão de consumo: a tela de lançar pedido manda o token do cartão
  // (?cartao=) e esta página mostra a comanda individual do cartão, não a compartilhada da mesa.
  // Signal (não snapshot): escolher um cartão da mesa troca o ?cartao= sem remontar a página.
  passToken = signal(this.route.snapshot.queryParamMap.get("cartao"));
  // Cartão obrigatório e página aberta pela MESA (sem ?cartao=, ex.: "Ver comanda" da home): a
  // mesa não tem comanda compartilhada — cada cliente consome no próprio cartão (ver
  // StaffOrderServiceImpl#openOrEnter na API do cardápio). Então lista os cartões em uso nesta
  // mesa para escolher qual comanda abrir.
  tablePasses = signal(null);
  isLoadingPasses = signal(false);
  orderComanda = signal(null);
  isLoading = signal(true);
  loadError = signal(null);
  pendingCancelOrderId = signal(null);
  pendingRemoveItemId = signal(null);
  reasonInput = signal("");
  cancellingOrderId = signal(null);
  removingItemId = signal(null);
  orderActionError = signal(null);
  editingNotesOrderId = signal(null);
  notesInput = signal("");
  isSavingNotes = signal(false);
  orderGroups = computed(() => {
    const comanda = this.orderComanda();
    if (!comanda) {
      return [];
    }
    const byOrderId = /* @__PURE__ */ new Map();
    const groups = [];
    for (const item of comanda.items) {
      let group = byOrderId.get(item.orderId);
      if (!group) {
        group = {
          orderId: item.orderId,
          customerName: item.customerName,
          notes: item.orderNotes ?? null,
          items: [],
          activeTotal: 0,
          allCancelled: true,
          canCancel: true
        };
        byOrderId.set(item.orderId, group);
        groups.push(group);
      }
      group.items.push(item);
      if (item.status !== "CANCELLED") {
        group.activeTotal += item.totalPrice;
        group.allCancelled = false;
        if (item.status !== "REQUESTED") {
          group.canCancel = false;
        }
      }
    }
    return groups;
  });
  constructor() {
    if (!this.tableId) {
      this.loadError.set("Mesa n\xE3o informada.");
      this.isLoading.set(false);
      return;
    }
    this.loadTable();
    this.loadComanda();
  }
  loadTable() {
    this.tablesService.list({ status: "ACTIVE", page: 0, size: 200, sortBy: "number", sortDirection: "ASC" }).subscribe({
      next: (response) => {
        const table = response.content.find((item) => item.id === this.tableId);
        if (table) {
          this.table.set(table);
          return;
        }
        this.tablesService.getCounter().subscribe({
          next: (counter) => this.table.set(counter.id === this.tableId ? counter : null),
          error: () => this.table.set(null)
        });
      },
      error: () => this.table.set(null)
    });
  }
  loadComanda() {
    this.isLoading.set(true);
    this.loadError.set(null);
    const passToken = this.passToken();
    const request$ = passToken ? this.staffOrderService.enterWithPass(this.tableId, passToken) : this.staffOrderService.openOrEnter(this.tableId);
    request$.subscribe({
      next: (comanda) => {
        this.isLoading.set(false);
        this.orderComanda.set(comanda);
        if (!passToken && comanda.consumptionPassRequired) {
          this.loadTablePasses();
        }
      },
      error: (error) => {
        this.isLoading.set(false);
        this.loadError.set(this.resolveErrorMessage(error));
      }
    });
  }
  loadTablePasses() {
    this.isLoadingPasses.set(true);
    this.fetchInUsePasses().subscribe({
      next: (passes) => {
        this.isLoadingPasses.set(false);
        const onTable = passes.filter((pass) => pass.tableId === this.tableId);
        this.tablePasses.set(onTable);
        if (onTable.length === 1) {
          this.selectPass(onTable[0]);
        }
      },
      error: () => {
        this.isLoadingPasses.set(false);
        this.tablePasses.set([]);
        this.loadError.set("N\xE3o foi poss\xEDvel carregar os cart\xF5es de consumo desta mesa.");
      }
    });
  }
  // GET /consumption-passes devolve no máximo 100 por página — junta as páginas de IN_USE.
  fetchInUsePasses() {
    const pageOf = (page) => this.consumptionPassesService.list({ status: "IN_USE", page, size: 100 });
    return pageOf(0).pipe(expand((response) => response.last || response.page >= 9 ? EMPTY : pageOf(response.page + 1)), reduce((all, response) => all.concat(response.content), []));
  }
  // Ler o cartão (câmera ou digitado/leitor USB) em vez de procurar na lista.
  isScanningPass = signal(false);
  passInput = signal("");
  isResolvingPass = signal(false);
  passReadError = signal(null);
  startPassScan() {
    this.passReadError.set(null);
    this.isScanningPass.set(true);
  }
  onPassScanned(value) {
    this.isScanningPass.set(false);
    this.readPass(value);
  }
  submitPassInput() {
    if (this.passInput().trim()) {
      this.readPass(this.passInput());
    }
  }
  // Cartão desta mesa (ou livre — fica vinculado a ela, como no lançamento): abre aqui. Cartão em
  // uso em outra mesa: abre a comanda dele lá.
  readPass(value) {
    if (this.isResolvingPass()) {
      return;
    }
    this.isResolvingPass.set(true);
    this.passReadError.set(null);
    const request$ = QrTargetResolverService.isPassCode(value) || /^\s*\d+\s*$/.test(value) ? this.qrResolver.resolvePass(value, []) : this.qrResolver.resolveScan(value, []);
    request$.subscribe({
      next: (target) => {
        this.isResolvingPass.set(false);
        if (target.kind !== "pass") {
          this.passReadError.set("Esse QR Code n\xE3o \xE9 de um cart\xE3o de consumo.");
          return;
        }
        this.passInput.set("");
        const pass = target.pass;
        if (pass.status === "IN_USE" && pass.tableId && pass.tableId !== this.tableId) {
          this.router.navigate(["/painel/comandas/lancar-pedido/comanda", pass.tableId], {
            queryParams: { cartao: pass.token }
          });
          return;
        }
        this.selectPass(pass);
      },
      error: (error) => {
        this.isResolvingPass.set(false);
        this.passReadError.set(error instanceof HttpErrorResponse ? "N\xE3o foi poss\xEDvel consultar o cart\xE3o. Tente novamente." : error instanceof Error ? error.message : "N\xE3o foi poss\xEDvel ler o cart\xE3o.");
      }
    });
  }
  showPassPicker = computed(() => !this.passToken() && this.tablePasses() !== null);
  selectPass(pass) {
    this.passToken.set(pass.token);
    this.router.navigate([], { relativeTo: this.route, queryParams: { cartao: pass.token }, replaceUrl: true });
    this.loadComanda();
  }
  // Volta à lista dos cartões em uso na mesa (só oferecido quando há mais de um).
  backToTablePasses() {
    this.passToken.set(null);
    this.orderComanda.set(null);
    this.router.navigate([], { relativeTo: this.route, queryParams: { cartao: null }, replaceUrl: true });
  }
  goToMenu() {
    this.router.navigate(["/painel/comandas/lancar-pedido"], {
      queryParams: { mesa: this.tableId, cartao: this.passToken() || null }
    });
  }
  formatCurrency(value) {
    return value != null ? this.currencyFormatter.format(value) : "\u2014";
  }
  staffItemStatusLabel(status) {
    switch (status) {
      case "REQUESTED":
        return "Solicitado";
      case "PREPARING":
        return "Em preparo";
      case "ON_THE_WAY":
        return "A caminho";
      case "DELIVERED":
        return "Entregue";
      default:
        return "Cancelado";
    }
  }
  // --- Cancelar pedido / remover item (com justificativa obrigatória) -----------------------------
  askCancelOrder(orderId) {
    this.pendingRemoveItemId.set(null);
    this.editingNotesOrderId.set(null);
    this.pendingCancelOrderId.set(orderId);
    this.reasonInput.set("");
    this.orderActionError.set(null);
  }
  askRemoveItem(itemId) {
    this.pendingCancelOrderId.set(null);
    this.editingNotesOrderId.set(null);
    this.pendingRemoveItemId.set(itemId);
    this.reasonInput.set("");
    this.orderActionError.set(null);
  }
  dismissOrderAction() {
    if (this.cancellingOrderId() || this.removingItemId()) {
      return;
    }
    this.pendingCancelOrderId.set(null);
    this.pendingRemoveItemId.set(null);
    this.reasonInput.set("");
  }
  confirmCancelOrder() {
    const orderId = this.pendingCancelOrderId();
    const reason = this.reasonInput().trim();
    if (!orderId || !reason || this.cancellingOrderId()) {
      return;
    }
    this.cancellingOrderId.set(orderId);
    this.orderActionError.set(null);
    this.staffOrderService.cancelOrder(this.tableId, orderId, reason).subscribe({
      next: (comanda) => {
        this.cancellingOrderId.set(null);
        this.pendingCancelOrderId.set(null);
        this.reasonInput.set("");
        this.orderComanda.set(comanda);
      },
      error: (error) => {
        this.cancellingOrderId.set(null);
        this.orderActionError.set(this.resolveErrorMessage(error));
        autoDismiss(this.orderActionError, null);
      }
    });
  }
  confirmRemoveItem() {
    const itemId = this.pendingRemoveItemId();
    const reason = this.reasonInput().trim();
    if (!itemId || !reason || this.removingItemId()) {
      return;
    }
    this.removingItemId.set(itemId);
    this.orderActionError.set(null);
    this.staffOrderService.removeItem(this.tableId, itemId, reason).subscribe({
      next: (comanda) => {
        this.removingItemId.set(null);
        this.pendingRemoveItemId.set(null);
        this.reasonInput.set("");
        this.orderComanda.set(comanda);
      },
      error: (error) => {
        this.removingItemId.set(null);
        this.orderActionError.set(this.resolveErrorMessage(error));
        autoDismiss(this.orderActionError, null);
      }
    });
  }
  // --- Anotações do pedido ---------------------------------------------------------------------
  startEditOrderNotes(group) {
    this.pendingCancelOrderId.set(null);
    this.pendingRemoveItemId.set(null);
    this.editingNotesOrderId.set(group.orderId);
    this.notesInput.set(group.notes ?? "");
    this.orderActionError.set(null);
  }
  cancelEditOrderNotes() {
    if (this.isSavingNotes()) {
      return;
    }
    this.editingNotesOrderId.set(null);
    this.notesInput.set("");
  }
  saveOrderNotes(orderId) {
    if (this.isSavingNotes()) {
      return;
    }
    this.isSavingNotes.set(true);
    this.orderActionError.set(null);
    this.staffOrderService.updateOrderNotes(this.tableId, orderId, this.notesInput().trim() || null).subscribe({
      next: (comanda) => {
        this.isSavingNotes.set(false);
        this.editingNotesOrderId.set(null);
        this.notesInput.set("");
        this.orderComanda.set(comanda);
      },
      error: (error) => {
        this.isSavingNotes.set(false);
        this.orderActionError.set(this.resolveErrorMessage(error));
        autoDismiss(this.orderActionError, null);
      }
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
      return "Mesa ou comanda n\xE3o encontrada.";
    }
    if (error.status === 409) {
      return "Esta comanda j\xE1 est\xE1 encerrada.";
    }
    if (error.status === 403) {
      return "Voc\xEA n\xE3o tem permiss\xE3o para realizar esta a\xE7\xE3o.";
    }
    return "N\xE3o foi poss\xEDvel carregar a comanda. Tente novamente em instantes.";
  }
  static \u0275fac = function ComandaMesaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComandaMesaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComandaMesaComponent, selectors: [["app-comanda-mesa"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 5, consts: [[1, "page-header", "page-header--row"], [1, "page-title"], [1, "page-subtitle"], [1, "page-header__actions"], ["type", "button", 1, "btn", "btn--ghost"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["aria-hidden", "true", 1, "material-icons"], [1, "field__hint"], ["role", "alert", 1, "form-alert", "form-alert--error"], [1, "pass-reader"], ["hint", "Aponte a c\xE2mera para o QR Code do cart\xE3o.", "fallbackHint", "Digite o n\xFAmero ou o c\xF3digo do cart\xE3o."], [1, "pass-reader__form"], [1, "comanda-empty"], [1, "pass-picker"], ["hint", "Aponte a c\xE2mera para o QR Code do cart\xE3o.", "fallbackHint", "Digite o n\xFAmero ou o c\xF3digo do cart\xE3o.", 3, "scanned", "closed"], [1, "pass-reader__form", 3, "submit"], ["type", "button", 1, "btn", "btn--primary", 3, "click", "disabled"], ["type", "text", "placeholder", "ou digite o n\xFAmero / c\xF3digo CMU-\u2026", "aria-label", "N\xFAmero ou c\xF3digo do cart\xE3o", "autocomplete", "off", "autocapitalize", "characters", "spellcheck", "false", "enterkeyhint", "search", "name", "passInput", 1, "field__input", "pass-reader__input", 3, "input", "value", "disabled"], ["type", "submit", 1, "btn", "btn--ghost", 3, "disabled"], ["type", "button", 1, "btn", "btn--primary", 3, "click"], ["type", "button", 1, "pass-picker__item"], ["type", "button", 1, "pass-picker__item", 3, "click"], ["aria-hidden", "true", 1, "material-icons", "pass-picker__icon"], [1, "pass-picker__text"], [1, "staff-order-groups"], [1, "staff-order-group", 3, "staff-order-group--cancelled"], [1, "staff-order-group"], [1, "staff-order-group__header"], [1, "staff-order-group__customer"], [1, "staff-order-group__total"], [1, "badge", "badge--danger"], ["type", "button", 1, "btn", "btn--sm", "btn--danger"], [1, "staff-order-reason"], [1, "staff-order-group__items"], [1, "staff-order-item", 3, "staff-order-item--cancelled"], [1, "staff-order-notes-edit"], ["type", "button", 1, "staff-order-group__notes-toggle"], ["type", "button", 1, "btn", "btn--sm", "btn--danger", 3, "click"], [1, "field__label", 3, "for"], ["rows", "2", "maxlength", "500", "placeholder", "Ex: cliente desistiu do pedido", 1, "field__input", 3, "input", "id", "value"], [1, "step-actions", "step-actions--sm"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn--danger", "btn--sm", 3, "click", "disabled"], [1, "staff-order-item"], [1, "staff-order-item__row"], [1, "staff-order-item__qty"], [1, "staff-order-item__name"], [1, "badge", "badge--muted", "staff-order-item__status"], [1, "staff-order-item__price"], ["type", "button", "title", "Remover item", 1, "icon-btn", "icon-btn--danger"], [1, "staff-order-item__notes"], [1, "staff-order-item__notes", "staff-order-item__notes--reason"], ["type", "button", "title", "Remover item", 1, "icon-btn", "icon-btn--danger", 3, "click"], ["rows", "2", "maxlength", "500", "placeholder", "Ex: item pedido errado", 1, "field__input", 3, "input", "id", "value"], ["rows", "2", "maxlength", "1000", "placeholder", "Ex: cliente vai buscar no balc\xE3o", 1, "field__input", 3, "input", "id", "value"], ["type", "button", 1, "btn", "btn--primary", "btn--sm", 3, "click", "disabled"], ["type", "button", 1, "staff-order-group__notes-toggle", 3, "click"]], template: function ComandaMesaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, " Comanda ");
      \u0275\u0275template(4, ComandaMesaComponent_Conditional_4_Template, 1, 1)(5, ComandaMesaComponent_Conditional_5_Template, 1, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 2);
      \u0275\u0275template(7, ComandaMesaComponent_Conditional_7_Template, 1, 0)(8, ComandaMesaComponent_Conditional_8_Template, 1, 1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 3);
      \u0275\u0275template(10, ComandaMesaComponent_Conditional_10_Template, 4, 0, "button", 4);
      \u0275\u0275elementStart(11, "button", 5);
      \u0275\u0275listener("click", function ComandaMesaComponent_Template_button_click_11_listener() {
        return ctx.goToMenu();
      });
      \u0275\u0275elementStart(12, "span", 6);
      \u0275\u0275text(13, "restaurant_menu");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " Lan\xE7ar mais itens ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(15, ComandaMesaComponent_Conditional_15_Template, 2, 1, "p", 7)(16, ComandaMesaComponent_Conditional_16_Template, 4, 1, "div", 8)(17, ComandaMesaComponent_Conditional_17_Template, 6, 3)(18, ComandaMesaComponent_Conditional_18_Template, 3, 2);
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      let tmp_3_0;
      \u0275\u0275advance(4);
      \u0275\u0275conditional((tmp_0_0 = ctx.table()) ? 4 : -1, tmp_0_0);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_1_0 = (tmp_1_0 = ctx.orderComanda()) == null ? null : tmp_1_0.consumptionPassNumber) ? 5 : -1, tmp_1_0);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showPassPicker() ? 7 : 8);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.passToken() && ((tmp_3_0 = (tmp_3_0 = ctx.tablePasses()) == null ? null : tmp_3_0.length) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : 0) > 1 ? 10 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.isLoading() || ctx.isLoadingPasses() ? 15 : ctx.loadError() ? 16 : ctx.showPassPicker() ? 17 : 18);
    }
  }, dependencies: [QrScannerComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-header--row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.comanda-empty[_ngcontent-%COMP%] {\n  padding: 24px 0;\n  text-align: center;\n  color: var(--color-text-muted);\n}\n.icon-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius-sm);\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text);\n}\n.icon-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(248, 113, 113, 0.14);\n  color: #f87171;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #f87171;\n  color: #2a0a0a;\n}\n.btn--danger[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n}\n.btn--danger[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.step-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n.step-actions--sm[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: var(--radius-full);\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.badge--muted[_ngcontent-%COMP%] {\n  background: rgba(203, 213, 225, 0.12);\n  color: var(--color-text-muted);\n}\n.badge--danger[_ngcontent-%COMP%] {\n  background: rgba(248, 113, 113, 0.14);\n  color: #f87171;\n}\n.staff-order-groups[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.staff-order-group[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  background: var(--color-bg-card);\n}\n.staff-order-group--cancelled[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.staff-order-group__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.staff-order-group__header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--color-accent-hover);\n}\n.staff-order-group__customer[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  font-weight: 600;\n  font-size: 0.9375rem;\n  color: var(--color-text);\n}\n.staff-order-group__total[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-text-muted);\n}\n.staff-order-group__items[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 12px 0 0;\n  padding: 12px 0 0;\n  border-top: 1px solid var(--color-border);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.staff-order-item--cancelled[_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n.staff-order-item__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.875rem;\n}\n.staff-order-item__qty[_ngcontent-%COMP%] {\n  color: var(--color-accent, #818cf8);\n  font-weight: 700;\n}\n.staff-order-item__name[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 6px;\n  color: var(--color-text);\n}\n.staff-order-item__status[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  font-size: 0.6875rem;\n}\n.staff-order-item__price[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: var(--color-text-muted);\n}\n.staff-order-item__notes[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.staff-order-item__notes--reason[_ngcontent-%COMP%] {\n  color: #f87171;\n}\n.staff-order-reason[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 10px 12px;\n  border-radius: var(--radius-sm);\n  background: var(--color-bg-elevated, rgba(255, 255, 255, 0.03));\n}\n.staff-order-reason[_ngcontent-%COMP%]   .field__label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n}\n.staff-order-reason[_ngcontent-%COMP%]   textarea.field__input[_ngcontent-%COMP%] {\n  width: 100%;\n  resize: vertical;\n}\n.staff-order-notes-edit[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  padding-top: 12px;\n  border-top: 1px dashed var(--color-border);\n}\n.staff-order-notes-edit[_ngcontent-%COMP%]   .field__label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n}\n.staff-order-notes-edit[_ngcontent-%COMP%]   textarea.field__input[_ngcontent-%COMP%] {\n  width: 100%;\n  resize: vertical;\n}\n.staff-order-group__notes-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 100%;\n  margin-top: 12px;\n  padding-top: 12px;\n  border: none;\n  border-top: 1px dashed var(--color-border);\n  background: none;\n  color: var(--color-text-muted);\n  font-size: 0.8125rem;\n  text-align: left;\n  cursor: pointer;\n}\n.staff-order-group__notes-toggle[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.staff-order-group__notes-toggle[_ngcontent-%COMP%]:hover {\n  color: var(--color-text);\n}\n.page-header__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.pass-picker[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 10px;\n}\n.pass-picker__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-height: 64px;\n  padding: 12px 16px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  background: var(--color-bg-card);\n  color: var(--color-text);\n  font: inherit;\n  text-align: left;\n  cursor: pointer;\n  transition: border-color var(--transition-fast), background var(--transition-fast);\n}\n.pass-picker__item[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-accent);\n  background: var(--color-accent-bg);\n}\n.pass-picker__item[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--color-accent);\n  outline-offset: 2px;\n}\n.pass-picker__icon[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n.pass-picker__text[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.pass-picker__text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.pass-reader[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.pass-reader__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n}\n.pass-reader__input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 180px;\n}\n/*# sourceMappingURL=comanda-mesa.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComandaMesaComponent, { className: "ComandaMesaComponent", filePath: "src\\app\\features\\admin\\pages\\comanda-mesa\\comanda-mesa.component.ts", lineNumber: 42 });
})();
export {
  ComandaMesaComponent
};
//# sourceMappingURL=chunk-LFEASLTI.js.map
