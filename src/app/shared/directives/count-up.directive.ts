import { Directive, ElementRef, Input, OnDestroy, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appCountUp]',
  standalone: true
})
export class CountUpDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private observer?: IntersectionObserver;
  private frame?: number;

  @Input('appCountUp') target = 0;
  @Input() countSuffix = '';
  @Input() countPrefix = '';
  @Input() countDuration = 1400;

  ngOnInit(): void {
    const host = this.el.nativeElement;

    // No pré-render (servidor) grava o valor final, que é o que o Google deve ler.
    if (!this.isBrowser) {
      host.textContent = `${this.countPrefix}${this.target}${this.countSuffix}`;
      return;
    }

    host.textContent = `${this.countPrefix}0${this.countSuffix}`;

    if (!('IntersectionObserver' in window)) {
      this.animate();
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.animate();
            this.observer?.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );
    this.observer.observe(host);
  }

  private animate(): void {
    const host = this.el.nativeElement;
    const start = performance.now();
    const from = 0;
    const to = this.target;

    const step = (now: number) => {
      const progress = Math.min((now - start) / this.countDuration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(from + (to - from) * eased);
      host.textContent = `${this.countPrefix}${value}${this.countSuffix}`;

      if (progress < 1) {
        this.frame = requestAnimationFrame(step);
      }
    };

    this.frame = requestAnimationFrame(step);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.frame) {
      cancelAnimationFrame(this.frame);
    }
  }
}
