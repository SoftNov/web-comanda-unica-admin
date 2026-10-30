import {
  environment
} from "./chunk-IKIQHSDP.js";
import {
  HttpClient,
  inject,
  ɵɵdefineInjectable
} from "./chunk-MRKXMG4P.js";

// src/app/shared/services/campaigns.service.ts
var CAMPAIGN_STATUSES = [
  { value: "NEW", label: "Novo", icon: "fiber_new" },
  { value: "IN_CONTACT", label: "Em contato", icon: "forum" },
  { value: "SCHEDULED", label: "Agendado", icon: "event" },
  { value: "NOT_INTERESTED", label: "N\xE3o tem interesse", icon: "block" },
  { value: "INTERESTED_NOT_HIRED", label: "Interesse, mas n\xE3o contratou", icon: "hourglass_bottom" },
  { value: "HIRED", label: "Contratou", icon: "verified" }
];
function campaignStatusLabel(status) {
  return CAMPAIGN_STATUSES.find((item) => item.value === status)?.label ?? status;
}
var CampaignsService = class _CampaignsService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiBaseUrl}/api/v1/platform/campaigns`;
  board(search, itemsPerColumn = 30) {
    const params = { itemsPerColumn: String(itemsPerColumn) };
    if (search)
      params["search"] = search;
    return this.http.get(`${this.baseUrl}/board`, { params });
  }
  list(filters = {}) {
    const params = {};
    if (filters.status)
      params["status"] = filters.status;
    if (filters.search)
      params["search"] = filters.search;
    if (filters.page != null)
      params["page"] = String(filters.page);
    if (filters.size != null)
      params["size"] = String(filters.size);
    return this.http.get(this.baseUrl, { params });
  }
  get(id) {
    return this.http.get(`${this.baseUrl}/${encodeURIComponent(id)}`);
  }
  updateStatus(id, status) {
    return this.http.patch(`${this.baseUrl}/${encodeURIComponent(id)}/status`, { status });
  }
  addNote(id, content) {
    return this.http.post(`${this.baseUrl}/${encodeURIComponent(id)}/notes`, { content });
  }
  deleteNote(id, noteId) {
    return this.http.delete(`${this.baseUrl}/${encodeURIComponent(id)}/notes/${encodeURIComponent(noteId)}`);
  }
  scheduleMeeting(id, request) {
    return this.http.put(`${this.baseUrl}/${encodeURIComponent(id)}/meeting`, request);
  }
  cancelMeeting(id) {
    return this.http.delete(`${this.baseUrl}/${encodeURIComponent(id)}/meeting`);
  }
  static \u0275fac = function CampaignsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CampaignsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CampaignsService, factory: _CampaignsService.\u0275fac, providedIn: "root" });
};
function formatLeadPhone(phone) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 11)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  if (digits.length === 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return phone;
}
function leadWhatsappUrl(lead) {
  const digits = lead.phone.replace(/\D/g, "").replace(/^0(?=\d{11,}$)/, "");
  const number = digits.length <= 11 ? `55${digits}` : digits;
  const firstName = lead.name.trim().split(/\s+/)[0] ?? "";
  const message = `Ol\xE1, ${firstName}! Tudo bem? Aqui \xE9 da Comanda \xDAnica. Vi que voc\xEA deixou seu contato para conhecer o sistema. Posso te mostrar como funciona?`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
function leadInitials(name) {
  const parts = name.trim().split(/\s+/).filter((part) => !!part);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase() || "?";
}

export {
  CAMPAIGN_STATUSES,
  campaignStatusLabel,
  CampaignsService,
  formatLeadPhone,
  leadWhatsappUrl,
  leadInitials
};
//# sourceMappingURL=chunk-T3FL76LF.js.map
