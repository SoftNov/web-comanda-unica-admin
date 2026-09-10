import {
  FormsModule
} from "./chunk-3P5ASN3M.js";
import {
  RippleDirective
} from "./chunk-O6A3XEZD.js";
import {
  environment
} from "./chunk-3BRF5UDA.js";
import {
  HttpClient,
  __spreadProps,
  __spreadValues,
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
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-TY3XV2JK.js";

// src/app/shared/services/platform-subscription-pricing.service.ts
var PlatformSubscriptionPricingService = class _PlatformSubscriptionPricingService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiBaseUrl}/api/v1/platform/subscription-pricing`;
  listTiers() {
    return this.http.get(`${this.baseUrl}/tiers`);
  }
  replaceTiers(tiers) {
    return this.http.put(`${this.baseUrl}/tiers`, { tiers });
  }
  listCompanies(search, page, size) {
    const params = { page: String(page), size: String(size) };
    if (search) {
      params["search"] = search;
    }
    return this.http.get(`${this.baseUrl}/companies`, { params });
  }
  upsertOverride(companyId, monthlyAmount, note) {
    return this.http.put(`${this.baseUrl}/companies/${companyId}`, { monthlyAmount, note });
  }
  removeOverride(companyId) {
    return this.http.delete(`${this.baseUrl}/companies/${companyId}`);
  }
  static \u0275fac = function PlatformSubscriptionPricingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlatformSubscriptionPricingService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PlatformSubscriptionPricingService, factory: _PlatformSubscriptionPricingService.\u0275fac, providedIn: "root" });
};

// src/app/features/admin/pages/settings/subscription-pricing/subscription-pricing.component.ts
var _forTrack0 = ($index, $item) => $item.companyId;
function SubscriptionPricingComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1, "Carregando\u2026");
    \u0275\u0275elementEnd();
  }
}
function SubscriptionPricingComponent_Conditional_11_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "input", 16);
    \u0275\u0275listener("input", function SubscriptionPricingComponent_Conditional_11_For_10_Template_input_input_1_listener($event) {
      const $index_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateTier($index_r3, "upToTables", $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 17);
    \u0275\u0275listener("input", function SubscriptionPricingComponent_Conditional_11_For_10_Template_input_input_2_listener($event) {
      const $index_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateTier($index_r3, "monthlyAmount", $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 19);
    \u0275\u0275listener("click", function SubscriptionPricingComponent_Conditional_11_For_10_Template_button_click_5_listener() {
      const $index_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeTier($index_r3));
    });
    \u0275\u0275elementStart(6, "span", 12);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_12_0;
    const tier_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("value", (tmp_11_0 = tier_r5.upToTables) !== null && tmp_11_0 !== void 0 ? tmp_11_0 : "");
    \u0275\u0275advance();
    \u0275\u0275property("value", (tmp_12_0 = tier_r5.monthlyAmount) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.annualOf(tier_r5.monthlyAmount));
  }
}
function SubscriptionPricingComponent_Conditional_11_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r6 = ctx;
    \u0275\u0275classProp("form-alert--error", msg_r6.type === "error")("form-alert--success", msg_r6.type === "ok");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r6.type === "ok" ? "check_circle" : "error_outline");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", msg_r6.text, " ");
  }
}
function SubscriptionPricingComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "span");
    \u0275\u0275text(3, "At\xE9 (mesas)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Valor mensal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "\u2248 por ano");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, SubscriptionPricingComponent_Conditional_11_For_10_Template, 8, 3, "div", 11, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 8);
    \u0275\u0275listener("click", function SubscriptionPricingComponent_Conditional_11_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addTier());
    });
    \u0275\u0275elementStart(12, "span", 12);
    \u0275\u0275text(13, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Adicionar faixa ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, SubscriptionPricingComponent_Conditional_11_Conditional_15_Template, 4, 6, "div", 13);
    \u0275\u0275elementStart(16, "div", 14)(17, "button", 15);
    \u0275\u0275listener("click", function SubscriptionPricingComponent_Conditional_11_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveTiers());
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r3.tiers());
    \u0275\u0275advance(6);
    \u0275\u0275conditional((tmp_2_0 = ctx_r3.tiersMessage()) ? 15 : -1, tmp_2_0);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.isSavingTiers());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.isSavingTiers() ? "Salvando\u2026" : "Salvar faixas", " ");
  }
}
function SubscriptionPricingComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1, "Carregando\u2026");
    \u0275\u0275elementEnd();
  }
}
function SubscriptionPricingComponent_Conditional_22_For_15_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const company_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(company_r8.overrideNote);
  }
}
function SubscriptionPricingComponent_Conditional_22_For_15_Conditional_18_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function SubscriptionPricingComponent_Conditional_22_For_15_Conditional_18_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const company_r8 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeOverride(company_r8.companyId));
    });
    \u0275\u0275text(1, "Remover valor negociado");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", ctx_r3.isSavingOverride());
  }
}
function SubscriptionPricingComponent_Conditional_22_For_15_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 28)(1, "td", 29)(2, "div", 30)(3, "label", 31);
    \u0275\u0275text(4, "Valor mensal negociado ");
    \u0275\u0275elementStart(5, "input", 17);
    \u0275\u0275listener("input", function SubscriptionPricingComponent_Conditional_22_For_15_Conditional_18_Template_input_input_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.overrideAmount.set($event.target.value === "" ? null : +$event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "label", 31);
    \u0275\u0275text(7, "Observa\xE7\xE3o ");
    \u0275\u0275elementStart(8, "input", 32);
    \u0275\u0275listener("input", function SubscriptionPricingComponent_Conditional_22_For_15_Conditional_18_Template_input_input_8_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.overrideNote.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 33)(10, "button", 34);
    \u0275\u0275listener("click", function SubscriptionPricingComponent_Conditional_22_For_15_Conditional_18_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r9);
      const company_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.saveOverride(company_r8.companyId));
    });
    \u0275\u0275text(11, "Salvar");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, SubscriptionPricingComponent_Conditional_22_For_15_Conditional_18_Conditional_12_Template, 2, 1, "button", 35);
    \u0275\u0275elementStart(13, "button", 8);
    \u0275\u0275listener("click", function SubscriptionPricingComponent_Conditional_22_For_15_Conditional_18_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.cancelEdit());
    });
    \u0275\u0275text(14, "Cancelar");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const company_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", (tmp_12_0 = ctx_r3.overrideAmount()) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : "");
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r3.overrideNote());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.isSavingOverride());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(company_r8.customized ? 12 : -1);
  }
}
function SubscriptionPricingComponent_Conditional_22_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 25);
    \u0275\u0275text(8, "/m\xEAs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 25);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "span", 26);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, SubscriptionPricingComponent_Conditional_22_For_15_Conditional_14_Template, 2, 1, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 23)(16, "button", 8);
    \u0275\u0275listener("click", function SubscriptionPricingComponent_Conditional_22_For_15_Template_button_click_16_listener() {
      const company_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.startEdit(company_r8));
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(18, SubscriptionPricingComponent_Conditional_22_For_15_Conditional_18_Template, 15, 4, "tr", 28);
  }
  if (rf & 2) {
    const company_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(company_r8.companyName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(company_r8.tableCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.currency(company_r8.monthlyAmount), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u2248 ", ctx_r3.currency(company_r8.annualAmount), "/ano");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge--warning", company_r8.source === "OVERRIDE");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", company_r8.source === "OVERRIDE" ? "Negociado" : company_r8.source === "TIER" ? "Faixa" : "Padr\xE3o", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(company_r8.overrideNote ? 14 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", company_r8.customized ? "Editar" : "Definir valor", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.editingCompanyId() === company_r8.companyId ? 18 : -1);
  }
}
function SubscriptionPricingComponent_Conditional_22_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 37);
    \u0275\u0275text(2, "Nenhum estabelecimento encontrado.");
    \u0275\u0275elementEnd()();
  }
}
function SubscriptionPricingComponent_Conditional_22_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "button", 36);
    \u0275\u0275listener("click", function SubscriptionPricingComponent_Conditional_22_Conditional_17_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.goToPage(-1));
    });
    \u0275\u0275text(2, "Anterior");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 36);
    \u0275\u0275listener("click", function SubscriptionPricingComponent_Conditional_22_Conditional_17_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.goToPage(1));
    });
    \u0275\u0275text(6, "Pr\xF3xima");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.page() === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("P\xE1gina ", ctx_r3.page() + 1, " de ", ctx_r3.totalPages(), "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.page() + 1 >= ctx_r3.totalPages());
  }
}
function SubscriptionPricingComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "table", 22)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Estabelecimento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Mesas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Valor mensal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Origem");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "th", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, SubscriptionPricingComponent_Conditional_22_For_15_Template, 19, 10, null, null, _forTrack0);
    \u0275\u0275template(16, SubscriptionPricingComponent_Conditional_22_Conditional_16_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(17, SubscriptionPricingComponent_Conditional_22_Conditional_17_Template, 7, 4, "div", 24);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r3.companies());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.companies().length === 0 ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.totalPages() > 1 ? 17 : -1);
  }
}
var SubscriptionPricingComponent = class _SubscriptionPricingComponent {
  pricingService = inject(PlatformSubscriptionPricingService);
  currencyFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
  // --- faixas ---------------------------------------------------------------
  tiers = signal([]);
  isLoadingTiers = signal(true);
  isSavingTiers = signal(false);
  tiersMessage = signal(null);
  // --- estabelecimentos ---------------------------------------------------
  companies = signal([]);
  isLoadingCompanies = signal(false);
  companySearch = signal("");
  page = signal(0);
  totalPages = signal(0);
  editingCompanyId = signal(null);
  overrideAmount = signal(null);
  overrideNote = signal("");
  isSavingOverride = signal(false);
  constructor() {
    this.loadTiers();
    this.loadCompanies();
  }
  currency(value) {
    return value != null ? this.currencyFormatter.format(value) : "\u2014";
  }
  annualOf(monthly) {
    return monthly != null ? this.currencyFormatter.format(monthly * 12) : "\u2014";
  }
  // --- faixas -----------------------------------------------------------------
  loadTiers() {
    this.isLoadingTiers.set(true);
    this.pricingService.listTiers().subscribe({
      next: (tiers) => {
        this.tiers.set(tiers.map((t) => ({ upToTables: t.upToTables, monthlyAmount: t.monthlyAmount })));
        this.isLoadingTiers.set(false);
      },
      error: () => {
        this.isLoadingTiers.set(false);
        this.tiersMessage.set({ type: "error", text: "N\xE3o foi poss\xEDvel carregar as faixas." });
      }
    });
  }
  addTier() {
    this.tiers.update((list) => [...list, { upToTables: null, monthlyAmount: null }]);
  }
  removeTier(index) {
    this.tiers.update((list) => list.filter((_, i) => i !== index));
  }
  updateTier(index, field, value) {
    const parsed = value === "" ? null : Number(value);
    this.tiers.update((list) => list.map((t, i) => i === index ? __spreadProps(__spreadValues({}, t), { [field]: parsed }) : t));
  }
  saveTiers() {
    const rows = this.tiers();
    if (rows.length === 0 || rows.some((t) => t.upToTables == null || t.monthlyAmount == null || t.upToTables <= 0 || t.monthlyAmount <= 0)) {
      this.tiersMessage.set({ type: "error", text: "Preencha todas as faixas com valores maiores que zero." });
      return;
    }
    this.isSavingTiers.set(true);
    this.tiersMessage.set(null);
    this.pricingService.replaceTiers(rows.map((t) => ({ upToTables: t.upToTables, monthlyAmount: t.monthlyAmount }))).subscribe({
      next: (saved) => {
        this.tiers.set(saved.map((t) => ({ upToTables: t.upToTables, monthlyAmount: t.monthlyAmount })));
        this.isSavingTiers.set(false);
        this.tiersMessage.set({ type: "ok", text: "Faixas salvas." });
        this.loadCompanies();
      },
      error: () => {
        this.isSavingTiers.set(false);
        this.tiersMessage.set({ type: "error", text: "N\xE3o foi poss\xEDvel salvar. Verifique se h\xE1 limites de mesas repetidos." });
      }
    });
  }
  // --- estabelecimentos ---------------------------------------------------
  onSearchInput(value) {
    this.companySearch.set(value);
  }
  search() {
    this.page.set(0);
    this.loadCompanies();
  }
  loadCompanies() {
    this.isLoadingCompanies.set(true);
    this.pricingService.listCompanies(this.companySearch(), this.page(), 20).subscribe({
      next: (res) => {
        this.companies.set(res.content);
        this.totalPages.set(res.totalPages);
        this.isLoadingCompanies.set(false);
      },
      error: () => this.isLoadingCompanies.set(false)
    });
  }
  goToPage(delta) {
    const next = this.page() + delta;
    if (next < 0 || next >= this.totalPages()) {
      return;
    }
    this.page.set(next);
    this.loadCompanies();
  }
  startEdit(company) {
    this.editingCompanyId.set(company.companyId);
    this.overrideAmount.set(company.customized ? company.monthlyAmount : null);
    this.overrideNote.set(company.overrideNote ?? "");
  }
  cancelEdit() {
    this.editingCompanyId.set(null);
  }
  saveOverride(companyId) {
    const amount = this.overrideAmount();
    if (amount == null || amount <= 0) {
      return;
    }
    this.isSavingOverride.set(true);
    this.pricingService.upsertOverride(companyId, amount, this.overrideNote() || null).subscribe({
      next: (updated) => {
        this.applyCompany(updated);
        this.isSavingOverride.set(false);
        this.editingCompanyId.set(null);
      },
      error: () => this.isSavingOverride.set(false)
    });
  }
  removeOverride(companyId) {
    this.isSavingOverride.set(true);
    this.pricingService.removeOverride(companyId).subscribe({
      next: (updated) => {
        this.applyCompany(updated);
        this.isSavingOverride.set(false);
        this.editingCompanyId.set(null);
      },
      error: () => this.isSavingOverride.set(false)
    });
  }
  applyCompany(updated) {
    this.companies.update((list) => list.map((c) => c.companyId === updated.companyId ? updated : c));
  }
  static \u0275fac = function SubscriptionPricingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SubscriptionPricingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscriptionPricingComponent, selectors: [["app-subscription-pricing"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 3, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "card", "section"], [1, "section__title"], [1, "field__hint"], [1, "company-search"], ["type", "text", "placeholder", "Buscar por nome", 1, "field__input", 3, "input", "keyup.enter", "value"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], [1, "tier-grid"], [1, "tier-grid__head"], [1, "tier-grid__row"], ["aria-hidden", "true", 1, "material-icons"], [1, "form-alert", 3, "form-alert--error", "form-alert--success"], [1, "section__actions"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", 3, "click", "disabled"], ["type", "number", "min", "1", 1, "field__input", 3, "input", "value"], ["type", "number", "min", "0", "step", "0.01", 1, "field__input", 3, "input", "value"], [1, "tier-grid__annual"], ["type", "button", "title", "Remover", 1, "icon-btn", "icon-btn--danger", 3, "click"], [1, "form-alert"], [1, "table-wrapper"], [1, "data-table"], [1, "data-table__actions-col"], [1, "pagination"], [1, "muted"], [1, "badge"], [1, "muted", "note"], [1, "edit-row"], ["colspan", "5"], [1, "edit-row__form"], [1, "field__label"], ["type", "text", 1, "field__input", 3, "input", "value"], [1, "edit-row__actions"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", "btn--sm", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "disabled"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click", "disabled"], ["colspan", "5", 1, "data-table__empty"]], template: function SubscriptionPricingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Precifica\xE7\xE3o da assinatura");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, " Faixas de pre\xE7o por quantidade de mesas e valores negociados por estabelecimento. A cobran\xE7a \xE9 mensal, com renova\xE7\xE3o autom\xE1tica. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3)(6, "h2", 4);
      \u0275\u0275text(7, "Faixas por quantidade de mesas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 5);
      \u0275\u0275text(9, " Um estabelecimento paga o valor da primeira faixa cujo limite de mesas seja maior ou igual ao n\xFAmero de mesas dele. Acima da maior faixa, usa a maior. ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, SubscriptionPricingComponent_Conditional_10_Template, 2, 0, "p", 5)(11, SubscriptionPricingComponent_Conditional_11_Template, 19, 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 3)(13, "h2", 4);
      \u0275\u0275text(14, "Valor por estabelecimento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 5);
      \u0275\u0275text(16, "Defina um valor mensal negociado \u2014 ele tem prioridade sobre as faixas.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 6)(18, "input", 7);
      \u0275\u0275listener("input", function SubscriptionPricingComponent_Template_input_input_18_listener($event) {
        return ctx.onSearchInput($event.target.value);
      })("keyup.enter", function SubscriptionPricingComponent_Template_input_keyup_enter_18_listener() {
        return ctx.search();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 8);
      \u0275\u0275listener("click", function SubscriptionPricingComponent_Template_button_click_19_listener() {
        return ctx.search();
      });
      \u0275\u0275text(20, "Buscar");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(21, SubscriptionPricingComponent_Conditional_21_Template, 2, 0, "p", 5)(22, SubscriptionPricingComponent_Conditional_22_Template, 18, 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.isLoadingTiers() ? 10 : 11);
      \u0275\u0275advance(8);
      \u0275\u0275property("value", ctx.companySearch());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isLoadingCompanies() ? 21 : 22);
    }
  }, dependencies: [FormsModule, RippleDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n  max-width: 66ch;\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.field__label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.field__input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9px 12px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border-strong);\n  background: var(--color-bg-elevated);\n  color: var(--color-text);\n  font: inherit;\n  font-size: 0.9rem;\n}\n.field__input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-accent);\n}\n.section[_ngcontent-%COMP%] {\n  padding: 24px;\n  margin-bottom: 20px;\n}\n.section__title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--color-text);\n  margin-bottom: 6px;\n}\n.section__actions[_ngcontent-%COMP%] {\n  margin-top: 18px;\n}\n.muted[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 0.8125rem;\n}\n.note[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 2px;\n}\n.tier-grid[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.tier-grid__head[_ngcontent-%COMP%], \n.tier-grid__row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 40px;\n  gap: 10px;\n  align-items: center;\n}\n.tier-grid__head[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--color-text-muted);\n}\n.tier-grid__annual[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--color-text-muted);\n}\n.icon-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  display: inline-flex;\n  padding: 6px;\n  border-radius: var(--radius-sm);\n}\n.icon-btn--danger[_ngcontent-%COMP%]:hover {\n  color: #f87171;\n  background: rgba(248, 113, 113, 0.12);\n}\n.company-search[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin: 14px 0;\n  max-width: 420px;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.9rem;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 12px;\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--color-text-muted);\n  border-bottom: 1px solid var(--color-border);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 12px;\n  border-bottom: 1px solid var(--color-border);\n  vertical-align: top;\n}\n.data-table__actions-col[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.data-table__empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--color-text-muted);\n  padding: 24px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 3px 10px;\n  border-radius: var(--radius-full);\n  font-size: 0.72rem;\n  font-weight: 600;\n  background: rgba(255, 255, 255, 0.08);\n  color: var(--color-text-muted);\n}\n.badge--warning[_ngcontent-%COMP%] {\n  background: rgba(214, 164, 79, 0.14);\n  color: #d6a44f;\n}\n.edit-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n}\n.edit-row__form[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n  align-items: flex-end;\n}\n.edit-row__form[_ngcontent-%COMP%]   .field__label[_ngcontent-%COMP%] {\n  min-width: 200px;\n  flex: 1;\n}\n.edit-row__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-top: 16px;\n}\n.form-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 14px;\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  font-size: 0.875rem;\n  background: rgba(255, 255, 255, 0.05);\n}\n.form-alert--error[_ngcontent-%COMP%] {\n  background: rgba(248, 113, 113, 0.12);\n  color: #f87171;\n}\n.form-alert--success[_ngcontent-%COMP%] {\n  background: var(--color-success-bg);\n  color: var(--color-success);\n}\n.form-alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  font-size: 0.82rem;\n}\n/*# sourceMappingURL=subscription-pricing.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscriptionPricingComponent, { className: "SubscriptionPricingComponent", filePath: "src\\app\\features\\admin\\pages\\settings\\subscription-pricing\\subscription-pricing.component.ts", lineNumber: 22 });
})();
export {
  SubscriptionPricingComponent
};
//# sourceMappingURL=chunk-RZQPP6B2.js.map
