import {
  StaffOrderService
} from "./chunk-2B7RMIFU.js";
import {
  TablesService
} from "./chunk-DYZKGHJI.js";
import {
  autoDismiss
} from "./chunk-JD6JJHYZ.js";
import "./chunk-IKIQHSDP.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-4G2LF4K6.js";
import {
  computed,
  inject,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-SZBF2MTG.js";

// src/app/features/admin/pages/comanda-mesa/comanda-mesa.component.ts
var _forTrack0 = ($index, $item) => $item.orderId;
var _forTrack1 = ($index, $item) => $item.id;
function ComandaMesaComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r1 = ctx;
    \u0275\u0275textInterpolate2(" \u2014 Mesa ", t_r1.number, "", t_r1.name ? " \u2014 " + t_r1.name : "", " ");
  }
}
function ComandaMesaComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1, "Carregando comanda\u2026");
    \u0275\u0275elementEnd();
  }
}
function ComandaMesaComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 4);
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
function ComandaMesaComponent_Conditional_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 4);
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
function ComandaMesaComponent_Conditional_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "Nenhum pedido lan\xE7ado nesta mesa ainda.");
    \u0275\u0275elementEnd();
  }
}
function ComandaMesaComponent_Conditional_13_Conditional_2_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "Pedido cancelado");
    \u0275\u0275elementEnd();
  }
}
function ComandaMesaComponent_Conditional_13_Conditional_2_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function ComandaMesaComponent_Conditional_13_Conditional_2_For_2_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const group_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.askCancelOrder(group_r4.orderId));
    });
    \u0275\u0275text(1, " Cancelar pedido ");
    \u0275\u0275elementEnd();
  }
}
function ComandaMesaComponent_Conditional_13_Conditional_2_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "label", 22);
    \u0275\u0275text(2, "Motivo do cancelamento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 23);
    \u0275\u0275listener("input", function ComandaMesaComponent_Conditional_13_Conditional_2_For_2_Conditional_10_Template_textarea_input_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.reasonInput.set($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24)(5, "button", 25);
    \u0275\u0275listener("click", function ComandaMesaComponent_Conditional_13_Conditional_2_For_2_Conditional_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.dismissOrderAction());
    });
    \u0275\u0275text(6, " Voltar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 26);
    \u0275\u0275listener("click", function ComandaMesaComponent_Conditional_13_Conditional_2_For_2_Conditional_10_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.confirmCancelOrder());
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const group_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("for", "cancel-reason-" + group_r4.orderId);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "cancel-reason-" + group_r4.orderId)("value", ctx_r1.reasonInput());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.cancellingOrderId() === group_r4.orderId);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.reasonInput().trim() || ctx_r1.cancellingOrderId() === group_r4.orderId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.cancellingOrderId() === group_r4.orderId ? "Cancelando\u2026" : "Confirmar cancelamento", " ");
  }
}
function ComandaMesaComponent_Conditional_13_Conditional_2_For_2_For_13_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function ComandaMesaComponent_Conditional_13_Conditional_2_For_2_For_13_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const item_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.askRemoveItem(item_r7.id));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "delete_outline");
    \u0275\u0275elementEnd()();
  }
}
function ComandaMesaComponent_Conditional_13_Conditional_2_For_2_For_13_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Obs: ", item_r7.notes, "");
  }
}
function ComandaMesaComponent_Conditional_13_Conditional_2_For_2_For_13_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Motivo: ", item_r7.removalReason, "");
  }
}
function ComandaMesaComponent_Conditional_13_Conditional_2_For_2_For_13_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "label", 22);
    \u0275\u0275text(2, "Motivo da remo\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 37);
    \u0275\u0275listener("input", function ComandaMesaComponent_Conditional_13_Conditional_2_For_2_For_13_Conditional_13_Template_textarea_input_3_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.reasonInput.set($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24)(5, "button", 25);
    \u0275\u0275listener("click", function ComandaMesaComponent_Conditional_13_Conditional_2_For_2_For_13_Conditional_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.dismissOrderAction());
    });
    \u0275\u0275text(6, " Voltar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 26);
    \u0275\u0275listener("click", function ComandaMesaComponent_Conditional_13_Conditional_2_For_2_For_13_Conditional_13_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.confirmRemoveItem());
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("for", "remove-reason-" + item_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "remove-reason-" + item_r7.id)("value", ctx_r1.reasonInput());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.removingItemId() === item_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.reasonInput().trim() || ctx_r1.removingItemId() === item_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.removingItemId() === item_r7.id ? "Removendo\u2026" : "Confirmar remo\xE7\xE3o", " ");
  }
}
function ComandaMesaComponent_Conditional_13_Conditional_2_For_2_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 27)(1, "div", 28)(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 32);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ComandaMesaComponent_Conditional_13_Conditional_2_For_2_For_13_Conditional_10_Template, 3, 0, "button", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ComandaMesaComponent_Conditional_13_Conditional_2_For_2_For_13_Conditional_11_Template, 2, 1, "p", 34)(12, ComandaMesaComponent_Conditional_13_Conditional_2_For_2_For_13_Conditional_12_Template, 2, 1, "p", 35)(13, ComandaMesaComponent_Conditional_13_Conditional_2_For_2_For_13_Conditional_13_Template, 9, 6, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("staff-order-item--cancelled", item_r7.status === "CANCELLED");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r7.quantity, "x");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r7.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.staffItemStatusLabel(item_r7.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(item_r7.totalPrice));
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r7.status === "REQUESTED" && ctx_r1.pendingRemoveItemId() !== item_r7.id ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r7.notes ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r7.status === "CANCELLED" && item_r7.removalReason ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.pendingRemoveItemId() === item_r7.id ? 13 : -1);
  }
}
function ComandaMesaComponent_Conditional_13_Conditional_2_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "label", 22);
    \u0275\u0275text(2, "Observa\xE7\xE3o do pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 38);
    \u0275\u0275listener("input", function ComandaMesaComponent_Conditional_13_Conditional_2_For_2_Conditional_14_Template_textarea_input_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.notesInput.set($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24)(5, "button", 25);
    \u0275\u0275listener("click", function ComandaMesaComponent_Conditional_13_Conditional_2_For_2_Conditional_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.cancelEditOrderNotes());
    });
    \u0275\u0275text(6, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 39);
    \u0275\u0275listener("click", function ComandaMesaComponent_Conditional_13_Conditional_2_For_2_Conditional_14_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const group_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveOrderNotes(group_r4.orderId));
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const group_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("for", "order-notes-" + group_r4.orderId);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "order-notes-" + group_r4.orderId)("value", ctx_r1.notesInput());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSavingNotes());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSavingNotes());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSavingNotes() ? "Salvando\u2026" : "Salvar observa\xE7\xE3o", " ");
  }
}
function ComandaMesaComponent_Conditional_13_Conditional_2_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function ComandaMesaComponent_Conditional_13_Conditional_2_For_2_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const group_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.startEditOrderNotes(group_r4));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "edit_note");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", group_r4.notes ? group_r4.notes : "Adicionar anota\xE7\xE3o ao pedido", " ");
  }
}
function ComandaMesaComponent_Conditional_13_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "span", 4);
    \u0275\u0275text(3, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ComandaMesaComponent_Conditional_13_Conditional_2_For_2_Conditional_8_Template, 2, 0, "span", 14)(9, ComandaMesaComponent_Conditional_13_Conditional_2_For_2_Conditional_9_Template, 2, 0, "button", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ComandaMesaComponent_Conditional_13_Conditional_2_For_2_Conditional_10_Template, 9, 6, "div", 16);
    \u0275\u0275elementStart(11, "ul", 17);
    \u0275\u0275repeaterCreate(12, ComandaMesaComponent_Conditional_13_Conditional_2_For_2_For_13_Template, 14, 10, "li", 18, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ComandaMesaComponent_Conditional_13_Conditional_2_For_2_Conditional_14_Template, 9, 6, "div", 19)(15, ComandaMesaComponent_Conditional_13_Conditional_2_For_2_Conditional_15_Template, 4, 1, "button", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("staff-order-group--cancelled", group_r4.allCancelled);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(group_r4.customerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(group_r4.activeTotal));
    \u0275\u0275advance();
    \u0275\u0275conditional(group_r4.allCancelled ? 8 : group_r4.canCancel && ctx_r1.pendingCancelOrderId() !== group_r4.orderId ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.pendingCancelOrderId() === group_r4.orderId ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r4.items);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.editingNotesOrderId() === group_r4.orderId ? 14 : 15);
  }
}
function ComandaMesaComponent_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, ComandaMesaComponent_Conditional_13_Conditional_2_For_2_Template, 16, 7, "div", 9, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.orderGroups());
  }
}
function ComandaMesaComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ComandaMesaComponent_Conditional_13_Conditional_0_Template, 4, 1, "div", 6)(1, ComandaMesaComponent_Conditional_13_Conditional_1_Template, 2, 0, "p", 7)(2, ComandaMesaComponent_Conditional_13_Conditional_2_Template, 3, 0, "div", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.orderActionError() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.orderGroups().length === 0 ? 1 : 2);
  }
}
var ComandaMesaComponent = class _ComandaMesaComponent {
  tablesService = inject(TablesService);
  staffOrderService = inject(StaffOrderService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  currencyFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
  tableId = this.route.snapshot.paramMap.get("tableId") ?? "";
  table = signal(null);
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
      next: (response) => this.table.set(response.content.find((item) => item.id === this.tableId) ?? null),
      error: () => this.table.set(null)
    });
  }
  loadComanda() {
    this.isLoading.set(true);
    this.loadError.set(null);
    this.staffOrderService.openOrEnter(this.tableId).subscribe({
      next: (comanda) => {
        this.isLoading.set(false);
        this.orderComanda.set(comanda);
      },
      error: (error) => {
        this.isLoading.set(false);
        this.loadError.set(this.resolveErrorMessage(error));
      }
    });
  }
  goToMenu() {
    this.router.navigate(["/painel/comandas/lancar-pedido"], { queryParams: { mesa: this.tableId } });
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComandaMesaComponent, selectors: [["app-comanda-mesa"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 2, consts: [[1, "page-header", "page-header--row"], [1, "page-title"], [1, "page-subtitle"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["aria-hidden", "true", 1, "material-icons"], [1, "field__hint"], ["role", "alert", 1, "form-alert", "form-alert--error"], [1, "comanda-empty"], [1, "staff-order-groups"], [1, "staff-order-group", 3, "staff-order-group--cancelled"], [1, "staff-order-group"], [1, "staff-order-group__header"], [1, "staff-order-group__customer"], [1, "staff-order-group__total"], [1, "badge", "badge--danger"], ["type", "button", 1, "btn", "btn--sm", "btn--danger"], [1, "staff-order-reason"], [1, "staff-order-group__items"], [1, "staff-order-item", 3, "staff-order-item--cancelled"], [1, "staff-order-notes-edit"], ["type", "button", 1, "staff-order-group__notes-toggle"], ["type", "button", 1, "btn", "btn--sm", "btn--danger", 3, "click"], [1, "field__label", 3, "for"], ["rows", "2", "maxlength", "500", "placeholder", "Ex: cliente desistiu do pedido", 1, "field__input", 3, "input", "id", "value"], [1, "step-actions", "step-actions--sm"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn--danger", "btn--sm", 3, "click", "disabled"], [1, "staff-order-item"], [1, "staff-order-item__row"], [1, "staff-order-item__qty"], [1, "staff-order-item__name"], [1, "badge", "badge--muted", "staff-order-item__status"], [1, "staff-order-item__price"], ["type", "button", "title", "Remover item", 1, "icon-btn", "icon-btn--danger"], [1, "staff-order-item__notes"], [1, "staff-order-item__notes", "staff-order-item__notes--reason"], ["type", "button", "title", "Remover item", 1, "icon-btn", "icon-btn--danger", 3, "click"], ["rows", "2", "maxlength", "500", "placeholder", "Ex: item pedido errado", 1, "field__input", 3, "input", "id", "value"], ["rows", "2", "maxlength", "1000", "placeholder", "Ex: cliente vai buscar no balc\xE3o", 1, "field__input", 3, "input", "id", "value"], ["type", "button", 1, "btn", "btn--primary", "btn--sm", 3, "click", "disabled"], ["type", "button", 1, "staff-order-group__notes-toggle", 3, "click"]], template: function ComandaMesaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, " Comanda ");
      \u0275\u0275template(4, ComandaMesaComponent_Conditional_4_Template, 1, 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 2);
      \u0275\u0275text(6, "Todos os pedidos j\xE1 lan\xE7ados nesta mesa.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 3);
      \u0275\u0275listener("click", function ComandaMesaComponent_Template_button_click_7_listener() {
        return ctx.goToMenu();
      });
      \u0275\u0275elementStart(8, "span", 4);
      \u0275\u0275text(9, "restaurant_menu");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Lan\xE7ar mais itens ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(11, ComandaMesaComponent_Conditional_11_Template, 2, 0, "p", 5)(12, ComandaMesaComponent_Conditional_12_Template, 4, 1, "div", 6)(13, ComandaMesaComponent_Conditional_13_Template, 3, 2);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(4);
      \u0275\u0275conditional((tmp_0_0 = ctx.table()) ? 4 : -1, tmp_0_0);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.isLoading() ? 11 : ctx.loadError() ? 12 : 13);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-header--row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.comanda-empty[_ngcontent-%COMP%] {\n  padding: 24px 0;\n  text-align: center;\n  color: var(--color-text-muted);\n}\n.icon-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius-sm);\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text);\n}\n.icon-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(248, 113, 113, 0.14);\n  color: #f87171;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #f87171;\n  color: #2a0a0a;\n}\n.btn--danger[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n}\n.btn--danger[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.step-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n.step-actions--sm[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: var(--radius-full);\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.badge--muted[_ngcontent-%COMP%] {\n  background: rgba(203, 213, 225, 0.12);\n  color: var(--color-text-muted);\n}\n.badge--danger[_ngcontent-%COMP%] {\n  background: rgba(248, 113, 113, 0.14);\n  color: #f87171;\n}\n.staff-order-groups[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.staff-order-group[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  background: var(--color-bg-card);\n}\n.staff-order-group--cancelled[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.staff-order-group__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.staff-order-group__header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--color-accent-hover);\n}\n.staff-order-group__customer[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  font-weight: 600;\n  font-size: 0.9375rem;\n  color: var(--color-text);\n}\n.staff-order-group__total[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-text-muted);\n}\n.staff-order-group__items[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 12px 0 0;\n  padding: 12px 0 0;\n  border-top: 1px solid var(--color-border);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.staff-order-item--cancelled[_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n.staff-order-item__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.875rem;\n}\n.staff-order-item__qty[_ngcontent-%COMP%] {\n  color: var(--color-accent, #818cf8);\n  font-weight: 700;\n}\n.staff-order-item__name[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 6px;\n  color: var(--color-text);\n}\n.staff-order-item__status[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  font-size: 0.6875rem;\n}\n.staff-order-item__price[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: var(--color-text-muted);\n}\n.staff-order-item__notes[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.staff-order-item__notes--reason[_ngcontent-%COMP%] {\n  color: #f87171;\n}\n.staff-order-reason[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 10px 12px;\n  border-radius: var(--radius-sm);\n  background: var(--color-bg-elevated, rgba(255, 255, 255, 0.03));\n}\n.staff-order-reason[_ngcontent-%COMP%]   .field__label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n}\n.staff-order-reason[_ngcontent-%COMP%]   textarea.field__input[_ngcontent-%COMP%] {\n  width: 100%;\n  resize: vertical;\n}\n.staff-order-notes-edit[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  padding-top: 12px;\n  border-top: 1px dashed var(--color-border);\n}\n.staff-order-notes-edit[_ngcontent-%COMP%]   .field__label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n}\n.staff-order-notes-edit[_ngcontent-%COMP%]   textarea.field__input[_ngcontent-%COMP%] {\n  width: 100%;\n  resize: vertical;\n}\n.staff-order-group__notes-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 100%;\n  margin-top: 12px;\n  padding-top: 12px;\n  border: none;\n  border-top: 1px dashed var(--color-border);\n  background: none;\n  color: var(--color-text-muted);\n  font-size: 0.8125rem;\n  text-align: left;\n  cursor: pointer;\n}\n.staff-order-group__notes-toggle[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.staff-order-group__notes-toggle[_ngcontent-%COMP%]:hover {\n  color: var(--color-text);\n}\n/*# sourceMappingURL=comanda-mesa.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComandaMesaComponent, { className: "ComandaMesaComponent", filePath: "src\\app\\features\\admin\\pages\\comanda-mesa\\comanda-mesa.component.ts", lineNumber: 37 });
})();
export {
  ComandaMesaComponent
};
//# sourceMappingURL=chunk-OBQ246HO.js.map
