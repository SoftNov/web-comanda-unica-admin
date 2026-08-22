import { WritableSignal } from '@angular/core';

export const AUTO_DISMISS_MS = 3000;

// Limpa um signal de mensagem de confirmação/erro de ação (".form-alert--success"/"--error")
// sozinho depois de 3s, em vez de ficar preso na tela até a próxima ação do usuário. Uso: logo
// após o .set(valor) que faz o banner aparecer, chame autoDismiss(signal, valorDeLimpeza).
//
// NÃO usar em signals de erro de carregamento inicial de página/lista (ex: "Não foi possível
// carregar..." exibido no lugar do conteúdo principal) — esses precisam continuar visíveis até
// o usuário tentar de novo, senão a tela fica em branco sem explicação.
export function autoDismiss<T>(messageSignal: WritableSignal<T>, clearValue: T, ms: number = AUTO_DISMISS_MS): void {
  setTimeout(() => messageSignal.set(clearValue), ms);
}
