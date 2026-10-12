import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject, catchError, debounceTime, distinctUntilChanged, forkJoin, from, map, mergeMap, of, toArray } from 'rxjs';
import {
  ApiErrorResponse,
  CreateTableRequest,
  CreateTablesBatchRequest,
  RestaurantTableResponse,
  TableListParams,
  TableStatus,
  TablesService,
  UpdateTableRequest,
  TABLE_LIMIT_ERROR_CODE,
  TableQuotaResponse
} from '../../../../shared/services/tables.service';
import {
  CreateTableSectorRequest,
  TableSectorResponse,
  TableSectorsService,
  UpdateTableSectorRequest
} from '../../../../shared/services/table-sectors.service';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import { autoDismiss } from '../../../../shared/utils/auto-dismiss.util';
import { brDateTimeFormat, parseApiDate } from '../../../../shared/utils/datetime.util';
import { AuthService } from '../../../auth/services/auth.service';

import { formatTableLabel } from '../../../../shared/utils/table-label.util';
const PAGE_SIZE = 12;
// Mesmo teto da API (CreateRestaurantTableBatchRequest.MAX_QUANTITY).
const MAX_BATCH_TABLES = 100;

type ModalMode = 'create' | 'edit';
type TabId = 'mesas' | 'setores';
type StatusFilter = 'all' | TableStatus;

interface TableSortOption {
  value: string;
  label: string;
}

const TABLE_SORT_OPTIONS: TableSortOption[] = [
  { value: 'number', label: 'Número' },
  { value: 'name', label: 'Nome' },
  { value: 'capacity', label: 'Capacidade' }
];


type BulkTableAction = 'enable' | 'disable' | 'delete';

@Component({
  selector: 'app-admin-tables',
  standalone: true,
  imports: [ReactiveFormsModule, RippleDirective],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss'
})
export class TablesComponent {
  readonly tableLabel = formatTableLabel;

  private readonly fb = new FormBuilder();
  private readonly router = inject(Router);
  private readonly tablesService = inject(TablesService);
  private readonly tableSectorsService = inject(TableSectorsService);
  private readonly authService = inject(AuthService);

  readonly selectedCompany = this.authService.selectedCompany;
  readonly sortOptions = TABLE_SORT_OPTIONS;

  readonly profileCode = computed(() => this.selectedCompany()?.profileCode ?? null);
  readonly canManageTables = computed(() => ['ADMIN', 'OWNER', 'MANAGER'].includes(this.profileCode() ?? ''));
  readonly canManageSectors = computed(() => ['ADMIN', 'OWNER'].includes(this.profileCode() ?? ''));

  readonly activeTab = signal<TabId>('mesas');

  // --- Mesas: listagem/paginação ------------------------------------------
  readonly tables = signal<RestaurantTableResponse[]>([]);
  readonly page = signal(0);
  readonly totalPages = signal(0);
  readonly totalElements = signal(0);
  readonly isLast = signal(true);
  readonly isLoadingList = signal(true);
  readonly listError = signal<string | null>(null);

  readonly pageLabel = computed(() => `Página ${this.page() + 1} de ${Math.max(this.totalPages(), 1)}`);

  // --- Mesas: filtros -------------------------------------------------------
  readonly filterSectorId = signal('');
  readonly filterStatus = signal<StatusFilter>('all');
  readonly searchTerm = signal('');
  readonly sortBy = signal('number');
  readonly sortDirection = signal<'ASC' | 'DESC'>('ASC');
  private readonly searchInput = new Subject<string>();

  // --- Mesas: modal de criar/editar ------------------------------------------
  readonly isTableModalOpen = signal(false);
  readonly tableModalMode = signal<ModalMode>('create');
  readonly editingTable = signal<RestaurantTableResponse | null>(null);
  readonly isSubmittingTable = signal(false);
  readonly tableFormError = signal<string | null>(null);
  readonly maxBatchTables = MAX_BATCH_TABLES;

  readonly tableToRegenerateQr = signal<RestaurantTableResponse | null>(null);
  readonly isRegeneratingQr = signal(false);
  readonly regenerateQrError = signal<string | null>(null);

  readonly markingCleanedTableId = signal<string | null>(null);
  readonly markCleanedError = signal<string | null>(null);

  // --- Mesas: modal de QR Code -----------------------------------------------
  readonly qrModalTable = signal<RestaurantTableResponse | null>(null);
  readonly qrImageUrl = signal<string | null>(null);
  readonly isLoadingQr = signal(false);
  readonly qrError = signal<string | null>(null);

  readonly isPrintingAllQr = signal(false);
  readonly printAllQrError = signal<string | null>(null);

