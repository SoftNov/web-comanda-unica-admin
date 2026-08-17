import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../features/auth/services/auth.service';

// Diferente de profileGuard (perfil dentro da empresa selecionada), este checa um flag do
// usuário independente de qualquer empresa — ver AuthService.isPlatformAdmin/User.isPlatformAdmin
// no backend. Usado só pela rota do painel financeiro da Comanda Única.
export const platformAdminGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isPlatformAdmin()) {
    return true;
  }

  return router.createUrlTree(['/painel/dashboard']);
};