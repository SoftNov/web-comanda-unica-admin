import { HttpErrorResponse } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  DestroyRef,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  computed,
  inject,
  signal
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RippleDirective } from '../../../../shared/directives/ripple.directive';
import {
  CARD_BRAND_LABELS,
  CardBrandKey,
  CardBrandLogoComponent
} from '../../../../shared/components/card-brand-logo/card-brand-logo.component';
import { AccountProfileResponse, AccountsService } from '../../../../shared/services/accounts.service';
import { CepService } from '../../../../shared/services/cep.service';
import { SubscriptionService, SubscriptionStatusResponse } from '../../../../shared/services/subscription.service';
import {
  formatCEP,
  formatCNPJ,
  formatCPF,
  formatCellphone,
  isValidCNPJ,
  isValidCPF,
  onlyDigits
} from '../../../../shared/utils/br-format.util';
import { AuthService } from '../../../auth/services/auth.service';

// Resumo do que acontece ao salvar (ex.: o plano que vai ser assinado logo depois).
export interface BillingCardFormSummary {
  title: string;
  amount?: string;
  note?: string;
}

// Opção de preenchimento rápido do documento do titular (CNPJ da empresa / CPF do responsável).
interface DocOption {
  label: string;
  value: string;
}

// Bandeiras aceitas, na ordem exibida embaixo do número do cartão.
const ACCEPTED_BRANDS: CardBrandKey[] = ['visa', 'mastercard', 'elo', 'amex', 'hipercard', 'diners'];

// Bandeira pelo prefixo do número — só para exibir enquanto o usuário digita. Elo e Hipercard vêm
// antes porque alguns BINs deles começam com 4/5/3 e cairiam em Visa/Mastercard/Diners.
function detectBrand(number: string): CardBrandKey | null {
  if (/^(4011|4312|4389|4514|4576|5041|5066|5067|509|6277|6362|6363|650|6516|6550)/.test(number)) return 'elo';
  if (/^(606282|3841)/.test(number)) return 'hipercard';
  if (/^3[47]/.test(number)) return 'amex';
  if (/^3(0[0-5]|[68])/.test(number)) return 'diners';
  if (/^(5[1-5]|2[2-7])/.test(number)) return 'mastercard';
  if (/^4/.test(number)) return 'visa';
  return null;
}

// Luhn — evita mandar para a Asaas um número claramente digitado errado.
function luhnValid(number: string): boolean {
  let sum = 0;
  let double = false;
  for (let i = number.length - 1; i >= 0; i--) {
    let digit = Number(number[i]);
    if (double) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    double = !double;
  }
  return number.length >= 13 && sum % 10 === 0;
}

// CPF até 11 dígitos, CNPJ a partir do 12º — a máscara troca sozinha conforme a digitação.
function formatCpfCnpj(value: string | null | undefined): string {
  const digits = onlyDigits(value).slice(0, 14);
  return digits.length > 11 ? formatCNPJ(digits) : formatCPF(digits);
}

