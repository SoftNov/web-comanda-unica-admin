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
const FILTER_DEBOUNCE_MS = 400;
const JOB_NOTICE_MS = 5_000;

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

// O que precisa de atenção vem primeiro: é o que quem está ao lado da impressora procura.
const JOB_STATUS_FILTERS: PrintJobStatus[] = ['ERROR', 'UNCONFIRMED', 'PENDING', 'PROCESSING', 'PRINTED', 'CANCELLED'];

const EVENT_ICON: Record<PrintEventType, string> = {
  ORDER_CREATED: 'receipt_long',
  ORDER_CANCELLED: 'cancel',
  ITEM_CANCELLED: 'remove_circle_outline',
  ORDER_NOTES_CHANGED: 'edit_note',
  PAYMENT_RECEIVED: 'payments',
  TEST: 'print'
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
  private readonly timeFormatter = brDateTimeFormat({ hour: '2-digit', minute: '2-digit' });
  private readonly dayFormatter = brDateTimeFormat({ day: '2-digit', month: '2-digit', year: 'numeric' });
  private filterTimer: ReturnType<typeof setTimeout> | null = null;
  private noticeTimer: ReturnType<typeof setTimeout> | null = null;
  private jobsRequest = 0;
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
  readonly confirming = signal<{ kind: 'printer' | 'sector' | 'agent-revoke' | 'agent-delete' | 'job-cancel'; id: string; name: string } | null>(null);

  readonly jobs = signal<PrintJobPage | null>(null);
  readonly isLoadingJobs = signal(false);
  readonly loadJobsFailed = signal(false);
  // O que está sendo digitado fica separado do filtro aplicado: a atualização automática não pode
  // buscar um número pela metade.
  readonly orderNumberInput = signal<number | null>(null);
  readonly filterOrderNumber = signal<number | null>(null);
  readonly filterStatus = signal<PrintJobStatus | ''>('');
  readonly filterPrinterId = signal('');
  readonly jobPage = signal(0);
  readonly jobStatuses = JOB_STATUS_FILTERS;
  readonly problemCounts = signal<Partial<Record<PrintJobStatus, number>>>({});
  readonly expandedJobId = signal<string | null>(null);
  readonly jobNotice = signal<{ jobId: string; type: 'ok' | 'error'; text: string } | null>(null);

  readonly hasJobFilters = computed(
    () => this.orderNumberInput() != null || this.filterStatus() !== '' || this.filterPrinterId() !== ''
  );

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
    this.clearTimer(this.filterTimer);
    this.clearTimer(this.noticeTimer);
  }

  private clearTimer(timer: ReturnType<typeof setTimeout> | null): void {
    if (timer) {
      clearTimeout(timer);
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
      if (this.canManage()) {
        this.printing.listAgents().subscribe({ next: (v) => this.agents.set(v), error: () => undefined });
      }
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
      'agent-delete': () => this.printing.deleteAgent(action.id),
      'job-cancel': () => this.printing.cancelJob(action.id)
    };
    this.isSaving.set(true);
    calls[action.kind]().subscribe({
      next: () => {
        this.isSaving.set(false);
        this.confirming.set(null);
        if (action.kind === 'job-cancel') {
          this.showJobNotice(action.id, 'ok', 'Impressão cancelada.');
          this.loadJobs(true);
          return;
        }
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
    this.clearTimer(this.filterTimer);
    this.filterOrderNumber.set(this.orderNumberInput());
    this.jobPage.set(0);
    this.expandedJobId.set(null);
    this.loadJobs();
  }

  onOrderNumberInput(value: number | null): void {
    this.orderNumberInput.set(value);
    this.clearTimer(this.filterTimer);
    this.filterTimer = setTimeout(() => this.applyJobFilter(), FILTER_DEBOUNCE_MS);
  }

  selectStatusFilter(status: PrintJobStatus | ''): void {
    this.filterStatus.set(status);
    this.applyJobFilter();
  }

  selectPrinterFilter(printerId: string): void {
    this.filterPrinterId.set(printerId);
    this.applyJobFilter();
  }

  clearJobFilters(): void {
    this.orderNumberInput.set(null);
    this.filterStatus.set('');
    this.filterPrinterId.set('');
    this.applyJobFilter();
  }

  changeJobPage(delta: number, listTop: HTMLElement): void {
    this.jobPage.update((page) => Math.max(0, page + delta));
    this.expandedJobId.set(null);
    this.loadJobs();
    listTop.scrollIntoView({ block: 'start' });
  }

  loadJobs(silent = false): void {
    if (!silent) {
      this.isLoadingJobs.set(true);
    }
    // Só a resposta mais recente vale: a atualização automática pode responder depois de um filtro novo.
    const request = ++this.jobsRequest;
    this.printing
      .searchJobs({
        status: this.filterStatus(),
        orderNumber: this.filterOrderNumber(),
        printerId: this.filterPrinterId(),
        page: this.jobPage()
      })
      .subscribe({
        next: (page) => {
          if (request !== this.jobsRequest) {
            return;
          }
          this.isLoadingJobs.set(false);
          this.loadJobsFailed.set(false);
          // A lista encolheu e a página atual deixou de existir (ex.: impressões canceladas).
          if (page.content.length === 0 && page.page > 0) {
            this.jobPage.set(Math.max(page.totalPages - 1, 0));
            this.loadJobs(silent);
            return;
          }
          this.jobs.set(page);
        },
        error: (error) => {
          if (request !== this.jobsRequest) {
            return;
          }
          this.isLoadingJobs.set(false);
          if (!silent) {
            this.loadJobsFailed.set(true);
            this.message.set({ type: 'error', text: this.errorText(error, 'Não foi possível carregar o histórico.') });
          }
        }
      });
    this.loadProblemCount('ERROR');
    this.loadProblemCount('UNCONFIRMED');
  }

  private loadProblemCount(status: PrintJobStatus): void {
    this.printing.searchJobs({ status, printerId: this.filterPrinterId(), size: 1 }).subscribe({
      next: (page) => this.problemCounts.update((counts) => ({ ...counts, [status]: page.totalElements })),
      error: () => undefined
    });
  }

  showOrderHistory(job: PrintJobResponse): void {
    this.orderNumberInput.set(job.orderNumber);
    this.filterStatus.set('');
    this.filterPrinterId.set('');
    this.applyJobFilter();
  }

  showPrinterHistory(printer: PrinterResponse): void {
    this.orderNumberInput.set(null);
    this.filterStatus.set('');
    this.filterPrinterId.set(printer.id);
    this.filterOrderNumber.set(null);
    this.jobPage.set(0);
    this.selectTab('history');
  }

  toggleJobDetails(job: PrintJobResponse): void {
    this.expandedJobId.update((id) => (id === job.id ? null : job.id));
  }

  // Em ERROR nada saiu: quem resolve é "Tentar de novo", sem a marca de reimpressão no cupom.
  canReprint(job: PrintJobResponse): boolean {
    return job.status !== 'PENDING' && job.status !== 'PROCESSING' && job.status !== 'ERROR';
  }

  jobAction(job: PrintJobResponse, action: 'reprint' | 'retry'): void {
    this.busyId.set(job.id);
    const call = action === 'reprint' ? this.printing.reprintJob(job.id) : this.printing.retryJob(job.id);
    call.subscribe({
      next: () => {
        this.busyId.set(null);
        this.showJobNotice(job.id, 'ok', 'Enviado para a fila de impressão.');
        this.loadJobs(true);
      },
      error: (error) => {
        this.busyId.set(null);
        this.showJobNotice(job.id, 'error', this.errorText(error, 'Não foi possível concluir.'));
      }
    });
  }

  confirmCancelJob(job: PrintJobResponse): void {
    this.confirming.set({ kind: 'job-cancel', id: job.id, name: this.jobTitle(job) });
  }

  // O aviso fica no próprio cartão: quem clicou pode estar longe do topo da página.
  private showJobNotice(jobId: string, type: 'ok' | 'error', text: string): void {
    this.clearTimer(this.noticeTimer);
    this.jobNotice.set({ jobId, type, text });
    this.noticeTimer = setTimeout(() => this.jobNotice.set(null), JOB_NOTICE_MS);
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

  eventIcon(type: PrintEventType): string {
    return EVENT_ICON[type] ?? 'print';
  }

  jobTitle(job: PrintJobResponse): string {
    return job.orderNumber ? `Pedido #${job.orderNumber}` : this.eventLabel(job.eventType);
  }

  // Comprovante: o valor pago diz o essencial; o restante fica nos detalhes.
  jobSummary(job: PrintJobResponse): string {
    const paid = job.itemLines.find((line) => line.startsWith('Valor pago'));
    return job.eventType === 'PAYMENT_RECEIVED' && paid ? paid : job.itemLines.join(', ');
  }

  // O que aconteceu e o que fazer, sem depender de dica de mouse (que não existe no celular).
  jobGuidance(job: PrintJobResponse): string | null {
    switch (job.status) {
      case 'PENDING':
        return 'Aguardando o computador da loja enviar para a impressora.';
      case 'PROCESSING':
        return 'Enviando para a impressora.';
      case 'UNCONFIRMED':
        return `${this.deliveryHint(job.deliveryState)} Se não saiu, reimprima.`;
      case 'ERROR':
        return job.errorMessage || 'O cupom não foi impresso.';
      default:
        return null;
    }
  }

  jobTime(value: string | null | undefined): string {
    const parsed = parseApiDate(value);
    if (!parsed) {
      return '—';
    }
    const day = this.dayFormatter.format(parsed);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (day === this.dayFormatter.format(new Date())) {
      return `Hoje, ${this.timeFormatter.format(parsed)}`;
    }
    if (day === this.dayFormatter.format(yesterday)) {
      return `Ontem, ${this.timeFormatter.format(parsed)}`;
    }
    return this.dateTimeFormatter.format(parsed);
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
