import {
  HttpClient,
  inject,
  shareReplay,
  tap,
  ɵɵdefineInjectable
} from "./chunk-4IFGYJZR.js";

// src/environments/environment.ts
var environment = {
  production: false,
  // Relative path: proxied to http://localhost:8080 by proxy.conf.json (ng serve) to avoid CORS in dev.
  apiBaseUrl: "/comanda-unica-api"
};

// src/app/shared/services/accounts.service.ts
var AccountsService = class _AccountsService {
  http = inject(HttpClient);
  profileCache$ = null;
  createAccount(payload) {
    return this.http.post(`${environment.apiBaseUrl}/api/v1/accounts`, payload);
  }
  activateAccount(token) {
    return this.http.get(`${environment.apiBaseUrl}/api/v1/accounts/activate/${encodeURIComponent(token)}`);
  }
  // Shared across simultaneous callers (e.g. the admin shell and the profile page both
  // fetch this on load) so a single page load triggers one HTTP call, not one per caller.
  getProfile() {
    if (!this.profileCache$) {
      this.profileCache$ = this.http.get(`${environment.apiBaseUrl}/api/v1/accounts/me`).pipe(shareReplay({ bufferSize: 1, refCount: false }));
    }
    return this.profileCache$;
  }
  invalidateProfileCache() {
    this.profileCache$ = null;
  }
  updateProfile(payload) {
    return this.http.put(`${environment.apiBaseUrl}/api/v1/accounts/update/me`, payload).pipe(tap(() => this.invalidateProfileCache()));
  }
  uploadAvatar(file) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(`${environment.apiBaseUrl}/api/v1/accounts/me/avatar`, formData).pipe(tap(() => this.invalidateProfileCache()));
  }
  uploadLogo(file) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(`${environment.apiBaseUrl}/api/v1/accounts/me/logo`, formData).pipe(tap(() => this.invalidateProfileCache()));
  }
  static \u0275fac = function AccountsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AccountsService, factory: _AccountsService.\u0275fac, providedIn: "root" });
};

export {
  environment,
  AccountsService
};
//# sourceMappingURL=chunk-MZ4AGMPU.js.map
