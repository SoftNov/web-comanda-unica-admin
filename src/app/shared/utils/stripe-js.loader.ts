// Carrega o Stripe.js v3 sob demanda (só na tela que digita cartão), uma vez por sessão. O
// Stripe.js precisa vir de js.stripe.com — não pode ser empacotado — para o campo de cartão ser um
// iframe do próprio Stripe: o número do cartão nunca passa pelo nosso código (PCI SAQ A).
declare global {
  interface Window {
    Stripe?: (publishableKey: string, options?: { locale?: string }) => any;
  }
}

const STRIPE_JS_URL = 'https://js.stripe.com/v3/';

let loading: Promise<NonNullable<Window['Stripe']>> | null = null;

export function loadStripeJs(): Promise<NonNullable<Window['Stripe']>> {
  if (window.Stripe) {
    return Promise.resolve(window.Stripe);
  }
  if (!loading) {
    loading = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = STRIPE_JS_URL;
      script.async = true;
      script.onload = () => (window.Stripe ? resolve(window.Stripe) : reject(new Error('Stripe.js indisponível')));
      script.onerror = () => {
        loading = null;
        script.remove();
        reject(new Error('Falha ao carregar o Stripe.js'));
      };
      document.head.appendChild(script);
    });
  }
  return loading;
}

// Mensagem para a tela a partir do erro devolvido pelo Stripe.js (confirmCardSetup /
// confirmCardPayment). Só erros do CARTÃO (recusa, CVV, saldo — type 'card_error' ou
// 'validation_error') são do cliente e vêm traduzidos com locale pt-BR. Os outros tipos são
// problemas da conta/integração do Stripe (ex.: "Your account cannot currently make live charges"
// quando a conta da plataforma não está ativada para cobranças reais) — vêm em inglês, falam com o
// dono do site e não ajudam quem está pagando, então viram uma mensagem genérica.
export function stripeErrorMessage(error: { type?: string; message?: string } | null | undefined, fallback: string): string {
  if (error?.message && (error.type === 'card_error' || error.type === 'validation_error')) {
    return error.message;
  }
  if (error) {
    console.error('[Stripe] Erro não relacionado ao cartão:', error);
  }
  return fallback;
}
