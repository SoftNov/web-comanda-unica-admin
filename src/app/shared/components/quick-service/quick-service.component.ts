import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, computed, effect, inject, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConsumptionPassesService } from '../../services/consumption-passes.service';
import { QrTarget, QrTargetResolverService } from '../../services/qr-target-resolver.service';
import { RestaurantTableResponse, TableOperationalStatus, TablesService } from '../../services/tables.service';
import { RippleDirective } from '../../directives/ripple.directive';
import { QrScannerComponent } from '../qr-scanner/qr-scanner.component';
import { COUNTER_TABLE_LABEL, formatTableLabel } from '../../utils/table-label.util';

type QuickServiceMode = 'table' | 'pass';
type TableFilter = 'ALL' | 'FREE' | 'OCCUPIED';

// Último modo usado (mesa/cartão) — conveniência por aparelho, só no navegador.
const MODE_STORAGE_KEY = 'quick-service:mode';

const STATUS_LABELS: Record<TableOperationalStatus, string> = {
  FREE: 'Livre',
  OCCUPIED: 'Ocupada',
  RESERVED: 'Reservada',
  CLEANING: 'Limpeza'
};

// "Atendimento" da home do garçom/caixa: chega na mesa ou no cartão de consumo do cliente (lendo o
// QR Code — da mesa ou do cartão, detectado sozinho — ou escolhendo/digitando) e daí lança pedido
// ou abre a comanda, sem passar pelo menu Comandas. As telas de destino são as mesmas de sempre
// (LancarPedidoComponent e ComandaMesaComponent), via ?mesa= e ?cartao=.
@Component({
  selector: 'app-quick-service',
  standalone: true,
  imports: [FormsModule, RippleDirective, QrScannerComponent],
  templateUrl: './quick-service.component.html',
  styleUrl: './quick-service.component.scss'
})
export class QuickServiceComponent {
  private readonly tablesService = inject(TablesService);
  private readonly resolver = inject(QrTargetResolverService);
  private readonly router = inject(Router);
  readonly consumptionPassesService = inject(ConsumptionPassesService);

  readonly passEnabled = this.consumptionPassesService.enabled;

  readonly tables = signal<RestaurantTableResponse[]>([]);
  readonly tablesLoading = signal(true);
  readonly tablesError = signal(false);
  readonly mode = signal<QuickServiceMode>(this.readStoredMode());
  readonly isScanning = signal(false);
  readonly isResolving = signal(false);
  readonly error = signal<string | null>(null);

  readonly selectedTableId = signal('');
  readonly passInput = signal('');

  readonly target = signal<QrTarget | null>(null);

  // Grade de mesas: busca por número/nome/setor + filtro rápido por status.
  readonly tableSearch = signal('');
  readonly tableFilter = signal<TableFilter>('ALL');
  readonly filteredTables = computed(() => {
    const term = this.tableSearch().trim().toLowerCase();
    const filter = this.tableFilter();
    return this.tables().filter((table) => {
      if (filter === 'FREE' && table.operationalStatus !== 'FREE') {
        return false;
      }
      if (filter === 'OCCUPIED' && table.operationalStatus !== 'OCCUPIED') {
        return false;
      }
      if (!term) {
        return true;
      }
      return (
        String(table.number) === term ||
        String(table.number).startsWith(term) ||
        (table.name ?? '').toLowerCase().includes(term) ||
        (table.sectorName ?? '').toLowerCase().includes(term)
      );
    });
  });
  readonly occupiedCount = computed(() => this.tables().filter((table) => table.operationalStatus === 'OCCUPIED').length);
  readonly freeCount = computed(() => this.tables().filter((table) => table.operationalStatus === 'FREE').length);

  private readonly passInputRef = viewChild<ElementRef<HTMLInputElement>>('passInputEl');

