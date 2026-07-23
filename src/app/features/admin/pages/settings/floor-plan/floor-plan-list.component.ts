import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  ApiErrorResponse,
  CreateFloorPlanRequest,
  FloorPlanResponse,
  FloorPlansService,
  UpdateFloorPlanRequest
} from '../../../../../shared/services/floor-plans.service';
import { RippleDirective } from '../../../../../shared/directives/ripple.directive';

type ModalMode = 'create' | 'edit';

@Component({
  selector: 'app-admin-floor-plan-list',
  standalone: true,
  imports: [ReactiveFormsModule, RippleDirective],
  templateUrl: './floor-plan-list.component.html',
  styleUrl: './floor-plan-list.component.scss'
})
export class FloorPlanListComponent {
  private readonly fb = new FormBuilder();
  private readonly floorPlansService = inject(FloorPlansService);
  private readonly router = inject(Router);

  readonly floorPlans = signal<FloorPlanResponse[]>([]);
  readonly isLoading = signal(true);
  readonly loadError = signal<string | null>(null);

  readonly isModalOpen = signal(false);
  readonly modalMode = signal<ModalMode>('create');
  readonly editingId = signal<string | null>(null);
  readonly isSubmitting = signal(false);
  readonly formError = signal<string | null>(null);

  readonly floorPlanToDelete = signal<FloorPlanResponse | null>(null);
  readonly isDeleting = signal(false);
  readonly deleteError = signal<string | null>(null);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    width: this.fb.control<number | null>(1200, [Validators.required, Validators.min(100)]),
    height: this.fb.control<number | null>(800, [Validators.required, Validators.min(100)]),
    backgroundColor: ['#f5f5f5']
  });

  constructor() {
    this.loadFloorPlans();
  }

  loadFloorPlans(): void {
    this.isLoading.set(true);
    this.loadError.set(null);

    this.floorPlansService.list().subscribe({
      next: (floorPlans) => {
        this.floorPlans.set(floorPlans);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
        this.loadError.set('Não foi possível carregar os ambientes.');
      }
    });
  }

  openEditor(floorPlan: FloorPlanResponse): void {
    this.router.navigate(['/painel/configuracoes/mapa-salao', floorPlan.id]);
  }

  openCreateModal(): void {
    this.modalMode.set('create');
    this.editingId.set(null);
    this.formError.set(null);
    this.form.reset({
      name: '',
      width: 1200,
      height: 800,
      backgroundColor: '#f5f5f5'
    });
    this.isModalOpen.set(true);
  }

  openEditModal(floorPlan: FloorPlanResponse): void {
    this.modalMode.set('edit');
    this.editingId.set(floorPlan.id);
    this.formError.set(null);
    this.form.reset({
      name: floorPlan.name,
      width: floorPlan.width,
      height: floorPlan.height,
      backgroundColor: floorPlan.backgroundColor ?? '#f5f5f5'
    });
    this.isModalOpen.set(true);
  }

  closeModal(): void {
    this.isModalOpen.set(false);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.formError.set('Verifique os campos destacados antes de salvar.');
      return;
    }

    this.formError.set(null);
    this.isSubmitting.set(true);
    const value = this.form.getRawValue();
    const payload: CreateFloorPlanRequest | UpdateFloorPlanRequest = {
      name: value.name.trim(),
      width: value.width ?? 1200,
      height: value.height ?? 800,
      backgroundColor: value.backgroundColor || undefined
    };

    if (this.modalMode() === 'create') {
      this.floorPlansService.create(payload).subscribe({
        next: (created) => {
          this.isSubmitting.set(false);
          this.isModalOpen.set(false);
          this.loadFloorPlans();
          this.openEditor(created);
        },
        error: (error: HttpErrorResponse) => {
          this.isSubmitting.set(false);
          this.formError.set(this.resolveErrorMessage(error));
        }
      });
      return;
    }

    const id = this.editingId();
    if (!id) {
      return;
    }

    this.floorPlansService.update(id, payload).subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.isModalOpen.set(false);
        this.loadFloorPlans();
      },
      error: (error: HttpErrorResponse) => {
        this.isSubmitting.set(false);
        this.formError.set(this.resolveErrorMessage(error));
      }
    });
  }

  requestDelete(floorPlan: FloorPlanResponse): void {
    this.deleteError.set(null);
    this.floorPlanToDelete.set(floorPlan);
  }

  cancelDelete(): void {
    this.floorPlanToDelete.set(null);
  }

  confirmDelete(): void {
    const floorPlan = this.floorPlanToDelete();
    if (!floorPlan) {
      return;
    }

    this.isDeleting.set(true);
    this.deleteError.set(null);

    this.floorPlansService.delete(floorPlan.id).subscribe({
      next: () => {
        this.isDeleting.set(false);
        this.floorPlanToDelete.set(null);
        this.loadFloorPlans();
      },
      error: (error: HttpErrorResponse) => {
        this.isDeleting.set(false);
        this.deleteError.set(this.resolveErrorMessage(error));
      }
    });
  }

  private resolveErrorMessage(error: HttpErrorResponse): string {
    const body = error.error as ApiErrorResponse | undefined;
    if (body?.mensagem) {
      return body.mensagem;
    }
    if (body?.titulo) {
      return body.titulo;
    }
    if (error.status === 404) {
      return 'Ambiente não encontrado nesta empresa.';
    }
    if (error.status === 403) {
      return 'Você não tem permissão para realizar esta ação.';
    }
    if (error.status === 422) {
      return 'Verifique os dados informados e tente novamente.';
    }
    return 'Não foi possível concluir a operação. Tente novamente em instantes.';
  }
}
