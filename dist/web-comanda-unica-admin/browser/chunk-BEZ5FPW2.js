import {
  cpfValidator,
  fullNameValidator,
  phoneValidator
} from "./chunk-76XGARBF.js";
import {
  formatCPF,
  formatCellphone,
  onlyDigits
} from "./chunk-BXBL77KJ.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-TG667HJW.js";
import {
  RippleDirective
} from "./chunk-QNTXMNHH.js";
import {
  AuthService
} from "./chunk-TA4FF7VW.js";
import {
  environment
} from "./chunk-MZ4AGMPU.js";
import {
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-4IFGYJZR.js";

// src/app/shared/services/employees.service.ts
var EmployeesService = class _EmployeesService {
  http = inject(HttpClient);
  list(page, size) {
    return this.http.get(`${environment.apiBaseUrl}/api/v1/employees`, {
      params: { page, size }
    });
  }
  get(employeeId) {
    return this.http.get(`${environment.apiBaseUrl}/api/v1/employees/${employeeId}`);
  }
  create(payload) {
    return this.http.post(`${environment.apiBaseUrl}/api/v1/employees`, payload);
  }
  update(employeeId, payload) {
    return this.http.put(`${environment.apiBaseUrl}/api/v1/employees/${employeeId}`, payload);
  }
  deactivate(employeeId) {
    return this.http.delete(`${environment.apiBaseUrl}/api/v1/employees/${employeeId}`);
  }
  static \u0275fac = function EmployeesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmployeesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EmployeesService, factory: _EmployeesService.\u0275fac, providedIn: "root" });
};

// src/app/shared/services/profiles.service.ts
var ProfilesService = class _ProfilesService {
  http = inject(HttpClient);
  list() {
    return this.http.get(`${environment.apiBaseUrl}/api/v1/profiles`);
  }
  static \u0275fac = function ProfilesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfilesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProfilesService, factory: _ProfilesService.\u0275fac, providedIn: "root" });
};

