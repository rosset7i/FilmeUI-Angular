import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function primeiraLetra(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valor = <string>control.value;
    if (!valor) return null;
    if (valor.length === 0) return null;

    const primeira = valor[0];
    if (primeira !== primeira.toUpperCase()) {
      return {
        primeiraLetra: {
          message: 'A primeira letra deve ser maiuscula',
        },
      };
    }
    return null;
  };
}
