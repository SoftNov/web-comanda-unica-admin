import {
  ServiceRequestsService
} from "./chunk-LZCX3QVL.js";
import {
  resolveHomeRoute
} from "./chunk-5VZEFRWR.js";
import {
  OrderQueueService
} from "./chunk-GXBVLERB.js";
import "./chunk-QVW7NBHD.js";
import {
  AuthService
} from "./chunk-JI3XUBKU.js";
import {
  AccountsService
} from "./chunk-K3CHLMDM.js";
import "./chunk-3BRF5UDA.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-PB4HRHCY.js";
import {
  __spreadProps,
  __spreadValues,
  computed,
  effect,
  inject,
  retry,
  signal,
  timer,
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
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-MHTOAZDV.js";

// src/app/features/admin/config/menu.config.ts
var ADMIN_MENU_ITEMS = [
  { label: "Dashboard", icon: "dashboard", route: "/painel/dashboard" },
  {
    label: "Comandas",
    icon: "receipt_long",
    route: "/painel/comandas",
    roles: ["OWNER", "ADMIN", "MANAGER", "CASHIER", "WAITER"]
  },
  {
    label: "Mesas",
    icon: "table_bar",
    children: [
      {
        label: "Cadastro de Mesas",
        icon: "table_restaurant",
        route: "/painel/mesas",
        roles: ["ADMIN", "OWNER", "MANAGER"]
      },
      {
        label: "Mapa do Sal\xE3o",
        icon: "map",
        route: "/painel/configuracoes/mapa-salao",
        roles: ["ADMIN", "OWNER", "MANAGER"]
      }
    ]
  },
  { label: "Card\xE1pio", icon: "restaurant_menu", route: "/painel/cardapio", roles: ["ADMIN", "OWNER", "MANAGER"] },
  { label: "Pedidos", icon: "point_of_sale", route: "/painel/pedidos" },
  {
    label: "Servi\xE7os Gerais",
    icon: "support_agent",
    children: [
      {
        label: "Servi\xE7os",
        icon: "room_service",
        route: "/painel/servicos",
        roles: ["OWNER", "ADMIN", "MANAGER", "CASHIER", "WAITER"]
      }
    ]
  },
  { label: "Financeiro", icon: "payments", route: "/painel/financeiro" },
  {
    label: "Financeiro Comanda \xDAnica",
    icon: "account_balance",
    route: "/painel/financeiro-plataforma",
    platformAdminOnly: true
  },
  {
    label: "Stripe da Plataforma",
    icon: "credit_card",
    route: "/painel/configuracoes/stripe-plataforma",
    platformAdminOnly: true
  },
  { label: "Funcion\xE1rios", icon: "groups", route: "/painel/funcionarios", roles: ["ADMIN", "OWNER", "MANAGER"] },
  {
    label: "Configura\xE7\xF5es",
    icon: "settings",
    children: [
      { label: "Geral", icon: "tune", route: "/painel/configuracoes" },
      { label: "Meu perfil", icon: "person", route: "/painel/configuracoes/perfil" },
      { label: "Redefinir senha", icon: "lock_reset", route: "/painel/configuracoes/redefinir-senha" },
      {
        label: "Pagamentos",
        icon: "account_balance_wallet",
        route: "/painel/configuracoes/pagamentos",
        roles: ["OWNER", "ADMIN"]
      }
    ]
  }
];

// src/app/shared/services/notification-sound.service.ts
var NotificationSoundService = class _NotificationSoundService {
  audioContext;
  playChime() {
    try {
      const context = this.getAudioContext();
      if (context.state === "suspended") {
        void context.resume();
      }
      this.playTone(context, 880, context.currentTime, 0.14);
      this.playTone(context, 1175, context.currentTime + 0.15, 0.18);
    } catch {
    }
  }
  getAudioContext() {
    if (!this.audioContext) {
      this.audioContext = new AudioContext();
    }
    return this.audioContext;
  }
  playTone(context, frequency, startTime, duration) {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, startTime);
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(0.2, startTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(1e-3, startTime + duration);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(startTime);
    oscillator.stop(startTime + duration);
  }
  static \u0275fac = function NotificationSoundService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationSoundService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationSoundService, factory: _NotificationSoundService.\u0275fac, providedIn: "root" });
};

