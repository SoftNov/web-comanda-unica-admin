import {
  __spreadProps,
  __spreadValues,
  computed,
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
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-MHTOAZDV.js";

// src/app/shared/components/line-chart/line-chart.component.ts
var _c0 = ["svgRoot"];
var _forTrack0 = ($index, $item) => $item.date;
var _forTrack1 = ($index, $item) => $item.label + $item.y;
function LineChartComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 10);
    \u0275\u0275element(2, "span", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 10);
    \u0275\u0275element(5, "span", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.primaryLabel, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.comparisonLabel, " ");
  }
}
function LineChartComponent_Conditional_16_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.comparisonLabel);
  }
}
function LineChartComponent_Conditional_16_For_11_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(row_r2.comparisonAmount));
  }
}
function LineChartComponent_Conditional_16_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, LineChartComponent_Conditional_16_For_11_Conditional_5_Template, 2, 1, "td");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatFullDate(row_r2.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(row_r2.amount));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasComparison() ? 5 : -1);
  }
}
function LineChartComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "table", 13)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, LineChartComponent_Conditional_16_Conditional_8_Template, 2, 1, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "tbody");
    \u0275\u0275repeaterCreate(10, LineChartComponent_Conditional_16_For_11_Template, 6, 3, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.hasComparison() ? ctx_r0.primaryLabel : "Faturamento");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasComparison() ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.tableRows());
  }
}
function LineChartComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "Sem dados no per\xEDodo selecionado.");
    \u0275\u0275elementEnd();
  }
}
function LineChartComponent_Conditional_18_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "line", 16);
    \u0275\u0275elementStart(1, "text", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tick_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("x1", ctx_r0.padding.left)("x2", ctx_r0.viewWidth - ctx_r0.padding.right)("y1", tick_r4.y)("y2", tick_r4.y);
    \u0275\u0275advance();
    \u0275\u0275attribute("x", ctx_r0.padding.left - 8)("y", tick_r4.y);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tick_r4.label, " ");
  }
}
function LineChartComponent_Conditional_18_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "text", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tick_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("x", tick_r5.x)("y", ctx_r0.height - 8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatShortDate(tick_r5.date), " ");
  }
}
function LineChartComponent_Conditional_18_Conditional_6_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 21);
  }
  if (rf & 2) {
    let tmp_13_0;
    const bar_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("line-chart__bar--hovered", ctx_r0.hoveredIndex() !== null && ((tmp_13_0 = ctx_r0.hoveredBar()) == null ? null : tmp_13_0.date) === bar_r6.date);
    \u0275\u0275attribute("d", bar_r6.path);
  }
}
function LineChartComponent_Conditional_18_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 19);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("d", ctx_r0.comparisonLinePath());
  }
}
function LineChartComponent_Conditional_18_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "text", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const last_r7 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("x", last_r7.x)("y", last_r7.y - 8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatCurrency(last_r7.amount), " ");
  }
}
function LineChartComponent_Conditional_18_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, LineChartComponent_Conditional_18_Conditional_6_For_1_Template, 1, 3, ":svg:path", 18, _forTrack0);
    \u0275\u0275template(2, LineChartComponent_Conditional_18_Conditional_6_Conditional_2_Template, 1, 1, ":svg:path", 19)(3, LineChartComponent_Conditional_18_Conditional_6_Conditional_3_Template, 2, 3, ":svg:text", 20);
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r0.barRects());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.hasComparison() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_5_0 = ctx_r0.lastPoint()) ? 3 : -1, tmp_5_0);
  }
}
function LineChartComponent_Conditional_18_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 19);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("d", ctx_r0.comparisonLinePath());
  }
}
function LineChartComponent_Conditional_18_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 24);
    \u0275\u0275elementStart(1, "text", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const last_r8 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("cx", last_r8.x)("cy", last_r8.y);
    \u0275\u0275advance();
    \u0275\u0275attribute("x", last_r8.x + 8)("y", last_r8.y + 4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatCurrency(last_r8.amount), " ");
  }
}
function LineChartComponent_Conditional_18_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 22)(1, "path", 23);
    \u0275\u0275template(2, LineChartComponent_Conditional_18_Conditional_7_Conditional_2_Template, 1, 1, ":svg:path", 19)(3, LineChartComponent_Conditional_18_Conditional_7_Conditional_3_Template, 3, 5);
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("d", ctx_r0.areaPath());
    \u0275\u0275advance();
    \u0275\u0275attribute("d", ctx_r0.linePath());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasComparison() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_6_0 = ctx_r0.lastPoint()) ? 3 : -1, tmp_6_0);
  }
}
function LineChartComponent_Conditional_18_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 28);
  }
  if (rf & 2) {
    const hoveredComparison_r9 = ctx;
    \u0275\u0275attribute("cx", hoveredComparison_r9.x)("cy", hoveredComparison_r9.y);
  }
}
function LineChartComponent_Conditional_18_Conditional_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "text", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "text", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "text", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "text", 33);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const hovered_r10 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.primaryLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(hovered_r10.amount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.formatCurrency((tmp_7_0 = (tmp_7_0 = ctx_r0.hoveredComparisonPoint()) == null ? null : tmp_7_0.amount) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : 0), " \xB7 ", ctx_r0.comparisonLabel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatFullDate(hovered_r10.date));
  }
}
function LineChartComponent_Conditional_18_Conditional_8_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "text", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "text", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const hovered_r10 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.formatCurrency(hovered_r10.amount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatFullDate(hovered_r10.date));
  }
}
function LineChartComponent_Conditional_18_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "line", 26)(1, "circle", 27);
    \u0275\u0275template(2, LineChartComponent_Conditional_18_Conditional_8_Conditional_2_Template, 1, 2, ":svg:circle", 28);
    \u0275\u0275elementStart(3, "g");
    \u0275\u0275element(4, "rect", 29);
    \u0275\u0275template(5, LineChartComponent_Conditional_18_Conditional_8_Conditional_5_Template, 8, 5)(6, LineChartComponent_Conditional_18_Conditional_8_Conditional_6_Template, 4, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    const hovered_r10 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("x1", hovered_r10.x)("x2", hovered_r10.x)("y1", ctx_r0.padding.top)("y2", ctx_r0.height - ctx_r0.padding.bottom);
    \u0275\u0275advance();
    \u0275\u0275attribute("cx", hovered_r10.x)("cy", hovered_r10.y);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_10_0 = ctx_r0.hoveredComparisonPoint()) ? 2 : -1, tmp_10_0);
    \u0275\u0275advance();
    \u0275\u0275attribute("transform", "translate(" + ctx_r0.tooltipX(hovered_r10.x) + ", " + ctx_r0.padding.top + ")");
    \u0275\u0275advance();
    \u0275\u0275attribute("height", ctx_r0.hasComparison() ? 56 : 40);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasComparison() ? 5 : 6);
  }
}
function LineChartComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 14, 0);
    \u0275\u0275listener("pointermove", function LineChartComponent_Conditional_18_Template_svg_pointermove_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPointerMove($event));
    })("pointerleave", function LineChartComponent_Conditional_18_Template_svg_pointerleave_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPointerLeave());
    });
    \u0275\u0275repeaterCreate(2, LineChartComponent_Conditional_18_For_3_Template, 3, 7, null, null, _forTrack1);
    \u0275\u0275repeaterCreate(4, LineChartComponent_Conditional_18_For_5_Template, 2, 3, ":svg:text", 15, _forTrack0);
    \u0275\u0275template(6, LineChartComponent_Conditional_18_Conditional_6_Template, 4, 2)(7, LineChartComponent_Conditional_18_Conditional_7_Template, 4, 4)(8, LineChartComponent_Conditional_18_Conditional_8_Template, 7, 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r0.height, "px");
    \u0275\u0275attribute("viewBox", "0 0 " + ctx_r0.viewWidth + " " + ctx_r0.height);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.yTicks());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.xTicks());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.viewMode() === "bar" ? 6 : 7);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_7_0 = ctx_r0.hoveredPoint()) ? 8 : -1, tmp_7_0);
  }
}
var VIEW_WIDTH = 800;
var PADDING = { top: 20, right: 60, bottom: 32, left: 64 };
var MAX_X_LABELS = 6;
var MAX_BAR_WIDTH = 24;
var BAR_GAP = 2;
var BAR_RADIUS = 4;
var LineChartComponent = class _LineChartComponent {
  svgRoot;
  height = 260;
  set points(value) {
    this._points.set(value ?? []);
  }
  // Série de comparação opcional (ex: "líquido recebido" sobre "faturado") — mesma escala e mesmos
  // dias da série principal. Quando presente, o gráfico ganha legenda e o tooltip mostra os dois
  // valores. Renderizada como linha simples (sem área/barras).
  set comparisonPoints(value) {
    this._comparison.set(value ?? []);
  }
  primaryLabel = "Faturado";
  comparisonLabel = "L\xEDquido recebido";
  _points = signal([]);
  _comparison = signal([]);
  points$ = computed(() => this._points());
  comparison$ = computed(() => this._comparison());
  hasComparison = computed(() => this._comparison().length > 0);
  // Linhas da view em tabela: valor principal + (quando houver) valor de comparação do mesmo dia.
  tableRows = computed(() => this._points().map((point, index) => ({
    date: point.date,
    amount: point.amount,
    comparisonAmount: this._comparison()[index]?.amount ?? 0
  })));
  hoveredIndex = signal(null);
  viewMode = signal("line");
  viewWidth = VIEW_WIDTH;
  padding = PADDING;
  currencyFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
  compactCurrencyFormatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    notation: "compact",
    maximumFractionDigits: 1
  });
  shortDateFormatter = new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "2-digit" });
  fullDateFormatter = new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
  maxAmount = computed(() => {
    const max = Math.max(0, ...this._points().map((point) => point.amount), ...this._comparison().map((point) => point.amount));
    return max === 0 ? 1 : max * 1.15;
  });
  plotWidth = computed(() => this.viewWidth - PADDING.left - PADDING.right);
  plotHeight = computed(() => this.height - PADDING.top - PADDING.bottom);
  plotted = computed(() => {
    const points = this._points();
    const n = points.length;
    const width = this.plotWidth();
    const heightPx = this.plotHeight();
    const max = this.maxAmount();
    return points.map((point, index) => __spreadProps(__spreadValues({}, point), {
      x: PADDING.left + (n <= 1 ? width / 2 : index / (n - 1) * width),
      y: PADDING.top + heightPx - point.amount / max * heightPx
    }));
  });
  linePath = computed(() => {
    const pts = this.plotted();
    return pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(" ");
  });
  // Linha de comparação: reaproveita as posições x da série principal (mesmos dias), só o y muda.
  comparisonPlotted = computed(() => {
    const comparison = this._comparison();
    const primary = this.plotted();
    const heightPx = this.plotHeight();
    const max = this.maxAmount();
    return comparison.map((point, index) => __spreadProps(__spreadValues({}, point), {
      x: primary[index]?.x ?? PADDING.left,
      y: PADDING.top + heightPx - point.amount / max * heightPx
    }));
  });
  comparisonLinePath = computed(() => {
    const pts = this.comparisonPlotted();
    return pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(" ");
  });
  hoveredComparisonPoint = computed(() => {
    const index = this.hoveredIndex();
    if (index === null) {
      return null;
    }
    return this.comparisonPlotted()[index] ?? null;
  });
  areaPath = computed(() => {
    const pts = this.plotted();
    if (pts.length === 0) {
      return "";
    }
    const baseline = PADDING.top + this.plotHeight();
    const segments = pts.map((p) => `L${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(" ");
    const last = pts[pts.length - 1];
    return `M${pts[0].x.toFixed(2)},${baseline.toFixed(2)} ${segments} L${last.x.toFixed(2)},${baseline.toFixed(2)} Z`;
  });
  yTicks = computed(() => {
    const max = this.maxAmount();
    const heightPx = this.plotHeight();
    const steps = 4;
    return Array.from({ length: steps + 1 }, (_, i) => {
      const fraction = i / steps;
      return {
        y: PADDING.top + heightPx - fraction * heightPx,
        label: this.compactCurrencyFormatter.format(max * fraction)
      };
    });
  });
  xTicks = computed(() => {
    const pts = this.plotted();
    if (pts.length === 0) {
      return [];
    }
    const step = Math.max(1, Math.ceil(pts.length / MAX_X_LABELS));
    const ticks = pts.filter((_, index) => index % step === 0);
    const last = pts[pts.length - 1];
    if (ticks[ticks.length - 1] !== last) {
      ticks.push(last);
    }
    return ticks;
  });
  hoveredPoint = computed(() => {
    const index = this.hoveredIndex();
    if (index === null) {
      return null;
    }
    return this.plotted()[index] ?? null;
  });
  lastPoint = computed(() => {
    const pts = this.plotted();
    return pts.length > 0 ? pts[pts.length - 1] : null;
  });
  barRects = computed(() => {
    const pts = this.plotted();
    const n = pts.length;
    if (n === 0) {
      return [];
    }
    const baseline = PADDING.top + this.plotHeight();
    const slot = n <= 1 ? this.plotWidth() : this.plotWidth() / (n - 1);
    const width = Math.max(3, Math.min(MAX_BAR_WIDTH, slot - BAR_GAP));
    return pts.map((point) => {
      const barX = point.x - width / 2;
      const barY = point.y;
      const barHeight = Math.max(0, baseline - barY);
      const radius = Math.min(BAR_RADIUS, width / 2, barHeight);
      const path = barHeight <= 0 ? "" : `M${barX},${baseline} L${barX},${(barY + radius).toFixed(2)} A${radius},${radius} 0 0 1 ${(barX + radius).toFixed(2)},${barY.toFixed(2)} L${(barX + width - radius).toFixed(2)},${barY.toFixed(2)} A${radius},${radius} 0 0 1 ${(barX + width).toFixed(2)},${(barY + radius).toFixed(2)} L${(barX + width).toFixed(2)},${baseline} Z`;
      return __spreadProps(__spreadValues({}, point), { barX, barY, width, path });
    });
  });
  hoveredBar = computed(() => {
    const index = this.hoveredIndex();
    if (index === null) {
      return null;
    }
    return this.barRects()[index] ?? null;
  });
  setViewMode(mode) {
    this.viewMode.set(mode);
  }
  onPointerMove(event) {
    const svg = this.svgRoot?.nativeElement;
    const pts = this.plotted();
    if (!svg || pts.length === 0) {
      return;
    }
    const rect = svg.getBoundingClientRect();
    if (rect.width === 0) {
      return;
    }
    const localX = (event.clientX - rect.left) / rect.width * this.viewWidth;
    let nearestIndex = 0;
    let nearestDistance = Infinity;
    pts.forEach((point, index) => {
      const distance = Math.abs(point.x - localX);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });
    this.hoveredIndex.set(nearestIndex);
  }
  onPointerLeave() {
    this.hoveredIndex.set(null);
  }
  tooltipX(pointX) {
    const halfWidth = 58;
    return Math.min(Math.max(pointX, halfWidth + 4), this.viewWidth - halfWidth - 4);
  }
  formatCurrency(value) {
    return this.currencyFormatter.format(value);
  }
  formatShortDate(isoDate) {
    return this.shortDateFormatter.format(this.parseIsoDate(isoDate));
  }
  formatFullDate(isoDate) {
    return this.fullDateFormatter.format(this.parseIsoDate(isoDate));
  }
  parseIsoDate(value) {
    const [year, month, day] = value.split("-").map(Number);
    return new Date(year, month - 1, day);
  }
  static \u0275fac = function LineChartComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LineChartComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LineChartComponent, selectors: [["app-line-chart"]], viewQuery: function LineChartComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.svgRoot = _t.first);
    }
  }, inputs: { height: "height", points: "points", comparisonPoints: "comparisonPoints", primaryLabel: "primaryLabel", comparisonLabel: "comparisonLabel" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 11, consts: [["svgRoot", ""], [1, "line-chart"], [1, "line-chart__header"], ["role", "group", "aria-label", "Tipo de visualiza\xE7\xE3o", 1, "line-chart__toolbar"], ["type", "button", 1, "line-chart__mode-toggle", 3, "click"], ["aria-hidden", "true", 1, "material-icons"], [1, "line-chart__legend"], [1, "line-chart__table-wrapper"], [1, "field__hint"], ["preserveAspectRatio", "none", 1, "line-chart__svg", 3, "height"], [1, "line-chart__legend-item"], [1, "line-chart__legend-swatch", "line-chart__legend-swatch--primary"], [1, "line-chart__legend-swatch", "line-chart__legend-swatch--comparison"], [1, "line-chart__table"], ["preserveAspectRatio", "none", 1, "line-chart__svg", 3, "pointermove", "pointerleave"], ["text-anchor", "middle", 1, "line-chart__axis-label"], ["vector-effect", "non-scaling-stroke", 1, "line-chart__gridline"], ["text-anchor", "end", "dominant-baseline", "middle", 1, "line-chart__axis-label"], [1, "line-chart__bar", 3, "line-chart__bar--hovered"], ["vector-effect", "non-scaling-stroke", 1, "line-chart__line", "line-chart__line--comparison"], ["text-anchor", "middle", 1, "line-chart__end-label"], [1, "line-chart__bar"], [1, "line-chart__area"], ["vector-effect", "non-scaling-stroke", 1, "line-chart__line"], ["vector-effect", "non-scaling-stroke", "r", "4", 1, "line-chart__end-dot"], ["text-anchor", "start", 1, "line-chart__end-label"], ["vector-effect", "non-scaling-stroke", 1, "line-chart__crosshair"], ["vector-effect", "non-scaling-stroke", "r", "5", 1, "line-chart__hover-dot"], ["vector-effect", "non-scaling-stroke", "r", "5", 1, "line-chart__hover-dot", "line-chart__hover-dot--comparison"], ["x", "-64", "y", "0", "width", "128", "rx", "6", 1, "line-chart__tooltip-bg"], ["x", "0", "y", "15", "text-anchor", "middle", 1, "line-chart__tooltip-label"], ["x", "0", "y", "28", "text-anchor", "middle", 1, "line-chart__tooltip-value"], ["x", "0", "y", "42", "text-anchor", "middle", 1, "line-chart__tooltip-value", "line-chart__tooltip-value--comparison"], ["x", "0", "y", "52", "text-anchor", "middle", 1, "line-chart__tooltip-date"], ["x", "0", "y", "18", "text-anchor", "middle", 1, "line-chart__tooltip-value"], ["x", "0", "y", "32", "text-anchor", "middle", 1, "line-chart__tooltip-date"]], template: function LineChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "button", 4);
      \u0275\u0275listener("click", function LineChartComponent_Template_button_click_3_listener() {
        return ctx.setViewMode("line");
      });
      \u0275\u0275elementStart(4, "span", 5);
      \u0275\u0275text(5, "show_chart");
      \u0275\u0275elementEnd();
      \u0275\u0275text(6, " Linha ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function LineChartComponent_Template_button_click_7_listener() {
        return ctx.setViewMode("bar");
      });
      \u0275\u0275elementStart(8, "span", 5);
      \u0275\u0275text(9, "bar_chart");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Barras ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 4);
      \u0275\u0275listener("click", function LineChartComponent_Template_button_click_11_listener() {
        return ctx.setViewMode("table");
      });
      \u0275\u0275elementStart(12, "span", 5);
      \u0275\u0275text(13, "table_rows");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " Tabela ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(15, LineChartComponent_Conditional_15_Template, 7, 2, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, LineChartComponent_Conditional_16_Template, 12, 2, "div", 7)(17, LineChartComponent_Conditional_17_Template, 2, 0, "p", 8)(18, LineChartComponent_Conditional_18_Template, 9, 5, ":svg:svg", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275classProp("line-chart__mode-toggle--active", ctx.viewMode() === "line");
      \u0275\u0275attribute("aria-pressed", ctx.viewMode() === "line");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("line-chart__mode-toggle--active", ctx.viewMode() === "bar");
      \u0275\u0275attribute("aria-pressed", ctx.viewMode() === "bar");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("line-chart__mode-toggle--active", ctx.viewMode() === "table");
      \u0275\u0275attribute("aria-pressed", ctx.viewMode() === "table");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.hasComparison() ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.viewMode() === "table" ? 16 : ctx.plotted().length === 0 ? 17 : 18);
    }
  }, styles: ["\n\n.line-chart[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.line-chart__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap-reverse;\n}\n.line-chart__toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 4px;\n}\n.line-chart__legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.line-chart__legend-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.line-chart__legend-swatch[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 3px;\n  border-radius: 2px;\n  flex-shrink: 0;\n}\n.line-chart__legend-swatch--primary[_ngcontent-%COMP%] {\n  background: var(--color-accent);\n}\n.line-chart__legend-swatch--comparison[_ngcontent-%COMP%] {\n  background: var(--color-success);\n}\n.line-chart__mode-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: transparent;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  color: var(--color-text-muted);\n  font-size: 0.8125rem;\n  padding: 6px 12px;\n  cursor: pointer;\n  transition:\n    background var(--transition-fast),\n    color var(--transition-fast),\n    border-color var(--transition-fast);\n}\n.line-chart__mode-toggle[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.line-chart__mode-toggle[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text);\n}\n.line-chart__mode-toggle--active[_ngcontent-%COMP%] {\n  background: var(--color-accent);\n  border-color: var(--color-accent);\n  color: #fff;\n}\n.line-chart__mode-toggle--active[_ngcontent-%COMP%]:hover {\n  background: var(--color-accent);\n  color: #fff;\n}\n.line-chart__svg[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  touch-action: none;\n  cursor: crosshair;\n}\n.line-chart__gridline[_ngcontent-%COMP%] {\n  stroke: var(--color-border);\n  stroke-width: 1;\n}\n.line-chart__axis-label[_ngcontent-%COMP%] {\n  fill: var(--color-text-muted);\n  font-size: 11px;\n}\n.line-chart__area[_ngcontent-%COMP%] {\n  fill: var(--color-accent);\n  fill-opacity: 0.12;\n  stroke: none;\n}\n.line-chart__line[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: var(--color-accent);\n  stroke-width: 2;\n  stroke-linejoin: round;\n  stroke-linecap: round;\n}\n.line-chart__line--comparison[_ngcontent-%COMP%] {\n  stroke: var(--color-success);\n  stroke-dasharray: 5 3;\n}\n.line-chart__end-dot[_ngcontent-%COMP%] {\n  fill: var(--color-accent);\n  stroke: var(--color-bg-card);\n  stroke-width: 2;\n}\n.line-chart__end-label[_ngcontent-%COMP%] {\n  fill: var(--color-text);\n  font-size: 12px;\n  font-weight: 600;\n}\n.line-chart__bar[_ngcontent-%COMP%] {\n  fill: var(--color-accent);\n  transition: fill var(--transition-fast);\n}\n.line-chart__bar--hovered[_ngcontent-%COMP%] {\n  fill: var(--color-accent-hover);\n}\n.line-chart__crosshair[_ngcontent-%COMP%] {\n  stroke: var(--color-border-strong);\n  stroke-width: 1;\n  stroke-dasharray: 3 3;\n}\n.line-chart__hover-dot[_ngcontent-%COMP%] {\n  fill: var(--color-accent-hover);\n  stroke: var(--color-bg-card);\n  stroke-width: 2;\n}\n.line-chart__hover-dot--comparison[_ngcontent-%COMP%] {\n  fill: var(--color-success);\n}\n.line-chart__tooltip-bg[_ngcontent-%COMP%] {\n  fill: var(--color-bg-elevated);\n  stroke: var(--color-border-strong);\n  stroke-width: 1;\n}\n.line-chart__tooltip-value[_ngcontent-%COMP%] {\n  fill: var(--color-text);\n  font-size: 12px;\n  font-weight: 700;\n}\n.line-chart__tooltip-value--comparison[_ngcontent-%COMP%] {\n  fill: var(--color-success);\n  font-size: 10px;\n  font-weight: 600;\n}\n.line-chart__tooltip-label[_ngcontent-%COMP%] {\n  fill: var(--color-text-muted);\n  font-size: 9px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.line-chart__tooltip-date[_ngcontent-%COMP%] {\n  fill: var(--color-text-muted);\n  font-size: 10px;\n}\n.line-chart__table-wrapper[_ngcontent-%COMP%] {\n  max-height: 260px;\n  overflow-y: auto;\n}\n.line-chart__table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.8125rem;\n}\n.line-chart__table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.line-chart__table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 8px 12px;\n  border-bottom: 1px solid var(--color-border);\n  color: var(--color-text);\n}\n.line-chart__table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-weight: 600;\n}\n/*# sourceMappingURL=line-chart.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LineChartComponent, { className: "LineChartComponent", filePath: "src\\app\\shared\\components\\line-chart\\line-chart.component.ts", lineNumber: 46 });
})();

export {
  LineChartComponent
};
//# sourceMappingURL=chunk-WKVFTQ4N.js.map
