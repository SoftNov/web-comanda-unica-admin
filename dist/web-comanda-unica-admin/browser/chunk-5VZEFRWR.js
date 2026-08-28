import {
  AuthService
} from "./chunk-JI3XUBKU.js";
import {
  Router
} from "./chunk-PB4HRHCY.js";
import {
  inject
} from "./chunk-MHTOAZDV.js";

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
//# sourceMappingURL=chunk-5VZEFRWR.js.map