// Cadastro/troca do cartão de cobrança (assinatura + taxas semanais). Os dados do cartão e do
// titular vão uma única vez para a API, que tokeniza o cartão na Asaas e guarda só o token e
// bandeira/final/validade — número e CVV nunca são gravados pela Comanda Única.
@Component({
  selector: 'app-billing-card-form',
  standalone: true,
  imports: [ReactiveFormsModule, RippleDirective, CardBrandLogoComponent],
  template: `
    <form class="card-form" novalidate [formGroup]="form" (ngSubmit)="submit()" [attr.aria-busy]="isSaving()">
      <div class="card-form__head">
        <div>
          <p class="card-form__title">{{ heading }}</p>
          <p class="card-form__subtitle">Cartão de crédito usado na mensalidade e nas taxas da Comanda Única.</p>
        </div>
        <button type="button" class="card-form__close" aria-label="Fechar"
                [disabled]="isSaving()" (click)="cancel.emit()">
          <span class="material-icons" aria-hidden="true">close</span>
        </button>
      </div>

      @if (summary) {
        <div class="card-form__summary">
          <span class="material-icons" aria-hidden="true">receipt_long</span>
          <div class="card-form__summary-text">
            <span class="card-form__summary-title">{{ summary.title }}</span>
            @if (summary.note) {
              <span class="card-form__summary-note">{{ summary.note }}</span>
            }
          </div>
          @if (summary.amount) {
            <span class="card-form__summary-amount">{{ summary.amount }}<small>/mês</small></span>
          }
        </div>
      }

      <div class="card-form__layout">
        <!-- Prévia do cartão: acompanha a digitação e mostra a bandeira detectada. -->
        <div class="card-preview" [class.card-preview--known]="brand()" [attr.data-brand]="brand()" aria-hidden="true">
          <div class="card-preview__top">
            <span class="card-preview__chip"></span>
            <app-card-brand-logo [brand]="brand()" [width]="48" />
          </div>
          <span class="card-preview__number">{{ previewNumber() }}</span>
          <div class="card-preview__bottom">
            <div>
              <small>Titular</small>
              <span class="card-preview__name">{{ previewName() }}</span>
            </div>
            <div class="card-preview__exp">
              <small>Validade</small>
              <span>{{ previewExpiry() }}</span>
            </div>
          </div>
        </div>

        <div class="card-form__fields">
          <p class="card-form__section">Cartão</p>

          <div class="card-form__field">
            <label class="field__label" for="billing-card-number">Número do cartão</label>
            <div class="card-form__number">
              <input id="billing-card-number" class="field__input" type="text" inputmode="numeric" autocomplete="cc-number"
                     placeholder="0000 0000 0000 0000" maxlength="23" formControlName="number"
                     [class.field__input--invalid]="numberInvalid()" (input)="formatNumber()" />
              <span class="card-form__brand" aria-hidden="true">
                <app-card-brand-logo [brand]="brand()" [width]="36" />
              </span>
            </div>
            @if (numberInvalid()) {
              <span class="field__error">Confira o número do cartão.</span>
            } @else {
              <div class="card-form__brands" aria-label="Bandeiras aceitas">
                @for (b of acceptedBrands; track b) {
                  <span class="card-form__brand-item"
                        [class.card-form__brand-item--active]="brand() === b"
                        [class.card-form__brand-item--dim]="brand() && brand() !== b"
                        [attr.title]="brandLabels[b]">
                    <app-card-brand-logo [brand]="b" [width]="30" />
                  </span>
                }
                @if (brand(); as b) {
                  <span class="card-form__brand-name">{{ brandLabels[b] }}</span>
                }
              </div>
            }
          </div>

          <div class="card-form__field">
            <label class="field__label" for="billing-card-name">Nome impresso no cartão</label>
            <input id="billing-card-name" class="field__input" type="text" autocomplete="cc-name"
                   autocapitalize="characters" spellcheck="false" placeholder="Como aparece no cartão"
                   formControlName="holderName" [class.field__input--invalid]="invalid('holderName')"
                   (input)="syncPreview()" />
            @if (invalid('holderName')) {
              <span class="field__error">Informe o nome como está impresso no cartão.</span>
            }
          </div>

          <div class="card-form__row">
            <div class="card-form__field">
              <label class="field__label" for="billing-card-expiry">Validade</label>
              <input id="billing-card-expiry" class="field__input" type="text" inputmode="numeric" autocomplete="cc-exp"
                     placeholder="MM/AA" maxlength="5" formControlName="expiry"
                     [class.field__input--invalid]="expiryInvalid()" (input)="formatExpiry()" />
              @if (expiryInvalid()) {
                <span class="field__error">Validade inválida.</span>
              }
            </div>
            <div class="card-form__field">
              <label class="field__label" for="billing-card-ccv">CVV</label>
              <input id="billing-card-ccv" class="field__input" type="password" inputmode="numeric" autocomplete="cc-csc"
                     placeholder="123" maxlength="4" formControlName="ccv" [class.field__input--invalid]="invalid('ccv')"
                     (input)="formatCcv()" />
              @if (invalid('ccv')) {
                <span class="field__error">3 ou 4 dígitos.</span>
              }
            </div>
          </div>
        </div>
      </div>

      <div class="card-form__group">
        <div class="card-form__group-head">
          <p class="card-form__section">Titular e endereço de cobrança</p>
          @if (prefilled()) {
            <span class="card-form__prefilled">
              <span class="material-icons" aria-hidden="true">auto_awesome</span>
              Preenchido com os dados da conta — confira
            </span>
          }
        </div>

        <div class="card-form__row">
          <div class="card-form__field">
            <label class="field__label" for="billing-card-doc">CPF ou CNPJ do titular</label>
            <input id="billing-card-doc" class="field__input" type="text" inputmode="numeric"
                   placeholder="000.000.000-00" maxlength="18" formControlName="cpfCnpj"
                   [class.field__input--invalid]="docInvalid()" (input)="formatDoc()" />
            @if (docInvalid()) {
              <span class="field__error">CPF ou CNPJ inválido.</span>
            } @else if (docOptions().length > 1) {
              <div class="card-form__chips">
                @for (opt of docOptions(); track opt.value) {
                  <button type="button" class="card-form__chip"
                          [class.card-form__chip--active]="isDocSelected(opt)" (click)="useDoc(opt)">
                    {{ opt.label }}
                  </button>
                }
              </div>
            }
          </div>
          <div class="card-form__field">
            <label class="field__label" for="billing-card-phone">Telefone</label>
            <input id="billing-card-phone" class="field__input" type="tel" inputmode="tel" autocomplete="tel"
                   placeholder="(11) 99999-9999" maxlength="15" formControlName="phone"
                   [class.field__input--invalid]="phoneInvalid()" (input)="formatPhone()" />
            @if (phoneInvalid()) {
              <span class="field__error">DDD + número.</span>
            }
          </div>
        </div>

        <div class="card-form__field">
          <label class="field__label" for="billing-card-email">E-mail</label>
          <input id="billing-card-email" class="field__input" type="email" inputmode="email" autocomplete="email"
                 formControlName="email" [class.field__input--invalid]="invalid('email')" />
          @if (invalid('email')) {
            <span class="field__error">Informe um e-mail válido.</span>
          }
        </div>

        <div class="card-form__row card-form__row--address">
          <div class="card-form__field card-form__field--cep">
            <label class="field__label" for="billing-card-cep">CEP</label>
            <input id="billing-card-cep" class="field__input" type="text" inputmode="numeric" autocomplete="postal-code"
                   placeholder="00000-000" maxlength="9" formControlName="postalCode"
                   [class.field__input--invalid]="cepInvalid()" (input)="formatCep()" />
            @if (cepInvalid()) {
              <span class="field__error">CEP com 8 dígitos.</span>
            }
          </div>
          <div class="card-form__field">
            <label class="field__label" for="billing-card-addr-number">Número</label>
            <input id="billing-card-addr-number" class="field__input" type="text" autocomplete="address-line2"
                   formControlName="addressNumber" [class.field__input--invalid]="invalid('addressNumber')" />
            @if (invalid('addressNumber')) {
              <span class="field__error">Obrigatório.</span>
            }
          </div>
          <div class="card-form__field card-form__field--complement">
            <label class="field__label" for="billing-card-addr-complement">Complemento <small>(opcional)</small></label>
            <input id="billing-card-addr-complement" class="field__input" type="text" formControlName="addressComplement" />
          </div>
        </div>

        @if (isLookingUpCep()) {
          <p class="card-form__address card-form__address--muted">
            <span class="material-icons" aria-hidden="true">travel_explore</span>
            Buscando endereço…
          </p>
        } @else if (addressLine()) {
          <p class="card-form__address">
            <span class="material-icons" aria-hidden="true">place</span>
            {{ addressLine() }}
          </p>
        } @else if (cepNotFound()) {
          <p class="card-form__address card-form__address--muted">
            <span class="material-icons" aria-hidden="true">help_outline</span>
            Não encontramos esse CEP. Confira os dígitos — se estiver certo, pode seguir assim mesmo.
          </p>
        }
      </div>

      @if (submitError()) {
        <div class="form-alert form-alert--error card-form__alert" role="alert">
          <span class="material-icons" aria-hidden="true">error_outline</span>
          <span>{{ submitError() }}</span>
        </div>
      }

      <div class="card-form__actions">
        <button type="submit" class="btn btn--primary card-form__submit" appRipple [disabled]="isSaving()">
          @if (isSaving()) {
            <span class="card-form__spinner" aria-hidden="true"></span>
            Salvando cartão…
          } @else {
            <span class="material-icons" aria-hidden="true">lock</span>
            {{ submitLabel }}
          }
        </button>
        <button type="button" class="btn btn--ghost" [disabled]="isSaving()" (click)="cancel.emit()">Cancelar</button>
      </div>

      <p class="card-form__secure">
        <span class="material-icons" aria-hidden="true">verified_user</span>
        O cartão é tokenizado pela Asaas, nossa plataforma de pagamentos. A Comanda Única não guarda o
        número nem o CVV — só a bandeira, o final e a validade, para identificar o cartão.
      </p>
    </form>
  `,
  styles: `
    :host {
      display: block;
      scroll-margin: 24px;
    }
    .card-form {
      display: flex;
      flex-direction: column;
      gap: 18px;
      padding: 20px;
      border: 1px solid var(--color-border-strong);
      border-radius: var(--radius-md, 12px);
      background: var(--color-bg-elevated);
      box-shadow: var(--shadow-md);
      animation: card-form-in var(--transition-base) both;
    }
    @keyframes card-form-in {
      from { opacity: 0; transform: translateY(-6px); }
    }
    .card-form__head {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
    }
    .card-form__title {
      font-weight: 600;
      font-size: 1rem;
      color: var(--color-text);
    }
    .card-form__subtitle {
      margin-top: 2px;
      font-size: 0.8125rem;
      color: var(--color-text-muted);
    }
    .card-form__section {
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--color-text-muted);
    }
    .card-form__close {
      display: inline-flex;
      padding: 6px;
      border: none;
      border-radius: var(--radius-sm);
      background: none;
      color: var(--color-text-muted);
      cursor: pointer;
      transition: color var(--transition-fast), background var(--transition-fast);
      &:hover:not(:disabled) { color: var(--color-text); background: rgba(255, 255, 255, 0.06); }
      &:disabled { opacity: 0.4; cursor: default; }
    }
    .card-form__summary {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 14px;
      border: 1px solid rgba(59, 130, 246, 0.35);
      border-radius: var(--radius-sm);
      background: var(--color-accent-bg);
      > .material-icons { color: var(--color-accent-hover); flex-shrink: 0; }
    }
    .card-form__summary-text {
      display: flex;
      flex-direction: column;
      gap: 2px;
      flex: 1;
      min-width: 0;
    }
    .card-form__summary-title {
      font-weight: 600;
      font-size: 0.9375rem;
      color: var(--color-text);
    }
    .card-form__summary-note {
      font-size: 0.8125rem;
      color: var(--color-text-muted);
    }
    .card-form__summary-amount {
      font-weight: 700;
      font-size: 1.125rem;
      color: var(--color-text);
      white-space: nowrap;
      small { font-size: 0.8125rem; font-weight: 500; color: var(--color-text-muted); }
    }

    // --- prévia do cartão + campos do cartão ---------------------------
    .card-form__layout {
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 20px;
      align-items: start;
    }
    .card-form__fields,
    .card-form__group {
      display: flex;
      flex-direction: column;
      gap: 14px;
      min-width: 0;
    }
    .card-preview {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 14px;
      aspect-ratio: 1.586;
      padding: 18px;
      border-radius: 14px;
      overflow: hidden;
      color: #fff;
      background: linear-gradient(135deg, #334155 0%, #1e293b 60%, #0f172a 100%);
      box-shadow: 0 14px 30px rgba(0, 0, 0, 0.35), inset 0 0 0 1px rgba(255, 255, 255, 0.08);
      transition: background var(--transition-slow);
      &::after {
        content: '';
        position: absolute;
        inset: -40% -20% auto auto;
        width: 70%;
        aspect-ratio: 1;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.06);
        pointer-events: none;
      }
    }
    .card-preview[data-brand='visa'] { background: linear-gradient(135deg, #1a3a8f 0%, #1a1f71 70%); }
    .card-preview[data-brand='mastercard'] { background: linear-gradient(135deg, #3b3b3b 0%, #141414 70%); }
    .card-preview[data-brand='elo'] { background: linear-gradient(135deg, #2b2b2b 0%, #000 70%); }
    .card-preview[data-brand='amex'] { background: linear-gradient(135deg, #3c8bd6 0%, #1f5f9e 70%); }
    .card-preview[data-brand='hipercard'] { background: linear-gradient(135deg, #d42a33 0%, #8e0f16 70%); }
    .card-preview[data-brand='diners'] { background: linear-gradient(135deg, #2a8fd0 0%, #005a8e 70%); }
    .card-preview__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .card-preview__chip {
      width: 36px;
      height: 26px;
      border-radius: 6px;
      background: linear-gradient(135deg, #f5d97b, #c9a43e);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
    }
    .card-preview__number {
      font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;
      font-size: 1.125rem;
      letter-spacing: 0.08em;
      white-space: nowrap;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
    }
    .card-preview__bottom {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 12px;
      min-width: 0;
      small {
        display: block;
        font-size: 0.625rem;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        opacity: 0.7;
      }
      span { font-size: 0.8125rem; font-weight: 600; letter-spacing: 0.04em; }
      > div:first-child { min-width: 0; }
    }
    .card-preview__name {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-transform: uppercase;
    }
    .card-preview__exp { text-align: right; flex-shrink: 0; }

    .card-form__field {
      display: flex;
      flex-direction: column;
      gap: 8px;
      min-width: 0;
      small { font-weight: 400; color: var(--color-text-muted); }
    }
    .card-form__row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    .card-form__row--address {
      grid-template-columns: 1fr 0.7fr 1.3fr;
    }
    .card-form__number {
      position: relative;
      .field__input { width: 100%; padding-right: 60px; letter-spacing: 0.04em; }
    }
    .card-form__brand {
      position: absolute;
      top: 50%;
      right: 12px;
      transform: translateY(-50%);
      display: inline-flex;
    }
    .card-form__brands {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 6px;
    }
    .card-form__brand-item {
      display: inline-flex;
      transition: opacity var(--transition-fast), transform var(--transition-fast), filter var(--transition-fast);
    }
    .card-form__brand-item--dim {
      opacity: 0.3;
      filter: grayscale(1);
    }
    .card-form__brand-item--active {
      transform: translateY(-2px) scale(1.08);
    }
    .card-form__brand-name {
      margin-left: 4px;
      font-size: 0.8125rem;
      font-weight: 600;
      color: var(--color-text);
    }

    // --- titular / endereço --------------------------------------------
    .card-form__group {
      padding-top: 16px;
      border-top: 1px solid var(--color-border);
    }
    .card-form__group-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 8px;
    }
    .card-form__prefilled {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 3px 10px;
      border-radius: var(--radius-full);
      font-size: 0.75rem;
      font-weight: 500;
      background: var(--color-accent-bg);
      color: var(--color-accent-hover);
      .material-icons { font-size: 14px; }
    }
    .card-form__chips {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .card-form__chip {
      padding: 4px 10px;
      border: 1px solid var(--color-border-strong);
      border-radius: var(--radius-full);
      background: none;
      font: inherit;
      font-size: 0.75rem;
      color: var(--color-text-muted);
      cursor: pointer;
      transition: color var(--transition-fast), border-color var(--transition-fast), background var(--transition-fast);
      &:hover { color: var(--color-text); border-color: var(--color-accent); }
    }
    .card-form__chip--active {
      border-color: var(--color-accent);
      background: var(--color-accent-bg);
      color: var(--color-accent-hover);
    }
    .card-form__address {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      margin-top: -4px;
      padding: 10px 12px;
      border-radius: var(--radius-sm);
      background: rgba(255, 255, 255, 0.03);
      font-size: 0.8125rem;
      line-height: 1.45;
      color: var(--color-text);
      .material-icons { font-size: 18px; color: var(--color-accent-hover); flex-shrink: 0; }
    }
    .card-form__address--muted {
      color: var(--color-text-muted);
      .material-icons { color: var(--color-text-muted); }
    }

    .card-form__alert {
      margin: 0;
      align-items: center;
    }
    .card-form__actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 4px;
    }
    .card-form__submit {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      .material-icons { font-size: 18px; }
    }
    .card-form__spinner {
      width: 16px;
      height: 16px;
      border: 2px solid rgba(255, 255, 255, 0.35);
      border-top-color: #fff;
      border-radius: 50%;
      animation: card-form-spin 0.8s linear infinite;
    }
    @keyframes card-form-spin {
      to { transform: rotate(360deg); }
    }
    .card-form__secure {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      font-size: 0.8125rem;
      line-height: 1.5;
      color: var(--color-text-muted);
      .material-icons { font-size: 16px; margin-top: 1px; color: var(--color-success); flex-shrink: 0; }
    }

    @media (max-width: 760px) {
      .card-form__layout { grid-template-columns: 1fr; }
      .card-preview { width: 100%; max-width: 320px; margin: 0 auto; }
    }
    @media (max-width: 560px) {
      .card-form { padding: 16px; gap: 16px; }
      .card-form__summary { flex-wrap: wrap; }
      .card-form__summary-amount { margin-left: 36px; }
      .card-form__row--address { grid-template-columns: 1fr 1fr; }
      .card-form__field--complement { grid-column: 1 / -1; }
      .card-form__actions { flex-direction: column-reverse; }
      .card-form__actions .btn { width: 100%; }
      // 16px evita o zoom automático do iOS ao focar o input.
      .field__input { font-size: 16px; }
    }
    @media (max-width: 400px) {
      .card-form__row:not(.card-form__row--address) { grid-template-columns: 1fr; }
      .card-preview__number { font-size: 1rem; }
    }
    @media (prefers-reduced-motion: reduce) {
      .card-form { animation: none; }
    }
  `
})
export class BillingCardFormComponent implements AfterViewInit {
  private readonly subscriptionService = inject(SubscriptionService);
  private readonly accountsService = inject(AccountsService);
  private readonly cepService = inject(CepService);
  private readonly authService = inject(AuthService);
  private readonly fb = inject(FormBuilder);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  @Input() submitLabel = 'Salvar cartão';
  @Input() heading = 'Cartão de cobrança';
  @Input() summary: BillingCardFormSummary | null = null;
  @Output() readonly saved = new EventEmitter<SubscriptionStatusResponse>();
  @Output() readonly cancel = new EventEmitter<void>();

