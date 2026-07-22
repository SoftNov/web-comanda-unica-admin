import {
  CepService
} from "./chunk-XMDJ2ZZV.js";
import {
  cepValidator,
  fullNameValidator,
  phoneValidator
} from "./chunk-76XGARBF.js";
import {
  formatCEP,
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
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-TG667HJW.js";
import {
  RippleDirective
} from "./chunk-QNTXMNHH.js";
import {
  AuthService
} from "./chunk-TA4FF7VW.js";
import {
  AccountsService
} from "./chunk-MZ4AGMPU.js";
import {
  computed,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4IFGYJZR.js";

// src/app/features/admin/pages/settings/profile/profile.component.ts
function ProfileComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "button", 10);
    \u0275\u0275listener("click", function ProfileComponent_Conditional_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab.set("personal"));
    });
    \u0275\u0275elementStart(2, "span", 11);
    \u0275\u0275text(3, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Meus dados ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 10);
    \u0275\u0275listener("click", function ProfileComponent_Conditional_5_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab.set("company"));
    });
    \u0275\u0275elementStart(6, "span", 11);
    \u0275\u0275text(7, "storefront");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Empresa ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("tabs__item--active", ctx_r1.activeTab() === "personal");
    \u0275\u0275attribute("aria-selected", ctx_r1.activeTab() === "personal");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("tabs__item--active", ctx_r1.activeTab() === "company");
    \u0275\u0275attribute("aria-selected", ctx_r1.activeTab() === "company");
  }
}
function ProfileComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1, "Carregando dados do perfil\u2026");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 11);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.loadProfileError(), " ");
  }
}
function ProfileComponent_Conditional_9_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.avatarPreviewUrl(), \u0275\u0275sanitizeUrl);
  }
}
function ProfileComponent_Conditional_9_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "person");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_Conditional_9_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.avatarError());
  }
}
function ProfileComponent_Conditional_9_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "Informe seu nome completo (nome e sobrenome).");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_Conditional_9_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "Informe um telefone v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "h2", 13);
    \u0275\u0275text(2, "Foto de perfil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14)(4, "div", 15);
    \u0275\u0275template(5, ProfileComponent_Conditional_9_Conditional_5_Template, 1, 1, "img", 16)(6, ProfileComponent_Conditional_9_Conditional_6_Template, 2, 0, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 17)(8, "label", 18);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 19);
    \u0275\u0275listener("change", function ProfileComponent_Conditional_9_Template_input_change_10_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAvatarFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 4);
    \u0275\u0275text(12, "JPG, PNG ou WEBP, at\xE9 5MB.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ProfileComponent_Conditional_9_Conditional_13_Template, 2, 1, "span", 20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 21)(15, "h2", 13);
    \u0275\u0275text(16, "Dados pessoais");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 22)(18, "label", 23);
    \u0275\u0275text(19, "E-mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 24);
    \u0275\u0275element(21, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 4);
    \u0275\u0275text(23, "O e-mail de acesso n\xE3o pode ser alterado por aqui.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 22)(25, "label", 26);
    \u0275\u0275text(26, "Nome completo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 24);
    \u0275\u0275element(28, "input", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, ProfileComponent_Conditional_9_Conditional_29_Template, 2, 0, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 22)(31, "label", 28);
    \u0275\u0275text(32, "Telefone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 24)(34, "input", 29);
    \u0275\u0275listener("input", function ProfileComponent_Conditional_9_Template_input_input_34_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPersonalPhoneInput($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, ProfileComponent_Conditional_9_Conditional_35_Template, 2, 0, "span", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.avatarPreviewUrl() ? 5 : 6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isUploadingAvatar() ? "Enviando\u2026" : "Escolher foto", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isUploadingAvatar());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.avatarError() ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.personalForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r1.personalEmail());
    \u0275\u0275advance(7);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.personalForm.controls.fullName.invalid && ctx_r1.personalForm.controls.fullName.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.personalForm.controls.fullName.invalid && ctx_r1.personalForm.controls.fullName.touched ? 29 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.personalForm.controls.phone.invalid && ctx_r1.personalForm.controls.phone.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.personalForm.controls.phone.invalid && ctx_r1.personalForm.controls.phone.touched ? 35 : -1);
  }
}
function ProfileComponent_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.logoPreviewUrl(), \u0275\u0275sanitizeUrl);
  }
}
function ProfileComponent_Conditional_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "storefront");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_Conditional_10_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.logoError());
  }
}
function ProfileComponent_Conditional_10_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "Informe o nome do estabelecimento.");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_Conditional_10_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "Informe um telefone v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_Conditional_10_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "Informe um e-mail v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_Conditional_10_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, "Buscando endere\xE7o\u2026");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_Conditional_10_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "CEP n\xE3o encontrado. Preencha o endere\xE7o manualmente.");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_Conditional_10_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "Informe um CEP v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_Conditional_10_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "Informe a rua.");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_Conditional_10_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "Informe o n\xFAmero.");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_Conditional_10_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "Informe o bairro.");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_Conditional_10_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "Informe a cidade.");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_Conditional_10_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "Informe o estado.");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "h2", 13);
    \u0275\u0275text(2, "Dados da empresa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14)(4, "div", 30);
    \u0275\u0275template(5, ProfileComponent_Conditional_10_Conditional_5_Template, 1, 1, "img", 16)(6, ProfileComponent_Conditional_10_Conditional_6_Template, 2, 0, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 17)(8, "label", 31);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 32);
    \u0275\u0275listener("change", function ProfileComponent_Conditional_10_Template_input_change_10_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLogoFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 4);
    \u0275\u0275text(12, "JPG, PNG ou WEBP, at\xE9 5MB.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ProfileComponent_Conditional_10_Conditional_13_Template, 2, 1, "span", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 22)(15, "label", 33);
    \u0275\u0275text(16, "Nome fantasia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 24);
    \u0275\u0275element(18, "input", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, ProfileComponent_Conditional_10_Conditional_19_Template, 2, 0, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 22)(21, "label", 35);
    \u0275\u0275text(22, "Telefone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 24)(24, "input", 36);
    \u0275\u0275listener("input", function ProfileComponent_Conditional_10_Template_input_input_24_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCompanyPhoneInput($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, ProfileComponent_Conditional_10_Conditional_25_Template, 2, 0, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 22)(27, "label", 37);
    \u0275\u0275text(28, "E-mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 24);
    \u0275\u0275element(30, "input", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, ProfileComponent_Conditional_10_Conditional_31_Template, 2, 0, "span", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 21)(33, "h2", 13);
    \u0275\u0275text(34, "Endere\xE7o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 22)(36, "label", 39);
    \u0275\u0275text(37, "CEP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 24)(39, "input", 40);
    \u0275\u0275listener("input", function ProfileComponent_Conditional_10_Template_input_input_39_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCepInput($event));
    })("blur", function ProfileComponent_Conditional_10_Template_input_blur_39_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCepBlur());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(40, ProfileComponent_Conditional_10_Conditional_40_Template, 2, 0, "span", 4)(41, ProfileComponent_Conditional_10_Conditional_41_Template, 2, 0, "span", 20)(42, ProfileComponent_Conditional_10_Conditional_42_Template, 2, 0, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 22)(44, "label", 41);
    \u0275\u0275text(45, "Rua");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 24);
    \u0275\u0275element(47, "input", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275template(48, ProfileComponent_Conditional_10_Conditional_48_Template, 2, 0, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 22)(50, "label", 43);
    \u0275\u0275text(51, "N\xFAmero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 24);
    \u0275\u0275element(53, "input", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275template(54, ProfileComponent_Conditional_10_Conditional_54_Template, 2, 0, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 22)(56, "label", 45);
    \u0275\u0275text(57, "Complemento ");
    \u0275\u0275elementStart(58, "span", 46);
    \u0275\u0275text(59, "(opcional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 24);
    \u0275\u0275element(61, "input", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 22)(63, "label", 48);
    \u0275\u0275text(64, "Bairro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 24);
    \u0275\u0275element(66, "input", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275template(67, ProfileComponent_Conditional_10_Conditional_67_Template, 2, 0, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 22)(69, "label", 50);
    \u0275\u0275text(70, "Cidade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 24);
    \u0275\u0275element(72, "input", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275template(73, ProfileComponent_Conditional_10_Conditional_73_Template, 2, 0, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 22)(75, "label", 52);
    \u0275\u0275text(76, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 24);
    \u0275\u0275element(78, "input", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275template(79, ProfileComponent_Conditional_10_Conditional_79_Template, 2, 0, "span", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.companyForm);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.logoPreviewUrl() ? 5 : 6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isUploadingLogo() ? "Enviando\u2026" : "Escolher logomarca", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isUploadingLogo());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.logoError() ? 13 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.companyForm.controls.businessName.invalid && ctx_r1.companyForm.controls.businessName.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.companyForm.controls.businessName.invalid && ctx_r1.companyForm.controls.businessName.touched ? 19 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.companyForm.controls.phone.invalid && ctx_r1.companyForm.controls.phone.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.companyForm.controls.phone.invalid && ctx_r1.companyForm.controls.phone.touched ? 25 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.companyForm.controls.email.invalid && ctx_r1.companyForm.controls.email.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.companyForm.controls.email.invalid && ctx_r1.companyForm.controls.email.touched ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.addressForm);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.addressForm.controls.cep.invalid && ctx_r1.addressForm.controls.cep.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLookingUpCep() ? 40 : ctx_r1.cepNotFound() ? 41 : ctx_r1.addressForm.controls.cep.invalid && ctx_r1.addressForm.controls.cep.touched ? 42 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.addressForm.controls.street.invalid && ctx_r1.addressForm.controls.street.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.addressForm.controls.street.invalid && ctx_r1.addressForm.controls.street.touched ? 48 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.addressForm.controls.number.invalid && ctx_r1.addressForm.controls.number.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.addressForm.controls.number.invalid && ctx_r1.addressForm.controls.number.touched ? 54 : -1);
    \u0275\u0275advance(12);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.addressForm.controls.neighborhood.invalid && ctx_r1.addressForm.controls.neighborhood.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.addressForm.controls.neighborhood.invalid && ctx_r1.addressForm.controls.neighborhood.touched ? 67 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.addressForm.controls.city.invalid && ctx_r1.addressForm.controls.city.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.addressForm.controls.city.invalid && ctx_r1.addressForm.controls.city.touched ? 73 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("field__input--invalid", ctx_r1.addressForm.controls.state.invalid && ctx_r1.addressForm.controls.state.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.addressForm.controls.state.invalid && ctx_r1.addressForm.controls.state.touched ? 79 : -1);
  }
}
function ProfileComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 11);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Perfil atualizado com sucesso. ");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 11);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.profileError(), " ");
  }
}
var MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024;
var ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];
var ProfileComponent = class _ProfileComponent {
  fb = new FormBuilder();
  accountsService = inject(AccountsService);
  cepService = inject(CepService);
  authService = inject(AuthService);
  profileCode = computed(() => this.authService.selectedCompany()?.profileCode ?? null);
  canEditCompany = computed(() => this.profileCode() === "OWNER" || this.profileCode() === "ADMIN");
  activeTab = signal("personal");
  isLoadingProfile = signal(true);
  loadProfileError = signal(null);
  isSubmittingProfile = signal(false);
  profileSuccess = signal(false);
  profileError = signal(null);
  isLookingUpCep = signal(false);
  cepNotFound = signal(false);
  personalEmail = signal(this.authService.currentUser()?.email ?? "");
  avatarPreviewUrl = signal(this.authService.currentUser()?.avatarUrl ?? null);
  isUploadingAvatar = signal(false);
  avatarError = signal(null);
  logoPreviewUrl = signal(null);
  isUploadingLogo = signal(false);
  logoError = signal(null);
  personalForm = this.fb.nonNullable.group({
    fullName: [this.authService.currentUser()?.fullName ?? "", [Validators.required, fullNameValidator()]],
    phone: ["", [Validators.required, phoneValidator()]]
  });
  companyForm = this.fb.nonNullable.group({
    businessName: ["", [Validators.required, Validators.minLength(2)]],
    phone: ["", [Validators.required, phoneValidator()]],
    email: ["", [Validators.required, Validators.email]]
  });
  addressForm = this.fb.nonNullable.group({
    cep: ["", [Validators.required, cepValidator()]],
    street: ["", [Validators.required]],
    number: ["", [Validators.required]],
    complement: [""],
    neighborhood: ["", [Validators.required]],
    city: ["", [Validators.required]],
    state: ["", [Validators.required]]
  });
  constructor() {
    this.loadProfile();
  }
  onPersonalPhoneInput(event) {
    const input = event.target;
    this.personalForm.controls.phone.setValue(formatCellphone(input.value));
  }
  onCompanyPhoneInput(event) {
    const input = event.target;
    this.companyForm.controls.phone.setValue(formatCellphone(input.value));
  }
  onCepInput(event) {
    const input = event.target;
    this.addressForm.controls.cep.setValue(formatCEP(input.value));
    this.cepNotFound.set(false);
  }
  onCepBlur() {
    const digits = onlyDigits(this.addressForm.controls.cep.value);
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
        this.addressForm.patchValue({
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
  onSubmitProfile() {
    const isPersonalValid = this.personalForm.valid;
    const isCompanyValid = !this.canEditCompany() || this.companyForm.valid && this.addressForm.valid;
    if (!isPersonalValid || !isCompanyValid) {
      this.personalForm.markAllAsTouched();
      if (this.canEditCompany()) {
        this.companyForm.markAllAsTouched();
        this.addressForm.markAllAsTouched();
      }
      this.activeTab.set(isPersonalValid ? "company" : "personal");
      this.profileError.set("Verifique os campos destacados antes de salvar.");
      return;
    }
    this.profileError.set(null);
    this.isSubmittingProfile.set(true);
    this.accountsService.updateProfile(this.buildPayload()).subscribe({
      next: () => {
        this.isSubmittingProfile.set(false);
        this.profileSuccess.set(true);
        this.authService.updateProfileName(this.personalForm.controls.fullName.value.trim());
      },
      error: (error) => {
        this.isSubmittingProfile.set(false);
        this.profileError.set(this.resolveErrorMessage(error));
      }
    });
  }
  onAvatarFileSelected(event) {
    const input = event.target;
    const file = input.files?.[0];
    input.value = "";
    if (!file || !this.validateImageFile(file, this.avatarError)) {
      return;
    }
    const previousPreview = this.avatarPreviewUrl();
    this.readFileAsDataUrl(file, (dataUrl) => this.avatarPreviewUrl.set(dataUrl));
    this.avatarError.set(null);
    this.isUploadingAvatar.set(true);
    this.accountsService.uploadAvatar(file).subscribe({
      next: (response) => {
        this.isUploadingAvatar.set(false);
        this.avatarPreviewUrl.set(response.avatarUrl);
        this.authService.updateAvatarUrl(response.avatarUrl);
      },
      error: (error) => {
        this.isUploadingAvatar.set(false);
        this.avatarPreviewUrl.set(previousPreview);
        this.avatarError.set(this.resolveImageErrorMessage(error));
      }
    });
  }
  onLogoFileSelected(event) {
    const input = event.target;
    const file = input.files?.[0];
    input.value = "";
    if (!file || !this.validateImageFile(file, this.logoError)) {
      return;
    }
    const previousPreview = this.logoPreviewUrl();
    this.readFileAsDataUrl(file, (dataUrl) => this.logoPreviewUrl.set(dataUrl));
    this.logoError.set(null);
    this.isUploadingLogo.set(true);
    this.accountsService.uploadLogo(file).subscribe({
      next: (response) => {
        this.isUploadingLogo.set(false);
        this.logoPreviewUrl.set(response.logoUrl);
        const companyId = this.authService.selectedCompany()?.companyId;
        if (companyId) {
          this.authService.updateCompanyLogoUrl(companyId, response.logoUrl);
        }
      },
      error: (error) => {
        this.isUploadingLogo.set(false);
        this.logoPreviewUrl.set(previousPreview);
        this.logoError.set(this.resolveImageErrorMessage(error));
      }
    });
  }
  loadProfile() {
    this.isLoadingProfile.set(true);
    this.loadProfileError.set(null);
    this.accountsService.getProfile().subscribe({
      next: (response) => {
        this.isLoadingProfile.set(false);
        this.applyProfileResponse(response);
      },
      error: () => {
        this.isLoadingProfile.set(false);
        this.loadProfileError.set("N\xE3o foi poss\xEDvel carregar os dados do perfil.");
      }
    });
  }
  applyProfileResponse(response) {
    const owner = response.owner;
    this.personalForm.patchValue({
      fullName: owner.fullName ?? "",
      phone: owner.phone ? formatCellphone(owner.phone) : ""
    });
    if (owner.email) {
      this.personalEmail.set(owner.email);
    }
    if (owner.avatarUrl) {
      this.avatarPreviewUrl.set(owner.avatarUrl);
      this.authService.updateAvatarUrl(owner.avatarUrl);
    }
    if (response.companyLogoUrl) {
      this.logoPreviewUrl.set(response.companyLogoUrl);
      const companyId = this.authService.selectedCompany()?.companyId;
      if (companyId) {
        this.authService.updateCompanyLogoUrl(companyId, response.companyLogoUrl);
      }
    }
    const company = response.company;
    if (!company) {
      return;
    }
    this.companyForm.patchValue({
      businessName: company.businessName ?? "",
      phone: company.phone ? formatCellphone(company.phone) : "",
      email: company.email ?? ""
    });
    const address = company.address;
    if (address) {
      this.addressForm.patchValue({
        cep: address.zipCode ? formatCEP(address.zipCode) : "",
        street: address.street ?? "",
        number: address.number ?? "",
        complement: address.complement ?? "",
        neighborhood: address.neighborhood ?? "",
        city: address.city ?? "",
        state: address.state ?? ""
      });
    }
  }
  validateImageFile(file, errorSignal) {
    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      errorSignal.set("Formato inv\xE1lido. Envie um arquivo JPG, PNG ou WEBP.");
      return false;
    }
    if (file.size > MAX_IMAGE_SIZE_BYTES) {
      errorSignal.set("O arquivo deve ter no m\xE1ximo 5MB.");
      return false;
    }
    return true;
  }
  readFileAsDataUrl(file, onLoad) {
    const reader = new FileReader();
    reader.onload = () => onLoad(reader.result);
    reader.readAsDataURL(file);
  }
  buildPayload() {
    const personal = this.personalForm.getRawValue();
    const owner = {
      fullName: personal.fullName.trim(),
      phone: onlyDigits(personal.phone)
    };
    if (this.canEditCompany()) {
      const company = this.companyForm.getRawValue();
      const address = this.addressForm.getRawValue();
      return {
        owner,
        company: {
          businessName: company.businessName.trim(),
          phone: onlyDigits(company.phone),
          email: company.email.trim()
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
      };
    }
    return {
      owner,
      company: {
        businessName: owner.fullName,
        phone: owner.phone,
        email: this.authService.currentUser()?.email ?? "sem-email@comandaunica.com"
      },
      address: {
        zipCode: "00000000",
        street: "-",
        number: "0",
        neighborhood: "-",
        city: "-",
        state: "SP"
      }
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
    if (error.status === 403) {
      return "Voc\xEA n\xE3o tem permiss\xE3o para alterar esses dados.";
    }
    if (error.status === 422) {
      return "Verifique os dados informados e tente novamente.";
    }
    return "N\xE3o foi poss\xEDvel atualizar o perfil. Tente novamente em instantes.";
  }
  resolveImageErrorMessage(error) {
    const body = error.error;
    if (body?.mensagem) {
      return body.mensagem;
    }
    if (error.status === 403) {
      return "Voc\xEA n\xE3o tem permiss\xE3o para alterar esta imagem.";
    }
    if (error.status === 422) {
      return "Arquivo inv\xE1lido ou maior que o limite permitido.";
    }
    return "N\xE3o foi poss\xEDvel enviar a imagem. Tente novamente em instantes.";
  }
  static \u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-admin-profile"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 11, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["role", "tablist", 1, "tabs"], [1, "field__hint"], ["role", "alert", 1, "form-alert", "form-alert--error"], ["novalidate", "", 3, "submit"], ["role", "status", 1, "form-alert", "form-alert--success"], [1, "step-actions"], ["type", "submit", "appRipple", "", 1, "btn", "btn--primary", 3, "disabled"], ["type", "button", "role", "tab", 1, "tabs__item", 3, "click"], ["aria-hidden", "true", 1, "material-icons"], [1, "card", "profile-card"], [1, "step-heading"], [1, "image-upload"], [1, "image-upload__preview"], ["alt", "", 3, "src"], [1, "image-upload__actions"], ["for", "avatar-input", 1, "btn", "btn--ghost", "btn--sm"], ["id", "avatar-input", "type", "file", "accept", "image/jpeg,image/png,image/webp", "hidden", "", 3, "change", "disabled"], [1, "field__error"], [1, "card", "profile-card", 3, "formGroup"], [1, "field"], ["for", "profile-email", 1, "field__label"], [1, "field__control"], ["id", "profile-email", "type", "email", "disabled", "", 1, "field__input", 3, "value"], ["for", "profile-full-name", 1, "field__label"], ["id", "profile-full-name", "type", "text", "formControlName", "fullName", "placeholder", "Seu nome", "autocomplete", "name", 1, "field__input"], ["for", "profile-phone", 1, "field__label"], ["id", "profile-phone", "type", "tel", "inputmode", "numeric", "formControlName", "phone", "placeholder", "(00) 00000-0000", "maxlength", "15", "autocomplete", "tel", 1, "field__input", 3, "input"], [1, "image-upload__preview", "image-upload__preview--square"], ["for", "logo-input", 1, "btn", "btn--ghost", "btn--sm"], ["id", "logo-input", "type", "file", "accept", "image/jpeg,image/png,image/webp", "hidden", "", 3, "change", "disabled"], ["for", "profile-business-name", 1, "field__label"], ["id", "profile-business-name", "type", "text", "formControlName", "businessName", "placeholder", "Ex: Restaurante Exemplo", "autocomplete", "organization", 1, "field__input"], ["for", "profile-business-phone", 1, "field__label"], ["id", "profile-business-phone", "type", "tel", "inputmode", "numeric", "formControlName", "phone", "placeholder", "(00) 00000-0000", "maxlength", "15", "autocomplete", "tel", 1, "field__input", 3, "input"], ["for", "profile-business-email", 1, "field__label"], ["id", "profile-business-email", "type", "email", "formControlName", "email", "placeholder", "contato@seurestaurante.com", "autocomplete", "email", 1, "field__input"], ["for", "profile-cep", 1, "field__label"], ["id", "profile-cep", "type", "text", "inputmode", "numeric", "formControlName", "cep", "placeholder", "00000-000", "maxlength", "9", 1, "field__input", 3, "input", "blur"], ["for", "profile-street", 1, "field__label"], ["id", "profile-street", "type", "text", "formControlName", "street", "placeholder", "Nome da rua", "autocomplete", "address-line1", 1, "field__input"], ["for", "profile-number", 1, "field__label"], ["id", "profile-number", "type", "text", "formControlName", "number", "placeholder", "N\xBA", 1, "field__input"], ["for", "profile-complement", 1, "field__label"], [1, "field__optional"], ["id", "profile-complement", "type", "text", "formControlName", "complement", "placeholder", "Sala, bloco, refer\xEAncia...", 1, "field__input"], ["for", "profile-neighborhood", 1, "field__label"], ["id", "profile-neighborhood", "type", "text", "formControlName", "neighborhood", "placeholder", "Bairro", 1, "field__input"], ["for", "profile-city", 1, "field__label"], ["id", "profile-city", "type", "text", "formControlName", "city", "placeholder", "Cidade", 1, "field__input"], ["for", "profile-state", 1, "field__label"], ["id", "profile-state", "type", "text", "formControlName", "state", "placeholder", "UF", "maxlength", "2", 1, "field__input"]], template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Meu perfil");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(5, ProfileComponent_Conditional_5_Template, 9, 6, "div", 3)(6, ProfileComponent_Conditional_6_Template, 2, 0, "p", 4)(7, ProfileComponent_Conditional_7_Template, 4, 1, "div", 5);
      \u0275\u0275elementStart(8, "form", 6);
      \u0275\u0275listener("submit", function ProfileComponent_Template_form_submit_8_listener($event) {
        $event.preventDefault();
        return ctx.onSubmitProfile();
      });
      \u0275\u0275template(9, ProfileComponent_Conditional_9_Template, 36, 12)(10, ProfileComponent_Conditional_10_Template, 80, 33)(11, ProfileComponent_Conditional_11_Template, 4, 0, "div", 7)(12, ProfileComponent_Conditional_12_Template, 4, 1, "div", 5);
      \u0275\u0275elementStart(13, "div", 8)(14, "button", 9);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" Atualize sua foto e seus dados pessoais", ctx.canEditCompany() ? ", al\xE9m dos dados da empresa e do endere\xE7o" : "", ". ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.canEditCompany() ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoadingProfile() ? 6 : ctx.loadProfileError() ? 7 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-loading", ctx.isLoadingProfile());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.canEditCompany() || ctx.activeTab() === "personal" ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.canEditCompany() && ctx.activeTab() === "company" ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.profileSuccess() ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.profileError() ? 12 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isSubmittingProfile() || ctx.isLoadingProfile());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isSubmittingProfile() ? "Salvando\u2026" : "Salvar altera\xE7\xF5es", " ");
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, RippleDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 24px;\n  border-bottom: 1px solid var(--color-border);\n  max-width: 560px;\n}\n.tabs__item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 4px;\n  margin-right: 20px;\n  background: none;\n  border: none;\n  border-bottom: 2px solid transparent;\n  color: var(--color-text-muted);\n  font-size: 0.9375rem;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition: color var(--transition-fast), border-color var(--transition-fast);\n}\n.tabs__item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.tabs__item[_ngcontent-%COMP%]:hover {\n  color: var(--color-text);\n}\n.tabs__item--active[_ngcontent-%COMP%] {\n  color: var(--color-text);\n  border-bottom-color: var(--color-accent);\n}\n.field__input[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\nform.is-loading[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n.profile-card[_ngcontent-%COMP%] {\n  max-width: 560px;\n  padding: 32px;\n  margin-bottom: 24px;\n}\n.step-heading[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.step-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 8px;\n  max-width: 560px;\n}\n.image-upload[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.image-upload__preview[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 88px;\n  height: 88px;\n  border-radius: 50%;\n  border: 1px solid var(--color-border-strong);\n  background: var(--color-bg-elevated);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  color: var(--color-text-muted);\n}\n.image-upload__preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.image-upload__preview[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n.image-upload__preview--square[_ngcontent-%COMP%] {\n  border-radius: var(--radius-sm);\n}\n.image-upload__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 6px;\n}\n/*# sourceMappingURL=profile.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src\\app\\features\\admin\\pages\\settings\\profile\\profile.component.ts", lineNumber: 26 });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=chunk-OOU2TDOZ.js.map
