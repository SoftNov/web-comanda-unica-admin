import { Component } from '@angular/core';

// Conteúdo estático (explicação do fluxo + exemplo de taxa) — os valores do exemplo são
// ilustrativos; a taxa real é configurada pelo administrador da plataforma (ver
// PlatformFeeRule/"Financeiro — Comanda Única"), não por este componente.
@Component({
  selector: 'app-owner-stripe-how-it-works',
  standalone: true,
  templateUrl: './owner-stripe-how-it-works.component.html',
  styleUrl: './owner-stripe-how-it-works.component.scss'
})
export class OwnerStripeHowItWorksComponent {}
