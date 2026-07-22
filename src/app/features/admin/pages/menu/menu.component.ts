import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import {
  ApiErrorResponse,
  CreateMenuItemRequest,
  MenuItemListParams,
  MenuItemResponse,
  MenuItemsService,
  UpdateMenuItemRequest
} from '../../../../shared/services/menu-items.service';
import {
  CreateMenuCategoryRequest,
  MenuCategoriesService,
  MenuCategoryResponse,
  UpdateMenuCategoryRequest
} from '../../../../shared/services/menu-categories.service';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import { formatCurrencyInput, parseCurrencyInput } from '../../../../shared/utils/br-format.util';
import { AuthService } from '../../../auth/services/auth.service';

const PAGE_SIZE = 10;
const MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = ['image/png', 'image/jpeg', 'image/webp'];

type ModalMode = 'create' | 'edit';
type TabId = 'produtos' | 'categorias';
type TriBoolFilter = 'all' | 'true' | 'false';

interface SortOption {
  value: string;
  label: string;
}

const SORT_OPTIONS: SortOption[] = [
  { value: 'displayOrder', label: 'Ordem de exibição' },
  { value: 'name', label: 'Nome' },
  { value: 'price', label: 'Preço' }
];

interface KitchenSectorOption {
  value: string;
  label: string;
}

const KITCHEN_SECTOR_OPTIONS: KitchenSectorOption[] = [
  { value: 'COZINHA', label: 'Cozinha' },
  { value: 'BAR', label: 'Bar' },
  { value: 'CONFEITARIA', label: 'Confeitaria' },
  { value: 'CHAPA', label: 'Chapa' },
  { value: 'COPA', label: 'Copa' },
  { value: 'SOBREMESAS', label: 'Sobremesas' }
];

// Ícones do Material Icons com maior relação a cardápios/categorias de bares e restaurantes.
const CATEGORY_ICON_OPTIONS: string[] = [
  'restaurant',
  'restaurant_menu',
  'local_dining',
  'local_pizza',
  'local_bar',
  'local_cafe',
  'local_drink',
  'fastfood',
  'icecream',
  'cake',
  'cookie',
  'coffee',
  'coffee_maker',
  'bakery_dining',
  'breakfast_dining',
  'brunch_dining',
  'lunch_dining',
  'dinner_dining',
  'egg_alt',
  'kebab_dining',
  'ramen_dining',
  'rice_bowl',
  'set_meal',
  'soup_kitchen',
  'tapas',
  'sports_bar',
  'wine_bar',
  'liquor',
  'emoji_food_beverage',
  'outdoor_grill',
  'blender',
  'takeout_dining',
  'delivery_dining',
  'food_bank',
  'storefront',
  'star',
  'local_fire_department',
  'ac_unit',
  'spa',
  'eco'
];

