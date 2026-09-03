import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  ApiErrorResponse,
  CreateReservationRequest,
  ReservationResolution,
  ReservationsService,
  ReservationStatus,
  TableReservationResponse
} from '../../../../shared/services/reservations.service';
import { RestaurantTableResponse, TablesService } from '../../../../shared/services/tables.service';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import { autoDismiss } from '../../../../shared/utils/auto-dismiss.util';

// A reserva expira sozinha no backend (ReservationLifecycleScheduler, a cada 1 min) — a tela
// recarrega no mesmo ritmo para refletir expirações sem o usuário precisar apertar "Atualizar".
const AUTO_REFRESH_MS = 60_000;

const STATUS_LABELS: Record<ReservationStatus, string> = {
  ACTIVE: 'Ativa',
  HONORED: 'Cliente chegou',
  EXPIRED: 'Expirada',
  RELEASED: 'Cancelada'
};

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

  private readonly dateTimeFormatter = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });

  readonly reservations = signal<TableReservationResponse[]>([]);
  readonly isLoading = signal(true);
  readonly listError = signal<string | null>(null);
  readonly actionError = signal<string | null>(null);
  readonly resolvingId = signal<string | null>(null);
  readonly showResolved = signal(false);

  // now() reavaliado a cada refresh — usado para marcar reservas atrasadas (holdUntil já passou,
  // mas o scheduler ainda não rodou).
  readonly now = signal(Date.now());

  readonly activeReservations = computed(() =>
    this.reservations().filter((r) => r.status === 'ACTIVE')
  );
  readonly resolvedReservations = computed(() =>
    this.reservations()
      .filter((r) => r.status !== 'ACTIVE')
      .sort((a, b) => (b.resolvedAt ?? '').localeCompare(a.resolvedAt ?? ''))
  );

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
    return value ? this.dateTimeFormatter.format(new Date(value)) : '—';
  }

  isOverdue(reservation: TableReservationResponse): boolean {
    return reservation.status === 'ACTIVE' && new Date(reservation.holdUntil).getTime() < this.now();
  }

  // "faltam 25 min" / "venceu há 3 min" — dica rápida ao lado do horário.
  holdCountdown(reservation: TableReservationResponse): string {
    const diffMs = new Date(reservation.holdUntil).getTime() - this.now();
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

  toggleResolved(): void {
    this.showResolved.update((v) => !v);
    this.load();
  }

  private load(silent = false): void {
    if (!silent) {
      this.isLoading.set(true);
    }
    this.listError.set(null);
    this.now.set(Date.now());

    this.reservationsService.list(this.showResolved()).subscribe({
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
    this.createForm.reset({ tableId: '', holdUntil: this.defaultHoldUntil(), guestName: null, guestPhone: null, notes: null });
    this.isCreateModalOpen.set(true);
  }

  closeCreateModal(): void {
    this.isCreateModalOpen.set(false);
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
      // input datetime-local devolve "yyyy-MM-ddTHH:mm" (hora local) — o backend espera LocalDateTime,
      // que aceita exatamente esse formato.
      holdUntil: value.holdUntil,
      guestName: value.guestName?.trim() || undefined,
      guestPhone: value.guestPhone?.trim() || undefined,
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

  // datetime-local precisa do formato "yyyy-MM-ddTHH:mm" em hora local — default: daqui a 1h.
  private defaultHoldUntil(): string {
    const d = new Date(Date.now() + 60 * 60 * 1000);
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
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
