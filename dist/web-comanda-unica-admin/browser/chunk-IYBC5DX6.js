import {
  QrScannerComponent
} from "./chunk-NLLVBTSU.js";
import {
  RippleDirective
} from "./chunk-ZBOLJN4C.js";
import {
  ConsumptionPassesService
} from "./chunk-CNMFBBFG.js";
import {
  formatTableLabel
} from "./chunk-XFEDBWXJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-GNNS5J5Q.js";
import {
  brDateTimeFormat,
  parseApiDate
} from "./chunk-MQ3P2GIM.js";
import "./chunk-IKIQHSDP.js";
import {
  Router
} from "./chunk-JC7LZX74.js";
import {
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-MRKXMG4P.js";

// src/app/features/admin/pages/controle-saida/controle-saida.component.ts
var _c0 = ["tokenInput"];
function ControleSaidaComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 14);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Este estabelecimento n\xE3o est\xE1 usando o cart\xE3o de consumo \u2014 os clientes pedem direto na comanda da mesa. Para ativar, acesse Cadastros \u203A Passes de Consumo. ");
    \u0275\u0275elementEnd();
  }
}
function ControleSaidaComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "app-qr-scanner", 19);
    \u0275\u0275listener("scanned", function ControleSaidaComponent_Conditional_25_Template_app_qr_scanner_scanned_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onScanned($event));
    })("closed", function ControleSaidaComponent_Conditional_25_Template_app_qr_scanner_closed_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.scanning.set(false));
    });
    \u0275\u0275elementEnd()();
  }
}
function ControleSaidaComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 14);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.error(), " ");
  }
}
function ControleSaidaComponent_Conditional_27_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2, "Comanda");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div")(6, "dt");
    \u0275\u0275text(7, "Mesa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "dd");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.shortId(r_r5.comandaId));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.tableLabel(r_r5));
  }
}
function ControleSaidaComponent_Conditional_27_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r5.customerName);
  }
}
function ControleSaidaComponent_Conditional_27_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dl", 23)(1, "div")(2, "dt");
    \u0275\u0275text(3, "Consumo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "dt");
    \u0275\u0275text(8, "Pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "dd");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 25)(12, "dt");
    \u0275\u0275text(13, "Saldo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "dd");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(r_r5.totalAmount));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(r_r5.paidAmount));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(r_r5.pendingAmount));
  }
}
function ControleSaidaComponent_Conditional_27_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "span", 14);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Pagamento confirmado ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 27)(5, "button", 28);
    \u0275\u0275listener("click", function ControleSaidaComponent_Conditional_27_Case_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.release());
    });
    \u0275\u0275elementStart(6, "span", 14);
    \u0275\u0275text(7, "logout");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r2.isReleasing());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.isReleasing() ? "Liberando\u2026" : "Liberar sa\xEDda", " ");
  }
}
function ControleSaidaComponent_Conditional_27_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "span", 14);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Pagamento pendente \u2014 sa\xEDda bloqueada ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 27)(5, "button", 30);
    \u0275\u0275listener("click", function ControleSaidaComponent_Conditional_27_Case_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPayment());
    });
    \u0275\u0275elementStart(6, "span", 14);
    \u0275\u0275text(7, "point_of_sale");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Realizar pagamento ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 31);
    \u0275\u0275listener("click", function ControleSaidaComponent_Conditional_27_Case_13_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.refresh());
    });
    \u0275\u0275elementStart(10, "span", 14);
    \u0275\u0275text(11, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Consultar de novo ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx_r2.isChecking());
  }
}
function ControleSaidaComponent_Conditional_27_Case_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "span", 14);
    \u0275\u0275text(2, "verified");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 32);
    \u0275\u0275text(5, "O cart\xE3o j\xE1 est\xE1 dispon\xEDvel para ser entregue a outro cliente.");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Sa\xEDda liberada em ", ctx_r2.formatDateTime(r_r5.releasedAt), " ");
  }
}
function ControleSaidaComponent_Conditional_27_Case_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 14);
    \u0275\u0275text(2, "block");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Cart\xE3o bloqueado ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 32);
    \u0275\u0275text(5, "Este cart\xE3o est\xE1 bloqueado e n\xE3o tem consumo em andamento. Recolha o cart\xE3o.");
    \u0275\u0275elementEnd();
  }
}
function ControleSaidaComponent_Conditional_27_Case_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 14);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Cart\xE3o sem consumo em andamento ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 32);
    \u0275\u0275text(5, " Este cart\xE3o n\xE3o est\xE1 vinculado a nenhuma comanda \u2014 o cliente n\xE3o pediu com ele, ou a sa\xEDda j\xE1 foi liberada. ");
    \u0275\u0275elementEnd();
  }
}
function ControleSaidaComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 18)(1, "dl", 20)(2, "div")(3, "dt");
    \u0275\u0275text(4, "Passe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "dd", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 22);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, ControleSaidaComponent_Conditional_27_Conditional_9_Template, 10, 2)(10, ControleSaidaComponent_Conditional_27_Conditional_10_Template, 5, 1, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ControleSaidaComponent_Conditional_27_Conditional_11_Template, 16, 3, "dl", 23)(12, ControleSaidaComponent_Conditional_27_Case_12_Template, 9, 2)(13, ControleSaidaComponent_Conditional_27_Case_13_Template, 13, 1)(14, ControleSaidaComponent_Conditional_27_Case_14_Template, 6, 1)(15, ControleSaidaComponent_Conditional_27_Case_15_Template, 6, 0)(16, ControleSaidaComponent_Conditional_27_Case_16_Template, 6, 0);
    \u0275\u0275elementStart(17, "div", 24)(18, "button", 15);
    \u0275\u0275listener("click", function ControleSaidaComponent_Conditional_27_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.newReading());
    });
    \u0275\u0275elementStart(19, "span", 14);
    \u0275\u0275text(20, "qr_code_2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " Nova leitura ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_9_0;
    const r_r5 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-state", ctx_r2.state());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", r_r5.token, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xB7 Cart\xE3o N\xBA ", r_r5.number, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r5.comandaId ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r5.customerName ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r5.comandaId ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_9_0 = ctx_r2.state()) === "PAID" ? 12 : tmp_9_0 === "PENDING" ? 13 : tmp_9_0 === "RELEASED" ? 14 : tmp_9_0 === "BLOCKED" ? 15 : tmp_9_0 === "NOT_IN_USE" ? 16 : -1);
  }
}
var ControleSaidaComponent = class _ControleSaidaComponent {
  passesService = inject(ConsumptionPassesService);
  router = inject(Router);
  currencyFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
  dateTimeFormatter = brDateTimeFormat({ day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
  tokenInput;
  // Cartão de consumo é opcional por estabelecimento — desligado, a tela só avisa (a leitura
  // continua disponível para liberar algum cartão que tenha ficado em uso).
  passEnabled = this.passesService.enabled;
  token = signal("");
  scanning = signal(false);
  isChecking = signal(false);
  isReleasing = signal(false);
  error = signal(null);
  result = signal(null);
  // Token efetivamente consultado (o do resultado exibido) — o campo pode ter sido limpo/alterado.
  checkedToken = null;
  state = computed(() => {
    const result = this.result();
    if (!result) {
      return null;
    }
    if (result.released) {
      return "RELEASED";
    }
    if (result.passStatus === "BLOCKED" || result.passStatus === "EXPIRED") {
      return "BLOCKED";
    }
    if (result.passStatus !== "IN_USE" || !result.comandaId) {
      return "NOT_IN_USE";
    }
    return result.allowed ? "PAID" : "PENDING";
  });
  ngAfterViewInit() {
    this.passesService.refreshEnabled();
    this.focusInput();
  }
  onTokenInput(value) {
    this.token.set(value.toUpperCase());
  }
  check(rawToken = this.token()) {
    const token = rawToken.trim();
    if (!token || this.isChecking()) {
      return;
    }
    this.isChecking.set(true);
    this.error.set(null);
    this.result.set(null);
    this.passesService.validateExit(token).subscribe({
      next: (result) => {
        this.isChecking.set(false);
        this.checkedToken = result.token;
        this.result.set(result);
        this.token.set("");
      },
      error: (error) => {
        this.isChecking.set(false);
        this.error.set(this.resolveErrorMessage(error, "N\xE3o foi poss\xEDvel consultar o passe."));
        this.focusInput();
      }
    });
  }
  onScanned(value) {
    this.scanning.set(false);
    this.token.set(value.toUpperCase());
    this.check(value);
  }
  toggleCamera() {
    this.scanning.update((value) => !value);
  }
  // Revalida o mesmo passe (ex.: depois de registrar o pagamento na tela da comanda).
  refresh() {
    if (this.checkedToken) {
      this.check(this.checkedToken);
    }
  }
  release() {
    if (!this.checkedToken || this.isReleasing()) {
      return;
    }
    this.isReleasing.set(true);
    this.error.set(null);
    this.passesService.release(this.checkedToken).subscribe({
      next: (result) => {
        this.isReleasing.set(false);
        this.result.set(result);
      },
      error: (error) => {
        this.isReleasing.set(false);
        this.error.set(this.resolveErrorMessage(error, "N\xE3o foi poss\xEDvel liberar a sa\xEDda."));
        this.refresh();
      }
    });
  }
  // Abre a comanda do passe na tela de Comandas (detalhe com "Registrar pagamento").
  goToPayment() {
    const comandaId = this.result()?.comandaId;
    if (comandaId) {
      void this.router.navigate(["/painel/comandas"], { queryParams: { comanda: comandaId } });
    }
  }
  newReading() {
    this.result.set(null);
    this.error.set(null);
    this.checkedToken = null;
    this.token.set("");
    this.focusInput();
  }
  formatCurrency(value) {
    return this.currencyFormatter.format(value ?? 0);
  }
  formatDateTime(value) {
    const date = parseApiDate(value);
    return date ? this.dateTimeFormatter.format(date) : "\u2014";
  }
  tableLabel(result) {
    if (result.tableNumber == null) {
      return "\u2014";
    }
    return formatTableLabel(result.tableNumber, result.tableName);
  }
  shortId(id) {
    return id ? "#" + id.slice(0, 8).toUpperCase() : "\u2014";
  }
  focusInput() {
    setTimeout(() => this.tokenInput?.nativeElement.focus());
  }
  resolveErrorMessage(error, fallback) {
    const body = error.error;
    return body?.mensagem || body?.titulo || fallback;
  }
  static \u0275fac = function ControleSaidaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ControleSaidaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ControleSaidaComponent, selectors: [["app-admin-controle-saida"]], viewQuery: function ControleSaidaComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tokenInput = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 9, consts: [["tokenInput", ""], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["role", "status", 1, "form-alert", "form-alert--info"], [1, "card", "scan-card"], [1, "scan-form", 3, "submit"], [1, "field", "scan-form__field"], ["for", "exit-token", 1, "field__label"], [1, "field__control"], ["id", "exit-token", "type", "text", "placeholder", "CMU-XXXXXXXXXX", "autocomplete", "off", "autocapitalize", "characters", "spellcheck", "false", "maxlength", "40", "name", "token", 1, "field__input", "scan-form__input", 3, "ngModelChange", "ngModel", "disabled"], [1, "field__hint"], [1, "scan-form__actions"], ["type", "submit", "appRipple", "", 1, "btn", "btn--primary", 3, "disabled"], ["aria-hidden", "true", 1, "material-icons"], ["type", "button", "appRipple", "", 1, "btn", "btn--ghost", 3, "click"], [1, "scan-card__camera"], ["role", "alert", 1, "form-alert", "form-alert--error"], [1, "card", "exit-card"], [3, "scanned", "closed"], [1, "exit-card__ids"], [1, "exit-card__token"], [1, "exit-card__number"], [1, "exit-card__totals"], [1, "exit-card__footer"], [1, "exit-card__balance"], [1, "exit-status", "exit-status--ok"], [1, "exit-card__actions"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", "btn--lg", 3, "click", "disabled"], [1, "exit-status", "exit-status--warning"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", "btn--lg", 3, "click"], ["type", "button", "appRipple", "", 1, "btn", "btn--ghost", 3, "click", "disabled"], [1, "field__hint", "exit-card__note"], [1, "exit-status", "exit-status--danger"], [1, "exit-status", "exit-status--muted"]], template: function ControleSaidaComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "h1", 2);
      \u0275\u0275text(2, "Controle de Sa\xEDda");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 3);
      \u0275\u0275text(4, " Escaneie o cart\xE3o de consumo do cliente na sa\xEDda. A sa\xEDda s\xF3 \xE9 liberada com a comanda do cart\xE3o quitada \u2014 ao liberar, o cart\xE3o volta a ficar dispon\xEDvel para outro cliente. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(5, ControleSaidaComponent_Conditional_5_Template, 4, 0, "div", 4);
      \u0275\u0275elementStart(6, "section", 5)(7, "form", 6);
      \u0275\u0275listener("submit", function ControleSaidaComponent_Template_form_submit_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        $event.preventDefault();
        return \u0275\u0275resetView(ctx.check());
      });
      \u0275\u0275elementStart(8, "div", 7)(9, "label", 8);
      \u0275\u0275text(10, "C\xF3digo do cart\xE3o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 9)(12, "input", 10, 0);
      \u0275\u0275listener("ngModelChange", function ControleSaidaComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onTokenInput($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "span", 11);
      \u0275\u0275text(15, "Leitor USB: \xE9 s\xF3 escanear com o cursor neste campo.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 12)(17, "button", 13)(18, "span", 14);
      \u0275\u0275text(19, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 15);
      \u0275\u0275listener("click", function ControleSaidaComponent_Template_button_click_21_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleCamera());
      });
      \u0275\u0275elementStart(22, "span", 14);
      \u0275\u0275text(23, "qr_code_scanner");
      \u0275\u0275elementEnd();
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(25, ControleSaidaComponent_Conditional_25_Template, 2, 0, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275template(26, ControleSaidaComponent_Conditional_26_Template, 4, 1, "div", 17)(27, ControleSaidaComponent_Conditional_27_Template, 22, 7, "section", 18);
    }
    if (rf & 2) {
      let tmp_9_0;
      \u0275\u0275advance(5);
      \u0275\u0275conditional(!ctx.passEnabled() ? 5 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngModel", ctx.token())("disabled", ctx.isChecking());
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", !ctx.token().trim() || ctx.isChecking());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isChecking() ? "Consultando\u2026" : "Consultar", " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.scanning() ? "Fechar c\xE2mera" : "Escanear com c\xE2mera", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.scanning() ? 25 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 26 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_9_0 = ctx.result()) ? 27 : -1, tmp_9_0);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, NgModel, NgForm, RippleDirective, QrScannerComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  max-width: 760px;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.scan-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-bottom: 20px;\n}\n.scan-form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.scan-form__field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 220px;\n  margin-top: 0;\n}\n.scan-form__input[_ngcontent-%COMP%] {\n  font-family:\n    "Roboto Mono",\n    ui-monospace,\n    monospace;\n  font-size: 1.125rem;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.scan-form__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-bottom: 22px;\n}\n.scan-card__camera[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.exit-card[_ngcontent-%COMP%] {\n  padding: 24px;\n  border-left: 4px solid var(--color-border);\n}\n.exit-card[data-state=PAID][_ngcontent-%COMP%], \n.exit-card[data-state=RELEASED][_ngcontent-%COMP%] {\n  border-left-color: var(--color-success);\n}\n.exit-card[data-state=PENDING][_ngcontent-%COMP%] {\n  border-left-color: #facc15;\n}\n.exit-card[data-state=BLOCKED][_ngcontent-%COMP%] {\n  border-left-color: #f87171;\n}\n.exit-card__ids[_ngcontent-%COMP%], \n.exit-card__totals[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 12px 20px;\n  margin: 0;\n}\n.exit-card__ids[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], \n.exit-card__totals[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n}\n.exit-card__ids[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], \n.exit-card__totals[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: var(--color-text);\n  font-size: 1rem;\n}\n.exit-card__token[_ngcontent-%COMP%] {\n  font-family:\n    "Roboto Mono",\n    ui-monospace,\n    monospace;\n  font-weight: 600;\n}\n.exit-card__number[_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-weight: 400;\n  color: var(--color-text-muted);\n}\n.exit-card__totals[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid var(--color-border);\n}\n.exit-card__totals[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.exit-card__balance[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.exit-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin-top: 24px;\n  padding: 14px 16px;\n  border-radius: var(--radius-sm);\n  font-size: 1.125rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.exit-status[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.exit-status--ok[_ngcontent-%COMP%] {\n  background: var(--color-success-bg);\n  color: var(--color-success);\n}\n.exit-status--warning[_ngcontent-%COMP%] {\n  background: rgba(250, 204, 21, 0.14);\n  color: #facc15;\n}\n.exit-status--danger[_ngcontent-%COMP%] {\n  background: rgba(248, 113, 113, 0.14);\n  color: #f87171;\n}\n.exit-status--muted[_ngcontent-%COMP%] {\n  background: rgba(203, 213, 225, 0.12);\n  color: var(--color-text-muted);\n}\n.exit-card__note[_ngcontent-%COMP%] {\n  margin: 12px 0 0;\n  text-align: center;\n}\n.exit-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-top: 16px;\n}\n.btn--lg[_ngcontent-%COMP%] {\n  padding: 14px 28px;\n  font-size: 1rem;\n}\n.exit-card__footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px solid var(--color-border);\n}\n/*# sourceMappingURL=controle-saida.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ControleSaidaComponent, { className: "ControleSaidaComponent", filePath: "src\\app\\features\\admin\\pages\\controle-saida\\controle-saida.component.ts", lineNumber: 27 });
})();
export {
  ControleSaidaComponent
};
//# sourceMappingURL=chunk-IYBC5DX6.js.map
