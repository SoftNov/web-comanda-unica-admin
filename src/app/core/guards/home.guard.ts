import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../features/auth/services/auth.service';

// Todo perfil entra pelo dashboard — ele já se adapta por perfil (ver DashboardComponent):
// ADMIN/OWNER/MANAGER veem indicadores administrativos, WAITER/KITCHEN veem a fila de pedidos
// (e WAITER também os serviços gerais) embutidos na própria home, e o mapa do salão aparece pra
// todo mundo. Não existe mais um profileCode com destino próprio — manter o parâmetro só para não
// quebrar quem já chama resolveHomeRoute(profileCode) (ver AdminLayoutComponent#selectCompany).
export function resolveHomeRoute(_profileCode: string | null | undefined): string {
  return '/painel/dashboard';
}

// Resolve a rota inicial de "/painel" — usado no lugar de um redirectTo estático porque
// AdminLayoutComponent#selectCompany chama a mesma resolveHomeRoute ao trocar de empresa.
export const homeGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const profileCode = authService.selectedCompany()?.profileCode ?? null;
  return router.createUrlTree([resolveHomeRoute(profileCode)]);
};
