import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// Só um link-out — a configuração de taxa da plataforma (regra padrão + customização por
// empresa) já existe em /painel/financeiro-plataforma (ver FinanceiroPlataformaComponent). Esta
// tela de Stripe não duplica esse CRUD, só aponta pra ele.
@Component({
  selector: 'app-admin-stripe-fee-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-stripe-fee-card.component.html',
  styleUrl: './admin-stripe-fee-card.component.scss'
})
export class AdminStripeFeeCardComponent {}
