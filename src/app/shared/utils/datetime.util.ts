// O backend (Spring, `LocalDateTime`) serializa datas como "2026-09-04T11:14:00" — sem
// fuso, mas sempre em UTC (o banco roda em UTC: `hibernate.jdbc.time_zone=UTC`). O
// `new Date(...)` do browser interpreta uma string assim como horário LOCAL da máquina,
// o que fazia todo o admin exibir 3h a mais (horário de Brasília é UTC-3). Aqui a string
// é normalizada para UTC e a formatação é sempre fixada em America/Sao_Paulo, para bater
// com o horário do Brasil em qualquer máquina.

export const BR_TIME_ZONE = 'America/Sao_Paulo';

// Já tem indicador de fuso no fim da string ("Z" ou "+03:00"/"-0300").
const HAS_TIMEZONE = /(?:Z|[+-]\d{2}:?\d{2})$/i;
// É uma data-hora ISO (tem a parte "T" com horário) — datas puras "yyyy-MM-dd" não entram.
const IS_DATE_TIME = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/;

/**
 * Converte um valor de data vindo da API em `Date`. Strings de data-hora sem fuso
 * (o padrão do backend) são tratadas como UTC. Retorna `null` para valores vazios
 * ou inválidos.
 */
export function parseApiDate(value: string | number | Date | null | undefined): Date | null {
  if (value == null || value === '') {
    return null;
  }
  if (value instanceof Date) {
    return isNaN(value.getTime()) ? null : value;
  }
  if (typeof value === 'number') {
    const fromNumber = new Date(value);
    return isNaN(fromNumber.getTime()) ? null : fromNumber;
  }
  const normalized =
    IS_DATE_TIME.test(value) && !HAS_TIMEZONE.test(value) ? `${value}Z` : value;
  const parsed = new Date(normalized);
  return isNaN(parsed.getTime()) ? null : parsed;
}

/** Timestamp (ms) de um valor de data da API, ou `NaN` se inválido. */
export function apiDateTime(value: string | number | Date | null | undefined): number {
  return parseApiDate(value)?.getTime() ?? NaN;
}

/** Cria um `Intl.DateTimeFormat` pt-BR já fixado no fuso horário do Brasil. */
export function brDateTimeFormat(options: Intl.DateTimeFormatOptions): Intl.DateTimeFormat {
  return new Intl.DateTimeFormat('pt-BR', { timeZone: BR_TIME_ZONE, ...options });
}

/** "yyyy-MM-dd" do dia atual no fuso do Brasil (para filtros de período). */
export function brToday(): string {
  return brDateParts(new Date());
}

/** "yyyy-MM-dd" de uma data qualquer, no fuso do Brasil. */
export function brDateParts(date: Date): string {
  // en-CA formata como "yyyy-MM-dd".
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: BR_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date);
}

// Diferença (ms) entre o horário de Brasília e o UTC no instante `at` — negativa (UTC-3).
// Independe do fuso da máquina do usuário.
function brOffsetMs(at: Date): number {
  const brWallClock = new Date(at.toLocaleString('en-US', { timeZone: BR_TIME_ZONE }));
  const utcWallClock = new Date(at.toLocaleString('en-US', { timeZone: 'UTC' }));
  return brWallClock.getTime() - utcWallClock.getTime();
}

/**
 * Valor de data da API (UTC) → "yyyy-MM-ddTHH:mm" para preencher um `<input type="datetime-local">`
 * mostrando o horário de Brasília. Retorna `null` para valores vazios/ inválidos.
 */
export function apiToBrDateTimeLocal(value: string | null | undefined): string | null {
  const date = parseApiDate(value);
  if (!date) {
    return null;
  }
  return new Date(date.getTime() + brOffsetMs(date)).toISOString().slice(0, 16);
}

/**
 * Valor de um `<input type="datetime-local">` ("yyyy-MM-ddTHH:mm", horário de Brasília) →
 * "yyyy-MM-ddTHH:mm:ss" em UTC para enviar à API. Retorna `undefined` para valores vazios/ inválidos.
 */
export function brDateTimeLocalToApi(value: string | null | undefined): string | undefined {
  if (!value) {
    return undefined;
  }
  const withSeconds = value.length === 16 ? `${value}:00` : value;
  const asIfUtc = new Date(`${withSeconds}Z`);
  if (isNaN(asIfUtc.getTime())) {
    return undefined;
  }
  return new Date(asIfUtc.getTime() - brOffsetMs(asIfUtc)).toISOString().slice(0, 19);
}

/** "yyyy-MM-ddTHH:mm" (horário de Brasília) daqui a `minutesFromNow` minutos. */
export function brDateTimeLocalFromNow(minutesFromNow: number): string {
  const target = new Date(Date.now() + minutesFromNow * 60_000);
  return new Date(target.getTime() + brOffsetMs(target)).toISOString().slice(0, 16);
}
