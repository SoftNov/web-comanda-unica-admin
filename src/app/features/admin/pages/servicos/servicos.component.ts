import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EMPTY, Subscription, defer, retry, timer } from 'rxjs';
import {
  ApiErrorResponse,
  CreateTableServiceRequestRequest,
  ServiceRequestStatus,
  ServiceRequestType,
  ServiceRequestsService,
  TableServiceRequestResponse
} from '../../../../shared/services/service-requests.service';
import { RestaurantTableResponse, TablesService } from '../../../../shared/services/tables.service';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import { autoDismiss } from '../../../../shared/utils/auto-dismiss.util';
import { brDateTimeFormat, parseApiDate } from '../../../../shared/utils/datetime.util';
import { AuthService } from '../../../auth/services/auth.service';

const WS_RETRY_DELAY_MS = 5000;
const WS_SILENT_RETRIES = 3;

// RESOLVED nunca vira coluna: o backend já não retorna solicitações resolvidas (ver
// TableServiceRequestServiceImpl#listActive), então só existem duas colunas ativas no board.
const BOARD_COLUMNS: ServiceRequestStatus[] = ['OPEN', 'IN_PROGRESS'];

const STATUS_LABELS: Record<ServiceRequestStatus, string> = {
  OPEN: 'Aberta',
  IN_PROGRESS: 'Em atendimento',
  RESOLVED: 'Atendida'
};

const TYPE_LABELS: Record<ServiceRequestType, string> = {
  CLEANING: 'Limpeza',
  CALL_WAITER: 'Chamar garçom',
  CALL_CASHIER: 'Chamar caixa',
  COMPLAINT: 'Reclamação',
  HELP: 'Ajuda'
};

const TYPE_ICONS: Record<ServiceRequestType, string> = {
  CLEANING: 'cleaning_services',
  CALL_WAITER: 'room_service',
  CALL_CASHIER: 'point_of_sale',
  COMPLAINT: 'report_problem',
  HELP: 'help'
};

// Próximo status ao avançar a solicitação (botão principal de cada card) — undefined em RESOLVED,
// status terminal sem mais avanço possível.
const NEXT_STATUS: Partial<Record<ServiceRequestStatus, ServiceRequestStatus>> = {
  OPEN: 'IN_PROGRESS',
  IN_PROGRESS: 'RESOLVED'
};

const NEXT_ACTION_LABEL: Partial<Record<ServiceRequestStatus, string>> = {
  OPEN: 'Assumir',
  IN_PROGRESS: 'Concluir atendimento'
};

@Component({
  selector: 'app-admin-servicos',
  standalone: true,
  imports: [ReactiveFormsModule, RippleDirective],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.scss'
})
export class ServicosComponent implements OnDestroy {
  private readonly fb = new FormBuilder();
  private readonly serviceRequestsService = inject(ServiceRequestsService);
  private readonly tablesService = inject(TablesService);
  private readonly authService = inject(AuthService);

  private readonly dateTimeFormatter = brDateTimeFormat({ dateStyle: 'short', timeStyle: 'short' });
  private readonly timeFormatter = brDateTimeFormat({ timeStyle: 'short' });

  readonly selectedCompany = this.authService.selectedCompany;

  readonly requests = signal<TableServiceRequestResponse[]>([]);
  readonly isLoading = signal(true);
  readonly listError = signal<string | null>(null);

  readonly columns = BOARD_COLUMNS;

  readonly requestsByStatus = computed<Map<ServiceRequestStatus, TableServiceRequestResponse[]>>(() => {
    const grouped = new Map<ServiceRequestStatus, TableServiceRequestResponse[]>();
    for (const request of this.requests()) {
      const bucket = grouped.get(request.status) ?? [];
      bucket.push(request);
      grouped.set(request.status, bucket);
    }
    return grouped;
  });

  readonly movingRequestId = signal<string | null>(null);
  readonly actionError = signal<string | null>(null);

  // --- Nova solicitação (modal) ---------------------------------------------------
  readonly tables = signal<RestaurantTableResponse[]>([]);
  readonly types = signal<ServiceRequestType[]>([]);
  readonly isCreateModalOpen = signal(false);
  readonly isSubmittingCreate = signal(false);
  readonly createError = signal<string | null>(null);

  readonly createForm = this.fb.nonNullable.group({
    tableId: this.fb.nonNullable.control('', Validators.required),
    type: this.fb.nonNullable.control<ServiceRequestType>('CLEANING', Validators.required),
    notes: this.fb.control<string | null>(null)
  });

  private requestsSubscription?: Subscription;

  constructor() {
    this.loadTables();
    this.loadTypes();
    this.connectRealtimeRequests();
  }

  ngOnDestroy(): void {
    this.requestsSubscription?.unsubscribe();
  }

  // --- Apresentação -------------------------------------------------------------
  statusLabel(status: ServiceRequestStatus): string {
    return STATUS_LABELS[status];
  }

  typeLabel(type: ServiceRequestType): string {
    return TYPE_LABELS[type];
  }

  typeIcon(type: ServiceRequestType): string {
    return TYPE_ICONS[type];
  }

  nextActionLabel(status: ServiceRequestStatus): string | undefined {
    return NEXT_ACTION_LABEL[status];
  }

  canAdvance(request: TableServiceRequestResponse): boolean {
    return !!NEXT_STATUS[request.status];
  }

  requestOrigin(request: TableServiceRequestResponse): string {
    if (request.requestedByCustomerName) {
      return `Cliente: ${request.requestedByCustomerName}`;
    }
    if (request.requestedByUserName) {
      return `Aberto por ${request.requestedByUserName}`;
    }
    return '—';
  }

