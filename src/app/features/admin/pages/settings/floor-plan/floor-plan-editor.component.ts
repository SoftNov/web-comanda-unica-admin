import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, ViewChild, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import Konva from 'konva';
import { forkJoin } from 'rxjs';
import { RippleDirective } from '../../../../../shared/directives/ripple.directive';
import {
  ApiErrorResponse as FloorPlanApiErrorResponse,
  FloorPlanResponse,
  FloorPlansService
} from '../../../../../shared/services/floor-plans.service';
import {
  FloorPlanItemResponse,
  FloorPlanItemSyncPayload,
  FloorPlanItemType,
  FloorPlanItemsService
} from '../../../../../shared/services/floor-plan-items.service';
import { RestaurantTableResponse, TableStatus, TablesService } from '../../../../../shared/services/tables.service';

type TableShape = 'SQUARE' | 'ROUND' | 'RECTANGULAR';

interface PaletteEntry {
  itemType: FloorPlanItemType;
  shape?: TableShape;
  label: string;
  icon: string;
  defaultWidth: number;
  defaultHeight: number;
  defaultColor: string;
  defaultLabel?: string;
}

interface EditorItem {
  id: string | null;
  clientId: string;
  itemType: FloorPlanItemType;
  tableId?: string;
  tableNumber?: number;
  tableName?: string;
  tableCapacity?: number;
  tableStatus?: TableStatus;
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

interface PendingTableDrop {
  shape: TableShape;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
}

const GRID_SIZE = 10;
const MIN_ZOOM = 0.2;
const MAX_ZOOM = 3;

// Cada elemento arrastável da barra lateral. As três variantes de mesa não carregam
// tableId — ao soltar uma delas no canvas, o usuário escolhe qual mesa real do cadastro
// aquele objeto representa (a API exige tableId para itemType TABLE e cada mesa só pode
// estar posicionada em um único objeto de qualquer ambiente).
const PALETTE: PaletteEntry[] = [
  { itemType: 'TABLE', shape: 'SQUARE', label: 'Mesa Quadrada', icon: 'crop_square', defaultWidth: 70, defaultHeight: 70, defaultColor: '#c7d2fe' },
  { itemType: 'TABLE', shape: 'ROUND', label: 'Mesa Redonda', icon: 'circle', defaultWidth: 70, defaultHeight: 70, defaultColor: '#c7d2fe' },
  { itemType: 'TABLE', shape: 'RECTANGULAR', label: 'Mesa Retangular', icon: 'crop_landscape', defaultWidth: 110, defaultHeight: 60, defaultColor: '#c7d2fe' },
  { itemType: 'WALL', label: 'Parede', icon: 'view_column', defaultWidth: 160, defaultHeight: 14, defaultColor: '#334155' },
  { itemType: 'DOOR', label: 'Porta', icon: 'sensor_door', defaultWidth: 50, defaultHeight: 12, defaultColor: '#f59e0b', defaultLabel: 'Porta' },
  { itemType: 'CUSTOM', label: 'Caixa', icon: 'point_of_sale', defaultWidth: 60, defaultHeight: 50, defaultColor: '#64748b', defaultLabel: 'Caixa' },
  { itemType: 'BATHROOM', label: 'Banheiro', icon: 'wc', defaultWidth: 60, defaultHeight: 60, defaultColor: '#0ea5e9', defaultLabel: 'Banheiro' },
  { itemType: 'BAR', label: 'Bar', icon: 'local_bar', defaultWidth: 140, defaultHeight: 50, defaultColor: '#7c3aed', defaultLabel: 'Bar' },
  { itemType: 'KITCHEN', label: 'Cozinha', icon: 'kitchen', defaultWidth: 140, defaultHeight: 80, defaultColor: '#ef4444', defaultLabel: 'Cozinha' },
  { itemType: 'TEXT', label: 'Texto', icon: 'text_fields', defaultWidth: 120, defaultHeight: 30, defaultColor: '#111827', defaultLabel: 'Texto' },
  { itemType: 'IMAGE', label: 'Imagem/Logo', icon: 'image', defaultWidth: 100, defaultHeight: 100, defaultColor: '#e5e7eb' }
];

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

@Component({
  selector: 'app-admin-floor-plan-editor',
  standalone: true,
  imports: [RouterLink, RippleDirective],
  templateUrl: './floor-plan-editor.component.html',
  styleUrl: './floor-plan-editor.component.scss'
})
export class FloorPlanEditorComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvasContainer') private readonly canvasContainerRef!: ElementRef<HTMLDivElement>;

