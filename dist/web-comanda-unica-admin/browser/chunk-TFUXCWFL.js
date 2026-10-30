import {
  SubscriptionService
} from "./chunk-FWXXTQLH.js";
import {
  takeUntilDestroyed
} from "./chunk-6EVHQB4O.js";
import {
  RippleDirective
} from "./chunk-ZBOLJN4C.js";
import {
  CepService
} from "./chunk-5A5BXAFA.js";
import {
  formatCEP,
  formatCNPJ,
  formatCPF,
  formatCellphone,
  isValidCNPJ,
  isValidCPF,
  onlyDigits
} from "./chunk-OVYPUNLM.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-GNNS5J5Q.js";
import {
  AuthService
} from "./chunk-GDZY7PI7.js";
import {
  parseApiDate
} from "./chunk-MQ3P2GIM.js";
import {
  AccountsService
} from "./chunk-HZABO7FL.js";
import "./chunk-IKIQHSDP.js";
import "./chunk-JC7LZX74.js";
import {
  DestroyRef,
  ElementRef,
  EventEmitter,
  HttpErrorResponse,
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
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate4,
  ɵɵviewQuery
} from "./chunk-MRKXMG4P.js";

// src/app/shared/components/card-brand-logo/card-brand-logo.component.ts
function CardBrandLogoComponent_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "rect", 1);
    \u0275\u0275elementStart(1, "text", 2);
    \u0275\u0275text(2, "VISA");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "rect", 3);
  }
}
function CardBrandLogoComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "rect", 4)(1, "circle", 5)(2, "circle", 6)(3, "path", 7);
  }
}
function CardBrandLogoComponent_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "rect", 8);
    \u0275\u0275elementStart(1, "text", 9);
    \u0275\u0275text(2, "AMEX");
    \u0275\u0275elementEnd();
  }
}
function CardBrandLogoComponent_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "rect", 10)(1, "circle", 11)(2, "circle", 12)(3, "circle", 13);
    \u0275\u0275elementStart(4, "text", 14);
    \u0275\u0275text(5, "elo");
    \u0275\u0275elementEnd();
  }
}
function CardBrandLogoComponent_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "rect", 15);
    \u0275\u0275elementStart(1, "text", 16);
    \u0275\u0275text(2, "Hipercard");
    \u0275\u0275elementEnd();
  }
}
function CardBrandLogoComponent_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "rect", 1)(1, "circle", 17)(2, "circle", 18)(3, "circle", 19);
  }
}
function CardBrandLogoComponent_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "rect", 1)(1, "circle", 20);
    \u0275\u0275elementStart(2, "text", 21);
    \u0275\u0275text(3, "DISCOVER");
    \u0275\u0275elementEnd();
  }
}
function CardBrandLogoComponent_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "rect", 1)(1, "rect", 22)(2, "rect", 23)(3, "rect", 24);
    \u0275\u0275elementStart(4, "text", 25);
    \u0275\u0275text(5, "JCB");
    \u0275\u0275elementEnd();
  }
}
function CardBrandLogoComponent_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "rect", 26)(1, "rect", 27)(2, "rect", 28);
  }
}
var CARD_BRAND_LABELS = {
  visa: "Visa",
  mastercard: "Mastercard",
  amex: "American Express",
  elo: "Elo",
  hipercard: "Hipercard",
  diners: "Diners Club",
  discover: "Discover",
  jcb: "JCB"
};
function normalizeCardBrand(brand) {
  const key = (brand ?? "").toLowerCase().replace(/[^a-z]/g, "");
  if (!key)
    return null;
  if (key.startsWith("visa"))
    return "visa";
  if (key.startsWith("master"))
    return "mastercard";
  if (key === "amex" || key.startsWith("americanexpress"))
    return "amex";
  if (key === "elo")
    return "elo";
  if (key.startsWith("hiper"))
    return "hipercard";
  if (key.startsWith("diners"))
    return "diners";
  if (key === "discover")
    return "discover";
  if (key === "jcb")
    return "jcb";
  return null;
}
var CardBrandLogoComponent = class _CardBrandLogoComponent {
  brandValue = signal(null);
  set brand(value) {
    this.brandValue.set(value ?? null);
  }
  // Largura em px; a altura segue a proporção de cartão (40x26).
  width = 40;
  key = computed(() => normalizeCardBrand(this.brandValue()));
  label = computed(() => {
    const key = this.key();
    return key ? CARD_BRAND_LABELS[key] : "Cart\xE3o";
  });
  static \u0275fac = function CardBrandLogoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardBrandLogoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardBrandLogoComponent, selectors: [["app-card-brand-logo"]], inputs: { brand: "brand", width: "width" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 4, consts: [["viewBox", "0 0 40 26", "role", "img"], ["width", "40", "height", "26", "rx", "4", "fill", "#fff"], ["x", "20", "y", "17.5", "text-anchor", "middle", "font-family", "Arial, Helvetica, sans-serif", "font-size", "11", "font-weight", "900", "font-style", "italic", "fill", "#1A1F71", "letter-spacing", "0.3"], ["x", "6", "y", "20", "width", "28", "height", "1.6", "fill", "#F7B600"], ["width", "40", "height", "26", "rx", "4", "fill", "#1b1b1b"], ["cx", "16", "cy", "13", "r", "7.5", "fill", "#EB001B"], ["cx", "24", "cy", "13", "r", "7.5", "fill", "#F79E1B"], ["d", "M20 6.66a7.5 7.5 0 0 1 0 12.68a7.5 7.5 0 0 1 0-12.68z", "fill", "#FF5F00"], ["width", "40", "height", "26", "rx", "4", "fill", "#2E77BC"], ["x", "20", "y", "16.5", "text-anchor", "middle", "font-family", "Arial, Helvetica, sans-serif", "font-size", "8.5", "font-weight", "900", "fill", "#fff", "letter-spacing", "0.4"], ["width", "40", "height", "26", "rx", "4", "fill", "#000"], ["cx", "9", "cy", "9", "r", "2", "fill", "#FFCB05"], ["cx", "9", "cy", "13.5", "r", "2", "fill", "#00A4E0"], ["cx", "9", "cy", "18", "r", "2", "fill", "#EF4123"], ["x", "24", "y", "17.5", "text-anchor", "middle", "font-family", "Arial, Helvetica, sans-serif", "font-size", "12", "font-weight", "700", "fill", "#fff"], ["width", "40", "height", "26", "rx", "4", "fill", "#B3131B"], ["x", "20", "y", "16", "text-anchor", "middle", "font-family", "Arial, Helvetica, sans-serif", "font-size", "6.6", "font-weight", "800", "font-style", "italic", "fill", "#fff"], ["cx", "20", "cy", "13", "r", "8", "fill", "#0079BE"], ["cx", "17.2", "cy", "13", "r", "4.4", "fill", "none", "stroke", "#fff", "stroke-width", "1.4"], ["cx", "22.8", "cy", "13", "r", "4.4", "fill", "none", "stroke", "#fff", "stroke-width", "1.4"], ["cx", "24", "cy", "13", "r", "4", "fill", "#F48120"], ["x", "20", "y", "21.5", "text-anchor", "middle", "font-family", "Arial, Helvetica, sans-serif", "font-size", "5", "font-weight", "800", "fill", "#231F20"], ["x", "7", "y", "6", "width", "8", "height", "14", "rx", "2", "fill", "#0E4C96"], ["x", "16", "y", "6", "width", "8", "height", "14", "rx", "2", "fill", "#E21836"], ["x", "25", "y", "6", "width", "8", "height", "14", "rx", "2", "fill", "#007B40"], ["x", "20", "y", "15.6", "text-anchor", "middle", "font-family", "Arial, Helvetica, sans-serif", "font-size", "6", "font-weight", "900", "fill", "#fff"], ["x", "0.5", "y", "0.5", "width", "39", "height", "25", "rx", "3.5", "fill", "rgba(255,255,255,0.06)", "stroke", "rgba(203,213,225,0.35)"], ["x", "0.5", "y", "6", "width", "39", "height", "4", "fill", "rgba(203,213,225,0.35)"], ["x", "5", "y", "15", "width", "12", "height", "2.4", "rx", "1", "fill", "rgba(203,213,225,0.45)"]], template: function CardBrandLogoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(0, "svg", 0);
      \u0275\u0275template(1, CardBrandLogoComponent_Case_1_Template, 4, 0)(2, CardBrandLogoComponent_Case_2_Template, 4, 0)(3, CardBrandLogoComponent_Case_3_Template, 3, 0)(4, CardBrandLogoComponent_Case_4_Template, 6, 0)(5, CardBrandLogoComponent_Case_5_Template, 3, 0)(6, CardBrandLogoComponent_Case_6_Template, 4, 0)(7, CardBrandLogoComponent_Case_7_Template, 4, 0)(8, CardBrandLogoComponent_Case_8_Template, 6, 0)(9, CardBrandLogoComponent_Case_9_Template, 3, 0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275attribute("width", ctx.width)("height", ctx.width * 0.65)("aria-label", ctx.label());
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_3_0 = ctx.key()) === "visa" ? 1 : tmp_3_0 === "mastercard" ? 2 : tmp_3_0 === "amex" ? 3 : tmp_3_0 === "elo" ? 4 : tmp_3_0 === "hipercard" ? 5 : tmp_3_0 === "diners" ? 6 : tmp_3_0 === "discover" ? 7 : tmp_3_0 === "jcb" ? 8 : 9);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-flex;\n  line-height: 0;\n  flex-shrink: 0;\n}\nsvg[_ngcontent-%COMP%] {\n  display: block;\n  border-radius: 4px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n}\n/*# sourceMappingURL=card-brand-logo.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardBrandLogoComponent, { className: "CardBrandLogoComponent", filePath: "src\\app\\shared\\components\\card-brand-logo\\card-brand-logo.component.ts", lineNumber: 105 });
})();

// src/app/features/admin/pages/assinatura/billing-card-form.component.ts
var _forTrack0 = ($index, $item) => $item.value;
function BillingCardFormComponent_Conditional_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.summary.note);
  }
}
function BillingCardFormComponent_Conditional_10_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "small");
    \u0275\u0275text(3, "/m\xEAs");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.summary.amount);
  }
}
function BillingCardFormComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 5);
    \u0275\u0275text(2, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 58)(4, "span", 59);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, BillingCardFormComponent_Conditional_10_Conditional_6_Template, 2, 1, "span", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, BillingCardFormComponent_Conditional_10_Conditional_7_Template, 4, 1, "span", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.summary.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.summary.note ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.summary.amount ? 7 : -1);
  }
}
function BillingCardFormComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "Confira o n\xFAmero do cart\xE3o.");
    \u0275\u0275elementEnd();
  }
}
function BillingCardFormComponent_Conditional_40_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275element(1, "app-card-brand-logo", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("card-form__brand-item--active", ctx_r0.brand() === b_r2)("card-form__brand-item--dim", ctx_r0.brand() && ctx_r0.brand() !== b_r2);
    \u0275\u0275attribute("title", ctx_r0.brandLabels[b_r2]);
    \u0275\u0275advance();
    \u0275\u0275property("brand", b_r2)("width", 30);
  }
}
function BillingCardFormComponent_Conditional_40_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.brandLabels[ctx]);
  }
}
function BillingCardFormComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275repeaterCreate(1, BillingCardFormComponent_Conditional_40_For_2_Template, 2, 7, "span", 62, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275template(3, BillingCardFormComponent_Conditional_40_Conditional_3_Template, 2, 1, "span", 63);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.acceptedBrands);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_2_0 = ctx_r0.brand()) ? 3 : -1, tmp_2_0);
  }
}
function BillingCardFormComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "Informe o nome como est\xE1 impresso no cart\xE3o.");
    \u0275\u0275elementEnd();
  }
}
function BillingCardFormComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "Validade inv\xE1lida.");
    \u0275\u0275elementEnd();
  }
}
function BillingCardFormComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "3 ou 4 d\xEDgitos.");
    \u0275\u0275elementEnd();
  }
}
function BillingCardFormComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34)(1, "span", 5);
    \u0275\u0275text(2, "auto_awesome");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Preenchido com os dados da conta \u2014 confira ");
    \u0275\u0275elementEnd();
  }
}
function BillingCardFormComponent_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "CPF ou CNPJ inv\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function BillingCardFormComponent_Conditional_68_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function BillingCardFormComponent_Conditional_68_For_2_Template_button_click_0_listener() {
      const opt_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.useDoc(opt_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("card-form__chip--active", ctx_r0.isDocSelected(opt_r4));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r4.label, " ");
  }
}
function BillingCardFormComponent_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275repeaterCreate(1, BillingCardFormComponent_Conditional_68_For_2_Template, 2, 3, "button", 65, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.docOptions());
  }
}
function BillingCardFormComponent_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "DDD + n\xFAmero.");
    \u0275\u0275elementEnd();
  }
}
function BillingCardFormComponent_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "Informe um e-mail v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function BillingCardFormComponent_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "CEP com 8 d\xEDgitos.");
    \u0275\u0275elementEnd();
  }
}
function BillingCardFormComponent_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "Obrigat\xF3rio.");
    \u0275\u0275elementEnd();
  }
}
function BillingCardFormComponent_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 51)(1, "span", 5);
    \u0275\u0275text(2, "travel_explore");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Buscando endere\xE7o\u2026 ");
    \u0275\u0275elementEnd();
  }
}
function BillingCardFormComponent_Conditional_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 52)(1, "span", 5);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.addressLine(), " ");
  }
}
function BillingCardFormComponent_Conditional_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 51)(1, "span", 5);
    \u0275\u0275text(2, "help_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " N\xE3o encontramos esse CEP. Confira os d\xEDgitos \u2014 se estiver certo, pode seguir assim mesmo. ");
    \u0275\u0275elementEnd();
  }
}
function BillingCardFormComponent_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "span", 5);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.submitError());
  }
}
function BillingCardFormComponent_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 67);
    \u0275\u0275text(1, " Salvando cart\xE3o\u2026 ");
  }
}
function BillingCardFormComponent_Conditional_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.submitLabel, " ");
  }
}
var ACCEPTED_BRANDS = ["visa", "mastercard", "elo", "amex", "hipercard", "diners"];
function detectBrand(number) {
  if (/^(4011|4312|4389|4514|4576|5041|5066|5067|509|6277|6362|6363|650|6516|6550)/.test(number))
    return "elo";
  if (/^(606282|3841)/.test(number))
    return "hipercard";
  if (/^3[47]/.test(number))
    return "amex";
  if (/^3(0[0-5]|[68])/.test(number))
    return "diners";
  if (/^(5[1-5]|2[2-7])/.test(number))
    return "mastercard";
  if (/^4/.test(number))
    return "visa";
  return null;
}
function luhnValid(number) {
  let sum = 0;
  let double = false;
  for (let i = number.length - 1; i >= 0; i--) {
    let digit = Number(number[i]);
    if (double) {
      digit *= 2;
      if (digit > 9)
        digit -= 9;
    }
    sum += digit;
    double = !double;
  }
  return number.length >= 13 && sum % 10 === 0;
}
function formatCpfCnpj(value) {
  const digits = onlyDigits(value).slice(0, 14);
  return digits.length > 11 ? formatCNPJ(digits) : formatCPF(digits);
}
var BillingCardFormComponent = class _BillingCardFormComponent {
  subscriptionService = inject(SubscriptionService);
  accountsService = inject(AccountsService);
  cepService = inject(CepService);
  authService = inject(AuthService);
  fb = inject(FormBuilder);
  host = inject(ElementRef);
  destroyRef = inject(DestroyRef);
  submitLabel = "Salvar cart\xE3o";
  heading = "Cart\xE3o de cobran\xE7a";
  summary = null;
  saved = new EventEmitter();
  cancel = new EventEmitter();
  acceptedBrands = ACCEPTED_BRANDS;
  brandLabels = CARD_BRAND_LABELS;
  isSaving = signal(false);
  submitError = signal(null);
  submitted = signal(false);
  numberDigits = signal("");
  holderNameValue = signal("");
  expiryValue = signal("");
  // Dados vindos do cadastro da conta (Configurações → Perfil).
  prefilled = signal(false);
  docOptions = signal([]);
  docValue = signal("");
  // Endereço exibido abaixo do CEP: o salvo na conta (enquanto o CEP for o mesmo) ou o da consulta.
  street = signal(null);
  cepValue = signal("");
  numberValue = signal("");
  isLookingUpCep = signal(false);
  cepNotFound = signal(false);
  lastLookedUpCep = "";
  brand = computed(() => detectBrand(this.numberDigits()));
  previewNumber = computed(() => {
    const digits = this.numberDigits().padEnd(16, "\u2022");
    return digits.replace(/(.{4})(?=.)/g, "$1 ");
  });
  previewName = computed(() => this.holderNameValue().trim() || "Nome no cart\xE3o");
  previewExpiry = computed(() => this.expiryValue() || "MM/AA");
  addressLine = computed(() => {
    const street = this.street();
    if (!street || street.cep !== onlyDigits(this.cepValue())) {
      return null;
    }
    const number = this.numberValue().trim();
    return street.text.replace("{n}", number ? `, ${number}` : "");
  });
  form = this.fb.nonNullable.group({
    holderName: ["", [Validators.required, Validators.maxLength(100)]],
    number: ["", Validators.required],
    expiry: ["", Validators.required],
    ccv: ["", [Validators.required, Validators.pattern(/^\d{3,4}$/)]],
    cpfCnpj: ["", Validators.required],
    phone: ["", Validators.required],
    email: [this.authService.currentUser()?.email ?? "", [Validators.required, Validators.email]],
    postalCode: ["", Validators.required],
    addressNumber: ["", [Validators.required, Validators.maxLength(20)]],
    addressComplement: ["", Validators.maxLength(100)]
  });
  constructor() {
    this.form.controls.addressNumber.valueChanges.pipe(takeUntilDestroyed()).subscribe((value) => this.numberValue.set(value));
    this.prefillFromAccount();
  }
  ngAfterViewInit() {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    this.host.nativeElement.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest" });
    if (window.matchMedia?.("(min-width: 768px)").matches) {
      this.host.nativeElement.querySelector("#billing-card-number")?.focus({ preventScroll: true });
    }
  }
  onEscape() {
    if (!this.isSaving()) {
      this.cancel.emit();
    }
  }
  // Preenche titular/endereço com o cadastro da empresa e do responsável. Só ocupa campos ainda
  // vazios — nunca sobrescreve o que o usuário já começou a digitar.
  prefillFromAccount() {
    this.accountsService.getProfile().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (profile) => this.applyProfile(profile),
      error: () => void 0
    });
  }
  applyProfile(profile) {
    const company = profile.company;
    const owner = profile.owner;
    const controls = this.form.controls;
    let filled = false;
    const fillIfEmpty = (control, value) => {
      if (value && !control.value && !control.dirty) {
        control.setValue(value);
        filled = true;
      }
    };
    const options = [];
    const cnpj = onlyDigits(company?.cnpj);
    if (cnpj.length === 14 && cnpj === (company?.cnpj ?? "").replace(/[.\-/\s]/g, "")) {
      options.push({ label: "CNPJ da empresa", value: formatCNPJ(cnpj) });
    }
    const cpf = onlyDigits(owner?.cpf);
    if (cpf.length === 11) {
      const firstName = owner.fullName?.trim().split(/\s+/)[0];
      options.push({ label: firstName ? `CPF de ${firstName}` : "CPF do respons\xE1vel", value: formatCPF(cpf) });
    }
    this.docOptions.set(options);
    fillIfEmpty(controls.cpfCnpj, options[0]?.value);
    this.docValue.set(controls.cpfCnpj.value);
    const phone = onlyDigits(company?.phone) || onlyDigits(owner?.phone);
    fillIfEmpty(controls.phone, phone ? formatCellphone(phone) : null);
    const address = company?.address;
    if (address) {
      fillIfEmpty(controls.postalCode, address.zipCode ? formatCEP(address.zipCode) : null);
      fillIfEmpty(controls.addressNumber, address.number);
      fillIfEmpty(controls.addressComplement, address.complement);
      this.cepValue.set(controls.postalCode.value);
      this.numberValue.set(controls.addressNumber.value);
      const cep = onlyDigits(address.zipCode);
      if (cep.length === 8 && address.street) {
        this.lastLookedUpCep = cep;
        this.street.set({ cep, text: this.streetText(address.street, address.neighborhood, address.city, address.state) });
      }
    }
    this.prefilled.set(filled);
  }
  // "{n}" marca onde entra o número digitado — o texto acompanha o campo "Número".
  streetText(street, neighborhood, city, state) {
    const place = [neighborhood, [city, state].filter(Boolean).join("/")].filter(Boolean).join(" \u2014 ");
    return place ? `${street}{n} \xB7 ${place}` : `${street}{n}`;
  }
  invalid(field) {
    const control = this.form.controls[field];
    return control.invalid && (control.touched || this.submitted());
  }
  shown(field) {
    return this.form.controls[field].touched || this.submitted();
  }
  numberInvalid() {
    return this.shown("number") && !luhnValid(onlyDigits(this.form.controls.number.value));
  }
  expiryInvalid() {
    return this.shown("expiry") && this.parseExpiry() === null;
  }
  docValid() {
    const digits = onlyDigits(this.form.controls.cpfCnpj.value);
    return digits.length === 11 ? isValidCPF(digits) : digits.length === 14 && isValidCNPJ(digits);
  }
  docInvalid() {
    return this.shown("cpfCnpj") && !this.docValid();
  }
  phoneInvalid() {
    const digits = onlyDigits(this.form.controls.phone.value);
    return this.shown("phone") && (digits.length < 10 || digits.length > 11);
  }
  cepInvalid() {
    return this.shown("postalCode") && onlyDigits(this.form.controls.postalCode.value).length !== 8;
  }
  isDocSelected(option) {
    return onlyDigits(this.docValue()) === onlyDigits(option.value);
  }
  useDoc(option) {
    this.form.controls.cpfCnpj.setValue(option.value);
    this.form.controls.cpfCnpj.markAsTouched();
    this.docValue.set(option.value);
  }
  syncPreview() {
    this.holderNameValue.set(this.form.controls.holderName.value);
  }
  formatNumber() {
    const digits = onlyDigits(this.form.controls.number.value).slice(0, 19);
    this.numberDigits.set(digits);
    this.form.controls.number.setValue(digits.replace(/(\d{4})(?=\d)/g, "$1 "), { emitEvent: false });
  }
  formatExpiry() {
    const digits = onlyDigits(this.form.controls.expiry.value).slice(0, 4);
    const formatted = digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
    this.form.controls.expiry.setValue(formatted, { emitEvent: false });
    this.expiryValue.set(formatted);
  }
  formatCcv() {
    this.form.controls.ccv.setValue(onlyDigits(this.form.controls.ccv.value).slice(0, 4));
  }
  formatDoc() {
    const formatted = formatCpfCnpj(this.form.controls.cpfCnpj.value);
    this.form.controls.cpfCnpj.setValue(formatted, { emitEvent: false });
    this.docValue.set(formatted);
  }
  formatPhone() {
    this.form.controls.phone.setValue(formatCellphone(this.form.controls.phone.value), { emitEvent: false });
  }
  formatCep() {
    const formatted = formatCEP(this.form.controls.postalCode.value);
    this.form.controls.postalCode.setValue(formatted, { emitEvent: false });
    this.cepValue.set(formatted);
    this.cepNotFound.set(false);
    const digits = onlyDigits(formatted);
    if (digits.length === 8 && digits !== this.lastLookedUpCep) {
      this.lookupCep(digits);
    }
  }
  // Consulta o CEP só para mostrar a rua/bairro/cidade e o usuário conferir — a Asaas recebe
  // apenas CEP + número + complemento.
  lookupCep(cep) {
    this.lastLookedUpCep = cep;
    this.isLookingUpCep.set(true);
    this.cepService.lookup(cep).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (result) => {
        if (onlyDigits(this.cepValue()) !== cep) {
          return;
        }
        this.isLookingUpCep.set(false);
        if (!result) {
          this.cepNotFound.set(true);
          return;
        }
        this.street.set({ cep, text: this.streetText(result.street || "Endere\xE7o", result.neighborhood, result.city, result.state) });
      },
      error: () => {
        this.isLookingUpCep.set(false);
        this.lastLookedUpCep = "";
      }
    });
  }
  // { month: '07', year: '2029' } ou null se inválida/vencida.
  parseExpiry() {
    const digits = onlyDigits(this.form.controls.expiry.value);
    if (digits.length !== 4) {
      return null;
    }
    const month = Number(digits.slice(0, 2));
    const year = 2e3 + Number(digits.slice(2));
    if (month < 1 || month > 12) {
      return null;
    }
    const now = /* @__PURE__ */ new Date();
    if (year < now.getFullYear() || year === now.getFullYear() && month < now.getMonth() + 1) {
      return null;
    }
    return { month: String(month).padStart(2, "0"), year: String(year) };
  }
  submit() {
    this.submitted.set(true);
    this.submitError.set(null);
    const expiry = this.parseExpiry();
    if (this.form.invalid || !expiry || this.numberInvalid() || this.docInvalid() || this.phoneInvalid() || this.cepInvalid()) {
      this.focusFirstInvalid();
      return;
    }
    const value = this.form.getRawValue();
    this.isSaving.set(true);
    this.subscriptionService.savePaymentMethod({
      holderName: value.holderName.trim(),
      number: onlyDigits(value.number),
      expiryMonth: expiry.month,
      expiryYear: expiry.year,
      ccv: value.ccv,
      cpfCnpj: onlyDigits(value.cpfCnpj),
      email: value.email.trim(),
      postalCode: onlyDigits(value.postalCode),
      addressNumber: value.addressNumber.trim(),
      addressComplement: value.addressComplement.trim() || null,
      phone: onlyDigits(value.phone)
    }).subscribe({
      next: (status) => {
        this.isSaving.set(false);
        this.form.controls.number.reset("");
        this.form.controls.ccv.reset("");
        this.numberDigits.set("");
        this.saved.emit(status);
      },
      error: (error) => {
        this.isSaving.set(false);
        const body = error instanceof HttpErrorResponse ? error.error : void 0;
        this.submitError.set(body?.mensagem ?? "N\xE3o foi poss\xEDvel salvar o cart\xE3o agora. Confira os dados e tente novamente em instantes.");
      }
    });
  }
  // Leva o usuário até o primeiro campo com erro — no celular ele pode estar fora da tela.
  focusFirstInvalid() {
    setTimeout(() => {
      const target = this.host.nativeElement.querySelector(".field__input--invalid");
      target?.scrollIntoView({ behavior: "smooth", block: "center" });
      target?.focus({ preventScroll: true });
    });
  }
  static \u0275fac = function BillingCardFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BillingCardFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BillingCardFormComponent, selectors: [["app-billing-card-form"]], hostBindings: function BillingCardFormComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown.escape", function BillingCardFormComponent_keydown_escape_HostBindingHandler() {
        return ctx.onEscape();
      });
    }
  }, inputs: { submitLabel: "submitLabel", heading: "heading", summary: "summary" }, outputs: { saved: "saved", cancel: "cancel" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 110, vars: 48, consts: [["novalidate", "", 1, "card-form", 3, "ngSubmit", "formGroup"], [1, "card-form__head"], [1, "card-form__title"], [1, "card-form__subtitle"], ["type", "button", "aria-label", "Fechar", 1, "card-form__close", 3, "click", "disabled"], ["aria-hidden", "true", 1, "material-icons"], [1, "card-form__summary"], [1, "card-form__layout"], ["aria-hidden", "true", 1, "card-preview"], [1, "card-preview__top"], [1, "card-preview__chip"], [3, "brand", "width"], [1, "card-preview__number"], [1, "card-preview__bottom"], [1, "card-preview__name"], [1, "card-preview__exp"], [1, "card-form__fields"], [1, "card-form__section"], [1, "card-form__field"], ["for", "billing-card-number", 1, "field__label"], [1, "card-form__number"], ["id", "billing-card-number", "type", "text", "inputmode", "numeric", "autocomplete", "cc-number", "placeholder", "0000 0000 0000 0000", "maxlength", "23", "formControlName", "number", 1, "field__input", 3, "input"], ["aria-hidden", "true", 1, "card-form__brand"], [1, "field__error"], ["aria-label", "Bandeiras aceitas", 1, "card-form__brands"], ["for", "billing-card-name", 1, "field__label"], ["id", "billing-card-name", "type", "text", "autocomplete", "cc-name", "autocapitalize", "characters", "spellcheck", "false", "placeholder", "Como aparece no cart\xE3o", "formControlName", "holderName", 1, "field__input", 3, "input"], [1, "card-form__row"], ["for", "billing-card-expiry", 1, "field__label"], ["id", "billing-card-expiry", "type", "text", "inputmode", "numeric", "autocomplete", "cc-exp", "placeholder", "MM/AA", "maxlength", "5", "formControlName", "expiry", 1, "field__input", 3, "input"], ["for", "billing-card-ccv", 1, "field__label"], ["id", "billing-card-ccv", "type", "password", "inputmode", "numeric", "autocomplete", "cc-csc", "placeholder", "123", "maxlength", "4", "formControlName", "ccv", 1, "field__input", 3, "input"], [1, "card-form__group"], [1, "card-form__group-head"], [1, "card-form__prefilled"], ["for", "billing-card-doc", 1, "field__label"], ["id", "billing-card-doc", "type", "text", "inputmode", "numeric", "placeholder", "000.000.000-00", "maxlength", "18", "formControlName", "cpfCnpj", 1, "field__input", 3, "input"], [1, "card-form__chips"], ["for", "billing-card-phone", 1, "field__label"], ["id", "billing-card-phone", "type", "tel", "inputmode", "tel", "autocomplete", "tel", "placeholder", "(11) 99999-9999", "maxlength", "15", "formControlName", "phone", 1, "field__input", 3, "input"], ["for", "billing-card-email", 1, "field__label"], ["id", "billing-card-email", "type", "email", "inputmode", "email", "autocomplete", "email", "formControlName", "email", 1, "field__input"], [1, "card-form__row", "card-form__row--address"], [1, "card-form__field", "card-form__field--cep"], ["for", "billing-card-cep", 1, "field__label"], ["id", "billing-card-cep", "type", "text", "inputmode", "numeric", "autocomplete", "postal-code", "placeholder", "00000-000", "maxlength", "9", "formControlName", "postalCode", 1, "field__input", 3, "input"], ["for", "billing-card-addr-number", 1, "field__label"], ["id", "billing-card-addr-number", "type", "text", "autocomplete", "address-line2", "formControlName", "addressNumber", 1, "field__input"], [1, "card-form__field", "card-form__field--complement"], ["for", "billing-card-addr-complement", 1, "field__label"], ["id", "billing-card-addr-complement", "type", "text", "formControlName", "addressComplement", 1, "field__input"], [1, "card-form__address", "card-form__address--muted"], [1, "card-form__address"], ["role", "alert", 1, "form-alert", "form-alert--error", "card-form__alert"], [1, "card-form__actions"], ["type", "submit", "appRipple", "", 1, "btn", "btn--primary", "card-form__submit", 3, "disabled"], ["type", "button", 1, "btn", "btn--ghost", 3, "click", "disabled"], [1, "card-form__secure"], [1, "card-form__summary-text"], [1, "card-form__summary-title"], [1, "card-form__summary-note"], [1, "card-form__summary-amount"], [1, "card-form__brand-item", 3, "card-form__brand-item--active", "card-form__brand-item--dim"], [1, "card-form__brand-name"], [1, "card-form__brand-item"], ["type", "button", 1, "card-form__chip", 3, "card-form__chip--active"], ["type", "button", 1, "card-form__chip", 3, "click"], ["aria-hidden", "true", 1, "card-form__spinner"]], template: function BillingCardFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form", 0);
      \u0275\u0275listener("ngSubmit", function BillingCardFormComponent_Template_form_ngSubmit_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "div")(3, "p", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Cart\xE3o de cr\xE9dito usado na mensalidade e nas taxas da Comanda \xDAnica.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function BillingCardFormComponent_Template_button_click_7_listener() {
        return ctx.cancel.emit();
      });
      \u0275\u0275elementStart(8, "span", 5);
      \u0275\u0275text(9, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, BillingCardFormComponent_Conditional_10_Template, 8, 3, "div", 6);
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "div", 9);
      \u0275\u0275element(14, "span", 10)(15, "app-card-brand-logo", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span", 12);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 13)(19, "div")(20, "small");
      \u0275\u0275text(21, "Titular");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span", 14);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 15)(25, "small");
      \u0275\u0275text(26, "Validade");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span");
      \u0275\u0275text(28);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "div", 16)(30, "p", 17);
      \u0275\u0275text(31, "Cart\xE3o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 18)(33, "label", 19);
      \u0275\u0275text(34, "N\xFAmero do cart\xE3o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 20)(36, "input", 21);
      \u0275\u0275listener("input", function BillingCardFormComponent_Template_input_input_36_listener() {
        return ctx.formatNumber();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "span", 22);
      \u0275\u0275element(38, "app-card-brand-logo", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(39, BillingCardFormComponent_Conditional_39_Template, 2, 0, "span", 23)(40, BillingCardFormComponent_Conditional_40_Template, 4, 1, "div", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 18)(42, "label", 25);
      \u0275\u0275text(43, "Nome impresso no cart\xE3o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "input", 26);
      \u0275\u0275listener("input", function BillingCardFormComponent_Template_input_input_44_listener() {
        return ctx.syncPreview();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(45, BillingCardFormComponent_Conditional_45_Template, 2, 0, "span", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 27)(47, "div", 18)(48, "label", 28);
      \u0275\u0275text(49, "Validade");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "input", 29);
      \u0275\u0275listener("input", function BillingCardFormComponent_Template_input_input_50_listener() {
        return ctx.formatExpiry();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(51, BillingCardFormComponent_Conditional_51_Template, 2, 0, "span", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 18)(53, "label", 30);
      \u0275\u0275text(54, "CVV");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "input", 31);
      \u0275\u0275listener("input", function BillingCardFormComponent_Template_input_input_55_listener() {
        return ctx.formatCcv();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(56, BillingCardFormComponent_Conditional_56_Template, 2, 0, "span", 23);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(57, "div", 32)(58, "div", 33)(59, "p", 17);
      \u0275\u0275text(60, "Titular e endere\xE7o de cobran\xE7a");
      \u0275\u0275elementEnd();
      \u0275\u0275template(61, BillingCardFormComponent_Conditional_61_Template, 4, 0, "span", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 27)(63, "div", 18)(64, "label", 35);
      \u0275\u0275text(65, "CPF ou CNPJ do titular");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "input", 36);
      \u0275\u0275listener("input", function BillingCardFormComponent_Template_input_input_66_listener() {
        return ctx.formatDoc();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(67, BillingCardFormComponent_Conditional_67_Template, 2, 0, "span", 23)(68, BillingCardFormComponent_Conditional_68_Template, 3, 0, "div", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 18)(70, "label", 38);
      \u0275\u0275text(71, "Telefone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "input", 39);
      \u0275\u0275listener("input", function BillingCardFormComponent_Template_input_input_72_listener() {
        return ctx.formatPhone();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(73, BillingCardFormComponent_Conditional_73_Template, 2, 0, "span", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 18)(75, "label", 40);
      \u0275\u0275text(76, "E-mail");
      \u0275\u0275elementEnd();
      \u0275\u0275element(77, "input", 41);
      \u0275\u0275template(78, BillingCardFormComponent_Conditional_78_Template, 2, 0, "span", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div", 42)(80, "div", 43)(81, "label", 44);
      \u0275\u0275text(82, "CEP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "input", 45);
      \u0275\u0275listener("input", function BillingCardFormComponent_Template_input_input_83_listener() {
        return ctx.formatCep();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(84, BillingCardFormComponent_Conditional_84_Template, 2, 0, "span", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div", 18)(86, "label", 46);
      \u0275\u0275text(87, "N\xFAmero");
      \u0275\u0275elementEnd();
      \u0275\u0275element(88, "input", 47);
      \u0275\u0275template(89, BillingCardFormComponent_Conditional_89_Template, 2, 0, "span", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div", 48)(91, "label", 49);
      \u0275\u0275text(92, "Complemento ");
      \u0275\u0275elementStart(93, "small");
      \u0275\u0275text(94, "(opcional)");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(95, "input", 50);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(96, BillingCardFormComponent_Conditional_96_Template, 4, 0, "p", 51)(97, BillingCardFormComponent_Conditional_97_Template, 4, 1, "p", 52)(98, BillingCardFormComponent_Conditional_98_Template, 4, 0, "p", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275template(99, BillingCardFormComponent_Conditional_99_Template, 5, 1, "div", 53);
      \u0275\u0275elementStart(100, "div", 54)(101, "button", 55);
      \u0275\u0275template(102, BillingCardFormComponent_Conditional_102_Template, 2, 0)(103, BillingCardFormComponent_Conditional_103_Template, 3, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "button", 56);
      \u0275\u0275listener("click", function BillingCardFormComponent_Template_button_click_104_listener() {
        return ctx.cancel.emit();
      });
      \u0275\u0275text(105, "Cancelar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "p", 57)(107, "span", 5);
      \u0275\u0275text(108, "verified_user");
      \u0275\u0275elementEnd();
      \u0275\u0275text(109, " O cart\xE3o \xE9 tokenizado pela Asaas, nossa plataforma de pagamentos. A Comanda \xDAnica n\xE3o guarda o n\xFAmero nem o CVV \u2014 s\xF3 a bandeira, o final e a validade, para identificar o cart\xE3o. ");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275attribute("aria-busy", ctx.isSaving());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.heading);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.isSaving());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.summary ? 10 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("card-preview--known", ctx.brand());
      \u0275\u0275attribute("data-brand", ctx.brand());
      \u0275\u0275advance(3);
      \u0275\u0275property("brand", ctx.brand())("width", 48);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.previewNumber());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.previewName());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.previewExpiry());
      \u0275\u0275advance(8);
      \u0275\u0275classProp("field__input--invalid", ctx.numberInvalid());
      \u0275\u0275advance(2);
      \u0275\u0275property("brand", ctx.brand())("width", 36);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.numberInvalid() ? 39 : 40);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("field__input--invalid", ctx.invalid("holderName"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.invalid("holderName") ? 45 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("field__input--invalid", ctx.expiryInvalid());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.expiryInvalid() ? 51 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("field__input--invalid", ctx.invalid("ccv"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.invalid("ccv") ? 56 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.prefilled() ? 61 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("field__input--invalid", ctx.docInvalid());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.docInvalid() ? 67 : ctx.docOptions().length > 1 ? 68 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("field__input--invalid", ctx.phoneInvalid());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.phoneInvalid() ? 73 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("field__input--invalid", ctx.invalid("email"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.invalid("email") ? 78 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("field__input--invalid", ctx.cepInvalid());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.cepInvalid() ? 84 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("field__input--invalid", ctx.invalid("addressNumber"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.invalid("addressNumber") ? 89 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.isLookingUpCep() ? 96 : ctx.addressLine() ? 97 : ctx.cepNotFound() ? 98 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.submitError() ? 99 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isSaving());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isSaving() ? 102 : 103);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isSaving());
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, RippleDirective, CardBrandLogoComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  scroll-margin: 24px;\n}\n.card-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  padding: 20px;\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-md, 12px);\n  background: var(--color-bg-elevated);\n  box-shadow: var(--shadow-md);\n  animation: _ngcontent-%COMP%_card-form-in var(--transition-base) both;\n}\n@keyframes _ngcontent-%COMP%_card-form-in {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n}\n.card-form__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n.card-form__title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1rem;\n  color: var(--color-text);\n}\n.card-form__subtitle[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.card-form__section[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--color-text-muted);\n}\n.card-form__close[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 6px;\n  border: none;\n  border-radius: var(--radius-sm);\n  background: none;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition: color var(--transition-fast), background var(--transition-fast);\n}\n.card-form__close[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: var(--color-text);\n  background: rgba(255, 255, 255, 0.06);\n}\n.card-form__close[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.card-form__summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  border: 1px solid rgba(59, 130, 246, 0.35);\n  border-radius: var(--radius-sm);\n  background: var(--color-accent-bg);\n}\n.card-form__summary[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%] {\n  color: var(--color-accent-hover);\n  flex-shrink: 0;\n}\n.card-form__summary-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex: 1;\n  min-width: 0;\n}\n.card-form__summary-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9375rem;\n  color: var(--color-text);\n}\n.card-form__summary-note[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.card-form__summary-amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.125rem;\n  color: var(--color-text);\n  white-space: nowrap;\n}\n.card-form__summary-amount[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--color-text-muted);\n}\n.card-form__layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  gap: 20px;\n  align-items: start;\n}\n.card-form__fields[_ngcontent-%COMP%], \n.card-form__group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  min-width: 0;\n}\n.card-preview[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 14px;\n  aspect-ratio: 1.586;\n  padding: 18px;\n  border-radius: 14px;\n  overflow: hidden;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #334155 0%,\n      #1e293b 60%,\n      #0f172a 100%);\n  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.35), inset 0 0 0 1px rgba(255, 255, 255, 0.08);\n  transition: background var(--transition-slow);\n}\n.card-preview[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: -40% -20% auto auto;\n  width: 70%;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.06);\n  pointer-events: none;\n}\n.card-preview[data-brand=visa][_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1a3a8f 0%,\n      #1a1f71 70%);\n}\n.card-preview[data-brand=mastercard][_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3b3b3b 0%,\n      #141414 70%);\n}\n.card-preview[data-brand=elo][_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2b2b2b 0%,\n      #000 70%);\n}\n.card-preview[data-brand=amex][_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3c8bd6 0%,\n      #1f5f9e 70%);\n}\n.card-preview[data-brand=hipercard][_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d42a33 0%,\n      #8e0f16 70%);\n}\n.card-preview[data-brand=diners][_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2a8fd0 0%,\n      #005a8e 70%);\n}\n.card-preview__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.card-preview__chip[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 26px;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      135deg,\n      #f5d97b,\n      #c9a43e);\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);\n}\n.card-preview__number[_ngcontent-%COMP%] {\n  font-family:\n    "SFMono-Regular",\n    Consolas,\n    "Liberation Mono",\n    monospace;\n  font-size: 1.125rem;\n  letter-spacing: 0.08em;\n  white-space: nowrap;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);\n}\n.card-preview__bottom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 12px;\n  min-width: 0;\n}\n.card-preview__bottom[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.625rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  opacity: 0.7;\n}\n.card-preview__bottom[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n}\n.card-preview__bottom[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  min-width: 0;\n}\n.card-preview__name[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-transform: uppercase;\n}\n.card-preview__exp[_ngcontent-%COMP%] {\n  text-align: right;\n  flex-shrink: 0;\n}\n.card-form__field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  min-width: 0;\n}\n.card-form__field[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: var(--color-text-muted);\n}\n.card-form__row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.card-form__row--address[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 0.7fr 1.3fr;\n}\n.card-form__number[_ngcontent-%COMP%] {\n  position: relative;\n}\n.card-form__number[_ngcontent-%COMP%]   .field__input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: 60px;\n  letter-spacing: 0.04em;\n}\n.card-form__brand[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 12px;\n  transform: translateY(-50%);\n  display: inline-flex;\n}\n.card-form__brands[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.card-form__brand-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  transition:\n    opacity var(--transition-fast),\n    transform var(--transition-fast),\n    filter var(--transition-fast);\n}\n.card-form__brand-item--dim[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  filter: grayscale(1);\n}\n.card-form__brand-item--active[_ngcontent-%COMP%] {\n  transform: translateY(-2px) scale(1.08);\n}\n.card-form__brand-name[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.card-form__group[_ngcontent-%COMP%] {\n  padding-top: 16px;\n  border-top: 1px solid var(--color-border);\n}\n.card-form__group-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.card-form__prefilled[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 3px 10px;\n  border-radius: var(--radius-full);\n  font-size: 0.75rem;\n  font-weight: 500;\n  background: var(--color-accent-bg);\n  color: var(--color-accent-hover);\n}\n.card-form__prefilled[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.card-form__chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.card-form__chip[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-full);\n  background: none;\n  font: inherit;\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition:\n    color var(--transition-fast),\n    border-color var(--transition-fast),\n    background var(--transition-fast);\n}\n.card-form__chip[_ngcontent-%COMP%]:hover {\n  color: var(--color-text);\n  border-color: var(--color-accent);\n}\n.card-form__chip--active[_ngcontent-%COMP%] {\n  border-color: var(--color-accent);\n  background: var(--color-accent-bg);\n  color: var(--color-accent-hover);\n}\n.card-form__address[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  margin-top: -4px;\n  padding: 10px 12px;\n  border-radius: var(--radius-sm);\n  background: rgba(255, 255, 255, 0.03);\n  font-size: 0.8125rem;\n  line-height: 1.45;\n  color: var(--color-text);\n}\n.card-form__address[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--color-accent-hover);\n  flex-shrink: 0;\n}\n.card-form__address--muted[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n}\n.card-form__address--muted[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n}\n.card-form__alert[_ngcontent-%COMP%] {\n  margin: 0;\n  align-items: center;\n}\n.card-form__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 4px;\n}\n.card-form__submit[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.card-form__submit[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.card-form__spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_card-form-spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_card-form-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.card-form__secure[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  color: var(--color-text-muted);\n}\n.card-form__secure[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: 1px;\n  color: var(--color-success);\n  flex-shrink: 0;\n}\n@media (max-width: 760px) {\n  .card-form__layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .card-preview[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 320px;\n    margin: 0 auto;\n  }\n}\n@media (max-width: 560px) {\n  .card-form[_ngcontent-%COMP%] {\n    padding: 16px;\n    gap: 16px;\n  }\n  .card-form__summary[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .card-form__summary-amount[_ngcontent-%COMP%] {\n    margin-left: 36px;\n  }\n  .card-form__row--address[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .card-form__field--complement[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n  .card-form__actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .card-form__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .field__input[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media (max-width: 400px) {\n  .card-form__row[_ngcontent-%COMP%]:not(.card-form__row--address) {\n    grid-template-columns: 1fr;\n  }\n  .card-preview__number[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .card-form[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=billing-card-form.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BillingCardFormComponent, { className: "BillingCardFormComponent", filePath: "src\\app\\features\\admin\\pages\\assinatura\\billing-card-form.component.ts", lineNumber: 680 });
})();

// src/app/features/admin/pages/assinatura/charge-grid.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function ChargeGridComponent_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 3);
  }
}
function ChargeGridComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, ChargeGridComponent_Conditional_0_For_2_Template, 1, 0, "div", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.skeletons);
  }
}
function ChargeGridComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1, "N\xE3o foi poss\xEDvel carregar as faturas. ");
    \u0275\u0275elementStart(2, "button", 4);
    \u0275\u0275listener("click", function ChargeGridComponent_Conditional_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.retry.emit());
    });
    \u0275\u0275text(3, "Tentar de novo");
    \u0275\u0275elementEnd()();
  }
}
function ChargeGridComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 5);
    \u0275\u0275text(2, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Nenhuma fatura ainda.");
    \u0275\u0275elementEnd()();
  }
}
function ChargeGridComponent_Conditional_3_For_2_Conditional_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const c_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" \u2022\u2022\u2022\u2022 ", c_r3.cardLast4, " ");
  }
}
function ChargeGridComponent_Conditional_3_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275element(1, "app-card-brand-logo", 15);
    \u0275\u0275template(2, ChargeGridComponent_Conditional_3_For_2_Conditional_15_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("brand", c_r3.cardBrand)("width", 24);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r3.cardLast4 ? 2 : -1);
  }
}
function ChargeGridComponent_Conditional_3_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 5);
    \u0275\u0275text(3, "open_in_new");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", c_r3.receiptUrl || c_r3.invoiceUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r3.receiptUrl ? "Ver comprovante" : "Ver fatura", " ");
  }
}
function ChargeGridComponent_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 6)(1, "div", 7)(2, "span", 8)(3, "span", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 9);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 10);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 11)(11, "span", 12)(12, "span", 5);
    \u0275\u0275text(13, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, ChargeGridComponent_Conditional_3_For_2_Conditional_15_Template, 3, 3, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, ChargeGridComponent_Conditional_3_For_2_Conditional_16_Template, 4, 2, "a", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-tone", ctx_r0.tone(c_r3));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r3.kind === "SUBSCRIPTION" ? "workspace_premium" : "percent");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.kindLabel(c_r3), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.statusLabel(c_r3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.amountLabel(c_r3.value));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.dateLabel(c_r3.paidAt || c_r3.createdAt), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r3.cardBrand || c_r3.cardLast4 ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r3.receiptUrl || c_r3.invoiceUrl ? 16 : -1);
  }
}
function ChargeGridComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 0);
    \u0275\u0275repeaterCreate(1, ChargeGridComponent_Conditional_3_For_2_Template, 17, 8, "li", 6, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.charges);
  }
}
var ChargeGridComponent = class _ChargeGridComponent {
  charges = [];
  loading = false;
  error = false;
  retry = new EventEmitter();
  skeletons = [1, 2, 3];
  currencyFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
  dateFormatter = new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium" });
  kindLabel(charge) {
    return charge.kind === "SUBSCRIPTION" ? "Mensalidade" : "Taxas da semana";
  }
  statusLabel(charge) {
    if (charge.paid) {
      return "Paga";
    }
    switch (charge.status) {
      case "PENDING":
      case "AWAITING_RISK_ANALYSIS":
        return "Processando";
      case "OVERDUE":
        return "Recusada";
      case "REFUNDED":
      case "REFUND_REQUESTED":
        return "Estornada";
      default:
        return charge.status;
    }
  }
  // Cor do card: paga (verde), processando (amarelo), recusada (vermelho), estornada (neutro).
  tone(charge) {
    if (charge.paid) {
      return "success";
    }
    switch (charge.status) {
      case "PENDING":
      case "AWAITING_RISK_ANALYSIS":
        return "warning";
      case "OVERDUE":
        return "danger";
      default:
        return "muted";
    }
  }
  amountLabel(value) {
    return value != null ? this.currencyFormatter.format(value) : "\u2014";
  }
  dateLabel(value) {
    const parsed = parseApiDate(value ?? null);
    return parsed ? this.dateFormatter.format(parsed) : "\u2014";
  }
  static \u0275fac = function ChargeGridComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChargeGridComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChargeGridComponent, selectors: [["app-charge-grid"]], inputs: { charges: "charges", loading: "loading", error: "error" }, outputs: { retry: "retry" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 1, consts: [[1, "charge-grid"], [1, "field__hint"], [1, "charges-empty"], ["aria-hidden", "true", 1, "charge", "charge--skeleton"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], ["aria-hidden", "true", 1, "material-icons"], [1, "charge"], [1, "charge__top"], [1, "charge__kind"], [1, "charge__status"], [1, "charge__value"], [1, "charge__meta"], [1, "charge__date"], [1, "charge__card"], ["target", "_blank", "rel", "noopener", 1, "charge__link", 3, "href"], [3, "brand", "width"]], template: function ChargeGridComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ChargeGridComponent_Conditional_0_Template, 3, 0, "div", 0)(1, ChargeGridComponent_Conditional_1_Template, 4, 0, "p", 1)(2, ChargeGridComponent_Conditional_2_Template, 5, 0, "div", 2)(3, ChargeGridComponent_Conditional_3_Template, 3, 0, "ul", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.loading ? 0 : ctx.error ? 1 : ctx.charges.length === 0 ? 2 : 3);
    }
  }, dependencies: [CardBrandLogoComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 0.85rem;\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.charge-grid[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 12px;\n}\n.charge[_ngcontent-%COMP%] {\n  --tone: var(--color-text-muted);\n  --tone-bg: rgba(255, 255, 255, 0.06);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  min-width: 0;\n  padding: 14px;\n  border: 1px solid var(--color-border);\n  border-left: 3px solid var(--tone);\n  border-radius: var(--radius-sm);\n  background: var(--color-bg-elevated);\n}\n.charge[data-tone=success][_ngcontent-%COMP%] {\n  --tone: var(--color-success);\n  --tone-bg: var(--color-success-bg);\n}\n.charge[data-tone=warning][_ngcontent-%COMP%] {\n  --tone: #d6a44f;\n  --tone-bg: rgba(214, 164, 79, 0.14);\n}\n.charge[data-tone=danger][_ngcontent-%COMP%] {\n  --tone: #ef4444;\n  --tone-bg: rgba(239, 68, 68, 0.14);\n}\n.charge--skeleton[_ngcontent-%COMP%] {\n  height: 132px;\n  border-left-width: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.03) 25%,\n      rgba(255, 255, 255, 0.07) 50%,\n      rgba(255, 255, 255, 0.03) 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s ease-in-out infinite;\n}\n.charge__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.charge__kind[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  min-width: 0;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.charge__kind[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--color-text-muted);\n}\n.charge__status[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 2px 8px;\n  border-radius: var(--radius-full);\n  font-size: 0.6875rem;\n  font-weight: 600;\n  background: var(--tone-bg);\n  color: var(--tone);\n}\n.charge__value[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.charge__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 6px 10px;\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.charge__date[_ngcontent-%COMP%], \n.charge__card[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  white-space: nowrap;\n}\n.charge__date[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.charge__card[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.charge__link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: auto;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--color-accent-hover);\n  text-decoration: none;\n}\n.charge__link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.charge__link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.charges-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 24px 12px;\n  border: 1px dashed var(--color-border-strong);\n  border-radius: var(--radius-sm);\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n}\n.charges-empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 28px;\n  opacity: 0.6;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: -200% 0;\n  }\n}\n@media (max-width: 640px) {\n  .charge-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 8px;\n  }\n  .charge[_ngcontent-%COMP%] {\n    padding: 12px;\n    gap: 8px;\n  }\n  .charge__top[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 6px;\n  }\n  .charge__value[_ngcontent-%COMP%] {\n    font-size: 1.0625rem;\n  }\n  .charge__meta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n@media (max-width: 360px) {\n  .charge-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .charge--skeleton[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=charge-grid.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChargeGridComponent, { className: "ChargeGridComponent", filePath: "src\\app\\features\\admin\\pages\\assinatura\\charge-grid.component.ts", lineNumber: 16 });
})();

