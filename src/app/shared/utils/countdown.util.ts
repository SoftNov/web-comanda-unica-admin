export function secondsUntil(date: Date | string): number {
  return Math.max(0, Math.floor((new Date(date).getTime() - Date.now()) / 1000));
}

export function formatCountdown(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Best-effort extraction of an unlock time embedded in a free-text API error
// message (e.g. "tente novamente às 14:32" or an ISO timestamp), so a 429
// response can drive a live countdown even though the API contract only
// exposes the time as text, not as a structured field.
export function extractUnlockTime(message: string | undefined | null): Date | null {
  if (!message) {
    return null;
  }

  const isoMatch = message.match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2})?/);
  if (isoMatch) {
    const parsed = new Date(isoMatch[0]);
    if (!isNaN(parsed.getTime())) {
      return parsed;
    }
  }

  const brDateTimeMatch = message.match(/(\d{2})\/(\d{2})\/(\d{4}).{0,10}?(\d{2}):(\d{2})/);
  if (brDateTimeMatch) {
    const [, day, month, year, hour, minute] = brDateTimeMatch;
    const parsed = new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute));
    if (!isNaN(parsed.getTime())) {
      return parsed;
    }
  }

  const timeOnlyMatch = message.match(/\b([01]\d|2[0-3]):([0-5]\d)\b/);
  if (timeOnlyMatch) {
    const [, hour, minute] = timeOnlyMatch;
    const parsed = new Date();
    parsed.setHours(Number(hour), Number(minute), 0, 0);
    if (parsed.getTime() < Date.now()) {
      parsed.setDate(parsed.getDate() + 1);
    }
    return parsed;
  }

  return null;
}
