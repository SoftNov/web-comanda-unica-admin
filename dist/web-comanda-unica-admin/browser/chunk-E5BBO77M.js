import {
  FloorPlanItemsService,
  require_lib
} from "./chunk-YEJZDAJL.js";
import {
  TablesService
} from "./chunk-KAJWRVGE.js";
import {
  FloorPlansService
} from "./chunk-2PCEBGEC.js";
import {
  AuthService
} from "./chunk-JIG4QTYX.js";
import "./chunk-LADLI4RN.js";
import "./chunk-3BRF5UDA.js";
import {
  __toESM,
  computed,
  forkJoin,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-ZGOR3PJA.js";

// src/app/shared/components/floor-plan-viewer/floor-plan-viewer.component.ts
var import_konva = __toESM(require_lib());
var _c0 = ["canvasContainer"];
function FloorPlanViewerComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 11);
    \u0275\u0275text(2, "hourglass_empty");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Carregando mapa\u2026 ");
    \u0275\u0275elementEnd();
  }
}
function FloorPlanViewerComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 11);
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
  loadError = signal(null);
  zoom = signal(1);
  zoomPercent = computed(() => Math.round(this.zoom() * 100));
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
      tableNumber: table?.number ?? response.tableNumber,
      tableName: table?.name,
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
    this.layer.add(new import_konva.default.Rect({
      x: 0,
      y: 0,
      width: plan.width,
      height: plan.height,
      fill: plan.backgroundColor || "#ffffff",
      listening: false
    }));
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
    group.add(this.buildShape(item));
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
    let cornerRadius = 4;
    if (item.itemType === "TABLE" && item.properties["shape"] === "ROUND") {
      cornerRadius = Math.min(item.width, item.height) / 2;
    }
    return new import_konva.default.Rect({
      width: item.width,
      height: item.height,
      fill: item.itemType === "TABLE" ? this.tableColor(item) : item.color || DEFAULT_COLORS[item.itemType] || "#94a3b8",
      stroke: "rgba(0,0,0,0.25)",
      strokeWidth: 1,
      cornerRadius,
      dash: item.itemType === "DOOR" ? [6, 4] : void 0
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
  }, inputs: { floorPlanId: "floorPlanId" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 32, vars: 7, consts: [["canvasContainer", ""], [1, "floor-plan-viewer"], [1, "floor-plan-viewer__toolbar"], [1, "floor-plan-viewer__legend"], [1, "floor-plan-viewer__legend-item"], [1, "floor-plan-viewer__dot", "floor-plan-viewer__dot--free"], [1, "floor-plan-viewer__dot", "floor-plan-viewer__dot--occupied"], [1, "floor-plan-viewer__dot", "floor-plan-viewer__dot--reserved"], [1, "floor-plan-viewer__dot", "floor-plan-viewer__dot--cleaning"], [1, "floor-plan-viewer__zoom"], ["type", "button", "title", "Diminuir zoom", 1, "icon-btn", 3, "click", "disabled"], ["aria-hidden", "true", 1, "material-icons"], [1, "floor-plan-viewer__zoom-label"], ["type", "button", "title", "Aumentar zoom", 1, "icon-btn", 3, "click", "disabled"], ["type", "button", "title", "Restaurar zoom", 1, "icon-btn", 3, "click", "disabled"], [1, "floor-plan-viewer__viewport"], [1, "floor-plan-viewer__loading"], ["role", "alert", 1, "form-alert", "form-alert--error"], [1, "floor-plan-viewer__stage"]], template: function FloorPlanViewerComponent_Template(rf, ctx) {
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
        return \u0275\u0275resetView(ctx.zoomOut());
      });
      \u0275\u0275elementStart(17, "span", 11);
      \u0275\u0275text(18, "zoom_out");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "span", 12);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 13);
      \u0275\u0275listener("click", function FloorPlanViewerComponent_Template_button_click_21_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.zoomIn());
      });
      \u0275\u0275elementStart(22, "span", 11);
      \u0275\u0275text(23, "zoom_in");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "button", 14);
      \u0275\u0275listener("click", function FloorPlanViewerComponent_Template_button_click_24_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetZoom());
      });
      \u0275\u0275elementStart(25, "span", 11);
      \u0275\u0275text(26, "center_focus_strong");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(27, "div", 15);
      \u0275\u0275template(28, FloorPlanViewerComponent_Conditional_28_Template, 4, 0, "div", 16)(29, FloorPlanViewerComponent_Conditional_29_Template, 4, 1, "div", 17);
      \u0275\u0275element(30, "div", 18, 0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275property("disabled", ctx.isLoading());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", ctx.zoomPercent(), "%");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isLoading());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.isLoading());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.isLoading() ? 28 : ctx.loadError() ? 29 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("floor-plan-viewer__stage--hidden", ctx.isLoading() || ctx.loadError());
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.floor-plan-viewer__toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.floor-plan-viewer__legend[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 14px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.floor-plan-viewer__legend-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.floor-plan-viewer__dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n}\n.floor-plan-viewer__dot--free[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.floor-plan-viewer__dot--occupied[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.floor-plan-viewer__dot--reserved[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.floor-plan-viewer__dot--cleaning[_ngcontent-%COMP%] {\n  background: #94a3b8;\n}\n.floor-plan-viewer__zoom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.floor-plan-viewer__zoom-label[_ngcontent-%COMP%] {\n  min-width: 48px;\n  text-align: center;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.floor-plan-viewer__viewport[_ngcontent-%COMP%] {\n  position: relative;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n  background:\n    linear-gradient(\n      45deg,\n      rgba(255, 255, 255, 0.04) 25%,\n      transparent 25%,\n      transparent 75%,\n      rgba(255, 255, 255, 0.04) 75%),\n    linear-gradient(\n      45deg,\n      rgba(255, 255, 255, 0.04) 25%,\n      transparent 25%,\n      transparent 75%,\n      rgba(255, 255, 255, 0.04) 75%);\n  background-size: 20px 20px;\n  background-position: 0 0, 10px 10px;\n  min-height: 320px;\n  max-height: 60vh;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n.floor-plan-viewer__stage[_ngcontent-%COMP%] {\n  cursor: grab;\n}\n.floor-plan-viewer__stage[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n.floor-plan-viewer__stage--hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.floor-plan-viewer__loading[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n}\n.floor-plan-viewer__loading[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius-sm);\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text);\n}\n.icon-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.icon-btn[_ngcontent-%COMP%]:disabled:hover {\n  background: transparent;\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=floor-plan-viewer.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FloorPlanViewerComponent, { className: "FloorPlanViewerComponent", filePath: "src\\app\\shared\\components\\floor-plan-viewer\\floor-plan-viewer.component.ts", lineNumber: 54 });
})();

// src/app/features/admin/pages/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function DashboardComponent_Conditional_38_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_38_For_2_Template_button_click_0_listener() {
      const floorPlan_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectFloorPlan(floorPlan_r2.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const floorPlan_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("floor-plan-section__tab--active", floorPlan_r2.id === ctx_r2.selectedFloorPlanId());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", floorPlan_r2.name, " ");
  }
}
function DashboardComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_38_For_2_Template, 2, 3, "button", 14, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.floorPlans());
  }
}
function DashboardComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "Carregando mapa\u2026");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-floor-plan-viewer", 13);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("floorPlanId", ctx_r2.selectedFloorPlanId());
  }
}
function DashboardComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "Nenhum ambiente com mapa cadastrado ainda.");
    \u0275\u0275elementEnd();
  }
}
var DashboardComponent = class _DashboardComponent {
  authService = inject(AuthService);
  floorPlansService = inject(FloorPlansService);
  currentUser = this.authService.currentUser;
  selectedCompany = this.authService.selectedCompany;
  floorPlans = signal([]);
  isLoadingFloorPlans = signal(true);
  selectedFloorPlanId = signal(null);
  constructor() {
    this.loadFloorPlans();
  }
  selectFloorPlan(floorPlanId) {
    this.selectedFloorPlanId.set(floorPlanId);
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
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-admin-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 42, vars: 4, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "stat-grid"], [1, "card", "stat-card"], ["aria-hidden", "true", 1, "material-icons", "stat-card__icon"], [1, "stat-card__label"], [1, "stat-card__value"], [1, "card", "floor-plan-section"], [1, "floor-plan-section__header"], [1, "floor-plan-section__title"], [1, "floor-plan-section__tabs"], [1, "field__hint"], [3, "floorPlanId"], ["type", "button", 1, "floor-plan-section__tab", 3, "floor-plan-section__tab--active"], ["type", "button", 1, "floor-plan-section__tab", 3, "click"]], template: function DashboardComponent_Template(rf, ctx) {
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
      \u0275\u0275elementStart(34, "div", 8)(35, "div", 9)(36, "h2", 10);
      \u0275\u0275text(37, "Mapa do estabelecimento");
      \u0275\u0275elementEnd();
      \u0275\u0275template(38, DashboardComponent_Conditional_38_Template, 3, 0, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275template(39, DashboardComponent_Conditional_39_Template, 2, 0, "p", 12)(40, DashboardComponent_Conditional_40_Template, 1, 1, "app-floor-plan-viewer", 13)(41, DashboardComponent_Conditional_41_Template, 2, 0, "p", 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Ol\xE1, ", (tmp_0_0 = ctx.currentUser()) == null ? null : tmp_0_0.fullName == null ? null : (tmp_0_0 = tmp_0_0.fullName.split(" ")) == null ? null : tmp_0_0[0], " \u{1F44B}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" Este \xE9 o painel administrativo de ", (tmp_1_0 = ctx.selectedCompany()) == null ? null : tmp_1_0.companyName, ". ");
      \u0275\u0275advance(34);
      \u0275\u0275conditional(ctx.floorPlans().length > 1 ? 38 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoadingFloorPlans() ? 39 : ctx.selectedFloorPlanId() ? 40 : 41);
    }
  }, dependencies: [FloorPlanViewerComponent], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n}\n.stat-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n}\n@media (max-width: 1024px) {\n  .stat-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 560px) {\n  .stat-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 24px;\n}\n.stat-card__icon[_ngcontent-%COMP%] {\n  color: var(--color-accent-hover);\n  font-size: 22px;\n}\n.stat-card__label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n}\n.stat-card__value[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.floor-plan-section[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 24px;\n}\n.floor-plan-section__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.floor-plan-section__title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: var(--color-text);\n  margin: 0;\n}\n.floor-plan-section__tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.floor-plan-section__tab[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border);\n  background: transparent;\n  color: var(--color-text-muted);\n  font-size: 0.8125rem;\n  cursor: pointer;\n  transition:\n    background var(--transition-fast),\n    color var(--transition-fast),\n    border-color var(--transition-fast);\n}\n.floor-plan-section__tab[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.floor-plan-section__tab--active[_ngcontent-%COMP%] {\n  border-color: var(--color-accent);\n  color: var(--color-text);\n  background: rgba(255, 255, 255, 0.08);\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\features\\admin\\pages\\dashboard\\dashboard.component.ts", lineNumber: 13 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-E5BBO77M.js.map
