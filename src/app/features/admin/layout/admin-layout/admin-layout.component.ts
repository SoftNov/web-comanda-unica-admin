import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { AccountsService } from '../../../../shared/services/accounts.service';
import { ADMIN_MENU_ITEMS, MenuItem } from '../../config/menu.config';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent {
  private readonly authService = inject(AuthService);
  private readonly accountsService = inject(AccountsService);
  private readonly router = inject(Router);

  readonly currentUser = this.authService.currentUser;
  readonly companies = this.authService.companies;
  readonly selectedCompany = this.authService.selectedCompany;

  readonly profileCode = computed(() => this.selectedCompany()?.profileCode ?? null);
  readonly menuItems = computed(() => this.filterMenuByProfile(ADMIN_MENU_ITEMS, this.profileCode()));

  readonly isMobileSidebarOpen = signal(false);
  readonly isSidebarCollapsed = signal(false);
  readonly isCompanyMenuOpen = signal(false);
  readonly isUserMenuOpen = signal(false);
  readonly expandedGroups = signal<ReadonlySet<string>>(
    new Set(this.menuItems().filter((item) => this.isGroupActive(item)).map((item) => item.label))
  );

  constructor() {
    this.syncProfileImages();
  }

  get userInitials(): string {
    const name = this.currentUser()?.fullName ?? '';
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) {
      return '?';
    }
    return (parts[0][0] + (parts[1]?.[0] ?? '')).toUpperCase();
  }

  @HostListener('document:click')
  closeMenus(): void {
    this.isCompanyMenuOpen.set(false);
    this.isUserMenuOpen.set(false);
  }

  toggleMobileSidebar(): void {
    this.isMobileSidebarOpen.update((open) => !open);
  }

  closeMobileSidebar(): void {
    this.isMobileSidebarOpen.set(false);
  }

  toggleCollapse(): void {
    this.isSidebarCollapsed.update((collapsed) => !collapsed);
  }

  isGroupExpanded(item: MenuItem): boolean {
    return this.expandedGroups().has(item.label);
  }

  toggleGroup(item: MenuItem, event: Event): void {
    event.stopPropagation();

    if (this.isSidebarCollapsed()) {
      this.isSidebarCollapsed.set(false);
    }

    this.expandedGroups.update((current) => {
      const next = new Set(current);
      if (next.has(item.label)) {
        next.delete(item.label);
      } else {
        next.add(item.label);
      }
      return next;
    });
  }

  private isGroupActive(item: MenuItem): boolean {
    return (item.children ?? []).some((child) => !!child.route && this.router.url.startsWith(child.route));
  }

  private filterMenuByProfile(items: MenuItem[], profileCode: string | null): MenuItem[] {
    return items
      .filter((item) => !item.roles || (!!profileCode && item.roles.includes(profileCode)))
      .map((item) => (item.children ? { ...item, children: this.filterMenuByProfile(item.children, profileCode) } : item));
  }

  private syncProfileImages(): void {
    this.accountsService.getProfile().subscribe({
      next: (response) => {
        if (response.owner.avatarUrl) {
          this.authService.updateAvatarUrl(response.owner.avatarUrl);
        }
        // companyLogoUrl vem preenchida para qualquer perfil (ao contrário de "company",
        // que só vem para OWNER/ADMIN), então é sempre essa fonte que deve alimentar o menu.
        if (response.companyLogoUrl) {
          const companyId = this.selectedCompany()?.companyId;
          if (companyId) {
            this.authService.updateCompanyLogoUrl(companyId, response.companyLogoUrl);
          }
        }
      },
      error: () => {
        // Non-critical: topbar just keeps showing initials/the static mark if this fails.
      }
    });
  }

  toggleCompanyMenu(event: Event): void {
    event.stopPropagation();
    this.isUserMenuOpen.set(false);
    this.isCompanyMenuOpen.update((open) => !open);
  }

  toggleUserMenu(event: Event): void {
    event.stopPropagation();
    this.isCompanyMenuOpen.set(false);
    this.isUserMenuOpen.update((open) => !open);
  }

  selectCompany(companyId: string): void {
    this.authService.selectCompany(companyId);
    this.accountsService.invalidateProfileCache();
    this.syncProfileImages();
    this.isCompanyMenuOpen.set(false);
    this.router.navigateByUrl('/painel/dashboard');
  }

  logout(): void {
    this.authService.logout();
  }
}
