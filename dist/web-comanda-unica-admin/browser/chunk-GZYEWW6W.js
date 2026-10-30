import {
  CAMPAIGN_STATUSES,
  CampaignsService,
  formatLeadPhone,
  leadInitials,
  leadWhatsappUrl
} from "./chunk-T3FL76LF.js";
import {
  SocialIconComponent
} from "./chunk-5GIIFYFV.js";
import {
  RippleDirective
} from "./chunk-ZBOLJN4C.js";
import {
  AuthService
} from "./chunk-GDZY7PI7.js";
import {
  apiToBrDateTimeLocal,
  brDateTimeFormat,
  brDateTimeLocalFromNow,
  brDateTimeLocalToApi,
  parseApiDate
} from "./chunk-MQ3P2GIM.js";
import "./chunk-HZABO7FL.js";
import "./chunk-IKIQHSDP.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-JC7LZX74.js";
import {
  __spreadValues,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-MRKXMG4P.js";

// src/app/features/admin/pages/campanhas/campanha-detalhe.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function CampanhaDetalheComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "Carregando lead\u2026");
    \u0275\u0275elementEnd();
  }
}
function CampanhaDetalheComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 1);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.loadError(), " ");
  }
}
function CampanhaDetalheComponent_Conditional_6_Conditional_0_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function CampanhaDetalheComponent_Conditional_6_Conditional_0_For_25_Template_button_click_0_listener() {
      const status_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onStatusChange(status_r4.value));
    });
    \u0275\u0275elementStart(1, "span", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r4 = ctx.$implicit;
    const lead_r5 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("stage-picker__item--active", lead_r5.status === status_r4.value);
    \u0275\u0275property("disabled", ctx_r0.statusSaving());
    \u0275\u0275attribute("data-status", status_r4.value)("aria-checked", lead_r5.status === status_r4.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(status_r4.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", status_r4.label, " ");
  }
}
function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.statusError());
  }
}
function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_32_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const minutes_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("value", minutes_r7)("selected", minutes_r7 === ctx_r0.meetingDuration());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", minutes_r7, " min");
  }
}
function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_32_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "A sala \xE9 criada na agenda da equipe e o lead recebe o convite por e-mail.");
    \u0275\u0275elementEnd();
  }
}
function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_32_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Indispon\xEDvel: a integra\xE7\xE3o com o Google Agenda n\xE3o est\xE1 configurada.");
    \u0275\u0275elementEnd();
  }
}
function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_32_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "span", 37);
    \u0275\u0275text(2, "Link da call");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 48)(4, "input", 49);
    \u0275\u0275listener("input", function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_32_Conditional_30_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.meetingUrl.set($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 50)(6, "span", 1);
    \u0275\u0275text(7, "add_link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Nova sala no Meet ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r0.meetingUrl());
  }
}
function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_32_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.meetingError());
  }
}
function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 35)(2, "label", 36)(3, "span", 37);
    \u0275\u0275text(4, "Data e hor\xE1rio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 38);
    \u0275\u0275listener("input", function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_32_Template_input_input_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.meetingAt.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "label", 39)(7, "span", 37);
    \u0275\u0275text(8, "Dura\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 40);
    \u0275\u0275listener("change", function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_32_Template_select_change_9_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.meetingDuration.set(+$event.target.value));
    });
    \u0275\u0275repeaterCreate(10, CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_32_For_11_Template, 2, 3, "option", 41, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 36)(13, "span", 37);
    \u0275\u0275text(14, "Sala da call");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 42)(16, "label", 43)(17, "input", 44);
    \u0275\u0275listener("change", function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_32_Template_input_change_17_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.meetingMode.set("google"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span")(19, "strong");
    \u0275\u0275text(20, "Criar sala no Google Meet");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_32_Conditional_21_Template, 2, 0, "small")(22, CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_32_Conditional_22_Template, 2, 0, "small");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "label", 43)(24, "input", 45);
    \u0275\u0275listener("change", function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_32_Template_input_change_24_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.meetingMode.set("manual"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span")(26, "strong");
    \u0275\u0275text(27, "Usar um link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "small");
    \u0275\u0275text(29, "Crie a sala no Google Meet (ou outra ferramenta) e cole o link aqui.");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(30, CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_32_Conditional_30_Template, 9, 1, "div", 36)(31, CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_32_Conditional_31_Template, 2, 1, "p", 19);
    \u0275\u0275elementStart(32, "div", 46)(33, "button", 47);
    \u0275\u0275listener("click", function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_32_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.cancelMeetingForm());
    });
    \u0275\u0275text(34, " Voltar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 27);
    \u0275\u0275listener("click", function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_32_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.saveMeeting());
    });
    \u0275\u0275elementStart(36, "span", 1);
    \u0275\u0275text(37, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lead_r5 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r0.meetingAt());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r0.meetingDuration());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.durationOptions);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("mode-option--disabled", !ctx_r0.googleMeetEnabled());
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.meetingMode() === "google")("disabled", !ctx_r0.googleMeetEnabled());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.googleMeetEnabled() ? 21 : 22);
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r0.meetingMode() === "manual");
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.meetingMode() === "manual" ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.meetingError() ? 31 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.meetingSaving());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.meetingSaving());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.meetingSaving() ? "Salvando\u2026" : lead_r5.meetingAt ? "Salvar novo hor\xE1rio" : "Agendar call", " ");
  }
}
function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_33_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xB7 sala criada no Google Meet ");
  }
}
function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_33_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xB7 j\xE1 passou ");
  }
}
function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_33_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "span", 1);
    \u0275\u0275text(2, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lead_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", lead_r5.meetingUrl, \u0275\u0275sanitizeUrl)("title", lead_r5.meetingUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(lead_r5.meetingUrl);
  }
}
function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_33_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 60)(1, "span", 1);
    \u0275\u0275text(2, "videocam");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Entrar na call ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 61);
    \u0275\u0275listener("click", function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_33_Conditional_13_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.copyMeetingLink());
    });
    \u0275\u0275elementStart(5, "span", 1);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lead_r5 = \u0275\u0275nextContext(2);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", lead_r5.meetingUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.linkCopied() ? "check" : "content_copy");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.linkCopied() ? "Copiado" : "Copiar link", " ");
  }
}
function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_33_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 57)(1, "span", 1);
    \u0275\u0275text(2, "calendar_month");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Adicionar \xE0 agenda ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("href", ctx, \u0275\u0275sanitizeUrl);
  }
}
function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_33_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.meetingError());
  }
}
function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52)(2, "span", 1);
    \u0275\u0275text(3, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "strong", 53);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 54);
    \u0275\u0275text(8);
    \u0275\u0275template(9, CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_33_Conditional_9_Template, 1, 0)(10, CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_33_Conditional_10_Template, 1, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_33_Conditional_11_Template, 5, 3, "div", 55);
    \u0275\u0275elementStart(12, "div", 56);
    \u0275\u0275template(13, CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_33_Conditional_13_Template, 8, 3)(14, CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_33_Conditional_14_Template, 4, 1, "a", 57);
    \u0275\u0275elementStart(15, "button", 47);
    \u0275\u0275listener("click", function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_33_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.startMeetingForm());
    });
    \u0275\u0275elementStart(16, "span", 1);
    \u0275\u0275text(17, "edit_calendar");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Remarcar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 58);
    \u0275\u0275listener("click", function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_33_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.cancelMeeting());
    });
    \u0275\u0275elementStart(20, "span", 1);
    \u0275\u0275text(21, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Cancelar call ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_33_Conditional_23_Template, 2, 1, "p", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_11_0;
    const lead_r5 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("meeting--past", ctx_r0.isPastMeeting());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.formatLongDateTime(lead_r5.meetingAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_6_0 = lead_r5.meetingDurationMinutes) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : 30, " min ");
    \u0275\u0275advance();
    \u0275\u0275conditional(lead_r5.meetingFromGoogle ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isPastMeeting() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(lead_r5.meetingUrl ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(lead_r5.meetingUrl ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_11_0 = !lead_r5.meetingFromGoogle && ctx_r0.googleCalendarUrl(lead_r5)) ? 14 : -1, tmp_11_0);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.meetingSaving());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.meetingSaving());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.meetingError() ? 23 : -1);
  }
}
function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "p", 2);
    \u0275\u0275text(2, "Nenhuma call agendada com este lead.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 62);
    \u0275\u0275listener("click", function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_34_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.startMeetingForm());
    });
    \u0275\u0275elementStart(4, "span", 1);
    \u0275\u0275text(5, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Agendar call ");
    \u0275\u0275elementEnd()();
  }
}
function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.notes().length);
  }
}
function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.noteError());
  }
}
function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_49_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_49_For_2_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const note_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.deleteNote(note_r13));
    });
    \u0275\u0275elementStart(1, "span", 1);
    \u0275\u0275text(2, "delete_outline");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const note_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", ctx_r0.deletingNoteId() === note_r13.id);
  }
}
function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_49_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 63)(1, "div", 64)(2, "span", 65);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 66);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_49_For_2_Conditional_6_Template, 3, 1, "button", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 68);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const note_r13 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(note_r13.authorName || "Equipe comercial");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDateTime(note_r13.createdAt));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.canDeleteNote(note_r13) ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(note_r13.content);
  }
}
function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ol", 28);
    \u0275\u0275repeaterCreate(1, CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_49_For_2_Template, 9, 4, "li", 63, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.notes());
  }
}
function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "Nenhuma anota\xE7\xE3o ainda.");
    \u0275\u0275elementEnd();
  }
}
function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275elementStart(1, "span", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lead_r5 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", lead_r5.contactedByName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("em ", ctx_r0.formatDateTime(lead_r5.contactedAt), "");
  }
}
function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1, "Ainda n\xE3o contatado");
    \u0275\u0275elementEnd();
  }
}
function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2, "\xDAltima mudan\xE7a de etapa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lead_r5 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.formatDateTime(lead_r5.statusUpdatedAt));
  }
}
function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_79_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r14);
  }
}
function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275repeaterCreate(1, CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_79_For_2_Template, 2, 1, "span", 70, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.originTags());
  }
}
function CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1, "Sem UTM");
    \u0275\u0275elementEnd();
  }
}
function CampanhaDetalheComponent_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 4)(1, "span", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6)(4, "h1", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 8);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 9)(9, "a", 10);
    \u0275\u0275element(10, "app-social-icon", 11);
    \u0275\u0275text(11, " Chamar no WhatsApp ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 12)(13, "span", 1);
    \u0275\u0275text(14, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " E-mail ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 13)(17, "div", 14)(18, "section", 15)(19, "h2", 16)(20, "span", 1);
    \u0275\u0275text(21, "view_kanban");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Etapa do funil ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 17);
    \u0275\u0275repeaterCreate(24, CampanhaDetalheComponent_Conditional_6_Conditional_0_For_25_Template, 4, 7, "button", 18, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_26_Template, 2, 1, "p", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "section", 15)(28, "h2", 16)(29, "span", 1);
    \u0275\u0275text(30, "videocam");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " Call ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_32_Template, 39, 13, "div", 20)(33, CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_33_Template, 24, 12, "div", 21)(34, CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_34_Template, 7, 0, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "section", 15)(36, "h2", 16)(37, "span", 1);
    \u0275\u0275text(38, "sticky_note_2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39, " Anota\xE7\xF5es ");
    \u0275\u0275template(40, CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_40_Template, 2, 1, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 24)(42, "textarea", 25);
    \u0275\u0275listener("input", function CampanhaDetalheComponent_Conditional_6_Conditional_0_Template_textarea_input_42_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.noteDraft.set($event.target.value));
    })("keydown", function CampanhaDetalheComponent_Conditional_6_Conditional_0_Template_textarea_keydown_42_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onNoteKeydown($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 26)(44, "span", 2);
    \u0275\u0275text(45, "Ctrl + Enter para salvar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 27);
    \u0275\u0275listener("click", function CampanhaDetalheComponent_Conditional_6_Conditional_0_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveNote());
    });
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(48, CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_48_Template, 2, 1, "p", 19)(49, CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_49_Template, 3, 0, "ol", 28)(50, CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_50_Template, 2, 0, "p", 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "aside", 29)(52, "h2", 16)(53, "span", 1);
    \u0275\u0275text(54, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55, " Dados do lead ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "dl", 30)(57, "div")(58, "dt");
    \u0275\u0275text(59, "Telefone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "dd");
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div")(63, "dt");
    \u0275\u0275text(64, "E-mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "dd")(66, "a", 31);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "div")(69, "dt");
    \u0275\u0275text(70, "Comercial que fez o contato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "dd");
    \u0275\u0275template(72, CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_72_Template, 3, 2, "span", 32)(73, CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_73_Template, 2, 0, "span", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(74, CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_74_Template, 5, 1, "div");
    \u0275\u0275elementStart(75, "div")(76, "dt");
    \u0275\u0275text(77, "Origem do an\xFAncio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "dd");
    \u0275\u0275template(79, CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_79_Template, 3, 0, "div", 33)(80, CampanhaDetalheComponent_Conditional_6_Conditional_0_Conditional_80_Template, 2, 0, "span", 32);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const lead_r5 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.initials(lead_r5.name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(lead_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Recebido em ", ctx_r0.formatDateTime(lead_r5.createdAt), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r0.whatsappUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", "mailto:" + lead_r5.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r0.statuses);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.statusError() ? 26 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.isEditingMeeting() ? 32 : lead_r5.meetingAt ? 33 : 34);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r0.notes().length ? 40 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("maxLength", ctx_r0.noteMaxLength)("value", ctx_r0.noteDraft());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.noteSaving() || !ctx_r0.noteDraft().trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.noteSaving() ? "Salvando\u2026" : "Salvar anota\xE7\xE3o", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.noteError() ? 48 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.notes().length ? 49 : 50);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r0.formatPhone(lead_r5.phone));
    \u0275\u0275advance(5);
    \u0275\u0275property("href", "mailto:" + lead_r5.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(lead_r5.email);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(lead_r5.contactedByName ? 72 : 73);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(lead_r5.statusUpdatedAt ? 74 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.originTags().length ? 79 : 80);
  }
}
function CampanhaDetalheComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CampanhaDetalheComponent_Conditional_6_Conditional_0_Template, 81, 20);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r0.lead()) ? 0 : -1, tmp_1_0);
  }
}
var DURATION_OPTIONS = [15, 30, 45, 60, 90];
var DEFAULT_DURATION = 30;
var NOTE_MAX_LENGTH = 5e3;
var CampanhaDetalheComponent = class _CampanhaDetalheComponent {
  route = inject(ActivatedRoute);
  campaignsService = inject(CampaignsService);
  authService = inject(AuthService);
  dateTimeFormatter = brDateTimeFormat({ dateStyle: "short", timeStyle: "short" });
  longDateTimeFormatter = brDateTimeFormat({
    weekday: "long",
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit"
  });
  campaignId = this.route.snapshot.paramMap.get("id") ?? "";
  statuses = CAMPAIGN_STATUSES;
  durationOptions = DURATION_OPTIONS;
  noteMaxLength = NOTE_MAX_LENGTH;
  lead = signal(null);
  notes = signal([]);
  googleMeetEnabled = signal(false);
  isLoading = signal(true);
  loadError = signal(null);
  statusSaving = signal(false);
  statusError = signal(null);
  // Formulário da call
  isEditingMeeting = signal(false);
  meetingAt = signal("");
  meetingDuration = signal(DEFAULT_DURATION);
  meetingMode = signal("manual");
  meetingUrl = signal("");
  meetingSaving = signal(false);
  meetingError = signal(null);
  linkCopied = signal(false);
  // Anotações
  noteDraft = signal("");
  noteSaving = signal(false);
  noteError = signal(null);
  deletingNoteId = signal(null);
  whatsappUrl = computed(() => {
    const lead = this.lead();
    return lead ? leadWhatsappUrl(lead) : "";
  });
  originTags = computed(() => {
    const lead = this.lead();
    if (!lead)
      return [];
    return [lead.utmSource, lead.utmMedium, lead.utmCampaign, lead.utmContent, lead.utmTerm].filter((part) => !!part);
  });
  isPastMeeting = computed(() => {
    const parsed = parseApiDate(this.lead()?.meetingAt ?? null);
    return !!parsed && parsed.getTime() < Date.now();
  });
  formatPhone = formatLeadPhone;
  initials = leadInitials;
  constructor() {
    this.load();
  }
  formatDateTime(value) {
    const parsed = parseApiDate(value ?? null);
    return parsed ? this.dateTimeFormatter.format(parsed) : "\u2014";
  }
  formatLongDateTime(value) {
    const parsed = parseApiDate(value ?? null);
    return parsed ? this.longDateTimeFormatter.format(parsed) : "\u2014";
  }
  canDeleteNote(note) {
    return this.authService.isPlatformAdmin() || note.authorUserId === this.authService.currentUser()?.userId;
  }
  // Evento pronto no Google Agenda de quem clicou (com o lead como convidado) — útil quando a sala
  // foi criada à mão e a call ainda não está na agenda.
  googleCalendarUrl(lead) {
    const start = parseApiDate(lead.meetingAt);
    if (!start)
      return null;
    const end = new Date(start.getTime() + (lead.meetingDurationMinutes ?? DEFAULT_DURATION) * 6e4);
    const stamp = (date) => date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: `Comanda \xDAnica \u2014 apresenta\xE7\xE3o para ${lead.name}`,
      dates: `${stamp(start)}/${stamp(end)}`,
      details: `Call de apresenta\xE7\xE3o da Comanda \xDAnica.${lead.meetingUrl ? `

Link: ${lead.meetingUrl}` : ""}`,
      add: lead.email
    });
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  }
  // ---------------------------------------------------------------------------
  // Etapa
  // ---------------------------------------------------------------------------
  onStatusChange(value) {
    const lead = this.lead();
    if (!lead || value === lead.status)
      return;
    this.statusSaving.set(true);
    this.statusError.set(null);
    this.campaignsService.updateStatus(lead.id, value).subscribe({
      next: (updated) => {
        this.lead.set(updated);
        this.statusSaving.set(false);
      },
      error: (error) => {
        this.statusError.set(this.resolveErrorMessage(error, "N\xE3o foi poss\xEDvel mudar a etapa."));
        this.statusSaving.set(false);
        this.lead.set(__spreadValues({}, lead));
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Call
  // ---------------------------------------------------------------------------
  startMeetingForm() {
    const lead = this.lead();
    if (!lead)
      return;
    this.meetingAt.set(apiToBrDateTimeLocal(lead.meetingAt) ?? this.defaultMeetingAt());
    this.meetingDuration.set(lead.meetingDurationMinutes ?? DEFAULT_DURATION);
    this.meetingMode.set(lead.meetingAt ? lead.meetingFromGoogle ? "google" : "manual" : this.googleMeetEnabled() ? "google" : "manual");
    this.meetingUrl.set(lead.meetingFromGoogle ? "" : lead.meetingUrl ?? "");
    this.meetingError.set(null);
    this.isEditingMeeting.set(true);
  }
  cancelMeetingForm() {
    this.isEditingMeeting.set(false);
    this.meetingError.set(null);
  }
  saveMeeting() {
    const lead = this.lead();
    if (!lead)
      return;
    const meetingAt = brDateTimeLocalToApi(this.meetingAt());
    if (!meetingAt) {
      this.meetingError.set("Informe a data e o hor\xE1rio da call.");
      return;
    }
    const createGoogleMeet = this.meetingMode() === "google";
    const meetingUrl = this.meetingUrl().trim();
    if (!createGoogleMeet && !/^https?:\/\/\S+$/.test(meetingUrl)) {
      this.meetingError.set("Cole o link da call (come\xE7ando com https://).");
      return;
    }
    this.meetingSaving.set(true);
    this.meetingError.set(null);
    this.campaignsService.scheduleMeeting(lead.id, {
      meetingAt,
      durationMinutes: this.meetingDuration(),
      createGoogleMeet,
      meetingUrl: createGoogleMeet ? null : meetingUrl
    }).subscribe({
      next: (updated) => {
        this.lead.set(updated);
        this.meetingSaving.set(false);
        this.isEditingMeeting.set(false);
      },
      error: (error) => {
        this.meetingError.set(this.resolveErrorMessage(error, "N\xE3o foi poss\xEDvel agendar a call."));
        this.meetingSaving.set(false);
      }
    });
  }
  cancelMeeting() {
    const lead = this.lead();
    if (!lead || !confirm("Cancelar a call agendada com este lead?"))
      return;
    this.meetingSaving.set(true);
    this.meetingError.set(null);
    this.campaignsService.cancelMeeting(lead.id).subscribe({
      next: (updated) => {
        this.lead.set(updated);
        this.meetingSaving.set(false);
      },
      error: (error) => {
        this.meetingError.set(this.resolveErrorMessage(error, "N\xE3o foi poss\xEDvel cancelar a call."));
        this.meetingSaving.set(false);
      }
    });
  }
  copyMeetingLink() {
    const url = this.lead()?.meetingUrl;
    if (!url || !navigator.clipboard)
      return;
    navigator.clipboard.writeText(url).then(() => {
      this.linkCopied.set(true);
      setTimeout(() => this.linkCopied.set(false), 2e3);
    });
  }
  // ---------------------------------------------------------------------------
  // Anotações
  // ---------------------------------------------------------------------------
  onNoteKeydown(event) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      this.saveNote();
    }
  }
  saveNote() {
    const lead = this.lead();
    const content = this.noteDraft().trim();
    if (!lead || !content || this.noteSaving())
      return;
    this.noteSaving.set(true);
    this.noteError.set(null);
    this.campaignsService.addNote(lead.id, content).subscribe({
      next: (note) => {
        this.notes.update((notes) => [note, ...notes]);
        this.noteDraft.set("");
        this.noteSaving.set(false);
      },
      error: (error) => {
        this.noteError.set(this.resolveErrorMessage(error, "N\xE3o foi poss\xEDvel salvar a anota\xE7\xE3o."));
        this.noteSaving.set(false);
      }
    });
  }
  deleteNote(note) {
    const lead = this.lead();
    if (!lead || !confirm("Excluir esta anota\xE7\xE3o?"))
      return;
    this.deletingNoteId.set(note.id);
    this.noteError.set(null);
    this.campaignsService.deleteNote(lead.id, note.id).subscribe({
      next: () => {
        this.notes.update((notes) => notes.filter((item) => item.id !== note.id));
        this.deletingNoteId.set(null);
      },
      error: (error) => {
        this.noteError.set(this.resolveErrorMessage(error, "N\xE3o foi poss\xEDvel excluir a anota\xE7\xE3o."));
        this.deletingNoteId.set(null);
      }
    });
  }
  load() {
    this.isLoading.set(true);
    this.loadError.set(null);
    this.campaignsService.get(this.campaignId).subscribe({
      next: (detail) => {
        this.lead.set(detail.campaign);
        this.notes.set(detail.notes);
        this.googleMeetEnabled.set(detail.googleMeetEnabled);
        this.isLoading.set(false);
      },
      error: (error) => {
        this.loadError.set(error.status === 404 ? "Lead n\xE3o encontrado." : "N\xE3o foi poss\xEDvel carregar o lead.");
        this.isLoading.set(false);
      }
    });
  }
  // Padrão do formulário: amanhã, no mesmo horário de agora, arredondado para a hora cheia.
  defaultMeetingAt() {
    const value = brDateTimeLocalFromNow(24 * 60);
    return `${value.slice(0, 14)}00`;
  }
  resolveErrorMessage(error, fallback) {
    const body = error.error;
    return body?.mensagem || body?.titulo || fallback;
  }
  static \u0275fac = function CampanhaDetalheComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CampanhaDetalheComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CampanhaDetalheComponent, selectors: [["app-admin-campanha-detalhe"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 1, consts: [["routerLink", "/painel/campanhas", 1, "back-link"], ["aria-hidden", "true", 1, "material-icons"], [1, "field__hint"], ["role", "alert", 1, "form-alert", "form-alert--error"], [1, "lead-header"], ["aria-hidden", "true", 1, "lead-header__avatar"], [1, "lead-header__identity"], [1, "lead-header__name"], [1, "lead-header__meta"], [1, "lead-header__actions"], ["appRipple", "", "target", "_blank", "rel", "noopener", 1, "btn", "btn--whatsapp", "btn--sm", 3, "href"], ["name", "whatsapp"], ["appRipple", "", 1, "btn", "btn--ghost", "btn--sm", 3, "href"], [1, "layout"], [1, "layout__main"], [1, "card", "panel"], [1, "panel__title"], ["role", "radiogroup", "aria-label", "Etapa do funil", 1, "stage-picker"], ["type", "button", "role", "radio", 1, "stage-picker__item", 3, "stage-picker__item--active", "disabled"], ["role", "alert", 1, "inline-error"], [1, "meeting-form"], [1, "meeting", 3, "meeting--past"], [1, "empty"], [1, "panel__count"], [1, "note-form"], ["rows", "3", "placeholder", "Como foi o contato? Pr\xF3ximos passos, obje\xE7\xF5es, o que o cliente precisa\u2026", 3, "input", "keydown", "maxLength", "value"], [1, "note-form__footer"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", "btn--sm", 3, "click", "disabled"], [1, "notes"], [1, "card", "panel", "layout__side"], [1, "details"], [3, "href"], [1, "details__hint"], [1, "tags"], ["type", "button", "role", "radio", 1, "stage-picker__item", 3, "click", "disabled"], [1, "form-row"], [1, "field"], [1, "field__label"], ["type", "datetime-local", 3, "input", "value"], [1, "field", "field--narrow"], [3, "change", "value"], [3, "value", "selected"], [1, "mode-options"], [1, "mode-option"], ["type", "radio", "name", "meetingMode", "value", "google", 3, "change", "checked", "disabled"], ["type", "radio", "name", "meetingMode", "value", "manual", 3, "change", "checked"], [1, "form-actions"], ["type", "button", "appRipple", "", 1, "btn", "btn--ghost", "btn--sm", 3, "click", "disabled"], [1, "input-with-action"], ["type", "url", "placeholder", "https://meet.google.com/abc-defg-hij", 3, "input", "value"], ["appRipple", "", "href", "https://meet.google.com/new", "target", "_blank", "rel", "noopener", 1, "btn", "btn--ghost", "btn--sm"], [1, "meeting"], [1, "meeting__when"], [1, "meeting__date"], [1, "meeting__meta"], [1, "meeting__link"], [1, "meeting__actions"], ["appRipple", "", "target", "_blank", "rel", "noopener", 1, "btn", "btn--ghost", "btn--sm", 3, "href"], ["type", "button", "appRipple", "", 1, "btn", "btn--ghost", "btn--sm", "btn--danger", 3, "click", "disabled"], ["target", "_blank", "rel", "noopener", 3, "href", "title"], ["appRipple", "", "target", "_blank", "rel", "noopener", 1, "btn", "btn--primary", "btn--sm", 3, "href"], ["type", "button", "appRipple", "", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", "btn--sm", 3, "click"], [1, "note"], [1, "note__header"], [1, "note__author"], [1, "note__date"], ["type", "button", "title", "Excluir anota\xE7\xE3o", "aria-label", "Excluir anota\xE7\xE3o", 1, "note__delete", 3, "disabled"], [1, "note__content"], ["type", "button", "title", "Excluir anota\xE7\xE3o", "aria-label", "Excluir anota\xE7\xE3o", 1, "note__delete", 3, "click", "disabled"], [1, "tag"]], template: function CampanhaDetalheComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0)(1, "span", 1);
      \u0275\u0275text(2, "arrow_back");
      \u0275\u0275elementEnd();
      \u0275\u0275text(3, " Voltar para Campanhas\n");
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, CampanhaDetalheComponent_Conditional_4_Template, 2, 0, "p", 2)(5, CampanhaDetalheComponent_Conditional_5_Template, 4, 1, "div", 3)(6, CampanhaDetalheComponent_Conditional_6_Template, 1, 1);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.isLoading() ? 4 : ctx.loadError() ? 5 : 6);
    }
  }, dependencies: [RouterLink, RippleDirective, SocialIconComponent], styles: ["\n\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.form-alert[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.inline-error[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 0.8125rem;\n  color: #f87171;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 16px;\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n.back-link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: var(--color-text);\n}\n.lead-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.lead-header__avatar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: var(--color-accent-bg);\n  color: var(--color-accent-hover);\n  font-weight: 700;\n}\n.lead-header__identity[_ngcontent-%COMP%] {\n  flex: 1 1 220px;\n  min-width: 0;\n}\n.lead-header__name[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  overflow-wrap: anywhere;\n}\n.lead-header__meta[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n.lead-header__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 320px;\n  gap: 20px;\n  align-items: start;\n}\n.layout__main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  min-width: 0;\n}\n.panel[_ngcontent-%COMP%] {\n  padding: 20px;\n  min-width: 0;\n}\n.panel__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 16px;\n  font-size: 1rem;\n  font-weight: 600;\n}\n.panel__title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--color-accent-hover);\n}\n.panel__count[_ngcontent-%COMP%] {\n  padding: 1px 8px;\n  border-radius: var(--radius-full);\n  background: var(--color-bg);\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.stage-picker[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.stage-picker__item[_ngcontent-%COMP%] {\n  --stage-color: var(--color-accent);\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 12px;\n  border-radius: var(--radius-full);\n  border: 1px solid var(--color-border-strong);\n  background: transparent;\n  color: var(--color-text-muted);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    background var(--transition-fast),\n    color var(--transition-fast),\n    border-color var(--transition-fast);\n}\n.stage-picker__item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.stage-picker__item[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: var(--color-text);\n  border-color: var(--stage-color);\n}\n.stage-picker__item[_ngcontent-%COMP%]:disabled {\n  cursor: wait;\n}\n.stage-picker__item[data-status=IN_CONTACT][_ngcontent-%COMP%] {\n  --stage-color: #a855f7;\n}\n.stage-picker__item[data-status=SCHEDULED][_ngcontent-%COMP%] {\n  --stage-color: #eab308;\n}\n.stage-picker__item[data-status=NOT_INTERESTED][_ngcontent-%COMP%] {\n  --stage-color: #ef4444;\n}\n.stage-picker__item[data-status=INTERESTED_NOT_HIRED][_ngcontent-%COMP%] {\n  --stage-color: #f97316;\n}\n.stage-picker__item[data-status=HIRED][_ngcontent-%COMP%] {\n  --stage-color: var(--color-success);\n}\n.stage-picker__item--active[_ngcontent-%COMP%] {\n  border-color: var(--stage-color);\n  background: color-mix(in srgb, var(--stage-color) 16%, transparent);\n  color: var(--color-text);\n}\n.stage-picker__item--active[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--stage-color);\n}\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.meeting[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.meeting__when[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.meeting__when[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 8px;\n  border-radius: var(--radius-sm);\n  background: rgba(234, 179, 8, 0.14);\n  color: #eab308;\n}\n.meeting__when[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.meeting--past[_ngcontent-%COMP%]   .meeting__when[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%] {\n  background: var(--color-bg);\n  color: var(--color-text-muted);\n}\n.meeting__date[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.meeting__date[_ngcontent-%COMP%]::first-letter {\n  text-transform: uppercase;\n}\n.meeting__meta[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.meeting__link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n  padding: 10px 12px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border);\n  background: var(--color-bg);\n  font-size: 0.875rem;\n}\n.meeting__link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 18px;\n  color: var(--color-text-muted);\n}\n.meeting__link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: var(--color-accent-hover);\n}\n.meeting__actions[_ngcontent-%COMP%], \n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.meeting__actions[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.form-actions[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.btn--danger[_ngcontent-%COMP%]:hover {\n  border-color: #ef4444;\n  color: #f87171;\n}\n.btn--whatsapp[_ngcontent-%COMP%] {\n  background: #25d366;\n  color: #06210f;\n}\n.btn--whatsapp[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.06);\n}\n.btn--whatsapp[_ngcontent-%COMP%]     svg {\n  width: 18px;\n  height: 18px;\n}\n.meeting-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.form-row[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  flex: 1 1 220px;\n}\n.form-row[_ngcontent-%COMP%]   .field--narrow[_ngcontent-%COMP%] {\n  flex: 0 1 140px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n.field__label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--color-text-muted);\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=radio]), \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.note-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border-strong);\n  background: var(--color-bg);\n  color: var(--color-text);\n  font: inherit;\n  font-size: 0.9375rem;\n  color-scheme: dark;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=radio]):focus, \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.note-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-accent);\n}\n.mode-options[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 10px;\n}\n.mode-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 12px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border-strong);\n  cursor: pointer;\n}\n.mode-option[_ngcontent-%COMP%]:has(input:checked) {\n  border-color: var(--color-accent);\n  background: var(--color-accent-bg);\n}\n.mode-option[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-top: 3px;\n  accent-color: var(--color-accent);\n}\n.mode-option[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.mode-option[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.mode-option[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1.4;\n  color: var(--color-text-muted);\n}\n.mode-option--disabled[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.input-with-action[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.input-with-action[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1 1 240px;\n  min-width: 0;\n}\n.input-with-action[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.note-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.note-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 84px;\n}\n.note-form__footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.notes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin: 18px 0 0;\n  padding: 0;\n  list-style: none;\n}\n.note[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border);\n  background: var(--color-bg);\n}\n.note__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n.note__author[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.note__date[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.note__delete[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 4px;\n  border: 0;\n  border-radius: 50%;\n  background: transparent;\n  color: var(--color-text-muted);\n  cursor: pointer;\n}\n.note__delete[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.note__delete[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: #f87171;\n  background: rgba(239, 68, 68, 0.1);\n}\n.note__content[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text);\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n}\n.details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  margin: 0;\n}\n.details[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.details[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  margin-bottom: 3px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  color: var(--color-text-muted);\n}\n.details[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9375rem;\n  overflow-wrap: anywhere;\n}\n.details[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-accent-hover);\n}\n.details__hint[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.tag[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding: 3px 10px;\n  border-radius: var(--radius-full);\n  border: 1px solid var(--color-border);\n  background: var(--color-bg);\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  overflow-wrap: anywhere;\n}\n@media (max-width: 960px) {\n  .layout[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .layout__side[_ngcontent-%COMP%] {\n    order: -1;\n  }\n}\n@media (max-width: 600px) {\n  .panel[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .lead-header__actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .lead-header__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=campanha-detalhe.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CampanhaDetalheComponent, { className: "CampanhaDetalheComponent", filePath: "src\\app\\features\\admin\\pages\\campanhas\\campanha-detalhe.component.ts", lineNumber: 42 });
})();
export {
  CampanhaDetalheComponent
};
//# sourceMappingURL=chunk-GZYEWW6W.js.map
