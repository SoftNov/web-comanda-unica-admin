import { Component, inject } from '@angular/core';
import { PasswordResetFlowComponent } from '../../../../auth/components/password-reset-flow/password-reset-flow.component';
import { AuthService } from '../../../../auth/services/auth.service';

@Component({
  selector: 'app-admin-security',
  standalone: true,
  imports: [PasswordResetFlowComponent],
  templateUrl: './security.component.html',
  styleUrl: './security.component.scss'
})
export class SecurityComponent {
  private readonly authService = inject(AuthService);

  readonly email = this.authService.currentUser()?.email ?? '';
}
