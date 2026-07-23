import {
  AuthService
} from "./chunk-JIG4QTYX.js";
import {
  AccountsService
} from "./chunk-LADLI4RN.js";
import "./chunk-3BRF5UDA.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  __spreadProps,
  __spreadValues,
  computed,
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
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ZGOR3PJA.js";

// src/app/features/admin/config/menu.config.ts
var ADMIN_MENU_ITEMS = [
  { label: "Dashboard", icon: "dashboard", route: "/painel/dashboard" },
  { label: "Comandas", icon: "receipt_long", route: "/painel/comandas" },
  {
    label: "Mesas",
    icon: "table_bar",
    children: [
      {
        label: "Cadastro de Mesas",
        icon: "table_restaurant",
        route: "/painel/mesas",
        roles: ["ADMIN", "OWNER", "MANAGER"]
      },
      {
        label: "Mapa do Sal\xE3o",
        icon: "map",
        route: "/painel/configuracoes/mapa-salao",
        roles: ["ADMIN", "OWNER", "MANAGER"]
      }
    ]
  },
  { label: "Card\xE1pio", icon: "restaurant_menu", route: "/painel/cardapio", roles: ["ADMIN", "OWNER", "MANAGER"] },
  { label: "Pedidos", icon: "point_of_sale", route: "/painel/pedidos" },
  { label: "Financeiro", icon: "payments", route: "/painel/financeiro" },
  { label: "Funcion\xE1rios", icon: "groups", route: "/painel/funcionarios", roles: ["ADMIN", "OWNER", "MANAGER"] },
  {
    label: "Configura\xE7\xF5es",
    icon: "settings",
    children: [
      { label: "Geral", icon: "tune", route: "/painel/configuracoes" },
      { label: "Meu perfil", icon: "person", route: "/painel/configuracoes/perfil" },
      { label: "Redefinir senha", icon: "lock_reset", route: "/painel/configuracoes/redefinir-senha" }
    ]
  }
];

