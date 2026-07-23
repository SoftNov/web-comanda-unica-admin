import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { profileGuard } from './core/guards/profile.guard';

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
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/admin/pages/dashboard/dashboard.component').then((m) => m.DashboardComponent),
        title: 'Dashboard — Comanda Única'
      },
      {
        path: 'comandas',
        loadComponent: () => import('./features/admin/pages/placeholder/placeholder.component').then((m) => m.PlaceholderComponent),
        data: { title: 'Comandas' },
        title: 'Comandas — Comanda Única'
      },
      {
        path: 'mesas',
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
        loadComponent: () => import('./features/admin/pages/placeholder/placeholder.component').then((m) => m.PlaceholderComponent),
        data: { title: 'Pedidos' },
        title: 'Pedidos — Comanda Única'
      },
      {
        path: 'financeiro',
        loadComponent: () => import('./features/admin/pages/placeholder/placeholder.component').then((m) => m.PlaceholderComponent),
        data: { title: 'Financeiro' },
        title: 'Financeiro — Comanda Única'
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
      { path: '**', redirectTo: 'dashboard' }
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
