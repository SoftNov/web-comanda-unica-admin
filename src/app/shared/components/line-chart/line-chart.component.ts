import { Component, ElementRef, Input, ViewChild, computed, signal } from '@angular/core';

export interface LineChartPoint {
  date: string; // yyyy-MM-dd
  amount: number;
}

interface PlottedPoint extends LineChartPoint {
  x: number;
  y: number;
}

interface AxisTick {
  y: number;
  label: string;
}

interface BarRect extends PlottedPoint {
  barX: number;
  barY: number;
  width: number;
  path: string;
}

export type ChartViewMode = 'line' | 'bar' | 'table';

const VIEW_WIDTH = 800;
const PADDING = { top: 20, right: 60, bottom: 32, left: 64 };
const MAX_X_LABELS = 6;
const MAX_BAR_WIDTH = 24;
const BAR_GAP = 2;
const BAR_RADIUS = 4;

// Gráfico de série única (faturamento por dia) em SVG inline, sem dependência externa —
// segue a skill de dataviz do projeto: linha de 2px ou barras de topo arredondado (4px, ≤24px de
// espessura), área/gridlines/eixos recessivos, crosshair ou tooltip por barra no hover, e uma view
// em tabela para acessibilidade (sem legenda, já que série única dispensa — o título do card já diz
// o que é).
@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent {
  @ViewChild('svgRoot') private readonly svgRoot?: ElementRef<SVGSVGElement>;

  @Input() height = 260;

  @Input() set points(value: LineChartPoint[] | null | undefined) {
    this._points.set(value ?? []);
  }

  private readonly _points = signal<LineChartPoint[]>([]);
  readonly points$ = computed(() => this._points());

  readonly hoveredIndex = signal<number | null>(null);
  readonly viewMode = signal<ChartViewMode>('line');

  readonly viewWidth = VIEW_WIDTH;
  readonly padding = PADDING;

  private readonly currencyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  private readonly compactCurrencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    notation: 'compact',
    maximumFractionDigits: 1
  });
  private readonly shortDateFormatter = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit' });
  private readonly fullDateFormatter = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });

  readonly maxAmount = computed(() => {
    const max = Math.max(0, ...this._points().map((point) => point.amount));
    return max === 0 ? 1 : max * 1.15;
  });

  readonly plotWidth = computed(() => this.viewWidth - PADDING.left - PADDING.right);
  readonly plotHeight = computed(() => this.height - PADDING.top - PADDING.bottom);

  readonly plotted = computed<PlottedPoint[]>(() => {
    const points = this._points();
    const n = points.length;
    const width = this.plotWidth();
    const heightPx = this.plotHeight();
    const max = this.maxAmount();

    return points.map((point, index) => ({
      ...point,
      x: PADDING.left + (n <= 1 ? width / 2 : (index / (n - 1)) * width),
      y: PADDING.top + heightPx - (point.amount / max) * heightPx
    }));
  });

  readonly linePath = computed(() => {
    const pts = this.plotted();
    return pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(' ');
  });

  readonly areaPath = computed(() => {
    const pts = this.plotted();
    if (pts.length === 0) {
      return '';
    }
    const baseline = PADDING.top + this.plotHeight();
    const segments = pts.map((p) => `L${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(' ');
    const last = pts[pts.length - 1];
    return `M${pts[0].x.toFixed(2)},${baseline.toFixed(2)} ${segments} L${last.x.toFixed(2)},${baseline.toFixed(2)} Z`;
  });

  readonly yTicks = computed<AxisTick[]>(() => {
    const max = this.maxAmount();
    const heightPx = this.plotHeight();
    const steps = 4;
    return Array.from({ length: steps + 1 }, (_, i) => {
      const fraction = i / steps;
      return {
        y: PADDING.top + heightPx - fraction * heightPx,
        label: this.compactCurrencyFormatter.format(max * fraction)
      };
    });
  });

  readonly xTicks = computed<PlottedPoint[]>(() => {
    const pts = this.plotted();
    if (pts.length === 0) {
      return [];
    }
    const step = Math.max(1, Math.ceil(pts.length / MAX_X_LABELS));
    const ticks = pts.filter((_, index) => index % step === 0);
    const last = pts[pts.length - 1];
    if (ticks[ticks.length - 1] !== last) {
      ticks.push(last);
    }
    return ticks;
  });

  readonly hoveredPoint = computed<PlottedPoint | null>(() => {
    const index = this.hoveredIndex();
    if (index === null) {
      return null;
    }
    return this.plotted()[index] ?? null;
  });

  readonly lastPoint = computed<PlottedPoint | null>(() => {
    const pts = this.plotted();
    return pts.length > 0 ? pts[pts.length - 1] : null;
  });

  readonly barRects = computed<BarRect[]>(() => {
    const pts = this.plotted();
    const n = pts.length;
    if (n === 0) {
      return [];
    }
    const baseline = PADDING.top + this.plotHeight();
    const slot = n <= 1 ? this.plotWidth() : this.plotWidth() / (n - 1);
    const width = Math.max(3, Math.min(MAX_BAR_WIDTH, slot - BAR_GAP));

    return pts.map((point) => {
      const barX = point.x - width / 2;
      const barY = point.y;
      const barHeight = Math.max(0, baseline - barY);
      const radius = Math.min(BAR_RADIUS, width / 2, barHeight);
      const path =
        barHeight <= 0
          ? ''
          : `M${barX},${baseline} ` +
            `L${barX},${(barY + radius).toFixed(2)} ` +
            `A${radius},${radius} 0 0 1 ${(barX + radius).toFixed(2)},${barY.toFixed(2)} ` +
            `L${(barX + width - radius).toFixed(2)},${barY.toFixed(2)} ` +
            `A${radius},${radius} 0 0 1 ${(barX + width).toFixed(2)},${(barY + radius).toFixed(2)} ` +
            `L${(barX + width).toFixed(2)},${baseline} Z`;
      return { ...point, barX, barY, width, path };
    });
  });

  readonly hoveredBar = computed<BarRect | null>(() => {
    const index = this.hoveredIndex();
    if (index === null) {
      return null;
    }
    return this.barRects()[index] ?? null;
  });

  setViewMode(mode: ChartViewMode): void {
    this.viewMode.set(mode);
  }

  onPointerMove(event: PointerEvent): void {
    const svg = this.svgRoot?.nativeElement;
    const pts = this.plotted();
    if (!svg || pts.length === 0) {
      return;
    }

    const rect = svg.getBoundingClientRect();
    if (rect.width === 0) {
      return;
    }
    const localX = ((event.clientX - rect.left) / rect.width) * this.viewWidth;

    let nearestIndex = 0;
    let nearestDistance = Infinity;
    pts.forEach((point, index) => {
      const distance = Math.abs(point.x - localX);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });
    this.hoveredIndex.set(nearestIndex);
  }

  onPointerLeave(): void {
    this.hoveredIndex.set(null);
  }

  tooltipX(pointX: number): number {
    const halfWidth = 58;
    return Math.min(Math.max(pointX, halfWidth + 4), this.viewWidth - halfWidth - 4);
  }

  formatCurrency(value: number): string {
    return this.currencyFormatter.format(value);
  }

  formatShortDate(isoDate: string): string {
    return this.shortDateFormatter.format(this.parseIsoDate(isoDate));
  }

  formatFullDate(isoDate: string): string {
    return this.fullDateFormatter.format(this.parseIsoDate(isoDate));
  }

  private parseIsoDate(value: string): Date {
    const [year, month, day] = value.split('-').map(Number);
    return new Date(year, month - 1, day);
  }
}
