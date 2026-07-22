import {
  AuthService
} from "./chunk-TA4FF7VW.js";
import "./chunk-MZ4AGMPU.js";
import {
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4IFGYJZR.js";

// src/app/features/admin/pages/dashboard/dashboard.component.ts
var DashboardComponent = class _DashboardComponent {
  authService = inject(AuthService);
  currentUser = this.authService.currentUser;
  selectedCompany = this.authService.selectedCompany;
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-admin-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 34, vars: 2, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "stat-grid"], [1, "card", "stat-card"], ["aria-hidden", "true", 1, "material-icons", "stat-card__icon"], [1, "stat-card__label"], [1, "stat-card__value"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "span", 5);
      \u0275\u0275text(8, "receipt_long");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 6);
      \u0275\u0275text(10, "Comandas abertas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span", 7);
      \u0275\u0275text(12, "\u2014");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 4)(14, "span", 5);
      \u0275\u0275text(15, "table_bar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span", 6);
      \u0275\u0275text(17, "Mesas ocupadas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 7);
      \u0275\u0275text(19, "\u2014");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 4)(21, "span", 5);
      \u0275\u0275text(22, "payments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span", 6);
      \u0275\u0275text(24, "Faturamento hoje");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span", 7);
      \u0275\u0275text(26, "\u2014");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 4)(28, "span", 5);
      \u0275\u0275text(29, "groups");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span", 6);
      \u0275\u0275text(31, "Funcion\xE1rios ativos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "span", 7);
      \u0275\u0275text(33, "\u2014");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Ol\xE1, ", (tmp_0_0 = ctx.currentUser()) == null ? null : tmp_0_0.fullName == null ? null : (tmp_0_0 = tmp_0_0.fullName.split(" ")) == null ? null : tmp_0_0[0], " \u{1F44B}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" Este \xE9 o painel administrativo de ", (tmp_1_0 = ctx.selectedCompany()) == null ? null : tmp_1_0.companyName, ". ");
    }
  }, styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n}\n.stat-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n}\n@media (max-width: 1024px) {\n  .stat-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 560px) {\n  .stat-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 24px;\n}\n.stat-card__icon[_ngcontent-%COMP%] {\n  color: var(--color-accent-hover);\n  font-size: 22px;\n}\n.stat-card__label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n.stat-card__value[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\features\\admin\\pages\\dashboard\\dashboard.component.ts", lineNumber: 10 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-YGNP2QPT.js.map
