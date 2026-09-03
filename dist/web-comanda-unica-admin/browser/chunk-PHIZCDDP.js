import {
  TablesService
} from "./chunk-EFVGBZYZ.js";
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
} from "./chunk-GN6YKKII.js";
import {
  RippleDirective
} from "./chunk-VPD3C6IS.js";
import {
  ServiceRequestsService
} from "./chunk-QYRHQCGF.js";
import {
  autoDismiss
} from "./chunk-JD6JJHYZ.js";
import {
  AuthService
} from "./chunk-ZTXRUAXT.js";
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
} from "./chunk-POVL776E.js";

// src/app/features/admin/pages/servicos/servicos.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ServicosComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 4);
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
function ServicosComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "Carregando servi\xE7os\u2026");
    \u0275\u0275elementEnd();
  }
}
function ServicosComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 4);
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
function ServicosComponent_Conditional_13_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "Nenhuma solicita\xE7\xE3o aqui.");
    \u0275\u0275elementEnd();
  }
}
function ServicosComponent_Conditional_13_For_2_For_9_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21)(1, "span", 4);
    \u0275\u0275text(2, "sticky_note_2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const request_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", request_r2.notes, " ");
  }
}
function ServicosComponent_Conditional_13_For_2_For_9_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 24)(2, "span", 4);
    \u0275\u0275text(3, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const request_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("title", "Assumiu \xE0s " + ctx_r0.formatDateTime(request_r2.assignedAt));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", request_r2.assignedToUserName, " ");
  }
}
function ServicosComponent_Conditional_13_For_2_For_9_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "button", 25);
    \u0275\u0275listener("click", function ServicosComponent_Conditional_13_For_2_For_9_Conditional_14_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const request_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.advance(request_r2));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const request_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.movingRequestId() === request_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.movingRequestId() === request_r2.id ? "Movendo\u2026" : ctx_r0.nextActionLabel(request_r2.status), " ");
  }
}
function ServicosComponent_Conditional_13_For_2_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "span", 17)(3, "span", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 18);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 19);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 20);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ServicosComponent_Conditional_13_For_2_For_9_Conditional_12_Template, 4, 1, "p", 21)(13, ServicosComponent_Conditional_13_For_2_For_9_Conditional_13_Template, 5, 2, "div", 22)(14, ServicosComponent_Conditional_13_For_2_For_9_Conditional_14_Template, 3, 2, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const request_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.typeIcon(request_r2.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.typeLabel(request_r2.type), " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r0.formatDateTime(request_r2.createdAt));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.formatTime(request_r2.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Mesa ", request_r2.tableNumber, "", request_r2.tableName ? " \u2014 " + request_r2.tableName : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.requestOrigin(request_r2));
    \u0275\u0275advance();
    \u0275\u0275conditional(request_r2.notes ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(request_r2.assignedToUserName ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.canAdvance(request_r2) ? 14 : -1);
  }
}
function ServicosComponent_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "h2", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 13);
    \u0275\u0275template(7, ServicosComponent_Conditional_13_For_2_Conditional_7_Template, 2, 0, "p", 14);
    \u0275\u0275repeaterCreate(8, ServicosComponent_Conditional_13_For_2_For_9_Template, 15, 10, "div", 15, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const column_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.statusLabel(column_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.requestsFor(column_r4).length);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.requestsFor(column_r4).length === 0 ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.requestsFor(column_r4));
  }
}
function ServicosComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, ServicosComponent_Conditional_13_For_2_Template, 10, 3, "div", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.columns);
  }
}
function ServicosComponent_Conditional_14_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const table_r6 = ctx.$implicit;
    \u0275\u0275property("value", table_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("Mesa ", table_r6.number, "", table_r6.name ? " \u2014 " + table_r6.name : "", "");
  }
}
function ServicosComponent_Conditional_14_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "Selecione a mesa.");
    \u0275\u0275elementEnd();
  }
}
function ServicosComponent_Conditional_14_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", type_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.typeLabel(type_r7));
  }
}
function ServicosComponent_Conditional_14_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 4);
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
function ServicosComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275listener("click", function ServicosComponent_Conditional_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeCreateModal());
    });
    \u0275\u0275elementStart(1, "div", 27);
    \u0275\u0275listener("click", function ServicosComponent_Conditional_14_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 28)(3, "h2", 29);
    \u0275\u0275text(4, "Nova solicita\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 30);
    \u0275\u0275listener("click", function ServicosComponent_Conditional_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeCreateModal());
    });
    \u0275\u0275elementStart(6, "span", 4);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "form", 31);
    \u0275\u0275listener("submit", function ServicosComponent_Conditional_14_Template_form_submit_8_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r0.submitCreate());
    });
    \u0275\u0275elementStart(9, "div", 32)(10, "label", 33);
    \u0275\u0275text(11, "Mesa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 34)(13, "select", 35)(14, "option", 36);
    \u0275\u0275text(15, "Selecione a mesa");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(16, ServicosComponent_Conditional_14_For_17_Template, 2, 3, "option", 37, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, ServicosComponent_Conditional_14_Conditional_18_Template, 2, 0, "span", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 32)(20, "label", 39);
    \u0275\u0275text(21, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 34)(23, "select", 40);
    \u0275\u0275repeaterCreate(24, ServicosComponent_Conditional_14_For_25_Template, 2, 2, "option", 37, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 32)(27, "label", 41);
    \u0275\u0275text(28, "Observa\xE7\xE3o (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 34);
    \u0275\u0275element(30, "textarea", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, ServicosComponent_Conditional_14_Conditional_31_Template, 4, 1, "div", 5);
    \u0275\u0275elementStart(32, "div", 43)(33, "button", 44);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 45);
    \u0275\u0275listener("click", function ServicosComponent_Conditional_14_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r5);
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
var NEXT_STATUS = {
  OPEN: "IN_PROGRESS",
  IN_PROGRESS: "RESOLVED"
};
var NEXT_ACTION_LABEL = {
  OPEN: "Assumir",
  IN_PROGRESS: "Concluir atendimento"
};
var ServicosComponent = class _ServicosComponent {
  fb = new FormBuilder();
  serviceRequestsService = inject(ServiceRequestsService);
  tablesService = inject(TablesService);
  authService = inject(AuthService);
  dateTimeFormatter = new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short" });
  timeFormatter = new Intl.DateTimeFormat("pt-BR", { timeStyle: "short" });
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
    return value ? this.dateTimeFormatter.format(new Date(value)) : "\u2014";
  }
  formatTime(value) {
    return value ? this.timeFormatter.format(new Date(value)) : "\u2014";
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
        this.requests.set(response);
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
        this.actionError.set(this.resolveErrorMessage(error));
        autoDismiss(this.actionError, null);
      }
    });
  }
  applyUpdatedRequest(original, updated) {
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServicosComponent, selectors: [["app-admin-servicos"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 4, consts: [[1, "page-header", "page-header--row"], [1, "page-title"], [1, "page-subtitle"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", 3, "click"], ["aria-hidden", "true", 1, "material-icons"], ["role", "alert", 1, "form-alert", "form-alert--error"], [1, "field__hint"], [1, "board"], [1, "modal-backdrop"], [1, "board-column"], [1, "board-column__header"], [1, "board-column__title"], [1, "badge", "badge--muted"], [1, "board-column__list"], [1, "board-column__empty"], [1, "request-card", "card"], [1, "request-card__header"], [1, "request-card__type"], [1, "request-card__time", 3, "title"], [1, "request-card__table"], [1, "request-card__origin"], [1, "request-card__notes"], [1, "request-card__footer"], [1, "request-card__actions"], [1, "request-card__assigned", 3, "title"], ["type", "button", 1, "btn", "btn--primary", "btn--sm", "request-card__advance", 3, "click", "disabled"], [1, "modal-backdrop", 3, "click"], [1, "modal-card", "modal-card--sm", "card", 3, "click"], [1, "modal-card__header"], [1, "step-heading"], ["type", "button", "aria-label", "Fechar", 1, "icon-btn", 3, "click"], ["novalidate", "", 3, "submit", "formGroup"], [1, "field"], ["for", "request-table", 1, "field__label"], [1, "field__control"], ["id", "request-table", "formControlName", "tableId", 1, "field__input"], ["value", "", "disabled", ""], [3, "value"], [1, "field__error"], ["for", "request-type", 1, "field__label"], ["id", "request-type", "formControlName", "type", 1, "field__input"], ["for", "request-notes", 1, "field__label"], ["id", "request-notes", "rows", "3", "formControlName", "notes", "placeholder", "Detalhe a solicita\xE7\xE3o, se necess\xE1rio", 1, "field__input"], [1, "step-actions"], ["type", "submit", "appRipple", "", 1, "btn", "btn--primary", 3, "disabled"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"]], template: function ServicosComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Servi\xE7os");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "button", 3);
      \u0275\u0275listener("click", function ServicosComponent_Template_button_click_6_listener() {
        return ctx.openCreateModal();
      });
      \u0275\u0275elementStart(7, "span", 4);
      \u0275\u0275text(8, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " Nova solicita\xE7\xE3o ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, ServicosComponent_Conditional_10_Template, 4, 1, "div", 5)(11, ServicosComponent_Conditional_11_Template, 2, 0, "p", 6)(12, ServicosComponent_Conditional_12_Template, 4, 1, "div", 5)(13, ServicosComponent_Conditional_13_Template, 3, 0, "div", 7)(14, ServicosComponent_Conditional_14_Template, 37, 7, "div", 8);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" Solicita\xE7\xF5es de atendimento das mesas de ", (tmp_0_0 = (tmp_0_0 = ctx.selectedCompany()) == null ? null : tmp_0_0.companyName) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : "sua empresa", " \u2014 limpeza, chamar gar\xE7om/caixa, reclama\xE7\xE3o e ajuda. ");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.actionError() ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 11 : ctx.listError() ? 12 : 13);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isCreateModalOpen() ? 14 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RippleDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-header--row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\nselect.field__input[_ngcontent-%COMP%] {\n  appearance: none;\n  cursor: pointer;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: var(--radius-full);\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.badge--muted[_ngcontent-%COMP%] {\n  background: rgba(203, 213, 225, 0.12);\n  color: var(--color-text-muted);\n}\n.board[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  overflow-x: auto;\n  padding-bottom: 8px;\n}\n.board-column[_ngcontent-%COMP%] {\n  flex: 1 0 300px;\n  max-width: 360px;\n  min-width: 280px;\n  background: var(--color-bg-elevated);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.board-column__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.board-column__title[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: var(--color-text);\n}\n.board-column__list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  min-height: 40px;\n}\n.board-column__empty[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n  text-align: center;\n  padding: 16px 0;\n}\n.request-card[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.request-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.request-card__type[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 600;\n  font-size: 0.9375rem;\n  color: var(--color-text);\n}\n.request-card__type[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--color-accent-hover);\n}\n.request-card__time[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.request-card__table[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: var(--color-text);\n  font-weight: 500;\n}\n.request-card__origin[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.request-card__notes[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n  font-style: italic;\n}\n.request-card__notes[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: 1px;\n}\n.request-card__footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding-top: 8px;\n  border-top: 1px solid var(--color-border);\n}\n.request-card__assigned[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.request-card__assigned[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.request-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.request-card__advance[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius-sm);\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text);\n}\n.icon-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(4, 8, 20, 0.64);\n  backdrop-filter: blur(2px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  z-index: 100;\n}\n.modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 520px;\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n  padding: 32px;\n}\n.modal-card--sm[_ngcontent-%COMP%] {\n  max-width: 420px;\n}\n.modal-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.step-heading[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n}\n.step-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 24px;\n}\n/*# sourceMappingURL=servicos.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServicosComponent, { className: "ServicosComponent", filePath: "src\\app\\features\\admin\\pages\\servicos\\servicos.component.ts", lineNumber: 66 });
})();

export {
  ServicosComponent
};
//# sourceMappingURL=chunk-PHIZCDDP.js.map
