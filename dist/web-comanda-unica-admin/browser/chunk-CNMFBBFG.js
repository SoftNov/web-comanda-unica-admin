import {
  environment
} from "./chunk-IKIQHSDP.js";
import {
  HttpClient,
  inject,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-MRKXMG4P.js";

// src/app/shared/services/consumption-passes.service.ts
var ConsumptionPassesService = class _ConsumptionPassesService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiBaseUrl}/api/v1/consumption-passes`;
  // O estabelecimento selecionado usa o cartão de consumo? Opcional por estabelecimento — desligado
  // (padrão), o sistema funciona só com a comanda compartilhada da mesa e o menu lateral esconde o
  // "Controle de Saída" (ver AdminLayoutComponent). Atualizado por refreshEnabled/updateSettings.
  enabled = signal(false);
  refreshEnabled() {
    this.getSettings().subscribe({
      next: (settings) => this.enabled.set(settings.required),
      // KITCHEN não tem acesso à rota (403) — para esse perfil o item nem aparece.
      error: () => this.enabled.set(false)
    });
  }
  list(params) {
    const httpParams = { page: params.page, size: params.size };
    if (params.status) {
      httpParams["status"] = params.status;
    }
    if (params.search) {
      httpParams["search"] = params.search;
    }
    return this.http.get(this.baseUrl, { params: httpParams });
  }
  generate(quantity) {
    return this.http.post(this.baseUrl, { quantity });
  }
  block(id, reason) {
    return this.http.patch(`${this.baseUrl}/${id}/block`, { reason: reason || void 0 });
  }
  unblock(id) {
    return this.http.patch(`${this.baseUrl}/${id}/unblock`, {});
  }
  events(id) {
    return this.http.get(`${this.baseUrl}/${id}/events`);
  }
  getQrCodePng(id) {
    return this.http.get(`${this.baseUrl}/${id}/qrcode/png`, { responseType: "blob" });
  }
  printPdf(ids) {
    return this.http.post(`${this.baseUrl}/print`, { ids }, { responseType: "blob" });
  }
  // PDF com TODOS os cartões da empresa (qualquer status, até 5.000) — download direto.
  printAllPdf() {
    return this.http.get(`${this.baseUrl}/print/all`, { responseType: "blob" });
  }
  getSettings() {
    return this.http.get(`${this.baseUrl}/settings`);
  }
  // required=true: o estabelecimento usa o cartão (e ele passa a ser obrigatório para pedir pelo
  // cardápio); false: não usa. Desativar com cartões em uso é recusado pelo backend (409).
  updateSettings(required) {
    return this.http.put(`${this.baseUrl}/settings`, { required }).pipe(tap((settings) => this.enabled.set(settings.required)));
  }
  // Token no corpo (não na URL) — ver ConsumptionPassTokenRequest no backend.
  validateExit(token) {
    return this.http.post(`${this.baseUrl}/exit/validate`, { token });
  }
  release(token) {
    return this.http.post(`${this.baseUrl}/exit/release`, { token });
  }
  static \u0275fac = function ConsumptionPassesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConsumptionPassesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConsumptionPassesService, factory: _ConsumptionPassesService.\u0275fac, providedIn: "root" });
};

export {
  ConsumptionPassesService
};
//# sourceMappingURL=chunk-CNMFBBFG.js.map
