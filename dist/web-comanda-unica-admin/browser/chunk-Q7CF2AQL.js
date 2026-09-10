import {
  AuthService
} from "./chunk-RSSRSISP.js";
import {
  Router
} from "./chunk-XYGBHTKC.js";
import {
  inject
} from "./chunk-TY3XV2JK.js";

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
//# sourceMappingURL=chunk-Q7CF2AQL.js.map
