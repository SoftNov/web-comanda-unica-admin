import {
  PasswordResetFlowComponent
} from "./chunk-AH2UARVC.js";
import "./chunk-PWBCT4KV.js";
import "./chunk-TG667HJW.js";
import "./chunk-QNTXMNHH.js";
import {
  AuthService
} from "./chunk-TA4FF7VW.js";
import "./chunk-MZ4AGMPU.js";
import {
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-4IFGYJZR.js";

// src/app/features/admin/pages/settings/security/security.component.ts
var SecurityComponent = class _SecurityComponent {
  authService = inject(AuthService);
  email = this.authService.currentUser()?.email ?? "";
  static \u0275fac = function SecurityComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SecurityComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SecurityComponent, selectors: [["app-admin-security"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 2, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "card", "security-card"], ["successMessage", "Senha atualizada com sucesso.", "doneLinkPath", "/painel/configuracoes", "doneLinkLabel", "Voltar para configura\xE7\xF5es", 3, "lockedEmail", "footerLinkPath"]], template: function SecurityComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Redefinir senha");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, "Envie um c\xF3digo de verifica\xE7\xE3o para o seu e-mail e crie uma nova senha de acesso.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3);
      \u0275\u0275element(6, "app-password-reset-flow", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("lockedEmail", ctx.email)("footerLinkPath", null);
    }
  }, dependencies: [PasswordResetFlowComponent], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n}\n.security-card[_ngcontent-%COMP%] {\n  max-width: 480px;\n  padding: 32px;\n}\n/*# sourceMappingURL=security.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SecurityComponent, { className: "SecurityComponent", filePath: "src\\app\\features\\admin\\pages\\settings\\security\\security.component.ts", lineNumber: 12 });
})();
export {
  SecurityComponent
};
//# sourceMappingURL=chunk-RWJWTDXS.js.map
