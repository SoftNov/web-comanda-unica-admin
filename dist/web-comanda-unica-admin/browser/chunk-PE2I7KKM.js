import {
  MenuCategoriesService,
  MenuItemsService
} from "./chunk-7T5KA4OU.js";
import {
  StaffOrderService
} from "./chunk-2B7RMIFU.js";
import {
  TablesService
} from "./chunk-DYZKGHJI.js";
import {
  autoDismiss
} from "./chunk-JD6JJHYZ.js";
import {
  RippleDirective
} from "./chunk-44PTUNAH.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-GEYGC3V6.js";
import {
  parseApiDate
} from "./chunk-BIWONMV5.js";
import "./chunk-IKIQHSDP.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-4G2LF4K6.js";
import {
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
} from "./chunk-SZBF2MTG.js";

// src/app/features/admin/pages/lancar-pedido/lancar-pedido.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.label;
var _forTrack2 = ($index, $item) => $item.menuItemId;
var _c0 = (a0) => ["/painel/comandas/lancar-pedido/comanda", a0];
function LancarPedidoComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const table_r1 = ctx.$implicit;
    \u0275\u0275property("value", table_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("Mesa ", table_r1.number, "", table_r1.name ? " \u2014 " + table_r1.name : "", "");
  }
}
function LancarPedidoComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1, "Abrindo comanda da mesa\u2026");
    \u0275\u0275elementEnd();
  }
}
function LancarPedidoComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 4);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.orderComandaError(), " ");
  }
}
function LancarPedidoComponent_Conditional_21_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function LancarPedidoComponent_Conditional_21_Conditional_0_For_4_Template_button_click_0_listener() {
      const category_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setOrderCategoryFilter(category_r6.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("btn--primary", ctx_r1.orderCategoryFilter() === category_r6.id)("btn--ghost", ctx_r1.orderCategoryFilter() !== category_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r6.name, " ");
  }
}
function LancarPedidoComponent_Conditional_21_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "button", 20);
    \u0275\u0275listener("click", function LancarPedidoComponent_Conditional_21_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOrderCategoryFilter(""));
    });
    \u0275\u0275text(2, " Todas ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, LancarPedidoComponent_Conditional_21_Conditional_0_For_4_Template, 2, 5, "button", 21, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("btn--primary", ctx_r1.orderCategoryFilter() === "")("btn--ghost", ctx_r1.orderCategoryFilter() !== "");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.orderCategories());
  }
}
function LancarPedidoComponent_Conditional_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1, "Carregando card\xE1pio\u2026");
    \u0275\u0275elementEnd();
  }
}
function LancarPedidoComponent_Conditional_21_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 4);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.orderCatalogError(), " ");
  }
}
function LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 42);
    \u0275\u0275listener("error", function LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_2_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r7);
      const item_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onOrderItemImageError(item_r8.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", item_r8.imageUrl, \u0275\u0275sanitizeUrl)("alt", item_r8.name);
  }
}
function LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, "restaurant");
    \u0275\u0275elementEnd();
  }
}
function LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "Novo");
    \u0275\u0275elementEnd();
  }
}
function LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "Destaque");
    \u0275\u0275elementEnd();
  }
}
function LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1, "whatshot");
    \u0275\u0275elementEnd();
  }
}
function LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r8.description);
  }
}
function LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43)(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const badge_r9 = ctx.$implicit;
    \u0275\u0275property("title", badge_r9.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(badge_r9.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", badge_r9.label, " ");
  }
}
function LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275repeaterCreate(1, LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_12_For_2_Template, 4, 3, "span", 43, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.orderItemBadges(item_r8));
  }
}
function LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", item_r8.weight, "g");
  }
}
function LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", item_r8.calories, " kcal");
  }
}
function LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275template(1, LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_13_Conditional_1_Template, 2, 1, "span")(2, LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_13_Conditional_2_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r8.weight ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r8.calories ? 2 : -1);
  }
}
function LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(item_r8.price));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(item_r8.promotionalPrice));
  }
}
function LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(item_r8.price));
  }
}
function LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const item_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addDraftItem(item_r8));
    });
    \u0275\u0275elementStart(1, "span", 16);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd()();
  }
}
function LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "button", 47);
    \u0275\u0275listener("click", function LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_19_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const item_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.decrementDraftItem(item_r8.id));
    });
    \u0275\u0275elementStart(2, "span", 16);
    \u0275\u0275text(3, "remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 49);
    \u0275\u0275listener("click", function LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_19_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r11);
      const item_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addDraftItem(item_r8));
    });
    \u0275\u0275elementStart(7, "span", 16);
    \u0275\u0275text(8, "add");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getDraftQuantity(item_r8.id));
  }
}
function LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 24)(1, "div", 25);
    \u0275\u0275template(2, LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_2_Template, 1, 2, "img", 26)(3, LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_3_Template, 2, 0, "span", 27)(4, LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_4_Template, 2, 0, "span", 28)(5, LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_5_Template, 2, 0, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 30)(7, "div", 31)(8, "h3", 32);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_10_Template, 2, 0, "span", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_11_Template, 2, 1, "p", 34)(12, LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_12_Template, 3, 0, "div", 35)(13, LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_13_Template, 3, 2, "div", 36);
    \u0275\u0275elementStart(14, "div", 37)(15, "span", 38);
    \u0275\u0275template(16, LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_16_Template, 4, 2)(17, LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_17_Template, 2, 1, "span", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_18_Template, 3, 0, "button", 40)(19, LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Conditional_19_Template, 9, 1, "div", 41);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("menu-item--in-cart", ctx_r1.getDraftQuantity(item_r8.id) > 0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.hasOrderItemImage(item_r8) ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r8.newItem ? 4 : item_r8.highlight ? 5 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r8.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r8.spicy ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r8.description ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.orderItemBadges(item_r8).length > 0 ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r8.weight || item_r8.calories ? 13 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.hasActivePromotionForOrder(item_r8) ? 16 : 17);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.getDraftQuantity(item_r8.id) === 0 ? 18 : 19);
  }
}
function LancarPedidoComponent_Conditional_21_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1, "Nenhum produto dispon\xEDvel nesta categoria.");
    \u0275\u0275elementEnd();
  }
}
function LancarPedidoComponent_Conditional_21_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275repeaterCreate(1, LancarPedidoComponent_Conditional_21_Conditional_3_For_2_Template, 20, 11, "article", 23, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, LancarPedidoComponent_Conditional_21_Conditional_3_Conditional_3_Template, 2, 0, "p", 11);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.visibleOrderMenuItems());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.visibleOrderMenuItems().length === 0 ? 3 : -1);
  }
}
function LancarPedidoComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, LancarPedidoComponent_Conditional_21_Conditional_0_Template, 5, 4, "div", 14)(1, LancarPedidoComponent_Conditional_21_Conditional_1_Template, 2, 0, "p", 11)(2, LancarPedidoComponent_Conditional_21_Conditional_2_Template, 4, 1, "div", 12)(3, LancarPedidoComponent_Conditional_21_Conditional_3_Template, 4, 1);
    \u0275\u0275elementStart(4, "a", 15)(5, "span", 16);
    \u0275\u0275text(6, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 17);
    \u0275\u0275text(8, "Comanda");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 18);
    \u0275\u0275listener("click", function LancarPedidoComponent_Conditional_21_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCart());
    });
    \u0275\u0275elementStart(10, "span", 16);
    \u0275\u0275text(11, "shopping_cart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 19);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.orderCategories().length > 0 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLoadingOrderCatalog() ? 1 : ctx_r1.orderCatalogError() ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("comanda-fab--disabled", !ctx_r1.hasPlacedOrder());
    \u0275\u0275property("routerLink", ctx_r1.hasPlacedOrder() ? \u0275\u0275pureFunction1(10, _c0, ctx_r1.orderTableId()) : null);
    \u0275\u0275attribute("aria-disabled", !ctx_r1.hasPlacedOrder())("title", !ctx_r1.hasPlacedOrder() ? "Lance o primeiro pedido para ver a comanda da mesa" : null);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("cart-fab--hidden", ctx_r1.orderDraftItems().length === 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.orderDraftCount());
  }
}
function LancarPedidoComponent_Conditional_22_For_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 26);
  }
  if (rf & 2) {
    const draft_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", draft_r14.imageUrl, \u0275\u0275sanitizeUrl)("alt", draft_r14.name);
  }
}
function LancarPedidoComponent_Conditional_22_For_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, "restaurant");
    \u0275\u0275elementEnd();
  }
}
function LancarPedidoComponent_Conditional_22_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 56)(1, "div", 61);
    \u0275\u0275template(2, LancarPedidoComponent_Conditional_22_For_10_Conditional_2_Template, 1, 2, "img", 26)(3, LancarPedidoComponent_Conditional_22_For_10_Conditional_3_Template, 2, 0, "span", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 62)(5, "span", 63);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 64);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 65)(10, "div", 66)(11, "button", 47);
    \u0275\u0275listener("click", function LancarPedidoComponent_Conditional_22_For_10_Template_button_click_11_listener() {
      const draft_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.decrementDraftItem(draft_r14.menuItemId));
    });
    \u0275\u0275elementStart(12, "span", 16);
    \u0275\u0275text(13, "remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "span", 67);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 49);
    \u0275\u0275listener("click", function LancarPedidoComponent_Conditional_22_For_10_Template_button_click_16_listener() {
      const draft_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.incrementDraftItem(draft_r14.menuItemId));
    });
    \u0275\u0275elementStart(17, "span", 16);
    \u0275\u0275text(18, "add");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "span", 68);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "label", 69)(22, "span", 70);
    \u0275\u0275text(23, "Observa\xE7\xE3o (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "textarea", 71);
    \u0275\u0275listener("change", function LancarPedidoComponent_Conditional_22_For_10_Template_textarea_change_24_listener($event) {
      const draft_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateDraftItemNotes(draft_r14.menuItemId, $event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "button", 72);
    \u0275\u0275listener("click", function LancarPedidoComponent_Conditional_22_For_10_Template_button_click_25_listener() {
      const draft_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeDraftItem(draft_r14.menuItemId));
    });
    \u0275\u0275elementStart(26, "span", 16);
    \u0275\u0275text(27, "delete_outline");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const draft_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(draft_r14.imageUrl ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(draft_r14.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(draft_r14.unitPrice));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(draft_r14.quantity);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(draft_r14.unitPrice * draft_r14.quantity));
    \u0275\u0275advance(4);
    \u0275\u0275property("value", draft_r14.notes);
  }
}
function LancarPedidoComponent_Conditional_22_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "span", 16);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.submitOrderError());
  }
}
function LancarPedidoComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275listener("click", function LancarPedidoComponent_Conditional_22_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCart());
    });
    \u0275\u0275elementStart(1, "div", 51);
    \u0275\u0275listener("click", function LancarPedidoComponent_Conditional_22_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "header", 52)(3, "h2", 53);
    \u0275\u0275text(4, "Seu pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 54);
    \u0275\u0275listener("click", function LancarPedidoComponent_Conditional_22_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCart());
    });
    \u0275\u0275elementStart(6, "span", 16);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "ul", 55);
    \u0275\u0275repeaterCreate(9, LancarPedidoComponent_Conditional_22_For_10_Template, 28, 6, "li", 56, _forTrack2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "footer", 57);
    \u0275\u0275template(12, LancarPedidoComponent_Conditional_22_Conditional_12_Template, 5, 1, "div", 58);
    \u0275\u0275elementStart(13, "div", 59)(14, "span");
    \u0275\u0275text(15, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 60);
    \u0275\u0275listener("click", function LancarPedidoComponent_Conditional_22_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitOrder());
    });
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r1.orderDraftItems());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.submitOrderError() ? 12 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.orderDraftTotal()));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isSubmittingOrder());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSubmittingOrder() ? "Enviando\u2026" : "Enviar pedido", " ");
  }
}
var LancarPedidoComponent = class _LancarPedidoComponent {
  tablesService = inject(TablesService);
  menuCategoriesService = inject(MenuCategoriesService);
  menuItemsService = inject(MenuItemsService);
  staffOrderService = inject(StaffOrderService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  currencyFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
  tables = signal([]);
  orderTableId = signal("");
  orderComanda = signal(null);
  isLoadingOrderComanda = signal(false);
  orderComandaError = signal(null);
  // Mesmo papel do "hasPlacedOrder" do PublicMenuComponent: só pra habilitar o botão flutuante
  // "Comanda" — a lista em si só é buscada/renderizada na página separada (ComandaMesaComponent).
  hasPlacedOrder = computed(() => (this.orderComanda()?.items.length ?? 0) > 0);
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
  constructor() {
    this.loadOrderCatalog();
    const tableIdFromLink = this.route.snapshot.queryParamMap.get("mesa");
    this.loadTables(tableIdFromLink);
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
        this.tables.set(response.content);
        if (preselectTableId) {
          this.selectOrderTable(preselectTableId);
        }
      },
      error: () => this.tables.set([])
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
      queryParams: { mesa: tableId || null },
      queryParamsHandling: "merge",
      replaceUrl: true
    });
    this.orderTableId.set(tableId);
    this.orderComanda.set(null);
    this.orderComandaError.set(null);
    this.orderDraftItems.set([]);
    this.isCartOpen.set(false);
    if (!tableId) {
      return;
    }
    this.isLoadingOrderComanda.set(true);
    this.staffOrderService.openOrEnter(tableId).subscribe({
      next: (comanda) => {
        this.isLoadingOrderComanda.set(false);
        this.orderComanda.set(comanda);
      },
      error: (error) => {
        this.isLoadingOrderComanda.set(false);
        this.orderComandaError.set(this.resolveErrorMessage(error));
      }
    });
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
      }))
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LancarPedidoComponent, selectors: [["app-lancar-pedido"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 6, consts: [[1, "page-header", "page-header--row"], [1, "page-title"], [1, "page-subtitle"], ["type", "button", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["aria-hidden", "true", 1, "material-icons"], [1, "field"], ["for", "order-table", 1, "field__label"], [1, "field__control"], ["id", "order-table", 1, "field__input", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "field__hint"], ["role", "alert", 1, "form-alert", "form-alert--error"], [1, "cart-overlay"], [1, "order-category-filters"], ["aria-label", "Ver comanda da mesa", 1, "comanda-fab", 3, "routerLink"], [1, "material-icons"], [1, "comanda-fab__label"], ["type", "button", 1, "cart-fab", 3, "click"], [1, "cart-fab__count"], ["type", "button", 1, "btn", "btn--sm", 3, "click"], ["type", "button", 1, "btn", "btn--sm", 3, "btn--primary", "btn--ghost"], [1, "menu-items", "order-menu-items"], [1, "menu-item", "card", 3, "menu-item--in-cart"], [1, "menu-item", "card"], [1, "menu-item__image"], [3, "src", "alt"], ["aria-hidden", "true", 1, "menu-item__image-placeholder", "material-icons"], [1, "menu-item__flag", "menu-item__flag--new"], [1, "menu-item__flag", "menu-item__flag--highlight"], [1, "menu-item__body"], [1, "menu-item__heading"], [1, "menu-item__name"], ["title", "Picante", 1, "material-icons", "menu-item__spicy"], [1, "menu-item__description"], [1, "menu-item__badges"], [1, "menu-item__meta"], [1, "menu-item__footer"], [1, "menu-item__price-group"], [1, "menu-item__price"], ["type", "button", "aria-label", "Adicionar", 1, "menu-item__add"], [1, "menu-item__stepper"], [3, "error", "src", "alt"], [1, "menu-item__badge", 3, "title"], [1, "menu-item__price", "menu-item__price--old"], [1, "menu-item__price", "menu-item__price--promo"], ["type", "button", "aria-label", "Adicionar", 1, "menu-item__add", 3, "click"], ["type", "button", "aria-label", "Diminuir quantidade", 3, "click"], [1, "menu-item__stepper-qty"], ["type", "button", "aria-label", "Aumentar quantidade", 3, "click"], [1, "cart-overlay", 3, "click"], [1, "cart-drawer", "card", 3, "click"], [1, "cart-drawer__header"], [1, "cart-drawer__title"], ["type", "button", "aria-label", "Fechar", 1, "cart-drawer__close", 3, "click"], [1, "cart-list"], [1, "cart-item"], [1, "cart-drawer__footer"], ["role", "alert", 1, "cart-drawer__error"], [1, "cart-drawer__total"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", "cart-drawer__submit", 3, "click", "disabled"], [1, "cart-item__image"], [1, "cart-item__body"], [1, "cart-item__name"], [1, "cart-item__price"], [1, "cart-item__row"], [1, "cart-item__stepper"], [1, "cart-item__qty"], [1, "cart-item__total"], [1, "cart-item__notes"], [1, "cart-item__notes-label"], ["rows", "2", "maxlength", "500", "placeholder", "Ex.: sem cebola, ponto da carne, sem gelo\u2026", 3, "change", "value"], ["type", "button", "aria-label", "Remover item", 1, "cart-item__remove", 3, "click"]], template: function LancarPedidoComponent_Template(rf, ctx) {
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
      \u0275\u0275elementStart(13, "div", 7)(14, "select", 8);
      \u0275\u0275listener("ngModelChange", function LancarPedidoComponent_Template_select_ngModelChange_14_listener($event) {
        return ctx.selectOrderTable($event);
      });
      \u0275\u0275elementStart(15, "option", 9);
      \u0275\u0275text(16, "Selecione a mesa");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(17, LancarPedidoComponent_For_18_Template, 2, 3, "option", 10, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(19, LancarPedidoComponent_Conditional_19_Template, 2, 0, "p", 11)(20, LancarPedidoComponent_Conditional_20_Template, 4, 1, "div", 12)(21, LancarPedidoComponent_Conditional_21_Template, 14, 12)(22, LancarPedidoComponent_Conditional_22_Template, 20, 4, "div", 13);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.isSubmittingOrder());
      \u0275\u0275advance(8);
      \u0275\u0275property("ngModel", ctx.orderTableId());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.tables());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoadingOrderComanda() ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.orderComandaError() ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.orderTableId() && !ctx.isLoadingOrderComanda() && !ctx.orderComandaError() ? 21 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCartOpen() ? 22 : -1);
    }
  }, dependencies: [RippleDirective, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-header--row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n  max-width: 640px;\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\nselect.field__input[_ngcontent-%COMP%] {\n  appearance: none;\n  cursor: pointer;\n}\n.order-category-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin: 16px 0 16px;\n}\n.order-menu-items[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 90px;\n}\n.menu-item[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);\n}\n.menu-item--in-cart[_ngcontent-%COMP%] {\n  border-color: var(--color-accent);\n  box-shadow: 0 0 0 1px var(--color-accent);\n}\n.menu-item__image[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 4/3;\n  background: var(--color-bg-elevated);\n}\n.menu-item__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.menu-item__image-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 32px;\n  color: var(--color-text-muted);\n}\n.menu-item__flag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  padding: 3px 10px;\n  border-radius: var(--radius-full);\n  font-size: 0.6875rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n}\n.menu-item__flag--new[_ngcontent-%COMP%] {\n  background: var(--color-success);\n  color: #06210f;\n}\n.menu-item__flag--highlight[_ngcontent-%COMP%] {\n  background: var(--color-btn-primary-bg);\n  color: #ffffff;\n}\n.menu-item__body[_ngcontent-%COMP%] {\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n}\n.menu-item__heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 8px;\n}\n.menu-item__name[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: var(--color-text);\n  min-width: 0;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.menu-item__spicy[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #f87171;\n  flex-shrink: 0;\n}\n.menu-item__description[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.menu-item__badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.menu-item__badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 8px;\n  border-radius: var(--radius-full);\n  background: var(--color-success-bg);\n  color: var(--color-success);\n  font-size: 0.6875rem;\n  font-weight: 600;\n}\n.menu-item__badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.menu-item__meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.menu-item__footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding-top: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.menu-item__price-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  min-width: 0;\n  overflow: hidden;\n}\n.menu-item__price[_ngcontent-%COMP%], \n.menu-item__price--old[_ngcontent-%COMP%], \n.menu-item__price--promo[_ngcontent-%COMP%] {\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.menu-item__price[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.menu-item__price--old[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--color-text-muted);\n  text-decoration: line-through;\n}\n.menu-item__price--promo[_ngcontent-%COMP%] {\n  color: var(--color-success);\n}\n.menu-item__add[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  flex-shrink: 0;\n  border-radius: var(--radius-full);\n  border: none;\n  background: var(--color-btn-primary-bg);\n  color: #ffffff;\n  cursor: pointer;\n  transition: background var(--transition-fast), transform var(--transition-fast);\n}\n.menu-item__add[_ngcontent-%COMP%]:hover {\n  background: var(--color-btn-primary-bg-hover);\n}\n.menu-item__add[_ngcontent-%COMP%]:active {\n  transform: scale(0.92);\n}\n.menu-item__add[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.menu-item__stepper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-shrink: 0;\n  padding: 2px;\n  border-radius: var(--radius-full);\n  background: var(--color-accent-bg);\n}\n.menu-item__stepper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  flex-shrink: 0;\n  border-radius: var(--radius-full);\n  border: none;\n  background: var(--color-btn-primary-bg);\n  color: #ffffff;\n  cursor: pointer;\n  transition: background var(--transition-fast), transform var(--transition-fast);\n}\n.menu-item__stepper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: var(--color-btn-primary-bg-hover);\n}\n.menu-item__stepper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  transform: scale(0.92);\n}\n.menu-item__stepper[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.menu-item__stepper-qty[_ngcontent-%COMP%] {\n  min-width: 18px;\n  text-align: center;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.comanda-fab[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 20px;\n  bottom: 20px;\n  z-index: 20;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  height: 48px;\n  padding: 0 18px 0 14px;\n  border-radius: var(--radius-full);\n  border: 1px solid var(--color-accent);\n  background: var(--color-bg-card);\n  color: var(--color-text);\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  box-shadow: var(--shadow-md);\n  transition: transform var(--transition-fast), background var(--transition-fast);\n}\n.comanda-fab[_ngcontent-%COMP%]:hover {\n  background: var(--color-accent-bg);\n}\n.comanda-fab[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.comanda-fab[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--color-accent-hover);\n}\n.comanda-fab--disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n@media (min-width: 961px) {\n  .comanda-fab[_ngcontent-%COMP%] {\n    left: 280px;\n  }\n}\n.cart-fab[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  z-index: 200;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  border-radius: var(--radius-full);\n  border: none;\n  background: var(--color-btn-primary-bg);\n  color: #ffffff;\n  cursor: pointer;\n  box-shadow: var(--shadow-md);\n  transition:\n    transform var(--transition-fast),\n    background var(--transition-fast),\n    opacity var(--transition-fast);\n}\n.cart-fab[_ngcontent-%COMP%]:hover {\n  background: var(--color-btn-primary-bg-hover);\n}\n.cart-fab[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.cart-fab[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.cart-fab--hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n  pointer-events: none;\n  transform: scale(0.8);\n}\n.cart-fab__count[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  min-width: 20px;\n  height: 20px;\n  padding-inline: 4px;\n  border-radius: var(--radius-full);\n  background: var(--color-success);\n  color: #06210f;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid var(--color-bg);\n}\n.cart-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 200;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  background: rgba(4, 8, 20, 0.6);\n  backdrop-filter: blur(4px);\n}\n.cart-drawer[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n  max-height: 82vh;\n  display: flex;\n  flex-direction: column;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  animation: _ngcontent-%COMP%_cart-slide-up var(--transition-base);\n}\n@keyframes _ngcontent-%COMP%_cart-slide-up {\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n.cart-drawer__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 20px;\n  border-bottom: 1px solid var(--color-border);\n  flex-shrink: 0;\n}\n.cart-drawer__title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: var(--color-text);\n}\n.cart-drawer__close[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-full);\n  border: none;\n  background: var(--color-bg-elevated);\n  color: var(--color-text-muted);\n  cursor: pointer;\n}\n.cart-drawer__close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.cart-list[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  padding: 12px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.cart-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.cart-item__image[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n  flex-shrink: 0;\n  background: var(--color-bg-elevated);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-muted);\n}\n.cart-item__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.cart-item__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.cart-item__name[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--color-text);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.cart-item__price[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.cart-item__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 6px;\n}\n.cart-item__notes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-top: 8px;\n}\n.cart-item__notes-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.cart-item__notes[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  resize: vertical;\n  min-height: 38px;\n  padding: 8px 10px;\n  font: inherit;\n  font-size: 0.8125rem;\n  color: var(--color-text);\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-md);\n}\n.cart-item__notes[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-muted);\n}\n.cart-item__notes[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-accent);\n}\n.cart-item__stepper[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-full);\n  padding: 2px 4px;\n  flex-shrink: 0;\n}\n.cart-item__stepper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  border: none;\n  background: var(--color-bg-elevated);\n  color: var(--color-text);\n  cursor: pointer;\n}\n.cart-item__stepper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.cart-item__qty[_ngcontent-%COMP%] {\n  min-width: 16px;\n  text-align: center;\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.cart-item__total[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.cart-item__remove[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  flex-shrink: 0;\n  border: none;\n  background: transparent;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  padding: 4px;\n}\n.cart-item__remove[_ngcontent-%COMP%]:hover {\n  color: #f87171;\n}\n.cart-drawer__footer[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 16px 20px calc(16px + env(safe-area-inset-bottom));\n  border-top: 1px solid var(--color-border);\n}\n.cart-drawer__error[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 14px;\n  padding: 12px;\n  border-radius: var(--radius-sm);\n  background: rgba(248, 113, 113, 0.14);\n  color: #f87171;\n  font-size: 0.8125rem;\n}\n.cart-drawer__error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.cart-drawer__total[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  margin-bottom: 14px;\n  font-size: 0.9375rem;\n  color: var(--color-text);\n}\n.cart-drawer__total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.cart-drawer__submit[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 640px) {\n  .cart-overlay[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n  .cart-drawer[_ngcontent-%COMP%] {\n    border-radius: var(--radius-lg);\n    max-height: 78vh;\n  }\n}\n@media (max-width: 640px) {\n  .order-category-filters[_ngcontent-%COMP%] {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    margin: 12px -16px 16px;\n    padding: 0 16px 4px;\n    scrollbar-width: none;\n  }\n  .order-category-filters[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n  }\n  .order-category-filters[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .order-menu-items[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 8px;\n  }\n  .menu-item__image[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .menu-item__body[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n    gap: 6px;\n  }\n  .menu-item__name[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .menu-item__description[_ngcontent-%COMP%], \n   .menu-item__badges[_ngcontent-%COMP%], \n   .menu-item__meta[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .menu-item__footer[_ngcontent-%COMP%] {\n    padding-top: 4px;\n    flex-wrap: wrap;\n    row-gap: 6px;\n  }\n  .menu-item__add[_ngcontent-%COMP%], \n   .menu-item__stepper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n  }\n  .menu-item__stepper[_ngcontent-%COMP%] {\n    padding: 3px;\n  }\n  .comanda-fab__label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .comanda-fab[_ngcontent-%COMP%] {\n    width: 48px;\n    padding: 0;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=lancar-pedido.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LancarPedidoComponent, { className: "LancarPedidoComponent", filePath: "src\\app\\features\\admin\\pages\\lancar-pedido\\lancar-pedido.component.ts", lineNumber: 44 });
})();
export {
  LancarPedidoComponent
};
//# sourceMappingURL=chunk-PE2I7KKM.js.map
