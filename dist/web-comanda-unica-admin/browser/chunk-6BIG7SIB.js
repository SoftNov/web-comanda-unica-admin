import {
  FloorPlanItemsService,
  buildFloorPlanTableVisual,
  require_lib
} from "./chunk-PBTSD6LT.js";
import {
  FloorPlansService
} from "./chunk-FWPX2IXA.js";
import {
  ServicosComponent
} from "./chunk-TEQW45B3.js";
import {
  TablesService
} from "./chunk-HIIXGHW6.js";
import "./chunk-LB27EVIX.js";
import "./chunk-RYRFSZ2Z.js";
import "./chunk-LZCX3QVL.js";
import {
  PedidosComponent
} from "./chunk-A2GRAGZF.js";
import "./chunk-JD6JJHYZ.js";
import "./chunk-GXBVLERB.js";
import {
  webSocket
} from "./chunk-QVW7NBHD.js";
import {
  AuthService
} from "./chunk-JI3XUBKU.js";
import "./chunk-K3CHLMDM.js";
import {
  environment
} from "./chunk-3BRF5UDA.js";
import "./chunk-PB4HRHCY.js";
import {
  HttpClient,
  __spreadProps,
  __spreadValues,
  __toESM,
  computed,
  forkJoin,
  inject,
  retry,
  signal,
  timer,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
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
  ɵɵviewQuery
} from "./chunk-MHTOAZDV.js";

