import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges, ViewChild, computed, inject, signal } from '@angular/core';
import Konva from 'konva';
import { forkJoin } from 'rxjs';
import { FloorPlanItemResponse, FloorPlanItemType, FloorPlanItemsService } from '../../services/floor-plan-items.service';
import { FloorPlanResponse, FloorPlansService } from '../../services/floor-plans.service';
import { RestaurantTableResponse, TableOperationalStatus, TablesService } from '../../services/tables.service';

interface ViewerItem {
  itemType: FloorPlanItemType;
  tableNumber?: number;
  tableName?: string;
  operationalStatus?: TableOperationalStatus;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  zIndex: number;
  color?: string;
  label?: string;
  properties: Record<string, unknown>;
}

const DEFAULT_COLORS: Partial<Record<FloorPlanItemType, string>> = {
  TABLE: '#c7d2fe',
  WALL: '#334155',
  DOOR: '#f59e0b',
  BAR: '#7c3aed',
  KITCHEN: '#ef4444',
  BATHROOM: '#0ea5e9',
  CUSTOM: '#64748b',
  TEXT: '#111827',
  IMAGE: '#e5e7eb'
};

// Cor da mesa no mapa reflete o status operacional em tempo real, não a cor
// configurada no editor — é isso que dá utilidade a essa visão somente leitura.
const TABLE_STATUS_COLORS: Record<TableOperationalStatus, string> = {
  FREE: '#22c55e',
  OCCUPIED: '#ef4444',
  RESERVED: '#f59e0b',
  CLEANING: '#94a3b8'
};

const MIN_ZOOM = 0.2;
const MAX_ZOOM = 3;

