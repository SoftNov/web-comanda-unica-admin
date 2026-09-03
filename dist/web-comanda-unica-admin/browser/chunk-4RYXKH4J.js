import {
  AuthService
} from "./chunk-ZTXRUAXT.js";
import {
  Router
} from "./chunk-BYNLKO4G.js";
import {
  inject
} from "./chunk-POVL776E.js";

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
//# sourceMappingURL=chunk-4RYXKH4J.js.map
