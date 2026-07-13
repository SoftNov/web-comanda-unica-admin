import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RippleDirective, ScrollRevealDirective, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  /** Subtle parallax offset (px) applied to the mockup panel while scrolling the hero. */
  readonly parallaxOffset = signal(0);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const y = window.scrollY;
    this.parallaxOffset.set(Math.min(y * 0.15, 60));
  }
}
