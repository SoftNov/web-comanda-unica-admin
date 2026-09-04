import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  ApiErrorResponse,
  CreateReservationRequest,
  ReservationHistoryStatus,
  ReservationResolution,
  ReservationsService,
  ReservationStatus,
  TableReservationResponse
} from '../../../../shared/services/reservations.service';
import { RestaurantTableResponse, TablesService } from '../../../../shared/services/tables.service';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import { autoDismiss } from '../../../../shared/utils/auto-dismiss.util';
import { formatCPF, formatCellphone, maskCPF, onlyDigits } from '../../../../shared/utils/br-format.util';
import { cpfValidator } from '../../../../shared/validators/br-document.validator';
import {
  apiDateTime,
  brDateTimeFormat,
  brDateTimeLocalFromNow,
  brDateTimeLocalToApi,
  parseApiDate
} from '../../../../shared/utils/datetime.util';

// A reserva expira sozinha no backend (ReservationLifecycleScheduler, a cada 1 min) — a tela
// recarrega no mesmo ritmo para refletir expirações sem o usuário precisar apertar "Atualizar".
const AUTO_REFRESH_MS = 60_000;

const STATUS_LABELS: Record<ReservationStatus, string> = {
  ACTIVE: 'Ativa',
  SEATED: 'Cliente na mesa',
  HONORED: 'Cliente chegou',
  EXPIRED: 'Expirada',
  RELEASED: 'Cancelada'
};

// Opções do filtro de status do histórico — ACTIVE fica de fora (essa tela é só para reservas
// já resolvidas; a ativa tem sua própria seção acima).
const HISTORY_STATUS_OPTIONS: { value: ReservationHistoryStatus | ''; label: string }[] = [
  { value: '', label: 'Todos os status' },
  { value: 'SEATED', label: STATUS_LABELS.SEATED },
  { value: 'HONORED', label: STATUS_LABELS.HONORED },
  { value: 'EXPIRED', label: STATUS_LABELS.EXPIRED },
  { value: 'RELEASED', label: STATUS_LABELS.RELEASED }
];

const HISTORY_PAGE_SIZE = 10;

@Component({
  selector: 'app-admin-reservas',
  standalone: true,
  imports: [ReactiveFormsModule, RippleDirective],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.scss'
})
export class ReservasComponent implements OnDestroy {
  private readonly fb = new FormBuilder();
  private readonly reservationsService = inject(ReservationsService);
  private readonly tablesService = inject(TablesService);

  private readonly dateTimeFormatter = brDateTimeFormat({ day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });

  readonly reservations = signal<TableReservationResponse[]>([]);
  readonly isLoading = signal(true);
  readonly listError = signal<string | null>(null);
  readonly actionError = signal<string | null>(null);
  readonly resolvingId = signal<string | null>(null);

  // now() reavaliado a cada refresh — usado para marcar reservas atrasadas (holdUntil já passou,
  // mas o scheduler ainda não rodou).
  readonly now = signal(Date.now());

  readonly activeReservations = computed(() =>
    this.reservations()
      .filter((r) => r.status === 'ACTIVE')
      // Atrasadas primeiro (mais urgente), depois por horário de expiração mais próximo.
      .sort((a, b) => {
        const overdueDiff = Number(this.isOverdue(b)) - Number(this.isOverdue(a));
        return overdueDiff !== 0 ? overdueDiff : apiDateTime(a.holdUntil) - apiDateTime(b.holdUntil);
      })
  );
  // --- Paginação das ativas (client-side — a API devolve a lista inteira) --------
  readonly activePageSize = 6;
  readonly activePage = signal(0);

  readonly activeTotalPages = computed(() => Math.max(1, Math.ceil(this.activeReservations().length / this.activePageSize)));

  readonly pagedActiveReservations = computed(() => {
    const page = Math.min(this.activePage(), this.activeTotalPages() - 1);
    const start = page * this.activePageSize;
    return this.activeReservations().slice(start, start + this.activePageSize);
  });

  previousActivePage(): void {
    this.activePage.update((p) => Math.max(0, p - 1));
  }

  nextActivePage(): void {
    this.activePage.update((p) => Math.min(this.activeTotalPages() - 1, p + 1));
  }

  // --- Histórico (paginado e filtrável no servidor — GET .../history) -----------
  readonly historyStatusOptions = HISTORY_STATUS_OPTIONS;

  readonly showHistory = signal(false);
  private historyLoadedOnce = false;

  // Filtros — só entram na busca ao clicar "Buscar" (applyHistoryFilters), não a cada tecla.
  readonly historyStartDate = signal('');
  readonly historyEndDate = signal('');
  readonly historyStatus = signal<ReservationHistoryStatus | ''>('');
  readonly historySearch = signal('');

