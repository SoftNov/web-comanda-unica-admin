import {
  RippleDirective
} from "./chunk-OR27G5EP.js";
import {
  RouterLink,
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
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NIMDKY6Z.js";

// src/app/shared/components/header/header.component.ts
var _forTrack0 = ($index, $item) => $item.fragment;
function HeaderComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("fragment", link_r1.fragment);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(link_r1.label);
  }
}
function HeaderComponent_Conditional_22_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 16);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_22_For_3_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.closeMenu());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("fragment", link_r5.fragment);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(link_r5.label);
  }
}
function HeaderComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 11)(1, "ul");
    \u0275\u0275repeaterCreate(2, HeaderComponent_Conditional_22_For_3_Template, 3, 2, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13)(5, "a", 14);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_22_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeMenu());
    });
    \u0275\u0275text(6, "Entrar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 15);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_22_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeMenu());
    });
    \u0275\u0275text(8, "Criar Conta");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.navLinks);
  }
}
var HeaderComponent = class _HeaderComponent {
  isScrolled = signal(false);
  isMenuOpen = signal(false);
  navLinks = [
    { label: "Recursos", fragment: "recursos" },
    { label: "Como Funciona", fragment: "como-funciona" },
    { label: "Diferenciais", fragment: "diferenciais" },
    { label: "Pre\xE7os", fragment: "precos" },
    { label: "FAQ", fragment: "faq" },
    { label: "Contato", fragment: "contato" }
  ];
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 12);
  }
  toggleMenu() {
    this.isMenuOpen.update((open) => !open);
  }
  closeMenu() {
    this.isMenuOpen.set(false);
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("scroll", function HeaderComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, false, \u0275\u0275resolveWindow);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 7, consts: [["role", "banner", 1, "header"], [1, "container", "header__inner"], ["routerLink", "/", "aria-label", "Comanda \xDAnica \u2014 p\xE1gina inicial", 1, "header__logo", 3, "click"], ["aria-hidden", "true", 1, "header__logo-mark"], [1, "header__logo-dot"], [1, "header__logo-text"], ["aria-label", "Navega\xE7\xE3o principal", 1, "header__nav"], [1, "header__actions"], ["routerLink", "/entrar", "appRipple", "", 1, "btn", "btn--ghost", "btn--sm"], ["routerLink", "/criar-conta", "appRipple", "", 1, "btn", "btn--primary", "btn--sm"], ["type", "button", "aria-controls", "mobile-nav", 1, "header__burger", 3, "click"], ["id", "mobile-nav", "aria-label", "Navega\xE7\xE3o m\xF3vel", 1, "header__mobile-nav"], ["routerLink", "/", 3, "fragment"], [1, "header__mobile-actions"], ["routerLink", "/entrar", 1, "btn", "btn--ghost", 3, "click"], ["routerLink", "/criar-conta", 1, "btn", "btn--primary", 3, "click"], ["routerLink", "/", 3, "click", "fragment"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_2_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275elementStart(3, "span", 3);
      \u0275\u0275element(4, "span", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 5);
      \u0275\u0275text(6, "Comanda");
      \u0275\u0275elementStart(7, "strong");
      \u0275\u0275text(8, "\xDAnica");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "nav", 6)(10, "ul");
      \u0275\u0275repeaterCreate(11, HeaderComponent_For_12_Template, 3, 2, "li", null, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 7)(14, "a", 8);
      \u0275\u0275text(15, "Entrar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "a", 9);
      \u0275\u0275text(17, "Criar Conta");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "button", 10);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_18_listener() {
        return ctx.toggleMenu();
      });
      \u0275\u0275element(19, "span")(20, "span")(21, "span");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(22, HeaderComponent_Conditional_22_Template, 9, 0, "nav", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("header--scrolled", ctx.isScrolled());
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.navLinks);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("is-open", ctx.isMenuOpen());
      \u0275\u0275attribute("aria-expanded", ctx.isMenuOpen())("aria-label", ctx.isMenuOpen() ? "Fechar menu de navega\xE7\xE3o" : "Abrir menu de navega\xE7\xE3o");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.isMenuOpen() ? 22 : -1);
    }
  }, dependencies: [RippleDirective, RouterLink], styles: ["\n\n.header[_ngcontent-%COMP%] {\n  position: fixed;\n  inset-inline: 0;\n  top: 0;\n  z-index: 100;\n  background: transparent;\n  border-bottom: 1px solid transparent;\n  transition:\n    background var(--transition-base),\n    border-color var(--transition-base),\n    box-shadow var(--transition-base);\n}\n.header--scrolled[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.72);\n  backdrop-filter: blur(14px);\n  -webkit-backdrop-filter: blur(14px);\n  border-bottom-color: var(--color-border);\n  box-shadow: var(--shadow-sm);\n}\n.header--scrolled[_ngcontent-%COMP%]   .header__inner[_ngcontent-%COMP%] {\n  height: 64px;\n}\n.header__inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 84px;\n  transition: height var(--transition-base);\n}\n.header__logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.125rem;\n  color: var(--color-text);\n  font-weight: 600;\n}\n.header__logo-mark[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 9px;\n  background: var(--gradient-accent);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.header__logo-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #fff;\n}\n.header__logo-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--color-accent-hover);\n  font-weight: 800;\n}\n.header__nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n}\n.header__nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 500;\n  color: var(--color-gray);\n  transition: color var(--transition-fast);\n}\n.header__nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--color-text);\n}\n.header__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header__burger[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  gap: 5px;\n  width: 40px;\n  height: 40px;\n  background: transparent;\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n}\n.header__burger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 2px;\n  margin-inline: auto;\n  width: 18px;\n  background: var(--color-text);\n  transition: transform var(--transition-fast), opacity var(--transition-fast);\n}\n.header__burger.is-open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  transform: translateY(7px) rotate(45deg);\n}\n.header__burger.is-open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0;\n}\n.header__burger.is-open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  transform: translateY(-7px) rotate(-45deg);\n}\n.header__mobile-nav[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.98);\n  backdrop-filter: blur(14px);\n  border-top: 1px solid var(--color-border);\n  padding: 20px 24px 28px;\n}\n.header__mobile-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 20px;\n}\n.header__mobile-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 12px 4px;\n  font-size: 1rem;\n  color: var(--color-gray);\n  border-bottom: 1px solid var(--color-border);\n}\n.header__mobile-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.header__mobile-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (max-width: 960px) {\n  .header__nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header__actions[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header__burger[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=header.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src\\app\\shared\\components\\header\\header.component.ts", lineNumber: 17 });
})();

