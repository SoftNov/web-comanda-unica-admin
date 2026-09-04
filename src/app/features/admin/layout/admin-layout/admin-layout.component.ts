import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { AccountsService } from '../../../../shared/services/accounts.service';
import { resolveHomeRoute } from '../../../../core/guards/home.guard';
import { ADMIN_MENU_SEGMENTS, MenuItem, MenuSegment } from '../../config/menu.config';
import {
  NotificationsService,
  ORDER_QUEUE_NOTIFICATION_PROFILES,
  SERVICE_REQUEST_NOTIFICATION_PROFILES,
  SERVICE_TYPE_LABELS
} from '../../../../shared/services/notifications.service';
import { ServiceRequestType } from '../../../../shared/services/service-requests.service';
import { brDateTimeFormat, parseApiDate } from '../../../../shared/utils/datetime.util';

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
  private readonly notificationsService = inject(NotificationsService);
  private readonly router = inject(Router);

  private readonly timeFormatter = brDateTimeFormat({ timeStyle: 'short' });

  readonly currentUser = this.authService.currentUser;
  readonly companies = this.authService.companies;
  readonly selectedCompany = this.authService.selectedCompany;

  readonly profileCode = computed(() => this.selectedCompany()?.profileCode ?? null);
  readonly isPlatformAdmin = this.authService.isPlatformAdmin;
  // Menu organizado por segmento (ver menu.config.ts) — cada seção some inteira se nenhum item
  // dela sobrar visível para o perfil/platform admin atual.
  readonly menuSegments = computed<MenuSegment[]>(() =>
    ADMIN_MENU_SEGMENTS.map((segment) => ({
      ...segment,
      items: this.filterMenuByProfile(segment.items, this.profileCode(), this.isPlatformAdmin())
    })).filter((segment) => segment.items.length > 0)
  );

  readonly isMobileSidebarOpen = signal(false);
  readonly isSidebarCollapsed = signal(false);
  readonly isCompanyMenuOpen = signal(false);
  readonly isUserMenuOpen = signal(false);
  readonly isNotificationsMenuOpen = signal(false);
  // Accordion: só um grupo (Mesas, Serviços Gerais, Configurações etc.) fica expandido por vez em
  // toda a sidebar — abrir um fecha automaticamente qualquer outro que estivesse aberto (ver
  // toggleGroup). Começa apontando para o grupo da rota atual, se houver.
  readonly expandedGroup = signal<string | null>(this.findInitiallyActiveGroupLabel());

  // Sino de notificações no topo — pedidos ainda não entregues e serviços gerais ainda não
  // atendidos, atualizados em tempo real (ver NotificationsService). As duas seções só aparecem
  // se o perfil atual tiver acesso ao respectivo recurso no backend (KITCHEN não vê serviços).
  readonly hasOrderNotifications = computed(() => {
    const code = this.profileCode();
    return !!code && ORDER_QUEUE_NOTIFICATION_PROFILES.includes(code);
  });
  readonly hasServiceNotifications = computed(() => {
    const code = this.profileCode();
    return !!code && SERVICE_REQUEST_NOTIFICATION_PROFILES.includes(code);
  });
  readonly pendingOrders = this.notificationsService.pendingOrders;
  readonly pendingServiceRequests = this.notificationsService.pendingServiceRequests;
  readonly totalPendingCount = this.notificationsService.totalPendingCount;
  readonly notificationToast = this.notificationsService.toast;

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
    this.isNotificationsMenuOpen.set(false);
  }

  toggleNotificationsMenu(event: Event): void {
    event.stopPropagation();
    this.isCompanyMenuOpen.set(false);
    this.isUserMenuOpen.set(false);
    this.isNotificationsMenuOpen.update((open) => !open);
  }

  dismissToast(): void {
    this.notificationsService.dismissToast();
  }

  formatTime(value: string): string {
    const parsed = parseApiDate(value);
    return parsed ? this.timeFormatter.format(parsed) : '—';
  }

  serviceTypeLabel(type: ServiceRequestType): string {
    return SERVICE_TYPE_LABELS[type];
  }

  goToPedidos(): void {
    this.isNotificationsMenuOpen.set(false);
    void this.router.navigateByUrl('/painel/pedidos');
  }

  goToServicos(): void {
    this.isNotificationsMenuOpen.set(false);
    void this.router.navigateByUrl('/painel/servicos');
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
    return this.expandedGroup() === item.label;
  }

  toggleGroup(item: MenuItem, event: Event): void {
    event.stopPropagation();

    if (this.isSidebarCollapsed()) {
      this.isSidebarCollapsed.set(false);
    }

    // Alterna o próprio grupo; qualquer outro que estivesse aberto fecha, já que só um label cabe
    // no signal (ver o comentário de expandedGroup).
    this.expandedGroup.update((current) => (current === item.label ? null : item.label));
  }

  private isGroupActive(item: MenuItem): boolean {
    return (item.children ?? []).some((child) => !!child.route && this.router.url.startsWith(child.route));
  }

  private findInitiallyActiveGroupLabel(): string | null {
    for (const segment of ADMIN_MENU_SEGMENTS) {
      const activeItem = segment.items.find((item) => this.isGroupActive(item));
      if (activeItem) {
        return activeItem.label;
      }
    }
    return null;
  }

  private filterMenuByProfile(items: MenuItem[], profileCode: string | null, isPlatformAdmin: boolean): MenuItem[] {
    return items
      .filter((item) => !item.roles || (!!profileCode && item.roles.includes(profileCode)))
      .filter((item) => !item.platformAdminOnly || isPlatformAdmin)
      .map((item) =>
        item.children ? { ...item, children: this.filterMenuByProfile(item.children, profileCode, isPlatformAdmin) } : item
      )
      .filter((item) => !item.children || item.children.length > 0);
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
    this.router.navigateByUrl(resolveHomeRoute(this.selectedCompany()?.profileCode ?? null));
  }

  logout(): void {
    this.authService.logout();
  }
}
