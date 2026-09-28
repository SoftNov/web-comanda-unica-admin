import {
  SubscriptionService
} from "./chunk-4EZRJX3P.js";
import {
  RippleDirective
} from "./chunk-44PTUNAH.js";
import {
  AuthService
} from "./chunk-S5GGO54V.js";
import {
  parseApiDate
} from "./chunk-BIWONMV5.js";
import "./chunk-6XJSFLNG.js";
import "./chunk-IKIQHSDP.js";
import "./chunk-4G2LF4K6.js";
import {
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-SZBF2MTG.js";

// src/app/features/admin/pages/assinatura/assinatura.component.ts
var _forTrack0 = ($index, $item) => $item.upToTables;
function AssinaturaComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, "Carregando\u2026");
    \u0275\u0275elementEnd();
  }
}
function AssinaturaComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 6);
    \u0275\u0275text(2, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " A assinatura da Comanda \xDAnica s\xF3 pode ser gerenciada pelo propriet\xE1rio ou por um administrador do estabelecimento. Pe\xE7a a um respons\xE1vel para regularizar. ");
    \u0275\u0275elementEnd();
  }
}
function AssinaturaComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 6);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " N\xE3o foi poss\xEDvel carregar a assinatura. ");
    \u0275\u0275elementStart(4, "button", 7);
    \u0275\u0275listener("click", function AssinaturaComponent_Conditional_7_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.load());
    });
    \u0275\u0275text(5, "Tentar novamente");
    \u0275\u0275elementEnd()();
  }
}
function AssinaturaComponent_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 6);
    \u0275\u0275text(2, "block");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, " O per\xEDodo gr\xE1tis permite at\xE9 ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " e seu estabelecimento tem ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, ". Assine para continuar usando a Comanda \xDAnica. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", (tmp_2_0 = ctx_r1.status()) == null ? null : tmp_2_0.courtesyTableLimit, " mesas");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r1.status()) == null ? null : tmp_3_0.tableCount);
  }
}
function AssinaturaComponent_Conditional_8_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Faltam ");
    \u0275\u0275elementStart(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.courtesyDaysLeft(), " dia(s)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r1.dateLabel((tmp_4_0 = ctx_r1.status()) == null ? null : tmp_4_0.currentPeriodEnd), "). ");
  }
}
function AssinaturaComponent_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 6);
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275template(5, AssinaturaComponent_Conditional_8_Conditional_1_Conditional_5_Template, 4, 2);
    \u0275\u0275text(6, " Assine para n\xE3o perder o acesso. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Voc\xEA est\xE1 no per\xEDodo gr\xE1tis (at\xE9 ", (tmp_2_0 = ctx_r1.status()) == null ? null : tmp_2_0.courtesyTableLimit, " mesas). ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.courtesyDaysLeft() !== null ? 5 : -1);
  }
}
function AssinaturaComponent_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 6);
    \u0275\u0275text(2, "warning_amber");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " O pagamento da renova\xE7\xE3o n\xE3o foi conclu\xEDdo. Regularize para manter o acesso ao sistema. ");
    \u0275\u0275elementEnd();
  }
}
function AssinaturaComponent_Conditional_8_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "/ m\xEAs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 22);
    \u0275\u0275text(7, "Cobran\xE7a mensal com renova\xE7\xE3o autom\xE1tica.");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Plano \xB7 ", ctx_r1.tableUsageLabel(), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.planMonthlyLabel(), " ");
  }
}
function AssinaturaComponent_Conditional_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "Assinatura Comanda \xDAnica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Seu estabelecimento tem ", ctx_r1.tableCountLabel(), " cadastradas hoje \u2014 escolha abaixo o plano com a quantidade de mesas que voc\xEA quer contratar. ");
  }
}
function AssinaturaComponent_Conditional_8_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "/ m\xEAs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 22);
    \u0275\u0275text(7, "Cobran\xE7a mensal com renova\xE7\xE3o autom\xE1tica.");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Plano \xB7 baseado em ", ctx_r1.tableCountLabel(), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.planMonthlyLabel(), " ");
  }
}
function AssinaturaComponent_Conditional_8_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 23)(2, "span", 6);
    \u0275\u0275text(3, "upgrade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 24);
    \u0275\u0275text(6, "Seu plano n\xE3o cobre mais o n\xFAmero de mesas atual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 25);
    \u0275\u0275text(8, " Contratado: ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "button", 26);
    \u0275\u0275listener("click", function AssinaturaComponent_Conditional_8_Conditional_28_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changePlan());
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", ctx_r1.amountLabel((tmp_2_0 = ctx_r1.status()) == null ? null : tmp_2_0.monthlyAmount), "/m\xEAs");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 Valor para ", ctx_r1.tableCountLabel(), ": ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.planMonthlyLabel(), "/m\xEAs");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isChangingPlan());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isChangingPlanTo("sync") ? "Atualizando\u2026" : "Atualizar plano", " ");
  }
}
function AssinaturaComponent_Conditional_8_Conditional_29_For_7_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "Plano atual");
    \u0275\u0275elementEnd();
  }
}
function AssinaturaComponent_Conditional_8_Conditional_29_For_7_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Voc\xEA tem mais mesas do que este plano comporta");
    \u0275\u0275elementEnd();
  }
}
function AssinaturaComponent_Conditional_8_Conditional_29_For_7_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "span");
    \u0275\u0275text(2, "Confirmar a troca para este plano?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 38)(4, "button", 26);
    \u0275\u0275listener("click", function AssinaturaComponent_Conditional_8_Conditional_29_For_7_Conditional_9_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.confirmPlanChange());
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 39);
    \u0275\u0275listener("click", function AssinaturaComponent_Conditional_8_Conditional_29_For_7_Conditional_9_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.cancelPlanChange());
    });
    \u0275\u0275text(7, "Cancelar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const plan_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.isChangingPlan());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isChangingPlanTo("plan-" + plan_r5.upToTables) ? "Trocando\u2026" : "Confirmar", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isChangingPlan());
  }
}
function AssinaturaComponent_Conditional_8_Conditional_29_For_7_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function AssinaturaComponent_Conditional_8_Conditional_29_For_7_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const plan_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.requestPlanChange(plan_r5.upToTables));
    });
    \u0275\u0275text(1, " Mudar para este plano ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", ctx_r1.isChangingPlan());
  }
}
function AssinaturaComponent_Conditional_8_Conditional_29_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "/ m\xEAs");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AssinaturaComponent_Conditional_8_Conditional_29_For_7_Conditional_7_Template, 2, 0, "span", 34)(8, AssinaturaComponent_Conditional_8_Conditional_29_For_7_Conditional_8_Template, 2, 0, "span", 35)(9, AssinaturaComponent_Conditional_8_Conditional_29_For_7_Conditional_9_Template, 8, 3, "div", 36)(10, AssinaturaComponent_Conditional_8_Conditional_29_For_7_Conditional_10_Template, 2, 1, "button", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("plan-option--current", plan_r5.current)("plan-option--blocked", !plan_r5.allowed && !plan_r5.current);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("At\xE9 ", plan_r5.upToTables, " mesas");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.planCardMonthlyLabel(plan_r5.monthlyAmount), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(plan_r5.current ? 7 : !plan_r5.allowed ? 8 : ctx_r1.pendingPlan() === plan_r5.upToTables ? 9 : 10);
  }
}
function AssinaturaComponent_Conditional_8_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "p", 27);
    \u0275\u0275text(2, "Escolha seu plano");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 28);
    \u0275\u0275text(4, " O upgrade \xE9 cobrado proporcionalmente na pr\xF3xima fatura. O downgrade s\xF3 \xE9 poss\xEDvel se as mesas cadastradas couberem no plano menor. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 29);
    \u0275\u0275repeaterCreate(6, AssinaturaComponent_Conditional_8_Conditional_29_For_7_Template, 11, 7, "div", 30, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275repeater((tmp_2_0 = ctx_r1.status()) == null ? null : tmp_2_0.availablePlans);
  }
}
function AssinaturaComponent_Conditional_8_Conditional_30_For_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1, "Sua faixa hoje");
    \u0275\u0275elementEnd();
  }
}
function AssinaturaComponent_Conditional_8_Conditional_30_For_7_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Voc\xEA tem mais mesas do que este plano comporta");
    \u0275\u0275elementEnd();
  }
}
function AssinaturaComponent_Conditional_8_Conditional_30_For_7_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function AssinaturaComponent_Conditional_8_Conditional_30_For_7_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const plan_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.subscribe(plan_r8.upToTables));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("btn--primary", plan_r8.upToTables === ctx_r1.recommendedUpToTables())("btn--ghost", plan_r8.upToTables !== ctx_r1.recommendedUpToTables());
    \u0275\u0275property("disabled", ctx_r1.isRedirectingTo("plan-" + plan_r8.upToTables));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isRedirectingTo("plan-" + plan_r8.upToTables) ? "Abrindo\u2026" : "Assinar este plano", " ");
  }
}
function AssinaturaComponent_Conditional_8_Conditional_30_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275template(1, AssinaturaComponent_Conditional_8_Conditional_30_For_7_Conditional_1_Template, 2, 0, "span", 42);
    \u0275\u0275elementStart(2, "span", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "/ m\xEAs");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, AssinaturaComponent_Conditional_8_Conditional_30_For_7_Conditional_8_Template, 2, 0, "span", 35)(9, AssinaturaComponent_Conditional_8_Conditional_30_For_7_Conditional_9_Template, 2, 6, "button", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("plan-option--recommended", plan_r8.upToTables === ctx_r1.recommendedUpToTables())("plan-option--blocked", !plan_r8.allowed);
    \u0275\u0275advance();
    \u0275\u0275conditional(plan_r8.upToTables === ctx_r1.recommendedUpToTables() ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("At\xE9 ", plan_r8.upToTables, " mesas");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.planCardMonthlyLabel(plan_r8.monthlyAmount), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!plan_r8.allowed ? 8 : 9);
  }
}
function AssinaturaComponent_Conditional_8_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "p", 27);
    \u0275\u0275text(2, "Escolha a quantidade de mesas do seu plano");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 28);
    \u0275\u0275text(4, " O valor mensal muda conforme a faixa de mesas. D\xE1 para ajustar depois, a qualquer momento, nesta mesma tela. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 29);
    \u0275\u0275repeaterCreate(6, AssinaturaComponent_Conditional_8_Conditional_30_For_7_Template, 10, 8, "div", 41, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275repeater((tmp_2_0 = ctx_r1.status()) == null ? null : tmp_2_0.availablePlans);
  }
}
function AssinaturaComponent_Conditional_8_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "span", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r9 = ctx;
    \u0275\u0275classProp("form-alert--error", msg_r9.type === "error")("form-alert--success", msg_r9.type === "ok");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r9.type === "ok" ? "check_circle" : "error_outline");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", msg_r9.text, " ");
  }
}
function AssinaturaComponent_Conditional_8_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dl", 15)(1, "div")(2, "dt");
    \u0275\u0275text(3, "In\xEDcio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "dt");
    \u0275\u0275text(8, "Per\xEDodo vigente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "dd");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "dt");
    \u0275\u0275text(13, "Pr\xF3xima cobran\xE7a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "dd");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "dt");
    \u0275\u0275text(18, "Renova\xE7\xE3o autom\xE1tica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "dd");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.dateLabel((tmp_2_0 = ctx_r1.status()) == null ? null : tmp_2_0.startDate));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.dateLabel((tmp_3_0 = ctx_r1.status()) == null ? null : tmp_3_0.currentPeriodStart), " \u2014 ", ctx_r1.dateLabel((tmp_3_0 = ctx_r1.status()) == null ? null : tmp_3_0.currentPeriodEnd), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((tmp_4_0 = ctx_r1.status()) == null ? null : tmp_4_0.cancelAtPeriodEnd) ? "N\xE3o renova (cancelada para o fim do per\xEDodo)" : ctx_r1.dateLabel((tmp_4_0 = ctx_r1.status()) == null ? null : tmp_4_0.currentPeriodEnd));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((tmp_5_0 = ctx_r1.status()) == null ? null : tmp_5_0.autoRenew) ? "Sim" : "N\xE3o");
  }
}
function AssinaturaComponent_Conditional_8_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 6);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.actionError(), " ");
  }
}
function AssinaturaComponent_Conditional_8_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function AssinaturaComponent_Conditional_8_Conditional_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.manage());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.isRedirectingTo("manage"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isRedirectingTo("manage") ? "Abrindo\u2026" : "Gerenciar pagamento", " ");
  }
}
function AssinaturaComponent_Conditional_8_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function AssinaturaComponent_Conditional_8_Conditional_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.manage());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.isRedirectingTo("manage"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isRedirectingTo("manage") ? "Abrindo\u2026" : "Regularizar pagamento", " ");
  }
}
function AssinaturaComponent_Conditional_8_Conditional_37_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function AssinaturaComponent_Conditional_8_Conditional_37_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.subscribe());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.isRedirectingTo("default"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isRedirectingTo("default") ? "Abrindo\u2026" : "Assinar agora", " ");
  }
}
function AssinaturaComponent_Conditional_8_Conditional_37_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function AssinaturaComponent_Conditional_8_Conditional_37_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.manage());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.isRedirectingTo("manage"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isRedirectingTo("manage") ? "Abrindo\u2026" : "Gerenciar pagamento", " ");
  }
}
function AssinaturaComponent_Conditional_8_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AssinaturaComponent_Conditional_8_Conditional_37_Conditional_0_Template, 2, 2, "button", 17)(1, AssinaturaComponent_Conditional_8_Conditional_37_Conditional_1_Template, 2, 2, "button", 47);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!ctx_r1.hasPlanPicker() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_3_0 = ctx_r1.status()) == null ? null : tmp_3_0.manageable) ? 1 : -1);
  }
}
function AssinaturaComponent_Conditional_8_Conditional_40_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2, "Expirado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const credit_r14 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.amountLabel(credit_r14.expired));
  }
}
function AssinaturaComponent_Conditional_8_Conditional_40_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, "Carregando\u2026");
    \u0275\u0275elementEnd();
  }
}
function AssinaturaComponent_Conditional_8_Conditional_40_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, "N\xE3o foi poss\xEDvel carregar as movimenta\xE7\xF5es. ");
    \u0275\u0275elementStart(2, "button", 7);
    \u0275\u0275listener("click", function AssinaturaComponent_Conditional_8_Conditional_40_Conditional_27_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.loadMovements());
    });
    \u0275\u0275text(3, "Tentar de novo");
    \u0275\u0275elementEnd()();
  }
}
function AssinaturaComponent_Conditional_8_Conditional_40_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, "Nenhuma movimenta\xE7\xE3o ainda.");
    \u0275\u0275elementEnd();
  }
}
function AssinaturaComponent_Conditional_8_Conditional_40_Conditional_29_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2014 ", m_r16.description, "");
  }
}
function AssinaturaComponent_Conditional_8_Conditional_40_Conditional_29_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 54)(1, "span", 55);
    \u0275\u0275text(2);
    \u0275\u0275template(3, AssinaturaComponent_Conditional_8_Conditional_40_Conditional_29_For_2_Conditional_3_Template, 2, 1, "span", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 57);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 58);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.movementLabel(m_r16.type), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(m_r16.description ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("credit-movements__value--in", ctx_r1.movementSign(m_r16.type) === "+");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.movementSign(m_r16.type), " ", ctx_r1.amountLabel(m_r16.amount), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.dateLabel(m_r16.createdAt));
  }
}
function AssinaturaComponent_Conditional_8_Conditional_40_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 53);
    \u0275\u0275repeaterCreate(1, AssinaturaComponent_Conditional_8_Conditional_40_Conditional_29_For_2_Template, 8, 7, "li", 54, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.creditMovements());
  }
}
function AssinaturaComponent_Conditional_8_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 49)(2, "div")(3, "span", 20);
    \u0275\u0275text(4, "Cr\xE9dito da assinatura");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 50);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "dispon\xEDvel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 22);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "dl", 15)(12, "div")(13, "dt");
    \u0275\u0275text(14, "Concedido no per\xEDodo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "dd");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "dt");
    \u0275\u0275text(19, "J\xE1 usado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "dd");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, AssinaturaComponent_Conditional_8_Conditional_40_Conditional_22_Template, 5, 1, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 51)(24, "p", 52);
    \u0275\u0275text(25, "Movimenta\xE7\xF5es");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, AssinaturaComponent_Conditional_8_Conditional_40_Conditional_26_Template, 2, 0, "p", 3)(27, AssinaturaComponent_Conditional_8_Conditional_40_Conditional_27_Template, 4, 0, "p", 3)(28, AssinaturaComponent_Conditional_8_Conditional_40_Conditional_28_Template, 2, 0, "p", 3)(29, AssinaturaComponent_Conditional_8_Conditional_40_Conditional_29_Template, 3, 0, "ul", 53);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const credit_r14 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.amountLabel(credit_r14.available), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" O cr\xE9dito abate as taxas da Comanda \xDAnica conforme os pagamentos entram. O saldo n\xE3o usado expira em ", ctx_r1.creditExpiryLabel(), " \u2014 n\xE3o acumula. ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.amountLabel(credit_r14.granted));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.amountLabel(credit_r14.consumed));
    \u0275\u0275advance();
    \u0275\u0275conditional(credit_r14.expired > 0 ? 22 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.isLoadingMovements() ? 26 : ctx_r1.movementsLoadError() ? 27 : ctx_r1.creditMovements().length === 0 ? 28 : 29);
  }
}
function AssinaturaComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AssinaturaComponent_Conditional_8_Conditional_0_Template, 11, 2, "div", 5)(1, AssinaturaComponent_Conditional_8_Conditional_1_Template, 7, 2, "div", 4)(2, AssinaturaComponent_Conditional_8_Conditional_2_Template, 4, 0, "div", 5);
    \u0275\u0275elementStart(3, "div", 8)(4, "div", 9)(5, "div");
    \u0275\u0275template(6, AssinaturaComponent_Conditional_8_Conditional_6_Template, 8, 2)(7, AssinaturaComponent_Conditional_8_Conditional_7_Template, 4, 1)(8, AssinaturaComponent_Conditional_8_Conditional_8_Template, 8, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 10);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "ul", 11)(12, "li")(13, "span", 6);
    \u0275\u0275text(14, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Comandas, mesas, card\xE1pio e pedidos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "span", 6);
    \u0275\u0275text(18, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Dashboard e relat\xF3rios financeiros");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li")(21, "span", 6);
    \u0275\u0275text(22, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Renova\xE7\xE3o autom\xE1tica todo m\xEAs \u2014 sem precisar acessar o Stripe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li")(25, "span", 6);
    \u0275\u0275text(26, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Cobran\xE7a segura pelo Stripe \u2014 nenhum dado de cart\xE3o passa pela Comanda \xDAnica");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, AssinaturaComponent_Conditional_8_Conditional_28_Template, 16, 5, "div", 12)(29, AssinaturaComponent_Conditional_8_Conditional_29_Template, 8, 0, "div", 13)(30, AssinaturaComponent_Conditional_8_Conditional_30_Template, 8, 0, "div", 13)(31, AssinaturaComponent_Conditional_8_Conditional_31_Template, 4, 6, "div", 14)(32, AssinaturaComponent_Conditional_8_Conditional_32_Template, 21, 5, "dl", 15)(33, AssinaturaComponent_Conditional_8_Conditional_33_Template, 4, 1, "div", 5);
    \u0275\u0275elementStart(34, "div", 16);
    \u0275\u0275template(35, AssinaturaComponent_Conditional_8_Conditional_35_Template, 2, 2, "button", 17)(36, AssinaturaComponent_Conditional_8_Conditional_36_Template, 2, 2, "button", 17)(37, AssinaturaComponent_Conditional_8_Conditional_37_Template, 2, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p", 18);
    \u0275\u0275text(39, " Voc\xEA ser\xE1 levado para uma p\xE1gina segura do Stripe para concluir. A cobran\xE7a \xE9 mensal com renova\xE7\xE3o autom\xE1tica e pode ser cancelada a qualquer momento pelo painel de pagamento. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(40, AssinaturaComponent_Conditional_8_Conditional_40_Template, 30, 6, "div", 19);
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_8_0;
    let tmp_11_0;
    let tmp_15_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r1.status()) == null ? null : tmp_1_0.courtesyTableLimitExceeded) ? 0 : ((tmp_1_0 = ctx_r1.status()) == null ? null : tmp_1_0.courtesy) ? 1 : ctx_r1.mode() === "past-due" ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("sub-card--wide", ctx_r1.hasPlanPicker());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.mode() === "active" ? 6 : ctx_r1.hasPlanPicker() ? 7 : 8);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("badge--success", ((tmp_4_0 = ctx_r1.status()) == null ? null : tmp_4_0.active) && !((tmp_4_0 = ctx_r1.status()) == null ? null : tmp_4_0.courtesy))("badge--warning", ((tmp_5_0 = ctx_r1.status()) == null ? null : tmp_5_0.courtesy) || ((tmp_5_0 = ctx_r1.status()) == null ? null : tmp_5_0.status) === "PAST_DUE")("badge--muted", !((tmp_6_0 = ctx_r1.status()) == null ? null : tmp_6_0.active));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.statusLabel(), " ");
    \u0275\u0275advance(18);
    \u0275\u0275conditional(ctx_r1.mode() === "active" && ((tmp_8_0 = ctx_r1.status()) == null ? null : tmp_8_0.planOutdated) ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.mode() === "active" && ctx_r1.hasPlanPicker() ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.mode() === "offer" && ctx_r1.hasPlanPicker() ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_11_0 = ctx_r1.changePlanMessage()) ? 31 : -1, tmp_11_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.mode() === "active" ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.actionError() ? 33 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.mode() === "active" ? 35 : ctx_r1.mode() === "past-due" ? 36 : 37);
    \u0275\u0275advance(5);
    \u0275\u0275conditional((tmp_15_0 = (tmp_15_0 = ctx_r1.status()) == null ? null : tmp_15_0.credit) ? 40 : -1, tmp_15_0);
  }
}
var AssinaturaComponent = class _AssinaturaComponent {
  subscriptionService = inject(SubscriptionService);
  authService = inject(AuthService);
  currencyFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
  dateFormatter = new Intl.DateTimeFormat("pt-BR", { dateStyle: "long" });
  isLoading = signal(true);
  loadError = signal(false);
  // Funcionário sem perfil OWNER/ADMIN — não pode gerenciar a assinatura (o backend responde 403).
  noPermission = signal(false);
  // Qual botão de redirecionamento (Stripe Checkout/Portal) está com a requisição em voo — 'manage'
  // (Gerenciar/Regularizar pagamento), 'default' (Assinar agora, sem seletor de faixa) ou
  // 'plan-<upToTables>' (um card específico do seletor). Null = nenhum. Guardar QUAL botão em vez de
  // um boolean único evita que todo botão da tela mude de rótulo/fique "em voo" junto quando só um
  // foi clicado (ex.: clicar em "Assinar este plano" de uma faixa não pode deixar "Gerenciar
  // pagamento" e as outras faixas do seletor com a mesma aparência de carregando).
  redirectingTarget = signal(null);
  actionError = signal(null);
  // Mesma lógica do redirectingTarget, para as trocas de plano: 'sync' (botão "Atualizar plano" do
  // banner planOutdated) ou 'plan-<upToTables>' (confirmação de uma faixa do seletor).
  changingPlanTarget = signal(null);
  changePlanMessage = signal(null);
  // Faixa (upToTables) aguardando confirmação no seletor de plano; null = nenhuma.
  pendingPlan = signal(null);
  status = signal(null);
  companyName = computed(() => this.authService.selectedCompany()?.companyName ?? "seu estabelecimento");
  creditMovements = signal([]);
  isLoadingMovements = signal(false);
  movementsLoadError = signal(false);
  mode = computed(() => {
    const s = this.status();
    if (!s || !s.exists) {
      return "offer";
    }
    if (s.status === "PAST_DUE") {
      return "past-due";
    }
    if (s.status === "ACTIVE" && !s.courtesy) {
      return "active";
    }
    return "offer";
  });
  // Há faixas pra montar o seletor de plano (grid de plan-option) — tanto no modo "active"
  // (upgrade/downgrade) quanto no "offer" (primeira assinatura). Vazio só em setup incomum sem
  // nenhuma faixa cadastrada, onde a tela cai pro fluxo antigo de plano único.
  hasPlanPicker = computed(() => (this.status()?.availablePlans?.length ?? 0) > 0);
  // Faixa em destaque no seletor da tela de oferta — a menor que já comporta as mesas cadastradas
  // hoje (mesma regra do backend em SubscriptionPricingServiceImpl#resolve: a lista vem ordenada
  // por upToTables crescente). null quando nenhuma faixa comporta (mesas além da maior faixa).
  recommendedUpToTables = computed(() => {
    const plans = this.status()?.availablePlans ?? [];
    return plans.find((p) => p.allowed)?.upToTables ?? null;
  });
  courtesyDaysLeft = computed(() => {
    const s = this.status();
    if (!s?.courtesy || !s.currentPeriodEnd) {
      return null;
    }
    const end = parseApiDate(s.currentPeriodEnd);
    if (!end) {
      return null;
    }
    return Math.max(0, Math.ceil((end.getTime() - Date.now()) / 864e5));
  });
  constructor() {
    this.load();
  }
  load() {
    const companyId = this.authService.selectedCompany()?.companyId;
    if (!companyId) {
      this.isLoading.set(false);
      this.loadError.set(true);
      return;
    }
    this.isLoading.set(true);
    this.loadError.set(false);
    this.noPermission.set(false);
    this.subscriptionService.refresh(companyId).subscribe({
      next: (status) => {
        this.status.set(status);
        this.isLoading.set(false);
        if (status.credit) {
          this.loadMovements();
        }
      },
      error: (error) => {
        this.isLoading.set(false);
        if (error instanceof HttpErrorResponse && error.status === 403) {
          this.noPermission.set(true);
        } else {
          this.loadError.set(true);
        }
      }
    });
  }
  // Sem argumento: assina a faixa da quantidade de mesas cadastrada hoje (botão principal). Com
  // upToTables: assina a faixa escolhida no seletor de plano (modo "offer" — ver plan-picker no
  // template).
  subscribe(upToTables) {
    const target = upToTables != null ? `plan-${upToTables}` : "default";
    this.startRedirect(target, () => this.subscriptionService.createCheckoutSession(upToTables));
  }
  // Se o botão específico (Assinar este plano/Gerenciar pagamento/Assinar agora) está com a
  // requisição em voo — usado para o rótulo e o [disabled] de cada botão individualmente.
  isRedirectingTo(target) {
    return this.redirectingTarget() === target;
  }
  loadMovements() {
    this.isLoadingMovements.set(true);
    this.movementsLoadError.set(false);
    this.subscriptionService.getCreditMovements(0, 20).subscribe({
      next: (page) => {
        this.creditMovements.set(page.content);
        this.isLoadingMovements.set(false);
      },
      error: () => {
        this.isLoadingMovements.set(false);
        this.movementsLoadError.set(true);
      }
    });
  }
  static MOVEMENT_LABELS = {
    SUBSCRIPTION_CREDIT: "Cr\xE9dito concedido",
    FEE_CREDIT_CONSUMPTION: "Cr\xE9dito usado em taxa",
    FEE_CREDIT_CONSUMPTION_REVERSAL: "Cr\xE9dito devolvido",
    CREDIT_EXPIRATION: "Cr\xE9dito expirado"
  };
  movementLabel(type) {
    return _AssinaturaComponent.MOVEMENT_LABELS[type] ?? type;
  }
  // + quando entra crédito (concessão / devolução), − quando sai (consumo / expiração).
  movementSign(type) {
    return type === "SUBSCRIPTION_CREDIT" || type === "FEE_CREDIT_CONSUMPTION_REVERSAL" ? "+" : "\u2212";
  }
  // Botão "Atualizar plano" do banner planOutdated — sincroniza ao valor da faixa das mesas atuais.
  changePlan() {
    this.applyPlanChange(void 0, "sync");
  }
  // Seletor de plano: pede confirmação antes de trocar (a proração é cobrada). Só instancia
  // pendingPlan — sem chamada de rede ainda, então não mexe em changingPlanTarget.
  requestPlanChange(upToTables) {
    this.changePlanMessage.set(null);
    this.pendingPlan.set(upToTables);
  }
  cancelPlanChange() {
    this.pendingPlan.set(null);
  }
  confirmPlanChange() {
    const target = this.pendingPlan();
    if (target != null) {
      this.applyPlanChange(target, `plan-${target}`);
    }
  }
  // true enquanto QUALQUER troca de plano está em voo — usado só pra desabilitar os botões que não
  // deveriam iniciar uma segunda troca em paralelo (sem mudar o rótulo deles).
  isChangingPlan = computed(() => this.changingPlanTarget() !== null);
  // Se ESTE botão específico (o banner de sync, ou a confirmação de uma faixa do seletor) é quem
  // está trocando — usado pro rótulo "Atualizando…"/"Trocando…" aparecer só onde foi clicado.
  isChangingPlanTo(target) {
    return this.changingPlanTarget() === target;
  }
  applyPlanChange(upToTables, target) {
    this.changingPlanTarget.set(target);
    this.changePlanMessage.set(null);
    this.subscriptionService.changePlan(upToTables).subscribe({
      next: (status) => {
        this.status.set(status);
        this.changingPlanTarget.set(null);
        this.pendingPlan.set(null);
        this.changePlanMessage.set({ type: "ok", text: "Plano atualizado. A diferen\xE7a entra na pr\xF3xima fatura." });
      },
      error: (error) => {
        this.changingPlanTarget.set(null);
        this.pendingPlan.set(null);
        const body = error instanceof HttpErrorResponse ? error.error : void 0;
        const msg = body?.mensagem ?? (error instanceof HttpErrorResponse && error.status === 422 ? "O plano j\xE1 corresponde \xE0 quantidade de mesas atual." : "N\xE3o foi poss\xEDvel atualizar o plano agora. Tente novamente em instantes.");
        this.changePlanMessage.set({ type: "error", text: msg });
      }
    });
  }
  manage() {
    this.startRedirect("manage", () => this.subscriptionService.createPortalSession());
  }
  startRedirect(target, request) {
    this.redirectingTarget.set(target);
    this.actionError.set(null);
    request().subscribe({
      next: ({ url }) => {
        window.location.href = url;
      },
      error: () => {
        if (this.redirectingTarget() === target) {
          this.redirectingTarget.set(null);
        }
        this.actionError.set("N\xE3o foi poss\xEDvel abrir o pagamento agora. Tente novamente em instantes.");
      }
    });
  }
  planMonthlyLabel() {
    const s = this.status();
    const amount = s?.planMonthlyAmount ?? s?.monthlyAmount ?? null;
    return amount != null && amount > 0 ? this.currencyFormatter.format(amount) : "\u2014";
  }
  planAnnualLabel() {
    const s = this.status();
    const amount = s?.planAmount ?? s?.amount ?? null;
    return amount != null && amount > 0 ? this.currencyFormatter.format(amount) : "\u2014";
  }
  tableCountLabel() {
    const n = this.status()?.tableCount ?? null;
    return n != null ? `${n} mesa${n === 1 ? "" : "s"}` : "\u2014";
  }
  // "8 de 10 mesas" quando há limite; "8 mesas" quando o plano é ilimitado.
  tableUsageLabel() {
    const s = this.status();
    const used = s?.tableCount ?? null;
    if (used == null) {
      return "\u2014";
    }
    const limit = s?.contractedTableLimit ?? null;
    return limit != null ? `${used} de ${limit} mesas` : `${used} mesa${used === 1 ? "" : "s"}`;
  }
  planCardMonthlyLabel(monthlyAmount) {
    return this.currencyFormatter.format(monthlyAmount);
  }
  creditExpiryLabel() {
    return this.dateLabel(this.status()?.credit?.periodEnd);
  }
  amountLabel(value) {
    return value != null ? this.currencyFormatter.format(value) : "\u2014";
  }
  dateLabel(value) {
    const parsed = parseApiDate(value ?? null);
    return parsed ? this.dateFormatter.format(parsed) : "\u2014";
  }
  statusLabel() {
    switch (this.status()?.status) {
      case "ACTIVE":
        return this.status()?.courtesy ? "Cortesia" : "Ativa";
      case "PAST_DUE":
        return "Pagamento pendente";
      case "PENDING":
        return "Aguardando pagamento";
      case "EXPIRED":
        return "Expirada";
      case "CANCELLED":
        return "Cancelada";
      default:
        return "Sem assinatura";
    }
  }
  static \u0275fac = function AssinaturaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssinaturaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssinaturaComponent, selectors: [["app-admin-assinatura"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 2, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "field__hint"], ["role", "status", 1, "form-alert", "form-alert--info"], ["role", "alert", 1, "form-alert", "form-alert--error"], ["aria-hidden", "true", 1, "material-icons"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], [1, "card", "sub-card"], [1, "sub-card__head"], [1, "badge"], [1, "sub-card__benefits"], [1, "plan-upgrade"], [1, "plan-picker"], [1, "form-alert", 3, "form-alert--error", "form-alert--success"], [1, "sub-card__details"], [1, "sub-card__actions"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", 3, "disabled"], [1, "sub-card__fineprint"], [1, "card", "credit-card"], [1, "sub-card__eyebrow"], [1, "sub-card__price"], [1, "sub-card__price-note"], [1, "plan-upgrade__info"], [1, "plan-upgrade__title"], [1, "plan-upgrade__detail"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", "btn--sm", 3, "click", "disabled"], [1, "plan-picker__title"], [1, "plan-picker__hint"], [1, "plan-picker__grid"], [1, "plan-option", 3, "plan-option--current", "plan-option--blocked"], [1, "plan-option"], [1, "plan-option__tables"], [1, "plan-option__price"], [1, "plan-option__badge"], [1, "plan-option__note"], [1, "plan-option__confirm"], ["type", "button", "appRipple", "", 1, "btn", "btn--ghost", "btn--sm", 3, "disabled"], [1, "plan-option__confirm-actions"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click", "disabled"], ["type", "button", "appRipple", "", 1, "btn", "btn--ghost", "btn--sm", 3, "click", "disabled"], [1, "plan-option", 3, "plan-option--recommended", "plan-option--blocked"], [1, "plan-option__badge", "plan-option__badge--accent"], ["type", "button", "appRipple", "", 1, "btn", "btn--sm", 3, "btn--primary", "btn--ghost", "disabled"], ["type", "button", "appRipple", "", 1, "btn", "btn--sm", 3, "click", "disabled"], [1, "form-alert"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn--ghost", 3, "disabled"], ["type", "button", 1, "btn", "btn--ghost", 3, "click", "disabled"], [1, "credit-card__head"], [1, "credit-card__available"], [1, "credit-movements"], [1, "credit-movements__title"], [1, "credit-movements__list"], [1, "credit-movements__item"], [1, "credit-movements__desc"], [1, "credit-movements__detail"], [1, "credit-movements__value"], [1, "credit-movements__date"]], template: function AssinaturaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Assinatura Comanda \xDAnica");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(5, AssinaturaComponent_Conditional_5_Template, 2, 0, "p", 3)(6, AssinaturaComponent_Conditional_6_Template, 4, 0, "div", 4)(7, AssinaturaComponent_Conditional_7_Template, 6, 0, "div", 5)(8, AssinaturaComponent_Conditional_8_Template, 41, 19);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" A Comanda \xDAnica funciona com uma assinatura mensal. Gerencie o plano de ", ctx.companyName(), " aqui. ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 5 : ctx.noPermission() ? 6 : ctx.loadError() ? 7 : 8);
    }
  }, dependencies: [RippleDirective], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n  max-width: 60ch;\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: var(--radius-full);\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n  background: rgba(255, 255, 255, 0.08);\n  color: var(--color-text-muted);\n}\n.badge--success[_ngcontent-%COMP%] {\n  background: var(--color-success-bg);\n  color: var(--color-success);\n}\n.badge--warning[_ngcontent-%COMP%] {\n  background: rgba(214, 164, 79, 0.14);\n  color: #d6a44f;\n}\n.badge--muted[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text-muted);\n}\n.sub-card[_ngcontent-%COMP%] {\n  max-width: 640px;\n  padding: 28px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  transition: max-width 0.2s ease;\n}\n.sub-card--wide[_ngcontent-%COMP%] {\n  max-width: 880px;\n}\n.sub-card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.sub-card__eyebrow[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--color-text-muted);\n}\n.sub-card__price[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.sub-card__price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 500;\n  color: var(--color-text-muted);\n}\n.sub-card__price-note[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.sub-card__benefits[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.sub-card__benefits[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 0.9375rem;\n  color: var(--color-gray);\n}\n.sub-card__benefits[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--color-success);\n  flex-shrink: 0;\n}\n.sub-card__details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 14px 24px;\n  margin: 0;\n  padding: 16px 0 4px;\n  border-top: 1px solid var(--color-border);\n}\n.sub-card__details[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--color-text-muted);\n}\n.sub-card__details[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 0.9375rem;\n  color: var(--color-text);\n}\n.sub-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.plan-upgrade[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  padding: 14px 16px;\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-sm);\n  background: var(--color-bg-elevated);\n}\n.plan-upgrade__info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.plan-upgrade__info[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--color-accent-hover);\n  flex-shrink: 0;\n}\n.plan-upgrade__title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-text);\n  font-size: 0.9375rem;\n}\n.plan-upgrade__detail[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 0.85rem;\n}\n.plan-picker[_ngcontent-%COMP%] {\n  padding-top: 16px;\n  border-top: 1px solid var(--color-border);\n}\n.plan-picker__title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-text);\n  font-size: 0.9375rem;\n}\n.plan-picker__hint[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n  line-height: 1.5;\n}\n.plan-picker__grid[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 12px;\n}\n.plan-option[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 14px;\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-sm);\n  background: var(--color-bg-elevated);\n}\n.plan-option--current[_ngcontent-%COMP%] {\n  border-color: var(--color-success);\n}\n.plan-option--recommended[_ngcontent-%COMP%] {\n  border-color: var(--color-accent);\n  background: var(--color-accent-bg);\n}\n.plan-option--blocked[_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n.plan-option__tables[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-text);\n  font-size: 0.9375rem;\n}\n.plan-option__price[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.plan-option__price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--color-text-muted);\n}\n.plan-option__badge[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  padding: 3px 10px;\n  border-radius: var(--radius-full);\n  font-size: 0.7rem;\n  font-weight: 600;\n  background: var(--color-success-bg);\n  color: var(--color-success);\n}\n.plan-option__badge--accent[_ngcontent-%COMP%] {\n  background: var(--color-accent-bg);\n  color: var(--color-accent-hover);\n}\n.plan-option__note[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  line-height: 1.4;\n}\n.plan-option__confirm[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.plan-option__confirm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.sub-card__fineprint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n  line-height: 1.6;\n}\n.form-alert[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-alert[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.credit-card[_ngcontent-%COMP%] {\n  max-width: 640px;\n  margin-top: 20px;\n  padding: 28px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.credit-card__available[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.credit-card__available[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--color-text-muted);\n}\n.credit-movements__title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-text);\n  font-size: 0.9375rem;\n  margin-bottom: 10px;\n}\n.credit-movements__list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n}\n.credit-movements__item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  grid-template-areas: "desc value" "date value";\n  gap: 2px 16px;\n  padding: 10px 0;\n  border-top: 1px solid var(--color-border);\n  font-size: 0.875rem;\n}\n.credit-movements__desc[_ngcontent-%COMP%] {\n  grid-area: desc;\n  color: var(--color-text);\n}\n.credit-movements__detail[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n}\n.credit-movements__date[_ngcontent-%COMP%] {\n  grid-area: date;\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.credit-movements__value[_ngcontent-%COMP%] {\n  grid-area: value;\n  align-self: center;\n  font-weight: 600;\n  color: var(--color-text-muted);\n  white-space: nowrap;\n}\n.credit-movements__value--in[_ngcontent-%COMP%] {\n  color: var(--color-success);\n}\n/*# sourceMappingURL=assinatura.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssinaturaComponent, { className: "AssinaturaComponent", filePath: "src\\app\\features\\admin\\pages\\assinatura\\assinatura.component.ts", lineNumber: 22 });
})();
export {
  AssinaturaComponent
};
//# sourceMappingURL=chunk-ESR2H64Z.js.map
