import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-legal-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './legal-layout.component.html',
  styleUrl: './legal-layout.component.scss'
})
export class LegalLayoutComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) updatedAt!: string;
}