  formatDateTime(value: string | undefined | null): string {
    const parsed = parseApiDate(value);
    return parsed ? this.dateTimeFormatter.format(parsed) : '—';
  }

  formatTime(value: string | undefined | null): string {
    const parsed = parseApiDate(value);
    return parsed ? this.timeFormatter.format(parsed) : '—';
  }

  requestsFor(status: ServiceRequestStatus): TableServiceRequestResponse[] {
    return this.requestsByStatus().get(status) ?? [];
  }

  // --- Tempo real ---------------------------------------------------------------
  refresh(): void {
    this.connectRealtimeRequests();
  }

  private connectRealtimeRequests(): void {
    const companyId = this.selectedCompany()?.companyId;
    if (!companyId) {
      return;
    }

    this.requestsSubscription?.unsubscribe();
    this.isLoading.set(true);
    this.listError.set(null);

    // Mesma estratégia de reconexão do dashboard/pedidos (ver DashboardComponent.connectRealtimeSummary):
    // o WebSocket se reconecta sozinho com um pequeno atraso; só expõe erro na tela depois de
    // algumas tentativas seguidas sem sucesso, resetando a contagem após reconectar. defer(): cada
    // NOVA tentativa busca o token de novo em vez de reusar o de quando connectRealtimeRequests
    // foi chamado pela primeira vez — sem isso, um token expirado ficava sendo reenviado pra
    // sempre nas tentativas seguintes, martelando o backend mesmo depois de um novo login. Sem
    // token válido, desloga e para de tentar.
    this.requestsSubscription = defer(() => {
      const token = this.authService.getAccessToken();
      if (!token) {
        this.authService.logout();
        return EMPTY;
      }
      return this.serviceRequestsService.connectRealtime(companyId, token);
    })
      .pipe(
        retry({
          delay: (_, retryCount) => {
            if (retryCount >= WS_SILENT_RETRIES) {
              this.isLoading.set(false);
              this.listError.set('Não foi possível conectar à atualização em tempo real dos serviços.');
            }
            return timer(WS_RETRY_DELAY_MS);
          },
          resetOnSuccess: true
        })
      )
      .subscribe({
        next: (response) => {
          this.requests.set(response);
          this.isLoading.set(false);
          this.listError.set(null);
        },
        error: () => {
          this.isLoading.set(false);
          this.listError.set('Não foi possível conectar à atualização em tempo real dos serviços.');
        }
      });
  }

  // --- Movimentação de status -----------------------------------------------------
  advance(request: TableServiceRequestResponse): void {
    const next = NEXT_STATUS[request.status];
    if (!next || this.movingRequestId()) {
      return;
    }

    this.movingRequestId.set(request.id);
    this.actionError.set(null);

    this.serviceRequestsService.updateStatus(request.id, { status: next }).subscribe({
      next: (updated) => {
        this.movingRequestId.set(null);
        this.applyUpdatedRequest(request, updated);
      },
      error: (error: HttpErrorResponse) => {
        this.movingRequestId.set(null);
        this.actionError.set(this.resolveErrorMessage(error));
        autoDismiss(this.actionError, null);
      }
    });
  }

  private applyUpdatedRequest(original: TableServiceRequestResponse, updated: TableServiceRequestResponse): void {
    this.requests.update((list) => {
      if (updated.status === 'RESOLVED') {
        return list.filter((current) => current.id !== original.id);
      }
      return list.map((current) => (current.id === original.id ? updated : current));
    });
  }

  // --- Nova solicitação (modal) ----------------------------------------------------
  openCreateModal(): void {
    this.createError.set(null);
    this.createForm.reset({ tableId: '', type: 'CLEANING', notes: null });
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

    const payload: CreateTableServiceRequestRequest = {
      tableId: value.tableId,
      type: value.type,
      notes: value.notes || undefined
    };

    this.serviceRequestsService.create(payload).subscribe({
      next: (created) => {
        this.isSubmittingCreate.set(false);
        this.isCreateModalOpen.set(false);
        this.requests.update((list) => [...list, created]);
      },
      error: (error: HttpErrorResponse) => {
        this.isSubmittingCreate.set(false);
        this.createError.set(this.resolveErrorMessage(error));
        autoDismiss(this.createError, null);
      }
    });
  }

  private loadTables(): void {
    this.tablesService.list({ status: 'ACTIVE', page: 0, size: 200, sortBy: 'number', sortDirection: 'ASC' }).subscribe({
      next: (response) => this.tables.set(response.content),
      error: () => this.tables.set([])
    });
  }

  private loadTypes(): void {
    this.serviceRequestsService.listTypes().subscribe({
      next: (types) => this.types.set(types),
      error: () => this.types.set(['CLEANING', 'CALL_WAITER', 'CALL_CASHIER', 'COMPLAINT', 'HELP'])
    });
  }

  // --- Erros --------------------------------------------------------------------
  private resolveErrorMessage(error: HttpErrorResponse): string {
    const body = error.error as ApiErrorResponse | undefined;
    if (body?.mensagem) {
      return body.mensagem;
    }
    if (body?.titulo) {
      return body.titulo;
    }
    if (error.status === 404) {
      return 'Mesa ou solicitação não encontrada.';
    }
    if (error.status === 403) {
      return 'Você não tem permissão para realizar esta ação.';
    }
    if (error.status === 422) {
      return 'Não é possível mover a solicitação para este status a partir do status atual.';
    }
    return 'Não foi possível concluir a operação. Tente novamente em instantes.';
  }
}