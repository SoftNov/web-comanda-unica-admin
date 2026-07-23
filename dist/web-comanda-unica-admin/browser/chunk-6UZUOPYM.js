import {
  FooterComponent,
  HeaderComponent
} from "./chunk-FD4JL6SF.js";
import {
  RippleDirective
} from "./chunk-G7AZFESP.js";
import {
  ElementRef,
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
  ɵɵdefineDirective,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ZGOR3PJA.js";

// src/app/shared/directives/scroll-reveal.directive.ts
var ScrollRevealDirective = class _ScrollRevealDirective {
  el = inject(ElementRef);
  observer;
  /** 'up' (fade + slide up) or 'fade' (fade only). */
  variant = "up";
  revealDelay = 0;
  ngOnInit() {
    const host = this.el.nativeElement;
    if (this.revealDelay) {
      host.style.transitionDelay = `${this.revealDelay}ms`;
    }
    if (!("IntersectionObserver" in window)) {
      host.classList.add("is-visible");
      return;
    }
    this.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          host.classList.add("is-visible");
          this.observer?.unobserve(host);
        }
      }
    }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
    this.observer.observe(host);
  }
  ngOnDestroy() {
    this.observer?.disconnect();
  }
  static \u0275fac = function ScrollRevealDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollRevealDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _ScrollRevealDirective, selectors: [["", "appScrollReveal", ""]], hostVars: 1, hostBindings: function ScrollRevealDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-reveal", ctx.variant || "up");
    }
  }, inputs: { variant: [0, "appScrollReveal", "variant"], revealDelay: "revealDelay" }, standalone: true });
};

// src/app/features/landing/components/hero/hero.component.ts
var HeroComponent = class _HeroComponent {
  /** Subtle parallax offset (px) applied to the mockup panel while scrolling the hero. */
  parallaxOffset = signal(0);
  onWindowScroll() {
    const y = window.scrollY;
    this.parallaxOffset.set(Math.min(y * 0.15, 60));
  }
  static \u0275fac = function HeroComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeroComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroComponent, selectors: [["app-hero"]], hostBindings: function HeroComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("scroll", function HeroComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, false, \u0275\u0275resolveWindow);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 109, vars: 3, consts: [["id", "top", 1, "hero"], ["aria-hidden", "true", 1, "hero__backdrop"], [1, "hero__glow", "hero__glow--accent"], [1, "hero__glow", "hero__glow--success"], [1, "hero__grid"], [1, "container", "hero__inner"], ["appScrollReveal", "up", 1, "hero__content"], [1, "eyebrow"], ["aria-hidden", "true", 1, "eyebrow__dot"], [1, "hero__title"], [1, "hero__text"], [1, "hero__actions"], ["routerLink", "/criar-conta", "appRipple", "", 1, "btn", "btn--primary"], ["href", "#contato", "appRipple", "", 1, "btn", "btn--ghost"], [1, "hero__trust"], ["aria-hidden", "true", 1, "material-icons"], ["appScrollReveal", "fade", 1, "hero__mockup", 3, "revealDelay"], [1, "mockup"], [1, "mockup__bar"], [1, "mockup__body"], [1, "mockup__stats"], [1, "mockup__stat"], [1, "mockup__delta", "mockup__delta--up"], [1, "mockup__delta"], [1, "mockup__chart"], [1, "mockup__chart-title"], [1, "mockup__bars"], [2, "--h", "30%"], [2, "--h", "45%"], [2, "--h", "38%"], [2, "--h", "62%"], [2, "--h", "80%"], [2, "--h", "58%"], [2, "--h", "90%"], [2, "--h", "70%"], [1, "mockup__orders"], [1, "mockup__order"], [1, "mockup__order-dot"], [1, "mockup__order-dot", "mockup__order-dot--pending"], ["aria-hidden", "true", 1, "mockup__floating", "mockup__floating--qr"], [1, "material-icons"], ["aria-hidden", "true", 1, "mockup__floating", "mockup__floating--confirm"]], template: function HeroComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275element(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "span", 7);
      \u0275\u0275element(8, "span", 8);
      \u0275\u0275text(9, " Sem mensalidade \u2022 Pague apenas pelo uso ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "h1", 9);
      \u0275\u0275text(11, " A comanda digital que faz seu restaurante ");
      \u0275\u0275elementStart(12, "span");
      \u0275\u0275text(13, "crescer");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " sem custos fixos. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 10);
      \u0275\u0275text(16, " Controle comandas, mesas, pedidos, caixa e funcion\xE1rios em uma \xFAnica plataforma. Voc\xEA paga somente pelas comandas realmente utilizadas. ");
      \u0275\u0275elementStart(17, "strong");
      \u0275\u0275text(18, "Sem mensalidades. Sem fidelidade.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 11)(20, "a", 12);
      \u0275\u0275text(21, "Come\xE7ar Agora");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "a", 13);
      \u0275\u0275text(23, "Solicitar Demonstra\xE7\xE3o");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 14)(25, "span")(26, "span", 15);
      \u0275\u0275text(27, "verified");
      \u0275\u0275elementEnd();
      \u0275\u0275text(28, " Sem fidelidade");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span")(30, "span", 15);
      \u0275\u0275text(31, "bolt");
      \u0275\u0275elementEnd();
      \u0275\u0275text(32, " Implanta\xE7\xE3o r\xE1pida");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "span")(34, "span", 15);
      \u0275\u0275text(35, "cloud_done");
      \u0275\u0275elementEnd();
      \u0275\u0275text(36, " 100% Cloud");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "div", 16)(38, "div", 17)(39, "div", 18);
      \u0275\u0275element(40, "span")(41, "span")(42, "span");
      \u0275\u0275elementStart(43, "p");
      \u0275\u0275text(44, "painel.comandaunica.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 19)(46, "div", 20)(47, "div", 21)(48, "p");
      \u0275\u0275text(49, "Faturamento hoje");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "strong");
      \u0275\u0275text(51, "R$ 4.382");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "span", 22);
      \u0275\u0275text(53, "+18%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 21)(55, "p");
      \u0275\u0275text(56, "Comandas abertas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "strong");
      \u0275\u0275text(58, "27");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "span", 22);
      \u0275\u0275text(60, "+4");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 21)(62, "p");
      \u0275\u0275text(63, "Mesas ocupadas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "strong");
      \u0275\u0275text(65, "12/18");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "span", 23);
      \u0275\u0275text(67, "est\xE1vel");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(68, "div", 24)(69, "p", 25);
      \u0275\u0275text(70, "Pedidos por hora");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 26);
      \u0275\u0275element(72, "span", 27)(73, "span", 28)(74, "span", 29)(75, "span", 30)(76, "span", 31)(77, "span", 32)(78, "span", 33)(79, "span", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "div", 35)(81, "div", 36);
      \u0275\u0275element(82, "span", 37);
      \u0275\u0275elementStart(83, "p");
      \u0275\u0275text(84, "Mesa 04 \u2014 2x Burger Artesanal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "span");
      \u0275\u0275text(86, "R$ 68,00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div", 36);
      \u0275\u0275element(88, "span", 37);
      \u0275\u0275elementStart(89, "p");
      \u0275\u0275text(90, "Mesa 09 \u2014 Combo Cerveja");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "span");
      \u0275\u0275text(92, "R$ 42,50");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 36);
      \u0275\u0275element(94, "span", 38);
      \u0275\u0275elementStart(95, "p");
      \u0275\u0275text(96, "Mesa 12 \u2014 Aguardando cozinha");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "span");
      \u0275\u0275text(98, "R$ 91,00");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(99, "div", 39)(100, "span", 40);
      \u0275\u0275text(101, "qr_code_2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "p");
      \u0275\u0275text(103, "Mesa 07");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "div", 41)(105, "span", 40);
      \u0275\u0275text(106, "check_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "p");
      \u0275\u0275text(108, "Pedido #128 confirmado");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(37);
      \u0275\u0275styleProp("transform", "translateY(" + ctx.parallaxOffset() + "px)");
      \u0275\u0275property("revealDelay", 150);
    }
  }, dependencies: [RippleDirective, ScrollRevealDirective, RouterLink], styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  padding-top: 96px;\n  padding-bottom: 64px;\n  overflow: hidden;\n  background: var(--color-bg);\n}\n.hero__backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n}\n.hero__glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(120px);\n  opacity: 0.35;\n}\n.hero__glow--accent[_ngcontent-%COMP%] {\n  width: 560px;\n  height: 560px;\n  background: var(--color-accent);\n  top: -160px;\n  right: -120px;\n}\n.hero__glow--success[_ngcontent-%COMP%] {\n  width: 420px;\n  height: 420px;\n  background: var(--color-success);\n  bottom: -140px;\n  left: -100px;\n  opacity: 0.22;\n}\n.hero__grid[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(var(--color-border) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      var(--color-border) 1px,\n      transparent 1px);\n  background-size: 64px 64px;\n  mask-image:\n    radial-gradient(\n      ellipse 80% 60% at 50% 0%,\n      black 40%,\n      transparent 100%);\n  opacity: 0.4;\n}\n.hero__inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: 1.05fr 0.95fr;\n  align-items: center;\n  gap: 56px;\n}\n.hero__title[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  font-size: clamp(2.25rem, 4.4vw, 3.5rem);\n  color: var(--color-text);\n}\n.hero__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: var(--gradient-accent);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.hero__text[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  max-width: 540px;\n  font-size: 1.0625rem;\n  color: var(--color-gray);\n}\n.hero__text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--color-text);\n  font-weight: 600;\n}\n.hero__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-top: 36px;\n}\n.hero__trust[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n  margin-top: 40px;\n}\n.hero__trust[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n.hero__trust[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--color-success);\n}\n.eyebrow__dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--color-success);\n  box-shadow: 0 0 0 4px var(--color-success-bg);\n}\n.hero__mockup[_ngcontent-%COMP%] {\n  position: relative;\n  transition: transform 60ms linear;\n}\n.mockup[_ngcontent-%COMP%] {\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_float 6s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n.mockup__bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 14px 16px;\n  background: var(--color-bg-elevated);\n  border-bottom: 1px solid var(--color-border);\n}\n.mockup__bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: var(--color-border-strong);\n}\n.mockup__bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  background: #f87171;\n}\n.mockup__bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  background: #fbbf24;\n}\n.mockup__bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  background: var(--color-success);\n}\n.mockup__bar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.mockup__body[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.mockup__stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.mockup__stat[_ngcontent-%COMP%] {\n  background: var(--color-bg-elevated);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  padding: 12px;\n}\n.mockup__stat[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  color: var(--color-text-muted);\n}\n.mockup__stat[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 6px;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n}\n.mockup__delta[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 6px;\n  font-size: 0.6875rem;\n  color: var(--color-text-muted);\n}\n.mockup__delta--up[_ngcontent-%COMP%] {\n  color: var(--color-success);\n}\n.mockup__chart[_ngcontent-%COMP%] {\n  background: var(--color-bg-elevated);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  padding: 14px;\n}\n.mockup__chart-title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  margin-bottom: 10px;\n}\n.mockup__bars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n  height: 72px;\n}\n.mockup__bars[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  height: var(--h);\n  border-radius: 4px 4px 0 0;\n  background: var(--gradient-accent);\n  opacity: 0.85;\n}\n.mockup__orders[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.mockup__order[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 0.8125rem;\n}\n.mockup__order[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  flex: 1;\n  color: var(--color-gray);\n}\n.mockup__order[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: var(--color-text);\n  font-weight: 600;\n}\n.mockup__order-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--color-success);\n  flex-shrink: 0;\n}\n.mockup__order-dot--pending[_ngcontent-%COMP%] {\n  background: #fbbf24;\n}\n.mockup__floating[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-md);\n  padding: 10px 14px;\n  box-shadow: var(--shadow-md);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  animation: _ngcontent-%COMP%_float 5s ease-in-out infinite;\n}\n.mockup__floating[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--color-success);\n}\n.mockup__floating--qr[_ngcontent-%COMP%] {\n  top: -20px;\n  left: -28px;\n  animation-delay: 0.4s;\n}\n.mockup__floating--qr[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--color-accent-hover);\n}\n.mockup__floating--confirm[_ngcontent-%COMP%] {\n  bottom: -18px;\n  right: -20px;\n  animation-delay: 1s;\n}\n@media (max-width: 1080px) {\n  .hero__inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .hero__mockup[_ngcontent-%COMP%] {\n    max-width: 520px;\n    margin-inline: auto;\n  }\n}\n@media (max-width: 560px) {\n  .hero[_ngcontent-%COMP%] {\n    padding-top: 110px;\n  }\n  .mockup__stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .mockup__floating[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=hero.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroComponent, { className: "HeroComponent", filePath: "src\\app\\features\\landing\\components\\hero\\hero.component.ts", lineNumber: 13 });
})();

