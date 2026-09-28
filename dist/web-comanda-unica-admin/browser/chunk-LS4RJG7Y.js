import {
  AuthShellComponent
} from "./chunk-6FERD5GW.js";
import {
  RippleDirective
} from "./chunk-44PTUNAH.js";
import {
  AuthService
} from "./chunk-S5GGO54V.js";
import "./chunk-BIWONMV5.js";
import "./chunk-6XJSFLNG.js";
import "./chunk-IKIQHSDP.js";
import {
  Router
} from "./chunk-4G2LF4K6.js";
import {
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵtextInterpolate
} from "./chunk-SZBF2MTG.js";

// src/app/features/auth/pages/choose-company/choose-company.component.ts
var _forTrack0 = ($index, $item) => $item.companyId;
function ChooseCompanyComponent_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 5);
  }
  if (rf & 2) {
    const company_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", company_r2.logoUrl, \u0275\u0275sanitizeUrl);
  }
}
function ChooseCompanyComponent_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "storefront");
    \u0275\u0275elementEnd();
  }
}
function ChooseCompanyComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 4);
    \u0275\u0275listener("click", function ChooseCompanyComponent_For_3_Template_button_click_1_listener() {
      const company_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.choose(company_r2));
    });
    \u0275\u0275template(2, ChooseCompanyComponent_For_3_Conditional_2_Template, 1, 1, "img", 5)(3, ChooseCompanyComponent_For_3_Conditional_3_Template, 2, 0, "span", 6);
    \u0275\u0275elementStart(4, "span", 7)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 8);
    \u0275\u0275text(10, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const company_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(company_r2.logoUrl ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(company_r2.companyName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(company_r2.profileName);
  }
}
var ChooseCompanyComponent = class _ChooseCompanyComponent {
  authService = inject(AuthService);
  router = inject(Router);
  companies = this.authService.companies;
  constructor() {
    if (!this.authService.shouldChooseCompany()) {
      this.router.navigateByUrl("/painel");
    }
  }
  choose(company) {
    this.authService.selectCompany(company.companyId);
    this.router.navigateByUrl("/painel");
  }
  logout() {
    this.authService.logout();
  }
  static \u0275fac = function ChooseCompanyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChooseCompanyComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChooseCompanyComponent, selectors: [["app-choose-company"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 0, consts: [["eyebrow", "Mais de uma empresa", "title", "Escolha qual empresa acessar", "subtitle", "Sua conta est\xE1 vinculada a mais de uma empresa. Selecione qual delas voc\xEA quer acessar agora \u2014 voc\xEA pode trocar depois pelo menu do painel."], [1, "company-list"], [1, "form-footer"], ["type", "button", 1, "field__link", "field__link--button", 3, "click"], ["type", "button", "appRipple", "", 1, "company-option", 3, "click"], ["alt", "", 1, "company-option__logo", 3, "src"], ["aria-hidden", "true", 1, "company-option__logo", "company-option__logo--placeholder", "material-icons"], [1, "company-option__body"], ["aria-hidden", "true", 1, "material-icons", "company-option__chevron"]], template: function ChooseCompanyComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-auth-shell", 0)(1, "ul", 1);
      \u0275\u0275repeaterCreate(2, ChooseCompanyComponent_For_3_Template, 11, 3, "li", null, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, " N\xE3o \xE9 voc\xEA? ");
      \u0275\u0275elementStart(6, "button", 3);
      \u0275\u0275listener("click", function ChooseCompanyComponent_Template_button_click_6_listener() {
        return ctx.logout();
      });
      \u0275\u0275text(7, "Sair");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.companies());
    }
  }, dependencies: [AuthShellComponent, RippleDirective], styles: ["\n\n.company-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  list-style: none;\n  margin: 8px 0 0;\n  padding: 0;\n}\n.company-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  width: 100%;\n  padding: 14px 16px;\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n  background: var(--color-bg-card);\n  color: var(--color-text);\n  cursor: pointer;\n  text-align: left;\n  transition: border-color var(--transition-fast), background var(--transition-fast);\n}\n.company-option[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-accent);\n  background: var(--color-accent-bg);\n}\n.company-option__logo[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: var(--radius-sm);\n  object-fit: cover;\n}\n.company-option__logo--placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--color-accent-bg);\n  color: var(--color-accent-hover);\n  font-size: 22px;\n}\n.company-option__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.company-option__body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: var(--color-text);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.company-option__body[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.company-option__chevron[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: var(--color-text-muted);\n}\n.field__link--button[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  padding: 0;\n  cursor: pointer;\n  font: inherit;\n}\n/*# sourceMappingURL=choose-company.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChooseCompanyComponent, { className: "ChooseCompanyComponent", filePath: "src\\app\\features\\auth\\pages\\choose-company\\choose-company.component.ts", lineNumber: 19 });
})();
export {
  ChooseCompanyComponent
};
//# sourceMappingURL=chunk-LS4RJG7Y.js.map
