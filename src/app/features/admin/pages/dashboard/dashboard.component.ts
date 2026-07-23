import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { FloorPlanViewerComponent } from '../../../../shared/components/floor-plan-viewer/floor-plan-viewer.component';
import { FloorPlanResponse, FloorPlansService } from '../../../../shared/services/floor-plans.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [FloorPlanViewerComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  private readonly authService = inject(AuthService);
  private readonly floorPlansService = inject(FloorPlansService);

  readonly currentUser = this.authService.currentUser;
  readonly selectedCompany = this.authService.selectedCompany;

  readonly floorPlans = signal<FloorPlanResponse[]>([]);
  readonly isLoadingFloorPlans = signal(true);
  readonly selectedFloorPlanId = signal<string | null>(null);

  constructor() {
    this.loadFloorPlans();
  }

  selectFloorPlan(floorPlanId: string): void {
    this.selectedFloorPlanId.set(floorPlanId);
  }

  private loadFloorPlans(): void {
    this.isLoadingFloorPlans.set(true);
    this.floorPlansService.list().subscribe({
      next: (floorPlans) => {
        this.floorPlans.set(floorPlans);
        this.selectedFloorPlanId.set(floorPlans[0]?.id ?? null);
        this.isLoadingFloorPlans.set(false);
      },
      error: () => {
        this.isLoadingFloorPlans.set(false);
      }
    });
  }
}
