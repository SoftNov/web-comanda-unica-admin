import {
  __spreadValues
} from "./chunk-74GQPZJ4.js";

// src/app/shared/utils/datetime.util.ts
var BR_TIME_ZONE = "America/Sao_Paulo";
var HAS_TIMEZONE = /(?:Z|[+-]\d{2}:?\d{2})$/i;
var IS_DATE_TIME = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/;
function parseApiDate(value) {
  if (value == null || value === "") {
    return null;
  }
  if (value instanceof Date) {
    return isNaN(value.getTime()) ? null : value;
  }
  if (typeof value === "number") {
    const fromNumber = new Date(value);
    return isNaN(fromNumber.getTime()) ? null : fromNumber;
  }
  const normalized = IS_DATE_TIME.test(value) && !HAS_TIMEZONE.test(value) ? `${value}Z` : value;
  const parsed = new Date(normalized);
  return isNaN(parsed.getTime()) ? null : parsed;
}
function apiDateTime(value) {
  return parseApiDate(value)?.getTime() ?? NaN;
}
function brDateTimeFormat(options) {
  return new Intl.DateTimeFormat("pt-BR", __spreadValues({ timeZone: BR_TIME_ZONE }, options));
}
function brOffsetMs(at) {
  const brWallClock = new Date(at.toLocaleString("en-US", { timeZone: BR_TIME_ZONE }));
  const utcWallClock = new Date(at.toLocaleString("en-US", { timeZone: "UTC" }));
  return brWallClock.getTime() - utcWallClock.getTime();
}
function apiToBrDateTimeLocal(value) {
  const date = parseApiDate(value);
  if (!date) {
    return null;
  }
  return new Date(date.getTime() + brOffsetMs(date)).toISOString().slice(0, 16);
}
function brDateTimeLocalToApi(value) {
  if (!value) {
    return void 0;
  }
  const withSeconds = value.length === 16 ? `${value}:00` : value;
  const asIfUtc = /* @__PURE__ */ new Date(`${withSeconds}Z`);
  if (isNaN(asIfUtc.getTime())) {
    return void 0;
  }
  return new Date(asIfUtc.getTime() - brOffsetMs(asIfUtc)).toISOString().slice(0, 19);
}
function brDateTimeLocalFromNow(minutesFromNow) {
  const target = new Date(Date.now() + minutesFromNow * 6e4);
  return new Date(target.getTime() + brOffsetMs(target)).toISOString().slice(0, 16);
}

export {
  parseApiDate,
  apiDateTime,
  brDateTimeFormat,
  apiToBrDateTimeLocal,
  brDateTimeLocalToApi,
  brDateTimeLocalFromNow
};
//# sourceMappingURL=chunk-XDLONSRE.js.map
