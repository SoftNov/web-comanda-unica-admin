import {
  autoDismiss
} from "./chunk-JD6JJHYZ.js";
import {
  RippleDirective
} from "./chunk-UVFWKPXF.js";
import {
  ConsumptionPassesService
} from "./chunk-HFWNAVH5.js";
import {
  formatTableLabel
} from "./chunk-XFEDBWXJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-BTGRTOWH.js";
import {
  brDateTimeFormat,
  parseApiDate
} from "./chunk-ZLRUWLWP.js";
import "./chunk-IKIQHSDP.js";
import {
  RouterLink
} from "./chunk-GPCUXOSL.js";
import {
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-QBSIROZR.js";

// src/app/features/admin/pages/passes-consumo/passes-consumo.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function PassesConsumoComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 5);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.actionSuccess(), " ");
  }
}
function PassesConsumoComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 5);
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
function PassesConsumoComponent_Conditional_21_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32)(1, "span", 37);
    \u0275\u0275text(2, "Em uso");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " O cliente s\xF3 consegue pedir pelo card\xE1pio depois de escanear o cart\xE3o entregue na recep\xE7\xE3o, e a sa\xEDda \xE9 conferida em ");
    \u0275\u0275elementStart(4, "a", 38);
    \u0275\u0275text(5, "Controle de Sa\xEDda");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ". ");
    \u0275\u0275elementEnd();
  }
}
function PassesConsumoComponent_Conditional_21_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32)(1, "span", 39);
    \u0275\u0275text(2, "N\xE3o utilizado");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " O sistema funciona normalmente, com a comanda compartilhada da mesa. Voc\xEA pode gerar e imprimir os cart\xF5es antes de ativar. ");
    \u0275\u0275elementEnd();
  }
}
function PassesConsumoComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 10)(1, "label", 30)(2, "input", 31);
    \u0275\u0275listener("change", function PassesConsumoComponent_Conditional_21_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleRequired($event.target.checked, $event.target));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "strong");
    \u0275\u0275text(5, "Usar cart\xE3o de consumo neste estabelecimento");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, PassesConsumoComponent_Conditional_21_Conditional_6_Template, 7, 0, "span", 32)(7, PassesConsumoComponent_Conditional_21_Conditional_7_Template, 4, 0, "span", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "dl", 33)(9, "div")(10, "dt");
    \u0275\u0275text(11, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "dd");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div")(15, "dt");
    \u0275\u0275text(16, "Dispon\xEDveis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "dd", 34);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "dt");
    \u0275\u0275text(21, "Em uso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "dd", 35);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div")(25, "dt");
    \u0275\u0275text(26, "Bloqueados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "dd", 36);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const s_r3 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", s_r3.required)("disabled", ctx_r0.isSavingSettings());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(s_r3.required ? 6 : 7);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(s_r3.totalCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(s_r3.availableCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(s_r3.inUseCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(s_r3.blockedCount);
  }
}
function PassesConsumoComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
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
function PassesConsumoComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 40)(4, "button", 41);
    \u0275\u0275listener("click", function PassesConsumoComponent_Conditional_44_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.printSelected());
    });
    \u0275\u0275elementStart(5, "span", 5);
    \u0275\u0275text(6, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 24);
    \u0275\u0275listener("click", function PassesConsumoComponent_Conditional_44_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearSelection());
    });
    \u0275\u0275text(9, "Limpar sele\xE7\xE3o");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.selectedIds().size, " cart\xE3o(\xF5es) selecionado(s)");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isPrinting());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.isPrinting() ? "Gerando PDF\u2026" : "Imprimir selecionados", " ");
  }
}
function PassesConsumoComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1, "Carregando passes\u2026");
    \u0275\u0275elementEnd();
  }
}
function PassesConsumoComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "span", 5);
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
function PassesConsumoComponent_Conditional_48_For_18_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275elementStart(1, "span", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pass_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.tableLabel(pass_r8.tableNumber, pass_r8.tableName), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", pass_r8.customerName || "Cliente", " \xB7 desde ", ctx_r0.formatDateTime(pass_r8.activatedAt), "");
  }
}
function PassesConsumoComponent_Conditional_48_For_18_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pass_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pass_r8.blockedReason || "Sem motivo informado");
  }
}
function PassesConsumoComponent_Conditional_48_For_18_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function PassesConsumoComponent_Conditional_48_For_18_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function PassesConsumoComponent_Conditional_48_For_18_Conditional_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const pass_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.unblock(pass_r8));
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "lock_open");
    \u0275\u0275elementEnd()();
  }
}
function PassesConsumoComponent_Conditional_48_For_18_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function PassesConsumoComponent_Conditional_48_For_18_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const pass_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openBlock(pass_r8));
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "block");
    \u0275\u0275elementEnd()();
  }
}
function PassesConsumoComponent_Conditional_48_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 44)(2, "input", 50);
    \u0275\u0275listener("change", function PassesConsumoComponent_Conditional_48_For_18_Template_input_change_2_listener() {
      const pass_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleSelected(pass_r8));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 51);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 52);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 53);
    \u0275\u0275template(12, PassesConsumoComponent_Conditional_48_For_18_Conditional_12_Template, 3, 3, "span", 54)(13, PassesConsumoComponent_Conditional_48_For_18_Conditional_13_Template, 2, 1, "span", 54)(14, PassesConsumoComponent_Conditional_48_For_18_Conditional_14_Template, 2, 0, "span", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 46)(16, "button", 55);
    \u0275\u0275listener("click", function PassesConsumoComponent_Conditional_48_For_18_Template_button_click_16_listener() {
      const pass_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openQr(pass_r8));
    });
    \u0275\u0275elementStart(17, "span", 5);
    \u0275\u0275text(18, "qr_code_2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 56);
    \u0275\u0275listener("click", function PassesConsumoComponent_Conditional_48_For_18_Template_button_click_19_listener() {
      const pass_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openHistory(pass_r8));
    });
    \u0275\u0275elementStart(20, "span", 5);
    \u0275\u0275text(21, "history");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, PassesConsumoComponent_Conditional_48_For_18_Conditional_22_Template, 3, 0, "button", 57)(23, PassesConsumoComponent_Conditional_48_For_18_Conditional_23_Template, 3, 0, "button", 58);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pass_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r0.isSelected(pass_r8));
    \u0275\u0275attribute("aria-label", "Selecionar cart\xE3o " + pass_r8.number);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(pass_r8.number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pass_r8.token);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge--success", pass_r8.status === "AVAILABLE")("badge--warning", pass_r8.status === "IN_USE")("badge--danger", pass_r8.status === "BLOCKED")("badge--muted", pass_r8.status === "EXPIRED");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.statusLabel(pass_r8.status));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(pass_r8.status === "IN_USE" ? 12 : pass_r8.status === "BLOCKED" ? 13 : 14);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(pass_r8.status === "BLOCKED" || pass_r8.status === "EXPIRED" ? 22 : pass_r8.status === "AVAILABLE" ? 23 : -1);
  }
}
function PassesConsumoComponent_Conditional_48_ForEmpty_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 61);
    \u0275\u0275text(2, ' Nenhum passe encontrado. Use "Gerar passes" para criar os cart\xF5es do estabelecimento. ');
    \u0275\u0275elementEnd()();
  }
}
function PassesConsumoComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "table", 43)(2, "thead")(3, "tr")(4, "th", 44)(5, "input", 45);
    \u0275\u0275listener("change", function PassesConsumoComponent_Conditional_48_Template_input_change_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleAllOnPage());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "N\xBA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "C\xF3digo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Uso atual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 46);
    \u0275\u0275text(15, "A\xE7\xF5es");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, PassesConsumoComponent_Conditional_48_For_18_Template, 24, 15, "tr", null, _forTrack1, false, PassesConsumoComponent_Conditional_48_ForEmpty_19_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 47)(21, "span", 48);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 49)(24, "button", 4);
    \u0275\u0275listener("click", function PassesConsumoComponent_Conditional_48_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.previousPage());
    });
    \u0275\u0275text(25, "Anterior");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 4);
    \u0275\u0275listener("click", function PassesConsumoComponent_Conditional_48_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.nextPage());
    });
    \u0275\u0275text(27, "Pr\xF3xima");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r0.allOnPageSelected());
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r0.passes());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate3("", ctx_r0.totalElements(), " passe(s) \xB7 p\xE1gina ", ctx_r0.page() + 1, " de ", ctx_r0.totalPages(), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.page() === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.page() >= ctx_r0.totalPages() - 1);
  }
}
function PassesConsumoComponent_Conditional_49_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 5);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.generateError(), " ");
  }
}
function PassesConsumoComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275listener("click", function PassesConsumoComponent_Conditional_49_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeGenerate());
    });
    \u0275\u0275elementStart(1, "div", 63);
    \u0275\u0275listener("click", function PassesConsumoComponent_Conditional_49_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 64)(3, "h2", 65);
    \u0275\u0275text(4, "Gerar passes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 66);
    \u0275\u0275listener("click", function PassesConsumoComponent_Conditional_49_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeGenerate());
    });
    \u0275\u0275elementStart(6, "span", 5);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "p", 32);
    \u0275\u0275text(9, " Cada passe recebe um c\xF3digo aleat\xF3rio e um n\xFAmero sequencial para identificar o cart\xE3o f\xEDsico. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "form", 67);
    \u0275\u0275listener("submit", function PassesConsumoComponent_Conditional_49_Template_form_submit_10_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r0.submitGenerate(false));
    });
    \u0275\u0275elementStart(11, "div", 13)(12, "label", 68);
    \u0275\u0275text(13, "Quantidade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 15)(15, "input", 69);
    \u0275\u0275listener("ngModelChange", function PassesConsumoComponent_Conditional_49_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.generateQuantity.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "span", 32);
    \u0275\u0275text(17, "De 1 a 500 por vez.");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, PassesConsumoComponent_Conditional_49_Conditional_18_Template, 4, 1, "div", 9);
    \u0275\u0275elementStart(19, "div", 70)(20, "button", 4);
    \u0275\u0275listener("click", function PassesConsumoComponent_Conditional_49_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitGenerate(true));
    });
    \u0275\u0275elementStart(21, "span", 5);
    \u0275\u0275text(22, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Gerar e imprimir ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 71);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngModel", ctx_r0.generateQuantity());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.generateError() ? 18 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isGenerating());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.isGenerating());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isGenerating() ? "Gerando\u2026" : "Gerar", " ");
  }
}
function PassesConsumoComponent_Conditional_50_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 73);
  }
  if (rf & 2) {
    const pass_r13 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.qrImageUrl(), \u0275\u0275sanitizeUrl)("alt", "QR Code do cart\xE3o " + pass_r13.number);
  }
}
function PassesConsumoComponent_Conditional_50_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1, "Carregando QR Code\u2026");
    \u0275\u0275elementEnd();
  }
}
function PassesConsumoComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275listener("click", function PassesConsumoComponent_Conditional_50_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeQr());
    });
    \u0275\u0275elementStart(1, "div", 72);
    \u0275\u0275listener("click", function PassesConsumoComponent_Conditional_50_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 64)(3, "h2", 65);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 66);
    \u0275\u0275listener("click", function PassesConsumoComponent_Conditional_50_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeQr());
    });
    \u0275\u0275elementStart(6, "span", 5);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(8, PassesConsumoComponent_Conditional_50_Conditional_8_Template, 1, 2, "img", 73)(9, PassesConsumoComponent_Conditional_50_Conditional_9_Template, 2, 0, "p", 32);
    \u0275\u0275elementStart(10, "p", 74);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 75);
    \u0275\u0275text(13, "O QR Code cont\xE9m s\xF3 este c\xF3digo \u2014 nenhum dado do cliente ou de pagamento.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 70)(15, "button", 41);
    \u0275\u0275listener("click", function PassesConsumoComponent_Conditional_50_Template_button_click_15_listener() {
      const pass_r13 = \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.printQr(pass_r13));
    });
    \u0275\u0275elementStart(16, "span", 5);
    \u0275\u0275text(17, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Imprimir ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const pass_r13 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Cart\xE3o N\xBA ", pass_r13.number, "");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.qrImageUrl() ? 8 : 9);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(pass_r13.token);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.isPrinting());
  }
}
function PassesConsumoComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275listener("click", function PassesConsumoComponent_Conditional_51_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeBlock());
    });
    \u0275\u0275elementStart(1, "div", 63);
    \u0275\u0275listener("click", function PassesConsumoComponent_Conditional_51_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 64)(3, "h2", 65);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 66);
    \u0275\u0275listener("click", function PassesConsumoComponent_Conditional_51_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeBlock());
    });
    \u0275\u0275elementStart(6, "span", 5);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "p", 32);
    \u0275\u0275text(9, "Um cart\xE3o bloqueado n\xE3o pode ser vinculado a nenhuma mesa at\xE9 ser reativado.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "form", 67);
    \u0275\u0275listener("submit", function PassesConsumoComponent_Conditional_51_Template_form_submit_10_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r0.submitBlock());
    });
    \u0275\u0275elementStart(11, "div", 13)(12, "label", 76);
    \u0275\u0275text(13, "Motivo ");
    \u0275\u0275elementStart(14, "span", 77);
    \u0275\u0275text(15, "(opcional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 15)(17, "input", 78);
    \u0275\u0275listener("ngModelChange", function PassesConsumoComponent_Conditional_51_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.blockReason.set($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 70)(19, "button", 24);
    \u0275\u0275listener("click", function PassesConsumoComponent_Conditional_51_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeBlock());
    });
    \u0275\u0275text(20, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 79);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Bloquear cart\xE3o N\xBA ", ctx.number, "");
    \u0275\u0275advance(13);
    \u0275\u0275property("ngModel", ctx_r0.blockReason());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.isBlocking());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isBlocking() ? "Bloqueando\u2026" : "Bloquear", " ");
  }
}
function PassesConsumoComponent_Conditional_52_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1, "Carregando hist\xF3rico\u2026");
    \u0275\u0275elementEnd();
  }
}
function PassesConsumoComponent_Conditional_52_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 5);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.historyError(), " ");
  }
}
function PassesConsumoComponent_Conditional_52_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1, "Nenhum evento registrado.");
    \u0275\u0275elementEnd();
  }
}
function PassesConsumoComponent_Conditional_52_Conditional_13_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r16.details);
  }
}
function PassesConsumoComponent_Conditional_52_Conditional_13_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.tableLabel(event_r16.tableNumber, event_r16.tableName));
  }
}
function PassesConsumoComponent_Conditional_52_Conditional_13_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Cliente: ", event_r16.customerName, "");
  }
}
function PassesConsumoComponent_Conditional_52_Conditional_13_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Por: ", event_r16.userName, "");
  }
}
function PassesConsumoComponent_Conditional_52_Conditional_13_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Consumo: ", ctx_r0.formatCurrency(event_r16.totalAmount), "");
  }
}
function PassesConsumoComponent_Conditional_52_Conditional_13_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", event_r16.type === "PAYMENT" ? "Valor" : "Pago", ": ", ctx_r0.formatCurrency(event_r16.paidAmount), "");
  }
}
function PassesConsumoComponent_Conditional_52_Conditional_13_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Saldo: ", ctx_r0.formatCurrency(event_r16.pendingAmount), "");
  }
}
function PassesConsumoComponent_Conditional_52_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 82)(1, "div", 83)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 84);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, PassesConsumoComponent_Conditional_52_Conditional_13_For_2_Conditional_6_Template, 2, 1, "p", 85);
    \u0275\u0275elementStart(7, "p", 86);
    \u0275\u0275template(8, PassesConsumoComponent_Conditional_52_Conditional_13_For_2_Conditional_8_Template, 2, 1, "span")(9, PassesConsumoComponent_Conditional_52_Conditional_13_For_2_Conditional_9_Template, 2, 1, "span")(10, PassesConsumoComponent_Conditional_52_Conditional_13_For_2_Conditional_10_Template, 2, 1, "span")(11, PassesConsumoComponent_Conditional_52_Conditional_13_For_2_Conditional_11_Template, 2, 1, "span")(12, PassesConsumoComponent_Conditional_52_Conditional_13_For_2_Conditional_12_Template, 2, 2, "span")(13, PassesConsumoComponent_Conditional_52_Conditional_13_For_2_Conditional_13_Template, 2, 1, "span");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r16 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge badge--", ctx_r0.eventTone(event_r16.type), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.eventLabel(event_r16.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDateTime(event_r16.createdAt));
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r16.details ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(event_r16.tableNumber != null ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r16.customerName ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r16.userName ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r16.totalAmount != null ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r16.paidAmount != null ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r16.pendingAmount != null ? 13 : -1);
  }
}
function PassesConsumoComponent_Conditional_52_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ol", 81);
    \u0275\u0275repeaterCreate(1, PassesConsumoComponent_Conditional_52_Conditional_13_For_2_Template, 14, 12, "li", 82, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.historyEvents());
  }
}
function PassesConsumoComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275listener("click", function PassesConsumoComponent_Conditional_52_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeHistory());
    });
    \u0275\u0275elementStart(1, "div", 80);
    \u0275\u0275listener("click", function PassesConsumoComponent_Conditional_52_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 64)(3, "h2", 65);
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span", 51);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 66);
    \u0275\u0275listener("click", function PassesConsumoComponent_Conditional_52_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeHistory());
    });
    \u0275\u0275elementStart(8, "span", 5);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, PassesConsumoComponent_Conditional_52_Conditional_10_Template, 2, 0, "p", 32)(11, PassesConsumoComponent_Conditional_52_Conditional_11_Template, 4, 1, "div", 9)(12, PassesConsumoComponent_Conditional_52_Conditional_12_Template, 2, 0, "p", 32)(13, PassesConsumoComponent_Conditional_52_Conditional_13_Template, 3, 0, "ol", 81);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pass_r17 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Hist\xF3rico \u2014 cart\xE3o N\xBA ", pass_r17.number, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", pass_r17.token, ")");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.historyLoading() ? 10 : ctx_r0.historyError() ? 11 : ctx_r0.historyEvents().length === 0 ? 12 : 13);
  }
}
var PAGE_SIZE = 20;
var STATUS_LABELS = {
  AVAILABLE: "Dispon\xEDvel",
  IN_USE: "Em uso",
  BLOCKED: "Bloqueado",
  EXPIRED: "Expirado"
};
var EVENT_LABELS = {
  GENERATED: "Passe gerado",
  LINKED: "Vinculado \xE0 mesa",
  LINK_REJECTED: "V\xEDnculo recusado",
  TABLE_CHANGED: "Troca de mesa",
  PAYMENT: "Pagamento",
  EXIT_ALLOWED: "Sa\xEDda validada",
  EXIT_DENIED: "Sa\xEDda bloqueada",
  RELEASED: "Sa\xEDda liberada",
  BLOCKED: "Bloqueado",
  UNBLOCKED: "Reativado"
};
var PassesConsumoComponent = class _PassesConsumoComponent {
  passesService = inject(ConsumptionPassesService);
  dateTimeFormatter = brDateTimeFormat({ day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
  currencyFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
  statusOptions = [
    { value: "", label: "Todos os status" },
    { value: "AVAILABLE", label: STATUS_LABELS.AVAILABLE },
    { value: "IN_USE", label: STATUS_LABELS.IN_USE },
    { value: "BLOCKED", label: STATUS_LABELS.BLOCKED },
    { value: "EXPIRED", label: STATUS_LABELS.EXPIRED }
  ];
  // --- Configuração -------------------------------------------------------------
  settings = signal(null);
  isSavingSettings = signal(false);
  // --- Lista --------------------------------------------------------------------
  passes = signal([]);
  isLoading = signal(true);
  listError = signal(null);
  actionError = signal(null);
  actionSuccess = signal(null);
  page = signal(0);
  totalPages = signal(1);
  totalElements = signal(0);
  // Filtros — aplicados ao clicar "Buscar" (não a cada tecla).
  filterStatus = signal("");
  filterSearch = signal("");
  // Seleção para impressão — ids de qualquer página (a seleção sobrevive à paginação).
  selectedIds = signal(/* @__PURE__ */ new Set());
  allOnPageSelected = computed(() => {
    const ids = this.selectedIds();
    const page = this.passes();
    return page.length > 0 && page.every((pass) => ids.has(pass.id));
  });
  isPrinting = signal(false);
  isDownloadingAll = signal(false);
  // --- Gerar --------------------------------------------------------------------
  showGenerate = signal(false);
  generateQuantity = signal(20);
  isGenerating = signal(false);
  generateError = signal(null);
  // --- QR -----------------------------------------------------------------------
  qrPass = signal(null);
  qrImageUrl = signal(null);
  // --- Bloquear -----------------------------------------------------------------
  blockPass = signal(null);
  blockReason = signal("");
  isBlocking = signal(false);
  // --- Histórico ----------------------------------------------------------------
  historyPass = signal(null);
  historyEvents = signal([]);
  historyLoading = signal(false);
  historyError = signal(null);
  ngOnInit() {
    this.loadSettings();
    this.load(0);
  }
  ngOnDestroy() {
    this.revokeQrUrl();
  }
  // --- Configuração -------------------------------------------------------------
  loadSettings() {
    this.passesService.getSettings().subscribe({
      next: (settings) => this.settings.set(settings),
      error: () => this.settings.set(null)
    });
  }
  toggleRequired(required, checkbox) {
    const current = this.settings();
    if (required && current && current.availableCount === 0) {
      if (checkbox) {
        checkbox.checked = false;
      }
      this.flashError("Gere os cart\xF5es antes de ativar \u2014 sem cart\xF5es dispon\xEDveis, nenhum cliente conseguiria pedir pelo card\xE1pio.");
      return;
    }
    if (!required && !confirm("Desativar o cart\xE3o de consumo? Os clientes voltam a pedir direto na comanda da mesa, sem cart\xE3o.")) {
      if (checkbox) {
        checkbox.checked = true;
      }
      return;
    }
    this.isSavingSettings.set(true);
    this.actionError.set(null);
    this.passesService.updateSettings(required).subscribe({
      next: (settings) => {
        this.isSavingSettings.set(false);
        this.settings.set(settings);
        this.flashSuccess(required ? "Cart\xE3o de consumo ativado: o cliente agora vincula o cart\xE3o para pedir pelo card\xE1pio." : "Cart\xE3o de consumo desativado: o sistema volta a funcionar s\xF3 com a comanda da mesa.");
      },
      error: (error) => {
        this.isSavingSettings.set(false);
        this.flashError(this.resolveErrorMessage(error, "N\xE3o foi poss\xEDvel salvar a configura\xE7\xE3o."));
        this.loadSettings();
      }
    });
  }
  // --- Lista --------------------------------------------------------------------
  load(page = this.page()) {
    this.isLoading.set(true);
    this.listError.set(null);
    this.passesService.list({
      page,
      size: PAGE_SIZE,
      status: this.filterStatus() || void 0,
      search: this.filterSearch().trim() || void 0
    }).subscribe({
      next: (result) => {
        this.isLoading.set(false);
        this.passes.set(result.content);
        this.page.set(result.page);
        this.totalPages.set(Math.max(1, result.totalPages));
        this.totalElements.set(result.totalElements);
      },
      error: (error) => {
        this.isLoading.set(false);
        this.listError.set(this.resolveErrorMessage(error, "N\xE3o foi poss\xEDvel carregar os passes."));
      }
    });
  }
  applyFilters() {
    this.load(0);
  }
  clearFilters() {
    this.filterStatus.set("");
    this.filterSearch.set("");
    this.load(0);
  }
  refresh() {
    this.loadSettings();
    this.load();
  }
  previousPage() {
    if (this.page() > 0) {
      this.load(this.page() - 1);
    }
  }
  nextPage() {
    if (this.page() < this.totalPages() - 1) {
      this.load(this.page() + 1);
    }
  }
  // --- Seleção/impressão --------------------------------------------------------
  isSelected(pass) {
    return this.selectedIds().has(pass.id);
  }
  toggleSelected(pass) {
    this.selectedIds.update((ids) => {
      const next = new Set(ids);
      if (next.has(pass.id)) {
        next.delete(pass.id);
      } else {
        next.add(pass.id);
      }
      return next;
    });
  }
  toggleAllOnPage() {
    const selectAll = !this.allOnPageSelected();
    this.selectedIds.update((ids) => {
      const next = new Set(ids);
      this.passes().forEach((pass) => selectAll ? next.add(pass.id) : next.delete(pass.id));
      return next;
    });
  }
  clearSelection() {
    this.selectedIds.set(/* @__PURE__ */ new Set());
  }
  printSelected() {
    this.print([...this.selectedIds()]);
  }
  // Baixa (não abre) um único PDF com todos os cartões — para mandar para a gráfica de uma vez.
  downloadAll() {
    if (this.isDownloadingAll()) {
      return;
    }
    this.isDownloadingAll.set(true);
    this.passesService.printAllPdf().subscribe({
      next: (blob) => {
        this.isDownloadingAll.set(false);
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "cartoes-de-consumo.pdf";
        link.click();
        setTimeout(() => URL.revokeObjectURL(url), 6e4);
      },
      error: (error) => {
        this.isDownloadingAll.set(false);
        this.flashError(this.resolveBlobErrorMessage(error));
      }
    });
  }
  print(ids) {
    if (!ids.length || this.isPrinting()) {
      return;
    }
    const printWindow = window.open("", "_blank");
    this.isPrinting.set(true);
    this.passesService.printPdf(ids).subscribe({
      next: (blob) => {
        this.isPrinting.set(false);
        const url = URL.createObjectURL(blob);
        if (printWindow) {
          printWindow.location.href = url;
        } else {
          window.open(url, "_blank");
        }
        setTimeout(() => URL.revokeObjectURL(url), 6e4);
      },
      error: (error) => {
        this.isPrinting.set(false);
        printWindow?.close();
        this.flashError(this.resolveErrorMessage(error, "N\xE3o foi poss\xEDvel gerar o PDF para impress\xE3o."));
      }
    });
  }
  // --- Gerar --------------------------------------------------------------------
  openGenerate() {
    this.generateError.set(null);
    this.generateQuantity.set(20);
    this.showGenerate.set(true);
  }
  closeGenerate() {
    this.showGenerate.set(false);
  }
  submitGenerate(printAfter) {
    const quantity = Math.floor(Number(this.generateQuantity()));
    if (!quantity || quantity < 1 || quantity > 500) {
      this.generateError.set("Informe uma quantidade entre 1 e 500.");
      return;
    }
    this.isGenerating.set(true);
    this.generateError.set(null);
    this.passesService.generate(quantity).subscribe({
      next: (created) => {
        this.isGenerating.set(false);
        this.showGenerate.set(false);
        this.flashSuccess(`${created.length} passe(s) gerado(s): cart\xF5es N\xBA ${created[0]?.number} a ${created[created.length - 1]?.number}.`);
        this.refresh();
        if (printAfter) {
          this.print(created.map((pass) => pass.id));
        }
      },
      error: (error) => {
        this.isGenerating.set(false);
        this.generateError.set(this.resolveErrorMessage(error, "N\xE3o foi poss\xEDvel gerar os passes."));
      }
    });
  }
  // --- QR -----------------------------------------------------------------------
  openQr(pass) {
    this.revokeQrUrl();
    this.qrPass.set(pass);
    this.passesService.getQrCodePng(pass.id).subscribe({
      next: (blob) => this.qrImageUrl.set(URL.createObjectURL(blob)),
      error: () => {
        this.qrPass.set(null);
        this.flashError("N\xE3o foi poss\xEDvel carregar o QR Code.");
      }
    });
  }
  closeQr() {
    this.qrPass.set(null);
    this.revokeQrUrl();
  }
  printQr(pass) {
    this.print([pass.id]);
  }
  revokeQrUrl() {
    const url = this.qrImageUrl();
    if (url) {
      URL.revokeObjectURL(url);
    }
    this.qrImageUrl.set(null);
  }
  // --- Bloquear/reativar ------------------------------------------------------------
  openBlock(pass) {
    this.blockReason.set("");
    this.blockPass.set(pass);
  }
  closeBlock() {
    this.blockPass.set(null);
  }
  submitBlock() {
    const pass = this.blockPass();
    if (!pass || this.isBlocking()) {
      return;
    }
    this.isBlocking.set(true);
    this.passesService.block(pass.id, this.blockReason().trim()).subscribe({
      next: () => {
        this.isBlocking.set(false);
        this.blockPass.set(null);
        this.flashSuccess(`Cart\xE3o N\xBA ${pass.number} bloqueado.`);
        this.refresh();
      },
      error: (error) => {
        this.isBlocking.set(false);
        this.blockPass.set(null);
        this.flashError(this.resolveErrorMessage(error, "N\xE3o foi poss\xEDvel bloquear o passe."));
      }
    });
  }
  unblock(pass) {
    this.passesService.unblock(pass.id).subscribe({
      next: () => {
        this.flashSuccess(`Cart\xE3o N\xBA ${pass.number} reativado.`);
        this.refresh();
      },
      error: (error) => this.flashError(this.resolveErrorMessage(error, "N\xE3o foi poss\xEDvel reativar o passe."))
    });
  }
  // --- Histórico ----------------------------------------------------------------
  openHistory(pass) {
    this.historyPass.set(pass);
    this.historyEvents.set([]);
    this.historyError.set(null);
    this.historyLoading.set(true);
    this.passesService.events(pass.id).subscribe({
      next: (events) => {
        this.historyLoading.set(false);
        this.historyEvents.set(events);
      },
      error: (error) => {
        this.historyLoading.set(false);
        this.historyError.set(this.resolveErrorMessage(error, "N\xE3o foi poss\xEDvel carregar o hist\xF3rico."));
      }
    });
  }
  closeHistory() {
    this.historyPass.set(null);
  }
  // --- Formatação ---------------------------------------------------------------
  statusLabel(status) {
    return STATUS_LABELS[status];
  }
  eventLabel(type) {
    return EVENT_LABELS[type];
  }
  eventTone(type) {
    switch (type) {
      case "RELEASED":
      case "EXIT_ALLOWED":
      case "PAYMENT":
      case "UNBLOCKED":
        return "success";
      case "LINK_REJECTED":
      case "EXIT_DENIED":
      case "BLOCKED":
        return "danger";
      case "LINKED":
      case "TABLE_CHANGED":
        return "warning";
      default:
        return "muted";
    }
  }
  formatDateTime(value) {
    const date = parseApiDate(value);
    return date ? this.dateTimeFormatter.format(date) : "\u2014";
  }
  formatCurrency(value) {
    return value == null ? "\u2014" : this.currencyFormatter.format(value);
  }
  tableLabel(tableNumber, tableName) {
    if (tableNumber == null) {
      return "\u2014";
    }
    return formatTableLabel(tableNumber, tableName);
  }
  flashSuccess(message) {
    this.actionError.set(null);
    this.actionSuccess.set(message);
    autoDismiss(this.actionSuccess, null);
  }
  flashError(message) {
    this.actionSuccess.set(null);
    this.actionError.set(message);
    autoDismiss(this.actionError, null);
  }
  // Com responseType 'blob', o corpo de erro da API também chega como Blob (não como JSON) — sem
  // como ler a mensagem de forma síncrona, usa o texto padrão por status.
  resolveBlobErrorMessage(error) {
    if (error.status === 422) {
      return "N\xE3o h\xE1 cart\xF5es para baixar, ou s\xE3o mais de 5.000 \u2014 nesse caso, selecione e imprima em partes.";
    }
    if (error.status === 403) {
      return "Seu perfil n\xE3o tem permiss\xE3o para esta a\xE7\xE3o.";
    }
    return "N\xE3o foi poss\xEDvel gerar o PDF com todos os cart\xF5es.";
  }
  resolveErrorMessage(error, fallback) {
    const body = error.error;
    if (error.status === 403 && !body?.mensagem) {
      return "Seu perfil n\xE3o tem permiss\xE3o para esta a\xE7\xE3o.";
    }
    return body?.mensagem || body?.titulo || fallback;
  }
  static \u0275fac = function PassesConsumoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PassesConsumoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PassesConsumoComponent, selectors: [["app-admin-passes-consumo"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 53, vars: 14, consts: [[1, "page-header", "page-header--row"], [1, "page-title"], [1, "page-subtitle"], [1, "page-header__actions"], ["type", "button", "appRipple", "", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["aria-hidden", "true", 1, "material-icons"], ["type", "button", "appRipple", "", "title", "Um \xFAnico PDF com todos os cart\xF5es, pronto para imprimir", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", 3, "click"], ["role", "status", 1, "form-alert", "form-alert--success"], ["role", "alert", 1, "form-alert", "form-alert--error"], [1, "card", "settings-card"], [1, "card", "filters-card"], [1, "filters-row", 3, "submit"], [1, "field"], ["for", "pass-filter-status", 1, "field__label"], [1, "field__control"], ["id", "pass-filter-status", "name", "status", 1, "field__input", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "field", "filters-row__search"], ["for", "pass-filter-search", 1, "field__label"], ["id", "pass-filter-search", "type", "text", "name", "search", "placeholder", "Ex.: 12 ou CMU-7F91", "autocomplete", "off", 1, "field__input", 3, "ngModelChange", "ngModel"], [1, "field", "filters-row__actions"], ["aria-hidden", "true", 1, "field__label"], ["type", "submit", "appRipple", "", 1, "btn", "btn--primary"], ["type", "button", "appRipple", "", 1, "btn", "btn--ghost", 3, "click"], [1, "selection-bar", "card"], [1, "card", "table-card"], [1, "field__hint", "table-card__state"], ["role", "alert", 1, "form-alert", "form-alert--error", "table-card__state"], [1, "modal-backdrop"], [1, "settings-card__toggle"], ["type", "checkbox", 3, "change", "checked", "disabled"], [1, "field__hint"], [1, "settings-card__stats"], [1, "stat--success"], [1, "stat--warning"], [1, "stat--danger"], [1, "badge", "badge--success"], ["routerLink", "/painel/controle-saida"], [1, "badge", "badge--muted"], [1, "selection-bar__actions"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", 3, "click", "disabled"], [1, "table-wrapper"], [1, "data-table"], [1, "data-table__check-col"], ["type", "checkbox", "aria-label", "Selecionar todos desta p\xE1gina", 3, "change", "checked"], [1, "data-table__actions-col"], [1, "pagination"], [1, "pagination__info"], [1, "pagination__controls"], ["type", "checkbox", 3, "change", "checked"], [1, "pass-token"], [1, "badge"], [1, "pass-usage"], [1, "pass-usage__hint"], ["type", "button", "title", "Ver QR Code", "aria-label", "Ver QR Code", 1, "icon-btn", 3, "click"], ["type", "button", "title", "Hist\xF3rico", "aria-label", "Hist\xF3rico", 1, "icon-btn", 3, "click"], ["type", "button", "title", "Reativar", "aria-label", "Reativar", 1, "icon-btn"], ["type", "button", "title", "Bloquear", "aria-label", "Bloquear", 1, "icon-btn"], ["type", "button", "title", "Reativar", "aria-label", "Reativar", 1, "icon-btn", 3, "click"], ["type", "button", "title", "Bloquear", "aria-label", "Bloquear", 1, "icon-btn", 3, "click"], ["colspan", "6", 1, "data-table__empty"], [1, "modal-backdrop", 3, "click"], [1, "modal-card", "modal-card--sm", "card", 3, "click"], [1, "modal-card__header"], [1, "step-heading"], ["type", "button", "aria-label", "Fechar", 1, "icon-btn", 3, "click"], [3, "submit"], ["for", "generate-quantity", 1, "field__label"], ["id", "generate-quantity", "type", "number", "min", "1", "max", "500", "name", "quantity", 1, "field__input", 3, "ngModelChange", "ngModel"], [1, "step-actions"], ["type", "submit", "appRipple", "", 1, "btn", "btn--primary", 3, "disabled"], [1, "modal-card", "modal-card--sm", "card", "qr-modal", 3, "click"], [1, "qr-modal__image", 3, "src", "alt"], [1, "qr-modal__token"], [1, "field__hint", "qr-modal__hint"], ["for", "block-reason", 1, "field__label"], [1, "field__optional"], ["id", "block-reason", "type", "text", "maxlength", "255", "name", "reason", "placeholder", "Ex.: cart\xE3o perdido, danificado", 1, "field__input", 3, "ngModelChange", "ngModel"], ["type", "submit", "appRipple", "", 1, "btn", "btn--danger", 3, "disabled"], [1, "modal-card", "modal-card--lg", "card", 3, "click"], [1, "timeline"], [1, "timeline__item"], [1, "timeline__header"], [1, "timeline__date"], [1, "timeline__details"], [1, "timeline__meta"]], template: function PassesConsumoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Passes de Consumo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, " Opcional: cart\xF5es com QR Code que identificam cada cliente, como o cart\xE3o de consuma\xE7\xE3o de bares e casas noturnas. O cliente escaneia a mesa e depois o cart\xE3o; tudo que ele pedir entra numa comanda individual, conferida na sa\xEDda em Controle de Sa\xEDda. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3)(7, "button", 4);
      \u0275\u0275listener("click", function PassesConsumoComponent_Template_button_click_7_listener() {
        return ctx.refresh();
      });
      \u0275\u0275elementStart(8, "span", 5);
      \u0275\u0275text(9, "refresh");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Atualizar ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 6);
      \u0275\u0275listener("click", function PassesConsumoComponent_Template_button_click_11_listener() {
        return ctx.downloadAll();
      });
      \u0275\u0275elementStart(12, "span", 5);
      \u0275\u0275text(13, "download");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 7);
      \u0275\u0275listener("click", function PassesConsumoComponent_Template_button_click_15_listener() {
        return ctx.openGenerate();
      });
      \u0275\u0275elementStart(16, "span", 5);
      \u0275\u0275text(17, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " Gerar passes ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(19, PassesConsumoComponent_Conditional_19_Template, 4, 1, "div", 8)(20, PassesConsumoComponent_Conditional_20_Template, 4, 1, "div", 9)(21, PassesConsumoComponent_Conditional_21_Template, 29, 7, "section", 10);
      \u0275\u0275elementStart(22, "section", 11)(23, "form", 12);
      \u0275\u0275listener("submit", function PassesConsumoComponent_Template_form_submit_23_listener($event) {
        $event.preventDefault();
        return ctx.applyFilters();
      });
      \u0275\u0275elementStart(24, "div", 13)(25, "label", 14);
      \u0275\u0275text(26, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 15)(28, "select", 16);
      \u0275\u0275listener("ngModelChange", function PassesConsumoComponent_Template_select_ngModelChange_28_listener($event) {
        return ctx.filterStatus.set($event);
      });
      \u0275\u0275repeaterCreate(29, PassesConsumoComponent_For_30_Template, 2, 2, "option", 17, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 18)(32, "label", 19);
      \u0275\u0275text(33, "C\xF3digo ou n\xFAmero do cart\xE3o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 15)(35, "input", 20);
      \u0275\u0275listener("ngModelChange", function PassesConsumoComponent_Template_input_ngModelChange_35_listener($event) {
        return ctx.filterSearch.set($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div", 21)(37, "span", 22);
      \u0275\u0275text(38, "A\xE7\xF5es");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 15)(40, "button", 23);
      \u0275\u0275text(41, "Buscar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "button", 24);
      \u0275\u0275listener("click", function PassesConsumoComponent_Template_button_click_42_listener() {
        return ctx.clearFilters();
      });
      \u0275\u0275text(43, "Limpar");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(44, PassesConsumoComponent_Conditional_44_Template, 10, 3, "div", 25);
      \u0275\u0275elementStart(45, "section", 26);
      \u0275\u0275template(46, PassesConsumoComponent_Conditional_46_Template, 2, 0, "p", 27)(47, PassesConsumoComponent_Conditional_47_Template, 4, 1, "div", 28)(48, PassesConsumoComponent_Conditional_48_Template, 28, 7);
      \u0275\u0275elementEnd();
      \u0275\u0275template(49, PassesConsumoComponent_Conditional_49_Template, 26, 5, "div", 29)(50, PassesConsumoComponent_Conditional_50_Template, 19, 4, "div", 29)(51, PassesConsumoComponent_Conditional_51_Template, 23, 4, "div", 29)(52, PassesConsumoComponent_Conditional_52_Template, 14, 3, "div", 29);
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_5_0;
      let tmp_12_0;
      let tmp_13_0;
      let tmp_14_0;
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", ctx.isLoading());
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.isDownloadingAll() || !((tmp_1_0 = ctx.settings()) == null ? null : tmp_1_0.totalCount));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isDownloadingAll() ? "Gerando PDF\u2026" : "Baixar todos (PDF)", " ");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.actionSuccess() ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.actionError() ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_5_0 = ctx.settings()) ? 21 : -1, tmp_5_0);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngModel", ctx.filterStatus());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.statusOptions);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngModel", ctx.filterSearch());
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.selectedIds().size > 0 ? 44 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading() ? 46 : ctx.listError() ? 47 : 48);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showGenerate() ? 49 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_12_0 = ctx.qrPass()) ? 50 : -1, tmp_12_0);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_13_0 = ctx.blockPass()) ? 51 : -1, tmp_13_0);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_14_0 = ctx.historyPass()) ? 52 : -1, tmp_14_0);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, MinValidator, MaxValidator, NgModel, NgForm, RippleDirective, RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-header--row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.page-header__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n  max-width: 720px;\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.form-alert[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.settings-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n  padding: 20px;\n  margin-bottom: 20px;\n}\n.settings-card__toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  max-width: 520px;\n  cursor: pointer;\n}\n.settings-card__toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  width: 18px;\n  height: 18px;\n  accent-color: var(--color-accent);\n}\n.settings-card__toggle[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--color-text);\n}\n.settings-card__stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  margin: 0;\n}\n.settings-card__stats[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n}\n.settings-card__stats[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 1.375rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.stat--success[_ngcontent-%COMP%] {\n  color: var(--color-success) !important;\n}\n.stat--warning[_ngcontent-%COMP%] {\n  color: #facc15 !important;\n}\n.stat--danger[_ngcontent-%COMP%] {\n  color: #f87171 !important;\n}\n.filters-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-bottom: 20px;\n}\n.filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.filters-row[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  min-width: 160px;\n  margin-top: 0;\n}\n.filters-row__search[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 320px;\n}\n.filters-row__actions[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.filters-row__actions[_ngcontent-%COMP%]   .field__label[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.filters-row__actions[_ngcontent-%COMP%]   .field__control[_ngcontent-%COMP%] {\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.selection-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n  padding: 12px 20px;\n  margin-bottom: 16px;\n}\n.selection-bar__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.table-card[_ngcontent-%COMP%] {\n  padding: 8px 0 0;\n  overflow: hidden;\n}\n.table-card__state[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.9375rem;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  text-align: left;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: 1px solid var(--color-border);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--color-border);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.02);\n}\n.data-table__check-col[_ngcontent-%COMP%] {\n  width: 40px;\n  padding-right: 0 !important;\n}\n.data-table__check-col[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  accent-color: var(--color-accent);\n}\n.data-table__actions-col[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n.data-table__empty[_ngcontent-%COMP%] {\n  text-align: center !important;\n  color: var(--color-text-muted);\n  padding: 32px 20px !important;\n  white-space: normal !important;\n}\n.pass-token[_ngcontent-%COMP%] {\n  font-family:\n    "Roboto Mono",\n    ui-monospace,\n    monospace;\n  letter-spacing: 0.03em;\n}\n.pass-usage__hint[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: var(--radius-full);\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.badge--success[_ngcontent-%COMP%] {\n  background: var(--color-success-bg);\n  color: var(--color-success);\n}\n.badge--muted[_ngcontent-%COMP%] {\n  background: rgba(203, 213, 225, 0.12);\n  color: var(--color-text-muted);\n}\n.badge--warning[_ngcontent-%COMP%] {\n  background: rgba(250, 204, 21, 0.14);\n  color: #facc15;\n}\n.badge--danger[_ngcontent-%COMP%] {\n  background: rgba(248, 113, 113, 0.14);\n  color: #f87171;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius-sm);\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text);\n}\n.icon-btn[_ngcontent-%COMP%]    + .icon-btn[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  padding: 16px 20px;\n}\n.pagination__info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n.pagination__controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(4, 8, 20, 0.64);\n  backdrop-filter: blur(2px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  z-index: 100;\n}\n.modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 640px;\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n  padding: 32px;\n}\n.modal-card--sm[_ngcontent-%COMP%] {\n  max-width: 440px;\n}\n.modal-card--lg[_ngcontent-%COMP%] {\n  max-width: 820px;\n}\n.modal-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.step-heading[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n}\n.step-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-top: 24px;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #f87171;\n  color: #2a0a0a;\n}\n.btn--danger[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n}\n.btn--danger[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.qr-modal[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.qr-modal__image[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-width: 280px;\n  margin: 16px auto 8px;\n  border-radius: var(--radius-sm);\n  background: #fff;\n}\n.qr-modal__token[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  font-family:\n    "Roboto Mono",\n    ui-monospace,\n    monospace;\n  font-size: 1.25rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  color: var(--color-text);\n}\n.qr-modal__hint[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.timeline[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 16px 0 0;\n  padding: 0;\n}\n.timeline__item[_ngcontent-%COMP%] {\n  padding: 12px 0 12px 16px;\n  border-left: 2px solid var(--color-border);\n}\n.timeline__item[_ngcontent-%COMP%]    + .timeline__item[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n.timeline__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.timeline__date[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.timeline__details[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  color: var(--color-text);\n  font-size: 0.9375rem;\n}\n.timeline__meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px 14px;\n  flex-wrap: wrap;\n  margin: 4px 0 0;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=passes-consumo.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PassesConsumoComponent, { className: "PassesConsumoComponent", filePath: "src\\app\\features\\admin\\pages\\passes-consumo\\passes-consumo.component.ts", lineNumber: 51 });
})();
export {
  PassesConsumoComponent
};
//# sourceMappingURL=chunk-UDRJ5CUE.js.map
