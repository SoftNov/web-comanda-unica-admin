// src/app/shared/utils/table-label.util.ts
var COUNTER_TABLE_NUMBER = 0;
var COUNTER_TABLE_LABEL = "Retirada no balc\xE3o";
function isCounterTable(tableNumber) {
  return tableNumber === COUNTER_TABLE_NUMBER;
}
function formatTableLabel(tableNumber, tableName) {
  if (isCounterTable(tableNumber)) {
    return COUNTER_TABLE_LABEL;
  }
  return `Mesa ${tableNumber ?? "\u2014"}${tableName ? " \u2014 " + tableName : ""}`;
}

export {
  COUNTER_TABLE_LABEL,
  formatTableLabel
};
//# sourceMappingURL=chunk-XFEDBWXJ.js.map