@Component({
  selector: 'app-floor-plan-viewer',
  standalone: true,
  templateUrl: './floor-plan-viewer.component.html',
  styleUrl: './floor-plan-viewer.component.scss'
})
export class FloorPlanViewerComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input({ required: true }) floorPlanId!: string;

  @ViewChild('canvasContainer') private readonly canvasContainerRef!: ElementRef<HTMLDivElement>;

  private readonly floorPlansService = inject(FloorPlansService);
  private readonly floorPlanItemsService = inject(FloorPlanItemsService);
  private readonly tablesService = inject(TablesService);

  readonly floorPlan = signal<FloorPlanResponse | null>(null);
  readonly isLoading = signal(true);
  readonly loadError = signal<string | null>(null);
  readonly zoom = signal(1);
  readonly zoomPercent = computed(() => Math.round(this.zoom() * 100));

  private items: ViewerItem[] = [];
  private viewReady = false;
  private stage: Konva.Stage | null = null;
  private layer: Konva.Layer | null = null;

  ngAfterViewInit(): void {
    this.viewReady = true;
    if (this.floorPlanId) {
      this.load();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['floorPlanId'] && !changes['floorPlanId'].firstChange && this.viewReady) {
      this.load();
    }
  }

  ngOnDestroy(): void {
    this.stage?.destroy();
  }

  zoomIn(): void {
    this.setZoom(this.zoom() * 1.2);
  }

  zoomOut(): void {
    this.setZoom(this.zoom() / 1.2);
  }

  resetZoom(): void {
    this.zoom.set(1);
    this.stage?.scale({ x: 1, y: 1 });
    this.stage?.position({ x: 0, y: 0 });
    this.stage?.batchDraw();
  }

  private setZoom(value: number): void {
    const clamped = Math.min(Math.max(value, MIN_ZOOM), MAX_ZOOM);
    this.zoom.set(clamped);
    this.stage?.scale({ x: clamped, y: clamped });
    this.stage?.batchDraw();
  }

  private load(): void {
    this.stage?.destroy();
    this.stage = null;
    this.layer = null;
    this.isLoading.set(true);
    this.loadError.set(null);
    this.zoom.set(1);

    forkJoin({
      floorPlan: this.floorPlansService.get(this.floorPlanId),
      items: this.floorPlanItemsService.list(this.floorPlanId),
      tables: this.tablesService.list({ status: 'ACTIVE', page: 0, size: 200, sortBy: 'number', sortDirection: 'ASC' })
    }).subscribe({
      next: ({ floorPlan, items, tables }) => {
        this.floorPlan.set(floorPlan);
        this.items = items.map((item) => this.toViewerItem(item, tables.content));
        this.isLoading.set(false);
        this.initStage();
      },
      error: () => {
        this.isLoading.set(false);
        this.loadError.set('Não foi possível carregar o mapa do ambiente.');
      }
    });
  }

  private toViewerItem(response: FloorPlanItemResponse, tables: RestaurantTableResponse[]): ViewerItem {
    const table = response.tableId ? tables.find((candidate) => candidate.id === response.tableId) : undefined;
    let properties: Record<string, unknown> = {};
    if (response.propertiesJson) {
      try {
        properties = JSON.parse(response.propertiesJson) as Record<string, unknown>;
      } catch {
        properties = {};
      }
    }
    return {
      itemType: response.itemType,
      tableNumber: table?.number ?? response.tableNumber,
      tableName: table?.name,
      operationalStatus: table?.operationalStatus,
      x: response.x,
      y: response.y,
      width: response.width,
      height: response.height,
      rotation: response.rotation,
      zIndex: response.zIndex,
      color: response.color,
      label: response.label,
      properties
    };
  }

  private initStage(): void {
    const plan = this.floorPlan();
    if (!this.viewReady || !plan || !this.canvasContainerRef) {
      return;
    }

    this.stage = new Konva.Stage({
      container: this.canvasContainerRef.nativeElement,
      width: plan.width,
      height: plan.height,
      draggable: true
    });

    this.layer = new Konva.Layer();
    this.stage.add(this.layer);

    this.layer.add(
      new Konva.Rect({
        x: 0,
        y: 0,
        width: plan.width,
        height: plan.height,
        fill: plan.backgroundColor || '#ffffff',
        listening: false
      })
    );

    this.stage.on('wheel', (event) => {
      event.evt.preventDefault();
      const pointer = this.stage!.getPointerPosition();
      if (!pointer) {
        return;
      }
      const oldScale = this.stage!.scaleX();
      const mousePointTo = { x: (pointer.x - this.stage!.x()) / oldScale, y: (pointer.y - this.stage!.y()) / oldScale };
      const direction = event.evt.deltaY > 0 ? -1 : 1;
      const scaleBy = 1.05;
      const newScale = Math.min(Math.max(direction > 0 ? oldScale * scaleBy : oldScale / scaleBy, MIN_ZOOM), MAX_ZOOM);
      this.stage!.scale({ x: newScale, y: newScale });
      this.stage!.position({ x: pointer.x - mousePointTo.x * newScale, y: pointer.y - mousePointTo.y * newScale });
      this.zoom.set(newScale);
      this.stage!.batchDraw();
    });

    for (const item of this.items) {
      this.createNode(item);
    }
    this.layer.batchDraw();
  }

  private createNode(item: ViewerItem): void {
    const group = new Konva.Group({
      x: item.x,
      y: item.y,
      rotation: item.rotation,
      listening: false
    });

    group.add(this.buildShape(item));

    const labelText = this.labelFor(item);
    if (item.itemType !== 'TEXT' && labelText) {
      group.add(
        new Konva.Text({
          text: labelText,
          width: item.width,
          height: item.height,
          align: 'center',
          verticalAlign: 'middle',
          fontSize: 12,
          fontStyle: 'bold',
          fill: this.contrastColor(item.itemType === 'TABLE' ? this.tableColor(item) : item.color),
          listening: false
        })
      );
    }

    this.layer!.add(group);
  }

  private buildShape(item: ViewerItem): Konva.Shape {
    if (item.itemType === 'TEXT') {
      return new Konva.Text({
        text: item.label || 'Texto',
        width: item.width,
        height: item.height,
        fontSize: Number(item.properties['fontSize']) || 16,
        fill: item.color || '#111827'
      });
    }

    if (item.itemType === 'IMAGE') {
      const rect = new Konva.Rect({
        width: item.width,
        height: item.height,
        fill: '#e5e7eb',
        stroke: '#94a3b8',
        strokeWidth: 1,
        dash: [6, 4]
      });
      const url = typeof item.properties['imageUrl'] === 'string' ? (item.properties['imageUrl'] as string) : '';
      if (url) {
        const imageObj = new Image();
        imageObj.crossOrigin = 'anonymous';
        imageObj.onload = () => {
          const konvaImage = new Konva.Image({ image: imageObj, width: item.width, height: item.height, listening: false });
          rect.getParent()?.add(konvaImage);
          konvaImage.moveToBottom();
          this.layer?.batchDraw();
        };
        imageObj.src = url;
      }
      return rect;
    }

    let cornerRadius = 4;
    if (item.itemType === 'TABLE' && item.properties['shape'] === 'ROUND') {
      cornerRadius = Math.min(item.width, item.height) / 2;
    }

    return new Konva.Rect({
      width: item.width,
      height: item.height,
      fill: item.itemType === 'TABLE' ? this.tableColor(item) : item.color || DEFAULT_COLORS[item.itemType] || '#94a3b8',
      stroke: 'rgba(0,0,0,0.25)',
      strokeWidth: 1,
      cornerRadius,
      dash: item.itemType === 'DOOR' ? [6, 4] : undefined
    });
  }

  private tableColor(item: ViewerItem): string {
    return (item.operationalStatus && TABLE_STATUS_COLORS[item.operationalStatus]) || item.color || DEFAULT_COLORS['TABLE']!;
  }

  private labelFor(item: ViewerItem): string {
    if (item.itemType === 'TABLE') {
      return item.tableName ? `Mesa ${item.tableNumber ?? '?'}\n${item.tableName}` : `Mesa ${item.tableNumber ?? '?'}`;
    }
    return item.label || '';
  }

  private contrastColor(hex?: string): string {
    if (!hex || hex.replace('#', '').length !== 6) {
      return '#111827';
    }
    const value = hex.replace('#', '');
    const r = parseInt(value.substring(0, 2), 16);
    const g = parseInt(value.substring(2, 4), 16);
    const b = parseInt(value.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.6 ? '#111827' : '#ffffff';
  }
}
