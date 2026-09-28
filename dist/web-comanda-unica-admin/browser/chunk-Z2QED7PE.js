import {
  AuthService
} from "./chunk-S5GGO54V.js";
import {
  Router
} from "./chunk-4G2LF4K6.js";
import {
  inject
} from "./chunk-SZBF2MTG.js";

// src/app/core/guards/home.guard.ts
function resolveHomeRoute(_profileCode) {
  return "/painel/dashboard";
}
var homeGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const profileCode = authService.selectedCompany()?.profileCode ?? null;
  return router.createUrlTree([resolveHomeRoute(profileCode)]);
};

export {
  resolveHomeRoute,
  homeGuard
};
//# sourceMappingURL=chunk-Z2QED7PE.js.map
