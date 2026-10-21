import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ApiErrorResponse {
  titulo?: string;
  mensagem?: string;
  mensagemErro?: string;
  codigoErro?: string;
}

// Etapas do funil comercial — a ordem é a das colunas do kanban (ver CampaignStatus no backend).
export type CampaignStatus = 'NEW' | 'IN_CONTACT' | 'SCHEDULED' | 'NOT_INTERESTED' | 'INTERESTED_NOT_HIRED' | 'HIRED';

export const CAMPAIGN_STATUSES: { value: CampaignStatus; label: string; icon: string }[] = [
  { value: 'NEW', label: 'Novo', icon: 'fiber_new' },
  { value: 'IN_CONTACT', label: 'Em contato', icon: 'forum' },
  { value: 'SCHEDULED', label: 'Agendado', icon: 'event' },
  { value: 'NOT_INTERESTED', label: 'Não tem interesse', icon: 'block' },
  { value: 'INTERESTED_NOT_HIRED', label: 'Interesse, mas não contratou', icon: 'hourglass_bottom' },
  { value: 'HIRED', label: 'Contratou', icon: 'verified' }
];

export function campaignStatusLabel(status: CampaignStatus): string {
  return CAMPAIGN_STATUSES.find((item) => item.value === status)?.label ?? status;
}

export interface CampaignLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmContent: string | null;
  utmTerm: string | null;
  status: CampaignStatus;
  statusUpdatedAt: string | null;
  contacted: boolean;
  contactedAt: string | null;
  contactedByUserId: string | null;
  contactedByName: string | null;
  meetingAt: string | null;
  meetingDurationMinutes: number | null;
  meetingUrl: string | null;
  meetingFromGoogle: boolean;
  createdAt: string;
}

export interface CampaignLeadPage {
  content: CampaignLead[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}

export interface CampaignBoardColumn {
  status: CampaignStatus;
  total: number;
  items: CampaignLead[];
}

export interface CampaignBoard {
  columns: CampaignBoardColumn[];
}

export interface CampaignNote {
  id: string;
  content: string;
  authorUserId: string;
  authorName: string | null;
  createdAt: string;
}

export interface CampaignDetail {
  campaign: CampaignLead;
  notes: CampaignNote[];
  googleMeetEnabled: boolean;
}

export interface CampaignLeadFilters {
  status?: CampaignStatus | null;
  search?: string | null;
  page?: number;
  size?: number;
}

export interface ScheduleMeetingRequest {
  // UTC (ver brDateTimeLocalToApi).
  meetingAt: string;
  durationMinutes: number;
  createGoogleMeet: boolean;
  meetingUrl: string | null;
}

// Leads da landing page dos anúncios (web-comanda-unica-campanhas) e o funil comercial deles.
// Restrito ao platform admin e a quem tem o perfil COMMERCIAL (ver /api/v1/platform/campaigns no backend).
@Injectable({ providedIn: 'root' })
export class CampaignsService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1/platform/campaigns`;

  board(search: string | null, itemsPerColumn = 30): Observable<CampaignBoard> {
    const params: Record<string, string> = { itemsPerColumn: String(itemsPerColumn) };
    if (search) params['search'] = search;
    return this.http.get<CampaignBoard>(`${this.baseUrl}/board`, { params });
  }

  list(filters: CampaignLeadFilters = {}): Observable<CampaignLeadPage> {
    const params: Record<string, string> = {};
    if (filters.status) params['status'] = filters.status;
    if (filters.search) params['search'] = filters.search;
    if (filters.page != null) params['page'] = String(filters.page);
    if (filters.size != null) params['size'] = String(filters.size);
    return this.http.get<CampaignLeadPage>(this.baseUrl, { params });
  }

  get(id: string): Observable<CampaignDetail> {
    return this.http.get<CampaignDetail>(`${this.baseUrl}/${encodeURIComponent(id)}`);
  }

  updateStatus(id: string, status: CampaignStatus): Observable<CampaignLead> {
    return this.http.patch<CampaignLead>(`${this.baseUrl}/${encodeURIComponent(id)}/status`, { status });
  }

  addNote(id: string, content: string): Observable<CampaignNote> {
    return this.http.post<CampaignNote>(`${this.baseUrl}/${encodeURIComponent(id)}/notes`, { content });
  }

  deleteNote(id: string, noteId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${encodeURIComponent(id)}/notes/${encodeURIComponent(noteId)}`);
  }

  scheduleMeeting(id: string, request: ScheduleMeetingRequest): Observable<CampaignLead> {
    return this.http.put<CampaignLead>(`${this.baseUrl}/${encodeURIComponent(id)}/meeting`, request);
  }

  cancelMeeting(id: string): Observable<CampaignLead> {
    return this.http.delete<CampaignLead>(`${this.baseUrl}/${encodeURIComponent(id)}/meeting`);
  }
}

// Helpers de exibição compartilhados entre o kanban e a página do contato.

// Telefone vem só com dígitos (DDD + número): 11999999999 → (11) 99999-9999.
export function formatLeadPhone(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 11) return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  if (digits.length === 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return phone;
}

// Abre a conversa direto no WhatsApp (app no celular, WhatsApp Web no computador) com a
// mensagem de abertura já preenchida.
export function leadWhatsappUrl(lead: Pick<CampaignLead, 'name' | 'phone'>): string {
  // Só DDD + número (10/11 dígitos) recebe o 55; com 12/13 dígitos o código do país já veio junto.
  // DDD 55 (RS) tem 10/11 dígitos, então não é confundido com o código do país.
  const digits = lead.phone.replace(/\D/g, '').replace(/^0(?=\d{11,}$)/, '');
  const number = digits.length <= 11 ? `55${digits}` : digits;
  const firstName = lead.name.trim().split(/\s+/)[0] ?? '';
  const message =
    `Olá, ${firstName}! Tudo bem? Aqui é da Comanda Única. ` +
    'Vi que você deixou seu contato para conhecer o sistema. Posso te mostrar como funciona?';
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function leadInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter((part) => !!part);
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase() || '?';
}
