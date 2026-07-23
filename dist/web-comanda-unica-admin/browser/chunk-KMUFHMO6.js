import {
  PasswordRulesComponent,
  passwordStrengthValidator,
  passwordsMatchValidator
} from "./chunk-M7IQEHBT.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-ALTQOTXH.js";
import {
  RippleDirective
} from "./chunk-G7AZFESP.js";
import {
  AuthService
} from "./chunk-JIG4QTYX.js";
import {
  DestroyRef,
  RouterLink,
  inject,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ZGOR3PJA.js";

// src/app/shared/utils/countdown.util.ts
function secondsUntil(date) {
  return Math.max(0, Math.floor((new Date(date).getTime() - Date.now()) / 1e3));
}
function formatCountdown(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}
function extractUnlockTime(message) {
  if (!message) {
    return null;
  }
  const isoMatch = message.match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2})?/);
  if (isoMatch) {
    const parsed = new Date(isoMatch[0]);
    if (!isNaN(parsed.getTime())) {
      return parsed;
    }
  }
  const brDateTimeMatch = message.match(/(\d{2})\/(\d{2})\/(\d{4}).{0,10}?(\d{2}):(\d{2})/);
  if (brDateTimeMatch) {
    const [, day, month, year, hour, minute] = brDateTimeMatch;
    const parsed = new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute));
    if (!isNaN(parsed.getTime())) {
      return parsed;
    }
  }
  const timeOnlyMatch = message.match(/\b([01]\d|2[0-3]):([0-5]\d)\b/);
  if (timeOnlyMatch) {
    const [, hour, minute] = timeOnlyMatch;
    const parsed = /* @__PURE__ */ new Date();
    parsed.setHours(Number(hour), Number(minute), 0, 0);
    if (parsed.getTime() < Date.now()) {
      parsed.setDate(parsed.getDate() + 1);
    }
    return parsed;
  }
  return null;
}