  readonly acceptedBrands = ACCEPTED_BRANDS;
  readonly brandLabels = CARD_BRAND_LABELS;

  readonly isSaving = signal(false);
  readonly submitError = signal<string | null>(null);
  private readonly submitted = signal(false);
  private readonly numberDigits = signal('');
  private readonly holderNameValue = signal('');
  private readonly expiryValue = signal('');

  // Dados vindos do cadastro da conta (Configurações → Perfil).
  readonly prefilled = signal(false);
  readonly docOptions = signal<DocOption[]>([]);
  private readonly docValue = signal('');

  // Endereço exibido abaixo do CEP: o salvo na conta (enquanto o CEP for o mesmo) ou o da consulta.
  private readonly street = signal<{ cep: string; text: string } | null>(null);
  private readonly cepValue = signal('');
  private readonly numberValue = signal('');
  readonly isLookingUpCep = signal(false);
  readonly cepNotFound = signal(false);
  private lastLookedUpCep = '';

  readonly brand = computed(() => detectBrand(this.numberDigits()));

  readonly previewNumber = computed(() => {
    const digits = this.numberDigits().padEnd(16, '•');
    return digits.replace(/(.{4})(?=.)/g, '$1 ');
  });
  readonly previewName = computed(() => this.holderNameValue().trim() || 'Nome no cartão');
  readonly previewExpiry = computed(() => this.expiryValue() || 'MM/AA');

