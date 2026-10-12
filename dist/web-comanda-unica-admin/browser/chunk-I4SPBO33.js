import {
  PlatformFeeRulesService
} from "./chunk-6UHOZCEO.js";
import {
  ExtratoService
} from "./chunk-GGX55TVN.js";
import {
  RippleDirective
} from "./chunk-EEBQCNFS.js";
import {
  formatTableLabel
} from "./chunk-TKS563NX.js";
import {
  AuthService
} from "./chunk-2L6ZAABE.js";
import {
  brDateTimeFormat,
  parseApiDate
} from "./chunk-XQACBPZ6.js";
import "./chunk-7SPYIMQO.js";
import "./chunk-IKIQHSDP.js";
import {
  RouterLink
} from "./chunk-LRYCMRYX.js";
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PLJAEWUA.js";

// src/app/features/admin/pages/extrato-financeiro/extrato-financeiro.component.ts
var _forTrack0 = ($index, $item) => $item.companyId;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.value;
var _c0 = () => ["/painel/comandas"];
var _c1 = (a0) => ({ comanda: a0 });
function ExtratoFinanceiroComponent_Conditional_6_Conditional_10_Template(rf, ctx) {
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
function ExtratoFinanceiroComponent_Conditional_6_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "Buscando\u2026");
    \u0275\u0275elementEnd();
  }
}
function ExtratoFinanceiroComponent_Conditional_6_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 14);
    \u0275\u0275listener("click", function ExtratoFinanceiroComponent_Conditional_6_Conditional_12_For_2_Template_button_click_1_listener() {
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
function ExtratoFinanceiroComponent_Conditional_6_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 13);
    \u0275\u0275repeaterCreate(1, ExtratoFinanceiroComponent_Conditional_6_Conditional_12_For_2_Template, 3, 1, "li", null, _forTrack0);
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
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 5)(2, "span");
    \u0275\u0275text(3, "Estabelecimento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 8)(5, "input", 9);
    \u0275\u0275listener("input", function ExtratoFinanceiroComponent_Conditional_6_Template_input_input_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCompanySearchTermChange($event.target.value));
    })("keyup.enter", function ExtratoFinanceiroComponent_Conditional_6_Template_input_keyup_enter_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchCompanies());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 10);
    \u0275\u0275listener("click", function ExtratoFinanceiroComponent_Conditional_6_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchCompanies());
    });
    \u0275\u0275elementStart(7, "span", 11);
    \u0275\u0275text(8, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Buscar ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, ExtratoFinanceiroComponent_Conditional_6_Conditional_10_Template, 4, 1, "p", 6)(11, ExtratoFinanceiroComponent_Conditional_6_Conditional_11_Template, 2, 0, "p", 12)(12, ExtratoFinanceiroComponent_Conditional_6_Conditional_12_Template, 3, 0, "ul", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.companySearchTerm());
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.selectedCompanyName() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSearchingCompanies() ? 11 : ctx_r1.companySearchResults().length > 0 ? 12 : -1);
  }
}
function ExtratoFinanceiroComponent_Conditional_7_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
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
    \u0275\u0275elementStart(3, "select", 15);
    \u0275\u0275listener("change", function ExtratoFinanceiroComponent_Conditional_7_Template_select_change_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMyCompanyChange($event.target.value));
    });
    \u0275\u0275repeaterCreate(4, ExtratoFinanceiroComponent_Conditional_7_For_5_Template, 2, 2, "option", 16, _forTrack0);
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
    \u0275\u0275elementStart(0, "div", 7)(1, "p", 12);
    \u0275\u0275text(2, "Selecione um estabelecimento para ver o extrato financeiro.");
    \u0275\u0275elementEnd()();
  }
}
function ExtratoFinanceiroComponent_Conditional_10_Conditional_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 31);
    \u0275\u0275text(2, "phone_iphone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 32);
    \u0275\u0275text(4, "App (antigo)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const resumo_r8 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(resumo_r8.recebidoOnline));
  }
}
function ExtratoFinanceiroComponent_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 30)(2, "span", 31);
    \u0275\u0275text(3, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 32);
    \u0275\u0275text(5, "Total recebido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 33);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 30)(9, "span", 31);
    \u0275\u0275text(10, "point_of_sale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 32);
    \u0275\u0275text(12, "Caixa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 33);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 30)(16, "span", 31);
    \u0275\u0275text(17, "room_service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 32);
    \u0275\u0275text(19, "Gar\xE7om");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 33);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, ExtratoFinanceiroComponent_Conditional_10_Conditional_1_Conditional_22_Template, 7, 1, "div", 30);
    \u0275\u0275elementStart(23, "div", 30)(24, "span", 31);
    \u0275\u0275text(25, "percent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 32);
    \u0275\u0275text(27, "Taxas Comanda \xDAnica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 33);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 30)(31, "span", 31);
    \u0275\u0275text(32, "account_balance_wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 32);
    \u0275\u0275text(34, "L\xEDquido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 33);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 30)(38, "span", 31);
    \u0275\u0275text(39, "hourglass_empty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 32);
    \u0275\u0275text(41, "Taxas a cobrar (hoje)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 33);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const resumo_r8 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(resumo_r8.totalRecebido));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(resumo_r8.recebidoCaixa));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(resumo_r8.recebidoGarcom));
    \u0275\u0275advance();
    \u0275\u0275conditional(resumo_r8.recebidoOnline > 0 ? 22 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(resumo_r8.taxasComandaUnica));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(resumo_r8.liquido));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(resumo_r8.taxasPendentes));
  }
}
function ExtratoFinanceiroComponent_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "Carregando resumo\u2026");
    \u0275\u0275elementEnd();
  }
}
function ExtratoFinanceiroComponent_Conditional_10_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function ExtratoFinanceiroComponent_Conditional_10_For_7_Template_button_click_0_listener() {
      const preset_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyPreset(preset_r10.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const preset_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("revenue-section__preset--active", ctx_r1.activePresetId() === preset_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", preset_r10.label, " ");
  }
}
function ExtratoFinanceiroComponent_Conditional_10_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r11 = ctx.$implicit;
    \u0275\u0275property("value", option_r11.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r11.label);
  }
}
function ExtratoFinanceiroComponent_Conditional_10_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "span", 11);
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
    \u0275\u0275elementStart(0, "div", 28)(1, "span", 11);
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
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "Carregando extrato\u2026");
    \u0275\u0275elementEnd();
  }
}
function ExtratoFinanceiroComponent_Conditional_10_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "Nenhum pagamento encontrado para os filtros selecionados.");
    \u0275\u0275elementEnd();
  }
}
function ExtratoFinanceiroComponent_Conditional_10_Conditional_37_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 38)(1, "td");
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
    \u0275\u0275elementStart(9, "td", 37);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 37);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 37);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 40);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const transacao_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c0))("queryParams", \u0275\u0275pureFunction1(13, _c1, transacao_r12.comandaId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDateTime(transacao_r12.data));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tableLabel(transacao_r12));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.methodLabel(transacao_r12.metodo));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(transacao_r12.registradoPor || transacao_r12.cliente || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(transacao_r12.valor));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(transacao_r12.taxaComandaUnica));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(transacao_r12.liquido));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("extrato-status--pending", transacao_r12.statusTaxa === "PENDING" || transacao_r12.statusTaxa === "PROCESSING");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.feeStatusLabel(transacao_r12.statusTaxa), " ");
  }
}
function ExtratoFinanceiroComponent_Conditional_10_Conditional_37_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "button", 27);
    \u0275\u0275listener("click", function ExtratoFinanceiroComponent_Conditional_10_Conditional_37_Conditional_23_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
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
function ExtratoFinanceiroComponent_Conditional_10_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "table", 36)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Mesa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Recebido por");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Registrado por");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 37);
    \u0275\u0275text(13, "Valor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 37);
    \u0275\u0275text(15, "Taxa Comanda \xDAnica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 37);
    \u0275\u0275text(17, "L\xEDquido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Taxa");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275repeaterCreate(21, ExtratoFinanceiroComponent_Conditional_10_Conditional_37_For_22_Template, 18, 15, "tr", 38, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(23, ExtratoFinanceiroComponent_Conditional_10_Conditional_37_Conditional_23_Template, 3, 2, "div", 39);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r1.transacoes());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.hasMore() ? 23 : -1);
  }
}
function ExtratoFinanceiroComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, ExtratoFinanceiroComponent_Conditional_10_Conditional_1_Template, 44, 7, "div", 18)(2, ExtratoFinanceiroComponent_Conditional_10_Conditional_2_Template, 2, 0, "p", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19)(4, "div", 20)(5, "div", 21);
    \u0275\u0275repeaterCreate(6, ExtratoFinanceiroComponent_Conditional_10_For_7_Template, 2, 3, "button", 22, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 23)(9, "label", 24)(10, "span");
    \u0275\u0275text(11, "De");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 25);
    \u0275\u0275listener("change", function ExtratoFinanceiroComponent_Conditional_10_Template_input_change_12_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCustomStartDateChange($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "label", 24)(14, "span");
    \u0275\u0275text(15, "At\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 26);
    \u0275\u0275listener("change", function ExtratoFinanceiroComponent_Conditional_10_Template_input_change_16_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCustomEndDateChange($event.target.value));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 20)(18, "label", 24)(19, "span");
    \u0275\u0275text(20, "Recebido por");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 15);
    \u0275\u0275listener("change", function ExtratoFinanceiroComponent_Conditional_10_Template_select_change_21_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMethodFilterChange($event.target.value));
    });
    \u0275\u0275repeaterCreate(22, ExtratoFinanceiroComponent_Conditional_10_For_23_Template, 2, 2, "option", 16, _forTrack2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "button", 27);
    \u0275\u0275listener("click", function ExtratoFinanceiroComponent_Conditional_10_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refresh());
    });
    \u0275\u0275elementStart(25, "span", 11);
    \u0275\u0275text(26, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 27);
    \u0275\u0275listener("click", function ExtratoFinanceiroComponent_Conditional_10_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportCsv());
    });
    \u0275\u0275elementStart(29, "span", 11);
    \u0275\u0275text(30, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, ExtratoFinanceiroComponent_Conditional_10_Conditional_32_Template, 4, 1, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 29);
    \u0275\u0275template(34, ExtratoFinanceiroComponent_Conditional_10_Conditional_34_Template, 4, 1, "div", 28)(35, ExtratoFinanceiroComponent_Conditional_10_Conditional_35_Template, 2, 0, "p", 12)(36, ExtratoFinanceiroComponent_Conditional_10_Conditional_36_Template, 2, 0, "p", 12)(37, ExtratoFinanceiroComponent_Conditional_10_Conditional_37_Template, 24, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_1_0 = ctx_r1.resumo()) ? 1 : ctx_r1.isLoading() ? 2 : -1, tmp_1_0);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.periodPresets);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r1.startDate())("max", ctx_r1.endDate());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.endDate())("min", ctx_r1.startDate());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.methodFilter());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.methodOptions);
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
    \u0275\u0275conditional(ctx_r1.loadError() ? 34 : ctx_r1.isLoading() ? 35 : ctx_r1.transacoes().length === 0 ? 36 : 37);
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
var METHOD_OPTIONS = [
  { value: "", label: "Todos" },
  { value: "CASH_REGISTER", label: "Caixa" },
  { value: "CASH_WAITER", label: "Gar\xE7om" },
  { value: "ONLINE", label: "App (antigo)" }
];
var METHOD_LABELS = {
  CASH_REGISTER: "Caixa",
  CASH_WAITER: "Gar\xE7om",
  ONLINE: "App (antigo)"
};
var FEE_STATUS_LABELS = {
  PENDING: "A cobrar",
  PROCESSING: "Em cobran\xE7a",
  SETTLED: "Paga",
  FAILED: "Recusada",
  CANCELED: "Cancelada"
};
var PAGE_SIZE = 20;
var ExtratoFinanceiroComponent = class _ExtratoFinanceiroComponent {
  authService = inject(AuthService);
  extratoService = inject(ExtratoService);
  platformFeeRulesService = inject(PlatformFeeRulesService);
  currencyFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
  dateTimeFormatter = brDateTimeFormat({ dateStyle: "short", timeStyle: "short" });
  isPlatformAdmin = this.authService.isPlatformAdmin;
  myCompanies = this.authService.companies;
  periodPresets = PERIOD_PRESETS;
  methodOptions = METHOD_OPTIONS;
  // Empresa consultada — para quem não é platform admin, vem das próprias empresas (session);
  // platform admin busca entre todos os estabelecimentos (ver PlatformFeeRulesService).
  selectedCompanyId = signal(this.authService.selectedCompany()?.companyId ?? null);
  selectedCompanyName = signal(this.authService.selectedCompany()?.companyName ?? null);
  hasCompany = computed(() => !!this.selectedCompanyId());
  companySearchTerm = signal("");
  companySearchResults = signal([]);
  isSearchingCompanies = signal(false);
  activePresetId = signal("30d");
  startDate = signal(this.toIsoDate(this.daysAgo(29)));
  endDate = signal(this.toIsoDate(/* @__PURE__ */ new Date()));
  methodFilter = signal("");
  resumo = signal(null);
  transacoes = signal([]);
  page = signal(0);
  hasMore = signal(false);
  isLoading = signal(false);
  isLoadingMore = signal(false);
  loadError = signal(null);
  isExporting = signal(false);
  exportError = signal(null);
  constructor() {
    this.resetAndLoad();
  }
  formatCurrency(value) {
    return value != null ? this.currencyFormatter.format(value) : "\u2014";
  }
  formatDateTime(value) {
    const parsed = parseApiDate(value ?? null);
    return parsed ? this.dateTimeFormatter.format(parsed) : "\u2014";
  }
  methodLabel(method) {
    return METHOD_LABELS[method] ?? method;
  }
  feeStatusLabel(status) {
    return status ? FEE_STATUS_LABELS[status] ?? status : "\u2014";
  }
  tableLabel(transacao) {
    if (transacao.mesaNome) {
      return transacao.mesaNome;
    }
    return transacao.mesaNumero != null ? formatTableLabel(transacao.mesaNumero) : "\u2014";
  }
  // --- Empresa ---------------------------------------------------------------
  onMyCompanyChange(companyId) {
    const company = this.myCompanies().find((c) => c.companyId === companyId);
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
  onMethodFilterChange(value) {
    this.methodFilter.set(value);
    this.resetAndLoad();
  }
  refresh() {
    this.resetAndLoad();
  }
  loadMore() {
    this.load(this.page() + 1, true);
  }
  exportCsv() {
    const companyId = this.selectedCompanyId();
    if (!companyId) {
      return;
    }
    this.isExporting.set(true);
    this.exportError.set(null);
    this.extratoService.exportCsv(companyId, {
      startDate: this.startDate(),
      endDate: this.endDate(),
      method: this.methodFilter() || null
    }).subscribe({
      next: (blob) => {
        this.isExporting.set(false);
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `extrato-${this.startDate()}-a-${this.endDate()}.csv`;
        link.click();
        URL.revokeObjectURL(url);
      },
      error: () => {
        this.isExporting.set(false);
        this.exportError.set("N\xE3o foi poss\xEDvel exportar o extrato agora. Tente novamente em instantes.");
      }
    });
  }
  // --- Carregamento -------------------------------------------------------------
  resetAndLoad() {
    this.transacoes.set([]);
    this.resumo.set(null);
    this.load(0, false);
  }
  load(page, append) {
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
      method: this.methodFilter() || null,
      page,
      size: PAGE_SIZE
    }).subscribe({
      next: (response) => {
        this.resumo.set(response.resumo);
        this.transacoes.update((current) => append ? [...current, ...response.transacoes.content] : response.transacoes.content);
        this.page.set(response.transacoes.page);
        this.hasMore.set(!response.transacoes.last);
        this.isLoading.set(false);
        this.isLoadingMore.set(false);
      },
      error: () => {
        this.loadError.set("N\xE3o foi poss\xEDvel carregar o extrato do per\xEDodo selecionado.");
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
  static \u0275fac = function ExtratoFinanceiroComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExtratoFinanceiroComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExtratoFinanceiroComponent, selectors: [["app-extrato-financeiro"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 2, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "card", "extrato-company"], [1, "extrato-company__search"], [1, "extrato-company__label"], [1, "extrato-company__selected"], [1, "card"], [1, "extrato-company__search-row"], ["type", "text", "placeholder", "Buscar estabelecimento por nome\u2026", 3, "input", "keyup.enter", "value"], ["type", "button", "appRipple", "", 1, "btn", "btn--ghost", 3, "click"], ["aria-hidden", "true", 1, "material-icons"], [1, "field__hint"], [1, "extrato-company__results"], ["type", "button", 3, "click"], [3, "change", "value"], [3, "value"], [1, "card", "extrato-summary"], [1, "stat-grid"], [1, "card", "extrato-filters"], [1, "extrato-filters__row"], [1, "revenue-section__presets"], ["type", "button", 1, "revenue-section__preset", 3, "revenue-section__preset--active"], [1, "extrato-filters__dates"], [1, "revenue-section__date-field"], ["type", "date", 3, "change", "value", "max"], ["type", "date", 3, "change", "value", "min"], ["type", "button", "appRipple", "", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["role", "alert", 1, "form-alert", "form-alert--error"], [1, "card", "extrato-table-card"], [1, "stat-card"], ["aria-hidden", "true", 1, "material-icons", "stat-card__icon"], [1, "stat-card__label"], [1, "stat-card__value"], ["type", "button", 1, "revenue-section__preset", 3, "click"], [1, "extrato-table-wrapper"], [1, "extrato-table"], [1, "extrato-table__number"], [1, "extrato-table__row", 3, "routerLink", "queryParams"], [1, "extrato-load-more"], [1, "extrato-status"]], template: function ExtratoFinanceiroComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Extrato Financeiro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, "Pagamentos registrados nas comandas e as taxas da Comanda \xDAnica sobre eles.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3);
      \u0275\u0275template(6, ExtratoFinanceiroComponent_Conditional_6_Template, 13, 3, "div", 4)(7, ExtratoFinanceiroComponent_Conditional_7_Template, 6, 1, "label", 5)(8, ExtratoFinanceiroComponent_Conditional_8_Template, 4, 1, "p", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, ExtratoFinanceiroComponent_Conditional_9_Template, 3, 0, "div", 7)(10, ExtratoFinanceiroComponent_Conditional_10_Template, 38, 12);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.isPlatformAdmin() ? 6 : ctx.myCompanies().length > 1 ? 7 : 8);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.hasCompany() ? 9 : 10);
    }
  }, dependencies: [RippleDirective, RouterLink], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n  color: var(--color-text-muted);\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.card[_ngcontent-%COMP%]    + .card[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.extrato-company[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n.extrato-company__label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.extrato-company__label[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.extrato-company__label[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  background: var(--color-bg-elevated);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  color: var(--color-text);\n  padding: 8px 12px;\n  font-size: 0.9375rem;\n}\n.extrato-company__search-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.extrato-company__search-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.extrato-company__selected[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: var(--color-text);\n  margin: 0;\n}\n.extrato-company__results[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 8px 0 0;\n  padding: 0;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  max-height: 220px;\n  overflow-y: auto;\n}\n.extrato-company__results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  text-align: left;\n  padding: 10px 14px;\n  background: transparent;\n  border: none;\n  color: var(--color-text);\n  cursor: pointer;\n  font-size: 0.9375rem;\n}\n.extrato-company__results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.extrato-summary[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.stat-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));\n  gap: 16px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 18px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  background: var(--color-bg-elevated);\n}\n.stat-card__icon[_ngcontent-%COMP%] {\n  color: var(--color-accent-hover);\n  font-size: 20px;\n}\n.stat-card__label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.stat-card__value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.extrato-filters[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.extrato-filters__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  justify-content: space-between;\n}\n.extrato-filters__row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: var(--color-bg-elevated);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  color: var(--color-text);\n  padding: 8px 12px;\n  font-size: 0.875rem;\n}\n.extrato-filters__dates[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.revenue-section__presets[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.revenue-section__preset[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border);\n  background: transparent;\n  color: var(--color-text-muted);\n  font-size: 0.8125rem;\n  cursor: pointer;\n  transition:\n    background var(--transition-fast),\n    color var(--transition-fast),\n    border-color var(--transition-fast);\n}\n.revenue-section__preset[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.revenue-section__preset--active[_ngcontent-%COMP%] {\n  border-color: var(--color-accent);\n  color: var(--color-text);\n  background: rgba(255, 255, 255, 0.08);\n}\n.revenue-section__date-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.revenue-section__date-field[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%] {\n  background: var(--color-bg-elevated);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  color: var(--color-text);\n  padding: 6px 10px;\n  font-size: 0.8125rem;\n  color-scheme: dark;\n}\n.extrato-table-card[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.extrato-table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.extrato-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.extrato-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.extrato-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  text-align: left;\n  border-bottom: 1px solid var(--color-border);\n  white-space: nowrap;\n}\n.extrato-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-weight: 600;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.extrato-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--color-text);\n}\n.extrato-table__number[_ngcontent-%COMP%] {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.extrato-table__row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background var(--transition-fast);\n}\n.extrato-table__row[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.04);\n}\n.extrato-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 3px 10px;\n  border-radius: var(--radius-full);\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: var(--color-success-bg, rgba(34, 197, 94, 0.14));\n  color: var(--color-success, #22c55e);\n}\n.extrato-status--pending[_ngcontent-%COMP%] {\n  background: rgba(234, 179, 8, 0.14);\n  color: #eab308;\n}\n.extrato-load-more[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=extrato-financeiro.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExtratoFinanceiroComponent, { className: "ExtratoFinanceiroComponent", filePath: "src\\app\\features\\admin\\pages\\extrato-financeiro\\extrato-financeiro.component.ts", lineNumber: 64 });
})();
export {
  ExtratoFinanceiroComponent
};
//# sourceMappingURL=chunk-I4SPBO33.js.map