  private readonly route = inject(ActivatedRoute);
  private readonly floorPlansService = inject(FloorPlansService);
  private readonly floorPlanItemsService = inject(FloorPlanItemsService);
  private readonly tablesService = inject(TablesService);

  readonly palette = PALETTE;

  readonly floorPlan = signal<FloorPlanResponse | null>(null);
  readonly isLoading = signal(true);
  readonly loadError = signal<string | null>(null);

  readonly items = signal<EditorItem[]>([]);
  readonly availableTables = signal<RestaurantTableResponse[]>([]);
  readonly selectedClientId = signal<string | null>(null);
  readonly selectedItem = computed(() => this.items().find((item) => item.clientId === this.selectedClientId()) ?? null);
  readonly selectedIsLocked = computed(() => !!this.selectedItem()?.properties['locked']);

  readonly unplacedTables = computed(() => {
    const usedIds = new Set(this.items().map((item) => item.tableId).filter((id): id is string => !!id));
    return this.availableTables().filter((table) => !usedIds.has(table.id));
  });

  readonly zoom = signal(1);
  readonly zoomPercent = computed(() => Math.round(this.zoom() * 100));
  readonly isDirty = signal(false);
  readonly isSaving = signal(false);
  readonly saveError = signal<string | null>(null);
  readonly saveSuccess = signal(false);

  readonly pendingTableDrop = signal<PendingTableDrop | null>(null);
  readonly pendingTableSelection = signal('');

  private floorPlanId: string | null = null;
  private viewReady = false;
  private stage: Konva.Stage | null = null;
  private layer: Konva.Layer | null = null;
  private transformer: Konva.Transformer | null = null;
  private background: Konva.Rect | null = null;
  private readonly nodesByClientId = new Map<string, Konva.Group>();
  private clientIdCounter = 0;

