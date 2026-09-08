import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { AuthService } from '../../features/auth/services/auth.service';
import { SubscriptionService } from '../../shared/services/subscription.service';

// Rotas de /painel que um estabelecimento SEM assinatura ainda pode acessar — a própria tela de
// assinatura, e as de conta do usuário (perfil / troca de senha), que não dependem da empresa.
const ALLOWED_WITHOUT_SUBSCRIPTION = [
  '/painel/assinatura',
  '/painel/configuracoes',
  '/painel/configuracoes/perfil',
  '/painel/configuracoes/redefinir-senha'
];

// Espelha a regra do backend (@RequireActiveSubscription / SubscriptionAccessAspect): sem
// assinatura válida na empresa selecionada, manda para /painel/assinatura. O backend valida de
// novo — este guard é só UX (o acesso direto por URL ou API é barrado lá com 402).
export const subscriptionGuard: CanActivateChildFn = (_route, state) => {
  const auth = inject(AuthService);
  const subscriptionService = inject(SubscriptionService);
  const router = inject(Router);

  // A conta da própria Comanda Única nunca precisa de assinatura (espelha o
  // SubscriptionAccessAspect no backend).
  if (auth.isPlatformAdmin()) {
    return true;
  }

  const path = state.url.split('?')[0];
  if (ALLOWED_WITHOUT_SUBSCRIPTION.includes(path)) {
    return true;
  }

  const companyId = auth.selectedCompany()?.companyId;
  if (!companyId) {
    // Sem empresa selecionada — não há assinatura a exigir.
    return true;
  }

  return subscriptionService.ensureStatus(companyId).pipe(
    map((status) => (status.active ? true : router.createUrlTree(['/painel/assinatura']))),
    // Falha ao consultar não deve prender o usuário fora do sistema — o backend ainda barra o
    // que precisa ser barrado (402).
    catchError(() => of(true))
  );
};
