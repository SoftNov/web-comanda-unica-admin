import {
  AuthService
} from "./chunk-6ERKNQ3W.js";
import {
  Router
} from "./chunk-GPCUXOSL.js";
import {
  inject
} from "./chunk-QBSIROZR.js";

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
//# sourceMappingURL=chunk-SGRS33KK.js.map
