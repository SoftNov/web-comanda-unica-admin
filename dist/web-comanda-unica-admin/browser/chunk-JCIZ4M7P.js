import {
  OrderQueueService
} from "./chunk-N2AOFOFB.js";
import {
  ServiceRequestsService
} from "./chunk-2TR56IPN.js";
import "./chunk-P57I5OWQ.js";
import {
  resolveHomeRoute
} from "./chunk-Z2QED7PE.js";
import {
  CepService
} from "./chunk-IJMCMBRT.js";
import {
  cepValidator,
  cnpjValidator
} from "./chunk-HQ4JFWRA.js";
import {
  formatCEP,
  formatCNPJ,
  formatCellphone,
  normalizeCNPJ,
  onlyDigits
} from "./chunk-OVYPUNLM.js";
import {
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
} from "./chunk-GEYGC3V6.js";
import {
  AuthService
} from "./chunk-S5GGO54V.js";
import {
  brDateTimeFormat,
  parseApiDate
} from "./chunk-BIWONMV5.js";
import {
  AccountsService
} from "./chunk-6XJSFLNG.js";
import {
  environment
} from "./chunk-IKIQHSDP.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-4G2LF4K6.js";
import {
  EventEmitter,
  HttpClient,
  __spreadProps,
  __spreadValues,
  computed,
  effect,
  inject,
  retry,
  signal,
  timer,
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
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-SZBF2MTG.js";

// src/app/shared/services/companies.service.ts
var CompaniesService = class _CompaniesService {
  http = inject(HttpClient);
  createAdditionalCompany(payload) {
    return this.http.post(`${environment.apiBaseUrl}/api/v1/companies`, payload);
  }
  static \u0275fac = function CompaniesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompaniesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CompaniesService, factory: _CompaniesService.\u0275fac, providedIn: "root" });
};

