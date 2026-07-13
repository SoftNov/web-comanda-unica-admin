import { Component, signal } from '@angular/core';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

interface Testimonial {
  initials: string;
  name: string;
  role: string;
  company: string;
  quote: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  readonly activeIndex = signal(0);

  readonly testimonials: Testimonial[] = [
    {
      initials: 'JE',
      name: 'João Exemplo',
      role: 'Proprietário',
      company: 'Restaurante Exemplo',
      quote:
        'Depoimento ilustrativo: desde que trocamos as comandas de papel pelo Comanda Única, reduzimos erros de pedido e o caixa fecha muito mais rápido no fim do dia.'
    },
    {
      initials: 'MD',
      name: 'Cliente Demonstrativo',
      role: 'Gerente Geral',
      company: 'Hamburgueria Modelo',
      quote:
        'Depoimento ilustrativo: o modelo de pagamento por uso fez total sentido para a sazonalidade do nosso movimento. Nos dias mais fracos, simplesmente pagamos menos.'
    },
    {
      initials: 'CD',
      name: 'Ana Demonstração',
      role: 'Sócia-fundadora',
      company: 'Bar Ilustrativo',
      quote:
        'Depoimento ilustrativo: implantamos em uma tarde. Os garçons aprenderam a usar o sistema em minutos e os QR Codes nas mesas reduziram a fila no caixa.'
    }
  ];

  next(): void {
    this.activeIndex.update((i) => (i + 1) % this.testimonials.length);
  }

  prev(): void {
    this.activeIndex.update((i) => (i - 1 + this.testimonials.length) % this.testimonials.length);
  }

  goTo(index: number): void {
    this.activeIndex.set(index);
  }
}