// src/app/shared/components/floor-plan-viewer/floor-plan-viewer.component.ts
var import_konva = __toESM(require_lib());
var _c0 = ["canvasContainer"];
function FloorPlanViewerComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 11);
    \u0275\u0275text(2, "hourglass_empty");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Carregando mapa\u2026 ");
    \u0275\u0275elementEnd();
  }
}
function FloorPlanViewerComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 11);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.loadError(), " ");
  }
}
var DEFAULT_COLORS = {
  TABLE: "#c7d2fe",
  WALL: "#334155",
  DOOR: "#f59e0b",
  BAR: "#7c3aed",
  KITCHEN: "#ef4444",
  BATHROOM: "#0ea5e9",
  CUSTOM: "#64748b",
  TEXT: "#111827",
  IMAGE: "#e5e7eb"
};
var TABLE_STATUS_COLORS = {
  FREE: "#22c55e",
  OCCUPIED: "#ef4444",
  RESERVED: "#f59e0b",
  CLEANING: "#94a3b8"
};
var MIN_ZOOM = 0.2;
var MAX_ZOOM = 3;
var FloorPlanViewerComponent = class _FloorPlanViewerComponent {
  floorPlanId;
  canvasContainerRef;
  floorPlansService = inject(FloorPlansService);
  floorPlanItemsService = inject(FloorPlanItemsService);
  tablesService = inject(TablesService);
  floorPlan = signal(null);
  isLoading = signal(true);
  isRefreshing = signal(false);
  loadError = signal(null);
  zoom = signal(1);
  zoomPercent = computed(() => Math.round(this.zoom() * 100));
  rawItems = [];
  items = [];
  viewReady = false;
  stage = null;
  layer = null;
  ngAfterViewInit() {
    this.viewReady = true;
    if (this.floorPlanId) {
      this.load();
    }
  }
  ngOnChanges(changes) {
    if (changes["floorPlanId"] && !changes["floorPlanId"].firstChange && this.viewReady) {
      this.load();
    }
  }
  ngOnDestroy() {
    this.stage?.destroy();
  }
  zoomIn() {
    this.setZoom(this.zoom() * 1.2);
  }
  zoomOut() {
    this.setZoom(this.zoom() / 1.2);
  }
  resetZoom() {
    this.zoom.set(1);
    this.stage?.scale({ x: 1, y: 1 });
    this.stage?.position({ x: 0, y: 0 });
    this.stage?.batchDraw();
  }
  setZoom(value) {
    const clamped = Math.min(Math.max(value, MIN_ZOOM), MAX_ZOOM);
    this.zoom.set(clamped);
    this.stage?.scale({ x: clamped, y: clamped });
    this.stage?.batchDraw();
  }
  load() {
    this.stage?.destroy();
    this.stage = null;
    this.layer = null;
    this.isLoading.set(true);
    this.loadError.set(null);
    this.zoom.set(1);
    forkJoin({
      floorPlan: this.floorPlansService.get(this.floorPlanId),
      items: this.floorPlanItemsService.list(this.floorPlanId),
      tables: this.tablesService.list({ status: "ACTIVE", page: 0, size: 200, sortBy: "number", sortDirection: "ASC" })
    }).subscribe({
      next: ({ floorPlan, items, tables }) => {
        this.floorPlan.set(floorPlan);
        this.rawItems = items;
        this.items = items.map((item) => this.toViewerItem(item, tables.content));
        this.isLoading.set(false);
        this.initStage();
      },
      error: () => {
        this.isLoading.set(false);
        this.loadError.set("N\xE3o foi poss\xEDvel carregar o mapa do ambiente.");
      }
    });
  }
  // Status operacional (ocupada/limpeza) muda por ações de outros apps (cliente pedindo/pagando
  // no cardápio digital) — sem isso, o mapa só reflete essas mudanças ao trocar de ambiente ou
  // recarregar a página. Recarrega só as mesas e redesenha, preservando zoom/posição atuais.
  refresh() {
    if (!this.floorPlanId || this.isLoading() || this.isRefreshing()) {
      return;
    }
    this.isRefreshing.set(true);
    this.tablesService.list({ status: "ACTIVE", page: 0, size: 200, sortBy: "number", sortDirection: "ASC" }).subscribe({
      next: (tables) => {
        this.items = this.rawItems.map((item) => this.toViewerItem(item, tables.content));
        this.isRefreshing.set(false);
        this.renderLayerContents();
      },
      error: () => {
        this.isRefreshing.set(false);
      }
    });
  }
  toViewerItem(response, tables) {
    const table = response.tableId ? tables.find((candidate) => candidate.id === response.tableId) : void 0;
    let properties = {};
    if (response.propertiesJson) {
      try {
        properties = JSON.parse(response.propertiesJson);
      } catch {
        properties = {};
      }
    }
    return {
      itemType: response.itemType,
      tableId: table?.id,
      tableNumber: table?.number ?? response.tableNumber,
      tableName: table?.name,
      tableCapacity: table?.capacity,
      operationalStatus: table?.operationalStatus,
      x: response.x,
      y: response.y,
      width: response.width,
      height: response.height,
      rotation: response.rotation,
      zIndex: response.zIndex,
      color: response.color,
      label: response.label,
      properties
    };
  }
  initStage() {
    const plan = this.floorPlan();
    if (!this.viewReady || !plan || !this.canvasContainerRef) {
      return;
    }
    this.stage = new import_konva.default.Stage({
      container: this.canvasContainerRef.nativeElement,
      width: plan.width,
      height: plan.height,
      draggable: true
    });
    this.layer = new import_konva.default.Layer();
    this.stage.add(this.layer);
    this.stage.on("wheel", (event) => {
      event.evt.preventDefault();
      const pointer = this.stage.getPointerPosition();
      if (!pointer) {
        return;
      }
      const oldScale = this.stage.scaleX();
      const mousePointTo = { x: (pointer.x - this.stage.x()) / oldScale, y: (pointer.y - this.stage.y()) / oldScale };
      const direction = event.evt.deltaY > 0 ? -1 : 1;
      const scaleBy = 1.05;
      const newScale = Math.min(Math.max(direction > 0 ? oldScale * scaleBy : oldScale / scaleBy, MIN_ZOOM), MAX_ZOOM);
      this.stage.scale({ x: newScale, y: newScale });
      this.stage.position({ x: pointer.x - mousePointTo.x * newScale, y: pointer.y - mousePointTo.y * newScale });
      this.zoom.set(newScale);
      this.stage.batchDraw();
    });
    this.renderLayerContents();
  }
  renderLayerContents() {
    const plan = this.floorPlan();
    if (!this.layer || !plan) {
      return;
    }
    this.layer.destroyChildren();
    this.layer.add(new import_konva.default.Rect({
      x: 0,
      y: 0,
      width: plan.width,
      height: plan.height,
      fill: plan.backgroundColor || "#ffffff",
      listening: false
    }));
    for (const item of this.items) {
      this.createNode(item);
    }
    this.layer.batchDraw();
  }
  createNode(item) {
    const group = new import_konva.default.Group({
      x: item.x,
      y: item.y,
      rotation: item.rotation,
      listening: false
    });
    if (item.itemType === "TABLE") {
      this.buildTableVisual(item).forEach((node) => group.add(node));
    } else {
      group.add(this.buildShape(item));
    }
    const labelText = this.labelFor(item);
    if (item.itemType !== "TEXT" && labelText) {
      group.add(new import_konva.default.Text({
        text: labelText,
        width: item.width,
        height: item.height,
        align: "center",
        verticalAlign: "middle",
        fontSize: 12,
        fontStyle: "bold",
        fill: this.contrastColor(item.itemType === "TABLE" ? this.tableColor(item) : item.color),
        listening: false
      }));
    }
    this.layer.add(group);
  }
  buildShape(item) {
    if (item.itemType === "TEXT") {
      return new import_konva.default.Text({
        text: item.label || "Texto",
        width: item.width,
        height: item.height,
        fontSize: Number(item.properties["fontSize"]) || 16,
        fill: item.color || "#111827"
      });
    }
    if (item.itemType === "IMAGE") {
      const rect = new import_konva.default.Rect({
        width: item.width,
        height: item.height,
        fill: "#e5e7eb",
        stroke: "#94a3b8",
        strokeWidth: 1,
        dash: [6, 4]
      });
      const url = typeof item.properties["imageUrl"] === "string" ? item.properties["imageUrl"] : "";
      if (url) {
        const imageObj = new Image();
        imageObj.crossOrigin = "anonymous";
        imageObj.onload = () => {
          const konvaImage = new import_konva.default.Image({ image: imageObj, width: item.width, height: item.height, listening: false });
          rect.getParent()?.add(konvaImage);
          konvaImage.moveToBottom();
          this.layer?.batchDraw();
        };
        imageObj.src = url;
      }
      return rect;
    }
    return new import_konva.default.Rect({
      width: item.width,
      height: item.height,
      fill: item.color || DEFAULT_COLORS[item.itemType] || "#94a3b8",
      stroke: "rgba(0,0,0,0.25)",
      strokeWidth: 1,
      cornerRadius: 4,
      dash: item.itemType === "DOOR" ? [6, 4] : void 0
    });
  }
  buildTableVisual(item) {
    return buildFloorPlanTableVisual({
      shape: item.properties["shape"] || "SQUARE",
      width: item.width,
      height: item.height,
      capacity: item.tableCapacity ?? 0,
      color: this.tableColor(item)
    });
  }
  tableColor(item) {
    return item.operationalStatus && TABLE_STATUS_COLORS[item.operationalStatus] || item.color || DEFAULT_COLORS["TABLE"];
  }
  labelFor(item) {
    if (item.itemType === "TABLE") {
      return item.tableName ? `Mesa ${item.tableNumber ?? "?"}
${item.tableName}` : `Mesa ${item.tableNumber ?? "?"}`;
    }
    return item.label || "";
  }
  contrastColor(hex) {
    if (!hex || hex.replace("#", "").length !== 6) {
      return "#111827";
    }
    const value = hex.replace("#", "");
    const r = parseInt(value.substring(0, 2), 16);
    const g = parseInt(value.substring(2, 4), 16);
    const b = parseInt(value.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.6 ? "#111827" : "#ffffff";
  }
  static \u0275fac = function FloorPlanViewerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FloorPlanViewerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FloorPlanViewerComponent, selectors: [["app-floor-plan-viewer"]], viewQuery: function FloorPlanViewerComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.canvasContainerRef = _t.first);
    }
  }, inputs: { floorPlanId: "floorPlanId" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 35, vars: 10, consts: [["canvasContainer", ""], [1, "floor-plan-viewer"], [1, "floor-plan-viewer__toolbar"], [1, "floor-plan-viewer__legend"], [1, "floor-plan-viewer__legend-item"], [1, "floor-plan-viewer__dot", "floor-plan-viewer__dot--free"], [1, "floor-plan-viewer__dot", "floor-plan-viewer__dot--occupied"], [1, "floor-plan-viewer__dot", "floor-plan-viewer__dot--reserved"], [1, "floor-plan-viewer__dot", "floor-plan-viewer__dot--cleaning"], [1, "floor-plan-viewer__zoom"], ["type", "button", "title", "Atualizar status das mesas", 1, "icon-btn", 3, "click", "disabled"], ["aria-hidden", "true", 1, "material-icons"], ["type", "button", "title", "Diminuir zoom", 1, "icon-btn", 3, "click", "disabled"], [1, "floor-plan-viewer__zoom-label"], ["type", "button", "title", "Aumentar zoom", 1, "icon-btn", 3, "click", "disabled"], ["type", "button", "title", "Restaurar zoom", 1, "icon-btn", 3, "click", "disabled"], [1, "floor-plan-viewer__viewport"], [1, "floor-plan-viewer__loading"], ["role", "alert", 1, "form-alert", "form-alert--error"], [1, "floor-plan-viewer__stage"]], template: function FloorPlanViewerComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "span", 4);
      \u0275\u0275element(4, "i", 5);
      \u0275\u0275text(5, "Livre");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 4);
      \u0275\u0275element(7, "i", 6);
      \u0275\u0275text(8, "Ocupada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 4);
      \u0275\u0275element(10, "i", 7);
      \u0275\u0275text(11, "Reservada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span", 4);
      \u0275\u0275element(13, "i", 8);
      \u0275\u0275text(14, "Limpeza");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 9)(16, "button", 10);
      \u0275\u0275listener("click", function FloorPlanViewerComponent_Template_button_click_16_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.refresh());
      });
      \u0275\u0275elementStart(17, "span", 11);
      \u0275\u0275text(18, "refresh");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "button", 12);
      \u0275\u0275listener("click", function FloorPlanViewerComponent_Template_button_click_19_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.zoomOut());
      });
      \u0275\u0275elementStart(20, "span", 11);
      \u0275\u0275text(21, "zoom_out");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "span", 13);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 14);
      \u0275\u0275listener("click", function FloorPlanViewerComponent_Template_button_click_24_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.zoomIn());
      });
      \u0275\u0275elementStart(25, "span", 11);
      \u0275\u0275text(26, "zoom_in");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "button", 15);
      \u0275\u0275listener("click", function FloorPlanViewerComponent_Template_button_click_27_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetZoom());
      });
      \u0275\u0275elementStart(28, "span", 11);
      \u0275\u0275text(29, "center_focus_strong");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(30, "div", 16);
      \u0275\u0275template(31, FloorPlanViewerComponent_Conditional_31_Template, 4, 0, "div", 17)(32, FloorPlanViewerComponent_Conditional_32_Template, 4, 1, "div", 18);
      \u0275\u0275element(33, "div", 19, 0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275property("disabled", ctx.isLoading() || ctx.isRefreshing());
      \u0275\u0275advance();
      \u0275\u0275classProp("floor-plan-viewer__refresh-icon--spinning", ctx.isRefreshing());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isLoading());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", ctx.zoomPercent(), "%");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isLoading());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.isLoading());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.isLoading() ? 31 : ctx.loadError() ? 32 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("floor-plan-viewer__stage--hidden", ctx.isLoading() || ctx.loadError());
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.floor-plan-viewer__toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.floor-plan-viewer__legend[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 14px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.floor-plan-viewer__legend-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.floor-plan-viewer__dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n}\n.floor-plan-viewer__dot--free[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.floor-plan-viewer__dot--occupied[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.floor-plan-viewer__dot--reserved[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.floor-plan-viewer__dot--cleaning[_ngcontent-%COMP%] {\n  background: #94a3b8;\n}\n.floor-plan-viewer__refresh-icon--spinning[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_floor-plan-viewer-spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_floor-plan-viewer-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.floor-plan-viewer__zoom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.floor-plan-viewer__zoom-label[_ngcontent-%COMP%] {\n  min-width: 48px;\n  text-align: center;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.floor-plan-viewer__viewport[_ngcontent-%COMP%] {\n  position: relative;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n  background:\n    linear-gradient(\n      45deg,\n      rgba(255, 255, 255, 0.04) 25%,\n      transparent 25%,\n      transparent 75%,\n      rgba(255, 255, 255, 0.04) 75%),\n    linear-gradient(\n      45deg,\n      rgba(255, 255, 255, 0.04) 25%,\n      transparent 25%,\n      transparent 75%,\n      rgba(255, 255, 255, 0.04) 75%);\n  background-size: 20px 20px;\n  background-position: 0 0, 10px 10px;\n  min-height: 320px;\n  max-height: 60vh;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n.floor-plan-viewer__stage[_ngcontent-%COMP%] {\n  cursor: grab;\n}\n.floor-plan-viewer__stage[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n.floor-plan-viewer__stage--hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.floor-plan-viewer__loading[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n}\n.floor-plan-viewer__loading[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius-sm);\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text);\n}\n.icon-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.icon-btn[_ngcontent-%COMP%]:disabled:hover {\n  background: transparent;\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=floor-plan-viewer.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FloorPlanViewerComponent, { className: "FloorPlanViewerComponent", filePath: "src\\app\\shared\\components\\floor-plan-viewer\\floor-plan-viewer.component.ts", lineNumber: 57 });
})();

// src/app/shared/services/dashboard.service.ts
var DashboardService = class _DashboardService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiBaseUrl}/api/v1/dashboard`;
  getSummary() {
    return this.http.get(this.baseUrl);
  }
  // startDate/endDate no formato yyyy-MM-dd; sem eles, o backend retorna os últimos 30 dias.
  getRevenueSeries(startDate, endDate) {
    const params = {};
    if (startDate) {
      params["startDate"] = startDate;
    }
    if (endDate) {
      params["endDate"] = endDate;
    }
    return this.http.get(`${this.baseUrl}/revenue`, { params });
  }
  // Abre a conexão em tempo real dos indicadores operacionais. O token vem por query param
  // porque o WebSocket nativo do browser não permite header Authorization no handshake — ver
  // DashboardHandshakeInterceptor no backend, que valida o mesmo token e o acesso à empresa.
  // Quem chama é responsável por fechar a subscription (ex: ngOnDestroy) para encerrar o socket.
  connectRealtime(companyId, token) {
    return webSocket(this.buildWsUrl(companyId, token));
  }
  buildWsUrl(companyId, token) {
    const base = environment.apiBaseUrl;
    const wsBase = /^https?:\/\//.test(base) ? base.replace(/^http/, "ws") : `${window.location.protocol === "https:" ? "wss:" : "ws:"}//${window.location.host}${base}`;
    return `${wsBase}/ws/dashboard/${companyId}?token=${encodeURIComponent(token)}`;
  }
  static \u0275fac = function DashboardService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DashboardService, factory: _DashboardService.\u0275fac, providedIn: "root" });
};