// src/app/shared/directives/count-up.directive.ts
var CountUpDirective = class _CountUpDirective {
  el = inject(ElementRef);
  observer;
  frame;
  target = 0;
  countSuffix = "";
  countPrefix = "";
  countDuration = 1400;
  ngOnInit() {
    const host = this.el.nativeElement;
    host.textContent = `${this.countPrefix}0${this.countSuffix}`;
    if (!("IntersectionObserver" in window)) {
      this.animate();
      return;
    }
    this.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          this.animate();
          this.observer?.disconnect();
        }
      }
    }, { threshold: 0.4 });
    this.observer.observe(host);
  }
  animate() {
    const host = this.el.nativeElement;
    const start = performance.now();
    const from = 0;
    const to = this.target;
    const step = (now) => {
      const progress = Math.min((now - start) / this.countDuration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(from + (to - from) * eased);
      host.textContent = `${this.countPrefix}${value}${this.countSuffix}`;
      if (progress < 1) {
        this.frame = requestAnimationFrame(step);
      }
    };
    this.frame = requestAnimationFrame(step);
  }
  ngOnDestroy() {
    this.observer?.disconnect();
    if (this.frame) {
      cancelAnimationFrame(this.frame);
    }
  }
  static \u0275fac = function CountUpDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CountUpDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _CountUpDirective, selectors: [["", "appCountUp", ""]], inputs: { target: [0, "appCountUp", "target"], countSuffix: "countSuffix", countPrefix: "countPrefix", countDuration: "countDuration" }, standalone: true });
};

