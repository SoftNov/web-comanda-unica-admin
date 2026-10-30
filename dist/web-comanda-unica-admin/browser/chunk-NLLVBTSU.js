import {
  EventEmitter,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-MRKXMG4P.js";

// src/app/shared/components/qr-scanner/qr-scanner.component.ts
var _c0 = ["video"];
function QrScannerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2)(1, "span", 5);
    \u0275\u0275text(2, "no_photography");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Este navegador n\xE3o l\xEA QR Code pela c\xE2mera. ", ctx_r0.fallbackHint, " ");
  }
}
function QrScannerComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3)(1, "span", 5);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error(), " ");
  }
}
function QrScannerComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "video", 7, 0)(3, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.hint);
  }
}
var QrScannerComponent = class _QrScannerComponent {
  hint = "Aponte a c\xE2mera para o QR Code do cart\xE3o.";
  fallbackHint = "Digite o c\xF3digo impresso no cart\xE3o ou use um leitor USB.";
  scanned = new EventEmitter();
  closed = new EventEmitter();
  videoRef;
  unsupported = signal(false);
  error = signal(null);
  stream = null;
  timer = null;
  done = false;
  ngOnInit() {
    const Detector = window.BarcodeDetector;
    if (!Detector || !navigator.mediaDevices?.getUserMedia) {
      this.unsupported.set(true);
      return;
    }
    const detector = new Detector({ formats: ["qr_code"] });
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" }, audio: false }).then((stream) => {
      this.stream = stream;
      setTimeout(() => this.start(detector));
    }).catch(() => this.error.set("N\xE3o foi poss\xEDvel acessar a c\xE2mera. Verifique a permiss\xE3o do navegador."));
  }
  ngOnDestroy() {
    this.stop();
  }
  start(detector) {
    const video = this.videoRef?.nativeElement;
    if (!video || !this.stream) {
      return;
    }
    video.srcObject = this.stream;
    void video.play();
    this.timer = setInterval(() => {
      if (this.done || video.readyState < 2) {
        return;
      }
      detector.detect(video).then((codes) => {
        const value = codes.find((code) => !!code.rawValue)?.rawValue;
        if (value && !this.done) {
          this.done = true;
          this.stop();
          this.scanned.emit(value.trim());
        }
      }).catch(() => void 0);
    }, 250);
  }
  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.stream?.getTracks().forEach((track) => track.stop());
    this.stream = null;
  }
  static \u0275fac = function QrScannerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QrScannerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QrScannerComponent, selectors: [["app-qr-scanner"]], viewQuery: function QrScannerComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.videoRef = _t.first);
    }
  }, inputs: { hint: "hint", fallbackHint: "fallbackHint" }, outputs: { scanned: "scanned", closed: "closed" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 1, consts: [["video", ""], [1, "qr-scanner"], [1, "qr-scanner__message"], [1, "qr-scanner__message", "qr-scanner__message--error"], ["type", "button", 1, "btn", "btn--ghost", "qr-scanner__close", 3, "click"], ["aria-hidden", "true", 1, "material-icons"], [1, "qr-scanner__viewport"], ["playsinline", "", "muted", "", 1, "qr-scanner__video"], ["aria-hidden", "true", 1, "qr-scanner__frame"], [1, "qr-scanner__hint"]], template: function QrScannerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, QrScannerComponent_Conditional_1_Template, 4, 1, "p", 2)(2, QrScannerComponent_Conditional_2_Template, 4, 1, "p", 3)(3, QrScannerComponent_Conditional_3_Template, 6, 1);
      \u0275\u0275elementStart(4, "button", 4);
      \u0275\u0275listener("click", function QrScannerComponent_Template_button_click_4_listener() {
        return ctx.closed.emit();
      });
      \u0275\u0275elementStart(5, "span", 5);
      \u0275\u0275text(6, "close");
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " Fechar c\xE2mera ");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.unsupported() ? 1 : ctx.error() ? 2 : 3);
    }
  }, styles: ["\n\n.qr-scanner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.qr-scanner__viewport[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 360px;\n  aspect-ratio: 1;\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n  background: #000;\n}\n.qr-scanner__video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.qr-scanner__frame[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 18%;\n  border: 3px solid var(--color-accent);\n  border-radius: 12px;\n  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.35);\n}\n.qr-scanner__hint[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n.qr-scanner__message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0;\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n.qr-scanner__message--error[_ngcontent-%COMP%] {\n  color: #f87171;\n}\n/*# sourceMappingURL=qr-scanner.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QrScannerComponent, { className: "QrScannerComponent", filePath: "src\\app\\shared\\components\\qr-scanner\\qr-scanner.component.ts", lineNumber: 45 });
})();

export {
  QrScannerComponent
};
//# sourceMappingURL=chunk-NLLVBTSU.js.map
