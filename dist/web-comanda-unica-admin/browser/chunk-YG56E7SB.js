import {
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4IFGYJZR.js";

// src/app/features/auth/components/auth-shell/auth-shell.component.ts
var _c0 = ["*"];
function AuthShellComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 15);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r1, " ");
  }
}
function AuthShellComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.eyebrow);
  }
}
function AuthShellComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.subtitle);
  }
}
var AuthShellComponent = class _AuthShellComponent {
  eyebrow = "";
  title;
  subtitle = "";
  year = (/* @__PURE__ */ new Date()).getFullYear();
  highlights = [
    "Sem mensalidade \u2014 pague apenas pelas comandas utilizadas",
    "Usu\xE1rios, mesas e comandas ilimitados",
    "Implanta\xE7\xE3o r\xE1pida, 100% na nuvem"
  ];
  static \u0275fac = function AuthShellComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthShellComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthShellComponent, selectors: [["app-auth-shell"]], inputs: { eyebrow: "eyebrow", title: "title", subtitle: "subtitle" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c0, decls: 32, vars: 4, consts: [[1, "auth"], [1, "auth__branding"], ["aria-hidden", "true", 1, "auth__glow", "auth__glow--accent"], ["aria-hidden", "true", 1, "auth__glow", "auth__glow--success"], ["aria-hidden", "true", 1, "auth__grid"], ["routerLink", "/", "aria-label", "Comanda \xDAnica \u2014 p\xE1gina inicial", 1, "auth__logo"], ["aria-hidden", "true", 1, "auth__logo-mark"], [1, "auth__branding-content"], [1, "auth__highlights"], [1, "auth__branding-footer"], [1, "auth__panel"], [1, "auth__card"], ["routerLink", "/", "aria-label", "Comanda \xDAnica \u2014 p\xE1gina inicial", 1, "auth__mobile-logo"], [1, "eyebrow"], [1, "auth__subtitle"], ["aria-hidden", "true", 1, "material-icons"]], template: function AuthShellComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1);
      \u0275\u0275element(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275elementStart(5, "a", 5);
      \u0275\u0275element(6, "span", 6);
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8, "Comanda");
      \u0275\u0275elementStart(9, "strong");
      \u0275\u0275text(10, "\xDAnica");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 7)(12, "h2");
      \u0275\u0275text(13, "A comanda digital que faz seu restaurante crescer sem custos fixos.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "ul", 8);
      \u0275\u0275repeaterCreate(15, AuthShellComponent_For_16_Template, 4, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "p", 9);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "main", 10)(20, "div", 11)(21, "a", 12);
      \u0275\u0275element(22, "span", 6);
      \u0275\u0275elementStart(23, "span");
      \u0275\u0275text(24, "Comanda");
      \u0275\u0275elementStart(25, "strong");
      \u0275\u0275text(26, "\xDAnica");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(27, AuthShellComponent_Conditional_27_Template, 2, 1, "span", 13);
      \u0275\u0275elementStart(28, "h1");
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275template(30, AuthShellComponent_Conditional_30_Template, 2, 1, "p", 14);
      \u0275\u0275projection(31);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275repeater(ctx.highlights);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("\xA9 ", ctx.year, " Comanda \xDAnica");
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.eyebrow ? 27 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.title);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.subtitle ? 30 : -1);
    }
  }, dependencies: [RouterLink], styles: ["\n\n.auth[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  background: var(--color-bg);\n}\n.auth__branding[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 48px;\n  background: var(--color-primary);\n  border-right: 1px solid var(--color-border);\n}\n.auth__glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(120px);\n  opacity: 0.3;\n}\n.auth__glow--accent[_ngcontent-%COMP%] {\n  width: 480px;\n  height: 480px;\n  background: var(--color-accent);\n  top: -140px;\n  left: -100px;\n}\n.auth__glow--success[_ngcontent-%COMP%] {\n  width: 380px;\n  height: 380px;\n  background: var(--color-success);\n  bottom: -120px;\n  right: -80px;\n  opacity: 0.2;\n}\n.auth__grid[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(var(--color-border) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      var(--color-border) 1px,\n      transparent 1px);\n  background-size: 64px 64px;\n  mask-image:\n    radial-gradient(\n      ellipse 80% 60% at 50% 0%,\n      black 40%,\n      transparent 100%);\n  opacity: 0.4;\n}\n.auth__logo[_ngcontent-%COMP%], \n.auth__mobile-logo[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.auth__logo[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.auth__mobile-logo[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--color-accent-hover);\n  font-weight: 800;\n}\n.auth__logo-mark[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  background: var(--gradient-accent);\n  flex-shrink: 0;\n}\n.auth__branding-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 420px;\n}\n.auth__branding-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  line-height: 1.25;\n  color: var(--color-text);\n}\n.auth__highlights[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.auth__highlights[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  font-size: 0.9375rem;\n  color: var(--color-gray);\n}\n.auth__highlights[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--color-success);\n  font-size: 20px;\n}\n.auth__branding-footer[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.auth__panel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 32px;\n}\n.auth__card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n}\n.auth__card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.auth__mobile-logo[_ngcontent-%COMP%] {\n  display: none;\n  margin-bottom: 24px;\n}\n.auth__subtitle[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 0.9375rem;\n  color: var(--color-gray);\n}\n@media (max-width: 960px) {\n  .auth[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .auth__branding[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .auth__panel[_ngcontent-%COMP%] {\n    padding: 32px 20px;\n    min-height: 100vh;\n  }\n  .auth__mobile-logo[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=auth-shell.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthShellComponent, { className: "AuthShellComponent", filePath: "src\\app\\features\\auth\\components\\auth-shell\\auth-shell.component.ts", lineNumber: 11 });
})();

export {
  AuthShellComponent
};
//# sourceMappingURL=chunk-YG56E7SB.js.map