  readonly addressLine = computed(() => {
    const street = this.street();
    if (!street || street.cep !== onlyDigits(this.cepValue())) {
      return null;
    }
    const number = this.numberValue().trim();
    return street.text.replace('{n}', number ? `, ${number}` : '');
  });

  readonly form = this.fb.nonNullable.group({
    holderName: ['', [Validators.required, Validators.maxLength(100)]],
    number: ['', Validators.required],
    expiry: ['', Validators.required],
    ccv: ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]],
    cpfCnpj: ['', Validators.required],
    phone: ['', Validators.required],
    email: [this.authService.currentUser()?.email ?? '', [Validators.required, Validators.email]],
    postalCode: ['', Validators.required],
    addressNumber: ['', [Validators.required, Validators.maxLength(20)]],
    addressComplement: ['', Validators.maxLength(100)]
  });

  constructor() {
    this.form.controls.addressNumber.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe((value) => this.numberValue.set(value));
    this.prefillFromAccount();
  }

  ngAfterViewInit(): void {
    // O formulário abre embaixo do seletor de plano — traz ele pra vista e já põe o foco no número.
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    this.host.nativeElement.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'nearest' });
    // No celular o foco abre o teclado e cobre o formulário — só foca direto em telas maiores.
    if (window.matchMedia?.('(min-width: 768px)').matches) {
      this.host.nativeElement.querySelector<HTMLInputElement>('#billing-card-number')?.focus({ preventScroll: true });
    }
  }

  @HostListener('keydown.escape')
  onEscape(): void {
    if (!this.isSaving()) {
      this.cancel.emit();
    }
  }

  // Preenche titular/endereço com o cadastro da empresa e do responsável. Só ocupa campos ainda
  // vazios — nunca sobrescreve o que o usuário já começou a digitar.
  private prefillFromAccount(): void {
    this.accountsService.getProfile()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (profile) => this.applyProfile(profile),
        error: () => undefined
      });
  }

  private applyProfile(profile: AccountProfileResponse): void {
    const company = profile.company;
    const owner = profile.owner;
    const controls = this.form.controls;
    let filled = false;

    const fillIfEmpty = (control: (typeof controls)[keyof typeof controls], value: string | null | undefined): void => {
      if (value && !control.value && !control.dirty) {
        control.setValue(value);
        filled = true;
      }
    };

    // Documento: CNPJ da empresa primeiro (cartão empresarial é o mais comum), CPF do responsável
    // como alternativa. A Asaas só aceita números — CNPJ alfanumérico fica de fora.
    const options: DocOption[] = [];
    const cnpj = onlyDigits(company?.cnpj);
    if (cnpj.length === 14 && cnpj === (company?.cnpj ?? '').replace(/[.\-/\s]/g, '')) {
      options.push({ label: 'CNPJ da empresa', value: formatCNPJ(cnpj) });
    }
    const cpf = onlyDigits(owner?.cpf);
    if (cpf.length === 11) {
      const firstName = owner.fullName?.trim().split(/\s+/)[0];
      options.push({ label: firstName ? `CPF de ${firstName}` : 'CPF do responsável', value: formatCPF(cpf) });
    }
    this.docOptions.set(options);
    fillIfEmpty(controls.cpfCnpj, options[0]?.value);
    this.docValue.set(controls.cpfCnpj.value);

    const phone = onlyDigits(company?.phone) || onlyDigits(owner?.phone);
    fillIfEmpty(controls.phone, phone ? formatCellphone(phone) : null);

    const address = company?.address;
    if (address) {
      fillIfEmpty(controls.postalCode, address.zipCode ? formatCEP(address.zipCode) : null);
      fillIfEmpty(controls.addressNumber, address.number);
      fillIfEmpty(controls.addressComplement, address.complement);
      this.cepValue.set(controls.postalCode.value);
      this.numberValue.set(controls.addressNumber.value);
      const cep = onlyDigits(address.zipCode);
      if (cep.length === 8 && address.street) {
        this.lastLookedUpCep = cep;
        this.street.set({ cep, text: this.streetText(address.street, address.neighborhood, address.city, address.state) });
      }
    }

    this.prefilled.set(filled);
  }

  // "{n}" marca onde entra o número digitado — o texto acompanha o campo "Número".
  private streetText(street: string, neighborhood?: string, city?: string, state?: string): string {
    const place = [neighborhood, [city, state].filter(Boolean).join('/')].filter(Boolean).join(' — ');
    return place ? `${street}{n} · ${place}` : `${street}{n}`;
  }

  invalid(field: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[field];
    return control.invalid && (control.touched || this.submitted());
  }

  private shown(field: keyof typeof this.form.controls): boolean {
    return this.form.controls[field].touched || this.submitted();
  }

  numberInvalid(): boolean {
    return this.shown('number') && !luhnValid(onlyDigits(this.form.controls.number.value));
  }

  expiryInvalid(): boolean {
    return this.shown('expiry') && this.parseExpiry() === null;
  }

  private docValid(): boolean {
    const digits = onlyDigits(this.form.controls.cpfCnpj.value);
    return digits.length === 11 ? isValidCPF(digits) : digits.length === 14 && isValidCNPJ(digits);
  }

  docInvalid(): boolean {
    return this.shown('cpfCnpj') && !this.docValid();
  }

  phoneInvalid(): boolean {
    const digits = onlyDigits(this.form.controls.phone.value);
    return this.shown('phone') && (digits.length < 10 || digits.length > 11);
  }

  cepInvalid(): boolean {
    return this.shown('postalCode') && onlyDigits(this.form.controls.postalCode.value).length !== 8;
  }

  isDocSelected(option: DocOption): boolean {
    return onlyDigits(this.docValue()) === onlyDigits(option.value);
  }

  useDoc(option: DocOption): void {
    this.form.controls.cpfCnpj.setValue(option.value);
    this.form.controls.cpfCnpj.markAsTouched();
    this.docValue.set(option.value);
  }

  syncPreview(): void {
    this.holderNameValue.set(this.form.controls.holderName.value);
  }

  formatNumber(): void {
    const digits = onlyDigits(this.form.controls.number.value).slice(0, 19);
    this.numberDigits.set(digits);
    this.form.controls.number.setValue(digits.replace(/(\d{4})(?=\d)/g, '$1 '), { emitEvent: false });
  }

  formatExpiry(): void {
    const digits = onlyDigits(this.form.controls.expiry.value).slice(0, 4);
    const formatted = digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
    this.form.controls.expiry.setValue(formatted, { emitEvent: false });
    this.expiryValue.set(formatted);
  }

  formatCcv(): void {
    this.form.controls.ccv.setValue(onlyDigits(this.form.controls.ccv.value).slice(0, 4));
  }

  formatDoc(): void {
    const formatted = formatCpfCnpj(this.form.controls.cpfCnpj.value);
    this.form.controls.cpfCnpj.setValue(formatted, { emitEvent: false });
    this.docValue.set(formatted);
  }

  formatPhone(): void {
    this.form.controls.phone.setValue(formatCellphone(this.form.controls.phone.value), { emitEvent: false });
  }

  formatCep(): void {
    const formatted = formatCEP(this.form.controls.postalCode.value);
    this.form.controls.postalCode.setValue(formatted, { emitEvent: false });
    this.cepValue.set(formatted);
    this.cepNotFound.set(false);
    const digits = onlyDigits(formatted);
    if (digits.length === 8 && digits !== this.lastLookedUpCep) {
      this.lookupCep(digits);
    }
  }

  // Consulta o CEP só para mostrar a rua/bairro/cidade e o usuário conferir — a Asaas recebe
  // apenas CEP + número + complemento.
  private lookupCep(cep: string): void {
    this.lastLookedUpCep = cep;
    this.isLookingUpCep.set(true);
    this.cepService.lookup(cep)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (result) => {
          if (onlyDigits(this.cepValue()) !== cep) {
            return;
          }
          this.isLookingUpCep.set(false);
          if (!result) {
            this.cepNotFound.set(true);
            return;
          }
          this.street.set({ cep, text: this.streetText(result.street || 'Endereço', result.neighborhood, result.city, result.state) });
        },
        error: () => {
          this.isLookingUpCep.set(false);
          this.lastLookedUpCep = '';
        }
      });
  }

  // { month: '07', year: '2029' } ou null se inválida/vencida.
  private parseExpiry(): { month: string; year: string } | null {
    const digits = onlyDigits(this.form.controls.expiry.value);
    if (digits.length !== 4) {
      return null;
    }
    const month = Number(digits.slice(0, 2));
    const year = 2000 + Number(digits.slice(2));
    if (month < 1 || month > 12) {
      return null;
    }
    const now = new Date();
    if (year < now.getFullYear() || (year === now.getFullYear() && month < now.getMonth() + 1)) {
      return null;
    }
    return { month: String(month).padStart(2, '0'), year: String(year) };
  }

  submit(): void {
    this.submitted.set(true);
    this.submitError.set(null);
    const expiry = this.parseExpiry();
    if (this.form.invalid || !expiry || this.numberInvalid() || this.docInvalid() || this.phoneInvalid() || this.cepInvalid()) {
      this.focusFirstInvalid();
      return;
    }

    const value = this.form.getRawValue();
    this.isSaving.set(true);
    this.subscriptionService.savePaymentMethod({
      holderName: value.holderName.trim(),
      number: onlyDigits(value.number),
      expiryMonth: expiry.month,
      expiryYear: expiry.year,
      ccv: value.ccv,
      cpfCnpj: onlyDigits(value.cpfCnpj),
      email: value.email.trim(),
      postalCode: onlyDigits(value.postalCode),
      addressNumber: value.addressNumber.trim(),
      addressComplement: value.addressComplement.trim() || null,
      phone: onlyDigits(value.phone)
    }).subscribe({
      next: (status) => {
        this.isSaving.set(false);
        // Não deixa os dados do cartão no formulário depois de salvo.
        this.form.controls.number.reset('');
        this.form.controls.ccv.reset('');
        this.numberDigits.set('');
        this.saved.emit(status);
      },
      error: (error: unknown) => {
        this.isSaving.set(false);
        const body = error instanceof HttpErrorResponse ? (error.error as { mensagem?: string } | undefined) : undefined;
        this.submitError.set(body?.mensagem
          ?? 'Não foi possível salvar o cartão agora. Confira os dados e tente novamente em instantes.');
      }
    });
  }

  // Leva o usuário até o primeiro campo com erro — no celular ele pode estar fora da tela.
  private focusFirstInvalid(): void {
    setTimeout(() => {
      const target = this.host.nativeElement.querySelector<HTMLInputElement>('.field__input--invalid');
      target?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      target?.focus({ preventScroll: true });
    });
  }
}
