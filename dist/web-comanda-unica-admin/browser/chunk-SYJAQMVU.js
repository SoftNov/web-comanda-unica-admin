import {
  RippleDirective
} from "./chunk-G7AZFESP.js";
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
import "./chunk-3BRF5UDA.js";
import {
  ActivatedRoute,
  RouterLink,
  __spreadProps,
  __spreadValues,
  __toESM,
  computed,
  forkJoin,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
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
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-ZGOR3PJA.js";

// src/app/features/admin/pages/settings/floor-plan/floor-plan-editor.component.ts
var import_konva = __toESM(require_lib());
var _c0 = ["canvasContainer"];
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.id;
function FloorPlanEditorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "span", 3);
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
function FloorPlanEditorComponent_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r3 = ctx;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", plan_r3.width, " \xD7 ", plan_r3.height, " px");
  }
}
function FloorPlanEditorComponent_Conditional_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.saveError());
  }
}
function FloorPlanEditorComponent_Conditional_1_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "Layout salvo.");
    \u0275\u0275elementEnd();
  }
}
function FloorPlanEditorComponent_Conditional_1_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "Altera\xE7\xF5es n\xE3o salvas");
    \u0275\u0275elementEnd();
  }
}
function FloorPlanEditorComponent_Conditional_1_For_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("dragstart", function FloorPlanEditorComponent_Conditional_1_For_35_Template_button_dragstart_0_listener($event) {
      const entry_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPaletteDragStart($event, entry_r5));
    })("click", function FloorPlanEditorComponent_Conditional_1_For_35_Template_button_click_0_listener() {
      const entry_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addFromPaletteClick(entry_r5));
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r5 = ctx.$implicit;
    \u0275\u0275property("title", "Adicionar " + entry_r5.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r5.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", entry_r5.label, " ");
  }
}
function FloorPlanEditorComponent_Conditional_1_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "Todas as mesas ativas j\xE1 est\xE3o posicionadas neste ambiente.");
    \u0275\u0275elementEnd();
  }
}
function FloorPlanEditorComponent_Conditional_1_Conditional_39_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const table_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2014 ", table_r6.name, "");
  }
}
function FloorPlanEditorComponent_Conditional_1_Conditional_39_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 31)(1, "span", 3);
    \u0275\u0275text(2, "table_bar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275template(5, FloorPlanEditorComponent_Conditional_1_Conditional_39_For_2_Conditional_5_Template, 2, 1, "span", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const table_r6 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Mesa ", table_r6.number, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(table_r6.name ? 5 : -1);
  }
}
function FloorPlanEditorComponent_Conditional_1_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 30);
    \u0275\u0275repeaterCreate(1, FloorPlanEditorComponent_Conditional_1_Conditional_39_For_2_Template, 6, 2, "li", 31, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 8);
    \u0275\u0275text(4, 'Arraste "Mesa Quadrada/Redonda/Retangular" acima at\xE9 o canvas para escolher e posicionar uma destas mesas.');
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.unplacedTables());
  }
}
function FloorPlanEditorComponent_Conditional_1_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 3);
    \u0275\u0275text(2, "hourglass_empty");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Carregando ambiente\u2026 ");
    \u0275\u0275elementEnd();
  }
}
function FloorPlanEditorComponent_Conditional_1_Conditional_47_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "span", 53);
    \u0275\u0275text(2, "N\xFAmero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 32)(6, "span", 53);
    \u0275\u0275text(7, "Nome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 54);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 33)(11, "div", 32)(12, "span", 53);
    \u0275\u0275text(13, "Capacidade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 54);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 32)(17, "span", 53);
    \u0275\u0275text(18, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 54);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 32)(22, "label", 55);
    \u0275\u0275text(23, "Formato");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 35)(25, "select", 56);
    \u0275\u0275listener("change", function FloorPlanEditorComponent_Conditional_1_Conditional_47_Conditional_1_Template_select_change_25_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onShapeFieldChange($event.target.value));
    });
    \u0275\u0275elementStart(26, "option", 57);
    \u0275\u0275text(27, "Quadrada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 58);
    \u0275\u0275text(29, "Redonda");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 59);
    \u0275\u0275text(31, "Retangular");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_7_0;
    const item_r9 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_5_0 = item_r9.tableNumber) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r9.tableName || "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((tmp_7_0 = item_r9.tableCapacity) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r9.tableStatus === "ACTIVE" ? "Ativa" : "Inativa");
    \u0275\u0275advance(5);
    \u0275\u0275property("value", item_r9.properties["shape"]);
  }
}
function FloorPlanEditorComponent_Conditional_1_Conditional_47_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "label", 60);
    \u0275\u0275text(2, "Texto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35)(4, "input", 61);
    \u0275\u0275listener("change", function FloorPlanEditorComponent_Conditional_1_Conditional_47_Conditional_2_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onLabelFieldChange($event.target.value));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("value", item_r9.label);
  }
}
function FloorPlanEditorComponent_Conditional_1_Conditional_47_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "label", 62);
    \u0275\u0275text(2, "URL da imagem");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35)(4, "input", 63);
    \u0275\u0275listener("change", function FloorPlanEditorComponent_Conditional_1_Conditional_47_Conditional_3_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onImageUrlFieldChange($event.target.value));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("value", item_r9.properties["imageUrl"]);
  }
}
function FloorPlanEditorComponent_Conditional_1_Conditional_47_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "label", 60);
    \u0275\u0275text(2, "R\xF3tulo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35)(4, "input", 61);
    \u0275\u0275listener("change", function FloorPlanEditorComponent_Conditional_1_Conditional_47_Conditional_4_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onLabelFieldChange($event.target.value));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("value", item_r9.label);
  }
}
function FloorPlanEditorComponent_Conditional_1_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, FloorPlanEditorComponent_Conditional_1_Conditional_47_Conditional_1_Template, 32, 5)(2, FloorPlanEditorComponent_Conditional_1_Conditional_47_Conditional_2_Template, 5, 1, "div", 32)(3, FloorPlanEditorComponent_Conditional_1_Conditional_47_Conditional_3_Template, 5, 1, "div", 32)(4, FloorPlanEditorComponent_Conditional_1_Conditional_47_Conditional_4_Template, 5, 1, "div", 32);
    \u0275\u0275elementStart(5, "div", 33)(6, "div", 32)(7, "label", 34);
    \u0275\u0275text(8, "Posi\xE7\xE3o X");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 35)(10, "input", 36);
    \u0275\u0275listener("change", function FloorPlanEditorComponent_Conditional_1_Conditional_47_Template_input_change_10_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onNumberFieldChange("x", $event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 32)(12, "label", 37);
    \u0275\u0275text(13, "Posi\xE7\xE3o Y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 35)(15, "input", 38);
    \u0275\u0275listener("change", function FloorPlanEditorComponent_Conditional_1_Conditional_47_Template_input_change_15_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onNumberFieldChange("y", $event.target.value));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 33)(17, "div", 32)(18, "label", 39);
    \u0275\u0275text(19, "Largura");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 35)(21, "input", 40);
    \u0275\u0275listener("change", function FloorPlanEditorComponent_Conditional_1_Conditional_47_Template_input_change_21_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onNumberFieldChange("width", $event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 32)(23, "label", 41);
    \u0275\u0275text(24, "Altura");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 35)(26, "input", 42);
    \u0275\u0275listener("change", function FloorPlanEditorComponent_Conditional_1_Conditional_47_Template_input_change_26_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onNumberFieldChange("height", $event.target.value));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 33)(28, "div", 32)(29, "label", 43);
    \u0275\u0275text(30, "Rota\xE7\xE3o (graus)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 35)(32, "input", 44);
    \u0275\u0275listener("change", function FloorPlanEditorComponent_Conditional_1_Conditional_47_Template_input_change_32_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onNumberFieldChange("rotation", $event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 32)(34, "label", 45);
    \u0275\u0275text(35, "Cor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 35)(37, "input", 46);
    \u0275\u0275listener("change", function FloorPlanEditorComponent_Conditional_1_Conditional_47_Template_input_change_37_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onColorFieldChange($event.target.value));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 47)(39, "button", 48);
    \u0275\u0275listener("click", function FloorPlanEditorComponent_Conditional_1_Conditional_47_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleLockSelected());
    });
    \u0275\u0275elementStart(40, "span", 3);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "button", 49);
    \u0275\u0275listener("click", function FloorPlanEditorComponent_Conditional_1_Conditional_47_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.bringToFront());
    });
    \u0275\u0275elementStart(43, "span", 3);
    \u0275\u0275text(44, "flip_to_front");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "button", 50);
    \u0275\u0275listener("click", function FloorPlanEditorComponent_Conditional_1_Conditional_47_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.sendToBack());
    });
    \u0275\u0275elementStart(46, "span", 3);
    \u0275\u0275text(47, "flip_to_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "button", 51);
    \u0275\u0275listener("click", function FloorPlanEditorComponent_Conditional_1_Conditional_47_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.duplicateSelected());
    });
    \u0275\u0275elementStart(49, "span", 3);
    \u0275\u0275text(50, "content_copy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "button", 52);
    \u0275\u0275listener("click", function FloorPlanEditorComponent_Conditional_1_Conditional_47_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deleteSelected());
    });
    \u0275\u0275elementStart(52, "span", 3);
    \u0275\u0275text(53, "delete_outline");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r9 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r9.itemType === "TABLE" ? 1 : item_r9.itemType === "TEXT" ? 2 : item_r9.itemType === "IMAGE" ? 3 : 4);
    \u0275\u0275advance(9);
    \u0275\u0275property("value", item_r9.x);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", item_r9.y);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", item_r9.width);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", item_r9.height);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", item_r9.rotation);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", item_r9.color || "#94a3b8");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.selectedIsLocked() ? "Desbloquear posi\xE7\xE3o" : "Bloquear posi\xE7\xE3o");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.selectedIsLocked() ? "lock" : "lock_open");
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", item_r9.itemType === "TABLE");
  }
}
function FloorPlanEditorComponent_Conditional_1_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "Selecione um objeto no canvas para ver e editar suas propriedades.");
    \u0275\u0275elementEnd();
  }
}
function FloorPlanEditorComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "a", 5)(2, "span", 3);
    \u0275\u0275text(3, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Ambientes ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 6)(6, "h1", 7);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, FloorPlanEditorComponent_Conditional_1_Conditional_8_Template, 2, 2, "span", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 9)(10, "button", 10);
    \u0275\u0275listener("click", function FloorPlanEditorComponent_Conditional_1_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.zoomOut());
    });
    \u0275\u0275elementStart(11, "span", 3);
    \u0275\u0275text(12, "zoom_out");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 11);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 12);
    \u0275\u0275listener("click", function FloorPlanEditorComponent_Conditional_1_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.zoomIn());
    });
    \u0275\u0275elementStart(16, "span", 3);
    \u0275\u0275text(17, "zoom_in");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 13);
    \u0275\u0275listener("click", function FloorPlanEditorComponent_Conditional_1_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.resetZoom());
    });
    \u0275\u0275elementStart(19, "span", 3);
    \u0275\u0275text(20, "center_focus_strong");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 14);
    \u0275\u0275template(22, FloorPlanEditorComponent_Conditional_1_Conditional_22_Template, 2, 1, "span", 15)(23, FloorPlanEditorComponent_Conditional_1_Conditional_23_Template, 2, 0, "span", 16)(24, FloorPlanEditorComponent_Conditional_1_Conditional_24_Template, 2, 0, "span", 17);
    \u0275\u0275elementStart(25, "button", 18);
    \u0275\u0275listener("click", function FloorPlanEditorComponent_Conditional_1_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveLayout());
    });
    \u0275\u0275elementStart(26, "span", 3);
    \u0275\u0275text(27, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 19)(30, "aside", 20)(31, "h3", 21);
    \u0275\u0275text(32, "Elementos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 22);
    \u0275\u0275repeaterCreate(34, FloorPlanEditorComponent_Conditional_1_For_35_Template, 4, 3, "button", 23, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "h3", 21);
    \u0275\u0275text(37, "Mesas dispon\xEDveis");
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, FloorPlanEditorComponent_Conditional_1_Conditional_38_Template, 2, 0, "p", 8)(39, FloorPlanEditorComponent_Conditional_1_Conditional_39_Template, 5, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 24);
    \u0275\u0275template(41, FloorPlanEditorComponent_Conditional_1_Conditional_41_Template, 4, 0, "div", 25);
    \u0275\u0275elementStart(42, "div", 26, 0);
    \u0275\u0275listener("drop", function FloorPlanEditorComponent_Conditional_1_Template_div_drop_42_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onCanvasDrop($event));
    })("dragover", function FloorPlanEditorComponent_Conditional_1_Template_div_dragover_42_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onCanvasDragOver($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "aside", 27)(45, "h3", 21);
    \u0275\u0275text(46, "Propriedades");
    \u0275\u0275elementEnd();
    \u0275\u0275template(47, FloorPlanEditorComponent_Conditional_1_Conditional_47_Template, 54, 10, "div", 28)(48, FloorPlanEditorComponent_Conditional_1_Conditional_48_Template, 2, 0, "p", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_15_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(((tmp_2_0 = ctx_r0.floorPlan()) == null ? null : tmp_2_0.name) || "Carregando\u2026");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_3_0 = ctx_r0.floorPlan()) ? 8 : -1, tmp_3_0);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isLoading());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.zoomPercent(), "%");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isLoading());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.isLoading());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.saveError() ? 22 : ctx_r0.saveSuccess() ? 23 : ctx_r0.isDirty() ? 24 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.isLoading() || ctx_r0.isSaving() || !ctx_r0.isDirty());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.isSaving() ? "Salvando\u2026" : "Salvar Layout", " ");
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r0.palette);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.unplacedTables().length === 0 ? 38 : 39);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.isLoading() ? 41 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("canvas-stage--hidden", ctx_r0.isLoading());
    \u0275\u0275advance(5);
    \u0275\u0275conditional((tmp_15_0 = ctx_r0.selectedItem()) ? 47 : 48, tmp_15_0);
  }
}
function FloorPlanEditorComponent_Conditional_2_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const table_r14 = ctx.$implicit;
    \u0275\u0275property("value", table_r14.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("Mesa ", table_r14.number, "", table_r14.name ? " \u2014 " + table_r14.name : "", "");
  }
}
function FloorPlanEditorComponent_Conditional_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "N\xE3o h\xE1 mesas ativas dispon\xEDveis para posicionar.");
    \u0275\u0275elementEnd();
  }
}
function FloorPlanEditorComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275listener("click", function FloorPlanEditorComponent_Conditional_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelTableDrop());
    });
    \u0275\u0275elementStart(1, "div", 65);
    \u0275\u0275listener("click", function FloorPlanEditorComponent_Conditional_2_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h2", 66);
    \u0275\u0275text(3, "Selecionar mesa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 8);
    \u0275\u0275text(5, "Escolha qual mesa cadastrada este objeto vai representar no mapa.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 32)(7, "label", 67);
    \u0275\u0275text(8, "Mesa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 35)(10, "select", 68);
    \u0275\u0275listener("change", function FloorPlanEditorComponent_Conditional_2_Template_select_change_10_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setPendingTableSelection($event.target.value));
    });
    \u0275\u0275elementStart(11, "option", 69);
    \u0275\u0275text(12, "Selecione uma mesa");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(13, FloorPlanEditorComponent_Conditional_2_For_14_Template, 2, 3, "option", 70, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(15, FloorPlanEditorComponent_Conditional_2_Conditional_15_Template, 2, 0, "p", 8);
    \u0275\u0275elementStart(16, "div", 71)(17, "button", 72);
    \u0275\u0275listener("click", function FloorPlanEditorComponent_Conditional_2_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmTableDrop());
    });
    \u0275\u0275text(18, "Adicionar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 73);
    \u0275\u0275listener("click", function FloorPlanEditorComponent_Conditional_2_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelTableDrop());
    });
    \u0275\u0275text(20, "Cancelar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("value", ctx_r0.pendingTableSelection());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.unplacedTables());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.unplacedTables().length === 0 ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.pendingTableSelection());
  }
}
var GRID_SIZE = 10;
var MIN_ZOOM = 0.2;
var MAX_ZOOM = 3;
var PALETTE = [
  { itemType: "TABLE", shape: "SQUARE", label: "Mesa Quadrada", icon: "crop_square", defaultWidth: 70, defaultHeight: 70, defaultColor: "#c7d2fe" },
  { itemType: "TABLE", shape: "ROUND", label: "Mesa Redonda", icon: "circle", defaultWidth: 70, defaultHeight: 70, defaultColor: "#c7d2fe" },
  { itemType: "TABLE", shape: "RECTANGULAR", label: "Mesa Retangular", icon: "crop_landscape", defaultWidth: 110, defaultHeight: 60, defaultColor: "#c7d2fe" },
  { itemType: "WALL", label: "Parede", icon: "view_column", defaultWidth: 160, defaultHeight: 14, defaultColor: "#334155" },
  { itemType: "DOOR", label: "Porta", icon: "sensor_door", defaultWidth: 50, defaultHeight: 12, defaultColor: "#f59e0b", defaultLabel: "Porta" },
  { itemType: "CUSTOM", label: "Caixa", icon: "point_of_sale", defaultWidth: 60, defaultHeight: 50, defaultColor: "#64748b", defaultLabel: "Caixa" },
  { itemType: "BATHROOM", label: "Banheiro", icon: "wc", defaultWidth: 60, defaultHeight: 60, defaultColor: "#0ea5e9", defaultLabel: "Banheiro" },
  { itemType: "BAR", label: "Bar", icon: "local_bar", defaultWidth: 140, defaultHeight: 50, defaultColor: "#7c3aed", defaultLabel: "Bar" },
  { itemType: "KITCHEN", label: "Cozinha", icon: "kitchen", defaultWidth: 140, defaultHeight: 80, defaultColor: "#ef4444", defaultLabel: "Cozinha" },
  { itemType: "TEXT", label: "Texto", icon: "text_fields", defaultWidth: 120, defaultHeight: 30, defaultColor: "#111827", defaultLabel: "Texto" },
  { itemType: "IMAGE", label: "Imagem/Logo", icon: "image", defaultWidth: 100, defaultHeight: 100, defaultColor: "#e5e7eb" }
];
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
var FloorPlanEditorComponent = class _FloorPlanEditorComponent {
  canvasContainerRef;
  route = inject(ActivatedRoute);
  floorPlansService = inject(FloorPlansService);
  floorPlanItemsService = inject(FloorPlanItemsService);
  tablesService = inject(TablesService);
  palette = PALETTE;
  floorPlan = signal(null);
  isLoading = signal(true);
  loadError = signal(null);
  items = signal([]);
  availableTables = signal([]);
  selectedClientId = signal(null);
  selectedItem = computed(() => this.items().find((item) => item.clientId === this.selectedClientId()) ?? null);
  selectedIsLocked = computed(() => !!this.selectedItem()?.properties["locked"]);
  unplacedTables = computed(() => {
    const usedIds = new Set(this.items().map((item) => item.tableId).filter((id) => !!id));
    return this.availableTables().filter((table) => !usedIds.has(table.id));
  });
  zoom = signal(1);
  zoomPercent = computed(() => Math.round(this.zoom() * 100));
  isDirty = signal(false);
  isSaving = signal(false);
  saveError = signal(null);
  saveSuccess = signal(false);
  pendingTableDrop = signal(null);
  pendingTableSelection = signal("");
  floorPlanId = null;
  viewReady = false;
  stage = null;
  layer = null;
  transformer = null;
  background = null;
  nodesByClientId = /* @__PURE__ */ new Map();
  clientIdCounter = 0;
  constructor() {
    const id = this.route.snapshot.paramMap.get("id");
    if (!id) {
      this.loadError.set("Ambiente inv\xE1lido.");
      this.isLoading.set(false);
      return;
    }
    this.floorPlanId = id;
    this.loadAll(id);
  }
  ngAfterViewInit() {
    this.viewReady = true;
    this.tryInitStage();
  }
  ngOnDestroy() {
    this.stage?.destroy();
  }
  onBeforeUnload(event) {
    if (this.isDirty()) {
      event.preventDefault();
      event.returnValue = "";
    }
  }
  // --- Carregamento --------------------------------------------------------
  loadAll(floorPlanId) {
    this.isLoading.set(true);
    this.loadError.set(null);
    forkJoin({
      floorPlan: this.floorPlansService.get(floorPlanId),
      items: this.floorPlanItemsService.list(floorPlanId),
      tables: this.tablesService.list({ status: "ACTIVE", page: 0, size: 200, sortBy: "number", sortDirection: "ASC" })
    }).subscribe({
      next: ({ floorPlan, items, tables }) => {
        this.floorPlan.set(floorPlan);
        this.availableTables.set(tables.content);
        this.items.set(items.map((item) => this.toEditorItem(item, tables.content)));
        this.isLoading.set(false);
        this.tryInitStage();
      },
      error: () => {
        this.isLoading.set(false);
        this.loadError.set("N\xE3o foi poss\xEDvel carregar o ambiente.");
      }
    });
  }
  toEditorItem(response, tables) {
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
      id: response.id,
      clientId: this.generateClientId(),
      itemType: response.itemType,
      tableId: response.tableId,
      tableNumber: table?.number ?? response.tableNumber,
      tableName: table?.name,
      tableCapacity: table?.capacity,
      tableStatus: table?.status,
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
  // --- Konva: inicialização --------------------------------------------------
  tryInitStage() {
    const plan = this.floorPlan();
    if (!this.viewReady || !plan || this.stage) {
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
    this.background = new import_konva.default.Rect({
      x: 0,
      y: 0,
      width: plan.width,
      height: plan.height,
      fill: plan.backgroundColor || "#ffffff",
      listening: false,
      name: "__background"
    });
    this.layer.add(this.background);
    this.transformer = new import_konva.default.Transformer({
      rotateEnabled: true,
      enabledAnchors: ["top-left", "top-right", "bottom-left", "bottom-right"],
      boundBoxFunc: (oldBox, newBox) => newBox.width < 20 || newBox.height < 20 ? oldBox : newBox
    });
    this.layer.add(this.transformer);
    this.stage.on("click tap", (event) => {
      if (event.target === this.stage || event.target.name() === "__background") {
        this.selectItem(null);
      }
    });
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
    for (const item of this.items()) {
      this.createNode(item);
    }
    this.layer.batchDraw();
  }
  // --- Konva: nós dos objetos --------------------------------------------------
  createNode(item) {
    const locked = !!item.properties["locked"];
    const group = new import_konva.default.Group({
      x: item.x,
      y: item.y,
      rotation: item.rotation,
      draggable: !locked,
      name: "editor-item"
    });
    group.setAttr("clientId", item.clientId);
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
        fill: this.contrastColor(item.color),
        listening: false
      }));
    }
    group.on("click tap", () => this.selectItem(item.clientId));
    group.on("dragmove", () => this.syncItemFromNode(item.clientId, group, false, false));
    group.on("dragend", () => {
      this.syncItemFromNode(item.clientId, group, false, true);
      this.markDirty();
    });
    group.on("transform", () => this.syncItemFromNode(item.clientId, group, true, false));
    group.on("transformend", () => {
      this.syncItemFromNode(item.clientId, group, true, true);
      this.markDirty();
    });
    this.layer.add(group);
    this.nodesByClientId.set(item.clientId, group);
    return group;
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
      const placeholder = new import_konva.default.Rect({
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
          const group = this.nodesByClientId.get(item.clientId);
          if (!group) {
            return;
          }
          const konvaImage = new import_konva.default.Image({ image: imageObj, width: item.width, height: item.height, listening: false });
          placeholder.destroy();
          group.add(konvaImage);
          konvaImage.moveToBottom();
          this.layer?.batchDraw();
        };
        imageObj.src = url;
      }
      return placeholder;
    }
    let cornerRadius = 4;
    if (item.itemType === "TABLE" && item.properties["shape"] === "ROUND") {
      cornerRadius = Math.min(item.width, item.height) / 2;
    }
    return new import_konva.default.Rect({
      width: item.width,
      height: item.height,
      fill: item.color || DEFAULT_COLORS[item.itemType] || "#94a3b8",
      stroke: "rgba(0,0,0,0.25)",
      strokeWidth: 1,
      cornerRadius,
      dash: item.itemType === "DOOR" ? [6, 4] : void 0
    });
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
  resizeShapeChildren(group, width, height, item) {
    group.getChildren().forEach((child) => {
      if (child instanceof import_konva.default.Rect || child instanceof import_konva.default.Image) {
        child.width(width);
        child.height(height);
        if (child instanceof import_konva.default.Rect && item.itemType === "TABLE" && item.properties["shape"] === "ROUND") {
          child.cornerRadius(Math.min(width, height) / 2);
        }
      } else if (child instanceof import_konva.default.Text) {
        child.width(width);
        child.height(height);
      }
    });
    this.layer?.batchDraw();
  }
  syncItemFromNode(clientId, group, isTransform, commit) {
    const item = this.items().find((candidate) => candidate.clientId === clientId);
    if (!item) {
      return;
    }
    let width = item.width;
    let height = item.height;
    if (isTransform) {
      width = Math.max(20, Math.round(item.width * group.scaleX()));
      height = Math.max(20, Math.round(item.height * group.scaleY()));
      group.scale({ x: 1, y: 1 });
      this.resizeShapeChildren(group, width, height, item);
    }
    let x = group.x();
    let y = group.y();
    if (commit) {
      x = this.snap(x);
      y = this.snap(y);
      group.position({ x, y });
      if (isTransform) {
        width = this.snap(width);
        height = this.snap(height);
        this.resizeShapeChildren(group, width, height, item);
      }
    }
    const updated = __spreadProps(__spreadValues({}, item), {
      x: Math.round(x),
      y: Math.round(y),
      width,
      height,
      rotation: Math.round(group.rotation() * 100) / 100
    });
    this.items.update((list) => list.map((candidate) => candidate.clientId === clientId ? updated : candidate));
  }
  // --- Seleção ---------------------------------------------------------------
  selectItem(clientId) {
    this.selectedClientId.set(clientId);
    if (!this.transformer) {
      return;
    }
    const item = clientId ? this.items().find((candidate) => candidate.clientId === clientId) : null;
    const node = clientId ? this.nodesByClientId.get(clientId) : void 0;
    if (node && item && !item.properties["locked"]) {
      this.transformer.nodes([node]);
    } else {
      this.transformer.nodes([]);
    }
    this.layer?.batchDraw();
  }
  selectFromList(clientId) {
    this.selectItem(clientId);
  }
  // --- Adição de elementos -----------------------------------------------------
  onPaletteDragStart(event, entry) {
    event.dataTransfer?.setData("text/plain", JSON.stringify(entry));
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = "copy";
    }
  }
  addFromPaletteClick(entry) {
    const center = this.stageCenter();
    this.handleNewElement(entry, center.x, center.y);
  }
  onCanvasDragOver(event) {
    event.preventDefault();
  }
  onCanvasDrop(event) {
    event.preventDefault();
    const raw = event.dataTransfer?.getData("text/plain");
    if (!raw || !this.stage) {
      return;
    }
    let entry;
    try {
      entry = JSON.parse(raw);
    } catch {
      return;
    }
    const rect = this.canvasContainerRef.nativeElement.getBoundingClientRect();
    const x = (event.clientX - rect.left - this.stage.x()) / this.stage.scaleX();
    const y = (event.clientY - rect.top - this.stage.y()) / this.stage.scaleY();
    this.handleNewElement(entry, x, y);
  }
  handleNewElement(entry, centerX, centerY) {
    if (entry.itemType === "TABLE") {
      this.pendingTableDrop.set({
        shape: entry.shape ?? "SQUARE",
        x: centerX,
        y: centerY,
        width: entry.defaultWidth,
        height: entry.defaultHeight,
        color: entry.defaultColor
      });
      return;
    }
    this.addItem(entry, centerX, centerY);
  }
  addItem(entry, centerX, centerY) {
    const clientId = this.generateClientId();
    const item = {
      id: null,
      clientId,
      itemType: entry.itemType,
      x: this.snap(centerX - entry.defaultWidth / 2),
      y: this.snap(centerY - entry.defaultHeight / 2),
      width: entry.defaultWidth,
      height: entry.defaultHeight,
      rotation: 0,
      zIndex: this.nextZIndex(),
      color: entry.defaultColor,
      label: entry.defaultLabel,
      properties: {}
    };
    this.items.update((list) => [...list, item]);
    this.createNode(item);
    this.selectItem(clientId);
    this.markDirty();
  }
  confirmTableDrop() {
    const pending = this.pendingTableDrop();
    const table = this.availableTables().find((candidate) => candidate.id === this.pendingTableSelection());
    if (!pending || !table) {
      return;
    }
    const clientId = this.generateClientId();
    const item = {
      id: null,
      clientId,
      itemType: "TABLE",
      tableId: table.id,
      tableNumber: table.number,
      tableName: table.name,
      tableCapacity: table.capacity,
      tableStatus: table.status,
      x: this.snap(pending.x - pending.width / 2),
      y: this.snap(pending.y - pending.height / 2),
      width: pending.width,
      height: pending.height,
      rotation: 0,
      zIndex: this.nextZIndex(),
      color: pending.color,
      properties: { shape: pending.shape }
    };
    this.items.update((list) => [...list, item]);
    this.createNode(item);
    this.selectItem(clientId);
    this.markDirty();
    this.pendingTableDrop.set(null);
    this.pendingTableSelection.set("");
  }
  setPendingTableSelection(value) {
    this.pendingTableSelection.set(value);
  }
  cancelTableDrop() {
    this.pendingTableDrop.set(null);
    this.pendingTableSelection.set("");
  }
  stageCenter() {
    if (!this.stage) {
      return { x: 200, y: 200 };
    }
    return {
      x: (this.stage.width() / 2 - this.stage.x()) / this.stage.scaleX(),
      y: (this.stage.height() / 2 - this.stage.y()) / this.stage.scaleY()
    };
  }
  // --- Painel de propriedades ---------------------------------------------------
  updateSelectedItem(patch) {
    const item = this.selectedItem();
    if (!item) {
      return;
    }
    const updated = __spreadValues(__spreadValues({}, item), patch);
    this.items.update((list) => list.map((candidate) => candidate.clientId === item.clientId ? updated : candidate));
    this.applyItemToNode(updated);
    this.markDirty();
  }
  updateSelectedItemProperty(key, value) {
    const item = this.selectedItem();
    if (!item) {
      return;
    }
    this.updateSelectedItem({ properties: __spreadProps(__spreadValues({}, item.properties), { [key]: value }) });
  }
  onNumberFieldChange(field, rawValue) {
    const value = Number(rawValue);
    if (Number.isNaN(value)) {
      return;
    }
    if (field === "rotation") {
      this.updateSelectedItem({ rotation: (value % 360 + 360) % 360 });
      return;
    }
    this.updateSelectedItem({ [field]: value });
  }
  onColorFieldChange(value) {
    this.updateSelectedItem({ color: value });
  }
  onLabelFieldChange(value) {
    this.updateSelectedItem({ label: value });
  }
  onShapeFieldChange(value) {
    this.updateSelectedItemProperty("shape", value);
  }
  onImageUrlFieldChange(value) {
    this.updateSelectedItemProperty("imageUrl", value);
  }
  applyItemToNode(item) {
    const existing = this.nodesByClientId.get(item.clientId);
    const wasSelected = this.selectedClientId() === item.clientId;
    existing?.destroy();
    this.createNode(item);
    if (wasSelected) {
      this.selectItem(item.clientId);
    }
    this.layer?.batchDraw();
  }
  // --- Ações do objeto selecionado -----------------------------------------------
  duplicateSelected() {
    const item = this.selectedItem();
    if (!item || item.itemType === "TABLE") {
      return;
    }
    const clientId = this.generateClientId();
    const copy = __spreadProps(__spreadValues({}, item), { id: null, clientId, x: item.x + 20, y: item.y + 20, zIndex: this.nextZIndex() });
    this.items.update((list) => [...list, copy]);
    this.createNode(copy);
    this.selectItem(clientId);
    this.markDirty();
  }
  deleteSelected() {
    const item = this.selectedItem();
    if (!item) {
      return;
    }
    this.nodesByClientId.get(item.clientId)?.destroy();
    this.nodesByClientId.delete(item.clientId);
    this.items.update((list) => list.filter((candidate) => candidate.clientId !== item.clientId));
    this.selectItem(null);
    this.markDirty();
    this.layer?.batchDraw();
  }
  toggleLockSelected() {
    const item = this.selectedItem();
    if (!item) {
      return;
    }
    const locked = !item.properties["locked"];
    this.updateSelectedItemProperty("locked", locked);
    if (locked) {
      this.selectItem(null);
    }
  }
  bringToFront() {
    const item = this.selectedItem();
    if (!item) {
      return;
    }
    const maxZ = this.items().reduce((max, candidate) => Math.max(max, candidate.zIndex), 0);
    this.updateSelectedItem({ zIndex: maxZ + 1 });
    this.nodesByClientId.get(item.clientId)?.moveToTop();
    this.layer?.batchDraw();
  }
  sendToBack() {
    const item = this.selectedItem();
    if (!item) {
      return;
    }
    const minZ = this.items().reduce((min, candidate) => Math.min(min, candidate.zIndex), 0);
    this.updateSelectedItem({ zIndex: minZ - 1 });
    this.nodesByClientId.get(item.clientId)?.moveToBottom();
    this.background?.moveToBottom();
    this.layer?.batchDraw();
  }
  // --- Zoom -----------------------------------------------------------------------
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
  // --- Salvar -----------------------------------------------------------------------
  saveLayout() {
    const plan = this.floorPlan();
    if (!plan) {
      return;
    }
    this.isSaving.set(true);
    this.saveError.set(null);
    this.saveSuccess.set(false);
    const payload = this.items().map((item) => ({
      id: item.id ?? void 0,
      itemType: item.itemType,
      tableId: item.itemType === "TABLE" ? item.tableId : void 0,
      x: item.x,
      y: item.y,
      width: item.width,
      height: item.height,
      rotation: item.rotation,
      zIndex: item.zIndex,
      color: item.color || void 0,
      label: item.itemType === "TABLE" ? void 0 : item.label || void 0,
      propertiesJson: Object.keys(item.properties).length > 0 ? JSON.stringify(item.properties) : void 0
    }));
    this.floorPlanItemsService.syncLayout(plan.id, payload).subscribe({
      next: () => {
        this.isSaving.set(false);
        this.isDirty.set(false);
        this.saveSuccess.set(true);
        this.reloadAfterSave(plan.id);
      },
      error: (error) => {
        this.isSaving.set(false);
        this.saveError.set(this.resolveErrorMessage(error));
      }
    });
  }
  reloadAfterSave(floorPlanId) {
    this.floorPlanItemsService.list(floorPlanId).subscribe({
      next: (responses) => {
        this.nodesByClientId.forEach((node) => node.destroy());
        this.nodesByClientId.clear();
        this.selectItem(null);
        const editorItems = responses.map((response) => this.toEditorItem(response, this.availableTables()));
        this.items.set(editorItems);
        for (const item of editorItems) {
          this.createNode(item);
        }
        this.layer?.batchDraw();
      },
      error: () => {
      }
    });
  }
  // --- Utilitários -------------------------------------------------------------------
  nextZIndex() {
    return this.items().reduce((max, item) => Math.max(max, item.zIndex), 0) + 1;
  }
  generateClientId() {
    this.clientIdCounter += 1;
    return `local-${this.clientIdCounter}`;
  }
  markDirty() {
    this.isDirty.set(true);
    this.saveSuccess.set(false);
  }
  snap(value) {
    return Math.round(value / GRID_SIZE) * GRID_SIZE;
  }
  resolveErrorMessage(error) {
    const body = error.error;
    if (body?.mensagem) {
      return body.mensagem;
    }
    if (body?.titulo) {
      return body.titulo;
    }
    if (error.status === 409) {
      return "Uma das mesas do layout j\xE1 est\xE1 posicionada em outro ambiente. Atualize a p\xE1gina e tente novamente.";
    }
    if (error.status === 422) {
      return "Verifique os objetos do mapa: toda mesa precisa estar vinculada a uma mesa cadastrada.";
    }
    if (error.status === 404) {
      return "Ambiente ou mesa n\xE3o encontrada nesta empresa.";
    }
    if (error.status === 403) {
      return "Voc\xEA n\xE3o tem permiss\xE3o para editar este ambiente.";
    }
    return "N\xE3o foi poss\xEDvel salvar o layout. Tente novamente em instantes.";
  }
  static \u0275fac = function FloorPlanEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FloorPlanEditorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FloorPlanEditorComponent, selectors: [["app-admin-floor-plan-editor"]], viewQuery: function FloorPlanEditorComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.canvasContainerRef = _t.first);
    }
  }, hostBindings: function FloorPlanEditorComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("beforeunload", function FloorPlanEditorComponent_beforeunload_HostBindingHandler($event) {
        return ctx.onBeforeUnload($event);
      }, false, \u0275\u0275resolveWindow);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [["canvasContainer", ""], ["role", "alert", 1, "form-alert", "form-alert--error"], [1, "modal-backdrop"], ["aria-hidden", "true", 1, "material-icons"], [1, "toolbar"], ["routerLink", "/painel/configuracoes/mapa-salao", 1, "btn", "btn--ghost", "btn--sm"], [1, "toolbar__title"], [1, "page-title"], [1, "field__hint"], [1, "toolbar__zoom"], ["type", "button", "title", "Diminuir zoom", 1, "icon-btn", 3, "click", "disabled"], [1, "toolbar__zoom-label"], ["type", "button", "title", "Aumentar zoom", 1, "icon-btn", 3, "click", "disabled"], ["type", "button", "title", "Restaurar zoom", 1, "icon-btn", 3, "click", "disabled"], [1, "toolbar__save"], [1, "toolbar__status", "toolbar__status--error"], [1, "toolbar__status", "toolbar__status--success"], [1, "toolbar__status"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", 3, "click", "disabled"], [1, "editor"], [1, "sidebar", "sidebar--left"], [1, "sidebar__title"], [1, "palette"], ["type", "button", "draggable", "true", 1, "palette__item", 3, "title"], [1, "canvas-viewport"], [1, "canvas-loading"], [1, "canvas-stage", 3, "drop", "dragover"], [1, "sidebar", "sidebar--right"], [1, "properties"], ["type", "button", "draggable", "true", 1, "palette__item", 3, "dragstart", "click", "title"], [1, "table-list"], [1, "table-list__item"], [1, "field"], [1, "field__row"], ["for", "prop-x", 1, "field__label"], [1, "field__control"], ["id", "prop-x", "type", "number", 1, "field__input", 3, "change", "value"], ["for", "prop-y", 1, "field__label"], ["id", "prop-y", "type", "number", 1, "field__input", 3, "change", "value"], ["for", "prop-width", 1, "field__label"], ["id", "prop-width", "type", "number", "min", "20", 1, "field__input", 3, "change", "value"], ["for", "prop-height", 1, "field__label"], ["id", "prop-height", "type", "number", "min", "20", 1, "field__input", 3, "change", "value"], ["for", "prop-rotation", 1, "field__label"], ["id", "prop-rotation", "type", "number", "min", "0", "max", "359", 1, "field__input", 3, "change", "value"], ["for", "prop-color", 1, "field__label"], ["id", "prop-color", "type", "color", 1, "field__input", "field__input--color", 3, "change", "value"], [1, "properties__actions"], ["type", "button", 1, "icon-btn", 3, "click", "title"], ["type", "button", "title", "Trazer para frente", 1, "icon-btn", 3, "click"], ["type", "button", "title", "Enviar para tr\xE1s", 1, "icon-btn", 3, "click"], ["type", "button", "title", "Duplicar", 1, "icon-btn", 3, "click", "disabled"], ["type", "button", "title", "Excluir", 1, "icon-btn", "icon-btn--danger", 3, "click"], [1, "field__label"], [1, "properties__readonly"], ["for", "prop-shape", 1, "field__label"], ["id", "prop-shape", 1, "field__input", 3, "change", "value"], ["value", "SQUARE"], ["value", "ROUND"], ["value", "RECTANGULAR"], ["for", "prop-label", 1, "field__label"], ["id", "prop-label", "type", "text", 1, "field__input", 3, "change", "value"], ["for", "prop-image-url", 1, "field__label"], ["id", "prop-image-url", "type", "text", "placeholder", "https://\u2026", 1, "field__input", 3, "change", "value"], [1, "modal-backdrop", 3, "click"], [1, "modal-card", "modal-card--sm", "card", 3, "click"], [1, "step-heading"], ["for", "pending-table", 1, "field__label"], ["id", "pending-table", 1, "field__input", 3, "change", "value"], ["value", "", "disabled", ""], [3, "value"], [1, "step-actions"], ["type", "button", 1, "btn", "btn--primary", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"]], template: function FloorPlanEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, FloorPlanEditorComponent_Conditional_0_Template, 4, 1, "div", 1)(1, FloorPlanEditorComponent_Conditional_1_Template, 49, 14)(2, FloorPlanEditorComponent_Conditional_2_Template, 21, 3, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.loadError() ? 0 : 1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.pendingTableDrop() ? 2 : -1);
    }
  }, dependencies: [RouterLink, RippleDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: var(--color-text);\n  margin: 0;\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  flex-wrap: wrap;\n  padding: 12px 16px;\n  margin-bottom: 12px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border);\n  background: var(--color-bg-elevated);\n}\n.toolbar__title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.toolbar__zoom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.toolbar__zoom-label[_ngcontent-%COMP%] {\n  min-width: 48px;\n  text-align: center;\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.toolbar__save[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-left: auto;\n}\n.toolbar__status[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.toolbar__status--error[_ngcontent-%COMP%] {\n  color: #f87171;\n}\n.toolbar__status--success[_ngcontent-%COMP%] {\n  color: var(--color-success);\n}\n.editor[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 220px 1fr 260px;\n  gap: 16px;\n  align-items: start;\n}\n.sidebar[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  background: var(--color-bg-elevated);\n  padding: 16px;\n  max-height: calc(100vh - 180px);\n  overflow-y: auto;\n}\n.sidebar__title[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n  margin: 0 0 10px;\n}\n.sidebar__title[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 20px;\n}\n.palette[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 8px;\n}\n.palette__item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 10px 6px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border);\n  background: transparent;\n  color: var(--color-text);\n  font-size: 0.75rem;\n  text-align: center;\n  cursor: grab;\n  transition: background var(--transition-fast), border-color var(--transition-fast);\n}\n.palette__item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: var(--color-text-muted);\n}\n.palette__item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: var(--color-accent);\n}\n.palette__item[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n.table-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.table-list__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border);\n  font-size: 0.8125rem;\n}\n.table-list__item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--color-text-muted);\n}\n.canvas-viewport[_ngcontent-%COMP%] {\n  position: relative;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n  background:\n    linear-gradient(\n      45deg,\n      rgba(255, 255, 255, 0.04) 25%,\n      transparent 25%,\n      transparent 75%,\n      rgba(255, 255, 255, 0.04) 75%),\n    linear-gradient(\n      45deg,\n      rgba(255, 255, 255, 0.04) 25%,\n      transparent 25%,\n      transparent 75%,\n      rgba(255, 255, 255, 0.04) 75%);\n  background-size: 20px 20px;\n  background-position: 0 0, 10px 10px;\n  min-height: 320px;\n  max-height: calc(100vh - 180px);\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n.canvas-stage[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.canvas-stage--hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.canvas-loading[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n}\n.canvas-loading[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.properties[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.properties__readonly[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 10px 12px;\n  border-radius: var(--radius-sm);\n  background: rgba(255, 255, 255, 0.03);\n  color: var(--color-text-muted);\n  font-size: 0.875rem;\n}\n.properties__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  padding-top: 8px;\n  border-top: 1px solid var(--color-border);\n}\n.field__row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.field__row[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.field__input--color[_ngcontent-%COMP%] {\n  padding: 4px;\n  height: 42px;\n  cursor: pointer;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius-sm);\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text);\n}\n.icon-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.icon-btn[_ngcontent-%COMP%]:disabled:hover {\n  background: transparent;\n  color: var(--color-text-muted);\n}\n.icon-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(248, 113, 113, 0.12);\n  color: #f87171;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(4, 8, 20, 0.64);\n  backdrop-filter: blur(2px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  z-index: 100;\n}\n.modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  padding: 32px;\n}\n.step-heading[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n}\n.step-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 24px;\n}\nselect.field__input[_ngcontent-%COMP%] {\n  appearance: none;\n  cursor: pointer;\n}\n@media (max-width: 1100px) {\n  .editor[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    max-height: none;\n  }\n}\n/*# sourceMappingURL=floor-plan-editor.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FloorPlanEditorComponent, { className: "FloorPlanEditorComponent", filePath: "src\\app\\features\\admin\\pages\\settings\\floor-plan\\floor-plan-editor.component.ts", lineNumber: 103 });
})();
export {
  FloorPlanEditorComponent
};
//# sourceMappingURL=chunk-SYJAQMVU.js.map
