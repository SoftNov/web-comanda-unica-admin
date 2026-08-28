import {
  LineChartComponent
} from "./chunk-WKVFTQ4N.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-LB27EVIX.js";
import {
  RippleDirective
} from "./chunk-RYRFSZ2Z.js";
import {
  autoDismiss
} from "./chunk-JD6JJHYZ.js";
import {
  environment
} from "./chunk-3BRF5UDA.js";
import {
  HttpClient,
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
} from "./chunk-MHTOAZDV.js";

// src/app/shared/services/platform-fee-rules.service.ts
var PlatformFeeRulesService = class _PlatformFeeRulesService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiBaseUrl}/api/v1/platform/fee-rules`;
  getDefault() {
    return this.http.get(`${this.baseUrl}/default`);
  }
  updateDefault(payload) {
    return this.http.put(`${this.baseUrl}/default`, payload);
  }
  listCompanies(params = {}) {
    const httpParams = {
      page: String(params.page ?? 0),
      size: String(params.size ?? 20)
    };
    if (params.search) {
      httpParams["search"] = params.search;
    }
    return this.http.get(`${this.baseUrl}/companies`, { params: httpParams });
  }
  upsertCompanyRule(companyId, payload) {
    return this.http.put(`${this.baseUrl}/companies/${companyId}`, payload);
  }
  removeCompanyRule(companyId) {
    return this.http.delete(`${this.baseUrl}/companies/${companyId}`);
  }
  static \u0275fac = function PlatformFeeRulesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlatformFeeRulesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PlatformFeeRulesService, factory: _PlatformFeeRulesService.\u0275fac, providedIn: "root" });
};

// src/app/shared/services/platform-finance.service.ts
var PlatformFinanceService = class _PlatformFinanceService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiBaseUrl}/api/v1/platform/finance`;
  // startDate/endDate no formato yyyy-MM-dd; sem eles, o backend retorna os últimos 30 dias.
  getFinanceSummary(startDate, endDate) {
    const params = {};
    if (startDate) {
      params["startDate"] = startDate;
    }
    if (endDate) {
      params["endDate"] = endDate;
    }
    return this.http.get(`${this.baseUrl}/summary`, { params });
  }
  static \u0275fac = function PlatformFinanceService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlatformFinanceService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PlatformFinanceService, factory: _PlatformFinanceService.\u0275fac, providedIn: "root" });
};

