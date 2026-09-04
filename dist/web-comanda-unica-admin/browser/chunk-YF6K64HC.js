import {
  AuthService
} from "./chunk-2VOFBJJ2.js";
import {
  Router
} from "./chunk-EVJN5Z2J.js";
import {
  inject
} from "./chunk-74GQPZJ4.js";

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
//# sourceMappingURL=chunk-YF6K64HC.js.map