  readonly tableForm = this.fb.nonNullable.group({
    sectorId: ['', Validators.required],
    // Só no cadastro: > 1 cria várias mesas iguais, numeradas a partir de `number`.
    quantity: this.fb.nonNullable.control(1, [Validators.required, Validators.min(1), Validators.max(MAX_BATCH_TABLES)]),
    number: this.fb.control<number | null>(null, [Validators.required, Validators.min(1)]),
    name: ['', Validators.maxLength(50)],
    capacity: this.fb.control<number | null>(null, [Validators.required, Validators.min(1)]),
    status: this.fb.nonNullable.control<TableStatus>('ACTIVE', Validators.required),
    allowQr: [true],
    notes: ['', Validators.maxLength(500)]
  });

  // --- Setores ----------------------------------------------------------------
  readonly sectors = signal<TableSectorResponse[]>([]);
  readonly isLoadingSectors = signal(true);
  readonly sectorsError = signal<string | null>(null);

  readonly isSectorModalOpen = signal(false);
  readonly sectorModalMode = signal<ModalMode>('create');
  readonly editingSectorId = signal<string | null>(null);
  readonly isSubmittingSector = signal(false);
  readonly sectorFormError = signal<string | null>(null);
  private sectorModalReturnsToTableForm = false;

  // Seleção de várias mesas para ação em lote (ativar/desativar/excluir). Guarda a mesa inteira
  // por id, então a seleção sobrevive à troca de página/filtro.
  readonly selectedTables = signal<Map<string, RestaurantTableResponse>>(new Map());
  readonly selectedCount = computed(() => this.selectedTables().size);
  readonly allPageSelected = computed(() => {
    const tables = this.tables();
    const selected = this.selectedTables();
    return tables.length > 0 && tables.every((table) => selected.has(table.id));
  });
  readonly bulkAction = signal<BulkTableAction | null>(null);
  readonly isRunningBulk = signal(false);
  readonly bulkError = signal<string | null>(null);
  readonly bulkResult = signal<string | null>(null);

  // Cota de mesas do plano: com o limite atingido, "Nova mesa" mostra o aviso de upgrade em vez
  // do formulário (a API também barra — ver SubscriptionAccessService#assertCanAddTables).
  readonly quota = signal<TableQuotaResponse | null>(null);
  readonly isUpgradeModalOpen = signal(false);
  readonly canCreateMoreTables = computed(() => !this.quota()?.limitReached);

  readonly tableToDelete = signal<RestaurantTableResponse | null>(null);
  readonly isDeletingTable = signal(false);
  readonly deleteTableError = signal<string | null>(null);

  readonly sectorToDelete = signal<TableSectorResponse | null>(null);
  readonly isDeletingSector = signal(false);
  readonly deleteSectorError = signal<string | null>(null);

