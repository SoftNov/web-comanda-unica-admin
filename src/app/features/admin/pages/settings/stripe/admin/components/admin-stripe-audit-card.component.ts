import { Component, Input } from '@angular/core';
import { PlatformStripeConfig } from '../../../../../../../shared/services/platform-stripe-config.service';
import { brDateTimeFormat, parseApiDate } from '../../../../../../../shared/utils/datetime.util';

// Modelo simplificado: só a última alteração (quem/quando), não um histórico completo — não há
// tabela de auditoria dedicada, o próprio registro de configuração guarda só o último editor
// (ver PlatformStripeConfig entity/updatedByUserEmail).
@Component({
  selector: 'app-admin-stripe-audit-card',
  standalone: true,
  templateUrl: './admin-stripe-audit-card.component.html',
  styleUrl: './admin-stripe-audit-card.component.scss'
})
export class AdminStripeAuditCardComponent {
  @Input({ required: true }) config!: PlatformStripeConfig;

  private readonly dateTimeFormatter = brDateTimeFormat({ dateStyle: 'short', timeStyle: 'short' });

  formatDateTime(value: string | null): string {
    const parsed = parseApiDate(value);
    return parsed ? this.dateTimeFormatter.format(parsed) : '—';
  }
}
