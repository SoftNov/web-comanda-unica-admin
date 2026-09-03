import {
  AuthService
} from "./chunk-3T2GPGTO.js";
import {
  Router
} from "./chunk-IY35YGHZ.js";
import {
  inject
} from "./chunk-XAWTBWXY.js";

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
//# sourceMappingURL=chunk-55VCVX44.js.map