// src/app/features/admin/pages/assinatura/movement-grid.component.ts
function MovementGridComponent_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 3);
  }
}
function MovementGridComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, MovementGridComponent_Conditional_0_For_2_Template, 1, 0, "div", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.skeletons);
  }
}
function MovementGridComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1, "N\xE3o foi poss\xEDvel carregar as movimenta\xE7\xF5es. ");
    \u0275\u0275elementStart(2, "button", 4);
    \u0275\u0275listener("click", function MovementGridComponent_Conditional_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.retry.emit());
    });
    \u0275\u0275text(3, "Tentar de novo");
    \u0275\u0275elementEnd()();
  }
}
function MovementGridComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 5);
    \u0275\u0275text(2, "swap_vert");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Nenhuma movimenta\xE7\xE3o ainda.");
    \u0275\u0275elementEnd()();
  }
}
function MovementGridComponent_Conditional_3_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("title", m_r3.description);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r3.description);
  }
}
function MovementGridComponent_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 8)(1, "div", 9)(2, "span", 10)(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 14);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, MovementGridComponent_Conditional_3_For_2_Conditional_11_Template, 2, 2, "span", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("movement--in", ctx_r0.isIncoming(m_r3.type));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.icon(m_r3.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.dateLabel(m_r3.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.isIncoming(m_r3.type) ? "+" : "\u2212", " ", ctx_r0.amountLabel(m_r3.amount), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.label(m_r3.type));
    \u0275\u0275advance();
    \u0275\u0275conditional(m_r3.description ? 11 : -1);
  }
}
function MovementGridComponent_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 7)(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17)(4, "button", 18);
    \u0275\u0275listener("click", function MovementGridComponent_Conditional_3_Conditional_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goTo(ctx_r0.page - 1));
    });
    \u0275\u0275elementStart(5, "span", 5);
    \u0275\u0275text(6, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 19);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 20);
    \u0275\u0275listener("click", function MovementGridComponent_Conditional_3_Conditional_3_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goTo(ctx_r0.page + 1));
    });
    \u0275\u0275elementStart(10, "span", 5);
    \u0275\u0275text(11, "chevron_right");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4("", ctx_r0.totalElements, " movimenta\xE7", ctx_r0.totalElements === 1 ? "\xE3o" : "\xF5es", " \xB7 P\xE1gina ", ctx_r0.page + 1, " de ", ctx_r0.totalPages, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.page === 0 || ctx_r0.loading);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r0.page + 1, " / ", ctx_r0.totalPages, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.page >= ctx_r0.totalPages - 1 || ctx_r0.loading);
  }
}
function MovementGridComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 0);
    \u0275\u0275repeaterCreate(1, MovementGridComponent_Conditional_3_For_2_Template, 12, 8, "li", 6, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, MovementGridComponent_Conditional_3_Conditional_3_Template, 12, 8, "nav", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("movement-grid--loading", ctx_r0.loading);
    \u0275\u0275attribute("aria-busy", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.movements);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.totalPages > 1 ? 3 : -1);
  }
}
var MovementGridComponent = class _MovementGridComponent {
  movements = [];
  loading = false;
  error = false;
  page = 0;
  totalPages = 0;
  totalElements = 0;
  pageChange = new EventEmitter();
  retry = new EventEmitter();
  skeletons = [1, 2, 3, 4];
  currencyFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
  dateFormatter = new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium" });
  static LABELS = {
    SUBSCRIPTION_CREDIT: "Cr\xE9dito concedido",
    FEE_CREDIT_CONSUMPTION: "Cr\xE9dito usado em taxa",
    FEE_CREDIT_CONSUMPTION_REVERSAL: "Cr\xE9dito devolvido",
    CREDIT_EXPIRATION: "Saldo transferido"
  };
  static ICONS = {
    SUBSCRIPTION_CREDIT: "add_card",
    FEE_CREDIT_CONSUMPTION: "receipt",
    FEE_CREDIT_CONSUMPTION_REVERSAL: "undo",
    CREDIT_EXPIRATION: "swap_horiz"
  };
  label(type) {
    return _MovementGridComponent.LABELS[type] ?? type;
  }
  icon(type) {
    return _MovementGridComponent.ICONS[type] ?? "swap_horiz";
  }
  // Entra crédito na concessão / devolução; sai no consumo / transferência para o período novo.
  isIncoming(type) {
    return type === "SUBSCRIPTION_CREDIT" || type === "FEE_CREDIT_CONSUMPTION_REVERSAL";
  }
  amountLabel(value) {
    return value != null ? this.currencyFormatter.format(value) : "\u2014";
  }
  dateLabel(value) {
    const parsed = parseApiDate(value ?? null);
    return parsed ? this.dateFormatter.format(parsed) : "\u2014";
  }
  goTo(page) {
    if (page < 0 || page >= this.totalPages || page === this.page || this.loading) {
      return;
    }
    this.pageChange.emit(page);
  }
  static \u0275fac = function MovementGridComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MovementGridComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MovementGridComponent, selectors: [["app-movement-grid"]], inputs: { movements: "movements", loading: "loading", error: "error", page: "page", totalPages: "totalPages", totalElements: "totalElements" }, outputs: { pageChange: "pageChange", retry: "retry" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 1, consts: [[1, "movement-grid"], [1, "field__hint"], [1, "movements-empty"], ["aria-hidden", "true", 1, "movement", "movement--skeleton"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], ["aria-hidden", "true", 1, "material-icons"], [1, "movement", 3, "movement--in"], ["aria-label", "Pagina\xE7\xE3o das movimenta\xE7\xF5es", 1, "pager"], [1, "movement"], [1, "movement__top"], ["aria-hidden", "true", 1, "movement__icon"], [1, "material-icons"], [1, "movement__date"], [1, "movement__value"], [1, "movement__label"], [1, "movement__detail"], [1, "pager__info"], [1, "pager__controls"], ["type", "button", "aria-label", "P\xE1gina anterior", 1, "pager__btn", 3, "click", "disabled"], ["aria-live", "polite", 1, "pager__current"], ["type", "button", "aria-label", "Pr\xF3xima p\xE1gina", 1, "pager__btn", 3, "click", "disabled"]], template: function MovementGridComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, MovementGridComponent_Conditional_0_Template, 3, 0, "div", 0)(1, MovementGridComponent_Conditional_1_Template, 4, 0, "p", 1)(2, MovementGridComponent_Conditional_2_Template, 5, 0, "div", 2)(3, MovementGridComponent_Conditional_3_Template, 4, 4);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.loading && ctx.movements.length === 0 ? 0 : ctx.error ? 1 : ctx.movements.length === 0 ? 2 : 3);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 0.85rem;\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.movement-grid[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 12px;\n  transition: opacity var(--transition-fast);\n}\n.movement-grid--loading[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.movement[_ngcontent-%COMP%] {\n  --tone: var(--color-text-muted);\n  --tone-bg: rgba(255, 255, 255, 0.06);\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n  padding: 14px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  background: var(--color-bg-elevated);\n}\n.movement--in[_ngcontent-%COMP%] {\n  --tone: var(--color-success);\n  --tone-bg: var(--color-success-bg);\n}\n.movement--skeleton[_ngcontent-%COMP%] {\n  height: 112px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.03) 25%,\n      rgba(255, 255, 255, 0.07) 50%,\n      rgba(255, 255, 255, 0.03) 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s ease-in-out infinite;\n}\n.movement__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  margin-bottom: 2px;\n}\n.movement__icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: var(--tone-bg);\n  color: var(--tone);\n}\n.movement__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.movement__date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  white-space: nowrap;\n}\n.movement__value[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: var(--tone);\n}\n.movement--in[_ngcontent-%COMP%]   .movement__value[_ngcontent-%COMP%] {\n  color: var(--color-success);\n}\n.movement[_ngcontent-%COMP%]:not(.movement--in)   .movement__value[_ngcontent-%COMP%] {\n  color: var(--color-text);\n}\n.movement__label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.movement__detail[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1.4;\n  color: var(--color-text-muted);\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.movements-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 24px 12px;\n  border: 1px dashed var(--color-border-strong);\n  border-radius: var(--radius-sm);\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n}\n.movements-empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 28px;\n  opacity: 0.6;\n}\n.pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px 16px;\n  margin-top: 14px;\n}\n.pager__info[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.pager__controls[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.pager__current[_ngcontent-%COMP%] {\n  min-width: 52px;\n  text-align: center;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.pager__btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: 1px solid var(--color-border-strong);\n  border-radius: 50%;\n  background: var(--color-bg-elevated);\n  color: var(--color-text);\n  cursor: pointer;\n  transition: opacity var(--transition-fast), border-color var(--transition-fast);\n}\n.pager__btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--color-accent);\n}\n.pager__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: default;\n}\n.pager__btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: -200% 0;\n  }\n}\n@media (min-width: 900px) {\n  .movement-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n}\n@media (max-width: 640px) {\n  .movement-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 8px;\n  }\n  .movement[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .movement__value[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .pager[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .pager__controls[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .pager__btn[_ngcontent-%COMP%] {\n    width: 44px;\n    height: 44px;\n  }\n}\n@media (max-width: 360px) {\n  .movement-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .movement--skeleton[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=movement-grid.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MovementGridComponent, { className: "MovementGridComponent", filePath: "src\\app\\features\\admin\\pages\\assinatura\\movement-grid.component.ts", lineNumber: 12 });
})();

// src/app/features/admin/pages/assinatura/assinatura.component.ts
var _c0 = ["planTrack"];
var _forTrack03 = ($index, $item) => $item.upToTables;
function AssinaturaComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementStart(2, "div", 8);
    \u0275\u0275element(3, "div", 9)(4, "div", 9)(5, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 10);
    \u0275\u0275elementEnd();
  }
}
function AssinaturaComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 11);
    \u0275\u0275text(2, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " A assinatura da Comanda \xDAnica s\xF3 pode ser gerenciada pelo propriet\xE1rio ou por um administrador do estabelecimento. Pe\xE7a a um respons\xE1vel para regularizar. ");
    \u0275\u0275elementEnd();
  }
}
function AssinaturaComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 11);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "N\xE3o foi poss\xEDvel carregar a assinatura.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 12);
    \u0275\u0275listener("click", function AssinaturaComponent_Conditional_7_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.load());
    });
    \u0275\u0275text(6, "Tentar novamente");
    \u0275\u0275elementEnd()();
  }
}
function AssinaturaComponent_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 11);
    \u0275\u0275text(2, "block");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, " O per\xEDodo gr\xE1tis permite at\xE9 ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " e seu estabelecimento tem ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, ". Assine para continuar usando a Comanda \xDAnica. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", (tmp_2_0 = ctx_r1.status()) == null ? null : tmp_2_0.courtesyTableLimit, " mesas");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r1.status()) == null ? null : tmp_3_0.tableCount);
  }
}
function AssinaturaComponent_Conditional_8_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Faltam ");
    \u0275\u0275elementStart(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.courtesyDaysLeft(), " dia(s)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r1.dateLabel((tmp_4_0 = ctx_r1.status()) == null ? null : tmp_4_0.currentPeriodEnd), "). ");
  }
}
function AssinaturaComponent_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 11);
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275template(5, AssinaturaComponent_Conditional_8_Conditional_1_Conditional_5_Template, 4, 2);
    \u0275\u0275text(6, " Assine para n\xE3o perder o acesso. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Voc\xEA est\xE1 no per\xEDodo gr\xE1tis (at\xE9 ", (tmp_2_0 = ctx_r1.status()) == null ? null : tmp_2_0.courtesyTableLimit, " mesas). ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.courtesyDaysLeft() !== null ? 5 : -1);
  }
}
function AssinaturaComponent_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 11);
    \u0275\u0275text(2, "warning_amber");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, " O pagamento da renova\xE7\xE3o n\xE3o foi aprovado no cart\xE3o salvo. Atualize o cart\xE3o de cobran\xE7a para manter o acesso ao sistema. ");
    \u0275\u0275elementEnd()();
  }
}
function AssinaturaComponent_Conditional_8_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "/ m\xEAs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 33);
    \u0275\u0275text(7, "Cobran\xE7a mensal com renova\xE7\xE3o autom\xE1tica.");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Plano \xB7 ", ctx_r1.tableUsageLabel(), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.contractedMonthlyLabel(), " ");
  }
}
function AssinaturaComponent_Conditional_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "Assinatura Comanda \xDAnica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Escolha o plano ideal para ", ctx_r1.companyName(), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Seu estabelecimento tem ", ctx_r1.tableCountLabel(), " cadastradas hoje \u2014 escolha abaixo o plano com a quantidade de mesas que voc\xEA quer contratar. ");
  }
}
function AssinaturaComponent_Conditional_8_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "/ m\xEAs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 33);
    \u0275\u0275text(7, "Cobran\xE7a mensal com renova\xE7\xE3o autom\xE1tica.");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Plano \xB7 baseado em ", ctx_r1.tableCountLabel(), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.planMonthlyLabel(), " ");
  }
}
function AssinaturaComponent_Conditional_8_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dl", 18)(1, "div")(2, "dt");
    \u0275\u0275text(3, "In\xEDcio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "dt");
    \u0275\u0275text(8, "Per\xEDodo vigente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "dd");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "dt");
    \u0275\u0275text(13, "Pr\xF3xima cobran\xE7a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "dd");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "dt");
    \u0275\u0275text(18, "Renova\xE7\xE3o autom\xE1tica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "dd");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.dateLabel((tmp_2_0 = ctx_r1.status()) == null ? null : tmp_2_0.startDate));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.dateLabel((tmp_3_0 = ctx_r1.status()) == null ? null : tmp_3_0.currentPeriodStart), " \u2014 ", ctx_r1.dateLabel((tmp_3_0 = ctx_r1.status()) == null ? null : tmp_3_0.currentPeriodEnd), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((tmp_4_0 = ctx_r1.status()) == null ? null : tmp_4_0.cancelAtPeriodEnd) ? "N\xE3o renova (cancelada para o fim do per\xEDodo)" : ctx_r1.dateLabel((tmp_4_0 = ctx_r1.status()) == null ? null : tmp_4_0.currentPeriodEnd));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((tmp_5_0 = ctx_r1.status()) == null ? null : tmp_5_0.autoRenew) ? "Sim" : "N\xE3o");
  }
}
function AssinaturaComponent_Conditional_8_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 35)(2, "span", 11);
    \u0275\u0275text(3, "upgrade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 36);
    \u0275\u0275text(6, "Seu plano n\xE3o cobre mais o n\xFAmero de mesas atual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 37);
    \u0275\u0275text(8, " Contratado: ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "button", 38);
    \u0275\u0275listener("click", function AssinaturaComponent_Conditional_8_Conditional_13_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changePlan());
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", ctx_r1.contractedMonthlyLabel(), "/m\xEAs");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 Valor para ", ctx_r1.tableCountLabel(), ": ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.planMonthlyLabel(), "/m\xEAs");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isChangingPlan());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isChangingPlanTo("sync") ? "Atualizando\u2026" : "Atualizar plano", " ");
  }
}
function AssinaturaComponent_Conditional_8_Conditional_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 43);
    \u0275\u0275text(1, "Reative sua assinatura");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 44);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" A renova\xE7\xE3o est\xE1 cancelada \u2014 seu acesso segue at\xE9 ", ctx_r1.dateLabel((tmp_4_0 = ctx_r1.status()) == null ? null : tmp_4_0.currentPeriodEnd), ". Para continuar depois disso, escolha um plano: a 1\xAA mensalidade \xE9 cobrada na hora no cart\xE3o salvo e a renova\xE7\xE3o mensal volta a valer. ");
  }
}
function AssinaturaComponent_Conditional_8_Conditional_14_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 43);
    \u0275\u0275text(1, "Escolha seu plano");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 44);
    \u0275\u0275text(3, " Ao trocar, a 1\xAA mensalidade do novo plano \xE9 cobrada na hora no cart\xE3o salvo, a assinatura atual \xE9 encerrada e o cr\xE9dito restante dela passa para o novo plano. O downgrade s\xF3 \xE9 poss\xEDvel se as mesas cadastradas couberem no plano menor. ");
    \u0275\u0275elementEnd();
  }
}
function AssinaturaComponent_Conditional_8_Conditional_14_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 43);
    \u0275\u0275text(1, "Escolha a quantidade de mesas do seu plano");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 44);
    \u0275\u0275text(3, " O valor mensal muda conforme a faixa de mesas. D\xE1 para ajustar depois, a qualquer momento, nesta mesma tela. ");
    \u0275\u0275elementEnd();
  }
}
function AssinaturaComponent_Conditional_8_Conditional_14_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "button", 45);
    \u0275\u0275listener("click", function AssinaturaComponent_Conditional_8_Conditional_14_Conditional_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.scrollToPlan(ctx_r1.activePlanIndex() - 1));
    });
    \u0275\u0275elementStart(2, "span", 46);
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 45);
    \u0275\u0275listener("click", function AssinaturaComponent_Conditional_8_Conditional_14_Conditional_6_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.scrollToPlan(ctx_r1.activePlanIndex() + 1));
    });
    \u0275\u0275elementStart(5, "span", 46);
    \u0275\u0275text(6, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.activePlanIndex() === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.activePlanIndex() >= ctx_r1.planCount() - 1);
  }
}
function AssinaturaComponent_Conditional_8_Conditional_14_For_10_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50)(1, "span", 11);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Plano atual ");
    \u0275\u0275elementEnd();
  }
}
function AssinaturaComponent_Conditional_8_Conditional_14_For_10_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1, "Voc\xEA est\xE1 neste plano.");
    \u0275\u0275elementEnd();
  }
}
function AssinaturaComponent_Conditional_8_Conditional_14_For_10_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1, "Voc\xEA tem mais mesas do que este plano comporta");
    \u0275\u0275elementEnd();
  }
}
function AssinaturaComponent_Conditional_8_Conditional_14_For_10_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 57)(4, "button", 38);
    \u0275\u0275listener("click", function AssinaturaComponent_Conditional_8_Conditional_14_For_10_Conditional_0_Conditional_13_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.confirmPlanChange());
    });
    \u0275\u0275text(5, " Confirmar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 58);
    \u0275\u0275listener("click", function AssinaturaComponent_Conditional_8_Conditional_14_For_10_Conditional_0_Conditional_13_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.cancelPlanChange());
    });
    \u0275\u0275text(7, "Cancelar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.renewing() ? "Confirmar a troca?" : "Reativar com este plano?", " A mensalidade ", ctx_r1.renewing() ? "do novo plano " : "", "ser\xE1 cobrada agora. ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isChangingPlan() || ctx_r1.isSubscribing());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isChangingPlan() || ctx_r1.isSubscribing());
  }
}
function AssinaturaComponent_Conditional_8_Conditional_14_For_10_Conditional_0_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Trocando\u2026 ");
  }
}
function AssinaturaComponent_Conditional_8_Conditional_14_For_10_Conditional_0_Conditional_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Reativando\u2026 ");
  }
}
function AssinaturaComponent_Conditional_8_Conditional_14_For_10_Conditional_0_Conditional_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.renewing() ? "Mudar para este plano" : "Reativar com este plano", " ");
  }
}
function AssinaturaComponent_Conditional_8_Conditional_14_For_10_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function AssinaturaComponent_Conditional_8_Conditional_14_For_10_Conditional_0_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const plan_r8 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.requestPlanChange(plan_r8.upToTables));
    });
    \u0275\u0275template(1, AssinaturaComponent_Conditional_8_Conditional_14_For_10_Conditional_0_Conditional_14_Conditional_1_Template, 1, 0)(2, AssinaturaComponent_Conditional_8_Conditional_14_For_10_Conditional_0_Conditional_14_Conditional_2_Template, 1, 0)(3, AssinaturaComponent_Conditional_8_Conditional_14_For_10_Conditional_0_Conditional_14_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r8 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("btn--primary", !ctx_r1.renewing() && plan_r8.current)("btn--ghost", ctx_r1.renewing() || !plan_r8.current);
    \u0275\u0275property("disabled", ctx_r1.isChangingPlan() || ctx_r1.isSubscribing() || ctx_r1.cardFormOpen());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isChangingPlanTo("plan-" + plan_r8.upToTables) ? 1 : ctx_r1.isSubscribingTo("plan-" + plan_r8.upToTables) ? 2 : 3);
  }
}
function AssinaturaComponent_Conditional_8_Conditional_14_For_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275template(1, AssinaturaComponent_Conditional_8_Conditional_14_For_10_Conditional_0_Conditional_1_Template, 4, 0, "span", 50);
    \u0275\u0275elementStart(2, "span", 51)(3, "span", 11);
    \u0275\u0275text(4, "table_restaurant");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 52);
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "/ m\xEAs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 53);
    \u0275\u0275template(11, AssinaturaComponent_Conditional_8_Conditional_14_For_10_Conditional_0_Conditional_11_Template, 2, 0, "span", 54)(12, AssinaturaComponent_Conditional_8_Conditional_14_For_10_Conditional_0_Conditional_12_Template, 2, 0, "span", 54)(13, AssinaturaComponent_Conditional_8_Conditional_14_For_10_Conditional_0_Conditional_13_Template, 8, 4, "div", 55)(14, AssinaturaComponent_Conditional_8_Conditional_14_For_10_Conditional_0_Conditional_14_Template, 4, 6, "button", 56);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const plan_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("plan-option--current", plan_r8.current)("plan-option--blocked", !plan_r8.allowed && !plan_r8.current);
    \u0275\u0275advance();
    \u0275\u0275conditional(plan_r8.current ? 1 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" At\xE9 ", plan_r8.upToTables, " mesas ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", plan_r8.current && ctx_r1.renewing() ? ctx_r1.contractedMonthlyLabel() : ctx_r1.planCardMonthlyLabel(plan_r8.monthlyAmount), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(plan_r8.current && ctx_r1.renewing() ? 11 : !plan_r8.allowed ? 12 : ctx_r1.pendingPlan() === plan_r8.upToTables ? 13 : 14);
  }
}
function AssinaturaComponent_Conditional_8_Conditional_14_For_10_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60)(1, "span", 11);
    \u0275\u0275text(2, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Sua faixa hoje ");
    \u0275\u0275elementEnd();
  }
}
function AssinaturaComponent_Conditional_8_Conditional_14_For_10_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1, "Voc\xEA tem mais mesas do que este plano comporta");
    \u0275\u0275elementEnd();
  }
}
function AssinaturaComponent_Conditional_8_Conditional_14_For_10_Conditional_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function AssinaturaComponent_Conditional_8_Conditional_14_For_10_Conditional_1_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const plan_r8 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.subscribe(plan_r8.upToTables));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r8 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("btn--primary", plan_r8.upToTables === ctx_r1.recommendedUpToTables())("btn--ghost", plan_r8.upToTables !== ctx_r1.recommendedUpToTables());
    \u0275\u0275property("disabled", ctx_r1.isSubscribing() || ctx_r1.cardFormOpen());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSubscribingTo("plan-" + plan_r8.upToTables) ? "Assinando\u2026" : "Assinar este plano", " ");
  }
}
function AssinaturaComponent_Conditional_8_Conditional_14_For_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275template(1, AssinaturaComponent_Conditional_8_Conditional_14_For_10_Conditional_1_Conditional_1_Template, 4, 0, "span", 60);
    \u0275\u0275elementStart(2, "span", 51)(3, "span", 11);
    \u0275\u0275text(4, "table_restaurant");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 52);
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "/ m\xEAs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 53);
    \u0275\u0275template(11, AssinaturaComponent_Conditional_8_Conditional_14_For_10_Conditional_1_Conditional_11_Template, 2, 0, "span", 54)(12, AssinaturaComponent_Conditional_8_Conditional_14_For_10_Conditional_1_Conditional_12_Template, 2, 6, "button", 56);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const plan_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("plan-option--recommended", plan_r8.upToTables === ctx_r1.recommendedUpToTables())("plan-option--blocked", !plan_r8.allowed);
    \u0275\u0275advance();
    \u0275\u0275conditional(plan_r8.upToTables === ctx_r1.recommendedUpToTables() ? 1 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" At\xE9 ", plan_r8.upToTables, " mesas ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.planCardMonthlyLabel(plan_r8.monthlyAmount), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!plan_r8.allowed ? 11 : 12);
  }
}
function AssinaturaComponent_Conditional_8_Conditional_14_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AssinaturaComponent_Conditional_8_Conditional_14_For_10_Conditional_0_Template, 15, 8, "div", 47)(1, AssinaturaComponent_Conditional_8_Conditional_14_For_10_Conditional_1_Template, 13, 8, "div", 48);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.mode() === "active" ? 0 : 1);
  }
}
function AssinaturaComponent_Conditional_8_Conditional_14_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function AssinaturaComponent_Conditional_8_Conditional_14_Conditional_11_For_2_Template_button_click_0_listener() {
      const \u0275$index_328_r11 = \u0275\u0275restoreView(_r10).$index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.scrollToPlan(\u0275$index_328_r11));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r12 = ctx.$implicit;
    const \u0275$index_328_r11 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("plan-carousel__dot--active", ctx_r1.activePlanIndex() === \u0275$index_328_r11);
    \u0275\u0275attribute("aria-selected", ctx_r1.activePlanIndex() === \u0275$index_328_r11)("aria-label", "Plano at\xE9 " + plan_r12.upToTables + " mesas");
  }
}
function AssinaturaComponent_Conditional_8_Conditional_14_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275repeaterCreate(1, AssinaturaComponent_Conditional_8_Conditional_14_Conditional_11_For_2_Template, 1, 4, "button", 61, _forTrack03);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater((tmp_4_0 = ctx_r1.status()) == null ? null : tmp_4_0.availablePlans);
  }
}
function AssinaturaComponent_Conditional_8_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 39)(2, "div");
    \u0275\u0275template(3, AssinaturaComponent_Conditional_8_Conditional_14_Conditional_3_Template, 4, 1)(4, AssinaturaComponent_Conditional_8_Conditional_14_Conditional_4_Template, 4, 0)(5, AssinaturaComponent_Conditional_8_Conditional_14_Conditional_5_Template, 4, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AssinaturaComponent_Conditional_8_Conditional_14_Conditional_6_Template, 7, 2, "div", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 41, 0);
    \u0275\u0275listener("scroll", function AssinaturaComponent_Conditional_8_Conditional_14_Template_div_scroll_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPlanTrackScroll());
    });
    \u0275\u0275repeaterCreate(9, AssinaturaComponent_Conditional_8_Conditional_14_For_10_Template, 2, 1, null, null, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, AssinaturaComponent_Conditional_8_Conditional_14_Conditional_11_Template, 3, 0, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.mode() === "active" && !ctx_r1.renewing() ? 3 : ctx_r1.mode() === "active" ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.planCount() > 1 ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater((tmp_5_0 = ctx_r1.status()) == null ? null : tmp_5_0.availablePlans);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.planCount() > 1 ? 11 : -1);
  }
}
function AssinaturaComponent_Conditional_8_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "span", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const msg_r13 = ctx;
    \u0275\u0275classProp("form-alert--error", msg_r13.type === "error")("form-alert--success", msg_r13.type === "ok");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r13.type === "ok" ? "check_circle" : "error_outline");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r13.text);
  }
}
function AssinaturaComponent_Conditional_8_Conditional_33_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function AssinaturaComponent_Conditional_8_Conditional_33_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-card-brand-logo", 69);
  }
  if (rf & 2) {
    const pm_r14 = \u0275\u0275nextContext();
    \u0275\u0275property("brand", pm_r14.brand)("width", 48);
  }
}
function AssinaturaComponent_Conditional_8_Conditional_33_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1, "Cart\xE3o atual");
    \u0275\u0275elementEnd();
  }
}
function AssinaturaComponent_Conditional_8_Conditional_33_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275template(1, AssinaturaComponent_Conditional_8_Conditional_33_Conditional_2_Conditional_1_Template, 2, 0, "span", 68)(2, AssinaturaComponent_Conditional_8_Conditional_33_Conditional_2_Conditional_2_Template, 1, 2, "app-card-brand-logo", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 70)(4, "p", 71);
    \u0275\u0275text(5);
    \u0275\u0275template(6, AssinaturaComponent_Conditional_8_Conditional_33_Conditional_2_Conditional_6_Template, 2, 0, "span", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 73);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pm_r14 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.cardJustSaved() ? 1 : 2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.cardLabel(pm_r14), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.cardFormOpen() ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Validade ", ctx_r1.cardExpiryLabel(pm_r14), " \xB7 usado na mensalidade e nas taxas ");
  }
}
function AssinaturaComponent_Conditional_8_Conditional_33_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1, "add_card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 70)(3, "p", 71);
    \u0275\u0275text(4, "Nenhum cart\xE3o de cobran\xE7a cadastrado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 73);
    \u0275\u0275text(6, " Cadastre um cart\xE3o de cr\xE9dito para assinar. Ele tamb\xE9m \xE9 usado na cobran\xE7a semanal das taxas que o cr\xE9dito da assinatura n\xE3o cobrir. ");
    \u0275\u0275elementEnd()();
  }
}
function AssinaturaComponent_Conditional_8_Conditional_33_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 74);
    \u0275\u0275listener("click", function AssinaturaComponent_Conditional_8_Conditional_33_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openCardForm());
    });
    \u0275\u0275elementStart(1, "span", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.isSubscribing());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(((tmp_4_0 = ctx_r1.status()) == null ? null : tmp_4_0.paymentMethod) ? "sync" : "add_card");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_5_0 = ctx_r1.status()) == null ? null : tmp_5_0.paymentMethod) ? "Trocar cart\xE3o" : "Cadastrar cart\xE3o", " ");
  }
}
function AssinaturaComponent_Conditional_8_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65);
    \u0275\u0275template(2, AssinaturaComponent_Conditional_8_Conditional_33_Conditional_2_Template, 9, 4)(3, AssinaturaComponent_Conditional_8_Conditional_33_Conditional_3_Template, 7, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AssinaturaComponent_Conditional_8_Conditional_33_Conditional_4_Template, 4, 3, "button", 66);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("billing-card--saved", ctx_r1.cardJustSaved())("billing-card--empty", !((tmp_3_0 = ctx_r1.status()) == null ? null : tmp_3_0.paymentMethod));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_4_0 = (tmp_4_0 = ctx_r1.status()) == null ? null : tmp_4_0.paymentMethod) ? 2 : 3, tmp_4_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.cardFormOpen() ? 4 : -1);
  }
}
function AssinaturaComponent_Conditional_8_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-billing-card-form", 75);
    \u0275\u0275listener("saved", function AssinaturaComponent_Conditional_8_Conditional_34_Template_app_billing_card_form_saved_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCardSaved($event));
    })("cancel", function AssinaturaComponent_Conditional_8_Conditional_34_Template_app_billing_card_form_cancel_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeCardForm());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("heading", ctx_r1.cardFormHeading())("summary", ctx_r1.cardFormSummary())("submitLabel", ctx_r1.cardFormSubmitLabel());
  }
}
function AssinaturaComponent_Conditional_8_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 11);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.actionError());
  }
}
function AssinaturaComponent_Conditional_8_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 11);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.actionSuccess());
  }
}
function AssinaturaComponent_Conditional_8_Conditional_37_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 79);
    \u0275\u0275listener("click", function AssinaturaComponent_Conditional_8_Conditional_37_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openCardForm());
    });
    \u0275\u0275text(1, " Regularizar pagamento ");
    \u0275\u0275elementEnd();
  }
}
function AssinaturaComponent_Conditional_8_Conditional_37_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 80);
    \u0275\u0275listener("click", function AssinaturaComponent_Conditional_8_Conditional_37_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.subscribe());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.isSubscribing() || ctx_r1.cardFormOpen());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSubscribingTo("default") ? "Assinando\u2026" : "Assinar agora", " ");
  }
}
function AssinaturaComponent_Conditional_8_Conditional_37_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 81);
    \u0275\u0275listener("click", function AssinaturaComponent_Conditional_8_Conditional_37_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.requestCancel());
    });
    \u0275\u0275text(1, "Cancelar renova\xE7\xE3o");
    \u0275\u0275elementEnd();
  }
}
function AssinaturaComponent_Conditional_8_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, AssinaturaComponent_Conditional_8_Conditional_37_Conditional_1_Template, 2, 0, "button", 76)(2, AssinaturaComponent_Conditional_8_Conditional_37_Conditional_2_Template, 2, 2, "button", 77)(3, AssinaturaComponent_Conditional_8_Conditional_37_Conditional_3_Template, 2, 0, "button", 78);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.mode() === "past-due" && !ctx_r1.cardFormOpen() ? 1 : ctx_r1.mode() === "offer" && !ctx_r1.hasPlanPicker() ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_3_0 = ctx_r1.status()) == null ? null : tmp_3_0.cancellable) && !ctx_r1.confirmingCancel() ? 3 : -1);
  }
}
function AssinaturaComponent_Conditional_8_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 11);
    \u0275\u0275text(2, "warning_amber");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 82)(6, "button", 83);
    \u0275\u0275listener("click", function AssinaturaComponent_Conditional_8_Conditional_38_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmCancel());
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 58);
    \u0275\u0275listener("click", function AssinaturaComponent_Conditional_8_Conditional_38_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.abortCancel());
    });
    \u0275\u0275text(9, "Voltar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Cancelar a renova\xE7\xE3o? Nenhuma nova mensalidade ser\xE1 cobrada e o acesso continua at\xE9 ", ctx_r1.dateLabel((tmp_2_0 = ctx_r1.status()) == null ? null : tmp_2_0.currentPeriodEnd), ". ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isCancelling());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isCancelling() ? "Cancelando\u2026" : "Sim, cancelar", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isCancelling());
  }
}
function AssinaturaComponent_Conditional_8_Conditional_41_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2, "Expirado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const credit_r22 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.amountLabel(credit_r22.expired));
  }
}
function AssinaturaComponent_Conditional_8_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 84)(2, "div")(3, "span", 31);
    \u0275\u0275text(4, "Cr\xE9dito da assinatura");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 85);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "dispon\xEDvel");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "span", 86)(10, "span", 11);
    \u0275\u0275text(11, "savings");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Acumulativo ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 87);
    \u0275\u0275element(14, "div", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 33);
    \u0275\u0275text(16, " O cr\xE9dito abate as taxas da Comanda \xDAnica conforme os pagamentos entram. O saldo n\xE3o usado n\xE3o expira: ele acumula e passa para o m\xEAs seguinte a cada renova\xE7\xE3o. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "dl", 89)(18, "div")(19, "dt");
    \u0275\u0275text(20, "Total acumulado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "dd");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div")(24, "dt");
    \u0275\u0275text(25, "J\xE1 usado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "dd");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, AssinaturaComponent_Conditional_8_Conditional_41_Conditional_28_Template, 5, 1, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 90)(30, "p", 91);
    \u0275\u0275text(31, "Movimenta\xE7\xF5es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "app-movement-grid", 92);
    \u0275\u0275listener("pageChange", function AssinaturaComponent_Conditional_8_Conditional_41_Template_app_movement_grid_pageChange_32_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadMovements($event));
    })("retry", function AssinaturaComponent_Conditional_8_Conditional_41_Template_app_movement_grid_retry_32_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadMovements(ctx_r1.movementsPage()));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const credit_r22 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.amountLabel(credit_r22.available), " ");
    \u0275\u0275advance(7);
    \u0275\u0275attribute("aria-valuenow", ctx_r1.creditUsedPercent());
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r1.creditUsedPercent(), "%");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.amountLabel(credit_r22.granted));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.amountLabel(credit_r22.consumed));
    \u0275\u0275advance();
    \u0275\u0275conditional(credit_r22.expired > 0 ? 28 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("movements", ctx_r1.creditMovements())("loading", ctx_r1.isLoadingMovements())("error", ctx_r1.movementsLoadError())("page", ctx_r1.movementsPage())("totalPages", ctx_r1.movementsTotalPages())("totalElements", ctx_r1.movementsTotal());
  }
}
function AssinaturaComponent_Conditional_8_Conditional_42_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 96);
    \u0275\u0275listener("click", function AssinaturaComponent_Conditional_8_Conditional_42_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.loadCharges());
    });
    \u0275\u0275elementStart(1, "span", 11);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd()();
  }
}
function AssinaturaComponent_Conditional_8_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 93)(2, "div")(3, "span", 31);
    \u0275\u0275text(4, "Faturas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 33);
    \u0275\u0275text(6, "Mensalidades e taxas semanais cobradas no cart\xE3o de cobran\xE7a.");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AssinaturaComponent_Conditional_8_Conditional_42_Conditional_7_Template, 3, 0, "button", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "app-charge-grid", 95);
    \u0275\u0275listener("retry", function AssinaturaComponent_Conditional_8_Conditional_42_Template_app_charge_grid_retry_8_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadCharges());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!ctx_r1.isLoadingCharges() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("charges", ctx_r1.charges())("loading", ctx_r1.isLoadingCharges())("error", ctx_r1.chargesLoadError());
  }
}
function AssinaturaComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AssinaturaComponent_Conditional_8_Conditional_0_Template, 11, 2, "div", 6)(1, AssinaturaComponent_Conditional_8_Conditional_1_Template, 7, 2, "div", 5)(2, AssinaturaComponent_Conditional_8_Conditional_2_Template, 5, 0, "div", 6);
    \u0275\u0275elementStart(3, "div", 13)(4, "div", 14)(5, "div", 15);
    \u0275\u0275template(6, AssinaturaComponent_Conditional_8_Conditional_6_Template, 8, 2)(7, AssinaturaComponent_Conditional_8_Conditional_7_Template, 6, 2)(8, AssinaturaComponent_Conditional_8_Conditional_8_Template, 8, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 16);
    \u0275\u0275element(10, "span", 17);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, AssinaturaComponent_Conditional_8_Conditional_12_Template, 21, 5, "dl", 18)(13, AssinaturaComponent_Conditional_8_Conditional_13_Template, 16, 5, "div", 19)(14, AssinaturaComponent_Conditional_8_Conditional_14_Template, 12, 3, "div", 20)(15, AssinaturaComponent_Conditional_8_Conditional_15_Template, 5, 6, "div", 21);
    \u0275\u0275elementStart(16, "ul", 22)(17, "li")(18, "span", 11);
    \u0275\u0275text(19, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " Comandas, mesas, card\xE1pio e pedidos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "li")(22, "span", 11);
    \u0275\u0275text(23, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " Dashboard e relat\xF3rios financeiros");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "li")(26, "span", 11);
    \u0275\u0275text(27, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " Renova\xE7\xE3o autom\xE1tica todo m\xEAs no cart\xE3o salvo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "li")(30, "span", 11);
    \u0275\u0275text(31, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " Cart\xE3o tokenizado com seguran\xE7a pela Asaas");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, AssinaturaComponent_Conditional_8_Conditional_33_Template, 5, 6, "div", 23)(34, AssinaturaComponent_Conditional_8_Conditional_34_Template, 1, 3, "app-billing-card-form", 24)(35, AssinaturaComponent_Conditional_8_Conditional_35_Template, 5, 1, "div", 6)(36, AssinaturaComponent_Conditional_8_Conditional_36_Template, 5, 1, "div", 25)(37, AssinaturaComponent_Conditional_8_Conditional_37_Template, 4, 2, "div", 26)(38, AssinaturaComponent_Conditional_8_Conditional_38_Template, 10, 4, "div", 27);
    \u0275\u0275elementStart(39, "p", 28);
    \u0275\u0275text(40, ' A mensalidade \xE9 cobrada automaticamente no cart\xE3o de cobran\xE7a salvo, com renova\xE7\xE3o mensal, e pode ser cancelada a qualquer momento em "Cancelar renova\xE7\xE3o". As taxas da Comanda \xDAnica que o cr\xE9dito da assinatura n\xE3o cobrir tamb\xE9m s\xE3o lan\xE7adas nesse cart\xE3o, semanalmente. ');
    \u0275\u0275elementEnd()();
    \u0275\u0275template(41, AssinaturaComponent_Conditional_8_Conditional_41_Template, 33, 13, "div", 29)(42, AssinaturaComponent_Conditional_8_Conditional_42_Template, 9, 4, "div", 30);
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_8_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_15_0;
    let tmp_17_0;
    let tmp_18_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r1.status()) == null ? null : tmp_1_0.courtesyTableLimitExceeded) ? 0 : ((tmp_1_0 = ctx_r1.status()) == null ? null : tmp_1_0.courtesy) ? 1 : ctx_r1.mode() === "past-due" ? 2 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.mode() === "active" ? 6 : ctx_r1.hasPlanPicker() ? 7 : 8);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("badge--success", ((tmp_3_0 = ctx_r1.status()) == null ? null : tmp_3_0.active) && !((tmp_3_0 = ctx_r1.status()) == null ? null : tmp_3_0.courtesy))("badge--warning", ((tmp_4_0 = ctx_r1.status()) == null ? null : tmp_4_0.courtesy) || ((tmp_4_0 = ctx_r1.status()) == null ? null : tmp_4_0.status) === "PAST_DUE")("badge--muted", !((tmp_5_0 = ctx_r1.status()) == null ? null : tmp_5_0.active));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.statusLabel(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.mode() === "active" ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.mode() === "active" && ((tmp_8_0 = ctx_r1.status()) == null ? null : tmp_8_0.planOutdated) ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasPlanPicker() && (ctx_r1.mode() === "active" || ctx_r1.mode() === "offer") ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_10_0 = ctx_r1.changePlanMessage()) ? 15 : -1, tmp_10_0);
    \u0275\u0275advance(18);
    \u0275\u0275conditional(((tmp_11_0 = ctx_r1.status()) == null ? null : tmp_11_0.paymentMethod) || !ctx_r1.cardFormOpen() ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.cardFormOpen() ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.actionError() ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.actionSuccess() ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.mode() === "past-due" && !ctx_r1.cardFormOpen() || ctx_r1.mode() === "offer" && !ctx_r1.hasPlanPicker() || ((tmp_15_0 = ctx_r1.status()) == null ? null : tmp_15_0.cancellable) && !ctx_r1.confirmingCancel() ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.confirmingCancel() ? 38 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_17_0 = (tmp_17_0 = ctx_r1.status()) == null ? null : tmp_17_0.credit) ? 41 : -1, tmp_17_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_18_0 = ctx_r1.status()) == null ? null : tmp_18_0.exists) ? 42 : -1);
  }
}
var MOVEMENTS_PAGE_SIZE = 10;
var AssinaturaComponent = class _AssinaturaComponent {
  subscriptionService = inject(SubscriptionService);
  authService = inject(AuthService);
  currencyFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
  dateFormatter = new Intl.DateTimeFormat("pt-BR", { dateStyle: "long" });
  isLoading = signal(true);
  loadError = signal(false);
  // Funcionário sem perfil OWNER/ADMIN — não pode gerenciar a assinatura (o backend responde 403).
  noPermission = signal(false);
  // Cancelamento da renovação: pedindo confirmação / requisição em voo.
  confirmingCancel = signal(false);
  isCancelling = signal(false);
  // Qual botão de assinar está em voo — 'default' (Assinar agora, sem seletor de faixa) ou
  // 'plan-<upToTables>' (um card do seletor). Guardar QUAL botão evita que todos mudem de rótulo
  // juntos quando só um foi clicado.
  subscribingTarget = signal(null);
  actionError = signal(null);
  actionSuccess = signal(null);
  // Formulário de cadastro/troca do cartão de cobrança aberto.
  cardFormOpen = signal(false);
  // Destaca o cartão de cobrança por alguns segundos logo depois de salvar.
  cardJustSaved = signal(false);
  cardJustSavedTimer = null;
  // Assinatura pedida antes de haver cartão: depois de salvar o cartão, assina direto.
  // undefined = nenhuma; null = faixa da quantidade de mesas atual; número = faixa escolhida.
  pendingSubscription = signal(void 0);
  // Botão de troca de plano em voo: 'sync' (botão "Atualizar plano" do
  // banner planOutdated) ou 'plan-<upToTables>' (confirmação de uma faixa do seletor).
  changingPlanTarget = signal(null);
  changePlanMessage = signal(null);
  // Faixa (upToTables) aguardando confirmação no seletor de plano; null = nenhuma.
  pendingPlan = signal(null);
  status = signal(null);
  companyName = computed(() => this.authService.selectedCompany()?.companyName ?? "seu estabelecimento");
  // Faturas na Asaas (mensalidades e taxas semanais).
  charges = signal([]);
  isLoadingCharges = signal(false);
  chargesLoadError = signal(false);
  creditMovements = signal([]);
  isLoadingMovements = signal(false);
  movementsLoadError = signal(false);
  // Paginação das movimentações (vem da API — PagedResponse).
  movementsPage = signal(0);
  movementsTotalPages = signal(0);
  movementsTotal = signal(0);
  mode = computed(() => {
    const s = this.status();
    if (!s || !s.exists) {
      return "offer";
    }
    if (s.status === "PAST_DUE") {
      return "past-due";
    }
    if (s.status === "ACTIVE" && !s.courtesy) {
      return "active";
    }
    return "offer";
  });
  // Há faixas pra montar o seletor de plano (grid de plan-option) — tanto no modo "active"
  // (upgrade/downgrade) quanto no "offer" (primeira assinatura). Vazio só em setup incomum sem
  // nenhuma faixa cadastrada, onde a tela cai pro fluxo antigo de plano único.
  hasPlanPicker = computed(() => (this.status()?.availablePlans?.length ?? 0) > 0);
  // Faixa em destaque no seletor da tela de oferta — a menor que já comporta as mesas cadastradas
  // hoje (mesma regra do backend em SubscriptionPricingServiceImpl#resolve: a lista vem ordenada
  // por upToTables crescente). null quando nenhuma faixa comporta (mesas além da maior faixa).
  recommendedUpToTables = computed(() => {
    const plans = this.status()?.availablePlans ?? [];
    return plans.find((p) => p.allowed)?.upToTables ?? null;
  });
  courtesyDaysLeft = computed(() => {
    const s = this.status();
    if (!s?.courtesy || !s.currentPeriodEnd) {
      return null;
    }
    const end = parseApiDate(s.currentPeriodEnd);
    if (!end) {
      return null;
    }
    return Math.max(0, Math.ceil((end.getTime() - Date.now()) / 864e5));
  });
  // --- carrossel de planos (mobile) -----------------------------------
  // No desktop as faixas ficam num grid; no celular o mesmo container vira um carrossel com
  // scroll-snap (ver .plan-picker__grid no scss). Os pontos/setas acompanham o card centralizado.
  planCount = computed(() => this.status()?.availablePlans?.length ?? 0);
  activePlanIndex = signal(0);
  planTrack = null;
  // Quando o seletor aparece, já centraliza o plano atual (ou a faixa recomendada) no carrossel.
  set planTrackRef(ref) {
    const el = ref?.nativeElement ?? null;
    const isNew = el !== null && el !== this.planTrack;
    this.planTrack = el;
    if (isNew) {
      setTimeout(() => this.scrollToPlan(this.highlightedPlanIndex(), false));
    }
  }
  highlightedPlanIndex() {
    const plans = this.status()?.availablePlans ?? [];
    const current = plans.findIndex((p) => p.current);
    if (current >= 0) {
      return current;
    }
    const recommended = plans.findIndex((p) => p.upToTables === this.recommendedUpToTables());
    return Math.max(0, recommended);
  }
  scrollToPlan(index, smooth = true) {
    const track = this.planTrack;
    const item = track?.children.item(index);
    if (!track || !item) {
      return;
    }
    this.activePlanIndex.set(index);
    if (track.scrollWidth <= track.clientWidth) {
      return;
    }
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({
      left: item.offsetLeft - (track.clientWidth - item.offsetWidth) / 2,
      behavior: smooth && !reduceMotion ? "smooth" : "auto"
    });
  }
  onPlanTrackScroll() {
    const track = this.planTrack;
    if (!track) {
      return;
    }
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let closestDistance = Number.POSITIVE_INFINITY;
    Array.from(track.children).forEach((child, i) => {
      const el = child;
      const distance = Math.abs(el.offsetLeft + el.offsetWidth / 2 - center);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = i;
      }
    });
    if (closest !== this.activePlanIndex()) {
      this.activePlanIndex.set(closest);
    }
  }
  // Percentual do crédito do período já consumido — barra do card de crédito.
  creditUsedPercent = computed(() => {
    const credit = this.status()?.credit;
    if (!credit || !credit.granted) {
      return 0;
    }
    return Math.min(100, Math.max(0, Math.round(credit.consumed / credit.granted * 100)));
  });
  constructor() {
    this.load();
  }
  load() {
    const companyId = this.authService.selectedCompany()?.companyId;
    if (!companyId) {
      this.isLoading.set(false);
      this.loadError.set(true);
      return;
    }
    this.isLoading.set(true);
    this.loadError.set(false);
    this.noPermission.set(false);
    this.subscriptionService.refresh(companyId).subscribe({
      next: (status) => {
        this.status.set(status);
        this.isLoading.set(false);
        if (status.credit) {
          this.loadMovements();
        }
        if (status.exists) {
          this.loadCharges();
        }
      },
      error: (error) => {
        this.isLoading.set(false);
        if (error instanceof HttpErrorResponse && error.status === 403) {
          this.noPermission.set(true);
        } else {
          this.loadError.set(true);
        }
      }
    });
  }
  // Sem argumento: assina a faixa da quantidade de mesas cadastrada hoje (botão principal). Com
  // upToTables: assina a faixa escolhida no seletor de plano (modo "offer" — ver plan-picker no
  // template). A mensalidade é cobrada no cartão salvo; sem cartão, abre o cadastro primeiro e
  // assina logo depois de salvar.
  subscribe(upToTables) {
    this.actionError.set(null);
    this.actionSuccess.set(null);
    if (!this.status()?.paymentMethod) {
      this.pendingSubscription.set(upToTables ?? null);
      this.cardFormOpen.set(true);
      return;
    }
    this.doSubscribe(upToTables);
  }
  isSubscribingTo(target) {
    return this.subscribingTarget() === target;
  }
  isSubscribing = computed(() => this.subscribingTarget() !== null);
  openCardForm() {
    this.actionError.set(null);
    this.actionSuccess.set(null);
    this.pendingSubscription.set(void 0);
    this.cardFormOpen.set(true);
  }
  closeCardForm() {
    this.pendingSubscription.set(void 0);
    this.cardFormOpen.set(false);
  }
  cardFormHeading() {
    if (this.pendingSubscription() !== void 0) {
      return "\xDAltimo passo: cart\xE3o de cobran\xE7a";
    }
    return this.status()?.paymentMethod ? "Trocar cart\xE3o de cobran\xE7a" : "Cadastrar cart\xE3o de cobran\xE7a";
  }
  // Contexto mostrado no topo do formulário: o plano que vai ser assinado logo depois de salvar, ou
  // o aviso de que a cobrança pendente vai ser refeita no cartão novo.
  cardFormSummary = computed(() => {
    const pending = this.pendingSubscription();
    if (pending !== void 0) {
      const plan = pending != null ? this.status()?.availablePlans?.find((p) => p.upToTables === pending) : void 0;
      return {
        title: plan ? `Plano at\xE9 ${plan.upToTables} mesas` : `Plano para ${this.tableCountLabel()}`,
        amount: plan ? this.currencyFormatter.format(plan.monthlyAmount) : this.planMonthlyLabel(),
        note: "A primeira mensalidade \xE9 cobrada assim que o cart\xE3o for salvo. Renova\xE7\xE3o mensal, cancele quando quiser."
      };
    }
    if (this.mode() === "past-due") {
      return {
        title: "Pagamento pendente",
        amount: this.contractedMonthlyLabel(),
        note: "Ao salvar, a cobran\xE7a em aberto \xE9 tentada de novo no cart\xE3o novo."
      };
    }
    return null;
  });
  cardFormSubmitLabel() {
    if (this.pendingSubscription() !== void 0) {
      return "Salvar cart\xE3o e assinar";
    }
    return this.mode() === "past-due" ? "Salvar cart\xE3o e pagar" : "Salvar cart\xE3o";
  }
  onCardSaved(status) {
    this.status.set(status);
    this.cardFormOpen.set(false);
    this.flashSavedCard();
    const pending = this.pendingSubscription();
    this.pendingSubscription.set(void 0);
    if (pending !== void 0) {
      this.doSubscribe(pending ?? void 0);
      return;
    }
    this.actionSuccess.set(status.status === "PAST_DUE" ? "Cart\xE3o salvo. Se o pagamento pendente n\xE3o for aprovado em instantes, confira o cart\xE3o com o banco." : "Cart\xE3o de cobran\xE7a salvo. As pr\xF3ximas cobran\xE7as ser\xE3o lan\xE7adas nele.");
  }
  flashSavedCard() {
    if (this.cardJustSavedTimer) {
      clearTimeout(this.cardJustSavedTimer);
    }
    this.cardJustSaved.set(true);
    this.cardJustSavedTimer = setTimeout(() => this.cardJustSaved.set(false), 2400);
  }
  doSubscribe(upToTables) {
    const target = upToTables != null ? `plan-${upToTables}` : "default";
    this.subscribingTarget.set(target);
    this.subscriptionService.subscribe(upToTables).subscribe({
      next: (status) => {
        this.status.set(status);
        this.subscribingTarget.set(null);
        this.loadCharges();
        if (status.status === "ACTIVE" && !status.courtesy) {
          this.actionSuccess.set("Assinatura confirmada! A mensalidade foi cobrada no cart\xE3o salvo.");
          if (status.credit) {
            this.loadMovements();
          }
          return;
        }
        this.actionSuccess.set("Assinatura criada. Aguardando a confirma\xE7\xE3o do pagamento pela operadora do cart\xE3o\u2026");
        this.waitForActivation();
      },
      error: (error) => {
        this.subscribingTarget.set(null);
        const body = error instanceof HttpErrorResponse ? error.error : void 0;
        this.actionError.set(body?.mensagem ?? "N\xE3o foi poss\xEDvel concluir a assinatura agora. Tente novamente em instantes.");
      }
    });
  }
  // Pagamento ainda em análise na Asaas: a ativação chega pelo webhook — re-busca o estado algumas
  // vezes até a assinatura aparecer ativa.
  waitForActivation(attempt = 0) {
    const companyId = this.authService.selectedCompany()?.companyId;
    const s = this.status();
    if (!companyId || attempt >= 6 || s?.status === "ACTIVE" && !s.courtesy && s.credit) {
      return;
    }
    setTimeout(() => {
      this.subscriptionService.refresh(companyId).subscribe({
        next: (status) => {
          this.status.set(status);
          if (status.credit) {
            this.loadMovements();
          }
          this.loadCharges();
          this.waitForActivation(attempt + 1);
        },
        error: () => this.waitForActivation(attempt + 1)
      });
    }, 2e3);
  }
  // Sem argumento volta para a 1ª página — usado depois de assinar/trocar plano, quando entram
  // movimentações novas (a API ordena da mais recente para a mais antiga).
  loadMovements(page = 0) {
    this.isLoadingMovements.set(true);
    this.movementsLoadError.set(false);
    this.subscriptionService.getCreditMovements(page, MOVEMENTS_PAGE_SIZE).subscribe({
      next: (result) => {
        this.creditMovements.set(result.content);
        this.movementsPage.set(result.page);
        this.movementsTotalPages.set(result.totalPages);
        this.movementsTotal.set(result.totalElements);
        this.isLoadingMovements.set(false);
      },
      error: () => {
        this.isLoadingMovements.set(false);
        this.movementsLoadError.set(true);
      }
    });
  }
  loadCharges() {
    this.isLoadingCharges.set(true);
    this.chargesLoadError.set(false);
    this.subscriptionService.getCharges(0, 10).subscribe({
      next: (page) => {
        this.charges.set(page.content);
        this.isLoadingCharges.set(false);
      },
      error: () => {
        this.isLoadingCharges.set(false);
        this.chargesLoadError.set(true);
      }
    });
  }
  // Botão "Atualizar plano" do banner planOutdated — sincroniza ao valor da faixa das mesas atuais.
  changePlan() {
    this.applyPlanChange(void 0, "sync");
  }
  // Seletor de plano: pede confirmação antes de trocar (a mensalidade do plano novo é cobrada na hora). Só instancia
  // pendingPlan — sem chamada de rede ainda, então não mexe em changingPlanTarget.
  requestPlanChange(upToTables) {
    this.changePlanMessage.set(null);
    this.pendingPlan.set(upToTables);
  }
  cancelPlanChange() {
    this.pendingPlan.set(null);
  }
  confirmPlanChange() {
    const target = this.pendingPlan();
    if (target == null) {
      return;
    }
    if (this.renewing()) {
      this.applyPlanChange(target, `plan-${target}`);
      return;
    }
    this.pendingPlan.set(null);
    this.changePlanMessage.set(null);
    this.subscribe(target);
  }
  // Assinatura paga e ainda renovando — só nesse estado o backend aceita trocar de plano
  // (mesma regra de SubscriptionServiceImpl#changePlan, espelhada em "cancellable").
  renewing = computed(() => this.mode() === "active" && !!this.status()?.cancellable);
  // true enquanto QUALQUER troca de plano está em voo — usado só pra desabilitar os botões que não
  // deveriam iniciar uma segunda troca em paralelo (sem mudar o rótulo deles).
  isChangingPlan = computed(() => this.changingPlanTarget() !== null);
  // Se ESTE botão específico (o banner de sync, ou a confirmação de uma faixa do seletor) é quem
  // está trocando — usado pro rótulo "Atualizando…"/"Trocando…" aparecer só onde foi clicado.
  isChangingPlanTo(target) {
    return this.changingPlanTarget() === target;
  }
  applyPlanChange(upToTables, target) {
    this.changingPlanTarget.set(target);
    this.changePlanMessage.set(null);
    this.subscriptionService.changePlan(upToTables).subscribe({
      next: (status) => {
        this.status.set(status);
        this.changingPlanTarget.set(null);
        this.pendingPlan.set(null);
        this.changePlanMessage.set({ type: "ok", text: "Plano atualizado. A mensalidade do novo plano foi cobrada no cart\xE3o e o cr\xE9dito foi renovado." });
      },
      error: (error) => {
        this.changingPlanTarget.set(null);
        this.pendingPlan.set(null);
        const body = error instanceof HttpErrorResponse ? error.error : void 0;
        const msg = body?.mensagem ?? (error instanceof HttpErrorResponse && error.status === 422 ? "O plano j\xE1 corresponde \xE0 quantidade de mesas atual." : "N\xE3o foi poss\xEDvel atualizar o plano agora. Tente novamente em instantes.");
        this.changePlanMessage.set({ type: "error", text: msg });
      }
    });
  }
  // Cancelar a renovação: pede confirmação antes (o acesso segue até o fim do período pago).
  requestCancel() {
    this.actionError.set(null);
    this.actionSuccess.set(null);
    this.confirmingCancel.set(true);
  }
  abortCancel() {
    this.confirmingCancel.set(false);
  }
  confirmCancel() {
    this.isCancelling.set(true);
    this.subscriptionService.cancelRenewal().subscribe({
      next: (status) => {
        this.status.set(status);
        this.isCancelling.set(false);
        this.confirmingCancel.set(false);
        this.actionSuccess.set(`Renova\xE7\xE3o cancelada. Seu acesso continua at\xE9 ${this.dateLabel(status.currentPeriodEnd)}.`);
      },
      error: (error) => {
        this.isCancelling.set(false);
        this.confirmingCancel.set(false);
        const body = error instanceof HttpErrorResponse ? error.error : void 0;
        this.actionError.set(body?.mensagem ?? "N\xE3o foi poss\xEDvel cancelar a renova\xE7\xE3o agora. Tente novamente em instantes.");
      }
    });
  }
  cardLabel(pm) {
    const key = normalizeCardBrand(pm.brand);
    const brand = key ? CARD_BRAND_LABELS[key] : pm.brand ?? "Cart\xE3o";
    return pm.last4 ? `${brand} \u2022\u2022\u2022\u2022 ${pm.last4}` : brand;
  }
  cardExpiryLabel(pm) {
    if (pm.expMonth == null || pm.expYear == null) {
      return "\u2014";
    }
    return `${String(pm.expMonth).padStart(2, "0")}/${pm.expYear}`;
  }
  planMonthlyLabel() {
    const s = this.status();
    const amount = s?.planMonthlyAmount ?? s?.monthlyAmount ?? null;
    return amount != null && amount > 0 ? this.currencyFormatter.format(amount) : "\u2014";
  }
  // Valor que o estabelecimento paga hoje na assinatura contratada. Reajuste de faixa/valor
  // negociado não altera quem já assina — o vigente (planMonthlyAmount) só vale para nova
  // contratação ou troca de plano.
  contractedMonthlyLabel() {
    const s = this.status();
    const amount = s?.monthlyAmount ?? s?.amount ?? s?.planMonthlyAmount ?? null;
    return amount != null && amount > 0 ? this.currencyFormatter.format(amount) : "\u2014";
  }
  planAnnualLabel() {
    const s = this.status();
    const amount = s?.planAmount ?? s?.amount ?? null;
    return amount != null && amount > 0 ? this.currencyFormatter.format(amount) : "\u2014";
  }
  tableCountLabel() {
    const n = this.status()?.tableCount ?? null;
    return n != null ? `${n} mesa${n === 1 ? "" : "s"}` : "\u2014";
  }
  // "8 de 10 mesas" quando há limite; "8 mesas" quando o plano é ilimitado.
  tableUsageLabel() {
    const s = this.status();
    const used = s?.tableCount ?? null;
    if (used == null) {
      return "\u2014";
    }
    const limit = s?.contractedTableLimit ?? null;
    return limit != null ? `${used} de ${limit} mesas` : `${used} mesa${used === 1 ? "" : "s"}`;
  }
  planCardMonthlyLabel(monthlyAmount) {
    return this.currencyFormatter.format(monthlyAmount);
  }
  amountLabel(value) {
    return value != null ? this.currencyFormatter.format(value) : "\u2014";
  }
  dateLabel(value) {
    const parsed = parseApiDate(value ?? null);
    return parsed ? this.dateFormatter.format(parsed) : "\u2014";
  }
  statusLabel() {
    switch (this.status()?.status) {
      case "ACTIVE":
        return this.status()?.courtesy ? "Cortesia" : "Ativa";
      case "PAST_DUE":
        return "Pagamento pendente";
      case "PENDING":
        return "Aguardando pagamento";
      case "EXPIRED":
        return "Expirada";
      case "CANCELLED":
        return "Cancelada";
      default:
        return "Sem assinatura";
    }
  }
  static \u0275fac = function AssinaturaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssinaturaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssinaturaComponent, selectors: [["app-admin-assinatura"]], viewQuery: function AssinaturaComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.planTrackRef = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 2, consts: [["planTrack", ""], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["aria-busy", "true", "aria-label", "Carregando assinatura", 1, "sub-skeleton"], ["role", "status", 1, "form-alert", "form-alert--info"], ["role", "alert", 1, "form-alert", "form-alert--error"], [1, "sub-skeleton__block", "sub-skeleton__block--head"], [1, "sub-skeleton__row"], [1, "sub-skeleton__block"], [1, "sub-skeleton__block", "sub-skeleton__block--line"], ["aria-hidden", "true", 1, "material-icons"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], [1, "card", "sub-card"], [1, "sub-card__head"], [1, "sub-card__head-main"], [1, "badge"], ["aria-hidden", "true", 1, "badge__dot"], [1, "sub-card__details"], [1, "plan-upgrade"], [1, "plan-picker"], [1, "form-alert", 3, "form-alert--error", "form-alert--success"], [1, "sub-card__benefits"], [1, "billing-card", 3, "billing-card--saved", "billing-card--empty"], [3, "heading", "summary", "submitLabel"], ["role", "status", 1, "form-alert", "form-alert--success"], [1, "sub-card__actions"], ["role", "alert", 1, "form-alert", "form-alert--error", "cancel-confirm"], [1, "sub-card__fineprint"], [1, "card", "credit-card"], [1, "card", "charges-card"], [1, "sub-card__eyebrow"], [1, "sub-card__price"], [1, "sub-card__price-note"], [1, "sub-card__lead"], [1, "plan-upgrade__info"], [1, "plan-upgrade__title"], [1, "plan-upgrade__detail"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", "btn--sm", 3, "click", "disabled"], [1, "plan-picker__head"], ["aria-hidden", "true", 1, "plan-carousel__nav"], [1, "plan-picker__grid", 3, "scroll"], ["role", "tablist", "aria-label", "Planos", 1, "plan-carousel__dots"], [1, "plan-picker__title"], [1, "plan-picker__hint"], ["type", "button", "tabindex", "-1", 1, "plan-carousel__arrow", 3, "click", "disabled"], [1, "material-icons"], [1, "plan-option", 3, "plan-option--current", "plan-option--blocked"], [1, "plan-option", 3, "plan-option--recommended", "plan-option--blocked"], [1, "plan-option"], [1, "plan-option__badge"], [1, "plan-option__tables"], [1, "plan-option__price"], [1, "plan-option__foot"], [1, "plan-option__note"], [1, "plan-option__confirm"], ["type", "button", "appRipple", "", 1, "btn", "btn--sm", "plan-option__cta", 3, "btn--primary", "btn--ghost", "disabled"], [1, "plan-option__confirm-actions"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click", "disabled"], ["type", "button", "appRipple", "", 1, "btn", "btn--sm", "plan-option__cta", 3, "click", "disabled"], [1, "plan-option__badge", "plan-option__badge--accent"], ["type", "button", "role", "tab", 1, "plan-carousel__dot", 3, "plan-carousel__dot--active"], ["type", "button", "role", "tab", 1, "plan-carousel__dot", 3, "click"], [1, "form-alert"], [1, "billing-card"], [1, "billing-card__info"], ["type", "button", "appRipple", "", 1, "btn", "btn--ghost", "btn--sm", "billing-card__btn", 3, "disabled"], [1, "billing-card__logo"], ["aria-hidden", "true", 1, "material-icons", "billing-card__icon"], [3, "brand", "width"], [1, "billing-card__text"], [1, "billing-card__title"], [1, "billing-card__tag"], [1, "billing-card__detail"], ["type", "button", "appRipple", "", 1, "btn", "btn--ghost", "btn--sm", "billing-card__btn", 3, "click", "disabled"], [3, "saved", "cancel", "heading", "summary", "submitLabel"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", 3, "disabled"], ["type", "button", 1, "btn", "btn--ghost", "sub-card__cancel"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", 3, "click"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn--ghost", "sub-card__cancel", 3, "click"], [1, "cancel-confirm__actions"], ["type", "button", 1, "btn", "btn--primary", "btn--sm", 3, "click", "disabled"], [1, "credit-card__head"], [1, "credit-card__available"], [1, "credit-card__expiry"], ["role", "meter", "aria-label", "Cr\xE9dito usado no per\xEDodo", "aria-valuemin", "0", "aria-valuemax", "100", 1, "credit-meter"], [1, "credit-meter__bar"], [1, "credit-stats"], [1, "credit-movements"], [1, "section-title"], [3, "pageChange", "retry", "movements", "loading", "error", "page", "totalPages", "totalElements"], [1, "charges-card__head"], ["type", "button", "aria-label", "Atualizar faturas", 1, "charges-card__refresh"], [3, "retry", "charges", "loading", "error"], ["type", "button", "aria-label", "Atualizar faturas", 1, "charges-card__refresh", 3, "click"]], template: function AssinaturaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "h1", 2);
      \u0275\u0275text(2, "Assinatura Comanda \xDAnica");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(5, AssinaturaComponent_Conditional_5_Template, 7, 0, "div", 4)(6, AssinaturaComponent_Conditional_6_Template, 4, 0, "div", 5)(7, AssinaturaComponent_Conditional_7_Template, 7, 0, "div", 6)(8, AssinaturaComponent_Conditional_8_Template, 43, 21);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" A Comanda \xDAnica funciona com uma assinatura mensal. Gerencie o plano de ", ctx.companyName(), " aqui. ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 5 : ctx.noPermission() ? 6 : ctx.loadError() ? 7 : 8);
    }
  }, dependencies: [RippleDirective, BillingCardFormComponent, CardBrandLogoComponent, ChargeGridComponent, MovementGridComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  max-width: 920px;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n  max-width: 60ch;\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.section-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-text);\n  font-size: 0.9375rem;\n  margin-bottom: 10px;\n}\n.sub-skeleton[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 28px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  background: var(--color-bg-card);\n}\n.sub-skeleton__row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 12px;\n}\n.sub-skeleton__block[_ngcontent-%COMP%] {\n  height: 120px;\n  border-radius: var(--radius-sm);\n  background:\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.04) 25%,\n      rgba(255, 255, 255, 0.09) 50%,\n      rgba(255, 255, 255, 0.04) 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s ease-in-out infinite;\n}\n.sub-skeleton__block--head[_ngcontent-%COMP%] {\n  height: 64px;\n  width: 55%;\n}\n.sub-skeleton__block--line[_ngcontent-%COMP%] {\n  height: 56px;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: -200% 0;\n  }\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 12px;\n  border-radius: var(--radius-full);\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n  white-space: nowrap;\n  background: rgba(255, 255, 255, 0.08);\n  color: var(--color-text-muted);\n}\n.badge__dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n}\n.badge--success[_ngcontent-%COMP%] {\n  background: var(--color-success-bg);\n  color: var(--color-success);\n}\n.badge--warning[_ngcontent-%COMP%] {\n  background: rgba(214, 164, 79, 0.14);\n  color: #d6a44f;\n}\n.badge--muted[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text-muted);\n}\n.sub-card[_ngcontent-%COMP%] {\n  padding: 28px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  min-width: 0;\n}\n.sub-card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n}\n.sub-card__head-main[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.sub-card__eyebrow[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--color-text-muted);\n}\n.sub-card__lead[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.sub-card__price[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 2rem;\n  font-weight: 700;\n  line-height: 1.15;\n  color: var(--color-text);\n}\n.sub-card__price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 500;\n  color: var(--color-text-muted);\n}\n.sub-card__price-note[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  color: var(--color-text-muted);\n}\n.sub-card__benefits[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px 20px;\n  padding: 16px 0 0;\n  margin: 0;\n  list-style: none;\n  border-top: 1px solid var(--color-border);\n}\n.sub-card__benefits[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  font-size: 0.875rem;\n  line-height: 1.4;\n  color: var(--color-gray);\n}\n.sub-card__benefits[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--color-success);\n  flex-shrink: 0;\n}\n.sub-card__details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n  margin: 0;\n}\n.sub-card__details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  background: rgba(255, 255, 255, 0.02);\n  min-width: 0;\n}\n.sub-card__details[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--color-text-muted);\n}\n.sub-card__details[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 0.875rem;\n  font-weight: 500;\n  line-height: 1.4;\n  color: var(--color-text);\n}\n.sub-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.sub-card__cancel[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n}\n.sub-card__fineprint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  line-height: 1.6;\n}\n.plan-upgrade[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  padding: 14px 16px;\n  border: 1px solid rgba(59, 130, 246, 0.35);\n  border-radius: var(--radius-sm);\n  background: var(--color-accent-bg);\n}\n.plan-upgrade__info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.plan-upgrade__info[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--color-accent-hover);\n  flex-shrink: 0;\n}\n.plan-upgrade__title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-text);\n  font-size: 0.9375rem;\n}\n.plan-upgrade__detail[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 0.85rem;\n}\n.plan-picker[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.plan-picker__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 16px;\n}\n.plan-picker__title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-text);\n  font-size: 0.9375rem;\n}\n.plan-picker__hint[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n  line-height: 1.5;\n}\n.plan-picker__grid[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 14px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));\n  gap: 12px;\n}\n.plan-carousel__nav[_ngcontent-%COMP%], \n.plan-carousel__dots[_ngcontent-%COMP%] {\n  display: none;\n}\n.plan-carousel__nav[_ngcontent-%COMP%] {\n  gap: 6px;\n  flex-shrink: 0;\n}\n.plan-carousel__arrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border: 1px solid var(--color-border-strong);\n  border-radius: 50%;\n  background: var(--color-bg-elevated);\n  color: var(--color-text);\n  cursor: pointer;\n  transition: opacity var(--transition-fast), border-color var(--transition-fast);\n}\n.plan-carousel__arrow[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--color-accent);\n}\n.plan-carousel__arrow[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: default;\n}\n.plan-carousel__arrow[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.plan-carousel__dots[_ngcontent-%COMP%] {\n  justify-content: center;\n  gap: 6px;\n  margin-top: 12px;\n}\n.plan-carousel__dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  padding: 0;\n  border: none;\n  border-radius: var(--radius-full);\n  background: var(--color-border-strong);\n  cursor: pointer;\n  transition: width var(--transition-base), background var(--transition-base);\n}\n.plan-carousel__dot--active[_ngcontent-%COMP%] {\n  width: 22px;\n  background: var(--color-accent);\n}\n.plan-option[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 18px 16px 16px;\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-md);\n  background: var(--color-bg-elevated);\n  transition:\n    border-color var(--transition-fast),\n    transform var(--transition-fast),\n    box-shadow var(--transition-fast);\n}\n.plan-option[_ngcontent-%COMP%]:hover:not(.plan-option--blocked) {\n  border-color: rgba(59, 130, 246, 0.5);\n}\n.plan-option--current[_ngcontent-%COMP%] {\n  border-color: var(--color-success);\n  box-shadow: 0 0 0 1px var(--color-success) inset;\n}\n.plan-option--current[_ngcontent-%COMP%]:hover:not(.plan-option--blocked) {\n  border-color: var(--color-success);\n}\n.plan-option--recommended[_ngcontent-%COMP%] {\n  border-color: var(--color-accent);\n  background: var(--color-accent-bg);\n  box-shadow: var(--shadow-glow);\n}\n.plan-option--blocked[_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n.plan-option__tables[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 600;\n  color: var(--color-text);\n  font-size: 0.9375rem;\n}\n.plan-option__tables[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--color-text-muted);\n}\n.plan-option__price[_ngcontent-%COMP%] {\n  font-size: 1.375rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.plan-option__price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--color-text-muted);\n}\n.plan-option__foot[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding-top: 4px;\n}\n.plan-option__cta[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.plan-option__badge[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 10px;\n  border-radius: var(--radius-full);\n  font-size: 0.7rem;\n  font-weight: 600;\n  background: var(--color-success-bg);\n  color: var(--color-success);\n}\n.plan-option__badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.plan-option__badge--accent[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.2);\n  color: var(--color-accent-hover);\n}\n.plan-option__note[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  line-height: 1.4;\n}\n.plan-option__confirm[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.plan-option__confirm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.plan-option__confirm-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.form-alert[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-alert[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.sub-card[_ngcontent-%COMP%]   .form-alert[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.cancel-confirm[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.cancel-confirm__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-left: auto;\n}\n.billing-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 16px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  background: rgba(255, 255, 255, 0.02);\n  transition: border-color var(--transition-base), background var(--transition-base);\n}\n.billing-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  vertical-align: -3px;\n  margin-right: 4px;\n}\n.billing-card__info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  min-width: 0;\n  flex: 1 1 auto;\n}\n.billing-card__logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  flex-shrink: 0;\n}\n.billing-card__icon[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  font-size: 28px;\n  flex-shrink: 0;\n}\n.billing-card__text[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.billing-card__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.billing-card__tag[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  border-radius: var(--radius-full);\n  font-size: 0.7rem;\n  font-weight: 600;\n  background: rgba(255, 255, 255, 0.08);\n  color: var(--color-text-muted);\n}\n.billing-card__detail[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  font-size: 0.8125rem;\n  line-height: 1.45;\n  color: var(--color-text-muted);\n}\n.billing-card__btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  white-space: nowrap;\n}\n.billing-card--empty[_ngcontent-%COMP%] {\n  border-style: dashed;\n  border-color: var(--color-border-strong);\n}\n.billing-card--saved[_ngcontent-%COMP%] {\n  border-color: rgba(34, 197, 94, 0.5);\n  background: var(--color-success-bg);\n}\n.billing-card--saved[_ngcontent-%COMP%]   .billing-card__icon[_ngcontent-%COMP%] {\n  color: var(--color-success);\n}\n.credit-card[_ngcontent-%COMP%], \n.charges-card[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 28px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  min-width: 0;\n}\n.credit-card__head[_ngcontent-%COMP%], \n.charges-card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.credit-card__available[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.credit-card__available[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--color-text-muted);\n}\n.credit-card__expiry[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n  border-radius: var(--radius-full);\n  font-size: 0.75rem;\n  font-weight: 500;\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text-muted);\n}\n.credit-card__expiry[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.credit-meter[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: var(--radius-full);\n  background: var(--color-success-bg);\n  overflow: hidden;\n}\n.credit-meter__bar[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: inherit;\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-accent),\n      var(--color-accent-hover));\n  transition: width var(--transition-slow);\n}\n.credit-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 12px;\n  margin: 0;\n}\n.credit-stats[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  background: rgba(255, 255, 255, 0.02);\n}\n.credit-stats[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--color-text-muted);\n}\n.credit-stats[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.charges-card__refresh[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 6px;\n  border: 1px solid var(--color-border);\n  border-radius: 50%;\n  background: none;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition: color var(--transition-fast), border-color var(--transition-fast);\n}\n.charges-card__refresh[_ngcontent-%COMP%]:hover {\n  color: var(--color-text);\n  border-color: var(--color-border-strong);\n}\n.charges-card__refresh[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n@media (max-width: 860px) {\n  .sub-card__details[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 720px) {\n  .plan-picker__grid[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 12px;\n    overflow-x: auto;\n    scroll-snap-type: x mandatory;\n    scroll-padding-inline: 4px;\n    overscroll-behavior-x: contain;\n    -webkit-overflow-scrolling: touch;\n    scrollbar-width: none;\n    padding: 4px 4px 8px;\n    margin: 10px -4px 0;\n  }\n  .plan-picker__grid[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n  }\n  .plan-option[_ngcontent-%COMP%] {\n    flex: 0 0 78%;\n    max-width: 280px;\n    scroll-snap-align: center;\n  }\n  .plan-carousel__nav[_ngcontent-%COMP%] {\n    display: inline-flex;\n  }\n  .plan-carousel__dots[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n@media (max-width: 640px) {\n  .page-header[_ngcontent-%COMP%] {\n    margin-bottom: 18px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.375rem;\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .sub-card[_ngcontent-%COMP%], \n   .credit-card[_ngcontent-%COMP%], \n   .charges-card[_ngcontent-%COMP%], \n   .sub-skeleton[_ngcontent-%COMP%] {\n    padding: 18px 16px;\n    border-radius: var(--radius-md);\n  }\n  .sub-card[_ngcontent-%COMP%] {\n    gap: 18px;\n  }\n  .credit-card[_ngcontent-%COMP%], \n   .charges-card[_ngcontent-%COMP%] {\n    margin-top: 16px;\n  }\n  .sub-card__head[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    gap: 10px;\n  }\n  .sub-card__price[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .sub-card__lead[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n  .sub-card__benefits[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sub-card__details[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .sub-card__details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n  }\n  .plan-carousel__nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .plan-upgrade[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .billing-card[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .billing-card__btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .sub-card__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n  }\n  .cancel-confirm__actions[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0;\n  }\n  .cancel-confirm__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n@media (max-width: 360px) {\n  .sub-card__details[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .sub-skeleton__block[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=assinatura.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssinaturaComponent, { className: "AssinaturaComponent", filePath: "src\\app\\features\\admin\\pages\\assinatura\\assinatura.component.ts", lineNumber: 34 });
})();
export {
  AssinaturaComponent
};
//# sourceMappingURL=chunk-TFUXCWFL.js.map
