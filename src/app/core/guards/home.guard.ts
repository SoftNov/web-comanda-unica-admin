import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../features/auth/services/auth.service';

// Perfis operacionais que atendem a fila de pedidos direto na cozinha/salão — a tela inicial
// deles é o kanban de pedidos, não o dashboard administrativo/financeiro.
const QUEUE_HOME_PROFILES = ['KITCHEN', 'WAITER'];

export function resolveHomeRoute(profileCode: string | null | undefined): string {
  return profileCode && QUEUE_HOME_PROFILES.includes(profileCode) ? '/painel/pedidos' : '/painel/dashboard';
}

// Resolve a rota inicial de "/painel" conforme o perfil do usuário na empresa selecionada — usado
// no lugar de um redirectTo estático porque o destino depende do profileCode (ver menu.config.ts).
export const homeGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const profileCode = authService.selectedCompany()?.profileCode ?? null;
  return router.createUrlTree([resolveHomeRoute(profileCode)]);
};
