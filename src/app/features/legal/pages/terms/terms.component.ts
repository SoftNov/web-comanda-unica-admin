import { Component } from '@angular/core';
import { LegalLayoutComponent } from '../../components/legal-layout/legal-layout.component';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [LegalLayoutComponent],
  templateUrl: './terms.component.html'
})
export class TermsComponent {}
