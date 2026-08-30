import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  CompanyFeeRuleResponse,
  PlatformFeeRuleResponse,
  PlatformFeeRulesService,
  UpsertPlatformFeeRuleRequest
} from '../../../../shared/services/platform-fee-rules.service';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import { autoDismiss } from '../../../../shared/utils/auto-dismiss.util';

const PAGE_SIZE = 10;

interface ApiErrorResponse {
  titulo?: string;
  mensagem?: string;
  codigoErro?: string;
}

// Painel financeiro exclusivo da Comanda Única — regra de cobrança da plataforma sobre o valor
// das comandas, por faixa (até thresholdAmount paga percentageRate; acima disso, maxAmount
// fixo), com uma regra padrão e customização por empresa. Ver PlatformFeeRuleApi no backend;
// rota gateada por platformAdminGuard (ver app.routes.ts).
@Component({
  selector: 'app-admin-financeiro-plataforma',
  standalone: true,
  imports: [ReactiveFormsModule, RippleDirective],
  templateUrl: './financeiro-plataforma.component.html',
  styleUrl: './financeiro-plataforma.component.scss'
})
export class FinanceiroPlataformaComponent {
  private readonly fb = new FormBuilder();
  private readonly platformFeeRulesService = inject(PlatformFeeRulesService);
  private readonly currencyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  private readonly dateTimeFormatter = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' });

  // --- Regra padrão -----------------------------------------------------------------
  readonly defaultRule = signal<PlatformFeeRuleResponse | null>(null);
  readonly isLoadingDefault = signal(true);
  readonly defaultError = signal<string | null>(null);
  readonly isSavingDefault = signal(false);
  readonly defaultSaveError = signal<string | null>(null);

  readonly defaultForm = this.fb.nonNullable.group({
    percentageRate: this.fb.control<number | null>(null, [Validators.required, Validators.min(0.01), Validators.max(100)]),
    thresholdAmount: this.fb.control<number | null>(null, [Validators.required, Validators.min(0.01)]),
    maxAmount: this.fb.control<number | null>(null, [Validators.required, Validators.min(0.01)])
  });

  // --- Simulador ----------------------------------------------------------------------
  readonly simulatorAmount = signal<number | null>(100);

  // --- Empresas -------------------------------------------------------------------------
  readonly companies = signal<CompanyFeeRuleResponse[]>([]);
  readonly page = signal(0);
  readonly totalPages = signal(0);
  readonly totalElements = signal(0);
  readonly isLast = signal(true);
  readonly isLoadingCompanies = signal(true);
  readonly companiesError = signal<string | null>(null);
  readonly searchTerm = signal('');

  readonly pageLabel = computed(() => `Página ${this.page() + 1} de ${Math.max(this.totalPages(), 1)}`);

  // --- Modal de customização por empresa ------------------------------------------------
  readonly editingCompany = signal<CompanyFeeRuleResponse | null>(null);
  readonly isSavingCompany = signal(false);
  readonly companySaveError = signal<string | null>(null);

  readonly companyForm = this.fb.nonNullable.group({
    percentageRate: this.fb.control<number | null>(null, [Validators.required, Validators.min(0.01), Validators.max(100)]),
    thresholdAmount: this.fb.control<number | null>(null, [Validators.required, Validators.min(0.01)]),
    maxAmount: this.fb.control<number | null>(null, [Validators.required, Validators.min(0.01)])
  });

  readonly removingCompanyId = signal<string | null>(null);
  readonly removeError = signal<string | null>(null);

  constructor() {
    this.loadDefaultRule();
    this.loadCompanies(0);
  }

  formatCurrency(value: number | undefined | null): string {
    return value != null ? this.currencyFormatter.format(value) : '—';
  }

  formatDateTime(value: string | undefined | null): string {
    return value ? this.dateTimeFormatter.format(new Date(value)) : '—';
  }

  // Cálculo ao vivo, sem ida ao backend — cobrança por faixa: até thresholdAmount cobra o
  // percentual sobre o próprio valor; acima disso, cobra maxAmount fixo (não é mais um teto que
  // o percentual eventualmente atinge).
  simulatedFee(
    percentageRate: number | null | undefined,
    thresholdAmount: number | null | undefined,
    maxAmount: number | null | undefined
  ): number {
    const amount = this.simulatorAmount();
    if (amount == null || percentageRate == null || thresholdAmount == null || maxAmount == null) {
      return 0;
    }
    return amount <= thresholdAmount ? amount * (percentageRate / 100) : maxAmount;
  }

  onSimulatorAmountChange(value: string): void {
    const parsed = Number(value.replace(',', '.'));
    this.simulatorAmount.set(isNaN(parsed) ? null : parsed);
  }

  // --- Regra padrão -----------------------------------------------------------------
  private loadDefaultRule(): void {
    this.isLoadingDefault.set(true);
    this.defaultError.set(null);

    this.platformFeeRulesService.getDefault().subscribe({
      next: (rule) => {
        this.defaultRule.set(rule);
        this.defaultForm.reset({ percentageRate: rule.percentageRate, thresholdAmount: rule.thresholdAmount, maxAmount: rule.maxAmount });
        this.isLoadingDefault.set(false);
      },
      error: () => {
        this.isLoadingDefault.set(false);
        this.defaultError.set('Não foi possível carregar a regra padrão.');
      }
    });
  }