// src/app/features/landing/components/value-proposal/value-proposal.component.ts
var _forTrack0 = ($index, $item) => $item.label;
function ValueProposalComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    const \u0275$index_48_r2 = ctx.$index;
    \u0275\u0275property("revealDelay", \u0275$index_48_r2 * 60);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r1.label);
  }
}
var ValueProposalComponent = class _ValueProposalComponent {
  cards = [
    { icon: "money_off", label: "Sem mensalidade" },
    { icon: "link_off", label: "Sem fidelidade" },
    { icon: "groups", label: "Sem limite de usu\xE1rios" },
    { icon: "table_bar", label: "Sem limite de mesas" },
    { icon: "receipt_long", label: "Sem limite de comandas" },
    { icon: "cloud_done", label: "100% Cloud" }
  ];
  static \u0275fac = function ValueProposalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ValueProposalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ValueProposalComponent, selectors: [["app-value-proposal"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 3, consts: [[1, "value", "section"], [1, "container"], ["appScrollReveal", "up", 1, "section-heading", "section-heading--center"], [1, "eyebrow"], [1, "section-title", 2, "margin-top", "16px"], [1, "section-subtitle"], ["appScrollReveal", "up", 1, "value__stats", 3, "revealDelay"], [1, "value__stat"], ["countPrefix", "R$ ", 3, "appCountUp"], ["countSuffix", "%", 3, "appCountUp"], [1, "value__grid"], ["appScrollReveal", "up", 1, "value__card", "card", "card--hover", 3, "revealDelay"], ["aria-hidden", "true", 1, "material-icons"]], template: function ValueProposalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "Modelo de cobran\xE7a");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2", 4);
      \u0275\u0275text(6, "Chega de pagar mensalidades caras");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, " Enquanto outros sistemas cobram mensalidades fixas independentemente do movimento do seu restaurante, o Comanda \xDAnica cobra apenas quando existe utiliza\xE7\xE3o. Se n\xE3o houver atendimento, n\xE3o haver\xE1 cobran\xE7a. Voc\xEA cresce. N\xF3s crescemos com voc\xEA. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "strong")(12, "span", 8);
      \u0275\u0275text(13, "0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "p");
      \u0275\u0275text(15, "cobrado quando n\xE3o h\xE1 uso da plataforma");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 7)(17, "strong")(18, "span", 9);
      \u0275\u0275text(19, "0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "p");
      \u0275\u0275text(21, "opera\xE7\xE3o em nuvem, sem instala\xE7\xE3o");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 7)(23, "strong");
      \u0275\u0275text(24, "\u221E");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "p");
      \u0275\u0275text(26, "usu\xE1rios, mesas e comandas ilimitados");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 10);
      \u0275\u0275repeaterCreate(28, ValueProposalComponent_For_29_Template, 5, 3, "div", 11, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("revealDelay", 80);
      \u0275\u0275advance(3);
      \u0275\u0275property("appCountUp", 0);
      \u0275\u0275advance(6);
      \u0275\u0275property("appCountUp", 100);
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.cards);
    }
  }, dependencies: [ScrollRevealDirective, CountUpDirective], styles: ["\n\n.value__stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n  margin-top: 56px;\n  padding: 32px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  background: var(--gradient-surface), var(--color-bg-card);\n}\n.value__stat[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.value__stat[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 2rem;\n  font-weight: 800;\n  color: var(--color-text);\n}\n.value__stat[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 0.875rem;\n  color: var(--color-gray);\n}\n.value__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  margin-top: 40px;\n}\n.value__card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 24px;\n}\n.value__card[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--radius-sm);\n  background: var(--color-success-bg);\n  color: var(--color-success);\n  font-size: 22px;\n}\n.value__card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-text);\n  font-weight: 600;\n  font-size: 0.9375rem;\n}\n@media (max-width: 900px) {\n  .value__stats[_ngcontent-%COMP%], \n   .value__grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 560px) {\n  .value__stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .value__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=value-proposal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ValueProposalComponent, { className: "ValueProposalComponent", filePath: "src\\app\\features\\landing\\components\\value-proposal\\value-proposal.component.ts", lineNumber: 17 });
})();

// src/app/features/landing/components/benefits/benefits.component.ts
var _forTrack02 = ($index, $item) => $item.title;
function BenefitsComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 7)(1, "span", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const benefit_r1 = ctx.$implicit;
    const \u0275$index_18_r2 = ctx.$index;
    \u0275\u0275property("revealDelay", \u0275$index_18_r2 * 60);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(benefit_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(benefit_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(benefit_r1.description);
  }
}
var BenefitsComponent = class _BenefitsComponent {
  benefits = [
    { icon: "description", title: "Comanda Digital", description: "Elimine papel e reduza erros no atendimento." },
    { icon: "qr_code_2", title: "QR Code", description: "Clientes acessam o card\xE1pio e a comanda rapidamente." },
    { icon: "bolt", title: "Pedidos em Tempo Real", description: "Gar\xE7ons e cozinha sincronizados, sem retrabalho." },
    { icon: "account_balance_wallet", title: "Gest\xE3o Financeira", description: "Controle total do caixa em tempo real." },
    { icon: "badge", title: "Gest\xE3o de Funcion\xE1rios", description: "Permiss\xF5es por perfil de acesso." },
    { icon: "store", title: "Multiempresa", description: "Gerencie v\xE1rias unidades em um s\xF3 lugar." }
  ];
  static \u0275fac = function BenefitsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BenefitsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BenefitsComponent, selectors: [["app-benefits"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 0, consts: [["id", "recursos", 1, "benefits", "section"], [1, "container"], ["appScrollReveal", "up", 1, "section-heading", "section-heading--center"], [1, "eyebrow"], [1, "section-title", 2, "margin-top", "16px"], [1, "section-subtitle"], [1, "benefits__grid"], ["appScrollReveal", "up", 1, "benefits__card", "card", "card--hover", 3, "revealDelay"], ["aria-hidden", "true", 1, "benefits__icon", "material-icons"]], template: function BenefitsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "Recursos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2", 4);
      \u0275\u0275text(6, "Tudo que seu restaurante precisa, em um s\xF3 lugar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, " Do pedido ao pagamento, cada etapa do atendimento conectada em tempo real. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275repeaterCreate(10, BenefitsComponent_For_11_Template, 7, 4, "article", 7, _forTrack02);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.benefits);
    }
  }, dependencies: [ScrollRevealDirective], styles: ["\n\n.benefits__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n  margin-top: 48px;\n}\n.benefits__card[_ngcontent-%COMP%] {\n  padding: 28px;\n}\n.benefits__card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 1.125rem;\n  color: var(--color-text);\n}\n.benefits__card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 0.9375rem;\n}\n.benefits__icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 52px;\n  height: 52px;\n  border-radius: var(--radius-md);\n  background: var(--color-accent-bg);\n  color: var(--color-accent-hover);\n  font-size: 26px;\n}\n@media (max-width: 900px) {\n  .benefits__grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 560px) {\n  .benefits__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=benefits.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BenefitsComponent, { className: "BenefitsComponent", filePath: "src\\app\\features\\landing\\components\\benefits\\benefits.component.ts", lineNumber: 17 });
})();

