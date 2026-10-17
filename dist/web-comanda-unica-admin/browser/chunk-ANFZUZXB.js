import {
  ConsumptionPassesService
} from "./chunk-CNMFBBFG.js";
import {
  inject,
  map,
  of,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-MRKXMG4P.js";

// src/app/shared/services/qr-target-resolver.service.ts
var PASS_TOKEN_PREFIX = "CMU-";
var PASS_NUMBER_MAX_LENGTH = 6;
var QrTargetResolverService = class _QrTargetResolverService {
  consumptionPassesService = inject(ConsumptionPassesService);
  // Só letras e números, sem o prefixo "CMU" (o token é hexadecimal, então nunca começa com "CMU").
  static toPassSuffix(value) {
    return (value || "").toUpperCase().replace(/[^A-Z0-9]/g, "").replace(/^CMU/, "");
  }
  static isPassCode(value) {
    return /^\s*CMU[-\s]?[0-9A-F]+\s*$/i.test(value || "");
  }
  resolveScan(value, tables) {
    const raw = (value || "").trim();
    if (!raw) {
      return throwError(() => new Error("QR Code vazio."));
    }
    if (_QrTargetResolverService.isPassCode(raw)) {
      return this.resolvePass(raw, tables);
    }
    const table = this.findTableByQr(raw, tables);
    if (table) {
      return of({ kind: "table", table });
    }
    return throwError(() => new Error("QR Code n\xE3o reconhecido \u2014 use o QR da mesa ou do cart\xE3o de consumo."));
  }
  // Cartão digitado: aceita o número impresso ("12") ou o código, com ou sem "CMU-".
  resolvePass(input, tables) {
    const digitsOnly = /^\d+$/.test((input || "").trim());
    const byNumber = digitsOnly && input.trim().length <= PASS_NUMBER_MAX_LENGTH;
    const suffix = _QrTargetResolverService.toPassSuffix(input);
    if (!suffix) {
      return throwError(() => new Error("Informe o n\xFAmero ou o c\xF3digo do cart\xE3o."));
    }
    const search = byNumber ? String(Number(input.trim())) : PASS_TOKEN_PREFIX + suffix;
    return this.consumptionPassesService.list({ search, page: 0, size: 100 }).pipe(map((page) => {
      const pass = page.content.find((item) => byNumber ? String(item.number) === search : item.token.toUpperCase() === search);
      if (!pass) {
        throw new Error("Cart\xE3o de consumo n\xE3o encontrado.");
      }
      if (pass.status === "BLOCKED") {
        throw new Error(`Cart\xE3o N\xBA ${pass.number} est\xE1 bloqueado.`);
      }
      if (pass.status === "EXPIRED") {
        throw new Error(`Cart\xE3o N\xBA ${pass.number} est\xE1 expirado.`);
      }
      const table = pass.tableId ? tables.find((item) => item.id === pass.tableId) ?? null : null;
      return { kind: "pass", pass, table };
    }));
  }
  // Último segmento da URL pública = publicToken da mesa. Também aceita o token cru (leitor USB
  // ou alguém colando só o código).
  findTableByQr(raw, tables) {
    const path = raw.split(/[?#]/)[0].replace(/\/+$/, "");
    const lastSegment = path.substring(path.lastIndexOf("/") + 1).toLowerCase();
    return tables.find((table) => table.publicToken?.toLowerCase() === lastSegment) ?? tables.find((table) => !!table.publicUrl && raw.toLowerCase().startsWith(table.publicUrl.toLowerCase())) ?? null;
  }
  static \u0275fac = function QrTargetResolverService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QrTargetResolverService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QrTargetResolverService, factory: _QrTargetResolverService.\u0275fac, providedIn: "root" });
};

export {
  QrTargetResolverService
};
//# sourceMappingURL=chunk-ANFZUZXB.js.map
