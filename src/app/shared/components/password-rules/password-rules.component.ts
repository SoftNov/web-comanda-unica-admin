import { Component, Input, computed, signal } from '@angular/core';
import { checkPasswordRules } from '../../validators/password.validator';

@Component({
  selector: 'app-password-rules',
  standalone: true,
  templateUrl: './password-rules.component.html',
  styleUrl: './password-rules.component.scss'
})
export class PasswordRulesComponent {
  private readonly passwordValue = signal('');

  @Input() set password(value: string | null | undefined) {
    this.passwordValue.set(value ?? '');
  }

  readonly rules = computed(() => checkPasswordRules(this.passwordValue()));
}
