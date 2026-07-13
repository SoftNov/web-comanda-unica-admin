import { Routes } from '@angular/router';

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
    path: 'criar-conta',
    loadComponent: () => import('./features/auth/pages/register/register.component').then((m) => m.RegisterComponent),
    title: 'Criar Conta — Comanda Única'
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
