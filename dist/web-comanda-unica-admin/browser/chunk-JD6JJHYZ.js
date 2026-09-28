// src/app/shared/utils/auto-dismiss.util.ts
var AUTO_DISMISS_MS = 3e3;
function autoDismiss(messageSignal, clearValue, ms = AUTO_DISMISS_MS) {
  setTimeout(() => messageSignal.set(clearValue), ms);
}

export {
  autoDismiss
};
//# sourceMappingURL=chunk-JD6JJHYZ.js.map
