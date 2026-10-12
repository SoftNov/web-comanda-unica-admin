import {
  AuthService
} from "./chunk-2L6ZAABE.js";
import {
  Router
} from "./chunk-LRYCMRYX.js";
import {
  inject
} from "./chunk-PLJAEWUA.js";

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
//# sourceMappingURL=chunk-FBBDCLYT.js.map
