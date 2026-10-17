import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { SocialIconComponent } from '../../../../shared/components/social-icon/social-icon.component';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import {
  ApiErrorResponse,
  CAMPAIGN_STATUSES,
  CampaignLead,
  CampaignNote,
  CampaignStatus,
  CampaignsService,
  formatLeadPhone,
  leadInitials,
  leadWhatsappUrl
} from '../../../../shared/services/campaigns.service';
import {
  apiToBrDateTimeLocal,
  brDateTimeFormat,
  brDateTimeLocalFromNow,
  brDateTimeLocalToApi,
  parseApiDate
} from '../../../../shared/utils/datetime.util';

const DURATION_OPTIONS = [15, 30, 45, 60, 90];
const DEFAULT_DURATION = 30;
const NOTE_MAX_LENGTH = 5000;

type MeetingMode = 'google' | 'manual';

// Página do lead (aberta pelo kanban de Campanhas): etapa do funil, contato direto (WhatsApp/e-mail),
// call agendada — com sala do Google Meet criada pela API ou link informado à mão — e anotações da
// equipe comercial.
@Component({
  selector: 'app-admin-campanha-detalhe',
  standalone: true,
  imports: [RouterLink, RippleDirective, SocialIconComponent],
  templateUrl: './campanha-detalhe.component.html',
  styleUrl: './campanha-detalhe.component.scss'
})
export class CampanhaDetalheComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly campaignsService = inject(CampaignsService);
  private readonly authService = inject(AuthService);
  private readonly dateTimeFormatter = brDateTimeFormat({ dateStyle: 'short', timeStyle: 'short' });
  private readonly longDateTimeFormatter = brDateTimeFormat({
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit'
  });

  private readonly campaignId = this.route.snapshot.paramMap.get('id') ?? '';

  readonly statuses = CAMPAIGN_STATUSES;
  readonly durationOptions = DURATION_OPTIONS;
  readonly noteMaxLength = NOTE_MAX_LENGTH;

  readonly lead = signal<CampaignLead | null>(null);
  readonly notes = signal<CampaignNote[]>([]);
  readonly googleMeetEnabled = signal(false);
  readonly isLoading = signal(true);
  readonly loadError = signal<string | null>(null);

  readonly statusSaving = signal(false);
  readonly statusError = signal<string | null>(null);

  // Formulário da call
  readonly isEditingMeeting = signal(false);
  readonly meetingAt = signal('');
  readonly meetingDuration = signal(DEFAULT_DURATION);
  readonly meetingMode = signal<MeetingMode>('manual');
  readonly meetingUrl = signal('');
  readonly meetingSaving = signal(false);
  readonly meetingError = signal<string | null>(null);
  readonly linkCopied = signal(false);

  // Anotações
  readonly noteDraft = signal('');
  readonly noteSaving = signal(false);
  readonly noteError = signal<string | null>(null);
  readonly deletingNoteId = signal<string | null>(null);

  readonly whatsappUrl = computed(() => {
    const lead = this.lead();
    return lead ? leadWhatsappUrl(lead) : '';
  });

  readonly originTags = computed(() => {
    const lead = this.lead();
    if (!lead) return [];
    return [lead.utmSource, lead.utmMedium, lead.utmCampaign, lead.utmContent, lead.utmTerm].filter(
      (part): part is string => !!part
    );
  });

  readonly isPastMeeting = computed(() => {
    const parsed = parseApiDate(this.lead()?.meetingAt ?? null);
    return !!parsed && parsed.getTime() < Date.now();
  });

  readonly formatPhone = formatLeadPhone;
  readonly initials = leadInitials;

  constructor() {
    this.load();
  }

  formatDateTime(value: string | null | undefined): string {
    const parsed = parseApiDate(value ?? null);
    return parsed ? this.dateTimeFormatter.format(parsed) : '—';
  }

  formatLongDateTime(value: string | null | undefined): string {
    const parsed = parseApiDate(value ?? null);
    return parsed ? this.longDateTimeFormatter.format(parsed) : '—';
  }

  canDeleteNote(note: CampaignNote): boolean {
    return this.authService.isPlatformAdmin() || note.authorUserId === this.authService.currentUser()?.userId;
  }

  // Evento pronto no Google Agenda de quem clicou (com o lead como convidado) — útil quando a sala
  // foi criada à mão e a call ainda não está na agenda.
  googleCalendarUrl(lead: CampaignLead): string | null {
    const start = parseApiDate(lead.meetingAt);
    if (!start) return null;
    const end = new Date(start.getTime() + (lead.meetingDurationMinutes ?? DEFAULT_DURATION) * 60_000);
    const stamp = (date: Date) => date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: `Comanda Única — apresentação para ${lead.name}`,
      dates: `${stamp(start)}/${stamp(end)}`,
      details: `Call de apresentação da Comanda Única.${lead.meetingUrl ? `\n\nLink: ${lead.meetingUrl}` : ''}`,
      add: lead.email
    });
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  }

  // ---------------------------------------------------------------------------
  // Etapa
  // ---------------------------------------------------------------------------

  onStatusChange(value: string): void {
    const lead = this.lead();
    if (!lead || value === lead.status) return;

    this.statusSaving.set(true);
    this.statusError.set(null);
    this.campaignsService.updateStatus(lead.id, value as CampaignStatus).subscribe({
      next: (updated) => {
        this.lead.set(updated);
        this.statusSaving.set(false);
      },
      error: (error: HttpErrorResponse) => {
        this.statusError.set(this.resolveErrorMessage(error, 'Não foi possível mudar a etapa.'));
        this.statusSaving.set(false);
        // Força o select a voltar para a etapa atual.
        this.lead.set({ ...lead });
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Call
  // ---------------------------------------------------------------------------

  startMeetingForm(): void {
    const lead = this.lead();
    if (!lead) return;

    this.meetingAt.set(apiToBrDateTimeLocal(lead.meetingAt) ?? this.defaultMeetingAt());
    this.meetingDuration.set(lead.meetingDurationMinutes ?? DEFAULT_DURATION);
    // Remarcar uma sala criada pela API mantém a mesma sala; sem integração, só link manual.
    this.meetingMode.set(lead.meetingAt ? (lead.meetingFromGoogle ? 'google' : 'manual') : this.googleMeetEnabled() ? 'google' : 'manual');
    this.meetingUrl.set(lead.meetingFromGoogle ? '' : (lead.meetingUrl ?? ''));
    this.meetingError.set(null);
    this.isEditingMeeting.set(true);
  }

  cancelMeetingForm(): void {
    this.isEditingMeeting.set(false);
    this.meetingError.set(null);
  }

  saveMeeting(): void {
    const lead = this.lead();
    if (!lead) return;

    const meetingAt = brDateTimeLocalToApi(this.meetingAt());
    if (!meetingAt) {
      this.meetingError.set('Informe a data e o horário da call.');
      return;
    }

    const createGoogleMeet = this.meetingMode() === 'google';
    const meetingUrl = this.meetingUrl().trim();
    if (!createGoogleMeet && !/^https?:\/\/\S+$/.test(meetingUrl)) {
      this.meetingError.set('Cole o link da call (começando com https://).');
      return;
    }

    this.meetingSaving.set(true);
    this.meetingError.set(null);
    this.campaignsService
      .scheduleMeeting(lead.id, {
        meetingAt,
        durationMinutes: this.meetingDuration(),
        createGoogleMeet,
        meetingUrl: createGoogleMeet ? null : meetingUrl
      })
      .subscribe({
        next: (updated) => {
          this.lead.set(updated);
          this.meetingSaving.set(false);
          this.isEditingMeeting.set(false);
        },
        error: (error: HttpErrorResponse) => {
          this.meetingError.set(this.resolveErrorMessage(error, 'Não foi possível agendar a call.'));
          this.meetingSaving.set(false);
        }
      });
  }

  cancelMeeting(): void {
    const lead = this.lead();
    if (!lead || !confirm('Cancelar a call agendada com este lead?')) return;

    this.meetingSaving.set(true);
    this.meetingError.set(null);
    this.campaignsService.cancelMeeting(lead.id).subscribe({
      next: (updated) => {
        this.lead.set(updated);
        this.meetingSaving.set(false);
      },
      error: (error: HttpErrorResponse) => {
        this.meetingError.set(this.resolveErrorMessage(error, 'Não foi possível cancelar a call.'));
        this.meetingSaving.set(false);
      }
    });
  }

  copyMeetingLink(): void {
    const url = this.lead()?.meetingUrl;
    if (!url || !navigator.clipboard) return;
    navigator.clipboard.writeText(url).then(() => {
      this.linkCopied.set(true);
      setTimeout(() => this.linkCopied.set(false), 2000);
    });
  }

  // ---------------------------------------------------------------------------
  // Anotações
  // ---------------------------------------------------------------------------

  onNoteKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      this.saveNote();
    }
  }

  saveNote(): void {
    const lead = this.lead();
    const content = this.noteDraft().trim();
    if (!lead || !content || this.noteSaving()) return;

    this.noteSaving.set(true);
    this.noteError.set(null);
    this.campaignsService.addNote(lead.id, content).subscribe({
      next: (note) => {
        this.notes.update((notes) => [note, ...notes]);
        this.noteDraft.set('');
        this.noteSaving.set(false);
      },
      error: (error: HttpErrorResponse) => {
        this.noteError.set(this.resolveErrorMessage(error, 'Não foi possível salvar a anotação.'));
        this.noteSaving.set(false);
      }
    });
  }

  deleteNote(note: CampaignNote): void {
    const lead = this.lead();
    if (!lead || !confirm('Excluir esta anotação?')) return;

    this.deletingNoteId.set(note.id);
    this.noteError.set(null);
    this.campaignsService.deleteNote(lead.id, note.id).subscribe({
      next: () => {
        this.notes.update((notes) => notes.filter((item) => item.id !== note.id));
        this.deletingNoteId.set(null);
      },
      error: (error: HttpErrorResponse) => {
        this.noteError.set(this.resolveErrorMessage(error, 'Não foi possível excluir a anotação.'));
        this.deletingNoteId.set(null);
      }
    });
  }

  private load(): void {
    this.isLoading.set(true);
    this.loadError.set(null);
    this.campaignsService.get(this.campaignId).subscribe({
      next: (detail) => {
        this.lead.set(detail.campaign);
        this.notes.set(detail.notes);
        this.googleMeetEnabled.set(detail.googleMeetEnabled);
        this.isLoading.set(false);
      },
      error: (error: HttpErrorResponse) => {
        this.loadError.set(error.status === 404 ? 'Lead não encontrado.' : 'Não foi possível carregar o lead.');
        this.isLoading.set(false);
      }
    });
  }

  // Padrão do formulário: amanhã, no mesmo horário de agora, arredondado para a hora cheia.
  private defaultMeetingAt(): string {
    const value = brDateTimeLocalFromNow(24 * 60);
    return `${value.slice(0, 14)}00`;
  }

  private resolveErrorMessage(error: HttpErrorResponse, fallback: string): string {
    const body = error.error as ApiErrorResponse | undefined;
    return body?.mensagem || body?.titulo || fallback;
  }
}
