import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, ViewChild, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { QrScannerComponent } from '../../../../shared/components/qr-scanner/qr-scanner.component';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import {
  ConsumptionPassesService,
  ConsumptionPassExitResponse
} from '../../../../shared/services/consumption-passes.service';
import { ApiErrorResponse } from '../../../../shared/services/reservations.service';
import { brDateTimeFormat, parseApiDate } from '../../../../shared/utils/datetime.util';

type ExitState = 'PAID' | 'PENDING' | 'RELEASED' | 'NOT_IN_USE' | 'BLOCKED';

// Tela da recepção: lê o QR Code do Passe de Consumo na saída (câmera, leitor USB — que "digita"
// o código no campo e aperta Enter — ou digitação manual), mostra consumo/pago/saldo e só libera
// a saída com o saldo zerado. Toda leitura fica registrada no histórico do passe (backend).
@Component({
  selector: 'app-admin-controle-saida',
  standalone: true,
  imports: [FormsModule, RippleDirective, QrScannerComponent],
  templateUrl: './controle-saida.component.html',
  styleUrl: './controle-saida.component.scss'
})
export class ControleSaidaComponent implements AfterViewInit {
  private readonly passesService = inject(ConsumptionPassesService);
  private readonly router = inject(Router);

  private readonly currencyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  private readonly dateTimeFormatter = brDateTimeFormat({ day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });

  @ViewChild('tokenInput') private tokenInput?: ElementRef<HTMLInputElement>;

  // Cartão de consumo é opcional por estabelecimento — desligado, a tela só avisa (a leitura
  // continua disponível para liberar algum cartão que tenha ficado em uso).
  readonly passEnabled = this.passesService.enabled;

  readonly token = signal('');
  readonly scanning = signal(false);
  readonly isChecking = signal(false);
  readonly isReleasing = signal(false);
  readonly error = signal<string | null>(null);
  readonly result = signal<ConsumptionPassExitResponse | null>(null);
  // Token efetivamente consultado (o do resultado exibido) — o campo pode ter sido limpo/alterado.
  private checkedToken: string | null = null;

  readonly state = computed<ExitState | null>(() => {
    const result = this.result();
    if (!result) {
      return null;
    }
    if (result.released) {
      return 'RELEASED';
    }
    if (result.passStatus === 'BLOCKED' || result.passStatus === 'EXPIRED') {
      return 'BLOCKED';
    }
    if (result.passStatus !== 'IN_USE' || !result.comandaId) {
      return 'NOT_IN_USE';
    }
    return result.allowed ? 'PAID' : 'PENDING';
  });

  ngAfterViewInit(): void {
    this.passesService.refreshEnabled();
    this.focusInput();
  }

  onTokenInput(value: string): void {
    this.token.set(value.toUpperCase());
  }

  check(rawToken: string = this.token()): void {
    const token = rawToken.trim();
    if (!token || this.isChecking()) {
      return;
    }
    this.isChecking.set(true);
    this.error.set(null);
    this.result.set(null);

    this.passesService.validateExit(token).subscribe({
      next: (result) => {
        this.isChecking.set(false);
        this.checkedToken = result.token;
        this.result.set(result);
        this.token.set('');
      },
      error: (error: HttpErrorResponse) => {
        this.isChecking.set(false);
        this.error.set(this.resolveErrorMessage(error, 'Não foi possível consultar o passe.'));
        this.focusInput();
      }
    });
  }

  onScanned(value: string): void {
    this.scanning.set(false);
    this.token.set(value.toUpperCase());
    this.check(value);
  }

  toggleCamera(): void {
    this.scanning.update((value) => !value);
  }

  // Revalida o mesmo passe (ex.: depois de registrar o pagamento na tela da comanda).
  refresh(): void {
    if (this.checkedToken) {
      this.check(this.checkedToken);
    }
  }

  release(): void {
    if (!this.checkedToken || this.isReleasing()) {
      return;
    }
    this.isReleasing.set(true);
    this.error.set(null);

    this.passesService.release(this.checkedToken).subscribe({
      next: (result) => {
        this.isReleasing.set(false);
        this.result.set(result);
      },
      error: (error: HttpErrorResponse) => {
        this.isReleasing.set(false);
        this.error.set(this.resolveErrorMessage(error, 'Não foi possível liberar a saída.'));
        // O saldo pode ter mudado entre a consulta e a liberação — mostra a situação atual.
        this.refresh();
      }
    });
  }

  // Abre a comanda do passe na tela de Comandas (detalhe com "Registrar pagamento").
  goToPayment(): void {
    const comandaId = this.result()?.comandaId;
    if (comandaId) {
      void this.router.navigate(['/painel/comandas'], { queryParams: { comanda: comandaId } });
    }
  }

  newReading(): void {
    this.result.set(null);
    this.error.set(null);
    this.checkedToken = null;
    this.token.set('');
    this.focusInput();
  }

  formatCurrency(value: number | null | undefined): string {
    return this.currencyFormatter.format(value ?? 0);
  }

  formatDateTime(value: string | null | undefined): string {
    const date = parseApiDate(value);
    return date ? this.dateTimeFormatter.format(date) : '—';
  }

  tableLabel(result: ConsumptionPassExitResponse): string {
    if (result.tableNumber == null) {
      return '—';
    }
    return `Mesa ${result.tableNumber}${result.tableName ? ' — ' + result.tableName : ''}`;
  }

  shortId(id: string | undefined): string {
    return id ? '#' + id.slice(0, 8).toUpperCase() : '—';
  }

  private focusInput(): void {
    setTimeout(() => this.tokenInput?.nativeElement.focus());
  }

  private resolveErrorMessage(error: HttpErrorResponse, fallback: string): string {
    const body = error.error as ApiErrorResponse | undefined;
    return body?.mensagem || body?.titulo || fallback;
  }
}