// src/app/shared/components/social-icon/social-icon.component.ts
function SocialIconComponent_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 1);
  }
}
function SocialIconComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 2);
  }
}
function SocialIconComponent_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 3);
  }
}
function SocialIconComponent_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 4);
  }
}
var SocialIconComponent = class _SocialIconComponent {
  name;
  static \u0275fac = function SocialIconComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SocialIconComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SocialIconComponent, selectors: [["app-social-icon"]], inputs: { name: "name" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [["viewBox", "0 0 24 24", "width", "20", "height", "20", "fill", "currentColor", "aria-hidden", "true"], ["d", "M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 2.03.25 2.75.53a5.6 5.6 0 0 1 2 1.32 5.6 5.6 0 0 1 1.32 2c.28.72.48 1.58.53 2.75.06 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.05 1.17-.25 2.03-.53 2.75a5.6 5.6 0 0 1-1.32 2 5.6 5.6 0 0 1-2 1.32c-.72.28-1.58.48-2.75.53-1.25.06-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-2.03-.25-2.75-.53a5.6 5.6 0 0 1-2-1.32 5.6 5.6 0 0 1-1.32-2c-.28-.72-.48-1.58-.53-2.75C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.05-1.17.25-2.03.53-2.75a5.6 5.6 0 0 1 1.32-2 5.6 5.6 0 0 1 2-1.32c.72-.28 1.58-.48 2.75-.53C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.52 0-4.76.07-.95.04-1.47.2-1.81.34-.46.18-.78.39-1.12.73-.34.34-.55.66-.73 1.12-.14.34-.3.86-.34 1.81-.06 1.24-.07 1.6-.07 4.76s0 3.52.07 4.76c.04.95.2 1.47.34 1.81.18.46.39.78.73 1.12.34.34.66.55 1.12.73.34.14.86.3 1.81.34 1.24.06 1.6.07 4.76.07s3.52 0 4.76-.07c.95-.04 1.47-.2 1.81-.34.46-.18.78-.39 1.12-.73.34-.34.55-.66.73-1.12.14-.34.3-.86.34-1.81.06-1.24.07-1.6.07-4.76s0-3.52-.07-4.76c-.04-.95-.2-1.47-.34-1.81a2.9 2.9 0 0 0-.73-1.12 2.9 2.9 0 0 0-1.12-.73c-.34-.14-.86-.3-1.81-.34-1.24-.06-1.6-.07-4.76-.07Zm0 3.6a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8Zm0 1.8a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2Zm4.6-2.03a1.03 1.03 0 1 1 0 2.06 1.03 1.03 0 0 1 0-2.06Z"], ["d", "M13.5 21v-7.6h2.55l.38-2.96h-2.93V8.53c0-.86.24-1.44 1.47-1.44h1.57V4.46A21 21 0 0 0 14.35 4c-2.26 0-3.8 1.38-3.8 3.9v2.54H8v2.96h2.55V21h2.95Z"], ["d", "M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.5 8.75h3.4V20.5h-3.4V8.75Zm6.13 0h3.26v1.6h.05c.45-.86 1.56-1.77 3.22-1.77 3.44 0 4.08 2.27 4.08 5.22v6.7h-3.4v-5.94c0-1.42-.03-3.24-1.98-3.24-1.98 0-2.28 1.55-2.28 3.14v6.04h-3.4V8.75Z"], ["d", "M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47a8.9 8.9 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.47s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35ZM12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.08L2 22l5.06-1.33A9.96 9.96 0 0 0 12.02 22C17.53 22 22 17.52 22 12S17.53 2 12.02 2Zm0 18.2a8.16 8.16 0 0 1-4.17-1.14l-.3-.18-3 .79.8-2.92-.2-.3A8.17 8.17 0 1 1 20.2 12a8.2 8.2 0 0 1-8.18 8.2Z"]], template: function SocialIconComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(0, "svg", 0);
      \u0275\u0275template(1, SocialIconComponent_Case_1_Template, 1, 0, ":svg:path", 1)(2, SocialIconComponent_Case_2_Template, 1, 0, ":svg:path", 2)(3, SocialIconComponent_Case_3_Template, 1, 0, ":svg:path", 3)(4, SocialIconComponent_Case_4_Template, 1, 0, ":svg:path", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_0_0 = ctx.name) === "instagram" ? 1 : tmp_0_0 === "facebook" ? 2 : tmp_0_0 === "linkedin" ? 3 : tmp_0_0 === "whatsapp" ? 4 : -1);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SocialIconComponent, { className: "SocialIconComponent", filePath: "src\\app\\shared\\components\\social-icon\\social-icon.component.ts", lineNumber: 10 });
})();

