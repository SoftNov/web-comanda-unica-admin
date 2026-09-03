import {
  PlatformFeeRulesService
} from "./chunk-F6A2EYHB.js";
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
} from "./chunk-6KBODX7E.js";
import {
  RippleDirective
} from "./chunk-IDSUMKGD.js";
import {
  autoDismiss
} from "./chunk-JD6JJHYZ.js";
import "./chunk-3BRF5UDA.js";
import {
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-XAWTBWXY.js";

// src/app/features/admin/pages/financeiro-plataforma/financeiro-plataforma.component.ts
var _forTrack0 = ($index, $item) => $item.companyId;
function FinanceiroPlataformaComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1, "Carregando regra padr\xE3o\u2026");
    \u0275\u0275elementEnd();
  }
}
function FinanceiroPlataformaComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 13);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.defaultError(), " ");
  }
}
function FinanceiroPlataformaComponent_Conditional_12_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 13);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.defaultSaveError(), " ");
  }
}
function FinanceiroPlataformaComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 14);
    \u0275\u0275listener("submit", function FinanceiroPlataformaComponent_Conditional_12_Template_form_submit_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r0.submitDefaultForm());
    });
    \u0275\u0275elementStart(1, "div", 15)(2, "div", 16)(3, "label", 17);
    \u0275\u0275text(4, "Percentual at\xE9 a faixa (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 10);
    \u0275\u0275element(6, "input", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 16)(8, "label", 19);
    \u0275\u0275text(9, "Faixa (R$)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 10);
    \u0275\u0275element(11, "input", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 16)(13, "label", 21);
    \u0275\u0275text(14, "Valor fixo acima da faixa (R$)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 10);
    \u0275\u0275element(16, "input", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "p", 5);
    \u0275\u0275text(18, " Comandas at\xE9 o valor da faixa pagam o percentual sobre o pr\xF3prio valor; acima da faixa, pagam o valor fixo. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, FinanceiroPlataformaComponent_Conditional_12_Conditional_19_Template, 4, 1, "div", 6);
    \u0275\u0275elementStart(20, "div", 23)(21, "button", 24);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 25)(24, "label", 26);
    \u0275\u0275text(25, "Simular cobran\xE7a para uma comanda de");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 27)(27, "div", 28)(28, "input", 29);
    \u0275\u0275listener("input", function FinanceiroPlataformaComponent_Conditional_12_Template_input_input_28_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSimulatorAmountChange($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "span", 30);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.defaultForm);
    \u0275\u0275advance(19);
    \u0275\u0275conditional(ctx_r0.defaultSaveError() ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isSavingDefault());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isSavingDefault() ? "Salvando\u2026" : "Salvar regra padr\xE3o", " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r0.simulatorAmount());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatCurrency(ctx_r0.simulatedFee((tmp_6_0 = ctx_r0.defaultRule()) == null ? null : tmp_6_0.percentageRate, (tmp_6_0 = ctx_r0.defaultRule()) == null ? null : tmp_6_0.thresholdAmount, (tmp_6_0 = ctx_r0.defaultRule()) == null ? null : tmp_6_0.maxAmount)), " ");
  }
}
function FinanceiroPlataformaComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1, "Carregando empresas\u2026");
    \u0275\u0275elementEnd();
  }
}
function FinanceiroPlataformaComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 13);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.companiesError(), " ");
  }
}
function FinanceiroPlataformaComponent_Conditional_22_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 13);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.removeError(), " ");
  }
}
function FinanceiroPlataformaComponent_Conditional_22_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 38);
    \u0275\u0275text(2, "Nenhuma empresa encontrada.");
    \u0275\u0275elementEnd()();
  }
}
function FinanceiroPlataformaComponent_Conditional_22_For_24_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function FinanceiroPlataformaComponent_Conditional_22_For_24_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const company_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeCustomization(company_r5));
    });
    \u0275\u0275elementStart(1, "span", 13);
    \u0275\u0275text(2, "restart_alt");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const company_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.removingCompanyId() === company_r5.companyId);
  }
}
function FinanceiroPlataformaComponent_Conditional_22_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
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
    \u0275\u0275elementStart(11, "td")(12, "span", 39);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 33)(17, "button", 40);
    \u0275\u0275listener("click", function FinanceiroPlataformaComponent_Conditional_22_For_24_Template_button_click_17_listener() {
      const company_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEditModal(company_r5));
    });
    \u0275\u0275elementStart(18, "span", 13);
    \u0275\u0275text(19, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, FinanceiroPlataformaComponent_Conditional_22_For_24_Conditional_20_Template, 3, 1, "button", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const company_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(company_r5.companyName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", company_r5.percentageRate, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(company_r5.thresholdAmount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(company_r5.maxAmount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(ctx_r0.simulatedFee(company_r5.percentageRate, company_r5.thresholdAmount, company_r5.maxAmount)));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(company_r5.customized ? "badge--warning" : "badge--muted");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", company_r5.customized ? "Customizada" : "Padr\xE3o", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDateTime(company_r5.updatedAt));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(company_r5.customized ? 20 : -1);
  }
}
function FinanceiroPlataformaComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, FinanceiroPlataformaComponent_Conditional_22_Conditional_0_Template, 4, 1, "div", 6);
    \u0275\u0275elementStart(1, "div", 31)(2, "table", 32)(3, "thead")(4, "tr")(5, "th");
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
    \u0275\u0275elementStart(19, "th", 33);
    \u0275\u0275text(20, "A\xE7\xF5es");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275template(22, FinanceiroPlataformaComponent_Conditional_22_Conditional_22_Template, 3, 0, "tr");
    \u0275\u0275repeaterCreate(23, FinanceiroPlataformaComponent_Conditional_22_For_24_Template, 21, 10, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 34)(26, "span", 35);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 36)(29, "button", 37);
    \u0275\u0275listener("click", function FinanceiroPlataformaComponent_Conditional_22_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.previousPage());
    });
    \u0275\u0275elementStart(30, "span", 13);
    \u0275\u0275text(31, "chevron_left");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " Anterior ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 37);
    \u0275\u0275listener("click", function FinanceiroPlataformaComponent_Conditional_22_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.nextPage());
    });
    \u0275\u0275text(34, " Pr\xF3xima ");
    \u0275\u0275elementStart(35, "span", 13);
    \u0275\u0275text(36, "chevron_right");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.removeError() ? 0 : -1);
    \u0275\u0275advance(22);
    \u0275\u0275conditional(ctx_r0.companies().length === 0 ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.companies());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r0.totalElements(), " empresa(s) \u2014 ", ctx_r0.pageLabel(), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.page() === 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.isLast());
  }
}
function FinanceiroPlataformaComponent_Conditional_23_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 13);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.companySaveError(), " ");
  }
}
function FinanceiroPlataformaComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275listener("click", function FinanceiroPlataformaComponent_Conditional_23_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEditModal());
    });
    \u0275\u0275elementStart(1, "div", 44);
    \u0275\u0275listener("click", function FinanceiroPlataformaComponent_Conditional_23_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 45)(3, "h2", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 47);
    \u0275\u0275listener("click", function FinanceiroPlataformaComponent_Conditional_23_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEditModal());
    });
    \u0275\u0275elementStart(6, "span", 13);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "form", 14);
    \u0275\u0275listener("submit", function FinanceiroPlataformaComponent_Conditional_23_Template_form_submit_8_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r0.submitCompanyForm());
    });
    \u0275\u0275elementStart(9, "div", 16)(10, "label", 48);
    \u0275\u0275text(11, "Percentual at\xE9 a faixa (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 10);
    \u0275\u0275element(13, "input", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 16)(15, "label", 50);
    \u0275\u0275text(16, "Faixa (R$)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 10);
    \u0275\u0275element(18, "input", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 16)(20, "label", 52);
    \u0275\u0275text(21, "Valor fixo acima da faixa (R$)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 10);
    \u0275\u0275element(23, "input", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, FinanceiroPlataformaComponent_Conditional_23_Conditional_24_Template, 4, 1, "div", 6);
    \u0275\u0275elementStart(25, "div", 23)(26, "button", 24);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 54);
    \u0275\u0275listener("click", function FinanceiroPlataformaComponent_Conditional_23_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEditModal());
    });
    \u0275\u0275text(29, "Cancelar");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Customizar regra \u2014 ", ctx.companyName, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r0.companyForm);
    \u0275\u0275advance(16);
    \u0275\u0275conditional(ctx_r0.companySaveError() ? 24 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isSavingCompany());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isSavingCompany() ? "Salvando\u2026" : "Salvar", " ");
  }
}
var PAGE_SIZE = 10;
var FinanceiroPlataformaComponent = class _FinanceiroPlataformaComponent {
  fb = new FormBuilder();
  platformFeeRulesService = inject(PlatformFeeRulesService);
  currencyFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
  dateTimeFormatter = new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short" });
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
    this.loadDefaultRule();
    this.loadCompanies(0);
  }
  formatCurrency(value) {
    return value != null ? this.currencyFormatter.format(value) : "\u2014";
  }
  formatDateTime(value) {
    return value ? this.dateTimeFormatter.format(new Date(value)) : "\u2014";
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FinanceiroPlataformaComponent, selectors: [["app-admin-financeiro-plataforma"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 4, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "card", "default-rule-card"], [1, "section-title"], [1, "field__hint"], ["role", "alert", 1, "form-alert", "form-alert--error"], [1, "card", "companies-card"], [1, "companies-card__header"], [1, "field", "companies-card__search"], [1, "field__control"], ["type", "text", "placeholder", "Buscar por nome", 1, "field__input", 3, "input", "value"], [1, "modal-backdrop"], ["aria-hidden", "true", 1, "material-icons"], ["novalidate", "", 3, "submit", "formGroup"], [1, "field__row"], [1, "field"], ["for", "default-percentage", 1, "field__label"], ["id", "default-percentage", "type", "number", "min", "0.01", "max", "100", "step", "0.01", "formControlName", "percentageRate", "placeholder", "1,00", 1, "field__input"], ["for", "default-threshold", 1, "field__label"], ["id", "default-threshold", "type", "number", "min", "0.01", "step", "0.01", "formControlName", "thresholdAmount", "placeholder", "50,00", 1, "field__input"], ["for", "default-max", 1, "field__label"], ["id", "default-max", "type", "number", "min", "0.01", "step", "0.01", "formControlName", "maxAmount", "placeholder", "3,00", 1, "field__input"], [1, "step-actions"], ["type", "submit", "appRipple", "", 1, "btn", "btn--primary", 3, "disabled"], [1, "simulator"], ["for", "simulator-amount", 1, "field__label"], [1, "simulator__row"], [1, "field__control", "simulator__input"], ["id", "simulator-amount", "type", "number", "min", "0", "step", "0.01", 1, "field__input", 3, "input", "value"], [1, "simulator__result"], [1, "table-wrapper"], [1, "data-table"], [1, "data-table__actions-col"], [1, "pagination"], [1, "pagination__info"], [1, "pagination__controls"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click", "disabled"], ["colspan", "8", 1, "data-table__empty"], [1, "badge"], ["type", "button", "title", "Customizar regra", 1, "icon-btn", 3, "click"], ["type", "button", "title", "Remover customiza\xE7\xE3o (volta \xE0 regra padr\xE3o)", 1, "icon-btn", "icon-btn--danger", 3, "disabled"], ["type", "button", "title", "Remover customiza\xE7\xE3o (volta \xE0 regra padr\xE3o)", 1, "icon-btn", "icon-btn--danger", 3, "click", "disabled"], [1, "modal-backdrop", 3, "click"], [1, "modal-card", "modal-card--sm", "card", 3, "click"], [1, "modal-card__header"], [1, "step-heading"], ["type", "button", "aria-label", "Fechar", 1, "icon-btn", 3, "click"], ["for", "company-percentage", 1, "field__label"], ["id", "company-percentage", "type", "number", "min", "0.01", "max", "100", "step", "0.01", "formControlName", "percentageRate", 1, "field__input"], ["for", "company-threshold", 1, "field__label"], ["id", "company-threshold", "type", "number", "min", "0.01", "step", "0.01", "formControlName", "thresholdAmount", 1, "field__input"], ["for", "company-max", 1, "field__label"], ["id", "company-max", "type", "number", "min", "0.01", "step", "0.01", "formControlName", "maxAmount", 1, "field__input"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"]], template: function FinanceiroPlataformaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Financeiro \u2014 Comanda \xDAnica");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, " Regra de cobran\xE7a da plataforma. Painel exclusivo da equipe Comanda \xDAnica. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3)(6, "h2", 4);
      \u0275\u0275text(7, "Regra padr\xE3o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 5);
      \u0275\u0275text(9, "Aplicada a qualquer empresa sem customiza\xE7\xE3o pr\xF3pria.");
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, FinanceiroPlataformaComponent_Conditional_10_Template, 2, 0, "p", 5)(11, FinanceiroPlataformaComponent_Conditional_11_Template, 4, 1, "div", 6)(12, FinanceiroPlataformaComponent_Conditional_12_Template, 31, 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 7)(14, "div", 8)(15, "h2", 4);
      \u0275\u0275text(16, "Empresas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 9)(18, "div", 10)(19, "input", 11);
      \u0275\u0275listener("input", function FinanceiroPlataformaComponent_Template_input_input_19_listener($event) {
        return ctx.onSearchChange($event.target.value);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(20, FinanceiroPlataformaComponent_Conditional_20_Template, 2, 0, "p", 5)(21, FinanceiroPlataformaComponent_Conditional_21_Template, 4, 1, "div", 6)(22, FinanceiroPlataformaComponent_Conditional_22_Template, 37, 6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, FinanceiroPlataformaComponent_Conditional_23_Template, 30, 5, "div", 12);
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.isLoadingDefault() ? 10 : ctx.defaultError() ? 11 : 12);
      \u0275\u0275advance(9);
      \u0275\u0275property("value", ctx.searchTerm());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoadingCompanies() ? 20 : ctx.companiesError() ? 21 : 22);
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_3_0 = ctx.editingCompany()) ? 23 : -1, tmp_3_0);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, RippleDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.field__row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.field__row[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 180px;\n}\n.step-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n.section-title[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 1.125rem;\n  color: var(--color-text);\n}\n.default-rule-card[_ngcontent-%COMP%] {\n  padding: 24px;\n  margin-bottom: 20px;\n}\n.simulator[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid var(--color-border);\n}\n.simulator__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin-top: 8px;\n}\n.simulator__input[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n.simulator__result[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--color-success);\n}\n.companies-card[_ngcontent-%COMP%] {\n  padding: 8px 0 0;\n  overflow: hidden;\n}\n.companies-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  padding: 20px 20px 4px;\n}\n.companies-card__search[_ngcontent-%COMP%] {\n  min-width: 220px;\n  margin-bottom: 0;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.9375rem;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  text-align: left;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: 1px solid var(--color-border);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--color-border);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.02);\n}\n.data-table__actions-col[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.data-table__empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--color-text-muted);\n  padding: 32px 20px;\n  white-space: normal;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: var(--radius-full);\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.badge--muted[_ngcontent-%COMP%] {\n  background: rgba(203, 213, 225, 0.12);\n  color: var(--color-text-muted);\n}\n.badge--warning[_ngcontent-%COMP%] {\n  background: rgba(250, 204, 21, 0.14);\n  color: #facc15;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius-sm);\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text);\n}\n.icon-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.icon-btn[_ngcontent-%COMP%]    + .icon-btn[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.icon-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(248, 113, 113, 0.12);\n  color: #f87171;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  padding: 16px 20px;\n}\n.pagination__info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n.pagination__controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(4, 8, 20, 0.64);\n  backdrop-filter: blur(2px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  z-index: 100;\n}\n.modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 640px;\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n  padding: 32px;\n}\n.modal-card--sm[_ngcontent-%COMP%] {\n  max-width: 420px;\n}\n.modal-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.step-heading[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n}\n/*# sourceMappingURL=financeiro-plataforma.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FinanceiroPlataformaComponent, { className: "FinanceiroPlataformaComponent", filePath: "src\\app\\features\\admin\\pages\\financeiro-plataforma\\financeiro-plataforma.component.ts", lineNumber: 32 });
})();
export {
  FinanceiroPlataformaComponent
};
//# sourceMappingURL=chunk-T4MLVNLK.js.map
