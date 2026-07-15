import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-PQBX64UW.js";
import {
  AccountsService
} from "./chunk-QBE3G6ST.js";
import {
  AuthShellComponent
} from "./chunk-QB3IMNTB.js";
import {
  RippleDirective
} from "./chunk-OR27G5EP.js";
import {
  HttpClient,
  RouterLink,
  inject,
  map,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
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
} from "./chunk-NIMDKY6Z.js";

// src/app/shared/utils/br-format.util.ts
function onlyDigits(value) {
  return (value ?? "").replace(/\D/g, "");
}
function formatCPF(value) {
  return onlyDigits(value).slice(0, 11).replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}
function formatCNPJ(value) {
  return onlyDigits(value).slice(0, 14).replace(/(\d{2})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1/$2").replace(/(\d{4})(\d{1,2})$/, "$1-$2");
}
function formatCellphone(value) {
  const digits = onlyDigits(value).slice(0, 11);
  if (digits.length <= 10) {
    return digits.replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{4})(\d{1,4})$/, "$1-$2");
  }
  return digits.replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d{1,4})$/, "$1-$2");
}
function formatCEP(value) {
  return onlyDigits(value).slice(0, 8).replace(/(\d{5})(\d{1,3})$/, "$1-$2");
}
function isValidCPF(value) {
  const cpf = onlyDigits(value);
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false;
  }
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += Number(cpf[i]) * (10 - i);
  }
  let digit = sum * 10 % 11;
  if (digit === 10)
    digit = 0;
  if (digit !== Number(cpf[9])) {
    return false;
  }
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += Number(cpf[i]) * (11 - i);
  }
  digit = sum * 10 % 11;
  if (digit === 10)
    digit = 0;
  return digit === Number(cpf[10]);
}
function isValidCNPJ(value) {
  const cnpj = onlyDigits(value);
  if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) {
    return false;
  }
  const calcDigit = (base2) => {
    const weights = base2.length === 12 ? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2] : [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const sum = base2.split("").reduce((acc, digit, index) => acc + Number(digit) * weights[index], 0);
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };
  const base = cnpj.slice(0, 12);
  const digit1 = calcDigit(base);
  const digit2 = calcDigit(base + digit1);
  return cnpj === `${base}${digit1}${digit2}`;
}

// src/app/shared/services/cep.service.ts
var CepService = class _CepService {
  http = inject(HttpClient);
  lookup(cep) {
    const digits = onlyDigits(cep);
    return this.http.get(`https://viacep.com.br/ws/${digits}/json/`).pipe(map((response) => {
      if (!response || response.erro) {
        return null;
      }
      return {
        street: response.logradouro,
        neighborhood: response.bairro,
        city: response.localidade,
        state: response.uf
      };
    }));
  }
  static \u0275fac = function CepService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CepService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CepService, factory: _CepService.\u0275fac, providedIn: "root" });
};

// src/app/shared/validators/br-document.validator.ts
function cpfValidator() {
  return (control) => {
    if (!control.value) {
      return null;
    }
    return isValidCPF(control.value) ? null : { cpfInvalid: true };
  };
}
function cnpjValidator() {
  return (control) => {
    if (!control.value) {
      return null;
    }
    return isValidCNPJ(control.value) ? null : { cnpjInvalid: true };
  };
}
function cepValidator() {
  return (control) => {
    if (!control.value) {
      return null;
    }
    return onlyDigits(control.value).length === 8 ? null : { cepInvalid: true };
  };
}

