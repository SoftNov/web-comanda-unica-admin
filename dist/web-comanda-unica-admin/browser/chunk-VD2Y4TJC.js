import {
  FloorPlanItemsService,
  buildFloorPlanTableVisual,
  require_lib
} from "./chunk-JJR7GIWP.js";
import {
  FloorPlansService
} from "./chunk-C3UYLFSX.js";
import {
  ExtratoService
} from "./chunk-XHS6P6VA.js";
import {
  LineChartComponent
} from "./chunk-5AKFIYZW.js";
import {
  PlatformFinanceService,
  SITUATION_LABELS,
  situationTone
} from "./chunk-6YKU6HZG.js";
import {
  PedidosComponent
} from "./chunk-LG6DECEG.js";
import {
  ServicosComponent
} from "./chunk-MSA33VGP.js";
import {
  QrTargetResolverService
} from "./chunk-LDSSKJ6K.js";
import {
  QrScannerComponent
} from "./chunk-XEKRG7QV.js";
import {
  TablesService
} from "./chunk-AINUU7VH.js";
import "./chunk-JD6JJHYZ.js";
import {
  SubscriptionService
} from "./chunk-NRM4BJPE.js";
import {
  RippleDirective
} from "./chunk-UVFWKPXF.js";
import "./chunk-PNEZ4WFN.js";
import "./chunk-PRMWQI6D.js";
import {
  webSocket
} from "./chunk-K425FYEI.js";
import {
  ConsumptionPassesService
} from "./chunk-HFWNAVH5.js";
import {
  COUNTER_TABLE_LABEL,
  formatTableLabel
} from "./chunk-XFEDBWXJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-BTGRTOWH.js";
import {
  AuthService
} from "./chunk-6ERKNQ3W.js";
import {
  brDateTimeFormat,
  parseApiDate
} from "./chunk-ZLRUWLWP.js";
import "./chunk-P3N4DPOK.js";
import {
  environment
} from "./chunk-IKIQHSDP.js";
import {
  Router,
  RouterLink
} from "./chunk-GPCUXOSL.js";
import {
  EMPTY,
  ElementRef,
  HttpClient,
  HttpErrorResponse,
  __toESM,
  computed,
  defer,
  effect,
  forkJoin,
  inject,
  retry,
  signal,
  timer,
  untracked,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-QBSIROZR.js";

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

// src/app/shared/components/subscription-banner/subscription-banner.component.ts
function SubscriptionBannerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "span", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r1 = ctx;
    \u0275\u0275classProp("sub-banner--warn", b_r1.tone === "warn");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r1.text);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r1.cta);
  }
}
var SubscriptionBannerComponent = class _SubscriptionBannerComponent {
  subscriptionService = inject(SubscriptionService);
  authService = inject(AuthService);
  status = signal(null);
  canManage = computed(() => {
    if (this.authService.isPlatformAdmin()) {
      return false;
    }
    const code = this.authService.selectedCompany()?.profileCode;
    return code === "OWNER" || code === "ADMIN";
  });
  banner = computed(() => {
    if (!this.canManage()) {
      return null;
    }
    const s = this.status();
    if (!s) {
      return null;
    }
    if (s.courtesyTableLimitExceeded) {
      return {
        text: `O per\xEDodo gr\xE1tis permite at\xE9 ${s.courtesyTableLimit} mesas \u2014 voc\xEA tem ${s.tableCount}. Assine para continuar.`,
        cta: "Assinar",
        icon: "block",
        tone: "warn"
      };
    }
    if (s.status === "PAST_DUE") {
      return {
        text: "O pagamento da assinatura n\xE3o foi conclu\xEDdo. Regularize para n\xE3o perder o acesso.",
        cta: "Regularizar",
        icon: "warning_amber",
        tone: "warn"
      };
    }
    if (s.courtesy) {
      const end = parseApiDate(s.currentPeriodEnd);
      const days = end ? Math.max(0, Math.ceil((end.getTime() - Date.now()) / 864e5)) : null;
      return {
        text: days != null ? `Voc\xEA est\xE1 no per\xEDodo de cortesia \u2014 faltam ${days} dia(s). Assine para continuar usando a Comanda \xDAnica.` : "Voc\xEA est\xE1 no per\xEDodo de cortesia. Assine para continuar usando a Comanda \xDAnica.",
        cta: "Assinar",
        icon: "schedule",
        tone: "warn"
      };
    }
    if (!s.active) {
      return {
        text: "Ative sua assinatura da Comanda \xDAnica para usar todos os recursos do painel.",
        cta: "Assinar agora",
        icon: "card_membership",
        tone: "info"
      };
    }
    const limit = s.contractedTableLimit;
    const tables = s.tableCount;
    if (limit != null && tables != null && tables >= limit) {
      return {
        text: tables > limit ? `Voc\xEA tem ${tables} mesas e seu plano comporta at\xE9 ${limit}. Suba de plano para regularizar e cadastrar novas mesas.` : `Voc\xEA atingiu o limite de ${limit} mesas do seu plano. Suba de plano para cadastrar mais mesas.`,
        cta: "Subir de plano",
        icon: "table_restaurant",
        tone: "warn"
      };
    }
    return null;
  });
  constructor() {
    const companyId = this.authService.selectedCompany()?.companyId;
    if (companyId && this.canManage()) {
      this.subscriptionService.ensureStatus(companyId).subscribe({
        next: (s) => this.status.set(s),
        error: () => this.status.set(null)
      });
    }
  }
  static \u0275fac = function SubscriptionBannerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SubscriptionBannerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscriptionBannerComponent, selectors: [["app-subscription-banner"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[1, "sub-banner", 3, "sub-banner--warn"], [1, "sub-banner"], ["aria-hidden", "true", 1, "material-icons"], [1, "sub-banner__text"], ["routerLink", "/painel/assinatura", 1, "sub-banner__cta"]], template: function SubscriptionBannerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, SubscriptionBannerComponent_Conditional_0_Template, 7, 5, "div", 0);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.banner()) ? 0 : -1, tmp_0_0);
    }
  }, dependencies: [RouterLink], styles: ["\n\n.sub-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  margin-bottom: 20px;\n  border-radius: var(--radius-sm);\n  background: var(--color-accent-bg);\n  border: 1px solid rgba(59, 130, 246, 0.28);\n  color: var(--color-text);\n  font-size: 0.9rem;\n}\n.sub-banner--warn[_ngcontent-%COMP%] {\n  background: rgba(214, 164, 79, 0.14);\n  border-color: rgba(214, 164, 79, 0.4);\n}\n.sub-banner[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--color-accent-hover);\n  flex-shrink: 0;\n}\n.sub-banner--warn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #d6a44f;\n}\n.sub-banner__text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.sub-banner__cta[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-weight: 600;\n  color: var(--color-accent-hover);\n  text-decoration: none;\n  white-space: nowrap;\n}\n.sub-banner__cta[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=subscription-banner.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscriptionBannerComponent, { className: "SubscriptionBannerComponent", filePath: "src\\app\\shared\\components\\subscription-banner\\subscription-banner.component.ts", lineNumber: 65 });
})();

