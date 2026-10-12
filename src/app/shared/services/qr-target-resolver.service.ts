import { Injectable, inject } from '@angular/core';
import { Observable, map, of, throwError } from 'rxjs';
import { ConsumptionPassResponse, ConsumptionPassesService } from './consumption-passes.service';
import { RestaurantTableResponse } from './tables.service';

// Todo cartão de consumo tem esse prefixo (ver ConsumptionPassServiceImpl na API admin).
export const PASS_TOKEN_PREFIX = 'CMU-';

// Até aqui, só dígitos = número impresso do cartão ("Nº 12"); acima disso é o código (token).
const PASS_NUMBER_MAX_LENGTH = 6;

// Alvo do atendimento a partir de um QR Code lido (ou digitado): a mesa (comanda compartilhada) ou
// o cartão de consumo do cliente (comanda individual). O cartão só tem mesa/comanda enquanto está
// IN_USE — cartão livre ainda pode receber pedido (é vinculado à mesa escolhida no lançamento).
export type QrTarget =
  | { kind: 'table'; table: RestaurantTableResponse }
  | { kind: 'pass'; pass: ConsumptionPassResponse; table: RestaurantTableResponse | null };

// Resolve o conteúdo de um QR Code da operação. O QR da mesa é a URL pública do cardápio
// (<public-menu-url>/<empresa>/<publicToken da mesa> — ver RestaurantTableServiceImpl#publicUrlFor);
// o do cartão é o token cru ("CMU-7F91A82E9C"). Usado pela home (atendimento rápido) e pela tela
// de lançar pedido.
@Injectable({ providedIn: 'root' })
export class QrTargetResolverService {
  private readonly consumptionPassesService = inject(ConsumptionPassesService);

  // Só letras e números, sem o prefixo "CMU" (o token é hexadecimal, então nunca começa com "CMU").
  static toPassSuffix(value: string): string {
    return (value || '').toUpperCase().replace(/[^A-Z0-9]/g, '').replace(/^CMU/, '');
  }

  static isPassCode(value: string): boolean {
    return /^\s*CMU[-\s]?[0-9A-F]+\s*$/i.test(value || '');
  }

  resolveScan(value: string, tables: RestaurantTableResponse[]): Observable<QrTarget> {
    const raw = (value || '').trim();
    if (!raw) {
      return throwError(() => new Error('QR Code vazio.'));
    }
    if (QrTargetResolverService.isPassCode(raw)) {
      return this.resolvePass(raw, tables);
    }
    const table = this.findTableByQr(raw, tables);
    if (table) {
      return of({ kind: 'table', table });
    }
    return throwError(() => new Error('QR Code não reconhecido — use o QR da mesa ou do cartão de consumo.'));
  }

  // Cartão digitado: aceita o número impresso ("12") ou o código, com ou sem "CMU-".
  resolvePass(input: string, tables: RestaurantTableResponse[]): Observable<QrTarget> {
    const digitsOnly = /^\d+$/.test((input || '').trim());
    const byNumber = digitsOnly && input.trim().length <= PASS_NUMBER_MAX_LENGTH;
    const suffix = QrTargetResolverService.toPassSuffix(input);
    if (!suffix) {
      return throwError(() => new Error('Informe o número ou o código do cartão.'));
    }
    const search = byNumber ? String(Number(input.trim())) : PASS_TOKEN_PREFIX + suffix;

    return this.consumptionPassesService.list({ search, page: 0, size: 100 }).pipe(
      map((page) => {
        const pass = page.content.find((item) =>
          byNumber ? String(item.number) === search : item.token.toUpperCase() === search
        );
        if (!pass) {
          throw new Error('Cartão de consumo não encontrado.');
        }
        if (pass.status === 'BLOCKED') {
          throw new Error(`Cartão Nº ${pass.number} está bloqueado.`);
        }
        if (pass.status === 'EXPIRED') {
          throw new Error(`Cartão Nº ${pass.number} está expirado.`);
        }
        const table = pass.tableId ? tables.find((item) => item.id === pass.tableId) ?? null : null;
        return { kind: 'pass', pass, table } as QrTarget;
      })
    );
  }

  // Último segmento da URL pública = publicToken da mesa. Também aceita o token cru (leitor USB
  // ou alguém colando só o código).
  private findTableByQr(raw: string, tables: RestaurantTableResponse[]): RestaurantTableResponse | null {
    const path = raw.split(/[?#]/)[0].replace(/\/+$/, '');
    const lastSegment = path.substring(path.lastIndexOf('/') + 1).toLowerCase();
    return (
      tables.find((table) => table.publicToken?.toLowerCase() === lastSegment) ??
      tables.find((table) => !!table.publicUrl && raw.toLowerCase().startsWith(table.publicUrl.toLowerCase())) ??
      null
    );
  }
}
