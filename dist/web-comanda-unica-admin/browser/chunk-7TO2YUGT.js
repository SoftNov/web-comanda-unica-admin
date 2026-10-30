import {
  PlatformFinanceService,
  SITUATION_LABELS,
  situationTone
} from "./chunk-QFOBMFTQ.js";
import {
  RippleDirective
} from "./chunk-ZBOLJN4C.js";
import {
  brDateTimeFormat,
  parseApiDate
} from "./chunk-MQ3P2GIM.js";
import "./chunk-IKIQHSDP.js";
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
} from "./chunk-MRKXMG4P.js";

// src/app/features/admin/pages/relatorio-estabelecimentos/relatorio-estabelecimentos.component.ts
var _forTrack0 = ($index, $item) => $item.days;
var _forTrack1 = ($index, $item) => $item.value;
var _forTrack2 = ($index, $item) => $item.companyId;
function RelatorioEstabelecimentosComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function RelatorioEstabelecimentosComponent_For_8_Template_button_click_0_listener() {
      const preset_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyPreset(preset_r2.days));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const preset_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("report-filters__preset--active", ctx_r2.activePresetDays() === preset_r2.days);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", preset_r2.label, " ");
  }
}
function RelatorioEstabelecimentosComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    \u0275\u0275property("value", option_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r4.label);
  }
}
function RelatorioEstabelecimentosComponent_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 15);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.loadError(), " ");
  }
}
function RelatorioEstabelecimentosComponent_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1, "Carregando relat\xF3rio\u2026");
    \u0275\u0275elementEnd();
  }
}
function RelatorioEstabelecimentosComponent_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1, "Nenhum estabelecimento encontrado com esses filtros.");
    \u0275\u0275elementEnd();
  }
}
function RelatorioEstabelecimentosComponent_Conditional_83_For_53_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "n\xE3o renova");
    \u0275\u0275elementEnd();
  }
}
function RelatorioEstabelecimentosComponent_Conditional_83_For_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "span", 35);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275template(13, RelatorioEstabelecimentosComponent_Conditional_83_For_53_Conditional_13_Template, 2, 0, "span", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 31);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 31);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 31);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 31);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 31);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 31);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r6.tradeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", row_r6.cnpj || "sem CNPJ", " \xB7 desde ", ctx_r2.formatDate(row_r6.createdAt), "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("report-status--warn", ctx_r2.situationTone(row_r6.situation) === "warn")("report-status--off", ctx_r2.situationTone(row_r6.situation) === "off");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.situationLabels[row_r6.situation], " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.planLabel(row_r6));
    \u0275\u0275advance();
    \u0275\u0275classProp("report-table__overdue", ctx_r2.isOverdue(row_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(row_r6.periodEnd), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r6.cancelAtPeriodEnd ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.tableCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.comandaCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDecimal(row_r6.averageCustomersPerDay));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(row_r6.revenue));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(row_r6.averageTicket));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(row_r6.pendingFeeAmount));
  }
}
function RelatorioEstabelecimentosComponent_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "table", 28)(2, "thead")(3, "tr")(4, "th")(5, "button", 29);
    \u0275\u0275listener("click", function RelatorioEstabelecimentosComponent_Conditional_83_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sortBy("tradeName"));
    });
    \u0275\u0275text(6, "Estabelecimento ");
    \u0275\u0275elementStart(7, "span", 30);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "th")(10, "button", 29);
    \u0275\u0275listener("click", function RelatorioEstabelecimentosComponent_Conditional_83_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sortBy("situation"));
    });
    \u0275\u0275text(11, "Situa\xE7\xE3o ");
    \u0275\u0275elementStart(12, "span", 30);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Plano");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th")(17, "button", 29);
    \u0275\u0275listener("click", function RelatorioEstabelecimentosComponent_Conditional_83_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sortBy("periodEnd"));
    });
    \u0275\u0275text(18, "Vencimento ");
    \u0275\u0275elementStart(19, "span", 30);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "th", 31)(22, "button", 29);
    \u0275\u0275listener("click", function RelatorioEstabelecimentosComponent_Conditional_83_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sortBy("tableCount"));
    });
    \u0275\u0275text(23, "Mesas ");
    \u0275\u0275elementStart(24, "span", 30);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "th", 31)(27, "button", 29);
    \u0275\u0275listener("click", function RelatorioEstabelecimentosComponent_Conditional_83_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sortBy("comandaCount"));
    });
    \u0275\u0275text(28, "Comandas ");
    \u0275\u0275elementStart(29, "span", 30);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "th", 31)(32, "button", 29);
    \u0275\u0275listener("click", function RelatorioEstabelecimentosComponent_Conditional_83_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sortBy("averageCustomersPerDay"));
    });
    \u0275\u0275text(33, "Clientes/dia ");
    \u0275\u0275elementStart(34, "span", 30);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "th", 31)(37, "button", 29);
    \u0275\u0275listener("click", function RelatorioEstabelecimentosComponent_Conditional_83_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sortBy("revenue"));
    });
    \u0275\u0275text(38, "Faturamento ");
    \u0275\u0275elementStart(39, "span", 30);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "th", 31)(42, "button", 29);
    \u0275\u0275listener("click", function RelatorioEstabelecimentosComponent_Conditional_83_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sortBy("averageTicket"));
    });
    \u0275\u0275text(43, "Ticket m\xE9dio ");
    \u0275\u0275elementStart(44, "span", 30);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "th", 31)(47, "button", 29);
    \u0275\u0275listener("click", function RelatorioEstabelecimentosComponent_Conditional_83_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sortBy("pendingFeeAmount"));
    });
    \u0275\u0275text(48, "Taxas pendentes ");
    \u0275\u0275elementStart(49, "span", 30);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(51, "tbody");
    \u0275\u0275repeaterCreate(52, RelatorioEstabelecimentosComponent_Conditional_83_For_53_Template, 26, 19, "tr", null, _forTrack2);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "p", 32);
    \u0275\u0275text(55, " Clientes = comandas abertas no per\xEDodo (cada comanda \xE9 um atendimento). Plano, vencimento, mesas e taxas pendentes refletem a situa\xE7\xE3o atual. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.sortIcon("tradeName"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.sortIcon("situation"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.sortIcon("periodEnd"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.sortIcon("tableCount"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.sortIcon("comandaCount"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.sortIcon("averageCustomersPerDay"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.sortIcon("revenue"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.sortIcon("averageTicket"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.sortIcon("pendingFeeAmount"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.rows());
  }
}
var SITUATION_FILTERS = [
  { value: "ALL", label: "Todos" },
  { value: "OPERATING", label: "Ativos (pagos + teste)" },
  { value: "ACTIVE", label: "Assinatura ativa" },
  { value: "TRIAL", label: "Em teste" },
  { value: "PAST_DUE", label: "Em atraso" },
  { value: "INACTIVE", label: "Inativos" }
];
var OPERATING = ["ACTIVE", "TRIAL", "PAST_DUE"];
var PRESETS = [
  { label: "7 dias", days: 7 },
  { label: "30 dias", days: 30 },
  { label: "90 dias", days: 90 }
];
var RelatorioEstabelecimentosComponent = class _RelatorioEstabelecimentosComponent {
  financeService = inject(PlatformFinanceService);
  currencyFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
  decimalFormatter = new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 1 });
  dateFormatter = brDateTimeFormat({ day: "2-digit", month: "2-digit", year: "numeric" });
  presets = PRESETS;
  situationFilters = SITUATION_FILTERS;
  situationLabels = SITUATION_LABELS;
  situationTone = situationTone;
  startDate = signal(this.toIsoDate(this.daysAgo(29)));
  endDate = signal(this.toIsoDate(/* @__PURE__ */ new Date()));
  activePresetDays = signal(30);
  search = signal("");
  situationFilter = signal("ALL");
  sortKey = signal("revenue");
  sortDesc = signal(true);
  report = signal(null);
  isLoading = signal(false);
  loadError = signal(null);
  rows = computed(() => {
    const term = this.search().trim().toLocaleLowerCase("pt-BR");
    const digits = term.replace(/\D/g, "");
    const filter = this.situationFilter();
    const key = this.sortKey();
    const direction = this.sortDesc() ? -1 : 1;
    return (this.report()?.companies ?? []).filter((row) => this.matchesSituation(row.situation, filter)).filter((row) => !term || row.tradeName?.toLocaleLowerCase("pt-BR").includes(term) || !!digits && (row.cnpj ?? "").replace(/\D/g, "").includes(digits)).sort((a, b) => this.compare(a, b, key) * direction);
  });
  totals = computed(() => {
    const rows = this.rows();
    const revenue = rows.reduce((sum, row) => sum + row.revenue, 0);
    const comandas = rows.reduce((sum, row) => sum + row.comandaCount, 0);
    return {
      count: rows.length,
      operating: rows.filter((row) => OPERATING.includes(row.situation)).length,
      trial: rows.filter((row) => row.situation === "TRIAL").length,
      tables: rows.reduce((sum, row) => sum + row.tableCount, 0),
      comandas,
      customersPerDay: rows.reduce((sum, row) => sum + row.averageCustomersPerDay, 0),
      revenue,
      averageTicket: comandas > 0 ? revenue / comandas : 0,
      pendingFees: rows.reduce((sum, row) => sum + row.pendingFeeAmount, 0)
    };
  });
  constructor() {
    this.load();
  }
  applyPreset(days) {
    this.activePresetDays.set(days);
    this.startDate.set(this.toIsoDate(this.daysAgo(days - 1)));
    this.endDate.set(this.toIsoDate(/* @__PURE__ */ new Date()));
    this.load();
  }
  onStartDateChange(value) {
    this.activePresetDays.set(null);
    this.startDate.set(value);
    this.load();
  }
  onEndDateChange(value) {
    this.activePresetDays.set(null);
    this.endDate.set(value);
    this.load();
  }
  onSituationFilterChange(value) {
    this.situationFilter.set(value);
  }
  sortBy(key) {
    if (this.sortKey() === key) {
      this.sortDesc.update((desc) => !desc);
    } else {
      this.sortKey.set(key);
      this.sortDesc.set(key !== "tradeName" && key !== "periodEnd");
    }
  }
  sortIcon(key) {
    if (this.sortKey() !== key)
      return "";
    return this.sortDesc() ? "arrow_downward" : "arrow_upward";
  }
  load() {
    this.isLoading.set(true);
    this.loadError.set(null);
    this.financeService.getCompanyReport(this.startDate(), this.endDate()).subscribe({
      next: (report) => {
        this.report.set(report);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
        this.loadError.set("N\xE3o foi poss\xEDvel carregar o relat\xF3rio do per\xEDodo selecionado.");
      }
    });
  }
  formatCurrency(value) {
    return value != null ? this.currencyFormatter.format(value) : "\u2014";
  }
  formatDecimal(value) {
    return value != null ? this.decimalFormatter.format(value) : "\u2014";
  }
  formatDate(value) {
    const date = parseApiDate(value ?? null);
    return date ? this.dateFormatter.format(date) : "\u2014";
  }
  isOverdue(row) {
    const date = parseApiDate(row.periodEnd);
    return !!date && date.getTime() < Date.now();
  }
  planLabel(row) {
    if (row.courtesy)
      return "Teste gr\xE1tis";
    const amount = row.monthlyAmount != null ? `${this.formatCurrency(row.monthlyAmount)}/m\xEAs` : null;
    if (row.planTableLimit != null) {
      return amount ? `At\xE9 ${row.planTableLimit} mesas \xB7 ${amount}` : `At\xE9 ${row.planTableLimit} mesas`;
    }
    return amount ?? "\u2014";
  }
  exportCsv() {
    const header = [
      "Estabelecimento",
      "CNPJ",
      "Cadastro",
      "Situa\xE7\xE3o",
      "Plano",
      "Vencimento",
      "N\xE3o renova",
      "Mesas",
      "Comandas no per\xEDodo",
      "M\xE9dia de clientes/dia",
      "Faturamento",
      "Ticket m\xE9dio",
      "Taxas pendentes"
    ];
    const number = (value) => value.toFixed(2).replace(".", ",");
    const lines = this.rows().map((row) => [
      row.tradeName,
      row.cnpj ?? "",
      this.formatDate(row.createdAt),
      SITUATION_LABELS[row.situation],
      this.planLabel(row),
      this.formatDate(row.periodEnd),
      row.cancelAtPeriodEnd ? "Sim" : "N\xE3o",
      String(row.tableCount),
      String(row.comandaCount),
      number(row.averageCustomersPerDay),
      number(row.revenue),
      number(row.averageTicket),
      number(row.pendingFeeAmount)
    ]);
    const csv = [header, ...lines].map((cols) => cols.map((col) => this.csvField(col)).join(";")).join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `relatorio-estabelecimentos-${this.startDate()}-a-${this.endDate()}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }
  matchesSituation(situation, filter) {
    switch (filter) {
      case "ALL":
        return true;
      case "OPERATING":
        return OPERATING.includes(situation);
      case "INACTIVE":
        return !OPERATING.includes(situation);
      default:
        return situation === filter;
    }
  }
  compare(a, b, key) {
    switch (key) {
      case "tradeName":
        return (a.tradeName ?? "").localeCompare(b.tradeName ?? "", "pt-BR");
      case "situation":
        return SITUATION_LABELS[a.situation].localeCompare(SITUATION_LABELS[b.situation], "pt-BR");
      case "periodEnd":
        return (parseApiDate(a.periodEnd)?.getTime() ?? Infinity) - (parseApiDate(b.periodEnd)?.getTime() ?? Infinity);
      default:
        return a[key] - b[key];
    }
  }
  csvField(value) {
    const escaped = value.replace(/"/g, '""');
    return /[;"\n]/.test(escaped) ? `"${escaped}"` : escaped;
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
  static \u0275fac = function RelatorioEstabelecimentosComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RelatorioEstabelecimentosComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RelatorioEstabelecimentosComponent, selectors: [["app-admin-relatorio-estabelecimentos"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 84, vars: 19, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "card", "report-filters"], [1, "report-filters__presets"], ["type", "button", 1, "report-filters__preset", 3, "report-filters__preset--active"], [1, "report-field"], ["type", "date", 3, "change", "value", "max"], ["type", "date", 3, "change", "value", "min"], [3, "change", "value"], [3, "value"], [1, "report-field", "report-field--grow"], ["type", "search", "placeholder", "Nome ou CNPJ", 3, "input", "value"], [1, "report-filters__actions"], ["type", "button", "appRipple", "", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["aria-hidden", "true", 1, "material-icons"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", 3, "click", "disabled"], [1, "card"], [1, "stat-grid"], [1, "stat-card"], ["aria-hidden", "true", 1, "material-icons", "stat-card__icon"], [1, "stat-card__label"], [1, "stat-card__value"], [1, "stat-card__detail"], ["role", "alert", 1, "form-alert", "form-alert--error"], [1, "field__hint"], ["type", "button", 1, "report-filters__preset", 3, "click"], [1, "report-table-wrapper"], [1, "report-table"], ["type", "button", 3, "click"], [1, "material-icons"], [1, "report-table__number"], [1, "field__hint", "report-note"], [1, "report-table__name"], [1, "report-table__sub"], [1, "report-status"]], template: function RelatorioEstabelecimentosComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Relat\xF3rio de estabelecimentos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, " Situa\xE7\xE3o da assinatura, plano, vencimento, mesas, m\xE9dia de clientes e faturamento de cada estabelecimento. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3)(6, "div", 4);
      \u0275\u0275repeaterCreate(7, RelatorioEstabelecimentosComponent_For_8_Template, 2, 3, "button", 5, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "label", 6)(10, "span");
      \u0275\u0275text(11, "De");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "input", 7);
      \u0275\u0275listener("change", function RelatorioEstabelecimentosComponent_Template_input_change_12_listener($event) {
        return ctx.onStartDateChange($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "label", 6)(14, "span");
      \u0275\u0275text(15, "At\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "input", 8);
      \u0275\u0275listener("change", function RelatorioEstabelecimentosComponent_Template_input_change_16_listener($event) {
        return ctx.onEndDateChange($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "label", 6)(18, "span");
      \u0275\u0275text(19, "Situa\xE7\xE3o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "select", 9);
      \u0275\u0275listener("change", function RelatorioEstabelecimentosComponent_Template_select_change_20_listener($event) {
        return ctx.onSituationFilterChange($event.target.value);
      });
      \u0275\u0275repeaterCreate(21, RelatorioEstabelecimentosComponent_For_22_Template, 2, 2, "option", 10, _forTrack1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "label", 11)(24, "span");
      \u0275\u0275text(25, "Buscar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "input", 12);
      \u0275\u0275listener("input", function RelatorioEstabelecimentosComponent_Template_input_input_26_listener($event) {
        return ctx.search.set($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 13)(28, "button", 14);
      \u0275\u0275listener("click", function RelatorioEstabelecimentosComponent_Template_button_click_28_listener() {
        return ctx.load();
      });
      \u0275\u0275elementStart(29, "span", 15);
      \u0275\u0275text(30, "refresh");
      \u0275\u0275elementEnd();
      \u0275\u0275text(31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "button", 16);
      \u0275\u0275listener("click", function RelatorioEstabelecimentosComponent_Template_button_click_32_listener() {
        return ctx.exportCsv();
      });
      \u0275\u0275elementStart(33, "span", 15);
      \u0275\u0275text(34, "download");
      \u0275\u0275elementEnd();
      \u0275\u0275text(35, " Exportar CSV ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div", 17)(37, "div", 18)(38, "div", 19)(39, "span", 20);
      \u0275\u0275text(40, "storefront");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "span", 21);
      \u0275\u0275text(42, "Estabelecimentos listados");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "span", 22);
      \u0275\u0275text(44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "span", 23);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 19)(48, "span", 20);
      \u0275\u0275text(49, "table_bar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "span", 21);
      \u0275\u0275text(51, "Mesas cadastradas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "span", 22);
      \u0275\u0275text(53);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 19)(55, "span", 20);
      \u0275\u0275text(56, "groups");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "span", 21);
      \u0275\u0275text(58, "M\xE9dia de clientes por dia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "span", 22);
      \u0275\u0275text(60);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "span", 23);
      \u0275\u0275text(62);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 19)(64, "span", 20);
      \u0275\u0275text(65, "payments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "span", 21);
      \u0275\u0275text(67, "Faturamento no per\xEDodo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "span", 22);
      \u0275\u0275text(69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "span", 23);
      \u0275\u0275text(71);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 19)(73, "span", 20);
      \u0275\u0275text(74, "hourglass_top");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "span", 21);
      \u0275\u0275text(76, "Taxas pendentes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "span", 22);
      \u0275\u0275text(78);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(79, "div", 17);
      \u0275\u0275template(80, RelatorioEstabelecimentosComponent_Conditional_80_Template, 4, 1, "div", 24)(81, RelatorioEstabelecimentosComponent_Conditional_81_Template, 2, 0, "p", 25)(82, RelatorioEstabelecimentosComponent_Conditional_82_Template, 2, 0, "p", 25)(83, RelatorioEstabelecimentosComponent_Conditional_83_Template, 56, 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.presets);
      \u0275\u0275advance(5);
      \u0275\u0275property("value", ctx.startDate())("max", ctx.endDate());
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.endDate())("min", ctx.startDate());
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.situationFilter());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.situationFilters);
      \u0275\u0275advance(5);
      \u0275\u0275property("value", ctx.search());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isLoading());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isLoading() ? "Atualizando\u2026" : "Atualizar", " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.rows().length === 0);
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(ctx.totals().count);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", ctx.totals().operating, " ativos \xB7 ", ctx.totals().trial, " em teste");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.totals().tables);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.formatDecimal(ctx.totals().customersPerDay));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.totals().comandas, " comandas no per\xEDodo");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.formatCurrency(ctx.totals().revenue));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("ticket m\xE9dio ", ctx.formatCurrency(ctx.totals().averageTicket), "");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.formatCurrency(ctx.totals().pendingFees));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loadError() ? 80 : ctx.isLoading() && !ctx.report() ? 81 : ctx.rows().length === 0 ? 82 : 83);
    }
  }, dependencies: [RippleDirective], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  color: var(--color-text-muted);\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n.card[_ngcontent-%COMP%]    + .card[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.report-filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-end;\n  gap: 12px;\n}\n.report-filters__presets[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.report-filters__preset[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border);\n  background: transparent;\n  color: var(--color-text-muted);\n  font-size: 0.8125rem;\n  cursor: pointer;\n  transition:\n    background var(--transition-fast),\n    color var(--transition-fast),\n    border-color var(--transition-fast);\n}\n.report-filters__preset[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.report-filters__preset--active[_ngcontent-%COMP%] {\n  border-color: var(--color-accent);\n  color: var(--color-text);\n  background: rgba(255, 255, 255, 0.08);\n}\n.report-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.report-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.report-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border-strong);\n  background: var(--color-bg);\n  color: var(--color-text);\n  color-scheme: dark;\n}\n.report-field--grow[_ngcontent-%COMP%] {\n  flex: 1 1 200px;\n}\n.report-filters__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.report-filters__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.stat-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));\n  gap: 12px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: 16px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md, 12px);\n  background: var(--color-bg-elevated);\n}\n.stat-card__icon[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n.stat-card__label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.stat-card__value[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n}\n.stat-card__detail[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.report-table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.report-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.report-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.report-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  text-align: left;\n  border-bottom: 1px solid var(--color-border);\n  white-space: nowrap;\n  vertical-align: top;\n}\n.report-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  color: var(--color-text-muted);\n}\n.report-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  padding: 0;\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  text-transform: inherit;\n  letter-spacing: inherit;\n  cursor: pointer;\n}\n.report-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: var(--color-text);\n}\n.report-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.report-table__number[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n.report-table__number[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.report-table__name[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.report-table__sub[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.report-table__overdue[_ngcontent-%COMP%] {\n  color: #f87171;\n}\n.report-status[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: var(--radius-full);\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: var(--color-success-bg, rgba(34, 197, 94, 0.14));\n  color: var(--color-success, #22c55e);\n}\n.report-status--warn[_ngcontent-%COMP%] {\n  background: rgba(234, 179, 8, 0.14);\n  color: #eab308;\n}\n.report-status--off[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.14);\n  color: var(--color-text-muted);\n}\n.report-note[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n/*# sourceMappingURL=relatorio-estabelecimentos.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RelatorioEstabelecimentosComponent, { className: "RelatorioEstabelecimentosComponent", filePath: "src\\app\\features\\admin\\pages\\relatorio-estabelecimentos\\relatorio-estabelecimentos.component.ts", lineNumber: 53 });
})();
export {
  RelatorioEstabelecimentosComponent
};
//# sourceMappingURL=chunk-7TO2YUGT.js.map