  // Retirada no balcão (cartão de consumo ligado): mesa virtual do balcão — ver TablesService#getCounter.
  readonly counterTable = signal<RestaurantTableResponse | null>(null);
  readonly counterLabel = COUNTER_TABLE_LABEL;
  readonly canLaunchAtCounter = computed(() => {
    const target = this.target();
    const counter = this.counterTable();
    return !!counter && target?.kind === 'pass' && target.pass.tableId !== counter.id;
  });

  // Comanda só existe para mesa, ou cartão em uso (vinculado a uma mesa). Cartão livre ainda pode
  // receber pedido: a tela de lançar pedido pede a mesa e vincula o cartão nela.
  readonly canOpenComanda = computed(() => {
    const target = this.target();
    if (!target) {
      return false;
    }
    return target.kind === 'table' || (target.pass.status === 'IN_USE' && !!target.pass.tableId);
  });

  constructor() {
    this.consumptionPassesService.refreshEnabled();
    this.consumptionPassesService.getSettings().subscribe({
      next: (settings) => {
        if (settings.required) {
          this.tablesService.getCounter().subscribe({
            next: (counter) => this.counterTable.set(counter),
            error: () => this.counterTable.set(null)
          });
        }
      },
      error: () => this.counterTable.set(null)
    });
    this.loadTables();

    // Modo cartão: cursor já no campo — leitor USB "digita" o código direto. Só com mouse
    // (caixa no computador): no celular o foco abriria o teclado por cima da tela.
    effect(() => {
      if (this.mode() === 'pass' && !this.target() && !this.isScanning() && this.hasFinePointer()) {
        queueMicrotask(() => this.passInputRef()?.nativeElement.focus());
      }
    });
  }

  loadTables(): void {
    this.tablesLoading.set(true);
    this.tablesError.set(false);
    this.tablesService.list({ status: 'ACTIVE', page: 0, size: 200, sortBy: 'number', sortDirection: 'ASC' }).subscribe({
      next: (response) => {
        this.tables.set(response.content);
        this.tablesLoading.set(false);
      },
      error: () => {
        this.tables.set([]);
        this.tablesLoading.set(false);
        this.tablesError.set(true);
      }
    });
  }

  setMode(mode: QuickServiceMode): void {
    this.mode.set(mode);
    this.storeMode(mode);
    this.error.set(null);
    this.isScanning.set(false);
    this.scanToCounter = false;
  }

  startScan(): void {
    this.error.set(null);
    this.target.set(null);
    this.isScanning.set(true);
  }

  onScanned(value: string): void {
    this.isScanning.set(false);
    const toCounter = this.scanToCounter;
    this.scanToCounter = false;
    this.resolve(this.resolver.resolveScan(value, this.tables()), (target) => {
      if (toCounter && target.kind === 'pass') {
        this.goToCounterMenu(target.pass.token);
      }
    });
  }

  // "Retirada no balcão" direto no modo cartão: vincula o cartão (digitado ou, sem nada digitado,
  // lido pela câmera) à mesa virtual do balcão e já abre o cardápio do lançamento — a tela de
  // lançar pedido vincula o cartão sozinha via ?cartao= (ver LancarPedidoComponent).
  private scanToCounter = false;

  linkPassToCounter(): void {
    if (!this.counterTable() || this.isResolving()) {
      return;
    }
    if (!this.passInput().trim()) {
      this.scanToCounter = true;
      this.startScan();
      return;
    }
    this.resolve(this.resolver.resolvePass(this.passInput(), this.tables()), (target) => {
      if (target.kind === 'pass') {
        this.goToCounterMenu(target.pass.token);
      }
    });
  }

  private goToCounterMenu(passToken: string): void {
    const counter = this.counterTable();
    if (!counter) {
      return;
    }
    this.router.navigate(['/painel/comandas/lancar-pedido'], {
      queryParams: { mesa: counter.id, cartao: passToken }
    });
  }

