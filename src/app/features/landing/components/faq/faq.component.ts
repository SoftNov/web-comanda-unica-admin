import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
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
export class FaqComponent implements OnInit, OnDestroy {
  private static readonly SCHEMA_ID = 'faq-schema';
  private readonly document = inject(DOCUMENT);

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
        'Sim. O Comanda Única é uma assinatura mensal, com valor de acordo com a quantidade de mesas do seu estabelecimento.'
    },
    {
      question: 'Como é feita a cobrança?',
      answer:
        'A mensalidade é cobrada no cartão de crédito cadastrado na assinatura. Não há fidelidade: você pode cancelar quando quiser.'
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
        'Não há limite de comandas nem de usuários. O valor da assinatura acompanha a quantidade de mesas cadastradas.'
    }
  ];

  /** Publica o FAQ como FAQPage (schema.org) para o Google; entra no HTML pré-renderizado. */
  ngOnInit(): void {
    if (this.document.getElementById(FaqComponent.SCHEMA_ID)) {
      return;
    }
    const script = this.document.createElement('script');
    script.id = FaqComponent.SCHEMA_ID;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: this.items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer }
      }))
    });
    this.document.head.appendChild(script);
  }

  ngOnDestroy(): void {
    this.document.getElementById(FaqComponent.SCHEMA_ID)?.remove();
  }

  toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
