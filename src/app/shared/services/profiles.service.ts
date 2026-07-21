import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ProfileResponse {
  id: string;
  code: string;
  name: string;
  description?: string;
  isSystem?: boolean;
  isActive?: boolean;
}

// Perfis visíveis já vêm filtrados pelo backend conforme a hierarquia de quem consulta
// (ADMIN vê todos; OWNER vê todos exceto ADMIN; MANAGER vê todos exceto ADMIN e OWNER).
@Injectable({ providedIn: 'root' })
export class ProfilesService {
  private readonly http = inject(HttpClient);

  list(): Observable<ProfileResponse[]> {
    return this.http.get<ProfileResponse[]>(`${environment.apiBaseUrl}/api/v1/profiles`);
  }
}
