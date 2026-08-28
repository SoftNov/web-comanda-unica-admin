import {
  isValidCNPJ,
  isValidCPF,
  onlyDigits
} from "./chunk-BXBL77KJ.js";

// src/app/shared/validators/br-document.validator.ts
function cpfValidator() {
  return (control) => {
    if (!control.value) {
      return null;
    }
    return isValidCPF(control.value) ? null : { cpfInvalid: true };
  };
}
function cnpjValidator() {
  return (control) => {
    if (!control.value) {
      return null;
    }
    return isValidCNPJ(control.value) ? null : { cnpjInvalid: true };
  };
}
function cepValidator() {
  return (control) => {
    if (!control.value) {
      return null;
    }
    return onlyDigits(control.value).length === 8 ? null : { cepInvalid: true };
  };
}
function phoneValidator() {
  return (control) => {
    if (!control.value) {
      return null;
    }
    const length = onlyDigits(control.value).length;
    return length === 10 || length === 11 ? null : { phoneInvalid: true };
  };
}
var FULL_NAME_PATTERN = new RegExp("^\\p{L}+(\\s+\\p{L}+)+$", "u");
function fullNameValidator() {
  return (control) => {
    const value = (control.value ?? "").trim();
    if (!value) {
      return null;
    }
    if (value.length < 3 || value.length > 150) {
      return { fullNameInvalid: true };
    }
    return FULL_NAME_PATTERN.test(value) ? null : { fullNameInvalid: true };
  };
}

export {
  cpfValidator,
  cnpjValidator,
  cepValidator,
  phoneValidator,
  fullNameValidator
};
//# sourceMappingURL=chunk-76XGARBF.js.map
