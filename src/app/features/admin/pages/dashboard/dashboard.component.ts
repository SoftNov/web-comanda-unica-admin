import { Component, OnDestroy, computed, inject, signal } from '@angular/core';
import { Subscription, retry, timer } from 'rxjs';
import { AuthService } from '../../../auth/services/auth.service';
import { FloorPlanViewerComponent } from '../../../../shared/components/floor-plan-viewer/floor-plan-viewer.component';
import { FloorPlanResponse, FloorPlansService } from '../../../../shared/services/floor-plans.service';
import { DashboardService, DashboardSummaryResponse, RevenuePoint } from '../../../../shared/services/dashboard.service';
import { LineChartComponent, LineChartPoint } from '../../../../shared/components/line-chart/line-chart.component';
import { PedidosComponent } from '../pedidos/pedidos.component';
import { ServicosComponent } from '../servicos/servicos.component';

const MANAGEMENT_PROFILES = ['ADMIN', 'OWNER', 'MANAGER'];
// Perfis operacionais que vivem na fila de pedidos no dia a dia — a home entra direto na mesma
// visão do menu Pedidos (ver PedidosComponent) em vez do mapa do salão, pra não exigir mais um
// clique de quem só quer ver o que precisa preparar/servir agora.
const QUEUE_HOME_PROFILES = ['WAITER', 'KITCHEN'];
// Só WAITER: quem chama/atende limpeza, garçom, caixa, reclamação e ajuda de mesa — o backend nem
// libera esses endpoints pra KITCHEN (ver TableServiceRequestController#@RequireProfile).
const SERVICE_HOME_PROFILES = ['WAITER'];
const WS_RETRY_DELAY_MS = 5000;
const WS_SILENT_RETRIES = 3;

type DashboardTabId = 'overview' | 'pedidos' | 'servicos' | 'floorplan';

interface DashboardTab {
  id: DashboardTabId;
  label: string;
  icon: string;
}

interface RevenuePreset {
  label: string;
  days: number;
}