// src/app/shared/components/quick-service/quick-service.component.ts
var _c02 = ["passInputEl"];
var _forTrack0 = ($index, $item) => $item.id;
var _c1 = () => [1, 2, 3, 4, 5, 6, 7, 8];
function QuickServiceComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "button", 8);
    \u0275\u0275listener("click", function QuickServiceComponent_Conditional_1_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setMode("table"));
    });
    \u0275\u0275elementStart(2, "span", 7);
    \u0275\u0275text(3, "table_restaurant");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Mesa ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 8);
    \u0275\u0275listener("click", function QuickServiceComponent_Conditional_1_Conditional_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setMode("pass"));
    });
    \u0275\u0275elementStart(6, "span", 7);
    \u0275\u0275text(7, "credit_card");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Cart\xE3o ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("quick-service__mode--active", ctx_r2.mode() === "table");
    \u0275\u0275attribute("aria-selected", ctx_r2.mode() === "table");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("quick-service__mode--active", ctx_r2.mode() === "pass");
    \u0275\u0275attribute("aria-selected", ctx_r2.mode() === "pass");
  }
}
function QuickServiceComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, QuickServiceComponent_Conditional_1_Conditional_1_Template, 9, 6, "div", 5);
    \u0275\u0275elementStart(2, "button", 6);
    \u0275\u0275listener("click", function QuickServiceComponent_Conditional_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.startScan());
    });
    \u0275\u0275elementStart(3, "span", 7);
    \u0275\u0275text(4, "qr_code_scanner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.passEnabled() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("title", "Escanear QR Code da mesa", ctx_r2.passEnabled() ? " ou do cart\xE3o" : "", "");
    \u0275\u0275property("disabled", ctx_r2.isResolving());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.isResolving() ? "Identificando\u2026" : "Escanear QR");
  }
}
function QuickServiceComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 7);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.error(), " ");
  }
}
function QuickServiceComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-qr-scanner", 9);
    \u0275\u0275listener("scanned", function QuickServiceComponent_Conditional_3_Template_app_qr_scanner_scanned_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onScanned($event));
    })("closed", function QuickServiceComponent_Conditional_3_Template_app_qr_scanner_closed_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.isScanning.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("hint", ctx_r2.passEnabled() ? "Aponte a c\xE2mera para o QR Code da mesa ou do cart\xE3o." : "Aponte a c\xE2mera para o QR Code da mesa.");
  }
}
function QuickServiceComponent_Conditional_4_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 18)(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const current_r6 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.tableLabel(current_r6.table));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.statusClass(current_r6.table));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.statusLabel(current_r6.table));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", current_r6.table.sectorName, " ");
  }
}
function QuickServiceComponent_Conditional_4_Conditional_0_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "Em uso");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
  }
  if (rf & 2) {
    const current_r6 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", current_r6.table ? ctx_r2.tableLabel(current_r6.table) : ctx_r2.passTableLabel(current_r6.pass.tableNumber, current_r6.pass.tableName), "", current_r6.pass.customerName ? " \xB7 " + current_r6.pass.customerName : "", " ");
  }
}
function QuickServiceComponent_Conditional_4_Conditional_0_Conditional_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "Livre");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Ser\xE1 vinculado \xE0 mesa", ctx_r2.counterTable() ? " ou ao balc\xE3o" : "", " no lan\xE7amento ");
  }
}
function QuickServiceComponent_Conditional_4_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 18);
    \u0275\u0275template(3, QuickServiceComponent_Conditional_4_Conditional_0_Conditional_6_Conditional_3_Template, 3, 2)(4, QuickServiceComponent_Conditional_4_Conditional_0_Conditional_6_Conditional_4_Template, 3, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const current_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Cart\xE3o N\xBA ", current_r6.pass.number, "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(current_r6.pass.status === "IN_USE" ? 3 : 4);
  }
}
function QuickServiceComponent_Conditional_4_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function QuickServiceComponent_Conditional_4_Conditional_0_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openComanda());
    });
    \u0275\u0275elementStart(1, "span", 7);
    \u0275\u0275text(2, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Ver comanda ");
    \u0275\u0275elementEnd();
  }
}
function QuickServiceComponent_Conditional_4_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function QuickServiceComponent_Conditional_4_Conditional_0_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.launchAtCounter());
    });
    \u0275\u0275elementStart(1, "span", 7);
    \u0275\u0275text(2, "storefront");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.counterLabel, " ");
  }
}
function QuickServiceComponent_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "span", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13);
    \u0275\u0275template(5, QuickServiceComponent_Conditional_4_Conditional_0_Conditional_5_Template, 6, 5)(6, QuickServiceComponent_Conditional_4_Conditional_0_Conditional_6_Template, 5, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 14);
    \u0275\u0275listener("click", function QuickServiceComponent_Conditional_4_Conditional_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clearTarget());
    });
    \u0275\u0275elementStart(8, "span", 7);
    \u0275\u0275text(9, "swap_horiz");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Trocar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 15)(12, "button", 16);
    \u0275\u0275listener("click", function QuickServiceComponent_Conditional_4_Conditional_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.launchOrder());
    });
    \u0275\u0275elementStart(13, "span", 7);
    \u0275\u0275text(14, "add_shopping_cart");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Lan\xE7ar pedido ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, QuickServiceComponent_Conditional_4_Conditional_0_Conditional_16_Template, 4, 0, "button", 17)(17, QuickServiceComponent_Conditional_4_Conditional_0_Conditional_17_Template, 4, 1, "button", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const current_r6 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", current_r6.kind === "table" ? "table_restaurant" : "qr_code_2", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(current_r6.kind === "table" ? 5 : 6);
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r2.canOpenComanda() ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canLaunchAtCounter() ? 17 : -1);
  }
}
function QuickServiceComponent_Conditional_4_Conditional_1_Conditional_0_Conditional_21_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 32);
  }
}
function QuickServiceComponent_Conditional_4_Conditional_1_Conditional_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275repeaterCreate(1, QuickServiceComponent_Conditional_4_Conditional_1_Conditional_0_Conditional_21_For_2_Template, 1, 0, "div", 32, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c1));
  }
}
function QuickServiceComponent_Conditional_4_Conditional_1_Conditional_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 7);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " N\xE3o foi poss\xEDvel carregar as mesas. ");
    \u0275\u0275elementStart(4, "button", 33);
    \u0275\u0275listener("click", function QuickServiceComponent_Conditional_4_Conditional_1_Conditional_0_Conditional_22_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.loadTables());
    });
    \u0275\u0275text(5, "Tentar de novo");
    \u0275\u0275elementEnd()();
  }
}
function QuickServiceComponent_Conditional_4_Conditional_1_Conditional_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.tables().length ? "Nenhuma mesa encontrada com esse filtro." : "Nenhuma mesa ativa cadastrada.", " ");
  }
}
function QuickServiceComponent_Conditional_4_Conditional_1_Conditional_0_Conditional_24_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function QuickServiceComponent_Conditional_4_Conditional_1_Conditional_0_Conditional_24_For_2_Template_button_click_0_listener() {
      const table_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.selectTable(table_r12.id));
    });
    \u0275\u0275elementStart(1, "span", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 38);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const table_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(ctx_r2.statusClass(table_r12));
    \u0275\u0275attribute("aria-label", ctx_r2.tableLabel(table_r12) + ", " + ctx_r2.statusLabel(table_r12));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r12.number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(table_r12.name || table_r12.sectorName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.statusLabel(table_r12));
  }
}
function QuickServiceComponent_Conditional_4_Conditional_1_Conditional_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275repeaterCreate(1, QuickServiceComponent_Conditional_4_Conditional_1_Conditional_0_Conditional_24_For_2_Template, 7, 6, "button", 34, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.filteredTables());
  }
}
function QuickServiceComponent_Conditional_4_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "span", 7);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 25);
    \u0275\u0275listener("ngModelChange", function QuickServiceComponent_Conditional_4_Conditional_1_Conditional_0_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.tableSearch.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 26)(6, "button", 27);
    \u0275\u0275listener("click", function QuickServiceComponent_Conditional_4_Conditional_1_Conditional_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.tableFilter.set("ALL"));
    });
    \u0275\u0275text(7, " Todas ");
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 27);
    \u0275\u0275listener("click", function QuickServiceComponent_Conditional_4_Conditional_1_Conditional_0_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.tableFilter.set("OCCUPIED"));
    });
    \u0275\u0275text(11, " Ocupadas ");
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 27);
    \u0275\u0275listener("click", function QuickServiceComponent_Conditional_4_Conditional_1_Conditional_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.tableFilter.set("FREE"));
    });
    \u0275\u0275text(15, " Livres ");
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 28);
    \u0275\u0275listener("click", function QuickServiceComponent_Conditional_4_Conditional_1_Conditional_0_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.loadTables());
    });
    \u0275\u0275elementStart(19, "span", 7);
    \u0275\u0275text(20, "refresh");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(21, QuickServiceComponent_Conditional_4_Conditional_1_Conditional_0_Conditional_21_Template, 3, 1, "div", 29)(22, QuickServiceComponent_Conditional_4_Conditional_1_Conditional_0_Conditional_22_Template, 6, 0, "div", 3)(23, QuickServiceComponent_Conditional_4_Conditional_1_Conditional_0_Conditional_23_Template, 2, 1, "p", 30)(24, QuickServiceComponent_Conditional_4_Conditional_1_Conditional_0_Conditional_24_Template, 3, 0, "div", 31);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r2.tableSearch());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("quick-service__filter--active", ctx_r2.tableFilter() === "ALL");
    \u0275\u0275attribute("aria-pressed", ctx_r2.tableFilter() === "ALL");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.tables().length);
    \u0275\u0275advance();
    \u0275\u0275classProp("quick-service__filter--active", ctx_r2.tableFilter() === "OCCUPIED");
    \u0275\u0275attribute("aria-pressed", ctx_r2.tableFilter() === "OCCUPIED");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.occupiedCount());
    \u0275\u0275advance();
    \u0275\u0275classProp("quick-service__filter--active", ctx_r2.tableFilter() === "FREE");
    \u0275\u0275attribute("aria-pressed", ctx_r2.tableFilter() === "FREE");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.freeCount());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.tablesLoading());
    \u0275\u0275advance();
    \u0275\u0275classProp("quick-service__spin", ctx_r2.tablesLoading());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.tablesLoading() && !ctx_r2.tables().length ? 21 : ctx_r2.tablesError() ? 22 : !ctx_r2.filteredTables().length ? 23 : 24);
  }
}
function QuickServiceComponent_Conditional_4_Conditional_1_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function QuickServiceComponent_Conditional_4_Conditional_1_Conditional_1_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.linkPassToCounter());
    });
    \u0275\u0275elementStart(1, "span", 47);
    \u0275\u0275text(2, "storefront");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 48)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Vincula o cart\xE3o ao balc\xE3o e abre o card\xE1pio.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 7);
    \u0275\u0275text(9, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", ctx_r2.isResolving());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.counterLabel);
  }
}
function QuickServiceComponent_Conditional_4_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 39);
    \u0275\u0275listener("submit", function QuickServiceComponent_Conditional_4_Conditional_1_Conditional_1_Template_form_submit_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(3);
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r2.searchPass());
    });
    \u0275\u0275elementStart(1, "div", 40)(2, "label", 41);
    \u0275\u0275text(3, "Cart\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 42)(5, "input", 43, 0);
    \u0275\u0275listener("ngModelChange", function QuickServiceComponent_Conditional_4_Conditional_1_Conditional_1_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.passInput.set($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "button", 44);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, QuickServiceComponent_Conditional_4_Conditional_1_Conditional_1_Conditional_9_Template, 10, 2, "button", 45);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r2.passInput())("disabled", ctx_r2.isResolving());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.passInput().trim() || ctx_r2.isResolving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isResolving() ? "Buscando\u2026" : "Buscar", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.counterTable() ? 9 : -1);
  }
}
function QuickServiceComponent_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, QuickServiceComponent_Conditional_4_Conditional_1_Conditional_0_Template, 25, 17)(1, QuickServiceComponent_Conditional_4_Conditional_1_Conditional_1_Template, 10, 5);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.mode() === "table" || !ctx_r2.passEnabled() ? 0 : 1);
  }
}
function QuickServiceComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, QuickServiceComponent_Conditional_4_Conditional_0_Template, 18, 4, "div", 10)(1, QuickServiceComponent_Conditional_4_Conditional_1_Template, 2, 1);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r2.target()) ? 0 : 1, tmp_1_0);
  }
}
var MODE_STORAGE_KEY = "quick-service:mode";
var STATUS_LABELS = {
  FREE: "Livre",
  OCCUPIED: "Ocupada",
  RESERVED: "Reservada",
  CLEANING: "Limpeza"
};
var QuickServiceComponent = class _QuickServiceComponent {
  tablesService = inject(TablesService);
  resolver = inject(QrTargetResolverService);
  router = inject(Router);
  consumptionPassesService = inject(ConsumptionPassesService);
  passEnabled = this.consumptionPassesService.enabled;
  tables = signal([]);
  tablesLoading = signal(true);
  tablesError = signal(false);
  mode = signal(this.readStoredMode());
  isScanning = signal(false);
  isResolving = signal(false);
  error = signal(null);
  selectedTableId = signal("");
  passInput = signal("");
  target = signal(null);
  // Grade de mesas: busca por número/nome/setor + filtro rápido por status.
  tableSearch = signal("");
  tableFilter = signal("ALL");
  filteredTables = computed(() => {
    const term = this.tableSearch().trim().toLowerCase();
    const filter = this.tableFilter();
    return this.tables().filter((table) => {
      if (filter === "FREE" && table.operationalStatus !== "FREE") {
        return false;
      }
      if (filter === "OCCUPIED" && table.operationalStatus !== "OCCUPIED") {
        return false;
      }
      if (!term) {
        return true;
      }
      return String(table.number) === term || String(table.number).startsWith(term) || (table.name ?? "").toLowerCase().includes(term) || (table.sectorName ?? "").toLowerCase().includes(term);
    });
  });
  occupiedCount = computed(() => this.tables().filter((table) => table.operationalStatus === "OCCUPIED").length);
  freeCount = computed(() => this.tables().filter((table) => table.operationalStatus === "FREE").length);
  passInputRef = viewChild("passInputEl");
  // Retirada no balcão (cartão de consumo ligado): mesa virtual do balcão — ver TablesService#getCounter.
  counterTable = signal(null);
  counterLabel = COUNTER_TABLE_LABEL;
  canLaunchAtCounter = computed(() => {
    const target = this.target();
    const counter = this.counterTable();
    return !!counter && target?.kind === "pass" && target.pass.tableId !== counter.id;
  });
  // Comanda só existe para mesa, ou cartão em uso (vinculado a uma mesa). Cartão livre ainda pode
  // receber pedido: a tela de lançar pedido pede a mesa e vincula o cartão nela.
  canOpenComanda = computed(() => {
    const target = this.target();
    if (!target) {
      return false;
    }
    return target.kind === "table" || target.pass.status === "IN_USE" && !!target.pass.tableId;
  });
  constructor() {
    this.consumptionPassesService.refreshEnabled();
    this.consumptionPassesService.getSettings().subscribe({
      next: (settings) => {
        if (settings.required) {
          this.tablesService.getCounter().subscribe({
            next: (counter) => this.counterTable.set(counter),
            error: () => this.counterTable.set(null)
          });
        }
      },
      error: () => this.counterTable.set(null)
    });
    this.loadTables();
    effect(() => {
      if (this.mode() === "pass" && !this.target() && !this.isScanning() && this.hasFinePointer()) {
        queueMicrotask(() => this.passInputRef()?.nativeElement.focus());
      }
    });
  }
  loadTables() {
    this.tablesLoading.set(true);
    this.tablesError.set(false);
    this.tablesService.list({ status: "ACTIVE", page: 0, size: 200, sortBy: "number", sortDirection: "ASC" }).subscribe({
      next: (response) => {
        this.tables.set(response.content);
        this.tablesLoading.set(false);
      },
      error: () => {
        this.tables.set([]);
        this.tablesLoading.set(false);
        this.tablesError.set(true);
      }
    });
  }
  setMode(mode) {
    this.mode.set(mode);
    this.storeMode(mode);
    this.error.set(null);
    this.isScanning.set(false);
    this.scanToCounter = false;
  }
  startScan() {
    this.error.set(null);
    this.target.set(null);
    this.isScanning.set(true);
  }
  onScanned(value) {
    this.isScanning.set(false);
    const toCounter = this.scanToCounter;
    this.scanToCounter = false;
    this.resolve(this.resolver.resolveScan(value, this.tables()), (target) => {
      if (toCounter && target.kind === "pass") {
        this.goToCounterMenu(target.pass.token);
      }
    });
  }
  // "Retirada no balcão" direto no modo cartão: vincula o cartão (digitado ou, sem nada digitado,
  // lido pela câmera) à mesa virtual do balcão e já abre o cardápio do lançamento — a tela de
  // lançar pedido vincula o cartão sozinha via ?cartao= (ver LancarPedidoComponent).
  scanToCounter = false;
  linkPassToCounter() {
    if (!this.counterTable() || this.isResolving()) {
      return;
    }
    if (!this.passInput().trim()) {
      this.scanToCounter = true;
      this.startScan();
      return;
    }
    this.resolve(this.resolver.resolvePass(this.passInput(), this.tables()), (target) => {
      if (target.kind === "pass") {
        this.goToCounterMenu(target.pass.token);
      }
    });
  }
  goToCounterMenu(passToken) {
    const counter = this.counterTable();
    if (!counter) {
      return;
    }
    this.router.navigate(["/painel/comandas/lancar-pedido"], {
      queryParams: { mesa: counter.id, cartao: passToken }
    });
  }
  selectTable(tableId) {
    this.selectedTableId.set(tableId);
    this.error.set(null);
    const table = this.tables().find((item) => item.id === tableId);
    this.target.set(table ? { kind: "table", table } : null);
  }
  searchPass() {
    if (!this.passInput().trim() || this.isResolving()) {
      return;
    }
    this.resolve(this.resolver.resolvePass(this.passInput(), this.tables()));
  }
  clearTarget() {
    this.target.set(null);
    this.selectedTableId.set("");
    this.passInput.set("");
    this.error.set(null);
    this.loadTables();
  }
  statusLabel(table) {
    return STATUS_LABELS[table.operationalStatus] ?? STATUS_LABELS.FREE;
  }
  statusClass(table) {
    return "qs-status--" + (table.operationalStatus || "FREE").toLowerCase();
  }
  launchOrder() {
    const target = this.target();
    if (!target) {
      return;
    }
    const queryParams = target.kind === "table" ? { mesa: target.table.id } : { mesa: target.pass.tableId || null, cartao: target.pass.token };
    this.router.navigate(["/painel/comandas/lancar-pedido"], { queryParams });
  }
  // Cartão com retirada no balcão: lança na comanda do cartão vinculada à mesa virtual do balcão.
  launchAtCounter() {
    const target = this.target();
    const counter = this.counterTable();
    if (!counter || target?.kind !== "pass") {
      return;
    }
    this.goToCounterMenu(target.pass.token);
  }
  openComanda() {
    const target = this.target();
    if (!target || !this.canOpenComanda()) {
      return;
    }
    if (target.kind === "table") {
      this.router.navigate(["/painel/comandas/lancar-pedido/comanda", target.table.id]);
      return;
    }
    this.router.navigate(["/painel/comandas/lancar-pedido/comanda", target.pass.tableId], {
      queryParams: { cartao: target.pass.token }
    });
  }
  tableLabel(table) {
    if (!table) {
      return "";
    }
    return formatTableLabel(table.number, table.name);
  }
  passTableLabel(tableNumber, tableName) {
    return formatTableLabel(tableNumber, tableName);
  }
  resolve(request$, onResolved) {
    this.isResolving.set(true);
    this.error.set(null);
    this.target.set(null);
    request$.subscribe({
      next: (target) => {
        this.isResolving.set(false);
        this.target.set(target);
        this.mode.set(target.kind);
        this.storeMode(target.kind);
        if (target.kind === "table") {
          this.selectedTableId.set(target.table.id);
        }
        onResolved?.(target);
      },
      error: (error) => {
        this.isResolving.set(false);
        this.error.set(this.resolveErrorMessage(error));
      }
    });
  }
  hasFinePointer() {
    return typeof matchMedia === "function" && matchMedia("(pointer: fine)").matches;
  }
  readStoredMode() {
    try {
      return localStorage.getItem(MODE_STORAGE_KEY) === "pass" ? "pass" : "table";
    } catch {
      return "table";
    }
  }
  storeMode(mode) {
    try {
      localStorage.setItem(MODE_STORAGE_KEY, mode);
    } catch {
    }
  }
  resolveErrorMessage(error) {
    if (error instanceof HttpErrorResponse) {
      if (error.status === 403) {
        return "Voc\xEA n\xE3o tem permiss\xE3o para consultar cart\xF5es de consumo.";
      }
      return "N\xE3o foi poss\xEDvel consultar o cart\xE3o. Tente novamente em instantes.";
    }
    return error instanceof Error ? error.message : "N\xE3o foi poss\xEDvel ler o QR Code.";
  }
  static \u0275fac = function QuickServiceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuickServiceComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuickServiceComponent, selectors: [["app-quick-service"]], viewQuery: function QuickServiceComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.passInputRef, _c02, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 3, consts: [["passInputEl", ""], ["aria-label", "Atendimento", 1, "card", "quick-service"], [1, "quick-service__toolbar"], ["role", "alert", 1, "form-alert", "form-alert--error"], ["fallbackHint", "Escolha a mesa ou digite o cart\xE3o abaixo.", 3, "hint"], ["role", "tablist", "aria-label", "Atender por", 1, "quick-service__modes"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", "quick-service__scan", 3, "click", "disabled", "title"], ["aria-hidden", "true", 1, "material-icons"], ["type", "button", "role", "tab", 1, "quick-service__mode", 3, "click"], ["fallbackHint", "Escolha a mesa ou digite o cart\xE3o abaixo.", 3, "scanned", "closed", "hint"], ["aria-live", "polite", 1, "quick-service__target"], [1, "quick-service__target-info"], ["aria-hidden", "true", 1, "quick-service__target-icon", "material-icons"], [1, "quick-service__target-text"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", "quick-service__clear", 3, "click"], [1, "quick-service__actions"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", "quick-service__action-main", 3, "click"], ["type", "button", "appRipple", "", 1, "btn", "btn--ghost"], [1, "quick-service__target-detail"], [1, "qs-status"], [1, "qs-status", "qs-status--occupied"], [1, "qs-status", "qs-status--free"], ["type", "button", "appRipple", "", 1, "btn", "btn--ghost", 3, "click"], [1, "quick-service__table-tools"], [1, "quick-service__search"], ["type", "search", "inputmode", "search", "placeholder", "Buscar mesa", "aria-label", "Buscar mesa", "autocomplete", "off", 1, "field__input", 3, "ngModelChange", "ngModel"], ["role", "group", "aria-label", "Filtrar mesas", 1, "quick-service__filters"], ["type", "button", 1, "quick-service__filter", 3, "click"], ["type", "button", "aria-label", "Atualizar mesas", "title", "Atualizar mesas", 1, "btn", "btn--ghost", "btn--sm", "quick-service__refresh", 3, "click", "disabled"], ["aria-busy", "true", 1, "quick-service__grid"], [1, "quick-service__empty"], [1, "quick-service__grid"], [1, "quick-service__tile", "skeleton"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], ["type", "button", "appRipple", "", 1, "quick-service__tile", 3, "class"], ["type", "button", "appRipple", "", 1, "quick-service__tile", 3, "click"], [1, "quick-service__tile-number"], [1, "quick-service__tile-name"], [1, "quick-service__tile-status"], [1, "quick-service__pass-form", 3, "submit"], [1, "field", "quick-service__field"], ["for", "quick-service-pass", 1, "field__label"], [1, "field__control"], ["id", "quick-service-pass", "type", "text", "placeholder", "N\xFAmero (ex.: 12) ou c\xF3digo CMU-\u2026", "autocomplete", "off", "autocapitalize", "characters", "spellcheck", "false", "enterkeyhint", "search", "name", "passInput", 1, "field__input", 3, "ngModelChange", "ngModel", "disabled"], ["type", "submit", "appRipple", "", 1, "btn", "btn--primary", 3, "disabled"], ["type", "button", "appRipple", "", 1, "quick-service__counter-option", 3, "disabled"], ["type", "button", "appRipple", "", 1, "quick-service__counter-option", 3, "click", "disabled"], ["aria-hidden", "true", 1, "quick-service__counter-icon", "material-icons"], [1, "quick-service__counter-text"]], template: function QuickServiceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 1);
      \u0275\u0275template(1, QuickServiceComponent_Conditional_1_Template, 7, 5, "div", 2)(2, QuickServiceComponent_Conditional_2_Template, 4, 1, "div", 3)(3, QuickServiceComponent_Conditional_3_Template, 1, 1, "app-qr-scanner", 4)(4, QuickServiceComponent_Conditional_4_Template, 2, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.target() && !ctx.isScanning() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isScanning() ? 3 : 4);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RippleDirective, QrScannerComponent], styles: ["\n\n.quick-service[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 20px;\n  margin-bottom: 24px;\n}\n.quick-service__toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.quick-service__toolbar[_ngcontent-%COMP%]   .quick-service__modes[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 360px;\n}\n.quick-service__scan[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-left: auto;\n  min-height: 48px;\n  justify-content: center;\n}\n.quick-service__modes[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4px;\n  padding: 4px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n}\n.quick-service__mode[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  min-height: 40px;\n  padding: 8px;\n  border: none;\n  border-radius: var(--radius-sm);\n  background: transparent;\n  color: var(--color-text-muted);\n  font: inherit;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.quick-service__mode[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.quick-service__mode--active[_ngcontent-%COMP%] {\n  background: var(--color-accent-bg);\n  color: var(--color-accent);\n  font-weight: 600;\n}\n.quick-service__field[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.quick-service__table-tools[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.quick-service__search[_ngcontent-%COMP%] {\n  position: relative;\n}\n.quick-service__search[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 12px;\n  transform: translateY(-50%);\n  font-size: 20px;\n  color: var(--color-text-muted);\n  pointer-events: none;\n}\n.quick-service__search[_ngcontent-%COMP%]   .field__input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 40px;\n}\n.quick-service__filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  overflow-x: auto;\n}\n.quick-service__filter[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  min-height: 34px;\n  padding: 4px 12px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-full);\n  background: transparent;\n  color: var(--color-text-muted);\n  font: inherit;\n  font-size: 0.8125rem;\n  white-space: nowrap;\n  cursor: pointer;\n  transition:\n    background var(--transition-fast),\n    color var(--transition-fast),\n    border-color var(--transition-fast);\n}\n.quick-service__filter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  opacity: 0.8;\n}\n.quick-service__filter--active[_ngcontent-%COMP%] {\n  border-color: var(--color-accent);\n  background: var(--color-accent-bg);\n  color: var(--color-accent);\n}\n.quick-service__refresh[_ngcontent-%COMP%] {\n  margin-left: auto;\n  flex-shrink: 0;\n}\n.quick-service__spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_quick-service-spin 0.9s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_quick-service-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.qs-status--free[_ngcontent-%COMP%] {\n  --qs-status: #22c55e;\n}\n.qs-status--occupied[_ngcontent-%COMP%] {\n  --qs-status: #ef4444;\n}\n.qs-status--reserved[_ngcontent-%COMP%] {\n  --qs-status: #f59e0b;\n}\n.qs-status--cleaning[_ngcontent-%COMP%] {\n  --qs-status: #94a3b8;\n}\n.qs-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  margin-right: 6px;\n  padding: 1px 8px;\n  border-radius: var(--radius-full);\n  background: color-mix(in srgb, var(--qs-status) 16%, transparent);\n  color: var(--qs-status);\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.quick-service__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(88px, 1fr));\n  gap: 8px;\n  max-height: 340px;\n  padding: 2px;\n  overflow-y: auto;\n}\n.quick-service__tile[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  min-height: 84px;\n  padding: 10px 6px 8px;\n  border: 1px solid var(--color-border);\n  border-top: 3px solid var(--qs-status, var(--color-border));\n  border-radius: var(--radius-md);\n  background: var(--color-bg-elevated);\n  color: var(--color-text);\n  font: inherit;\n  cursor: pointer;\n  overflow: hidden;\n  transition:\n    transform var(--transition-fast),\n    border-color var(--transition-fast),\n    background var(--transition-fast);\n}\n.quick-service__tile[_ngcontent-%COMP%]:hover {\n  border-color: var(--qs-status, var(--color-accent));\n  background: color-mix(in srgb, var(--qs-status, var(--color-accent)) 8%, var(--color-bg-elevated));\n}\n.quick-service__tile[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.quick-service__tile[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--color-accent);\n  outline-offset: 2px;\n}\n.quick-service__tile.skeleton[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.quick-service__tile-number[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1.1;\n}\n.quick-service__tile-name[_ngcontent-%COMP%] {\n  max-width: 100%;\n  overflow: hidden;\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.quick-service__tile-status[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  font-weight: 600;\n  color: var(--qs-status, var(--color-text-muted));\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n}\n.quick-service__empty[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 16px;\n  border: 1px dashed var(--color-border);\n  border-radius: var(--radius-md);\n  font-size: 0.875rem;\n  color: var(--color-text-muted);\n  text-align: center;\n}\n.quick-service__pass-form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n}\n.quick-service__pass-form[_ngcontent-%COMP%]   .quick-service__field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.quick-service__pass-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-top: 26px;\n}\n.quick-service__counter-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  padding: 14px 16px;\n  border: 1px dashed var(--color-accent);\n  border-radius: var(--radius-md);\n  background: transparent;\n  color: var(--color-text);\n  font: inherit;\n  text-align: left;\n  cursor: pointer;\n  transition: background var(--transition-fast);\n}\n.quick-service__counter-option[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-accent-bg);\n}\n.quick-service__counter-option[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.quick-service__counter-icon[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n.quick-service__counter-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  gap: 2px;\n}\n.quick-service__counter-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.quick-service__target[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 16px;\n  border: 1px solid var(--color-accent);\n  border-radius: var(--radius-md);\n  background: var(--color-accent-bg);\n}\n.quick-service__target-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.quick-service__target-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.125rem;\n}\n.quick-service__target-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.quick-service__target-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  flex-shrink: 0;\n  border-radius: var(--radius-full);\n  background: var(--color-bg-elevated);\n  color: var(--color-accent);\n}\n.quick-service__target-detail[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.quick-service__clear[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.quick-service__actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}\n.quick-service__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  justify-content: center;\n  min-height: 48px;\n}\n.quick-service__action-main[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  min-height: 52px !important;\n  font-size: 1rem;\n}\n@media (max-width: 420px) {\n  .quick-service[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .quick-service__actions[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .quick-service__modes[_ngcontent-%COMP%]    + .quick-service__scan[_ngcontent-%COMP%] {\n    width: 48px;\n    padding: 0;\n  }\n  .quick-service__modes[_ngcontent-%COMP%]    + .quick-service__scan[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n    display: none;\n  }\n  .quick-service__scan[_ngcontent-%COMP%]:only-child {\n    flex: 1;\n  }\n  .quick-service__grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(72px, 1fr));\n  }\n}\n.field__hint[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 6px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=quick-service.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuickServiceComponent, { className: "QuickServiceComponent", filePath: "src\\app\\shared\\components\\quick-service\\quick-service.component.ts", lineNumber: 37 });
})();

// src/app/features/admin/pages/dashboard/dashboard.component.ts
var _forTrack02 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.days;
var _forTrack2 = ($index, $item) => $item.companyId;
function DashboardComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_6_For_2_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectTab(tab_r2.id));
    });
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("dashboard-tabs__tab--active", ctx_r2.activeTab() === tab_r2.id);
    \u0275\u0275property("id", "dashboard-tab-" + tab_r2.id);
    \u0275\u0275attribute("aria-selected", ctx_r2.activeTab() === tab_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r2.label, " ");
  }
}
function DashboardComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_6_For_2_Template, 4, 6, "button", 7, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.availableTabs());
  }
}
function DashboardComponent_Conditional_8_For_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_8_For_30_Template_button_click_0_listener() {
      const preset_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.applyPlatformPreset(preset_r6.days));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const preset_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("revenue-section__preset--active", ctx_r2.activePlatformPresetDays() === preset_r6.days);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", preset_r6.label, " ");
  }
}
function DashboardComponent_Conditional_8_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "span", 9);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.platformSummaryError(), " ");
  }
}
function DashboardComponent_Conditional_8_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1, "Carregando taxas\u2026");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_8_Conditional_46_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "span", 50);
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_8_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275template(1, DashboardComponent_Conditional_8_Conditional_46_Conditional_1_Template, 2, 0, "div", 48);
    \u0275\u0275element(2, "app-line-chart", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isLoadingPlatformSummary() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("points", ctx_r2.platformFeePoints())("height", 240);
  }
}
function DashboardComponent_Conditional_8_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "span", 9);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.platformOverviewError(), " ");
  }
}
function DashboardComponent_Conditional_8_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("assinatura paga ou em teste \xB7 de ", ctx.totalCompanies, " cadastrados");
  }
}
function DashboardComponent_Conditional_8_Conditional_74_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const overview_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+ ", overview_r7.pastDueCompanies, " em atraso");
  }
}
function DashboardComponent_Conditional_8_Conditional_74_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "nenhuma em atraso");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_8_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DashboardComponent_Conditional_8_Conditional_74_Conditional_0_Template, 2, 1, "span", 51)(1, DashboardComponent_Conditional_8_Conditional_74_Conditional_1_Template, 2, 0, "span", 41);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.pastDueCompanies > 0 ? 0 : 1);
  }
}
function DashboardComponent_Conditional_8_Conditional_123_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1, "Carregando\u2026");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_8_Conditional_124_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.pendingFeeSearch() ? "Nenhum estabelecimento encontrado." : "Nenhuma taxa pendente no momento.", " ");
  }
}
function DashboardComponent_Conditional_8_Conditional_125_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 54);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 53);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 53);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 53);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.tradeName);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pending-fees__status--warn", ctx_r2.situationTone(row_r8.situation) === "warn")("pending-fees__status--off", ctx_r2.situationTone(row_r8.situation) === "off");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.situationLabels[row_r8.situation], " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(row_r8.pendingAmount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(row_r8.processingAmount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.feeCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatShortDate(row_r8.oldestFeeAt));
  }
}
function DashboardComponent_Conditional_8_Conditional_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "table", 52)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Estabelecimento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Situa\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 53);
    \u0275\u0275text(9, "Pendente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 53);
    \u0275\u0275text(11, "Em processamento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 53);
    \u0275\u0275text(13, "Taxas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Mais antiga");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, DashboardComponent_Conditional_8_Conditional_125_For_18_Template, 14, 10, "tr", null, _forTrack2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r2.filteredPendingFees());
  }
}
function DashboardComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "h2", 13);
    \u0275\u0275text(4, "Taxas da Comanda \xDAnica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14)(6, "div", 15)(7, "span", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 17);
    \u0275\u0275text(10, "taxas recebidas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 18);
    \u0275\u0275text(12, "cobran\xE7as semanais confirmadas na Asaas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 15)(14, "span", 19);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 17);
    \u0275\u0275text(17, "mensalidades recebidas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 18);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 15)(21, "span", 19);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 17);
    \u0275\u0275text(24, "taxas geradas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 18);
    \u0275\u0275text(26, "sobre os pagamentos das comandas no per\xEDodo");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 20)(28, "div", 21);
    \u0275\u0275repeaterCreate(29, DashboardComponent_Conditional_8_For_30_Template, 2, 3, "button", 22, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 23)(32, "label", 24)(33, "span");
    \u0275\u0275text(34, "De");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 25);
    \u0275\u0275listener("change", function DashboardComponent_Conditional_8_Template_input_change_35_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPlatformStartDateChange($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "label", 24)(37, "span");
    \u0275\u0275text(38, "At\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 26);
    \u0275\u0275listener("change", function DashboardComponent_Conditional_8_Template_input_change_39_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPlatformEndDateChange($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "button", 27);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_8_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadPlatformDashboard());
    });
    \u0275\u0275elementStart(41, "span", 9);
    \u0275\u0275text(42, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(44, DashboardComponent_Conditional_8_Conditional_44_Template, 4, 1, "div", 28)(45, DashboardComponent_Conditional_8_Conditional_45_Template, 2, 0, "p", 29)(46, DashboardComponent_Conditional_8_Conditional_46_Template, 3, 3, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 31)(48, "div", 32)(49, "h2", 33);
    \u0275\u0275text(50, "Estabelecimentos e taxas pendentes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "a", 34)(52, "span", 9);
    \u0275\u0275text(53, "summarize");
    \u0275\u0275elementEnd();
    \u0275\u0275text(54, " Relat\xF3rio de estabelecimentos ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "p", 35);
    \u0275\u0275text(56, "Situa\xE7\xE3o atual pela assinatura mais recente \u2014 independe do per\xEDodo acima.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(57, DashboardComponent_Conditional_8_Conditional_57_Template, 4, 1, "div", 28);
    \u0275\u0275elementStart(58, "div", 36)(59, "div", 37)(60, "span", 38);
    \u0275\u0275text(61, "storefront");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "span", 39);
    \u0275\u0275text(63, "Estabelecimentos ativos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "span", 40);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd();
    \u0275\u0275template(66, DashboardComponent_Conditional_8_Conditional_66_Template, 2, 1, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 37)(68, "span", 38);
    \u0275\u0275text(69, "card_membership");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "span", 39);
    \u0275\u0275text(71, "Com assinatura paga");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "span", 40);
    \u0275\u0275text(73);
    \u0275\u0275elementEnd();
    \u0275\u0275template(74, DashboardComponent_Conditional_8_Conditional_74_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 37)(76, "span", 38);
    \u0275\u0275text(77, "science");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "span", 39);
    \u0275\u0275text(79, "Em per\xEDodo de teste");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "span", 40);
    \u0275\u0275text(81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "span", 41);
    \u0275\u0275text(83, "cortesia ainda vigente");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 37)(85, "span", 38);
    \u0275\u0275text(86, "store_mall_directory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "span", 39);
    \u0275\u0275text(88, "Inativos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "span", 40);
    \u0275\u0275text(90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "span", 41);
    \u0275\u0275text(92, "teste encerrado, expirada, cancelada ou sem assinatura");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div", 37)(94, "span", 38);
    \u0275\u0275text(95, "hourglass_top");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "span", 39);
    \u0275\u0275text(97, "Taxas pendentes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "span", 40);
    \u0275\u0275text(99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "span", 41);
    \u0275\u0275text(101, "entram na pr\xF3xima cobran\xE7a semanal");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "div", 37)(103, "span", 38);
    \u0275\u0275text(104, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "span", 39);
    \u0275\u0275text(106, "Em processamento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "span", 40);
    \u0275\u0275text(108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "span", 41);
    \u0275\u0275text(110, "cobran\xE7a aguardando a Asaas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "div", 37)(112, "span", 38);
    \u0275\u0275text(113, "store");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "span", 39);
    \u0275\u0275text(115, "Estabelecimentos com taxa pendente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "span", 40);
    \u0275\u0275text(117);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(118, "div", 42)(119, "div", 43)(120, "h3", 44);
    \u0275\u0275text(121, "Taxas pendentes por estabelecimento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "input", 45);
    \u0275\u0275listener("input", function DashboardComponent_Conditional_8_Template_input_input_122_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.pendingFeeSearch.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(123, DashboardComponent_Conditional_8_Conditional_123_Template, 2, 0, "p", 29)(124, DashboardComponent_Conditional_8_Conditional_124_Template, 2, 1, "p", 29)(125, DashboardComponent_Conditional_8_Conditional_125_Template, 19, 0, "div", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_4_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_18_0;
    let tmp_19_0;
    let tmp_20_0;
    let tmp_21_0;
    let tmp_22_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r2.isLoadingPlatformSummary() ? "\u2014" : ctx_r2.formatCurrency((tmp_1_0 = ctx_r2.platformSummary()) == null ? null : tmp_1_0.receivedFeeAmount), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r2.isLoadingPlatformSummary() ? "\u2014" : ctx_r2.formatCurrency((tmp_2_0 = ctx_r2.platformSummary()) == null ? null : tmp_2_0.receivedSubscriptionAmount), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("total recebido ", ctx_r2.formatCurrency(ctx_r2.platformReceivedTotal()), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.isLoadingPlatformSummary() ? "\u2014" : ctx_r2.formatCurrency((tmp_4_0 = ctx_r2.platformSummary()) == null ? null : tmp_4_0.totalFeeAmount), " ");
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r2.revenuePresets);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r2.platformStartDate())("max", ctx_r2.platformEndDate());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.platformEndDate())("min", ctx_r2.platformStartDate());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.isLoadingPlatformSummary() || ctx_r2.isLoadingPlatformOverview());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.isLoadingPlatformSummary() || ctx_r2.isLoadingPlatformOverview() ? "Atualizando\u2026" : "Atualizar", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.platformSummaryError() ? 44 : ctx_r2.isLoadingPlatformSummary() && !ctx_r2.platformSummary() ? 45 : 46);
    \u0275\u0275advance(13);
    \u0275\u0275conditional(ctx_r2.platformOverviewError() ? 57 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r2.isLoadingPlatformOverview() ? "\u2014" : ((tmp_14_0 = (tmp_14_0 = ctx_r2.platformOverview()) == null ? null : tmp_14_0.activeCompanies) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : 0) + ((tmp_14_0 = (tmp_14_0 = ctx_r2.platformOverview()) == null ? null : tmp_14_0.trialCompanies) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : 0), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_15_0 = ctx_r2.platformOverview()) ? 66 : -1, tmp_15_0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.isLoadingPlatformOverview() ? "\u2014" : (tmp_16_0 = ctx_r2.platformOverview()) == null ? null : tmp_16_0.activeCompanies);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_17_0 = ctx_r2.platformOverview()) ? 74 : -1, tmp_17_0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.isLoadingPlatformOverview() ? "\u2014" : (tmp_18_0 = ctx_r2.platformOverview()) == null ? null : tmp_18_0.trialCompanies);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.isLoadingPlatformOverview() ? "\u2014" : (tmp_19_0 = ctx_r2.platformOverview()) == null ? null : tmp_19_0.inactiveCompanies);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.isLoadingPlatformOverview() ? "\u2014" : ctx_r2.formatCurrency((tmp_20_0 = ctx_r2.platformOverview()) == null ? null : tmp_20_0.pendingFeeBalance));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.isLoadingPlatformOverview() ? "\u2014" : ctx_r2.formatCurrency((tmp_21_0 = ctx_r2.platformOverview()) == null ? null : tmp_21_0.processingFeeBalance));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.isLoadingPlatformOverview() ? "\u2014" : (tmp_22_0 = ctx_r2.platformOverview()) == null ? null : tmp_22_0.companiesWithPendingFees);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r2.pendingFeeSearch());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isLoadingPlatformOverview() && !ctx_r2.platformOverview() ? 123 : ctx_r2.filteredPendingFees().length === 0 ? 124 : 125);
  }
}
function DashboardComponent_Conditional_9_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" caixa ", ctx_r2.formatCurrency((tmp_2_0 = ctx_r2.cashRegisterAmount()) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : 0), " \xB7 gar\xE7om ", ctx_r2.formatCurrency((tmp_2_0 = ctx_r2.cashWaiterAmount()) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : 0), " ");
  }
}
function DashboardComponent_Conditional_9_For_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_9_For_27_Template_button_click_0_listener() {
      const preset_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.applyRevenuePreset(preset_r11.days));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const preset_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("revenue-section__preset--active", ctx_r2.activeRevenuePresetDays() === preset_r11.days);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", preset_r11.label, " ");
  }
}
function DashboardComponent_Conditional_9_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "span", 9);
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
function DashboardComponent_Conditional_9_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1, "Carregando faturamento\u2026");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_9_Conditional_43_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "span", 50);
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_9_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275template(1, DashboardComponent_Conditional_9_Conditional_43_Conditional_1_Template, 2, 0, "div", 48);
    \u0275\u0275element(2, "app-line-chart", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isLoadingRevenue() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("points", ctx_r2.grossPoints())("comparisonPoints", ctx_r2.netPoints())("height", 260);
  }
}
function DashboardComponent_Conditional_9_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "span", 9);
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
function DashboardComponent_Conditional_9_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const current_r12 = ctx;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", current_r12.freeTables, " livres", current_r12.cleaningTables ? " \xB7 " + current_r12.cleaningTables + " em limpeza" : "", " ");
  }
}
function DashboardComponent_Conditional_9_Conditional_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
    \u0275\u0275text(2, "card_giftcard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 39);
    \u0275\u0275text(4, "Cr\xE9dito da assinatura dispon\xEDvel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(ctx_r2.subscriptionCreditAvailable()));
  }
}
function DashboardComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "h2", 13);
    \u0275\u0275text(4, "Faturamento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14)(6, "div", 15)(7, "span", 19);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 17);
    \u0275\u0275text(10, "faturamento total");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, DashboardComponent_Conditional_9_Conditional_11_Template, 2, 2, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 15)(13, "span", 19);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 17);
    \u0275\u0275text(16, "taxas Comanda \xDAnica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 18);
    \u0275\u0275text(18, "cobradas semanalmente no cart\xE3o");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 15)(20, "span", 16);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 17);
    \u0275\u0275text(23, "l\xEDquido");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "div", 20)(25, "div", 21);
    \u0275\u0275repeaterCreate(26, DashboardComponent_Conditional_9_For_27_Template, 2, 3, "button", 22, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 23)(29, "label", 24)(30, "span");
    \u0275\u0275text(31, "De");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 25);
    \u0275\u0275listener("change", function DashboardComponent_Conditional_9_Template_input_change_32_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onRevenueStartDateChange($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "label", 24)(34, "span");
    \u0275\u0275text(35, "At\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 26);
    \u0275\u0275listener("change", function DashboardComponent_Conditional_9_Template_input_change_36_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onRevenueEndDateChange($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "button", 27);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_9_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.refreshFinancialReport());
    });
    \u0275\u0275elementStart(38, "span", 9);
    \u0275\u0275text(39, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(41, DashboardComponent_Conditional_9_Conditional_41_Template, 4, 1, "div", 28)(42, DashboardComponent_Conditional_9_Conditional_42_Template, 2, 0, "p", 29)(43, DashboardComponent_Conditional_9_Conditional_43_Template, 3, 4, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 31)(45, "div", 32)(46, "h2", 33);
    \u0275\u0275text(47, "Opera\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 55);
    \u0275\u0275element(49, "span", 56);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(51, DashboardComponent_Conditional_9_Conditional_51_Template, 4, 1, "div", 28);
    \u0275\u0275elementStart(52, "div", 36)(53, "div", 37)(54, "span", 38);
    \u0275\u0275text(55, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 39);
    \u0275\u0275text(57, "Comandas abertas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 40);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 37)(61, "span", 38);
    \u0275\u0275text(62, "table_bar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span", 39);
    \u0275\u0275text(64, "Mesas ocupadas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "span", 40);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd();
    \u0275\u0275template(67, DashboardComponent_Conditional_9_Conditional_67_Template, 2, 2, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 37)(69, "span", 38);
    \u0275\u0275text(70, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "span", 39);
    \u0275\u0275text(72, "Funcion\xE1rios ativos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span", 40);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 37)(76, "span", 38);
    \u0275\u0275text(77, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "span", 39);
    \u0275\u0275text(79, "Valor em comandas abertas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "span", 40);
    \u0275\u0275text(81);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 37)(83, "span", 38);
    \u0275\u0275text(84, "point_of_sale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "span", 39);
    \u0275\u0275text(86, "Pedidos feitos hoje");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "span", 40);
    \u0275\u0275text(88);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 37)(90, "span", 38);
    \u0275\u0275text(91, "shopping_cart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "span", 39);
    \u0275\u0275text(93, "Itens no carrinho");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "span", 40);
    \u0275\u0275text(95);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "div", 37)(97, "span", 38);
    \u0275\u0275text(98, "hourglass_top");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "span", 39);
    \u0275\u0275text(100, "Taxa da Comanda \xDAnica pendente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "span", 40);
    \u0275\u0275text(102);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(103, DashboardComponent_Conditional_9_Conditional_103_Template, 7, 1, "div", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_16_0;
    let tmp_17_0;
    let tmp_18_0;
    let tmp_19_0;
    let tmp_20_0;
    let tmp_21_0;
    let tmp_22_0;
    let tmp_23_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.isLoadingRevenue() ? "\u2014" : ctx_r2.formatCurrency(ctx_r2.revenueTotal()));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.cashRegisterAmount() != null ? 11 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.platformFeesAmount() != null ? ctx_r2.formatCurrency(ctx_r2.platformFeesAmount()) : "\u2014");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r2.isLoadingRevenue() ? "\u2014" : ctx_r2.formatCurrency(ctx_r2.revenueNetTotal()), " ");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.revenuePresets);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r2.revenueStartDate())("max", ctx_r2.revenueEndDate());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.revenueEndDate())("min", ctx_r2.revenueStartDate());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.isLoadingRevenue());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.isLoadingRevenue() ? "Atualizando\u2026" : "Atualizar", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.revenueError() ? 41 : ctx_r2.isLoadingRevenue() && ctx_r2.revenueSeries().length === 0 ? 42 : 43);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("live-indicator--error", ctx_r2.summaryError());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.summaryError() ? "Reconectando\u2026" : "Ao vivo", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.summaryError() ? 51 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.isLoadingSummary() ? "\u2014" : (tmp_16_0 = ctx_r2.summary()) == null ? null : tmp_16_0.openComandas);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.isLoadingSummary() ? "\u2014" : (tmp_17_0 = ctx_r2.summary()) == null ? null : tmp_17_0.occupiedTables);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_18_0 = ctx_r2.summary()) ? 67 : -1, tmp_18_0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.isLoadingSummary() ? "\u2014" : (tmp_19_0 = ctx_r2.summary()) == null ? null : tmp_19_0.activeEmployees);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.isLoadingSummary() ? "\u2014" : ctx_r2.formatCurrency((tmp_20_0 = ctx_r2.summary()) == null ? null : tmp_20_0.openComandasValue));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.isLoadingSummary() ? "\u2014" : ctx_r2.formatCurrency((tmp_21_0 = ctx_r2.summary()) == null ? null : tmp_21_0.ordersValueToday));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.isLoadingSummary() ? "\u2014" : (tmp_22_0 = ctx_r2.summary()) == null ? null : tmp_22_0.openCartItemsCount);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.isLoadingSummary() ? "\u2014" : ctx_r2.formatCurrency((tmp_23_0 = ctx_r2.summary()) == null ? null : tmp_23_0.pendingFeeBalance));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.subscriptionCreditAvailable() != null ? 103 : -1);
  }
}
function DashboardComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-quick-service");
  }
}
function DashboardComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-admin-pedidos", 5);
  }
  if (rf & 2) {
    \u0275\u0275property("embedded", true);
  }
}
function DashboardComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-admin-servicos", 5);
  }
  if (rf & 2) {
    \u0275\u0275property("embedded", true);
  }
}
function DashboardComponent_Conditional_13_Conditional_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_13_Conditional_1_For_3_Template_button_click_0_listener() {
      const floorPlan_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectFloorPlan(floorPlan_r14.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const floorPlan_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("floor-plan-section__tab--active", floorPlan_r14.id === ctx_r2.selectedFloorPlanId());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", floorPlan_r14.name, " ");
  }
}
function DashboardComponent_Conditional_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 60);
    \u0275\u0275repeaterCreate(2, DashboardComponent_Conditional_13_Conditional_1_For_3_Template, 2, 3, "button", 61, _forTrack02);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.floorPlans());
  }
}
function DashboardComponent_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1, "Carregando mapa\u2026");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-floor-plan-viewer", 59);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("floorPlanId", ctx_r2.selectedFloorPlanId());
  }
}
function DashboardComponent_Conditional_13_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1, "Nenhum ambiente com mapa cadastrado ainda.");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, DashboardComponent_Conditional_13_Conditional_1_Template, 4, 0, "div", 58)(2, DashboardComponent_Conditional_13_Conditional_2_Template, 2, 0, "p", 29)(3, DashboardComponent_Conditional_13_Conditional_3_Template, 1, 1, "app-floor-plan-viewer", 59)(4, DashboardComponent_Conditional_13_Conditional_4_Template, 2, 0, "p", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.floorPlans().length > 1 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isLoadingFloorPlans() ? 2 : ctx_r2.selectedFloorPlanId() ? 3 : 4);
  }
}
var MANAGEMENT_PROFILES = ["ADMIN", "OWNER", "COMMERCIAL", "MANAGER"];
var QUEUE_HOME_PROFILES = ["WAITER", "KITCHEN"];
var SERVICE_HOME_PROFILES = ["WAITER"];
var QUICK_SERVICE_PROFILES = ["WAITER", "CASHIER", "OWNER", "COMMERCIAL", "MANAGER"];
var WS_RETRY_DELAY_MS = 5e3;
var WS_SILENT_RETRIES = 3;
var SWIPE_MIN_DISTANCE_PX = 60;
var SWIPE_MAX_DURATION_MS = 700;
var SWIPE_IGNORE_SELECTOR = "canvas, input, textarea, select, video, [data-no-swipe]";
var REVENUE_PRESETS = [
  { label: "7 dias", days: 7 },
  { label: "30 dias", days: 30 },
  { label: "90 dias", days: 90 }
];
var DashboardComponent = class _DashboardComponent {
  authService = inject(AuthService);
  floorPlansService = inject(FloorPlansService);
  dashboardService = inject(DashboardService);
  subscriptionService = inject(SubscriptionService);
  extratoService = inject(ExtratoService);
  platformFinanceService = inject(PlatformFinanceService);
  host = inject(ElementRef);
  // Crédito da assinatura — vem do SubscriptionService (REST, já carregado pelo subscriptionGuard),
  // NÃO do resumo operacional do WebSocket: o crédito não é métrica de tempo real e o payload do
  // WS passa por serializadores diferentes do REST.
  subscriptionCreditAvailable = computed(() => this.subscriptionService.status()?.credit?.available ?? null);
  currencyFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
  shortDateFormatter = brDateTimeFormat({ day: "2-digit", month: "2-digit", year: "numeric" });
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
  isQuickServiceProfile = computed(() => {
    const profileCode = this.selectedCompany()?.profileCode;
    return !!profileCode && QUICK_SERVICE_PROFILES.includes(profileCode);
  });
  // Indicadores operacionais, atualizados em tempo real via WebSocket (ver connectRealtime) —
  // não há mais um fetch único aqui, a conexão já recebe o estado atual ao abrir e depois a cada
  // ~10s (ver DashboardBroadcastScheduler no backend).
  summary = signal(null);
  isLoadingSummary = signal(false);
  summaryError = signal(null);
  summarySubscription;
  revenueSeries = signal([]);
  isLoadingRevenue = signal(false);
  revenueError = signal(null);
  revenueStartDate = signal(this.toIsoDate(this.daysAgo(29)));
  revenueEndDate = signal(this.toIsoDate(/* @__PURE__ */ new Date()));
  activeRevenuePresetDays = signal(30);
  grossPoints = computed(() => this.revenueSeries().map((point) => ({ date: point.date, amount: point.amount })));
  netPoints = computed(() => this.revenueSeries().map((point) => ({ date: point.date, amount: point.netAmount ?? 0 })));
  revenueTotal = computed(() => this.revenueSeries().reduce((total, point) => total + point.amount, 0));
  revenueNetTotal = computed(() => this.revenueSeries().reduce((total, point) => total + (point.netAmount ?? 0), 0));
  // Recebido no período por onde entrou (caixa / garçom) — resumo do extrato, mesmo período do
  // gráfico. A taxa da Comanda Única desses pagamentos é cobrada semanalmente no cartão.
  cashRegisterAmount = signal(null);
  cashWaiterAmount = signal(null);
  platformFeesAmount = signal(null);
  // Aba "Comanda Única" — só para o platform admin (User.isPlatformAdmin), independente da empresa
  // selecionada: taxas recebidas/geradas no período (PlatformFinanceService#getSummary) e o estado
  // atual de estabelecimentos e taxas pendentes por estabelecimento (#getOverview).
  isPlatformAdmin = this.authService.isPlatformAdmin;
  platformSummary = signal(null);
  platformOverview = signal(null);
  isLoadingPlatformSummary = signal(false);
  isLoadingPlatformOverview = signal(false);
  platformSummaryError = signal(null);
  platformOverviewError = signal(null);
  platformStartDate = signal(this.toIsoDate(this.daysAgo(29)));
  platformEndDate = signal(this.toIsoDate(/* @__PURE__ */ new Date()));
  activePlatformPresetDays = signal(30);
  pendingFeeSearch = signal("");
  platformFeePoints = computed(() => (this.platformSummary()?.feeSeries ?? []).map((point) => ({ date: point.date, amount: point.amount })));
  platformReceivedTotal = computed(() => {
    const summary = this.platformSummary();
    return summary ? summary.receivedFeeAmount + summary.receivedSubscriptionAmount : null;
  });
  filteredPendingFees = computed(() => {
    const term = this.pendingFeeSearch().trim().toLocaleLowerCase("pt-BR");
    const rows = this.platformOverview()?.pendingFeesByCompany ?? [];
    return term ? rows.filter((row) => row.tradeName?.toLocaleLowerCase("pt-BR").includes(term)) : rows;
  });
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
    if (this.isPlatformAdmin()) {
      tabs.push({ id: "platform", label: "Comanda \xDAnica", icon: "account_balance" });
    }
    if (this.isManagementProfile()) {
      tabs.push({ id: "overview", label: "Vis\xE3o geral", icon: "insights" });
    }
    if (this.isQuickServiceProfile()) {
      tabs.push({ id: "atendimento", label: "Atendimento", icon: "bolt" });
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
  // Sentido da última troca — a aba nova entra deslizando do lado certo.
  slideDirection = signal("next");
  swipeStart = null;
  // Reage à troca de empresa (seletor do topo ou empresa recém-criada — ver
  // AdminLayoutComponent#selectCompany/onCompanyCreated), não só à primeira montagem: a home
  // sempre navega para esta mesma rota (/painel/dashboard), então se o usuário já estava aqui a
  // navegação não remonta o componente — sem reagir ao signal, os dados ficariam presos na
  // empresa anterior. Ler selectedCompany()/isManagementProfile() aqui é o que faz o efeito
  // disparar de novo a cada troca; o resto do corpo vai em untracked() para não reagir também às
  // mudanças de revenueStartDate/revenueEndDate (essas já têm seus próprios gatilhos — ver
  // applyRevenuePreset/onRevenueStartDateChange — e reagiriam aqui também, duplicando a chamada).
  constructor() {
    effect(() => {
      const companyId = this.selectedCompany()?.companyId ?? null;
      const isManagement = this.isManagementProfile();
      untracked(() => this.reloadForCompany(companyId, isManagement));
    });
  }
  reloadForCompany(companyId, isManagement) {
    this.summarySubscription?.unsubscribe();
    this.summary.set(null);
    this.summaryError.set(null);
    this.revenueSeries.set([]);
    this.cashRegisterAmount.set(null);
    this.cashWaiterAmount.set(null);
    this.platformFeesAmount.set(null);
    this.activeTab.set(this.availableTabs()[0]?.id ?? "floorplan");
    if (isManagement && companyId) {
      this.connectRealtimeSummary();
      this.loadFinancialReport();
    }
    if (this.isPlatformAdmin() && !this.platformOverview()) {
      this.loadPlatformDashboard();
    }
    this.loadFloorPlans();
  }
  selectTab(tabId) {
    const tabs = this.availableTabs();
    const from = tabs.findIndex((tab) => tab.id === this.activeTab());
    const to = tabs.findIndex((tab) => tab.id === tabId);
    this.slideDirection.set(to >= from ? "next" : "prev");
    this.activeTab.set(tabId);
    setTimeout(() => this.host.nativeElement.querySelector(`#dashboard-tab-${tabId}`)?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" }));
  }
  onPanelTouchStart(event) {
    const target = event.target;
    if (event.touches.length !== 1 || !target || target.closest(SWIPE_IGNORE_SELECTOR) || this.isInsideHorizontalScroll(target)) {
      this.swipeStart = null;
      return;
    }
    const touch = event.touches[0];
    this.swipeStart = { x: touch.clientX, y: touch.clientY, time: Date.now() };
  }
  onPanelTouchEnd(event) {
    const start = this.swipeStart;
    this.swipeStart = null;
    if (!start || event.changedTouches.length === 0) {
      return;
    }
    const touch = event.changedTouches[0];
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    if (Math.abs(dx) < SWIPE_MIN_DISTANCE_PX || Math.abs(dx) < Math.abs(dy) * 1.5 || Date.now() - start.time > SWIPE_MAX_DURATION_MS) {
      return;
    }
    const tabs = this.availableTabs();
    const next = tabs[tabs.findIndex((tab) => tab.id === this.activeTab()) + (dx < 0 ? 1 : -1)];
    if (next) {
      this.selectTab(next.id);
    }
  }
  // Tabelas e listas que rolam na horizontal dentro da aba ficam com o gesto — só troca de aba se
  // nenhum elemento entre o toque e o painel puder rolar para o lado.
  isInsideHorizontalScroll(element) {
    const panel = this.host.nativeElement.querySelector(".dashboard-panel");
    for (let node = element; node && node !== panel; node = node.parentElement) {
      const overflowX = getComputedStyle(node).overflowX;
      if ((overflowX === "auto" || overflowX === "scroll") && node.scrollWidth > node.clientWidth) {
        return true;
      }
    }
    return false;
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
    this.loadFinancialReport();
  }
  onRevenueStartDateChange(value) {
    this.activeRevenuePresetDays.set(null);
    this.revenueStartDate.set(value);
    this.loadFinancialReport();
  }
  onRevenueEndDateChange(value) {
    this.activeRevenuePresetDays.set(null);
    this.revenueEndDate.set(value);
    this.loadFinancialReport();
  }
  // Recarrega o gráfico/saldos sob demanda (botão "Atualizar") — mesmo período selecionado, sem
  // esperar o próximo carregamento automático (não há mais WebSocket alimentando o gráfico).
  refreshFinancialReport() {
    this.loadFinancialReport();
  }
  applyPlatformPreset(days) {
    this.activePlatformPresetDays.set(days);
    this.platformStartDate.set(this.toIsoDate(this.daysAgo(days - 1)));
    this.platformEndDate.set(this.toIsoDate(/* @__PURE__ */ new Date()));
    this.loadPlatformSummary();
  }
  onPlatformStartDateChange(value) {
    this.activePlatformPresetDays.set(null);
    this.platformStartDate.set(value);
    this.loadPlatformSummary();
  }
  onPlatformEndDateChange(value) {
    this.activePlatformPresetDays.set(null);
    this.platformEndDate.set(value);
    this.loadPlatformSummary();
  }
  loadPlatformDashboard() {
    this.loadPlatformSummary();
    this.loadPlatformOverview();
  }
  situationLabels = SITUATION_LABELS;
  situationTone = situationTone;
  formatShortDate(value) {
    const date = parseApiDate(value);
    return date ? this.shortDateFormatter.format(date) : "\u2014";
  }
  loadPlatformSummary() {
    this.isLoadingPlatformSummary.set(true);
    this.platformSummaryError.set(null);
    this.platformFinanceService.getSummary(this.platformStartDate(), this.platformEndDate()).subscribe({
      next: (summary) => {
        this.platformSummary.set(summary);
        this.isLoadingPlatformSummary.set(false);
      },
      error: () => {
        this.isLoadingPlatformSummary.set(false);
        this.platformSummaryError.set("N\xE3o foi poss\xEDvel carregar as taxas do per\xEDodo selecionado.");
      }
    });
  }
  loadPlatformOverview() {
    this.isLoadingPlatformOverview.set(true);
    this.platformOverviewError.set(null);
    this.platformFinanceService.getOverview().subscribe({
      next: (overview) => {
        this.platformOverview.set(overview);
        this.isLoadingPlatformOverview.set(false);
      },
      error: () => {
        this.isLoadingPlatformOverview.set(false);
        this.platformOverviewError.set("N\xE3o foi poss\xEDvel carregar os estabelecimentos e as taxas pendentes.");
      }
    });
  }
  connectRealtimeSummary() {
    const companyId = this.selectedCompany()?.companyId;
    if (!companyId) {
      return;
    }
    this.isLoadingSummary.set(true);
    this.summaryError.set(null);
    this.summarySubscription = defer(() => {
      const token = this.authService.getAccessToken();
      if (!token) {
        this.authService.logout();
        return EMPTY;
      }
      return this.dashboardService.connectRealtime(companyId, token);
    }).pipe(retry({
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
      },
      error: () => {
        this.isLoadingSummary.set(false);
        this.summaryError.set("N\xE3o foi poss\xEDvel conectar \xE0 atualiza\xE7\xE3o em tempo real do painel.");
      }
    });
  }
  // Gráfico de faturamento (pagamentos registrados nas comandas, bruto e líquido da taxa da
  // Comanda Única) + o recebido por caixa/garçom no mesmo período (resumo do extrato). Tudo da base
  // da Comanda Única. O WebSocket (ver connectRealtimeSummary) segue alimentando só a "Operação".
  loadFinancialReport() {
    const companyId = this.selectedCompany()?.companyId;
    if (!companyId) {
      return;
    }
    this.isLoadingRevenue.set(true);
    this.revenueError.set(null);
    this.dashboardService.getRevenueSeries(this.revenueStartDate(), this.revenueEndDate()).subscribe({
      next: (series) => {
        this.revenueSeries.set(series);
        this.isLoadingRevenue.set(false);
      },
      error: () => {
        this.isLoadingRevenue.set(false);
        this.revenueError.set("N\xE3o foi poss\xEDvel carregar o faturamento do per\xEDodo selecionado.");
      }
    });
    this.extratoService.getExtrato(companyId, {
      startDate: this.revenueStartDate(),
      endDate: this.revenueEndDate(),
      size: 1
    }).subscribe({
      next: (extrato) => {
        this.cashRegisterAmount.set(extrato.resumo.recebidoCaixa);
        this.cashWaiterAmount.set(extrato.resumo.recebidoGarcom);
        this.platformFeesAmount.set(extrato.resumo.taxasComandaUnica);
      },
      error: () => {
        this.cashRegisterAmount.set(null);
        this.cashWaiterAmount.set(null);
        this.platformFeesAmount.set(null);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-admin-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 12, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["role", "tablist", 1, "dashboard-tabs"], ["role", "tabpanel", 1, "dashboard-panel", 3, "touchstart", "touchend"], [3, "embedded"], [1, "card", "floor-plan-section"], ["type", "button", "role", "tab", 1, "dashboard-tabs__tab", 3, "id", "dashboard-tabs__tab--active"], ["type", "button", "role", "tab", 1, "dashboard-tabs__tab", 3, "click", "id"], ["aria-hidden", "true", 1, "material-icons"], [1, "card", "revenue-section"], [1, "revenue-section__header"], [1, "revenue-section__heading"], [1, "revenue-section__title"], [1, "revenue-section__totals"], [1, "revenue-section__total"], [1, "revenue-section__total-value", "revenue-section__total-value--net"], [1, "revenue-section__total-label"], [1, "revenue-section__total-detail"], [1, "revenue-section__total-value"], [1, "revenue-section__controls"], [1, "revenue-section__presets"], ["type", "button", 1, "revenue-section__preset", 3, "revenue-section__preset--active"], [1, "revenue-section__custom-range"], [1, "revenue-section__date-field"], ["type", "date", 3, "change", "value", "max"], ["type", "date", 3, "change", "value", "min"], ["type", "button", "appRipple", "", 1, "btn", "btn--ghost", "revenue-section__refresh", 3, "click", "disabled"], ["role", "alert", 1, "form-alert", "form-alert--error"], [1, "field__hint"], [1, "revenue-section__chart-wrapper"], [1, "card", "operation-section"], [1, "operation-section__header"], [1, "operation-section__title"], ["routerLink", "/painel/relatorio-estabelecimentos", "appRipple", "", 1, "btn", "btn--ghost", "revenue-section__refresh"], [1, "field__hint", "platform-hint"], [1, "stat-grid"], [1, "stat-card"], ["aria-hidden", "true", 1, "material-icons", "stat-card__icon"], [1, "stat-card__label"], [1, "stat-card__value"], [1, "stat-card__detail"], [1, "pending-fees"], [1, "pending-fees__header"], [1, "pending-fees__title"], ["type", "search", "placeholder", "Buscar estabelecimento", 1, "field__input", "pending-fees__search", 3, "input", "value"], [1, "pending-fees__table-wrapper"], ["type", "button", 1, "revenue-section__preset", 3, "click"], ["aria-hidden", "true", 1, "revenue-section__chart-loading"], ["primaryLabel", "Taxas geradas", 3, "points", "height"], [1, "revenue-section__spinner"], [1, "stat-card__detail", "stat-card__detail--warning"], [1, "pending-fees__table"], [1, "pending-fees__number"], [1, "pending-fees__status"], [1, "live-indicator"], ["aria-hidden", "true", 1, "live-indicator__dot"], ["primaryLabel", "Faturado", "comparisonLabel", "L\xEDquido", 3, "points", "comparisonPoints", "height"], [1, "floor-plan-section__header"], [3, "floorPlanId"], [1, "floor-plan-section__tabs"], ["type", "button", 1, "floor-plan-section__tab", 3, "floor-plan-section__tab--active"], ["type", "button", 1, "floor-plan-section__tab", 3, "click"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(5, "app-subscription-banner");
      \u0275\u0275template(6, DashboardComponent_Conditional_6_Template, 3, 0, "div", 3);
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275listener("touchstart", function DashboardComponent_Template_div_touchstart_7_listener($event) {
        return ctx.onPanelTouchStart($event);
      })("touchend", function DashboardComponent_Template_div_touchend_7_listener($event) {
        return ctx.onPanelTouchEnd($event);
      });
      \u0275\u0275template(8, DashboardComponent_Conditional_8_Template, 126, 23)(9, DashboardComponent_Conditional_9_Template, 104, 24)(10, DashboardComponent_Conditional_10_Template, 1, 0, "app-quick-service")(11, DashboardComponent_Conditional_11_Template, 1, 1, "app-admin-pedidos", 5)(12, DashboardComponent_Conditional_12_Template, 1, 1, "app-admin-servicos", 5)(13, DashboardComponent_Conditional_13_Template, 5, 2, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Ol\xE1, ", (tmp_0_0 = ctx.currentUser()) == null ? null : tmp_0_0.fullName == null ? null : (tmp_0_0 = tmp_0_0.fullName.split(" ")) == null ? null : tmp_0_0[0], " \u{1F44B}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" Este \xE9 o painel administrativo de ", (tmp_1_0 = ctx.selectedCompany()) == null ? null : tmp_1_0.companyName, ". ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.availableTabs().length > 1 ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("dashboard-panel--prev", ctx.slideDirection() === "prev");
      \u0275\u0275attribute("aria-labelledby", "dashboard-tab-" + ctx.activeTab());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "platform" ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "overview" ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "atendimento" ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "pedidos" ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "servicos" ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "floorplan" ? 13 : -1);
    }
  }, dependencies: [
    FloorPlanViewerComponent,
    LineChartComponent,
    PedidosComponent,
    ServicosComponent,
    RippleDirective,
    SubscriptionBannerComponent,
    QuickServiceComponent,
    RouterLink
  ], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n}\n.dashboard-tabs[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 68px;\n  z-index: 20;\n  display: flex;\n  gap: 4px;\n  border-bottom: 1px solid var(--color-border);\n  margin-bottom: 24px;\n  overflow-x: auto;\n  scrollbar-width: none;\n  background: var(--color-bg);\n}\n.dashboard-tabs[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.dashboard-tabs__tab[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 18px;\n  border: none;\n  border-bottom: 2px solid transparent;\n  background: transparent;\n  color: var(--color-text-muted);\n  font-size: 0.9375rem;\n  font-weight: 500;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: color var(--transition-fast), border-color var(--transition-fast);\n}\n.dashboard-tabs__tab[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.dashboard-tabs__tab[_ngcontent-%COMP%]:hover {\n  color: var(--color-text);\n}\n.dashboard-tabs__tab--active[_ngcontent-%COMP%] {\n  color: var(--color-text);\n  border-bottom-color: var(--color-accent);\n}\n.dashboard-panel[_ngcontent-%COMP%] {\n  min-height: calc(100dvh - 68px - 160px);\n}\n.dashboard-panel[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_dashboard-panel-in var(--transition-base) both;\n}\n.dashboard-panel--prev[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  animation-name: _ngcontent-%COMP%_dashboard-panel-in-prev;\n}\n@keyframes _ngcontent-%COMP%_dashboard-panel-in {\n  from {\n    opacity: 0;\n    transform: translateX(24px);\n  }\n}\n@keyframes _ngcontent-%COMP%_dashboard-panel-in-prev {\n  from {\n    opacity: 0;\n    transform: translateX(-24px);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .dashboard-panel[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n@media (max-width: 640px) {\n  .page-header[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.375rem;\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .dashboard-tabs[_ngcontent-%COMP%] {\n    margin-inline: -16px;\n    padding-inline: 8px;\n    margin-bottom: 16px;\n  }\n  .dashboard-tabs__tab[_ngcontent-%COMP%] {\n    padding: 12px 14px;\n  }\n}\n.live-indicator[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.live-indicator__dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--color-success);\n  box-shadow: 0 0 0 3px var(--color-success-bg);\n}\n.live-indicator--error[_ngcontent-%COMP%]   .live-indicator__dot[_ngcontent-%COMP%] {\n  background: #f87171;\n  box-shadow: 0 0 0 3px rgba(248, 113, 113, 0.18);\n}\n.revenue-section[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.revenue-section__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n.revenue-section__heading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.revenue-section__title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: var(--color-text);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.revenue-section__totals[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px 32px;\n}\n.revenue-section__total[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.revenue-section__total-value[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--color-text);\n  line-height: 1.1;\n}\n.revenue-section__total-value--net[_ngcontent-%COMP%] {\n  color: var(--color-success);\n}\n.revenue-section__total-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.revenue-section__total-detail[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  opacity: 0.85;\n}\n.revenue-section__controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 10px;\n}\n@media (max-width: 640px) {\n  .revenue-section__controls[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    width: 100%;\n  }\n}\n.revenue-section__presets[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.revenue-section__preset[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border);\n  background: transparent;\n  color: var(--color-text-muted);\n  font-size: 0.8125rem;\n  cursor: pointer;\n  transition:\n    background var(--transition-fast),\n    color var(--transition-fast),\n    border-color var(--transition-fast);\n}\n.revenue-section__preset[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.revenue-section__preset--active[_ngcontent-%COMP%] {\n  border-color: var(--color-accent);\n  color: var(--color-text);\n  background: rgba(255, 255, 255, 0.08);\n}\n.revenue-section__custom-range[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.revenue-section__date-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.revenue-section__date-field[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%] {\n  background: var(--color-bg-elevated);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  color: var(--color-text);\n  padding: 6px 10px;\n  font-size: 0.8125rem;\n  color-scheme: dark;\n}\n.revenue-section__refresh[_ngcontent-%COMP%] {\n  padding: 8px 18px;\n  font-size: 0.8125rem;\n}\n.revenue-section__refresh[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.revenue-section__chart-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.revenue-section__chart-loading[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.35);\n  border-radius: var(--radius-md);\n  z-index: 1;\n}\n.revenue-section__spinner[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 3px solid rgba(255, 255, 255, 0.25);\n  border-top-color: var(--color-accent);\n  animation: _ngcontent-%COMP%_revenue-section-spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_revenue-section-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.operation-section[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 24px;\n}\n.operation-section__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.operation-section__title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: var(--color-text);\n  margin: 0;\n}\n.stat-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));\n  gap: 16px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 18px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  background: var(--color-bg-elevated);\n}\n.stat-card__icon[_ngcontent-%COMP%] {\n  color: var(--color-accent-hover);\n  font-size: 20px;\n}\n.stat-card__label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.stat-card__value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.stat-card__detail[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.stat-card__detail--warning[_ngcontent-%COMP%] {\n  color: #eab308;\n}\n.pending-fees[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.pending-fees__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.pending-fees__title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--color-text);\n  margin: 0;\n}\n.pending-fees__search[_ngcontent-%COMP%] {\n  max-width: 260px;\n}\n@media (max-width: 640px) {\n  .pending-fees__search[_ngcontent-%COMP%] {\n    max-width: none;\n    width: 100%;\n  }\n}\n.pending-fees__table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.pending-fees__table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.pending-fees__table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.pending-fees__table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  text-align: left;\n  border-bottom: 1px solid var(--color-border);\n  white-space: nowrap;\n}\n.pending-fees__table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  color: var(--color-text-muted);\n}\n.pending-fees__number[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n.pending-fees__status[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: var(--radius-full);\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: var(--color-success-bg, rgba(34, 197, 94, 0.14));\n  color: var(--color-success, #22c55e);\n}\n.pending-fees__status--warn[_ngcontent-%COMP%] {\n  background: rgba(234, 179, 8, 0.14);\n  color: #eab308;\n}\n.pending-fees__status--off[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.14);\n  color: var(--color-text-muted);\n}\n.platform-hint[_ngcontent-%COMP%] {\n  margin: -8px 0 16px;\n}\n.floor-plan-section[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n@media (max-width: 640px) {\n  .floor-plan-section[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n}\n.floor-plan-section__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.floor-plan-section__tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.floor-plan-section__tab[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border);\n  background: transparent;\n  color: var(--color-text-muted);\n  font-size: 0.8125rem;\n  cursor: pointer;\n  transition:\n    background var(--transition-fast),\n    color var(--transition-fast),\n    border-color var(--transition-fast);\n}\n.floor-plan-section__tab[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.floor-plan-section__tab--active[_ngcontent-%COMP%] {\n  border-color: var(--color-accent);\n  color: var(--color-text);\n  background: rgba(255, 255, 255, 0.08);\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\features\\admin\\pages\\dashboard\\dashboard.component.ts", lineNumber: 83 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-VD2Y4TJC.js.map
