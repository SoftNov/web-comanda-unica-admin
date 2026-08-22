import { Component } from '@angular/core';

// Checklist estático — reflete garantias já implementadas no backend (ver
// StripeProperties, PlatformStripeConfigServiceImpl, StripeWebhookServiceImpl), não configurações
// editáveis aqui.
@Component({
  selector: 'app-admin-stripe-security-card',
  standalone: true,
  templateUrl: './admin-stripe-security-card.component.html',
  styleUrl: './admin-stripe-security-card.component.scss'
})
export class AdminStripeSecurityCardComponent {
  readonly checklist = [
    'Secret Key configurada como variável de ambiente no servidor — nunca no banco de dados',
    'Secret Key e Webhook Secret nunca são retornados em texto puro para o navegador',
    'Assinatura de todo evento de webhook é validada antes de qualquer processamento',
    'Pagamento só é considerado confirmado após evento assinado recebido pelo backend',
    'Proprietários de empresas não têm acesso às credenciais da plataforma'
  ];
}