  selectTable(tableId: string): void {
    this.selectedTableId.set(tableId);
    this.error.set(null);
    const table = this.tables().find((item) => item.id === tableId);
    this.target.set(table ? { kind: 'table', table } : null);
  }

  searchPass(): void {
    if (!this.passInput().trim() || this.isResolving()) {
      return;
    }
    this.resolve(this.resolver.resolvePass(this.passInput(), this.tables()));
  }

  clearTarget(): void {
    this.target.set(null);
    this.selectedTableId.set('');
    this.passInput.set('');
    this.error.set(null);
    // Status das mesas muda o tempo todo — ao voltar para a escolha, recarrega.
    this.loadTables();
  }

  statusLabel(table: RestaurantTableResponse): string {
    return STATUS_LABELS[table.operationalStatus] ?? STATUS_LABELS.FREE;
  }

  statusClass(table: RestaurantTableResponse): string {
    return 'qs-status--' + (table.operationalStatus || 'FREE').toLowerCase();
  }

  launchOrder(): void {
    const target = this.target();
    if (!target) {
      return;
    }
    const queryParams =
      target.kind === 'table'
        ? { mesa: target.table.id }
        : { mesa: target.pass.tableId || null, cartao: target.pass.token };
    this.router.navigate(['/painel/comandas/lancar-pedido'], { queryParams });
  }

  // Cartão com retirada no balcão: lança na comanda do cartão vinculada à mesa virtual do balcão.
  launchAtCounter(): void {
    const target = this.target();
    const counter = this.counterTable();
    if (!counter || target?.kind !== 'pass') {
      return;
    }
    this.goToCounterMenu(target.pass.token);
  }

  openComanda(): void {
    const target = this.target();
    if (!target || !this.canOpenComanda()) {
      return;
    }
    if (target.kind === 'table') {
      this.router.navigate(['/painel/comandas/lancar-pedido/comanda', target.table.id]);
      return;
    }
    this.router.navigate(['/painel/comandas/lancar-pedido/comanda', target.pass.tableId], {
      queryParams: { cartao: target.pass.token }
    });
  }

  tableLabel(table: RestaurantTableResponse | null | undefined): string {
    if (!table) {
      return '';
    }
    return formatTableLabel(table.number, table.name);
  }

  passTableLabel(tableNumber: number | undefined, tableName: string | undefined): string {
    return formatTableLabel(tableNumber, tableName);
  }

  private resolve(request$: Observable<QrTarget>, onResolved?: (target: QrTarget) => void): void {
    this.isResolving.set(true);
    this.error.set(null);
    this.target.set(null);
    request$.subscribe({
      next: (target) => {
        this.isResolving.set(false);
        this.target.set(target);
        this.mode.set(target.kind);
        this.storeMode(target.kind);
        if (target.kind === 'table') {
          this.selectedTableId.set(target.table.id);
        }
        onResolved?.(target);
      },
      error: (error: unknown) => {
        this.isResolving.set(false);
        this.error.set(this.resolveErrorMessage(error));
      }
    });
  }

  private hasFinePointer(): boolean {
    return typeof matchMedia === 'function' && matchMedia('(pointer: fine)').matches;
  }

  private readStoredMode(): QuickServiceMode {
    try {
      return localStorage.getItem(MODE_STORAGE_KEY) === 'pass' ? 'pass' : 'table';
    } catch {
      return 'table';
    }
  }

  private storeMode(mode: QuickServiceMode): void {
    try {
      localStorage.setItem(MODE_STORAGE_KEY, mode);
    } catch {
      // Sem armazenamento (aba privada etc.): só não lembra o modo.
    }
  }

  private resolveErrorMessage(error: unknown): string {
    if (error instanceof HttpErrorResponse) {
      if (error.status === 403) {
        return 'Você não tem permissão para consultar cartões de consumo.';
      }
      return 'Não foi possível consultar o cartão. Tente novamente em instantes.';
    }
    return error instanceof Error ? error.message : 'Não foi possível ler o QR Code.';
  }
}
