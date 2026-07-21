import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../features/auth/services/auth.service';

export function profileGuard(allowedProfileCodes: string[]): CanActivateFn {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    const profileCode = authService.selectedCompany()?.profileCode;
    if (profileCode && allowedProfileCodes.includes(profileCode)) {
      return true;
    }

    return router.createUrlTree(['/painel/dashboard']);
  };
}
