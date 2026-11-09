import { Component, computed, effect, input, output, signal } from '@angular/core';
import { CamposFiscais } from '../../../../../shared/services/dados-fiscais.service';

type Campo = keyof CamposFiscais;

interface Sugestao {
  valor: string;
  rotulo: string;
}

// Valores comuns em restaurante, só como atalho — quem decide é o contador.
const SUGESTOES_CFOP: Sugestao[] = [
  { valor: '5102', rotulo: '5102 · venda de mercadoria' },
  { valor: '5101', rotulo: '5101 · produção própria' },
  { valor: '5405', rotulo: '5405 · com substituição tributária' }
];
const SUGESTOES_CSOSN: Sugestao[] = [
  { valor: '102', rotulo: '102 · Simples sem crédito' },
  { valor: '500', rotulo: '500 · ICMS já retido (ST)' },
  { valor: '400', rotulo: '400 · não tributada' }
];
const SUGESTOES_CST: Sugestao[] = [
  { valor: '00', rotulo: '00 · tributada integralmente' },
  { valor: '60', rotulo: '60 · ICMS já retido (ST)' },
  { valor: '40', rotulo: '40 · isenta' }
];
const SUGESTOES_UNIDADE: Sugestao[] = [
  { valor: 'UN', rotulo: 'UN' },
  { valor: 'KG', rotulo: 'KG' },
  { valor: 'L', rotulo: 'L' },
  { valor: 'DOSE', rotulo: 'DOSE' }
];

export const ORIGENS: { valor: string; rotulo: string }[] = [
  { valor: '0', rotulo: '0 · Nacional' },
  { valor: '1', rotulo: '1 · Estrangeira, importação direta' },
  { valor: '2', rotulo: '2 · Estrangeira, mercado interno' },
  { valor: '3', rotulo: '3 · Nacional, mais de 40% importado' },
  { valor: '4', rotulo: '4 · Nacional, processo produtivo básico' },
  { valor: '5', rotulo: '5 · Nacional, até 40% importado' },
  { valor: '6', rotulo: '6 · Estrangeira sem similar (importação direta)' },
  { valor: '7', rotulo: '7 · Estrangeira sem similar (mercado interno)' },
  { valor: '8', rotulo: '8 · Nacional, mais de 70% importado' }
];

const VAZIO: CamposFiscais = { ncm: null, cest: null, cfop: null, csosnCst: null, origem: null, unidade: null };

// Formulário dos campos fiscais de uma categoria ou de um produto. No produto, "herdado" mostra o
// valor que vem da categoria como placeholder — deixar em branco mantém a herança.
@Component({
  selector: 'app-fiscal-fields-form',
  standalone: true,
  templateUrl: './fiscal-fields-form.component.html',
  styleUrl: './fiscal-fields-form.component.scss'
})
export class FiscalFieldsFormComponent {
  readonly valor = input<CamposFiscais>(VAZIO);
  readonly herdado = input<CamposFiscais | null>(null);
  readonly usaCsosn = input(true);
  readonly salvando = input(false);
  readonly erro = input<string | null>(null);
  readonly rotuloSalvar = input('Salvar');

  readonly salvar = output<CamposFiscais>();
  readonly cancelar = output<void>();

  readonly origens = ORIGENS;
  readonly sugestoesCfop = SUGESTOES_CFOP;
  readonly sugestoesUnidade = SUGESTOES_UNIDADE;
  readonly sugestoesSituacao = computed(() => (this.usaCsosn() ? SUGESTOES_CSOSN : SUGESTOES_CST));
  readonly rotuloSituacao = computed(() => (this.usaCsosn() ? 'CSOSN' : 'CST do ICMS'));

  readonly campos = signal<CamposFiscais>(VAZIO);
  readonly invalidos = computed(() => validar(this.campos(), this.usaCsosn()));
  readonly temErro = computed(() => Object.keys(this.invalidos()).length > 0);

  constructor() {
    effect(() => this.campos.set({ ...VAZIO, ...this.valor() }), { allowSignalWrites: true });
  }

  placeholder(campo: Campo, padrao: string): string {
    const herdado = this.herdado()?.[campo];
    return herdado ? `Herda da categoria: ${herdado}` : padrao;
  }

  onInput(campo: Campo, event: Event): void {
    const value = (event.target as HTMLInputElement | HTMLSelectElement).value;
    this.set(campo, value);
  }

  set(campo: Campo, value: string): void {
    const normalizado = campo === 'unidade' ? value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6) : value;
    this.campos.update((atual) => ({ ...atual, [campo]: normalizado || null }));
  }

  enviar(): void {
    if (this.temErro()) {
      return;
    }
    this.salvar.emit(this.campos());
  }

  limpar(): void {
    this.campos.set(VAZIO);
  }
}

// Mesmas regras do backend (UpdateFiscalFieldsRequest), para o erro aparecer antes de salvar.
function validar(campos: CamposFiscais, usaCsosn: boolean): Partial<Record<Campo, string>> {
  const erros: Partial<Record<Campo, string>> = {};
  const digitos = (v: string | null) => (v ?? '').replace(/\D/g, '');
  if (campos.ncm && digitos(campos.ncm).length !== 8) erros.ncm = 'NCM tem 8 dígitos.';
  if (campos.cest && digitos(campos.cest).length !== 7) erros.cest = 'CEST tem 7 dígitos.';
  if (campos.cfop && !/^5\d{3}$/.test(digitos(campos.cfop))) erros.cfop = 'Na NFC-e o CFOP começa com 5 (ex.: 5102).';
  if (campos.csosnCst) {
    const tamanho = digitos(campos.csosnCst).length;
    if (usaCsosn && tamanho !== 3) erros.csosnCst = 'No Simples o CSOSN tem 3 dígitos (ex.: 102).';
    if (!usaCsosn && tamanho !== 2) erros.csosnCst = 'No regime normal o CST tem 2 dígitos (ex.: 00).';
  }
  return erros;
}
