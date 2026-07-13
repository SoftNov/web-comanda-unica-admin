import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appRipple]',
  standalone: true,
  host: {
    style: 'position: relative; overflow: hidden;' 
  }
})
export class RippleDirective {
  private readonly el = inject(ElementRef<HTMLElement>);

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    const host = this.el.nativeElement;
    const rect = host.getBoundingClientRect();
    const diameter = Math.max(rect.width, rect.height);
    const radius = diameter / 2;

    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - rect.left - radius}px`;
    ripple.style.top = `${event.clientY - rect.top - radius}px`;

    host.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  }
}