  readonly historyResults = signal<TableReservationResponse[]>([]);
  readonly historyPage = signal(0);
  readonly historyTotalPages = signal(1);
  readonly historyTotalElements = signal(0);
  readonly historyLoading = signal(false);
  readonly historyError = signal<string | null>(null);

  toggleHistory(): void {
    this.showHistory.update((v) => !v);
    if (this.showHistory() && !this.historyLoadedOnce) {
      this.historyLoadedOnce = true;
      this.loadHistory();
    }
  }

  onHistoryStartDateChange(value: string): void {
    this.historyStartDate.set(value);
  }

  onHistoryEndDateChange(value: string): void {
    this.historyEndDate.set(value);
  }

  onHistoryStatusChange(value: string): void {
    this.historyStatus.set(value as ReservationHistoryStatus | '');
  }

  onHistorySearchChange(value: string): void {
    this.historySearch.set(value);
  }

  applyHistoryFilters(): void {
    this.historyPage.set(0);
    this.loadHistory();
  }

  clearHistoryFilters(): void {
    this.historyStartDate.set('');
    this.historyEndDate.set('');
    this.historyStatus.set('');
    this.historySearch.set('');
    this.historyPage.set(0);
    this.loadHistory();
  }

  previousHistoryPage(): void {
    if (this.historyPage() === 0) {
      return;
    }
    this.historyPage.update((p) => p - 1);
    this.loadHistory();
  }

  nextHistoryPage(): void {
    if (this.historyPage() >= this.historyTotalPages() - 1) {
      return;
    }
    this.historyPage.update((p) => p + 1);
    this.loadHistory();
  }

  private loadHistory(): void {
    this.historyLoading.set(true);
    this.historyError.set(null);

    this.reservationsService
      .history({
        // Filtro é por dia inteiro no horário de Brasília, convertido para o UTC que a API espera.
        startDate: this.historyStartDate() ? brDateTimeLocalToApi(`${this.historyStartDate()}T00:00`) : undefined,
        endDate: this.historyEndDate() ? brDateTimeLocalToApi(`${this.historyEndDate()}T23:59`) : undefined,
        status: this.historyStatus() || undefined,
        search: this.historySearch().trim() || undefined,
        page: this.historyPage(),
        size: HISTORY_PAGE_SIZE,
        sortBy: 'resolvedAt',
        sortDirection: 'DESC'
      })
      .subscribe({
        next: (response) => {
          this.historyResults.set(response.content);
          this.historyTotalPages.set(Math.max(1, response.totalPages));
          this.historyTotalElements.set(response.totalElements);
          this.historyLoading.set(false);
        },
        error: () => {
          this.historyResults.set([]);
          this.historyLoading.set(false);
          this.historyError.set('Não foi possível carregar o histórico de reservas.');
        }
      });
  }

  // --- Nova reserva (modal) -----------------------------------------------------
  readonly tables = signal<RestaurantTableResponse[]>([]);
  readonly isCreateModalOpen = signal(false);
  readonly isSubmittingCreate = signal(false);
  readonly createError = signal<string | null>(null);

  readonly createForm = this.fb.nonNullable.group({
    tableId: this.fb.nonNullable.control('', Validators.required),
    holdUntil: this.fb.nonNullable.control('', Validators.required),
    guestName: this.fb.control<string | null>(null),
    guestPhone: this.fb.control<string | null>(null),
    // Obrigatório: é contra este CPF que o cliente confirma a chegada pelo QR Code.
    guestDocument: this.fb.nonNullable.control('', [Validators.required, cpfValidator()]),
    notes: this.fb.control<string | null>(null)
  });

  private refreshTimer?: ReturnType<typeof setInterval>;

  constructor() {
    this.loadTables();
    this.load();
    this.refreshTimer = setInterval(() => this.load(true), AUTO_REFRESH_MS);
  }

  ngOnDestroy(): void {
    if (this.refreshTimer) {
      clearInterval(this.refreshTimer);
    }
  }

  // --- Apresentação -----------------------------------------------------------
  statusLabel(status: ReservationStatus): string {
    return STATUS_LABELS[status];
  }

  formatDateTime(value: string | null | undefined): string {
    const parsed = parseApiDate(value);
    return parsed ? this.dateTimeFormatter.format(parsed) : '—';
  }

  isOverdue(reservation: TableReservationResponse): boolean {
    return reservation.status === 'ACTIVE' && apiDateTime(reservation.holdUntil) < this.now();
  }