// src/app/shared/components/line-chart/line-chart.component.ts
var _c02 = ["svgRoot"];
var _forTrack0 = ($index, $item) => $item.date;
var _forTrack1 = ($index, $item) => $item.label + $item.y;
function LineChartComponent_Conditional_14_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const point_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatFullDate(point_r1.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(point_r1.amount));
  }
}
function LineChartComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "table", 8)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Faturamento");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "tbody");
    \u0275\u0275repeaterCreate(9, LineChartComponent_Conditional_14_For_10_Template, 5, 2, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r1.points$());
  }
}
function LineChartComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "Sem dados de faturamento no per\xEDodo selecionado.");
    \u0275\u0275elementEnd();
  }
}
function LineChartComponent_Conditional_16_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "line", 11);
    \u0275\u0275elementStart(1, "text", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tick_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("x1", ctx_r1.padding.left)("x2", ctx_r1.viewWidth - ctx_r1.padding.right)("y1", tick_r4.y)("y2", tick_r4.y);
    \u0275\u0275advance();
    \u0275\u0275attribute("x", ctx_r1.padding.left - 8)("y", tick_r4.y);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tick_r4.label, " ");
  }
}
function LineChartComponent_Conditional_16_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "text", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tick_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("x", tick_r5.x)("y", ctx_r1.height - 8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatShortDate(tick_r5.date), " ");
  }
}
function LineChartComponent_Conditional_16_Conditional_6_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 15);
  }
  if (rf & 2) {
    let tmp_13_0;
    const bar_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("line-chart__bar--hovered", ctx_r1.hoveredIndex() !== null && ((tmp_13_0 = ctx_r1.hoveredBar()) == null ? null : tmp_13_0.date) === bar_r6.date);
    \u0275\u0275attribute("d", bar_r6.path);
  }
}
function LineChartComponent_Conditional_16_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "text", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const last_r7 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("x", last_r7.x)("y", last_r7.y - 8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatCurrency(last_r7.amount), " ");
  }
}
function LineChartComponent_Conditional_16_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g");
    \u0275\u0275element(1, "rect", 16);
    \u0275\u0275elementStart(2, "text", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "text", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const hovered_r8 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("transform", "translate(" + ctx_r1.tooltipX(hovered_r8.x) + ", " + ctx_r1.padding.top + ")");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(hovered_r8.amount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatFullDate(hovered_r8.date));
  }
}
function LineChartComponent_Conditional_16_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, LineChartComponent_Conditional_16_Conditional_6_For_1_Template, 1, 3, ":svg:path", 13, _forTrack0);
    \u0275\u0275template(2, LineChartComponent_Conditional_16_Conditional_6_Conditional_2_Template, 2, 3, ":svg:text", 14)(3, LineChartComponent_Conditional_16_Conditional_6_Conditional_3_Template, 6, 3, ":svg:g");
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.barRects());
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_4_0 = ctx_r1.lastPoint()) ? 2 : -1, tmp_4_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_5_0 = ctx_r1.hoveredBar()) ? 3 : -1, tmp_5_0);
  }
}
function LineChartComponent_Conditional_16_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 21);
    \u0275\u0275elementStart(1, "text", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const last_r9 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("cx", last_r9.x)("cy", last_r9.y);
    \u0275\u0275advance();
    \u0275\u0275attribute("x", last_r9.x + 8)("y", last_r9.y + 4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatCurrency(last_r9.amount), " ");
  }
}
function LineChartComponent_Conditional_16_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "line", 23)(1, "circle", 24);
    \u0275\u0275elementStart(2, "g");
    \u0275\u0275element(3, "rect", 16);
    \u0275\u0275elementStart(4, "text", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "text", 18);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const hovered_r10 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("x1", hovered_r10.x)("x2", hovered_r10.x)("y1", ctx_r1.padding.top)("y2", ctx_r1.height - ctx_r1.padding.bottom);
    \u0275\u0275advance();
    \u0275\u0275attribute("cx", hovered_r10.x)("cy", hovered_r10.y);
    \u0275\u0275advance();
    \u0275\u0275attribute("transform", "translate(" + ctx_r1.tooltipX(hovered_r10.x) + ", " + ctx_r1.padding.top + ")");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(hovered_r10.amount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatFullDate(hovered_r10.date));
  }
}
function LineChartComponent_Conditional_16_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 19)(1, "path", 20);
    \u0275\u0275template(2, LineChartComponent_Conditional_16_Conditional_7_Conditional_2_Template, 3, 5)(3, LineChartComponent_Conditional_16_Conditional_7_Conditional_3_Template, 8, 9);
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("d", ctx_r1.areaPath());
    \u0275\u0275advance();
    \u0275\u0275attribute("d", ctx_r1.linePath());
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_5_0 = ctx_r1.lastPoint()) ? 2 : -1, tmp_5_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_6_0 = ctx_r1.hoveredPoint()) ? 3 : -1, tmp_6_0);
  }
}
function LineChartComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9, 0);
    \u0275\u0275listener("pointermove", function LineChartComponent_Conditional_16_Template_svg_pointermove_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPointerMove($event));
    })("pointerleave", function LineChartComponent_Conditional_16_Template_svg_pointerleave_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPointerLeave());
    });
    \u0275\u0275repeaterCreate(2, LineChartComponent_Conditional_16_For_3_Template, 3, 7, null, null, _forTrack1);
    \u0275\u0275repeaterCreate(4, LineChartComponent_Conditional_16_For_5_Template, 2, 3, ":svg:text", 10, _forTrack0);
    \u0275\u0275template(6, LineChartComponent_Conditional_16_Conditional_6_Template, 4, 2)(7, LineChartComponent_Conditional_16_Conditional_7_Template, 4, 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r1.height, "px");
    \u0275\u0275attribute("viewBox", "0 0 " + ctx_r1.viewWidth + " " + ctx_r1.height);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.yTicks());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.xTicks());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.viewMode() === "bar" ? 6 : 7);
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
  _points = signal([]);
  points$ = computed(() => this._points());
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
    const max = Math.max(0, ...this._points().map((point) => point.amount));
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
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.svgRoot = _t.first);
    }
  }, inputs: { height: "height", points: "points" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 10, consts: [["svgRoot", ""], [1, "line-chart"], ["role", "group", "aria-label", "Tipo de visualiza\xE7\xE3o", 1, "line-chart__toolbar"], ["type", "button", 1, "line-chart__mode-toggle", 3, "click"], ["aria-hidden", "true", 1, "material-icons"], [1, "line-chart__table-wrapper"], [1, "field__hint"], ["preserveAspectRatio", "none", 1, "line-chart__svg", 3, "height"], [1, "line-chart__table"], ["preserveAspectRatio", "none", 1, "line-chart__svg", 3, "pointermove", "pointerleave"], ["text-anchor", "middle", 1, "line-chart__axis-label"], ["vector-effect", "non-scaling-stroke", 1, "line-chart__gridline"], ["text-anchor", "end", "dominant-baseline", "middle", 1, "line-chart__axis-label"], [1, "line-chart__bar", 3, "line-chart__bar--hovered"], ["text-anchor", "middle", 1, "line-chart__end-label"], [1, "line-chart__bar"], ["x", "-58", "y", "0", "width", "116", "height", "40", "rx", "6", 1, "line-chart__tooltip-bg"], ["x", "0", "y", "18", "text-anchor", "middle", 1, "line-chart__tooltip-value"], ["x", "0", "y", "32", "text-anchor", "middle", 1, "line-chart__tooltip-date"], [1, "line-chart__area"], ["vector-effect", "non-scaling-stroke", 1, "line-chart__line"], ["vector-effect", "non-scaling-stroke", "r", "4", 1, "line-chart__end-dot"], ["text-anchor", "start", 1, "line-chart__end-label"], ["vector-effect", "non-scaling-stroke", 1, "line-chart__crosshair"], ["vector-effect", "non-scaling-stroke", "r", "5", 1, "line-chart__hover-dot"]], template: function LineChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
      \u0275\u0275listener("click", function LineChartComponent_Template_button_click_2_listener() {
        return ctx.setViewMode("line");
      });
      \u0275\u0275elementStart(3, "span", 4);
      \u0275\u0275text(4, "show_chart");
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, " Linha ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 3);
      \u0275\u0275listener("click", function LineChartComponent_Template_button_click_6_listener() {
        return ctx.setViewMode("bar");
      });
      \u0275\u0275elementStart(7, "span", 4);
      \u0275\u0275text(8, "bar_chart");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " Barras ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 3);
      \u0275\u0275listener("click", function LineChartComponent_Template_button_click_10_listener() {
        return ctx.setViewMode("table");
      });
      \u0275\u0275elementStart(11, "span", 4);
      \u0275\u0275text(12, "table_rows");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, " Tabela ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(14, LineChartComponent_Conditional_14_Template, 11, 0, "div", 5)(15, LineChartComponent_Conditional_15_Template, 2, 0, "p", 6)(16, LineChartComponent_Conditional_16_Template, 8, 4, ":svg:svg", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275classProp("line-chart__mode-toggle--active", ctx.viewMode() === "line");
      \u0275\u0275attribute("aria-pressed", ctx.viewMode() === "line");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("line-chart__mode-toggle--active", ctx.viewMode() === "bar");
      \u0275\u0275attribute("aria-pressed", ctx.viewMode() === "bar");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("line-chart__mode-toggle--active", ctx.viewMode() === "table");
      \u0275\u0275attribute("aria-pressed", ctx.viewMode() === "table");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.viewMode() === "table" ? 14 : ctx.plotted().length === 0 ? 15 : 16);
    }
  }, styles: ["\n\n.line-chart[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.line-chart__toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 4px;\n}\n.line-chart__mode-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: transparent;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  color: var(--color-text-muted);\n  font-size: 0.8125rem;\n  padding: 6px 12px;\n  cursor: pointer;\n  transition:\n    background var(--transition-fast),\n    color var(--transition-fast),\n    border-color var(--transition-fast);\n}\n.line-chart__mode-toggle[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.line-chart__mode-toggle[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text);\n}\n.line-chart__mode-toggle--active[_ngcontent-%COMP%] {\n  background: var(--color-accent);\n  border-color: var(--color-accent);\n  color: #fff;\n}\n.line-chart__mode-toggle--active[_ngcontent-%COMP%]:hover {\n  background: var(--color-accent);\n  color: #fff;\n}\n.line-chart__svg[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  touch-action: none;\n  cursor: crosshair;\n}\n.line-chart__gridline[_ngcontent-%COMP%] {\n  stroke: var(--color-border);\n  stroke-width: 1;\n}\n.line-chart__axis-label[_ngcontent-%COMP%] {\n  fill: var(--color-text-muted);\n  font-size: 11px;\n}\n.line-chart__area[_ngcontent-%COMP%] {\n  fill: var(--color-accent);\n  fill-opacity: 0.12;\n  stroke: none;\n}\n.line-chart__line[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: var(--color-accent);\n  stroke-width: 2;\n  stroke-linejoin: round;\n  stroke-linecap: round;\n}\n.line-chart__end-dot[_ngcontent-%COMP%] {\n  fill: var(--color-accent);\n  stroke: var(--color-bg-card);\n  stroke-width: 2;\n}\n.line-chart__end-label[_ngcontent-%COMP%] {\n  fill: var(--color-text);\n  font-size: 12px;\n  font-weight: 600;\n}\n.line-chart__bar[_ngcontent-%COMP%] {\n  fill: var(--color-accent);\n  transition: fill var(--transition-fast);\n}\n.line-chart__bar--hovered[_ngcontent-%COMP%] {\n  fill: var(--color-accent-hover);\n}\n.line-chart__crosshair[_ngcontent-%COMP%] {\n  stroke: var(--color-border-strong);\n  stroke-width: 1;\n  stroke-dasharray: 3 3;\n}\n.line-chart__hover-dot[_ngcontent-%COMP%] {\n  fill: var(--color-accent-hover);\n  stroke: var(--color-bg-card);\n  stroke-width: 2;\n}\n.line-chart__tooltip-bg[_ngcontent-%COMP%] {\n  fill: var(--color-bg-elevated);\n  stroke: var(--color-border-strong);\n  stroke-width: 1;\n}\n.line-chart__tooltip-value[_ngcontent-%COMP%] {\n  fill: var(--color-text);\n  font-size: 12px;\n  font-weight: 700;\n}\n.line-chart__tooltip-date[_ngcontent-%COMP%] {\n  fill: var(--color-text-muted);\n  font-size: 10px;\n}\n.line-chart__table-wrapper[_ngcontent-%COMP%] {\n  max-height: 260px;\n  overflow-y: auto;\n}\n.line-chart__table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.8125rem;\n}\n.line-chart__table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.line-chart__table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 8px 12px;\n  border-bottom: 1px solid var(--color-border);\n  color: var(--color-text);\n}\n.line-chart__table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-weight: 600;\n}\n/*# sourceMappingURL=line-chart.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LineChartComponent, { className: "LineChartComponent", filePath: "src\\app\\shared\\components\\line-chart\\line-chart.component.ts", lineNumber: 46 });
})();

