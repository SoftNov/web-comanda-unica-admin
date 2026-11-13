import { Directive, ElementRef, Input, OnDestroy, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
  host: {
    '[attr.data-reveal]': "variant || 'up'"
  }
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private observer?: IntersectionObserver;

  /** 'up' (fade + slide up) or 'fade' (fade only). */
  @Input('appScrollReveal') variant: 'up' | 'fade' = 'up';
  @Input() revealDelay = 0;

  ngOnInit(): void {
    const host = this.el.nativeElement;

    if (this.revealDelay) {
      host.style.transitionDelay = `${this.revealDelay}ms`;
    }

    // No pré-render (servidor) o conteúdo já sai visível, para o Google e para quem abre sem JS.
    if (!this.isBrowser || !('IntersectionObserver' in window)) {
      host.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            host.classList.add('is-visible');
            this.observer?.unobserve(host);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    this.observer.observe(host);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
