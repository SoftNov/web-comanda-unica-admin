import { Component, Input, computed, signal } from '@angular/core';

export type CardBrandKey = 'visa' | 'mastercard' | 'amex' | 'elo' | 'hipercard' | 'diners' | 'discover' | 'jcb';

export const CARD_BRAND_LABELS: Record<CardBrandKey, string> = {
  visa: 'Visa',
  mastercard: 'Mastercard',
  amex: 'American Express',
  elo: 'Elo',
  hipercard: 'Hipercard',
  diners: 'Diners Club',
  discover: 'Discover',
  jcb: 'JCB'
};

// Normaliza a bandeira vinda da Asaas (VISA, MASTERCARD, AMEX, "DINERS CLUB"...) ou da detecção
// local para uma chave conhecida; null quando não reconhece.
export function normalizeCardBrand(brand: string | null | undefined): CardBrandKey | null {
  const key = (brand ?? '').toLowerCase().replace(/[^a-z]/g, '');
  if (!key) return null;
  if (key.startsWith('visa')) return 'visa';
  if (key.startsWith('master')) return 'mastercard';
  if (key === 'amex' || key.startsWith('americanexpress')) return 'amex';
  if (key === 'elo') return 'elo';
  if (key.startsWith('hiper')) return 'hipercard';
  if (key.startsWith('diners')) return 'diners';
  if (key === 'discover') return 'discover';
  if (key === 'jcb') return 'jcb';
  return null;
}

// Logo simplificado da bandeira do cartão (SVG inline, sem dependência externa). Sem bandeira
// reconhecida, mostra um cartão genérico.
@Component({
  selector: 'app-card-brand-logo',
  standalone: true,
  template: `
    <svg viewBox="0 0 40 26" [attr.width]="width" [attr.height]="width * 0.65" role="img"
         [attr.aria-label]="label()">
      @switch (key()) {
        @case ('visa') {
          <rect width="40" height="26" rx="4" fill="#fff" />
          <text x="20" y="17.5" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="11"
                font-weight="900" font-style="italic" fill="#1A1F71" letter-spacing="0.3">VISA</text>
          <rect x="6" y="20" width="28" height="1.6" fill="#F7B600" />
        }
        @case ('mastercard') {
          <rect width="40" height="26" rx="4" fill="#1b1b1b" />
          <circle cx="16" cy="13" r="7.5" fill="#EB001B" />
          <circle cx="24" cy="13" r="7.5" fill="#F79E1B" />
          <path d="M20 6.66a7.5 7.5 0 0 1 0 12.68a7.5 7.5 0 0 1 0-12.68z" fill="#FF5F00" />
        }
        @case ('amex') {
          <rect width="40" height="26" rx="4" fill="#2E77BC" />
          <text x="20" y="16.5" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="8.5"
                font-weight="900" fill="#fff" letter-spacing="0.4">AMEX</text>
        }
        @case ('elo') {
          <rect width="40" height="26" rx="4" fill="#000" />
          <circle cx="9" cy="9" r="2" fill="#FFCB05" />
          <circle cx="9" cy="13.5" r="2" fill="#00A4E0" />
          <circle cx="9" cy="18" r="2" fill="#EF4123" />
          <text x="24" y="17.5" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="12"
                font-weight="700" fill="#fff">elo</text>
        }
        @case ('hipercard') {
          <rect width="40" height="26" rx="4" fill="#B3131B" />
          <text x="20" y="16" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="6.6"
                font-weight="800" font-style="italic" fill="#fff">Hipercard</text>
        }
        @case ('diners') {
          <rect width="40" height="26" rx="4" fill="#fff" />
          <circle cx="20" cy="13" r="8" fill="#0079BE" />
          <circle cx="17.2" cy="13" r="4.4" fill="none" stroke="#fff" stroke-width="1.4" />
          <circle cx="22.8" cy="13" r="4.4" fill="none" stroke="#fff" stroke-width="1.4" />
        }
        @case ('discover') {
          <rect width="40" height="26" rx="4" fill="#fff" />
          <circle cx="24" cy="13" r="4" fill="#F48120" />
          <text x="20" y="21.5" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="5"
                font-weight="800" fill="#231F20">DISCOVER</text>
        }
        @case ('jcb') {
          <rect width="40" height="26" rx="4" fill="#fff" />
          <rect x="7" y="6" width="8" height="14" rx="2" fill="#0E4C96" />
          <rect x="16" y="6" width="8" height="14" rx="2" fill="#E21836" />
          <rect x="25" y="6" width="8" height="14" rx="2" fill="#007B40" />
          <text x="20" y="15.6" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="6"
                font-weight="900" fill="#fff">JCB</text>
        }
        @default {
          <rect x="0.5" y="0.5" width="39" height="25" rx="3.5" fill="rgba(255,255,255,0.06)"
                stroke="rgba(203,213,225,0.35)" />
          <rect x="0.5" y="6" width="39" height="4" fill="rgba(203,213,225,0.35)" />
          <rect x="5" y="15" width="12" height="2.4" rx="1" fill="rgba(203,213,225,0.45)" />
        }
      }
    </svg>
  `,
  styles: `
    :host { display: inline-flex; line-height: 0; flex-shrink: 0; }
    svg { display: block; border-radius: 4px; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); }
  `
})
export class CardBrandLogoComponent {
  private readonly brandValue = signal<string | null>(null);

  @Input() set brand(value: string | null | undefined) {
    this.brandValue.set(value ?? null);
  }

  // Largura em px; a altura segue a proporção de cartão (40x26).
  @Input() width = 40;

  readonly key = computed(() => normalizeCardBrand(this.brandValue()));
  readonly label = computed(() => {
    const key = this.key();
    return key ? CARD_BRAND_LABELS[key] : 'Cartão';
  });
}
