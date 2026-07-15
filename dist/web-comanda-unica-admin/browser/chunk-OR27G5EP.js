import {
  ElementRef,
  inject,
  ɵɵdefineDirective,
  ɵɵlistener
} from "./chunk-NIMDKY6Z.js";

// src/app/shared/directives/ripple.directive.ts
var RippleDirective = class _RippleDirective {
  el = inject(ElementRef);
  onClick(event) {
    const host = this.el.nativeElement;
    const rect = host.getBoundingClientRect();
    const diameter = Math.max(rect.width, rect.height);
    const radius = diameter / 2;
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - rect.left - radius}px`;
    ripple.style.top = `${event.clientY - rect.top - radius}px`;
    host.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  }
  static \u0275fac = function RippleDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RippleDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _RippleDirective, selectors: [["", "appRipple", ""]], hostAttrs: [2, "position", "relative", "overflow", "hidden"], hostBindings: function RippleDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function RippleDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
  }, standalone: true });
};

export {
  RippleDirective
};
//# sourceMappingURL=chunk-OR27G5EP.js.map