// src/app/shared/components/add-company-modal/add-company-modal.component.ts
function AddCompanyModalComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Informe o nome da empresa.");
    \u0275\u0275elementEnd();
  }
}
function AddCompanyModalComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r0.company.controls.cnpj.errors == null ? null : ctx_r0.company.controls.cnpj.errors["required"]) ? "Informe o CNPJ." : "Informe um CNPJ v\xE1lido.", " ");
  }
}
function AddCompanyModalComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275property("value", item_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2);
  }
}
function AddCompanyModalComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Selecione o segmento desta empresa.");
    \u0275\u0275elementEnd();
  }
}
function AddCompanyModalComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Informe o telefone desta empresa.");
    \u0275\u0275elementEnd();
  }
}
function AddCompanyModalComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r0.company.controls.businessEmail.errors == null ? null : ctx_r0.company.controls.businessEmail.errors["required"]) ? "Informe o e-mail desta empresa." : "Informe um e-mail v\xE1lido.", " ");
  }
}
function AddCompanyModalComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "Buscando endere\xE7o\u2026");
    \u0275\u0275elementEnd();
  }
}
function AddCompanyModalComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "CEP n\xE3o encontrado. Preencha o endere\xE7o manualmente.");
    \u0275\u0275elementEnd();
  }
}
function AddCompanyModalComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r0.address.controls.cep.errors == null ? null : ctx_r0.address.controls.cep.errors["required"]) ? "Informe o CEP." : "Informe um CEP v\xE1lido.", " ");
  }
}
function AddCompanyModalComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Informe a rua.");
    \u0275\u0275elementEnd();
  }
}
function AddCompanyModalComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Informe o n\xFAmero.");
    \u0275\u0275elementEnd();
  }
}
function AddCompanyModalComponent_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Informe o bairro.");
    \u0275\u0275elementEnd();
  }
}
function AddCompanyModalComponent_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Informe a cidade.");
    \u0275\u0275elementEnd();
  }
}
function AddCompanyModalComponent_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Informe o estado.");
    \u0275\u0275elementEnd();
  }
}
function AddCompanyModalComponent_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "span", 5);
    \u0275\u0275text(2, "error_outline");
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
var AddCompanyModalComponent = class _AddCompanyModalComponent {
  fb = new FormBuilder();
  companiesService = inject(CompaniesService);
  cepService = inject(CepService);
  closed = new EventEmitter();
  created = new EventEmitter();
  isSubmitting = signal(false);
  submitError = signal(null);
  isLookingUpCep = signal(false);
  cepNotFound = signal(false);
  // Precisa bater exatamente com business_type.name (ver ERR_BUSINESS_TYPE_NOT_FOUND em
  // AccountServiceImpl#createAdditionalCompany) — mesma lista de register.component.ts.
  segments = [
    "Restaurante",
    "Bar",
    "Lanchonete",
    "Hamburgueria",
    "Cafeteria",
    "Padaria e Confeitaria",
    "Food Truck",
    "Pizzaria",
    "Sorveteria",
    "Outro"
  ];
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
  form = this.fb.group({
    company: this.company,
    address: this.address
  });
  onCnpjInput(event) {
    const input = event.target;
    this.company.controls.cnpj.setValue(formatCNPJ(input.value));
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
  dismiss() {
    if (this.isSubmitting()) {
      return;
    }
    this.closed.emit();
  }
  submit() {
    if (this.company.invalid || this.address.invalid) {
      this.company.markAllAsTouched();
      this.address.markAllAsTouched();
      return;
    }
    this.isSubmitting.set(true);
    this.submitError.set(null);
    const company = this.company.getRawValue();
    const address = this.address.getRawValue();
    this.companiesService.createAdditionalCompany({
      company: {
        businessName: company.businessName.trim(),
        cnpj: normalizeCNPJ(company.cnpj),
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
      }
    }).subscribe({
      next: (response) => {
        this.isSubmitting.set(false);
        this.created.emit(response);
      },
      error: (error) => {
        this.isSubmitting.set(false);
        this.submitError.set(this.resolveErrorMessage(error));
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
    if (error.status === 409) {
      return "Este CNPJ j\xE1 est\xE1 cadastrado no sistema.";
    }
    if (error.status === 422) {
      return "Verifique os dados informados e tente novamente.";
    }
    return "N\xE3o foi poss\xEDvel cadastrar a empresa. Tente novamente em instantes.";
  }
  static \u0275fac = function AddCompanyModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddCompanyModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddCompanyModalComponent, selectors: [["app-add-company-modal"]], outputs: { closed: "closed", created: "created" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 102, vars: 39, consts: [[1, "modal-backdrop", 3, "click"], [1, "modal-card", "card", 3, "click"], [1, "modal-card__header"], [1, "step-heading"], ["type", "button", "aria-label", "Fechar", 1, "icon-btn", 3, "click", "disabled"], ["aria-hidden", "true", 1, "material-icons"], [1, "field__hint"], ["novalidate", "", 3, "ngSubmit", "formGroup"], ["formGroupName", "company"], [1, "field"], ["for", "add-company-business-name", 1, "field__label"], [1, "field__control"], ["id", "add-company-business-name", "type", "text", "formControlName", "businessName", "placeholder", "Ex: Restaurante Exemplo \u2014 Filial Centro", "autocomplete", "organization", 1, "field__input"], [1, "field__error"], ["for", "add-company-cnpj", 1, "field__label"], ["id", "add-company-cnpj", "type", "text", "autocapitalize", "characters", "formControlName", "cnpj", "placeholder", "00.000.000/0000-00", "maxlength", "18", 1, "field__input", 3, "input"], ["for", "add-company-segment", 1, "field__label"], ["id", "add-company-segment", "formControlName", "segment", 1, "field__input"], ["value", "", "disabled", ""], [3, "value"], ["for", "add-company-phone", 1, "field__label"], ["id", "add-company-phone", "type", "tel", "inputmode", "numeric", "formControlName", "businessPhone", "placeholder", "(00) 00000-0000", "maxlength", "15", "autocomplete", "tel", 1, "field__input", 3, "input"], ["for", "add-company-email", 1, "field__label"], ["id", "add-company-email", "type", "email", "formControlName", "businessEmail", "placeholder", "contato@seurestaurante.com", "autocomplete", "email", 1, "field__input"], ["formGroupName", "address"], ["for", "add-company-cep", 1, "field__label"], ["id", "add-company-cep", "type", "text", "inputmode", "numeric", "formControlName", "cep", "placeholder", "00000-000", "maxlength", "9", 1, "field__input", 3, "input", "blur"], ["for", "add-company-street", 1, "field__label"], ["id", "add-company-street", "type", "text", "formControlName", "street", "placeholder", "Nome da rua", "autocomplete", "address-line1", 1, "field__input"], ["for", "add-company-number", 1, "field__label"], ["id", "add-company-number", "type", "text", "formControlName", "number", "placeholder", "N\xBA", 1, "field__input"], ["for", "add-company-complement", 1, "field__label"], [1, "field__optional"], ["id", "add-company-complement", "type", "text", "formControlName", "complement", "placeholder", "Sala, bloco, refer\xEAncia...", 1, "field__input"], ["for", "add-company-neighborhood", 1, "field__label"], ["id", "add-company-neighborhood", "type", "text", "formControlName", "neighborhood", "placeholder", "Bairro", 1, "field__input"], ["for", "add-company-city", 1, "field__label"], ["id", "add-company-city", "type", "text", "formControlName", "city", "placeholder", "Cidade", 1, "field__input"], ["for", "add-company-state", 1, "field__label"], ["id", "add-company-state", "type", "text", "formControlName", "state", "placeholder", "UF", "maxlength", "2", 1, "field__input"], ["role", "alert", 1, "form-alert", "form-alert--error"], [1, "step-actions"], ["type", "button", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn--primary", 3, "disabled"]], template: function AddCompanyModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function AddCompanyModalComponent_Template_div_click_0_listener() {
        return ctx.dismiss();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function AddCompanyModalComponent_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4, "Adicionar nova empresa");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 4);
      \u0275\u0275listener("click", function AddCompanyModalComponent_Template_button_click_5_listener() {
        return ctx.dismiss();
      });
      \u0275\u0275elementStart(6, "span", 5);
      \u0275\u0275text(7, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "p", 6);
      \u0275\u0275text(9, " Cadastre uma nova empresa (filial) vinculada \xE0 sua conta \u2014 voc\xEA continua respons\xE1vel (OWNER) tamb\xE9m por ela. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "form", 7);
      \u0275\u0275listener("ngSubmit", function AddCompanyModalComponent_Template_form_ngSubmit_10_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(11, "div", 8)(12, "h3", 3);
      \u0275\u0275text(13, "Dados da empresa");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 9)(15, "label", 10);
      \u0275\u0275text(16, "Nome Fantasia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 11);
      \u0275\u0275element(18, "input", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275template(19, AddCompanyModalComponent_Conditional_19_Template, 2, 0, "span", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 9)(21, "label", 14);
      \u0275\u0275text(22, "CNPJ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 11)(24, "input", 15);
      \u0275\u0275listener("input", function AddCompanyModalComponent_Template_input_input_24_listener($event) {
        return ctx.onCnpjInput($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(25, AddCompanyModalComponent_Conditional_25_Template, 2, 1, "span", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 9)(27, "label", 16);
      \u0275\u0275text(28, "Segmento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 11)(30, "select", 17)(31, "option", 18);
      \u0275\u0275text(32, "Selecione um segmento");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(33, AddCompanyModalComponent_For_34_Template, 2, 2, "option", 19, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(35, AddCompanyModalComponent_Conditional_35_Template, 2, 0, "span", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 9)(37, "label", 20);
      \u0275\u0275text(38, "Telefone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 11)(40, "input", 21);
      \u0275\u0275listener("input", function AddCompanyModalComponent_Template_input_input_40_listener($event) {
        return ctx.onBusinessPhoneInput($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(41, AddCompanyModalComponent_Conditional_41_Template, 2, 0, "span", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 9)(43, "label", 22);
      \u0275\u0275text(44, "E-mail");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 11);
      \u0275\u0275element(46, "input", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275template(47, AddCompanyModalComponent_Conditional_47_Template, 2, 1, "span", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 24)(49, "h3", 3);
      \u0275\u0275text(50, "Endere\xE7o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 9)(52, "label", 25);
      \u0275\u0275text(53, "CEP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 11)(55, "input", 26);
      \u0275\u0275listener("input", function AddCompanyModalComponent_Template_input_input_55_listener($event) {
        return ctx.onCepInput($event);
      })("blur", function AddCompanyModalComponent_Template_input_blur_55_listener() {
        return ctx.onCepBlur();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(56, AddCompanyModalComponent_Conditional_56_Template, 2, 0, "span", 6)(57, AddCompanyModalComponent_Conditional_57_Template, 2, 0, "span", 13)(58, AddCompanyModalComponent_Conditional_58_Template, 2, 1, "span", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 9)(60, "label", 27);
      \u0275\u0275text(61, "Rua");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 11);
      \u0275\u0275element(63, "input", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275template(64, AddCompanyModalComponent_Conditional_64_Template, 2, 0, "span", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 9)(66, "label", 29);
      \u0275\u0275text(67, "N\xFAmero");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 11);
      \u0275\u0275element(69, "input", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275template(70, AddCompanyModalComponent_Conditional_70_Template, 2, 0, "span", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 9)(72, "label", 31);
      \u0275\u0275text(73, "Complemento ");
      \u0275\u0275elementStart(74, "span", 32);
      \u0275\u0275text(75, "(opcional)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div", 11);
      \u0275\u0275element(77, "input", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 9)(79, "label", 34);
      \u0275\u0275text(80, "Bairro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 11);
      \u0275\u0275element(82, "input", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275template(83, AddCompanyModalComponent_Conditional_83_Template, 2, 0, "span", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 9)(85, "label", 36);
      \u0275\u0275text(86, "Cidade");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div", 11);
      \u0275\u0275element(88, "input", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275template(89, AddCompanyModalComponent_Conditional_89_Template, 2, 0, "span", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div", 9)(91, "label", 38);
      \u0275\u0275text(92, "Estado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "div", 11);
      \u0275\u0275element(94, "input", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275template(95, AddCompanyModalComponent_Conditional_95_Template, 2, 0, "span", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(96, AddCompanyModalComponent_Conditional_96_Template, 4, 1, "div", 40);
      \u0275\u0275elementStart(97, "div", 41)(98, "button", 42);
      \u0275\u0275listener("click", function AddCompanyModalComponent_Template_button_click_98_listener() {
        return ctx.dismiss();
      });
      \u0275\u0275text(99, "Cancelar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "button", 43);
      \u0275\u0275text(101);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", ctx.isSubmitting());
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(8);
      \u0275\u0275classProp("field__input--invalid", ctx.company.controls.businessName.invalid && ctx.company.controls.businessName.touched);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.company.controls.businessName.invalid && ctx.company.controls.businessName.touched ? 19 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("field__input--invalid", ctx.company.controls.cnpj.invalid && ctx.company.controls.cnpj.touched);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.company.controls.cnpj.invalid && ctx.company.controls.cnpj.touched ? 25 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("field__input--invalid", ctx.company.controls.segment.invalid && ctx.company.controls.segment.touched);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.segments);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.company.controls.segment.invalid && ctx.company.controls.segment.touched ? 35 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("field__input--invalid", ctx.company.controls.businessPhone.invalid && ctx.company.controls.businessPhone.touched);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.company.controls.businessPhone.invalid && ctx.company.controls.businessPhone.touched ? 41 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("field__input--invalid", ctx.company.controls.businessEmail.invalid && ctx.company.controls.businessEmail.touched);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.company.controls.businessEmail.invalid && ctx.company.controls.businessEmail.touched ? 47 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275classProp("field__input--invalid", ctx.address.controls.cep.invalid && ctx.address.controls.cep.touched);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLookingUpCep() ? 56 : ctx.cepNotFound() ? 57 : ctx.address.controls.cep.invalid && ctx.address.controls.cep.touched ? 58 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("field__input--invalid", ctx.address.controls.street.invalid && ctx.address.controls.street.touched);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.address.controls.street.invalid && ctx.address.controls.street.touched ? 64 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("field__input--invalid", ctx.address.controls.number.invalid && ctx.address.controls.number.touched);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.address.controls.number.invalid && ctx.address.controls.number.touched ? 70 : -1);
      \u0275\u0275advance(12);
      \u0275\u0275classProp("field__input--invalid", ctx.address.controls.neighborhood.invalid && ctx.address.controls.neighborhood.touched);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.address.controls.neighborhood.invalid && ctx.address.controls.neighborhood.touched ? 83 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("field__input--invalid", ctx.address.controls.city.invalid && ctx.address.controls.city.touched);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.address.controls.city.invalid && ctx.address.controls.city.touched ? 89 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("field__input--invalid", ctx.address.controls.state.invalid && ctx.address.controls.state.touched);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.address.controls.state.invalid && ctx.address.controls.state.touched ? 95 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.submitError() ? 96 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isSubmitting());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isSubmitting());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isSubmitting() ? "Cadastrando\u2026" : "Cadastrar empresa", " ");
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, FormGroupName], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.icon-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius-sm);\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text);\n}\n.icon-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(4, 8, 20, 0.64);\n  backdrop-filter: blur(2px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  z-index: 100;\n}\n.modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 520px;\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n  padding: 32px;\n}\n.modal-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.step-heading[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n}\nform[_ngcontent-%COMP%]   .step-heading[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  margin-bottom: 4px;\n  font-size: 0.9375rem;\n}\nform[_ngcontent-%COMP%]   .step-heading[_ngcontent-%COMP%]:first-child {\n  margin-top: 20px;\n}\n.step-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 24px;\n}\nselect.field__input[_ngcontent-%COMP%] {\n  appearance: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=add-company-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddCompanyModalComponent, { className: "AddCompanyModalComponent", filePath: "src\\app\\shared\\components\\add-company-modal\\add-company-modal.component.ts", lineNumber: 22 });
})();

// src/app/features/admin/config/menu.config.ts
var ADMIN_MENU_SEGMENTS = [
  {
    label: "Vis\xE3o Geral",
    items: [{ label: "Dashboard", icon: "dashboard", route: "/painel/dashboard" }]
  },
  {
    label: "Opera\xE7\xE3o",
    items: [
      {
        label: "Comandas",
        icon: "receipt_long",
        route: "/painel/comandas",
        roles: ["OWNER", "ADMIN", "MANAGER", "CASHIER", "WAITER"]
      },
      { label: "Pedidos", icon: "point_of_sale", route: "/painel/pedidos" },
      {
        label: "Reservas",
        icon: "event_seat",
        route: "/painel/reservas",
        roles: ["OWNER", "ADMIN", "MANAGER", "WAITER"]
      },
      {
        label: "Servi\xE7os Gerais",
        icon: "support_agent",
        children: [
          {
            label: "Servi\xE7os",
            icon: "room_service",
            route: "/painel/servicos",
            roles: ["OWNER", "ADMIN", "MANAGER", "CASHIER", "WAITER"]
          }
        ]
      }
    ]
  },
  {
    label: "Cadastros",
    items: [
      {
        label: "Mesas",
        icon: "table_bar",
        children: [
          {
            label: "Cadastro de Mesas",
            icon: "table_restaurant",
            route: "/painel/mesas",
            roles: ["ADMIN", "OWNER", "MANAGER"]
          },
          {
            label: "Mapa do Sal\xE3o",
            icon: "map",
            route: "/painel/configuracoes/mapa-salao",
            roles: ["ADMIN", "OWNER", "MANAGER"]
          }
        ]
      },
      { label: "Card\xE1pio", icon: "restaurant_menu", route: "/painel/cardapio", roles: ["ADMIN", "OWNER", "MANAGER"] },
      { label: "Funcion\xE1rios", icon: "groups", route: "/painel/funcionarios", roles: ["ADMIN", "OWNER", "MANAGER"] }
    ]
  },
  {
    label: "Financeiro",
    items: [
      { label: "Financeiro", icon: "payments", route: "/painel/financeiro" },
      { label: "Assinatura", icon: "card_membership", route: "/painel/assinatura", roles: ["OWNER", "ADMIN"] },
      {
        label: "Financeiro Comanda \xDAnica",
        icon: "account_balance",
        route: "/painel/financeiro-plataforma",
        platformAdminOnly: true
      },
      {
        label: "Stripe da Plataforma",
        icon: "credit_card",
        route: "/painel/configuracoes/stripe-plataforma",
        platformAdminOnly: true
      },
      {
        label: "Pre\xE7o da Assinatura",
        icon: "sell",
        route: "/painel/configuracoes/assinatura-plataforma",
        platformAdminOnly: true
      }
    ]
  },
  {
    label: "Configura\xE7\xF5es",
    items: [
      {
        label: "Configura\xE7\xF5es",
        icon: "settings",
        children: [
          { label: "Geral", icon: "tune", route: "/painel/configuracoes" },
          { label: "Meu perfil", icon: "person", route: "/painel/configuracoes/perfil" },
          { label: "Redefinir senha", icon: "lock_reset", route: "/painel/configuracoes/redefinir-senha" },
          {
            label: "Pagamentos",
            icon: "account_balance_wallet",
            route: "/painel/configuracoes/pagamentos",
            roles: ["OWNER", "ADMIN"]
          }
        ]
      }
    ]
  }
];

// src/app/shared/services/notification-sound.service.ts
var NotificationSoundService = class _NotificationSoundService {
  audioContext;
  playChime() {
    try {
      const context = this.getAudioContext();
      if (context.state === "suspended") {
        void context.resume();
      }
      this.playTone(context, 880, context.currentTime, 0.14);
      this.playTone(context, 1175, context.currentTime + 0.15, 0.18);
    } catch {
    }
  }
  getAudioContext() {
    if (!this.audioContext) {
      this.audioContext = new AudioContext();
    }
    return this.audioContext;
  }
  playTone(context, frequency, startTime, duration) {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, startTime);
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(0.2, startTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(1e-3, startTime + duration);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(startTime);
    oscillator.stop(startTime + duration);
  }
  static \u0275fac = function NotificationSoundService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationSoundService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationSoundService, factory: _NotificationSoundService.\u0275fac, providedIn: "root" });
};

// src/app/shared/services/notifications.service.ts
var ORDER_QUEUE_NOTIFICATION_PROFILES = ["OWNER", "ADMIN", "MANAGER", "CASHIER", "WAITER", "KITCHEN"];
var SERVICE_REQUEST_NOTIFICATION_PROFILES = ["OWNER", "ADMIN", "MANAGER", "CASHIER", "WAITER"];
var SERVICE_TYPE_LABELS = {
  CLEANING: "Limpeza",
  CALL_WAITER: "Chamar gar\xE7om",
  CALL_CASHIER: "Chamar caixa",
  COMPLAINT: "Reclama\xE7\xE3o",
  HELP: "Ajuda"
};
var WS_RETRY_DELAY_MS = 5e3;
var TOAST_DURATION_MS = 6e3;
var NotificationsService = class _NotificationsService {
  authService = inject(AuthService);
  orderQueueService = inject(OrderQueueService);
  serviceRequestsService = inject(ServiceRequestsService);
  notificationSoundService = inject(NotificationSoundService);
  // "Pendente" = ainda não chegou ao fim do fluxo: pedido ainda não entregue (REQUESTED/PREPARING/
  // ON_THE_WAY — DELIVERED sai da lista) e solicitação de serviço ainda não atendida (OPEN/
  // IN_PROGRESS — o backend já não retorna RESOLVED em listActive, então tudo que chega aqui já é
  // "pendente" por definição).
  pendingOrders = signal([]);
  pendingServiceRequests = signal([]);
  pendingOrdersCount = computed(() => this.pendingOrders().length);
  pendingServiceRequestsCount = computed(() => this.pendingServiceRequests().length);
  totalPendingCount = computed(() => this.pendingOrdersCount() + this.pendingServiceRequestsCount());
  toast = signal(null);
  knownOrderIds;
  knownServiceRequestIds;
  toastTimeoutId;
  constructor() {
    effect((onCleanup) => {
      const company = this.authService.selectedCompany();
      const token = this.authService.getAccessToken();
      this.knownOrderIds = void 0;
      this.knownServiceRequestIds = void 0;
      if (!company || !token) {
        this.pendingOrders.set([]);
        this.pendingServiceRequests.set([]);
        return;
      }
      const subscriptions = [];
      if (ORDER_QUEUE_NOTIFICATION_PROFILES.includes(company.profileCode)) {
        subscriptions.push(this.connectOrders(company.companyId, token));
      } else {
        this.pendingOrders.set([]);
      }
      if (SERVICE_REQUEST_NOTIFICATION_PROFILES.includes(company.profileCode)) {
        subscriptions.push(this.connectServiceRequests(company.companyId, token));
      } else {
        this.pendingServiceRequests.set([]);
      }
      onCleanup(() => subscriptions.forEach((subscription) => subscription.unsubscribe()));
    });
  }
  dismissToast() {
    if (this.toastTimeoutId) {
      clearTimeout(this.toastTimeoutId);
    }
    this.toast.set(null);
  }
  connectOrders(companyId, token) {
    return this.orderQueueService.connectRealtime(companyId, token).pipe(retry({ delay: () => timer(WS_RETRY_DELAY_MS) })).subscribe((items) => this.handleOrdersSnapshot(items));
  }
  connectServiceRequests(companyId, token) {
    return this.serviceRequestsService.connectRealtime(companyId, token).pipe(retry({ delay: () => timer(WS_RETRY_DELAY_MS) })).subscribe((requests) => this.handleServiceRequestsSnapshot(requests));
  }
  // O primeiro snapshot recebido só define a base de comparação, sem disparar notificação — senão
  // todo pedido/serviço já em aberto notificaria de novo cada vez que o sino reconecta.
  handleOrdersSnapshot(items) {
    const pending = items.filter((item) => item.status !== "DELIVERED");
    const currentIds = new Set(pending.map((item) => item.id));
    if (this.knownOrderIds) {
      const newItems = pending.filter((item) => !this.knownOrderIds.has(item.id));
      if (newItems.length > 0) {
        this.notifyNewOrders(newItems);
      }
    }
    this.knownOrderIds = currentIds;
    this.pendingOrders.set(pending);
  }
  handleServiceRequestsSnapshot(requests) {
    const currentIds = new Set(requests.map((request) => request.id));
    if (this.knownServiceRequestIds) {
      const newRequests = requests.filter((request) => !this.knownServiceRequestIds.has(request.id));
      if (newRequests.length > 0) {
        this.notifyNewServiceRequests(newRequests);
      }
    }
    this.knownServiceRequestIds = currentIds;
    this.pendingServiceRequests.set(requests);
  }
  notifyNewOrders(newItems) {
    const [first, ...rest] = newItems;
    this.showToast("point_of_sale", `Novo pedido \u2014 Mesa ${first.tableNumber}${rest.length > 0 ? ` (+${rest.length})` : ""}`);
    this.notificationSoundService.playChime();
  }
  notifyNewServiceRequests(newRequests) {
    const [first, ...rest] = newRequests;
    const typeLabel = SERVICE_TYPE_LABELS[first.type];
    this.showToast("support_agent", `Nova solicita\xE7\xE3o \u2014 Mesa ${first.tableNumber} (${typeLabel})${rest.length > 0 ? ` (+${rest.length})` : ""}`);
    this.notificationSoundService.playChime();
  }
  showToast(icon, message) {
    this.toast.set({ icon, message });
    if (this.toastTimeoutId) {
      clearTimeout(this.toastTimeoutId);
    }
    this.toastTimeoutId = setTimeout(() => this.toast.set(null), TOAST_DURATION_MS);
  }
  static \u0275fac = function NotificationsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationsService, factory: _NotificationsService.\u0275fac, providedIn: "root" });
};

// src/app/features/admin/layout/admin-layout/admin-layout.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.route;
var _forTrack2 = ($index, $item) => $item.id;
var _forTrack3 = ($index, $item) => $item.companyId;
function AdminLayoutComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileSidebar());
    });
    \u0275\u0275elementEnd();
  }
}
function AdminLayoutComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", (tmp_1_0 = ctx_r1.selectedCompany()) == null ? null : tmp_1_0.logoUrl, \u0275\u0275sanitizeUrl);
  }
}
function AdminLayoutComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 5);
  }
}
function AdminLayoutComponent_For_10_For_4_Conditional_0_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 31);
    \u0275\u0275listener("click", function AdminLayoutComponent_For_10_For_4_Conditional_0_Conditional_7_For_2_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.closeMobileSidebar());
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const child_r6 = ctx.$implicit;
    \u0275\u0275property("routerLink", child_r6.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r6.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r6.label);
  }
}
function AdminLayoutComponent_For_10_For_4_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275repeaterCreate(1, AdminLayoutComponent_For_10_For_4_Conditional_0_Conditional_7_For_2_Template, 5, 3, "a", 30, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(item_r4.children);
  }
}
function AdminLayoutComponent_For_10_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function AdminLayoutComponent_For_10_For_4_Conditional_0_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const item_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleGroup(item_r4, $event));
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AdminLayoutComponent_For_10_For_4_Conditional_0_Conditional_7_Template, 3, 0, "div", 29);
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("admin-sidebar__link--expanded", ctx_r1.isGroupExpanded(item_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isGroupExpanded(item_r4) ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isGroupExpanded(item_r4) ? 7 : -1);
  }
}
function AdminLayoutComponent_For_10_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 32);
    \u0275\u0275listener("click", function AdminLayoutComponent_For_10_For_4_Conditional_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeMobileSidebar());
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", item_r4.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.label);
  }
}
function AdminLayoutComponent_For_10_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AdminLayoutComponent_For_10_For_4_Conditional_0_Template, 8, 6)(1, AdminLayoutComponent_For_10_For_4_Conditional_1_Template, 5, 3, "a", 26);
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275conditional(item_r4.children ? 0 : 1);
  }
}
function AdminLayoutComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, AdminLayoutComponent_For_10_For_4_Template, 2, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const segment_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(segment_r8.label);
    \u0275\u0275advance();
    \u0275\u0275repeater(segment_r8.items);
  }
}
function AdminLayoutComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_22_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismissToast());
    });
    \u0275\u0275elementStart(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 36);
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const toast_r10 = ctx;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(toast_r10.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(toast_r10.message);
  }
}
function AdminLayoutComponent_Conditional_23_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.totalPendingCount());
  }
}
function AdminLayoutComponent_Conditional_23_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 41);
    \u0275\u0275text(1, "Nenhuma pend\xEAncia no momento.");
    \u0275\u0275elementEnd();
  }
}
function AdminLayoutComponent_Conditional_23_Conditional_5_Conditional_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_23_Conditional_5_Conditional_2_For_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.goToPedidos());
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2, "point_of_sale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 46)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 47);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("Mesa ", order_r14.tableNumber, "", order_r14.tableName ? " \u2014 " + order_r14.tableName : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", order_r14.itemName, " \xB7 ", ctx_r1.formatTime(order_r14.createdAt), "");
  }
}
function AdminLayoutComponent_Conditional_23_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, AdminLayoutComponent_Conditional_23_Conditional_5_Conditional_2_For_4_Template, 8, 4, "button", 44, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Pedidos pendentes (", ctx_r1.pendingOrders().length, ")");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.pendingOrders());
  }
}
function AdminLayoutComponent_Conditional_23_Conditional_5_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_23_Conditional_5_Conditional_3_For_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.goToServicos());
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2, "support_agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 46)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 47);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const request_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("Mesa ", request_r16.tableNumber, "", request_r16.tableName ? " \u2014 " + request_r16.tableName : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.serviceTypeLabel(request_r16.type), " \xB7 ", ctx_r1.formatTime(request_r16.createdAt), "");
  }
}
function AdminLayoutComponent_Conditional_23_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, AdminLayoutComponent_Conditional_23_Conditional_5_Conditional_3_For_4_Template, 8, 4, "button", 44, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Servi\xE7os pendentes (", ctx_r1.pendingServiceRequests().length, ")");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.pendingServiceRequests());
  }
}
function AdminLayoutComponent_Conditional_23_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_23_Conditional_5_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(1, AdminLayoutComponent_Conditional_23_Conditional_5_Conditional_1_Template, 2, 0, "p", 41)(2, AdminLayoutComponent_Conditional_23_Conditional_5_Conditional_2_Template, 5, 1, "div", 42)(3, AdminLayoutComponent_Conditional_23_Conditional_5_Conditional_3_Template, 5, 1, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.totalPendingCount() === 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasOrderNotifications() && ctx_r1.pendingOrders().length > 0 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasServiceNotifications() && ctx_r1.pendingServiceRequests().length > 0 ? 3 : -1);
  }
}
function AdminLayoutComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "button", 37);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_23_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleNotificationsMenu($event));
    });
    \u0275\u0275elementStart(2, "span", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AdminLayoutComponent_Conditional_23_Conditional_4_Template, 2, 1, "span", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AdminLayoutComponent_Conditional_23_Conditional_5_Template, 4, 3, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.totalPendingCount() > 0 ? "notifications_active" : "notifications");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.totalPendingCount() > 0 ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isNotificationsMenuOpen() ? 5 : -1);
  }
}
function AdminLayoutComponent_Conditional_24_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 49);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", (tmp_2_0 = ctx_r1.selectedCompany()) == null ? null : tmp_2_0.logoUrl, \u0275\u0275sanitizeUrl);
  }
}
function AdminLayoutComponent_Conditional_24_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "storefront");
    \u0275\u0275elementEnd();
  }
}
function AdminLayoutComponent_Conditional_24_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_24_Conditional_8_For_2_Template_button_click_0_listener() {
      const company_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectCompany(company_r20.companyId));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const company_r20 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("admin-topbar__menu-item--active", company_r20.companyId === ((tmp_12_0 = ctx_r1.selectedCompany()) == null ? null : tmp_12_0.companyId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(company_r20.companyName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(company_r20.profileName);
  }
}
function AdminLayoutComponent_Conditional_24_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_24_Conditional_8_Conditional_3_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openAddCompanyModal($event));
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2, "add_business");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Adicionar empresa ");
    \u0275\u0275elementEnd();
  }
}
function AdminLayoutComponent_Conditional_24_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_24_Conditional_8_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275repeaterCreate(1, AdminLayoutComponent_Conditional_24_Conditional_8_For_2_Template, 5, 4, "button", 53, _forTrack3);
    \u0275\u0275template(3, AdminLayoutComponent_Conditional_24_Conditional_8_Conditional_3_Template, 4, 0, "button", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.companies());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.canAddCompany() ? 3 : -1);
  }
}
function AdminLayoutComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "button", 48);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_24_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCompanyMenu($event));
    });
    \u0275\u0275template(2, AdminLayoutComponent_Conditional_24_Conditional_2_Template, 1, 1, "img", 49)(3, AdminLayoutComponent_Conditional_24_Conditional_3_Template, 2, 0, "span", 10);
    \u0275\u0275elementStart(4, "span", 50);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 10);
    \u0275\u0275text(7, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, AdminLayoutComponent_Conditional_24_Conditional_8_Template, 4, 1, "div", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_1_0 = ctx_r1.selectedCompany()) == null ? null : tmp_1_0.logoUrl) ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.selectedCompany()) == null ? null : tmp_2_0.companyName);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isCompanyMenuOpen() ? 8 : -1);
  }
}
function AdminLayoutComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 19);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", (tmp_1_0 = ctx_r1.currentUser()) == null ? null : tmp_1_0.avatarUrl, \u0275\u0275sanitizeUrl);
  }
}
function AdminLayoutComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.userInitials);
  }
}
function AdminLayoutComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_33_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r22);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 59)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 60);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_33_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275elementStart(7, "span", 10);
    \u0275\u0275text(8, "logout");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Sair ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r1.currentUser()) == null ? null : tmp_1_0.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.currentUser()) == null ? null : tmp_2_0.email);
  }
}
function AdminLayoutComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-add-company-modal", 61);
    \u0275\u0275listener("closed", function AdminLayoutComponent_Conditional_36_Template_app_add_company_modal_closed_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddCompanyModal());
    })("created", function AdminLayoutComponent_Conditional_36_Template_app_add_company_modal_created_0_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCompanyCreated($event));
    });
    \u0275\u0275elementEnd();
  }
}
var AdminLayoutComponent = class _AdminLayoutComponent {
  authService = inject(AuthService);
  accountsService = inject(AccountsService);
  notificationsService = inject(NotificationsService);
  router = inject(Router);
  timeFormatter = brDateTimeFormat({ timeStyle: "short" });
  currentUser = this.authService.currentUser;
  companies = this.authService.companies;
  selectedCompany = this.authService.selectedCompany;
  profileCode = computed(() => this.selectedCompany()?.profileCode ?? null);
  isPlatformAdmin = this.authService.isPlatformAdmin;
  // Cadastrar mais uma empresa (filial) é uma ação de dono — mesmo critério de outras ações
  // restritas a OWNER no painel (ver canRefund em comandas.component.ts).
  canAddCompany = computed(() => this.profileCode() === "OWNER");
  isAddCompanyModalOpen = signal(false);
  // Menu organizado por segmento (ver menu.config.ts) — cada seção some inteira se nenhum item
  // dela sobrar visível para o perfil/platform admin atual.
  menuSegments = computed(() => ADMIN_MENU_SEGMENTS.map((segment) => __spreadProps(__spreadValues({}, segment), {
    items: this.filterMenuByProfile(segment.items, this.profileCode(), this.isPlatformAdmin())
  })).filter((segment) => segment.items.length > 0));
  isMobileSidebarOpen = signal(false);
  isSidebarCollapsed = signal(false);
  isCompanyMenuOpen = signal(false);
  isUserMenuOpen = signal(false);
  isNotificationsMenuOpen = signal(false);
  // Accordion: só um grupo (Mesas, Serviços Gerais, Configurações etc.) fica expandido por vez em
  // toda a sidebar — abrir um fecha automaticamente qualquer outro que estivesse aberto (ver
  // toggleGroup). Começa apontando para o grupo da rota atual, se houver.
  expandedGroup = signal(this.findInitiallyActiveGroupLabel());
  // Sino de notificações no topo — pedidos ainda não entregues e serviços gerais ainda não
  // atendidos, atualizados em tempo real (ver NotificationsService). As duas seções só aparecem
  // se o perfil atual tiver acesso ao respectivo recurso no backend (KITCHEN não vê serviços).
  hasOrderNotifications = computed(() => {
    const code = this.profileCode();
    return !!code && ORDER_QUEUE_NOTIFICATION_PROFILES.includes(code);
  });
  hasServiceNotifications = computed(() => {
    const code = this.profileCode();
    return !!code && SERVICE_REQUEST_NOTIFICATION_PROFILES.includes(code);
  });
  pendingOrders = this.notificationsService.pendingOrders;
  pendingServiceRequests = this.notificationsService.pendingServiceRequests;
  totalPendingCount = this.notificationsService.totalPendingCount;
  notificationToast = this.notificationsService.toast;
  constructor() {
    this.syncProfileImages();
  }
  get userInitials() {
    const name = this.currentUser()?.fullName ?? "";
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) {
      return "?";
    }
    return (parts[0][0] + (parts[1]?.[0] ?? "")).toUpperCase();
  }
  closeMenus() {
    this.isCompanyMenuOpen.set(false);
    this.isUserMenuOpen.set(false);
    this.isNotificationsMenuOpen.set(false);
  }
  toggleNotificationsMenu(event) {
    event.stopPropagation();
    this.isCompanyMenuOpen.set(false);
    this.isUserMenuOpen.set(false);
    this.isNotificationsMenuOpen.update((open) => !open);
  }
  dismissToast() {
    this.notificationsService.dismissToast();
  }
  formatTime(value) {
    const parsed = parseApiDate(value);
    return parsed ? this.timeFormatter.format(parsed) : "\u2014";
  }
  serviceTypeLabel(type) {
    return SERVICE_TYPE_LABELS[type];
  }
  goToPedidos() {
    this.isNotificationsMenuOpen.set(false);
    void this.router.navigateByUrl("/painel/pedidos");
  }
  goToServicos() {
    this.isNotificationsMenuOpen.set(false);
    void this.router.navigateByUrl("/painel/servicos");
  }
  toggleMobileSidebar() {
    this.isMobileSidebarOpen.update((open) => !open);
  }
  closeMobileSidebar() {
    this.isMobileSidebarOpen.set(false);
  }
  toggleCollapse() {
    this.isSidebarCollapsed.update((collapsed) => !collapsed);
  }
  isGroupExpanded(item) {
    return this.expandedGroup() === item.label;
  }
  toggleGroup(item, event) {
    event.stopPropagation();
    if (this.isSidebarCollapsed()) {
      this.isSidebarCollapsed.set(false);
    }
    this.expandedGroup.update((current) => current === item.label ? null : item.label);
  }
  isGroupActive(item) {
    return (item.children ?? []).some((child) => !!child.route && this.router.url.startsWith(child.route));
  }
  findInitiallyActiveGroupLabel() {
    for (const segment of ADMIN_MENU_SEGMENTS) {
      const activeItem = segment.items.find((item) => this.isGroupActive(item));
      if (activeItem) {
        return activeItem.label;
      }
    }
    return null;
  }
  filterMenuByProfile(items, profileCode, isPlatformAdmin) {
    return items.filter((item) => !item.roles || !!profileCode && item.roles.includes(profileCode)).filter((item) => !item.platformAdminOnly || isPlatformAdmin).map((item) => item.children ? __spreadProps(__spreadValues({}, item), { children: this.filterMenuByProfile(item.children, profileCode, isPlatformAdmin) }) : item).filter((item) => !item.children || item.children.length > 0);
  }
  syncProfileImages() {
    this.accountsService.getProfile().subscribe({
      next: (response) => {
        if (response.owner.avatarUrl) {
          this.authService.updateAvatarUrl(response.owner.avatarUrl);
        }
        if (response.companyLogoUrl) {
          const companyId = this.selectedCompany()?.companyId;
          if (companyId) {
            this.authService.updateCompanyLogoUrl(companyId, response.companyLogoUrl);
          }
        }
      },
      error: () => {
      }
    });
  }
  toggleCompanyMenu(event) {
    event.stopPropagation();
    this.isUserMenuOpen.set(false);
    this.isCompanyMenuOpen.update((open) => !open);
  }
  toggleUserMenu(event) {
    event.stopPropagation();
    this.isCompanyMenuOpen.set(false);
    this.isUserMenuOpen.update((open) => !open);
  }
  // Recarrega a página inteira (não navega dentro da SPA) — trocar de empresa muda o contexto de
  // praticamente todo o sistema (perfil, permissões, dados de cada tela), e várias páginas guardam
  // estado em memória que não reage a essa troca (listas já carregadas, cache de perfil, etc.).
  // Caçar cada tela pra corrigir uma a uma é frágil; um F5 garante que nada "vaza" da empresa
  // anterior, já que todo o estado em memória do app é recriado do zero.
  selectCompany(companyId) {
    this.authService.selectCompany(companyId);
    window.location.href = resolveHomeRoute(this.selectedCompany()?.profileCode ?? null);
  }
  logout() {
    this.authService.logout();
  }
  openAddCompanyModal(event) {
    event.stopPropagation();
    this.isCompanyMenuOpen.set(false);
    this.isAddCompanyModalOpen.set(true);
  }
  closeAddCompanyModal() {
    this.isAddCompanyModalOpen.set(false);
  }
  // A empresa recém-criada já entra selecionada (ver AuthService#addCompany) — F5 completo pro
  // painel entrar "limpo" nela, mesmo motivo de selectCompany() ao trocar de empresa manualmente.
  onCompanyCreated(company) {
    this.authService.addCompany(company);
    window.location.href = resolveHomeRoute(company.profileCode);
  }
  static \u0275fac = function AdminLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLayoutComponent, selectors: [["app-admin-layout"]], hostBindings: function AdminLayoutComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function AdminLayoutComponent_click_HostBindingHandler() {
        return ctx.closeMenus();
      }, false, \u0275\u0275resolveDocument);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 37, vars: 15, consts: [[1, "admin-layout"], [1, "admin-backdrop"], [1, "admin-sidebar"], [1, "admin-sidebar__brand"], ["alt", "", 1, "admin-sidebar__logo", "admin-sidebar__logo--img", 3, "src"], ["src", "/assets/images/logo-mark.png", "alt", "", 1, "admin-sidebar__logo", "admin-sidebar__logo--img"], [1, "admin-sidebar__name"], [1, "admin-sidebar__nav"], [1, "admin-sidebar__segment"], ["type", "button", 1, "admin-sidebar__collapse-toggle", 3, "click"], ["aria-hidden", "true", 1, "material-icons"], [1, "admin-sidebar__label"], [1, "admin-main"], [1, "admin-topbar"], ["type", "button", "aria-label", "Abrir menu", 1, "admin-topbar__icon-btn", "admin-topbar__menu-btn", 3, "click"], [1, "admin-topbar__spacer"], ["role", "status", 1, "notification-toast"], [1, "admin-topbar__dropdown"], ["type", "button", 1, "admin-topbar__user-btn", 3, "click"], ["alt", "", 1, "admin-topbar__avatar", "admin-topbar__avatar--img", 3, "src"], [1, "admin-topbar__avatar"], [1, "admin-topbar__user-name"], [1, "admin-topbar__menu", "admin-topbar__menu--right"], [1, "admin-content"], [1, "admin-backdrop", 3, "click"], [1, "admin-sidebar__segment-label"], ["routerLinkActive", "admin-sidebar__link--active", 1, "admin-sidebar__link", 3, "routerLink"], ["type", "button", 1, "admin-sidebar__link", "admin-sidebar__link--group", 3, "click"], ["aria-hidden", "true", 1, "material-icons", "admin-sidebar__chevron"], [1, "admin-sidebar__submenu"], ["routerLinkActive", "admin-sidebar__link--active", 1, "admin-sidebar__link", "admin-sidebar__link--child", 3, "routerLink"], ["routerLinkActive", "admin-sidebar__link--active", 1, "admin-sidebar__link", "admin-sidebar__link--child", 3, "click", "routerLink"], ["routerLinkActive", "admin-sidebar__link--active", 1, "admin-sidebar__link", 3, "click", "routerLink"], ["role", "status", 1, "notification-toast", 3, "click"], ["aria-hidden", "true", 1, "material-icons", "notification-toast__icon"], [1, "notification-toast__message"], ["aria-hidden", "true", 1, "material-icons", "notification-toast__close"], ["type", "button", "aria-label", "Notifica\xE7\xF5es", 1, "admin-topbar__icon-btn", "admin-topbar__bell-btn", 3, "click"], [1, "admin-topbar__bell-badge"], [1, "admin-topbar__menu", "admin-topbar__menu--right", "admin-topbar__menu--notifications"], [1, "admin-topbar__menu", "admin-topbar__menu--right", "admin-topbar__menu--notifications", 3, "click"], [1, "admin-topbar__notifications-empty"], [1, "admin-topbar__notifications-group"], [1, "admin-topbar__notifications-title"], ["type", "button", 1, "admin-topbar__notification-item"], ["type", "button", 1, "admin-topbar__notification-item", 3, "click"], [1, "admin-topbar__notification-text"], [1, "admin-topbar__notification-meta"], ["type", "button", 1, "admin-topbar__company-btn", 3, "click"], ["alt", "", 1, "admin-topbar__company-logo", 3, "src"], [1, "admin-topbar__company-name"], [1, "admin-topbar__menu"], [1, "admin-topbar__menu", 3, "click"], ["type", "button", 1, "admin-topbar__menu-item", 3, "admin-topbar__menu-item--active"], ["type", "button", 1, "admin-topbar__menu-item", "admin-topbar__menu-item--action"], ["type", "button", 1, "admin-topbar__menu-item", 3, "click"], [1, "admin-topbar__menu-item-role"], ["type", "button", 1, "admin-topbar__menu-item", "admin-topbar__menu-item--action", 3, "click"], [1, "admin-topbar__menu", "admin-topbar__menu--right", 3, "click"], [1, "admin-topbar__menu-user"], ["type", "button", 1, "admin-topbar__menu-item", "admin-topbar__menu-item--danger", 3, "click"], [3, "closed", "created"]], template: function AdminLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, AdminLayoutComponent_Conditional_1_Template, 1, 0, "div", 1);
      \u0275\u0275elementStart(2, "aside", 2)(3, "div", 3);
      \u0275\u0275template(4, AdminLayoutComponent_Conditional_4_Template, 1, 1, "img", 4)(5, AdminLayoutComponent_Conditional_5_Template, 1, 0, "img", 5);
      \u0275\u0275elementStart(6, "span", 6);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "nav", 7);
      \u0275\u0275repeaterCreate(9, AdminLayoutComponent_For_10_Template, 5, 1, "div", 8, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 9);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_11_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275elementStart(12, "span", 10);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span", 11);
      \u0275\u0275text(15, "Recolher menu");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 12)(17, "header", 13)(18, "button", 14);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_18_listener($event) {
        ctx.toggleMobileSidebar();
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(19, "span", 10);
      \u0275\u0275text(20, "menu");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(21, "div", 15);
      \u0275\u0275template(22, AdminLayoutComponent_Conditional_22_Template, 7, 2, "div", 16)(23, AdminLayoutComponent_Conditional_23_Template, 6, 3, "div", 17)(24, AdminLayoutComponent_Conditional_24_Template, 9, 3, "div", 17);
      \u0275\u0275elementStart(25, "div", 17)(26, "button", 18);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_26_listener($event) {
        return ctx.toggleUserMenu($event);
      });
      \u0275\u0275template(27, AdminLayoutComponent_Conditional_27_Template, 1, 1, "img", 19)(28, AdminLayoutComponent_Conditional_28_Template, 2, 1, "span", 20);
      \u0275\u0275elementStart(29, "span", 21);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "span", 10);
      \u0275\u0275text(32, "expand_more");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(33, AdminLayoutComponent_Conditional_33_Template, 10, 2, "div", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "main", 23);
      \u0275\u0275element(35, "router-outlet");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(36, AdminLayoutComponent_Conditional_36_Template, 1, 0, "app-add-company-modal");
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_4_0;
      let tmp_7_0;
      let tmp_10_0;
      let tmp_11_0;
      \u0275\u0275classProp("admin-layout--collapsed", ctx.isSidebarCollapsed());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isMobileSidebarOpen() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("admin-sidebar--open", ctx.isMobileSidebarOpen());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(((tmp_3_0 = ctx.selectedCompany()) == null ? null : tmp_3_0.logoUrl) ? 4 : 5);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate((tmp_4_0 = (tmp_4_0 = ctx.selectedCompany()) == null ? null : tmp_4_0.companyName) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : "Comanda \xDAnica");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.menuSegments());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.isSidebarCollapsed() ? "chevron_right" : "chevron_left");
      \u0275\u0275advance(9);
      \u0275\u0275conditional((tmp_7_0 = ctx.notificationToast()) ? 22 : -1, tmp_7_0);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.hasOrderNotifications() || ctx.hasServiceNotifications() ? 23 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.companies().length > 1 || ctx.canAddCompany() ? 24 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(((tmp_10_0 = ctx.currentUser()) == null ? null : tmp_10_0.avatarUrl) ? 27 : 28);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate((tmp_11_0 = ctx.currentUser()) == null ? null : tmp_11_0.fullName);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isUserMenuOpen() ? 33 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isAddCompanyModalOpen() ? 36 : -1);
    }
  }, dependencies: [RouterLink, RouterLinkActive, RouterOutlet, AddCompanyModalComponent], styles: ["\n\n.admin-layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: var(--color-bg);\n}\n.admin-sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  inset-block: 0;\n  left: 0;\n  width: 260px;\n  display: flex;\n  flex-direction: column;\n  background: var(--color-bg-elevated);\n  border-right: 1px solid var(--color-border);\n  z-index: 110;\n  transition: width var(--transition-base), transform var(--transition-base);\n}\n.admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar[_ngcontent-%COMP%] {\n  width: 76px;\n}\n.admin-sidebar__brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  height: 68px;\n  padding-inline: 20px;\n  border-bottom: 1px solid var(--color-border);\n  overflow: hidden;\n  white-space: nowrap;\n}\n.admin-sidebar__logo[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  border-radius: var(--radius-sm);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.admin-sidebar__logo--img[_ngcontent-%COMP%] {\n  background: var(--color-bg-elevated);\n  object-fit: cover;\n}\n.admin-sidebar__name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--color-text);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.admin-sidebar__nav[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.admin-sidebar__segment[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.admin-sidebar__segment-label[_ngcontent-%COMP%] {\n  padding: 0 12px;\n  margin-bottom: 4px;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--color-text-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.admin-sidebar__link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  width: 100%;\n  padding: 11px 12px;\n  border-radius: var(--radius-sm);\n  border: none;\n  background: transparent;\n  color: var(--color-gray);\n  font-size: 0.9375rem;\n  font-weight: 500;\n  font-family: inherit;\n  white-space: nowrap;\n  overflow: hidden;\n  cursor: pointer;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.admin-sidebar__link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 20px;\n}\n.admin-sidebar__link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text);\n}\n.admin-sidebar__link--active[_ngcontent-%COMP%] {\n  background: var(--color-accent-bg);\n  color: var(--color-accent-hover);\n}\n.admin-sidebar__link--group[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.admin-sidebar__link--child[_ngcontent-%COMP%] {\n  padding-left: 12px;\n}\n.admin-sidebar__link--child[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]:first-child {\n  font-size: 18px;\n}\n.admin-sidebar__chevron[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 18px !important;\n  color: var(--color-text-muted);\n}\n.admin-sidebar__submenu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  margin: 2px 0 6px 34px;\n  padding-left: 10px;\n  border-left: 1px solid var(--color-border);\n}\n.admin-sidebar__collapse-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin: 12px;\n  padding: 11px 12px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border);\n  background: transparent;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.admin-sidebar__collapse-toggle[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 20px;\n}\n.admin-sidebar__collapse-toggle[_ngcontent-%COMP%]:hover {\n  color: var(--color-text);\n  border-color: var(--color-border-strong);\n}\n@media (max-width: 960px) {\n  .admin-sidebar__collapse-toggle[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__label[_ngcontent-%COMP%], \n.admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__name[_ngcontent-%COMP%], \n.admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__chevron[_ngcontent-%COMP%], \n.admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__submenu[_ngcontent-%COMP%], \n.admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__segment-label[_ngcontent-%COMP%] {\n  display: none;\n}\n.admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__link[_ngcontent-%COMP%], \n.admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__collapse-toggle[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__nav[_ngcontent-%COMP%] {\n  gap: 4px;\n}\n.admin-main[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 260px;\n  min-width: 0;\n  transition: margin-left var(--transition-base);\n}\n.admin-layout--collapsed[_ngcontent-%COMP%]   .admin-main[_ngcontent-%COMP%] {\n  margin-left: 76px;\n}\n.admin-topbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 90;\n  height: 68px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding-inline: 24px;\n  background: rgba(15, 23, 42, 0.85);\n  backdrop-filter: blur(14px);\n  -webkit-backdrop-filter: blur(14px);\n  border-bottom: 1px solid var(--color-border);\n}\n.admin-topbar__spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.admin-topbar__icon-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border-strong);\n  background: transparent;\n  color: var(--color-text);\n  cursor: pointer;\n}\n.admin-topbar__icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.admin-topbar__menu-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 960px) {\n  .admin-topbar__menu-btn[_ngcontent-%COMP%] {\n    display: inline-flex;\n  }\n}\n.admin-topbar__bell-btn[_ngcontent-%COMP%] {\n  position: relative;\n}\n.admin-topbar__bell-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  border-radius: var(--radius-full);\n  background: #f87171;\n  color: #2a0a0a;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  line-height: 1;\n  border: 2px solid var(--color-bg-base, #0f172a);\n}\n.admin-topbar__menu--notifications[_ngcontent-%COMP%] {\n  min-width: 320px;\n  max-width: 380px;\n  max-height: min(420px, 100vh - 68px - 32px);\n  overflow-y: auto;\n}\n.admin-topbar__notifications-empty[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  text-align: center;\n}\n.admin-topbar__notifications-group[_ngcontent-%COMP%]    + .admin-topbar__notifications-group[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  padding-top: 6px;\n  border-top: 1px solid var(--color-border);\n}\n.admin-topbar__notifications-title[_ngcontent-%COMP%] {\n  display: block;\n  padding: 6px 12px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  color: var(--color-text-muted);\n}\n.admin-topbar__notification-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  width: 100%;\n  padding: 10px 12px;\n  border-radius: var(--radius-sm);\n  background: transparent;\n  border: none;\n  color: var(--color-text);\n  text-align: left;\n  cursor: pointer;\n}\n.admin-topbar__notification-item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--color-accent-hover);\n  margin-top: 1px;\n}\n.admin-topbar__notification-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.admin-topbar__notification-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  font-size: 0.875rem;\n}\n.admin-topbar__notification-meta[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.notification-toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  max-width: min(320px, 40vw);\n  padding: 10px 14px;\n  border-radius: var(--radius-md);\n  background: var(--color-bg-elevated);\n  border: 1px solid var(--color-accent);\n  box-shadow: var(--shadow-lg);\n  cursor: pointer;\n  animation: _ngcontent-%COMP%_notification-toast-in 0.2s ease-out;\n}\n@media (max-width: 720px) {\n  .notification-toast[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.notification-toast__icon[_ngcontent-%COMP%] {\n  color: var(--color-accent-hover);\n  flex-shrink: 0;\n}\n.notification-toast__message[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.notification-toast__close[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--color-text-muted);\n  flex-shrink: 0;\n}\n@keyframes _ngcontent-%COMP%_notification-toast-in {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.admin-topbar__dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.admin-topbar__company-btn[_ngcontent-%COMP%], \n.admin-topbar__user-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  border-radius: var(--radius-full);\n  border: 1px solid var(--color-border-strong);\n  background: transparent;\n  color: var(--color-text);\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 500;\n  max-width: 240px;\n}\n.admin-topbar__company-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.admin-topbar__user-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--color-text-muted);\n}\n.admin-topbar__company-btn[_ngcontent-%COMP%]:hover, \n.admin-topbar__user-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.admin-topbar__company-name[_ngcontent-%COMP%], \n.admin-topbar__user-name[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n@media (max-width: 640px) {\n  .admin-topbar__company-name[_ngcontent-%COMP%], \n   .admin-topbar__user-name[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.admin-topbar__company-logo[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n  object-fit: cover;\n  flex-shrink: 0;\n}\n.admin-topbar__avatar[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: var(--gradient-accent);\n  color: #fff;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.admin-topbar__avatar--img[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\n.admin-topbar__menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  left: 0;\n  min-width: 240px;\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-lg);\n  padding: 8px;\n  z-index: 120;\n}\n.admin-topbar__menu--right[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n}\n.admin-topbar__menu-user[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 10px 12px;\n  border-bottom: 1px solid var(--color-border);\n  margin-bottom: 6px;\n}\n.admin-topbar__menu-user[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--color-text);\n  font-size: 0.9375rem;\n}\n.admin-topbar__menu-user[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.admin-topbar__menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  width: 100%;\n  padding: 10px 12px;\n  border-radius: var(--radius-sm);\n  background: transparent;\n  border: none;\n  color: var(--color-gray);\n  font-size: 0.875rem;\n  text-align: left;\n  cursor: pointer;\n}\n.admin-topbar__menu-item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.admin-topbar__menu-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text);\n}\n.admin-topbar__menu-item--active[_ngcontent-%COMP%] {\n  color: var(--color-accent-hover);\n}\n.admin-topbar__menu-item--danger[_ngcontent-%COMP%]:hover {\n  color: #f87171;\n}\n.admin-topbar__menu-item--action[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  padding-top: 12px;\n  border-top: 1px solid var(--color-border);\n  color: var(--color-accent-hover);\n}\n.admin-topbar__menu-item-role[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.admin-content[_ngcontent-%COMP%] {\n  padding: 28px 24px 48px;\n}\n.admin-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 105;\n}\n@media (max-width: 960px) {\n  .admin-sidebar[_ngcontent-%COMP%] {\n    transform: translateX(-100%);\n    width: 260px;\n  }\n  .admin-sidebar--open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar[_ngcontent-%COMP%] {\n    width: 260px;\n  }\n  .admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__label[_ngcontent-%COMP%], \n   .admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__name[_ngcontent-%COMP%] {\n    display: inline;\n  }\n  .admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__segment-label[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__chevron[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__submenu[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__nav[_ngcontent-%COMP%] {\n    gap: 18px;\n  }\n  .admin-main[_ngcontent-%COMP%], \n   .admin-layout--collapsed[_ngcontent-%COMP%]   .admin-main[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .admin-content[_ngcontent-%COMP%] {\n    padding: 20px 16px 40px;\n  }\n}\n/*# sourceMappingURL=admin-layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLayoutComponent, { className: "AdminLayoutComponent", filePath: "src\\app\\features\\admin\\layout\\admin-layout\\admin-layout.component.ts", lineNumber: 24 });
})();
export {
  AdminLayoutComponent
};
//# sourceMappingURL=chunk-JCIZ4M7P.js.map
