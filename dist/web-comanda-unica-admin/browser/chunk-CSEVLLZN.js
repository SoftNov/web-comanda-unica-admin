import {
  AuthService
} from "./chunk-GDZY7PI7.js";
import {
  Router
} from "./chunk-JC7LZX74.js";
import {
  inject
} from "./chunk-MRKXMG4P.js";

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
//# sourceMappingURL=chunk-CSEVLLZN.js.map
