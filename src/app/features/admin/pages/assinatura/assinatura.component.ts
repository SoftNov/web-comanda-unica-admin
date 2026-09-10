import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import { AuthService } from '../../../auth/services/auth.service';
import {
  CreditMovement,
  CreditMovementType,
  SubscriptionService,
  SubscriptionStatusResponse
} from '../../../../shared/services/subscription.service';
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
  readonly isChangingPlan = signal(false);
  readonly changePlanMessage = signal<{ type: 'ok' | 'error'; text: string } | null>(null);
  // Faixa (upToTables) aguardando confirmação no seletor de plano; null = nenhuma.
  readonly pendingPlan = signal<number | null>(null);

  readonly status = signal<SubscriptionStatusResponse | null>(null);
  readonly companyName = computed(() => this.authService.selectedCompany()?.companyName ?? 'seu estabelecimento');

  readonly creditMovements = signal<CreditMovement[]>([]);
  readonly isLoadingMovements = signal(false);
  readonly movementsLoadError = signal(false);

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
        if (status.credit) {
          this.loadMovements();
        }
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

  loadMovements(): void {
    this.isLoadingMovements.set(true);
    this.movementsLoadError.set(false);
    this.subscriptionService.getCreditMovements(0, 20).subscribe({
      next: (page) => {
        this.creditMovements.set(page.content);
        this.isLoadingMovements.set(false);
      },
      error: () => {
        this.isLoadingMovements.set(false);
        this.movementsLoadError.set(true);
      }
    });
  }

  private static readonly MOVEMENT_LABELS: Record<CreditMovementType, string> = {
    SUBSCRIPTION_CREDIT: 'Crédito concedido',
    FEE_CREDIT_CONSUMPTION: 'Crédito usado em taxa',
    FEE_CREDIT_CONSUMPTION_REVERSAL: 'Crédito devolvido',
    CREDIT_EXPIRATION: 'Crédito expirado'
  };

  movementLabel(type: CreditMovementType): string {
    return AssinaturaComponent.MOVEMENT_LABELS[type] ?? type;
  }

  // + quando entra crédito (concessão / devolução), − quando sai (consumo / expiração).
  movementSign(type: CreditMovementType): string {
    return type === 'SUBSCRIPTION_CREDIT' || type === 'FEE_CREDIT_CONSUMPTION_REVERSAL' ? '+' : '−';
  }

  // Botão "Atualizar plano" do banner planOutdated — sincroniza ao valor da faixa das mesas atuais.
  changePlan(): void {
    this.applyPlanChange(undefined);
  }

  // Seletor de plano: pede confirmação antes de trocar (a proração é cobrada).
  requestPlanChange(upToTables: number): void {
    this.changePlanMessage.set(null);
    this.pendingPlan.set(upToTables);
  }

  cancelPlanChange(): void {
    this.pendingPlan.set(null);
  }

  confirmPlanChange(): void {
    const target = this.pendingPlan();
    if (target != null) {
      this.applyPlanChange(target);
    }
  }

  private applyPlanChange(upToTables: number | undefined): void {
    this.isChangingPlan.set(true);
    this.changePlanMessage.set(null);
    this.subscriptionService.changePlan(upToTables).subscribe({
      next: (status) => {
        this.status.set(status);
        this.isChangingPlan.set(false);
        this.pendingPlan.set(null);
        this.changePlanMessage.set({ type: 'ok', text: 'Plano atualizado. A diferença entra na próxima fatura.' });
      },
      error: (error: unknown) => {
        this.isChangingPlan.set(false);
        this.pendingPlan.set(null);
        const body = error instanceof HttpErrorResponse ? (error.error as { mensagem?: string } | undefined) : undefined;
        const msg = body?.mensagem
          ?? (error instanceof HttpErrorResponse && error.status === 422
            ? 'O plano já corresponde à quantidade de mesas atual.'
            : 'Não foi possível atualizar o plano agora. Tente novamente em instantes.');
        this.changePlanMessage.set({ type: 'error', text: msg });
      }
    });
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

  planMonthlyLabel(): string {
    const s = this.status();
    const amount = s?.planMonthlyAmount ?? s?.monthlyAmount ?? null;
    return amount != null && amount > 0 ? this.currencyFormatter.format(amount) : '—';
  }

  planAnnualLabel(): string {
    const s = this.status();
    const amount = s?.planAmount ?? s?.amount ?? null;
    return amount != null && amount > 0 ? this.currencyFormatter.format(amount) : '—';
  }

  tableCountLabel(): string {
    const n = this.status()?.tableCount ?? null;
    return n != null ? `${n} mesa${n === 1 ? '' : 's'}` : '—';
  }

  // "8 de 10 mesas" quando há limite; "8 mesas" quando o plano é ilimitado.
  tableUsageLabel(): string {
    const s = this.status();
    const used = s?.tableCount ?? null;
    if (used == null) {
      return '—';
    }
    const limit = s?.contractedTableLimit ?? null;
    return limit != null ? `${used} de ${limit} mesas` : `${used} mesa${used === 1 ? '' : 's'}`;
  }

  planCardMonthlyLabel(monthlyAmount: number): string {
    return this.currencyFormatter.format(monthlyAmount);
  }

  creditExpiryLabel(): string {
    return this.dateLabel(this.status()?.credit?.periodEnd);
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