// src/app/features/admin/layout/admin-layout/admin-layout.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.route;
var _forTrack2 = ($index, $item) => $item.companyId;
function AdminLayoutComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileSidebar());
    });
    \u0275\u0275elementEnd();
  }
}
function AdminLayoutComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", (tmp_1_0 = ctx_r1.selectedCompany()) == null ? null : tmp_1_0.logoUrl, \u0275\u0275sanitizeUrl);
  }
}
function AdminLayoutComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1, "CU");
    \u0275\u0275elementEnd();
  }
}
function AdminLayoutComponent_For_10_Conditional_0_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 28);
    \u0275\u0275listener("click", function AdminLayoutComponent_For_10_Conditional_0_Conditional_7_For_2_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.closeMobileSidebar());
    });
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const child_r6 = ctx.$implicit;
    \u0275\u0275property("routerLink", child_r6.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r6.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r6.label);
  }
}
function AdminLayoutComponent_For_10_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275repeaterCreate(1, AdminLayoutComponent_For_10_Conditional_0_Conditional_7_For_2_Template, 5, 3, "a", 27, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(item_r4.children);
  }
}
function AdminLayoutComponent_For_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function AdminLayoutComponent_For_10_Conditional_0_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const item_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleGroup(item_r4, $event));
    });
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AdminLayoutComponent_For_10_Conditional_0_Conditional_7_Template, 3, 0, "div", 26);
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("admin-sidebar__link--expanded", ctx_r1.isGroupExpanded(item_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isGroupExpanded(item_r4) ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isGroupExpanded(item_r4) ? 7 : -1);
  }
}
function AdminLayoutComponent_For_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 29);
    \u0275\u0275listener("click", function AdminLayoutComponent_For_10_Conditional_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeMobileSidebar());
    });
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", item_r4.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.label);
  }
}
function AdminLayoutComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AdminLayoutComponent_For_10_Conditional_0_Template, 8, 6)(1, AdminLayoutComponent_For_10_Conditional_1_Template, 5, 3, "a", 23);
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275conditional(item_r4.children ? 0 : 1);
  }
}
function AdminLayoutComponent_Conditional_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 31);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", (tmp_2_0 = ctx_r1.selectedCompany()) == null ? null : tmp_2_0.logoUrl, \u0275\u0275sanitizeUrl);
  }
}
function AdminLayoutComponent_Conditional_22_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "storefront");
    \u0275\u0275elementEnd();
  }
}
function AdminLayoutComponent_Conditional_22_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_22_Conditional_8_For_2_Template_button_click_0_listener() {
      const company_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectCompany(company_r11.companyId));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const company_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("admin-topbar__menu-item--active", company_r11.companyId === ((tmp_12_0 = ctx_r1.selectedCompany()) == null ? null : tmp_12_0.companyId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(company_r11.companyName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(company_r11.profileName);
  }
}
function AdminLayoutComponent_Conditional_22_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_22_Conditional_8_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275repeaterCreate(1, AdminLayoutComponent_Conditional_22_Conditional_8_For_2_Template, 5, 4, "button", 35, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.companies());
  }
}
function AdminLayoutComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "button", 30);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_22_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCompanyMenu($event));
    });
    \u0275\u0275template(2, AdminLayoutComponent_Conditional_22_Conditional_2_Template, 1, 1, "img", 31)(3, AdminLayoutComponent_Conditional_22_Conditional_3_Template, 2, 0, "span", 9);
    \u0275\u0275elementStart(4, "span", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 9);
    \u0275\u0275text(7, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, AdminLayoutComponent_Conditional_22_Conditional_8_Template, 3, 0, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_1_0 = ctx_r1.selectedCompany()) == null ? null : tmp_1_0.logoUrl) ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.selectedCompany()) == null ? null : tmp_2_0.companyName);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isCompanyMenuOpen() ? 8 : -1);
  }
}
function AdminLayoutComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 17);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", (tmp_1_0 = ctx_r1.currentUser()) == null ? null : tmp_1_0.avatarUrl, \u0275\u0275sanitizeUrl);
  }
}
function AdminLayoutComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.userInitials);
  }
}
function AdminLayoutComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_31_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 39)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 40);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_31_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275elementStart(7, "span", 9);
    \u0275\u0275text(8, "logout");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Sair ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r1.currentUser()) == null ? null : tmp_1_0.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.currentUser()) == null ? null : tmp_2_0.email);
  }
}
var AdminLayoutComponent = class _AdminLayoutComponent {
  authService = inject(AuthService);
  accountsService = inject(AccountsService);
  router = inject(Router);
  currentUser = this.authService.currentUser;
  companies = this.authService.companies;
  selectedCompany = this.authService.selectedCompany;
  profileCode = computed(() => this.selectedCompany()?.profileCode ?? null);
  menuItems = computed(() => this.filterMenuByProfile(ADMIN_MENU_ITEMS, this.profileCode()));
  isMobileSidebarOpen = signal(false);
  isSidebarCollapsed = signal(false);
  isCompanyMenuOpen = signal(false);
  isUserMenuOpen = signal(false);
  expandedGroups = signal(new Set(this.menuItems().filter((item) => this.isGroupActive(item)).map((item) => item.label)));
  constructor() {
    this.syncProfileImages();
  }
  get userInitials() {
    const name = this.currentUser()?.fullName ?? "";
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) {
      return "?";
    }
    return (parts[0][0] + (parts[1]?.[0] ?? "")).toUpperCase();
  }
  closeMenus() {
    this.isCompanyMenuOpen.set(false);
    this.isUserMenuOpen.set(false);
  }
  toggleMobileSidebar() {
    this.isMobileSidebarOpen.update((open) => !open);
  }
  closeMobileSidebar() {
    this.isMobileSidebarOpen.set(false);
  }
  toggleCollapse() {
    this.isSidebarCollapsed.update((collapsed) => !collapsed);
  }
  isGroupExpanded(item) {
    return this.expandedGroups().has(item.label);
  }
  toggleGroup(item, event) {
    event.stopPropagation();
    if (this.isSidebarCollapsed()) {
      this.isSidebarCollapsed.set(false);
    }
    this.expandedGroups.update((current) => {
      const next = new Set(current);
      if (next.has(item.label)) {
        next.delete(item.label);
      } else {
        next.add(item.label);
      }
      return next;
    });
  }
  isGroupActive(item) {
    return (item.children ?? []).some((child) => !!child.route && this.router.url.startsWith(child.route));
  }
  filterMenuByProfile(items, profileCode) {
    return items.filter((item) => !item.roles || !!profileCode && item.roles.includes(profileCode)).map((item) => item.children ? __spreadProps(__spreadValues({}, item), { children: this.filterMenuByProfile(item.children, profileCode) }) : item).filter((item) => !item.children || item.children.length > 0);
  }
  syncProfileImages() {
    this.accountsService.getProfile().subscribe({
      next: (response) => {
        if (response.owner.avatarUrl) {
          this.authService.updateAvatarUrl(response.owner.avatarUrl);
        }
        if (response.companyLogoUrl) {
          const companyId = this.selectedCompany()?.companyId;
          if (companyId) {
            this.authService.updateCompanyLogoUrl(companyId, response.companyLogoUrl);
          }
        }
      },
      error: () => {
      }
    });
  }
  toggleCompanyMenu(event) {
    event.stopPropagation();
    this.isUserMenuOpen.set(false);
    this.isCompanyMenuOpen.update((open) => !open);
  }
  toggleUserMenu(event) {
    event.stopPropagation();
    this.isCompanyMenuOpen.set(false);
    this.isUserMenuOpen.update((open) => !open);
  }
  selectCompany(companyId) {
    this.authService.selectCompany(companyId);
    this.accountsService.invalidateProfileCache();
    this.syncProfileImages();
    this.isCompanyMenuOpen.set(false);
    this.router.navigateByUrl("/painel/dashboard");
  }
  logout() {
    this.authService.logout();
  }
  static \u0275fac = function AdminLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLayoutComponent, selectors: [["app-admin-layout"]], hostBindings: function AdminLayoutComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function AdminLayoutComponent_click_HostBindingHandler() {
        return ctx.closeMenus();
      }, false, \u0275\u0275resolveDocument);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 34, vars: 12, consts: [[1, "admin-layout"], [1, "admin-backdrop"], [1, "admin-sidebar"], [1, "admin-sidebar__brand"], ["alt", "", 1, "admin-sidebar__logo", "admin-sidebar__logo--img", 3, "src"], [1, "admin-sidebar__logo"], [1, "admin-sidebar__name"], [1, "admin-sidebar__nav"], ["type", "button", 1, "admin-sidebar__collapse-toggle", 3, "click"], ["aria-hidden", "true", 1, "material-icons"], [1, "admin-sidebar__label"], [1, "admin-main"], [1, "admin-topbar"], ["type", "button", "aria-label", "Abrir menu", 1, "admin-topbar__icon-btn", "admin-topbar__menu-btn", 3, "click"], [1, "admin-topbar__spacer"], [1, "admin-topbar__dropdown"], ["type", "button", 1, "admin-topbar__user-btn", 3, "click"], ["alt", "", 1, "admin-topbar__avatar", "admin-topbar__avatar--img", 3, "src"], [1, "admin-topbar__avatar"], [1, "admin-topbar__user-name"], [1, "admin-topbar__menu", "admin-topbar__menu--right"], [1, "admin-content"], [1, "admin-backdrop", 3, "click"], ["routerLinkActive", "admin-sidebar__link--active", 1, "admin-sidebar__link", 3, "routerLink"], ["type", "button", 1, "admin-sidebar__link", "admin-sidebar__link--group", 3, "click"], ["aria-hidden", "true", 1, "material-icons", "admin-sidebar__chevron"], [1, "admin-sidebar__submenu"], ["routerLinkActive", "admin-sidebar__link--active", 1, "admin-sidebar__link", "admin-sidebar__link--child", 3, "routerLink"], ["routerLinkActive", "admin-sidebar__link--active", 1, "admin-sidebar__link", "admin-sidebar__link--child", 3, "click", "routerLink"], ["routerLinkActive", "admin-sidebar__link--active", 1, "admin-sidebar__link", 3, "click", "routerLink"], ["type", "button", 1, "admin-topbar__company-btn", 3, "click"], ["alt", "", 1, "admin-topbar__company-logo", 3, "src"], [1, "admin-topbar__company-name"], [1, "admin-topbar__menu"], [1, "admin-topbar__menu", 3, "click"], ["type", "button", 1, "admin-topbar__menu-item", 3, "admin-topbar__menu-item--active"], ["type", "button", 1, "admin-topbar__menu-item", 3, "click"], [1, "admin-topbar__menu-item-role"], [1, "admin-topbar__menu", "admin-topbar__menu--right", 3, "click"], [1, "admin-topbar__menu-user"], ["type", "button", 1, "admin-topbar__menu-item", "admin-topbar__menu-item--danger", 3, "click"]], template: function AdminLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, AdminLayoutComponent_Conditional_1_Template, 1, 0, "div", 1);
      \u0275\u0275elementStart(2, "aside", 2)(3, "div", 3);
      \u0275\u0275template(4, AdminLayoutComponent_Conditional_4_Template, 1, 1, "img", 4)(5, AdminLayoutComponent_Conditional_5_Template, 2, 0, "span", 5);
      \u0275\u0275elementStart(6, "span", 6);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "nav", 7);
      \u0275\u0275repeaterCreate(9, AdminLayoutComponent_For_10_Template, 2, 1, null, null, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 8);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_11_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275elementStart(12, "span", 9);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span", 10);
      \u0275\u0275text(15, "Recolher menu");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 11)(17, "header", 12)(18, "button", 13);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_18_listener($event) {
        ctx.toggleMobileSidebar();
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(19, "span", 9);
      \u0275\u0275text(20, "menu");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(21, "div", 14);
      \u0275\u0275template(22, AdminLayoutComponent_Conditional_22_Template, 9, 3, "div", 15);
      \u0275\u0275elementStart(23, "div", 15)(24, "button", 16);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_24_listener($event) {
        return ctx.toggleUserMenu($event);
      });
      \u0275\u0275template(25, AdminLayoutComponent_Conditional_25_Template, 1, 1, "img", 17)(26, AdminLayoutComponent_Conditional_26_Template, 2, 1, "span", 18);
      \u0275\u0275elementStart(27, "span", 19);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span", 9);
      \u0275\u0275text(30, "expand_more");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(31, AdminLayoutComponent_Conditional_31_Template, 10, 2, "div", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "main", 21);
      \u0275\u0275element(33, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_4_0;
      let tmp_8_0;
      let tmp_9_0;
      \u0275\u0275classProp("admin-layout--collapsed", ctx.isSidebarCollapsed());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isMobileSidebarOpen() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("admin-sidebar--open", ctx.isMobileSidebarOpen());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(((tmp_3_0 = ctx.selectedCompany()) == null ? null : tmp_3_0.logoUrl) ? 4 : 5);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate((tmp_4_0 = (tmp_4_0 = ctx.selectedCompany()) == null ? null : tmp_4_0.companyName) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : "Comanda \xDAnica");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.menuItems());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.isSidebarCollapsed() ? "chevron_right" : "chevron_left");
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.companies().length > 1 ? 22 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(((tmp_8_0 = ctx.currentUser()) == null ? null : tmp_8_0.avatarUrl) ? 25 : 26);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate((tmp_9_0 = ctx.currentUser()) == null ? null : tmp_9_0.fullName);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isUserMenuOpen() ? 31 : -1);
    }
  }, dependencies: [RouterLink, RouterLinkActive, RouterOutlet], styles: ["\n\n.admin-layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: var(--color-bg);\n}\n.admin-sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  inset-block: 0;\n  left: 0;\n  width: 260px;\n  display: flex;\n  flex-direction: column;\n  background: var(--color-bg-elevated);\n  border-right: 1px solid var(--color-border);\n  z-index: 110;\n  transition: width var(--transition-base), transform var(--transition-base);\n}\n.admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar[_ngcontent-%COMP%] {\n  width: 76px;\n}\n.admin-sidebar__brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  height: 68px;\n  padding-inline: 20px;\n  border-bottom: 1px solid var(--color-border);\n  overflow: hidden;\n  white-space: nowrap;\n}\n.admin-sidebar__logo[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  border-radius: var(--radius-sm);\n  background: var(--gradient-accent);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n  font-size: 0.8125rem;\n  color: #fff;\n}\n.admin-sidebar__logo--img[_ngcontent-%COMP%] {\n  background: var(--color-bg-elevated);\n  object-fit: cover;\n}\n.admin-sidebar__name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--color-text);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.admin-sidebar__nav[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.admin-sidebar__link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  width: 100%;\n  padding: 11px 12px;\n  border-radius: var(--radius-sm);\n  border: none;\n  background: transparent;\n  color: var(--color-gray);\n  font-size: 0.9375rem;\n  font-weight: 500;\n  font-family: inherit;\n  white-space: nowrap;\n  overflow: hidden;\n  cursor: pointer;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.admin-sidebar__link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 20px;\n}\n.admin-sidebar__link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text);\n}\n.admin-sidebar__link--active[_ngcontent-%COMP%] {\n  background: var(--color-accent-bg);\n  color: var(--color-accent-hover);\n}\n.admin-sidebar__link--group[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.admin-sidebar__link--child[_ngcontent-%COMP%] {\n  padding-left: 12px;\n}\n.admin-sidebar__link--child[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]:first-child {\n  font-size: 18px;\n}\n.admin-sidebar__chevron[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 18px !important;\n  color: var(--color-text-muted);\n}\n.admin-sidebar__submenu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  margin: 2px 0 6px 34px;\n  padding-left: 10px;\n  border-left: 1px solid var(--color-border);\n}\n.admin-sidebar__collapse-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin: 12px;\n  padding: 11px 12px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border);\n  background: transparent;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.admin-sidebar__collapse-toggle[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 20px;\n}\n.admin-sidebar__collapse-toggle[_ngcontent-%COMP%]:hover {\n  color: var(--color-text);\n  border-color: var(--color-border-strong);\n}\n@media (max-width: 960px) {\n  .admin-sidebar__collapse-toggle[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__label[_ngcontent-%COMP%], \n.admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__name[_ngcontent-%COMP%], \n.admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__chevron[_ngcontent-%COMP%], \n.admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__submenu[_ngcontent-%COMP%] {\n  display: none;\n}\n.admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__link[_ngcontent-%COMP%], \n.admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__collapse-toggle[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.admin-main[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 260px;\n  min-width: 0;\n  transition: margin-left var(--transition-base);\n}\n.admin-layout--collapsed[_ngcontent-%COMP%]   .admin-main[_ngcontent-%COMP%] {\n  margin-left: 76px;\n}\n.admin-topbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 90;\n  height: 68px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding-inline: 24px;\n  background: rgba(15, 23, 42, 0.85);\n  backdrop-filter: blur(14px);\n  -webkit-backdrop-filter: blur(14px);\n  border-bottom: 1px solid var(--color-border);\n}\n.admin-topbar__spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.admin-topbar__icon-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--color-border-strong);\n  background: transparent;\n  color: var(--color-text);\n  cursor: pointer;\n}\n.admin-topbar__icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.admin-topbar__menu-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 960px) {\n  .admin-topbar__menu-btn[_ngcontent-%COMP%] {\n    display: inline-flex;\n  }\n}\n.admin-topbar__dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.admin-topbar__company-btn[_ngcontent-%COMP%], \n.admin-topbar__user-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  border-radius: var(--radius-full);\n  border: 1px solid var(--color-border-strong);\n  background: transparent;\n  color: var(--color-text);\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 500;\n  max-width: 240px;\n}\n.admin-topbar__company-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.admin-topbar__user-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--color-text-muted);\n}\n.admin-topbar__company-btn[_ngcontent-%COMP%]:hover, \n.admin-topbar__user-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.admin-topbar__company-name[_ngcontent-%COMP%], \n.admin-topbar__user-name[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n@media (max-width: 640px) {\n  .admin-topbar__company-name[_ngcontent-%COMP%], \n   .admin-topbar__user-name[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.admin-topbar__company-logo[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n  object-fit: cover;\n  flex-shrink: 0;\n}\n.admin-topbar__avatar[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: var(--gradient-accent);\n  color: #fff;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.admin-topbar__avatar--img[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\n.admin-topbar__menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  left: 0;\n  min-width: 240px;\n  background: var(--color-bg-card);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-lg);\n  padding: 8px;\n  z-index: 120;\n}\n.admin-topbar__menu--right[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n}\n.admin-topbar__menu-user[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 10px 12px;\n  border-bottom: 1px solid var(--color-border);\n  margin-bottom: 6px;\n}\n.admin-topbar__menu-user[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--color-text);\n  font-size: 0.9375rem;\n}\n.admin-topbar__menu-user[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--color-text-muted);\n}\n.admin-topbar__menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  width: 100%;\n  padding: 10px 12px;\n  border-radius: var(--radius-sm);\n  background: transparent;\n  border: none;\n  color: var(--color-gray);\n  font-size: 0.875rem;\n  text-align: left;\n  cursor: pointer;\n}\n.admin-topbar__menu-item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.admin-topbar__menu-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-text);\n}\n.admin-topbar__menu-item--active[_ngcontent-%COMP%] {\n  color: var(--color-accent-hover);\n}\n.admin-topbar__menu-item--danger[_ngcontent-%COMP%]:hover {\n  color: #f87171;\n}\n.admin-topbar__menu-item-role[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.admin-content[_ngcontent-%COMP%] {\n  padding: 28px 24px 48px;\n}\n.admin-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 105;\n}\n@media (max-width: 960px) {\n  .admin-sidebar[_ngcontent-%COMP%] {\n    transform: translateX(-100%);\n    width: 260px;\n  }\n  .admin-sidebar--open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar[_ngcontent-%COMP%] {\n    width: 260px;\n  }\n  .admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__label[_ngcontent-%COMP%], \n   .admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__name[_ngcontent-%COMP%] {\n    display: inline;\n  }\n  .admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__chevron[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .admin-layout--collapsed[_ngcontent-%COMP%]   .admin-sidebar__submenu[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .admin-main[_ngcontent-%COMP%], \n   .admin-layout--collapsed[_ngcontent-%COMP%]   .admin-main[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .admin-content[_ngcontent-%COMP%] {\n    padding: 20px 16px 40px;\n  }\n}\n/*# sourceMappingURL=admin-layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLayoutComponent, { className: "AdminLayoutComponent", filePath: "src\\app\\features\\admin\\layout\\admin-layout\\admin-layout.component.ts", lineNumber: 14 });
})();
export {
  AdminLayoutComponent
};
//# sourceMappingURL=chunk-XG5EXQ7X.js.map