// src/app/features/landing/components/timeline/timeline.component.ts
var _forTrack03 = ($index, $item) => $item.title;
function TimelineComponent_For_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 10);
  }
}
function TimelineComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 7)(1, "div", 8)(2, "span", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, TimelineComponent_For_11_Conditional_4_Template, 1, 0, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 11)(6, "span", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h3");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const \u0275$index_18_r2 = ctx.$index;
    const \u0275$count_18_r3 = ctx.$count;
    \u0275\u0275property("revealDelay", \u0275$index_18_r2 * 70);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(step_r1.icon);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_18_r2 === \u0275$count_18_r3 - 1) ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Passo ", \u0275$index_18_r2 + 1, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.description);
  }
}
var TimelineComponent = class _TimelineComponent {
  steps = [
    { icon: "storefront", title: "Cadastre seu estabelecimento", description: "Configure seu restaurante, bar ou hamburgueria em minutos." },
    { icon: "badge", title: "Cadastre funcion\xE1rios", description: "Defina perfis e permiss\xF5es de acesso para sua equipe." },
    { icon: "restaurant_menu", title: "Cadastre produtos", description: "Monte seu card\xE1pio com categorias, pre\xE7os e estoque." },
    { icon: "qr_code_2", title: "Imprima QR Codes", description: "Um c\xF3digo por mesa, pronto para o cliente escanear." },
    { icon: "phone_iphone", title: "Clientes iniciam comandas", description: "O cliente abre a comanda digital direto pelo celular." },
    { icon: "bolt", title: "Pedidos chegam automaticamente", description: "Gar\xE7ons e cozinha recebem tudo em tempo real." },
    { icon: "point_of_sale", title: "Feche a conta", description: "Divis\xE3o, pagamento e fechamento de caixa simplificados." },
    { icon: "payments", title: "Pague somente pelas comandas utilizadas", description: "Sem mensalidade fixa \u2014 a cobran\xE7a acompanha seu movimento." }
  ];
  static \u0275fac = function TimelineComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimelineComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimelineComponent, selectors: [["app-timeline"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 0, consts: [["id", "como-funciona", 1, "timeline", "section"], [1, "container"], ["appScrollReveal", "up", 1, "section-heading", "section-heading--center"], [1, "eyebrow"], [1, "section-title", 2, "margin-top", "16px"], [1, "section-subtitle"], [1, "timeline__list"], ["appScrollReveal", "up", 1, "timeline__item", 3, "revealDelay"], [1, "timeline__marker"], ["aria-hidden", "true", 1, "material-icons"], ["aria-hidden", "true", 1, "timeline__connector"], [1, "timeline__content"], [1, "timeline__step"]], template: function TimelineComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "Como funciona");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2", 4);
      \u0275\u0275text(6, "Do cadastro ao pagamento em 8 passos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, " Um fluxo simples, pensado para operar sem fric\xE7\xE3o no dia a dia do seu estabelecimento. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "ol", 6);
      \u0275\u0275repeaterCreate(10, TimelineComponent_For_11_Template, 12, 6, "li", 7, _forTrack03);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.steps);
    }
  }, dependencies: [ScrollRevealDirective], styles: ["\n\n.timeline__list[_ngcontent-%COMP%] {\n  max-width: 680px;\n  margin-inline: auto;\n  margin-top: 56px;\n}\n.timeline__item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  padding-bottom: 40px;\n}\n.timeline__item[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n.timeline__marker[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-shrink: 0;\n}\n.timeline__marker[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border-strong);\n  color: var(--color-accent-hover);\n  font-size: 24px;\n  z-index: 1;\n}\n.timeline__connector[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 2px;\n  min-height: 40px;\n  background: linear-gradient(var(--color-accent), var(--color-border));\n  margin-top: 4px;\n}\n.timeline__content[_ngcontent-%COMP%] {\n  padding-top: 8px;\n}\n.timeline__content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n}\n.timeline__content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 0.9375rem;\n}\n.timeline__step[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--color-success);\n}\n@media (max-width: 560px) {\n  .timeline__item[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n  .timeline__marker[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    width: 42px;\n    height: 42px;\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=timeline.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimelineComponent, { className: "TimelineComponent", filePath: "src\\app\\features\\landing\\components\\timeline\\timeline.component.ts", lineNumber: 17 });
})();

