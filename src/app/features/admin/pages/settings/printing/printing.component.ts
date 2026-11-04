import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../../../../auth/services/auth.service';
import { RippleDirective } from '../../../../../shared/directives/ripple.directive';
import { MenuCategoriesService, MenuCategoryResponse } from '../../../../../shared/services/menu-categories.service';
import {
  DiscoveredPrinterResponse,
  PrintAgentResponse,
  PrintDeliveryState,
  PrintEventType,
  PrintJobPage,
  PrintJobResponse,
  PrintJobStatus,
  PrintSectorResponse,
  PrinterCodePage,
  PrinterConnectionType,
  PrinterResponse,
  PrinterStatus,
  PrintingService
} from '../../../../../shared/services/printing.service';
import { brDateTimeFormat, parseApiDate } from '../../../../../shared/utils/datetime.util';

type Tab = 'printers' | 'sectors' | 'agents' | 'history';
type Message = { type: 'ok' | 'error'; text: string } | null;

interface PrinterForm {
  id: string | null;
  name: string;
  connectionType: PrinterConnectionType;
  host: string;
  port: number | null;
  usbTarget: string;
  macAddress: string | null;
  agentId: string;
  paperWidthMm: number;
  codePage: PrinterCodePage;
  supportsCut: boolean;
  supportsQrCode: boolean;
  supportsStatus: boolean;
  active: boolean;
  // Veio da lista de impressoras encontradas: conexão e computador já estão definidos, ninguém digita.
  fromDiscovery: boolean;
}

interface SectorForm {
  id: string | null;
  name: string;
  description: string;
  printerId: string;
  fullOrderCopy: boolean;
  paymentReceipt: boolean;
  active: boolean;
  categoryIds: string[];
}

const DEFAULT_PORT = 9100;
const REFRESH_MS = 10_000;
const COPIED_FEEDBACK_MS = 2_000;

const PRINTER_STATUS: Record<PrinterStatus, { label: string; tone: string }> = {
  UNKNOWN: { label: 'Aguardando agente', tone: 'muted' },
  ONLINE: { label: 'Online', tone: 'success' },
  REACHABLE: { label: 'Acessível (sem status)', tone: 'info' },
  OFFLINE: { label: 'Sem conexão', tone: 'danger' },
  NO_PAPER: { label: 'Sem papel', tone: 'warning' },
  COVER_OPEN: { label: 'Tampa aberta', tone: 'warning' },
  ERROR: { label: 'Com erro', tone: 'danger' }
};

const JOB_STATUS: Record<PrintJobStatus, { label: string; tone: string }> = {
  PENDING: { label: 'Na fila', tone: 'info' },
  PROCESSING: { label: 'Enviando', tone: 'info' },
  PRINTED: { label: 'Impresso', tone: 'success' },
  UNCONFIRMED: { label: 'Sem confirmação', tone: 'warning' },
  ERROR: { label: 'Erro', tone: 'danger' },
  CANCELLED: { label: 'Cancelado', tone: 'muted' }
};

const EVENT_LABEL: Record<PrintEventType, string> = {
  ORDER_CREATED: 'Pedido',
  ORDER_CANCELLED: 'Cancelamento',
  ITEM_CANCELLED: 'Cancelamento de item',
  ORDER_NOTES_CHANGED: 'Observação alterada',
  PAYMENT_RECEIVED: 'Comprovante de pagamento',
  TEST: 'Teste'
};

const DELIVERY_HINT: Record<PrintDeliveryState, string> = {
  NOT_SENT: 'Nada foi enviado à impressora.',
  SEND_STARTED: 'O agente iniciou o envio.',
  SENT: 'Enviado à impressora, que não informa o resultado. Confira se o cupom saiu.',
  DEVICE_CONFIRMED: 'A impressora respondeu sem erro depois do envio.',
  UNKNOWN: 'O envio começou, mas o resultado é desconhecido. Confira se o cupom saiu antes de reimprimir.'
};

