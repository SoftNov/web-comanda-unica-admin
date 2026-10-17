import {
  LineChartComponent
} from "./chunk-QDGVBSR7.js";
import {
  PlatformFinanceService
} from "./chunk-QFOBMFTQ.js";
import {
  RippleDirective
} from "./chunk-ZBOLJN4C.js";
import {
  brDateTimeFormat,
  parseApiDate
} from "./chunk-YI5DDYTJ.js";
import {
  environment
} from "./chunk-IKIQHSDP.js";
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-MRKXMG4P.js";

// src/app/shared/services/platform-extrato.service.ts
var PlatformExtratoService = class _PlatformExtratoService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiBaseUrl}/api/v1/platform/finance/charges`;
  getCharges(filters = {}) {
    return this.http.get(this.baseUrl, { params: this.toParams(filters) });
  }
  exportCsv(filters = {}) {
    return this.http.get(`${this.baseUrl}/export`, { params: this.toParams(filters), responseType: "blob" });
  }
  toParams(filters) {
    const params = {};
    if (filters.startDate)
      params["startDate"] = filters.startDate;
    if (filters.endDate)
      params["endDate"] = filters.endDate;
    if (filters.companyId)
      params["companyId"] = filters.companyId;
    if (filters.status)
      params["status"] = filters.status;
    if (filters.page != null)
      params["page"] = String(filters.page);
    if (filters.size != null)
      params["size"] = String(filters.size);
    return params;
  }
  static \u0275fac = function PlatformExtratoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlatformExtratoService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PlatformExtratoService, factory: _PlatformExtratoService.\u0275fac, providedIn: "root" });
};

// src/app/features/admin/pages/cobrancas-plataforma/cobrancas-plataforma.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function CobrancasPlataformaComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "span", 19);
    \u0275\u0275text(3, "percent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 20);
    \u0275\u0275text(5, "Taxas geradas no per\xEDodo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 18)(9, "span", 19);
    \u0275\u0275text(10, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 20);
    \u0275\u0275text(12, "Taxas recebidas (Asaas)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 21);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 18)(16, "span", 19);
    \u0275\u0275text(17, "card_membership");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 20);
    \u0275\u0275text(19, "Mensalidades recebidas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 21);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 18)(23, "span", 19);
    \u0275\u0275text(24, "hourglass_empty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 20);
    \u0275\u0275text(26, "Taxas a cobrar (hoje)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 21);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 22);
    \u0275\u0275element(30, "app-line-chart", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(s_r1.totalFeeAmount));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(s_r1.receivedFeeAmount));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(s_r1.receivedSubscriptionAmount));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(s_r1.pendingFeeBalance));
    \u0275\u0275advance(2);
    \u0275\u0275property("points", ctx_r1.feePoints())("height", 220);
  }
}
function CobrancasPlataformaComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 8);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " N\xE3o foi poss\xEDvel carregar o resumo do per\xEDodo. ");
    \u0275\u0275elementEnd();
  }
}
function CobrancasPlataformaComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1, "Carregando resumo\u2026");
    \u0275\u0275elementEnd();
  }
}
function CobrancasPlataformaComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    \u0275\u0275property("value", option_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r3.label);
  }
}
function CobrancasPlataformaComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 8);
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
function CobrancasPlataformaComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1, "Carregando cobran\xE7as\u2026");
    \u0275\u0275elementEnd();
  }
}
function CobrancasPlataformaComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1, "Nenhuma cobran\xE7a no per\xEDodo.");
    \u0275\u0275elementEnd();
  }
}
function CobrancasPlataformaComponent_Conditional_37_For_23_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 29);
    \u0275\u0275text(1, "comprovante");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const charge_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", charge_r4.receiptUrl || charge_r4.invoiceUrl, \u0275\u0275sanitizeUrl);
  }
}
function CobrancasPlataformaComponent_Conditional_37_For_23_Template(rf, ctx) {
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
    \u0275\u0275elementStart(7, "td")(8, "span", 28);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 26);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 26);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275template(19, CobrancasPlataformaComponent_Conditional_37_For_23_Conditional_19_Template, 2, 1, "a", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const charge_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDateTime(charge_r4.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(charge_r4.companyName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.kindLabel(charge_r4));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("platform-status--pending", !charge_r4.paid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusLabel(charge_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(charge_r4.value));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(charge_r4.netValue));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDateTime(charge_r4.paidAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(charge_r4.cardLast4 ? charge_r4.cardBrand + " \u2022\u2022\u2022\u2022 " + charge_r4.cardLast4 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(charge_r4.receiptUrl || charge_r4.invoiceUrl ? 19 : -1);
  }
}
function CobrancasPlataformaComponent_Conditional_37_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "button", 7);
    \u0275\u0275listener("click", function CobrancasPlataformaComponent_Conditional_37_Conditional_24_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadMore());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isLoadingMore());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isLoadingMore() ? "Carregando\u2026" : "Carregar mais", " ");
  }
}
function CobrancasPlataformaComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "table", 25)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Criada em");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Estabelecimento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 26);
    \u0275\u0275text(13, "Valor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 26);
    \u0275\u0275text(15, "L\xEDquido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Pago em");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Cart\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275repeaterCreate(22, CobrancasPlataformaComponent_Conditional_37_For_23_Template, 20, 11, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(24, CobrancasPlataformaComponent_Conditional_37_Conditional_24_Template, 3, 2, "div", 27);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(22);
    \u0275\u0275repeater(ctx_r1.charges());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.hasMore() ? 24 : -1);
  }
}
var PAGE_SIZE = 20;
var STATUS_OPTIONS = [
  { value: "", label: "Todas" },
  { value: "PAID", label: "Pagas" },
  { value: "OPEN", label: "Em aberto" },
  { value: "FAILED", label: "Recusadas / estornadas" }
];
var CobrancasPlataformaComponent = class _CobrancasPlataformaComponent {
  financeService = inject(PlatformFinanceService);
  extratoService = inject(PlatformExtratoService);
  currencyFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
  dateTimeFormatter = brDateTimeFormat({ dateStyle: "short", timeStyle: "short" });
  statusOptions = STATUS_OPTIONS;
  startDate = signal(this.toIsoDate(this.daysAgo(29)));
  endDate = signal(this.toIsoDate(/* @__PURE__ */ new Date()));
  statusFilter = signal("");
  summary = signal(null);
  summaryError = signal(false);
  feePoints = computed(() => (this.summary()?.feeSeries ?? []).map((point) => ({ date: point.date, amount: point.amount })));
  charges = signal([]);
  page = signal(0);
  hasMore = signal(false);
  isLoading = signal(false);
  isLoadingMore = signal(false);
  loadError = signal(null);
  isExporting = signal(false);
  constructor() {
    this.reload();
  }
  formatCurrency(value) {
    return value != null ? this.currencyFormatter.format(value) : "\u2014";
  }
  formatDateTime(value) {
    const parsed = parseApiDate(value ?? null);
    return parsed ? this.dateTimeFormatter.format(parsed) : "\u2014";
  }
  kindLabel(charge) {
    return charge.kind === "SUBSCRIPTION" ? "Mensalidade" : "Taxas";
  }
  statusLabel(charge) {
    if (charge.paid) {
      return "Paga";
    }
    switch (charge.status) {
      case "PENDING":
      case "AWAITING_RISK_ANALYSIS":
        return "Em aberto";
      case "OVERDUE":
        return "Recusada";
      case "REFUNDED":
      case "REFUND_REQUESTED":
        return "Estornada";
      default:
        return charge.status;
    }
  }
  onStartDateChange(value) {
    this.startDate.set(value);
    this.reload();
  }
  onEndDateChange(value) {
    this.endDate.set(value);
    this.reload();
  }
  onStatusFilterChange(value) {
    this.statusFilter.set(value);
    this.loadCharges(0, false);
  }
  reload() {
    this.loadSummary();
    this.loadCharges(0, false);
  }
  loadMore() {
    this.loadCharges(this.page() + 1, true);
  }
  exportCsv() {
    this.isExporting.set(true);
    this.extratoService.exportCsv({
      startDate: this.startDate(),
      endDate: this.endDate(),
      status: this.statusFilter() || null
    }).subscribe({
      next: (blob) => {
        this.isExporting.set(false);
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `cobrancas-plataforma-${this.startDate()}-a-${this.endDate()}.csv`;
        link.click();
        URL.revokeObjectURL(url);
      },
      error: () => this.isExporting.set(false)
    });
  }
  loadSummary() {
    this.summaryError.set(false);
    this.financeService.getSummary(this.startDate(), this.endDate()).subscribe({
      next: (summary) => this.summary.set(summary),
      error: () => {
        this.summary.set(null);
        this.summaryError.set(true);
      }
    });
  }
  loadCharges(page, append) {
    if (append) {
      this.isLoadingMore.set(true);
    } else {
      this.isLoading.set(true);
    }
    this.loadError.set(null);
    this.extratoService.getCharges({
      startDate: this.startDate(),
      endDate: this.endDate(),
      status: this.statusFilter() || null,
      page,
      size: PAGE_SIZE
    }).subscribe({
      next: (result) => {
        this.charges.update((current) => append ? [...current, ...result.content] : result.content);
        this.page.set(result.page);
        this.hasMore.set(!result.last);
        this.isLoading.set(false);
        this.isLoadingMore.set(false);
      },
      error: () => {
        this.loadError.set("N\xE3o foi poss\xEDvel carregar as cobran\xE7as do per\xEDodo selecionado.");
        this.isLoading.set(false);
        this.isLoadingMore.set(false);
      }
    });
  }
  daysAgo(days) {
    const date = /* @__PURE__ */ new Date();
    date.setDate(date.getDate() - days);
    return date;
  }
  toIsoDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  static \u0275fac = function CobrancasPlataformaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CobrancasPlataformaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CobrancasPlataformaComponent, selectors: [["app-admin-cobrancas-plataforma"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 38, vars: 11, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "card", "platform-filters"], [1, "platform-field"], ["type", "date", 3, "change", "value", "max"], ["type", "date", 3, "change", "value", "min"], ["type", "button", "appRipple", "", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["aria-hidden", "true", 1, "material-icons"], [1, "card"], ["role", "alert", 1, "form-alert", "form-alert--error"], [1, "field__hint"], [1, "platform-table-head"], [1, "platform-table-head__title"], [1, "platform-table-head__actions"], [3, "change", "value"], [3, "value"], [1, "stat-grid"], [1, "stat-card"], ["aria-hidden", "true", 1, "material-icons", "stat-card__icon"], [1, "stat-card__label"], [1, "stat-card__value"], [1, "platform-chart"], ["primaryLabel", "Taxas geradas", 3, "points", "height"], [1, "platform-table-wrapper"], [1, "platform-table"], [1, "platform-table__number"], [1, "platform-load-more"], [1, "platform-status"], ["target", "_blank", "rel", "noopener", 3, "href"]], template: function CobrancasPlataformaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Cobran\xE7as da plataforma");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, " Taxas da Comanda \xDAnica geradas pelos estabelecimentos e cobran\xE7as na Asaas (mensalidades e taxas semanais). ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3)(6, "label", 4)(7, "span");
      \u0275\u0275text(8, "De");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "input", 5);
      \u0275\u0275listener("change", function CobrancasPlataformaComponent_Template_input_change_9_listener($event) {
        return ctx.onStartDateChange($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "label", 4)(11, "span");
      \u0275\u0275text(12, "At\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 6);
      \u0275\u0275listener("change", function CobrancasPlataformaComponent_Template_input_change_13_listener($event) {
        return ctx.onEndDateChange($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "button", 7);
      \u0275\u0275listener("click", function CobrancasPlataformaComponent_Template_button_click_14_listener() {
        return ctx.reload();
      });
      \u0275\u0275elementStart(15, "span", 8);
      \u0275\u0275text(16, "refresh");
      \u0275\u0275elementEnd();
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 9);
      \u0275\u0275template(19, CobrancasPlataformaComponent_Conditional_19_Template, 31, 6)(20, CobrancasPlataformaComponent_Conditional_20_Template, 4, 0, "div", 10)(21, CobrancasPlataformaComponent_Conditional_21_Template, 2, 0, "p", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 9)(23, "div", 12)(24, "h2", 13);
      \u0275\u0275text(25, "Cobran\xE7as na Asaas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 14)(27, "select", 15);
      \u0275\u0275listener("change", function CobrancasPlataformaComponent_Template_select_change_27_listener($event) {
        return ctx.onStatusFilterChange($event.target.value);
      });
      \u0275\u0275repeaterCreate(28, CobrancasPlataformaComponent_For_29_Template, 2, 2, "option", 16, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "button", 7);
      \u0275\u0275listener("click", function CobrancasPlataformaComponent_Template_button_click_30_listener() {
        return ctx.exportCsv();
      });
      \u0275\u0275elementStart(31, "span", 8);
      \u0275\u0275text(32, "download");
      \u0275\u0275elementEnd();
      \u0275\u0275text(33);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(34, CobrancasPlataformaComponent_Conditional_34_Template, 4, 1, "div", 10)(35, CobrancasPlataformaComponent_Conditional_35_Template, 2, 0, "p", 11)(36, CobrancasPlataformaComponent_Conditional_36_Template, 2, 0, "p", 11)(37, CobrancasPlataformaComponent_Conditional_37_Template, 25, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_6_0;
      \u0275\u0275advance(9);
      \u0275\u0275property("value", ctx.startDate())("max", ctx.endDate());
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.endDate())("min", ctx.startDate());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isLoading());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isLoading() ? "Atualizando\u2026" : "Atualizar", " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_6_0 = ctx.summary()) ? 19 : ctx.summaryError() ? 20 : 21, tmp_6_0);
      \u0275\u0275advance(8);
      \u0275\u0275property("value", ctx.statusFilter());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.statusOptions);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isExporting());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isExporting() ? "Exportando\u2026" : "Exportar CSV", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loadError() ? 34 : ctx.isLoading() ? 35 : ctx.charges().length === 0 ? 36 : 37);
    }
  }, dependencies: [LineChartComponent, RippleDirective], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  color: var(--color-text-muted);\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n.card[_ngcontent-%COMP%]    + .card[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.platform-filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-end;\n  gap: 12px;\n}\n.platform-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.platform-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border-strong);\n  background: var(--color-bg);\n  color: var(--color-text);\n}\n.stat-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));\n  gap: 12px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: 16px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md, 12px);\n  background: var(--color-bg-elevated);\n}\n.stat-card__icon[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n.stat-card__label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.stat-card__value[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n}\n.platform-chart[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.platform-table-head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.platform-table-head__title[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n  font-weight: 600;\n}\n.platform-table-head__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.platform-table-head__actions[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border-strong);\n  background: var(--color-bg);\n  color: var(--color-text);\n}\n.platform-table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.platform-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.platform-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.platform-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  text-align: left;\n  border-bottom: 1px solid var(--color-border);\n  white-space: nowrap;\n}\n.platform-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  color: var(--color-text-muted);\n}\n.platform-table[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n.platform-table__number[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n.platform-status[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: var(--radius-full);\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: var(--color-success-bg, rgba(34, 197, 94, 0.14));\n  color: var(--color-success, #22c55e);\n}\n.platform-status--pending[_ngcontent-%COMP%] {\n  background: rgba(234, 179, 8, 0.14);\n  color: #eab308;\n}\n.platform-load-more[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=cobrancas-plataforma.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CobrancasPlataformaComponent, { className: "CobrancasPlataformaComponent", filePath: "src\\app\\features\\admin\\pages\\cobrancas-plataforma\\cobrancas-plataforma.component.ts", lineNumber: 28 });
})();
export {
  CobrancasPlataformaComponent
};
//# sourceMappingURL=chunk-SZS4KJ6U.js.map