// src/app/features/landing/components/dashboard-showcase/dashboard-showcase.component.ts
var _c0 = () => [1, 2, 3];
function DashboardShowcaseComponent_For_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "span")(2, "span")(3, "span");
    \u0275\u0275elementEnd();
  }
}
function DashboardShowcaseComponent_For_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 35);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const module_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", module_r1, " ");
  }
}
var DashboardShowcaseComponent = class _DashboardShowcaseComponent {
  modules = [
    "Dashboard",
    "Empresas",
    "Funcion\xE1rios",
    "Mesas",
    "Produtos",
    "Categorias",
    "Estoque",
    "Comandas",
    "Caixa",
    "Relat\xF3rios",
    "Financeiro",
    "Usu\xE1rios",
    "Permiss\xF5es",
    "Auditoria",
    "Configura\xE7\xF5es"
  ];
  static \u0275fac = function DashboardShowcaseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardShowcaseComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardShowcaseComponent, selectors: [["app-dashboard-showcase"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 61, vars: 2, consts: [[1, "dashboard", "section"], [1, "container", "dashboard__inner"], ["appScrollReveal", "up", 1, "dashboard__panel"], [1, "panel"], ["aria-hidden", "true", 1, "panel__sidebar"], [1, "panel__logo"], [1, "panel__nav-item", "panel__nav-item--active"], [1, "panel__nav-item"], [1, "panel__main"], [1, "panel__topbar"], [1, "panel__title-bar"], [1, "panel__avatar"], [1, "panel__cards"], [1, "panel__card"], [1, "panel__chart"], [1, "panel__chart-line"], [1, "panel__bars"], [2, "--h", "40%"], [2, "--h", "65%"], [2, "--h", "50%"], [2, "--h", "82%"], [2, "--h", "70%"], [2, "--h", "92%"], [2, "--h", "60%"], [2, "--h", "75%"], [2, "--h", "88%"], [2, "--h", "55%"], [1, "panel__table"], [1, "panel__row", "panel__row--head"], [1, "panel__row"], ["appScrollReveal", "up", 1, "dashboard__info", 3, "revealDelay"], [1, "eyebrow"], [1, "section-title", 2, "margin-top", "16px"], [1, "section-subtitle"], [1, "dashboard__modules"], ["aria-hidden", "true", 1, "material-icons"]], template: function DashboardShowcaseComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "aside", 4);
      \u0275\u0275element(5, "span", 5)(6, "span", 6)(7, "span", 7)(8, "span", 7)(9, "span", 7)(10, "span", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8)(12, "div", 9);
      \u0275\u0275element(13, "span", 10)(14, "span", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 12)(16, "div", 13)(17, "p");
      \u0275\u0275text(18, "Comandas hoje");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "strong");
      \u0275\u0275text(20, "184");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 13)(22, "p");
      \u0275\u0275text(23, "Ticket m\xE9dio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "strong");
      \u0275\u0275text(25, "R$ 57,80");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 13)(27, "p");
      \u0275\u0275text(28, "Ocupa\xE7\xE3o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "strong");
      \u0275\u0275text(30, "76%");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 14);
      \u0275\u0275element(32, "div", 15);
      \u0275\u0275elementStart(33, "div", 16);
      \u0275\u0275element(34, "span", 17)(35, "span", 18)(36, "span", 19)(37, "span", 20)(38, "span", 21)(39, "span", 22)(40, "span", 23)(41, "span", 24)(42, "span", 25)(43, "span", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 27)(45, "div", 28);
      \u0275\u0275element(46, "span")(47, "span")(48, "span");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(49, DashboardShowcaseComponent_For_50_Template, 4, 0, "div", 29, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(51, "div", 30)(52, "span", 31);
      \u0275\u0275text(53, "Painel administrativo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "h2", 32);
      \u0275\u0275text(55, "Um painel completo para gerenciar toda a opera\xE7\xE3o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "p", 33);
      \u0275\u0275text(57, " Todos os m\xF3dulos que seu restaurante precisa, em uma interface \xFAnica, r\xE1pida e dispon\xEDvel em qualquer dispositivo. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "ul", 34);
      \u0275\u0275repeaterCreate(59, DashboardShowcaseComponent_For_60_Template, 4, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(49);
      \u0275\u0275repeater(\u0275\u0275pureFunction0(1, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 120);
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.modules);
    }
  }, dependencies: [ScrollRevealDirective], styles: ["\n\n.dashboard__inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.2fr 0.8fr;\n  gap: 56px;\n  align-items: center;\n}\n.panel[_ngcontent-%COMP%] {\n  display: flex;\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  overflow: hidden;\n  min-height: 360px;\n}\n.panel__sidebar[_ngcontent-%COMP%] {\n  width: 64px;\n  flex-shrink: 0;\n  background: var(--color-bg-elevated);\n  border-right: 1px solid var(--color-border);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 18px;\n  padding: 18px 0;\n}\n.panel__logo[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 6px;\n  background: var(--gradient-accent);\n  margin-bottom: 12px;\n}\n.panel__nav-item[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 6px;\n  background: var(--color-border);\n}\n.panel__nav-item--active[_ngcontent-%COMP%] {\n  background: var(--color-accent);\n}\n.panel__main[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.panel__topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.panel__title-bar[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 12px;\n  border-radius: 6px;\n  background: var(--color-border);\n}\n.panel__avatar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: var(--gradient-accent);\n}\n.panel__cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}\n.panel__card[_ngcontent-%COMP%] {\n  background: var(--color-bg-elevated);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  padding: 10px;\n}\n.panel__card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n  color: var(--color-text-muted);\n}\n.panel__card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  font-size: 0.9375rem;\n  color: var(--color-text);\n}\n.panel__chart[_ngcontent-%COMP%] {\n  background: var(--color-bg-elevated);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  padding: 14px;\n  position: relative;\n}\n.panel__bars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 6px;\n  height: 70px;\n}\n.panel__bars[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  height: var(--h);\n  background: var(--gradient-accent);\n  border-radius: 3px 3px 0 0;\n  opacity: 0.85;\n}\n.panel__table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.panel__row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr;\n  gap: 8px;\n}\n.panel__row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  height: 10px;\n  border-radius: 4px;\n  background: var(--color-border);\n}\n.panel__row--head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: var(--color-border-strong);\n  opacity: 0.8;\n}\n.dashboard__modules[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px 20px;\n  margin-top: 32px;\n}\n.dashboard__modules[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.9375rem;\n  color: var(--color-text);\n}\n.dashboard__modules[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--color-success);\n}\n@media (max-width: 1080px) {\n  .dashboard__inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 560px) {\n  .panel__sidebar[_ngcontent-%COMP%] {\n    width: 48px;\n  }\n  .panel__cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .dashboard__modules[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=dashboard-showcase.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardShowcaseComponent, { className: "DashboardShowcaseComponent", filePath: "src\\app\\features\\landing\\components\\dashboard-showcase\\dashboard-showcase.component.ts", lineNumber: 11 });
})();

// src/app/features/landing/components/features/features.component.ts
var _forTrack04 = ($index, $item) => $item.label;
function FeaturesComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const \u0275$index_18_r2 = ctx.$index;
    \u0275\u0275property("revealDelay", \u0275$index_18_r2 * 40);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
var FeaturesComponent = class _FeaturesComponent {
  differentials = [
    { icon: "bolt", label: "Muito r\xE1pido" },
    { icon: "cloud", label: "100% Cloud" },
    { icon: "lock", label: "Seguran\xE7a Banc\xE1ria" },
    { icon: "devices", label: "Funciona em qualquer dispositivo" },
    { icon: "insights", label: "Relat\xF3rios Inteligentes" },
    { icon: "credit_card", label: "Integra\xE7\xE3o com pagamentos" },
    { icon: "receipt_long", label: "Emiss\xE3o de documentos fiscais" },
    { icon: "notifications_active", label: "Notifica\xE7\xF5es em tempo real" },
    { icon: "trending_up", label: "Escal\xE1vel" },
    { icon: "rocket_launch", label: "Atualiza\xE7\xF5es autom\xE1ticas" }
  ];
  static \u0275fac = function FeaturesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeaturesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeaturesComponent, selectors: [["app-features"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 0, consts: [["id", "diferenciais", 1, "features", "section"], [1, "container"], ["appScrollReveal", "up", 1, "section-heading", "section-heading--center"], [1, "eyebrow"], [1, "section-title", 2, "margin-top", "16px"], [1, "section-subtitle"], [1, "features__grid"], ["appScrollReveal", "up", 1, "features__item", 3, "revealDelay"], ["aria-hidden", "true", 1, "material-icons"]], template: function FeaturesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "Diferenciais");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2", 4);
      \u0275\u0275text(6, "Tecnologia de ponta para o seu neg\xF3cio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, " Infraestrutura robusta, segura e sempre atualizada \u2014 sem esfor\xE7o t\xE9cnico da sua parte. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275repeaterCreate(10, FeaturesComponent_For_11_Template, 5, 3, "div", 7, _forTrack04);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.differentials);
    }
  }, dependencies: [ScrollRevealDirective], styles: ["\n\n.features__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 20px;\n  margin-top: 48px;\n}\n.features__item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 14px;\n  padding: 28px 16px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  background: var(--color-bg-card);\n  transition: transform var(--transition-base), border-color var(--transition-base);\n}\n.features__item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  border-color: var(--color-accent);\n}\n.features__item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: var(--color-accent-hover);\n}\n.features__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n@media (max-width: 1080px) {\n  .features__grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .features__grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n/*# sourceMappingURL=features.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeaturesComponent, { className: "FeaturesComponent", filePath: "src\\app\\features\\landing\\components\\features\\features.component.ts", lineNumber: 16 });
})();

// src/app/features/landing/components/pricing/pricing.component.ts
function PricingComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 12);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r1, " ");
  }
}
var PricingComponent = class _PricingComponent {
  included = [
    "Usu\xE1rios ilimitados",
    "Mesas ilimitadas",
    "Produtos ilimitados",
    "Empresas (conforme contrato)",
    "Atualiza\xE7\xF5es autom\xE1ticas",
    "Suporte",
    "Dashboard",
    "API",
    "Backup",
    "Seguran\xE7a",
    "Todas as funcionalidades"
  ];
  static \u0275fac = function PricingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PricingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PricingComponent, selectors: [["app-pricing"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 1, consts: [["id", "precos", 1, "pricing", "section"], [1, "container"], ["appScrollReveal", "up", 1, "section-heading", "section-heading--center"], [1, "eyebrow"], [1, "section-title", 2, "margin-top", "16px"], [1, "section-subtitle"], ["appScrollReveal", "up", 1, "pricing__card", "card", 3, "revealDelay"], [1, "pricing__badge"], [1, "pricing__description"], [1, "pricing__included"], ["routerLink", "/criar-conta", "appRipple", "", 1, "btn", "btn--success", "pricing__cta"], [1, "pricing__note"], ["aria-hidden", "true", 1, "material-icons"]], template: function PricingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "Modelo de cobran\xE7a");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2", 4);
      \u0275\u0275text(6, "Um modelo justo para qualquer restaurante");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, " Sem planos complicados. Sem mensalidades. Sem fidelidade. Voc\xEA paga apenas pelas comandas utilizadas. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 6)(10, "div", 7);
      \u0275\u0275text(11, "Pagamento por Uso");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 8);
      \u0275\u0275text(13, " Cada atendimento realizado gera uma pequena taxa de utiliza\xE7\xE3o da plataforma. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "ul", 9);
      \u0275\u0275repeaterCreate(15, PricingComponent_For_16_Template, 4, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "a", 10);
      \u0275\u0275text(18, "Criar minha conta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p", 11)(20, "span", 12);
      \u0275\u0275text(21, "info");
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " Se nenhuma comanda for utilizada, n\xE3o h\xE1 cobran\xE7a de uso da plataforma. ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("revealDelay", 100);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.included);
    }
  }, dependencies: [ScrollRevealDirective, RippleDirective, RouterLink], styles: ["\n\n.pricing__card[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 48px auto 0;\n  padding: 48px;\n  position: relative;\n  text-align: center;\n  border-color: var(--color-accent);\n  box-shadow: var(--shadow-glow);\n  background: var(--gradient-surface), var(--color-bg-card);\n}\n.pricing__badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 8px 20px;\n  border-radius: var(--radius-full);\n  background: var(--gradient-accent);\n  color: #fff;\n  font-weight: 700;\n  font-size: 0.9375rem;\n}\n.pricing__description[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 1.0625rem;\n  color: var(--color-gray);\n}\n.pricing__included[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px 24px;\n  margin-top: 32px;\n  text-align: left;\n}\n.pricing__included[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.9375rem;\n  color: var(--color-text);\n}\n.pricing__included[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--color-success);\n}\n.pricing__cta[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 36px;\n  font-size: 1rem;\n  padding-block: 16px;\n}\n.pricing__note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  margin-top: 20px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.pricing__note[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--color-accent-hover);\n}\n@media (max-width: 640px) {\n  .pricing__card[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n  }\n  .pricing__included[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=pricing.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PricingComponent, { className: "PricingComponent", filePath: "src\\app\\features\\landing\\components\\pricing\\pricing.component.ts", lineNumber: 13 });
})();

