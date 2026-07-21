import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AccountsService } from '../../../shared/services/accounts.service';
import { CookieService } from '../../../shared/services/cookie.service';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface CompanyAccessResponse {
  companyId: string;
  companyName: string;
  profileCode: string;
  profileName: string;
  logoUrl?: string;
}

export interface LoginResponse {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
  expiresAt: string;
  userId: string;
  email: string;
  fullName: string;
  companies: CompanyAccessResponse[];
}

export interface ApiErrorResponse {
  titulo?: string;
  mensagem?: string;
  mensagemErro?: string;
  codigoErro?: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ForgotPasswordResponse {
  codeExpiresAt: string;
  message: string;
}

export interface VerifyResetCodeRequest {
  email: string;
  code: string;
}

export interface VerifyResetCodeResponse {
  resetToken: string;
  resetTokenExpiresAt: string;
  message: string;
}

export interface ResetPasswordRequest {
  email: string;
  resetToken: string;
  newPassword: string;
  confirmPassword: string;
}

export interface ResetPasswordResponse {
  resetAt: string;
  message: string;
}

interface SessionData {
  accessToken: string;
  tokenType: string;
  expiresAt: string;
  userId: string;
  email: string;
  fullName: string;
  avatarUrl?: string;
  companies: CompanyAccessResponse[];
  selectedCompanyId: string | null;
}

const SESSION_COOKIE = 'cu_session';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly cookies = inject(CookieService);
  private readonly accountsService = inject(AccountsService);
  private readonly router = inject(Router);

  private readonly session = signal<SessionData | null>(this.readSession());

  readonly isAuthenticated = computed(() => this.hasValidSession(this.session()));
  readonly currentUser = computed(() => {
    const session = this.session();
    return session
      ? { userId: session.userId, email: session.email, fullName: session.fullName, avatarUrl: session.avatarUrl ?? null }
      : null;
  });
  readonly companies = computed(() => this.session()?.companies ?? []);
  readonly selectedCompany = computed(() => {
    const session = this.session();
    if (!session) {
      return null;
    }
    return session.companies.find((company) => company.companyId === session.selectedCompanyId) ?? session.companies[0] ?? null;
  });

  login(payload: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.apiBaseUrl}/api/v1/auth/login`, payload).pipe(
      tap((response) => {
        const session: SessionData = {
          accessToken: response.accessToken,
          tokenType: response.tokenType,
          expiresAt: response.expiresAt,
          userId: response.userId,
          email: response.email,
          fullName: response.fullName,
          companies: response.companies,
          selectedCompanyId: response.companies[0]?.companyId ?? null
        };
        // Descarta qualquer sessão/cache remanescente de um usuário anterior antes de
        // gravar a nova, evitando que dados de outra conta vazem para esta sessão.
        this.cookies.delete(SESSION_COOKIE);
        this.accountsService.invalidateProfileCache();
        this.persistSession(session);
      })
    );
  }

  forgotPassword(payload: ForgotPasswordRequest): Observable<ForgotPasswordResponse> {
    return this.http.post<ForgotPasswordResponse>(`${environment.apiBaseUrl}/api/v1/auth/password/forgot`, payload);
  }

  verifyResetCode(payload: VerifyResetCodeRequest): Observable<VerifyResetCodeResponse> {
    return this.http.post<VerifyResetCodeResponse>(`${environment.apiBaseUrl}/api/v1/auth/password/verify-code`, payload);
  }

  resetPassword(payload: ResetPasswordRequest): Observable<ResetPasswordResponse> {
    return this.http.post<ResetPasswordResponse>(`${environment.apiBaseUrl}/api/v1/auth/password/reset`, payload);
  }

  logout(): void {
    this.cookies.delete(SESSION_COOKIE);
    this.accountsService.invalidateProfileCache();
    this.session.set(null);
    this.router.navigateByUrl('/entrar');
  }

  selectCompany(companyId: string): void {
    const session = this.session();
    if (!session) {
      return;
    }
    this.persistSession({ ...session, selectedCompanyId: companyId });
  }

  getAccessToken(): string | null {
    const session = this.session();
    return this.hasValidSession(session) ? session!.accessToken : null;
  }

  updateProfileName(fullName: string): void {
    const session = this.session();
    if (!session) {
      return;
    }
    this.persistSession({ ...session, fullName });
  }

  updateAvatarUrl(avatarUrl: string): void {
    const session = this.session();
    if (!session) {
      return;
    }
    this.persistSession({ ...session, avatarUrl });
  }

  updateCompanyLogoUrl(companyId: string, logoUrl: string): void {
    const session = this.session();
    if (!session) {
      return;
    }
    const companies = session.companies.map((company) => (company.companyId === companyId ? { ...company, logoUrl } : company));
    this.persistSession({ ...session, companies });
  }

  private persistSession(session: SessionData): void {
    const maxAgeSeconds = Math.max(1, Math.floor((new Date(session.expiresAt).getTime() - Date.now()) / 1000));
    this.cookies.set(SESSION_COOKIE, JSON.stringify(session), { maxAgeSeconds });
    this.session.set(session);
  }

  private readSession(): SessionData | null {
    const raw = this.cookies.get(SESSION_COOKIE);
    if (!raw) {
      return null;
    }
    try {
      const parsed = JSON.parse(raw) as SessionData;
      return this.hasValidSession(parsed) ? parsed : null;
    } catch {
      return null;
    }
  }

  private hasValidSession(session: SessionData | null): session is SessionData {
    return !!session && new Date(session.expiresAt).getTime() > Date.now();
  }
}
