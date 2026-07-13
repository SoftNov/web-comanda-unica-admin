import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RippleDirective } from '../../directives/ripple.directive';

interface NavLink {
  label: string;
  fragment: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RippleDirective, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly isScrolled = signal(false);
  readonly isMenuOpen = signal(false);

  readonly navLinks: NavLink[] = [
    { label: 'Recursos', fragment: 'recursos' },
    { label: 'Como Funciona', fragment: 'como-funciona' },
    { label: 'Diferenciais', fragment: 'diferenciais' },
    { label: 'Preços', fragment: 'precos' },
    { label: 'FAQ', fragment: 'faq' },
    { label: 'Contato', fragment: 'contato' }
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 12);
  }

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