  // "faltam 25 min" / "venceu há 3 min" — dica rápida ao lado do horário.
  holdCountdown(reservation: TableReservationResponse): string {
    const diffMs = apiDateTime(reservation.holdUntil) - this.now();
    const minutes = Math.round(Math.abs(diffMs) / 60_000);
    if (minutes < 1) {
      return diffMs >= 0 ? 'vence agora' : 'venceu agora';
    }
    const label = minutes >= 60 ? `${Math.floor(minutes / 60)}h${String(minutes % 60).padStart(2, '0')}` : `${minutes} min`;
    return diffMs >= 0 ? `faltam ${label}` : `venceu há ${label}`;
  }

  // --- Carregamento ----------------------------------------------------------
  refresh(): void {
    this.load();
  }

  private load(silent = false): void {
    if (!silent) {
      this.isLoading.set(true);
    }
    this.listError.set(null);
    this.now.set(Date.now());

    this.reservationsService.list().subscribe({
      next: (list) => {
        this.reservations.set(list);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
        if (!silent) {
          this.listError.set('Não foi possível carregar as reservas.');
        }
      }
    });
  }

  private loadTables(): void {
    this.tablesService.list({ status: 'ACTIVE', page: 0, size: 200, sortBy: 'number', sortDirection: 'ASC' }).subscribe({
      next: (response) => this.tables.set(response.content),
      error: () => this.tables.set([])
    });
  }

  // --- Liberar reserva -----------------------------------------------------------
  resolve(reservation: TableReservationResponse, outcome: ReservationResolution): void {
    if (this.resolvingId()) {
      return;
    }
    this.resolvingId.set(reservation.id);
    this.actionError.set(null);

    this.reservationsService.resolve(reservation.id, outcome).subscribe({
      next: (updated) => {
        this.resolvingId.set(null);
        this.reservations.update((list) => list.map((r) => (r.id === reservation.id ? updated : r)));
      },
      error: (error: HttpErrorResponse) => {
        this.resolvingId.set(null);
        this.actionError.set(this.resolveErrorMessage(error));
        autoDismiss(this.actionError, null);
        this.load(true);
      }
    });
  }

  // --- Nova reserva ---------------------------------------------------------------
  openCreateModal(): void {
    this.createError.set(null);
    this.createForm.reset({ tableId: '', holdUntil: this.defaultHoldUntil(), guestName: null, guestPhone: null, guestDocument: '', notes: null });
    this.isCreateModalOpen.set(true);
  }

  closeCreateModal(): void {
    this.isCreateModalOpen.set(false);
  }

  onCpfInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.createForm.controls.guestDocument.setValue(formatCPF(input.value));
  }

  onPhoneInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.createForm.controls.guestPhone.setValue(formatCellphone(input.value));
  }

  maskDocument(value: string | null | undefined): string {
    return maskCPF(value);
  }

  submitCreate(): void {
    if (this.createForm.invalid) {
      this.createForm.markAllAsTouched();
      return;
    }

    const value = this.createForm.getRawValue();
    this.isSubmittingCreate.set(true);
    this.createError.set(null);

    const payload: CreateReservationRequest = {
      tableId: value.tableId,
      // O input datetime-local devolve "yyyy-MM-ddTHH:mm" no horário de Brasília; o backend guarda
      // tudo em UTC, então convertemos antes de enviar (ver datetime.util).
      holdUntil: brDateTimeLocalToApi(value.holdUntil) ?? value.holdUntil,
      guestName: value.guestName?.trim() || undefined,
      guestPhone: value.guestPhone?.trim() || undefined,
      guestDocument: onlyDigits(value.guestDocument),
      notes: value.notes?.trim() || undefined
    };

    this.reservationsService.create(payload).subscribe({
      next: (created) => {
        this.isSubmittingCreate.set(false);
        this.isCreateModalOpen.set(false);
        this.reservations.update((list) => [created, ...list]);
      },
      error: (error: HttpErrorResponse) => {
        this.isSubmittingCreate.set(false);
        this.createError.set(this.resolveErrorMessage(error));
      }
    });
  }

  // datetime-local precisa do formato "yyyy-MM-ddTHH:mm" no horário de Brasília — default: daqui a 1h.
  private defaultHoldUntil(): string {
    return brDateTimeLocalFromNow(60);
  }

  private resolveErrorMessage(error: HttpErrorResponse): string {
    const body = error.error as ApiErrorResponse | undefined;
    if (body?.mensagem) {
      return body.mensagem;
    }
    if (body?.titulo) {
      return body.titulo;
    }
    if (error.status === 404) {
      return 'Mesa ou reserva não encontrada.';
    }
    if (error.status === 403) {
      return 'Você não tem permissão para realizar esta ação.';
    }
    return 'Não foi possível concluir a operação. Tente novamente em instantes.';
  }
}
