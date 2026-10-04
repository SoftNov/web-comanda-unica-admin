import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { AuthService } from '../../features/auth/services/auth.service';
import { PaymentSettingsService } from '../../shared/services/payment-settings.service';

// Telas que só fazem sentido com pagamento online ativo (ex.: Extrato Financeiro, que lê a conta
// Stripe). O platform admin passa sempre — ele consulta a conta da plataforma e de qualquer empresa.
export const onlinePaymentsGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const paymentSettingsService = inject(PaymentSettingsService);
  const router = inject(Router);

  if (authService.isPlatformAdmin()) {
    return true;
  }

  return paymentSettingsService.getSettings().pipe(
    map((settings) => settings.onlinePaymentsEnabled || router.createUrlTree(['/painel/dashboard'])),
    catchError(() => of(true))
  );
};
