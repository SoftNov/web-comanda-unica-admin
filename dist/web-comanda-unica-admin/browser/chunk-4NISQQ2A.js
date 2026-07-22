import {
  AuthShellComponent
} from "./chunk-YG56E7SB.js";
import {
  RippleDirective
} from "./chunk-QNTXMNHH.js";
import {
  AccountsService
} from "./chunk-MZ4AGMPU.js";
import {
  ActivatedRoute,
  RouterLink,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4IFGYJZR.js";

// src/app/features/auth/pages/activate-account/activate-account.component.ts
function ActivateAccountComponent_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "span", 2);
    \u0275\u0275elementStart(2, "p", 3);
    \u0275\u0275text(3, "Confirmando seu c\xF3digo de ativa\xE7\xE3o\u2026");
    \u0275\u0275elementEnd()();
  }
}
function ActivateAccountComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 5);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 6);
    \u0275\u0275text(5, " Ir para o login ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage(), " ");
  }
}
function ActivateAccountComponent_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 5);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 8);
    \u0275\u0275text(5, " Voltar para o login ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 9);
    \u0275\u0275text(7, " Precisa de uma nova conta? ");
    \u0275\u0275elementStart(8, "a", 10);
    \u0275\u0275text(9, "Criar conta");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
var ActivateAccountComponent = class _ActivateAccountComponent {
  route = inject(ActivatedRoute);
  accountsService = inject(AccountsService);
  status = signal("loading");
  successMessage = signal("");
  errorTitle = signal("");
  errorMessage = signal("");
  ngOnInit() {
    const token = this.route.snapshot.paramMap.get("token");
    if (!token) {
      this.status.set("error");
      this.errorTitle.set("Link inv\xE1lido");
      this.errorMessage.set("Nenhum c\xF3digo de ativa\xE7\xE3o foi informado. Verifique se voc\xEA abriu o link completo enviado por e-mail.");
      return;
    }
    this.accountsService.activateAccount(token).subscribe({
      next: (response) => {
        this.status.set("success");
        this.successMessage.set(response.message || "Sua conta foi ativada com sucesso.");
      },
      error: (error) => {
        this.status.set("error");
        const body = error.error;
        this.errorTitle.set(body?.titulo || this.fallbackTitle(error.status));
        this.errorMessage.set(body?.mensagem || this.fallbackMessage(error.status));
      }
    });
  }
  fallbackTitle(status) {
    switch (status) {
      case 404:
        return "C\xF3digo n\xE3o encontrado";
      case 410:
        return "C\xF3digo expirado";
      case 422:
        return "C\xF3digo j\xE1 utilizado";
      default:
        return "N\xE3o foi poss\xEDvel ativar sua conta";
    }
  }
  fallbackMessage(status) {
    switch (status) {
      case 404:
        return "O c\xF3digo de ativa\xE7\xE3o informado n\xE3o foi encontrado. Verifique o link enviado por e-mail.";
      case 410:
        return "Este c\xF3digo de ativa\xE7\xE3o expirou. Os links s\xE3o v\xE1lidos por 48 horas ap\xF3s o cadastro.";
      case 422:
        return "Este c\xF3digo de ativa\xE7\xE3o j\xE1 foi utilizado anteriormente.";
      default:
        return "Ocorreu um erro ao tentar ativar sua conta. Tente novamente em instantes ou entre em contato com o suporte.";
    }
  }
  static \u0275fac = function ActivateAccountComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActivateAccountComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActivateAccountComponent, selectors: [["app-activate-account"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 3, consts: [["eyebrow", "Confirma\xE7\xE3o de conta", 3, "title", "subtitle"], [1, "activation-state"], ["aria-hidden", "true", 1, "activation-spinner"], [1, "activation-state__text"], ["role", "status", 1, "form-alert", "form-alert--success"], ["aria-hidden", "true", 1, "material-icons"], ["appRipple", "", "routerLink", "/entrar", 1, "btn", "btn--primary", 2, "width", "100%", "margin-top", "28px"], ["role", "alert", 1, "form-alert", "form-alert--error"], ["appRipple", "", "routerLink", "/entrar", 1, "btn", "btn--ghost", 2, "width", "100%", "margin-top", "28px"], [1, "form-footer"], ["routerLink", "/criar-conta", 1, "field__link"]], template: function ActivateAccountComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-auth-shell", 0);
      \u0275\u0275template(1, ActivateAccountComponent_Case_1_Template, 4, 0, "div", 1)(2, ActivateAccountComponent_Case_2_Template, 6, 1)(3, ActivateAccountComponent_Case_3_Template, 10, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275property("title", ctx.status() === "success" ? "Conta ativada!" : ctx.status() === "error" ? ctx.errorTitle() : "Ativando sua conta")("subtitle", ctx.status() === "loading" ? "Aguarde enquanto confirmamos seu c\xF3digo de ativa\xE7\xE3o." : "");
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_2_0 = ctx.status()) === "loading" ? 1 : tmp_2_0 === "success" ? 2 : tmp_2_0 === "error" ? 3 : -1);
    }
  }, dependencies: [RouterLink, AuthShellComponent, RippleDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.activation-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  padding: 32px 0;\n  text-align: center;\n}\n.activation-state__text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9375rem;\n  color: var(--color-text-muted);\n}\n.activation-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 3px solid var(--color-border-strong);\n  border-top-color: var(--color-accent);\n  animation: _ngcontent-%COMP%_activation-spin 800ms linear infinite;\n}\n@keyframes _ngcontent-%COMP%_activation-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=activate-account.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActivateAccountComponent, { className: "ActivateAccountComponent", filePath: "src\\app\\features\\auth\\pages\\activate-account\\activate-account.component.ts", lineNumber: 17 });
})();
export {
  ActivateAccountComponent
};
//# sourceMappingURL=chunk-4NISQQ2A.js.map
