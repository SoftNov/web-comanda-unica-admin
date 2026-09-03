import {
  CheckboxControlValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-GN6YKKII.js";
import {
  RippleDirective
} from "./chunk-VPD3C6IS.js";
import {
  autoDismiss
} from "./chunk-JD6JJHYZ.js";
import {
  environment
} from "./chunk-3BRF5UDA.js";
import {
  RouterLink
} from "./chunk-BYNLKO4G.js";
import {
  EventEmitter,
  HttpClient,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-POVL776E.js";

// src/app/shared/services/platform-stripe-config.service.ts
var PlatformStripeConfigService = class _PlatformStripeConfigService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiBaseUrl}/api/v1/platform/stripe-config`;
  get() {
    return this.http.get(this.baseUrl);
  }
  updateSettings(request) {
    return this.http.put(`${this.baseUrl}/settings`, request);
  }
  testConnection() {
    return this.http.post(`${this.baseUrl}/test-connection`, {});
  }
  testWebhook() {
    return this.http.post(`${this.baseUrl}/test-webhook`, {});
  }
  static \u0275fac = function PlatformStripeConfigService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlatformStripeConfigService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PlatformStripeConfigService, factory: _PlatformStripeConfigService.\u0275fac, providedIn: "root" });
};

// src/app/features/admin/pages/settings/stripe/admin/components/admin-stripe-audit-card.component.ts
function AdminStripeAuditCardComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 4);
    \u0275\u0275text(2, "Administrador");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 3)(6, "span", 4);
    \u0275\u0275text(7, "Data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 5);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.config.updatedByUserEmail);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatDateTime(ctx_r0.config.updatedAt));
  }
}
function AdminStripeAuditCardComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "Nenhuma altera\xE7\xE3o registrada ainda.");
    \u0275\u0275elementEnd();
  }
}
var AdminStripeAuditCardComponent = class _AdminStripeAuditCardComponent {
  config;
  dateTimeFormatter = new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short" });
  formatDateTime(value) {
    return value ? this.dateTimeFormatter.format(new Date(value)) : "\u2014";
  }
  static \u0275fac = function AdminStripeAuditCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminStripeAuditCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminStripeAuditCardComponent, selectors: [["app-admin-stripe-audit-card"]], inputs: { config: "config" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [[1, "card", "stripe-card"], [1, "step-heading"], [1, "field__hint"], [1, "stripe-audit__item"], [1, "stripe-status__label"], [1, "stripe-audit__value"]], template: function AdminStripeAuditCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "\xDAltima altera\xE7\xE3o");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, AdminStripeAuditCardComponent_Conditional_3_Template, 10, 2)(4, AdminStripeAuditCardComponent_Conditional_4_Template, 2, 0, "p", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.config.updatedByUserEmail ? 3 : 4);
    }
  }, styles: ["\n\n.stripe-card[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n.step-heading[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n}\n.stripe-audit__item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-top: 16px;\n}\n.stripe-status__label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n}\n.stripe-audit__value[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: var(--color-text);\n}\n.field__hint[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=admin-stripe-audit-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminStripeAuditCardComponent, { className: "AdminStripeAuditCardComponent", filePath: "src\\app\\features\\admin\\pages\\settings\\stripe\\admin\\components\\admin-stripe-audit-card.component.ts", lineNumber: 13 });
})();

// src/app/features/admin/pages/settings/stripe/admin/components/admin-stripe-connect-card.component.ts
function AdminStripeConnectCardComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
var AdminStripeConnectCardComponent = class _AdminStripeConnectCardComponent {
  fb = inject(FormBuilder);
  config;
  isSaving = false;
  error = null;
  save = new EventEmitter();
  form = this.fb.nonNullable.group({
    connectEnabled: this.fb.nonNullable.control(true),
    paymentMethodCard: this.fb.nonNullable.control(true),
    paymentMethodPix: this.fb.nonNullable.control(true),
    paymentMethodOther: this.fb.nonNullable.control(false)
  });
  ngOnChanges(changes) {
    if (changes["config"] && this.config) {
      this.form.reset({
        connectEnabled: this.config.connectEnabled,
        paymentMethodCard: this.config.paymentMethodCard,
        paymentMethodPix: this.config.paymentMethodPix,
        paymentMethodOther: this.config.paymentMethodOther
      });
    }
  }
  submit() {
    this.save.emit(this.form.getRawValue());
  }
  static \u0275fac = function AdminStripeConnectCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminStripeConnectCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminStripeConnectCardComponent, selectors: [["app-admin-stripe-connect-card"]], inputs: { config: "config", isSaving: "isSaving", error: "error" }, outputs: { save: "save" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 32, vars: 6, consts: [[1, "card", "stripe-card"], [1, "step-heading"], [1, "stripe-card__description"], ["novalidate", "", 3, "submit", "formGroup"], [1, "field"], [1, "field__checkbox"], ["type", "checkbox", "formControlName", "connectEnabled"], [1, "stripe-connect__subheading"], [1, "field__row", "field__row--checkboxes"], ["type", "checkbox", "formControlName", "paymentMethodCard"], ["type", "checkbox", "formControlName", "paymentMethodPix"], ["type", "checkbox", "formControlName", "paymentMethodOther"], [1, "form-alert", "form-alert--error"], [1, "step-actions"], ["type", "submit", "appRipple", "", 1, "btn", "btn--primary", 3, "disabled"]], template: function AdminStripeConnectCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Stripe Connect e m\xE9todos de pagamento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, " Conta conectada tipo ");
      \u0275\u0275elementStart(5, "strong");
      \u0275\u0275text(6, "Express");
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " \u2014 usada para o onboarding das empresas clientes. ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "form", 3);
      \u0275\u0275listener("submit", function AdminStripeConnectCardComponent_Template_form_submit_11_listener($event) {
        $event.preventDefault();
        return ctx.submit();
      });
      \u0275\u0275elementStart(12, "div", 4)(13, "label", 5);
      \u0275\u0275element(14, "input", 6);
      \u0275\u0275text(15, " Permitir que empresas conectem contas Stripe ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "h3", 7);
      \u0275\u0275text(17, "M\xE9todos de pagamento aceitos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 8)(19, "label", 5);
      \u0275\u0275element(20, "input", 9);
      \u0275\u0275text(21, " Cart\xE3o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "label", 5);
      \u0275\u0275element(23, "input", 10);
      \u0275\u0275text(24, " PIX");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "label", 5);
      \u0275\u0275element(26, "input", 11);
      \u0275\u0275text(27, " Outros");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(28, AdminStripeConnectCardComponent_Conditional_28_Template, 2, 1, "div", 12);
      \u0275\u0275elementStart(29, "div", 13)(30, "button", 14);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.config.connectedAccountsCount);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.config.connectedAccountsCount === 1 ? "empresa conectada" : "empresas conectadas", " no momento. ");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(17);
      \u0275\u0275conditional(ctx.error ? 28 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isSaving ? "Salvando\u2026" : "Salvar configura\xE7\xF5es", " ");
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RippleDirective], styles: ["\n\n.stripe-card[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n.step-heading[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n}\n.stripe-card__description[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  margin-bottom: 24px;\n  font-size: 0.9375rem;\n  color: var(--color-text-muted);\n}\n.stripe-card__description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--color-text);\n}\n.stripe-connect__subheading[_ngcontent-%COMP%] {\n  margin: 20px 0 12px;\n  font-size: 0.8125rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n}\n.field__row--checkboxes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.step-actions[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n/*# sourceMappingURL=admin-stripe-connect-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminStripeConnectCardComponent, { className: "AdminStripeConnectCardComponent", filePath: "src\\app\\features\\admin\\pages\\settings\\stripe\\admin\\components\\admin-stripe-connect-card.component.ts", lineNumber: 15 });
})();

// src/app/features/admin/pages/settings/stripe/admin/components/admin-stripe-credentials-card.component.ts
function AdminStripeCredentialsCardComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const result_r1 = ctx;
    \u0275\u0275classProp("form-alert--success", result_r1.success)("form-alert--error", !result_r1.success);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", result_r1.message, " ");
  }
}
var AdminStripeCredentialsCardComponent = class _AdminStripeCredentialsCardComponent {
  config;
  testResult = null;
  isTesting = false;
  test = new EventEmitter();
  static \u0275fac = function AdminStripeCredentialsCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminStripeCredentialsCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminStripeCredentialsCardComponent, selectors: [["app-admin-stripe-credentials-card"]], inputs: { config: "config", testResult: "testResult", isTesting: "isTesting" }, outputs: { test: "test" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 5, consts: [[1, "card", "stripe-card"], [1, "step-heading"], [1, "stripe-card__description"], [1, "stripe-credentials__grid"], [1, "stripe-credentials__item"], [1, "stripe-status__label"], [1, "stripe-credentials__value"], [1, "form-alert", 3, "form-alert--success", "form-alert--error"], [1, "step-actions"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", 3, "click", "disabled"], [1, "form-alert"]], template: function AdminStripeCredentialsCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Credenciais da plataforma");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, " Publishable Key e Secret Key da conta Stripe da pr\xF3pria Comanda \xDAnica. Configuradas como vari\xE1vel de ambiente no servidor \u2014 nunca digitadas nem exibidas em texto puro aqui. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "span", 5);
      \u0275\u0275text(8, "Publishable Key");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "code", 6);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 4)(12, "span", 5);
      \u0275\u0275text(13, "Secret Key");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "code", 6);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(16, AdminStripeCredentialsCardComponent_Conditional_16_Template, 2, 5, "div", 7);
      \u0275\u0275elementStart(17, "div", 8)(18, "button", 9);
      \u0275\u0275listener("click", function AdminStripeCredentialsCardComponent_Template_button_click_18_listener() {
        return ctx.test.emit();
      });
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      let tmp_2_0;
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate((tmp_0_0 = ctx.config.publishableKeyMasked) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : "N\xE3o configurada");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate((tmp_1_0 = ctx.config.secretKeyMasked) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : "N\xE3o configurada");
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_2_0 = ctx.testResult) ? 16 : -1, tmp_2_0);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isTesting || !ctx.config.credentialsConfigured);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isTesting ? "Testando\u2026" : "Testar conex\xE3o", " ");
    }
  }, dependencies: [RippleDirective], styles: ["\n\n.stripe-card[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n.step-heading[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n}\n.stripe-card__description[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 0.9375rem;\n  color: var(--color-text-muted);\n}\n.stripe-credentials__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 20px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid var(--color-border);\n}\n.stripe-credentials__item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.stripe-status__label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n}\n.stripe-credentials__value[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: var(--color-text);\n  letter-spacing: 0.02em;\n}\n.form-alert[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.step-actions[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  display: flex;\n  gap: 12px;\n}\n/*# sourceMappingURL=admin-stripe-credentials-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminStripeCredentialsCardComponent, { className: "AdminStripeCredentialsCardComponent", filePath: "src\\app\\features\\admin\\pages\\settings\\stripe\\admin\\components\\admin-stripe-credentials-card.component.ts", lineNumber: 16 });
})();

// src/app/features/admin/pages/settings/stripe/admin/components/admin-stripe-fee-card.component.ts
var AdminStripeFeeCardComponent = class _AdminStripeFeeCardComponent {
  static \u0275fac = function AdminStripeFeeCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminStripeFeeCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminStripeFeeCardComponent, selectors: [["app-admin-stripe-fee-card"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 0, consts: [[1, "card", "stripe-card", "stripe-fee-card"], [1, "stripe-fee-card__icon"], ["aria-hidden", "true", 1, "material-icons"], [1, "stripe-fee-card__body"], [1, "step-heading"], [1, "stripe-card__description"], ["routerLink", "/painel/financeiro-plataforma", 1, "btn", "btn--ghost"]], template: function AdminStripeFeeCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "percent");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "h2", 4);
      \u0275\u0275text(6, "Taxa da plataforma");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, " A regra de cobran\xE7a da plataforma (percentual padr\xE3o e customiza\xE7\xE3o por empresa) \xE9 configurada em Financeiro Comanda \xDAnica. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "a", 6);
      \u0275\u0275text(10, "Configurar taxa");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [RouterLink], styles: ["\n\n.stripe-card[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n.stripe-fee-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.stripe-fee-card__icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  border-radius: var(--radius-full);\n  background: var(--color-accent-bg);\n}\n.stripe-fee-card__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  font-size: 24px;\n}\n.stripe-fee-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.step-heading[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n}\n.stripe-card__description[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 0.9375rem;\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=admin-stripe-fee-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminStripeFeeCardComponent, { className: "AdminStripeFeeCardComponent", filePath: "src\\app\\features\\admin\\pages\\settings\\stripe\\admin\\components\\admin-stripe-fee-card.component.ts", lineNumber: 14 });
})();

// src/app/features/admin/pages/settings/stripe/admin/components/admin-stripe-security-card.component.ts
function AdminStripeSecurityCardComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 2);
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
var AdminStripeSecurityCardComponent = class _AdminStripeSecurityCardComponent {
  checklist = [
    "Secret Key configurada como vari\xE1vel de ambiente no servidor \u2014 nunca no banco de dados",
    "Secret Key e Webhook Secret nunca s\xE3o retornados em texto puro para o navegador",
    "Assinatura de todo evento de webhook \xE9 validada antes de qualquer processamento",
    "Pagamento s\xF3 \xE9 considerado confirmado ap\xF3s evento assinado recebido pelo backend",
    "Propriet\xE1rios de empresas n\xE3o t\xEAm acesso \xE0s credenciais da plataforma"
  ];
  static \u0275fac = function AdminStripeSecurityCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminStripeSecurityCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminStripeSecurityCardComponent, selectors: [["app-admin-stripe-security-card"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 0, consts: [[1, "card", "stripe-card"], [1, "stripe-security-card__icon"], ["aria-hidden", "true", 1, "material-icons"], [1, "step-heading"], [1, "stripe-security-card__list"]], template: function AdminStripeSecurityCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "shield");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "h2", 3);
      \u0275\u0275text(5, "Seguran\xE7a");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "ul", 4);
      \u0275\u0275repeaterCreate(7, AdminStripeSecurityCardComponent_For_8_Template, 4, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.checklist);
    }
  }, styles: ["\n\n.stripe-card[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n.stripe-security-card__icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 12px;\n  border-radius: var(--radius-full);\n  background: var(--color-bg-elevated);\n}\n.stripe-security-card__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 26px;\n}\n.step-heading[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n}\n.stripe-security-card__list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.stripe-security-card__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  line-height: 1.4;\n}\n.stripe-security-card__list[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 18px;\n  margin-top: 1px;\n  color: var(--color-success);\n}\n/*# sourceMappingURL=admin-stripe-security-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminStripeSecurityCardComponent, { className: "AdminStripeSecurityCardComponent", filePath: "src\\app\\features\\admin\\pages\\settings\\stripe\\admin\\components\\admin-stripe-security-card.component.ts", lineNumber: 12 });
})();

// src/app/features/admin/pages/settings/stripe/admin/components/admin-stripe-status-card.component.ts
var AdminStripeStatusCardComponent = class _AdminStripeStatusCardComponent {
  config;
  static \u0275fac = function AdminStripeStatusCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminStripeStatusCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminStripeStatusCardComponent, selectors: [["app-admin-stripe-status-card"]], inputs: { config: "config" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 38, vars: 24, consts: [[1, "card", "stripe-card"], [1, "stripe-status__icon"], ["aria-hidden", "true", 1, "material-icons"], [1, "step-heading"], [1, "stripe-status__description"], [1, "stripe-status__grid"], [1, "stripe-status__item"], [1, "stripe-status__label"], [1, "stripe-status__pill"], [1, "stripe-status__dot"], [1, "stripe-status__value"]], template: function AdminStripeStatusCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "h2", 3);
      \u0275\u0275text(5, "Status geral da integra\xE7\xE3o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, " Estas s\xE3o as credenciais da plataforma Comanda \xDAnica \u2014 usadas para o Stripe Connect das empresas clientes, nunca as credenciais de uma empresa espec\xEDfica. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "span", 7);
      \u0275\u0275text(11, "Credenciais");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span", 8);
      \u0275\u0275element(13, "span", 9);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 6)(16, "span", 7);
      \u0275\u0275text(17, "Ambiente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 8);
      \u0275\u0275element(19, "span", 9);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 6)(22, "span", 7);
      \u0275\u0275text(23, "Stripe Connect");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span", 8);
      \u0275\u0275element(25, "span", 9);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 6)(28, "span", 7);
      \u0275\u0275text(29, "Webhook");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span", 8);
      \u0275\u0275element(31, "span", 9);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 6)(34, "span", 7);
      \u0275\u0275text(35, "Empresas conectadas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span", 10);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("stripe-status__icon--pending", !ctx.config.credentialsConfigured);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.config.credentialsConfigured ? "verified" : "warning");
      \u0275\u0275advance(9);
      \u0275\u0275classProp("stripe-status__pill--ok", ctx.config.credentialsConfigured)("stripe-status__pill--pending", !ctx.config.credentialsConfigured);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.config.credentialsConfigured ? "Configuradas" : "N\xE3o configuradas", " ");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("stripe-status__pill--ok", ctx.config.environment === "live")("stripe-status__pill--pending", ctx.config.environment === "test");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.config.environment === "live" ? "Produ\xE7\xE3o (live)" : ctx.config.environment === "test" ? "Teste (test)" : "Indefinido", " ");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("stripe-status__pill--ok", ctx.config.connectEnabled)("stripe-status__pill--pending", !ctx.config.connectEnabled);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.config.connectEnabled ? "Habilitado" : "Desabilitado", " ");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("stripe-status__pill--ok", ctx.config.webhookConfigured)("stripe-status__pill--pending", !ctx.config.webhookConfigured);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.config.webhookConfigured ? "Configurado" : "N\xE3o configurado", " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.config.connectedAccountsCount);
    }
  }, styles: ["\n\n.stripe-card[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n.stripe-status__icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 12px;\n  border-radius: var(--radius-full);\n  background: var(--color-success-bg);\n}\n.stripe-status__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--color-success);\n  font-size: 26px;\n}\n.stripe-status__icon--pending[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.14);\n}\n.stripe-status__icon--pending[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.step-heading[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n}\n.stripe-status__description[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 0.9375rem;\n  color: var(--color-text-muted);\n}\n.stripe-status__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 20px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid var(--color-border);\n}\n.stripe-status__item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.stripe-status__label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n}\n.stripe-status__value[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.stripe-status__pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  width: fit-content;\n  padding: 4px 10px;\n  border-radius: var(--radius-full);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--color-text-muted);\n  background: var(--color-bg-elevated);\n}\n.stripe-status__dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n}\n.stripe-status__pill--ok[_ngcontent-%COMP%] {\n  background: var(--color-success-bg);\n  color: var(--color-success);\n}\n.stripe-status__pill--pending[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.14);\n  color: #f59e0b;\n}\n/*# sourceMappingURL=admin-stripe-status-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminStripeStatusCardComponent, { className: "AdminStripeStatusCardComponent", filePath: "src\\app\\features\\admin\\pages\\settings\\stripe\\admin\\components\\admin-stripe-status-card.component.ts", lineNumber: 11 });
})();

// src/app/features/admin/pages/settings/stripe/admin/components/admin-stripe-webhook-card.component.ts
function AdminStripeWebhookCardComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r1);
  }
}
function AdminStripeWebhookCardComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const result_r2 = ctx;
    \u0275\u0275classProp("form-alert--success", result_r2.success)("form-alert--error", !result_r2.success);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", result_r2.message, " ");
  }
}
var MONITORED_EVENTS = [
  "account.updated",
  "payment_intent.succeeded",
  "payment_intent.payment_failed",
  "charge.refunded"
];
var AdminStripeWebhookCardComponent = class _AdminStripeWebhookCardComponent {
  config;
  testResult = null;
  isTesting = false;
  test = new EventEmitter();
  monitoredEvents = MONITORED_EVENTS;
  urlCopied = signal(false);
  copyEndpointUrl() {
    navigator.clipboard.writeText(this.config.webhookEndpointUrl).then(() => {
      this.urlCopied.set(true);
      setTimeout(() => this.urlCopied.set(false), 2e3);
    });
  }
  static \u0275fac = function AdminStripeWebhookCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminStripeWebhookCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminStripeWebhookCardComponent, selectors: [["app-admin-stripe-webhook-card"]], inputs: { config: "config", testResult: "testResult", isTesting: "isTesting" }, outputs: { test: "test" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 29, vars: 6, consts: [[1, "card", "stripe-card"], [1, "step-heading"], [1, "stripe-card__description"], [1, "field"], [1, "stripe-status__label"], [1, "stripe-webhook__endpoint"], ["type", "button", "aria-label", "Copiar URL", 1, "icon-btn", 3, "click"], ["aria-hidden", "true", 1, "material-icons"], [1, "stripe-credentials__value"], [1, "stripe-webhook__events"], [1, "form-alert", 3, "form-alert--success", "form-alert--error"], [1, "step-actions"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", 3, "click", "disabled"], [1, "form-alert"]], template: function AdminStripeWebhookCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Webhook");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, " O Stripe envia eventos de pagamento para esta URL. Cadastre-a no Stripe Dashboard junto com o Webhook Secret gerado por l\xE1 \u2014 o secret fica salvo como vari\xE1vel de ambiente no servidor, nunca digitado nesta tela. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3)(6, "span", 4);
      \u0275\u0275text(7, "Endpoint");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 5)(9, "code");
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 6);
      \u0275\u0275listener("click", function AdminStripeWebhookCardComponent_Template_button_click_11_listener() {
        return ctx.copyEndpointUrl();
      });
      \u0275\u0275elementStart(12, "span", 7);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(14, "div", 3)(15, "span", 4);
      \u0275\u0275text(16, "Webhook Secret");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "code", 8);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 3)(20, "span", 4);
      \u0275\u0275text(21, "Eventos monitorados");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "ul", 9);
      \u0275\u0275repeaterCreate(23, AdminStripeWebhookCardComponent_For_24_Template, 3, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(25, AdminStripeWebhookCardComponent_Conditional_25_Template, 2, 5, "div", 10);
      \u0275\u0275elementStart(26, "div", 11)(27, "button", 12);
      \u0275\u0275listener("click", function AdminStripeWebhookCardComponent_Template_button_click_27_listener() {
        return ctx.test.emit();
      });
      \u0275\u0275text(28);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_2_0;
      let tmp_4_0;
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.config.webhookEndpointUrl);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.urlCopied() ? "check" : "content_copy");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate((tmp_2_0 = ctx.config.webhookSecretMasked) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : "N\xE3o configurado");
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.monitoredEvents);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_4_0 = ctx.testResult) ? 25 : -1, tmp_4_0);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isTesting || !ctx.config.webhookConfigured);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isTesting ? "Testando\u2026" : "Testar webhook", " ");
    }
  }, dependencies: [RippleDirective], styles: ["\n\n.stripe-card[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n.step-heading[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n}\n.stripe-card__description[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  margin-bottom: 24px;\n  font-size: 0.9375rem;\n  color: var(--color-text-muted);\n}\n.field[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.field[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 0;\n}\n.stripe-status__label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n}\n.stripe-credentials__value[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: var(--color-text);\n  letter-spacing: 0.02em;\n}\n.stripe-webhook__endpoint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  border-radius: var(--radius-sm);\n  background: var(--color-bg-elevated);\n  border: 1px solid var(--color-border);\n}\n.stripe-webhook__endpoint[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  overflow-x: auto;\n  white-space: nowrap;\n  font-size: 0.875rem;\n  color: var(--color-text);\n}\n.icon-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-sm);\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text);\n}\n.stripe-webhook__events[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.stripe-webhook__events[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: var(--radius-full);\n  background: var(--color-bg-elevated);\n}\n.stripe-webhook__events[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.form-alert[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.step-actions[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  display: flex;\n  gap: 12px;\n}\n/*# sourceMappingURL=admin-stripe-webhook-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminStripeWebhookCardComponent, { className: "AdminStripeWebhookCardComponent", filePath: "src\\app\\features\\admin\\pages\\settings\\stripe\\admin\\components\\admin-stripe-webhook-card.component.ts", lineNumber: 24 });
})();

// src/app/features/admin/pages/settings/stripe/admin/admin-stripe-config-page.component.ts
function AdminStripeConfigPageComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, "Carregando configura\xE7\xE3o\u2026");
    \u0275\u0275elementEnd();
  }
}
function AdminStripeConfigPageComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "p");
    \u0275\u0275text(2, "N\xE3o foi poss\xEDvel carregar a configura\xE7\xE3o Stripe da plataforma.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 5);
    \u0275\u0275listener("click", function AdminStripeConfigPageComponent_Conditional_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retryLoad());
    });
    \u0275\u0275text(4, "Tentar novamente");
    \u0275\u0275elementEnd()();
  }
}
function AdminStripeConfigPageComponent_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275element(2, "app-admin-stripe-status-card", 8);
    \u0275\u0275elementStart(3, "app-admin-stripe-credentials-card", 9);
    \u0275\u0275listener("test", function AdminStripeConfigPageComponent_Conditional_7_Conditional_0_Template_app_admin_stripe_credentials_card_test_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.testConnection());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-admin-stripe-webhook-card", 9);
    \u0275\u0275listener("test", function AdminStripeConfigPageComponent_Conditional_7_Conditional_0_Template_app_admin_stripe_webhook_card_test_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.testWebhook());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 7)(6, "app-admin-stripe-connect-card", 10);
    \u0275\u0275listener("save", function AdminStripeConfigPageComponent_Conditional_7_Conditional_0_Template_app_admin_stripe_connect_card_save_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitSettings($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "app-admin-stripe-fee-card")(8, "app-admin-stripe-security-card")(9, "app-admin-stripe-audit-card", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const config_r4 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("config", config_r4);
    \u0275\u0275advance();
    \u0275\u0275property("config", config_r4)("testResult", ctx_r1.connectionTestResult())("isTesting", ctx_r1.isTestingConnection());
    \u0275\u0275advance();
    \u0275\u0275property("config", config_r4)("testResult", ctx_r1.webhookTestResult())("isTesting", ctx_r1.isTestingWebhook());
    \u0275\u0275advance(2);
    \u0275\u0275property("config", config_r4)("isSaving", ctx_r1.isSavingSettings())("error", ctx_r1.settingsError());
    \u0275\u0275advance(3);
    \u0275\u0275property("config", config_r4);
  }
}
function AdminStripeConfigPageComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AdminStripeConfigPageComponent_Conditional_7_Conditional_0_Template, 10, 11, "div", 6);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r1.config()) ? 0 : -1, tmp_1_0);
  }
}
var AdminStripeConfigPageComponent = class _AdminStripeConfigPageComponent {
  platformStripeConfigService = inject(PlatformStripeConfigService);
  isLoading = signal(true);
  loadError = signal(false);
  config = signal(null);
  isSavingSettings = signal(false);
  settingsError = signal(null);
  isTestingConnection = signal(false);
  connectionTestResult = signal(null);
  isTestingWebhook = signal(false);
  webhookTestResult = signal(null);
  constructor() {
    this.loadConfig();
  }
  retryLoad() {
    this.loadConfig();
  }
  submitSettings(request) {
    this.isSavingSettings.set(true);
    this.settingsError.set(null);
    this.platformStripeConfigService.updateSettings(request).subscribe({
      next: (config) => {
        this.isSavingSettings.set(false);
        this.config.set(config);
      },
      error: (error) => {
        this.isSavingSettings.set(false);
        this.settingsError.set(this.resolveErrorMessage(error));
        autoDismiss(this.settingsError, null);
      }
    });
  }
  testConnection() {
    this.isTestingConnection.set(true);
    this.connectionTestResult.set(null);
    this.platformStripeConfigService.testConnection().subscribe({
      next: (result) => {
        this.isTestingConnection.set(false);
        this.connectionTestResult.set(result);
        autoDismiss(this.connectionTestResult, null, 5e3);
      },
      error: () => {
        this.isTestingConnection.set(false);
        this.connectionTestResult.set({ success: false, message: "N\xE3o foi poss\xEDvel testar a conex\xE3o com o Stripe." });
        autoDismiss(this.connectionTestResult, null, 5e3);
      }
    });
  }
  testWebhook() {
    this.isTestingWebhook.set(true);
    this.webhookTestResult.set(null);
    this.platformStripeConfigService.testWebhook().subscribe({
      next: (result) => {
        this.isTestingWebhook.set(false);
        this.webhookTestResult.set(result);
        autoDismiss(this.webhookTestResult, null, 5e3);
      },
      error: () => {
        this.isTestingWebhook.set(false);
        this.webhookTestResult.set({ success: false, message: "N\xE3o foi poss\xEDvel testar o webhook." });
        autoDismiss(this.webhookTestResult, null, 5e3);
      }
    });
  }
  loadConfig() {
    this.isLoading.set(true);
    this.loadError.set(false);
    this.platformStripeConfigService.get().subscribe({
      next: (config) => {
        this.isLoading.set(false);
        this.config.set(config);
      },
      error: () => {
        this.isLoading.set(false);
        this.loadError.set(true);
      }
    });
  }
  resolveErrorMessage(error) {
    const body = error.error;
    if (body?.mensagem) {
      return body.mensagem;
    }
    if (body?.titulo) {
      return body.titulo;
    }
    if (error.status === 422 || error.status === 400) {
      return "Verifique os dados informados.";
    }
    return "N\xE3o foi poss\xEDvel concluir a opera\xE7\xE3o. Tente novamente em instantes.";
  }
  static \u0275fac = function AdminStripeConfigPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminStripeConfigPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminStripeConfigPageComponent, selectors: [["app-admin-stripe-config-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 1, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "field__hint"], [1, "card", "stripe-load-error"], ["type", "button", 1, "btn", "btn--primary", 3, "click"], [1, "stripe-page-grid"], [1, "stripe-page-grid__col"], [3, "config"], [3, "test", "config", "testResult", "isTesting"], [3, "save", "config", "isSaving", "error"]], template: function AdminStripeConfigPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Stripe da Plataforma");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, " Configura\xE7\xE3o da conta Stripe da pr\xF3pria Comanda \xDAnica \u2014 credenciais, Stripe Connect, webhook e taxa da plataforma. Restrito a administradores da plataforma. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(5, AdminStripeConfigPageComponent_Conditional_5_Template, 2, 0, "p", 3)(6, AdminStripeConfigPageComponent_Conditional_6_Template, 5, 0, "div", 4)(7, AdminStripeConfigPageComponent_Conditional_7_Template, 1, 1);
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.isLoading() ? 5 : ctx.loadError() ? 6 : 7);
    }
  }, dependencies: [
    AdminStripeStatusCardComponent,
    AdminStripeCredentialsCardComponent,
    AdminStripeConnectCardComponent,
    AdminStripeFeeCardComponent,
    AdminStripeWebhookCardComponent,
    AdminStripeSecurityCardComponent,
    AdminStripeAuditCardComponent
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n  color: var(--color-text-muted);\n  max-width: 720px;\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.stripe-load-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  max-width: 640px;\n  padding: 24px 28px;\n}\n.stripe-load-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n}\n.stripe-page-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.stripe-page-grid__col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  min-width: 0;\n}\n@media (min-width: 960px) {\n  .stripe-page-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n    align-items: start;\n    max-width: 1200px;\n  }\n}\n/*# sourceMappingURL=admin-stripe-config-page.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminStripeConfigPageComponent, { className: "AdminStripeConfigPageComponent", filePath: "src\\app\\features\\admin\\pages\\settings\\stripe\\admin\\admin-stripe-config-page.component.ts", lineNumber: 39 });
})();
export {
  AdminStripeConfigPageComponent
};
//# sourceMappingURL=chunk-LRMPXSE3.js.map
