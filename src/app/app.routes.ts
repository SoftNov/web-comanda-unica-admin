import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { homeGuard } from './core/guards/home.guard';
import { platformAdminGuard } from './core/guards/platform-admin.guard';
import { profileGuard } from './core/guards/profile.guard';
import { profileOrPlatformAdminGuard } from './core/guards/profile-or-platform-admin.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/landing/pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Comanda Única — Comanda digital sem mensalidade para bares e restaurantes'
  },
  {
    path: 'entrar',
    loadComponent: () => import('./features/auth/pages/login/login.component').then((m) => m.LoginComponent),
    title: 'Entrar — Comanda Única'
  },
  {
    path: 'recuperar-senha',
    loadComponent: () =>
      import('./features/auth/pages/forgot-password/forgot-password.component').then((m) => m.ForgotPasswordComponent),
    title: 'Recuperar Senha — Comanda Única'
  },
  {
    path: 'criar-conta',
    loadComponent: () => import('./features/auth/pages/register/register.component').then((m) => m.RegisterComponent),
    title: 'Criar Conta — Comanda Única'
  },
  {
    path: 'ativar-conta/:token',
    loadComponent: () =>
      import('./features/auth/pages/activate-account/activate-account.component').then((m) => m.ActivateAccountComponent),
    title: 'Ativar Conta — Comanda Única'
  },
  {
    path: 'painel',
    canActivate: [authGuard],
    loadComponent: () => import('./features/admin/layout/admin-layout/admin-layout.component').then((m) => m.AdminLayoutComponent),
    children: [
      { path: '', pathMatch: 'full', canActivate: [homeGuard], children: [] },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/admin/pages/dashboard/dashboard.component').then((m) => m.DashboardComponent),
        title: 'Dashboard — Comanda Única'
      },
      {
        path: 'comandas',
        canActivate: [profileGuard(['OWNER', 'ADMIN', 'MANAGER', 'CASHIER', 'WAITER'])],
        loadComponent: () => import('./features/admin/pages/comandas/comandas.component').then((m) => m.ComandasComponent),
        title: 'Comandas — Comanda Única'
      },
      {
        path: 'mesas',
        canActivate: [profileGuard(['ADMIN', 'OWNER', 'MANAGER'])],
        loadComponent: () => import('./features/admin/pages/tables/tables.component').then((m) => m.TablesComponent),
        title: 'Mesas — Comanda Única'
      },
      {
        path: 'cardapio',
        canActivate: [profileGuard(['ADMIN', 'OWNER', 'MANAGER'])],
        loadComponent: () => import('./features/admin/pages/menu/menu.component').then((m) => m.MenuComponent),
        title: 'Cardápio — Comanda Única'
      },
      {
        path: 'pedidos',
        loadComponent: () => import('./features/admin/pages/pedidos/pedidos.component').then((m) => m.PedidosComponent),
        title: 'Pedidos — Comanda Única'
      },
      {
        path: 'reservas',
        canActivate: [profileGuard(['OWNER', 'ADMIN', 'MANAGER', 'WAITER'])],
        loadComponent: () => import('./features/admin/pages/reservas/reservas.component').then((m) => m.ReservasComponent),
        title: 'Reservas — Comanda Única'
      },
      {
        path: 'servicos',
        canActivate: [profileGuard(['OWNER', 'ADMIN', 'MANAGER', 'CASHIER', 'WAITER'])],
        loadComponent: () => import('./features/admin/pages/servicos/servicos.component').then((m) => m.ServicosComponent),
        title: 'Serviços — Comanda Única'
      },
      {
        path: 'financeiro',
        canActivate: [profileOrPlatformAdminGuard(['ADMIN', 'OWNER', 'MANAGER'])],
        loadComponent: () =>
          import('./features/admin/pages/extrato-financeiro/extrato-financeiro.component').then((m) => m.ExtratoFinanceiroComponent),
        title: 'Extrato Financeiro — Comanda Única'
      },
      {
        path: 'financeiro-plataforma',
        canActivate: [platformAdminGuard],
        loadComponent: () =>
          import('./features/admin/pages/financeiro-plataforma/financeiro-plataforma.component').then((m) => m.FinanceiroPlataformaComponent),
        title: 'Financeiro Comanda Única — Comanda Única'
      },
      {
        path: 'funcionarios',
        canActivate: [profileGuard(['ADMIN', 'OWNER', 'MANAGER'])],
        loadComponent: () => import('./features/admin/pages/employees/employees.component').then((m) => m.EmployeesComponent),
        title: 'Funcionários — Comanda Única'
      },
      {
        path: 'configuracoes',
        loadComponent: () => import('./features/admin/pages/placeholder/placeholder.component').then((m) => m.PlaceholderComponent),
        data: { title: 'Configurações' },
        title: 'Configurações — Comanda Única'
      },
      {
        path: 'configuracoes/perfil',
        loadComponent: () => import('./features/admin/pages/settings/profile/profile.component').then((m) => m.ProfileComponent),
        title: 'Meu Perfil — Comanda Única'
      },
      {
        path: 'configuracoes/redefinir-senha',
        loadComponent: () => import('./features/admin/pages/settings/security/security.component').then((m) => m.SecurityComponent),
        title: 'Redefinir Senha — Comanda Única'
      },
      {
        path: 'configuracoes/pagamentos',
        canActivate: [profileGuard(['OWNER', 'ADMIN'])],
        loadComponent: () =>
          import('./features/admin/pages/settings/stripe/owner/owner-stripe-page.component').then((m) => m.OwnerStripePageComponent),
        title: 'Pagamentos — Comanda Única'
      },
      {
        path: 'configuracoes/stripe-plataforma',
        canActivate: [platformAdminGuard],
        loadComponent: () =>
          import('./features/admin/pages/settings/stripe/admin/admin-stripe-config-page.component').then(
            (m) => m.AdminStripeConfigPageComponent
          ),
        title: 'Stripe da Plataforma — Comanda Única'
      },
      {
        path: 'configuracoes/mapa-salao',
        canActivate: [profileGuard(['ADMIN', 'OWNER', 'MANAGER'])],
        loadComponent: () =>
          import('./features/admin/pages/settings/floor-plan/floor-plan-list.component').then((m) => m.FloorPlanListComponent),
        title: 'Mapa do Salão — Comanda Única'
      },
      {
        path: 'configuracoes/mapa-salao/:id',
        canActivate: [profileGuard(['ADMIN', 'OWNER', 'MANAGER'])],
        loadComponent: () =>
          import('./features/admin/pages/settings/floor-plan/floor-plan-editor.component').then((m) => m.FloorPlanEditorComponent),
        title: 'Mapa do Salão — Comanda Única'
      },
      { path: '**', canActivate: [homeGuard], children: [] }
    ]
  },
  {
    path: 'termos-de-uso',
    loadComponent: () => import('./features/legal/pages/terms/terms.component').then((m) => m.TermsComponent),
    title: 'Termos de Uso — Comanda Única'
  },
  {
    path: 'politica-de-privacidade',
    loadComponent: () => import('./features/legal/pages/privacy/privacy.component').then((m) => m.PrivacyComponent),
    title: 'Política de Privacidade — Comanda Única'
  }
];