// Impressoras, setores, agentes e histórico de impressão. CASHIER só enxerga o histórico: é quem está
// ao lado da impressora quando um cupom não sai, mas não mexe na configuração (o backend também
// restringe, ver PrintJobController e os demais controllers de impressão).
@Component({
  selector: 'app-printing',
  standalone: true,
  imports: [FormsModule, RippleDirective],
  templateUrl: './printing.component.html',
  styleUrl: './printing.component.scss'
})
export class PrintingComponent implements OnInit, OnDestroy {
  private readonly printing = inject(PrintingService);
  private readonly categoriesService = inject(MenuCategoriesService);
  private readonly authService = inject(AuthService);
  private readonly dateTimeFormatter = brDateTimeFormat({ day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
  private refreshTimer: ReturnType<typeof setInterval> | null = null;

  readonly canManage = computed(() => {
    const company = this.authService.selectedCompany();
    return !!company && ['OWNER', 'COMMERCIAL', 'ADMIN', 'MANAGER'].includes(company.profileCode);
  });

  readonly tab = signal<Tab>('printers');
  readonly isLoading = signal(true);
  readonly loadError = signal(false);
  readonly message = signal<Message>(null);
  readonly busyId = signal<string | null>(null);

  readonly printers = signal<PrinterResponse[]>([]);
  readonly discovered = signal<DiscoveredPrinterResponse[]>([]);
  readonly sectors = signal<PrintSectorResponse[]>([]);
  readonly agents = signal<PrintAgentResponse[]>([]);
  readonly categories = signal<MenuCategoryResponse[]>([]);

  readonly printerForm = signal<PrinterForm | null>(null);
  readonly sectorForm = signal<SectorForm | null>(null);
  readonly formError = signal<string | null>(null);
  readonly isSaving = signal(false);

  readonly newAgentName = signal('');
  readonly pairingAgent = signal<PrintAgentResponse | null>(null);
  readonly keyCopied = signal(false);
  readonly installerUrl = this.printing.installerUrl;
  readonly confirming = signal<{ kind: 'printer' | 'sector' | 'agent-revoke' | 'agent-delete'; id: string; name: string } | null>(null);

  readonly jobs = signal<PrintJobPage | null>(null);
  readonly isLoadingJobs = signal(false);
  readonly filterOrderNumber = signal<number | null>(null);
  readonly filterStatus = signal<PrintJobStatus | ''>('');
  readonly jobPage = signal(0);
  readonly jobStatuses = Object.keys(JOB_STATUS) as PrintJobStatus[];

  // Categoria sem setor não imprime: melhor avisar do que o cupom simplesmente não sair.
  readonly unassignedCategories = computed(() => {
    const assigned = new Set(this.sectors().flatMap((sector) => sector.categories.map((category) => category.id)));
    return this.categories().filter((category) => category.active && !assigned.has(category.id));
  });

  // Sem setor marcado, o pagamento é registrado normalmente, mas o comprovante não sai.
  readonly missingReceiptSector = computed(() => {
    const active = this.sectors().filter((sector) => sector.active);
    return active.length > 0 && !active.some((sector) => sector.paymentReceipt);
  });

  readonly unassignedCategoryNames = computed(() => this.unassignedCategories().map((category) => category.name).join(', '));

  readonly hasOnlineAgent = computed(() => this.agents().some((agent) => agent.online));

  // Categorias que o setor em edição pode usar: as livres e as que já são dele.
  readonly selectableCategories = computed(() => {
    const form = this.sectorForm();
    const usedElsewhere = new Set(
      this.sectors()
        .filter((sector) => sector.id !== form?.id)
        .flatMap((sector) => sector.categories.map((category) => category.id))
    );
    return this.categories().filter((category) => !usedElsewhere.has(category.id));
  });

  ngOnInit(): void {
    if (!this.canManage()) {
      this.tab.set('history');
      this.isLoading.set(false);
      this.loadJobs();
    } else {
      this.load();
    }
    this.refreshTimer = setInterval(() => this.refresh(), REFRESH_MS);
  }

  ngOnDestroy(): void {
    if (this.refreshTimer) {
      clearInterval(this.refreshTimer);
    }
  }

  // -------------------------------------------------------------------------
  // Carga
  // -------------------------------------------------------------------------

  load(): void {
    this.isLoading.set(true);
    this.loadError.set(false);
    let pending = 5;
    const done = () => {
      pending -= 1;
      if (pending === 0) {
        this.isLoading.set(false);
      }
    };
    const fail = () => {
      this.loadError.set(true);
      done();
    };
    this.printing.listPrinters().subscribe({ next: (v) => { this.printers.set(v); done(); }, error: fail });
    this.printing.listSectors().subscribe({ next: (v) => { this.sectors.set(v); done(); }, error: fail });
    this.printing.listDiscoveredPrinters().subscribe({ next: (v) => { this.discovered.set(v); done(); }, error: fail });
    this.printing.listAgents().subscribe({
      next: (v) => {
        this.agents.set(v);
        // Primeiro acesso: o caminho começa instalando o programa, sem isso a tela de impressoras fica vazia.
        if (v.length === 0 && this.tab() === 'printers') {
          this.tab.set('agents');
        }
        done();
      },
      error: fail
    });
    this.categoriesService.list().subscribe({ next: (v) => { this.categories.set(v); done(); }, error: fail });
  }

  // Atualização silenciosa: estado das impressoras e dos agentes muda sozinho, pelo heartbeat. Falha aqui
  // não merece alerta: o próximo ciclo corrige.
  private refresh(): void {
    if (this.tab() === 'history') {
      this.loadJobs(true);
    } else if (this.canManage() && !this.printerForm() && !this.sectorForm()) {
      this.printing.listPrinters().subscribe({ next: (v) => this.printers.set(v), error: () => undefined });
      this.printing.listAgents().subscribe({ next: (v) => this.agents.set(v), error: () => undefined });
      this.printing.listDiscoveredPrinters().subscribe({ next: (v) => this.discovered.set(v), error: () => undefined });
    }
  }

  selectTab(tab: Tab): void {
    this.tab.set(tab);
    this.message.set(null);
    if (tab === 'history') {
      this.loadJobs();
    }
  }

  // -------------------------------------------------------------------------
  // Impressoras
  // -------------------------------------------------------------------------

  // Cadastro manual: só para quando a procura não encontra a impressora (ex.: em outra faixa da rede).
  newPrinter(): void {
    this.formError.set(null);
    this.printerForm.set({
      id: null,
      name: '',
      connectionType: 'NETWORK',
      host: '',
      port: DEFAULT_PORT,
      usbTarget: '',
      macAddress: null,
      agentId: '',
      paperWidthMm: 80,
      codePage: 'CP850',
      supportsCut: true,
      supportsQrCode: true,
      supportsStatus: true,
      active: true,
      fromDiscovery: false
    });
  }

  addDiscovered(found: DiscoveredPrinterResponse): void {
    this.formError.set(null);
    this.printerForm.set({
      id: null,
      name: '',
      connectionType: found.connectionType,
      host: found.host ?? '',
      port: found.port ?? DEFAULT_PORT,
      usbTarget: found.usbTarget ?? '',
      macAddress: found.macAddress,
      agentId: found.agentId,
      paperWidthMm: 80,
      codePage: 'CP850',
      supportsCut: true,
      supportsQrCode: true,
      supportsStatus: found.respondsToStatus,
      active: true,
      fromDiscovery: true
    });
  }

  discoveredLabel(found: DiscoveredPrinterResponse): string {
    return found.connectionType === 'USB' ? found.usbTarget ?? 'Impressora USB' : 'Impressora de rede';
  }

  editPrinter(printer: PrinterResponse): void {
    this.formError.set(null);
    this.printerForm.set({
      id: printer.id,
      name: printer.name,
      connectionType: printer.connectionType,
      host: printer.host ?? '',
      port: printer.port ?? DEFAULT_PORT,
      usbTarget: printer.usbTarget ?? '',
      macAddress: null,
      agentId: printer.agentId ?? '',
      paperWidthMm: printer.paperWidthMm,
      codePage: printer.codePage,
      supportsCut: printer.supportsCut,
      supportsQrCode: printer.supportsQrCode,
      supportsStatus: printer.supportsStatus,
      active: printer.active,
      fromDiscovery: false
    });
  }

  updatePrinterForm<K extends keyof PrinterForm>(key: K, value: PrinterForm[K]): void {
    this.printerForm.update((form) => (form ? { ...form, [key]: value } : form));
  }

  savePrinter(): void {
    const form = this.printerForm();
    if (!form) {
      return;
    }
    const request = {
      name: form.name,
      connectionType: form.connectionType,
      host: form.connectionType === 'NETWORK' ? form.host : null,
      port: form.connectionType === 'NETWORK' ? form.port : null,
      usbTarget: form.connectionType === 'USB' ? form.usbTarget : null,
      macAddress: form.macAddress,
      agentId: form.agentId || null,
      paperWidthMm: Number(form.paperWidthMm),
      codePage: form.codePage,
      supportsCut: form.supportsCut,
      supportsQrCode: form.supportsQrCode,
      supportsStatus: form.supportsStatus,
      active: form.active
    };
    this.isSaving.set(true);
    const call = form.id ? this.printing.updatePrinter(form.id, request) : this.printing.createPrinter(request);
    call.subscribe({
      next: () => {
        this.isSaving.set(false);
        this.printerForm.set(null);
        this.message.set({ type: 'ok', text: 'Impressora salva.' });
        this.load();
      },
      error: (error) => {
        this.isSaving.set(false);
        this.formError.set(this.errorText(error, 'Não foi possível salvar a impressora.'));
      }
    });
  }

  testPrinter(printer: PrinterResponse): void {
    this.busyId.set(printer.id);
    this.printing.testPrinter(printer.id).subscribe({
      next: () => {
        this.busyId.set(null);
        const hint = this.hasOnlineAgent() ? 'acompanhe o resultado no histórico.' : 'nenhum computador está conectado agora; ele sai quando um conectar.';
        this.message.set({ type: 'ok', text: `Teste enviado para a fila de "${printer.name}": ${hint}` });
      },
      error: (error) => {
        this.busyId.set(null);
        this.message.set({ type: 'error', text: this.errorText(error, 'Não foi possível enviar o teste.') });
      }
    });
  }

  // -------------------------------------------------------------------------
  // Setores
  // -------------------------------------------------------------------------

  newSector(): void {
    this.formError.set(null);
    this.sectorForm.set({
      id: null,
      name: '',
      description: '',
      printerId: '',
      fullOrderCopy: false,
      // O primeiro setor já recebe os comprovantes: sem isso, eles não sairiam em lugar nenhum.
      paymentReceipt: !this.sectors().some((sector) => sector.paymentReceipt),
      active: true,
      categoryIds: []
    });
  }

  editSector(sector: PrintSectorResponse): void {
    this.formError.set(null);
    this.sectorForm.set({
      id: sector.id,
      name: sector.name,
      description: sector.description ?? '',
      printerId: sector.printerId ?? '',
      fullOrderCopy: sector.fullOrderCopy,
      paymentReceipt: sector.paymentReceipt,
      active: sector.active,
      categoryIds: sector.categories.map((category) => category.id)
    });
  }

  updateSectorForm<K extends keyof SectorForm>(key: K, value: SectorForm[K]): void {
    this.sectorForm.update((form) => (form ? { ...form, [key]: value } : form));
  }

  toggleSectorCategory(categoryId: string, checked: boolean): void {
    this.sectorForm.update((form) => {
      if (!form) {
        return form;
      }
      const categoryIds = checked ? [...form.categoryIds, categoryId] : form.categoryIds.filter((id) => id !== categoryId);
      return { ...form, categoryIds };
    });
  }

  saveSector(): void {
    const form = this.sectorForm();
    if (!form) {
      return;
    }
    const request = {
      name: form.name,
      description: form.description || null,
      printerId: form.printerId || null,
      fullOrderCopy: form.fullOrderCopy,
      paymentReceipt: form.paymentReceipt,
      active: form.active,
      categoryIds: form.fullOrderCopy ? [] : form.categoryIds
    };
    this.isSaving.set(true);
    const call = form.id ? this.printing.updateSector(form.id, request) : this.printing.createSector(request);
    call.subscribe({
      next: () => {
        this.isSaving.set(false);
        this.sectorForm.set(null);
        this.message.set({ type: 'ok', text: 'Setor salvo.' });
        this.load();
      },
      error: (error) => {
        this.isSaving.set(false);
        this.formError.set(this.errorText(error, 'Não foi possível salvar o setor.'));
      }
    });
  }

  // -------------------------------------------------------------------------
  // Agentes
  // -------------------------------------------------------------------------

  createAgent(): void {
    // O nome é opcional: o painel também mostra o nome real do computador depois de conectado.
    const name = this.newAgentName().trim() || `Computador ${this.agents().length + 1}`;
    this.isSaving.set(true);
    this.printing.createAgent(name).subscribe({
      next: (agent) => {
        this.isSaving.set(false);
        this.newAgentName.set('');
        this.pairingAgent.set(agent);
        this.load();
      },
      error: (error) => {
        this.isSaving.set(false);
        this.message.set({ type: 'error', text: this.errorText(error, 'Não foi possível gerar a chave.') });
      }
    });
  }

  regenerateCode(agent: PrintAgentResponse): void {
    this.busyId.set(agent.id);
    this.printing.regeneratePairingCode(agent.id).subscribe({
      next: (updated) => {
        this.busyId.set(null);
        this.pairingAgent.set(updated);
      },
      error: (error) => {
        this.busyId.set(null);
        this.message.set({ type: 'error', text: this.errorText(error, 'Não foi possível gerar a chave.') });
      }
    });
  }

  copyKey(key: string | null): void {
    if (!key || !navigator.clipboard) {
      return;
    }
    navigator.clipboard.writeText(key).then(
      () => {
        this.keyCopied.set(true);
        setTimeout(() => this.keyCopied.set(false), COPIED_FEEDBACK_MS);
      },
      () => undefined
    );
  }

  // -------------------------------------------------------------------------
  // Exclusões e revogação, sempre com confirmação
  // -------------------------------------------------------------------------

  confirmAction(): void {
    const action = this.confirming();
    if (!action) {
      return;
    }
    const calls: Record<typeof action.kind, () => Observable<unknown>> = {
      printer: () => this.printing.deletePrinter(action.id),
      sector: () => this.printing.deleteSector(action.id),
      'agent-revoke': () => this.printing.revokeAgent(action.id),
      'agent-delete': () => this.printing.deleteAgent(action.id)
    };
    this.isSaving.set(true);
    calls[action.kind]().subscribe({
      next: () => {
        this.isSaving.set(false);
        this.confirming.set(null);
        this.message.set({ type: 'ok', text: 'Feito.' });
        this.load();
      },
      error: (error) => {
        this.isSaving.set(false);
        this.confirming.set(null);
        this.message.set({ type: 'error', text: this.errorText(error, 'Não foi possível concluir.') });
      }
    });
  }

  // -------------------------------------------------------------------------
  // Histórico
  // -------------------------------------------------------------------------

  applyJobFilter(): void {
    this.jobPage.set(0);
    this.loadJobs();
  }

  changeJobPage(delta: number): void {
    this.jobPage.update((page) => Math.max(0, page + delta));
    this.loadJobs();
  }

  loadJobs(silent = false): void {
    if (!silent) {
      this.isLoadingJobs.set(true);
    }
    this.printing
      .searchJobs({ status: this.filterStatus(), orderNumber: this.filterOrderNumber(), page: this.jobPage() })
      .subscribe({
        next: (page) => {
          this.jobs.set(page);
          this.isLoadingJobs.set(false);
        },
        error: (error) => {
          this.isLoadingJobs.set(false);
          if (!silent) {
            this.message.set({ type: 'error', text: this.errorText(error, 'Não foi possível carregar o histórico.') });
          }
        }
      });
  }

  showOrderHistory(job: PrintJobResponse): void {
    this.filterOrderNumber.set(job.orderNumber);
    this.filterStatus.set('');
    this.applyJobFilter();
  }

  canReprint(job: PrintJobResponse): boolean {
    return job.status !== 'PENDING' && job.status !== 'PROCESSING';
  }

  jobAction(job: PrintJobResponse, action: 'reprint' | 'retry' | 'cancel'): void {
    this.busyId.set(job.id);
    const call =
      action === 'reprint'
        ? this.printing.reprintJob(job.id)
        : action === 'retry'
          ? this.printing.retryJob(job.id)
          : this.printing.cancelJob(job.id);
    call.subscribe({
      next: () => {
        this.busyId.set(null);
        this.message.set({ type: 'ok', text: action === 'cancel' ? 'Trabalho cancelado.' : 'Enviado para a fila de impressão.' });
        this.loadJobs(true);
      },
      error: (error) => {
        this.busyId.set(null);
        this.message.set({ type: 'error', text: this.errorText(error, 'Não foi possível concluir.') });
      }
    });
  }

  // -------------------------------------------------------------------------
  // Exibição
  // -------------------------------------------------------------------------

  printerStatus(status: PrinterStatus): { label: string; tone: string } {
    return PRINTER_STATUS[status] ?? PRINTER_STATUS.UNKNOWN;
  }

  jobStatus(status: PrintJobStatus): { label: string; tone: string } {
    return JOB_STATUS[status];
  }

  eventLabel(type: PrintEventType): string {
    return EVENT_LABEL[type] ?? type;
  }

  deliveryHint(state: PrintDeliveryState): string {
    return DELIVERY_HINT[state] ?? '';
  }

  dateTime(value: string | null | undefined): string {
    const parsed = parseApiDate(value);
    return parsed ? this.dateTimeFormatter.format(parsed) : '—';
  }

  private errorText(error: unknown, fallback: string): string {
    if (error instanceof HttpErrorResponse) {
      return error.error?.mensagemErro || error.error?.mensagem || fallback;
    }
    return fallback;
  }
}
