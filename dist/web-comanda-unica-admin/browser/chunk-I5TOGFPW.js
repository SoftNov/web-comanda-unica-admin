import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-ALTQOTXH.js";
import {
  RippleDirective
} from "./chunk-G7AZFESP.js";
import {
  FloorPlansService
} from "./chunk-2PCEBGEC.js";
import "./chunk-3BRF5UDA.js";
import {
  Router,
  inject,
  signal,
  ɵsetClassDebugInfo,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ZGOR3PJA.js";

// src/app/features/admin/pages/settings/floor-plan/floor-plan-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function FloorPlanListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1, "Carregando ambientes\u2026");
    \u0275\u0275elementEnd();
  }
}
function FloorPlanListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 4);
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
function FloorPlanListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 4);
    \u0275\u0275text(2, "map");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Nenhum ambiente cadastrado ainda.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 3);
    \u0275\u0275listener("click", function FloorPlanListComponent_Conditional_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openCreateModal());
    });
    \u0275\u0275elementStart(6, "span", 4);
    \u0275\u0275text(7, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Criar primeiro ambiente ");
    \u0275\u0275elementEnd()();
  }
}
function FloorPlanListComponent_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275listener("click", function FloorPlanListComponent_Conditional_13_For_2_Template_div_click_1_listener() {
      const floorPlan_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEditor(floorPlan_r4));
    });
    \u0275\u0275elementStart(2, "span", 4);
    \u0275\u0275text(3, "map");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 12)(5, "h3", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 5);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 14)(10, "button", 15);
    \u0275\u0275listener("click", function FloorPlanListComponent_Conditional_13_For_2_Template_button_click_10_listener() {
      const floorPlan_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEditor(floorPlan_r4));
    });
    \u0275\u0275elementStart(11, "span", 4);
    \u0275\u0275text(12, "edit_location_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Abrir editor ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 16);
    \u0275\u0275listener("click", function FloorPlanListComponent_Conditional_13_For_2_Template_button_click_14_listener() {
      const floorPlan_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEditModal(floorPlan_r4));
    });
    \u0275\u0275elementStart(15, "span", 4);
    \u0275\u0275text(16, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 17);
    \u0275\u0275listener("click", function FloorPlanListComponent_Conditional_13_For_2_Template_button_click_17_listener() {
      const floorPlan_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.requestDelete(floorPlan_r4));
    });
    \u0275\u0275elementStart(18, "span", 4);
    \u0275\u0275text(19, "delete_outline");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const floorPlan_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", floorPlan_r4.backgroundColor || "#f5f5f5");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(floorPlan_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", floorPlan_r4.width, " \xD7 ", floorPlan_r4.height, " px");
  }
}
function FloorPlanListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, FloorPlanListComponent_Conditional_13_For_2_Template, 20, 5, "div", 10, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.floorPlans());
  }
}
function FloorPlanListComponent_Conditional_14_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "Informe um nome entre 2 e 100 caracteres.");
    \u0275\u0275elementEnd();
  }
}
function FloorPlanListComponent_Conditional_14_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 4);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formError(), " ");
  }
}
function FloorPlanListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275listener("click", function FloorPlanListComponent_Conditional_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 19);
    \u0275\u0275listener("click", function FloorPlanListComponent_Conditional_14_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 20)(3, "h2", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275listener("click", function FloorPlanListComponent_Conditional_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(6, "span", 4);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "form", 23);
    \u0275\u0275listener("submit", function FloorPlanListComponent_Conditional_14_Template_form_submit_8_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r0.submit());
    });
    \u0275\u0275elementStart(9, "div", 24)(10, "label", 25);
    \u0275\u0275text(11, "Nome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 26);
    \u0275\u0275element(13, "input", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, FloorPlanListComponent_Conditional_14_Conditional_14_Template, 2, 0, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 29)(16, "div", 24)(17, "label", 30);
    \u0275\u0275text(18, "Largura (px)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 26);
    \u0275\u0275element(20, "input", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 24)(22, "label", 32);
    \u0275\u0275text(23, "Altura (px)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 26);
    \u0275\u0275element(25, "input", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 24)(27, "label", 34);
    \u0275\u0275text(28, "Cor de fundo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 26);
    \u0275\u0275element(30, "input", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, FloorPlanListComponent_Conditional_14_Conditional_31_Template, 4, 1, "div", 6);
    \u0275\u0275elementStart(32, "div", 36)(33, "button", 37);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 38);
    \u0275\u0275listener("click", function FloorPlanListComponent_Conditional_14_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(36, "Cancelar");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.modalMode() === "create" ? "Novo ambiente" : "Editar ambiente");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("field__input--invalid", ctx_r0.form.controls.name.invalid && ctx_r0.form.controls.name.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.controls.name.invalid && ctx_r0.form.controls.name.touched ? 14 : -1);
    \u0275\u0275advance(17);
    \u0275\u0275conditional(ctx_r0.formError() ? 31 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isSubmitting() ? "Salvando\u2026" : "Salvar", " ");
  }
}
function FloorPlanListComponent_Conditional_15_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 4);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.deleteError(), " ");
  }
}
function FloorPlanListComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275listener("click", function FloorPlanListComponent_Conditional_15_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelDelete());
    });
    \u0275\u0275elementStart(1, "div", 19);
    \u0275\u0275listener("click", function FloorPlanListComponent_Conditional_15_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h2", 21);
    \u0275\u0275text(3, "Excluir ambiente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 5);
    \u0275\u0275text(5, " Tem certeza que deseja excluir ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "? Todos os objetos desenhados neste ambiente ser\xE3o exclu\xEDdos junto (as mesas em si n\xE3o s\xE3o afetadas). Esta a\xE7\xE3o n\xE3o pode ser desfeita. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, FloorPlanListComponent_Conditional_15_Conditional_9_Template, 4, 1, "div", 6);
    \u0275\u0275elementStart(10, "div", 36)(11, "button", 39);
    \u0275\u0275listener("click", function FloorPlanListComponent_Conditional_15_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmDelete());
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 38);
    \u0275\u0275listener("click", function FloorPlanListComponent_Conditional_15_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelDelete());
    });
    \u0275\u0275text(14, "Cancelar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.name);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.deleteError() ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isDeleting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isDeleting() ? "Excluindo\u2026" : "Excluir", " ");
  }
}
var FloorPlanListComponent = class _FloorPlanListComponent {
  fb = new FormBuilder();
  floorPlansService = inject(FloorPlansService);
  router = inject(Router);
  floorPlans = signal([]);
  isLoading = signal(true);
  loadError = signal(null);
  isModalOpen = signal(false);
  modalMode = signal("create");
  editingId = signal(null);
  isSubmitting = signal(false);
  formError = signal(null);
  floorPlanToDelete = signal(null);
  isDeleting = signal(false);
  deleteError = signal(null);
  form = this.fb.nonNullable.group({
    name: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    width: this.fb.control(1200, [Validators.required, Validators.min(100)]),
    height: this.fb.control(800, [Validators.required, Validators.min(100)]),
    backgroundColor: ["#f5f5f5"]
  });
  constructor() {
    this.loadFloorPlans();
  }
  loadFloorPlans() {
    this.isLoading.set(true);
    this.loadError.set(null);
    this.floorPlansService.list().subscribe({
      next: (floorPlans) => {
        this.floorPlans.set(floorPlans);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
        this.loadError.set("N\xE3o foi poss\xEDvel carregar os ambientes.");
      }
    });
  }
  openEditor(floorPlan) {
    this.router.navigate(["/painel/configuracoes/mapa-salao", floorPlan.id]);
  }
  openCreateModal() {
    this.modalMode.set("create");
    this.editingId.set(null);
    this.formError.set(null);
    this.form.reset({
      name: "",
      width: 1200,
      height: 800,
      backgroundColor: "#f5f5f5"
    });
    this.isModalOpen.set(true);
  }
  openEditModal(floorPlan) {
    this.modalMode.set("edit");
    this.editingId.set(floorPlan.id);
    this.formError.set(null);
    this.form.reset({
      name: floorPlan.name,
      width: floorPlan.width,
      height: floorPlan.height,
      backgroundColor: floorPlan.backgroundColor ?? "#f5f5f5"
    });
    this.isModalOpen.set(true);
  }
  closeModal() {
    this.isModalOpen.set(false);
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.formError.set("Verifique os campos destacados antes de salvar.");
      return;
    }
    this.formError.set(null);
    this.isSubmitting.set(true);
    const value = this.form.getRawValue();
    const payload = {
      name: value.name.trim(),
      width: value.width ?? 1200,
      height: value.height ?? 800,
      backgroundColor: value.backgroundColor || void 0
    };
    if (this.modalMode() === "create") {
      this.floorPlansService.create(payload).subscribe({
        next: (created) => {
          this.isSubmitting.set(false);
          this.isModalOpen.set(false);
          this.loadFloorPlans();
          this.openEditor(created);
        },
        error: (error) => {
          this.isSubmitting.set(false);
          this.formError.set(this.resolveErrorMessage(error));
        }
      });
      return;
    }
    const id = this.editingId();
    if (!id) {
      return;
    }
    this.floorPlansService.update(id, payload).subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.isModalOpen.set(false);
        this.loadFloorPlans();
      },
      error: (error) => {
        this.isSubmitting.set(false);
        this.formError.set(this.resolveErrorMessage(error));
      }
    });
  }
  requestDelete(floorPlan) {
    this.deleteError.set(null);
    this.floorPlanToDelete.set(floorPlan);
  }
  cancelDelete() {
    this.floorPlanToDelete.set(null);
  }
  confirmDelete() {
    const floorPlan = this.floorPlanToDelete();
    if (!floorPlan) {
      return;
    }
    this.isDeleting.set(true);
    this.deleteError.set(null);
    this.floorPlansService.delete(floorPlan.id).subscribe({
      next: () => {
        this.isDeleting.set(false);
        this.floorPlanToDelete.set(null);
        this.loadFloorPlans();
      },
      error: (error) => {
        this.isDeleting.set(false);
        this.deleteError.set(this.resolveErrorMessage(error));
      }
    });
  }
  resolveErrorMessage(error) {
    const body = error.error;
    if (body?.mensagem) {
      return body.mensagem;
    }
    if (body?.titulo) {
      return body.titulo;
    }
    if (error.status === 404) {
      return "Ambiente n\xE3o encontrado nesta empresa.";
    }
    if (error.status === 403) {
      return "Voc\xEA n\xE3o tem permiss\xE3o para realizar esta a\xE7\xE3o.";
    }
    if (error.status === 422) {
      return "Verifique os dados informados e tente novamente.";
    }
    return "N\xE3o foi poss\xEDvel concluir a opera\xE7\xE3o. Tente novamente em instantes.";
  }
  static \u0275fac = function FloorPlanListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FloorPlanListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FloorPlanListComponent, selectors: [["app-admin-floor-plan-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 3, consts: [[1, "page-header", "page-header--row"], [1, "page-title"], [1, "page-subtitle"], ["type", "button", "appRipple", "", 1, "btn", "btn--primary", 3, "click"], ["aria-hidden", "true", 1, "material-icons"], [1, "field__hint"], ["role", "alert", 1, "form-alert", "form-alert--error"], [1, "card", "empty-state"], [1, "floor-plans-grid"], [1, "modal-backdrop"], [1, "card", "floor-plan-item"], [1, "floor-plan-item__preview", 3, "click"], [1, "floor-plan-item__body"], [1, "floor-plan-item__name"], [1, "floor-plan-item__actions"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], ["type", "button", "title", "Editar dados do ambiente", 1, "icon-btn", 3, "click"], ["type", "button", "title", "Excluir ambiente", 1, "icon-btn", "icon-btn--danger", 3, "click"], [1, "modal-backdrop", 3, "click"], [1, "modal-card", "modal-card--sm", "card", 3, "click"], [1, "modal-card__header"], [1, "step-heading"], ["type", "button", "aria-label", "Fechar", 1, "icon-btn", 3, "click"], ["novalidate", "", 3, "submit", "formGroup"], [1, "field"], ["for", "floor-plan-name", 1, "field__label"], [1, "field__control"], ["id", "floor-plan-name", "type", "text", "formControlName", "name", "placeholder", "Ex: Sal\xE3o Principal, Varanda", 1, "field__input"], [1, "field__error"], [1, "field__row"], ["for", "floor-plan-width", 1, "field__label"], ["id", "floor-plan-width", "type", "number", "min", "100", "formControlName", "width", 1, "field__input"], ["for", "floor-plan-height", 1, "field__label"], ["id", "floor-plan-height", "type", "number", "min", "100", "formControlName", "height", 1, "field__input"], ["for", "floor-plan-color", 1, "field__label"], ["id", "floor-plan-color", "type", "color", "formControlName", "backgroundColor", 1, "field__input", "field__input--color"], [1, "step-actions"], ["type", "submit", "appRipple", "", 1, "btn", "btn--primary", 3, "disabled"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "button", 1, "btn", "btn--danger", 3, "click", "disabled"]], template: function FloorPlanListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Mapa do Sal\xE3o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Cadastre os ambientes do estabelecimento e desenhe o layout de cada um.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "button", 3);
      \u0275\u0275listener("click", function FloorPlanListComponent_Template_button_click_6_listener() {
        return ctx.openCreateModal();
      });
      \u0275\u0275elementStart(7, "span", 4);
      \u0275\u0275text(8, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " Novo ambiente ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, FloorPlanListComponent_Conditional_10_Template, 2, 0, "p", 5)(11, FloorPlanListComponent_Conditional_11_Template, 4, 1, "div", 6)(12, FloorPlanListComponent_Conditional_12_Template, 9, 0, "div", 7)(13, FloorPlanListComponent_Conditional_13_Template, 3, 0, "div", 8)(14, FloorPlanListComponent_Conditional_14_Template, 37, 8, "div", 9)(15, FloorPlanListComponent_Conditional_15_Template, 15, 4, "div", 9);
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.isLoading() ? 10 : ctx.loadError() ? 11 : ctx.floorPlans().length === 0 ? 12 : 13);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.isModalOpen() ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_2_0 = ctx.floorPlanToDelete()) ? 15 : -1, tmp_2_0);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, RippleDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-header--row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--color-text);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1rem;\n}\n.field__hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 48px 20px;\n  text-align: center;\n  color: var(--color-text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n.floor-plans-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 16px;\n}\n.floor-plan-item[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.floor-plan-item__preview[_ngcontent-%COMP%] {\n  height: 120px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.floor-plan-item__preview[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: rgba(0, 0, 0, 0.28);\n}\n.floor-plan-item__body[_ngcontent-%COMP%] {\n  padding: 16px 18px 8px;\n}\n.floor-plan-item__name[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n  color: var(--color-text);\n  margin: 0 0 4px;\n}\n.floor-plan-item__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 12px 18px 16px;\n  border-top: 1px solid var(--color-border);\n  margin-top: 8px;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius-sm);\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  transition: background var(--transition-fast), color var(--transition-fast);\n  margin-left: auto;\n}\n.icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text);\n}\n.icon-btn[_ngcontent-%COMP%]    + .icon-btn[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.icon-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(248, 113, 113, 0.12);\n  color: #f87171;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(4, 8, 20, 0.64);\n  backdrop-filter: blur(2px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  z-index: 100;\n}\n.modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 640px;\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n  padding: 32px;\n}\n.modal-card--sm[_ngcontent-%COMP%] {\n  max-width: 420px;\n}\n.modal-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.step-heading[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 1.0625rem;\n  color: var(--color-text);\n}\n.field__row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.field__row[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 180px;\n}\n.field__input--color[_ngcontent-%COMP%] {\n  padding: 4px;\n  height: 42px;\n  cursor: pointer;\n}\n.step-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 24px;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #f87171;\n  color: #2a0a0a;\n}\n.btn--danger[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.08);\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=floor-plan-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FloorPlanListComponent, { className: "FloorPlanListComponent", filePath: "src\\app\\features\\admin\\pages\\settings\\floor-plan\\floor-plan-list.component.ts", lineNumber: 23 });
})();
export {
  FloorPlanListComponent
};
//# sourceMappingURL=chunk-I5TOGFPW.js.map