// src/app/features/landing/components/comparison/comparison.component.ts
var _forTrack05 = ($index, $item) => $item.others;
var _forTrack1 = ($index, $item) => $item.ours;
function ComparisonComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 8);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r1.others, " ");
  }
}
function ComparisonComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 8);
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r2.ours, " ");
  }
}
var ComparisonComponent = class _ComparisonComponent {
  rows = [
    { others: "Mensalidade fixa", ours: "Pague apenas pelo uso" },
    { others: "Limite de usu\xE1rios", ours: "Usu\xE1rios ilimitados" },
    { others: "Limite de mesas", ours: "Mesas ilimitadas" },
    { others: "Planos diferentes", ours: "Mesmo plano para todos" },
    { others: "Upgrade obrigat\xF3rio", ours: "Sem upgrade" },
    { others: "Cobran\xE7a mesmo sem movimento", ours: "Sem uso, sem cobran\xE7a" }
  ];
  static \u0275fac = function ComparisonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComparisonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComparisonComponent, selectors: [["app-comparison"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 2, consts: [[1, "comparison", "section"], [1, "container"], ["appScrollReveal", "up", 1, "section-heading", "section-heading--center"], [1, "eyebrow"], [1, "section-title", 2, "margin-top", "16px"], [1, "comparison__grid"], ["appScrollReveal", "up", 1, "comparison__col", "comparison__col--bad", "card", 3, "revealDelay"], ["appScrollReveal", "up", 1, "comparison__col", "comparison__col--good", "card", 3, "revealDelay"], ["aria-hidden", "true", 1, "material-icons"]], template: function ComparisonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "Comparativo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2", 4);
      \u0275\u0275text(6, "Veja a diferen\xE7a na pr\xE1tica");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "h3");
      \u0275\u0275text(10, "Outros Sistemas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "ul");
      \u0275\u0275repeaterCreate(12, ComparisonComponent_For_13_Template, 4, 1, "li", null, _forTrack05);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 7)(15, "h3");
      \u0275\u0275text(16, "Comanda \xDAnica");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "ul");
      \u0275\u0275repeaterCreate(18, ComparisonComponent_For_19_Template, 4, 1, "li", null, _forTrack1);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("revealDelay", 80);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.rows);
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 160);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.rows);
    }
  }, dependencies: [ScrollRevealDirective], styles: ["\n\n.comparison__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 24px;\n  margin-top: 48px;\n}\n.comparison__col[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n.comparison__col[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  margin-bottom: 24px;\n}\n.comparison__col[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.comparison__col[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 0.9375rem;\n}\n.comparison__col--bad[_ngcontent-%COMP%] {\n  border-color: var(--color-border);\n}\n.comparison__col--bad[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--color-gray);\n}\n.comparison__col--bad[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n}\n.comparison__col--bad[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #f87171;\n  background: rgba(248, 113, 113, 0.12);\n  border-radius: 50%;\n  padding: 4px;\n  font-size: 16px;\n}\n.comparison__col--good[_ngcontent-%COMP%] {\n  border-color: var(--color-success);\n  box-shadow: var(--shadow-glow);\n}\n.comparison__col--good[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--color-success);\n}\n.comparison__col--good[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: var(--color-text);\n  font-weight: 500;\n}\n.comparison__col--good[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--color-success);\n  background: var(--color-success-bg);\n  border-radius: 50%;\n  padding: 4px;\n  font-size: 16px;\n}\n@media (max-width: 720px) {\n  .comparison__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=comparison.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComparisonComponent, { className: "ComparisonComponent", filePath: "src\\app\\features\\landing\\components\\comparison\\comparison.component.ts", lineNumber: 16 });
})();

