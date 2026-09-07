import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import { AuthService } from '../../../auth/services/auth.service';
import { SubscriptionService, SubscriptionStatusResponse } from '../../../../shared/services/subscription.service';
import { parseApiDate } from '../../../../shared/utils/datetime.util';

type ViewMode = 'offer' | 'active' | 'past-due';

@Component({
  selector: 'app-admin-assinatura',
  standalone: true,
  imports: [RippleDirective],
  templateUrl: './assinatura.component.html',
  styleUrl: './assinatura.component.scss'
})
export class AssinaturaComponent {
  private readonly subscriptionService = inject(SubscriptionService);
  private readonly authService = inject(AuthService);

  private readonly currencyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  private readonly dateFormatter = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' });

  readonly isLoading = signal(true);
  readonly loadError = signal(false);
  // Funcionário sem perfil OWNER/ADMIN — não pode gerenciar a assinatura (o backend responde 403).
  readonly noPermission = signal(false);
  readonly isRedirecting = signal(false);
  readonly actionError = signal<string | null>(null);

  readonly status = signal<SubscriptionStatusResponse | null>(null);
  readonly companyName = computed(() => this.authService.selectedCompany()?.companyName ?? 'seu estabelecimento');

  readonly mode = computed<ViewMode>(() => {
    const s = this.status();
    if (!s || !s.exists) {
      return 'offer';
    }
    if (s.status === 'PAST_DUE') {
      return 'past-due';
    }
    if (s.status === 'ACTIVE' && !s.courtesy) {
      return 'active';
    }
    return 'offer';
  });

  readonly courtesyDaysLeft = computed(() => {
    const s = this.status();
    if (!s?.courtesy || !s.currentPeriodEnd) {
      return null;
    }
    const end = parseApiDate(s.currentPeriodEnd);
    if (!end) {
      return null;
    }
    return Math.max(0, Math.ceil((end.getTime() - Date.now()) / 86_400_000));
  });

  constructor() {
    this.load();
  }

  load(): void {
    const companyId = this.authService.selectedCompany()?.companyId;
    if (!companyId) {
      this.isLoading.set(false);
      this.loadError.set(true);
      return;
    }
    this.isLoading.set(true);
    this.loadError.set(false);
    this.noPermission.set(false);
    this.subscriptionService.refresh(companyId).subscribe({
      next: (status) => {
        this.status.set(status);
        this.isLoading.set(false);
      },
      error: (error: unknown) => {
        this.isLoading.set(false);
        if (error instanceof HttpErrorResponse && error.status === 403) {
          this.noPermission.set(true);
        } else {
          this.loadError.set(true);
        }
      }
    });
  }

  subscribe(): void {
    this.startRedirect(() => this.subscriptionService.createCheckoutSession());
  }

  manage(): void {
    this.startRedirect(() => this.subscriptionService.createPortalSession());
  }

  private startRedirect(request: () => ReturnType<SubscriptionService['createCheckoutSession']>): void {
    this.isRedirecting.set(true);
    this.actionError.set(null);
    request().subscribe({
      next: ({ url }) => {
        window.location.href = url;
      },
      error: () => {
        this.isRedirecting.set(false);
        this.actionError.set('Não foi possível abrir o pagamento agora. Tente novamente em instantes.');
      }
    });
  }

  planPriceLabel(): string {
    const s = this.status();
    const amount = s?.planAmount ?? s?.amount ?? null;
    return amount != null && amount > 0 ? this.currencyFormatter.format(amount) : '—';
  }

  amountLabel(value: number | null | undefined): string {
    return value != null ? this.currencyFormatter.format(value) : '—';
  }

  dateLabel(value: string | null | undefined): string {
    const parsed = parseApiDate(value ?? null);
    return parsed ? this.dateFormatter.format(parsed) : '—';
  }

  statusLabel(): string {
    switch (this.status()?.status) {
      case 'ACTIVE':
        return this.status()?.courtesy ? 'Cortesia' : 'Ativa';
      case 'PAST_DUE':
        return 'Pagamento pendente';
      case 'PENDING':
        return 'Aguardando pagamento';
      case 'EXPIRED':
        return 'Expirada';
      case 'CANCELLED':
        return 'Cancelada';
      default:
        return 'Sem assinatura';
    }
  }
}
