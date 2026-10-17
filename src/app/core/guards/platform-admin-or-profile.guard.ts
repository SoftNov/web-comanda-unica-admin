import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../features/auth/services/auth.service';

// Telas fora do modelo de empresas (como platformAdminGuard) que também liberam quem tem um dos
// perfis em QUALQUER empresa do usuário, não só na selecionada — espelha
// @RequirePlatformAdmin(allowProfiles) no backend. Usado pelas Campanhas (perfil COMMERCIAL).
export function platformAdminOrProfileGuard(allowedProfileCodes: string[]): CanActivateFn {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.isPlatformAdmin() || authService.hasProfileInAnyCompany(allowedProfileCodes)) {
      return true;
    }

    return router.createUrlTree(['/painel/dashboard']);
  };
}
