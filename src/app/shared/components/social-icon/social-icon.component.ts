import { Component, Input } from '@angular/core';

export type SocialIconName = 'instagram' | 'facebook' | 'linkedin' | 'whatsapp';

@Component({
  selector: 'app-social-icon',
  standalone: true,
  templateUrl: './social-icon.component.html'
})
export class SocialIconComponent {
  @Input({ required: true }) name!: SocialIconName;
}
