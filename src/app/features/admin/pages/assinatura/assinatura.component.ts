import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import { AuthService } from '../../../auth/services/auth.service';
import {
  CreditMovement,
  CreditMovementType,
  SavedPaymentMethod,
  SubscribeResponse,
  SubscriptionService,
  SubscriptionStatusResponse
} from '../../../../shared/services/subscription.service';
import { parseApiDate } from '../../../../shared/utils/datetime.util';
import { loadStripeJs, stripeErrorMessage } from '../../../../shared/utils/stripe-js.loader';
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
  // Botão do Customer Portal (faturas / cancelamento) com a requisição em voo — 'manage' ou null.
  readonly redirectingTarget = signal<string | null>(null);
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
  // Mesma lógica do redirectingTarget, para as trocas de plano: 'sync' (botão "Atualizar plano" do
  // banner planOutdated) ou 'plan-<upToTables>' (confirmação de uma faixa do seletor).
  readonly changingPlanTarget = signal<string | null>(null);
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

  isRedirectingTo(target: string): boolean {
    return this.redirectingTarget() === target;
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
      next: (res) => {
        this.status.set(res.subscription);
        if (!res.requiresConfirmation) {
          this.subscribingTarget.set(null);
          this.actionSuccess.set('Assinatura confirmada! A mensalidade foi cobrada no cartão salvo.');
          this.waitForActivation();
          return;
        }
        this.confirmFirstPayment(res);
      },
      error: (error: unknown) => {
        this.subscribingTarget.set(null);
        const body = error instanceof HttpErrorResponse ? (error.error as { mensagem?: string } | undefined) : undefined;
        this.actionError.set(body?.mensagem ?? 'Não foi possível concluir a assinatura agora. Tente novamente em instantes.');
      }
    });
  }

  // O banco pediu autenticação (3D Secure) ou recusou a 1ª tentativa: o Stripe.js abre a
  // autenticação do banco / tenta de novo no cartão salvo. A ativação chega pelo webhook.
  private confirmFirstPayment(res: SubscribeResponse): void {
    const { clientSecret, publishableKey } = res;
    if (!clientSecret || !publishableKey) {
      this.subscribingTarget.set(null);
      this.actionError.set('O pagamento não foi aprovado. Confira o cartão ou cadastre outro e tente novamente.');
      return;
    }
    loadStripeJs()
      .then((Stripe) => Stripe(publishableKey, { locale: 'pt-BR' }).confirmCardPayment(clientSecret, {
        payment_method: res.paymentMethodId ?? undefined
      }))
      .then((result: any) => {
        this.subscribingTarget.set(null);
        if (result.error) {
          this.actionError.set(result.error.type === 'card_error'
            ? `${result.error.message ?? 'O pagamento não foi aprovado.'} Confira o cartão ou cadastre outro e tente novamente.`
            : stripeErrorMessage(result.error, 'Não foi possível processar o pagamento agora por um problema no processamento '
              + 'de pagamentos. Tente novamente mais tarde ou fale com o suporte da Comanda Única.'));
          return;
        }
        this.actionSuccess.set('Pagamento confirmado! Ativando sua assinatura…');
        this.waitForActivation();
      })
      .catch(() => {
        this.subscribingTarget.set(null);
        this.actionError.set('Não foi possível confirmar o pagamento agora. Tente novamente em instantes.');
      });
  }

  // A ativação definitiva vem do webhook do Stripe (invoice.paid concede o crédito) — re-busca o
  // estado algumas vezes até a assinatura aparecer ativa.
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
        this.changePlanMessage.set({ type: 'ok', text: 'Plano atualizado. A diferença entra na próxima fatura.' });
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

  // Customer Portal do Stripe — faturas e cancelamento da renovação.
  manage(): void {
    const target = 'manage';
    this.redirectingTarget.set(target);
    this.actionError.set(null);
    this.subscriptionService.createPortalSession().subscribe({
      next: ({ url }) => {
        window.location.href = url;
      },
      error: () => {
        // Só limpa se ainda for O MESMO alvo — evita que a resposta de um clique antigo apague o
        // estado "em voo" de um clique mais novo em outro botão.
        if (this.redirectingTarget() === target) {
          this.redirectingTarget.set(null);
        }
        this.actionError.set('Não foi possível abrir as faturas agora. Tente novamente em instantes.');
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
    const brand = pm.brand ? (AssinaturaComponent.BRAND_LABELS[pm.brand] ?? pm.brand) : 'Cartão';
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
