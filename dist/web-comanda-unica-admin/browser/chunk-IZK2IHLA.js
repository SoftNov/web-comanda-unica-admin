import {
  PlatformFeeRulesService
} from "./chunk-FQFMGFFE.js";
import {
  RippleDirective
} from "./chunk-RYRFSZ2Z.js";
import {
  AuthService
} from "./chunk-JI3XUBKU.js";
import "./chunk-K3CHLMDM.js";
import {
  environment
} from "./chunk-3BRF5UDA.js";
import "./chunk-PB4HRHCY.js";
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
} from "./chunk-MHTOAZDV.js";

// src/app/shared/services/extrato.service.ts
var ExtratoService = class _ExtratoService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiBaseUrl}/api/v1/companies`;
  getExtrato(companyId, filtros = {}) {
    return this.http.get(`${this.baseUrl}/${companyId}/extrato`, { params: this.toHttpParams(filtros) });
  }
  // Sem cursor/limit — a exportação sempre traz todas as transações do período filtrado.
  exportCsv(companyId, filtros = {}) {
    return this.http.get(`${this.baseUrl}/${companyId}/extrato/export`, {
      params: this.toHttpParams(filtros),
      responseType: "blob"
    });
  }
  toHttpParams(filtros) {
    const params = {};
    if (filtros.startDate)
      params["startDate"] = filtros.startDate;
    if (filtros.endDate)
      params["endDate"] = filtros.endDate;
    if (filtros.type)
      params["type"] = filtros.type;
    if (filtros.status)
      params["status"] = filtros.status;
    if (filtros.search)
      params["search"] = filtros.search;
    if (filtros.cursor)
      params["cursor"] = filtros.cursor;
    if (filtros.limit)
      params["limit"] = String(filtros.limit);
    return params;
  }
  static \u0275fac = function ExtratoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExtratoService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExtratoService, factory: _ExtratoService.\u0275fac, providedIn: "root" });
};

// src/app/shared/services/platform-extrato.service.ts
var PlatformExtratoService = class _PlatformExtratoService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiBaseUrl}/api/v1/platform/extrato`;
  getExtrato(filtros = {}) {
    return this.http.get(this.baseUrl, { params: this.toHttpParams(filtros) });
  }
  // Sem cursor/limit — a exportação sempre traz todas as transações do período filtrado.
  exportCsv(filtros = {}) {
    return this.http.get(`${this.baseUrl}/export`, {
      params: this.toHttpParams(filtros),
      responseType: "blob"
    });
  }
  toHttpParams(filtros) {
    const params = {};
    if (filtros.startDate)
      params["startDate"] = filtros.startDate;
    if (filtros.endDate)
      params["endDate"] = filtros.endDate;
    if (filtros.type)
      params["type"] = filtros.type;
    if (filtros.direction)
      params["direction"] = filtros.direction;
    if (filtros.relatedCompanyId)
      params["relatedCompanyId"] = filtros.relatedCompanyId;
    if (filtros.search)
      params["search"] = filtros.search;
    if (filtros.cursor)
      params["cursor"] = filtros.cursor;
    if (filtros.limit)
      params["limit"] = String(filtros.limit);
    return params;
  }
  static \u0275fac = function PlatformExtratoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlatformExtratoService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PlatformExtratoService, factory: _PlatformExtratoService.\u0275fac, providedIn: "root" });
};