const REVENUE_PRESETS: RevenuePreset[] = [
  { label: '7 dias', days: 7 },
  { label: '30 dias', days: 30 },
  { label: '90 dias', days: 90 }
];

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [FloorPlanViewerComponent, LineChartComponent, PedidosComponent, ServicosComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnDestroy {
  private readonly authService = inject(AuthService);
  private readonly floorPlansService = inject(FloorPlansService);
  private readonly dashboardService = inject(DashboardService);
  private readonly currencyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

  readonly currentUser = this.authService.currentUser;
  readonly selectedCompany = this.authService.selectedCompany;
  readonly revenuePresets = REVENUE_PRESETS;

  // As métricas administrativas (faturamento, comandas, ocupação de mesas, funcionários) só
  // existem no backend para ADMIN/OWNER/MANAGER (ver DashboardController, restrito por
  // @RequireProfile) — para os demais perfis (garçom, caixa, cozinha) a home mostra só o mapa do
  // salão, sem tentar abrir uma conexão que o handshake rejeitaria com 403.
  readonly isManagementProfile = computed(() => {
    const profileCode = this.selectedCompany()?.profileCode;
    return !!profileCode && MANAGEMENT_PROFILES.includes(profileCode);
  });

  // Garçom e cozinha entram direto na fila de pedidos (mesmo conteúdo do menu Pedidos, ver
  // PedidosComponent) — o mapa do salão continua abaixo, mas o que importa pra esses perfis é ver
  // e movimentar os itens assim que abrem a home.
  readonly isQueueHomeProfile = computed(() => {
    const profileCode = this.selectedCompany()?.profileCode;
    return !!profileCode && QUEUE_HOME_PROFILES.includes(profileCode);
  });

  // Garçom também entra direto nos serviços gerais (mesmo conteúdo do menu Serviços, ver
  // ServicosComponent) — logo abaixo da fila de pedidos na home.
  readonly isServiceHomeProfile = computed(() => {
    const profileCode = this.selectedCompany()?.profileCode;
    return !!profileCode && SERVICE_HOME_PROFILES.includes(profileCode);
  });

  // Indicadores operacionais, atualizados em tempo real via WebSocket (ver connectRealtime) —
  // não há mais um fetch único aqui, a conexão já recebe o estado atual ao abrir e depois a cada
  // ~10s (ver DashboardBroadcastScheduler no backend).
  readonly summary = signal<DashboardSummaryResponse | null>(null);
  readonly isLoadingSummary = signal(false);
  readonly summaryError = signal<string | null>(null);
  private summarySubscription?: Subscription;

  readonly revenueSeries = signal<RevenuePoint[]>([]);
  readonly isLoadingRevenue = signal(false);
  readonly revenueError = signal<string | null>(null);
  readonly revenueStartDate = signal(this.toIsoDate(this.daysAgo(29)));
  readonly revenueEndDate = signal(this.toIsoDate(new Date()));
  readonly activeRevenuePresetDays = signal<number | null>(30);

  readonly grossPoints = computed<LineChartPoint[]>(() =>
    this.revenueSeries().map((point) => ({ date: point.date, amount: point.amount }))
  );
  readonly netPoints = computed<LineChartPoint[]>(() =>
    this.revenueSeries().map((point) => ({ date: point.date, amount: point.netAmount ?? 0 }))
  );
  readonly revenueTotal = computed(() => this.revenueSeries().reduce((total, point) => total + point.amount, 0));
  readonly revenueNetTotal = computed(() => this.revenueSeries().reduce((total, point) => total + (point.netAmount ?? 0), 0));

  // Saldo disponível na conta Stripe do estabelecimento — indicador, não série.
  readonly stripeBalance = signal<number | null>(null);
  readonly isLoadingStripeBalance = signal(false);

  readonly floorPlans = signal<FloorPlanResponse[]>([]);
  readonly isLoadingFloorPlans = signal(true);
  readonly selectedFloorPlanId = signal<string | null>(null);

  // Views da home organizadas em abas — cada perfil só vê as abas que fazem sentido pra ele (ver
  // isManagementProfile/isQueueHomeProfile/isServiceHomeProfile). Mapa do salão aparece pra todo
  // mundo, sempre por último. Pedidos/Serviços só ficam montados (e só abrem WebSocket) enquanto a
  // aba correspondente está ativa — trocar de aba desconecta a anterior e conecta a nova. A
  // notificação de pedido/serviço novo (som + sino no topo) não depende de qual aba está ativa —
  // ver NotificationsService, usado pelo AdminLayoutComponent.
  readonly availableTabs = computed<DashboardTab[]>(() => {
    const tabs: DashboardTab[] = [];
    if (this.isManagementProfile()) {
      tabs.push({ id: 'overview', label: 'Visão geral', icon: 'insights' });
    }
    if (this.isQueueHomeProfile()) {
      tabs.push({ id: 'pedidos', label: 'Pedidos', icon: 'point_of_sale' });
    }
    if (this.isServiceHomeProfile()) {
      tabs.push({ id: 'servicos', label: 'Serviços', icon: 'support_agent' });
    }
    tabs.push({ id: 'floorplan', label: 'Mapa do salão', icon: 'map' });
    return tabs;
  });

  readonly activeTab = signal<DashboardTabId>('floorplan');

  constructor() {
    this.activeTab.set(this.availableTabs()[0]?.id ?? 'floorplan');

    if (this.isManagementProfile()) {
      this.connectRealtimeSummary();
      this.loadRevenue();
      this.loadStripeBalance();
    }
    this.loadFloorPlans();
  }

  selectTab(tabId: DashboardTabId): void {
    this.activeTab.set(tabId);
  }

  ngOnDestroy(): void {
    this.summarySubscription?.unsubscribe();
  }

  selectFloorPlan(floorPlanId: string): void {
    this.selectedFloorPlanId.set(floorPlanId);
  }

  formatCurrency(value: number | undefined | null): string {
    return value != null ? this.currencyFormatter.format(value) : '—';
  }

  applyRevenuePreset(days: number): void {
    this.activeRevenuePresetDays.set(days);
    this.revenueStartDate.set(this.toIsoDate(this.daysAgo(days - 1)));
    this.revenueEndDate.set(this.toIsoDate(new Date()));
    this.loadRevenue();
  }

  onRevenueStartDateChange(value: string): void {
    this.activeRevenuePresetDays.set(null);
    this.revenueStartDate.set(value);
    this.loadRevenue();
  }

  onRevenueEndDateChange(value: string): void {
    this.activeRevenuePresetDays.set(null);
    this.revenueEndDate.set(value);
    this.loadRevenue();
  }

  private connectRealtimeSummary(): void {
    const companyId = this.selectedCompany()?.companyId;
    const token = this.authService.getAccessToken();
    if (!companyId || !token) {
      return;
    }

    this.isLoadingSummary.set(true);
    this.summaryError.set(null);

    // O WebSocket já se reconecta sozinho (retry com um pequeno atraso) se a conexão cair — não
    // precisa de um fallback por REST em paralelo. Depois de algumas tentativas seguidas sem
    // sucesso, expõe o erro na tela (mas continua tentando em segundo plano, resetando a contagem
    // após uma reconexão bem-sucedida).
    this.summarySubscription = this.dashboardService
      .connectRealtime(companyId, token)
      .pipe(
        retry({
          delay: (_, retryCount) => {
            if (retryCount >= WS_SILENT_RETRIES) {
              this.isLoadingSummary.set(false);
              this.summaryError.set('Não foi possível conectar à atualização em tempo real do painel.');
            }
            return timer(WS_RETRY_DELAY_MS);
          },
          resetOnSuccess: true
        })
      )
      .subscribe({
        next: (summary) => {
          this.summary.set(summary);
          this.isLoadingSummary.set(false);
          this.summaryError.set(null);
          this.patchTodayRevenue(summary.revenueToday);
        },
        error: () => {
          this.isLoadingSummary.set(false);
          this.summaryError.set('Não foi possível conectar à atualização em tempo real do painel.');
        }
      });
  }

  // Atualiza ao vivo só o ponto de hoje do gráfico de faturamento (via WS), sem reconsultar a
  // série inteira — o REST (loadRevenue) continua sendo a fonte de verdade ao trocar o período.
  // Fora do intervalo selecionado, ignora (o gráfico só mostra o período escolhido pelo usuário).
  private patchTodayRevenue(amount: number): void {
    const today = this.toIsoDate(new Date());
    if (today < this.revenueStartDate() || today > this.revenueEndDate()) {
      return;
    }

    // Só atualiza o "faturado" de hoje ao vivo (o WS manda o bruto). O "líquido recebido" do dia
    // se ajusta no próximo carregamento do período — depende da confirmação de taxa pela Stripe.
    this.revenueSeries.update((points) => {
      const index = points.findIndex((point) => point.date === today);
      if (index === -1) {
        return [...points, { date: today, amount, netAmount: amount }].sort((a, b) => a.date.localeCompare(b.date));
      }
      if (points[index].amount === amount) {
        return points;
      }
      const next = [...points];
      next[index] = { ...next[index], amount };
      return next;
    });
  }

  private loadRevenue(): void {
    this.isLoadingRevenue.set(true);
    this.revenueError.set(null);

    this.dashboardService.getRevenueSeries(this.revenueStartDate(), this.revenueEndDate()).subscribe({
      next: (points) => {
        this.revenueSeries.set(points);
        this.isLoadingRevenue.set(false);
      },
      error: () => {
        this.isLoadingRevenue.set(false);
        this.revenueError.set('Não foi possível carregar o faturamento do período selecionado.');
      }
    });
  }

  private loadStripeBalance(): void {
    this.isLoadingStripeBalance.set(true);
    this.dashboardService.getStripeBalance().subscribe({
      next: (balance) => {
        this.stripeBalance.set(balance.availableAmount);
        this.isLoadingStripeBalance.set(false);
      },
      error: () => {
        this.stripeBalance.set(null);
        this.isLoadingStripeBalance.set(false);
      }
    });
  }

  private loadFloorPlans(): void {
    this.isLoadingFloorPlans.set(true);
    this.floorPlansService.list().subscribe({
      next: (floorPlans) => {
        this.floorPlans.set(floorPlans);
        this.selectedFloorPlanId.set(floorPlans[0]?.id ?? null);
        this.isLoadingFloorPlans.set(false);
      },
      error: () => {
        this.isLoadingFloorPlans.set(false);
      }
    });
  }

  private daysAgo(days: number): Date {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return date;
  }

  private toIsoDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}