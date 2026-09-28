import {
  toSignal
} from "./chunk-F4FR6QQB.js";
import {
  ActivatedRoute
} from "./chunk-4G2LF4K6.js";
import {
  inject,
  map,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-SZBF2MTG.js";

// src/app/features/admin/pages/placeholder/placeholder.component.ts
var PlaceholderComponent = class _PlaceholderComponent {
  route = inject(ActivatedRoute);
  title = toSignal(this.route.data.pipe(map((data) => data["title"] ?? "Em constru\xE7\xE3o")), {
    initialValue: "Em constru\xE7\xE3o"
  });
  static \u0275fac = function PlaceholderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlaceholderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaceholderComponent, selectors: [["app-admin-placeholder"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 1, consts: [[1, "placeholder"], ["aria-hidden", "true", 1, "material-icons", "placeholder__icon"], [1, "placeholder__title"], [1, "placeholder__subtitle"]], template: function PlaceholderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
      \u0275\u0275text(2, "construction");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "h1", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Este m\xF3dulo est\xE1 em constru\xE7\xE3o e estar\xE1 dispon\xEDvel em breve.");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.title());
    }
  }, styles: ["\n\n.placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  gap: 12px;\n  padding: 80px 24px;\n  color: var(--color-text-muted);\n}\n.placeholder__icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: var(--color-accent-hover);\n}\n.placeholder__title[_ngcontent-%COMP%] {\n  font-size: 1.375rem;\n  color: var(--color-text);\n}\n.placeholder__subtitle[_ngcontent-%COMP%] {\n  max-width: 420px;\n}\n/*# sourceMappingURL=placeholder.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaceholderComponent, { className: "PlaceholderComponent", filePath: "src\\app\\features\\admin\\pages\\placeholder\\placeholder.component.ts", lineNumber: 12 });
})();
export {
  PlaceholderComponent
};
//# sourceMappingURL=chunk-67LWPNLX.js.map