  readonly sectorForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    displayOrder: [0, Validators.min(0)],
    active: [true]
  });

  constructor() {
    this.searchInput.pipe(debounceTime(400), distinctUntilChanged()).subscribe((value) => {
      this.searchTerm.set(value);
      this.loadTables(0);
    });

    this.loadSectors();
    this.loadQuota();
    this.loadTables(0);
  }

  // --- Abas ---------------------------------------------------------------
  setActiveTab(tab: TabId): void {
    this.activeTab.set(tab);
  }

  private readonly dateTimeFormatter = brDateTimeFormat({ day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });

  // --- Mesas: apresentação --------------------------------------------------
  formatShortDateTime(value: string | null | undefined): string {
    const parsed = parseApiDate(value);
    return parsed ? this.dateTimeFormatter.format(parsed) : '—';
  }

  tableStatusLabel(table: RestaurantTableResponse): string {
    if (table.status === 'INACTIVE') {
      return 'Inativa';
    }
    switch (table.operationalStatus) {
      case 'OCCUPIED':
        return 'Ocupada';
      case 'RESERVED':
        return 'Reservada';
      case 'CLEANING':
        return 'Limpeza';
      default:
        return 'Livre';
    }
  }

  tableStatusBadgeClass(table: RestaurantTableResponse): string {
    if (table.status === 'INACTIVE') {
      return 'badge--muted';
    }
    switch (table.operationalStatus) {
      case 'OCCUPIED':
        return 'badge--warning';
      case 'RESERVED':
        return 'badge--danger';
      case 'CLEANING':
        return 'badge--muted';
      default:
        return 'badge--success';
    }
  }

  // --- Mesas: listagem --------------------------------------------------------
  loadTables(page: number): void {
    this.isLoadingList.set(true);
    this.listError.set(null);

    const status = this.filterStatus();
    const params: TableListParams = {
      status: status === 'all' ? undefined : status,
      sectorId: this.filterSectorId() || undefined,
      search: this.searchTerm() || undefined,
      page,
      size: PAGE_SIZE,
      sortBy: this.sortBy(),
      sortDirection: this.sortDirection()
    };

    this.tablesService.list(params).subscribe({
      next: (response) => {
        this.tables.set(response.content);
        this.page.set(response.page);
        this.totalPages.set(response.totalPages);
        this.totalElements.set(response.totalElements);
        this.isLast.set(response.last);
        this.isLoadingList.set(false);
      },
      error: () => {
        this.isLoadingList.set(false);
        this.listError.set('Não foi possível carregar as mesas.');
      }
    });
  }

  // Status operacional (livre/ocupada/limpeza) muda por ações de outros apps (cliente pedindo/
  // pagando no cardápio digital) — sem isso, a tela só reflete essas mudanças ao trocar filtro
  // ou paginação, o que já dispara loadTables por conta própria.
  refreshTables(): void {
    this.loadTables(this.page());
  }

  goToPage(page: number): void {
    if (page < 0 || page >= this.totalPages() || page === this.page()) {
      return;
    }
    this.loadTables(page);
  }

  previousPage(): void {
    this.goToPage(this.page() - 1);
  }

  nextPage(): void {
    this.goToPage(this.page() + 1);
  }

  // --- Mesas: filtros -----------------------------------------------------------
  onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchInput.next(input.value);
  }

  setSectorFilter(value: string): void {
    this.filterSectorId.set(value);
    this.loadTables(0);
  }

  setStatusFilter(value: StatusFilter): void {
    this.filterStatus.set(value);
    this.loadTables(0);
  }

  setSortBy(value: string): void {
    this.sortBy.set(value);
    this.loadTables(0);
  }

  toggleSortDirection(): void {
    this.sortDirection.set(this.sortDirection() === 'ASC' ? 'DESC' : 'ASC');
    this.loadTables(0);
  }

  resetFilters(): void {
    this.filterSectorId.set('');
    this.filterStatus.set('all');
    this.searchTerm.set('');
    this.sortBy.set('number');
    this.sortDirection.set('ASC');
    this.loadTables(0);
  }

  // --- Mesas: modal de criar/editar -------------------------------------------
  loadQuota(): void {
    if (!this.canManageTables()) {
      return;
    }
    this.tablesService.getQuota().subscribe({
      next: (quota) => this.quota.set(quota),
      // Sem a cota, não trava nada no front — a API continua barrando no limite.
      error: () => this.quota.set(null)
    });
  }

  closeUpgradeModal(): void {
    this.isUpgradeModalOpen.set(false);
  }

  goToSubscription(): void {
    this.isUpgradeModalOpen.set(false);
    this.router.navigate(['/painel/assinatura']);
  }

  // Erro da API por limite do plano (ex.: cota mudou entre abrir o formulário e salvar): fecha o
  // formulário e mostra o mesmo aviso de upgrade.
  private handleTableLimitError(error: HttpErrorResponse): boolean {
    const body = error.error as ApiErrorResponse | undefined;
    if (body?.codigoErro !== TABLE_LIMIT_ERROR_CODE) {
      return false;
    }
    this.isTableModalOpen.set(false);
    this.loadQuota();
    this.isUpgradeModalOpen.set(true);
    return true;
  }

  openCreateTableModal(): void {
    if (this.quota()?.limitReached) {
      this.isUpgradeModalOpen.set(true);
      return;
    }
    this.tableModalMode.set('create');
    this.editingTable.set(null);
    this.tableFormError.set(null);
    this.tableForm.reset({
      quantity: 1,
      sectorId: '',
      number: null,
      name: '',
      capacity: null,
      status: 'ACTIVE',
      allowQr: true,
      notes: ''
    });
    this.isTableModalOpen.set(true);
  }

  openEditTableModal(table: RestaurantTableResponse): void {
    this.tableModalMode.set('edit');
    this.editingTable.set(table);
    this.tableFormError.set(null);
    this.tableForm.reset({
      quantity: 1,
      sectorId: table.sectorId,
      number: table.number,
      name: table.name ?? '',
      capacity: table.capacity,
      status: table.status,
      allowQr: table.allowQr,
      notes: table.notes ?? ''
    });
    this.isTableModalOpen.set(true);
  }

  closeTableModal(): void {
    this.isTableModalOpen.set(false);
  }

  submitTable(): void {
    if (this.tableForm.invalid) {
      this.tableForm.markAllAsTouched();
      this.tableFormError.set('Verifique os campos destacados antes de salvar.');
      autoDismiss(this.tableFormError, null);
      return;
    }

    this.tableFormError.set(null);
    this.isSubmittingTable.set(true);

    if (this.exceedsQuota()) {
      this.isTableModalOpen.set(false);
      this.isUpgradeModalOpen.set(true);
      return;
    }

    if (this.tableModalMode() === 'create' && this.isBatchCreate()) {
      this.tablesService.createBatch(this.buildBatchPayload()).subscribe({
        next: () => {
          this.isSubmittingTable.set(false);
          this.isTableModalOpen.set(false);
          this.loadTables(0);
          this.loadQuota();
        },
        error: (error: HttpErrorResponse) => {
          this.isSubmittingTable.set(false);
          if (this.handleTableLimitError(error)) {
            return;
          }
          this.tableFormError.set(this.resolveErrorMessage(error, 'table'));
          autoDismiss(this.tableFormError, null);
        }
      });
      return;
    }

    if (this.tableModalMode() === 'create') {
      this.tablesService.create(this.buildTablePayload() as CreateTableRequest).subscribe({
        next: () => {
          this.isSubmittingTable.set(false);
          this.isTableModalOpen.set(false);
          this.loadTables(0);
          this.loadQuota();
        },
        error: (error: HttpErrorResponse) => {
          this.isSubmittingTable.set(false);
          if (this.handleTableLimitError(error)) {
            return;
          }
          this.tableFormError.set(this.resolveErrorMessage(error, 'table'));
          autoDismiss(this.tableFormError, null);
        }
      });
      return;
    }

    const table = this.editingTable();
    if (!table) {
      return;
    }

    this.tablesService.update(table.id, this.buildTablePayload() as UpdateTableRequest).subscribe({
      next: (updated) => {
        this.isSubmittingTable.set(false);
        this.isTableModalOpen.set(false);
        this.replaceTable(updated);
      },
      error: (error: HttpErrorResponse) => {
        this.isSubmittingTable.set(false);
        this.tableFormError.set(this.resolveErrorMessage(error, 'table'));
        autoDismiss(this.tableFormError, null);
      }
    });
  }

  // --- Mesas: ativar/desativar --------------------------------------------------
  toggleTableStatus(table: RestaurantTableResponse): void {
    const request$ = table.status === 'ACTIVE' ? this.tablesService.disable(table.id) : this.tablesService.enable(table.id);
    request$.subscribe({
      next: (updated) => this.replaceTable(updated),
      error: () => {
        this.listError.set('Não foi possível atualizar o status da mesa.');
        autoDismiss(this.listError, null);
      }
    });
  }

  // --- Mesas: concluir limpeza ------------------------------------------------------
  markCleaned(table: RestaurantTableResponse): void {
    this.markCleanedError.set(null);
    this.markingCleanedTableId.set(table.id);

    this.tablesService.markCleaned(table.id).subscribe({
      next: (updated) => {
        this.markingCleanedTableId.set(null);
        this.replaceTable(updated);
      },
      error: (error: HttpErrorResponse) => {
        this.markingCleanedTableId.set(null);
        this.markCleanedError.set(this.resolveErrorMessage(error, 'table'));
        autoDismiss(this.markCleanedError, null);
      }
    });
  }

  // --- Mesas: regenerar QR Code ---------------------------------------------------
  requestRegenerateQr(table: RestaurantTableResponse): void {
    this.regenerateQrError.set(null);
    this.tableToRegenerateQr.set(table);
  }

  cancelRegenerateQr(): void {
    this.tableToRegenerateQr.set(null);
  }

  confirmRegenerateQr(): void {
    const table = this.tableToRegenerateQr();
    if (!table) {
      return;
    }

    this.isRegeneratingQr.set(true);
    this.regenerateQrError.set(null);

    this.tablesService.regenerateQrCode(table.id).subscribe({
      next: (updated) => {
        this.isRegeneratingQr.set(false);
        this.tableToRegenerateQr.set(null);
        this.replaceTable(updated);
      },
      error: (error: HttpErrorResponse) => {
        this.isRegeneratingQr.set(false);
        this.regenerateQrError.set(this.resolveErrorMessage(error, 'table'));
        autoDismiss(this.regenerateQrError, null);
      }
    });
  }

  // --- Mesas: ações de QR Code -----------------------------------------------------
  openQrModal(table: RestaurantTableResponse): void {
    this.qrModalTable.set(table);
    this.qrError.set(null);
    this.qrImageUrl.set(null);
    this.isLoadingQr.set(true);

    this.tablesService.getQrCodePng(table.id).subscribe({
      next: (blob) => {
        this.isLoadingQr.set(false);
        this.qrImageUrl.set(URL.createObjectURL(blob));
      },
      error: () => {
        this.isLoadingQr.set(false);
        this.qrError.set('Não foi possível carregar o QR Code.');
      }
    });
  }

  closeQrModal(): void {
    const url = this.qrImageUrl();
    if (url) {
      URL.revokeObjectURL(url);
    }
    this.qrModalTable.set(null);
    this.qrImageUrl.set(null);
  }

  downloadQrCode(table: RestaurantTableResponse, format: 'png' | 'pdf'): void {
    const request$ = format === 'png' ? this.tablesService.getQrCodePng(table.id) : this.tablesService.getQrCodePdf(table.id);
    request$.subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `mesa-${table.number}-qrcode.${format}`;
        link.click();
        URL.revokeObjectURL(url);
      },
      error: () => this.qrError.set('Não foi possível baixar o QR Code.')
    });
  }

  printQrCode(table: RestaurantTableResponse): void {
    // A janela precisa ser aberta de forma síncrona, ainda dentro do gesto de clique do
    // usuário — abrir só na resposta da requisição (assíncrona) é bloqueado como pop-up
    // pela maioria dos navegadores.
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      this.qrError.set('Não foi possível abrir a janela de impressão. Verifique o bloqueador de pop-ups.');
      return;
    }
    printWindow.document.title = `QR Code — Mesa ${table.number}`;
    printWindow.document.body.style.margin = '0';
    printWindow.document.body.style.display = 'flex';
    printWindow.document.body.style.alignItems = 'center';
    printWindow.document.body.style.justifyContent = 'center';
    printWindow.document.body.style.height = '100vh';

    this.tablesService.getQrCodePng(table.id).subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        const image = printWindow.document.createElement('img');
        image.src = url;
        image.style.maxWidth = '100%';
        image.onload = () => printWindow.print();
        printWindow.document.body.appendChild(image);
      },
      error: () => {
        printWindow.close();
        this.qrError.set('Não foi possível carregar o QR Code para impressão.');
      }
    });
  }

  // Imprime, numa única janela (uma mesa por página, com quebra de página no CSS de impressão),
  // o QR Code de todas as mesas ATIVAS da empresa — não só as da página atual da listagem, que é
  // paginada (ver PAGE_SIZE). Mesas INACTIVE ficam de fora: não estão em uso, não faz sentido
  // imprimir a plaquinha delas.
  printAllQrCodes(): void {
    // A janela precisa ser aberta de forma síncrona, ainda dentro do gesto de clique do usuário
    // (mesmo motivo de printQrCode) — o conteúdo é preenchido depois, quando as chamadas
    // assíncronas (lista de mesas + um PNG por mesa) terminarem.
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      this.printAllQrError.set('Não foi possível abrir a janela de impressão. Verifique o bloqueador de pop-ups.');
      autoDismiss(this.printAllQrError, null);
      return;
    }
    printWindow.document.title = 'QR Codes — Mesas';
    printWindow.document.body.innerHTML =
      '<p style="font-family: sans-serif; text-align: center; margin-top: 40vh;">Carregando QR Codes…</p>';

    this.isPrintingAllQr.set(true);
    this.printAllQrError.set(null);

    this.tablesService.list({ status: 'ACTIVE', page: 0, size: 500, sortBy: 'number', sortDirection: 'ASC' }).subscribe({
      next: (response) => {
        const tables = response.content;
        if (tables.length === 0) {
          this.isPrintingAllQr.set(false);
          printWindow.close();
          this.printAllQrError.set('Nenhuma mesa ativa encontrada para imprimir.');
          autoDismiss(this.printAllQrError, null);
          return;
        }

        forkJoin(
          tables.map((table) =>
            this.tablesService.getQrCodePng(table.id).pipe(map((blob) => ({ table, url: URL.createObjectURL(blob) })))
          )
        ).subscribe({
          next: (items) => {
            this.isPrintingAllQr.set(false);
            this.renderAllQrPrintDocument(printWindow, items);
          },
          error: () => {
            this.isPrintingAllQr.set(false);
            printWindow.close();
            this.printAllQrError.set('Não foi possível carregar os QR Codes para impressão.');
            autoDismiss(this.printAllQrError, null);
          }
        });
      },
      error: () => {
        this.isPrintingAllQr.set(false);
        printWindow.close();
        this.printAllQrError.set('Não foi possível carregar a lista de mesas.');
        autoDismiss(this.printAllQrError, null);
      }
    });
  }

  private renderAllQrPrintDocument(printWindow: Window, items: { table: RestaurantTableResponse; url: string }[]): void {
    const doc = printWindow.document;
    doc.open();
    doc.write(
      '<!doctype html><html><head><title>QR Codes — Mesas</title><style>' +
        '* { box-sizing: border-box; } body { margin: 0; font-family: sans-serif; color: #111; } ' +
        '.qr-page { display: flex; flex-direction: column; align-items: center; justify-content: center; ' +
        'height: 100vh; padding: 24px; page-break-after: always; text-align: center; } ' +
        '.qr-page:last-child { page-break-after: auto; } ' +
        '.qr-page img { max-width: 80%; max-height: 65vh; } ' +
        '.qr-page h2 { margin: 20px 0 4px; font-size: 1.5rem; } ' +
        '.qr-page p { margin: 0; color: #555; }' +
        '</style></head><body></body></html>'
    );
    doc.close();

    items.forEach(({ table, url }) => {
      const page = doc.createElement('div');
      page.className = 'qr-page';

      const img = doc.createElement('img');
      img.src = url;
      page.appendChild(img);

      const title = doc.createElement('h2');
      title.textContent = `Mesa ${table.number}${table.name ? ' — ' + table.name : ''}`;
      page.appendChild(title);

      const subtitle = doc.createElement('p');
      subtitle.textContent = table.sectorName;
      page.appendChild(subtitle);

      doc.body.appendChild(page);
    });

    this.printWhenImagesReady(printWindow);
  }

  // Só chama print() depois que todo mundo carregou — chamar cedo demais imprime páginas em
  // branco (imagem ainda não decodificada).
  private printWhenImagesReady(printWindow: Window): void {
    const images = Array.from(printWindow.document.images);
    if (images.length === 0) {
      printWindow.print();
      return;
    }

    let remaining = images.length;
    const onSettled = () => {
      remaining--;
      if (remaining === 0) {
        printWindow.print();
      }
    };
    images.forEach((image) => {
      if (image.complete) {
        onSettled();
      } else {
        image.addEventListener('load', onSettled, { once: true });
        image.addEventListener('error', onSettled, { once: true });
      }
    });
  }

  private replaceTable(updated: RestaurantTableResponse): void {
    this.tables.update((list) => list.map((current) => (current.id === updated.id ? updated : current)));
    if (this.editingTable()?.id === updated.id) {
      this.editingTable.set(updated);
    }
    if (this.qrModalTable()?.id === updated.id) {
      this.qrModalTable.set(updated);
    }
  }

  // Cadastro em lote: quantidade > 1 no modal de nova mesa.
  isBatchCreate(): boolean {
    return this.tableModalMode() === 'create' && this.tableForm.controls.quantity.value > 1;
  }

  // Lote maior do que o que ainda cabe no plano.
  exceedsQuota(): boolean {
    const remaining = this.quota()?.remaining;
    return this.tableModalMode() === 'create' && remaining != null && this.tableForm.controls.quantity.value > remaining;
  }

  // "Mesas 10 a 14" — prévia do intervalo que o lote vai criar.
  batchRangeLabel(): string | null {
    const start = this.tableForm.controls.number.value;
    const quantity = this.tableForm.controls.quantity.value;
    if (!start || start < 1 || !quantity || quantity < 2) {
      return null;
    }
    return `Serão criadas ${quantity} mesas: nº ${start} a ${start + quantity - 1}.`;
  }

  private buildBatchPayload(): CreateTablesBatchRequest {
    const value = this.tableForm.getRawValue();
    return {
      sectorId: value.sectorId,
      quantity: value.quantity,
      startNumber: value.number ?? undefined,
      capacity: value.capacity ?? 0,
      status: value.status,
      allowQr: value.allowQr,
      notes: value.notes.trim() || undefined
    };
  }

  private buildTablePayload(): CreateTableRequest {
    const value = this.tableForm.getRawValue();
    return {
      sectorId: value.sectorId,
      number: value.number ?? 0,
      name: value.name.trim() || undefined,
      capacity: value.capacity ?? 0,
      status: value.status,
      allowQr: value.allowQr,
      notes: value.notes.trim() || undefined
    };
  }

  // --- Setores --------------------------------------------------------------------
  loadSectors(): void {
    this.isLoadingSectors.set(true);
    this.sectorsError.set(null);

    this.tableSectorsService.list().subscribe({
      next: (sectors) => {
        this.sectors.set(sectors);
        this.isLoadingSectors.set(false);
      },
      error: () => {
        this.isLoadingSectors.set(false);
        this.sectorsError.set('Não foi possível carregar os setores.');
      }
    });
  }

  openCreateSectorModal(fromTableForm = false): void {
    this.sectorModalMode.set('create');
    this.editingSectorId.set(null);
    this.sectorFormError.set(null);
    this.sectorModalReturnsToTableForm = fromTableForm;
    this.sectorForm.reset({
      name: '',
      displayOrder: 0,
      active: true
    });
    this.isSectorModalOpen.set(true);
  }

  openEditSectorModal(sector: TableSectorResponse): void {
    this.sectorModalMode.set('edit');
    this.editingSectorId.set(sector.id);
    this.sectorFormError.set(null);
    this.sectorModalReturnsToTableForm = false;
    this.sectorForm.reset({
      name: sector.name,
      displayOrder: sector.displayOrder,
      active: sector.active
    });
    this.isSectorModalOpen.set(true);
  }

  closeSectorModal(): void {
    this.isSectorModalOpen.set(false);
  }

  submitSector(): void {
    if (this.sectorForm.invalid) {
      this.sectorForm.markAllAsTouched();
      this.sectorFormError.set('Verifique os campos destacados antes de salvar.');
      autoDismiss(this.sectorFormError, null);
      return;
    }

    this.sectorFormError.set(null);
    this.isSubmittingSector.set(true);
    const value = this.sectorForm.getRawValue();

    if (this.sectorModalMode() === 'create') {
      const payload: CreateTableSectorRequest = {
        name: value.name.trim(),
        displayOrder: value.displayOrder,
        active: value.active
      };
      this.tableSectorsService.create(payload).subscribe({
        next: (created) => {
          this.isSubmittingSector.set(false);
          this.isSectorModalOpen.set(false);
          this.loadSectors();
          if (this.sectorModalReturnsToTableForm) {
            this.tableForm.controls.sectorId.setValue(created.id);
          }
        },
        error: (error: HttpErrorResponse) => {
          this.isSubmittingSector.set(false);
          this.sectorFormError.set(this.resolveErrorMessage(error, 'sector'));
          autoDismiss(this.sectorFormError, null);
        }
      });
      return;
    }

    const sectorId = this.editingSectorId();
    if (!sectorId) {
      return;
    }

    const payload: UpdateTableSectorRequest = {
      name: value.name.trim(),
      displayOrder: value.displayOrder,
      active: value.active
    };

    this.tableSectorsService.update(sectorId, payload).subscribe({
      next: () => {
        this.isSubmittingSector.set(false);
        this.isSectorModalOpen.set(false);
        this.loadSectors();
      },
      error: (error: HttpErrorResponse) => {
        this.isSubmittingSector.set(false);
        this.sectorFormError.set(this.resolveErrorMessage(error, 'sector'));
        autoDismiss(this.sectorFormError, null);
      }
    });
  }

  // --- Mesas: seleção e ações em lote ----------------------------------------------
  isSelected(tableId: string): boolean {
    return this.selectedTables().has(tableId);
  }

  toggleSelected(table: RestaurantTableResponse): void {
    const next = new Map(this.selectedTables());
    if (next.has(table.id)) {
      next.delete(table.id);
    } else {
      next.set(table.id, table);
    }
    this.selectedTables.set(next);
  }

  toggleSelectPage(): void {
    const next = new Map(this.selectedTables());
    if (this.allPageSelected()) {
      this.tables().forEach((table) => next.delete(table.id));
    } else {
      this.tables().forEach((table) => next.set(table.id, table));
    }
    this.selectedTables.set(next);
  }

  clearSelection(): void {
    this.selectedTables.set(new Map());
    this.bulkError.set(null);
    this.bulkResult.set(null);
  }

  requestBulk(action: BulkTableAction): void {
    if (this.selectedCount() === 0 || this.isRunningBulk()) {
      return;
    }
    this.bulkError.set(null);
    this.bulkResult.set(null);
    // Ativar/desativar não destrói nada — roda direto; excluir pede confirmação.
    if (action === 'delete') {
      this.bulkAction.set(action);
      return;
    }
    this.runBulk(action);
  }

  cancelBulk(): void {
    if (!this.isRunningBulk()) {
      this.bulkAction.set(null);
    }
  }

  confirmBulk(): void {
    const action = this.bulkAction();
    if (action) {
      this.runBulk(action);
    }
  }

  // Uma requisição por mesa (até 4 em paralelo), sem parar na primeira falha: no fim, as que
  // deram certo saem da seleção e as que falharam (ex.: mesa com comanda aberta) continuam
  // selecionadas, com o motivo.
  private runBulk(action: BulkTableAction): void {
    const tables = [...this.selectedTables().values()];
    this.isRunningBulk.set(true);
    this.bulkError.set(null);

    from(tables).pipe(
      mergeMap((table) => this.bulkRequest(action, table).pipe(
        map(() => ({ table, error: null as string | null })),
        catchError((error: HttpErrorResponse) => of({ table, error: this.resolveErrorMessage(error, 'table') }))
      ), 4),
      toArray()
    ).subscribe((results) => {
      this.isRunningBulk.set(false);
      this.bulkAction.set(null);
      if (action === 'delete') {
        this.loadQuota();
      }

      const failed = results.filter((result) => result.error);
      const succeededIds = new Set(results.filter((result) => !result.error).map((result) => result.table.id));
      this.selectedTables.set(new Map(failed.map((result) => [result.table.id, result.table])));

      const verb = action === 'delete' ? 'excluída(s)' : action === 'disable' ? 'desativada(s)' : 'ativada(s)';
      if (succeededIds.size > 0) {
        this.bulkResult.set(`${succeededIds.size} mesa(s) ${verb}.`);
        autoDismiss(this.bulkResult, null);
      }
      if (failed.length > 0) {
        const labels = failed.map((result) => this.tableLabel(result.table.number, result.table.name)).join(', ');
        this.bulkError.set(`Não foi possível concluir em ${failed.length} mesa(s) (${labels}): ${failed[0].error}`);
      }

      // Excluiu todas as mesas da página atual: volta uma página em vez de mostrar a lista vazia.
      const page = this.page();
      const pageEmptied = action === 'delete' && this.tables().every((table) => succeededIds.has(table.id));
      this.loadTables(pageEmptied && page > 0 ? page - 1 : page);
    });
  }

  private bulkRequest(action: BulkTableAction, table: RestaurantTableResponse): Observable<unknown> {
    switch (action) {
      case 'delete':
        return this.tablesService.delete(table.id);
      case 'disable':
        return this.tablesService.disable(table.id);
      default:
        return this.tablesService.enable(table.id);
    }
  }

  requestDeleteTable(table: RestaurantTableResponse): void {
    this.deleteTableError.set(null);
    this.tableToDelete.set(table);
  }

  cancelDeleteTable(): void {
    if (!this.isDeletingTable()) {
      this.tableToDelete.set(null);
    }
  }

  confirmDeleteTable(): void {
    const table = this.tableToDelete();
    if (!table) {
      return;
    }

    this.isDeletingTable.set(true);
    this.deleteTableError.set(null);

    this.tablesService.delete(table.id).subscribe({
      next: () => {
        this.isDeletingTable.set(false);
        this.tableToDelete.set(null);
        this.loadQuota();
        // Era a última mesa da página: volta uma página em vez de mostrar a lista vazia.
        const page = this.page();
        this.loadTables(this.tables().length === 1 && page > 0 ? page - 1 : page);
      },
      error: (error: HttpErrorResponse) => {
        this.isDeletingTable.set(false);
        this.deleteTableError.set(this.resolveErrorMessage(error, 'table'));
        autoDismiss(this.deleteTableError, null);
      }
    });
  }

  requestDeleteSector(sector: TableSectorResponse): void {
    this.deleteSectorError.set(null);
    this.sectorToDelete.set(sector);
  }

  cancelDeleteSector(): void {
    this.sectorToDelete.set(null);
  }

  confirmDeleteSector(): void {
    const sector = this.sectorToDelete();
    if (!sector) {
      return;
    }

    this.isDeletingSector.set(true);
    this.deleteSectorError.set(null);

    this.tableSectorsService.delete(sector.id).subscribe({
      next: () => {
        this.isDeletingSector.set(false);
        this.sectorToDelete.set(null);
        this.loadSectors();
      },
      error: (error: HttpErrorResponse) => {
        this.isDeletingSector.set(false);
        this.deleteSectorError.set(this.resolveErrorMessage(error, 'sector'));
        autoDismiss(this.deleteSectorError, null);
      }
    });
  }

  // --- Erros ------------------------------------------------------------------------
  private resolveErrorMessage(error: HttpErrorResponse, domain: 'table' | 'sector'): string {
    const body = error.error as ApiErrorResponse | undefined;
    if (body?.mensagem) {
      return body.mensagem;
    }
    if (body?.titulo) {
      return body.titulo;
    }
    if (domain === 'table') {
      if (error.status === 409) {
        return 'Já existe uma mesa com este número nesta empresa.';
      }
      if (error.status === 404) {
        return 'Mesa ou setor informado não encontrado nesta empresa.';
      }
    } else {
      if (error.status === 409) {
        return 'Existem mesas vinculadas a este setor. Mova ou remova as mesas antes de excluí-lo.';
      }
      if (error.status === 404) {
        return 'Setor não encontrado nesta empresa.';
      }
    }
    if (error.status === 403) {
      return 'Você não tem permissão para realizar esta ação.';
    }
    if (error.status === 422) {
      return 'Verifique os dados informados e tente novamente.';
    }
    return 'Não foi possível concluir a operação. Tente novamente em instantes.';
  }
}
