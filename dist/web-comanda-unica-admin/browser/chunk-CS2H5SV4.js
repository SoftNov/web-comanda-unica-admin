import {
  RippleDirective
} from "./chunk-UVFWKPXF.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-BTGRTOWH.js";
import {
  AuthService
} from "./chunk-6ERKNQ3W.js";
import {
  brDateTimeFormat,
  brToday,
  parseApiDate
} from "./chunk-ZLRUWLWP.js";
import "./chunk-P3N4DPOK.js";
import {
  environment
} from "./chunk-IKIQHSDP.js";
import "./chunk-GPCUXOSL.js";
import {
  HttpClient,
  HttpErrorResponse,
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
} from "./chunk-QBSIROZR.js";

// src/app/shared/services/comanda-pix.service.ts
var ComandaPixService = class _ComandaPixService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiBaseUrl}/api/v1/comanda-pix`;
  getSettings() {
    return this.http.get(`${this.baseUrl}/settings`);
  }
  saveApiKey(apiKey) {
    return this.http.put(`${this.baseUrl}/settings/api-key`, { apiKey });
  }
  removeApiKey() {
    return this.http.delete(`${this.baseUrl}/settings/api-key`);
  }
  update(pixEnabled, minPixAmount) {
    return this.http.put(`${this.baseUrl}/settings`, { pixEnabled, minPixAmount });
  }
  // date = yyyy-MM-dd (dia de Brasília); sem date, hoje.
  report(date) {
    const params = date ? { date } : {};
    return this.http.get(`${this.baseUrl}/report`, { params });
  }
  static \u0275fac = function ComandaPixService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComandaPixService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ComandaPixService, factory: _ComandaPixService.\u0275fac, providedIn: "root" });
};

// src/app/features/admin/pages/settings/comanda-pix/comanda-pix.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ComandaPixComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "p", 6);
    \u0275\u0275text(2, "Carregando\u2026");
    \u0275\u0275elementEnd()();
  }
}
function ComandaPixComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 8)(2, "span", 9);
    \u0275\u0275text(3, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " N\xE3o foi poss\xEDvel carregar a configura\xE7\xE3o do Pix na comanda. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 10)(6, "button", 11);
    \u0275\u0275listener("click", function ComandaPixComponent_Conditional_6_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.load());
    });
    \u0275\u0275text(7, "Tentar novamente");
    \u0275\u0275elementEnd()()();
  }
}
function ComandaPixComponent_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 9);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "O Pix na comanda ainda n\xE3o est\xE1 liberado nesta plataforma. Fale com o suporte da Comanda \xDAnica.");
    \u0275\u0275elementEnd()();
  }
}
function ComandaPixComponent_Conditional_7_Conditional_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "Conectada");
    \u0275\u0275elementEnd();
  }
}
function ComandaPixComponent_Conditional_7_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "Chave recusada pela Asaas");
    \u0275\u0275elementEnd();
  }
}
function ComandaPixComponent_Conditional_7_Conditional_4_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 9);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" A Asaas deixou de aceitar esta chave", s_r3.lastError ? " (" + s_r3.lastError + ")" : "", ". O Pix na comanda foi desativado e os pagamentos voltaram para caixa/gar\xE7om. Substitua a chave para voltar a usar. ");
  }
}
function ComandaPixComponent_Conditional_7_Conditional_4_Conditional_23_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 9);
    \u0275\u0275text(2, "warning_amber");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Remover a chave desativa o Pix na comanda e cancela os Pix ainda n\xE3o pagos. Confirmar?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 10)(6, "button", 18);
    \u0275\u0275listener("click", function ComandaPixComponent_Conditional_7_Conditional_4_Conditional_23_Conditional_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.confirmingRemoval.set(false));
    });
    \u0275\u0275text(7, "Voltar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 19);
    \u0275\u0275listener("click", function ComandaPixComponent_Conditional_7_Conditional_4_Conditional_23_Conditional_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeKey());
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.isRemovingKey());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isRemovingKey());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isRemovingKey() ? "Removendo\u2026" : "Sim, remover", " ");
  }
}
function ComandaPixComponent_Conditional_7_Conditional_4_Conditional_23_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "button", 18);
    \u0275\u0275listener("click", function ComandaPixComponent_Conditional_7_Conditional_4_Conditional_23_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.startKeyEdit());
    });
    \u0275\u0275text(2, "Substituir chave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 20);
    \u0275\u0275listener("click", function ComandaPixComponent_Conditional_7_Conditional_4_Conditional_23_Conditional_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.confirmingRemoval.set(true));
    });
    \u0275\u0275text(4, "Remover");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !s_r3.platformReady);
  }
}
function ComandaPixComponent_Conditional_7_Conditional_4_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ComandaPixComponent_Conditional_7_Conditional_4_Conditional_23_Conditional_0_Template, 10, 3)(1, ComandaPixComponent_Conditional_7_Conditional_4_Conditional_23_Conditional_1_Template, 5, 1, "div", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.confirmingRemoval() ? 0 : 1);
  }
}
function ComandaPixComponent_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dl", 14)(1, "div")(2, "dt");
    \u0275\u0275text(3, "Situa\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd");
    \u0275\u0275template(5, ComandaPixComponent_Conditional_7_Conditional_4_Conditional_5_Template, 2, 0, "span", 15)(6, ComandaPixComponent_Conditional_7_Conditional_4_Conditional_6_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "dt");
    \u0275\u0275text(9, "Chave de API");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "dd", 17);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "dt");
    \u0275\u0275text(14, "Conta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "dd");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "dt");
    \u0275\u0275text(19, "CPF/CNPJ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "dd");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(22, ComandaPixComponent_Conditional_7_Conditional_4_Conditional_22_Template, 5, 1, "div", 8)(23, ComandaPixComponent_Conditional_7_Conditional_4_Conditional_23_Template, 2, 1);
  }
  if (rf & 2) {
    const s_r3 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(s_r3.status === "ACTIVE" ? 5 : 6);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(s_r3.keyMasked);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(s_r3.asaasAccountName || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(s_r3.asaasAccountDoc || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275conditional(s_r3.status === "INVALID" ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canManage() ? 23 : -1);
  }
}
function ComandaPixComponent_Conditional_7_Conditional_5_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function ComandaPixComponent_Conditional_7_Conditional_5_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelKeyEdit());
    });
    \u0275\u0275text(1, "Cancelar");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.isSavingKey());
  }
}
function ComandaPixComponent_Conditional_7_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ol", 21)(1, "li");
    \u0275\u0275text(2, "Crie (ou acesse) a conta do estabelecimento na ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "Asaas");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ".");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "li");
    \u0275\u0275text(7, "No painel da Asaas, v\xE1 em ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9, "Integra\xE7\xF5es > Chaves de API");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " e gere uma chave.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "li");
    \u0275\u0275text(12, "Cole a chave abaixo. Ela \xE9 validada na hora e guardada criptografada \u2014 nunca mais aparece nesta tela.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 22)(14, "span", 9);
    \u0275\u0275text(15, "shield");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div")(17, "strong");
    \u0275\u0275text(18, "Recomendado na Asaas:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " ative a lista de IPs permitidos e a autoriza\xE7\xE3o de transfer\xEAncias via API. A Comanda \xDAnica s\xF3 cria e consulta cobran\xE7as \u2014 nunca faz transfer\xEAncias ou saques. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "label", 23);
    \u0275\u0275text(21, " Chave de API da Asaas ");
    \u0275\u0275elementStart(22, "input", 24);
    \u0275\u0275listener("ngModelChange", function ComandaPixComponent_Conditional_7_Conditional_5_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.apiKey.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 10);
    \u0275\u0275template(24, ComandaPixComponent_Conditional_7_Conditional_5_Conditional_24_Template, 2, 1, "button", 25);
    \u0275\u0275elementStart(25, "button", 26);
    \u0275\u0275listener("click", function ComandaPixComponent_Conditional_7_Conditional_5_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveKey());
    });
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r3 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(22);
    \u0275\u0275property("ngModel", ctx_r1.apiKey());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(s_r3.configured ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isSavingKey() || !s_r3.platformReady);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSavingKey() ? "Validando\u2026" : "Conectar conta", " ");
  }
}
function ComandaPixComponent_Conditional_7_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "Nenhuma conta Asaas conectada. Pe\xE7a ao propriet\xE1rio ou administrador para configurar.");
    \u0275\u0275elementEnd();
  }
}
function ComandaPixComponent_Conditional_7_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const msg_r8 = ctx;
    \u0275\u0275classProp("form-alert--error", msg_r8.type === "error")("form-alert--success", msg_r8.type === "ok");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r8.type === "ok" ? "check_circle" : "error_outline");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r8.text);
  }
}
function ComandaPixComponent_Conditional_7_Conditional_8_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 9);
    \u0275\u0275text(2, "calculate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, " Com m\xEDnimo de ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " da venda. Confira a tarifa atual no seu contrato com a Asaas. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sim_r10 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.currency(ctx_r1.minPixAmount()));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", a tarifa da Asaas (\u2248 ", ctx_r1.currency(sim_r10.fee), " por Pix) equivale a no m\xE1ximo ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.percent(sim_r10.percent));
  }
}
function ComandaPixComponent_Conditional_7_Conditional_8_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const msg_r11 = ctx;
    \u0275\u0275classProp("form-alert--error", msg_r11.type === "error")("form-alert--success", msg_r11.type === "ok");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r11.type === "ok" ? "check_circle" : "error_outline");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r11.text);
  }
}
function ComandaPixComponent_Conditional_7_Conditional_8_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "button", 26);
    \u0275\u0275listener("click", function ComandaPixComponent_Conditional_7_Conditional_8_Conditional_16_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveSettings());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isSavingSettings());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSavingSettings() ? "Salvando\u2026" : "Salvar", " ");
  }
}
function ComandaPixComponent_Conditional_7_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "h2", 5);
    \u0275\u0275text(2, "Ativa\xE7\xE3o e valor m\xEDnimo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 6);
    \u0275\u0275text(4, ' A Asaas cobra uma tarifa fixa por Pix recebido \u2014 em valores baixos ela pesa mais que a maquininha. O m\xEDnimo vale por pagamento (n\xE3o por comanda): abaixo dele, o cliente v\xEA "pe\xE7a a conta ao gar\xE7om". ');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "label", 27)(6, "input", 28);
    \u0275\u0275listener("ngModelChange", function ComandaPixComponent_Conditional_7_Conditional_8_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pixEnabled.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Oferecer Pix na comanda aos clientes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "label", 29);
    \u0275\u0275text(10, " Valor m\xEDnimo por Pix ");
    \u0275\u0275elementStart(11, "input", 30);
    \u0275\u0275listener("ngModelChange", function ComandaPixComponent_Conditional_7_Conditional_8_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.minPixAmount.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 6);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ComandaPixComponent_Conditional_7_Conditional_8_Conditional_14_Template, 11, 3, "div", 31)(15, ComandaPixComponent_Conditional_7_Conditional_8_Conditional_15_Template, 5, 6, "div", 13)(16, ComandaPixComponent_Conditional_7_Conditional_8_Conditional_16_Template, 3, 2, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_9_0;
    let tmp_10_0;
    const s_r3 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", !ctx_r1.canManage() || s_r3.status !== "ACTIVE")("ngModel", ctx_r1.pixEnabled());
    \u0275\u0275advance(5);
    \u0275\u0275property("min", s_r3.asaasMinAmount)("disabled", !ctx_r1.canManage())("ngModel", ctx_r1.minPixAmount());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Sugerido: ", ctx_r1.currency(s_r3.suggestedMinAmount), " \xB7 m\xEDnimo aceito pela Asaas: ", ctx_r1.currency(s_r3.asaasMinAmount), "");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_9_0 = ctx_r1.feeSimulation()) ? 14 : -1, tmp_9_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_10_0 = ctx_r1.settingsMessage()) ? 15 : -1, tmp_10_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canManage() ? 16 : -1);
  }
}
function ComandaPixComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ComandaPixComponent_Conditional_7_Conditional_0_Template, 5, 0, "div", 12);
    \u0275\u0275elementStart(1, "div", 3)(2, "h2", 5);
    \u0275\u0275text(3, "Conta Asaas do estabelecimento");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ComandaPixComponent_Conditional_7_Conditional_4_Template, 24, 6)(5, ComandaPixComponent_Conditional_7_Conditional_5_Template, 27, 4)(6, ComandaPixComponent_Conditional_7_Conditional_6_Template, 2, 0, "p", 6)(7, ComandaPixComponent_Conditional_7_Conditional_7_Template, 5, 6, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ComandaPixComponent_Conditional_7_Conditional_8_Template, 17, 10, "div", 3);
  }
  if (rf & 2) {
    let tmp_4_0;
    const s_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!s_r3.platformReady ? 0 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(s_r3.configured && !ctx_r1.editingKey() ? 4 : ctx_r1.canManage() ? 5 : 6);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_4_0 = ctx_r1.keyMessage()) ? 7 : -1, tmp_4_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(s_r3.configured ? 8 : -1);
  }
}
function ComandaPixComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "Carregando\u2026");
    \u0275\u0275elementEnd();
  }
}
function ComandaPixComponent_Conditional_17_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span");
    \u0275\u0275text(2, "Pago a mais (avaliar estorno)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r13 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.currency(r_r13.totalOverpaid));
  }
}
function ComandaPixComponent_Conditional_17_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "Nenhum Pix pago neste dia.");
    \u0275\u0275elementEnd();
  }
}
function ComandaPixComponent_Conditional_17_Conditional_18_For_18_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 ", ctx_r1.currency(item_r14.overpaidAmount), " a mais");
  }
}
function ComandaPixComponent_Conditional_17_Conditional_18_For_18_Template(rf, ctx) {
  if (rf & 1) {
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
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275template(11, ComandaPixComponent_Conditional_17_Conditional_18_For_18_Conditional_11_Template, 2, 1, "small", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 17);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.dateTime(item_r14.paidAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tableLabel(item_r14.tableName, item_r14.tableNumber));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currency(item_r14.amount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currency(item_r14.platformFeeAmount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.statusLabel(item_r14.status), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r14.overpaidAmount ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r14.asaasPaymentId || "\u2014");
  }
}
function ComandaPixComponent_Conditional_17_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "table", 35)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Hor\xE1rio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Mesa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Valor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Taxa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Situa\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Cobran\xE7a Asaas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, ComandaPixComponent_Conditional_17_Conditional_18_For_18_Template, 14, 7, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r13 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(r_r13.payments);
  }
}
function ComandaPixComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div")(2, "span");
    \u0275\u0275text(3, "Pagamentos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "span");
    \u0275\u0275text(8, "Total recebido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "span");
    \u0275\u0275text(13, "Taxa Comanda \xDAnica (split)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, ComandaPixComponent_Conditional_17_Conditional_16_Template, 5, 1, "div", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, ComandaPixComponent_Conditional_17_Conditional_17_Template, 2, 0, "p", 6)(18, ComandaPixComponent_Conditional_17_Conditional_18_Template, 19, 0, "div", 34);
  }
  if (rf & 2) {
    const r_r13 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(r_r13.count);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.currency(r_r13.totalAmount));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.currency(r_r13.totalPlatformFee));
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r13.totalOverpaid > 0 ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r13.payments.length === 0 ? 17 : 18);
  }
}
function ComandaPixComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "N\xE3o foi poss\xEDvel carregar o relat\xF3rio.");
    \u0275\u0275elementEnd();
  }
}
var STATUS_LABELS = {
  PENDING: "Aguardando",
  PAID: "Pago",
  EXPIRED: "Expirado",
  CANCELED: "Cancelado",
  REFUNDED: "Estornado"
};
var ComandaPixComponent = class _ComandaPixComponent {
  pixService = inject(ComandaPixService);
  authService = inject(AuthService);
  currencyFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
  dateTimeFormatter = brDateTimeFormat({ day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
  settings = signal(null);
  isLoading = signal(true);
  loadError = signal(false);
  // Cadastro/substituição da chave.
  editingKey = signal(false);
  apiKey = signal("");
  isSavingKey = signal(false);
  keyMessage = signal(null);
  confirmingRemoval = signal(false);
  isRemovingKey = signal(false);
  // Ativação e valor mínimo.
  pixEnabled = signal(false);
  minPixAmount = signal(null);
  isSavingSettings = signal(false);
  settingsMessage = signal(null);
  // Relatório diário.
  reportDate = signal(brToday());
  report = signal(null);
  isLoadingReport = signal(false);
  // Só OWNER/ADMIN mexem na chave e na ativação (o backend também restringe).
  canManage = computed(() => {
    const company = this.authService.selectedCompany();
    return !!company && ["OWNER", "ADMIN"].includes(company.profileCode);
  });
  // "Com mínimo de R$ X, a tarifa equivale a no máximo Y% da venda."
  feeSimulation = computed(() => {
    const s = this.settings();
    const min = this.minPixAmount();
    if (!s || !min || min <= 0) {
      return null;
    }
    return {
      fee: s.asaasPixFeeReference,
      percent: s.asaasPixFeeReference / min * 100
    };
  });
  constructor() {
    this.load();
    this.loadReport();
  }
  currency(value) {
    return value != null ? this.currencyFormatter.format(value) : "\u2014";
  }
  percent(value) {
    return `${value.toLocaleString("pt-BR", { maximumFractionDigits: 1 })}%`;
  }
  dateTime(value) {
    const parsed = parseApiDate(value);
    return parsed ? this.dateTimeFormatter.format(parsed) : "\u2014";
  }
  statusLabel(status) {
    return STATUS_LABELS[status] ?? status;
  }
  tableLabel(name, number) {
    return name?.trim() ? name : number != null ? `Mesa ${number}` : "\u2014";
  }
  load() {
    this.isLoading.set(true);
    this.loadError.set(false);
    this.pixService.getSettings().subscribe({
      next: (settings) => {
        this.applySettings(settings);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
        this.loadError.set(true);
      }
    });
  }
  startKeyEdit() {
    this.apiKey.set("");
    this.keyMessage.set(null);
    this.editingKey.set(true);
  }
  cancelKeyEdit() {
    this.apiKey.set("");
    this.editingKey.set(false);
  }
  saveKey() {
    const key = this.apiKey().trim();
    if (!key) {
      this.keyMessage.set({ type: "error", text: "Cole a chave de API da Asaas." });
      return;
    }
    this.isSavingKey.set(true);
    this.keyMessage.set(null);
    this.pixService.saveApiKey(key).subscribe({
      next: (settings) => {
        this.apiKey.set("");
        this.editingKey.set(false);
        this.isSavingKey.set(false);
        this.applySettings(settings);
        this.keyMessage.set({ type: "ok", text: "Conta Asaas conectada. Agora defina o valor m\xEDnimo e ative o Pix na comanda." });
      },
      error: (error) => {
        this.isSavingKey.set(false);
        this.keyMessage.set({ type: "error", text: this.errorText(error, "N\xE3o foi poss\xEDvel validar a chave agora. Tente novamente.") });
      }
    });
  }
  removeKey() {
    this.isRemovingKey.set(true);
    this.pixService.removeApiKey().subscribe({
      next: (settings) => {
        this.isRemovingKey.set(false);
        this.confirmingRemoval.set(false);
        this.applySettings(settings);
        this.keyMessage.set({ type: "ok", text: "Chave removida. O Pix na comanda foi desativado." });
      },
      error: (error) => {
        this.isRemovingKey.set(false);
        this.keyMessage.set({ type: "error", text: this.errorText(error, "N\xE3o foi poss\xEDvel remover a chave agora.") });
      }
    });
  }
  saveSettings() {
    const s = this.settings();
    const min = this.minPixAmount();
    if (!s || min == null || min < s.asaasMinAmount) {
      this.settingsMessage.set({ type: "error", text: `O valor m\xEDnimo precisa ser de pelo menos ${this.currency(s?.asaasMinAmount)}.` });
      return;
    }
    this.isSavingSettings.set(true);
    this.settingsMessage.set(null);
    this.pixService.update(this.pixEnabled(), min).subscribe({
      next: (settings) => {
        this.isSavingSettings.set(false);
        this.applySettings(settings);
        this.settingsMessage.set({
          type: "ok",
          text: settings.pixEnabled ? "Pix na comanda ativo. Os clientes j\xE1 veem a op\xE7\xE3o no card\xE1pio." : "Configura\xE7\xE3o salva. Pix na comanda desativado."
        });
      },
      error: (error) => {
        this.isSavingSettings.set(false);
        this.settingsMessage.set({ type: "error", text: this.errorText(error, "N\xE3o foi poss\xEDvel salvar a configura\xE7\xE3o.") });
      }
    });
  }
  loadReport() {
    this.isLoadingReport.set(true);
    this.pixService.report(this.reportDate()).subscribe({
      next: (report) => {
        this.report.set(report);
        this.isLoadingReport.set(false);
      },
      error: () => {
        this.report.set(null);
        this.isLoadingReport.set(false);
      }
    });
  }
  changeReportDate(value) {
    if (!value) {
      return;
    }
    this.reportDate.set(value);
    this.loadReport();
  }
  applySettings(settings) {
    this.settings.set(settings);
    this.pixEnabled.set(settings.pixEnabled);
    this.minPixAmount.set(settings.minPixAmount);
  }
  errorText(error, fallback) {
    const body = error instanceof HttpErrorResponse ? error.error : void 0;
    return body?.mensagem ?? fallback;
  }
  static \u0275fac = function ComandaPixComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComandaPixComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComandaPixComponent, selectors: [["app-comanda-pix"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 6, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "card", "section"], [1, "report-header"], [1, "section__title"], [1, "field__hint"], ["type", "date", 1, "field__input", "report-date", 3, "change", "value"], [1, "form-alert", "form-alert--error"], ["aria-hidden", "true", 1, "material-icons"], [1, "section__actions"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], [1, "form-alert"], [1, "form-alert", 3, "form-alert--error", "form-alert--success"], [1, "account"], [1, "badge", "badge--success"], [1, "badge", "badge--danger"], [1, "mono"], ["type", "button", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn--danger", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn--ghost", "btn--danger-text", 3, "click"], [1, "steps"], [1, "security-tips"], [1, "field__label"], ["type", "password", "autocomplete", "off", "spellcheck", "false", "placeholder", "$aact_...", 1, "field__input", "mono", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn--ghost", 3, "disabled"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", 3, "click", "disabled"], [1, "toggle"], ["type", "checkbox", 3, "ngModelChange", "disabled", "ngModel"], [1, "field__label", "field__label--narrow"], ["type", "number", "step", "0.01", 1, "field__input", 3, "ngModelChange", "min", "disabled", "ngModel"], [1, "simulation"], [1, "report-totals"], [1, "report-totals__warn"], [1, "table-wrapper"], [1, "data-table", "data-table--compact"], [1, "overpaid"]], template: function ComandaPixComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Pix na comanda");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, " O cliente paga a comanda pelo celular, via Pix, sem esperar o caixa ou o gar\xE7om. O dinheiro cai direto na sua conta Asaas; a taxa da Comanda \xDAnica \xE9 descontada na hora, no pr\xF3prio Pix. Caixa e gar\xE7om continuam funcionando normalmente. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(5, ComandaPixComponent_Conditional_5_Template, 3, 0, "div", 3)(6, ComandaPixComponent_Conditional_6_Template, 8, 0, "div", 3)(7, ComandaPixComponent_Conditional_7_Template, 9, 4);
      \u0275\u0275elementStart(8, "div", 3)(9, "div", 4)(10, "div")(11, "h2", 5);
      \u0275\u0275text(12, "Pagamentos por Pix na comanda");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p", 6);
      \u0275\u0275text(14, " Esses pagamentos n\xE3o passam pelo caixa: use esta lista para conferir as vendas e emitir a NFC-e (a emiss\xE3o \xE9 responsabilidade do estabelecimento). ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "input", 7);
      \u0275\u0275listener("change", function ComandaPixComponent_Template_input_change_15_listener($event) {
        return ctx.changeReportDate($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(16, ComandaPixComponent_Conditional_16_Template, 2, 0, "p", 6)(17, ComandaPixComponent_Conditional_17_Template, 19, 5)(18, ComandaPixComponent_Conditional_18_Template, 2, 0, "p", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_4_0;
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.isLoading() ? 5 : ctx.loadError() ? 6 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_1_0 = !ctx.isLoading() && !ctx.loadError() && ctx.settings()) ? 7 : -1, tmp_1_0);
      \u0275\u0275advance(8);
      \u0275\u0275property("value", ctx.reportDate());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoadingReport() ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_4_0 = !ctx.isLoadingReport() && ctx.report()) ? 17 : -1, tmp_4_0);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isLoadingReport() && !ctx.report() ? 18 : -1);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, MinValidator, NgModel, RippleDirective], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n  max-width: 70ch;\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.field__label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-top: 14px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.field__label--narrow[_ngcontent-%COMP%] {\n  max-width: 220px;\n}\n.field__input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9px 12px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border-strong);\n  background: var(--color-bg-elevated);\n  color: var(--color-text);\n  font: inherit;\n  font-size: 0.9rem;\n}\n.field__input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-accent);\n}\n.mono[_ngcontent-%COMP%] {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Consolas,\n    monospace;\n}\n.section[_ngcontent-%COMP%] {\n  padding: 24px;\n  margin-bottom: 20px;\n}\n.section__title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--color-text);\n  margin-bottom: 6px;\n}\n.section__actions[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.form-alert[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n.form-alert[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%], \n.security-tips[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%], \n.simulation[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.form-alert[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(.material-icons), \n.security-tips[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(.material-icons), \n.simulation[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(.material-icons) {\n  flex: 1;\n  min-width: 0;\n  overflow-wrap: anywhere;\n  line-height: 1.45;\n}\n.account[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 14px;\n  margin: 14px 0 0;\n}\n.account[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--color-text-muted);\n}\n.account[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: var(--color-text);\n  font-size: 0.95rem;\n  overflow-wrap: anywhere;\n}\n.steps[_ngcontent-%COMP%] {\n  margin: 12px 0;\n  padding-left: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-size: 0.9rem;\n  color: var(--color-text);\n}\n.security-tips[_ngcontent-%COMP%], \n.simulation[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: flex-start;\n  margin-top: 14px;\n  padding: 12px 14px;\n  border-radius: var(--radius-sm);\n  background: var(--color-bg-elevated);\n  border: 1px solid var(--color-border);\n  font-size: 0.85rem;\n  color: var(--color-text);\n}\n.security-tips[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.simulation[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--color-accent);\n}\n.toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 16px;\n  font-size: 0.9rem;\n  color: var(--color-text);\n  cursor: pointer;\n}\n.toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.btn--danger-text[_ngcontent-%COMP%] {\n  color: var(--color-danger, #ef4444);\n}\n.report-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.report-date[_ngcontent-%COMP%] {\n  max-width: 180px;\n}\n.report-totals[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 12px;\n  margin: 16px 0;\n}\n.report-totals[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 12px 14px;\n  border-radius: var(--radius-sm);\n  background: var(--color-bg-elevated);\n  border: 1px solid var(--color-border);\n}\n.report-totals[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.report-totals[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  color: var(--color-text);\n}\n.report-totals__warn[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.overpaid[_ngcontent-%COMP%] {\n  color: var(--color-warning, #f59e0b);\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.9375rem;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  text-align: left;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: 1px solid var(--color-border);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--color-border);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.02);\n}\n.data-table--compact[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.data-table--compact[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: var(--radius-full);\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.badge--success[_ngcontent-%COMP%] {\n  background: var(--color-success-bg);\n  color: var(--color-success);\n}\n.badge--danger[_ngcontent-%COMP%] {\n  background: rgba(248, 113, 113, 0.14);\n  color: #f87171;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #f87171;\n  color: #2a0a0a;\n}\n.btn--danger[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n}\n.btn--danger[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n@media (max-width: 600px) {\n  .page-header[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.375rem;\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    line-height: 1.5;\n  }\n  .section[_ngcontent-%COMP%] {\n    padding: 16px;\n    margin-bottom: 14px;\n  }\n  .section__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n  }\n  .field__label--narrow[_ngcontent-%COMP%], \n   .report-date[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n  .report-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n  }\n  .report-totals[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 8px;\n  }\n  .report-totals[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n    min-width: 0;\n  }\n  .report-totals[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    overflow-wrap: anywhere;\n  }\n  .steps[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    line-height: 1.45;\n  }\n}\n/*# sourceMappingURL=comanda-pix.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComandaPixComponent, { className: "ComandaPixComponent", filePath: "src\\app\\features\\admin\\pages\\settings\\comanda-pix\\comanda-pix.component.ts", lineNumber: 34 });
})();
export {
  ComandaPixComponent
};
//# sourceMappingURL=chunk-CS2H5SV4.js.map
