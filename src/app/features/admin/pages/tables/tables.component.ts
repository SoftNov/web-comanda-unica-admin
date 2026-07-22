import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import {
  ApiErrorResponse,
  CreateTableRequest,
  RestaurantTableResponse,
  TableListParams,
  TableStatus,
  TablesService,
  UpdateTableRequest
} from '../../../../shared/services/tables.service';
import {
  CreateTableSectorRequest,
  TableSectorResponse,
  TableSectorsService,
  UpdateTableSectorRequest
} from '../../../../shared/services/table-sectors.service';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import { AuthService } from '../../../auth/services/auth.service';

const PAGE_SIZE = 12;

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

@Component({
  selector: 'app-admin-tables',
  standalone: true,
  imports: [ReactiveFormsModule, RippleDirective],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss'
})
export class TablesComponent {
  private readonly fb = new FormBuilder();
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

  readonly tableToRegenerateQr = signal<RestaurantTableResponse | null>(null);
  readonly isRegeneratingQr = signal(false);
  readonly regenerateQrError = signal<string | null>(null);

  // --- Mesas: modal de QR Code -----------------------------------------------
  readonly qrModalTable = signal<RestaurantTableResponse | null>(null);
  readonly qrImageUrl = signal<string | null>(null);
  readonly isLoadingQr = signal(false);
  readonly qrError = signal<string | null>(null);

  readonly tableForm = this.fb.nonNullable.group({
    sectorId: ['', Validators.required],
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
    this.loadTables(0);
  }

  // --- Abas ---------------------------------------------------------------
  setActiveTab(tab: TabId): void {
    this.activeTab.set(tab);
  }

  // --- Mesas: apresentação --------------------------------------------------
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
  openCreateTableModal(): void {
    this.tableModalMode.set('create');
    this.editingTable.set(null);
    this.tableFormError.set(null);
    this.tableForm.reset({
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
      return;
    }

    this.tableFormError.set(null);
    this.isSubmittingTable.set(true);

    if (this.tableModalMode() === 'create') {
      this.tablesService.create(this.buildTablePayload() as CreateTableRequest).subscribe({
        next: () => {
          this.isSubmittingTable.set(false);
          this.isTableModalOpen.set(false);
          this.loadTables(0);
        },
        error: (error: HttpErrorResponse) => {
          this.isSubmittingTable.set(false);
          this.tableFormError.set(this.resolveErrorMessage(error, 'table'));
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
      }
    });
  }

  // --- Mesas: ativar/desativar --------------------------------------------------
  toggleTableStatus(table: RestaurantTableResponse): void {
    const request$ = table.status === 'ACTIVE' ? this.tablesService.disable(table.id) : this.tablesService.enable(table.id);
    request$.subscribe({
      next: (updated) => this.replaceTable(updated),
      error: () => this.listError.set('Não foi possível atualizar o status da mesa.')
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

  private replaceTable(updated: RestaurantTableResponse): void {
    this.tables.update((list) => list.map((current) => (current.id === updated.id ? updated : current)));
    if (this.editingTable()?.id === updated.id) {
      this.editingTable.set(updated);
    }
    if (this.qrModalTable()?.id === updated.id) {
      this.qrModalTable.set(updated);
    }
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
