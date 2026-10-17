import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { RevenuePoint } from './dashboard.service';

// Espelho de PlatformFinanceResponse — só com o que está registrado na base da Comanda Única.
export interface PlatformFinanceSummary {
  // Taxas geradas por dia sobre os pagamentos registrados nas comandas de todos os estabelecimentos.
  feeSeries: RevenuePoint[];
  totalFeeAmount: number;
  // Recebido na Asaas no período (cobranças semanais de taxas e mensalidades).
  receivedFeeAmount: number;
  receivedSubscriptionAmount: number;
  // Saldo atual de taxas ainda não liquidadas (independe do período).
  pendingFeeBalance: number;
}

// Situação do estabelecimento pela assinatura mais recente — espelho de
// CompanySubscriptionSituation no backend (o company.status não é usado: fica PENDING).
export type CompanySubscriptionSituation =
  | 'ACTIVE'
  | 'TRIAL'
  | 'PAST_DUE'
  | 'TRIAL_EXPIRED'
  | 'PENDING'
  | 'EXPIRED'
  | 'CANCELLED'
  | 'NONE';

export const SITUATION_LABELS: Record<CompanySubscriptionSituation, string> = {
  ACTIVE: 'Assinatura ativa',
  TRIAL: 'Em teste',
  PAST_DUE: 'Em atraso',
  TRIAL_EXPIRED: 'Teste encerrado',
  PENDING: 'Aguardando pagamento',
  EXPIRED: 'Expirada',
  CANCELLED: 'Cancelada',
  NONE: 'Sem assinatura'
};

// Tom do selo de situação: ok (verde), warn (amarelo) ou off (cinza).
export function situationTone(situation: CompanySubscriptionSituation): 'ok' | 'warn' | 'off' {
  if (situation === 'ACTIVE' || situation === 'TRIAL') return 'ok';
  if (situation === 'PAST_DUE' || situation === 'PENDING') return 'warn';
  return 'off';
}

// Saldo de taxas não liquidadas de um estabelecimento (já descontado o crédito abatido).
export interface CompanyPendingFee {
  companyId: string;
  tradeName: string;
  situation: CompanySubscriptionSituation;
  // PENDING: entra na próxima cobrança semanal. PROCESSING: já está numa cobrança aguardando a Asaas.
  pendingAmount: number;
  processingAmount: number;
  feeCount: number;
  // Taxa não liquidada mais antiga (UTC — exibir com os helpers de datetime.util).
  oldestFeeAt: string | null;
}

// Espelho de PlatformOverviewResponse — estado atual, sem filtro de período.
export interface PlatformOverview {
  totalCompanies: number;
  // Assinatura paga vigente / período de teste vigente / mensalidade em atraso / todo o resto.
  activeCompanies: number;
  trialCompanies: number;
  pastDueCompanies: number;
  inactiveCompanies: number;
  pendingFeeBalance: number;
  processingFeeBalance: number;
  companiesWithPendingFees: number;
  pendingFeesByCompany: CompanyPendingFee[];
}

// Espelho de PlatformCompanyReportResponse.Row — plano/vencimento/mesas/taxas são o estado atual;
// comandas, clientes e faturamento são do período consultado.
export interface PlatformCompanyReportRow {
  companyId: string;
  tradeName: string;
  cnpj: string | null;
  createdAt: string | null;
  situation: CompanySubscriptionSituation;
  courtesy: boolean;
  planTableLimit: number | null;
  monthlyAmount: number | null;
  // Fim do teste ou da mensalidade vigente (UTC).
  periodEnd: string | null;
  cancelAtPeriodEnd: boolean;
  tableCount: number;
  // Comandas abertas no período — cada comanda é um atendimento (cliente/grupo).
  comandaCount: number;
  averageCustomersPerDay: number;
  revenue: number;
  averageTicket: number;
  pendingFeeAmount: number;
}

export interface PlatformCompanyReport {
  startDate: string;
  endDate: string;
  days: number;
  companies: PlatformCompanyReportRow[];
}

@Injectable({ providedIn: 'root' })
export class PlatformFinanceService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1/platform/finance`;

  getSummary(startDate?: string, endDate?: string): Observable<PlatformFinanceSummary> {
    const params: Record<string, string> = {};
    if (startDate) params['startDate'] = startDate;
    if (endDate) params['endDate'] = endDate;
    return this.http.get<PlatformFinanceSummary>(`${this.baseUrl}/summary`, { params });
  }

  getOverview(): Observable<PlatformOverview> {
    return this.http.get<PlatformOverview>(`${this.baseUrl}/overview`);
  }

  getCompanyReport(startDate?: string, endDate?: string): Observable<PlatformCompanyReport> {
    const params: Record<string, string> = {};
    if (startDate) params['startDate'] = startDate;
    if (endDate) params['endDate'] = endDate;
    return this.http.get<PlatformCompanyReport>(`${this.baseUrl}/companies-report`, { params });
  }
}
