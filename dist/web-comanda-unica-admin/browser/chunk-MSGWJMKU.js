import {
  RippleDirective
} from "./chunk-RYRFSZ2Z.js";
import {
  environment
} from "./chunk-3BRF5UDA.js";
import {
  EventEmitter,
  HttpClient,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-MHTOAZDV.js";

// src/app/shared/services/stripe-connect.service.ts
var StripeConnectService = class _StripeConnectService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiBaseUrl}/api/v1/stripe-connect`;
  getAccount() {
    return this.http.get(`${this.baseUrl}/account`);
  }
  createOnboardingLink() {
    return this.http.post(`${this.baseUrl}/onboarding-link`, {});
  }
  createDashboardLink() {
    return this.http.post(`${this.baseUrl}/dashboard-link`, {});
  }
  static \u0275fac = function StripeConnectService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StripeConnectService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StripeConnectService, factory: _StripeConnectService.\u0275fac, providedIn: "root" });
};

// src/app/features/admin/pages/settings/stripe/owner/components/owner-stripe-account-card.component.ts
var OwnerStripeAccountCardComponent = class _OwnerStripeAccountCardComponent {
  status;
  isOpeningDashboard = false;
  manage = new EventEmitter();
  static \u0275fac = function OwnerStripeAccountCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OwnerStripeAccountCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OwnerStripeAccountCardComponent, selectors: [["app-owner-stripe-account-card"]], inputs: { status: "status", isOpeningDashboard: "isOpeningDashboard" }, outputs: { manage: "manage" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 38, vars: 5, consts: [[1, "card", "stripe-card"], [1, "step-heading"], [1, "stripe-account__list"], [1, "stripe-account__row"], [1, "step-actions"], ["type", "button", "appRipple", "", 1, "btn", "btn--ghost", 3, "click", "disabled"]], template: function OwnerStripeAccountCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Minha conta Stripe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "dl", 2)(4, "div", 3)(5, "dt");
      \u0275\u0275text(6, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "dd");
      \u0275\u0275text(8, "Conectada");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 3)(10, "dt");
      \u0275\u0275text(11, "Tipo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "dd");
      \u0275\u0275text(13, "Express");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 3)(15, "dt");
      \u0275\u0275text(16, "Pa\xEDs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "dd");
      \u0275\u0275text(18, "Brasil");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 3)(20, "dt");
      \u0275\u0275text(21, "Conta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "dd")(23, "code");
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 3)(26, "dt");
      \u0275\u0275text(27, "Pagamentos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "dd");
      \u0275\u0275text(29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 3)(31, "dt");
      \u0275\u0275text(32, "Recebimentos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "dd");
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 4)(36, "button", 5);
      \u0275\u0275listener("click", function OwnerStripeAccountCardComponent_Template_button_click_36_listener() {
        return ctx.manage.emit();
      });
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(24);
      \u0275\u0275textInterpolate(ctx.status.accountId);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.status.chargesEnabled ? "Habilitados" : "Pendente");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.status.payoutsEnabled ? "Habilitados" : "Pendente");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isOpeningDashboard);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isOpeningDashboard ? "Abrindo\u2026" : "Gerenciar conta Stripe", " ");
    }
  }, dependencies: [RippleDirective], styles: ["\n\n.stripe-card[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n.step-heading[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.stripe-account__list[_ngcontent-%COMP%] {\n  margin: 20px 0 0;\n}\n.stripe-account__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 10px 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.stripe-account__row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.stripe-account__row[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.stripe-account__row[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  color: var(--color-text);\n  font-weight: 600;\n}\n.stripe-account__row[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-weight: 400;\n  letter-spacing: 0.02em;\n}\n.step-actions[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n/*# sourceMappingURL=owner-stripe-account-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OwnerStripeAccountCardComponent, { className: "OwnerStripeAccountCardComponent", filePath: "src\\app\\features\\admin\\pages\\settings\\stripe\\owner\\components\\owner-stripe-account-card.component.ts", lineNumber: 16 });
})();

// src/app/features/admin/pages/settings/stripe/owner/components/owner-stripe-connection-card.component.ts
function OwnerStripeConnectionCardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "span", 2);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "h2", 3);
    \u0275\u0275text(4, "N\xE3o foi poss\xEDvel conectar sua conta Stripe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 4);
    \u0275\u0275text(6, " Verifique sua conex\xE3o e tente novamente. Se o problema continuar, entre em contato com o suporte. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
    \u0275\u0275listener("click", function OwnerStripeConnectionCardComponent_Conditional_1_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retry.emit());
    });
    \u0275\u0275text(9, " Tentar novamente ");
    \u0275\u0275elementEnd()();
  }
}
function OwnerStripeConnectionCardComponent_Conditional_2_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
    \u0275\u0275text(1, " Preparando conex\xE3o com o Stripe\u2026 ");
  }
}
function OwnerStripeConnectionCardComponent_Conditional_2_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Conectar conta Stripe ");
  }
}
function OwnerStripeConnectionCardComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 8);
    \u0275\u0275element(2, "path", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h2", 3);
    \u0275\u0275text(4, "Conecte sua conta Stripe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 4);
    \u0275\u0275text(6, " Conecte sua conta Stripe ao Comanda \xDAnica para receber pagamentos das suas comandas. O cadastro e a verifica\xE7\xE3o da sua conta s\xE3o realizados com seguran\xE7a pelo Stripe. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul", 10)(8, "li")(9, "span", 2);
    \u0275\u0275text(10, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Receba pagamentos das suas comandas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "span", 2);
    \u0275\u0275text(14, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Cart\xE3o e PIX");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "span", 2);
    \u0275\u0275text(18, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Pagamentos processados com seguran\xE7a pelo Stripe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "span", 2);
    \u0275\u0275text(22, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Sua conta banc\xE1ria permanece vinculada \xE0 sua conta Stripe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li")(25, "span", 2);
    \u0275\u0275text(26, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " O Comanda \xDAnica n\xE3o armazena dados de cart\xE3o");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 5)(29, "button", 11);
    \u0275\u0275listener("click", function OwnerStripeConnectionCardComponent_Conditional_2_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.connect.emit());
    });
    \u0275\u0275template(30, OwnerStripeConnectionCardComponent_Conditional_2_Conditional_30_Template, 2, 0)(31, OwnerStripeConnectionCardComponent_Conditional_2_Conditional_31_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "p", 12);
    \u0275\u0275text(33, " Voc\xEA ser\xE1 direcionado ao Stripe para concluir o cadastro e a verifica\xE7\xE3o da sua conta. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(29);
    \u0275\u0275property("disabled", ctx_r1.state === "connecting");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.state === "connecting" ? 30 : 31);
  }
}
var OwnerStripeConnectionCardComponent = class _OwnerStripeConnectionCardComponent {
  state = "not-connected";
  connect = new EventEmitter();
  retry = new EventEmitter();
  static \u0275fac = function OwnerStripeConnectionCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OwnerStripeConnectionCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OwnerStripeConnectionCardComponent, selectors: [["app-owner-stripe-connection-card"]], inputs: { state: "state" }, outputs: { connect: "connect", retry: "retry" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "card", "stripe-card"], [1, "stripe-connect__icon", "stripe-connect__icon--error"], ["aria-hidden", "true", 1, "material-icons"], [1, "step-heading"], [1, "stripe-connect__description"], [1, "step-actions"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", 3, "click"], [1, "stripe-connect__icon"], ["viewBox", "0 0 32 32", "width", "28", "height", "28", "aria-hidden", "true"], ["fill", "#635BFF", "d", "M32 16.6c0-5.5-2.7-9.9-7.7-9.9-5.1 0-8.2 4.3-8.2 9.8 0 6.5 3.7 9.7 9 9.7 2.6 0 4.5-.6 6-1.4v-4.3c-1.5.7-3.2 1.2-5.4 1.2-2.1 0-4-.7-4.3-3.3H32c0-.3.1-1.5.1-1.8Zm-11.7-2.3c0-2.5 1.5-3.5 2.9-3.5 1.3 0 2.7 1 2.7 3.5h-5.6ZM11.7 6.7c-1.9 0-3.1.9-3.8 1.5l-.3-1.2H3v25l5.3-1.1v-6c.8.6 1.9 1.4 3.8 1.4 3.9 0 7.4-3.1 7.4-9.9 0-6.2-3.6-9.7-7.4-9.7Zm-1.3 15c-1.2 0-2-.4-2.5-1V11.6c.5-.5 1.3-1 2.5-1 1.9 0 3.3 2.2 3.3 5.5 0 3.5-1.3 5.6-3.3 5.6Z"], [1, "stripe-connect__benefits"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", "stripe-connect__cta", 3, "click", "disabled"], [1, "stripe-connect__hint"], ["aria-hidden", "true", 1, "stripe-connect__spinner"]], template: function OwnerStripeConnectionCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, OwnerStripeConnectionCardComponent_Conditional_1_Template, 10, 0)(2, OwnerStripeConnectionCardComponent_Conditional_2_Template, 34, 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.state === "error" ? 1 : 2);
    }
  }, dependencies: [RippleDirective], styles: ["\n\n.stripe-card[_ngcontent-%COMP%] {\n  padding: 40px 32px;\n  text-align: center;\n}\n.stripe-connect__icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  margin-bottom: 16px;\n  border-radius: var(--radius-full);\n  background: var(--color-bg-elevated);\n  border: 1px solid var(--color-border-strong);\n}\n.stripe-connect__icon--error[_ngcontent-%COMP%] {\n  background: rgba(248, 113, 113, 0.12);\n  border-color: transparent;\n}\n.stripe-connect__icon--error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #f87171;\n  font-size: 28px;\n}\n.step-heading[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.stripe-connect__description[_ngcontent-%COMP%] {\n  max-width: 440px;\n  margin: 8px auto 0;\n  color: var(--color-text-muted);\n  font-size: 0.9375rem;\n  line-height: 1.5;\n}\n.stripe-connect__benefits[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-width: 420px;\n  margin: 24px auto 0;\n  padding: 0;\n  list-style: none;\n  text-align: left;\n}\n.stripe-connect__benefits[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  font-size: 0.875rem;\n  color: var(--color-text);\n}\n.stripe-connect__benefits[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 18px;\n  color: var(--color-accent-hover);\n  margin-top: 1px;\n}\n.step-actions[_ngcontent-%COMP%] {\n  justify-content: center;\n  margin-top: 28px;\n}\n.stripe-connect__cta[_ngcontent-%COMP%] {\n  min-width: 260px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.stripe-connect__spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid currentColor;\n  border-top-color: transparent;\n  animation: _ngcontent-%COMP%_stripe-connect-spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_stripe-connect-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.stripe-connect__hint[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=owner-stripe-connection-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OwnerStripeConnectionCardComponent, { className: "OwnerStripeConnectionCardComponent", filePath: "src\\app\\features\\admin\\pages\\settings\\stripe\\owner\\components\\owner-stripe-connection-card.component.ts", lineNumber: 17 });
})();

// src/app/features/admin/pages/settings/stripe/owner/components/owner-stripe-how-it-works.component.ts
var OwnerStripeHowItWorksComponent = class _OwnerStripeHowItWorksComponent {
  static \u0275fac = function OwnerStripeHowItWorksComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OwnerStripeHowItWorksComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OwnerStripeHowItWorksComponent, selectors: [["app-owner-stripe-how-it-works"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 46, vars: 0, consts: [[1, "card", "stripe-card"], [1, "step-heading"], [1, "stripe-steps"], [1, "stripe-steps__item"], [1, "stripe-steps__number"], [1, "stripe-fee-example"], [1, "stripe-fee-example__row"], [1, "stripe-fee-example__row", "stripe-fee-example__row--total"], [1, "stripe-fee-example__note"]], template: function OwnerStripeHowItWorksComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Como voc\xEA recebe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "ol", 2)(4, "li", 3)(5, "span", 4);
      \u0275\u0275text(6, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div")(8, "strong");
      \u0275\u0275text(9, "Cliente realiza o pedido");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p");
      \u0275\u0275text(11, "O cliente escolhe os produtos diretamente pelo Comanda \xDAnica.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "li", 3)(13, "span", 4);
      \u0275\u0275text(14, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div")(16, "strong");
      \u0275\u0275text(17, "Cliente paga");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p");
      \u0275\u0275text(19, "O cliente paga atrav\xE9s de cart\xE3o ou PIX.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "li", 3)(21, "span", 4);
      \u0275\u0275text(22, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div")(24, "strong");
      \u0275\u0275text(25, "Voc\xEA recebe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p");
      \u0275\u0275text(27, "O valor correspondente ao consumo \xE9 direcionado para sua conta Stripe.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(28, "div", 5)(29, "div", 6)(30, "span");
      \u0275\u0275text(31, "Consumo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "strong");
      \u0275\u0275text(33, "R$ 100,00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 6)(35, "span");
      \u0275\u0275text(36, "Taxa de pagamento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "strong");
      \u0275\u0275text(38, "R$ 2,00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 7)(40, "span");
      \u0275\u0275text(41, "Total pago pelo cliente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "strong");
      \u0275\u0275text(43, "R$ 102,00");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "p", 8);
      \u0275\u0275text(45, " A taxa do Comanda \xDAnica \xE9 adicionada ao pagamento e apresentada ao cliente antes da confirma\xE7\xE3o. ");
      \u0275\u0275elementEnd()();
    }
  }, styles: ["\n\n.stripe-card[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n.step-heading[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.stripe-steps[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin: 24px 0 0;\n  padding: 0;\n  list-style: none;\n}\n.stripe-steps__item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n}\n.stripe-steps__item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.9375rem;\n  color: var(--color-text);\n}\n.stripe-steps__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.stripe-steps__number[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: var(--radius-full);\n  background: var(--color-accent-bg);\n  color: var(--color-accent-hover);\n  font-size: 0.8125rem;\n  font-weight: 700;\n}\n.stripe-fee-example[_ngcontent-%COMP%] {\n  margin-top: 28px;\n  padding: 16px 20px;\n  border-radius: var(--radius-md);\n  background: var(--color-bg-elevated);\n  border: 1px solid var(--color-border);\n}\n.stripe-fee-example__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 6px 0;\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n.stripe-fee-example__row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--color-text);\n  font-weight: 600;\n}\n.stripe-fee-example__row--total[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  padding-top: 10px;\n  border-top: 1px solid var(--color-border);\n  color: var(--color-text);\n}\n.stripe-fee-example__row--total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--color-accent-hover);\n}\n.stripe-fee-example__note[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=owner-stripe-how-it-works.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OwnerStripeHowItWorksComponent, { className: "OwnerStripeHowItWorksComponent", filePath: "src\\app\\features\\admin\\pages\\settings\\stripe\\owner\\components\\owner-stripe-how-it-works.component.ts", lineNumber: 12 });
})();

// src/app/features/admin/pages/settings/stripe/owner/components/owner-stripe-onboarding-card.component.ts
var OwnerStripeOnboardingCardComponent = class _OwnerStripeOnboardingCardComponent {
  isLoading = false;
  continueOnboarding = new EventEmitter();
  static \u0275fac = function OwnerStripeOnboardingCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OwnerStripeOnboardingCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OwnerStripeOnboardingCardComponent, selectors: [["app-owner-stripe-onboarding-card"]], inputs: { isLoading: "isLoading" }, outputs: { continueOnboarding: "continueOnboarding" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 2, consts: [["role", "alert", 1, "stripe-alert"], ["aria-hidden", "true", 1, "material-icons", "stripe-alert__icon"], [1, "stripe-alert__body"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", "stripe-alert__action", 3, "click", "disabled"]], template: function OwnerStripeOnboardingCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
      \u0275\u0275text(2, "info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "strong");
      \u0275\u0275text(5, "H\xE1 informa\xE7\xF5es pendentes na sua conta Stripe.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Para come\xE7ar ou continuar recebendo pagamentos, conclua as informa\xE7\xF5es solicitadas pelo Stripe.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 3);
      \u0275\u0275listener("click", function OwnerStripeOnboardingCardComponent_Template_button_click_8_listener() {
        return ctx.continueOnboarding.emit();
      });
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isLoading ? "Preparando\u2026" : "Continuar cadastro", " ");
    }
  }, dependencies: [RippleDirective], styles: ["\n\n.stripe-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n  padding: 16px 20px;\n  margin-bottom: 24px;\n  border-radius: var(--radius-md);\n  background: var(--color-accent-bg);\n  border: 1px solid rgba(59, 130, 246, 0.28);\n}\n.stripe-alert__icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: var(--color-accent-hover);\n}\n.stripe-alert__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 220px;\n}\n.stripe-alert__body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--color-text);\n  font-size: 0.9375rem;\n}\n.stripe-alert__body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.stripe-alert__action[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=owner-stripe-onboarding-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OwnerStripeOnboardingCardComponent, { className: "OwnerStripeOnboardingCardComponent", filePath: "src\\app\\features\\admin\\pages\\settings\\stripe\\owner\\components\\owner-stripe-onboarding-card.component.ts", lineNumber: 13 });
})();

// src/app/features/admin/pages/settings/stripe/owner/components/owner-stripe-status-card.component.ts
var OwnerStripeStatusCardComponent = class _OwnerStripeStatusCardComponent {
  status;
  isRefreshing = false;
  isOpeningDashboard = false;
  manage = new EventEmitter();
  refresh = new EventEmitter();
  static \u0275fac = function OwnerStripeStatusCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OwnerStripeStatusCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OwnerStripeStatusCardComponent, selectors: [["app-owner-stripe-status-card"]], inputs: { status: "status", isRefreshing: "isRefreshing", isOpeningDashboard: "isOpeningDashboard" }, outputs: { manage: "manage", refresh: "refresh" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 37, vars: 15, consts: [[1, "card", "stripe-card"], [1, "stripe-status__icon"], ["aria-hidden", "true", 1, "material-icons"], [1, "step-heading"], [1, "stripe-status__description"], [1, "stripe-status__grid"], [1, "stripe-status__item"], [1, "stripe-status__label"], [1, "stripe-status__pill", "stripe-status__pill--ok"], [1, "stripe-status__dot"], [1, "stripe-status__pill"], [1, "stripe-status__account"], [1, "step-actions"], ["type", "button", "appRipple", "", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", 3, "click", "disabled"]], template: function OwnerStripeStatusCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "check_circle");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "h2", 3);
      \u0275\u0275text(5, "Conta Stripe conectada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, " Sua conta est\xE1 conectada ao Comanda \xDAnica e pronta para receber pagamentos. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "span", 7);
      \u0275\u0275text(11, "Status da conta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span", 8);
      \u0275\u0275element(13, "span", 9);
      \u0275\u0275text(14, " Conectada ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 6)(16, "span", 7);
      \u0275\u0275text(17, "Pagamentos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 10);
      \u0275\u0275element(19, "span", 9);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 6)(22, "span", 7);
      \u0275\u0275text(23, "Recebimentos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span", 10);
      \u0275\u0275element(25, "span", 9);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 6)(28, "span", 7);
      \u0275\u0275text(29, "Conta Stripe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "code", 11);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 12)(33, "button", 13);
      \u0275\u0275listener("click", function OwnerStripeStatusCardComponent_Template_button_click_33_listener() {
        return ctx.manage.emit();
      });
      \u0275\u0275text(34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "button", 14);
      \u0275\u0275listener("click", function OwnerStripeStatusCardComponent_Template_button_click_35_listener() {
        return ctx.refresh.emit();
      });
      \u0275\u0275text(36);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275classProp("stripe-status__pill--ok", ctx.status.chargesEnabled)("stripe-status__pill--pending", !ctx.status.chargesEnabled);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.status.chargesEnabled ? "Habilitados" : "Pendente", " ");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("stripe-status__pill--ok", ctx.status.payoutsEnabled)("stripe-status__pill--pending", !ctx.status.payoutsEnabled);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.status.payoutsEnabled ? "Habilitados" : "Pendente", " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.status.accountId);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isOpeningDashboard);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isOpeningDashboard ? "Abrindo\u2026" : "Gerenciar conta Stripe", " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isRefreshing);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isRefreshing ? "Atualizando\u2026" : "Atualizar status", " ");
    }
  }, dependencies: [RippleDirective], styles: ["\n\n.stripe-card[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n.stripe-status__icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 12px;\n  border-radius: var(--radius-full);\n  background: var(--color-success-bg);\n}\n.stripe-status__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--color-success);\n  font-size: 26px;\n}\n.step-heading[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.stripe-status__description[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 0.9375rem;\n  color: var(--color-text-muted);\n}\n.stripe-status__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 20px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid var(--color-border);\n}\n.stripe-status__item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.stripe-status__label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n}\n.stripe-status__pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  width: fit-content;\n  padding: 4px 10px;\n  border-radius: var(--radius-full);\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.stripe-status__dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n}\n.stripe-status__pill--ok[_ngcontent-%COMP%] {\n  background: var(--color-success-bg);\n  color: var(--color-success);\n}\n.stripe-status__pill--pending[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.14);\n  color: #f59e0b;\n}\n.stripe-status__account[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: var(--color-text);\n  letter-spacing: 0.02em;\n}\n.step-actions[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n/*# sourceMappingURL=owner-stripe-status-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OwnerStripeStatusCardComponent, { className: "OwnerStripeStatusCardComponent", filePath: "src\\app\\features\\admin\\pages\\settings\\stripe\\owner\\components\\owner-stripe-status-card.component.ts", lineNumber: 15 });
})();

// src/app/features/admin/pages/settings/stripe/owner/owner-stripe-page.component.ts
function OwnerStripePageComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, "Carregando informa\xE7\xF5es de pagamento\u2026");
    \u0275\u0275elementEnd();
  }
}
function OwnerStripePageComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-owner-stripe-connection-card", 11);
    \u0275\u0275listener("retry", function OwnerStripePageComponent_Conditional_6_Template_app_owner_stripe_connection_card_retry_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retryLoad());
    });
    \u0275\u0275elementEnd();
  }
}
function OwnerStripePageComponent_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-owner-stripe-onboarding-card", 16);
    \u0275\u0275listener("continueOnboarding", function OwnerStripePageComponent_Conditional_7_Conditional_0_Template_app_owner_stripe_onboarding_card_continueOnboarding_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.continueOnboarding());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("isLoading", ctx_r1.isContinuingOnboarding());
  }
}
function OwnerStripePageComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, OwnerStripePageComponent_Conditional_7_Conditional_0_Template, 1, 1, "app-owner-stripe-onboarding-card", 12);
    \u0275\u0275elementStart(1, "div", 5)(2, "div", 13)(3, "app-owner-stripe-status-card", 14);
    \u0275\u0275listener("manage", function OwnerStripePageComponent_Conditional_7_Template_app_owner_stripe_status_card_manage_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.manageAccount());
    })("refresh", function OwnerStripePageComponent_Conditional_7_Template_app_owner_stripe_status_card_refresh_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshStatus());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-owner-stripe-account-card", 15);
    \u0275\u0275listener("manage", function OwnerStripePageComponent_Conditional_7_Template_app_owner_stripe_account_card_manage_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.manageAccount());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 13);
    \u0275\u0275element(6, "app-owner-stripe-how-it-works");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.needsOnboarding() ? 0 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("status", ctx_r1.account())("isRefreshing", ctx_r1.isRefreshing())("isOpeningDashboard", ctx_r1.isOpeningDashboard());
    \u0275\u0275advance();
    \u0275\u0275property("status", ctx_r1.account())("isOpeningDashboard", ctx_r1.isOpeningDashboard());
  }
}
function OwnerStripePageComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 13)(2, "app-owner-stripe-connection-card", 17);
    \u0275\u0275listener("connect", function OwnerStripePageComponent_Conditional_8_Template_app_owner_stripe_connection_card_connect_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.connect());
    })("retry", function OwnerStripePageComponent_Conditional_8_Template_app_owner_stripe_connection_card_retry_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retryConnect());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275element(4, "app-owner-stripe-how-it-works");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("state", ctx_r1.connectionState());
  }
}
var OwnerStripePageComponent = class _OwnerStripePageComponent {
  stripeConnectService = inject(StripeConnectService);
  isLoading = signal(true);
  loadError = signal(false);
  account = signal(null);
  connectionState = signal("not-connected");
  isRefreshing = signal(false);
  isContinuingOnboarding = signal(false);
  isOpeningDashboard = signal(false);
  needsOnboarding = computed(() => {
    const account = this.account();
    return !!account && account.connected && !account.onboardingCompleted;
  });
  constructor() {
    this.loadStatus();
  }
  connect() {
    this.connectionState.set("connecting");
    this.stripeConnectService.createOnboardingLink().subscribe({
      next: (response) => {
        window.location.href = response.url;
      },
      error: () => {
        this.connectionState.set("error");
      }
    });
  }
  retryConnect() {
    this.connectionState.set("not-connected");
  }
  retryLoad() {
    this.loadStatus();
  }
  continueOnboarding() {
    this.isContinuingOnboarding.set(true);
    this.stripeConnectService.createOnboardingLink().subscribe({
      next: (response) => {
        window.location.href = response.url;
      },
      error: () => {
        this.isContinuingOnboarding.set(false);
      }
    });
  }
  refreshStatus() {
    this.isRefreshing.set(true);
    this.stripeConnectService.getAccount().subscribe({
      next: (account) => {
        this.isRefreshing.set(false);
        this.account.set(account);
      },
      error: () => {
        this.isRefreshing.set(false);
      }
    });
  }
  manageAccount() {
    this.isOpeningDashboard.set(true);
    this.stripeConnectService.createDashboardLink().subscribe({
      next: (response) => {
        window.open(response.url, "_blank", "noopener");
        this.isOpeningDashboard.set(false);
      },
      error: () => {
        this.isOpeningDashboard.set(false);
      }
    });
  }
  loadStatus() {
    this.isLoading.set(true);
    this.loadError.set(false);
    this.stripeConnectService.getAccount().subscribe({
      next: (account) => {
        this.isLoading.set(false);
        this.account.set(account);
        this.connectionState.set("not-connected");
      },
      error: () => {
        this.isLoading.set(false);
        this.loadError.set(true);
      }
    });
  }
  static \u0275fac = function OwnerStripePageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OwnerStripePageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OwnerStripePageComponent, selectors: [["app-owner-stripe-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 1, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "field__hint"], ["state", "error"], [1, "stripe-page-grid"], [1, "card", "stripe-security"], ["aria-hidden", "true", 1, "material-icons", "stripe-security__icon"], [1, "step-heading"], [1, "card", "stripe-support"], ["href", "mailto:suporte@comandaunica.com", 1, "btn", "btn--ghost"], ["state", "error", 3, "retry"], [3, "isLoading"], [1, "stripe-page-grid__col"], [3, "manage", "refresh", "status", "isRefreshing", "isOpeningDashboard"], [3, "manage", "status", "isOpeningDashboard"], [3, "continueOnboarding", "isLoading"], [3, "connect", "retry", "state"]], template: function OwnerStripePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Pagamentos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, "Conecte sua conta Stripe para receber os pagamentos das suas comandas.");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(5, OwnerStripePageComponent_Conditional_5_Template, 2, 0, "p", 3)(6, OwnerStripePageComponent_Conditional_6_Template, 1, 0, "app-owner-stripe-connection-card", 4)(7, OwnerStripePageComponent_Conditional_7_Template, 7, 6, "div", 5)(8, OwnerStripePageComponent_Conditional_8_Template, 5, 1, "div", 5);
      \u0275\u0275elementStart(9, "div", 6)(10, "span", 7);
      \u0275\u0275text(11, "lock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div")(13, "h2", 8);
      \u0275\u0275text(14, "Seus dados est\xE3o protegidos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p");
      \u0275\u0275text(16, " Seus pagamentos s\xE3o processados pelo Stripe. Dados completos do cart\xE3o n\xE3o s\xE3o armazenados pelo Comanda \xDAnica. O Comanda \xDAnica n\xE3o solicita sua Secret Key \u2014 o cadastro banc\xE1rio \xE9 realizado diretamente no Stripe. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div", 9)(18, "div")(19, "h2", 8);
      \u0275\u0275text(20, "Precisa de ajuda?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "p");
      \u0275\u0275text(22, "Se voc\xEA tiver problemas para conectar sua conta Stripe, entre em contato com o suporte do Comanda \xDAnica.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "a", 10);
      \u0275\u0275text(24, "Falar com suporte");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.isLoading() ? 5 : ctx.loadError() ? 6 : ((tmp_0_0 = ctx.account()) == null ? null : tmp_0_0.connected) ? 7 : 8);
    }
  }, dependencies: [
    OwnerStripeConnectionCardComponent,
    OwnerStripeOnboardingCardComponent,
    OwnerStripeStatusCardComponent,
    OwnerStripeHowItWorksComponent,
    OwnerStripeAccountCardComponent
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n  color: var(--color-text-muted);\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.step-heading[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n}\n.step-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.stripe-page-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.stripe-page-grid__col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  min-width: 0;\n}\n@media (min-width: 960px) {\n  .stripe-page-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n    align-items: start;\n    max-width: 1100px;\n  }\n}\n.stripe-security[_ngcontent-%COMP%], \n.stripe-support[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  max-width: 1100px;\n  margin-top: 24px;\n  padding: 24px 28px;\n}\n.stripe-security[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.stripe-support[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  line-height: 1.5;\n}\n.stripe-security__icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: var(--radius-full);\n  background: var(--color-bg-elevated);\n  color: var(--color-text-muted);\n}\n.stripe-support[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.stripe-support[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 220px;\n}\n/*# sourceMappingURL=owner-stripe-page.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OwnerStripePageComponent, { className: "OwnerStripePageComponent", filePath: "src\\app\\features\\admin\\pages\\settings\\stripe\\owner\\owner-stripe-page.component.ts", lineNumber: 25 });
})();
export {
  OwnerStripePageComponent
};
//# sourceMappingURL=chunk-MSGWJMKU.js.map
