import { Component } from '@angular/core';
import { AuthShellComponent } from '../../components/auth-shell/auth-shell.component';
import { PasswordResetFlowComponent } from '../../components/password-reset-flow/password-reset-flow.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [AuthShellComponent, PasswordResetFlowComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {}
