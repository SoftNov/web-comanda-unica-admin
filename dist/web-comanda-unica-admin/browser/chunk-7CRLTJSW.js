import {
  autoDismiss
} from "./chunk-JD6JJHYZ.js";
import {
  OrderQueueService
} from "./chunk-R5I7LBAX.js";
import {
  formatTableLabel
} from "./chunk-TKS563NX.js";
import {
  AuthService
} from "./chunk-R46O43MN.js";
import {
  brDateTimeFormat,
  parseApiDate
} from "./chunk-YI5DDYTJ.js";
import {
  EMPTY,
  computed,
  defer,
  inject,
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
  ɵɵtextInterpolate4
} from "./chunk-MRKXMG4P.js";

// src/app/features/admin/pages/pedidos/pedidos.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function PedidosComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function PedidosComponent_For_17_Template_button_click_0_listener() {
      const sector_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSectorFilter(sector_r2));
    });
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sector_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("sector-chip--active", ctx_r2.sectorFilter() === sector_r2);
    \u0275\u0275attribute("data-sector", sector_r2)("aria-pressed", ctx_r2.sectorFilter() === sector_r2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.sectorIcon(sector_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.sectorLabel(sector_r2), " ");
  }
}
function PedidosComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 9);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.actionError(), " ");
  }
}
function PedidosComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, "Carregando fila de pedidos\u2026");
    \u0275\u0275elementEnd();
  }
}
function PedidosComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 9);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.listError(), " ");
  }
}
function PedidosComponent_Conditional_25_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1, "Nenhum item aqui.");
    \u0275\u0275elementEnd();
  }
}
function PedidosComponent_Conditional_25_For_2_For_11_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28)(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.sectorIcon(item_r4.kitchenSector));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.sectorLabel(item_r4.kitchenSector), " ");
  }
}
function PedidosComponent_Conditional_25_For_2_For_11_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32)(1, "span", 9);
    \u0275\u0275text(2, "sticky_note_2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r4.notes, " ");
  }
}
function PedidosComponent_Conditional_25_For_2_For_11_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 35)(2, "span", 9);
    \u0275\u0275text(3, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("title", "Pego \xE0s " + ctx_r2.formatDateTime(item_r4.pickedUpAt));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r4.pickedUpByUserName, " ");
  }
}
function PedidosComponent_Conditional_25_For_2_For_11_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function PedidosComponent_Conditional_25_For_2_For_11_Conditional_15_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const item_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.requestCancel(item_r4));
    });
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r2.movingItemId() === item_r4.id);
  }
}
function PedidosComponent_Conditional_25_For_2_For_11_Conditional_15_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 40);
    \u0275\u0275text(1, " Movendo\u2026 ");
  }
}
function PedidosComponent_Conditional_25_For_2_For_11_Conditional_15_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.statusIcon(ctx_r2.nextStatus(item_r4.status)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.nextActionLabel(item_r4.status), " ");
  }
}
function PedidosComponent_Conditional_25_For_2_For_11_Conditional_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function PedidosComponent_Conditional_25_For_2_For_11_Conditional_15_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const item_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.advance(item_r4));
    });
    \u0275\u0275template(1, PedidosComponent_Conditional_25_For_2_For_11_Conditional_15_Conditional_2_Conditional_1_Template, 2, 0)(2, PedidosComponent_Conditional_25_For_2_For_11_Conditional_15_Conditional_2_Conditional_2_Template, 3, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r2.movingItemId() === item_r4.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.movingItemId() === item_r4.id ? 1 : 2);
  }
}
function PedidosComponent_Conditional_25_For_2_For_11_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275template(1, PedidosComponent_Conditional_25_For_2_For_11_Conditional_15_Conditional_1_Template, 3, 1, "button", 36)(2, PedidosComponent_Conditional_25_For_2_For_11_Conditional_15_Conditional_2_Template, 3, 2, "button", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canCancel(item_r4) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canAdvance(item_r4) ? 2 : -1);
  }
}
function PedidosComponent_Conditional_25_For_2_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "span", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, PedidosComponent_Conditional_25_For_2_For_11_Conditional_6_Template, 4, 2, "span", 28);
    \u0275\u0275elementStart(7, "p", 29);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 30)(10, "span", 31);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, PedidosComponent_Conditional_25_For_2_For_11_Conditional_13_Template, 4, 1, "p", 32)(14, PedidosComponent_Conditional_25_For_2_For_11_Conditional_14_Template, 5, 2, "div", 33)(15, PedidosComponent_Conditional_25_For_2_For_11_Conditional_15_Template, 3, 2, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("data-sector", item_r4.kitchenSector);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.tableLabel(item_r4.tableNumber, item_r4.tableName));
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r2.formatDateTime(item_r4.createdAt));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatTime(item_r4.createdAt));
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.kitchenSector ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.customerName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r4.quantity, "x");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.itemName, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.notes ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.pickedUpByUserName ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canAdvance(item_r4) || ctx_r2.canCancel(item_r4) ? 15 : -1);
  }
}
function PedidosComponent_Conditional_25_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "h2", 19)(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 22);
    \u0275\u0275template(9, PedidosComponent_Conditional_25_For_2_Conditional_9_Template, 2, 0, "p", 23);
    \u0275\u0275repeaterCreate(10, PedidosComponent_Conditional_25_For_2_For_11_Template, 16, 11, "div", 24, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const column_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.statusIcon(column_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.statusLabel(column_r7), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.itemsFor(column_r7).length);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.itemsFor(column_r7).length === 0 ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.itemsFor(column_r7));
  }
}
function PedidosComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275repeaterCreate(1, PedidosComponent_Conditional_25_For_2_Template, 12, 4, "div", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.columns);
  }
}
function PedidosComponent_Conditional_26_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 9);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.cancelError(), " ");
  }
}
function PedidosComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275listener("click", function PedidosComponent_Conditional_26_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeCancelModal());
    });
    \u0275\u0275elementStart(1, "div", 42);
    \u0275\u0275listener("click", function PedidosComponent_Conditional_26_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 43)(3, "h2", 44);
    \u0275\u0275text(4, "Cancelar item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 45);
    \u0275\u0275listener("click", function PedidosComponent_Conditional_26_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeCancelModal());
    });
    \u0275\u0275elementStart(6, "span", 9);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "p", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, PedidosComponent_Conditional_26_Conditional_10_Template, 4, 1, "div", 12);
    \u0275\u0275elementStart(11, "div", 46)(12, "button", 47);
    \u0275\u0275listener("click", function PedidosComponent_Conditional_26_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmCancel());
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 48);
    \u0275\u0275listener("click", function PedidosComponent_Conditional_26_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeCancelModal());
    });
    \u0275\u0275text(15, "Voltar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r9 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate4(" Cancelar ", item_r9.quantity, "x ", item_r9.itemName, " do pedido de ", item_r9.customerName, " (", ctx_r2.tableLabel(item_r9.tableNumber), "). Esta a\xE7\xE3o n\xE3o pode ser desfeita. ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.cancelError() ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.isCancelling());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isCancelling() ? "Cancelando\u2026" : "Cancelar item", " ");
  }
}
var WS_RETRY_DELAY_MS = 5e3;
var WS_SILENT_RETRIES = 3;
var QUEUE_MANAGER_PROFILES = ["OWNER", "COMMERCIAL", "ADMIN", "MANAGER", "WAITER", "KITCHEN"];
var BOARD_COLUMNS = ["REQUESTED", "PREPARING", "ON_THE_WAY", "DELIVERED"];
var SECTOR_LABELS = {
  COZINHA: "Cozinha",
  BAR: "Bar",
  CONFEITARIA: "Confeitaria",
  CHAPA: "Chapa",
  COPA: "Copa",
  SOBREMESAS: "Sobremesas"
};
var SECTOR_ICONS = {
  COZINHA: "restaurant",
  BAR: "local_bar",
  CONFEITARIA: "cake",
  CHAPA: "outdoor_grill",
  COPA: "coffee",
  SOBREMESAS: "icecream"
};
var STATUS_LABELS = {
  REQUESTED: "Fila",
  PREPARING: "Em preparo",
  ON_THE_WAY: "Finalizados",
  DELIVERED: "Entregue",
  CANCELLED: "Cancelado"
};
var NEXT_STATUS = {
  REQUESTED: "PREPARING",
  PREPARING: "ON_THE_WAY",
  ON_THE_WAY: "DELIVERED"
};
var NEXT_ACTION_LABEL = {
  REQUESTED: "Pegar item",
  PREPARING: "Marcar como finalizado",
  ON_THE_WAY: "Marcar como entregue"
};
var STATUS_ICONS = {
  REQUESTED: "hourglass_top",
  PREPARING: "local_fire_department",
  ON_THE_WAY: "room_service",
  DELIVERED: "check_circle"
};
var CANCELLABLE_STATUSES = ["REQUESTED", "PREPARING", "ON_THE_WAY"];
var PedidosComponent = class _PedidosComponent {
  tableLabel = formatTableLabel;
  orderQueueService = inject(OrderQueueService);
  authService = inject(AuthService);
  dateTimeFormatter = brDateTimeFormat({ dateStyle: "short", timeStyle: "short" });
  timeFormatter = brDateTimeFormat({ timeStyle: "short" });
  selectedCompany = this.authService.selectedCompany;
  canManageQueue = computed(() => {
    const profileCode = this.selectedCompany()?.profileCode;
    return !!profileCode && QUEUE_MANAGER_PROFILES.includes(profileCode);
  });
  items = signal([]);
  isLoading = signal(true);
  listError = signal(null);
  sectorFilter = signal("");
  sectors = signal([]);
  columns = BOARD_COLUMNS;
  itemsByStatus = computed(() => {
    const grouped = /* @__PURE__ */ new Map();
    for (const item of this.items()) {
      const bucket = grouped.get(item.status) ?? [];
      bucket.push(item);
      grouped.set(item.status, bucket);
    }
    return grouped;
  });
  movingItemId = signal(null);
  actionError = signal(null);
  itemToCancel = signal(null);
  isCancelling = signal(false);
  cancelError = signal(null);
  queueSubscription;
  constructor() {
    this.loadSectors();
    this.connectRealtimeQueue();
  }
  ngOnDestroy() {
    this.queueSubscription?.unsubscribe();
  }
  // --- Apresentação -------------------------------------------------------------
  statusLabel(status) {
    return STATUS_LABELS[status];
  }
  sectorLabel(sector) {
    return SECTOR_LABELS[sector];
  }
  sectorIcon(sector) {
    return SECTOR_ICONS[sector];
  }
  nextActionLabel(status) {
    return NEXT_ACTION_LABEL[status];
  }
  statusIcon(status) {
    return STATUS_ICONS[status];
  }
  nextStatus(status) {
    return NEXT_STATUS[status];
  }
  canCancel(item) {
    return this.canManageQueue() && CANCELLABLE_STATUSES.includes(item.status);
  }
  canAdvance(item) {
    return this.canManageQueue() && !!NEXT_STATUS[item.status];
  }
  formatDateTime(value) {
    const parsed = parseApiDate(value);
    return parsed ? this.dateTimeFormatter.format(parsed) : "\u2014";
  }
  formatTime(value) {
    const parsed = parseApiDate(value);
    return parsed ? this.timeFormatter.format(parsed) : "\u2014";
  }
  // Colunas em fila (REQUESTED/PREPARING/ON_THE_WAY) mantêm a ordem FIFO que já vem do backend
  // (createdAt ascendente — ver OrderQueueItemRepository#findQueue), certo para "quem chegou
  // primeiro" numa fila operacional. A coluna Entregue é diferente: o que importa lá é o que
  // acabou de sair, não o que foi pedido primeiro — por isso ordena por updatedAt decrescente
  // (DELIVERED é status terminal, então updatedAt é o momento da entrega).
  itemsFor(status) {
    const bucket = this.itemsByStatus().get(status) ?? [];
    if (status !== "DELIVERED") {
      return bucket;
    }
    return [...bucket].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  }
  // --- Listagem -------------------------------------------------------------------
  loadSectors() {
    this.orderQueueService.listSectors().subscribe({
      next: (sectors) => this.sectors.set(sectors),
      error: () => this.sectors.set([])
    });
  }
  // A fila chega via WebSocket (ver connectRealtimeQueue) — ao conectar, o backend já envia o
  // estado atual (ver OrderQueueWebSocketHandler#afterConnectionEstablished), e depois a cada ~4s
  // (ver OrderQueueBroadcastScheduler), então não existe mais um fetch REST único aqui.
  refresh() {
    this.connectRealtimeQueue();
  }
  setSectorFilter(value) {
    if (value === this.sectorFilter()) {
      return;
    }
    this.sectorFilter.set(value);
    this.connectRealtimeQueue();
  }
  connectRealtimeQueue() {
    const companyId = this.selectedCompany()?.companyId;
    if (!companyId) {
      return;
    }
    this.queueSubscription?.unsubscribe();
    this.isLoading.set(true);
    this.listError.set(null);
    this.queueSubscription = defer(() => {
      const token = this.authService.getAccessToken();
      if (!token) {
        this.authService.logout();
        return EMPTY;
      }
      return this.orderQueueService.connectRealtime(companyId, token, this.sectorFilter() || void 0);
    }).pipe(retry({
      delay: (_, retryCount) => {
        if (retryCount >= WS_SILENT_RETRIES) {
          this.isLoading.set(false);
          this.listError.set("N\xE3o foi poss\xEDvel conectar \xE0 atualiza\xE7\xE3o em tempo real da fila de pedidos.");
        }
        return timer(WS_RETRY_DELAY_MS);
      },
      resetOnSuccess: true
    })).subscribe({
      next: (response) => {
        this.items.set(response);
        this.isLoading.set(false);
        this.listError.set(null);
      },
      error: () => {
        this.isLoading.set(false);
        this.listError.set("N\xE3o foi poss\xEDvel conectar \xE0 atualiza\xE7\xE3o em tempo real da fila de pedidos.");
      }
    });
  }
  // --- Movimentação de status -----------------------------------------------------
  advance(item) {
    const next = NEXT_STATUS[item.status];
    if (!next || this.movingItemId()) {
      return;
    }
    this.moveStatus(item, next);
  }
  requestCancel(item) {
    this.cancelError.set(null);
    this.itemToCancel.set(item);
  }
  closeCancelModal() {
    this.itemToCancel.set(null);
  }
  confirmCancel() {
    const item = this.itemToCancel();
    if (!item) {
      return;
    }
    this.isCancelling.set(true);
    this.cancelError.set(null);
    this.orderQueueService.updateStatus(item.id, { status: "CANCELLED" }).subscribe({
      next: (updated) => {
        this.isCancelling.set(false);
        this.itemToCancel.set(null);
        this.applyUpdatedItem(item, updated);
      },
      error: (error) => {
        this.isCancelling.set(false);
        this.cancelError.set(this.resolveErrorMessage(error));
        autoDismiss(this.cancelError, null);
      }
    });
  }
  moveStatus(item, status) {
    this.movingItemId.set(item.id);
    this.actionError.set(null);
    this.orderQueueService.updateStatus(item.id, { status }).subscribe({
      next: (updated) => {
        this.movingItemId.set(null);
        this.applyUpdatedItem(item, updated);
      },
      error: (error) => {
        this.movingItemId.set(null);
        this.actionError.set(this.resolveErrorMessage(error));
        autoDismiss(this.actionError, null);
      }
    });
  }
  // Todas as colunas do board (REQUESTED/PREPARING/ON_THE_WAY/DELIVERED) ficam sempre visíveis —
  // só CANCELLED não tem coluna, então um item cancelado some da lista; os demais são só movidos
  // para a coluna do novo status, sem precisar recarregar a fila inteira a cada ação.
  applyUpdatedItem(original, updated) {
    this.items.update((list) => {
      if (updated.status === "CANCELLED") {
        return list.filter((current) => current.id !== original.id);
      }
      return list.map((current) => current.id === original.id ? updated : current);
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
      return "Item de pedido n\xE3o encontrado.";
    }
    if (error.status === 403) {
      return "Voc\xEA n\xE3o tem permiss\xE3o para realizar esta a\xE7\xE3o.";
    }
    if (error.status === 422) {
      return "N\xE3o \xE9 poss\xEDvel mover o item para este status a partir do status atual.";
    }
    return "N\xE3o foi poss\xEDvel concluir a opera\xE7\xE3o. Tente novamente em instantes.";
  }
  static \u0275fac = function PedidosComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PedidosComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PedidosComponent, selectors: [["app-admin-pedidos"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 8, consts: [[1, "page-header", "page-header--row"], [1, "page-title"], [1, "page-subtitle"], [1, "card", "filters-card"], [1, "filters-row"], ["role", "group", "aria-labelledby", "sector-filter-label", 1, "sector-filter"], ["id", "sector-filter-label", 1, "field__label"], [1, "sector-filter__chips"], ["type", "button", 1, "sector-chip", "sector-chip--all", 3, "click"], ["aria-hidden", "true", 1, "material-icons"], ["type", "button", 1, "sector-chip", 3, "sector-chip--active"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click", "disabled"], ["role", "alert", 1, "form-alert", "form-alert--error"], [1, "field__hint"], [1, "board"], [1, "modal-backdrop"], ["type", "button", 1, "sector-chip", 3, "click"], [1, "board-column"], [1, "board-column__header"], [1, "board-column__title"], ["aria-hidden", "true", 1, "board-column__icon", "material-icons"], [1, "board-column__count"], [1, "board-column__list"], [1, "board-column__empty"], [1, "order-card", "card"], [1, "order-card__header"], [1, "order-card__table"], [1, "order-card__time", 3, "title"], [1, "sector-tag"], [1, "order-card__customer"], [1, "order-card__item-name"], [1, "order-card__item-qty"], [1, "order-card__notes"], [1, "order-card__footer"], [1, "order-card__actions"], [1, "order-card__picked-by", 3, "title"], ["type", "button", "title", "Cancelar item", 1, "icon-btn", "icon-btn--danger", 3, "disabled"], ["type", "button", 1, "btn", "btn--sm", "order-card__advance", 3, "disabled"], ["type", "button", "title", "Cancelar item", 1, "icon-btn", "icon-btn--danger", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn--sm", "order-card__advance", 3, "click", "disabled"], ["aria-hidden", "true", 1, "order-card__spinner"], [1, "modal-backdrop", 3, "click"], [1, "modal-card", "modal-card--sm", "card", 3, "click"], [1, "modal-card__header"], [1, "step-heading"], ["type", "button", "aria-label", "Fechar", 1, "icon-btn", 3, "click"], [1, "step-actions"], ["type", "button", 1, "btn", "btn--danger", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"]], template: function PedidosComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Pedidos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "span", 6);
      \u0275\u0275text(10, "\xC1rea");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 7)(12, "button", 8);
      \u0275\u0275listener("click", function PedidosComponent_Template_button_click_12_listener() {
        return ctx.setSectorFilter("");
      });
      \u0275\u0275elementStart(13, "span", 9);
      \u0275\u0275text(14, "apps");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " Todas ");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(16, PedidosComponent_For_17_Template, 4, 6, "button", 10, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "button", 11);
      \u0275\u0275listener("click", function PedidosComponent_Template_button_click_18_listener() {
        return ctx.refresh();
      });
      \u0275\u0275elementStart(19, "span", 9);
      \u0275\u0275text(20, "refresh");
      \u0275\u0275elementEnd();
      \u0275\u0275text(21, " Atualizar ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(22, PedidosComponent_Conditional_22_Template, 4, 1, "div", 12)(23, PedidosComponent_Conditional_23_Template, 2, 0, "p", 13)(24, PedidosComponent_Conditional_24_Template, 4, 1, "div", 12)(25, PedidosComponent_Conditional_25_Template, 3, 0, "div", 14)(26, PedidosComponent_Conditional_26_Template, 16, 7, "div", 15);
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_7_0;
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" Fila de pedidos de ", (tmp_0_0 = (tmp_0_0 = ctx.selectedCompany()) == null ? null : tmp_0_0.companyName) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : "sua empresa", " \u2014 acompanhe e movimente cada item do recebimento at\xE9 a entrega. ");
      \u0275\u0275advance(7);
      \u0275\u0275classProp("sector-chip--active", ctx.sectorFilter() === "");
      \u0275\u0275attribute("aria-pressed", ctx.sectorFilter() === "");
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.sectors());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isLoading());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.actionError() ? 22 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 23 : ctx.listError() ? 24 : 25);
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_7_0 = ctx.itemToCancel()) ? 26 : -1, tmp_7_0);
    }
  }, styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-header--row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.filters-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-bottom: 20px;\n}\n.filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.board[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  overflow-x: auto;\n  padding-bottom: 8px;\n}\n.board-column[_ngcontent-%COMP%] {\n  flex: 1 0 300px;\n  max-width: 360px;\n  min-width: 280px;\n  background: var(--color-bg-elevated);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.board-column__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.board-column__title[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.9375rem;\n  color: var(--color-text);\n}\n.board-column__icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text-muted);\n  font-size: 17px;\n}\n.board-column__count[_ngcontent-%COMP%] {\n  min-width: 28px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3px 10px;\n  border-radius: var(--radius-full);\n  background: rgba(203, 213, 225, 0.12);\n  color: var(--color-text-muted);\n  font-size: 0.8125rem;\n  font-weight: 700;\n}\n.board-column__list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  min-height: 40px;\n}\n.board-column__empty[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n  text-align: center;\n  padding: 16px 0;\n}\n.order-card[_ngcontent-%COMP%]:not([data-sector]) {\n  --sector: var(--color-text-muted);\n  --sector-bg: rgba(203, 213, 225, 0.08);\n}\n.order-card[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 14px 16px 14px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  overflow: hidden;\n  border-color: color-mix(in srgb, var(--sector) 28%, var(--color-border));\n  background:\n    linear-gradient(\n      135deg,\n      var(--sector-bg),\n      transparent 55%),\n    var(--color-bg-card);\n  transition: border-color var(--transition-fast), transform var(--transition-fast);\n}\n.order-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0 auto 0 0;\n  width: 4px;\n  background: var(--sector);\n}\n.order-card[_ngcontent-%COMP%]:hover {\n  border-color: color-mix(in srgb, var(--sector) 55%, var(--color-border));\n}\n.order-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.order-card__table[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9375rem;\n  color: var(--color-text);\n}\n.order-card__time[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.order-card__customer[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.order-card__item-name[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: var(--color-text);\n  font-weight: 500;\n}\n.order-card__item-qty[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  margin-right: 4px;\n}\n[data-sector=COZINHA][_ngcontent-%COMP%] {\n  --sector: #fb923c;\n  --sector-bg: rgba(251, 146, 60, 0.16);\n}\n[data-sector=BAR][_ngcontent-%COMP%] {\n  --sector: #f472b6;\n  --sector-bg: rgba(244, 114, 182, 0.16);\n}\n[data-sector=CONFEITARIA][_ngcontent-%COMP%] {\n  --sector: #e879f9;\n  --sector-bg: rgba(232, 121, 249, 0.16);\n}\n[data-sector=CHAPA][_ngcontent-%COMP%] {\n  --sector: #f87171;\n  --sector-bg: rgba(248, 113, 113, 0.16);\n}\n[data-sector=COPA][_ngcontent-%COMP%] {\n  --sector: #2dd4bf;\n  --sector-bg: rgba(45, 212, 191, 0.16);\n}\n[data-sector=SOBREMESAS][_ngcontent-%COMP%] {\n  --sector: #a3e635;\n  --sector-bg: rgba(163, 230, 53, 0.16);\n}\n.sector-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-self: flex-start;\n  align-items: center;\n  gap: 5px;\n  padding: 3px 10px 3px 7px;\n  border-radius: var(--radius-full);\n  border: 1px solid color-mix(in srgb, var(--sector) 40%, transparent);\n  background: var(--sector-bg);\n  color: var(--sector);\n  font-size: 0.6875rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.sector-tag[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.sector-filter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  min-width: 0;\n  flex: 1;\n}\n.sector-filter__chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.sector-chip[_ngcontent-%COMP%] {\n  --sector: var(--color-accent-hover);\n  --sector-bg: var(--color-accent-bg);\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 36px;\n  padding: 0 14px 0 10px;\n  border-radius: var(--radius-full);\n  border: 1px solid var(--color-border-strong);\n  background: transparent;\n  color: var(--color-text-muted);\n  font: inherit;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background var(--transition-fast),\n    border-color var(--transition-fast),\n    color var(--transition-fast);\n}\n.sector-chip[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--sector);\n}\n.sector-chip[_ngcontent-%COMP%]:hover {\n  border-color: color-mix(in srgb, var(--sector) 60%, transparent);\n  color: var(--color-text);\n}\n.sector-chip[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--sector);\n  outline-offset: 2px;\n}\n.sector-chip--active[_ngcontent-%COMP%] {\n  border-color: var(--sector);\n  background: var(--sector-bg);\n  color: var(--color-text);\n  box-shadow: inset 0 0 0 1px var(--sector);\n}\n.sector-chip--all[_ngcontent-%COMP%] {\n  --sector: var(--color-text);\n  --sector-bg: rgba(255, 255, 255, 0.08);\n}\n.order-card__notes[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n  font-style: italic;\n}\n.order-card__notes[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: 1px;\n}\n.order-card__footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding-top: 8px;\n  border-top: 1px solid var(--color-border);\n}\n.order-card__picked-by[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.order-card__picked-by[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.order-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.order-card__advance[_ngcontent-%COMP%] {\n  flex: 1;\n  background: var(--sector);\n  color: #0b1220;\n  font-weight: 700;\n}\n.order-card__advance[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.order-card__advance[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(1.08);\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px -6px var(--sector);\n}\n.order-card__advance[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--sector);\n  outline-offset: 2px;\n}\n.order-card__advance[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: progress;\n}\n.order-card__spinner[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  border: 2px solid currentColor;\n  border-top-color: transparent;\n  animation: _ngcontent-%COMP%_order-card-spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_order-card-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .order-card[_ngcontent-%COMP%], \n   .order-card__advance[_ngcontent-%COMP%] {\n    transition: none;\n  }\n  .order-card__advance[_ngcontent-%COMP%]:hover:not(:disabled) {\n    transform: none;\n  }\n}\n.icon-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius-sm);\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text);\n}\n.icon-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.icon-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(248, 113, 113, 0.12);\n  color: #f87171;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(4, 8, 20, 0.64);\n  backdrop-filter: blur(2px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  z-index: 100;\n}\n.modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 520px;\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n  padding: 32px;\n}\n.modal-card--sm[_ngcontent-%COMP%] {\n  max-width: 420px;\n}\n.modal-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.step-heading[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n}\n.step-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 24px;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #f87171;\n  color: #2a0a0a;\n}\n.btn--danger[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=pedidos.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PedidosComponent, { className: "PedidosComponent", filePath: "src\\app\\features\\admin\\pages\\pedidos\\pedidos.component.ts", lineNumber: 88 });
})();

export {
  PedidosComponent
};
//# sourceMappingURL=chunk-7CRLTJSW.js.map
