import { CdkDrag, CdkDragDrop, CdkDragPlaceholder, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialIconComponent } from '../../../../shared/components/social-icon/social-icon.component';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import {
  CAMPAIGN_STATUSES,
  CampaignLead,
  CampaignStatus,
  CampaignsService,
  campaignStatusLabel,
  formatLeadPhone,
  leadWhatsappUrl
} from '../../../../shared/services/campaigns.service';
import { brDateTimeFormat, parseApiDate } from '../../../../shared/utils/datetime.util';

const ITEMS_PER_COLUMN = 30;
const SEARCH_DEBOUNCE_MS = 400;

interface BoardColumn {
  status: CampaignStatus;
  label: string;
  icon: string;
  total: number;
  items: CampaignLead[];
  page: number;
  isLoadingMore: boolean;
}

// Funil comercial dos leads da landing page dos anúncios, em kanban: uma coluna por etapa (Novo →
// Contratou). Arrastar o card muda a etapa; o card leva à página do contato (anotações e call).
// Acesso do platform admin e do perfil COMMERCIAL.
@Component({
  selector: 'app-admin-campanhas',
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, CdkDrag, CdkDragPlaceholder, RouterLink, RippleDirective, SocialIconComponent],
  templateUrl: './campanhas.component.html',
  styleUrl: './campanhas.component.scss'
})
export class CampanhasComponent {
  private readonly campaignsService = inject(CampaignsService);
  private readonly shortDateTime = brDateTimeFormat({ day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
  private readonly shortDate = brDateTimeFormat({ day: '2-digit', month: '2-digit', year: '2-digit' });
  private searchTimer: ReturnType<typeof setTimeout> | null = null;

  readonly search = signal('');
  readonly columns = signal<BoardColumn[]>([]);
  readonly isLoading = signal(false);
  readonly loadError = signal<string | null>(null);
  readonly moveError = signal<string | null>(null);

  readonly formatPhone = formatLeadPhone;
  readonly whatsappUrl = leadWhatsappUrl;

  constructor() {
    this.reload();
  }

  formatShortDateTime(value: string | null): string {
    const parsed = parseApiDate(value);
    return parsed ? this.shortDateTime.format(parsed).replace(',', ' às') : '';
  }

  formatShortDate(value: string | null): string {
    const parsed = parseApiDate(value);
    return parsed ? this.shortDate.format(parsed) : '';
  }

  // Call já passou: o card mostra o horário sem destaque.
  isPastMeeting(lead: CampaignLead): boolean {
    const parsed = parseApiDate(lead.meetingAt);
    return !!parsed && parsed.getTime() < Date.now();
  }

  onSearchChange(value: string): void {
    this.search.set(value);
    if (this.searchTimer) {
      clearTimeout(this.searchTimer);
    }
    this.searchTimer = setTimeout(() => this.reload(), SEARCH_DEBOUNCE_MS);
  }

  reload(): void {
    this.isLoading.set(true);
    this.loadError.set(null);
    this.campaignsService.board(this.search().trim() || null, ITEMS_PER_COLUMN).subscribe({
      next: (board) => {
        this.columns.set(
          CAMPAIGN_STATUSES.map((status) => {
            const column = board.columns.find((item) => item.status === status.value);
            return {
              status: status.value,
              label: status.label,
              icon: status.icon,
              total: column?.total ?? 0,
              items: column?.items ?? [],
              page: 0,
              isLoadingMore: false
            };
          })
        );
        this.isLoading.set(false);
      },
      error: () => {
        this.loadError.set('Não foi possível carregar os leads das campanhas.');
        this.isLoading.set(false);
      }
    });
  }

  loadMore(column: BoardColumn): void {
    const nextPage = column.page + 1;
    this.patchColumn(column.status, { isLoadingMore: true });
    this.campaignsService
      .list({ status: column.status, search: this.search().trim() || null, page: nextPage, size: ITEMS_PER_COLUMN })
      .subscribe({
        next: (result) =>
          this.columns.update((columns) =>
            columns.map((item) =>
              item.status === column.status
                ? {
                    ...item,
                    // Ignora quem já está na coluna (ex: card movido para cá antes de carregar a página).
                    items: [...item.items, ...result.content.filter((lead) => !item.items.some((current) => current.id === lead.id))],
                    total: result.totalElements,
                    page: nextPage,
                    isLoadingMore: false
                  }
                : item
            )
          ),
        error: () => this.patchColumn(column.status, { isLoadingMore: false })
      });
  }

  // Move o card na hora (otimista) e desfaz se a API recusar.
  onDrop(event: CdkDragDrop<CampaignStatus, CampaignStatus, CampaignLead>): void {
    const lead = event.item.data;
    const from = event.previousContainer.data;
    const to = event.container.data;
    if (from === to) {
      return;
    }

    this.moveError.set(null);
    this.moveLead(lead, from, to, event.currentIndex);

    this.campaignsService.updateStatus(lead.id, to).subscribe({
      next: (updated) => this.replaceLead(to, updated),
      error: () => {
        this.moveLead({ ...lead, status: to }, to, from, 0);
        this.replaceLead(from, lead);
        this.moveError.set(`Não foi possível mover ${lead.name} para "${campaignStatusLabel(to)}". Tente novamente.`);
      }
    });
  }

  private moveLead(lead: CampaignLead, from: CampaignStatus, to: CampaignStatus, index: number): void {
    this.columns.update((columns) =>
      columns.map((column) => {
        if (column.status === from) {
          return { ...column, items: column.items.filter((item) => item.id !== lead.id), total: Math.max(column.total - 1, 0) };
        }
        if (column.status === to) {
          const items = [...column.items];
          items.splice(Math.min(index, items.length), 0, { ...lead, status: to });
          return { ...column, items, total: column.total + 1 };
        }
        return column;
      })
    );
  }

  private replaceLead(status: CampaignStatus, lead: CampaignLead): void {
    this.columns.update((columns) =>
      columns.map((column) =>
        column.status === status ? { ...column, items: column.items.map((item) => (item.id === lead.id ? lead : item)) } : column
      )
    );
  }

  private patchColumn(status: CampaignStatus, patch: Partial<BoardColumn>): void {
    this.columns.update((columns) => columns.map((column) => (column.status === status ? { ...column, ...patch } : column)));
  }
}
