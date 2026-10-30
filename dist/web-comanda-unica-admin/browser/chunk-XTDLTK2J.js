import {
  MenuCategoriesService,
  MenuItemsService
} from "./chunk-IWUK6AZB.js";
import {
  StaffOrderService
} from "./chunk-HZKDTF2P.js";
import {
  QrTargetResolverService
} from "./chunk-AEZWW7KB.js";
import {
  QrScannerComponent
} from "./chunk-NLLVBTSU.js";
import {
  TablesService
} from "./chunk-YOR34W3A.js";
import {
  autoDismiss
} from "./chunk-JD6JJHYZ.js";
import {
  RippleDirective
} from "./chunk-ZBOLJN4C.js";
import {
  ConsumptionPassesService
} from "./chunk-CNMFBBFG.js";
import {
  COUNTER_TABLE_LABEL
} from "./chunk-XFEDBWXJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-GNNS5J5Q.js";
import {
  parseApiDate
} from "./chunk-MQ3P2GIM.js";
import "./chunk-IKIQHSDP.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-JC7LZX74.js";
import {
  HttpErrorResponse,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-MRKXMG4P.js";

// src/app/features/admin/pages/lancar-pedido/lancar-pedido.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.label;
var _forTrack2 = ($index, $item) => $item.menuItemId;
var _c0 = (a0) => ["/painel/comandas/lancar-pedido/comanda", a0];
var _c1 = (a0) => ({ cartao: a0 });
function LancarPedidoComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.counterLabel, " (cart\xE3o de consumo)");
  }
}
function LancarPedidoComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const table_r2 = ctx.$implicit;
    \u0275\u0275property("value", table_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("Mesa ", table_r2.number, "", table_r2.name ? " \u2014 " + table_r2.name : "", "");
  }
}
function LancarPedidoComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function LancarPedidoComponent_Conditional_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectCounter());
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "storefront");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.isSubmittingOrder());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.counterLabel, " ");
  }
}
function LancarPedidoComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 4);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "button", 21);
    \u0275\u0275listener("click", function LancarPedidoComponent_Conditional_28_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadTables(ctx_r0.orderTableId() || null));
    });
    \u0275\u0275text(5, "Tentar de novo");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.tablesError(), " ");
  }
}
function LancarPedidoComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "app-qr-scanner", 22);
    \u0275\u0275listener("scanned", function LancarPedidoComponent_Conditional_29_Template_app_qr_scanner_scanned_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onTargetScanned($event));
    })("closed", function LancarPedidoComponent_Conditional_29_Template_app_qr_scanner_closed_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.isScanningTarget.set(false));
    });
    \u0275\u0275elementEnd()();
  }
}
function LancarPedidoComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 4);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.targetScanError(), " ");
  }
}
function LancarPedidoComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 4);
    \u0275\u0275text(2, "qr_code_2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Cart\xE3o N\xBA ", ctx_r0.pendingPassNumber(), " est\xE1 livre \u2014 escolha a mesa", ctx_r0.counterTable() ? " (ou " + ctx_r0.counterLabel + ")" : "", " para vincul\xE1-lo e lan\xE7ar o pedido. ");
  }
}
function LancarPedidoComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, "Abrindo comanda da mesa\u2026");
    \u0275\u0275elementEnd();
  }
}
function LancarPedidoComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 4);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.orderComandaError(), " ");
  }
}
function LancarPedidoComponent_Conditional_34_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Retirada no balc\xE3o: os itens v\xE3o para a comanda do cart\xE3o e o cliente busca no balc\xE3o. ");
  }
}
function LancarPedidoComponent_Conditional_34_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Os itens v\xE3o para a comanda do cart\xE3o. Cart\xE3o livre \xE9 vinculado agora. ");
  }
}
function LancarPedidoComponent_Conditional_34_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-qr-scanner", 28);
    \u0275\u0275listener("scanned", function LancarPedidoComponent_Conditional_34_Conditional_10_Template_app_qr_scanner_scanned_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPassScanned($event));
    })("closed", function LancarPedidoComponent_Conditional_34_Conditional_10_Template_app_qr_scanner_closed_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.isScanningPass.set(false));
    });
    \u0275\u0275elementEnd();
  }
}
function LancarPedidoComponent_Conditional_34_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 29);
    \u0275\u0275listener("submit", function LancarPedidoComponent_Conditional_34_Conditional_11_Template_form_submit_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r0.linkPass());
    });
    \u0275\u0275elementStart(1, "label", 30)(2, "span", 31);
    \u0275\u0275text(3, "CMU-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 32);
    \u0275\u0275listener("ngModelChange", function LancarPedidoComponent_Conditional_34_Conditional_11_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPassTokenInput($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 33)(6, "button", 34);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 35);
    \u0275\u0275listener("click", function LancarPedidoComponent_Conditional_34_Conditional_11_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.isScanningPass.set(true));
    });
    \u0275\u0275elementStart(9, "span", 4);
    \u0275\u0275text(10, "qr_code_scanner");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Escanear ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 13);
    \u0275\u0275text(13, "Leitor USB: \xE9 s\xF3 escanear com o cursor no campo.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("pass-step__field--disabled", ctx_r0.isLinkingPass());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r0.passTokenSuffix())("disabled", ctx_r0.isLinkingPass());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.passTokenSuffix().trim() || ctx_r0.isLinkingPass());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isLinkingPass() ? "Abrindo comanda\u2026" : "Continuar", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isLinkingPass());
  }
}
function LancarPedidoComponent_Conditional_34_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 4);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.passError(), " ");
  }
}
function LancarPedidoComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 18)(1, "div", 23)(2, "span", 24);
    \u0275\u0275text(3, "qr_code_2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h2", 25);
    \u0275\u0275text(6, "Cart\xE3o de consumo do cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 26);
    \u0275\u0275template(8, LancarPedidoComponent_Conditional_34_Conditional_8_Template, 1, 0)(9, LancarPedidoComponent_Conditional_34_Conditional_9_Template, 1, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, LancarPedidoComponent_Conditional_34_Conditional_10_Template, 1, 0, "app-qr-scanner")(11, LancarPedidoComponent_Conditional_34_Conditional_11_Template, 14, 7, "form", 27)(12, LancarPedidoComponent_Conditional_34_Conditional_12_Template, 4, 1, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r0.isCounterSelected() ? 8 : 9);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isScanningPass() ? 10 : 11);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.passError() ? 12 : -1);
  }
}
function LancarPedidoComponent_Conditional_35_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pass_r10 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pass_r10.token);
  }
}
function LancarPedidoComponent_Conditional_35_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "span", 4);
    \u0275\u0275text(2, "verified");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 43);
    \u0275\u0275text(4, " Lan\xE7ando no cart\xE3o ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, LancarPedidoComponent_Conditional_35_Conditional_0_Conditional_7_Template, 2, 1, "span", 44);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 45);
    \u0275\u0275listener("click", function LancarPedidoComponent_Conditional_35_Conditional_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.changePass());
    });
    \u0275\u0275text(10, " Trocar cart\xE3o ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const pass_r10 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(pass_r10.number ? "N\xBA " + pass_r10.number : pass_r10.token);
    \u0275\u0275advance();
    \u0275\u0275conditional(pass_r10.number ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 comanda ", ctx_r0.formatCurrency((tmp_5_0 = ctx_r0.orderComanda()) == null ? null : tmp_5_0.totalAmount), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isSubmittingOrder());
  }
}
function LancarPedidoComponent_Conditional_35_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function LancarPedidoComponent_Conditional_35_Conditional_1_For_4_Template_button_click_0_listener() {
      const category_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.setOrderCategoryFilter(category_r13.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r13 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("btn--primary", ctx_r0.orderCategoryFilter() === category_r13.id)("btn--ghost", ctx_r0.orderCategoryFilter() !== category_r13.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r13.name, " ");
  }
}
function LancarPedidoComponent_Conditional_35_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "button", 46);
    \u0275\u0275listener("click", function LancarPedidoComponent_Conditional_35_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setOrderCategoryFilter(""));
    });
    \u0275\u0275text(2, " Todas ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, LancarPedidoComponent_Conditional_35_Conditional_1_For_4_Template, 2, 5, "button", 47, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("btn--primary", ctx_r0.orderCategoryFilter() === "")("btn--ghost", ctx_r0.orderCategoryFilter() !== "");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.orderCategories());
  }
}
function LancarPedidoComponent_Conditional_35_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, "Carregando card\xE1pio\u2026");
    \u0275\u0275elementEnd();
  }
}
function LancarPedidoComponent_Conditional_35_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 4);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.orderCatalogError(), " ");
  }
}
function LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 68);
    \u0275\u0275listener("error", function LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_2_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r14);
      const item_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onOrderItemImageError(item_r15.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", item_r15.imageUrl, \u0275\u0275sanitizeUrl)("alt", item_r15.name);
  }
}
function LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1, "restaurant");
    \u0275\u0275elementEnd();
  }
}
function LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1, "Novo");
    \u0275\u0275elementEnd();
  }
}
function LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1, "Destaque");
    \u0275\u0275elementEnd();
  }
}
function LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1, "whatshot");
    \u0275\u0275elementEnd();
  }
}
function LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r15.description);
  }
}
function LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69)(1, "span", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const badge_r16 = ctx.$implicit;
    \u0275\u0275property("title", badge_r16.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(badge_r16.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", badge_r16.label, " ");
  }
}
function LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275repeaterCreate(1, LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_12_For_2_Template, 4, 3, "span", 69, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.orderItemBadges(item_r15));
  }
}
function LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r15 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", item_r15.weight, "g");
  }
}
function LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r15 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", item_r15.calories, " kcal");
  }
}
function LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275template(1, LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_13_Conditional_1_Template, 2, 1, "span")(2, LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_13_Conditional_2_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r15.weight ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r15.calories ? 2 : -1);
  }
}
function LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 71);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(item_r15.price));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(item_r15.promotionalPrice));
  }
}
function LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(item_r15.price));
  }
}
function LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 72);
    \u0275\u0275listener("click", function LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const item_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.addDraftItem(item_r15));
    });
    \u0275\u0275elementStart(1, "span", 39);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd()();
  }
}
function LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "button", 73);
    \u0275\u0275listener("click", function LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_19_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r18);
      const item_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.decrementDraftItem(item_r15.id));
    });
    \u0275\u0275elementStart(2, "span", 39);
    \u0275\u0275text(3, "remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 74);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 75);
    \u0275\u0275listener("click", function LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_19_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r18);
      const item_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.addDraftItem(item_r15));
    });
    \u0275\u0275elementStart(7, "span", 39);
    \u0275\u0275text(8, "add");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.getDraftQuantity(item_r15.id));
  }
}
function LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 50)(1, "div", 51);
    \u0275\u0275template(2, LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_2_Template, 1, 2, "img", 52)(3, LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_3_Template, 2, 0, "span", 53)(4, LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_4_Template, 2, 0, "span", 54)(5, LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_5_Template, 2, 0, "span", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 56)(7, "div", 57)(8, "h3", 58);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_10_Template, 2, 0, "span", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_11_Template, 2, 1, "p", 60)(12, LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_12_Template, 3, 0, "div", 61)(13, LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_13_Template, 3, 2, "div", 62);
    \u0275\u0275elementStart(14, "div", 63)(15, "span", 64);
    \u0275\u0275template(16, LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_16_Template, 4, 2)(17, LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_17_Template, 2, 1, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_18_Template, 3, 0, "button", 66)(19, LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Conditional_19_Template, 9, 1, "div", 67);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("menu-item--in-cart", ctx_r0.getDraftQuantity(item_r15.id) > 0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.hasOrderItemImage(item_r15) ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r15.newItem ? 4 : item_r15.highlight ? 5 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r15.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r15.spicy ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r15.description ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.orderItemBadges(item_r15).length > 0 ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r15.weight || item_r15.calories ? 13 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.hasActivePromotionForOrder(item_r15) ? 16 : 17);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.getDraftQuantity(item_r15.id) === 0 ? 18 : 19);
  }
}
function LancarPedidoComponent_Conditional_35_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, "Nenhum produto dispon\xEDvel nesta categoria.");
    \u0275\u0275elementEnd();
  }
}
function LancarPedidoComponent_Conditional_35_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275repeaterCreate(1, LancarPedidoComponent_Conditional_35_Conditional_4_For_2_Template, 20, 11, "article", 49, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, LancarPedidoComponent_Conditional_35_Conditional_4_Conditional_3_Template, 2, 0, "p", 13);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.visibleOrderMenuItems());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.visibleOrderMenuItems().length === 0 ? 3 : -1);
  }
}
function LancarPedidoComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, LancarPedidoComponent_Conditional_35_Conditional_0_Template, 11, 4, "div", 36)(1, LancarPedidoComponent_Conditional_35_Conditional_1_Template, 5, 4, "div", 37)(2, LancarPedidoComponent_Conditional_35_Conditional_2_Template, 2, 0, "p", 13)(3, LancarPedidoComponent_Conditional_35_Conditional_3_Template, 4, 1, "div", 15)(4, LancarPedidoComponent_Conditional_35_Conditional_4_Template, 4, 1);
    \u0275\u0275elementStart(5, "a", 38)(6, "span", 39);
    \u0275\u0275text(7, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 40);
    \u0275\u0275text(9, "Comanda");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 41);
    \u0275\u0275listener("click", function LancarPedidoComponent_Conditional_35_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openCart());
    });
    \u0275\u0275elementStart(11, "span", 39);
    \u0275\u0275text(12, "shopping_cart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 42);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r0.linkedPass()) ? 0 : -1, tmp_1_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.orderCategories().length > 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isLoadingOrderCatalog() ? 2 : ctx_r0.orderCatalogError() ? 3 : 4);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("comanda-fab--disabled", !ctx_r0.hasPlacedOrder());
    \u0275\u0275property("routerLink", ctx_r0.hasPlacedOrder() ? \u0275\u0275pureFunction1(12, _c0, ctx_r0.orderTableId()) : null)("queryParams", ctx_r0.linkedPass() ? \u0275\u0275pureFunction1(14, _c1, ctx_r0.linkedPass().token) : null);
    \u0275\u0275attribute("aria-disabled", !ctx_r0.hasPlacedOrder())("title", !ctx_r0.hasPlacedOrder() ? "Lance o primeiro pedido para ver a comanda da mesa" : null);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("cart-fab--hidden", ctx_r0.orderDraftItems().length === 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.orderDraftCount());
  }
}
function LancarPedidoComponent_Conditional_36_For_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 52);
  }
  if (rf & 2) {
    const draft_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", draft_r21.imageUrl, \u0275\u0275sanitizeUrl)("alt", draft_r21.name);
  }
}
function LancarPedidoComponent_Conditional_36_For_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, "restaurant");
    \u0275\u0275elementEnd();
  }
}
function LancarPedidoComponent_Conditional_36_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 82)(1, "div", 87);
    \u0275\u0275template(2, LancarPedidoComponent_Conditional_36_For_10_Conditional_2_Template, 1, 2, "img", 52)(3, LancarPedidoComponent_Conditional_36_For_10_Conditional_3_Template, 2, 0, "span", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 88)(5, "span", 89);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 90);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 91)(10, "div", 92)(11, "button", 73);
    \u0275\u0275listener("click", function LancarPedidoComponent_Conditional_36_For_10_Template_button_click_11_listener() {
      const draft_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.decrementDraftItem(draft_r21.menuItemId));
    });
    \u0275\u0275elementStart(12, "span", 39);
    \u0275\u0275text(13, "remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "span", 93);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 75);
    \u0275\u0275listener("click", function LancarPedidoComponent_Conditional_36_For_10_Template_button_click_16_listener() {
      const draft_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.incrementDraftItem(draft_r21.menuItemId));
    });
    \u0275\u0275elementStart(17, "span", 39);
    \u0275\u0275text(18, "add");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "span", 94);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "label", 95)(22, "span", 96);
    \u0275\u0275text(23, "Observa\xE7\xE3o (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "textarea", 97);
    \u0275\u0275listener("change", function LancarPedidoComponent_Conditional_36_For_10_Template_textarea_change_24_listener($event) {
      const draft_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateDraftItemNotes(draft_r21.menuItemId, $event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "button", 98);
    \u0275\u0275listener("click", function LancarPedidoComponent_Conditional_36_For_10_Template_button_click_25_listener() {
      const draft_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeDraftItem(draft_r21.menuItemId));
    });
    \u0275\u0275elementStart(26, "span", 39);
    \u0275\u0275text(27, "delete_outline");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const draft_r21 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(draft_r21.imageUrl ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(draft_r21.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(draft_r21.unitPrice));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(draft_r21.quantity);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(draft_r21.unitPrice * draft_r21.quantity));
    \u0275\u0275advance(4);
    \u0275\u0275property("value", draft_r21.notes);
  }
}
function LancarPedidoComponent_Conditional_36_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "span", 39);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.submitOrderError());
  }
}
function LancarPedidoComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275listener("click", function LancarPedidoComponent_Conditional_36_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeCart());
    });
    \u0275\u0275elementStart(1, "div", 77);
    \u0275\u0275listener("click", function LancarPedidoComponent_Conditional_36_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r19);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "header", 78)(3, "h2", 79);
    \u0275\u0275text(4, "Seu pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 80);
    \u0275\u0275listener("click", function LancarPedidoComponent_Conditional_36_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeCart());
    });
    \u0275\u0275elementStart(6, "span", 39);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "ul", 81);
    \u0275\u0275repeaterCreate(9, LancarPedidoComponent_Conditional_36_For_10_Template, 28, 6, "li", 82, _forTrack2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "footer", 83);
    \u0275\u0275template(12, LancarPedidoComponent_Conditional_36_Conditional_12_Template, 5, 1, "div", 84);
    \u0275\u0275elementStart(13, "div", 85)(14, "span");
    \u0275\u0275text(15, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 86);
    \u0275\u0275listener("click", function LancarPedidoComponent_Conditional_36_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitOrder());
    });
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r0.orderDraftItems());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.submitOrderError() ? 12 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(ctx_r0.orderDraftTotal()));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isSubmittingOrder());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isSubmittingOrder() ? "Enviando\u2026" : "Enviar pedido", " ");
  }
}
var PASS_TOKEN_PREFIX = "CMU-";
var LancarPedidoComponent = class _LancarPedidoComponent {
  tablesService = inject(TablesService);
  menuCategoriesService = inject(MenuCategoriesService);
  menuItemsService = inject(MenuItemsService);
  staffOrderService = inject(StaffOrderService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  qrTargetResolver = inject(QrTargetResolverService);
  consumptionPassesService = inject(ConsumptionPassesService);
  currencyFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
  tables = signal([]);
  tablesError = signal(null);
  // Retirada no balcão: com o cartão de consumo ligado, a mesa virtual do balcão aparece como
  // opção no lugar de uma mesa — o pedido vai para a comanda do cartão e o cliente busca no
  // balcão (ver TablesService#getCounter).
  counterTable = signal(null);
  counterLabel = COUNTER_TABLE_LABEL;
  isCounterSelected = computed(() => !!this.orderTableId() && this.orderTableId() === this.counterTable()?.id);
  orderTableId = signal("");
  orderComanda = signal(null);
  isLoadingOrderComanda = signal(false);
  orderComandaError = signal(null);
  // Mesmo papel do "hasPlacedOrder" do PublicMenuComponent: só pra habilitar o botão flutuante
  // "Comanda" — a lista em si só é buscada/renderizada na página separada (ComandaMesaComponent).
  hasPlacedOrder = computed(() => (this.orderComanda()?.items.length ?? 0) > 0);
  // Cartão de consumo: com o estabelecimento exigindo o cartão (a API avisa em openOrEnter), o
  // pedido vai para a comanda individual do cartão do cliente — a equipe precisa ler/digitar o
  // cartão antes de lançar. Cartão livre é vinculado na hora pela API.
  passRequired = computed(() => !!this.orderComanda()?.consumptionPassRequired);
  linkedPass = computed(() => {
    const comanda = this.orderComanda();
    return comanda?.consumptionPassToken ? { token: comanda.consumptionPassToken, number: comanda.consumptionPassNumber ?? null } : null;
  });
  needsPass = computed(() => this.passRequired() && !this.linkedPass());
  passTokenSuffix = signal("");
  isScanningPass = signal(false);
  isLinkingPass = signal(false);
  passError = signal(null);
  // "Escanear QR" ao lado da mesa: aceita o QR da mesa ou do cartão de consumo (ver
  // QrTargetResolverService) — cartão em uso já seleciona a mesa dele; cartão livre fica
  // aguardando a mesa (pendingPassNumber) e é vinculado assim que ela for escolhida.
  isScanningTarget = signal(false);
  isResolvingTarget = signal(false);
  targetScanError = signal(null);
  pendingPassNumber = signal(null);
  orderCategories = signal([]);
  orderMenuItems = signal([]);
  isLoadingOrderCatalog = signal(false);
  orderCatalogError = signal(null);
  orderCategoryFilter = signal("");
  catalogLoaded = false;
  orderDraftItems = signal([]);
  orderDraftTotal = computed(() => this.orderDraftItems().reduce((sum, item) => sum + item.unitPrice * item.quantity, 0));
  orderDraftCount = computed(() => this.orderDraftItems().reduce((sum, item) => sum + item.quantity, 0));
  // Carrinho como drawer flutuante por cima da página (ver .cart-overlay/.cart-drawer), igual ao
  // CartComponent do cliente — não é mais uma seção fixa da página.
  isCartOpen = signal(false);
  isSubmittingOrder = signal(false);
  submitOrderError = signal(null);
  visibleOrderMenuItems = computed(() => {
    const categoryId = this.orderCategoryFilter();
    const items = this.orderMenuItems();
    return categoryId ? items.filter((item) => item.categoryId === categoryId) : items;
  });
  // Imagens quebradas do cardápio (ver menu-item__image no público) — mesmo padrão do
  // PublicMenuComponent#brokenImageIds: só um Set imperativo, não precisa ser signal (nunca lido
  // em template reativo diretamente, só consultado a cada render via hasOrderItemImage).
  brokenOrderImageIds = /* @__PURE__ */ new Set();
  // Voltando da página da comanda do cartão (?cartao=, ver ComandaMesaComponent#goToMenu): reabre
  // o mesmo cartão em vez de pedir a leitura de novo. Consumido uma vez só, no primeiro openOrEnter.
  passTokenFromLink = null;
  constructor() {
    this.loadOrderCatalog();
    const tableIdFromLink = this.route.snapshot.queryParamMap.get("mesa");
    this.passTokenFromLink = this.route.snapshot.queryParamMap.get("cartao");
    this.loadTables(tableIdFromLink);
    this.loadCounterTable();
  }
  loadCounterTable() {
    this.consumptionPassesService.getSettings().subscribe({
      next: (settings) => {
        if (!settings.required) {
          return;
        }
        this.tablesService.getCounter().subscribe({
          next: (counter) => this.counterTable.set(counter),
          error: () => this.counterTable.set(null)
        });
      },
      error: () => this.counterTable.set(null)
    });
  }
  selectCounter() {
    const counter = this.counterTable();
    if (counter && !this.isSubmittingOrder()) {
      this.selectOrderTable(counter.id);
    }
  }
  goBack() {
    if (this.isSubmittingOrder()) {
      return;
    }
    this.router.navigate(["/painel/comandas"]);
  }
  formatCurrency(value) {
    return value != null ? this.currencyFormatter.format(value) : "\u2014";
  }
  loadTables(preselectTableId) {
    this.tablesService.list({ status: "ACTIVE", page: 0, size: 200, sortBy: "number", sortDirection: "ASC" }).subscribe({
      next: (response) => {
        this.tablesError.set(null);
        this.tables.set(response.content);
        if (preselectTableId) {
          this.selectOrderTable(preselectTableId);
        }
      },
      error: (error) => {
        this.tables.set([]);
        this.tablesError.set("N\xE3o foi poss\xEDvel carregar as mesas: " + this.resolveErrorMessage(error));
      }
    });
  }
  loadOrderCatalog() {
    if (this.catalogLoaded) {
      return;
    }
    this.catalogLoaded = true;
    this.isLoadingOrderCatalog.set(true);
    this.orderCatalogError.set(null);
    this.menuCategoriesService.list(true).subscribe({
      next: (categories) => this.orderCategories.set(categories),
      error: () => this.orderCategories.set([])
    });
    this.menuItemsService.list({ active: true, available: true, page: 0, size: 500, sortBy: "displayOrder", sortDirection: "ASC" }).subscribe({
      next: (response) => {
        this.isLoadingOrderCatalog.set(false);
        this.orderMenuItems.set(response.content);
      },
      error: () => {
        this.isLoadingOrderCatalog.set(false);
        this.orderCatalogError.set("N\xE3o foi poss\xEDvel carregar o card\xE1pio.");
      }
    });
  }
  setOrderCategoryFilter(categoryId) {
    this.orderCategoryFilter.set(categoryId);
  }
  // Abre/entra na comanda da mesa escolhida (mesmo comportamento do primeiro scan do QR Code
  // pelo cliente — ver StaffOrderService#openOrEnter): só pra saber se já existe pedido (habilita
  // o botão "Comanda") e ter o contexto pra lançar itens novos — não renderiza a lista aqui.
  selectOrderTable(tableId) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { mesa: tableId || null, cartao: null },
      queryParamsHandling: "merge",
      replaceUrl: true
    });
    this.orderTableId.set(tableId);
    this.orderComanda.set(null);
    this.orderComandaError.set(null);
    this.orderDraftItems.set([]);
    this.isCartOpen.set(false);
    this.resetPassForm();
    if (!tableId) {
      return;
    }
    this.isLoadingOrderComanda.set(true);
    this.staffOrderService.openOrEnter(tableId).subscribe({
      next: (comanda) => {
        this.isLoadingOrderComanda.set(false);
        this.orderComanda.set(comanda);
        const passToken = this.passTokenFromLink;
        this.passTokenFromLink = null;
        this.pendingPassNumber.set(null);
        if (passToken && comanda.consumptionPassRequired) {
          this.passTokenSuffix.set(this.toPassSuffix(passToken));
          this.linkPass();
        }
      },
      error: (error) => {
        this.isLoadingOrderComanda.set(false);
        this.orderComandaError.set(this.resolveErrorMessage(error));
      }
    });
  }
  // --- QR Code da mesa ou do cartão ------------------------------------------------
  startTargetScan() {
    if (this.isSubmittingOrder()) {
      return;
    }
    this.targetScanError.set(null);
    this.isScanningTarget.set(true);
  }
  onTargetScanned(value) {
    this.isScanningTarget.set(false);
    this.isResolvingTarget.set(true);
    this.targetScanError.set(null);
    this.qrTargetResolver.resolveScan(value, this.tables()).subscribe({
      next: (target) => {
        this.isResolvingTarget.set(false);
        if (target.kind === "table") {
          this.pendingPassNumber.set(null);
          this.selectOrderTable(target.table.id);
          return;
        }
        const pass = target.pass;
        if (pass.tableId) {
          this.pendingPassNumber.set(null);
          this.passTokenFromLink = pass.token;
          this.selectOrderTable(pass.tableId);
          return;
        }
        if (this.orderTableId() && this.orderComanda()?.consumptionPassRequired) {
          if (this.linkedPass()) {
            this.changePass();
          }
          this.passTokenSuffix.set(this.toPassSuffix(pass.token));
          this.linkPass();
          return;
        }
        this.passTokenFromLink = pass.token;
        this.pendingPassNumber.set(pass.number);
      },
      error: (error) => {
        this.isResolvingTarget.set(false);
        this.targetScanError.set(error instanceof Error && !(error instanceof HttpErrorResponse) ? error.message : "N\xE3o foi poss\xEDvel identificar o QR Code. Tente novamente.");
      }
    });
  }
  // --- Cartão de consumo -------------------------------------------------------
  // O campo mostra o "CMU-" fixo e guarda só o sufixo — colar o código inteiro (ou leitor USB,
  // que "digita" o código completo) também funciona.
  onPassTokenInput(value) {
    this.passTokenSuffix.set(this.toPassSuffix(value));
  }
  onPassScanned(value) {
    this.isScanningPass.set(false);
    this.passTokenSuffix.set(this.toPassSuffix(value));
    this.linkPass();
  }
  linkPass() {
    const tableId = this.orderTableId();
    const suffix = this.passTokenSuffix().trim();
    if (!tableId || !suffix || this.isLinkingPass()) {
      return;
    }
    this.isLinkingPass.set(true);
    this.passError.set(null);
    this.staffOrderService.enterWithPass(tableId, PASS_TOKEN_PREFIX + suffix).subscribe({
      next: (comanda) => {
        this.isLinkingPass.set(false);
        this.orderComanda.set(comanda);
        this.resetPassForm();
      },
      error: (error) => {
        this.isLinkingPass.set(false);
        this.passError.set(this.resolveErrorMessage(error));
      }
    });
  }
  // Próximo cliente da mesa: volta para a leitura do cartão, descartando o rascunho (que era do
  // cartão anterior).
  changePass() {
    if (this.isSubmittingOrder()) {
      return;
    }
    const comanda = this.orderComanda();
    if (!comanda) {
      return;
    }
    this.orderComanda.set(__spreadProps(__spreadValues({}, comanda), {
      id: null,
      status: null,
      items: [],
      consumptionPassToken: void 0,
      consumptionPassNumber: void 0
    }));
    this.orderDraftItems.set([]);
    this.isCartOpen.set(false);
    this.resetPassForm();
  }
  resetPassForm() {
    this.passTokenSuffix.set("");
    this.isScanningPass.set(false);
    this.passError.set(null);
  }
  toPassSuffix(value) {
    return QrTargetResolverService.toPassSuffix(value);
  }
  // Mesma exibição do cardápio digital do cliente (ver PublicMenuComponent#hasImage/getBadges/
  // hasActivePromotion no web-comanda-unica-menu) — o garçom vê o produto igual ao que o cliente
  // veria no app, só que dentro do painel e sem precisar de login/QR Code.
  hasOrderItemImage(item) {
    return !!item.imageUrl && !this.brokenOrderImageIds.has(item.id);
  }
  onOrderItemImageError(itemId) {
    this.brokenOrderImageIds.add(itemId);
  }
  hasActivePromotionForOrder(item) {
    if (!item.promotionalPrice || item.promotionalPrice >= item.price) {
      return false;
    }
    const now = Date.now();
    const start = parseApiDate(item.promotionStart);
    if (start && start.getTime() > now) {
      return false;
    }
    const end = parseApiDate(item.promotionEnd);
    if (end && end.getTime() < now) {
      return false;
    }
    return true;
  }
  orderItemBadges(item) {
    const badges = [];
    if (item.vegan) {
      badges.push({ icon: "eco", label: "Vegano" });
    }
    if (item.vegetarian) {
      badges.push({ icon: "spa", label: "Vegetariano" });
    }
    if (item.glutenFree) {
      badges.push({ icon: "grain", label: "Sem gl\xFAten" });
    }
    if (item.lactoseFree) {
      badges.push({ icon: "icecream", label: "Sem lactose" });
    }
    if (item.alcoholic) {
      badges.push({ icon: "local_bar", label: "Cont\xE9m \xE1lcool" });
    }
    return badges;
  }
  getDraftQuantity(menuItemId) {
    return this.orderDraftItems().find((draft) => draft.menuItemId === menuItemId)?.quantity ?? 0;
  }
  addDraftItem(item) {
    const price = this.hasActivePromotionForOrder(item) ? item.promotionalPrice : item.price;
    this.orderDraftItems.update((current) => {
      const existing = current.find((draft) => draft.menuItemId === item.id);
      if (existing) {
        return current.map((draft) => draft.menuItemId === item.id ? __spreadProps(__spreadValues({}, draft), { quantity: draft.quantity + 1 }) : draft);
      }
      return [
        ...current,
        { menuItemId: item.id, name: item.name, imageUrl: item.imageUrl, unitPrice: price, quantity: 1, notes: "" }
      ];
    });
  }
  incrementDraftItem(menuItemId) {
    this.orderDraftItems.update((current) => current.map((draft) => draft.menuItemId === menuItemId ? __spreadProps(__spreadValues({}, draft), { quantity: draft.quantity + 1 }) : draft));
  }
  decrementDraftItem(menuItemId) {
    this.orderDraftItems.update((current) => current.map((draft) => draft.menuItemId === menuItemId ? __spreadProps(__spreadValues({}, draft), { quantity: draft.quantity - 1 }) : draft).filter((draft) => draft.quantity > 0));
  }
  removeDraftItem(menuItemId) {
    this.orderDraftItems.update((current) => current.filter((draft) => draft.menuItemId !== menuItemId));
  }
  // Observação por item do rascunho (ver OrderDraftItem#notes) — sempre visível no campo, sem
  // toggle/salvar, igual ao carrinho do cliente (ver CartComponent#updateNotes no
  // web-comanda-unica-menu): confirma ao sair do campo (evento "change" do textarea).
  updateDraftItemNotes(menuItemId, notes) {
    this.orderDraftItems.update((current) => current.map((draft) => draft.menuItemId === menuItemId ? __spreadProps(__spreadValues({}, draft), { notes }) : draft));
  }
  openCart() {
    if (this.orderDraftItems().length === 0) {
      return;
    }
    this.isCartOpen.set(true);
  }
  closeCart() {
    if (this.isSubmittingOrder()) {
      return;
    }
    this.isCartOpen.set(false);
  }
  submitOrder() {
    const tableId = this.orderTableId();
    const items = this.orderDraftItems();
    if (!tableId || items.length === 0 || this.isSubmittingOrder()) {
      return;
    }
    this.isSubmittingOrder.set(true);
    this.submitOrderError.set(null);
    this.staffOrderService.createOrder(tableId, {
      items: items.map((item) => ({
        menuItemId: item.menuItemId,
        quantity: item.quantity,
        notes: item.notes.trim() || void 0
      })),
      consumptionPassToken: this.linkedPass()?.token
    }).subscribe({
      next: (comanda) => {
        this.isSubmittingOrder.set(false);
        this.orderComanda.set(comanda);
        this.orderDraftItems.set([]);
        this.isCartOpen.set(false);
      },
      error: (error) => {
        this.isSubmittingOrder.set(false);
        this.submitOrderError.set(this.resolveErrorMessage(error));
        autoDismiss(this.submitOrderError, null);
      }
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
      return "Mesa ou comanda n\xE3o encontrada.";
    }
    if (error.status === 409) {
      return "Esta comanda j\xE1 est\xE1 encerrada.";
    }
    if (error.status === 403) {
      return "Voc\xEA n\xE3o tem permiss\xE3o para realizar esta a\xE7\xE3o.";
    }
    if (error.status === 422) {
      return "Verifique os dados informados e tente novamente.";
    }
    return "N\xE3o foi poss\xEDvel concluir a opera\xE7\xE3o. Tente novamente em instantes.";
  }
  static \u0275fac = function LancarPedidoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LancarPedidoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LancarPedidoComponent, selectors: [["app-lancar-pedido"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 37, vars: 15, consts: [[1, "page-header", "page-header--row"], [1, "page-title"], [1, "page-subtitle"], ["type", "button", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["aria-hidden", "true", 1, "material-icons"], [1, "field"], ["for", "order-table", 1, "field__label"], [1, "order-target"], [1, "field__control", "order-target__select"], ["id", "order-table", 1, "field__input", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["type", "button", "appRipple", "", 1, "btn", "btn--ghost", "order-target__scan", 3, "click", "disabled"], [1, "field__hint"], ["type", "button", "appRipple", "", 1, "btn", "btn--ghost", "btn--sm", "order-target__counter", 3, "disabled"], ["role", "alert", 1, "form-alert", "form-alert--error"], [1, "card", "order-target__scanner"], ["role", "status", 1, "form-alert", "form-alert--info"], ["aria-labelledby", "pass-step-title", 1, "card", "pass-step"], [1, "cart-overlay"], ["type", "button", "appRipple", "", 1, "btn", "btn--ghost", "btn--sm", "order-target__counter", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], ["hint", "Aponte a c\xE2mera para o QR Code da mesa ou do cart\xE3o.", "fallbackHint", "Escolha a mesa na lista acima.", 3, "scanned", "closed"], [1, "pass-step__header"], ["aria-hidden", "true", 1, "pass-step__icon", "material-icons"], ["id", "pass-step-title", 1, "pass-step__title"], [1, "pass-step__subtitle"], [1, "pass-step__form"], [3, "scanned", "closed"], [1, "pass-step__form", 3, "submit"], [1, "pass-step__field"], ["aria-hidden", "true", 1, "pass-step__prefix"], ["type", "text", "aria-label", "C\xF3digo do cart\xE3o, depois de CMU-", "placeholder", "XXXXXXXXXX", "maxlength", "20", "autocomplete", "off", "autocapitalize", "characters", "spellcheck", "false", "name", "passToken", 1, "pass-step__input", 3, "ngModelChange", "ngModel", "disabled"], [1, "pass-step__actions"], ["type", "submit", "appRipple", "", 1, "btn", "btn--primary", 3, "disabled"], ["type", "button", "appRipple", "", 1, "btn", "btn--ghost", 3, "click", "disabled"], [1, "pass-chip"], [1, "order-category-filters"], ["aria-label", "Ver comanda da mesa", 1, "comanda-fab", 3, "routerLink", "queryParams"], [1, "material-icons"], [1, "comanda-fab__label"], ["type", "button", 1, "cart-fab", 3, "click"], [1, "cart-fab__count"], [1, "pass-chip__text"], [1, "pass-chip__token"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn--sm", 3, "click"], ["type", "button", 1, "btn", "btn--sm", 3, "btn--primary", "btn--ghost"], [1, "menu-items", "order-menu-items"], [1, "menu-item", "card", 3, "menu-item--in-cart"], [1, "menu-item", "card"], [1, "menu-item__image"], [3, "src", "alt"], ["aria-hidden", "true", 1, "menu-item__image-placeholder", "material-icons"], [1, "menu-item__flag", "menu-item__flag--new"], [1, "menu-item__flag", "menu-item__flag--highlight"], [1, "menu-item__body"], [1, "menu-item__heading"], [1, "menu-item__name"], ["title", "Picante", 1, "material-icons", "menu-item__spicy"], [1, "menu-item__description"], [1, "menu-item__badges"], [1, "menu-item__meta"], [1, "menu-item__footer"], [1, "menu-item__price-group"], [1, "menu-item__price"], ["type", "button", "aria-label", "Adicionar", 1, "menu-item__add"], [1, "menu-item__stepper"], [3, "error", "src", "alt"], [1, "menu-item__badge", 3, "title"], [1, "menu-item__price", "menu-item__price--old"], [1, "menu-item__price", "menu-item__price--promo"], ["type", "button", "aria-label", "Adicionar", 1, "menu-item__add", 3, "click"], ["type", "button", "aria-label", "Diminuir quantidade", 3, "click"], [1, "menu-item__stepper-qty"], ["type", "button", "aria-label", "Aumentar quantidade", 3, "click"], [1, "cart-overlay", 3, "click"], [1, "cart-drawer", "card", 3, "click"], [1, "cart-drawer__header"], [1, "cart-drawer__title"], ["type", "button", "aria-label", "Fechar", 1, "cart-drawer__close", 3, "click"], [1, "cart-list"], [1, "cart-item"], [1, "cart-drawer__footer"], ["role", "alert", 1, "cart-drawer__error"], [1, "cart-drawer__total"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", "cart-drawer__submit", 3, "click", "disabled"], [1, "cart-item__image"], [1, "cart-item__body"], [1, "cart-item__name"], [1, "cart-item__price"], [1, "cart-item__row"], [1, "cart-item__stepper"], [1, "cart-item__qty"], [1, "cart-item__total"], [1, "cart-item__notes"], [1, "cart-item__notes-label"], ["rows", "2", "maxlength", "500", "placeholder", "Ex.: sem cebola, ponto da carne, sem gelo\u2026", 3, "change", "value"], ["type", "button", "aria-label", "Remover item", 1, "cart-item__remove", 3, "click"]], template: function LancarPedidoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Lan\xE7ar pedido");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, " Para quando o cliente prefere n\xE3o usar o card\xE1pio digital \u2014 escolha a mesa e monte o pedido direto na comanda, sem precisar que o cliente fa\xE7a login no app. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "button", 3);
      \u0275\u0275listener("click", function LancarPedidoComponent_Template_button_click_6_listener() {
        return ctx.goBack();
      });
      \u0275\u0275elementStart(7, "span", 4);
      \u0275\u0275text(8, "arrow_back");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " Voltar \xE0s comandas ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 5)(11, "label", 6);
      \u0275\u0275text(12, "Mesa");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 7)(14, "div", 8)(15, "select", 9);
      \u0275\u0275listener("ngModelChange", function LancarPedidoComponent_Template_select_ngModelChange_15_listener($event) {
        return ctx.selectOrderTable($event);
      });
      \u0275\u0275elementStart(16, "option", 10);
      \u0275\u0275text(17, "Selecione a mesa");
      \u0275\u0275elementEnd();
      \u0275\u0275template(18, LancarPedidoComponent_Conditional_18_Template, 2, 2, "option", 11);
      \u0275\u0275repeaterCreate(19, LancarPedidoComponent_For_20_Template, 2, 3, "option", 11, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "button", 12);
      \u0275\u0275listener("click", function LancarPedidoComponent_Template_button_click_21_listener() {
        return ctx.startTargetScan();
      });
      \u0275\u0275elementStart(22, "span", 4);
      \u0275\u0275text(23, "qr_code_scanner");
      \u0275\u0275elementEnd();
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "span", 13);
      \u0275\u0275text(26, "QR Code da mesa ou do cart\xE3o de consumo do cliente.");
      \u0275\u0275elementEnd();
      \u0275\u0275template(27, LancarPedidoComponent_Conditional_27_Template, 4, 2, "button", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275template(28, LancarPedidoComponent_Conditional_28_Template, 6, 1, "div", 15)(29, LancarPedidoComponent_Conditional_29_Template, 2, 0, "div", 16)(30, LancarPedidoComponent_Conditional_30_Template, 4, 1, "div", 15)(31, LancarPedidoComponent_Conditional_31_Template, 4, 2, "div", 17)(32, LancarPedidoComponent_Conditional_32_Template, 2, 0, "p", 13)(33, LancarPedidoComponent_Conditional_33_Template, 4, 1, "div", 15)(34, LancarPedidoComponent_Conditional_34_Template, 13, 3, "section", 18)(35, LancarPedidoComponent_Conditional_35_Template, 15, 16)(36, LancarPedidoComponent_Conditional_36_Template, 20, 4, "div", 19);
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.isSubmittingOrder());
      \u0275\u0275advance(9);
      \u0275\u0275property("ngModel", ctx.orderTableId());
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_2_0 = ctx.counterTable()) ? 18 : -1, tmp_2_0);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.tables());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isSubmittingOrder() || ctx.isResolvingTarget() || ctx.isScanningTarget());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isResolvingTarget() ? "Identificando\u2026" : "Escanear QR", " ");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.counterTable() && !ctx.isCounterSelected() ? 27 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.tablesError() ? 28 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isScanningTarget() ? 29 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.targetScanError() ? 30 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.pendingPassNumber() && !ctx.orderTableId() ? 31 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoadingOrderComanda() ? 32 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.orderComandaError() ? 33 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.orderTableId() && !ctx.isLoadingOrderComanda() && !ctx.orderComandaError() && ctx.needsPass() ? 34 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.orderTableId() && !ctx.isLoadingOrderComanda() && !ctx.orderComandaError() && !ctx.needsPass() ? 35 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCartOpen() ? 36 : -1);
    }
  }, dependencies: [RippleDirective, RouterLink, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, NgModel, NgForm, QrScannerComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-header--row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n  max-width: 640px;\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\nselect.field__input[_ngcontent-%COMP%] {\n  appearance: none;\n  cursor: pointer;\n}\n.pass-step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 480px;\n  margin-top: 8px;\n  padding: 20px;\n}\n.pass-step__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.pass-step__icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 44px;\n  height: 44px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: var(--color-accent-bg);\n  color: var(--color-accent);\n  font-size: 24px;\n}\n.pass-step__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n}\n.pass-step__subtitle[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.pass-step__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.pass-step__field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 48px;\n  padding: 0 14px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border-strong);\n  background: var(--color-bg);\n  font-family:\n    ui-monospace,\n    "Roboto Mono",\n    monospace;\n  font-size: 1.0625rem;\n  letter-spacing: 0.06em;\n  cursor: text;\n}\n.pass-step__field[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--color-accent);\n}\n.pass-step__field--disabled[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.pass-step__prefix[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: var(--color-text-muted);\n  -webkit-user-select: none;\n  user-select: none;\n}\n.pass-step__input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  height: 100%;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: var(--color-text);\n  font: inherit;\n  letter-spacing: inherit;\n  text-transform: uppercase;\n}\n.pass-step__input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.pass-step__input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-muted);\n  opacity: 0.5;\n}\n.pass-step__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.pass-step__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1;\n  justify-content: center;\n}\n.pass-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin: 8px 0 16px;\n  padding: 10px 14px;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--color-border);\n  background: var(--color-bg-elevated);\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n.pass-chip[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--color-success);\n}\n.pass-chip[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--color-text);\n}\n.pass-chip__text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.pass-chip__token[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  font-family:\n    ui-monospace,\n    "Roboto Mono",\n    monospace;\n  font-size: 0.8125rem;\n}\n.order-category-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin: 16px 0 16px;\n}\n.order-menu-items[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 90px;\n}\n.menu-item[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);\n}\n.menu-item--in-cart[_ngcontent-%COMP%] {\n  border-color: var(--color-accent);\n  box-shadow: 0 0 0 1px var(--color-accent);\n}\n.menu-item__image[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 4/3;\n  background: var(--color-bg-elevated);\n}\n.menu-item__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.menu-item__image-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 32px;\n  color: var(--color-text-muted);\n}\n.menu-item__flag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  padding: 3px 10px;\n  border-radius: var(--radius-full);\n  font-size: 0.6875rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n}\n.menu-item__flag--new[_ngcontent-%COMP%] {\n  background: var(--color-success);\n  color: #06210f;\n}\n.menu-item__flag--highlight[_ngcontent-%COMP%] {\n  background: var(--color-btn-primary-bg);\n  color: #ffffff;\n}\n.menu-item__body[_ngcontent-%COMP%] {\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n}\n.menu-item__heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 8px;\n}\n.menu-item__name[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: var(--color-text);\n  min-width: 0;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.menu-item__spicy[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #f87171;\n  flex-shrink: 0;\n}\n.menu-item__description[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.menu-item__badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.menu-item__badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 8px;\n  border-radius: var(--radius-full);\n  background: var(--color-success-bg);\n  color: var(--color-success);\n  font-size: 0.6875rem;\n  font-weight: 600;\n}\n.menu-item__badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.menu-item__meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.menu-item__footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding-top: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.menu-item__price-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  min-width: 0;\n  overflow: hidden;\n}\n.menu-item__price[_ngcontent-%COMP%], \n.menu-item__price--old[_ngcontent-%COMP%], \n.menu-item__price--promo[_ngcontent-%COMP%] {\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.menu-item__price[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.menu-item__price--old[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--color-text-muted);\n  text-decoration: line-through;\n}\n.menu-item__price--promo[_ngcontent-%COMP%] {\n  color: var(--color-success);\n}\n.menu-item__add[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  flex-shrink: 0;\n  border-radius: var(--radius-full);\n  border: none;\n  background: var(--color-btn-primary-bg);\n  color: #ffffff;\n  cursor: pointer;\n  transition: background var(--transition-fast), transform var(--transition-fast);\n}\n.menu-item__add[_ngcontent-%COMP%]:hover {\n  background: var(--color-btn-primary-bg-hover);\n}\n.menu-item__add[_ngcontent-%COMP%]:active {\n  transform: scale(0.92);\n}\n.menu-item__add[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.menu-item__stepper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-shrink: 0;\n  padding: 2px;\n  border-radius: var(--radius-full);\n  background: var(--color-accent-bg);\n}\n.menu-item__stepper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  flex-shrink: 0;\n  border-radius: var(--radius-full);\n  border: none;\n  background: var(--color-btn-primary-bg);\n  color: #ffffff;\n  cursor: pointer;\n  transition: background var(--transition-fast), transform var(--transition-fast);\n}\n.menu-item__stepper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: var(--color-btn-primary-bg-hover);\n}\n.menu-item__stepper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  transform: scale(0.92);\n}\n.menu-item__stepper[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.menu-item__stepper-qty[_ngcontent-%COMP%] {\n  min-width: 18px;\n  text-align: center;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.comanda-fab[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 20px;\n  bottom: 20px;\n  z-index: 20;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  height: 48px;\n  padding: 0 18px 0 14px;\n  border-radius: var(--radius-full);\n  border: 1px solid var(--color-accent);\n  background: var(--color-bg-card);\n  color: var(--color-text);\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  box-shadow: var(--shadow-md);\n  transition: transform var(--transition-fast), background var(--transition-fast);\n}\n.comanda-fab[_ngcontent-%COMP%]:hover {\n  background: var(--color-accent-bg);\n}\n.comanda-fab[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.comanda-fab[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--color-accent-hover);\n}\n.comanda-fab--disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n@media (min-width: 961px) {\n  .comanda-fab[_ngcontent-%COMP%] {\n    left: 280px;\n  }\n}\n.cart-fab[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  z-index: 200;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  border-radius: var(--radius-full);\n  border: none;\n  background: var(--color-btn-primary-bg);\n  color: #ffffff;\n  cursor: pointer;\n  box-shadow: var(--shadow-md);\n  transition:\n    transform var(--transition-fast),\n    background var(--transition-fast),\n    opacity var(--transition-fast);\n}\n.cart-fab[_ngcontent-%COMP%]:hover {\n  background: var(--color-btn-primary-bg-hover);\n}\n.cart-fab[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.cart-fab[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.cart-fab--hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n  pointer-events: none;\n  transform: scale(0.8);\n}\n.cart-fab__count[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  min-width: 20px;\n  height: 20px;\n  padding-inline: 4px;\n  border-radius: var(--radius-full);\n  background: var(--color-success);\n  color: #06210f;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid var(--color-bg);\n}\n.cart-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 200;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  background: rgba(4, 8, 20, 0.6);\n  backdrop-filter: blur(4px);\n}\n.cart-drawer[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n  max-height: 82vh;\n  display: flex;\n  flex-direction: column;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  animation: _ngcontent-%COMP%_cart-slide-up var(--transition-base);\n}\n@keyframes _ngcontent-%COMP%_cart-slide-up {\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n.cart-drawer__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 20px;\n  border-bottom: 1px solid var(--color-border);\n  flex-shrink: 0;\n}\n.cart-drawer__title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: var(--color-text);\n}\n.cart-drawer__close[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-full);\n  border: none;\n  background: var(--color-bg-elevated);\n  color: var(--color-text-muted);\n  cursor: pointer;\n}\n.cart-drawer__close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.cart-list[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  padding: 12px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.cart-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.cart-item__image[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n  flex-shrink: 0;\n  background: var(--color-bg-elevated);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-muted);\n}\n.cart-item__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.cart-item__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.cart-item__name[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--color-text);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.cart-item__price[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.cart-item__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 6px;\n}\n.cart-item__notes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-top: 8px;\n}\n.cart-item__notes-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.cart-item__notes[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  resize: vertical;\n  min-height: 38px;\n  padding: 8px 10px;\n  font: inherit;\n  font-size: 0.8125rem;\n  color: var(--color-text);\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-md);\n}\n.cart-item__notes[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-muted);\n}\n.cart-item__notes[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-accent);\n}\n.cart-item__stepper[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-full);\n  padding: 2px 4px;\n  flex-shrink: 0;\n}\n.cart-item__stepper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  border: none;\n  background: var(--color-bg-elevated);\n  color: var(--color-text);\n  cursor: pointer;\n}\n.cart-item__stepper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.cart-item__qty[_ngcontent-%COMP%] {\n  min-width: 16px;\n  text-align: center;\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.cart-item__total[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.cart-item__remove[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  flex-shrink: 0;\n  border: none;\n  background: transparent;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  padding: 4px;\n}\n.cart-item__remove[_ngcontent-%COMP%]:hover {\n  color: #f87171;\n}\n.cart-drawer__footer[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 16px 20px calc(16px + env(safe-area-inset-bottom));\n  border-top: 1px solid var(--color-border);\n}\n.cart-drawer__error[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 14px;\n  padding: 12px;\n  border-radius: var(--radius-sm);\n  background: rgba(248, 113, 113, 0.14);\n  color: #f87171;\n  font-size: 0.8125rem;\n}\n.cart-drawer__error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.cart-drawer__total[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  margin-bottom: 14px;\n  font-size: 0.9375rem;\n  color: var(--color-text);\n}\n.cart-drawer__total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.cart-drawer__submit[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 640px) {\n  .cart-overlay[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n  .cart-drawer[_ngcontent-%COMP%] {\n    border-radius: var(--radius-lg);\n    max-height: 78vh;\n  }\n}\n@media (max-width: 640px) {\n  .order-category-filters[_ngcontent-%COMP%] {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    margin: 12px -16px 16px;\n    padding: 0 16px 4px;\n    scrollbar-width: none;\n  }\n  .order-category-filters[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n  }\n  .order-category-filters[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .order-menu-items[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 8px;\n  }\n  .menu-item__image[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .menu-item__body[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n    gap: 6px;\n  }\n  .menu-item__name[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .menu-item__description[_ngcontent-%COMP%], \n   .menu-item__badges[_ngcontent-%COMP%], \n   .menu-item__meta[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .menu-item__footer[_ngcontent-%COMP%] {\n    padding-top: 4px;\n    flex-wrap: wrap;\n    row-gap: 6px;\n  }\n  .menu-item__add[_ngcontent-%COMP%], \n   .menu-item__stepper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n  }\n  .menu-item__stepper[_ngcontent-%COMP%] {\n    padding: 3px;\n  }\n  .comanda-fab__label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .comanda-fab[_ngcontent-%COMP%] {\n    width: 48px;\n    padding: 0;\n    justify-content: center;\n  }\n}\n.order-target[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  gap: 8px;\n}\n.order-target__select[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.order-target__scan[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  white-space: nowrap;\n}\n.order-target__scanner[_ngcontent-%COMP%] {\n  max-width: 480px;\n  margin-bottom: 16px;\n  padding: 16px;\n}\n.order-target__counter[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n/*# sourceMappingURL=lancar-pedido.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LancarPedidoComponent, { className: "LancarPedidoComponent", filePath: "src\\app\\features\\admin\\pages\\lancar-pedido\\lancar-pedido.component.ts", lineNumber: 51 });
})();
export {
  LancarPedidoComponent
};
//# sourceMappingURL=chunk-XTDLTK2J.js.map
