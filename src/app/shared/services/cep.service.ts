import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { onlyDigits } from '../utils/br-format.util';

export interface CepAddress {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
}

interface ViaCepResponse {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}

@Injectable({ providedIn: 'root' })
export class CepService {
  private readonly http = inject(HttpClient);

  lookup(cep: string): Observable<CepAddress | null> {
    const digits = onlyDigits(cep);
    return this.http.get<ViaCepResponse>(`https://viacep.com.br/ws/${digits}/json/`).pipe(
      map((response) => {
        if (!response || response.erro) {
          return null;
        }
        return {
          street: response.logradouro,
          neighborhood: response.bairro,
          city: response.localidade,
          state: response.uf
        };
      })
    );
  }
}
