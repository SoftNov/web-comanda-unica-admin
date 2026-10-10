import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import { AuthService } from '../../../auth/services/auth.service';
import {
  CreditMovement,
  CreditMovementType,
  PlatformCharge,
  SavedPaymentMethod,
  SubscriptionService,
  SubscriptionStatusResponse
} from '../../../../shared/services/subscription.service';
import { parseApiDate } from '../../../../shared/utils/datetime.util';
import { BillingCardFormComponent, BillingCardFormSummary } from './billing-card-form.component';

type ViewMode = 'offer' | 'active' | 'past-due';

@Component({
  selector: 'app-admin-assinatura',
  standalone: true,
  imports: [RippleDirective, BillingCardFormComponent],
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
  // Cancelamento da renovação: pedindo confirmação / requisição em voo.
  readonly confirmingCancel = signal(false);
  readonly isCancelling = signal(false);
  // Qual botão de assinar está em voo — 'default' (Assinar agora, sem seletor de faixa) ou
  // 'plan-<upToTables>' (um card do seletor). Guardar QUAL botão evita que todos mudem de rótulo
  // juntos quando só um foi clicado.
  readonly subscribingTarget = signal<string | null>(null);
  readonly actionError = signal<string | null>(null);
  readonly actionSuccess = signal<string | null>(null);
  // Formulário de cadastro/troca do cartão de cobrança aberto.
  readonly cardFormOpen = signal(false);
  // Destaca o cartão de cobrança por alguns segundos logo depois de salvar.
  readonly cardJustSaved = signal(false);
  private cardJustSavedTimer: ReturnType<typeof setTimeout> | null = null;
  // Assinatura pedida antes de haver cartão: depois de salvar o cartão, assina direto.
  // undefined = nenhuma; null = faixa da quantidade de mesas atual; número = faixa escolhida.
  private readonly pendingSubscription = signal<number | null | undefined>(undefined);
  // Botão de troca de plano em voo: 'sync' (botão "Atualizar plano" do
  // banner planOutdated) ou 'plan-<upToTables>' (confirmação de uma faixa do seletor).
  readonly changingPlanTarget = signal<string | null>(null);
  readonly changePlanMessage = signal<{ type: 'ok' | 'error'; text: string } | null>(null);
  // Faixa (upToTables) aguardando confirmação no seletor de plano; null = nenhuma.
  readonly pendingPlan = signal<number | null>(null);

  readonly status = signal<SubscriptionStatusResponse | null>(null);
  readonly companyName = computed(() => this.authService.selectedCompany()?.companyName ?? 'seu estabelecimento');

  // Faturas na Asaas (mensalidades e taxas semanais).
  readonly charges = signal<PlatformCharge[]>([]);
  readonly isLoadingCharges = signal(false);
  readonly chargesLoadError = signal(false);

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

  // Há faixas pra montar o seletor de plano (grid de plan-option) — tanto no modo "active"
  // (upgrade/downgrade) quanto no "offer" (primeira assinatura). Vazio só em setup incomum sem
  // nenhuma faixa cadastrada, onde a tela cai pro fluxo antigo de plano único.
  readonly hasPlanPicker = computed(() => (this.status()?.availablePlans?.length ?? 0) > 0);

  // Faixa em destaque no seletor da tela de oferta — a menor que já comporta as mesas cadastradas
  // hoje (mesma regra do backend em SubscriptionPricingServiceImpl#resolve: a lista vem ordenada
  // por upToTables crescente). null quando nenhuma faixa comporta (mesas além da maior faixa).
  readonly recommendedUpToTables = computed(() => {
    const plans = this.status()?.availablePlans ?? [];
    return plans.find((p) => p.allowed)?.upToTables ?? null;
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
        if (status.exists) {
          this.loadCharges();
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

  // Sem argumento: assina a faixa da quantidade de mesas cadastrada hoje (botão principal). Com
  // upToTables: assina a faixa escolhida no seletor de plano (modo "offer" — ver plan-picker no
  // template). A mensalidade é cobrada no cartão salvo; sem cartão, abre o cadastro primeiro e
  // assina logo depois de salvar.
  subscribe(upToTables?: number): void {
    this.actionError.set(null);
    this.actionSuccess.set(null);
    if (!this.status()?.paymentMethod) {
      this.pendingSubscription.set(upToTables ?? null);
      this.cardFormOpen.set(true);
      return;
    }
    this.doSubscribe(upToTables);
  }

  isSubscribingTo(target: string): boolean {
    return this.subscribingTarget() === target;
  }

  readonly isSubscribing = computed(() => this.subscribingTarget() !== null);

  openCardForm(): void {
    this.actionError.set(null);
    this.actionSuccess.set(null);
    this.pendingSubscription.set(undefined);
    this.cardFormOpen.set(true);
  }

  closeCardForm(): void {
    this.pendingSubscription.set(undefined);
    this.cardFormOpen.set(false);
  }

  cardFormHeading(): string {
    if (this.pendingSubscription() !== undefined) {
      return 'Último passo: cartão de cobrança';
    }
    return this.status()?.paymentMethod ? 'Trocar cartão de cobrança' : 'Cadastrar cartão de cobrança';
  }

  // Contexto mostrado no topo do formulário: o plano que vai ser assinado logo depois de salvar, ou
  // o aviso de que a cobrança pendente vai ser refeita no cartão novo.
  readonly cardFormSummary = computed<BillingCardFormSummary | null>(() => {
    const pending = this.pendingSubscription();
    if (pending !== undefined) {
      const plan = pending != null ? this.status()?.availablePlans?.find((p) => p.upToTables === pending) : undefined;
      return {
        title: plan ? `Plano até ${plan.upToTables} mesas` : `Plano para ${this.tableCountLabel()}`,
        amount: plan ? this.currencyFormatter.format(plan.monthlyAmount) : this.planMonthlyLabel(),
        note: 'A primeira mensalidade é cobrada assim que o cartão for salvo. Renovação mensal, cancele quando quiser.'
      };
    }
    if (this.mode() === 'past-due') {
      return {
        title: 'Pagamento pendente',
        amount: this.planMonthlyLabel(),
        note: 'Ao salvar, a cobrança em aberto é tentada de novo no cartão novo.'
      };
    }
    return null;
  });

  cardFormSubmitLabel(): string {
    if (this.pendingSubscription() !== undefined) {
      return 'Salvar cartão e assinar';
    }
    return this.mode() === 'past-due' ? 'Salvar cartão e pagar' : 'Salvar cartão';
  }

  onCardSaved(status: SubscriptionStatusResponse): void {
    this.status.set(status);
    this.cardFormOpen.set(false);
    this.flashSavedCard();
    const pending = this.pendingSubscription();
    this.pendingSubscription.set(undefined);
    if (pending !== undefined) {
      this.doSubscribe(pending ?? undefined);
      return;
    }
    this.actionSuccess.set(status.status === 'PAST_DUE'
      ? 'Cartão salvo. Se o pagamento pendente não for aprovado em instantes, confira o cartão com o banco.'
      : 'Cartão de cobrança salvo. As próximas cobranças serão lançadas nele.');
  }

  private flashSavedCard(): void {
    if (this.cardJustSavedTimer) {
      clearTimeout(this.cardJustSavedTimer);
    }
    this.cardJustSaved.set(true);
    this.cardJustSavedTimer = setTimeout(() => this.cardJustSaved.set(false), 2400);
  }

  private doSubscribe(upToTables?: number): void {
    const target = upToTables != null ? `plan-${upToTables}` : 'default';
    this.subscribingTarget.set(target);
    this.subscriptionService.subscribe(upToTables).subscribe({
      next: (status) => {
        this.status.set(status);
        this.subscribingTarget.set(null);
        this.loadCharges();
        if (status.status === 'ACTIVE' && !status.courtesy) {
          this.actionSuccess.set('Assinatura confirmada! A mensalidade foi cobrada no cartão salvo.');
          if (status.credit) {
            this.loadMovements();
          }
          return;
        }
        this.actionSuccess.set('Assinatura criada. Aguardando a confirmação do pagamento pela operadora do cartão…');
        this.waitForActivation();
      },
      error: (error: unknown) => {
        this.subscribingTarget.set(null);
        const body = error instanceof HttpErrorResponse ? (error.error as { mensagem?: string } | undefined) : undefined;
        this.actionError.set(body?.mensagem ?? 'Não foi possível concluir a assinatura agora. Tente novamente em instantes.');
      }
    });
  }

  // Pagamento ainda em análise na Asaas: a ativação chega pelo webhook — re-busca o estado algumas
  // vezes até a assinatura aparecer ativa.
  private waitForActivation(attempt = 0): void {
    const companyId = this.authService.selectedCompany()?.companyId;
    const s = this.status();
    if (!companyId || attempt >= 6 || (s?.status === 'ACTIVE' && !s.courtesy && s.credit)) {
      return;
    }
    setTimeout(() => {
      this.subscriptionService.refresh(companyId).subscribe({
        next: (status) => {
          this.status.set(status);
          if (status.credit) {
            this.loadMovements();
          }
          this.loadCharges();
          this.waitForActivation(attempt + 1);
        },
        error: () => this.waitForActivation(attempt + 1)
      });
    }, 2000);
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

  loadCharges(): void {
    this.isLoadingCharges.set(true);
    this.chargesLoadError.set(false);
    this.subscriptionService.getCharges(0, 10).subscribe({
      next: (page) => {
        this.charges.set(page.content);
        this.isLoadingCharges.set(false);
      },
      error: () => {
        this.isLoadingCharges.set(false);
        this.chargesLoadError.set(true);
      }
    });
  }

  chargeKindLabel(charge: PlatformCharge): string {
    return charge.kind === 'SUBSCRIPTION' ? 'Mensalidade' : 'Taxas da semana';
  }

  chargeStatusLabel(charge: PlatformCharge): string {
    if (charge.paid) {
      return 'Paga';
    }
    switch (charge.status) {
      case 'PENDING':
      case 'AWAITING_RISK_ANALYSIS':
        return 'Processando';
      case 'OVERDUE':
        return 'Recusada';
      case 'REFUNDED':
      case 'REFUND_REQUESTED':
        return 'Estornada';
      default:
        return charge.status;
    }
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
    this.applyPlanChange(undefined, 'sync');
  }

  // Seletor de plano: pede confirmação antes de trocar (a proração é cobrada). Só instancia
  // pendingPlan — sem chamada de rede ainda, então não mexe em changingPlanTarget.
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
      this.applyPlanChange(target, `plan-${target}`);
    }
  }

  // true enquanto QUALQUER troca de plano está em voo — usado só pra desabilitar os botões que não
  // deveriam iniciar uma segunda troca em paralelo (sem mudar o rótulo deles).
  readonly isChangingPlan = computed(() => this.changingPlanTarget() !== null);

  // Se ESTE botão específico (o banner de sync, ou a confirmação de uma faixa do seletor) é quem
  // está trocando — usado pro rótulo "Atualizando…"/"Trocando…" aparecer só onde foi clicado.
  isChangingPlanTo(target: string): boolean {
    return this.changingPlanTarget() === target;
  }

  private applyPlanChange(upToTables: number | undefined, target: string): void {
    this.changingPlanTarget.set(target);
    this.changePlanMessage.set(null);
    this.subscriptionService.changePlan(upToTables).subscribe({
      next: (status) => {
        this.status.set(status);
        this.changingPlanTarget.set(null);
        this.pendingPlan.set(null);
        this.changePlanMessage.set({ type: 'ok', text: 'Plano atualizado. O novo valor vale a partir da próxima mensalidade.' });
      },
      error: (error: unknown) => {
        this.changingPlanTarget.set(null);
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

  // Cancelar a renovação: pede confirmação antes (o acesso segue até o fim do período pago).
  requestCancel(): void {
    this.actionError.set(null);
    this.actionSuccess.set(null);
    this.confirmingCancel.set(true);
  }

  abortCancel(): void {
    this.confirmingCancel.set(false);
  }

  confirmCancel(): void {
    this.isCancelling.set(true);
    this.subscriptionService.cancelRenewal().subscribe({
      next: (status) => {
        this.status.set(status);
        this.isCancelling.set(false);
        this.confirmingCancel.set(false);
        this.actionSuccess.set(`Renovação cancelada. Seu acesso continua até ${this.dateLabel(status.currentPeriodEnd)}.`);
      },
      error: (error: unknown) => {
        this.isCancelling.set(false);
        this.confirmingCancel.set(false);
        const body = error instanceof HttpErrorResponse ? (error.error as { mensagem?: string } | undefined) : undefined;
        this.actionError.set(body?.mensagem ?? 'Não foi possível cancelar a renovação agora. Tente novamente em instantes.');
      }
    });
  }

  private static readonly BRAND_LABELS: Record<string, string> = {
    visa: 'Visa',
    mastercard: 'Mastercard',
    amex: 'American Express',
    elo: 'Elo',
    hipercard: 'Hipercard',
    diners: 'Diners Club',
    discover: 'Discover',
    jcb: 'JCB'
  };

  cardLabel(pm: SavedPaymentMethod): string {
    // A Asaas devolve a bandeira em maiúsculas (VISA, MASTERCARD, ELO...).
    const brand = pm.brand ? (AssinaturaComponent.BRAND_LABELS[pm.brand.toLowerCase()] ?? pm.brand) : 'Cartão';
    return pm.last4 ? `${brand} •••• ${pm.last4}` : brand;
  }

  cardExpiryLabel(pm: SavedPaymentMethod): string {
    if (pm.expMonth == null || pm.expYear == null) {
      return '—';
    }
    return `${String(pm.expMonth).padStart(2, '0')}/${pm.expYear}`;
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
