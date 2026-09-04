import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { onlyDigits } from '../utils/br-format.util';

export interface CepAddress {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
}

// Resposta do nosso backend (GET /api/v1/cep/{cep} — ver CepController na api-comanda-unica-admin),
// que faz a consulta à ViaCEP no servidor. Antes essa chamada ia direto do navegador para a
// ViaCEP; passou a ficar no backend para não expor a integração de terceiro no front.
interface CepAddressResponse {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
}

@Injectable({ providedIn: 'root' })
export class CepService {
  private readonly http = inject(HttpClient);

  lookup(cep: string): Observable<CepAddress | null> {
    const digits = onlyDigits(cep);
    return this.http.get<CepAddressResponse>(`${environment.apiBaseUrl}/api/v1/cep/${digits}`).pipe(
      catchError((error: HttpErrorResponse) => (error.status === 404 ? of(null) : throwError(() => error)))
    );
  }
}