// src/app/features/admin/pages/employees/employees.component.ts
var _forTrack0 = ($index, $item) => $item.employeeId;
var _forTrack1 = ($index, $item) => $item.id;
function EmployeesComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1, "Carregando funcion\xE1rios\u2026");
    \u0275\u0275elementEnd();
  }
}
function EmployeesComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 4);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.listError(), " ");
  }
}
function EmployeesComponent_Conditional_12_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 16);
    \u0275\u0275text(2, "Nenhum funcion\xE1rio encontrado.");
    \u0275\u0275elementEnd()();
  }
}
function EmployeesComponent_Conditional_12_For_20_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function EmployeesComponent_Conditional_12_For_20_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const employee_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.requestDeactivate(employee_r4));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "block");
    \u0275\u0275elementEnd()();
  }
}
function EmployeesComponent_Conditional_12_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 17);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 11)(13, "button", 18);
    \u0275\u0275listener("click", function EmployeesComponent_Conditional_12_For_20_Template_button_click_13_listener() {
      const employee_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEditModal(employee_r4));
    });
    \u0275\u0275elementStart(14, "span", 4);
    \u0275\u0275text(15, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, EmployeesComponent_Conditional_12_For_20_Conditional_16_Template, 3, 0, "button", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const employee_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(employee_r4.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(employee_r4.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatPhoneDisplay(employee_r4.phone));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(employee_r4.profileName);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge--success", employee_r4.status === "ACTIVE")("badge--muted", employee_r4.status !== "ACTIVE");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", employee_r4.status === "ACTIVE" ? "Ativo" : "Inativo", " ");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(employee_r4.status === "ACTIVE" ? 16 : -1);
  }
}
function EmployeesComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 9)(2, "table", 10)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Nome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "E-mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Telefone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Perfil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 11);
    \u0275\u0275text(16, "A\xE7\xF5es");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, EmployeesComponent_Conditional_12_Conditional_18_Template, 3, 0, "tr");
    \u0275\u0275repeaterCreate(19, EmployeesComponent_Conditional_12_For_20_Template, 17, 10, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 12)(22, "span", 13);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 14)(25, "button", 15);
    \u0275\u0275listener("click", function EmployeesComponent_Conditional_12_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.previousPage());
    });
    \u0275\u0275elementStart(26, "span", 4);
    \u0275\u0275text(27, "chevron_left");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " Anterior ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 15);
    \u0275\u0275listener("click", function EmployeesComponent_Conditional_12_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.nextPage());
    });
    \u0275\u0275text(30, " Pr\xF3xima ");
    \u0275\u0275elementStart(31, "span", 4);
    \u0275\u0275text(32, "chevron_right");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275conditional(ctx_r0.employees().length === 0 ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.employees());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r0.totalElements(), " funcion\xE1rio(s) \u2014 ", ctx_r0.pageLabel(), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.page() === 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.isLast());
  }
}
function EmployeesComponent_Conditional_13_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "Informe o nome completo (nome e sobrenome).");
    \u0275\u0275elementEnd();
  }
}
function EmployeesComponent_Conditional_13_Conditional_15_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "Informe um CPF v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function EmployeesComponent_Conditional_13_Conditional_15_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "Informe um e-mail v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function EmployeesComponent_Conditional_13_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "label", 41);
    \u0275\u0275text(2, "CPF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29)(4, "input", 42);
    \u0275\u0275listener("input", function EmployeesComponent_Conditional_13_Conditional_15_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onCpfInput($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, EmployeesComponent_Conditional_13_Conditional_15_Conditional_5_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 27)(7, "label", 43);
    \u0275\u0275text(8, "E-mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 29);
    \u0275\u0275element(10, "input", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, EmployeesComponent_Conditional_13_Conditional_15_Conditional_11_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("field__input--invalid", ctx_r0.employeeForm.controls.cpf.invalid && ctx_r0.employeeForm.controls.cpf.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.employeeForm.controls.cpf.invalid && ctx_r0.employeeForm.controls.cpf.touched ? 5 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("field__input--invalid", ctx_r0.employeeForm.controls.email.invalid && ctx_r0.employeeForm.controls.email.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.employeeForm.controls.email.invalid && ctx_r0.employeeForm.controls.email.touched ? 11 : -1);
  }
}
function EmployeesComponent_Conditional_13_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "Informe um telefone v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function EmployeesComponent_Conditional_13_Conditional_22_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "A senha deve ter ao menos 6 caracteres, com letras e n\xFAmeros.");
    \u0275\u0275elementEnd();
  }
}
function EmployeesComponent_Conditional_13_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "label", 45);
    \u0275\u0275text(2, "Senha inicial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29);
    \u0275\u0275element(4, "input", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, EmployeesComponent_Conditional_13_Conditional_22_Conditional_5_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("field__input--invalid", ctx_r0.employeeForm.controls.password.invalid && ctx_r0.employeeForm.controls.password.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.employeeForm.controls.password.invalid && ctx_r0.employeeForm.controls.password.touched ? 5 : -1);
  }
}
function EmployeesComponent_Conditional_13_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const profile_r8 = ctx.$implicit;
    \u0275\u0275property("value", profile_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(profile_r8.name);
  }
}
function EmployeesComponent_Conditional_13_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1, "Carregando perfis\u2026");
    \u0275\u0275elementEnd();
  }
}
function EmployeesComponent_Conditional_13_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "Selecione um perfil de acesso.");
    \u0275\u0275elementEnd();
  }
}
function EmployeesComponent_Conditional_13_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 4);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formError(), " ");
  }
}
function EmployeesComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275listener("click", function EmployeesComponent_Conditional_13_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 22);
    \u0275\u0275listener("click", function EmployeesComponent_Conditional_13_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 23)(3, "h2", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 25);
    \u0275\u0275listener("click", function EmployeesComponent_Conditional_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(6, "span", 4);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "form", 26);
    \u0275\u0275listener("submit", function EmployeesComponent_Conditional_13_Template_form_submit_8_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r0.submitEmployee());
    });
    \u0275\u0275elementStart(9, "div", 27)(10, "label", 28);
    \u0275\u0275text(11, "Nome completo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 29);
    \u0275\u0275element(13, "input", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, EmployeesComponent_Conditional_13_Conditional_14_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, EmployeesComponent_Conditional_13_Conditional_15_Template, 12, 6);
    \u0275\u0275elementStart(16, "div", 27)(17, "label", 32);
    \u0275\u0275text(18, "Telefone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 29)(20, "input", 33);
    \u0275\u0275listener("input", function EmployeesComponent_Conditional_13_Template_input_input_20_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPhoneInput($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, EmployeesComponent_Conditional_13_Conditional_21_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, EmployeesComponent_Conditional_13_Conditional_22_Template, 6, 3, "div", 27);
    \u0275\u0275elementStart(23, "div", 27)(24, "label", 34);
    \u0275\u0275text(25, "Perfil de acesso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 29)(27, "select", 35)(28, "option", 36);
    \u0275\u0275text(29, "Selecione um perfil");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(30, EmployeesComponent_Conditional_13_For_31_Template, 2, 2, "option", 37, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, EmployeesComponent_Conditional_13_Conditional_32_Template, 2, 0, "span", 5)(33, EmployeesComponent_Conditional_13_Conditional_33_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, EmployeesComponent_Conditional_13_Conditional_34_Template, 4, 1, "div", 6);
    \u0275\u0275elementStart(35, "div", 38)(36, "button", 39);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 40);
    \u0275\u0275listener("click", function EmployeesComponent_Conditional_13_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(39, "Cancelar");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.modalMode() === "create" ? "Novo funcion\xE1rio" : "Editar funcion\xE1rio");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r0.employeeForm);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("field__input--invalid", ctx_r0.employeeForm.controls.fullName.invalid && ctx_r0.employeeForm.controls.fullName.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.employeeForm.controls.fullName.invalid && ctx_r0.employeeForm.controls.fullName.touched ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.modalMode() === "create" ? 15 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("field__input--invalid", ctx_r0.employeeForm.controls.phone.invalid && ctx_r0.employeeForm.controls.phone.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.employeeForm.controls.phone.invalid && ctx_r0.employeeForm.controls.phone.touched ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.modalMode() === "create" ? 22 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("field__input--invalid", ctx_r0.employeeForm.controls.profileId.invalid && ctx_r0.employeeForm.controls.profileId.touched);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.profileOptions());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isLoadingProfiles() ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.employeeForm.controls.profileId.invalid && ctx_r0.employeeForm.controls.profileId.touched ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.formError() ? 34 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isSubmitting() ? "Salvando\u2026" : "Salvar", " ");
  }
}
function EmployeesComponent_Conditional_14_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 4);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.deactivateError(), " ");
  }
}
function EmployeesComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275listener("click", function EmployeesComponent_Conditional_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelDeactivate());
    });
    \u0275\u0275elementStart(1, "div", 47);
    \u0275\u0275listener("click", function EmployeesComponent_Conditional_14_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h2", 24);
    \u0275\u0275text(3, "Desativar funcion\xE1rio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 5);
    \u0275\u0275text(5, " Tem certeza que deseja desativar ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "? O acesso ao sistema ser\xE1 bloqueado imediatamente. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, EmployeesComponent_Conditional_14_Conditional_9_Template, 4, 1, "div", 6);
    \u0275\u0275elementStart(10, "div", 38)(11, "button", 48);
    \u0275\u0275listener("click", function EmployeesComponent_Conditional_14_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmDeactivate());
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 40);
    \u0275\u0275listener("click", function EmployeesComponent_Conditional_14_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelDeactivate());
    });
    \u0275\u0275text(14, "Cancelar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.deactivateError() ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isDeactivating());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isDeactivating() ? "Desativando\u2026" : "Desativar", " ");
  }
}
var PAGE_SIZE = 10;
var PASSWORD_PATTERN = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
var EmployeesComponent = class _EmployeesComponent {
  fb = new FormBuilder();
  employeesService = inject(EmployeesService);
  profilesService = inject(ProfilesService);
  authService = inject(AuthService);
  selectedCompany = this.authService.selectedCompany;
  employees = signal([]);
  page = signal(0);
  totalPages = signal(0);
  totalElements = signal(0);
  isLast = signal(true);
  isLoadingList = signal(true);
  listError = signal(null);
  profileOptions = signal([]);
  isLoadingProfiles = signal(false);
  isModalOpen = signal(false);
  modalMode = signal("create");
  editingEmployeeId = signal(null);
  isSubmitting = signal(false);
  formError = signal(null);
  employeeToDeactivate = signal(null);
  isDeactivating = signal(false);
  deactivateError = signal(null);
  pageLabel = computed(() => `P\xE1gina ${this.page() + 1} de ${Math.max(this.totalPages(), 1)}`);
  employeeForm = this.fb.nonNullable.group({
    fullName: ["", [Validators.required, fullNameValidator()]],
    cpf: [""],
    email: [""],
    phone: ["", [Validators.required, phoneValidator()]],
    password: [""],
    profileId: ["", Validators.required]
  });
  constructor() {
    this.loadEmployees(0);
  }
  formatPhoneDisplay(phone) {
    return formatCellphone(phone);
  }
  loadEmployees(page) {
    this.isLoadingList.set(true);
    this.listError.set(null);
    this.employeesService.list(page, PAGE_SIZE).subscribe({
      next: (response) => {
        this.employees.set(response.content);
        this.page.set(response.page);
        this.totalPages.set(response.totalPages);
        this.totalElements.set(response.totalElements);
        this.isLast.set(response.last);
        this.isLoadingList.set(false);
      },
      error: () => {
        this.isLoadingList.set(false);
        this.listError.set("N\xE3o foi poss\xEDvel carregar os funcion\xE1rios.");
      }
    });
  }
  goToPage(page) {
    if (page < 0 || page >= this.totalPages() || page === this.page()) {
      return;
    }
    this.loadEmployees(page);
  }
  previousPage() {
    this.goToPage(this.page() - 1);
  }
  nextPage() {
    this.goToPage(this.page() + 1);
  }
  openCreateModal() {
    this.modalMode.set("create");
    this.editingEmployeeId.set(null);
    this.formError.set(null);
    this.employeeForm.reset({ fullName: "", cpf: "", email: "", phone: "", password: "", profileId: "" });
    this.employeeForm.controls.cpf.setValidators([Validators.required, cpfValidator()]);
    this.employeeForm.controls.email.setValidators([Validators.required, Validators.email]);
    this.employeeForm.controls.password.setValidators([
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(PASSWORD_PATTERN)
    ]);
    this.updateConditionalValidity();
    this.isModalOpen.set(true);
    this.ensureProfileOptionsLoaded();
  }
  openEditModal(employee) {
    this.modalMode.set("edit");
    this.editingEmployeeId.set(employee.employeeId);
    this.formError.set(null);
    this.employeeForm.reset({
      fullName: employee.fullName,
      cpf: "",
      email: "",
      phone: formatCellphone(employee.phone),
      password: "",
      profileId: employee.profileId
    });
    this.employeeForm.controls.cpf.clearValidators();
    this.employeeForm.controls.email.clearValidators();
    this.employeeForm.controls.password.clearValidators();
    this.updateConditionalValidity();
    this.isModalOpen.set(true);
    this.ensureProfileOptionsLoaded();
  }
  closeModal() {
    this.isModalOpen.set(false);
  }
  onCpfInput(event) {
    const input = event.target;
    this.employeeForm.controls.cpf.setValue(formatCPF(input.value));
  }
  onPhoneInput(event) {
    const input = event.target;
    this.employeeForm.controls.phone.setValue(formatCellphone(input.value));
  }
  submitEmployee() {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      this.formError.set("Verifique os campos destacados antes de salvar.");
      return;
    }
    this.formError.set(null);
    this.isSubmitting.set(true);
    if (this.modalMode() === "create") {
      this.employeesService.create(this.buildCreatePayload()).subscribe({
        next: () => {
          this.isSubmitting.set(false);
          this.isModalOpen.set(false);
          this.loadEmployees(0);
        },
        error: (error) => {
          this.isSubmitting.set(false);
          this.formError.set(this.resolveErrorMessage(error));
        }
      });
      return;
    }
    const employeeId = this.editingEmployeeId();
    if (!employeeId) {
      return;
    }
    this.employeesService.update(employeeId, this.buildUpdatePayload()).subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.isModalOpen.set(false);
        this.loadEmployees(this.page());
      },
      error: (error) => {
        this.isSubmitting.set(false);
        this.formError.set(this.resolveErrorMessage(error));
      }
    });
  }
  requestDeactivate(employee) {
    this.deactivateError.set(null);
    this.employeeToDeactivate.set(employee);
  }
  cancelDeactivate() {
    this.employeeToDeactivate.set(null);
  }
  confirmDeactivate() {
    const employee = this.employeeToDeactivate();
    if (!employee) {
      return;
    }
    this.isDeactivating.set(true);
    this.deactivateError.set(null);
    this.employeesService.deactivate(employee.employeeId).subscribe({
      next: () => {
        this.isDeactivating.set(false);
        this.employeeToDeactivate.set(null);
        this.loadEmployees(this.page());
      },
      error: (error) => {
        this.isDeactivating.set(false);
        this.deactivateError.set(this.resolveErrorMessage(error));
      }
    });
  }
  ensureProfileOptionsLoaded() {
    if (this.profileOptions().length > 0 || this.isLoadingProfiles()) {
      return;
    }
    this.isLoadingProfiles.set(true);
    this.profilesService.list().subscribe({
      next: (profiles) => {
        this.isLoadingProfiles.set(false);
        this.profileOptions.set(profiles.filter((profile) => profile.isActive !== false));
      },
      error: () => {
        this.isLoadingProfiles.set(false);
      }
    });
  }
  updateConditionalValidity() {
    this.employeeForm.controls.cpf.updateValueAndValidity();
    this.employeeForm.controls.email.updateValueAndValidity();
    this.employeeForm.controls.password.updateValueAndValidity();
  }
  buildCreatePayload() {
    const value = this.employeeForm.getRawValue();
    return {
      fullName: value.fullName.trim(),
      cpf: onlyDigits(value.cpf),
      email: value.email.trim(),
      phone: onlyDigits(value.phone),
      password: value.password,
      profileId: value.profileId
    };
  }
  buildUpdatePayload() {
    const value = this.employeeForm.getRawValue();
    return {
      fullName: value.fullName.trim(),
      phone: onlyDigits(value.phone),
      profileId: value.profileId
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
      return "E-mail ou CPF j\xE1 pertence a outro usu\xE1rio, ou o funcion\xE1rio j\xE1 est\xE1 vinculado a esta empresa.";
    }
    if (error.status === 403) {
      return "Voc\xEA n\xE3o tem permiss\xE3o para realizar esta a\xE7\xE3o.";
    }
    if (error.status === 404) {
      return "Funcion\xE1rio ou perfil informado n\xE3o encontrado.";
    }
    if (error.status === 422) {
      return "Verifique os dados informados e tente novamente.";
    }
    return "N\xE3o foi poss\xEDvel concluir a opera\xE7\xE3o. Tente novamente em instantes.";
  }
  static \u0275fac = function EmployeesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmployeesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmployeesComponent, selectors: [["app-admin-employees"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 4, consts: [[1, "page-header", "page-header--row"], [1, "page-title"], [1, "page-subtitle"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", 3, "click"], ["aria-hidden", "true", 1, "material-icons"], [1, "field__hint"], ["role", "alert", 1, "form-alert", "form-alert--error"], [1, "card", "table-card"], [1, "modal-backdrop"], [1, "table-wrapper"], [1, "data-table"], [1, "data-table__actions-col"], [1, "pagination"], [1, "pagination__info"], [1, "pagination__controls"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click", "disabled"], ["colspan", "6", 1, "data-table__empty"], [1, "badge"], ["type", "button", "title", "Editar", 1, "icon-btn", 3, "click"], ["type", "button", "title", "Desativar", 1, "icon-btn", "icon-btn--danger"], ["type", "button", "title", "Desativar", 1, "icon-btn", "icon-btn--danger", 3, "click"], [1, "modal-backdrop", 3, "click"], [1, "modal-card", "card", 3, "click"], [1, "modal-card__header"], [1, "step-heading"], ["type", "button", "aria-label", "Fechar", 1, "icon-btn", 3, "click"], ["novalidate", "", 3, "submit", "formGroup"], [1, "field"], ["for", "employee-full-name", 1, "field__label"], [1, "field__control"], ["id", "employee-full-name", "type", "text", "formControlName", "fullName", "placeholder", "Nome e sobrenome", "autocomplete", "name", 1, "field__input"], [1, "field__error"], ["for", "employee-phone", 1, "field__label"], ["id", "employee-phone", "type", "tel", "inputmode", "numeric", "formControlName", "phone", "placeholder", "(00) 00000-0000", "maxlength", "15", "autocomplete", "tel", 1, "field__input", 3, "input"], ["for", "employee-profile", 1, "field__label"], ["id", "employee-profile", "formControlName", "profileId", 1, "field__input"], ["value", "", "disabled", ""], [3, "value"], [1, "step-actions"], ["type", "submit", "appRipple", "", 1, "btn", "btn--primary", 3, "disabled"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["for", "employee-cpf", 1, "field__label"], ["id", "employee-cpf", "type", "text", "inputmode", "numeric", "formControlName", "cpf", "placeholder", "000.000.000-00", "maxlength", "14", 1, "field__input", 3, "input"], ["for", "employee-email", 1, "field__label"], ["id", "employee-email", "type", "email", "formControlName", "email", "placeholder", "email@exemplo.com", "autocomplete", "email", 1, "field__input"], ["for", "employee-password", 1, "field__label"], ["id", "employee-password", "type", "password", "formControlName", "password", "placeholder", "M\xEDnimo 6 caracteres", "autocomplete", "new-password", 1, "field__input"], [1, "modal-card", "modal-card--sm", "card", 3, "click"], ["type", "button", 1, "btn", "btn--danger", 3, "click", "disabled"]], template: function EmployeesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Funcion\xE1rios");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "button", 3);
      \u0275\u0275listener("click", function EmployeesComponent_Template_button_click_6_listener() {
        return ctx.openCreateModal();
      });
      \u0275\u0275elementStart(7, "span", 4);
      \u0275\u0275text(8, "person_add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " Novo funcion\xE1rio ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, EmployeesComponent_Conditional_10_Template, 2, 0, "p", 5)(11, EmployeesComponent_Conditional_11_Template, 4, 1, "div", 6)(12, EmployeesComponent_Conditional_12_Template, 33, 5, "div", 7)(13, EmployeesComponent_Conditional_13_Template, 40, 17, "div", 8)(14, EmployeesComponent_Conditional_14_Template, 15, 4, "div", 8);
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_3_0;
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" Gerencie os funcion\xE1rios vinculados a ", (tmp_0_0 = (tmp_0_0 = ctx.selectedCompany()) == null ? null : tmp_0_0.companyName) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : "sua empresa", ". ");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.isLoadingList() ? 10 : ctx.listError() ? 11 : 12);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isModalOpen() ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_3_0 = ctx.employeeToDeactivate()) ? 14 : -1, tmp_3_0);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, RippleDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.page-header--row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.table-card[_ngcontent-%COMP%] {\n  padding: 8px 0 0;\n  overflow: hidden;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.9375rem;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  text-align: left;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: 1px solid var(--color-border);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--color-border);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.02);\n}\n.data-table__actions-col[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.data-table__empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--color-text-muted);\n  padding: 32px 20px;\n  white-space: normal;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: var(--radius-full);\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.badge--success[_ngcontent-%COMP%] {\n  background: var(--color-success-bg);\n  color: var(--color-success);\n}\n.badge--muted[_ngcontent-%COMP%] {\n  background: rgba(203, 213, 225, 0.12);\n  color: var(--color-text-muted);\n}\n.icon-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius-sm);\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text);\n}\n.icon-btn[_ngcontent-%COMP%]    + .icon-btn[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.icon-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(248, 113, 113, 0.12);\n  color: #f87171;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  padding: 16px 20px;\n  border-top: 1px solid var(--color-border);\n}\n.pagination__info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n.pagination__controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(4, 8, 20, 0.64);\n  backdrop-filter: blur(2px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  z-index: 100;\n}\n.modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 520px;\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n  padding: 32px;\n}\n.modal-card--sm[_ngcontent-%COMP%] {\n  max-width: 420px;\n}\n.modal-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.step-heading[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n}\n.step-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 24px;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #f87171;\n  color: #2a0a0a;\n}\n.btn--danger[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n  transform: translateY(-2px);\n}\nselect.field__input[_ngcontent-%COMP%] {\n  appearance: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=employees.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmployeesComponent, { className: "EmployeesComponent", filePath: "src\\app\\features\\admin\\pages\\employees\\employees.component.ts", lineNumber: 29 });
})();
export {
  EmployeesComponent
};
//# sourceMappingURL=chunk-BEZ5FPW2.js.map