// src/app/shared/services/notifications.service.ts
var ORDER_QUEUE_NOTIFICATION_PROFILES = ["OWNER", "ADMIN", "MANAGER", "CASHIER", "WAITER", "KITCHEN"];
var SERVICE_REQUEST_NOTIFICATION_PROFILES = ["OWNER", "ADMIN", "MANAGER", "CASHIER", "WAITER"];
var SERVICE_TYPE_LABELS = {
  CLEANING: "Limpeza",
  CALL_WAITER: "Chamar gar\xE7om",
  CALL_CASHIER: "Chamar caixa",
  COMPLAINT: "Reclama\xE7\xE3o",
  HELP: "Ajuda"
};
var WS_RETRY_DELAY_MS = 5e3;
var TOAST_DURATION_MS = 6e3;
var NotificationsService = class _NotificationsService {
  authService = inject(AuthService);
  orderQueueService = inject(OrderQueueService);
  serviceRequestsService = inject(ServiceRequestsService);
  notificationSoundService = inject(NotificationSoundService);
  // "Pendente" = ainda não chegou ao fim do fluxo: pedido ainda não entregue (REQUESTED/PREPARING/
  // ON_THE_WAY — DELIVERED sai da lista) e solicitação de serviço ainda não atendida (OPEN/
  // IN_PROGRESS — o backend já não retorna RESOLVED em listActive, então tudo que chega aqui já é
  // "pendente" por definição).
  pendingOrders = signal([]);
  pendingServiceRequests = signal([]);
  pendingOrdersCount = computed(() => this.pendingOrders().length);
  pendingServiceRequestsCount = computed(() => this.pendingServiceRequests().length);
  totalPendingCount = computed(() => this.pendingOrdersCount() + this.pendingServiceRequestsCount());
  toast = signal(null);
  knownOrderIds;
  knownServiceRequestIds;
  toastTimeoutId;
  constructor() {
    effect((onCleanup) => {
      const company = this.authService.selectedCompany();
      const token = this.authService.getAccessToken();
      this.knownOrderIds = void 0;
      this.knownServiceRequestIds = void 0;
      if (!company || !token) {
        this.pendingOrders.set([]);
        this.pendingServiceRequests.set([]);
        return;
      }
      const subscriptions = [];
      if (ORDER_QUEUE_NOTIFICATION_PROFILES.includes(company.profileCode)) {
        subscriptions.push(this.connectOrders(company.companyId, token));
      } else {
        this.pendingOrders.set([]);
      }
      if (SERVICE_REQUEST_NOTIFICATION_PROFILES.includes(company.profileCode)) {
        subscriptions.push(this.connectServiceRequests(company.companyId, token));
      } else {
        this.pendingServiceRequests.set([]);
      }
      onCleanup(() => subscriptions.forEach((subscription) => subscription.unsubscribe()));
    });
  }
  dismissToast() {
    if (this.toastTimeoutId) {
      clearTimeout(this.toastTimeoutId);
    }
    this.toast.set(null);
  }
  connectOrders(companyId, token) {
    return this.orderQueueService.connectRealtime(companyId, token).pipe(retry({ delay: () => timer(WS_RETRY_DELAY_MS) })).subscribe((items) => this.handleOrdersSnapshot(items));
  }
  connectServiceRequests(companyId, token) {
    return this.serviceRequestsService.connectRealtime(companyId, token).pipe(retry({ delay: () => timer(WS_RETRY_DELAY_MS) })).subscribe((requests) => this.handleServiceRequestsSnapshot(requests));
  }
  // O primeiro snapshot recebido só define a base de comparação, sem disparar notificação — senão
  // todo pedido/serviço já em aberto notificaria de novo cada vez que o sino reconecta.
  handleOrdersSnapshot(items) {
    const pending = items.filter((item) => item.status !== "DELIVERED");
    const currentIds = new Set(pending.map((item) => item.id));
    if (this.knownOrderIds) {
      const newItems = pending.filter((item) => !this.knownOrderIds.has(item.id));
      if (newItems.length > 0) {
        this.notifyNewOrders(newItems);
      }
    }
    this.knownOrderIds = currentIds;
    this.pendingOrders.set(pending);
  }
  handleServiceRequestsSnapshot(requests) {
    const currentIds = new Set(requests.map((request) => request.id));
    if (this.knownServiceRequestIds) {
      const newRequests = requests.filter((request) => !this.knownServiceRequestIds.has(request.id));
      if (newRequests.length > 0) {
        this.notifyNewServiceRequests(newRequests);
      }
    }
    this.knownServiceRequestIds = currentIds;
    this.pendingServiceRequests.set(requests);
  }
  notifyNewOrders(newItems) {
    const [first, ...rest] = newItems;
    this.showToast("point_of_sale", `Novo pedido \u2014 Mesa ${first.tableNumber}${rest.length > 0 ? ` (+${rest.length})` : ""}`);
    this.notificationSoundService.playChime();
  }
  notifyNewServiceRequests(newRequests) {
    const [first, ...rest] = newRequests;
    const typeLabel = SERVICE_TYPE_LABELS[first.type];
    this.showToast("support_agent", `Nova solicita\xE7\xE3o \u2014 Mesa ${first.tableNumber} (${typeLabel})${rest.length > 0 ? ` (+${rest.length})` : ""}`);
    this.notificationSoundService.playChime();
  }
  showToast(icon, message) {
    this.toast.set({ icon, message });
    if (this.toastTimeoutId) {
      clearTimeout(this.toastTimeoutId);
    }
    this.toastTimeoutId = setTimeout(() => this.toast.set(null), TOAST_DURATION_MS);
  }
  static \u0275fac = function NotificationsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationsService, factory: _NotificationsService.\u0275fac, providedIn: "root" });
};