  constructor() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.loadError.set('Ambiente inválido.');
      this.isLoading.set(false);
      return;
    }
    this.floorPlanId = id;
    this.loadAll(id);
  }

  ngAfterViewInit(): void {
    this.viewReady = true;
    this.tryInitStage();
  }

  ngOnDestroy(): void {
    this.stage?.destroy();
  }

  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event: BeforeUnloadEvent): void {
    if (this.isDirty()) {
      event.preventDefault();
      event.returnValue = '';
    }
  }

  // --- Carregamento --------------------------------------------------------
  private loadAll(floorPlanId: string): void {
    this.isLoading.set(true);
    this.loadError.set(null);

    forkJoin({
      floorPlan: this.floorPlansService.get(floorPlanId),
      items: this.floorPlanItemsService.list(floorPlanId),
      tables: this.tablesService.list({ status: 'ACTIVE', page: 0, size: 200, sortBy: 'number', sortDirection: 'ASC' })
    }).subscribe({
      next: ({ floorPlan, items, tables }) => {
        this.floorPlan.set(floorPlan);
        this.availableTables.set(tables.content);
        this.items.set(items.map((item) => this.toEditorItem(item, tables.content)));
        this.isLoading.set(false);
        this.tryInitStage();
      },
      error: () => {
        this.isLoading.set(false);
        this.loadError.set('Não foi possível carregar o ambiente.');
      }
    });
  }

  private toEditorItem(response: FloorPlanItemResponse, tables: RestaurantTableResponse[]): EditorItem {
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
      id: response.id,
      clientId: this.generateClientId(),
      itemType: response.itemType,
      tableId: response.tableId,
      tableNumber: table?.number ?? response.tableNumber,
      tableName: table?.name,
      tableCapacity: table?.capacity,
      tableStatus: table?.status,
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

  // --- Konva: inicialização --------------------------------------------------
  private tryInitStage(): void {
    const plan = this.floorPlan();
    if (!this.viewReady || !plan || this.stage) {
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

    this.background = new Konva.Rect({
      x: 0,
      y: 0,
      width: plan.width,
      height: plan.height,
      fill: plan.backgroundColor || '#ffffff',
      listening: false,
      name: '__background'
    });
    this.layer.add(this.background);

    this.transformer = new Konva.Transformer({
      rotateEnabled: true,
      enabledAnchors: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      boundBoxFunc: (oldBox, newBox) => (newBox.width < 20 || newBox.height < 20 ? oldBox : newBox)
    });
    this.layer.add(this.transformer);

    this.stage.on('click tap', (event) => {
      if (event.target === this.stage || event.target.name() === '__background') {
        this.selectItem(null);
      }
    });

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

    for (const item of this.items()) {
      this.createNode(item);
    }
    this.layer.batchDraw();
  }

  // --- Konva: nós dos objetos --------------------------------------------------
  private createNode(item: EditorItem): Konva.Group {
    const locked = !!item.properties['locked'];
    const group = new Konva.Group({
      x: item.x,
      y: item.y,
      rotation: item.rotation,
      draggable: !locked,
      name: 'editor-item'
    });
    group.setAttr('clientId', item.clientId);

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
          fill: this.contrastColor(item.color),
          listening: false
        })
      );
    }

    group.on('click tap', () => this.selectItem(item.clientId));
    group.on('dragmove', () => this.syncItemFromNode(item.clientId, group, false, false));
    group.on('dragend', () => {
      this.syncItemFromNode(item.clientId, group, false, true);
      this.markDirty();
    });
    group.on('transform', () => this.syncItemFromNode(item.clientId, group, true, false));
    group.on('transformend', () => {
      this.syncItemFromNode(item.clientId, group, true, true);
      this.markDirty();
    });

    this.layer!.add(group);
    this.nodesByClientId.set(item.clientId, group);
    return group;
  }

  private buildShape(item: EditorItem): Konva.Shape {
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
      const placeholder = new Konva.Rect({
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
          const group = this.nodesByClientId.get(item.clientId);
          if (!group) {
            return;
          }
          const konvaImage = new Konva.Image({ image: imageObj, width: item.width, height: item.height, listening: false });
          placeholder.destroy();
          group.add(konvaImage);
          konvaImage.moveToBottom();
          this.layer?.batchDraw();
        };
        imageObj.src = url;
      }
      return placeholder;
    }

    let cornerRadius = 4;
    if (item.itemType === 'TABLE' && item.properties['shape'] === 'ROUND') {
      cornerRadius = Math.min(item.width, item.height) / 2;
    }

    return new Konva.Rect({
      width: item.width,
      height: item.height,
      fill: item.color || DEFAULT_COLORS[item.itemType] || '#94a3b8',
      stroke: 'rgba(0,0,0,0.25)',
      strokeWidth: 1,
      cornerRadius,
      dash: item.itemType === 'DOOR' ? [6, 4] : undefined
    });
  }

  private labelFor(item: EditorItem): string {
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

  private resizeShapeChildren(group: Konva.Group, width: number, height: number, item: EditorItem): void {
    group.getChildren().forEach((child) => {
      if (child instanceof Konva.Rect || child instanceof Konva.Image) {
        child.width(width);
        child.height(height);
        if (child instanceof Konva.Rect && item.itemType === 'TABLE' && item.properties['shape'] === 'ROUND') {
          child.cornerRadius(Math.min(width, height) / 2);
        }
      } else if (child instanceof Konva.Text) {
        child.width(width);
        child.height(height);
      }
    });
    this.layer?.batchDraw();
  }

  private syncItemFromNode(clientId: string, group: Konva.Group, isTransform: boolean, commit: boolean): void {
    const item = this.items().find((candidate) => candidate.clientId === clientId);
    if (!item) {
      return;
    }

    let width = item.width;
    let height = item.height;
    if (isTransform) {
      width = Math.max(20, Math.round(item.width * group.scaleX()));
      height = Math.max(20, Math.round(item.height * group.scaleY()));
      group.scale({ x: 1, y: 1 });
      this.resizeShapeChildren(group, width, height, item);
    }

    let x = group.x();
    let y = group.y();
    if (commit) {
      x = this.snap(x);
      y = this.snap(y);
      group.position({ x, y });
      if (isTransform) {
        width = this.snap(width);
        height = this.snap(height);
        this.resizeShapeChildren(group, width, height, item);
      }
    }

    const updated: EditorItem = {
      ...item,
      x: Math.round(x),
      y: Math.round(y),
      width,
      height,
      rotation: Math.round(group.rotation() * 100) / 100
    };
    this.items.update((list) => list.map((candidate) => (candidate.clientId === clientId ? updated : candidate)));
  }

  // --- Seleção ---------------------------------------------------------------
  private selectItem(clientId: string | null): void {
    this.selectedClientId.set(clientId);
    if (!this.transformer) {
      return;
    }
    const item = clientId ? this.items().find((candidate) => candidate.clientId === clientId) : null;
    const node = clientId ? this.nodesByClientId.get(clientId) : undefined;
    if (node && item && !item.properties['locked']) {
      this.transformer.nodes([node]);
    } else {
      this.transformer.nodes([]);
    }
    this.layer?.batchDraw();
  }

  selectFromList(clientId: string): void {
    this.selectItem(clientId);
  }

  // --- Adição de elementos -----------------------------------------------------
  onPaletteDragStart(event: DragEvent, entry: PaletteEntry): void {
    event.dataTransfer?.setData('text/plain', JSON.stringify(entry));
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'copy';
    }
  }

  addFromPaletteClick(entry: PaletteEntry): void {
    const center = this.stageCenter();
    this.handleNewElement(entry, center.x, center.y);
  }

  onCanvasDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onCanvasDrop(event: DragEvent): void {
    event.preventDefault();
    const raw = event.dataTransfer?.getData('text/plain');
    if (!raw || !this.stage) {
      return;
    }
    let entry: PaletteEntry;
    try {
      entry = JSON.parse(raw) as PaletteEntry;
    } catch {
      return;
    }

    const rect = this.canvasContainerRef.nativeElement.getBoundingClientRect();
    const x = (event.clientX - rect.left - this.stage.x()) / this.stage.scaleX();
    const y = (event.clientY - rect.top - this.stage.y()) / this.stage.scaleY();
    this.handleNewElement(entry, x, y);
  }

  private handleNewElement(entry: PaletteEntry, centerX: number, centerY: number): void {
    if (entry.itemType === 'TABLE') {
      this.pendingTableDrop.set({
        shape: entry.shape ?? 'SQUARE',
        x: centerX,
        y: centerY,
        width: entry.defaultWidth,
        height: entry.defaultHeight,
        color: entry.defaultColor
      });
      return;
    }
    this.addItem(entry, centerX, centerY);
  }

  private addItem(entry: PaletteEntry, centerX: number, centerY: number): void {
    const clientId = this.generateClientId();
    const item: EditorItem = {
      id: null,
      clientId,
      itemType: entry.itemType,
      x: this.snap(centerX - entry.defaultWidth / 2),
      y: this.snap(centerY - entry.defaultHeight / 2),
      width: entry.defaultWidth,
      height: entry.defaultHeight,
      rotation: 0,
      zIndex: this.nextZIndex(),
      color: entry.defaultColor,
      label: entry.defaultLabel,
      properties: {}
    };
    this.items.update((list) => [...list, item]);
    this.createNode(item);
    this.selectItem(clientId);
    this.markDirty();
  }

  confirmTableDrop(): void {
    const pending = this.pendingTableDrop();
    const table = this.availableTables().find((candidate) => candidate.id === this.pendingTableSelection());
    if (!pending || !table) {
      return;
    }

    const clientId = this.generateClientId();
    const item: EditorItem = {
      id: null,
      clientId,
      itemType: 'TABLE',
      tableId: table.id,
      tableNumber: table.number,
      tableName: table.name,
      tableCapacity: table.capacity,
      tableStatus: table.status,
      x: this.snap(pending.x - pending.width / 2),
      y: this.snap(pending.y - pending.height / 2),
      width: pending.width,
      height: pending.height,
      rotation: 0,
      zIndex: this.nextZIndex(),
      color: pending.color,
      properties: { shape: pending.shape }
    };
    this.items.update((list) => [...list, item]);
    this.createNode(item);
    this.selectItem(clientId);
    this.markDirty();
    this.pendingTableDrop.set(null);
    this.pendingTableSelection.set('');
  }

  setPendingTableSelection(value: string): void {
    this.pendingTableSelection.set(value);
  }

  cancelTableDrop(): void {
    this.pendingTableDrop.set(null);
    this.pendingTableSelection.set('');
  }

  private stageCenter(): { x: number; y: number } {
    if (!this.stage) {
      return { x: 200, y: 200 };
    }
    return {
      x: (this.stage.width() / 2 - this.stage.x()) / this.stage.scaleX(),
      y: (this.stage.height() / 2 - this.stage.y()) / this.stage.scaleY()
    };
  }

  // --- Painel de propriedades ---------------------------------------------------
  updateSelectedItem(patch: Partial<EditorItem>): void {
    const item = this.selectedItem();
    if (!item) {
      return;
    }
    const updated: EditorItem = { ...item, ...patch };
    this.items.update((list) => list.map((candidate) => (candidate.clientId === item.clientId ? updated : candidate)));
    this.applyItemToNode(updated);
    this.markDirty();
  }

  updateSelectedItemProperty(key: string, value: unknown): void {
    const item = this.selectedItem();
    if (!item) {
      return;
    }
    this.updateSelectedItem({ properties: { ...item.properties, [key]: value } });
  }

  onNumberFieldChange(field: 'x' | 'y' | 'width' | 'height' | 'rotation', rawValue: string): void {
    const value = Number(rawValue);
    if (Number.isNaN(value)) {
      return;
    }
    if (field === 'rotation') {
      this.updateSelectedItem({ rotation: ((value % 360) + 360) % 360 });
      return;
    }
    this.updateSelectedItem({ [field]: value } as Partial<EditorItem>);
  }

  onColorFieldChange(value: string): void {
    this.updateSelectedItem({ color: value });
  }

  onLabelFieldChange(value: string): void {
    this.updateSelectedItem({ label: value });
  }

  onShapeFieldChange(value: string): void {
    this.updateSelectedItemProperty('shape', value);
  }

  onImageUrlFieldChange(value: string): void {
    this.updateSelectedItemProperty('imageUrl', value);
  }

  private applyItemToNode(item: EditorItem): void {
    const existing = this.nodesByClientId.get(item.clientId);
    const wasSelected = this.selectedClientId() === item.clientId;
    existing?.destroy();
    this.createNode(item);
    if (wasSelected) {
      this.selectItem(item.clientId);
    }
    this.layer?.batchDraw();
  }

  // --- Ações do objeto selecionado -----------------------------------------------
  duplicateSelected(): void {
    const item = this.selectedItem();
    if (!item || item.itemType === 'TABLE') {
      return;
    }
    const clientId = this.generateClientId();
    const copy: EditorItem = { ...item, id: null, clientId, x: item.x + 20, y: item.y + 20, zIndex: this.nextZIndex() };
    this.items.update((list) => [...list, copy]);
    this.createNode(copy);
    this.selectItem(clientId);
    this.markDirty();
  }

  deleteSelected(): void {
    const item = this.selectedItem();
    if (!item) {
      return;
    }
    this.nodesByClientId.get(item.clientId)?.destroy();
    this.nodesByClientId.delete(item.clientId);
    this.items.update((list) => list.filter((candidate) => candidate.clientId !== item.clientId));
    this.selectItem(null);
    this.markDirty();
    this.layer?.batchDraw();
  }

  toggleLockSelected(): void {
    const item = this.selectedItem();
    if (!item) {
      return;
    }
    const locked = !item.properties['locked'];
    this.updateSelectedItemProperty('locked', locked);
    if (locked) {
      this.selectItem(null);
    }
  }

  bringToFront(): void {
    const item = this.selectedItem();
    if (!item) {
      return;
    }
    const maxZ = this.items().reduce((max, candidate) => Math.max(max, candidate.zIndex), 0);
    this.updateSelectedItem({ zIndex: maxZ + 1 });
    this.nodesByClientId.get(item.clientId)?.moveToTop();
    this.layer?.batchDraw();
  }

  sendToBack(): void {
    const item = this.selectedItem();
    if (!item) {
      return;
    }
    const minZ = this.items().reduce((min, candidate) => Math.min(min, candidate.zIndex), 0);
    this.updateSelectedItem({ zIndex: minZ - 1 });
    this.nodesByClientId.get(item.clientId)?.moveToBottom();
    this.background?.moveToBottom();
    this.layer?.batchDraw();
  }

  // --- Zoom -----------------------------------------------------------------------
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

  // --- Salvar -----------------------------------------------------------------------
  saveLayout(): void {
    const plan = this.floorPlan();
    if (!plan) {
      return;
    }

    this.isSaving.set(true);
    this.saveError.set(null);
    this.saveSuccess.set(false);

    const payload: FloorPlanItemSyncPayload[] = this.items().map((item) => ({
      id: item.id ?? undefined,
      itemType: item.itemType,
      tableId: item.itemType === 'TABLE' ? item.tableId : undefined,
      x: item.x,
      y: item.y,
      width: item.width,
      height: item.height,
      rotation: item.rotation,
      zIndex: item.zIndex,
      color: item.color || undefined,
      label: item.itemType === 'TABLE' ? undefined : item.label || undefined,
      propertiesJson: Object.keys(item.properties).length > 0 ? JSON.stringify(item.properties) : undefined
    }));

    this.floorPlanItemsService.syncLayout(plan.id, payload).subscribe({
      next: () => {
        this.isSaving.set(false);
        this.isDirty.set(false);
        this.saveSuccess.set(true);
        this.reloadAfterSave(plan.id);
      },
      error: (error: HttpErrorResponse) => {
        this.isSaving.set(false);
        this.saveError.set(this.resolveErrorMessage(error));
      }
    });
  }

  private reloadAfterSave(floorPlanId: string): void {
    this.floorPlanItemsService.list(floorPlanId).subscribe({
      next: (responses) => {
        this.nodesByClientId.forEach((node) => node.destroy());
        this.nodesByClientId.clear();
        this.selectItem(null);
        const editorItems = responses.map((response) => this.toEditorItem(response, this.availableTables()));
        this.items.set(editorItems);
        for (const item of editorItems) {
          this.createNode(item);
        }
        this.layer?.batchDraw();
      },
      error: () => {
        // O layout já foi salvo com sucesso; uma falha aqui só significa que os ids locais
        // ficam desatualizados até o próximo carregamento — não é um erro para o usuário.
      }
    });
  }

  // --- Utilitários -------------------------------------------------------------------
  private nextZIndex(): number {
    return this.items().reduce((max, item) => Math.max(max, item.zIndex), 0) + 1;
  }

  private generateClientId(): string {
    this.clientIdCounter += 1;
    return `local-${this.clientIdCounter}`;
  }

  private markDirty(): void {
    this.isDirty.set(true);
    this.saveSuccess.set(false);
  }

  private snap(value: number): number {
    return Math.round(value / GRID_SIZE) * GRID_SIZE;
  }

  private resolveErrorMessage(error: HttpErrorResponse): string {
    const body = error.error as FloorPlanApiErrorResponse | undefined;
    if (body?.mensagem) {
      return body.mensagem;
    }
    if (body?.titulo) {
      return body.titulo;
    }
    if (error.status === 409) {
      return 'Uma das mesas do layout já está posicionada em outro ambiente. Atualize a página e tente novamente.';
    }
    if (error.status === 422) {
      return 'Verifique os objetos do mapa: toda mesa precisa estar vinculada a uma mesa cadastrada.';
    }
    if (error.status === 404) {
      return 'Ambiente ou mesa não encontrada nesta empresa.';
    }
    if (error.status === 403) {
      return 'Você não tem permissão para editar este ambiente.';
    }
    return 'Não foi possível salvar o layout. Tente novamente em instantes.';
  }
}
