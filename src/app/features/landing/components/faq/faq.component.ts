import { Component, signal } from '@angular/core';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  readonly openIndex = signal<number | null>(0);

  readonly items: FaqItem[] = [
    {
      question: 'Como funciona?',
      answer:
        'Você cadastra seu estabelecimento, funcionários e produtos, imprime os QR Codes das mesas e começa a receber pedidos digitais em tempo real — tudo em uma única plataforma na nuvem.'
    },
    {
      question: 'Existe mensalidade?',
      answer:
        'Não. O Comanda Única não cobra mensalidade fixa. Você paga apenas pelas comandas efetivamente utilizadas no período.'
    },
    {
      question: 'Como é feita a cobrança?',
      answer:
        'Cada comanda fechada gera uma pequena taxa de utilização da plataforma. Se não houver atendimento, não há cobrança.'
    },
    {
      question: 'Preciso instalar algum programa?',
      answer:
        'Não. O sistema é 100% cloud e funciona direto pelo navegador, tanto para a equipe quanto para os clientes que acessam via QR Code.'
    },
    {
      question: 'Funciona no celular?',
      answer:
        'Sim. O Comanda Única é totalmente responsivo e funciona em celulares, tablets, notebooks e desktops.'
    },
    {
      question: 'É possível cancelar quando quiser?',
      answer:
        'Sim. Não existe fidelidade ou contrato de permanência mínima — você pode encerrar o uso quando quiser.'
    },
    {
      question: 'Como funciona o suporte?',
      answer:
        'Nossa equipe de suporte está disponível para ajudar na implantação, dúvidas do dia a dia e questões técnicas.'
    },
    {
      question: 'Posso cadastrar vários funcionários?',
      answer:
        'Sim, o número de funcionários é ilimitado e você pode definir permissões diferentes para cada perfil de acesso.'
    },
    {
      question: 'Existe limite de comandas?',
      answer:
        'Não há limite de comandas, mesas ou usuários. Você utiliza o quanto precisar e paga apenas pelo uso real.'
    }
  ];

  toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
