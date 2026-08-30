import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../features/auth/services/auth.service';

// Combina profileGuard (perfil na empresa selecionada) com platformAdminGuard (flag independente
// de empresa) — usado por telas como o Extrato Financeiro, onde tanto um ADMIN/OWNER/MANAGER da
// própria empresa quanto um platform admin (que pode não ter company_user nenhum) precisam entrar.
export function profileOrPlatformAdminGuard(allowedProfileCodes: string[]): CanActivateFn {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.isPlatformAdmin()) {
      return true;
    }

    const profileCode = authService.selectedCompany()?.profileCode;
    if (profileCode && allowedProfileCodes.includes(profileCode)) {
      return true;
    }

    return router.createUrlTree(['/painel/dashboard']);
  };
}
