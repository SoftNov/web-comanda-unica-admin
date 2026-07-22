import {
  AccountsService,
  environment
} from "./chunk-MZ4AGMPU.js";
import {
  HttpClient,
  Router,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-4IFGYJZR.js";

// src/app/shared/services/cookie.service.ts
var CookieService = class _CookieService {
  set(name, value, options = {}) {
    const { maxAgeSeconds, path = "/", sameSite = "Strict", secure = location.protocol === "https:" } = options;
    let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; path=${path}; SameSite=${sameSite}`;
    if (maxAgeSeconds !== void 0) {
      cookie += `; max-age=${maxAgeSeconds}`;
    }
    if (secure) {
      cookie += "; Secure";
    }
    document.cookie = cookie;
  }
  get(name) {
    const target = `${encodeURIComponent(name)}=`;
    const cookies = document.cookie.split(";");
    for (const raw of cookies) {
      const cookie = raw.trim();
      if (cookie.startsWith(target)) {
        return decodeURIComponent(cookie.substring(target.length));
      }
    }
    return null;
  }
  delete(name, path = "/") {
    document.cookie = `${encodeURIComponent(name)}=; path=${path}; max-age=0; SameSite=Strict`;
  }
  static \u0275fac = function CookieService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CookieService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CookieService, factory: _CookieService.\u0275fac, providedIn: "root" });
};

// src/app/features/auth/services/auth.service.ts
var SESSION_COOKIE = "cu_session";
var AuthService = class _AuthService {
  http = inject(HttpClient);
  cookies = inject(CookieService);
  accountsService = inject(AccountsService);
  router = inject(Router);
  session = signal(this.readSession());
  isAuthenticated = computed(() => this.hasValidSession(this.session()));
  currentUser = computed(() => {
    const session = this.session();
    return session ? { userId: session.userId, email: session.email, fullName: session.fullName, avatarUrl: session.avatarUrl ?? null } : null;
  });
  companies = computed(() => this.session()?.companies ?? []);
  selectedCompany = computed(() => {
    const session = this.session();
    if (!session) {
      return null;
    }
    return session.companies.find((company) => company.companyId === session.selectedCompanyId) ?? session.companies[0] ?? null;
  });
  login(payload) {
    return this.http.post(`${environment.apiBaseUrl}/api/v1/auth/login`, payload).pipe(tap((response) => {
      const session = {
        accessToken: response.accessToken,
        tokenType: response.tokenType,
        expiresAt: response.expiresAt,
        userId: response.userId,
        email: response.email,
        fullName: response.fullName,
        companies: response.companies,
        selectedCompanyId: response.companies[0]?.companyId ?? null
      };
      this.cookies.delete(SESSION_COOKIE);
      this.accountsService.invalidateProfileCache();
      this.persistSession(session);
    }));
  }
  forgotPassword(payload) {
    return this.http.post(`${environment.apiBaseUrl}/api/v1/auth/password/forgot`, payload);
  }
  verifyResetCode(payload) {
    return this.http.post(`${environment.apiBaseUrl}/api/v1/auth/password/verify-code`, payload);
  }
  resetPassword(payload) {
    return this.http.post(`${environment.apiBaseUrl}/api/v1/auth/password/reset`, payload);
  }
  logout() {
    this.cookies.delete(SESSION_COOKIE);
    this.accountsService.invalidateProfileCache();
    this.session.set(null);
    this.router.navigateByUrl("/entrar");
  }
  selectCompany(companyId) {
    const session = this.session();
    if (!session) {
      return;
    }
    this.persistSession(__spreadProps(__spreadValues({}, session), { selectedCompanyId: companyId }));
  }
  getAccessToken() {
    const session = this.session();
    return this.hasValidSession(session) ? session.accessToken : null;
  }
  updateProfileName(fullName) {
    const session = this.session();
    if (!session) {
      return;
    }
    this.persistSession(__spreadProps(__spreadValues({}, session), { fullName }));
  }
  updateAvatarUrl(avatarUrl) {
    const session = this.session();
    if (!session) {
      return;
    }
    this.persistSession(__spreadProps(__spreadValues({}, session), { avatarUrl }));
  }
  updateCompanyLogoUrl(companyId, logoUrl) {
    const session = this.session();
    if (!session) {
      return;
    }
    const companies = session.companies.map((company) => company.companyId === companyId ? __spreadProps(__spreadValues({}, company), { logoUrl }) : company);
    this.persistSession(__spreadProps(__spreadValues({}, session), { companies }));
  }
  persistSession(session) {
    const maxAgeSeconds = Math.max(1, Math.floor((new Date(session.expiresAt).getTime() - Date.now()) / 1e3));
    this.cookies.set(SESSION_COOKIE, JSON.stringify(session), { maxAgeSeconds });
    this.session.set(session);
  }
  readSession() {
    const raw = this.cookies.get(SESSION_COOKIE);
    if (!raw) {
      return null;
    }
    try {
      const parsed = JSON.parse(raw);
      return this.hasValidSession(parsed) ? parsed : null;
    } catch {
      return null;
    }
  }
  hasValidSession(session) {
    return !!session && new Date(session.expiresAt).getTime() > Date.now();
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};

export {
  AuthService
};
//# sourceMappingURL=chunk-TA4FF7VW.js.map