// src/app/shared/components/footer/footer.component.ts
var _forTrack02 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.title;
function FooterComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 10);
    \u0275\u0275element(2, "app-social-icon", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const social_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("href", social_r1.href, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", social_r1.label);
    \u0275\u0275advance();
    \u0275\u0275property("name", social_r1.icon);
  }
}
function FooterComponent_For_16_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", link_r2.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(link_r2.label);
  }
}
function FooterComponent_For_16_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("fragment", link_r2.fragment);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(link_r2.label);
  }
}
function FooterComponent_For_16_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275template(1, FooterComponent_For_16_For_5_Conditional_1_Template, 2, 2, "a", 12)(2, FooterComponent_For_16_For_5_Conditional_2_Template, 2, 2, "a", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(link_r2.route ? 1 : 2);
  }
}
function FooterComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul");
    \u0275\u0275repeaterCreate(4, FooterComponent_For_16_For_5_Template, 3, 1, "li", null, _forTrack02);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r3.links);
  }
}
var FooterComponent = class _FooterComponent {
  year = (/* @__PURE__ */ new Date()).getFullYear();
  groups = [
    {
      title: "Produto",
      links: [
        { label: "Recursos", fragment: "recursos" },
        { label: "Como Funciona", fragment: "como-funciona" },
        { label: "Pre\xE7os", fragment: "precos" }
      ]
    },
    {
      title: "Empresa",
      links: [
        { label: "Contato", fragment: "contato" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Pol\xEDtica de Privacidade", route: "/politica-de-privacidade" },
        { label: "Termos de Uso", route: "/termos-de-uso" }
      ]
    }
  ];
  socials = [
    { label: "Instagram", icon: "instagram", href: "#" },
    { label: "Facebook", icon: "facebook", href: "#" },
    { label: "LinkedIn", icon: "linkedin", href: "#" },
    { label: "WhatsApp", icon: "whatsapp", href: "#" }
  ];
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 1, consts: [["id", "contato", "role", "contentinfo", 1, "footer"], [1, "container", "footer__inner"], [1, "footer__brand"], ["routerLink", "/", "aria-label", "Comanda \xDAnica \u2014 p\xE1gina inicial", 1, "footer__logo"], ["aria-hidden", "true", 1, "footer__logo-mark"], [1, "footer__tagline"], [1, "footer__socials"], [1, "footer__groups"], [1, "footer__group"], [1, "footer__bottom", "container"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [3, "name"], [3, "routerLink"], ["routerLink", "/", 3, "fragment"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
      \u0275\u0275element(4, "span", 4);
      \u0275\u0275elementStart(5, "span");
      \u0275\u0275text(6, "Comanda");
      \u0275\u0275elementStart(7, "strong");
      \u0275\u0275text(8, "\xDAnica");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "p", 5);
      \u0275\u0275text(10, " A comanda digital que faz seu restaurante crescer sem custos fixos. Pague apenas pelas comandas que voc\xEA usa. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "ul", 6);
      \u0275\u0275repeaterCreate(12, FooterComponent_For_13_Template, 3, 3, "li", null, _forTrack02);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 7);
      \u0275\u0275repeaterCreate(15, FooterComponent_For_16_Template, 6, 1, "div", 8, _forTrack1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 9)(18, "p");
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.socials);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.groups);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("\xA9 ", ctx.year, " Comanda \xDAnica. Todos os direitos reservados.");
    }
  }, dependencies: [SocialIconComponent, RouterLink], styles: ["\n\n.footer[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--color-border);\n  background: var(--color-primary);\n  padding-top: 64px;\n}\n.footer__inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.4fr 2fr;\n  gap: 48px;\n  padding-bottom: 48px;\n}\n.footer__logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.footer__logo[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--color-accent-hover);\n  font-weight: 800;\n}\n.footer__logo-mark[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  background: var(--gradient-accent);\n}\n.footer__tagline[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  max-width: 360px;\n  color: var(--color-gray);\n  font-size: 0.9375rem;\n}\n.footer__socials[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 24px;\n}\n.footer__socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  border: 1px solid var(--color-border-strong);\n  color: var(--color-gray);\n  transition: all var(--transition-fast);\n}\n.footer__socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--color-text);\n  background: var(--color-accent);\n  border-color: var(--color-accent);\n  transform: translateY(-3px);\n}\n.footer__groups[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 32px;\n}\n.footer__group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: var(--color-text);\n  margin-bottom: 16px;\n}\n.footer__group[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.footer__group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: var(--color-gray);\n  transition: color var(--transition-fast);\n}\n.footer__group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--color-accent-hover);\n}\n.footer__bottom[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--color-border);\n  padding-block: 24px;\n}\n.footer__bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .footer__inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .footer__groups[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .footer__groups[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 24px;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src\\app\\shared\\components\\footer\\footer.component.ts", lineNumber: 25 });
})();

export {
  HeaderComponent,
  FooterComponent
};
//# sourceMappingURL=chunk-HYTJPSMU.js.map