// src/app/features/admin/pages/extrato-financeiro/extrato-financeiro.component.ts
var _forTrack0 = ($index, $item) => $item.companyId;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.value;
var _forTrack3 = ($index, $item) => $item.balanceTransactionId;
function ExtratoFinanceiroComponent_Conditional_6_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "Consultando: ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedCompanyName());
  }
}
function ExtratoFinanceiroComponent_Conditional_6_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "Buscando\u2026");
    \u0275\u0275elementEnd();
  }
}
function ExtratoFinanceiroComponent_Conditional_6_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 16);
    \u0275\u0275listener("click", function ExtratoFinanceiroComponent_Conditional_6_Conditional_16_For_2_Template_button_click_1_listener() {
      const company_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectCompanyFromSearch(company_r4));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const company_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(company_r4.companyName);
  }
}
function ExtratoFinanceiroComponent_Conditional_6_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 15);
    \u0275\u0275repeaterCreate(1, ExtratoFinanceiroComponent_Conditional_6_Conditional_16_For_2_Template, 3, 1, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.companySearchResults());
  }
}
function ExtratoFinanceiroComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 9);
    \u0275\u0275listener("click", function ExtratoFinanceiroComponent_Conditional_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectPlatformAccount());
    });
    \u0275\u0275elementStart(2, "span", 10);
    \u0275\u0275text(3, "account_balance");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "label", 5)(6, "span");
    \u0275\u0275text(7, "Estabelecimento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 11)(9, "input", 12);
    \u0275\u0275listener("input", function ExtratoFinanceiroComponent_Conditional_6_Template_input_input_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCompanySearchTermChange($event.target.value));
    })("keyup.enter", function ExtratoFinanceiroComponent_Conditional_6_Template_input_keyup_enter_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchCompanies());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 13);
    \u0275\u0275listener("click", function ExtratoFinanceiroComponent_Conditional_6_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchCompanies());
    });
    \u0275\u0275elementStart(11, "span", 10);
    \u0275\u0275text(12, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Buscar ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, ExtratoFinanceiroComponent_Conditional_6_Conditional_14_Template, 4, 1, "p", 6)(15, ExtratoFinanceiroComponent_Conditional_6_Conditional_15_Template, 2, 0, "p", 14)(16, ExtratoFinanceiroComponent_Conditional_6_Conditional_16_Template, 3, 0, "ul", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("extrato-company__platform-btn--active", ctx_r1.platformMode());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.platformAccountLabel, " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.companySearchTerm());
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.selectedCompanyName() ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSearchingCompanies() ? 15 : ctx_r1.companySearchResults().length > 0 ? 16 : -1);
  }
}
function ExtratoFinanceiroComponent_Conditional_7_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const company_r6 = ctx.$implicit;
    \u0275\u0275property("value", company_r6.companyId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(company_r6.companyName);
  }
}
function ExtratoFinanceiroComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 5)(1, "span");
    \u0275\u0275text(2, "Estabelecimento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 17);
    \u0275\u0275listener("change", function ExtratoFinanceiroComponent_Conditional_7_Template_select_change_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMyCompanyChange($event.target.value));
    });
    \u0275\u0275repeaterCreate(4, ExtratoFinanceiroComponent_Conditional_7_For_5_Template, 2, 2, "option", 18, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r1.selectedCompanyId());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.myCompanies());
  }
}
function ExtratoFinanceiroComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "Estabelecimento: ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedCompanyName());
  }
}
function ExtratoFinanceiroComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "p", 14);
    \u0275\u0275text(2, "Selecione um estabelecimento para ver o extrato financeiro.");
    \u0275\u0275elementEnd()();
  }
}
function ExtratoFinanceiroComponent_Conditional_10_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "span", 34);
    \u0275\u0275text(3, "account_balance_wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 35);
    \u0275\u0275text(5, "Saldo dispon\xEDvel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 36);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 33)(9, "span", 34);
    \u0275\u0275text(10, "hourglass_empty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 35);
    \u0275\u0275text(12, "Saldo pendente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 36);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 33)(16, "span", 34);
    \u0275\u0275text(17, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 35);
    \u0275\u0275text(19, "Saldo inicial (estimado)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 36);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 33)(23, "span", 34);
    \u0275\u0275text(24, "trending_up");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 35);
    \u0275\u0275text(26, "Entradas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 36);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 33)(30, "span", 34);
    \u0275\u0275text(31, "percent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 35);
    \u0275\u0275text(33, "Taxas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 36);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 33)(37, "span", 34);
    \u0275\u0275text(38, "undo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 35);
    \u0275\u0275text(40, "Reembolsos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 36);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 33)(44, "span", 34);
    \u0275\u0275text(45, "south");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 35);
    \u0275\u0275text(47, "Retiradas (payouts)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 36);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 33)(51, "span", 34);
    \u0275\u0275text(52, "swap_horiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 35);
    \u0275\u0275text(54, "Repasses recebidos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span", 36);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 33)(58, "span", 34);
    \u0275\u0275text(59, "trending_down");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span", 35);
    \u0275\u0275text(61, "Outras sa\xEDdas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "span", 36);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 33)(65, "span", 34);
    \u0275\u0275text(66, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span", 35);
    \u0275\u0275text(68, "Saldo final (estimado)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "span", 36);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const resumo_r8 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(resumo_r8.saldoDisponivel));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(resumo_r8.saldoPendente));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(resumo_r8.saldoInicial));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(resumo_r8.totalEntradas));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(resumo_r8.totalTaxas));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(resumo_r8.totalReembolsos));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(resumo_r8.totalPayouts));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(resumo_r8.totalRepasses));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(resumo_r8.totalOutrasSaidas));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(resumo_r8.saldoFinal));
  }
}
function ExtratoFinanceiroComponent_Conditional_10_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "Carregando resumo\u2026");
    \u0275\u0275elementEnd();
  }
}
function ExtratoFinanceiroComponent_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ExtratoFinanceiroComponent_Conditional_10_Conditional_1_Conditional_0_Template, 71, 10, "div", 32)(1, ExtratoFinanceiroComponent_Conditional_10_Conditional_1_Conditional_1_Template, 2, 0, "p", 14);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_2_0 = ctx_r1.platformResumo()) ? 0 : ctx_r1.isLoading() ? 1 : -1, tmp_2_0);
  }
}
function ExtratoFinanceiroComponent_Conditional_10_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "span", 34);
    \u0275\u0275text(3, "account_balance_wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 35);
    \u0275\u0275text(5, "Saldo dispon\xEDvel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 36);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 33)(9, "span", 34);
    \u0275\u0275text(10, "hourglass_empty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 35);
    \u0275\u0275text(12, "Saldo pendente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 36);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 33)(16, "span", 34);
    \u0275\u0275text(17, "trending_up");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 35);
    \u0275\u0275text(19, "Entradas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 36);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 33)(23, "span", 34);
    \u0275\u0275text(24, "trending_down");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 35);
    \u0275\u0275text(26, "Sa\xEDdas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 36);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 33)(30, "span", 34);
    \u0275\u0275text(31, "percent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 35);
    \u0275\u0275text(33, "Taxas Stripe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 36);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 33)(37, "span", 34);
    \u0275\u0275text(38, "account_balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 35);
    \u0275\u0275text(40, "Taxas Comanda \xDAnica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 36);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 33)(44, "span", 34);
    \u0275\u0275text(45, "undo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 35);
    \u0275\u0275text(47, "Estornos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 36);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 33)(51, "span", 34);
    \u0275\u0275text(52, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 35);
    \u0275\u0275text(54, "L\xEDquido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span", 36);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const resumo_r9 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(resumo_r9.saldoDisponivel));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(resumo_r9.saldoPendente));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(resumo_r9.entradas));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(resumo_r9.saidas));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(resumo_r9.taxasStripe));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(resumo_r9.taxasComandaUnica));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(resumo_r9.estornos));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(resumo_r9.liquido));
  }
}
function ExtratoFinanceiroComponent_Conditional_10_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "Carregando resumo\u2026");
    \u0275\u0275elementEnd();
  }
}
function ExtratoFinanceiroComponent_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ExtratoFinanceiroComponent_Conditional_10_Conditional_2_Conditional_0_Template, 57, 8, "div", 32)(1, ExtratoFinanceiroComponent_Conditional_10_Conditional_2_Conditional_1_Template, 2, 0, "p", 14);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_2_0 = ctx_r1.resumo()) ? 0 : ctx_r1.isLoading() ? 1 : -1, tmp_2_0);
  }
}
function ExtratoFinanceiroComponent_Conditional_10_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function ExtratoFinanceiroComponent_Conditional_10_For_7_Template_button_click_0_listener() {
      const preset_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyPreset(preset_r11.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const preset_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("revenue-section__preset--active", ctx_r1.activePresetId() === preset_r11.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", preset_r11.label, " ");
  }
}
function ExtratoFinanceiroComponent_Conditional_10_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r12 = ctx.$implicit;
    \u0275\u0275property("value", option_r12.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r12.label);
  }
}
function ExtratoFinanceiroComponent_Conditional_10_Conditional_22_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r14 = ctx.$implicit;
    \u0275\u0275property("value", option_r14.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r14.label);
  }
}
function ExtratoFinanceiroComponent_Conditional_10_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 17);
    \u0275\u0275listener("change", function ExtratoFinanceiroComponent_Conditional_10_Conditional_22_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDirectionFilterChange($event.target.value));
    });
    \u0275\u0275repeaterCreate(1, ExtratoFinanceiroComponent_Conditional_10_Conditional_22_For_2_Template, 2, 2, "option", 18, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r1.directionFilter());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.directionOptions);
  }
}
function ExtratoFinanceiroComponent_Conditional_10_Conditional_23_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r16 = ctx.$implicit;
    \u0275\u0275property("value", option_r16.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r16.label);
  }
}
function ExtratoFinanceiroComponent_Conditional_10_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 17);
    \u0275\u0275listener("change", function ExtratoFinanceiroComponent_Conditional_10_Conditional_23_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onStatusFilterChange($event.target.value));
    });
    \u0275\u0275repeaterCreate(1, ExtratoFinanceiroComponent_Conditional_10_Conditional_23_For_2_Template, 2, 2, "option", 18, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r1.statusFilter());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.statusOptions);
  }
}
function ExtratoFinanceiroComponent_Conditional_10_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 10);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.exportError(), " ");
  }
}
function ExtratoFinanceiroComponent_Conditional_10_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 10);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.loadError(), " ");
  }
}
function ExtratoFinanceiroComponent_Conditional_10_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "Carregando extrato\u2026");
    \u0275\u0275elementEnd();
  }
}
function ExtratoFinanceiroComponent_Conditional_10_Conditional_36_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "Nenhuma movimenta\xE7\xE3o encontrada para os filtros selecionados.");
    \u0275\u0275elementEnd();
  }
}
function ExtratoFinanceiroComponent_Conditional_10_Conditional_36_Conditional_1_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 43);
    \u0275\u0275listener("click", function ExtratoFinanceiroComponent_Conditional_10_Conditional_36_Conditional_1_For_24_Template_tr_click_0_listener() {
      const transacao_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openPlatformDetail(transacao_r18));
    });
    \u0275\u0275elementStart(1, "td");
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
    \u0275\u0275elementStart(11, "td", 40);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 40);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 40);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span", 44);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const transacao_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDateTime(transacao_r18.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.platformTipoLabel(transacao_r18.category));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(transacao_r18.direction === "CREDIT" ? "Entrada" : "Sa\xEDda");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(transacao_r18.description || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(transacao_r18.relatedCompanyName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(transacao_r18.amount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(transacao_r18.fee));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(transacao_r18.net));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("extrato-status--pending", transacao_r18.status === "PENDING");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.platformStatusLabel(transacao_r18), " ");
  }
}
function ExtratoFinanceiroComponent_Conditional_10_Conditional_36_Conditional_1_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "button", 29);
    \u0275\u0275listener("click", function ExtratoFinanceiroComponent_Conditional_10_Conditional_36_Conditional_1_Conditional_25_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.loadMore());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isLoadingMore());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isLoadingMore() ? "Carregando\u2026" : "Carregar mais", " ");
  }
}
function ExtratoFinanceiroComponent_Conditional_10_Conditional_36_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "table", 39)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Dire\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Descri\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Empresa relacionada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 40);
    \u0275\u0275text(15, "Valor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 40);
    \u0275\u0275text(17, "Taxa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 40);
    \u0275\u0275text(19, "L\xEDquido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275repeaterCreate(23, ExtratoFinanceiroComponent_Conditional_10_Conditional_36_Conditional_1_For_24_Template, 20, 11, "tr", 41, _forTrack3);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(25, ExtratoFinanceiroComponent_Conditional_10_Conditional_36_Conditional_1_Conditional_25_Template, 3, 2, "div", 42);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(23);
    \u0275\u0275repeater(ctx_r1.platformTransacoes());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.hasMore() ? 25 : -1);
  }
}
function ExtratoFinanceiroComponent_Conditional_10_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ExtratoFinanceiroComponent_Conditional_10_Conditional_36_Conditional_0_Template, 2, 0, "p", 14)(1, ExtratoFinanceiroComponent_Conditional_10_Conditional_36_Conditional_1_Template, 26, 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.platformTransacoes().length === 0 ? 0 : 1);
  }
}
function ExtratoFinanceiroComponent_Conditional_10_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "Nenhuma movimenta\xE7\xE3o encontrada para os filtros selecionados.");
    \u0275\u0275elementEnd();
  }
}
function ExtratoFinanceiroComponent_Conditional_10_Conditional_38_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 43);
    \u0275\u0275listener("click", function ExtratoFinanceiroComponent_Conditional_10_Conditional_38_For_20_Template_tr_click_0_listener() {
      const transacao_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openDetail(transacao_r21));
    });
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 40);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 40);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 40);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 44);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const transacao_r21 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDateTime(transacao_r21.data));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tipoLabel(transacao_r21.tipo));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(transacao_r21.descricao || ctx_r1.comandaResumo(transacao_r21.comandaUnica));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(transacao_r21.valorBruto));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(transacao_r21.taxaStripe));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(transacao_r21.valorLiquido));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("extrato-status--pending", ctx_r1.isStatusPending(transacao_r21));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.statusLabel(transacao_r21), " ");
  }
}
function ExtratoFinanceiroComponent_Conditional_10_Conditional_38_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "button", 29);
    \u0275\u0275listener("click", function ExtratoFinanceiroComponent_Conditional_10_Conditional_38_Conditional_21_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.loadMore());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isLoadingMore());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isLoadingMore() ? "Carregando\u2026" : "Carregar mais", " ");
  }
}
function ExtratoFinanceiroComponent_Conditional_10_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "table", 39)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Descri\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 40);
    \u0275\u0275text(11, "Bruto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 40);
    \u0275\u0275text(13, "Taxa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 40);
    \u0275\u0275text(15, "L\xEDquido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, ExtratoFinanceiroComponent_Conditional_10_Conditional_38_For_20_Template, 16, 9, "tr", 41, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(21, ExtratoFinanceiroComponent_Conditional_10_Conditional_38_Conditional_21_Template, 3, 2, "div", 42);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r1.transacoes());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.hasMore() ? 21 : -1);
  }
}
function ExtratoFinanceiroComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, ExtratoFinanceiroComponent_Conditional_10_Conditional_1_Template, 2, 1)(2, ExtratoFinanceiroComponent_Conditional_10_Conditional_2_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20)(4, "div", 21)(5, "div", 22);
    \u0275\u0275repeaterCreate(6, ExtratoFinanceiroComponent_Conditional_10_For_7_Template, 2, 3, "button", 23, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 24)(9, "label", 25)(10, "span");
    \u0275\u0275text(11, "De");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 26);
    \u0275\u0275listener("change", function ExtratoFinanceiroComponent_Conditional_10_Template_input_change_12_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCustomStartDateChange($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "label", 25)(14, "span");
    \u0275\u0275text(15, "At\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 27);
    \u0275\u0275listener("change", function ExtratoFinanceiroComponent_Conditional_10_Template_input_change_16_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCustomEndDateChange($event.target.value));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 21)(18, "input", 28);
    \u0275\u0275listener("input", function ExtratoFinanceiroComponent_Conditional_10_Template_input_input_18_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchTermChange($event.target.value));
    })("keyup.enter", function ExtratoFinanceiroComponent_Conditional_10_Template_input_keyup_enter_18_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 17);
    \u0275\u0275listener("change", function ExtratoFinanceiroComponent_Conditional_10_Template_select_change_19_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTypeFilterChange($event.target.value));
    });
    \u0275\u0275repeaterCreate(20, ExtratoFinanceiroComponent_Conditional_10_For_21_Template, 2, 2, "option", 18, _forTrack2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, ExtratoFinanceiroComponent_Conditional_10_Conditional_22_Template, 3, 1, "select", 18)(23, ExtratoFinanceiroComponent_Conditional_10_Conditional_23_Template, 3, 1, "select", 18);
    \u0275\u0275elementStart(24, "button", 29);
    \u0275\u0275listener("click", function ExtratoFinanceiroComponent_Conditional_10_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refresh());
    });
    \u0275\u0275elementStart(25, "span", 10);
    \u0275\u0275text(26, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 29);
    \u0275\u0275listener("click", function ExtratoFinanceiroComponent_Conditional_10_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportCsv());
    });
    \u0275\u0275elementStart(29, "span", 10);
    \u0275\u0275text(30, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, ExtratoFinanceiroComponent_Conditional_10_Conditional_32_Template, 4, 1, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 31);
    \u0275\u0275template(34, ExtratoFinanceiroComponent_Conditional_10_Conditional_34_Template, 4, 1, "div", 30)(35, ExtratoFinanceiroComponent_Conditional_10_Conditional_35_Template, 2, 0, "p", 14)(36, ExtratoFinanceiroComponent_Conditional_10_Conditional_36_Template, 2, 1)(37, ExtratoFinanceiroComponent_Conditional_10_Conditional_37_Template, 2, 0, "p", 14)(38, ExtratoFinanceiroComponent_Conditional_10_Conditional_38_Template, 22, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.platformMode() ? 1 : 2);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.periodPresets);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r1.startDate())("max", ctx_r1.endDate());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.endDate())("min", ctx_r1.startDate());
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.searchTerm());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.typeFilter());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.typeOptions);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.platformMode() ? 22 : 23);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isLoading());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isLoading() ? "Atualizando\u2026" : "Atualizar", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isExporting());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isExporting() ? "Exportando\u2026" : "Exportar CSV", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.exportError() ? 32 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.loadError() ? 34 : ctx_r1.isLoading() ? 35 : ctx_r1.platformMode() ? 36 : ctx_r1.transacoes().length === 0 ? 37 : 38);
  }
}
function ExtratoFinanceiroComponent_Conditional_11_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2, "Taxa Comanda \xDAnica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const transacao_r24 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(transacao_r24.taxaComandaUnica));
  }
}
function ExtratoFinanceiroComponent_Conditional_11_Conditional_61_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2, "Mesa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const transacao_r24 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(transacao_r24.comandaUnica.mesa);
  }
}
function ExtratoFinanceiroComponent_Conditional_11_Conditional_61_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const transacao_r24 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(transacao_r24.comandaUnica.cliente);
  }
}
function ExtratoFinanceiroComponent_Conditional_11_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dl", 50)(1, "div")(2, "dt");
    \u0275\u0275text(3, "Comanda");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ExtratoFinanceiroComponent_Conditional_11_Conditional_61_Conditional_6_Template, 5, 1, "div")(7, ExtratoFinanceiroComponent_Conditional_11_Conditional_61_Conditional_7_Template, 5, 1, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const transacao_r24 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(transacao_r24.comandaUnica.numeroComanda);
    \u0275\u0275advance();
    \u0275\u0275conditional(transacao_r24.comandaUnica.mesa != null ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(transacao_r24.comandaUnica.cliente ? 7 : -1);
  }
}
function ExtratoFinanceiroComponent_Conditional_11_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "Sem pedido vinculado.");
    \u0275\u0275elementEnd();
  }
}
function ExtratoFinanceiroComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275listener("click", function ExtratoFinanceiroComponent_Conditional_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementStart(1, "div", 46);
    \u0275\u0275listener("click", function ExtratoFinanceiroComponent_Conditional_11_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r23);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 47)(3, "h2", 48);
    \u0275\u0275text(4, "Detalhes da transa\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 49);
    \u0275\u0275listener("click", function ExtratoFinanceiroComponent_Conditional_11_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementStart(6, "span", 10);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "dl", 50)(9, "div")(10, "dt");
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "dd");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div")(15, "dt");
    \u0275\u0275text(16, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "dd");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "dt");
    \u0275\u0275text(21, "Data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "dd");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "dl", 50)(25, "div")(26, "dt");
    \u0275\u0275text(27, "Valor bruto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "dd");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div")(31, "dt");
    \u0275\u0275text(32, "Taxa Stripe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "dd");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, ExtratoFinanceiroComponent_Conditional_11_Conditional_35_Template, 5, 1, "div");
    \u0275\u0275elementStart(36, "div")(37, "dt");
    \u0275\u0275text(38, "Valor l\xEDquido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "dd");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "h3", 51);
    \u0275\u0275text(42, "Stripe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "dl", 50)(44, "div")(45, "dt");
    \u0275\u0275text(46, "PaymentIntent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "dd");
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div")(50, "dt");
    \u0275\u0275text(51, "Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "dd");
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div")(55, "dt");
    \u0275\u0275text(56, "Balance Transaction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "dd");
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "h3", 51);
    \u0275\u0275text(60, "Comanda \xDAnica");
    \u0275\u0275elementEnd();
    \u0275\u0275template(61, ExtratoFinanceiroComponent_Conditional_11_Conditional_61_Template, 8, 3, "dl", 50)(62, ExtratoFinanceiroComponent_Conditional_11_Conditional_62_Template, 2, 0, "p", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const transacao_r24 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.statusLabel(transacao_r24));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.tipoLabel(transacao_r24.tipo));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDateTime(transacao_r24.data));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(transacao_r24.valorBruto));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(transacao_r24.taxaStripe));
    \u0275\u0275advance();
    \u0275\u0275conditional(transacao_r24.taxaComandaUnica != null ? 35 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(transacao_r24.valorLiquido));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(transacao_r24.stripe.paymentIntentId || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(transacao_r24.stripe.chargeId || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(transacao_r24.stripe.balanceTransactionId);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(transacao_r24.comandaUnica.vinculado ? 61 : 62);
  }
}
function ExtratoFinanceiroComponent_Conditional_12_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dl", 50)(1, "div")(2, "dt");
    \u0275\u0275text(3, "Empresa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const transacao_r26 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(transacao_r26.relatedCompanyName);
  }
}
function ExtratoFinanceiroComponent_Conditional_12_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "Sem empresa relacionada (s\xF3 repasses t\xEAm esse v\xEDnculo).");
    \u0275\u0275elementEnd();
  }
}
function ExtratoFinanceiroComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275listener("click", function ExtratoFinanceiroComponent_Conditional_12_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePlatformDetail());
    });
    \u0275\u0275elementStart(1, "div", 46);
    \u0275\u0275listener("click", function ExtratoFinanceiroComponent_Conditional_12_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r25);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 47)(3, "h2", 48);
    \u0275\u0275text(4, "Detalhes da transa\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 49);
    \u0275\u0275listener("click", function ExtratoFinanceiroComponent_Conditional_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePlatformDetail());
    });
    \u0275\u0275elementStart(6, "span", 10);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "dl", 50)(9, "div")(10, "dt");
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "dd");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div")(15, "dt");
    \u0275\u0275text(16, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "dd");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "dt");
    \u0275\u0275text(21, "Tipo Stripe (bruto)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "dd");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div")(25, "dt");
    \u0275\u0275text(26, "Dire\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "dd");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div")(30, "dt");
    \u0275\u0275text(31, "Data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "dd");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "dl", 50)(35, "div")(36, "dt");
    \u0275\u0275text(37, "Valor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "dd");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div")(41, "dt");
    \u0275\u0275text(42, "Taxa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "dd");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div")(46, "dt");
    \u0275\u0275text(47, "Valor l\xEDquido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "dd");
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "h3", 51);
    \u0275\u0275text(51, "Stripe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "dl", 50)(53, "div")(54, "dt");
    \u0275\u0275text(55, "Balance Transaction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "dd");
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div")(59, "dt");
    \u0275\u0275text(60, "Origem");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "dd");
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "h3", 51);
    \u0275\u0275text(64, "Empresa relacionada");
    \u0275\u0275elementEnd();
    \u0275\u0275template(65, ExtratoFinanceiroComponent_Conditional_12_Conditional_65_Template, 6, 1, "dl", 50)(66, ExtratoFinanceiroComponent_Conditional_12_Conditional_66_Template, 2, 0, "p", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const transacao_r26 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.platformStatusLabel(transacao_r26));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.platformTipoLabel(transacao_r26.category));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(transacao_r26.stripeType);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(transacao_r26.direction === "CREDIT" ? "Entrada" : "Sa\xEDda");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDateTime(transacao_r26.createdAt));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(transacao_r26.amount));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(transacao_r26.fee));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(transacao_r26.net));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(transacao_r26.balanceTransactionId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(transacao_r26.sourceId || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(transacao_r26.relatedCompanyName ? 65 : 66);
  }
}
var PERIOD_PRESETS = [
  { id: "hoje", label: "Hoje" },
  { id: "ontem", label: "Ontem" },
  { id: "7d", label: "\xDAltimos 7 dias" },
  { id: "30d", label: "\xDAltimos 30 dias" },
  { id: "este-mes", label: "Este m\xEAs" },
  { id: "mes-anterior", label: "M\xEAs anterior" }
];
var TYPE_OPTIONS = [
  { value: "", label: "Todos" },
  { value: "CHARGE", label: "Pagamentos (cart\xE3o)" },
  { value: "PAYMENT", label: "Pagamentos (outros)" },
  { value: "REFUND", label: "Estornos" },
  { value: "PAYMENT_REFUND", label: "Estornos (outros)" },
  { value: "PAYOUT", label: "Payouts" },
  { value: "STRIPE_FEE", label: "Taxas" },
  { value: "TRANSFER", label: "Transfer\xEAncias" },
  { value: "APPLICATION_FEE", label: "Repasses / Taxa Comanda \xDAnica" }
];
var STATUS_OPTIONS = [
  { value: "", label: "Todos" },
  { value: "AVAILABLE", label: "Dispon\xEDvel" },
  { value: "PENDING", label: "Pendente" }
];
var DIRECTION_OPTIONS = [
  { value: "", label: "Todas" },
  { value: "CREDIT", label: "Entrada" },
  { value: "DEBIT", label: "Sa\xEDda" }
];
var PLATFORM_ACCOUNT_LABEL = "Conta Comanda \xDAnica (plataforma)";
var TIPO_LABELS = {
  CHARGE: "Pagamento",
  PAYMENT: "Pagamento",
  REFUND: "Estorno",
  PAYMENT_REFUND: "Estorno",
  PAYOUT: "Payout",
  TRANSFER: "Transfer\xEAncia",
  APPLICATION_FEE: "Taxa Comanda \xDAnica",
  APPLICATION_FEE_REFUND: "Estorno de taxa",
  DISPUTE: "Disputa",
  ADJUSTMENT: "Ajuste",
  STRIPE_FEE: "Taxa Stripe",
  OTHER: "Outro"
};
var PAGE_SIZE = 20;
var ExtratoFinanceiroComponent = class _ExtratoFinanceiroComponent {
  authService = inject(AuthService);
  extratoService = inject(ExtratoService);
  platformExtratoService = inject(PlatformExtratoService);
  platformFeeRulesService = inject(PlatformFeeRulesService);
  currencyFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
  dateTimeFormatter = new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short" });
  isPlatformAdmin = this.authService.isPlatformAdmin;
  myCompanies = this.authService.companies;
  periodPresets = PERIOD_PRESETS;
  typeOptions = TYPE_OPTIONS;
  statusOptions = STATUS_OPTIONS;
  directionOptions = DIRECTION_OPTIONS;
  platformAccountLabel = PLATFORM_ACCOUNT_LABEL;
  // Modo plataforma — só platform admin: troca a fonte do extrato para a conta Stripe da própria
  // Comanda Única (ver selectPlatformAccount), sem estabelecimento selecionado.
  platformMode = signal(false);
  platformResumo = signal(null);
  platformTransacoes = signal([]);
  directionFilter = signal("");
  selectedPlatformTransacao = signal(null);
  // Empresa consultada — para quem não é platform admin, vem das próprias empresas (session);
  // platform admin busca entre todos os estabelecimentos (ver PlatformFeeRulesService,
  // reaproveitado do painel financeiro da plataforma).
  selectedCompanyId = signal(this.authService.selectedCompany()?.companyId ?? null);
  selectedCompanyName = signal(this.authService.selectedCompany()?.companyName ?? null);
  companySearchTerm = signal("");
  companySearchResults = signal([]);
  isSearchingCompanies = signal(false);
  activePresetId = signal("30d");
  startDate = signal(this.toIsoDate(this.daysAgo(29)));
  endDate = signal(this.toIsoDate(/* @__PURE__ */ new Date()));
  typeFilter = signal("");
  statusFilter = signal("");
  searchTerm = signal("");
  resumo = signal(null);
  transacoes = signal([]);
  hasMore = signal(false);
  isLoading = signal(false);
  isLoadingMore = signal(false);
  loadError = signal(null);
  selectedTransacao = signal(null);
  isExporting = signal(false);
  exportError = signal(null);
  nextCursor = null;
  hasCompany = computed(() => this.platformMode() || !!this.selectedCompanyId());
  constructor() {
    if (this.selectedCompanyId()) {
      this.loadExtrato(false);
    }
  }
  formatCurrency(value) {
    return value != null ? this.currencyFormatter.format(value) : "\u2014";
  }
  formatDateTime(value) {
    if (!value) {
      return "\u2014";
    }
    return this.dateTimeFormatter.format(new Date(value));
  }
  tipoLabel(tipo) {
    return TIPO_LABELS[tipo] ?? tipo;
  }
  // No extrato da PLATAFORMA, application_fee é a plataforma RECEBENDO o repasse da empresa (ver
  // PlatformExtratoResumoResponse no backend) — rótulo diferente do extrato por estabelecimento
  // (onde a mesma categoria aparece como "Taxa Comanda Única", a taxa que a empresa paga).
  platformTipoLabel(tipo) {
    if (tipo === "APPLICATION_FEE") {
      return "Repasse recebido";
    }
    return this.tipoLabel(tipo);
  }
  // "status" é sobre liberação de saldo na Stripe (quando o dinheiro fica disponível para saque) —
  // não sobre o pagamento em si. Um pagamento pode estar concluído (ver pagamentoConfirmado,
  // confrontado com a nossa base) e ainda assim ter o saldo pendente de liberação. Por isso o texto
  // exibido prioriza pagamentoConfirmado — é o que corresponde ao "Concluído" do Dashboard da Stripe.
  statusLabel(transacao) {
    if (transacao.pagamentoConfirmado) {
      return transacao.status === "AVAILABLE" ? "Pago" : "Pago (saldo pendente)";
    }
    return transacao.status === "AVAILABLE" ? "Dispon\xEDvel" : "Pendente";
  }
  isStatusPending(transacao) {
    return !transacao.pagamentoConfirmado && transacao.status === "PENDING";
  }
  // Extrato da plataforma não tem o conceito de "pagamento confirmado" (não é uma cobrança de
  // estabelecimento) — só reflete a liberação de saldo, igual ao "status" acima.
  platformStatusLabel(transacao) {
    return transacao.status === "AVAILABLE" ? "Dispon\xEDvel" : "Pendente";
  }
  comandaResumo(ref) {
    if (!ref.vinculado) {
      return "Sem pedido vinculado";
    }
    const partes = [];
    if (ref.numeroComanda) {
      partes.push(`Comanda ${ref.numeroComanda.slice(0, 8)}`);
    }
    if (ref.mesa != null) {
      partes.push(`Mesa ${ref.mesa}`);
    }
    return partes.length > 0 ? partes.join(" \u2014 ") : "Vinculado";
  }
  // --- Empresa -------------------------------------------------------------
  selectPlatformAccount() {
    this.platformMode.set(true);
    this.selectedCompanyId.set(null);
    this.selectedCompanyName.set(this.platformAccountLabel);
    this.companySearchResults.set([]);
    this.companySearchTerm.set("");
    this.resetAndLoad();
  }
  onMyCompanyChange(companyId) {
    const company = this.myCompanies().find((c) => c.companyId === companyId);
    this.platformMode.set(false);
    this.selectedCompanyId.set(companyId);
    this.selectedCompanyName.set(company?.companyName ?? null);
    this.resetAndLoad();
  }
  onCompanySearchTermChange(value) {
    this.companySearchTerm.set(value);
  }
  searchCompanies() {
    const term = this.companySearchTerm().trim();
    if (!term) {
      this.companySearchResults.set([]);
      return;
    }
    this.isSearchingCompanies.set(true);
    this.platformFeeRulesService.listCompanies({ search: term, size: 10 }).subscribe({
      next: (page) => {
        this.companySearchResults.set(page.content);
        this.isSearchingCompanies.set(false);
      },
      error: () => {
        this.companySearchResults.set([]);
        this.isSearchingCompanies.set(false);
      }
    });
  }
  selectCompanyFromSearch(company) {
    this.platformMode.set(false);
    this.selectedCompanyId.set(company.companyId);
    this.selectedCompanyName.set(company.companyName);
    this.companySearchResults.set([]);
    this.companySearchTerm.set("");
    this.resetAndLoad();
  }
  // --- Filtros ---------------------------------------------------------------
  applyPreset(presetId) {
    this.activePresetId.set(presetId);
    const today = /* @__PURE__ */ new Date();
    switch (presetId) {
      case "hoje":
        this.startDate.set(this.toIsoDate(today));
        this.endDate.set(this.toIsoDate(today));
        break;
      case "ontem": {
        const yesterday = this.daysAgo(1);
        this.startDate.set(this.toIsoDate(yesterday));
        this.endDate.set(this.toIsoDate(yesterday));
        break;
      }
      case "7d":
        this.startDate.set(this.toIsoDate(this.daysAgo(6)));
        this.endDate.set(this.toIsoDate(today));
        break;
      case "30d":
        this.startDate.set(this.toIsoDate(this.daysAgo(29)));
        this.endDate.set(this.toIsoDate(today));
        break;
      case "este-mes":
        this.startDate.set(this.toIsoDate(new Date(today.getFullYear(), today.getMonth(), 1)));
        this.endDate.set(this.toIsoDate(today));
        break;
      case "mes-anterior": {
        const firstDayLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        const lastDayLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        this.startDate.set(this.toIsoDate(firstDayLastMonth));
        this.endDate.set(this.toIsoDate(lastDayLastMonth));
        break;
      }
    }
    this.resetAndLoad();
  }
  onCustomStartDateChange(value) {
    this.activePresetId.set("personalizado");
    this.startDate.set(value);
    this.resetAndLoad();
  }
  onCustomEndDateChange(value) {
    this.activePresetId.set("personalizado");
    this.endDate.set(value);
    this.resetAndLoad();
  }
  onTypeFilterChange(value) {
    this.typeFilter.set(value);
    this.resetAndLoad();
  }
  onStatusFilterChange(value) {
    this.statusFilter.set(value);
    this.resetAndLoad();
  }
  // Só se aplica ao modo plataforma (ver platformMode) — o extrato por estabelecimento usa
  // statusFilter/onStatusFilterChange acima.
  onDirectionFilterChange(value) {
    this.directionFilter.set(value);
    this.resetAndLoad();
  }
  onSearchTermChange(value) {
    this.searchTerm.set(value);
  }
  submitSearch() {
    this.resetAndLoad();
  }
  refresh() {
    this.resetAndLoad();
  }
  loadMore() {
    this.loadExtrato(true);
  }
  // --- Detalhe ---------------------------------------------------------------
  openDetail(transacao) {
    this.selectedTransacao.set(transacao);
  }
  closeDetail() {
    this.selectedTransacao.set(null);
  }
  openPlatformDetail(transacao) {
    this.selectedPlatformTransacao.set(transacao);
  }
  closePlatformDetail() {
    this.selectedPlatformTransacao.set(null);
  }
  // --- Exportação --------------------------------------------------------------
  exportCsv() {
    if (this.platformMode()) {
      this.isExporting.set(true);
      this.exportError.set(null);
      this.platformExtratoService.exportCsv({
        startDate: this.startDate(),
        endDate: this.endDate(),
        type: this.typeFilter() || void 0,
        direction: this.directionFilter() || void 0,
        search: this.searchTerm().trim() || void 0
      }).subscribe({
        next: (blob) => {
          this.downloadBlob(blob, "extrato-plataforma.csv");
          this.isExporting.set(false);
        },
        error: () => {
          this.exportError.set("N\xE3o foi poss\xEDvel exportar o extrato.");
          this.isExporting.set(false);
        }
      });
      return;
    }
    const companyId = this.selectedCompanyId();
    if (!companyId) {
      return;
    }
    this.isExporting.set(true);
    this.exportError.set(null);
    this.extratoService.exportCsv(companyId, {
      startDate: this.startDate(),
      endDate: this.endDate(),
      type: this.typeFilter() || void 0,
      status: this.statusFilter() || void 0,
      search: this.searchTerm().trim() || void 0
    }).subscribe({
      next: (blob) => {
        this.downloadBlob(blob, "extrato-financeiro.csv");
        this.isExporting.set(false);
      },
      error: () => {
        this.exportError.set("N\xE3o foi poss\xEDvel exportar o extrato.");
        this.isExporting.set(false);
      }
    });
  }
  // -------------------------------------------------------------------------
  resetAndLoad() {
    this.nextCursor = null;
    this.transacoes.set([]);
    this.platformTransacoes.set([]);
    this.hasMore.set(false);
    this.loadExtrato(false);
  }
  loadExtrato(append) {
    if (this.platformMode()) {
      this.loadPlatformExtrato(append);
      return;
    }
    const companyId = this.selectedCompanyId();
    if (!companyId) {
      return;
    }
    if (append) {
      this.isLoadingMore.set(true);
    } else {
      this.isLoading.set(true);
    }
    this.loadError.set(null);
    this.extratoService.getExtrato(companyId, {
      startDate: this.startDate(),
      endDate: this.endDate(),
      type: this.typeFilter() || void 0,
      status: this.statusFilter() || void 0,
      search: this.searchTerm().trim() || void 0,
      cursor: append ? this.nextCursor ?? void 0 : void 0,
      limit: PAGE_SIZE
    }).subscribe({
      next: (response) => {
        this.resumo.set(response.resumo);
        this.transacoes.update((current) => append ? [...current, ...response.transacoes] : response.transacoes);
        this.hasMore.set(response.paginacao.hasMore);
        this.nextCursor = response.paginacao.nextCursor;
        this.isLoading.set(false);
        this.isLoadingMore.set(false);
      },
      error: () => {
        this.loadError.set("N\xE3o foi poss\xEDvel carregar o extrato financeiro do per\xEDodo selecionado.");
        this.isLoading.set(false);
        this.isLoadingMore.set(false);
      }
    });
  }
  loadPlatformExtrato(append) {
    if (append) {
      this.isLoadingMore.set(true);
    } else {
      this.isLoading.set(true);
    }
    this.loadError.set(null);
    this.platformExtratoService.getExtrato({
      startDate: this.startDate(),
      endDate: this.endDate(),
      type: this.typeFilter() || void 0,
      direction: this.directionFilter() || void 0,
      search: this.searchTerm().trim() || void 0,
      cursor: append ? this.nextCursor ?? void 0 : void 0,
      limit: PAGE_SIZE
    }).subscribe({
      next: (response) => {
        this.platformResumo.set(response.resumo);
        this.platformTransacoes.update((current) => append ? [...current, ...response.transacoes] : response.transacoes);
        this.hasMore.set(response.paginacao.hasMore);
        this.nextCursor = response.paginacao.nextCursor;
        this.isLoading.set(false);
        this.isLoadingMore.set(false);
      },
      error: () => {
        this.loadError.set("N\xE3o foi poss\xEDvel carregar o extrato da conta plataforma do per\xEDodo selecionado.");
        this.isLoading.set(false);
        this.isLoadingMore.set(false);
      }
    });
  }
  downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    URL.revokeObjectURL(url);
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
  static \u0275fac = function ExtratoFinanceiroComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExtratoFinanceiroComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExtratoFinanceiroComponent, selectors: [["app-extrato-financeiro"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 4, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "card", "extrato-company"], [1, "extrato-company__search"], [1, "extrato-company__label"], [1, "extrato-company__selected"], [1, "card"], [1, "modal-backdrop"], ["type", "button", "appRipple", "", 1, "extrato-company__platform-btn", 3, "click"], ["aria-hidden", "true", 1, "material-icons"], [1, "extrato-company__search-row"], ["type", "text", "placeholder", "Buscar estabelecimento por nome\u2026", 3, "input", "keyup.enter", "value"], ["type", "button", "appRipple", "", 1, "btn", "btn--ghost", 3, "click"], [1, "field__hint"], [1, "extrato-company__results"], ["type", "button", 3, "click"], [3, "change", "value"], [3, "value"], [1, "card", "extrato-summary"], [1, "card", "extrato-filters"], [1, "extrato-filters__row"], [1, "revenue-section__presets"], ["type", "button", 1, "revenue-section__preset", 3, "revenue-section__preset--active"], [1, "extrato-filters__dates"], [1, "revenue-section__date-field"], ["type", "date", 3, "change", "value", "max"], ["type", "date", 3, "change", "value", "min"], ["type", "text", "placeholder", "Buscar por PaymentIntent, Charge, Balance Transaction ou comanda\u2026", 1, "extrato-filters__search", 3, "input", "keyup.enter", "value"], ["type", "button", "appRipple", "", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["role", "alert", 1, "form-alert", "form-alert--error"], [1, "card", "extrato-table-card"], [1, "stat-grid"], [1, "stat-card"], ["aria-hidden", "true", 1, "material-icons", "stat-card__icon"], [1, "stat-card__label"], [1, "stat-card__value"], ["type", "button", 1, "revenue-section__preset", 3, "click"], [1, "extrato-table-wrapper"], [1, "extrato-table"], [1, "extrato-table__number"], [1, "extrato-table__row"], [1, "extrato-load-more"], [1, "extrato-table__row", 3, "click"], [1, "extrato-status"], [1, "modal-backdrop", 3, "click"], [1, "modal-card", "card", 3, "click"], [1, "modal-card__header"], [1, "step-heading"], ["type", "button", "aria-label", "Fechar", 1, "icon-btn", 3, "click"], [1, "extrato-detail"], [1, "extrato-detail__section-title"]], template: function ExtratoFinanceiroComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Extrato Financeiro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, "Movimenta\xE7\xF5es da conta Stripe do estabelecimento \u2014 bruto, taxas e l\xEDquido direto da Stripe.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3);
      \u0275\u0275template(6, ExtratoFinanceiroComponent_Conditional_6_Template, 17, 6, "div", 4)(7, ExtratoFinanceiroComponent_Conditional_7_Template, 6, 1, "label", 5)(8, ExtratoFinanceiroComponent_Conditional_8_Template, 4, 1, "p", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, ExtratoFinanceiroComponent_Conditional_9_Template, 3, 0, "div", 7)(10, ExtratoFinanceiroComponent_Conditional_10_Template, 39, 14)(11, ExtratoFinanceiroComponent_Conditional_11_Template, 63, 11, "div", 8)(12, ExtratoFinanceiroComponent_Conditional_12_Template, 67, 11, "div", 8);
    }
    if (rf & 2) {
      let tmp_2_0;
      let tmp_3_0;
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.isPlatformAdmin() ? 6 : ctx.myCompanies().length > 1 ? 7 : 8);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.hasCompany() ? 9 : 10);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_2_0 = ctx.selectedTransacao()) ? 11 : -1, tmp_2_0);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_3_0 = ctx.selectedPlatformTransacao()) ? 12 : -1, tmp_3_0);
    }
  }, dependencies: [RippleDirective], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n  color: var(--color-text-muted);\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.card[_ngcontent-%COMP%]    + .card[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.extrato-company[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n.extrato-company__label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.extrato-company__label[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.extrato-company__label[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  background: var(--color-bg-elevated);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  color: var(--color-text);\n  padding: 8px 12px;\n  font-size: 0.9375rem;\n}\n.extrato-company__platform-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  align-self: flex-start;\n  margin-bottom: 14px;\n  padding: 8px 16px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border);\n  background: transparent;\n  color: var(--color-text);\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition:\n    background var(--transition-fast),\n    color var(--transition-fast),\n    border-color var(--transition-fast);\n}\n.extrato-company__platform-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.extrato-company__platform-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.extrato-company__platform-btn--active[_ngcontent-%COMP%] {\n  border-color: var(--color-accent);\n  background: rgba(255, 255, 255, 0.08);\n}\n.extrato-company__search-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.extrato-company__search-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.extrato-company__selected[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: var(--color-text);\n  margin: 0;\n}\n.extrato-company__results[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 8px 0 0;\n  padding: 0;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  max-height: 220px;\n  overflow-y: auto;\n}\n.extrato-company__results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  text-align: left;\n  padding: 10px 14px;\n  background: transparent;\n  border: none;\n  color: var(--color-text);\n  cursor: pointer;\n  font-size: 0.9375rem;\n}\n.extrato-company__results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.extrato-summary[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.stat-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));\n  gap: 16px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 18px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  background: var(--color-bg-elevated);\n}\n.stat-card__icon[_ngcontent-%COMP%] {\n  color: var(--color-accent-hover);\n  font-size: 20px;\n}\n.stat-card__label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.stat-card__value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.extrato-filters[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.extrato-filters__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  justify-content: space-between;\n}\n.extrato-filters__row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: var(--color-bg-elevated);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  color: var(--color-text);\n  padding: 8px 12px;\n  font-size: 0.875rem;\n}\n.extrato-filters__dates[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.extrato-filters__search[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 240px;\n  background: var(--color-bg-elevated);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  color: var(--color-text);\n  padding: 8px 12px;\n  font-size: 0.875rem;\n}\n.revenue-section__presets[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.revenue-section__preset[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border);\n  background: transparent;\n  color: var(--color-text-muted);\n  font-size: 0.8125rem;\n  cursor: pointer;\n  transition:\n    background var(--transition-fast),\n    color var(--transition-fast),\n    border-color var(--transition-fast);\n}\n.revenue-section__preset[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.revenue-section__preset--active[_ngcontent-%COMP%] {\n  border-color: var(--color-accent);\n  color: var(--color-text);\n  background: rgba(255, 255, 255, 0.08);\n}\n.revenue-section__date-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.revenue-section__date-field[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%] {\n  background: var(--color-bg-elevated);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  color: var(--color-text);\n  padding: 6px 10px;\n  font-size: 0.8125rem;\n  color-scheme: dark;\n}\n.extrato-table-card[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.extrato-table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.extrato-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.extrato-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.extrato-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  text-align: left;\n  border-bottom: 1px solid var(--color-border);\n  white-space: nowrap;\n}\n.extrato-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-weight: 600;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.extrato-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--color-text);\n}\n.extrato-table__number[_ngcontent-%COMP%] {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.extrato-table__row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background var(--transition-fast);\n}\n.extrato-table__row[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.04);\n}\n.extrato-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 3px 10px;\n  border-radius: var(--radius-full);\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: var(--color-success-bg, rgba(34, 197, 94, 0.14));\n  color: var(--color-success, #22c55e);\n}\n.extrato-status--pending[_ngcontent-%COMP%] {\n  background: rgba(234, 179, 8, 0.14);\n  color: #eab308;\n}\n.extrato-load-more[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(4, 8, 20, 0.64);\n  backdrop-filter: blur(2px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  z-index: 100;\n}\n.modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 640px;\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n  padding: 32px;\n}\n.modal-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.step-heading[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n}\n.icon-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius-sm);\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text);\n}\n.extrato-detail[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 12px 20px;\n  margin: 0 0 16px;\n}\n.extrato-detail[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.extrato-detail[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 0.9375rem;\n  color: var(--color-text);\n  word-break: break-all;\n}\n.extrato-detail__section-title[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  color: var(--color-text-muted);\n  margin: 20px 0 8px;\n  padding-top: 12px;\n  border-top: 1px solid var(--color-border);\n}\n/*# sourceMappingURL=extrato-financeiro.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExtratoFinanceiroComponent, { className: "ExtratoFinanceiroComponent", filePath: "src\\app\\features\\admin\\pages\\extrato-financeiro\\extrato-financeiro.component.ts", lineNumber: 88 });
})();
export {
  ExtratoFinanceiroComponent
};
//# sourceMappingURL=chunk-IZK2IHLA.js.map
