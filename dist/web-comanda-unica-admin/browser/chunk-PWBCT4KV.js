import {
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-4IFGYJZR.js";

// src/app/shared/validators/password.validator.ts
var PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
function checkPasswordRules(value) {
  return {
    minLength: value.length >= 8,
    lowercase: /[a-z]/.test(value),
    uppercase: /[A-Z]/.test(value),
    number: /\d/.test(value),
    specialChar: /[^A-Za-z0-9]/.test(value)
  };
}
function passwordStrengthValidator() {
  return (control) => {
    if (!control.value) {
      return null;
    }
    return PASSWORD_PATTERN.test(control.value) ? null : { passwordWeak: true };
  };
}
function passwordsMatchValidator(passwordKey, confirmKey) {
  return (control) => {
    const password = control.get(passwordKey)?.value;
    const confirmPassword = control.get(confirmKey)?.value;
    return password && confirmPassword && password !== confirmPassword ? { passwordMismatch: true } : null;
  };
}

// src/app/shared/components/password-rules/password-rules.component.ts
var PasswordRulesComponent = class _PasswordRulesComponent {
  passwordValue = signal("");
  set password(value) {
    this.passwordValue.set(value ?? "");
  }
  rules = computed(() => checkPasswordRules(this.passwordValue()));
  static \u0275fac = function PasswordRulesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PasswordRulesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PasswordRulesComponent, selectors: [["app-password-rules"]], inputs: { password: "password" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 15, consts: [["aria-live", "polite", 1, "password-rules"], [1, "password-rules__item"], ["aria-hidden", "true", 1, "material-icons"]], template: function PasswordRulesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ul", 0)(1, "li", 1)(2, "span", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275text(4, " M\xEDnimo de 8 caracteres ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "li", 1)(6, "span", 2);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275text(8, " Uma letra min\xFAscula ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "li", 1)(10, "span", 2);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, " Uma letra mai\xFAscula ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "li", 1)(14, "span", 2);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, " Um n\xFAmero ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "li", 1)(18, "span", 2);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, " Um caractere especial ");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("password-rules__item--valid", ctx.rules().minLength);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.rules().minLength ? "check_circle" : "radio_button_unchecked");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("password-rules__item--valid", ctx.rules().lowercase);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.rules().lowercase ? "check_circle" : "radio_button_unchecked");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("password-rules__item--valid", ctx.rules().uppercase);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.rules().uppercase ? "check_circle" : "radio_button_unchecked");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("password-rules__item--valid", ctx.rules().number);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.rules().number ? "check_circle" : "radio_button_unchecked");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("password-rules__item--valid", ctx.rules().specialChar);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.rules().specialChar ? "check_circle" : "radio_button_unchecked");
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.password-rules[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-top: 10px;\n  padding: 14px 16px;\n  border-radius: var(--radius-sm);\n  background: var(--color-bg-elevated);\n  border: 1px solid var(--color-border);\n}\n.password-rules__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n  transition: color var(--transition-fast);\n}\n.password-rules__item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.password-rules__item--valid[_ngcontent-%COMP%] {\n  color: var(--color-success);\n}\n/*# sourceMappingURL=password-rules.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PasswordRulesComponent, { className: "PasswordRulesComponent", filePath: "src\\app\\shared\\components\\password-rules\\password-rules.component.ts", lineNumber: 10 });
})();

export {
  passwordStrengthValidator,
  passwordsMatchValidator,
  PasswordRulesComponent
};
//# sourceMappingURL=chunk-PWBCT4KV.js.map