// src/app/features/auth/components/password-reset-flow/password-reset-flow.component.ts
function PasswordResetFlowComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ol", 0)(1, "li", 3)(2, "span", 4);
    \u0275\u0275text(3, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "li", 3)(7, "span", 4);
    \u0275\u0275text(8, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 5);
    \u0275\u0275text(10, "C\xF3digo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "li", 3)(12, "span", 4);
    \u0275\u0275text(13, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 5);
    \u0275\u0275text(15, "Nova senha");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("steps__item--active", ctx_r0.step() === "start")("steps__item--done", ctx_r0.step() === "code" || ctx_r0.step() === "password");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.lockedEmail ? "Confirmar" : "E-mail");
    \u0275\u0275advance();
    \u0275\u0275classProp("steps__item--active", ctx_r0.step() === "code")("steps__item--done", ctx_r0.step() === "password");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("steps__item--active", ctx_r0.step() === "password");
  }
}
function PasswordResetFlowComponent_Case_1_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 10);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.submitError(), " ");
  }
}
function PasswordResetFlowComponent_Case_1_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function PasswordResetFlowComponent_Case_1_Conditional_0_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.retryAfterBlock());
    });
    \u0275\u0275text(1, " Tentar novamente ");
    \u0275\u0275elementEnd();
  }
}
function PasswordResetFlowComponent_Case_1_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Enviando\u2026 ");
  }
}
function PasswordResetFlowComponent_Case_1_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" Aguarde ", ctx_r0.formatCountdown(ctx_r0.remainingSeconds()), " ");
  }
}
function PasswordResetFlowComponent_Case_1_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Enviar c\xF3digo ");
  }
}
function PasswordResetFlowComponent_Case_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, " Enviaremos um c\xF3digo de verifica\xE7\xE3o de 6 d\xEDgitos para ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PasswordResetFlowComponent_Case_1_Conditional_0_Conditional_5_Template, 4, 1, "div", 7)(6, PasswordResetFlowComponent_Case_1_Conditional_0_Conditional_6_Template, 2, 0, "button", 8);
    \u0275\u0275elementStart(7, "button", 9);
    \u0275\u0275listener("click", function PasswordResetFlowComponent_Case_1_Conditional_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onSubmitStart());
    });
    \u0275\u0275template(8, PasswordResetFlowComponent_Case_1_Conditional_0_Conditional_8_Template, 1, 0)(9, PasswordResetFlowComponent_Case_1_Conditional_0_Conditional_9_Template, 1, 1)(10, PasswordResetFlowComponent_Case_1_Conditional_0_Conditional_10_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.lockedEmail);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.submitError() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isBlocked() && !ctx_r0.blockedUntil() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isSubmitting() || ctx_r0.isBlocked());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isSubmitting() ? 8 : ctx_r0.isBlocked() && ctx_r0.blockedUntil() ? 9 : 10);
  }
}
function PasswordResetFlowComponent_Case_1_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r0.emailForm.controls.email.errors == null ? null : ctx_r0.emailForm.controls.email.errors["required"]) ? "Informe seu e-mail." : "Informe um e-mail v\xE1lido.", " ");
  }
}
function PasswordResetFlowComponent_Case_1_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 10);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.submitError(), " ");
  }
}
function PasswordResetFlowComponent_Case_1_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function PasswordResetFlowComponent_Case_1_Conditional_1_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.retryAfterBlock());
    });
    \u0275\u0275text(1, " Tentar novamente ");
    \u0275\u0275elementEnd();
  }
}
function PasswordResetFlowComponent_Case_1_Conditional_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Enviando\u2026 ");
  }
}
function PasswordResetFlowComponent_Case_1_Conditional_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" Aguarde ", ctx_r0.formatCountdown(ctx_r0.remainingSeconds()), " ");
  }
}
function PasswordResetFlowComponent_Case_1_Conditional_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Enviar c\xF3digo ");
  }
}
function PasswordResetFlowComponent_Case_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 12);
    \u0275\u0275listener("ngSubmit", function PasswordResetFlowComponent_Case_1_Conditional_1_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onSubmitStart());
    });
    \u0275\u0275elementStart(1, "p", 6);
    \u0275\u0275text(2, "Informe o e-mail da sua conta. Enviaremos um c\xF3digo de verifica\xE7\xE3o de 6 d\xEDgitos.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13)(4, "label", 14);
    \u0275\u0275text(5, "E-mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 15);
    \u0275\u0275element(7, "input", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, PasswordResetFlowComponent_Case_1_Conditional_1_Conditional_8_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, PasswordResetFlowComponent_Case_1_Conditional_1_Conditional_9_Template, 4, 1, "div", 7)(10, PasswordResetFlowComponent_Case_1_Conditional_1_Conditional_10_Template, 2, 0, "button", 8);
    \u0275\u0275elementStart(11, "button", 18);
    \u0275\u0275template(12, PasswordResetFlowComponent_Case_1_Conditional_1_Conditional_12_Template, 1, 0)(13, PasswordResetFlowComponent_Case_1_Conditional_1_Conditional_13_Template, 1, 1)(14, PasswordResetFlowComponent_Case_1_Conditional_1_Conditional_14_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r0.emailForm);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("field__input--invalid", ctx_r0.emailForm.controls.email.invalid && ctx_r0.emailForm.controls.email.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.emailForm.controls.email.invalid && ctx_r0.emailForm.controls.email.touched ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.submitError() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isBlocked() && !ctx_r0.blockedUntil() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isSubmitting() || ctx_r0.isBlocked());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isSubmitting() ? 12 : ctx_r0.isBlocked() && ctx_r0.blockedUntil() ? 13 : 14);
  }
}
function PasswordResetFlowComponent_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PasswordResetFlowComponent_Case_1_Conditional_0_Template, 11, 5)(1, PasswordResetFlowComponent_Case_1_Conditional_1_Template, 15, 8, "form", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.lockedEmail ? 0 : 1);
  }
}
function PasswordResetFlowComponent_Case_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" Ele expira em ", ctx_r0.formatCountdown(ctx_r0.remainingSeconds()), ". ");
  }
}
function PasswordResetFlowComponent_Case_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r0.codeForm.controls.code.errors == null ? null : ctx_r0.codeForm.controls.code.errors["required"]) ? "Informe o c\xF3digo recebido." : "O c\xF3digo deve ter 6 d\xEDgitos.", " ");
  }
}
function PasswordResetFlowComponent_Case_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 10);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.submitError(), " ");
  }
}
function PasswordResetFlowComponent_Case_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function PasswordResetFlowComponent_Case_2_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.retryAfterBlock());
    });
    \u0275\u0275text(1, " Tentar novamente ");
    \u0275\u0275elementEnd();
  }
}
function PasswordResetFlowComponent_Case_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Verificando\u2026 ");
  }
}
function PasswordResetFlowComponent_Case_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" Aguarde ", ctx_r0.formatCountdown(ctx_r0.remainingSeconds()), " ");
  }
}
function PasswordResetFlowComponent_Case_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Validar c\xF3digo ");
  }
}
function PasswordResetFlowComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 12);
    \u0275\u0275listener("ngSubmit", function PasswordResetFlowComponent_Case_2_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmitCode());
    });
    \u0275\u0275elementStart(1, "p", 6);
    \u0275\u0275text(2, " Enviamos um c\xF3digo de 6 d\xEDgitos para ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ". ");
    \u0275\u0275template(6, PasswordResetFlowComponent_Case_2_Conditional_6_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 13)(8, "label", 19);
    \u0275\u0275text(9, "C\xF3digo de verifica\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 15);
    \u0275\u0275element(11, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, PasswordResetFlowComponent_Case_2_Conditional_12_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, PasswordResetFlowComponent_Case_2_Conditional_13_Template, 4, 1, "div", 7)(14, PasswordResetFlowComponent_Case_2_Conditional_14_Template, 2, 0, "button", 8);
    \u0275\u0275elementStart(15, "button", 18);
    \u0275\u0275template(16, PasswordResetFlowComponent_Case_2_Conditional_16_Template, 1, 0)(17, PasswordResetFlowComponent_Case_2_Conditional_17_Template, 1, 1)(18, PasswordResetFlowComponent_Case_2_Conditional_18_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 11);
    \u0275\u0275listener("click", function PasswordResetFlowComponent_Case_2_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.requestNewCode());
    });
    \u0275\u0275text(20, " Solicitar novo c\xF3digo ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.codeForm);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.lockedEmail || ctx_r0.emailForm.controls.email.value);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.remainingSeconds() > 0 ? 6 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("field__input--invalid", ctx_r0.codeForm.controls.code.invalid && ctx_r0.codeForm.controls.code.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.codeForm.controls.code.invalid && ctx_r0.codeForm.controls.code.touched ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.submitError() ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isBlocked() && !ctx_r0.blockedUntil() ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isSubmitting() || ctx_r0.isBlocked());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isSubmitting() ? 16 : ctx_r0.isBlocked() && ctx_r0.blockedUntil() ? 17 : 18);
  }
}
function PasswordResetFlowComponent_Case_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" Voc\xEA tem ", ctx_r0.formatCountdown(ctx_r0.remainingSeconds()), " para concluir. ");
  }
}
function PasswordResetFlowComponent_Case_3_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r0.passwordForm.controls.newPassword.errors == null ? null : ctx_r0.passwordForm.controls.newPassword.errors["required"]) ? "Informe a nova senha." : "A senha n\xE3o atende aos requisitos abaixo.", " ");
  }
}
function PasswordResetFlowComponent_Case_3_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "As senhas n\xE3o coincidem.");
    \u0275\u0275elementEnd();
  }
}
function PasswordResetFlowComponent_Case_3_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 10);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.submitError(), " ");
  }
}
function PasswordResetFlowComponent_Case_3_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Redefinindo\u2026 ");
  }
}
function PasswordResetFlowComponent_Case_3_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Redefinir senha ");
  }
}
function PasswordResetFlowComponent_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 12);
    \u0275\u0275listener("ngSubmit", function PasswordResetFlowComponent_Case_3_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmitPassword());
    });
    \u0275\u0275elementStart(1, "p", 6);
    \u0275\u0275text(2, " Crie uma nova senha. ");
    \u0275\u0275template(3, PasswordResetFlowComponent_Case_3_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13)(5, "label", 21);
    \u0275\u0275text(6, "Nova senha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 15);
    \u0275\u0275element(8, "input", 22);
    \u0275\u0275elementStart(9, "button", 23);
    \u0275\u0275listener("click", function PasswordResetFlowComponent_Case_3_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.togglePassword());
    });
    \u0275\u0275elementStart(10, "span", 10);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, PasswordResetFlowComponent_Case_3_Conditional_12_Template, 2, 1, "span", 17);
    \u0275\u0275element(13, "app-password-rules", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 13)(15, "label", 25);
    \u0275\u0275text(16, "Confirmar nova senha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 15);
    \u0275\u0275element(18, "input", 26);
    \u0275\u0275elementStart(19, "button", 23);
    \u0275\u0275listener("click", function PasswordResetFlowComponent_Case_3_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleConfirmPassword());
    });
    \u0275\u0275elementStart(20, "span", 10);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(22, PasswordResetFlowComponent_Case_3_Conditional_22_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, PasswordResetFlowComponent_Case_3_Conditional_23_Template, 4, 1, "div", 7);
    \u0275\u0275elementStart(24, "button", 18);
    \u0275\u0275template(25, PasswordResetFlowComponent_Case_3_Conditional_25_Template, 1, 0)(26, PasswordResetFlowComponent_Case_3_Conditional_26_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.passwordForm);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.remainingSeconds() > 0 ? 3 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("field__input--invalid", ctx_r0.passwordForm.controls.newPassword.invalid && ctx_r0.passwordForm.controls.newPassword.touched);
    \u0275\u0275property("type", ctx_r0.showPassword() ? "text" : "password");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r0.showPassword() ? "Ocultar senha" : "Mostrar senha");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.showPassword() ? "visibility_off" : "visibility");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.passwordForm.controls.newPassword.invalid && ctx_r0.passwordForm.controls.newPassword.touched ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("password", ctx_r0.passwordForm.controls.newPassword.value);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("field__input--invalid", (ctx_r0.passwordForm.errors == null ? null : ctx_r0.passwordForm.errors["passwordMismatch"]) && ctx_r0.passwordForm.controls.confirmPassword.touched);
    \u0275\u0275property("type", ctx_r0.showConfirmPassword() ? "text" : "password");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r0.showConfirmPassword() ? "Ocultar senha" : "Mostrar senha");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.showConfirmPassword() ? "visibility_off" : "visibility");
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.passwordForm.errors == null ? null : ctx_r0.passwordForm.errors["passwordMismatch"]) && ctx_r0.passwordForm.controls.confirmPassword.touched ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.submitError() ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isSubmitting() || ctx_r0.passwordForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isSubmitting() ? 25 : 26);
  }
}
function PasswordResetFlowComponent_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 10);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 2)(5, "a", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r0.doneLinkPath);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.doneLinkLabel);
  }
}
function PasswordResetFlowComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, " Lembrou sua senha? ");
    \u0275\u0275elementStart(2, "a", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r0.footerLinkPath);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.footerLinkLabel);
  }
}
var PasswordResetFlowComponent = class _PasswordResetFlowComponent {
  fb = new FormBuilder();
  authService = inject(AuthService);
  destroyRef = inject(DestroyRef);
  lockedEmail = null;
  successMessage = "Sua senha foi redefinida com sucesso.";
  doneLinkPath = "/entrar";
  doneLinkLabel = "Ir para a tela de login";
  footerLinkPath = "/entrar";
  footerLinkLabel = "Voltar para o login";
  formatCountdown = formatCountdown;
  step = signal("start");
  isSubmitting = signal(false);
  submitError = signal(null);
  isBlocked = signal(false);
  blockedUntil = signal(null);
  remainingSeconds = signal(0);
  doneAt = signal(null);
  showPassword = signal(false);
  showConfirmPassword = signal(false);
  resetToken = null;
  intervalId = null;
  countdownPurpose = null;
  emailForm = this.fb.nonNullable.group({
    email: ["", [Validators.required, Validators.email]]
  });
  codeForm = this.fb.nonNullable.group({
    code: ["", [Validators.required, Validators.pattern(/^\d{6}$/)]]
  });
  passwordForm = this.fb.nonNullable.group({
    newPassword: ["", [Validators.required, passwordStrengthValidator()]],
    confirmPassword: ["", [Validators.required]]
  }, { validators: passwordsMatchValidator("newPassword", "confirmPassword") });
  constructor() {
    this.destroyRef.onDestroy(() => this.stopCountdown());
  }
  get currentEmail() {
    return (this.lockedEmail ?? this.emailForm.getRawValue().email).trim();
  }
  togglePassword() {
    this.showPassword.update((v) => !v);
  }
  toggleConfirmPassword() {
    this.showConfirmPassword.update((v) => !v);
  }
  onSubmitStart() {
    if (this.lockedEmail) {
      this.requestCode(this.lockedEmail);
      return;
    }
    this.submitError.set(null);
    if (this.emailForm.invalid) {
      this.emailForm.markAllAsTouched();
      return;
    }
    this.requestCode(this.emailForm.getRawValue().email.trim());
  }
  onSubmitCode() {
    this.submitError.set(null);
    if (this.codeForm.invalid) {
      this.codeForm.markAllAsTouched();
      return;
    }
    this.isSubmitting.set(true);
    const email = this.currentEmail;
    const code = this.codeForm.getRawValue().code;
    this.authService.verifyResetCode({ email, code }).subscribe({
      next: (response) => {
        this.isSubmitting.set(false);
        this.resetToken = response.resetToken;
        this.passwordForm.reset();
        this.step.set("password");
        this.startCountdown(new Date(response.resetTokenExpiresAt), "resetToken");
      },
      error: (error) => {
        this.isSubmitting.set(false);
        if (error.status === 410) {
          this.goToStartStep(this.extractMessage(error, { 410: "O c\xF3digo expirou. Solicite um novo c\xF3digo para continuar." }));
          return;
        }
        this.handleError(error, {
          404: "Nenhuma conta ou solicita\xE7\xE3o de c\xF3digo encontrada.",
          422: "C\xF3digo incorreto. Verifique e tente novamente."
        });
      }
    });
  }
  onSubmitPassword() {
    this.submitError.set(null);
    if (this.passwordForm.invalid) {
      this.passwordForm.markAllAsTouched();
      return;
    }
    if (!this.resetToken) {
      this.goToStartStep("Sua sess\xE3o de redefini\xE7\xE3o expirou. Solicite um novo c\xF3digo.");
      return;
    }
    this.isSubmitting.set(true);
    const email = this.currentEmail;
    const { newPassword, confirmPassword } = this.passwordForm.getRawValue();
    this.authService.resetPassword({ email, resetToken: this.resetToken, newPassword, confirmPassword }).subscribe({
      next: (response) => {
        this.isSubmitting.set(false);
        this.resetToken = null;
        this.stopCountdown();
        this.doneAt.set(response.resetAt);
        this.step.set("done");
      },
      error: (error) => {
        this.isSubmitting.set(false);
        if (error.status === 410 || error.status === 422) {
          this.goToStartStep(this.extractMessage(error, {
            410: "O token de redefini\xE7\xE3o expirou. Solicite um novo c\xF3digo.",
            422: "Este token j\xE1 foi utilizado ou invalidado. Solicite um novo c\xF3digo."
          }));
          return;
        }
        this.handleError(error, { 404: "Token de redefini\xE7\xE3o n\xE3o encontrado. Solicite um novo c\xF3digo." });
      }
    });
  }
  requestNewCode() {
    this.requestCode(this.currentEmail);
  }
  retryAfterBlock() {
    this.isBlocked.set(false);
    this.blockedUntil.set(null);
    this.submitError.set(null);
  }
  requestCode(email) {
    this.submitError.set(null);
    this.isSubmitting.set(true);
    this.authService.forgotPassword({ email }).subscribe({
      next: (response) => {
        this.isSubmitting.set(false);
        this.resetToken = null;
        this.codeForm.reset();
        this.step.set("code");
        this.startCountdown(new Date(response.codeExpiresAt), "code");
      },
      error: (error) => {
        this.isSubmitting.set(false);
        this.handleError(error, {
          404: "Nenhuma conta encontrada com o e-mail informado.",
          422: "Informe um e-mail v\xE1lido."
        });
      }
    });
  }
  goToStartStep(message) {
    this.resetToken = null;
    this.stopCountdown();
    this.isBlocked.set(false);
    this.blockedUntil.set(null);
    this.codeForm.reset();
    this.passwordForm.reset();
    this.step.set("start");
    this.submitError.set(message);
  }
  extractMessage(error, fallbacks = {}) {
    const body = error.error;
    return body?.mensagemErro || body?.mensagem || body?.titulo || fallbacks[error.status] || "Ocorreu um erro. Tente novamente em instantes.";
  }
  handleError(error, fallbacks = {}) {
    const message = this.extractMessage(error, fallbacks);
    this.submitError.set(message);
    if (error.status === 429) {
      this.isBlocked.set(true);
      const unlock = extractUnlockTime(message);
      this.blockedUntil.set(unlock);
      if (unlock) {
        this.startCountdown(unlock, "blocked");
      }
    }
  }
  startCountdown(target, purpose) {
    this.stopCountdown();
    this.countdownPurpose = purpose;
    const tick = () => {
      const remaining = secondsUntil(target);
      this.remainingSeconds.set(remaining);
      if (remaining <= 0) {
        this.stopCountdown();
        this.onCountdownExpired(purpose);
      }
    };
    tick();
    this.intervalId = setInterval(tick, 1e3);
  }
  stopCountdown() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.countdownPurpose = null;
  }
  onCountdownExpired(purpose) {
    if (purpose === "blocked") {
      this.isBlocked.set(false);
      this.blockedUntil.set(null);
      this.submitError.set(null);
      return;
    }
    if (purpose === "code") {
      this.goToStartStep("O c\xF3digo expirou. Solicite um novo c\xF3digo para continuar.");
      return;
    }
    this.goToStartStep("O tempo para redefinir sua senha expirou. Solicite um novo c\xF3digo.");
  }
  static \u0275fac = function PasswordResetFlowComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PasswordResetFlowComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PasswordResetFlowComponent, selectors: [["app-password-reset-flow"]], inputs: { lockedEmail: "lockedEmail", successMessage: "successMessage", doneLinkPath: "doneLinkPath", doneLinkLabel: "doneLinkLabel", footerLinkPath: "footerLinkPath", footerLinkLabel: "footerLinkLabel" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 3, consts: [["aria-label", "Etapas da redefini\xE7\xE3o de senha", 1, "steps"], ["novalidate", "", 3, "formGroup"], [1, "form-footer"], [1, "steps__item"], [1, "steps__index"], [1, "steps__label"], [1, "step-intro"], ["role", "alert", 1, "form-alert", "form-alert--error"], ["type", "button", 1, "btn", "btn--ghost", 2, "width", "100%", "margin-top", "12px"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", 2, "width", "100%", "margin-top", "28px", 3, "click", "disabled"], ["aria-hidden", "true", 1, "material-icons"], ["type", "button", 1, "btn", "btn--ghost", 2, "width", "100%", "margin-top", "12px", 3, "click"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "reset-email", 1, "field__label"], [1, "field__control"], ["id", "reset-email", "type", "email", "formControlName", "email", "placeholder", "voce@seurestaurante.com", "autocomplete", "email", 1, "field__input"], [1, "field__error"], ["type", "submit", "appRipple", "", 1, "btn", "btn--primary", 2, "width", "100%", "margin-top", "28px", 3, "disabled"], ["for", "reset-code", 1, "field__label"], ["id", "reset-code", "type", "text", "inputmode", "numeric", "autocomplete", "one-time-code", "maxlength", "6", "formControlName", "code", "placeholder", "000000", 1, "field__input"], ["for", "reset-new-password", 1, "field__label"], ["id", "reset-new-password", "formControlName", "newPassword", "placeholder", "Crie uma nova senha", "autocomplete", "new-password", 1, "field__input", 3, "type"], ["type", "button", 1, "field__toggle", 3, "click"], [3, "password"], ["for", "reset-confirm-password", 1, "field__label"], ["id", "reset-confirm-password", "formControlName", "confirmPassword", "placeholder", "Repita a nova senha", "autocomplete", "new-password", 1, "field__input", 3, "type"], ["role", "status", 1, "form-alert", "form-alert--success"], [1, "field__link", 3, "routerLink"]], template: function PasswordResetFlowComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, PasswordResetFlowComponent_Conditional_0_Template, 16, 11, "ol", 0)(1, PasswordResetFlowComponent_Case_1_Template, 2, 1)(2, PasswordResetFlowComponent_Case_2_Template, 21, 10, "form", 1)(3, PasswordResetFlowComponent_Case_3_Template, 27, 18, "form", 1)(4, PasswordResetFlowComponent_Case_4_Template, 7, 3)(5, PasswordResetFlowComponent_Conditional_5_Template, 4, 2, "p", 2);
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275conditional(ctx.step() !== "done" ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_1_0 = ctx.step()) === "start" ? 1 : tmp_1_0 === "code" ? 2 : tmp_1_0 === "password" ? 3 : tmp_1_0 === "done" ? 4 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.step() !== "done" && ctx.footerLinkPath ? 5 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, RouterLink, RippleDirective, PasswordRulesComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.steps[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 8px;\n  margin: 0 0 4px;\n  padding: 0;\n  list-style: none;\n}\n.steps__item[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  text-align: center;\n  color: var(--color-text-muted);\n}\n.steps__index[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 1px solid var(--color-border-strong);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  transition:\n    border-color var(--transition-fast),\n    background var(--transition-fast),\n    color var(--transition-fast);\n}\n.steps__label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.steps__item--active[_ngcontent-%COMP%] {\n  color: var(--color-text);\n}\n.steps__item--active[_ngcontent-%COMP%]   .steps__index[_ngcontent-%COMP%] {\n  border-color: var(--color-accent);\n  background: var(--color-accent-bg);\n  color: var(--color-accent-hover);\n}\n.steps__item--done[_ngcontent-%COMP%] {\n  color: var(--color-text);\n}\n.steps__item--done[_ngcontent-%COMP%]   .steps__index[_ngcontent-%COMP%] {\n  border-color: var(--color-success);\n  background: var(--color-success-bg);\n  color: var(--color-success);\n}\n.step-intro[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  font-size: 0.9375rem;\n  color: var(--color-gray);\n  line-height: 1.6;\n}\n.step-intro[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--color-text);\n}\n/*# sourceMappingURL=password-reset-flow.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PasswordResetFlowComponent, { className: "PasswordResetFlowComponent", filePath: "src\\app\\features\\auth\\components\\password-reset-flow\\password-reset-flow.component.ts", lineNumber: 24 });
})();

export {
  PasswordResetFlowComponent
};
//# sourceMappingURL=chunk-KMUFHMO6.js.map