// src/app/features/landing/components/testimonials/testimonials.component.ts
var _forTrack06 = ($index, $item) => $item.name;
var _c02 = () => [1, 2, 3, 4, 5];
function TestimonialsComponent_For_15_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "star");
    \u0275\u0275elementEnd();
  }
}
function TestimonialsComponent_For_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 13)(1, "div", 14);
    \u0275\u0275repeaterCreate(2, TestimonialsComponent_For_15_Conditional_0_For_3_Template, 2, 0, "span", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 16)(7, "span", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div")(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "span", 18);
    \u0275\u0275text(15, "Exemplo ilustrativo, n\xE3o representa um cliente real.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(5, _c02));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1('"', t_r1.quote, '"');
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1.initials);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", t_r1.role, " \u2014 ", t_r1.company, "");
  }
}
function TestimonialsComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TestimonialsComponent_For_15_Conditional_0_Template, 16, 6, "article", 13);
  }
  if (rf & 2) {
    const $index_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional($index_r2 === ctx_r2.activeIndex() ? 0 : -1);
  }
}
function TestimonialsComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function TestimonialsComponent_For_21_Template_button_click_0_listener() {
      const \u0275$index_61_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goTo(\u0275$index_61_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_61_r5 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-active", \u0275$index_61_r5 === ctx_r2.activeIndex());
    \u0275\u0275attribute("aria-selected", \u0275$index_61_r5 === ctx_r2.activeIndex())("aria-label", "Ver depoimento " + (\u0275$index_61_r5 + 1));
  }
}
var TestimonialsComponent = class _TestimonialsComponent {
  activeIndex = signal(0);
  testimonials = [
    {
      initials: "JE",
      name: "Jo\xE3o Exemplo",
      role: "Propriet\xE1rio",
      company: "Restaurante Exemplo",
      quote: "Depoimento ilustrativo: desde que trocamos as comandas de papel pelo Comanda \xDAnica, reduzimos erros de pedido e o caixa fecha muito mais r\xE1pido no fim do dia."
    },
    {
      initials: "MD",
      name: "Cliente Demonstrativo",
      role: "Gerente Geral",
      company: "Hamburgueria Modelo",
      quote: "Depoimento ilustrativo: o modelo de pagamento por uso fez total sentido para a sazonalidade do nosso movimento. Nos dias mais fracos, simplesmente pagamos menos."
    },
    {
      initials: "CD",
      name: "Ana Demonstra\xE7\xE3o",
      role: "S\xF3cia-fundadora",
      company: "Bar Ilustrativo",
      quote: "Depoimento ilustrativo: implantamos em uma tarde. Os gar\xE7ons aprenderam a usar o sistema em minutos e os QR Codes nas mesas reduziram a fila no caixa."
    }
  ];
  next() {
    this.activeIndex.update((i) => (i + 1) % this.testimonials.length);
  }
  prev() {
    this.activeIndex.update((i) => (i - 1 + this.testimonials.length) % this.testimonials.length);
  }
  goTo(index) {
    this.activeIndex.set(index);
  }
  static \u0275fac = function TestimonialsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TestimonialsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TestimonialsComponent, selectors: [["app-testimonials"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 1, consts: [[1, "testimonials", "section"], [1, "container"], ["appScrollReveal", "up", 1, "section-heading", "section-heading--center"], [1, "eyebrow"], [1, "section-title", 2, "margin-top", "16px"], [1, "section-subtitle"], ["appScrollReveal", "up", 1, "testimonials__carousel", 3, "revealDelay"], ["type", "button", "aria-label", "Depoimento anterior", 1, "testimonials__nav", "testimonials__nav--prev", 3, "click"], ["aria-hidden", "true", 1, "material-icons"], ["aria-live", "polite", 1, "testimonials__track"], ["type", "button", "aria-label", "Pr\xF3ximo depoimento", 1, "testimonials__nav", "testimonials__nav--next", 3, "click"], ["role", "tablist", "aria-label", "Selecionar depoimento", 1, "testimonials__dots"], ["type", "button", "role", "tab", 3, "is-active"], [1, "testimonials__card", "card"], ["aria-label", "Avalia\xE7\xE3o de 5 de 5 estrelas", 1, "testimonials__stars"], [1, "testimonials__quote"], [1, "testimonials__author"], [1, "testimonials__avatar"], [1, "testimonials__disclaimer"], ["type", "button", "role", "tab", 3, "click"]], template: function TestimonialsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "Depoimentos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2", 4);
      \u0275\u0275text(6, "O que dizem sobre o Comanda \xDAnica");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, " Exemplos ilustrativos de como o Comanda \xDAnica pode transformar a opera\xE7\xE3o do seu estabelecimento. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 6)(10, "button", 7);
      \u0275\u0275listener("click", function TestimonialsComponent_Template_button_click_10_listener() {
        return ctx.prev();
      });
      \u0275\u0275elementStart(11, "span", 8);
      \u0275\u0275text(12, "chevron_left");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 9);
      \u0275\u0275repeaterCreate(14, TestimonialsComponent_For_15_Template, 1, 1, null, null, _forTrack06);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 10);
      \u0275\u0275listener("click", function TestimonialsComponent_Template_button_click_16_listener() {
        return ctx.next();
      });
      \u0275\u0275elementStart(17, "span", 8);
      \u0275\u0275text(18, "chevron_right");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 11);
      \u0275\u0275repeaterCreate(20, TestimonialsComponent_For_21_Template, 1, 4, "button", 12, _forTrack06);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("revealDelay", 80);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.testimonials);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.testimonials);
    }
  }, dependencies: [ScrollRevealDirective], styles: ["\n\n.testimonials__carousel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin-top: 48px;\n}\n.testimonials__track[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 260px;\n}\n.testimonials__card[_ngcontent-%COMP%] {\n  max-width: 680px;\n  margin-inline: auto;\n  padding: 40px;\n  text-align: center;\n  animation: _ngcontent-%COMP%_fade-in var(--transition-slow);\n}\n@keyframes _ngcontent-%COMP%_fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.testimonials__stars[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 4px;\n}\n.testimonials__stars[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #fbbf24;\n}\n.testimonials__quote[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 1.125rem;\n  color: var(--color-text);\n  line-height: 1.6;\n}\n.testimonials__author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  margin-top: 24px;\n}\n.testimonials__author[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--color-text);\n  font-size: 0.9375rem;\n}\n.testimonials__author[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n}\n.testimonials__avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--gradient-accent);\n  color: #fff;\n  font-weight: 700;\n  font-size: 0.875rem;\n}\n.testimonials__disclaimer[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 20px;\n  font-size: 0.6875rem;\n  color: var(--color-text-muted);\n  font-style: italic;\n}\n.testimonials__nav[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  border: 1px solid var(--color-border-strong);\n  background: var(--color-bg-card);\n  color: var(--color-text);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: all var(--transition-fast);\n}\n.testimonials__nav[_ngcontent-%COMP%]:hover {\n  background: var(--color-accent);\n  border-color: var(--color-accent);\n}\n.testimonials__dots[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 24px;\n}\n.testimonials__dots[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--color-border-strong);\n  border: none;\n  cursor: pointer;\n  transition: all var(--transition-fast);\n}\n.testimonials__dots[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%] {\n  width: 22px;\n  border-radius: var(--radius-full);\n  background: var(--color-accent);\n}\n@media (max-width: 640px) {\n  .testimonials__card[_ngcontent-%COMP%] {\n    padding: 28px 20px;\n  }\n  .testimonials__nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=testimonials.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TestimonialsComponent, { className: "TestimonialsComponent", filePath: "src\\app\\features\\landing\\components\\testimonials\\testimonials.component.ts", lineNumber: 19 });
})();

