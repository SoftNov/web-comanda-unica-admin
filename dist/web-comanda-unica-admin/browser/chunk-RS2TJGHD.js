import {
  FooterComponent,
  HeaderComponent
} from "./chunk-HYTJPSMU.js";
import {
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NIMDKY6Z.js";

// src/app/features/legal/components/legal-layout/legal-layout.component.ts
var _c0 = ["*"];
var LegalLayoutComponent = class _LegalLayoutComponent {
  title;
  updatedAt;
  static \u0275fac = function LegalLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LegalLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LegalLayoutComponent, selectors: [["app-legal-layout"]], inputs: { title: "title", updatedAt: "updatedAt" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c0, decls: 14, vars: 2, consts: [["id", "main-content", 1, "legal", "section"], [1, "container", "legal__container"], ["routerLink", "/", 1, "legal__back"], ["aria-hidden", "true", 1, "material-icons"], [1, "legal__updated"], [1, "legal__content"]], template: function LegalLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275element(0, "app-header");
      \u0275\u0275elementStart(1, "main", 0)(2, "div", 1)(3, "a", 2)(4, "span", 3);
      \u0275\u0275text(5, "arrow_back");
      \u0275\u0275elementEnd();
      \u0275\u0275text(6, " Voltar para a p\xE1gina inicial ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h1");
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 4);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "article", 5);
      \u0275\u0275projection(12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(13, "app-footer");
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("\xDAltima atualiza\xE7\xE3o: ", ctx.updatedAt, "");
    }
  }, dependencies: [HeaderComponent, FooterComponent, RouterLink], styles: ["\n\n.legal[_ngcontent-%COMP%] {\n  padding-top: calc(84px + var(--section-padding-y));\n}\n.legal__container[_ngcontent-%COMP%] {\n  max-width: 780px;\n}\n.legal__back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.9375rem;\n  color: var(--color-accent-hover);\n  font-weight: 500;\n}\n.legal__back[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.legal__back[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\nh1[_ngcontent-%COMP%] {\n  margin-top: 28px;\n  font-size: clamp(1.75rem, 3.4vw, 2.5rem);\n  color: var(--color-text);\n}\n.legal__updated[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n.legal__content[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  padding-top: 40px;\n  border-top: 1px solid var(--color-border);\n}\n/*# sourceMappingURL=legal-layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LegalLayoutComponent, { className: "LegalLayoutComponent", filePath: "src\\app\\features\\legal\\components\\legal-layout\\legal-layout.component.ts", lineNumber: 13 });
})();

export {
  LegalLayoutComponent
};
//# sourceMappingURL=chunk-RS2TJGHD.js.map
