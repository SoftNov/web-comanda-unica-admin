// Mesa virtual do balcão (retirada no balcão com cartão de consumo): número 0 — as mesas normais
// sempre têm número positivo (ver RestaurantTableService#getOrCreateCounter na API admin).
export const COUNTER_TABLE_NUMBER = 0;

export const COUNTER_TABLE_LABEL = 'Retirada no balcão';

export function isCounterTable(tableNumber: number | null | undefined): boolean {
  return tableNumber === COUNTER_TABLE_NUMBER;
}

// "Mesa 12 — VIP" ou, para a mesa virtual do balcão, "Retirada no balcão".
export function formatTableLabel(tableNumber: number | null | undefined, tableName?: string | null): string {
  if (isCounterTable(tableNumber)) {
    return COUNTER_TABLE_LABEL;
  }
  return `Mesa ${tableNumber ?? '—'}${tableName ? ' — ' + tableName : ''}`;
}
