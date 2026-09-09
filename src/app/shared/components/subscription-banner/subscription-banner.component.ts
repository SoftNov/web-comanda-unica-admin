import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../features/auth/services/auth.service';
import { SubscriptionService, SubscriptionStatusResponse } from '../../services/subscription.service';
import { parseApiDate } from '../../utils/datetime.util';

// Faixa no topo da home avisando que o estabelecimento precisa assinar / regularizar. Some quando
// a assinatura está ativa e não é cortesia. Só aparece para OWNER/ADMIN — quem pode contratar.
@Component({
  selector: 'app-subscription-banner',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (banner(); as b) {
      <div class="sub-banner" [class.sub-banner--warn]="b.tone === 'warn'">
        <span class="material-icons" aria-hidden="true">{{ b.icon }}</span>
        <span class="sub-banner__text">{{ b.text }}</span>
        <a class="sub-banner__cta" routerLink="/painel/assinatura">{{ b.cta }}</a>
      </div>
    }
  `,
  styles: [
    `
      .sub-banner {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 16px;
        margin-bottom: 20px;
        border-radius: var(--radius-sm);
        background: var(--color-accent-bg);
        border: 1px solid rgba(59, 130, 246, 0.28);
        color: var(--color-text);
        font-size: 0.9rem;
      }
      .sub-banner--warn {
        background: rgba(214, 164, 79, 0.14);
        border-color: rgba(214, 164, 79, 0.4);
      }
      .sub-banner .material-icons {
        font-size: 20px;
        color: var(--color-accent-hover);
        flex-shrink: 0;
      }
      .sub-banner--warn .material-icons {
        color: #d6a44f;
      }
      .sub-banner__text {
        flex: 1;
      }
      .sub-banner__cta {
        flex-shrink: 0;
        font-weight: 600;
        color: var(--color-accent-hover);
        text-decoration: none;
        white-space: nowrap;
      }
      .sub-banner__cta:hover {
        text-decoration: underline;
      }
    `
  ]
})
export class SubscriptionBannerComponent {
  private readonly subscriptionService = inject(SubscriptionService);
  private readonly authService = inject(AuthService);

  private readonly status = signal<SubscriptionStatusResponse | null>(null);

  private readonly canManage = computed(() => {
    const code = this.authService.selectedCompany()?.profileCode;
    return code === 'OWNER' || code === 'ADMIN';
  });

  readonly banner = computed<{ text: string; cta: string; icon: string; tone: 'info' | 'warn' } | null>(() => {
    if (!this.canManage()) {
      return null;
    }
    const s = this.status();
    if (!s) {
      return null;
    }
    if (s.courtesyTableLimitExceeded) {
      return {
        text: `O período grátis permite até ${s.courtesyTableLimit} mesas — você tem ${s.tableCount}. Assine para continuar.`,
        cta: 'Assinar',
        icon: 'block',
        tone: 'warn'
      };
    }
    if (s.status === 'PAST_DUE') {
      return {
        text: 'O pagamento da assinatura não foi concluído. Regularize para não perder o acesso.',
        cta: 'Regularizar',
        icon: 'warning_amber',
        tone: 'warn'
      };
    }
    if (s.courtesy) {
      const end = parseApiDate(s.currentPeriodEnd);
      const days = end ? Math.max(0, Math.ceil((end.getTime() - Date.now()) / 86_400_000)) : null;
      return {
        text: days != null
          ? `Você está no período de cortesia — faltam ${days} dia(s). Assine para continuar usando a Comanda Única.`
          : 'Você está no período de cortesia. Assine para continuar usando a Comanda Única.',
        cta: 'Assinar',
        icon: 'schedule',
        tone: 'warn'
      };
    }
    if (!s.active) {
      return {
        text: 'Ative sua assinatura da Comanda Única para usar todos os recursos do painel.',
        cta: 'Assinar agora',
        icon: 'card_membership',
        tone: 'info'
      };
    }
    if (s.planOutdated) {
      return {
        text: 'Você mudou de faixa de mesas — o valor da assinatura está desatualizado.',
        cta: 'Atualizar plano',
        icon: 'upgrade',
        tone: 'info'
      };
    }
    return null;
  });

  constructor() {
    const companyId = this.authService.selectedCompany()?.companyId;
    if (companyId && this.canManage()) {
      this.subscriptionService.ensureStatus(companyId).subscribe({
        next: (s) => this.status.set(s),
        error: () => this.status.set(null)
      });
    }
  }
}