// src/app/features/landing/components/faq/faq.component.ts
var _forTrack07 = ($index, $item) => $item.question;
function FaqComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "h3")(2, "button", 9);
    \u0275\u0275listener("click", function FaqComponent_For_11_Template_button_click_2_listener() {
      const \u0275$index_18_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggle(\u0275$index_18_r2));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 10);
    \u0275\u0275text(5, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 11)(7, "div", 12)(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const \u0275$index_18_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-open", ctx_r2.openIndex() === \u0275$index_18_r2);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "faq-trigger-" + \u0275$index_18_r2);
    \u0275\u0275attribute("aria-expanded", ctx_r2.openIndex() === \u0275$index_18_r2)("aria-controls", "faq-panel-" + \u0275$index_18_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.question, " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("grid-template-rows", ctx_r2.openIndex() === \u0275$index_18_r2 ? "1fr" : "0fr");
    \u0275\u0275property("id", "faq-panel-" + \u0275$index_18_r2);
    \u0275\u0275attribute("aria-labelledby", "faq-trigger-" + \u0275$index_18_r2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.answer);
  }
}
var FaqComponent = class _FaqComponent {
  openIndex = signal(0);
  items = [
    {
      question: "Como funciona?",
      answer: "Voc\xEA cadastra seu estabelecimento, funcion\xE1rios e produtos, imprime os QR Codes das mesas e come\xE7a a receber pedidos digitais em tempo real \u2014 tudo em uma \xFAnica plataforma na nuvem."
    },
    {
      question: "Existe mensalidade?",
      answer: "N\xE3o. O Comanda \xDAnica n\xE3o cobra mensalidade fixa. Voc\xEA paga apenas pelas comandas efetivamente utilizadas no per\xEDodo."
    },
    {
      question: "Como \xE9 feita a cobran\xE7a?",
      answer: "Cada comanda fechada gera uma pequena taxa de utiliza\xE7\xE3o da plataforma. Se n\xE3o houver atendimento, n\xE3o h\xE1 cobran\xE7a."
    },
    {
      question: "Preciso instalar algum programa?",
      answer: "N\xE3o. O sistema \xE9 100% cloud e funciona direto pelo navegador, tanto para a equipe quanto para os clientes que acessam via QR Code."
    },
    {
      question: "Funciona no celular?",
      answer: "Sim. O Comanda \xDAnica \xE9 totalmente responsivo e funciona em celulares, tablets, notebooks e desktops."
    },
    {
      question: "\xC9 poss\xEDvel cancelar quando quiser?",
      answer: "Sim. N\xE3o existe fidelidade ou contrato de perman\xEAncia m\xEDnima \u2014 voc\xEA pode encerrar o uso quando quiser."
    },
    {
      question: "Como funciona o suporte?",
      answer: "Nossa equipe de suporte est\xE1 dispon\xEDvel para ajudar na implanta\xE7\xE3o, d\xFAvidas do dia a dia e quest\xF5es t\xE9cnicas."
    },
    {
      question: "Posso cadastrar v\xE1rios funcion\xE1rios?",
      answer: "Sim, o n\xFAmero de funcion\xE1rios \xE9 ilimitado e voc\xEA pode definir permiss\xF5es diferentes para cada perfil de acesso."
    },
    {
      question: "Existe limite de comandas?",
      answer: "N\xE3o h\xE1 limite de comandas, mesas ou usu\xE1rios. Voc\xEA utiliza o quanto precisar e paga apenas pelo uso real."
    }
  ];
  toggle(index) {
    this.openIndex.update((current) => current === index ? null : index);
  }
  static \u0275fac = function FaqComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FaqComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FaqComponent, selectors: [["app-faq"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 1, consts: [["id", "faq", 1, "faq", "section"], [1, "container"], ["appScrollReveal", "up", 1, "section-heading", "section-heading--center"], [1, "eyebrow"], [1, "section-title", 2, "margin-top", "16px"], [1, "section-subtitle"], ["appScrollReveal", "up", 1, "faq__list", 3, "revealDelay"], [1, "faq__item", 3, "is-open"], [1, "faq__item"], ["type", "button", 1, "faq__trigger", 3, "click", "id"], ["aria-hidden", "true", 1, "material-icons", "faq__chevron"], ["role", "region", 1, "faq__panel", 3, "id"], [1, "faq__panel-inner"]], template: function FaqComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "FAQ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2", 4);
      \u0275\u0275text(6, "Perguntas frequentes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, "Tudo o que voc\xEA precisa saber antes de come\xE7ar.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275repeaterCreate(10, FaqComponent_For_11_Template, 10, 11, "div", 7, _forTrack07);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("revealDelay", 80);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.items);
    }
  }, dependencies: [ScrollRevealDirective], styles: ["\n\n.faq__list[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin: 48px auto 0;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.faq__item[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  background: var(--color-bg-card);\n  transition: border-color var(--transition-base);\n}\n.faq__item.is-open[_ngcontent-%COMP%] {\n  border-color: var(--color-accent);\n}\n.faq__trigger[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 20px 24px;\n  background: none;\n  border: none;\n  color: var(--color-text);\n  font-size: 1rem;\n  font-weight: 600;\n  text-align: left;\n  cursor: pointer;\n}\n.faq__chevron[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  transition: transform var(--transition-base);\n  color: var(--color-accent-hover);\n}\n.faq__item.is-open[_ngcontent-%COMP%]   .faq__chevron[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.faq__panel[_ngcontent-%COMP%] {\n  display: grid;\n  transition: grid-template-rows var(--transition-slow);\n  overflow: hidden;\n}\n.faq__panel-inner[_ngcontent-%COMP%] {\n  min-height: 0;\n  overflow: hidden;\n  padding-inline: 24px;\n}\n.faq__item.is-open[_ngcontent-%COMP%]   .faq__panel-inner[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n.faq__panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: var(--color-gray);\n}\n/*# sourceMappingURL=faq.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FaqComponent, { className: "FaqComponent", filePath: "src\\app\\features\\landing\\components\\faq\\faq.component.ts", lineNumber: 16 });
})();

// src/app/features/landing/components/cta/cta.component.ts
var CtaComponent = class _CtaComponent {
  static \u0275fac = function CtaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CtaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CtaComponent, selectors: [["app-cta"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 0, consts: [[1, "cta"], ["appScrollReveal", "up", 1, "container", "cta__inner"], [1, "cta__actions"], ["routerLink", "/criar-conta", "appRipple", "", 1, "btn", "btn--primary"], ["href", "#contato", "appRipple", "", 1, "btn", "btn--ghost", "cta__ghost"]], template: function CtaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "Pronto para modernizar seu restaurante?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, " Crie sua conta gratuitamente e descubra como eliminar comandas em papel, reduzir filas e controlar seu neg\xF3cio em tempo real. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 2)(7, "a", 3);
      \u0275\u0275text(8, "Criar Conta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "a", 4);
      \u0275\u0275text(10, "Solicitar Demonstra\xE7\xE3o");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [ScrollRevealDirective, RippleDirective, RouterLink], styles: ['\n\n.cta[_ngcontent-%COMP%] {\n  padding-block: var(--section-padding-y);\n  background:\n    linear-gradient(\n      135deg,\n      #16a34a 0%,\n      #22c55e 100%);\n  position: relative;\n  overflow: hidden;\n}\n.cta[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle at 20% 20%,\n      rgba(255, 255, 255, 0.12),\n      transparent 40%),\n    radial-gradient(\n      circle at 80% 80%,\n      rgba(255, 255, 255, 0.1),\n      transparent 40%);\n}\n.cta__inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  text-align: center;\n  max-width: 640px;\n}\n.cta__inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(1.75rem, 3.4vw, 2.5rem);\n  color: #06210f;\n}\n.cta__inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 1.0625rem;\n  color: rgba(6, 33, 15, 0.82);\n}\n.cta__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-top: 36px;\n}\n.cta__ghost[_ngcontent-%COMP%] {\n  color: #06210f;\n  border-color: rgba(6, 33, 15, 0.3);\n}\n.cta__ghost[_ngcontent-%COMP%]:hover {\n  background: rgba(6, 33, 15, 0.08);\n  border-color: #06210f;\n}\n/*# sourceMappingURL=cta.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CtaComponent, { className: "CtaComponent", filePath: "src\\app\\features\\landing\\components\\cta\\cta.component.ts", lineNumber: 13 });
})();

// src/app/features/landing/pages/home/home.component.ts
var HomeComponent = class _HomeComponent {
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 0, consts: [["id", "main-content"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-header");
      \u0275\u0275elementStart(1, "main", 0);
      \u0275\u0275element(2, "app-hero")(3, "app-value-proposal")(4, "app-benefits")(5, "app-timeline")(6, "app-dashboard-showcase")(7, "app-features")(8, "app-pricing")(9, "app-comparison")(10, "app-testimonials")(11, "app-faq")(12, "app-cta");
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "app-footer");
    }
  }, dependencies: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ValueProposalComponent,
    BenefitsComponent,
    TimelineComponent,
    DashboardShowcaseComponent,
    FeaturesComponent,
    PricingComponent,
    ComparisonComponent,
    TestimonialsComponent,
    FaqComponent,
    CtaComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\features\\landing\\pages\\home\\home.component.ts", lineNumber: 36 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-6UZUOPYM.js.map