// src/app/features/auth/pages/register/register.component.ts
function RegisterComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "span", 2);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Conta criada com sucesso! Enviamos as instru\xE7\xF5es de acesso para o seu e-mail. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 3)(5, "a", 4);
    \u0275\u0275text(6, "Ir para a tela de login");
    \u0275\u0275elementEnd()();
  }
}
function RegisterComponent_Conditional_2_Conditional_17_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "Informe seu nome completo.");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_2_Conditional_17_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r1.account.controls.cpf.errors == null ? null : ctx_r1.account.controls.cpf.errors["required"]) ? "Informe seu CPF." : "Informe um CPF v\xE1lido.", " ");
  }
}
function RegisterComponent_Conditional_2_Conditional_17_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r1.account.controls.email.errors == null ? null : ctx_r1.account.controls.email.errors["required"]) ? "Informe seu e-mail." : "Informe um e-mail v\xE1lido.", " ");
  }
}
function RegisterComponent_Conditional_2_Conditional_17_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "Informe seu celular.");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_2_Conditional_17_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "A senha deve ter ao menos 6 caracteres.");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_2_Conditional_17_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "As senhas n\xE3o coincidem.");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "h2", 11);
    \u0275\u0275text(2, "Respons\xE1vel pela conta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "label", 13);
    \u0275\u0275text(5, "Nome completo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 14);
    \u0275\u0275element(7, "input", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, RegisterComponent_Conditional_2_Conditional_17_Conditional_8_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 12)(10, "label", 17);
    \u0275\u0275text(11, "CPF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 14)(13, "input", 18);
    \u0275\u0275listener("input", function RegisterComponent_Conditional_2_Conditional_17_Template_input_input_13_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCpfInput($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, RegisterComponent_Conditional_2_Conditional_17_Conditional_14_Template, 2, 1, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 12)(16, "label", 19);
    \u0275\u0275text(17, "E-mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 14);
    \u0275\u0275element(19, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, RegisterComponent_Conditional_2_Conditional_17_Conditional_20_Template, 2, 1, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 12)(22, "label", 21);
    \u0275\u0275text(23, "Celular");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 14)(25, "input", 22);
    \u0275\u0275listener("input", function RegisterComponent_Conditional_2_Conditional_17_Template_input_input_25_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAccountPhoneInput($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, RegisterComponent_Conditional_2_Conditional_17_Conditional_26_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 12)(28, "label", 23);
    \u0275\u0275text(29, "Senha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 14);
    \u0275\u0275element(31, "input", 24);
    \u0275\u0275elementStart(32, "button", 25);
    \u0275\u0275listener("click", function RegisterComponent_Conditional_2_Conditional_17_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.togglePassword());
    });
    \u0275\u0275elementStart(33, "span", 2);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(35, RegisterComponent_Conditional_2_Conditional_17_Conditional_35_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 12)(37, "label", 26);
    \u0275\u0275text(38, "Confirmar senha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 14);
    \u0275\u0275element(40, "input", 27);
    \u0275\u0275elementStart(41, "button", 25);
    \u0275\u0275listener("click", function RegisterComponent_Conditional_2_Conditional_17_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleConfirmPassword());
    });
    \u0275\u0275elementStart(42, "span", 2);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(44, RegisterComponent_Conditional_2_Conditional_17_Conditional_44_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "button", 28);
    \u0275\u0275listener("click", function RegisterComponent_Conditional_2_Conditional_17_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToNextStep());
    });
    \u0275\u0275text(46, " Continuar ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.account.controls.fullName.invalid && ctx_r1.account.controls.fullName.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.account.controls.fullName.invalid && ctx_r1.account.controls.fullName.touched ? 8 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.account.controls.cpf.invalid && ctx_r1.account.controls.cpf.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.account.controls.cpf.invalid && ctx_r1.account.controls.cpf.touched ? 14 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.account.controls.email.invalid && ctx_r1.account.controls.email.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.account.controls.email.invalid && ctx_r1.account.controls.email.touched ? 20 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.account.controls.phone.invalid && ctx_r1.account.controls.phone.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.account.controls.phone.invalid && ctx_r1.account.controls.phone.touched ? 26 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.account.controls.password.invalid && ctx_r1.account.controls.password.touched);
    \u0275\u0275property("type", ctx_r1.showPassword() ? "text" : "password");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.showPassword() ? "Ocultar senha" : "Mostrar senha");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.showPassword() ? "visibility_off" : "visibility");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.account.controls.password.invalid && ctx_r1.account.controls.password.touched ? 35 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("field__input--invalid", (ctx_r1.account.errors == null ? null : ctx_r1.account.errors["passwordMismatch"]) && ctx_r1.account.controls.confirmPassword.touched);
    \u0275\u0275property("type", ctx_r1.showConfirmPassword() ? "text" : "password");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.showConfirmPassword() ? "Ocultar senha" : "Mostrar senha");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.showConfirmPassword() ? "visibility_off" : "visibility");
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.account.errors == null ? null : ctx_r1.account.errors["passwordMismatch"]) && ctx_r1.account.controls.confirmPassword.touched ? 44 : -1);
  }
}
function RegisterComponent_Conditional_2_Conditional_18_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "Informe o nome do seu estabelecimento.");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_2_Conditional_18_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r1.company.controls.cnpj.errors == null ? null : ctx_r1.company.controls.cnpj.errors["required"]) ? "Informe o CNPJ." : "Informe um CNPJ v\xE1lido.", " ");
  }
}
function RegisterComponent_Conditional_2_Conditional_18_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275property("value", item_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r5);
  }
}
function RegisterComponent_Conditional_2_Conditional_18_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "Selecione o segmento do seu estabelecimento.");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_2_Conditional_18_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "Informe o telefone do estabelecimento.");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_2_Conditional_18_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r1.company.controls.businessEmail.errors == null ? null : ctx_r1.company.controls.businessEmail.errors["required"]) ? "Informe o e-mail do estabelecimento." : "Informe um e-mail v\xE1lido.", " ");
  }
}
function RegisterComponent_Conditional_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "h2", 11);
    \u0275\u0275text(2, "Informa\xE7\xF5es do estabelecimento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "label", 30);
    \u0275\u0275text(5, "Nome Fantasia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 14);
    \u0275\u0275element(7, "input", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, RegisterComponent_Conditional_2_Conditional_18_Conditional_8_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 12)(10, "label", 32);
    \u0275\u0275text(11, "CNPJ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 14)(13, "input", 33);
    \u0275\u0275listener("input", function RegisterComponent_Conditional_2_Conditional_18_Template_input_input_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCnpjInput($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, RegisterComponent_Conditional_2_Conditional_18_Conditional_14_Template, 2, 1, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 12)(16, "label", 34);
    \u0275\u0275text(17, "Segmento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 14)(19, "select", 35)(20, "option", 36);
    \u0275\u0275text(21, "Selecione um segmento");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(22, RegisterComponent_Conditional_2_Conditional_18_For_23_Template, 2, 2, "option", 37, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, RegisterComponent_Conditional_2_Conditional_18_Conditional_24_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 12)(26, "label", 38);
    \u0275\u0275text(27, "Telefone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 14)(29, "input", 39);
    \u0275\u0275listener("input", function RegisterComponent_Conditional_2_Conditional_18_Template_input_input_29_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onBusinessPhoneInput($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, RegisterComponent_Conditional_2_Conditional_18_Conditional_30_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 12)(32, "label", 40);
    \u0275\u0275text(33, "E-mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 14);
    \u0275\u0275element(35, "input", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, RegisterComponent_Conditional_2_Conditional_18_Conditional_36_Template, 2, 1, "span", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 42)(38, "button", 43);
    \u0275\u0275listener("click", function RegisterComponent_Conditional_2_Conditional_18_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPreviousStep());
    });
    \u0275\u0275text(39, " Voltar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 44);
    \u0275\u0275listener("click", function RegisterComponent_Conditional_2_Conditional_18_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToNextStep());
    });
    \u0275\u0275text(41, " Continuar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.company.controls.businessName.invalid && ctx_r1.company.controls.businessName.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.company.controls.businessName.invalid && ctx_r1.company.controls.businessName.touched ? 8 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.company.controls.cnpj.invalid && ctx_r1.company.controls.cnpj.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.company.controls.cnpj.invalid && ctx_r1.company.controls.cnpj.touched ? 14 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.company.controls.segment.invalid && ctx_r1.company.controls.segment.touched);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.segments);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.company.controls.segment.invalid && ctx_r1.company.controls.segment.touched ? 24 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.company.controls.businessPhone.invalid && ctx_r1.company.controls.businessPhone.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.company.controls.businessPhone.invalid && ctx_r1.company.controls.businessPhone.touched ? 30 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.company.controls.businessEmail.invalid && ctx_r1.company.controls.businessEmail.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.company.controls.businessEmail.invalid && ctx_r1.company.controls.businessEmail.touched ? 36 : -1);
  }
}
function RegisterComponent_Conditional_2_Conditional_19_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1, "Buscando endere\xE7o\u2026");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_2_Conditional_19_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "CEP n\xE3o encontrado. Preencha o endere\xE7o manualmente.");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_2_Conditional_19_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r1.address.controls.cep.errors == null ? null : ctx_r1.address.controls.cep.errors["required"]) ? "Informe o CEP." : "Informe um CEP v\xE1lido.", " ");
  }
}
function RegisterComponent_Conditional_2_Conditional_19_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "Informe a rua.");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_2_Conditional_19_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "Informe o n\xFAmero.");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_2_Conditional_19_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "Informe o bairro.");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_2_Conditional_19_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "Informe a cidade.");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_2_Conditional_19_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "Informe o estado.");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_2_Conditional_19_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "\xC9 necess\xE1rio aceitar os termos para continuar.");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_2_Conditional_19_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "span", 2);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitError(), " ");
  }
}
function RegisterComponent_Conditional_2_Conditional_19_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Criando conta\u2026 ");
  }
}
function RegisterComponent_Conditional_2_Conditional_19_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Criar minha conta ");
  }
}
function RegisterComponent_Conditional_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "h2", 11);
    \u0275\u0275text(2, "Localiza\xE7\xE3o do estabelecimento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "label", 46);
    \u0275\u0275text(5, "CEP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 14)(7, "input", 47);
    \u0275\u0275listener("input", function RegisterComponent_Conditional_2_Conditional_19_Template_input_input_7_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCepInput($event));
    })("blur", function RegisterComponent_Conditional_2_Conditional_19_Template_input_blur_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCepBlur());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, RegisterComponent_Conditional_2_Conditional_19_Conditional_8_Template, 2, 0, "span", 48)(9, RegisterComponent_Conditional_2_Conditional_19_Conditional_9_Template, 2, 0, "span", 16)(10, RegisterComponent_Conditional_2_Conditional_19_Conditional_10_Template, 2, 1, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 12)(12, "label", 49);
    \u0275\u0275text(13, "Rua ");
    \u0275\u0275elementStart(14, "span", 50);
    \u0275\u0275text(15, "(preenchimento autom\xE1tico)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 14);
    \u0275\u0275element(17, "input", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, RegisterComponent_Conditional_2_Conditional_19_Conditional_18_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 12)(20, "label", 52);
    \u0275\u0275text(21, "N\xFAmero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 14);
    \u0275\u0275element(23, "input", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, RegisterComponent_Conditional_2_Conditional_19_Conditional_24_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 12)(26, "label", 54);
    \u0275\u0275text(27, "Complemento ");
    \u0275\u0275elementStart(28, "span", 50);
    \u0275\u0275text(29, "(opcional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 14);
    \u0275\u0275element(31, "input", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 12)(33, "label", 56);
    \u0275\u0275text(34, "Bairro ");
    \u0275\u0275elementStart(35, "span", 50);
    \u0275\u0275text(36, "(preenchimento autom\xE1tico)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 14);
    \u0275\u0275element(38, "input", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, RegisterComponent_Conditional_2_Conditional_19_Conditional_39_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 12)(41, "label", 58);
    \u0275\u0275text(42, "Cidade ");
    \u0275\u0275elementStart(43, "span", 50);
    \u0275\u0275text(44, "(preenchimento autom\xE1tico)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 14);
    \u0275\u0275element(46, "input", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275template(47, RegisterComponent_Conditional_2_Conditional_19_Conditional_47_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 12)(49, "label", 60);
    \u0275\u0275text(50, "Estado ");
    \u0275\u0275elementStart(51, "span", 50);
    \u0275\u0275text(52, "(preenchimento autom\xE1tico)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 14);
    \u0275\u0275element(54, "input", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275template(55, RegisterComponent_Conditional_2_Conditional_19_Conditional_55_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 62)(57, "label", 63);
    \u0275\u0275element(58, "input", 64);
    \u0275\u0275text(59, " Li e aceito os ");
    \u0275\u0275elementStart(60, "a", 65);
    \u0275\u0275text(61, "Termos de Uso");
    \u0275\u0275elementEnd();
    \u0275\u0275text(62, " e a ");
    \u0275\u0275elementStart(63, "a", 66);
    \u0275\u0275text(64, "Pol\xEDtica de Privacidade");
    \u0275\u0275elementEnd();
    \u0275\u0275text(65, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(66, RegisterComponent_Conditional_2_Conditional_19_Conditional_66_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(67, RegisterComponent_Conditional_2_Conditional_19_Conditional_67_Template, 4, 1, "div", 67);
    \u0275\u0275elementStart(68, "div", 42)(69, "button", 43);
    \u0275\u0275listener("click", function RegisterComponent_Conditional_2_Conditional_19_Template_button_click_69_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPreviousStep());
    });
    \u0275\u0275text(70, " Voltar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "button", 68);
    \u0275\u0275template(72, RegisterComponent_Conditional_2_Conditional_19_Conditional_72_Template, 1, 0)(73, RegisterComponent_Conditional_2_Conditional_19_Conditional_73_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.address.controls.cep.invalid && ctx_r1.address.controls.cep.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLookingUpCep() ? 8 : ctx_r1.cepNotFound() ? 9 : ctx_r1.address.controls.cep.invalid && ctx_r1.address.controls.cep.touched ? 10 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.address.controls.street.invalid && ctx_r1.address.controls.street.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.address.controls.street.invalid && ctx_r1.address.controls.street.touched ? 18 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.address.controls.number.invalid && ctx_r1.address.controls.number.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.address.controls.number.invalid && ctx_r1.address.controls.number.touched ? 24 : -1);
    \u0275\u0275advance(14);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.address.controls.neighborhood.invalid && ctx_r1.address.controls.neighborhood.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.address.controls.neighborhood.invalid && ctx_r1.address.controls.neighborhood.touched ? 39 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.address.controls.city.invalid && ctx_r1.address.controls.city.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.address.controls.city.invalid && ctx_r1.address.controls.city.touched ? 47 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.address.controls.state.invalid && ctx_r1.address.controls.state.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.address.controls.state.invalid && ctx_r1.address.controls.state.touched ? 55 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r1.acceptTerms.invalid && ctx_r1.acceptTerms.touched ? 66 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.submitError() ? 67 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.isSubmitting() || ctx_r1.acceptTerms.invalid);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSubmitting() ? 72 : 73);
  }
}
function RegisterComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ol", 5)(1, "li", 6)(2, "span", 7);
    \u0275\u0275text(3, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 8);
    \u0275\u0275text(5, "Criar conta");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "li", 6)(7, "span", 7);
    \u0275\u0275text(8, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 8);
    \u0275\u0275text(10, "Dados da empresa");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "li", 6)(12, "span", 7);
    \u0275\u0275text(13, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 8);
    \u0275\u0275text(15, "Endere\xE7o");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "form", 9);
    \u0275\u0275listener("ngSubmit", function RegisterComponent_Conditional_2_Template_form_ngSubmit_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275template(17, RegisterComponent_Conditional_2_Conditional_17_Template, 47, 24)(18, RegisterComponent_Conditional_2_Conditional_18_Template, 42, 15)(19, RegisterComponent_Conditional_2_Conditional_19_Template, 74, 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 3);
    \u0275\u0275text(21, " J\xE1 tem uma conta? ");
    \u0275\u0275elementStart(22, "a", 4);
    \u0275\u0275text(23, "Entrar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("steps__item--active", ctx_r1.currentStep() === 1)("steps__item--done", ctx_r1.currentStep() > 1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("steps__item--active", ctx_r1.currentStep() === 2)("steps__item--done", ctx_r1.currentStep() > 2);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("steps__item--active", ctx_r1.currentStep() === 3);
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.currentStep() === 1 ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.currentStep() === 2 ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.currentStep() === 3 ? 19 : -1);
  }
}
function passwordsMatchValidator(control) {
  const password = control.get("password")?.value;
  const confirmPassword = control.get("confirmPassword")?.value;
  return password && confirmPassword && password !== confirmPassword ? { passwordMismatch: true } : null;
}
var STEP_COUNT = 3;
var RegisterComponent = class _RegisterComponent {
  fb = new FormBuilder();
  cepService = inject(CepService);
  accountsService = inject(AccountsService);
  stepCount = STEP_COUNT;
  currentStep = signal(1);
  isSubmitting = signal(false);
  submitted = signal(false);
  submitError = signal(null);
  showPassword = signal(false);
  showConfirmPassword = signal(false);
  isLookingUpCep = signal(false);
  cepNotFound = signal(false);
  segments = [
    "Restaurante",
    "Bar",
    "Lanchonete",
    "Cafeteria",
    "Padaria e Confeitaria",
    "Food Truck",
    "Pizzaria",
    "Sorveteria",
    "Outro"
  ];
  account = this.fb.nonNullable.group({
    fullName: ["", [Validators.required, Validators.minLength(3)]],
    cpf: ["", [Validators.required, cpfValidator()]],
    email: ["", [Validators.required, Validators.email]],
    phone: ["", [Validators.required]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    confirmPassword: ["", [Validators.required]]
  }, { validators: passwordsMatchValidator });
  company = this.fb.nonNullable.group({
    businessName: ["", [Validators.required, Validators.minLength(2)]],
    cnpj: ["", [Validators.required, cnpjValidator()]],
    segment: ["", [Validators.required]],
    businessPhone: ["", [Validators.required]],
    businessEmail: ["", [Validators.required, Validators.email]]
  });
  address = this.fb.nonNullable.group({
    cep: ["", [Validators.required, cepValidator()]],
    street: ["", [Validators.required]],
    number: ["", [Validators.required]],
    complement: [""],
    neighborhood: ["", [Validators.required]],
    city: ["", [Validators.required]],
    state: ["", [Validators.required]]
  });
  acceptTerms = this.fb.nonNullable.control(false, Validators.requiredTrue);
  form = this.fb.group({
    account: this.account,
    company: this.company,
    address: this.address,
    acceptTerms: this.acceptTerms
  });
  togglePassword() {
    this.showPassword.update((v) => !v);
  }
  toggleConfirmPassword() {
    this.showConfirmPassword.update((v) => !v);
  }
  onCpfInput(event) {
    const input = event.target;
    this.account.controls.cpf.setValue(formatCPF(input.value));
  }
  onCnpjInput(event) {
    const input = event.target;
    this.company.controls.cnpj.setValue(formatCNPJ(input.value));
  }
  onAccountPhoneInput(event) {
    const input = event.target;
    this.account.controls.phone.setValue(formatCellphone(input.value));
  }
  onBusinessPhoneInput(event) {
    const input = event.target;
    this.company.controls.businessPhone.setValue(formatCellphone(input.value));
  }
  onCepInput(event) {
    const input = event.target;
    this.address.controls.cep.setValue(formatCEP(input.value));
    this.cepNotFound.set(false);
  }
  onCepBlur() {
    const digits = onlyDigits(this.address.controls.cep.value);
    if (digits.length !== 8) {
      return;
    }
    this.isLookingUpCep.set(true);
    this.cepNotFound.set(false);
    this.cepService.lookup(digits).subscribe({
      next: (result) => {
        this.isLookingUpCep.set(false);
        if (!result) {
          this.cepNotFound.set(true);
          return;
        }
        this.address.patchValue({
          street: result.street,
          neighborhood: result.neighborhood,
          city: result.city,
          state: result.state
        });
      },
      error: () => {
        this.isLookingUpCep.set(false);
        this.cepNotFound.set(true);
      }
    });
  }
  goToNextStep() {
    const group = this.currentStep() === 1 ? this.account : this.company;
    if (group.invalid) {
      group.markAllAsTouched();
      return;
    }
    this.currentStep.update((step) => Math.min(step + 1, this.stepCount));
  }
  goToPreviousStep() {
    this.currentStep.update((step) => Math.max(step - 1, 1));
  }
  onSubmit() {
    if (this.address.invalid || this.acceptTerms.invalid) {
      this.address.markAllAsTouched();
      this.acceptTerms.markAsTouched();
      return;
    }
    this.submitError.set(null);
    this.isSubmitting.set(true);
    this.accountsService.createAccount(this.buildPayload()).subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.submitted.set(true);
      },
      error: (error) => {
        this.isSubmitting.set(false);
        this.submitError.set(this.resolveErrorMessage(error));
      }
    });
  }
  buildPayload() {
    const account = this.account.getRawValue();
    const company = this.company.getRawValue();
    const address = this.address.getRawValue();
    return {
      owner: {
        fullName: account.fullName.trim(),
        cpf: onlyDigits(account.cpf),
        email: account.email.trim(),
        phone: onlyDigits(account.phone),
        password: account.password
      },
      company: {
        businessName: company.businessName.trim(),
        cnpj: onlyDigits(company.cnpj),
        segment: company.segment,
        phone: onlyDigits(company.businessPhone),
        email: company.businessEmail.trim()
      },
      address: {
        zipCode: onlyDigits(address.cep),
        street: address.street.trim(),
        number: address.number.trim(),
        complement: address.complement.trim() || void 0,
        neighborhood: address.neighborhood.trim(),
        city: address.city.trim(),
        state: address.state.trim().toUpperCase()
      },
      acceptedTerms: this.acceptTerms.value
    };
  }
  resolveErrorMessage(error) {
    const body = error.error;
    if (body?.mensagem) {
      return body.mensagem;
    }
    if (body?.titulo) {
      return body.titulo;
    }
    if (error.status === 409) {
      return "E-mail, CPF ou CNPJ j\xE1 cadastrado no sistema.";
    }
    if (error.status === 422) {
      return "Verifique os dados informados e tente novamente.";
    }
    return "N\xE3o foi poss\xEDvel criar a conta. Tente novamente em instantes.";
  }
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [["eyebrow", "Comece agora", "title", "Criar sua conta", "subtitle", "Sem mensalidade. Voc\xEA paga apenas pelas comandas que utilizar."], ["role", "status", 1, "form-alert", "form-alert--success"], ["aria-hidden", "true", 1, "material-icons"], [1, "form-footer"], ["routerLink", "/entrar", 1, "field__link"], ["aria-label", "Etapas do cadastro", 1, "steps"], [1, "steps__item"], [1, "steps__index"], [1, "steps__label"], ["novalidate", "", 3, "ngSubmit", "formGroup"], ["formGroupName", "account"], [1, "step-heading"], [1, "field"], ["for", "register-name", 1, "field__label"], [1, "field__control"], ["id", "register-name", "type", "text", "formControlName", "fullName", "placeholder", "Seu nome", "autocomplete", "name", 1, "field__input"], [1, "field__error"], ["for", "register-cpf", 1, "field__label"], ["id", "register-cpf", "type", "text", "inputmode", "numeric", "formControlName", "cpf", "placeholder", "000.000.000-00", "maxlength", "14", 1, "field__input", 3, "input"], ["for", "register-email", 1, "field__label"], ["id", "register-email", "type", "email", "formControlName", "email", "placeholder", "voce@seurestaurante.com", "autocomplete", "email", 1, "field__input"], ["for", "register-phone", 1, "field__label"], ["id", "register-phone", "type", "tel", "inputmode", "numeric", "formControlName", "phone", "placeholder", "(00) 00000-0000", "maxlength", "15", "autocomplete", "tel", 1, "field__input", 3, "input"], ["for", "register-password", 1, "field__label"], ["id", "register-password", "formControlName", "password", "placeholder", "Crie uma senha", "autocomplete", "new-password", 1, "field__input", 3, "type"], ["type", "button", 1, "field__toggle", 3, "click"], ["for", "register-confirm-password", 1, "field__label"], ["id", "register-confirm-password", "formControlName", "confirmPassword", "placeholder", "Repita a senha", "autocomplete", "new-password", 1, "field__input", 3, "type"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", 2, "width", "100%", "margin-top", "28px", 3, "click"], ["formGroupName", "company"], ["for", "register-business-name", 1, "field__label"], ["id", "register-business-name", "type", "text", "formControlName", "businessName", "placeholder", "Ex: Restaurante Exemplo", "autocomplete", "organization", 1, "field__input"], ["for", "register-cnpj", 1, "field__label"], ["id", "register-cnpj", "type", "text", "inputmode", "numeric", "formControlName", "cnpj", "placeholder", "00.000.000/0000-00", "maxlength", "18", 1, "field__input", 3, "input"], ["for", "register-segment", 1, "field__label"], ["id", "register-segment", "formControlName", "segment", 1, "field__input"], ["value", "", "disabled", ""], [3, "value"], ["for", "register-business-phone", 1, "field__label"], ["id", "register-business-phone", "type", "tel", "inputmode", "numeric", "formControlName", "businessPhone", "placeholder", "(00) 00000-0000", "maxlength", "15", "autocomplete", "tel", 1, "field__input", 3, "input"], ["for", "register-business-email", 1, "field__label"], ["id", "register-business-email", "type", "email", "formControlName", "businessEmail", "placeholder", "contato@seurestaurante.com", "autocomplete", "email", 1, "field__input"], [1, "step-actions"], ["type", "button", "appRipple", "", 1, "btn", "btn--ghost", 3, "click"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", 3, "click"], ["formGroupName", "address"], ["for", "register-cep", 1, "field__label"], ["id", "register-cep", "type", "text", "inputmode", "numeric", "formControlName", "cep", "placeholder", "00000-000", "maxlength", "9", 1, "field__input", 3, "input", "blur"], [1, "field__hint"], ["for", "register-street", 1, "field__label"], [1, "field__optional"], ["id", "register-street", "type", "text", "formControlName", "street", "placeholder", "Nome da rua", "autocomplete", "address-line1", 1, "field__input"], ["for", "register-number", 1, "field__label"], ["id", "register-number", "type", "text", "formControlName", "number", "placeholder", "N\xBA", 1, "field__input"], ["for", "register-complement", 1, "field__label"], ["id", "register-complement", "type", "text", "formControlName", "complement", "placeholder", "Sala, bloco, refer\xEAncia...", 1, "field__input"], ["for", "register-neighborhood", 1, "field__label"], ["id", "register-neighborhood", "type", "text", "formControlName", "neighborhood", "placeholder", "Bairro", 1, "field__input"], ["for", "register-city", 1, "field__label"], ["id", "register-city", "type", "text", "formControlName", "city", "placeholder", "Cidade", 1, "field__input"], ["for", "register-state", 1, "field__label"], ["id", "register-state", "type", "text", "formControlName", "state", "placeholder", "UF", "maxlength", "2", 1, "field__input"], [1, "field", 2, "margin-top", "24px"], [1, "field__checkbox"], ["type", "checkbox", "formControlName", "acceptTerms"], ["routerLink", "/termos-de-uso", "target", "_blank", "rel", "noopener"], ["routerLink", "/politica-de-privacidade", "target", "_blank", "rel", "noopener"], ["role", "alert", 1, "form-alert", "form-alert--error"], ["type", "submit", "appRipple", "", 1, "btn", "btn--primary", 3, "disabled"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-auth-shell", 0);
      \u0275\u0275template(1, RegisterComponent_Conditional_1_Template, 7, 0)(2, RegisterComponent_Conditional_2_Template, 24, 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.submitted() ? 1 : 2);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, FormGroupName, RouterLink, AuthShellComponent, RippleDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.steps[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 8px;\n  margin: 28px 0 4px;\n  padding: 0;\n  list-style: none;\n}\n.steps__item[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  text-align: center;\n  color: var(--color-text-muted);\n}\n.steps__index[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 1px solid var(--color-border-strong);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  transition:\n    border-color var(--transition-fast),\n    background var(--transition-fast),\n    color var(--transition-fast);\n}\n.steps__label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.steps__item--active[_ngcontent-%COMP%] {\n  color: var(--color-text);\n}\n.steps__item--active[_ngcontent-%COMP%]   .steps__index[_ngcontent-%COMP%] {\n  border-color: var(--color-accent);\n  background: var(--color-accent-bg);\n  color: var(--color-accent-hover);\n}\n.steps__item--done[_ngcontent-%COMP%] {\n  color: var(--color-text);\n}\n.steps__item--done[_ngcontent-%COMP%]   .steps__index[_ngcontent-%COMP%] {\n  border-color: var(--color-success);\n  background: var(--color-success-bg);\n  color: var(--color-success);\n}\n.step-heading[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n}\n.step-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 28px;\n}\n.step-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=register.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src\\app\\features\\auth\\pages\\register\\register.component.ts", lineNumber: 27 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-ZTUBFD3S.js.map