// src/app/features/admin/pages/financeiro-plataforma/financeiro-plataforma.component.ts
var _forTrack0 = ($index, $item) => $item.days;
var _forTrack1 = ($index, $item) => $item.companyId;
function FinanceiroPlataformaComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function FinanceiroPlataformaComponent_For_24_Template_button_click_0_listener() {
      const preset_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyFinancePreset(preset_r2.days));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const preset_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("fees-card__preset--active", ctx_r2.activeFinancePresetDays() === preset_r2.days);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", preset_r2.label, " ");
  }
}
function FinanceiroPlataformaComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 29);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.financeError(), " ");
  }
}
function FinanceiroPlataformaComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1, "Carregando taxas recebidas\u2026");
    \u0275\u0275elementEnd();
  }
}
function FinanceiroPlataformaComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-line-chart", 20);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("points", ctx_r2.feePoints())("height", 240);
  }
}
function FinanceiroPlataformaComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1, "Carregando regra padr\xE3o\u2026");
    \u0275\u0275elementEnd();
  }
}
function FinanceiroPlataformaComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 29);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.defaultError(), " ");
  }
}
function FinanceiroPlataformaComponent_Conditional_44_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 29);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.defaultSaveError(), " ");
  }
}
function FinanceiroPlataformaComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 30);
    \u0275\u0275listener("submit", function FinanceiroPlataformaComponent_Conditional_44_Template_form_submit_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r2.submitDefaultForm());
    });
    \u0275\u0275elementStart(1, "div", 31)(2, "div", 32)(3, "label", 33);
    \u0275\u0275text(4, "Percentual at\xE9 a faixa (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 25);
    \u0275\u0275element(6, "input", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 32)(8, "label", 35);
    \u0275\u0275text(9, "Faixa (R$)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 25);
    \u0275\u0275element(11, "input", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 32)(13, "label", 37);
    \u0275\u0275text(14, "Valor fixo acima da faixa (R$)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 25);
    \u0275\u0275element(16, "input", 38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "p", 19);
    \u0275\u0275text(18, " Comandas at\xE9 o valor da faixa pagam o percentual sobre o pr\xF3prio valor; acima da faixa, pagam o valor fixo. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, FinanceiroPlataformaComponent_Conditional_44_Conditional_19_Template, 4, 1, "div", 18);
    \u0275\u0275elementStart(20, "div", 39)(21, "button", 40);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 41)(24, "label", 42);
    \u0275\u0275text(25, "Simular cobran\xE7a para uma comanda de");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 43)(27, "div", 44)(28, "input", 45);
    \u0275\u0275listener("input", function FinanceiroPlataformaComponent_Conditional_44_Template_input_input_28_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSimulatorAmountChange($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "span", 46);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r2.defaultForm);
    \u0275\u0275advance(19);
    \u0275\u0275conditional(ctx_r2.defaultSaveError() ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.isSavingDefault());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isSavingDefault() ? "Salvando\u2026" : "Salvar regra padr\xE3o", " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r2.simulatorAmount());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatCurrency(ctx_r2.simulatedFee((tmp_6_0 = ctx_r2.defaultRule()) == null ? null : tmp_6_0.percentageRate, (tmp_6_0 = ctx_r2.defaultRule()) == null ? null : tmp_6_0.thresholdAmount, (tmp_6_0 = ctx_r2.defaultRule()) == null ? null : tmp_6_0.maxAmount)), " ");
  }
}
function FinanceiroPlataformaComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1, "Carregando empresas\u2026");
    \u0275\u0275elementEnd();
  }
}
function FinanceiroPlataformaComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 29);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.companiesError(), " ");
  }
}
function FinanceiroPlataformaComponent_Conditional_54_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 29);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.removeError(), " ");
  }
}
function FinanceiroPlataformaComponent_Conditional_54_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 54);
    \u0275\u0275text(2, "Nenhuma empresa encontrada.");
    \u0275\u0275elementEnd()();
  }
}
function FinanceiroPlataformaComponent_Conditional_54_For_24_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function FinanceiroPlataformaComponent_Conditional_54_For_24_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const company_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeCustomization(company_r7));
    });
    \u0275\u0275elementStart(1, "span", 29);
    \u0275\u0275text(2, "restart_alt");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const company_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.removingCompanyId() === company_r7.companyId);
  }
}
function FinanceiroPlataformaComponent_Conditional_54_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
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
    \u0275\u0275elementStart(11, "td")(12, "span", 55);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 49)(17, "button", 56);
    \u0275\u0275listener("click", function FinanceiroPlataformaComponent_Conditional_54_For_24_Template_button_click_17_listener() {
      const company_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEditModal(company_r7));
    });
    \u0275\u0275elementStart(18, "span", 29);
    \u0275\u0275text(19, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, FinanceiroPlataformaComponent_Conditional_54_For_24_Conditional_20_Template, 3, 1, "button", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const company_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(company_r7.companyName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", company_r7.percentageRate, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(company_r7.thresholdAmount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(company_r7.maxAmount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(ctx_r2.simulatedFee(company_r7.percentageRate, company_r7.thresholdAmount, company_r7.maxAmount)));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(company_r7.customized ? "badge--warning" : "badge--muted");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", company_r7.customized ? "Customizada" : "Padr\xE3o", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDateTime(company_r7.updatedAt));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(company_r7.customized ? 20 : -1);
  }
}
function FinanceiroPlataformaComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, FinanceiroPlataformaComponent_Conditional_54_Conditional_0_Template, 4, 1, "div", 18);
    \u0275\u0275elementStart(1, "div", 47)(2, "table", 48)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Empresa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Percentual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Faixa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Valor fixo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Cobran\xE7a simulada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Regra");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Atualizado em");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 49);
    \u0275\u0275text(20, "A\xE7\xF5es");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275template(22, FinanceiroPlataformaComponent_Conditional_54_Conditional_22_Template, 3, 0, "tr");
    \u0275\u0275repeaterCreate(23, FinanceiroPlataformaComponent_Conditional_54_For_24_Template, 21, 10, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 50)(26, "span", 51);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 52)(29, "button", 53);
    \u0275\u0275listener("click", function FinanceiroPlataformaComponent_Conditional_54_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.previousPage());
    });
    \u0275\u0275elementStart(30, "span", 29);
    \u0275\u0275text(31, "chevron_left");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " Anterior ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 53);
    \u0275\u0275listener("click", function FinanceiroPlataformaComponent_Conditional_54_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.nextPage());
    });
    \u0275\u0275text(34, " Pr\xF3xima ");
    \u0275\u0275elementStart(35, "span", 29);
    \u0275\u0275text(36, "chevron_right");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.removeError() ? 0 : -1);
    \u0275\u0275advance(22);
    \u0275\u0275conditional(ctx_r2.companies().length === 0 ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.companies());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r2.totalElements(), " empresa(s) \u2014 ", ctx_r2.pageLabel(), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.page() === 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.isLast());
  }
}
function FinanceiroPlataformaComponent_Conditional_55_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 29);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.companySaveError(), " ");
  }
}
function FinanceiroPlataformaComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275listener("click", function FinanceiroPlataformaComponent_Conditional_55_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEditModal());
    });
    \u0275\u0275elementStart(1, "div", 60);
    \u0275\u0275listener("click", function FinanceiroPlataformaComponent_Conditional_55_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 61)(3, "h2", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 63);
    \u0275\u0275listener("click", function FinanceiroPlataformaComponent_Conditional_55_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEditModal());
    });
    \u0275\u0275elementStart(6, "span", 29);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "form", 30);
    \u0275\u0275listener("submit", function FinanceiroPlataformaComponent_Conditional_55_Template_form_submit_8_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r2.submitCompanyForm());
    });
    \u0275\u0275elementStart(9, "div", 32)(10, "label", 64);
    \u0275\u0275text(11, "Percentual at\xE9 a faixa (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 25);
    \u0275\u0275element(13, "input", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 32)(15, "label", 66);
    \u0275\u0275text(16, "Faixa (R$)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 25);
    \u0275\u0275element(18, "input", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 32)(20, "label", 68);
    \u0275\u0275text(21, "Valor fixo acima da faixa (R$)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 25);
    \u0275\u0275element(23, "input", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, FinanceiroPlataformaComponent_Conditional_55_Conditional_24_Template, 4, 1, "div", 18);
    \u0275\u0275elementStart(25, "div", 39)(26, "button", 40);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 70);
    \u0275\u0275listener("click", function FinanceiroPlataformaComponent_Conditional_55_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEditModal());
    });
    \u0275\u0275text(29, "Cancelar");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Customizar regra \u2014 ", ctx.companyName, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r2.companyForm);
    \u0275\u0275advance(16);
    \u0275\u0275conditional(ctx_r2.companySaveError() ? 24 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.isSavingCompany());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isSavingCompany() ? "Salvando\u2026" : "Salvar", " ");
  }
}
var FINANCE_PRESETS = [
  { label: "7 dias", days: 7 },
  { label: "30 dias", days: 30 },
  { label: "90 dias", days: 90 }
];
var PAGE_SIZE = 10;
var FinanceiroPlataformaComponent = class _FinanceiroPlataformaComponent {
  fb = new FormBuilder();
  platformFeeRulesService = inject(PlatformFeeRulesService);
  platformFinanceService = inject(PlatformFinanceService);
  currencyFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
  dateTimeFormatter = new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short" });
  // --- Taxas recebidas -------------------------------------------------------------
  financePresets = FINANCE_PRESETS;
  feePoints = signal([]);
  totalFeeAmount = signal(0);
  stripeBalance = signal(null);
  isLoadingFinance = signal(true);
  financeError = signal(null);
  financeStartDate = signal(this.toIsoDate(this.daysAgo(29)));
  financeEndDate = signal(this.toIsoDate(/* @__PURE__ */ new Date()));
  activeFinancePresetDays = signal(30);
  // --- Regra padrão -----------------------------------------------------------------
  defaultRule = signal(null);
  isLoadingDefault = signal(true);
  defaultError = signal(null);
  isSavingDefault = signal(false);
  defaultSaveError = signal(null);
  defaultForm = this.fb.nonNullable.group({
    percentageRate: this.fb.control(null, [Validators.required, Validators.min(0.01), Validators.max(100)]),
    thresholdAmount: this.fb.control(null, [Validators.required, Validators.min(0.01)]),
    maxAmount: this.fb.control(null, [Validators.required, Validators.min(0.01)])
  });
  // --- Simulador ----------------------------------------------------------------------
  simulatorAmount = signal(100);
  // --- Empresas -------------------------------------------------------------------------
  companies = signal([]);
  page = signal(0);
  totalPages = signal(0);
  totalElements = signal(0);
  isLast = signal(true);
  isLoadingCompanies = signal(true);
  companiesError = signal(null);
  searchTerm = signal("");
  pageLabel = computed(() => `P\xE1gina ${this.page() + 1} de ${Math.max(this.totalPages(), 1)}`);
  // --- Modal de customização por empresa ------------------------------------------------
  editingCompany = signal(null);
  isSavingCompany = signal(false);
  companySaveError = signal(null);
  companyForm = this.fb.nonNullable.group({
    percentageRate: this.fb.control(null, [Validators.required, Validators.min(0.01), Validators.max(100)]),
    thresholdAmount: this.fb.control(null, [Validators.required, Validators.min(0.01)]),
    maxAmount: this.fb.control(null, [Validators.required, Validators.min(0.01)])
  });
  removingCompanyId = signal(null);
  removeError = signal(null);
  constructor() {
    this.loadFinance();
    this.loadDefaultRule();
    this.loadCompanies(0);
  }
  formatCurrency(value) {
    return value != null ? this.currencyFormatter.format(value) : "\u2014";
  }
  formatDateTime(value) {
    return value ? this.dateTimeFormatter.format(new Date(value)) : "\u2014";
  }
  // --- Taxas recebidas -------------------------------------------------------------
  applyFinancePreset(days) {
    this.activeFinancePresetDays.set(days);
    this.financeStartDate.set(this.toIsoDate(this.daysAgo(days - 1)));
    this.financeEndDate.set(this.toIsoDate(/* @__PURE__ */ new Date()));
    this.loadFinance();
  }
  onFinanceStartDateChange(value) {
    this.activeFinancePresetDays.set(null);
    this.financeStartDate.set(value);
    this.loadFinance();
  }
  onFinanceEndDateChange(value) {
    this.activeFinancePresetDays.set(null);
    this.financeEndDate.set(value);
    this.loadFinance();
  }
  loadFinance() {
    this.isLoadingFinance.set(true);
    this.financeError.set(null);
    this.platformFinanceService.getFinanceSummary(this.financeStartDate(), this.financeEndDate()).subscribe({
      next: (summary) => {
        this.feePoints.set(summary.feeSeries.map((point) => ({ date: point.date, amount: point.amount })));
        this.totalFeeAmount.set(summary.totalFeeAmount);
        this.stripeBalance.set(summary.stripeAvailableBalance);
        this.isLoadingFinance.set(false);
      },
      error: () => {
        this.isLoadingFinance.set(false);
        this.financeError.set("N\xE3o foi poss\xEDvel carregar as taxas recebidas do per\xEDodo.");
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
  // Cálculo ao vivo, sem ida ao backend — cobrança por faixa: até thresholdAmount cobra o
  // percentual sobre o próprio valor; acima disso, cobra maxAmount fixo (não é mais um teto que
  // o percentual eventualmente atinge).
  simulatedFee(percentageRate, thresholdAmount, maxAmount) {
    const amount = this.simulatorAmount();
    if (amount == null || percentageRate == null || thresholdAmount == null || maxAmount == null) {
      return 0;
    }
    return amount <= thresholdAmount ? amount * (percentageRate / 100) : maxAmount;
  }
  onSimulatorAmountChange(value) {
    const parsed = Number(value.replace(",", "."));
    this.simulatorAmount.set(isNaN(parsed) ? null : parsed);
  }
  // --- Regra padrão -----------------------------------------------------------------
  loadDefaultRule() {
    this.isLoadingDefault.set(true);
    this.defaultError.set(null);
    this.platformFeeRulesService.getDefault().subscribe({
      next: (rule) => {
        this.defaultRule.set(rule);
        this.defaultForm.reset({ percentageRate: rule.percentageRate, thresholdAmount: rule.thresholdAmount, maxAmount: rule.maxAmount });
        this.isLoadingDefault.set(false);
      },
      error: () => {
        this.isLoadingDefault.set(false);
        this.defaultError.set("N\xE3o foi poss\xEDvel carregar a regra padr\xE3o.");
      }
    });
  }
  submitDefaultForm() {
    if (this.defaultForm.invalid) {
      this.defaultForm.markAllAsTouched();
      return;
    }
    const value = this.defaultForm.getRawValue();
    const payload = {
      percentageRate: value.percentageRate ?? 0,
      thresholdAmount: value.thresholdAmount ?? 0,
      maxAmount: value.maxAmount ?? 0
    };
    this.isSavingDefault.set(true);
    this.defaultSaveError.set(null);
    this.platformFeeRulesService.updateDefault(payload).subscribe({
      next: (rule) => {
        this.isSavingDefault.set(false);
        this.defaultRule.set(rule);
        this.loadCompanies(this.page());
      },
      error: (error) => {
        this.isSavingDefault.set(false);
        this.defaultSaveError.set(this.resolveErrorMessage(error));
        autoDismiss(this.defaultSaveError, null);
      }
    });
  }
  // --- Empresas -----------------------------------------------------------------------
  loadCompanies(page) {
    this.isLoadingCompanies.set(true);
    this.companiesError.set(null);
    this.platformFeeRulesService.listCompanies({ search: this.searchTerm() || void 0, page, size: PAGE_SIZE }).subscribe({
      next: (response) => {
        this.companies.set(response.content);
        this.page.set(response.page);
        this.totalPages.set(response.totalPages);
        this.totalElements.set(response.totalElements);
        this.isLast.set(response.last);
        this.isLoadingCompanies.set(false);
      },
      error: () => {
        this.isLoadingCompanies.set(false);
        this.companiesError.set("N\xE3o foi poss\xEDvel carregar as empresas.");
      }
    });
  }
  onSearchChange(value) {
    this.searchTerm.set(value);
    this.loadCompanies(0);
  }
  previousPage() {
    if (this.page() > 0) {
      this.loadCompanies(this.page() - 1);
    }
  }
  nextPage() {
    if (!this.isLast()) {
      this.loadCompanies(this.page() + 1);
    }
  }
  // --- Customização por empresa ---------------------------------------------------------
  openEditModal(company) {
    this.companySaveError.set(null);
    this.companyForm.reset({
      percentageRate: company.percentageRate,
      thresholdAmount: company.thresholdAmount,
      maxAmount: company.maxAmount
    });
    this.editingCompany.set(company);
  }
  closeEditModal() {
    if (this.isSavingCompany()) {
      return;
    }
    this.editingCompany.set(null);
  }
  submitCompanyForm() {
    const company = this.editingCompany();
    if (!company || this.companyForm.invalid) {
      this.companyForm.markAllAsTouched();
      return;
    }
    const value = this.companyForm.getRawValue();
    const payload = {
      percentageRate: value.percentageRate ?? 0,
      thresholdAmount: value.thresholdAmount ?? 0,
      maxAmount: value.maxAmount ?? 0
    };
    this.isSavingCompany.set(true);
    this.companySaveError.set(null);
    this.platformFeeRulesService.upsertCompanyRule(company.companyId, payload).subscribe({
      next: (updated) => {
        this.isSavingCompany.set(false);
        this.editingCompany.set(null);
        this.applyUpdatedCompany(updated);
      },
      error: (error) => {
        this.isSavingCompany.set(false);
        this.companySaveError.set(this.resolveErrorMessage(error));
        autoDismiss(this.companySaveError, null);
      }
    });
  }
  removeCustomization(company) {
    this.removingCompanyId.set(company.companyId);
    this.removeError.set(null);
    this.platformFeeRulesService.removeCompanyRule(company.companyId).subscribe({
      next: (updated) => {
        this.removingCompanyId.set(null);
        this.applyUpdatedCompany(updated);
      },
      error: (error) => {
        this.removingCompanyId.set(null);
        this.removeError.set(this.resolveErrorMessage(error));
        autoDismiss(this.removeError, null);
      }
    });
  }
  applyUpdatedCompany(updated) {
    this.companies.update((list) => list.map((current) => current.companyId === updated.companyId ? updated : current));
  }
  resolveErrorMessage(error) {
    const body = error.error;
    if (body?.mensagem) {
      return body.mensagem;
    }
    if (body?.titulo) {
      return body.titulo;
    }
    if (error.status === 403) {
      return "Voc\xEA n\xE3o tem permiss\xE3o para acessar este painel.";
    }
    if (error.status === 404) {
      return "Empresa n\xE3o encontrada.";
    }
    if (error.status === 422 || error.status === 400) {
      return "Verifique os valores informados.";
    }
    return "N\xE3o foi poss\xEDvel concluir a opera\xE7\xE3o. Tente novamente em instantes.";
  }
  static \u0275fac = function FinanceiroPlataformaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FinanceiroPlataformaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FinanceiroPlataformaComponent, selectors: [["app-admin-financeiro-plataforma"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 56, vars: 11, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "card", "fees-card"], [1, "fees-card__header"], [1, "fees-card__heading"], [1, "section-title"], [1, "fees-card__totals"], [1, "fees-card__total"], [1, "fees-card__total-value"], [1, "fees-card__total-label"], [1, "fees-card__controls"], [1, "fees-card__presets"], ["type", "button", 1, "fees-card__preset", 3, "fees-card__preset--active"], [1, "fees-card__range"], [1, "fees-card__date-field"], ["type", "date", 3, "change", "value", "max"], ["type", "date", 3, "change", "value", "min"], ["role", "alert", 1, "form-alert", "form-alert--error"], [1, "field__hint"], [3, "points", "height"], [1, "card", "default-rule-card"], [1, "card", "companies-card"], [1, "companies-card__header"], [1, "field", "companies-card__search"], [1, "field__control"], ["type", "text", "placeholder", "Buscar por nome", 1, "field__input", 3, "input", "value"], [1, "modal-backdrop"], ["type", "button", 1, "fees-card__preset", 3, "click"], ["aria-hidden", "true", 1, "material-icons"], ["novalidate", "", 3, "submit", "formGroup"], [1, "field__row"], [1, "field"], ["for", "default-percentage", 1, "field__label"], ["id", "default-percentage", "type", "number", "min", "0.01", "max", "100", "step", "0.01", "formControlName", "percentageRate", "placeholder", "1,00", 1, "field__input"], ["for", "default-threshold", 1, "field__label"], ["id", "default-threshold", "type", "number", "min", "0.01", "step", "0.01", "formControlName", "thresholdAmount", "placeholder", "50,00", 1, "field__input"], ["for", "default-max", 1, "field__label"], ["id", "default-max", "type", "number", "min", "0.01", "step", "0.01", "formControlName", "maxAmount", "placeholder", "3,00", 1, "field__input"], [1, "step-actions"], ["type", "submit", "appRipple", "", 1, "btn", "btn--primary", 3, "disabled"], [1, "simulator"], ["for", "simulator-amount", 1, "field__label"], [1, "simulator__row"], [1, "field__control", "simulator__input"], ["id", "simulator-amount", "type", "number", "min", "0", "step", "0.01", 1, "field__input", 3, "input", "value"], [1, "simulator__result"], [1, "table-wrapper"], [1, "data-table"], [1, "data-table__actions-col"], [1, "pagination"], [1, "pagination__info"], [1, "pagination__controls"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click", "disabled"], ["colspan", "8", 1, "data-table__empty"], [1, "badge"], ["type", "button", "title", "Customizar regra", 1, "icon-btn", 3, "click"], ["type", "button", "title", "Remover customiza\xE7\xE3o (volta \xE0 regra padr\xE3o)", 1, "icon-btn", "icon-btn--danger", 3, "disabled"], ["type", "button", "title", "Remover customiza\xE7\xE3o (volta \xE0 regra padr\xE3o)", 1, "icon-btn", "icon-btn--danger", 3, "click", "disabled"], [1, "modal-backdrop", 3, "click"], [1, "modal-card", "modal-card--sm", "card", 3, "click"], [1, "modal-card__header"], [1, "step-heading"], ["type", "button", "aria-label", "Fechar", 1, "icon-btn", 3, "click"], ["for", "company-percentage", 1, "field__label"], ["id", "company-percentage", "type", "number", "min", "0.01", "max", "100", "step", "0.01", "formControlName", "percentageRate", 1, "field__input"], ["for", "company-threshold", 1, "field__label"], ["id", "company-threshold", "type", "number", "min", "0.01", "step", "0.01", "formControlName", "thresholdAmount", 1, "field__input"], ["for", "company-max", 1, "field__label"], ["id", "company-max", "type", "number", "min", "0.01", "step", "0.01", "formControlName", "maxAmount", 1, "field__input"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"]], template: function FinanceiroPlataformaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Financeiro \u2014 Comanda \xDAnica");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, " Taxas recebidas dos estabelecimentos e regra de cobran\xE7a da plataforma. Painel exclusivo da equipe Comanda \xDAnica. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "h2", 6);
      \u0275\u0275text(9, "Taxas recebidas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "span", 9);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span", 10);
      \u0275\u0275text(15, "taxas no per\xEDodo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 8)(17, "span", 9);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span", 10);
      \u0275\u0275text(20, "saldo dispon\xEDvel na Stripe da plataforma");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 11)(22, "div", 12);
      \u0275\u0275repeaterCreate(23, FinanceiroPlataformaComponent_For_24_Template, 2, 3, "button", 13, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 14)(26, "label", 15)(27, "span");
      \u0275\u0275text(28, "De");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "input", 16);
      \u0275\u0275listener("change", function FinanceiroPlataformaComponent_Template_input_change_29_listener($event) {
        return ctx.onFinanceStartDateChange($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "label", 15)(31, "span");
      \u0275\u0275text(32, "At\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "input", 17);
      \u0275\u0275listener("change", function FinanceiroPlataformaComponent_Template_input_change_33_listener($event) {
        return ctx.onFinanceEndDateChange($event.target.value);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(34, FinanceiroPlataformaComponent_Conditional_34_Template, 4, 1, "div", 18)(35, FinanceiroPlataformaComponent_Conditional_35_Template, 2, 0, "p", 19)(36, FinanceiroPlataformaComponent_Conditional_36_Template, 1, 2, "app-line-chart", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 21)(38, "h2", 6);
      \u0275\u0275text(39, "Regra padr\xE3o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "p", 19);
      \u0275\u0275text(41, "Aplicada a qualquer empresa sem customiza\xE7\xE3o pr\xF3pria.");
      \u0275\u0275elementEnd();
      \u0275\u0275template(42, FinanceiroPlataformaComponent_Conditional_42_Template, 2, 0, "p", 19)(43, FinanceiroPlataformaComponent_Conditional_43_Template, 4, 1, "div", 18)(44, FinanceiroPlataformaComponent_Conditional_44_Template, 31, 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 22)(46, "div", 23)(47, "h2", 6);
      \u0275\u0275text(48, "Empresas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 24)(50, "div", 25)(51, "input", 26);
      \u0275\u0275listener("input", function FinanceiroPlataformaComponent_Template_input_input_51_listener($event) {
        return ctx.onSearchChange($event.target.value);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(52, FinanceiroPlataformaComponent_Conditional_52_Template, 2, 0, "p", 19)(53, FinanceiroPlataformaComponent_Conditional_53_Template, 4, 1, "div", 18)(54, FinanceiroPlataformaComponent_Conditional_54_Template, 37, 6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(55, FinanceiroPlataformaComponent_Conditional_55_Template, 30, 5, "div", 27);
    }
    if (rf & 2) {
      let tmp_11_0;
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(ctx.isLoadingFinance() ? "\u2014" : ctx.formatCurrency(ctx.totalFeeAmount()));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.isLoadingFinance() ? "\u2014" : ctx.stripeBalance() != null ? ctx.formatCurrency(ctx.stripeBalance()) : "\u2014", " ");
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.financePresets);
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.financeStartDate())("max", ctx.financeEndDate());
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.financeEndDate())("min", ctx.financeStartDate());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.financeError() ? 34 : ctx.isLoadingFinance() ? 35 : 36);
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.isLoadingDefault() ? 42 : ctx.defaultError() ? 43 : 44);
      \u0275\u0275advance(9);
      \u0275\u0275property("value", ctx.searchTerm());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoadingCompanies() ? 52 : ctx.companiesError() ? 53 : 54);
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_11_0 = ctx.editingCompany()) ? 55 : -1, tmp_11_0);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, RippleDirective, LineChartComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.fees-card[_ngcontent-%COMP%] {\n  padding: 24px;\n  margin-bottom: 20px;\n}\n.fees-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin-bottom: 16px;\n}\n.fees-card__heading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.fees-card__totals[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px 32px;\n}\n.fees-card__total[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.fees-card__total-value[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--color-text);\n  line-height: 1.1;\n}\n.fees-card__total-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.fees-card__controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  align-items: flex-end;\n}\n.fees-card__presets[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.fees-card__preset[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  color: var(--color-text-muted);\n  font-size: 0.8125rem;\n  padding: 6px 12px;\n  cursor: pointer;\n}\n.fees-card__preset--active[_ngcontent-%COMP%] {\n  background: var(--color-accent);\n  border-color: var(--color-accent);\n  color: #fff;\n}\n.fees-card__range[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.fees-card__date-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.fees-card__date-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: var(--color-bg-elevated);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-sm);\n  color: var(--color-text);\n  padding: 6px 8px;\n  font-size: 0.8125rem;\n  color-scheme: dark;\n}\n.field__row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.field__row[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 180px;\n}\n.step-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n.section-title[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 1.125rem;\n  color: var(--color-text);\n}\n.default-rule-card[_ngcontent-%COMP%] {\n  padding: 24px;\n  margin-bottom: 20px;\n}\n.simulator[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid var(--color-border);\n}\n.simulator__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin-top: 8px;\n}\n.simulator__input[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n.simulator__result[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--color-success);\n}\n.companies-card[_ngcontent-%COMP%] {\n  padding: 8px 0 0;\n  overflow: hidden;\n}\n.companies-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  padding: 20px 20px 4px;\n}\n.companies-card__search[_ngcontent-%COMP%] {\n  min-width: 220px;\n  margin-bottom: 0;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.9375rem;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  text-align: left;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: 1px solid var(--color-border);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--color-border);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.02);\n}\n.data-table__actions-col[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.data-table__empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--color-text-muted);\n  padding: 32px 20px;\n  white-space: normal;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: var(--radius-full);\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.badge--muted[_ngcontent-%COMP%] {\n  background: rgba(203, 213, 225, 0.12);\n  color: var(--color-text-muted);\n}\n.badge--warning[_ngcontent-%COMP%] {\n  background: rgba(250, 204, 21, 0.14);\n  color: #facc15;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius-sm);\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text);\n}\n.icon-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.icon-btn[_ngcontent-%COMP%]    + .icon-btn[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.icon-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(248, 113, 113, 0.12);\n  color: #f87171;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  padding: 16px 20px;\n}\n.pagination__info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n.pagination__controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(4, 8, 20, 0.64);\n  backdrop-filter: blur(2px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  z-index: 100;\n}\n.modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 640px;\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n  padding: 32px;\n}\n.modal-card--sm[_ngcontent-%COMP%] {\n  max-width: 420px;\n}\n.modal-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.step-heading[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n}\n/*# sourceMappingURL=financeiro-plataforma.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FinanceiroPlataformaComponent, { className: "FinanceiroPlataformaComponent", filePath: "src\\app\\features\\admin\\pages\\financeiro-plataforma\\financeiro-plataforma.component.ts", lineNumber: 45 });
})();
export {
  FinanceiroPlataformaComponent
};
//# sourceMappingURL=chunk-7OFEORB2.js.map
