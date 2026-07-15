import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-PQBX64UW.js";
import {
  AuthShellComponent
} from "./chunk-QB3IMNTB.js";
import {
  RippleDirective
} from "./chunk-OR27G5EP.js";
import {
  RouterLink,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NIMDKY6Z.js";

// src/app/features/auth/pages/login/login.component.ts
function LoginComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r0.form.controls.email.errors == null ? null : ctx_r0.form.controls.email.errors["required"]) ? "Informe seu e-mail." : "Informe um e-mail v\xE1lido.", " ");
  }
}
function LoginComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r0.form.controls.password.errors == null ? null : ctx_r0.form.controls.password.errors["required"]) ? "Informe sua senha." : "A senha deve ter ao menos 6 caracteres.", " ");
  }
}
function LoginComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 10);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.submitError(), " ");
  }
}
function LoginComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Entrando\u2026 ");
  }
}
function LoginComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Entrar ");
  }
}
var LoginComponent = class _LoginComponent {
  fb = new FormBuilder();
  isSubmitting = signal(false);
  submitError = signal(null);
  showPassword = signal(false);
  form = this.fb.nonNullable.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    remember: [true]
  });
  togglePassword() {
    this.showPassword.update((v) => !v);
  }
  onSubmit() {
    this.submitError.set(null);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isSubmitting.set(true);
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.submitError.set("N\xE3o foi poss\xEDvel entrar. Verifique suas credenciais e tente novamente.");
    }, 900);
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 15, consts: [["eyebrow", "Bem-vindo de volta", "title", "Entrar na sua conta", "subtitle", "Acesse o painel administrativo do seu estabelecimento."], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "login-email", 1, "field__label"], [1, "field__control"], ["id", "login-email", "type", "email", "formControlName", "email", "placeholder", "voce@seurestaurante.com", "autocomplete", "email", "aria-describedby", "login-email-error", 1, "field__input"], ["id", "login-email-error", 1, "field__error"], ["for", "login-password", 1, "field__label"], ["id", "login-password", "formControlName", "password", "placeholder", "Sua senha", "autocomplete", "current-password", "aria-describedby", "login-password-error", 1, "field__input", 3, "type"], ["type", "button", 1, "field__toggle", 3, "click"], ["aria-hidden", "true", 1, "material-icons"], ["id", "login-password-error", 1, "field__error"], [1, "field__row"], [1, "field__checkbox"], ["type", "checkbox", "formControlName", "remember"], ["href", "#recuperar-senha", 1, "field__link"], ["role", "alert", 1, "form-alert", "form-alert--error"], ["type", "submit", "appRipple", "", 1, "btn", "btn--primary", 2, "width", "100%", "margin-top", "28px", 3, "disabled"], [1, "form-footer"], ["routerLink", "/criar-conta", 1, "field__link"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-auth-shell", 0)(1, "form", 1);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "label", 3);
      \u0275\u0275text(4, "E-mail");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275element(6, "input", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, LoginComponent_Conditional_7_Template, 2, 1, "span", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 2)(9, "label", 7);
      \u0275\u0275text(10, "Senha");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 4);
      \u0275\u0275element(12, "input", 8);
      \u0275\u0275elementStart(13, "button", 9);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_13_listener() {
        return ctx.togglePassword();
      });
      \u0275\u0275elementStart(14, "span", 10);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(16, LoginComponent_Conditional_16_Template, 2, 1, "span", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 12)(18, "label", 13);
      \u0275\u0275element(19, "input", 14);
      \u0275\u0275text(20, " Lembrar de mim ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "a", 15);
      \u0275\u0275text(22, "Esqueci minha senha");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(23, LoginComponent_Conditional_23_Template, 4, 1, "div", 16);
      \u0275\u0275elementStart(24, "button", 17);
      \u0275\u0275template(25, LoginComponent_Conditional_25_Template, 1, 0)(26, LoginComponent_Conditional_26_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "p", 18);
      \u0275\u0275text(28, " Ainda n\xE3o tem uma conta? ");
      \u0275\u0275elementStart(29, "a", 19);
      \u0275\u0275text(30, "Criar conta gratuita");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("field__input--invalid", ctx.form.controls.email.invalid && ctx.form.controls.email.touched);
      \u0275\u0275attribute("aria-invalid", ctx.form.controls.email.invalid && ctx.form.controls.email.touched);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form.controls.email.invalid && ctx.form.controls.email.touched ? 7 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("field__input--invalid", ctx.form.controls.password.invalid && ctx.form.controls.password.touched);
      \u0275\u0275property("type", ctx.showPassword() ? "text" : "password");
      \u0275\u0275attribute("aria-invalid", ctx.form.controls.password.invalid && ctx.form.controls.password.touched);
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.showPassword() ? "Ocultar senha" : "Mostrar senha");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.showPassword() ? "visibility_off" : "visibility");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form.controls.password.invalid && ctx.form.controls.password.touched ? 16 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.submitError() ? 23 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isSubmitting());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isSubmitting() ? 25 : 26);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, AuthShellComponent, RippleDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\features\\auth\\pages\\login\\login.component.ts", lineNumber: 14 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-SMT7HRLF.js.map