// src/app/features/admin/layout/admin-layout/admin-layout.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.route;
var _forTrack2 = ($index, $item) => $item.id;
var _forTrack3 = ($index, $item) => $item.companyId;
function AdminLayoutComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileSidebar());
    });
    \u0275\u0275elementEnd();
  }
}
function AdminLayoutComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", (tmp_1_0 = ctx_r1.selectedCompany()) == null ? null : tmp_1_0.logoUrl, \u0275\u0275sanitizeUrl);
  }
}
function AdminLayoutComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1, "CU");
    \u0275\u0275elementEnd();
  }
}
function AdminLayoutComponent_For_10_Conditional_0_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 29);
    \u0275\u0275listener("click", function AdminLayoutComponent_For_10_Conditional_0_Conditional_7_For_2_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.closeMobileSidebar());
    });
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const child_r6 = ctx.$implicit;
    \u0275\u0275property("routerLink", child_r6.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r6.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r6.label);
  }
}
function AdminLayoutComponent_For_10_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275repeaterCreate(1, AdminLayoutComponent_For_10_Conditional_0_Conditional_7_For_2_Template, 5, 3, "a", 28, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(item_r4.children);
  }
}
function AdminLayoutComponent_For_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function AdminLayoutComponent_For_10_Conditional_0_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const item_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleGroup(item_r4, $event));
    });
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AdminLayoutComponent_For_10_Conditional_0_Conditional_7_Template, 3, 0, "div", 27);
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("admin-sidebar__link--expanded", ctx_r1.isGroupExpanded(item_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isGroupExpanded(item_r4) ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isGroupExpanded(item_r4) ? 7 : -1);
  }
}
function AdminLayoutComponent_For_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 30);
    \u0275\u0275listener("click", function AdminLayoutComponent_For_10_Conditional_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeMobileSidebar());
    });
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", item_r4.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.label);
  }
}
function AdminLayoutComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AdminLayoutComponent_For_10_Conditional_0_Template, 8, 6)(1, AdminLayoutComponent_For_10_Conditional_1_Template, 5, 3, "a", 24);
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275conditional(item_r4.children ? 0 : 1);
  }
}
function AdminLayoutComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_22_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismissToast());
    });
    \u0275\u0275elementStart(1, "span", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 34);
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const toast_r9 = ctx;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(toast_r9.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(toast_r9.message);
  }
}
function AdminLayoutComponent_Conditional_23_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.totalPendingCount());
  }
}
function AdminLayoutComponent_Conditional_23_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 39);
    \u0275\u0275text(1, "Nenhuma pend\xEAncia no momento.");
    \u0275\u0275elementEnd();
  }
}
function AdminLayoutComponent_Conditional_23_Conditional_5_Conditional_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_23_Conditional_5_Conditional_2_For_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.goToPedidos());
    });
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275text(2, "point_of_sale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 44)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 45);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("Mesa ", order_r13.tableNumber, "", order_r13.tableName ? " \u2014 " + order_r13.tableName : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", order_r13.itemName, " \xB7 ", ctx_r1.formatTime(order_r13.createdAt), "");
  }
}
function AdminLayoutComponent_Conditional_23_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "span", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, AdminLayoutComponent_Conditional_23_Conditional_5_Conditional_2_For_4_Template, 8, 4, "button", 42, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Pedidos pendentes (", ctx_r1.pendingOrders().length, ")");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.pendingOrders());
  }
}
function AdminLayoutComponent_Conditional_23_Conditional_5_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_23_Conditional_5_Conditional_3_For_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.goToServicos());
    });
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275text(2, "support_agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 44)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 45);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const request_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("Mesa ", request_r15.tableNumber, "", request_r15.tableName ? " \u2014 " + request_r15.tableName : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.serviceTypeLabel(request_r15.type), " \xB7 ", ctx_r1.formatTime(request_r15.createdAt), "");
  }
}
function AdminLayoutComponent_Conditional_23_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "span", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, AdminLayoutComponent_Conditional_23_Conditional_5_Conditional_3_For_4_Template, 8, 4, "button", 42, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Servi\xE7os pendentes (", ctx_r1.pendingServiceRequests().length, ")");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.pendingServiceRequests());
  }
}
function AdminLayoutComponent_Conditional_23_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_23_Conditional_5_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(1, AdminLayoutComponent_Conditional_23_Conditional_5_Conditional_1_Template, 2, 0, "p", 39)(2, AdminLayoutComponent_Conditional_23_Conditional_5_Conditional_2_Template, 5, 1, "div", 40)(3, AdminLayoutComponent_Conditional_23_Conditional_5_Conditional_3_Template, 5, 1, "div", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.totalPendingCount() === 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasOrderNotifications() && ctx_r1.pendingOrders().length > 0 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasServiceNotifications() && ctx_r1.pendingServiceRequests().length > 0 ? 3 : -1);
  }
}
function AdminLayoutComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "button", 35);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_23_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleNotificationsMenu($event));
    });
    \u0275\u0275elementStart(2, "span", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AdminLayoutComponent_Conditional_23_Conditional_4_Template, 2, 1, "span", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AdminLayoutComponent_Conditional_23_Conditional_5_Template, 4, 3, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.totalPendingCount() > 0 ? "notifications_active" : "notifications");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.totalPendingCount() > 0 ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isNotificationsMenuOpen() ? 5 : -1);
  }
}
function AdminLayoutComponent_Conditional_24_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 47);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", (tmp_2_0 = ctx_r1.selectedCompany()) == null ? null : tmp_2_0.logoUrl, \u0275\u0275sanitizeUrl);
  }
}
function AdminLayoutComponent_Conditional_24_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "storefront");
    \u0275\u0275elementEnd();
  }
}
function AdminLayoutComponent_Conditional_24_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_24_Conditional_8_For_2_Template_button_click_0_listener() {
      const company_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectCompany(company_r19.companyId));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 53);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const company_r19 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("admin-topbar__menu-item--active", company_r19.companyId === ((tmp_12_0 = ctx_r1.selectedCompany()) == null ? null : tmp_12_0.companyId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(company_r19.companyName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(company_r19.profileName);
  }
}
function AdminLayoutComponent_Conditional_24_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_24_Conditional_8_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275repeaterCreate(1, AdminLayoutComponent_Conditional_24_Conditional_8_For_2_Template, 5, 4, "button", 51, _forTrack3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.companies());
  }
}
function AdminLayoutComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "button", 46);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_24_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCompanyMenu($event));
    });
    \u0275\u0275template(2, AdminLayoutComponent_Conditional_24_Conditional_2_Template, 1, 1, "img", 47)(3, AdminLayoutComponent_Conditional_24_Conditional_3_Template, 2, 0, "span", 9);
    \u0275\u0275elementStart(4, "span", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 9);
    \u0275\u0275text(7, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, AdminLayoutComponent_Conditional_24_Conditional_8_Template, 3, 0, "div", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_1_0 = ctx_r1.selectedCompany()) == null ? null : tmp_1_0.logoUrl) ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.selectedCompany()) == null ? null : tmp_2_0.companyName);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isCompanyMenuOpen() ? 8 : -1);
  }
}
function AdminLayoutComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 18);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", (tmp_1_0 = ctx_r1.currentUser()) == null ? null : tmp_1_0.avatarUrl, \u0275\u0275sanitizeUrl);
  }
}
function AdminLayoutComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.userInitials);
  }
}
function AdminLayoutComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_33_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r20);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 55)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 56);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_33_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275elementStart(7, "span", 9);
    \u0275\u0275text(8, "logout");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Sair ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r1.currentUser()) == null ? null : tmp_1_0.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.currentUser()) == null ? null : tmp_2_0.email);
  }
}
var AdminLayoutComponent = class _AdminLayoutComponent {
  authService = inject(AuthService);
  accountsService = inject(AccountsService);
  notificationsService = inject(NotificationsService);
  router = inject(Router);
  timeFormatter = new Intl.DateTimeFormat("pt-BR", { timeStyle: "short" });
  currentUser = this.authService.currentUser;
  companies = this.authService.companies;
  selectedCompany = this.authService.selectedCompany;
  profileCode = computed(() => this.selectedCompany()?.profileCode ?? null);
  isPlatformAdmin = this.authService.isPlatformAdmin;
  menuItems = computed(() => this.filterMenuByProfile(ADMIN_MENU_ITEMS, this.profileCode(), this.isPlatformAdmin()));
  isMobileSidebarOpen = signal(false);
  isSidebarCollapsed = signal(false);
  isCompanyMenuOpen = signal(false);
  isUserMenuOpen = signal(false);
  isNotificationsMenuOpen = signal(false);
  expandedGroups = signal(new Set(this.menuItems().filter((item) => this.isGroupActive(item)).map((item) => item.label)));
  // Sino de notificações no topo — pedidos ainda não entregues e serviços gerais ainda não
  // atendidos, atualizados em tempo real (ver NotificationsService). As duas seções só aparecem
  // se o perfil atual tiver acesso ao respectivo recurso no backend (KITCHEN não vê serviços).
  hasOrderNotifications = computed(() => {
    const code = this.profileCode();
    return !!code && ORDER_QUEUE_NOTIFICATION_PROFILES.includes(code);
  });
  hasServiceNotifications = computed(() => {
    const code = this.profileCode();
    return !!code && SERVICE_REQUEST_NOTIFICATION_PROFILES.includes(code);
  });
  pendingOrders = this.notificationsService.pendingOrders;
  pendingServiceRequests = this.notificationsService.pendingServiceRequests;
  totalPendingCount = this.notificationsService.totalPendingCount;
  notificationToast = this.notificationsService.toast;
  constructor() {
    this.syncProfileImages();
  }
  get userInitials() {
    const name = this.currentUser()?.fullName ?? "";
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) {
      return "?";
    }
    return (parts[0][0] + (parts[1]?.[0] ?? "")).toUpperCase();
  }
  closeMenus() {
    this.isCompanyMenuOpen.set(false);
    this.isUserMenuOpen.set(false);
    this.isNotificationsMenuOpen.set(false);
  }
  toggleNotificationsMenu(event) {
    event.stopPropagation();
    this.isCompanyMenuOpen.set(false);
    this.isUserMenuOpen.set(false);
    this.isNotificationsMenuOpen.update((open) => !open);
  }
  dismissToast() {
    this.notificationsService.dismissToast();
  }
  formatTime(value) {
    return this.timeFormatter.format(new Date(value));
  }
  serviceTypeLabel(type) {
    return SERVICE_TYPE_LABELS[type];
  }
  goToPedidos() {
    this.isNotificationsMenuOpen.set(false);
    void this.router.navigateByUrl("/painel/pedidos");
  }
  goToServicos() {
    this.isNotificationsMenuOpen.set(false);
    void this.router.navigateByUrl("/painel/servicos");
  }
  toggleMobileSidebar() {
    this.isMobileSidebarOpen.update((open) => !open);
  }
  closeMobileSidebar() {
    this.isMobileSidebarOpen.set(false);
  }
  toggleCollapse() {
    this.isSidebarCollapsed.update((collapsed) => !collapsed);
  }
  isGroupExpanded(item) {
    return this.expandedGroups().has(item.label);
  }
  toggleGroup(item, event) {
    event.stopPropagation();
    if (this.isSidebarCollapsed()) {
      this.isSidebarCollapsed.set(false);
    }
    this.expandedGroups.update((current) => {
      const next = new Set(current);
      if (next.has(item.label)) {
        next.delete(item.label);
      } else {
        next.add(item.label);
      }
      return next;
    });
  }
  isGroupActive(item) {
    return (item.children ?? []).some((child) => !!child.route && this.router.url.startsWith(child.route));
  }
  filterMenuByProfile(items, profileCode, isPlatformAdmin) {
    return items.filter((item) => !item.roles || !!profileCode && item.roles.includes(profileCode)).filter((item) => !item.platformAdminOnly || isPlatformAdmin).map((item) => item.children ? __spreadProps(__spreadValues({}, item), { children: this.filterMenuByProfile(item.children, profileCode, isPlatformAdmin) }) : item).filter((item) => !item.children || item.children.length > 0);
  }
  syncProfileImages() {
    this.accountsService.getProfile().subscribe({
      next: (response) => {
        if (response.owner.avatarUrl) {
          this.authService.updateAvatarUrl(response.owner.avatarUrl);
        }
        if (response.companyLogoUrl) {
          const companyId = this.selectedCompany()?.companyId;
          if (companyId) {
            this.authService.updateCompanyLogoUrl(companyId, response.companyLogoUrl);
          }
        }
      },
      error: () => {
      }
    });
  }
  toggleCompanyMenu(event) {
    event.stopPropagation();
    this.isUserMenuOpen.set(false);
    this.isCompanyMenuOpen.update((open) => !open);
  }
  toggleUserMenu(event) {
    event.stopPropagation();
    this.isCompanyMenuOpen.set(false);
    this.isUserMenuOpen.update((open) => !open);
  }
  selectCompany(companyId) {
    this.authService.selectCompany(companyId);
    this.accountsService.invalidateProfileCache();
    this.syncProfileImages();
    this.isCompanyMenuOpen.set(false);
    this.router.navigateByUrl(resolveHomeRoute(this.selectedCompany()?.profileCode ?? null));
  }
  logout() {
    this.authService.logout();
  }
  static \u0275fac = function AdminLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLayoutComponent, selectors: [["app-admin-layout"]], hostBindings: function AdminLayoutComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function AdminLayoutComponent_click_HostBindingHandler() {
        return ctx.closeMenus();
      }, false, \u0275\u0275resolveDocument);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 14, consts: [[1, "admin-layout"], [1, "admin-backdrop"], [1, "admin-sidebar"], [1, "admin-sidebar__brand"], ["alt", "", 1, "admin-sidebar__logo", "admin-sidebar__logo--img", 3, "src"], [1, "admin-sidebar__logo"], [1, "admin-sidebar__name"], [1, "admin-sidebar__nav"], ["type", "button", 1, "admin-sidebar__collapse-toggle", 3, "click"], ["aria-hidden", "true", 1, "material-icons"], [1, "admin-sidebar__label"], [1, "admin-main"], [1, "admin-topbar"], ["type", "button", "aria-label", "Abrir menu", 1, "admin-topbar__icon-btn", "admin-topbar__menu-btn", 3, "click"], [1, "admin-topbar__spacer"], ["role", "status", 1, "notification-toast"], [1, "admin-topbar__dropdown"], ["type", "button", 1, "admin-topbar__user-btn", 3, "click"], ["alt", "", 1, "admin-topbar__avatar", "admin-topbar__avatar--img", 3, "src"], [1, "admin-topbar__avatar"], [1, "admin-topbar__user-name"], [1, "admin-topbar__menu", "admin-topbar__menu--right"], [1, "admin-content"], [1, "admin-backdrop", 3, "click"], ["routerLinkActive", "admin-sidebar__link--active", 1, "admin-sidebar__link", 3, "routerLink"], ["type", "button", 1, "admin-sidebar__link", "admin-sidebar__link--group", 3, "click"], ["aria-hidden", "true", 1, "material-icons", "admin-sidebar__chevron"], [1, "admin-sidebar__submenu"], ["routerLinkActive", "admin-sidebar__link--active", 1, "admin-sidebar__link", "admin-sidebar__link--child", 3, "routerLink"], ["routerLinkActive", "admin-sidebar__link--active", 1, "admin-sidebar__link", "admin-sidebar__link--child", 3, "click", "routerLink"], ["routerLinkActive", "admin-sidebar__link--active", 1, "admin-sidebar__link", 3, "click", "routerLink"], ["role", "status", 1, "notification-toast", 3, "click"], ["aria-hidden", "true", 1, "material-icons", "notification-toast__icon"], [1, "notification-toast__message"], ["aria-hidden", "true", 1, "material-icons", "notification-toast__close"], ["type", "button", "aria-label", "Notifica\xE7\xF5es", 1, "admin-topbar__icon-btn", "admin-topbar__bell-btn", 3, "click"], [1, "admin-topbar__bell-badge"], [1, "admin-topbar__menu", "admin-topbar__menu--right", "admin-topbar__menu--notifications"], [1, "admin-topbar__menu", "admin-topbar__menu--right", "admin-topbar__menu--notifications", 3, "click"], [1, "admin-topbar__notifications-empty"], [1, "admin-topbar__notifications-group"], [1, "admin-topbar__notifications-title"], ["type", "button", 1, "admin-topbar__notification-item"], ["type", "button", 1, "admin-topbar__notification-item", 3, "click"], [1, "admin-topbar__notification-text"], [1, "admin-topbar__notification-meta"], ["type", "button", 1, "admin-topbar__company-btn", 3, "click"], ["alt", "", 1, "admin-topbar__company-logo", 3, "src"], [1, "admin-topbar__company-name"], [1, "admin-topbar__menu"], [1, "admin-topbar__menu", 3, "click"], ["type", "button", 1, "admin-topbar__menu-item", 3, "admin-topbar__menu-item--active"], ["type", "button", 1, "admin-topbar__menu-item", 3, "click"], [1, "admin-topbar__menu-item-role"], [1, "admin-topbar__menu", "admin-topbar__menu--right", 3, "click"], [1, "admin-topbar__menu-user"], ["type", "button", 1, "admin-topbar__menu-item", "admin-topbar__menu-item--danger", 3, "click"]], template: function AdminLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, AdminLayoutComponent_Conditional_1_Template, 1, 0, "div", 1);
      \u0275\u0275elementStart(2, "aside", 2)(3, "div", 3);
      \u0275\u0275template(4, AdminLayoutComponent_Conditional_4_Template, 1, 1, "img", 4)(5, AdminLayoutComponent_Conditional_5_Template, 2, 0, "span", 5);
      \u0275\u0275elementStart(6, "span", 6);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "nav", 7);
      \u0275\u0275repeaterCreate(9, AdminLayoutComponent_For_10_Template, 2, 1, null, null, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 8);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_11_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275elementStart(12, "span", 9);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span", 10);
      \u0275\u0275text(15, "Recolher menu");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 11)(17, "header", 12)(18, "button", 13);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_18_listener($event) {
        ctx.toggleMobileSidebar();
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(19, "span", 9);
      \u0275\u0275text(20, "menu");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(21, "div", 14);
      \u0275\u0275template(22, AdminLayoutComponent_Conditional_22_Template, 7, 2, "div", 15)(23, AdminLayoutComponent_Conditional_23_Template, 6, 3, "div", 16)(24, AdminLayoutComponent_Conditional_24_Template, 9, 3, "div", 16);
      \u0275\u0275elementStart(25, "div", 16)(26, "button", 17);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_26_listener($event) {
        return ctx.toggleUserMenu($event);
      });
      \u0275\u0275template(27, AdminLayoutComponent_Conditional_27_Template, 1, 1, "img", 18)(28, AdminLayoutComponent_Conditional_28_Template, 2, 1, "span", 19);
      \u0275\u0275elementStart(29, "span", 20);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "span", 9);
      \u0275\u0275text(32, "expand_more");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(33, AdminLayoutComponent_Conditional_33_Template, 10, 2, "div", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "main", 22);
      \u0275\u0275element(35, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_4_0;
      let tmp_7_0;
      let tmp_10_0;
      let tmp_11_0;
      \u0275\u0275classProp("admin-layout--collapsed", ctx.isSidebarCollapsed());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isMobileSidebarOpen() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("admin-sidebar--open", ctx.isMobileSidebarOpen());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(((tmp_3_0 = ctx.selectedCompany()) == null ? null : tmp_3_0.logoUrl) ? 4 : 5);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate((tmp_4_0 = (tmp_4_0 = ctx.selectedCompany()) == null ? null : tmp_4_0.companyName) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : "Comanda \xDAnica");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.menuItems());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.isSidebarCollapsed() ? "chevron_right" : "chevron_left");
      \u0275\u0275advance(9);
      \u0275\u0275conditional((tmp_7_0 = ctx.notificationToast()) ? 22 : -1, tmp_7_0);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.hasOrderNotifications() || ctx.hasServiceNotifications() ? 23 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.companies().length > 1 ? 24 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(((tmp_10_0 = ctx.currentUser()) == null ? null : tmp_10_0.avatarUrl) ? 27 : 28);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate((tmp_11_0 = ctx.currentUser()) == null ? null : tmp_11_0.fullName);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isUserMenuOpen() ? 33 : -1);
    }
  }, dependencies: [RouterLink, RouterLinkActive, RouterOutlet], styles: ["\n\n.admin-layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: var(--color-bg);\n}\n.admin-sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  inset-block: 0;\n  left: 0;\n  width: 260px;\n  display: flex;\n  flex-direction: column;\n  background: var(--color-bg-elevated);\n  border-right: 1px solid var(--color-border);\n  z-index: 110;\n  transition: width var(--transition-base), transform var(--transition-base);\n}\n.admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar[_ngcontent-%COMP%] {\n  width: 76px;\n}\n.admin-sidebar__brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  height: 68px;\n  padding-inline: 20px;\n  border-bottom: 1px solid var(--color-border);\n  overflow: hidden;\n  white-space: nowrap;\n}\n.admin-sidebar__logo[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  border-radius: var(--radius-sm);\n  background: var(--gradient-accent);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n  font-size: 0.8125rem;\n  color: #fff;\n}\n.admin-sidebar__logo--img[_ngcontent-%COMP%] {\n  background: var(--color-bg-elevated);\n  object-fit: cover;\n}\n.admin-sidebar__name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--color-text);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.admin-sidebar__nav[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.admin-sidebar__link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  width: 100%;\n  padding: 11px 12px;\n  border-radius: var(--radius-sm);\n  border: none;\n  background: transparent;\n  color: var(--color-gray);\n  font-size: 0.9375rem;\n  font-weight: 500;\n  font-family: inherit;\n  white-space: nowrap;\n  overflow: hidden;\n  cursor: pointer;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.admin-sidebar__link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 20px;\n}\n.admin-sidebar__link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text);\n}\n.admin-sidebar__link--active[_ngcontent-%COMP%] {\n  background: var(--color-accent-bg);\n  color: var(--color-accent-hover);\n}\n.admin-sidebar__link--group[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.admin-sidebar__link--child[_ngcontent-%COMP%] {\n  padding-left: 12px;\n}\n.admin-sidebar__link--child[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]:first-child {\n  font-size: 18px;\n}\n.admin-sidebar__chevron[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 18px !important;\n  color: var(--color-text-muted);\n}\n.admin-sidebar__submenu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  margin: 2px 0 6px 34px;\n  padding-left: 10px;\n  border-left: 1px solid var(--color-border);\n}\n.admin-sidebar__collapse-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin: 12px;\n  padding: 11px 12px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border);\n  background: transparent;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.admin-sidebar__collapse-toggle[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 20px;\n}\n.admin-sidebar__collapse-toggle[_ngcontent-%COMP%]:hover {\n  color: var(--color-text);\n  border-color: var(--color-border-strong);\n}\n@media (max-width: 960px) {\n  .admin-sidebar__collapse-toggle[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__label[_ngcontent-%COMP%], \n.admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__name[_ngcontent-%COMP%], \n.admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__chevron[_ngcontent-%COMP%], \n.admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__submenu[_ngcontent-%COMP%] {\n  display: none;\n}\n.admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__link[_ngcontent-%COMP%], \n.admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__collapse-toggle[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.admin-main[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 260px;\n  min-width: 0;\n  transition: margin-left var(--transition-base);\n}\n.admin-layout--collapsed[_ngcontent-%COMP%]   .admin-main[_ngcontent-%COMP%] {\n  margin-left: 76px;\n}\n.admin-topbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 90;\n  height: 68px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding-inline: 24px;\n  background: rgba(15, 23, 42, 0.85);\n  backdrop-filter: blur(14px);\n  -webkit-backdrop-filter: blur(14px);\n  border-bottom: 1px solid var(--color-border);\n}\n.admin-topbar__spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.admin-topbar__icon-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border-strong);\n  background: transparent;\n  color: var(--color-text);\n  cursor: pointer;\n}\n.admin-topbar__icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.admin-topbar__menu-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 960px) {\n  .admin-topbar__menu-btn[_ngcontent-%COMP%] {\n    display: inline-flex;\n  }\n}\n.admin-topbar__bell-btn[_ngcontent-%COMP%] {\n  position: relative;\n}\n.admin-topbar__bell-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  border-radius: var(--radius-full);\n  background: #f87171;\n  color: #2a0a0a;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  line-height: 1;\n  border: 2px solid var(--color-bg-base, #0f172a);\n}\n.admin-topbar__menu--notifications[_ngcontent-%COMP%] {\n  min-width: 320px;\n  max-width: 380px;\n  max-height: min(420px, 100vh - 68px - 32px);\n  overflow-y: auto;\n}\n.admin-topbar__notifications-empty[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  text-align: center;\n}\n.admin-topbar__notifications-group[_ngcontent-%COMP%]    + .admin-topbar__notifications-group[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  padding-top: 6px;\n  border-top: 1px solid var(--color-border);\n}\n.admin-topbar__notifications-title[_ngcontent-%COMP%] {\n  display: block;\n  padding: 6px 12px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  color: var(--color-text-muted);\n}\n.admin-topbar__notification-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  width: 100%;\n  padding: 10px 12px;\n  border-radius: var(--radius-sm);\n  background: transparent;\n  border: none;\n  color: var(--color-text);\n  text-align: left;\n  cursor: pointer;\n}\n.admin-topbar__notification-item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--color-accent-hover);\n  margin-top: 1px;\n}\n.admin-topbar__notification-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.admin-topbar__notification-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  font-size: 0.875rem;\n}\n.admin-topbar__notification-meta[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.notification-toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  max-width: min(320px, 40vw);\n  padding: 10px 14px;\n  border-radius: var(--radius-md);\n  background: var(--color-bg-elevated);\n  border: 1px solid var(--color-accent);\n  box-shadow: var(--shadow-lg);\n  cursor: pointer;\n  animation: _ngcontent-%COMP%_notification-toast-in 0.2s ease-out;\n}\n@media (max-width: 720px) {\n  .notification-toast[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.notification-toast__icon[_ngcontent-%COMP%] {\n  color: var(--color-accent-hover);\n  flex-shrink: 0;\n}\n.notification-toast__message[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.notification-toast__close[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--color-text-muted);\n  flex-shrink: 0;\n}\n@keyframes _ngcontent-%COMP%_notification-toast-in {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.admin-topbar__dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.admin-topbar__company-btn[_ngcontent-%COMP%], \n.admin-topbar__user-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  border-radius: var(--radius-full);\n  border: 1px solid var(--color-border-strong);\n  background: transparent;\n  color: var(--color-text);\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 500;\n  max-width: 240px;\n}\n.admin-topbar__company-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.admin-topbar__user-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--color-text-muted);\n}\n.admin-topbar__company-btn[_ngcontent-%COMP%]:hover, \n.admin-topbar__user-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.admin-topbar__company-name[_ngcontent-%COMP%], \n.admin-topbar__user-name[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n@media (max-width: 640px) {\n  .admin-topbar__company-name[_ngcontent-%COMP%], \n   .admin-topbar__user-name[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.admin-topbar__company-logo[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n  object-fit: cover;\n  flex-shrink: 0;\n}\n.admin-topbar__avatar[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: var(--gradient-accent);\n  color: #fff;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.admin-topbar__avatar--img[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\n.admin-topbar__menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  left: 0;\n  min-width: 240px;\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-lg);\n  padding: 8px;\n  z-index: 120;\n}\n.admin-topbar__menu--right[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n}\n.admin-topbar__menu-user[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 10px 12px;\n  border-bottom: 1px solid var(--color-border);\n  margin-bottom: 6px;\n}\n.admin-topbar__menu-user[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--color-text);\n  font-size: 0.9375rem;\n}\n.admin-topbar__menu-user[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.admin-topbar__menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  width: 100%;\n  padding: 10px 12px;\n  border-radius: var(--radius-sm);\n  background: transparent;\n  border: none;\n  color: var(--color-gray);\n  font-size: 0.875rem;\n  text-align: left;\n  cursor: pointer;\n}\n.admin-topbar__menu-item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.admin-topbar__menu-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text);\n}\n.admin-topbar__menu-item--active[_ngcontent-%COMP%] {\n  color: var(--color-accent-hover);\n}\n.admin-topbar__menu-item--danger[_ngcontent-%COMP%]:hover {\n  color: #f87171;\n}\n.admin-topbar__menu-item-role[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.admin-content[_ngcontent-%COMP%] {\n  padding: 28px 24px 48px;\n}\n.admin-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 105;\n}\n@media (max-width: 960px) {\n  .admin-sidebar[_ngcontent-%COMP%] {\n    transform: translateX(-100%);\n    width: 260px;\n  }\n  .admin-sidebar--open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar[_ngcontent-%COMP%] {\n    width: 260px;\n  }\n  .admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__label[_ngcontent-%COMP%], \n   .admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__name[_ngcontent-%COMP%] {\n    display: inline;\n  }\n  .admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__chevron[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__submenu[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .admin-main[_ngcontent-%COMP%], \n   .admin-layout--collapsed[_ngcontent-%COMP%]   .admin-main[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .admin-content[_ngcontent-%COMP%] {\n    padding: 20px 16px 40px;\n  }\n}\n/*# sourceMappingURL=admin-layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLayoutComponent, { className: "AdminLayoutComponent", filePath: "src\\app\\features\\admin\\layout\\admin-layout\\admin-layout.component.ts", lineNumber: 22 });
})();
export {
  AdminLayoutComponent
};
//# sourceMappingURL=chunk-W2PGEYCI.js.map
