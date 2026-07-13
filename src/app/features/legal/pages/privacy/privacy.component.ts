import { Component } from '@angular/core';
import { LegalLayoutComponent } from '../../components/legal-layout/legal-layout.component';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [LegalLayoutComponent],
  templateUrl: './privacy.component.html'
})
export class PrivacyComponent {}
