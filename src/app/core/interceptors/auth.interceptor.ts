import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../features/auth/services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  const isApiRequest = req.url.startsWith(environment.apiBaseUrl);
  const token = authService.getAccessToken();
  const isAuthenticatedRequest = isApiRequest && !!token;

  let request = req;
  if (isAuthenticatedRequest) {
    request = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });

    const userId = authService.currentUser()?.userId;
    if (userId) {
      request = request.clone({ setHeaders: { 'X-User-Id': userId } });
    }

    const companyId = authService.selectedCompany()?.companyId;
    if (companyId) {
      request = request.clone({ setHeaders: { 'X-Company-Id': companyId } });
    }
  }

  return next(request).pipe(
    catchError((error: unknown) => {
      if (isAuthenticatedRequest && error instanceof HttpErrorResponse && error.status === 401) {
        authService.logout();
      }
      return throwError(() => error);
    })
  );
};
