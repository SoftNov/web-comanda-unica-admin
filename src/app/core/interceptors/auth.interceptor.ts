import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../features/auth/services/auth.service';
import { SubscriptionService } from '../../shared/services/subscription.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const subscriptionService = inject(SubscriptionService);
  const router = inject(Router);

  // Mesmo JWT_SECRET nas duas APIs (ver StaffOrderService) — o token de funcionário emitido pelo
  // login do painel também é válido na api-comanda-unica-menu, então os mesmos headers valem
  // para as duas.
  const isApiRequest = req.url.startsWith(environment.apiBaseUrl) || req.url.startsWith(environment.menuApiBaseUrl);
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
      if (isAuthenticatedRequest && error instanceof HttpErrorResponse) {
        if (error.status === 401) {
          authService.logout();
        } else if (error.status === 402) {
          // Assinatura necessária (ver SubscriptionRequiredException no backend) — invalida o
          // cache e leva para a tela de assinatura. Não redireciona se a própria chamada de
          // assinatura falhou, para não entrar em laço.
          subscriptionService.clear();
          if (!request.url.includes('/api/v1/subscription')) {
            void router.navigateByUrl('/painel/assinatura');
          }
        }
      }
      return throwError(() => error);
    })
  );
};
