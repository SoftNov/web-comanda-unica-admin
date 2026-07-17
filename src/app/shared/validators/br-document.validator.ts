import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { isValidCNPJ, isValidCPF, onlyDigits } from '../utils/br-format.util';

export function cpfValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    return isValidCPF(control.value) ? null : { cpfInvalid: true };
  };
}

export function cnpjValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    return isValidCNPJ(control.value) ? null : { cnpjInvalid: true };
  };
}

export function cepValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    return onlyDigits(control.value).length === 8 ? null : { cepInvalid: true };
  };
}

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    const length = onlyDigits(control.value).length;
    return length === 10 || length === 11 ? null : { phoneInvalid: true };
  };
}

const FULL_NAME_PATTERN = /^\p{L}+(\s+\p{L}+)+$/u;

export function fullNameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = (control.value ?? '').trim();
    if (!value) {
      return null;
    }
    if (value.length < 3 || value.length > 150) {
      return { fullNameInvalid: true };
    }
    return FULL_NAME_PATTERN.test(value) ? null : { fullNameInvalid: true };
  };
}
