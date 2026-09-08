import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  CompanySubscriptionPricing,
  PlatformSubscriptionPricingService,
  SubscriptionPriceTier
} from '../../../../../shared/services/platform-subscription-pricing.service';
import { RippleDirective } from '../../../../../shared/directives/ripple.directive';

interface EditableTier {
  upToTables: number | null;
  monthlyAmount: number | null;
}

@Component({
  selector: 'app-subscription-pricing',
  standalone: true,
  imports: [FormsModule, RippleDirective],
  templateUrl: './subscription-pricing.component.html',
  styleUrl: './subscription-pricing.component.scss'
})
export class SubscriptionPricingComponent {
  private readonly pricingService = inject(PlatformSubscriptionPricingService);
  private readonly currencyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

  // --- faixas ---------------------------------------------------------------
  readonly tiers = signal<EditableTier[]>([]);
  readonly isLoadingTiers = signal(true);
  readonly isSavingTiers = signal(false);
  readonly tiersMessage = signal<{ type: 'ok' | 'error'; text: string } | null>(null);

  // --- estabelecimentos ---------------------------------------------------
  readonly companies = signal<CompanySubscriptionPricing[]>([]);
  readonly isLoadingCompanies = signal(false);
  readonly companySearch = signal('');
  readonly page = signal(0);
  readonly totalPages = signal(0);
  readonly editingCompanyId = signal<string | null>(null);
  readonly overrideAmount = signal<number | null>(null);
  readonly overrideNote = signal('');
  readonly isSavingOverride = signal(false);

  constructor() {
    this.loadTiers();
    this.loadCompanies();
  }

  currency(value: number | null | undefined): string {
    return value != null ? this.currencyFormatter.format(value) : '—';
  }

  annualOf(monthly: number | null): string {
    return monthly != null ? this.currencyFormatter.format(monthly * 12) : '—';
  }

  // --- faixas -----------------------------------------------------------------
  loadTiers(): void {
    this.isLoadingTiers.set(true);
    this.pricingService.listTiers().subscribe({
      next: (tiers) => {
        this.tiers.set(tiers.map((t) => ({ upToTables: t.upToTables, monthlyAmount: t.monthlyAmount })));
        this.isLoadingTiers.set(false);
      },
      error: () => {
        this.isLoadingTiers.set(false);
        this.tiersMessage.set({ type: 'error', text: 'Não foi possível carregar as faixas.' });
      }
    });
  }

  addTier(): void {
    this.tiers.update((list) => [...list, { upToTables: null, monthlyAmount: null }]);
  }

  removeTier(index: number): void {
    this.tiers.update((list) => list.filter((_, i) => i !== index));
  }

  updateTier(index: number, field: keyof EditableTier, value: string): void {
    const parsed = value === '' ? null : Number(value);
    this.tiers.update((list) => list.map((t, i) => (i === index ? { ...t, [field]: parsed } : t)));
  }

  saveTiers(): void {
    const rows = this.tiers();
    if (rows.length === 0 || rows.some((t) => t.upToTables == null || t.monthlyAmount == null || t.upToTables <= 0 || t.monthlyAmount <= 0)) {
      this.tiersMessage.set({ type: 'error', text: 'Preencha todas as faixas com valores maiores que zero.' });
      return;
    }
    this.isSavingTiers.set(true);
    this.tiersMessage.set(null);
    this.pricingService
      .replaceTiers(rows.map((t) => ({ upToTables: t.upToTables as number, monthlyAmount: t.monthlyAmount as number })))
      .subscribe({
        next: (saved) => {
          this.tiers.set(saved.map((t) => ({ upToTables: t.upToTables, monthlyAmount: t.monthlyAmount })));
          this.isSavingTiers.set(false);
          this.tiersMessage.set({ type: 'ok', text: 'Faixas salvas.' });
          this.loadCompanies();
        },
        error: () => {
          this.isSavingTiers.set(false);
          this.tiersMessage.set({ type: 'error', text: 'Não foi possível salvar. Verifique se há limites de mesas repetidos.' });
        }
      });
  }

  // --- estabelecimentos ---------------------------------------------------
  onSearchInput(value: string): void {
    this.companySearch.set(value);
  }

  search(): void {
    this.page.set(0);
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.isLoadingCompanies.set(true);
    this.pricingService.listCompanies(this.companySearch(), this.page(), 20).subscribe({
      next: (res) => {
        this.companies.set(res.content);
        this.totalPages.set(res.totalPages);
        this.isLoadingCompanies.set(false);
      },
      error: () => this.isLoadingCompanies.set(false)
    });
  }

  goToPage(delta: number): void {
    const next = this.page() + delta;
    if (next < 0 || next >= this.totalPages()) {
      return;
    }
    this.page.set(next);
    this.loadCompanies();
  }

  startEdit(company: CompanySubscriptionPricing): void {
    this.editingCompanyId.set(company.companyId);
    this.overrideAmount.set(company.customized ? company.monthlyAmount : null);
    this.overrideNote.set(company.overrideNote ?? '');
  }

  cancelEdit(): void {
    this.editingCompanyId.set(null);
  }

  saveOverride(companyId: string): void {
    const amount = this.overrideAmount();
    if (amount == null || amount <= 0) {
      return;
    }
    this.isSavingOverride.set(true);
    this.pricingService.upsertOverride(companyId, amount, this.overrideNote() || null).subscribe({
      next: (updated) => {
        this.applyCompany(updated);
        this.isSavingOverride.set(false);
        this.editingCompanyId.set(null);
      },
      error: () => this.isSavingOverride.set(false)
    });
  }

  removeOverride(companyId: string): void {
    this.isSavingOverride.set(true);
    this.pricingService.removeOverride(companyId).subscribe({
      next: (updated) => {
        this.applyCompany(updated);
        this.isSavingOverride.set(false);
        this.editingCompanyId.set(null);
      },
      error: () => this.isSavingOverride.set(false)
    });
  }

  private applyCompany(updated: CompanySubscriptionPricing): void {
    this.companies.update((list) => list.map((c) => (c.companyId === updated.companyId ? updated : c)));
  }
}
