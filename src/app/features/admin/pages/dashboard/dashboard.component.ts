import { Component, OnDestroy, computed, inject, signal } from '@angular/core';
import { Subscription, retry, timer } from 'rxjs';
import { AuthService } from '../../../auth/services/auth.service';
import { FloorPlanViewerComponent } from '../../../../shared/components/floor-plan-viewer/floor-plan-viewer.component';
import { FloorPlanResponse, FloorPlansService } from '../../../../shared/services/floor-plans.service';
import { DashboardService, DashboardSummaryResponse } from '../../../../shared/services/dashboard.service';
import { LineChartComponent, LineChartPoint } from '../../../../shared/components/line-chart/line-chart.component';

const MANAGEMENT_PROFILES = ['ADMIN', 'OWNER', 'MANAGER'];
const WS_RETRY_DELAY_MS = 5000;
const WS_SILENT_RETRIES = 3;

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
  imports: [FloorPlanViewerComponent, LineChartComponent],
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

  // Indicadores operacionais, atualizados em tempo real via WebSocket (ver connectRealtime) —
  // não há mais um fetch único aqui, a conexão já recebe o estado atual ao abrir e depois a cada
  // ~10s (ver DashboardBroadcastScheduler no backend).
  readonly summary = signal<DashboardSummaryResponse | null>(null);
  readonly isLoadingSummary = signal(false);
  readonly summaryError = signal<string | null>(null);
  private summarySubscription?: Subscription;

  readonly revenuePoints = signal<LineChartPoint[]>([]);
  readonly isLoadingRevenue = signal(false);
  readonly revenueError = signal<string | null>(null);
  readonly revenueStartDate = signal(this.toIsoDate(this.daysAgo(29)));
  readonly revenueEndDate = signal(this.toIsoDate(new Date()));
  readonly activeRevenuePresetDays = signal<number | null>(30);
  readonly revenueTotal = computed(() => this.revenuePoints().reduce((total, point) => total + point.amount, 0));

  readonly floorPlans = signal<FloorPlanResponse[]>([]);
  readonly isLoadingFloorPlans = signal(true);
  readonly selectedFloorPlanId = signal<string | null>(null);

  constructor() {
    if (this.isManagementProfile()) {
      this.connectRealtimeSummary();
      this.loadRevenue();
    }
    this.loadFloorPlans();
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

    this.revenuePoints.update((points) => {
      const index = points.findIndex((point) => point.date === today);
      if (index === -1) {
        return [...points, { date: today, amount }].sort((a, b) => a.date.localeCompare(b.date));
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
        this.revenuePoints.set(points);
        this.isLoadingRevenue.set(false);
      },
      error: () => {
        this.isLoadingRevenue.set(false);
        this.revenueError.set('Não foi possível carregar o faturamento do período selecionado.');
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