  submitDefaultForm(): void {
    if (this.defaultForm.invalid) {
      this.defaultForm.markAllAsTouched();
      return;
    }

    const value = this.defaultForm.getRawValue();
    const payload: UpsertPlatformFeeRuleRequest = {
      percentageRate: value.percentageRate ?? 0,
      thresholdAmount: value.thresholdAmount ?? 0,
      maxAmount: value.maxAmount ?? 0
    };

    this.isSavingDefault.set(true);
    this.defaultSaveError.set(null);

    this.platformFeeRulesService.updateDefault(payload).subscribe({
      next: (rule) => {
        this.isSavingDefault.set(false);
        this.defaultRule.set(rule);
        // Empresas sem customização exibem a regra padrão — recarrega a página atual pra refletir.
        this.loadCompanies(this.page());
      },
      error: (error: HttpErrorResponse) => {
        this.isSavingDefault.set(false);
        this.defaultSaveError.set(this.resolveErrorMessage(error));
        autoDismiss(this.defaultSaveError, null);
      }
    });
  }

  // --- Empresas -----------------------------------------------------------------------
  loadCompanies(page: number): void {
    this.isLoadingCompanies.set(true);
    this.companiesError.set(null);

    this.platformFeeRulesService.listCompanies({ search: this.searchTerm() || undefined, page, size: PAGE_SIZE }).subscribe({
      next: (response) => {
        this.companies.set(response.content);
        this.page.set(response.page);
        this.totalPages.set(response.totalPages);
        this.totalElements.set(response.totalElements);
        this.isLast.set(response.last);
        this.isLoadingCompanies.set(false);
      },
      error: () => {
        this.isLoadingCompanies.set(false);
        this.companiesError.set('Não foi possível carregar as empresas.');
      }
    });
  }

  onSearchChange(value: string): void {
    this.searchTerm.set(value);
    this.loadCompanies(0);
  }

  previousPage(): void {
    if (this.page() > 0) {
      this.loadCompanies(this.page() - 1);
    }
  }

  nextPage(): void {
    if (!this.isLast()) {
      this.loadCompanies(this.page() + 1);
    }
  }

  // --- Customização por empresa ---------------------------------------------------------
  openEditModal(company: CompanyFeeRuleResponse): void {
    this.companySaveError.set(null);
    this.companyForm.reset({
      percentageRate: company.percentageRate,
      thresholdAmount: company.thresholdAmount,
      maxAmount: company.maxAmount
    });
    this.editingCompany.set(company);
  }

  closeEditModal(): void {
    if (this.isSavingCompany()) {
      return;
    }
    this.editingCompany.set(null);
  }

  submitCompanyForm(): void {
    const company = this.editingCompany();
    if (!company || this.companyForm.invalid) {
      this.companyForm.markAllAsTouched();
      return;
    }

    const value = this.companyForm.getRawValue();
    const payload: UpsertPlatformFeeRuleRequest = {
      percentageRate: value.percentageRate ?? 0,
      thresholdAmount: value.thresholdAmount ?? 0,
      maxAmount: value.maxAmount ?? 0
    };

    this.isSavingCompany.set(true);
    this.companySaveError.set(null);

    this.platformFeeRulesService.upsertCompanyRule(company.companyId, payload).subscribe({
      next: (updated) => {
        this.isSavingCompany.set(false);
        this.editingCompany.set(null);
        this.applyUpdatedCompany(updated);
      },
      error: (error: HttpErrorResponse) => {
        this.isSavingCompany.set(false);
        this.companySaveError.set(this.resolveErrorMessage(error));
        autoDismiss(this.companySaveError, null);
      }
    });
  }

  removeCustomization(company: CompanyFeeRuleResponse): void {
    this.removingCompanyId.set(company.companyId);
    this.removeError.set(null);

    this.platformFeeRulesService.removeCompanyRule(company.companyId).subscribe({
      next: (updated) => {
        this.removingCompanyId.set(null);
        this.applyUpdatedCompany(updated);
      },
      error: (error: HttpErrorResponse) => {
        this.removingCompanyId.set(null);
        this.removeError.set(this.resolveErrorMessage(error));
        autoDismiss(this.removeError, null);
      }
    });
  }

  private applyUpdatedCompany(updated: CompanyFeeRuleResponse): void {
    this.companies.update((list) => list.map((current) => (current.companyId === updated.companyId ? updated : current)));
  }

  private resolveErrorMessage(error: HttpErrorResponse): string {
    const body = error.error as ApiErrorResponse | undefined;
    if (body?.mensagem) {
      return body.mensagem;
    }
    if (body?.titulo) {
      return body.titulo;
    }
    if (error.status === 403) {
      return 'Você não tem permissão para acessar este painel.';
    }
    if (error.status === 404) {
      return 'Empresa não encontrada.';
    }
    if (error.status === 422 || error.status === 400) {
      return 'Verifique os valores informados.';
    }
    return 'Não foi possível concluir a operação. Tente novamente em instantes.';
  }
}