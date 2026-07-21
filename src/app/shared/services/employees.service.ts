import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface PageResponse<T> {
  content: T[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}

export interface EmployeeResponse {
  employeeId: string;
  userId: string;
  fullName: string;
  cpf: string;
  email: string;
  phone: string;
  avatarUrl?: string;
  profileId: string;
  profileCode: string;
  profileName: string;
  status: string;
  createdAt: string;
}

export interface CreateEmployeeRequest {
  fullName: string;
  cpf: string;
  email: string;
  phone: string;
  password: string;
  profileId: string;
}

export interface CreateEmployeeResponse {
  employeeId: string;
  userId: string;
  companyId: string;
  profileCode: string;
  activationExpiresAt?: string;
  message: string;
}

export interface UpdateEmployeeRequest {
  fullName: string;
  phone: string;
  profileId: string;
}

export interface UpdateEmployeeResponse {
  employeeId: string;
  profileCode: string;
  updatedAt: string;
  message: string;
}

export interface DeactivateEmployeeResponse {
  employeeId: string;
  status: string;
  updatedAt: string;
  message: string;
}

export interface ApiErrorResponse {
  titulo?: string;
  mensagem?: string;
  mensagemErro?: string;
  codigoErro?: string;
}

@Injectable({ providedIn: 'root' })
export class EmployeesService {
  private readonly http = inject(HttpClient);

  list(page: number, size: number): Observable<PageResponse<EmployeeResponse>> {
    return this.http.get<PageResponse<EmployeeResponse>>(`${environment.apiBaseUrl}/api/v1/employees`, {
      params: { page, size }
    });
  }

  get(employeeId: string): Observable<EmployeeResponse> {
    return this.http.get<EmployeeResponse>(`${environment.apiBaseUrl}/api/v1/employees/${employeeId}`);
  }

  create(payload: CreateEmployeeRequest): Observable<CreateEmployeeResponse> {
    return this.http.post<CreateEmployeeResponse>(`${environment.apiBaseUrl}/api/v1/employees`, payload);
  }

  update(employeeId: string, payload: UpdateEmployeeRequest): Observable<UpdateEmployeeResponse> {
    return this.http.put<UpdateEmployeeResponse>(`${environment.apiBaseUrl}/api/v1/employees/${employeeId}`, payload);
  }

  deactivate(employeeId: string): Observable<DeactivateEmployeeResponse> {
    return this.http.delete<DeactivateEmployeeResponse>(`${environment.apiBaseUrl}/api/v1/employees/${employeeId}`);
  }
}
