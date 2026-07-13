import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialIconComponent, SocialIconName } from '../social-icon/social-icon.component';

interface FooterLink {
  label: string;
  /** Fragment on the home page (e.g. 'recursos'). Mutually exclusive with `route`. */
  fragment?: string;
  /** Standalone route (e.g. '/termos-de-uso'). Mutually exclusive with `fragment`. */
  route?: string;
}

interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialIconComponent, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly year = new Date().getFullYear();

  readonly groups: FooterLinkGroup[] = [
    {
      title: 'Produto',
      links: [
        { label: 'Recursos', fragment: 'recursos' },
        { label: 'Como Funciona', fragment: 'como-funciona' },
        { label: 'Preços', fragment: 'precos' }
      ]
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Contato', fragment: 'contato' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Política de Privacidade', route: '/politica-de-privacidade' },
        { label: 'Termos de Uso', route: '/termos-de-uso' }
      ]
    }
  ];

  readonly socials: { label: string; icon: SocialIconName; href: string }[] = [
    { label: 'Instagram', icon: 'instagram', href: '#' },
    { label: 'Facebook', icon: 'facebook', href: '#' },
    { label: 'LinkedIn', icon: 'linkedin', href: '#' },
    { label: 'WhatsApp', icon: 'whatsapp', href: '#' }
  ];
}
