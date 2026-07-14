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