// src/app/features/admin/pages/dashboard/dashboard.component.ts
var _forTrack02 = ($index, $item) => $item.id;
var _forTrack12 = ($index, $item) => $item.days;
function DashboardComponent_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_5_For_2_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectTab(tab_r2.id));
    });
    \u0275\u0275elementStart(1, "span", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("dashboard-tabs__tab--active", ctx_r2.activeTab() === tab_r2.id);
    \u0275\u0275attribute("aria-selected", ctx_r2.activeTab() === tab_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r2.label, " ");
  }
}
function DashboardComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_5_For_2_Template, 4, 5, "button", 5, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.availableTabs());
  }
}
function DashboardComponent_Conditional_6_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_6_For_13_Template_button_click_0_listener() {
      const preset_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.applyRevenuePreset(preset_r6.days));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const preset_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("revenue-section__preset--active", ctx_r2.activeRevenuePresetDays() === preset_r6.days);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", preset_r6.label, " ");
  }
}
function DashboardComponent_Conditional_6_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 7);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.revenueError(), " ");
  }
}
function DashboardComponent_Conditional_6_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1, "Carregando faturamento\u2026");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_6_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-line-chart", 24);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("points", ctx_r2.revenuePoints())("height", 260);
  }
}
function DashboardComponent_Conditional_6_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 7);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.summaryError(), " ");
  }
}
function DashboardComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "h2", 11);
    \u0275\u0275text(4, "Faturamento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 12)(6, "span", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 14);
    \u0275\u0275text(9, "no per\xEDodo selecionado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 15)(11, "div", 16);
    \u0275\u0275repeaterCreate(12, DashboardComponent_Conditional_6_For_13_Template, 2, 3, "button", 17, _forTrack12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 18)(15, "label", 19)(16, "span");
    \u0275\u0275text(17, "De");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 20);
    \u0275\u0275listener("change", function DashboardComponent_Conditional_6_Template_input_change_18_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onRevenueStartDateChange($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "label", 19)(20, "span");
    \u0275\u0275text(21, "At\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 21);
    \u0275\u0275listener("change", function DashboardComponent_Conditional_6_Template_input_change_22_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onRevenueEndDateChange($event.target.value));
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(23, DashboardComponent_Conditional_6_Conditional_23_Template, 4, 1, "div", 22)(24, DashboardComponent_Conditional_6_Conditional_24_Template, 2, 0, "p", 23)(25, DashboardComponent_Conditional_6_Conditional_25_Template, 1, 2, "app-line-chart", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 25)(27, "div", 26)(28, "h2", 27);
    \u0275\u0275text(29, "Opera\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 28);
    \u0275\u0275element(31, "span", 29);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, DashboardComponent_Conditional_6_Conditional_33_Template, 4, 1, "div", 22);
    \u0275\u0275elementStart(34, "div", 30)(35, "div", 31)(36, "span", 32);
    \u0275\u0275text(37, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 33);
    \u0275\u0275text(39, "Comandas abertas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 34);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 31)(43, "span", 32);
    \u0275\u0275text(44, "table_bar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 33);
    \u0275\u0275text(46, "Mesas ocupadas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 34);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 31)(50, "span", 32);
    \u0275\u0275text(51, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 33);
    \u0275\u0275text(53, "Mesas livres");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 34);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 31)(57, "span", 32);
    \u0275\u0275text(58, "cleaning_services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 33);
    \u0275\u0275text(60, "Mesas em limpeza");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 34);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 31)(64, "span", 32);
    \u0275\u0275text(65, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span", 33);
    \u0275\u0275text(67, "Funcion\xE1rios ativos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span", 34);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 31)(71, "span", 32);
    \u0275\u0275text(72, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span", 33);
    \u0275\u0275text(74, "Valor em comandas abertas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "span", 34);
    \u0275\u0275text(76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 31)(78, "span", 32);
    \u0275\u0275text(79, "point_of_sale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "span", 33);
    \u0275\u0275text(81, "Pedidos feitos hoje");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "span", 34);
    \u0275\u0275text(83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 31)(85, "span", 32);
    \u0275\u0275text(86, "shopping_cart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "span", 33);
    \u0275\u0275text(88, "Itens no carrinho");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "span", 34);
    \u0275\u0275text(90);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_18_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.isLoadingRevenue() ? "\u2014" : ctx_r2.formatCurrency(ctx_r2.revenueTotal()));
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.revenuePresets);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r2.revenueStartDate())("max", ctx_r2.revenueEndDate());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.revenueEndDate())("min", ctx_r2.revenueStartDate());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.revenueError() ? 23 : ctx_r2.isLoadingRevenue() ? 24 : 25);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("live-indicator--error", ctx_r2.summaryError());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.summaryError() ? "Reconectando\u2026" : "Ao vivo", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.summaryError() ? 33 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.isLoadingSummary() ? "\u2014" : (tmp_11_0 = ctx_r2.summary()) == null ? null : tmp_11_0.openComandas);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.isLoadingSummary() ? "\u2014" : (tmp_12_0 = ctx_r2.summary()) == null ? null : tmp_12_0.occupiedTables);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.isLoadingSummary() ? "\u2014" : (tmp_13_0 = ctx_r2.summary()) == null ? null : tmp_13_0.freeTables);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.isLoadingSummary() ? "\u2014" : (tmp_14_0 = ctx_r2.summary()) == null ? null : tmp_14_0.cleaningTables);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.isLoadingSummary() ? "\u2014" : (tmp_15_0 = ctx_r2.summary()) == null ? null : tmp_15_0.activeEmployees);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.isLoadingSummary() ? "\u2014" : ctx_r2.formatCurrency((tmp_16_0 = ctx_r2.summary()) == null ? null : tmp_16_0.openComandasValue));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.isLoadingSummary() ? "\u2014" : ctx_r2.formatCurrency((tmp_17_0 = ctx_r2.summary()) == null ? null : tmp_17_0.ordersValueToday));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.isLoadingSummary() ? "\u2014" : (tmp_18_0 = ctx_r2.summary()) == null ? null : tmp_18_0.openCartItemsCount);
  }
}
function DashboardComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-admin-pedidos");
  }
}
function DashboardComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-admin-servicos");
  }
}
function DashboardComponent_Conditional_9_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_9_Conditional_4_For_2_Template_button_click_0_listener() {
      const floorPlan_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectFloorPlan(floorPlan_r8.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const floorPlan_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("floor-plan-section__tab--active", floorPlan_r8.id === ctx_r2.selectedFloorPlanId());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", floorPlan_r8.name, " ");
  }
}
function DashboardComponent_Conditional_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_9_Conditional_4_For_2_Template, 2, 3, "button", 40, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.floorPlans());
  }
}
function DashboardComponent_Conditional_9_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1, "Carregando mapa\u2026");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_9_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-floor-plan-viewer", 39);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("floorPlanId", ctx_r2.selectedFloorPlanId());
  }
}
function DashboardComponent_Conditional_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1, "Nenhum ambiente com mapa cadastrado ainda.");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 36)(2, "h2", 37);
    \u0275\u0275text(3, "Mapa do estabelecimento");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, DashboardComponent_Conditional_9_Conditional_4_Template, 3, 0, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, DashboardComponent_Conditional_9_Conditional_5_Template, 2, 0, "p", 23)(6, DashboardComponent_Conditional_9_Conditional_6_Template, 1, 1, "app-floor-plan-viewer", 39)(7, DashboardComponent_Conditional_9_Conditional_7_Template, 2, 0, "p", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.floorPlans().length > 1 ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isLoadingFloorPlans() ? 5 : ctx_r2.selectedFloorPlanId() ? 6 : 7);
  }
}
var MANAGEMENT_PROFILES = ["ADMIN", "OWNER", "MANAGER"];
var QUEUE_HOME_PROFILES = ["WAITER", "KITCHEN"];
var SERVICE_HOME_PROFILES = ["WAITER"];
var WS_RETRY_DELAY_MS = 5e3;
var WS_SILENT_RETRIES = 3;
var REVENUE_PRESETS = [
  { label: "7 dias", days: 7 },
  { label: "30 dias", days: 30 },
  { label: "90 dias", days: 90 }
];
var DashboardComponent = class _DashboardComponent {
  authService = inject(AuthService);
  floorPlansService = inject(FloorPlansService);
  dashboardService = inject(DashboardService);
  currencyFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
  currentUser = this.authService.currentUser;
  selectedCompany = this.authService.selectedCompany;
  revenuePresets = REVENUE_PRESETS;
  // As métricas administrativas (faturamento, comandas, ocupação de mesas, funcionários) só
  // existem no backend para ADMIN/OWNER/MANAGER (ver DashboardController, restrito por
  // @RequireProfile) — para os demais perfis (garçom, caixa, cozinha) a home mostra só o mapa do
  // salão, sem tentar abrir uma conexão que o handshake rejeitaria com 403.
  isManagementProfile = computed(() => {
    const profileCode = this.selectedCompany()?.profileCode;
    return !!profileCode && MANAGEMENT_PROFILES.includes(profileCode);
  });
  // Garçom e cozinha entram direto na fila de pedidos (mesmo conteúdo do menu Pedidos, ver
  // PedidosComponent) — o mapa do salão continua abaixo, mas o que importa pra esses perfis é ver
  // e movimentar os itens assim que abrem a home.
  isQueueHomeProfile = computed(() => {
    const profileCode = this.selectedCompany()?.profileCode;
    return !!profileCode && QUEUE_HOME_PROFILES.includes(profileCode);
  });
  // Garçom também entra direto nos serviços gerais (mesmo conteúdo do menu Serviços, ver
  // ServicosComponent) — logo abaixo da fila de pedidos na home.
  isServiceHomeProfile = computed(() => {
    const profileCode = this.selectedCompany()?.profileCode;
    return !!profileCode && SERVICE_HOME_PROFILES.includes(profileCode);
  });
  // Indicadores operacionais, atualizados em tempo real via WebSocket (ver connectRealtime) —
  // não há mais um fetch único aqui, a conexão já recebe o estado atual ao abrir e depois a cada
  // ~10s (ver DashboardBroadcastScheduler no backend).
  summary = signal(null);
  isLoadingSummary = signal(false);
  summaryError = signal(null);
  summarySubscription;
  revenuePoints = signal([]);
  isLoadingRevenue = signal(false);
  revenueError = signal(null);
  revenueStartDate = signal(this.toIsoDate(this.daysAgo(29)));
  revenueEndDate = signal(this.toIsoDate(/* @__PURE__ */ new Date()));
  activeRevenuePresetDays = signal(30);
  revenueTotal = computed(() => this.revenuePoints().reduce((total, point) => total + point.amount, 0));
  floorPlans = signal([]);
  isLoadingFloorPlans = signal(true);
  selectedFloorPlanId = signal(null);
  // Views da home organizadas em abas — cada perfil só vê as abas que fazem sentido pra ele (ver
  // isManagementProfile/isQueueHomeProfile/isServiceHomeProfile). Mapa do salão aparece pra todo
  // mundo, sempre por último. Pedidos/Serviços só ficam montados (e só abrem WebSocket) enquanto a
  // aba correspondente está ativa — trocar de aba desconecta a anterior e conecta a nova. A
  // notificação de pedido/serviço novo (som + sino no topo) não depende de qual aba está ativa —
  // ver NotificationsService, usado pelo AdminLayoutComponent.
  availableTabs = computed(() => {
    const tabs = [];
    if (this.isManagementProfile()) {
      tabs.push({ id: "overview", label: "Vis\xE3o geral", icon: "insights" });
    }
    if (this.isQueueHomeProfile()) {
      tabs.push({ id: "pedidos", label: "Pedidos", icon: "point_of_sale" });
    }
    if (this.isServiceHomeProfile()) {
      tabs.push({ id: "servicos", label: "Servi\xE7os", icon: "support_agent" });
    }
    tabs.push({ id: "floorplan", label: "Mapa do sal\xE3o", icon: "map" });
    return tabs;
  });
  activeTab = signal("floorplan");
  constructor() {
    this.activeTab.set(this.availableTabs()[0]?.id ?? "floorplan");
    if (this.isManagementProfile()) {
      this.connectRealtimeSummary();
      this.loadRevenue();
    }
    this.loadFloorPlans();
  }
  selectTab(tabId) {
    this.activeTab.set(tabId);
  }
  ngOnDestroy() {
    this.summarySubscription?.unsubscribe();
  }
  selectFloorPlan(floorPlanId) {
    this.selectedFloorPlanId.set(floorPlanId);
  }
  formatCurrency(value) {
    return value != null ? this.currencyFormatter.format(value) : "\u2014";
  }
  applyRevenuePreset(days) {
    this.activeRevenuePresetDays.set(days);
    this.revenueStartDate.set(this.toIsoDate(this.daysAgo(days - 1)));
    this.revenueEndDate.set(this.toIsoDate(/* @__PURE__ */ new Date()));
    this.loadRevenue();
  }
  onRevenueStartDateChange(value) {
    this.activeRevenuePresetDays.set(null);
    this.revenueStartDate.set(value);
    this.loadRevenue();
  }
  onRevenueEndDateChange(value) {
    this.activeRevenuePresetDays.set(null);
    this.revenueEndDate.set(value);
    this.loadRevenue();
  }
  connectRealtimeSummary() {
    const companyId = this.selectedCompany()?.companyId;
    const token = this.authService.getAccessToken();
    if (!companyId || !token) {
      return;
    }
    this.isLoadingSummary.set(true);
    this.summaryError.set(null);
    this.summarySubscription = this.dashboardService.connectRealtime(companyId, token).pipe(retry({
      delay: (_, retryCount) => {
        if (retryCount >= WS_SILENT_RETRIES) {
          this.isLoadingSummary.set(false);
          this.summaryError.set("N\xE3o foi poss\xEDvel conectar \xE0 atualiza\xE7\xE3o em tempo real do painel.");
        }
        return timer(WS_RETRY_DELAY_MS);
      },
      resetOnSuccess: true
    })).subscribe({
      next: (summary) => {
        this.summary.set(summary);
        this.isLoadingSummary.set(false);
        this.summaryError.set(null);
        this.patchTodayRevenue(summary.revenueToday);
      },
      error: () => {
        this.isLoadingSummary.set(false);
        this.summaryError.set("N\xE3o foi poss\xEDvel conectar \xE0 atualiza\xE7\xE3o em tempo real do painel.");
      }
    });
  }
  // Atualiza ao vivo só o ponto de hoje do gráfico de faturamento (via WS), sem reconsultar a
  // série inteira — o REST (loadRevenue) continua sendo a fonte de verdade ao trocar o período.
  // Fora do intervalo selecionado, ignora (o gráfico só mostra o período escolhido pelo usuário).
  patchTodayRevenue(amount) {
    const today = this.toIsoDate(/* @__PURE__ */ new Date());
    if (today < this.revenueStartDate() || today > this.revenueEndDate()) {
      return;
    }
    this.revenuePoints.update((points) => {
      const index = points.findIndex((point) => point.date === today);
      if (index === -1) {
        return [...points, { date: today, amount }].sort((a, b) => a.date.localeCompare(b.date));
      }
      if (points[index].amount === amount) {
        return points;
      }
      const next = [...points];
      next[index] = __spreadProps(__spreadValues({}, next[index]), { amount });
      return next;
    });
  }
  loadRevenue() {
    this.isLoadingRevenue.set(true);
    this.revenueError.set(null);
    this.dashboardService.getRevenueSeries(this.revenueStartDate(), this.revenueEndDate()).subscribe({
      next: (points) => {
        this.revenuePoints.set(points);
        this.isLoadingRevenue.set(false);
      },
      error: () => {
        this.isLoadingRevenue.set(false);
        this.revenueError.set("N\xE3o foi poss\xEDvel carregar o faturamento do per\xEDodo selecionado.");
      }
    });
  }
  loadFloorPlans() {
    this.isLoadingFloorPlans.set(true);
    this.floorPlansService.list().subscribe({
      next: (floorPlans) => {
        this.floorPlans.set(floorPlans);
        this.selectedFloorPlanId.set(floorPlans[0]?.id ?? null);
        this.isLoadingFloorPlans.set(false);
      },
      error: () => {
        this.isLoadingFloorPlans.set(false);
      }
    });
  }
  daysAgo(days) {
    const date = /* @__PURE__ */ new Date();
    date.setDate(date.getDate() - days);
    return date;
  }
  toIsoDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-admin-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 7, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["role", "tablist", 1, "dashboard-tabs"], [1, "card", "floor-plan-section"], ["type", "button", "role", "tab", 1, "dashboard-tabs__tab", 3, "dashboard-tabs__tab--active"], ["type", "button", "role", "tab", 1, "dashboard-tabs__tab", 3, "click"], ["aria-hidden", "true", 1, "material-icons"], [1, "card", "revenue-section"], [1, "revenue-section__header"], [1, "revenue-section__heading"], [1, "revenue-section__title"], [1, "revenue-section__total"], [1, "revenue-section__total-value"], [1, "revenue-section__total-label"], [1, "revenue-section__controls"], [1, "revenue-section__presets"], ["type", "button", 1, "revenue-section__preset", 3, "revenue-section__preset--active"], [1, "revenue-section__custom-range"], [1, "revenue-section__date-field"], ["type", "date", 3, "change", "value", "max"], ["type", "date", 3, "change", "value", "min"], ["role", "alert", 1, "form-alert", "form-alert--error"], [1, "field__hint"], [3, "points", "height"], [1, "card", "operation-section"], [1, "operation-section__header"], [1, "operation-section__title"], [1, "live-indicator"], ["aria-hidden", "true", 1, "live-indicator__dot"], [1, "stat-grid"], [1, "stat-card"], ["aria-hidden", "true", 1, "material-icons", "stat-card__icon"], [1, "stat-card__label"], [1, "stat-card__value"], ["type", "button", 1, "revenue-section__preset", 3, "click"], [1, "floor-plan-section__header"], [1, "floor-plan-section__title"], [1, "floor-plan-section__tabs"], [3, "floorPlanId"], ["type", "button", 1, "floor-plan-section__tab", 3, "floor-plan-section__tab--active"], ["type", "button", 1, "floor-plan-section__tab", 3, "click"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(5, DashboardComponent_Conditional_5_Template, 3, 0, "div", 3)(6, DashboardComponent_Conditional_6_Template, 91, 18)(7, DashboardComponent_Conditional_7_Template, 1, 0, "app-admin-pedidos")(8, DashboardComponent_Conditional_8_Template, 1, 0, "app-admin-servicos")(9, DashboardComponent_Conditional_9_Template, 8, 2, "div", 4);
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Ol\xE1, ", (tmp_0_0 = ctx.currentUser()) == null ? null : tmp_0_0.fullName == null ? null : (tmp_0_0 = tmp_0_0.fullName.split(" ")) == null ? null : tmp_0_0[0], " \u{1F44B}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" Este \xE9 o painel administrativo de ", (tmp_1_0 = ctx.selectedCompany()) == null ? null : tmp_1_0.companyName, ". ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.availableTabs().length > 1 ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "overview" ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "pedidos" ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "servicos" ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "floorplan" ? 9 : -1);
    }
  }, dependencies: [FloorPlanViewerComponent, LineChartComponent, PedidosComponent, ServicosComponent], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n}\n.dashboard-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  border-bottom: 1px solid var(--color-border);\n  margin-bottom: 24px;\n  overflow-x: auto;\n}\n.dashboard-tabs__tab[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 18px;\n  border: none;\n  border-bottom: 2px solid transparent;\n  background: transparent;\n  color: var(--color-text-muted);\n  font-size: 0.9375rem;\n  font-weight: 500;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: color var(--transition-fast), border-color var(--transition-fast);\n}\n.dashboard-tabs__tab[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.dashboard-tabs__tab[_ngcontent-%COMP%]:hover {\n  color: var(--color-text);\n}\n.dashboard-tabs__tab--active[_ngcontent-%COMP%] {\n  color: var(--color-text);\n  border-bottom-color: var(--color-accent);\n}\n.live-indicator[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.live-indicator__dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--color-success);\n  box-shadow: 0 0 0 3px var(--color-success-bg);\n}\n.live-indicator--error[_ngcontent-%COMP%]   .live-indicator__dot[_ngcontent-%COMP%] {\n  background: #f87171;\n  box-shadow: 0 0 0 3px rgba(248, 113, 113, 0.18);\n}\n.revenue-section[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.revenue-section__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n.revenue-section__heading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.revenue-section__title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: var(--color-text);\n  margin: 0;\n}\n.revenue-section__total[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n}\n.revenue-section__total-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.revenue-section__total-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.revenue-section__controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 10px;\n}\n@media (max-width: 640px) {\n  .revenue-section__controls[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    width: 100%;\n  }\n}\n.revenue-section__presets[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.revenue-section__preset[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border);\n  background: transparent;\n  color: var(--color-text-muted);\n  font-size: 0.8125rem;\n  cursor: pointer;\n  transition:\n    background var(--transition-fast),\n    color var(--transition-fast),\n    border-color var(--transition-fast);\n}\n.revenue-section__preset[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.revenue-section__preset--active[_ngcontent-%COMP%] {\n  border-color: var(--color-accent);\n  color: var(--color-text);\n  background: rgba(255, 255, 255, 0.08);\n}\n.revenue-section__custom-range[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.revenue-section__date-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.revenue-section__date-field[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%] {\n  background: var(--color-bg-elevated);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  color: var(--color-text);\n  padding: 6px 10px;\n  font-size: 0.8125rem;\n  color-scheme: dark;\n}\n.operation-section[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 24px;\n}\n.operation-section__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.operation-section__title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: var(--color-text);\n  margin: 0;\n}\n.stat-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));\n  gap: 16px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 18px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  background: var(--color-bg-elevated);\n}\n.stat-card__icon[_ngcontent-%COMP%] {\n  color: var(--color-accent-hover);\n  font-size: 20px;\n}\n.stat-card__label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.stat-card__value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.floor-plan-section[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 24px;\n}\n.floor-plan-section__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.floor-plan-section__title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: var(--color-text);\n  margin: 0;\n}\n.floor-plan-section__tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.floor-plan-section__tab[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border);\n  background: transparent;\n  color: var(--color-text-muted);\n  font-size: 0.8125rem;\n  cursor: pointer;\n  transition:\n    background var(--transition-fast),\n    color var(--transition-fast),\n    border-color var(--transition-fast);\n}\n.floor-plan-section__tab[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.floor-plan-section__tab--active[_ngcontent-%COMP%] {\n  border-color: var(--color-accent);\n  color: var(--color-text);\n  background: rgba(255, 255, 255, 0.08);\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\features\\admin\\pages\\dashboard\\dashboard.component.ts", lineNumber: 48 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-6BIG7SIB.js.map