@Component({
  selector: 'app-admin-menu',
  standalone: true,
  imports: [ReactiveFormsModule, RippleDirective],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  private readonly fb = new FormBuilder();
  private readonly menuItemsService = inject(MenuItemsService);
  private readonly menuCategoriesService = inject(MenuCategoriesService);
  private readonly authService = inject(AuthService);

  readonly selectedCompany = this.authService.selectedCompany;
  readonly sortOptions = SORT_OPTIONS;
  readonly kitchenSectorOptions = KITCHEN_SECTOR_OPTIONS;

  readonly activeTab = signal<TabId>('produtos');

  // --- Produtos: listagem/paginação -------------------------------------
  readonly items = signal<MenuItemResponse[]>([]);
  readonly page = signal(0);
  readonly totalPages = signal(0);
  readonly totalElements = signal(0);
  readonly isLast = signal(true);
  readonly isLoadingList = signal(true);
  readonly listError = signal<string | null>(null);

  readonly pageLabel = computed(() => `Página ${this.page() + 1} de ${Math.max(this.totalPages(), 1)}`);

  // --- Produtos: filtros --------------------------------------------------
  readonly filterCategoryId = signal('');
  readonly filterActive = signal<TriBoolFilter>('all');
  readonly filterAvailable = signal<TriBoolFilter>('all');
  readonly searchName = signal('');
  readonly sortBy = signal('displayOrder');
  readonly sortDirection = signal<'ASC' | 'DESC'>('ASC');
  private readonly searchInput = new Subject<string>();

  // --- Produtos: modal de criar/editar --------------------------------------
  readonly isItemModalOpen = signal(false);
  readonly itemModalMode = signal<ModalMode>('create');
  readonly editingItem = signal<MenuItemResponse | null>(null);
  readonly isSubmittingItem = signal(false);
  readonly itemFormError = signal<string | null>(null);

  readonly itemToDelete = signal<MenuItemResponse | null>(null);
  readonly isDeletingItem = signal(false);
  readonly deleteItemError = signal<string | null>(null);

  readonly isUploadingImage = signal(false);
  readonly imageError = signal<string | null>(null);

  readonly itemForm = this.fb.nonNullable.group({
    categoryId: ['', Validators.required],
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
    description: ['', Validators.maxLength(1000)],
    price: ['', Validators.required],
    promotionalPrice: [''],
    promotionStart: this.fb.control<string | null>(null),
    promotionEnd: this.fb.control<string | null>(null),
    active: [true],
    available: [true],
    highlight: [false],
    newItem: [false],
    spicy: [false],
    vegan: [false],
    vegetarian: [false],
    lactoseFree: [false],
    glutenFree: [false],
    alcoholic: [false],
    calories: this.fb.control<number | null>(null, Validators.min(0)),
    weight: this.fb.control<number | null>(null, Validators.min(0)),
    kitchenSector: [''],
    displayOrder: this.fb.control<number | null>(null, Validators.min(0))
  });

  // --- Categorias -----------------------------------------------------------
  readonly categories = signal<MenuCategoryResponse[]>([]);
  readonly isLoadingCategories = signal(true);
  readonly categoriesError = signal<string | null>(null);

  readonly isCategoryModalOpen = signal(false);
  readonly categoryModalMode = signal<ModalMode>('create');
  readonly editingCategoryId = signal<string | null>(null);
  readonly isSubmittingCategory = signal(false);
  readonly categoryFormError = signal<string | null>(null);
  private categoryModalReturnsToProductForm = false;

  readonly categoryToDelete = signal<MenuCategoryResponse | null>(null);
  readonly isDeletingCategory = signal(false);
  readonly deleteCategoryError = signal<string | null>(null);

  readonly categoryForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    description: ['', Validators.maxLength(500)],
    icon: ['restaurant', Validators.maxLength(100)],
    color: ['#3b82f6'],
    displayOrder: [0, Validators.min(0)],
    active: [true]
  });

  readonly isIconPickerOpen = signal(false);
  readonly iconSearchTerm = signal('');
  readonly filteredIconOptions = computed(() => {
    const term = this.iconSearchTerm().trim().toLowerCase();
    return term ? CATEGORY_ICON_OPTIONS.filter((icon) => icon.includes(term)) : CATEGORY_ICON_OPTIONS;
  });

  private readonly currencyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

  constructor() {
    this.searchInput.pipe(debounceTime(400), distinctUntilChanged()).subscribe((value) => {
      this.searchName.set(value);
      this.loadItems(0);
    });

    this.loadCategories();
    this.loadItems(0);
  }

  // --- Abas -------------------------------------------------------------
  setActiveTab(tab: TabId): void {
    this.activeTab.set(tab);
  }

  // --- Formatação ---------------------------------------------------------
  formatCurrency(value: number | undefined | null): string {
    return value != null ? this.currencyFormatter.format(value) : '—';
  }

  isPromotionActive(item: MenuItemResponse): boolean {
    if (item.promotionalPrice == null) {
      return false;
    }
    const now = new Date();
    if (item.promotionStart && new Date(item.promotionStart) > now) {
      return false;
    }
    if (item.promotionEnd && new Date(item.promotionEnd) < now) {
      return false;
    }
    return true;
  }

  categoryName(categoryId: string): string {
    return this.categories().find((category) => category.id === categoryId)?.name ?? '—';
  }

  // --- Produtos: listagem -------------------------------------------------
  loadItems(page: number): void {
    this.isLoadingList.set(true);
    this.listError.set(null);

    const params: MenuItemListParams = {
      categoryId: this.filterCategoryId() || undefined,
      active: this.filterActive() === 'all' ? undefined : this.filterActive() === 'true',
      available: this.filterAvailable() === 'all' ? undefined : this.filterAvailable() === 'true',
      name: this.searchName() || undefined,
      page,
      size: PAGE_SIZE,
      sortBy: this.sortBy(),
      sortDirection: this.sortDirection()
    };

    this.menuItemsService.list(params).subscribe({
      next: (response) => {
        this.items.set(response.content);
        this.page.set(response.page);
        this.totalPages.set(response.totalPages);
        this.totalElements.set(response.totalElements);
        this.isLast.set(response.last);
        this.isLoadingList.set(false);
      },
      error: () => {
        this.isLoadingList.set(false);
        this.listError.set('Não foi possível carregar os produtos.');
      }
    });
  }

  goToPage(page: number): void {
    if (page < 0 || page >= this.totalPages() || page === this.page()) {
      return;
    }
    this.loadItems(page);
  }

  previousPage(): void {
    this.goToPage(this.page() - 1);
  }

  nextPage(): void {
    this.goToPage(this.page() + 1);
  }

  // --- Produtos: filtros ----------------------------------------------------
  onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchInput.next(input.value);
  }

  setCategoryFilter(value: string): void {
    this.filterCategoryId.set(value);
    this.loadItems(0);
  }

  setActiveFilter(value: TriBoolFilter): void {
    this.filterActive.set(value);
    this.loadItems(0);
  }

  setAvailableFilter(value: TriBoolFilter): void {
    this.filterAvailable.set(value);
    this.loadItems(0);
  }

  setSortBy(value: string): void {
    this.sortBy.set(value);
    this.loadItems(0);
  }

  toggleSortDirection(): void {
    this.sortDirection.set(this.sortDirection() === 'ASC' ? 'DESC' : 'ASC');
    this.loadItems(0);
  }

  resetFilters(): void {
    this.filterCategoryId.set('');
    this.filterActive.set('all');
    this.filterAvailable.set('all');
    this.searchName.set('');
    this.sortBy.set('displayOrder');
    this.sortDirection.set('ASC');
    this.loadItems(0);
  }

  // --- Produtos: modal de criar/editar --------------------------------------
  openCreateItemModal(): void {
    this.itemModalMode.set('create');
    this.editingItem.set(null);
    this.itemFormError.set(null);
    this.imageError.set(null);
    this.itemForm.reset({
      categoryId: '',
      name: '',
      description: '',
      price: '',
      promotionalPrice: '',
      promotionStart: null,
      promotionEnd: null,
      active: true,
      available: true,
      highlight: false,
      newItem: false,
      spicy: false,
      vegan: false,
      vegetarian: false,
      lactoseFree: false,
      glutenFree: false,
      alcoholic: false,
      calories: null,
      weight: null,
      kitchenSector: '',
      displayOrder: null
    });
    this.isItemModalOpen.set(true);
  }

  openEditItemModal(item: MenuItemResponse): void {
    this.itemModalMode.set('edit');
    this.editingItem.set(item);
    this.itemFormError.set(null);
    this.imageError.set(null);
    this.itemForm.reset({
      categoryId: item.categoryId,
      name: item.name,
      description: item.description ?? '',
      price: this.toMaskedCurrency(item.price),
      promotionalPrice: this.toMaskedCurrency(item.promotionalPrice),
      promotionStart: this.toDatetimeLocal(item.promotionStart),
      promotionEnd: this.toDatetimeLocal(item.promotionEnd),
      active: item.active,
      available: item.available,
      highlight: item.highlight,
      newItem: item.newItem,
      spicy: item.spicy,
      vegan: item.vegan,
      vegetarian: item.vegetarian,
      lactoseFree: item.lactoseFree,
      glutenFree: item.glutenFree,
      alcoholic: item.alcoholic,
      calories: item.calories ?? null,
      weight: item.weight ?? null,
      kitchenSector: item.kitchenSector ?? '',
      displayOrder: item.displayOrder
    });
    this.isItemModalOpen.set(true);
  }

  closeItemModal(): void {
    this.isItemModalOpen.set(false);
  }

  submitItem(): void {
    if (this.itemForm.invalid) {
      this.itemForm.markAllAsTouched();
      this.itemFormError.set('Verifique os campos destacados antes de salvar.');
      return;
    }

    this.itemFormError.set(null);
    this.isSubmittingItem.set(true);

    if (this.itemModalMode() === 'create') {
      this.menuItemsService.create(this.buildItemPayload() as CreateMenuItemRequest).subscribe({
        next: () => {
          this.isSubmittingItem.set(false);
          this.isItemModalOpen.set(false);
          this.loadItems(0);
        },
        error: (error: HttpErrorResponse) => {
          this.isSubmittingItem.set(false);
          this.itemFormError.set(this.resolveErrorMessage(error, 'item'));
        }
      });
      return;
    }

    const item = this.editingItem();
    if (!item) {
      return;
    }

    this.menuItemsService.update(item.id, this.buildItemPayload() as UpdateMenuItemRequest).subscribe({
      next: (updated) => {
        this.isSubmittingItem.set(false);
        this.isItemModalOpen.set(false);
        this.replaceItem(updated);
      },
      error: (error: HttpErrorResponse) => {
        this.isSubmittingItem.set(false);
        this.itemFormError.set(this.resolveErrorMessage(error, 'item'));
      }
    });
  }

  requestDeleteItem(item: MenuItemResponse): void {
    this.deleteItemError.set(null);
    this.itemToDelete.set(item);
  }

  cancelDeleteItem(): void {
    this.itemToDelete.set(null);
  }

  confirmDeleteItem(): void {
    const item = this.itemToDelete();
    if (!item) {
      return;
    }

    this.isDeletingItem.set(true);
    this.deleteItemError.set(null);

    this.menuItemsService.delete(item.id).subscribe({
      next: () => {
        this.isDeletingItem.set(false);
        this.itemToDelete.set(null);
        this.loadItems(this.isLast() && this.items().length === 1 && this.page() > 0 ? this.page() - 1 : this.page());
      },
      error: (error: HttpErrorResponse) => {
        this.isDeletingItem.set(false);
        this.deleteItemError.set(this.resolveErrorMessage(error, 'item'));
      }
    });
  }

  // --- Produtos: ações rápidas ---------------------------------------------
  toggleStatus(item: MenuItemResponse): void {
    this.menuItemsService.updateStatus(item.id, !item.active).subscribe({
      next: (updated) => this.replaceItem(updated),
      error: () => this.listError.set('Não foi possível atualizar o status do produto.')
    });
  }

  toggleAvailability(item: MenuItemResponse): void {
    this.menuItemsService.updateAvailability(item.id, !item.available).subscribe({
      next: (updated) => this.replaceItem(updated),
      error: () => this.listError.set('Não foi possível atualizar a disponibilidade do produto.')
    });
  }

  toggleHighlight(item: MenuItemResponse): void {
    this.menuItemsService.updateHighlight(item.id, !item.highlight).subscribe({
      next: (updated) => this.replaceItem(updated),
      error: () => this.listError.set('Não foi possível atualizar o destaque do produto.')
    });
  }

  private replaceItem(updated: MenuItemResponse): void {
    this.items.update((list) => list.map((current) => (current.id === updated.id ? updated : current)));
    if (this.editingItem()?.id === updated.id) {
      this.editingItem.set(updated);
    }
  }

  // --- Produtos: galeria de imagens -----------------------------------------
  onImageFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';

    if (!file) {
      return;
    }

    const item = this.editingItem();
    if (!item) {
      return;
    }

    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      this.imageError.set('Envie uma imagem nos formatos JPG, PNG ou WEBP.');
      return;
    }
    if (file.size > MAX_IMAGE_SIZE_BYTES) {
      this.imageError.set('O arquivo enviado excede o tamanho máximo permitido de 5MB.');
      return;
    }

    this.imageError.set(null);
    this.isUploadingImage.set(true);

    this.menuItemsService.addImage(item.id, file).subscribe({
      next: (updated) => {
        this.isUploadingImage.set(false);
        this.replaceItem(updated);
      },
      error: (error: HttpErrorResponse) => {
        this.isUploadingImage.set(false);
        this.imageError.set(this.resolveErrorMessage(error, 'item'));
      }
    });
  }

  removeImage(imageId: string): void {
    const item = this.editingItem();
    if (!item) {
      return;
    }

    this.imageError.set(null);
    this.menuItemsService.removeImage(item.id, imageId).subscribe({
      next: (updated) => this.replaceItem(updated),
      error: (error: HttpErrorResponse) => this.imageError.set(this.resolveErrorMessage(error, 'item'))
    });
  }

  private buildItemPayload(): CreateMenuItemRequest {
    const value = this.itemForm.getRawValue();
    return {
      categoryId: value.categoryId,
      name: value.name.trim(),
      description: value.description.trim() || undefined,
      price: parseCurrencyInput(value.price) ?? 0,
      promotionalPrice: parseCurrencyInput(value.promotionalPrice) ?? undefined,
      promotionStart: value.promotionStart ?? undefined,
      promotionEnd: value.promotionEnd ?? undefined,
      active: value.active,
      available: value.available,
      highlight: value.highlight,
      newItem: value.newItem,
      spicy: value.spicy,
      vegan: value.vegan,
      vegetarian: value.vegetarian,
      lactoseFree: value.lactoseFree,
      glutenFree: value.glutenFree,
      alcoholic: value.alcoholic,
      calories: value.calories ?? undefined,
      weight: value.weight ?? undefined,
      kitchenSector: value.kitchenSector || undefined,
      displayOrder: value.displayOrder ?? undefined
    };
  }

  private toDatetimeLocal(value: string | undefined): string | null {
    return value ? value.slice(0, 16) : null;
  }

  private toMaskedCurrency(value: number | undefined | null): string {
    return value != null ? formatCurrencyInput(String(Math.round(value * 100))) : '';
  }

  onPriceInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.itemForm.controls.price.setValue(formatCurrencyInput(input.value));
  }

  onPromotionalPriceInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.itemForm.controls.promotionalPrice.setValue(formatCurrencyInput(input.value));
  }

  // --- Categorias -------------------------------------------------------
  loadCategories(): void {
    this.isLoadingCategories.set(true);
    this.categoriesError.set(null);

    this.menuCategoriesService.list().subscribe({
      next: (categories) => {
        this.categories.set(categories);
        this.isLoadingCategories.set(false);
      },
      error: () => {
        this.isLoadingCategories.set(false);
        this.categoriesError.set('Não foi possível carregar as categorias.');
      }
    });
  }

  openCreateCategoryModal(fromProductForm = false): void {
    this.categoryModalMode.set('create');
    this.editingCategoryId.set(null);
    this.categoryFormError.set(null);
    this.categoryModalReturnsToProductForm = fromProductForm;
    this.categoryForm.reset({
      name: '',
      description: '',
      icon: 'restaurant',
      color: '#3b82f6',
      displayOrder: 0,
      active: true
    });
    this.closeIconPicker();
    this.isCategoryModalOpen.set(true);
  }

  openEditCategoryModal(category: MenuCategoryResponse): void {
    this.categoryModalMode.set('edit');
    this.editingCategoryId.set(category.id);
    this.categoryFormError.set(null);
    this.categoryModalReturnsToProductForm = false;
    this.categoryForm.reset({
      name: category.name,
      description: category.description ?? '',
      icon: category.icon ?? '',
      color: category.color ?? '#3b82f6',
      displayOrder: category.displayOrder,
      active: category.active
    });
    this.closeIconPicker();
    this.isCategoryModalOpen.set(true);
  }

  closeCategoryModal(): void {
    this.isCategoryModalOpen.set(false);
    this.closeIconPicker();
  }

  toggleIconPicker(): void {
    this.isIconPickerOpen.set(!this.isIconPickerOpen());
  }

  closeIconPicker(): void {
    this.isIconPickerOpen.set(false);
    this.iconSearchTerm.set('');
  }

  selectIcon(icon: string): void {
    this.categoryForm.controls.icon.setValue(icon);
    this.closeIconPicker();
  }

  onIconSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.iconSearchTerm.set(input.value);
  }

  submitCategory(): void {
    if (this.categoryForm.invalid) {
      this.categoryForm.markAllAsTouched();
      this.categoryFormError.set('Verifique os campos destacados antes de salvar.');
      return;
    }

    this.categoryFormError.set(null);
    this.isSubmittingCategory.set(true);
    const value = this.categoryForm.getRawValue();

    if (this.categoryModalMode() === 'create') {
      const payload: CreateMenuCategoryRequest = {
        name: value.name.trim(),
        description: value.description.trim() || undefined,
        icon: value.icon.trim() || undefined,
        color: value.color || undefined,
        displayOrder: value.displayOrder,
        active: value.active
      };
      this.menuCategoriesService.create(payload).subscribe({
        next: (created) => {
          this.isSubmittingCategory.set(false);
          this.isCategoryModalOpen.set(false);
          this.loadCategories();
          if (this.categoryModalReturnsToProductForm) {
            this.itemForm.controls.categoryId.setValue(created.id);
          }
        },
        error: (error: HttpErrorResponse) => {
          this.isSubmittingCategory.set(false);
          this.categoryFormError.set(this.resolveErrorMessage(error, 'category'));
        }
      });
      return;
    }

    const categoryId = this.editingCategoryId();
    if (!categoryId) {
      return;
    }

    const payload: UpdateMenuCategoryRequest = {
      name: value.name.trim(),
      description: value.description.trim() || undefined,
      icon: value.icon.trim() || undefined,
      color: value.color || undefined,
      displayOrder: value.displayOrder,
      active: value.active
    };

    this.menuCategoriesService.update(categoryId, payload).subscribe({
      next: () => {
        this.isSubmittingCategory.set(false);
        this.isCategoryModalOpen.set(false);
        this.loadCategories();
      },
      error: (error: HttpErrorResponse) => {
        this.isSubmittingCategory.set(false);
        this.categoryFormError.set(this.resolveErrorMessage(error, 'category'));
      }
    });
  }

  requestDeleteCategory(category: MenuCategoryResponse): void {
    this.deleteCategoryError.set(null);
    this.categoryToDelete.set(category);
  }

  cancelDeleteCategory(): void {
    this.categoryToDelete.set(null);
  }

  confirmDeleteCategory(): void {
    const category = this.categoryToDelete();
    if (!category) {
      return;
    }

    this.isDeletingCategory.set(true);
    this.deleteCategoryError.set(null);

    this.menuCategoriesService.delete(category.id).subscribe({
      next: () => {
        this.isDeletingCategory.set(false);
        this.categoryToDelete.set(null);
        this.loadCategories();
      },
      error: (error: HttpErrorResponse) => {
        this.isDeletingCategory.set(false);
        this.deleteCategoryError.set(this.resolveErrorMessage(error, 'category'));
      }
    });
  }

  // --- Erros ---------------------------------------------------------------
  private resolveErrorMessage(error: HttpErrorResponse, domain: 'item' | 'category'): string {
    const body = error.error as ApiErrorResponse | undefined;
    if (body?.mensagem) {
      return body.mensagem;
    }
    if (body?.titulo) {
      return body.titulo;
    }
    if (domain === 'item') {
      if (error.status === 409) {
        return 'Já existe um produto com este SKU nesta empresa.';
      }
      if (error.status === 404) {
        return 'Produto ou categoria informada não encontrada nesta empresa.';
      }
    } else {
      if (error.status === 409) {
        return 'Existem produtos vinculados a esta categoria. Mova ou remova os produtos antes de excluí-la.';
      }
      if (error.status === 404) {
        return 'Categoria não encontrada nesta empresa.';
      }
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
