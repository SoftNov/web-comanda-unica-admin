import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CepService } from '../../../../../shared/services/cep.service';
import {
  CamposFiscais,
  CategoriaDadosFiscais,
  DadosFiscaisResponse,
  DadosFiscaisService,
  ProdutoDadosFiscais,
  RegimeTributario
} from '../../../../../shared/services/dados-fiscais.service';
import { RippleDirective } from '../../../../../shared/directives/ripple.directive';
import { formatCEP, formatCNPJ, onlyDigits } from '../../../../../shared/utils/br-format.util';
import { FiscalFieldsFormComponent } from './fiscal-fields-form.component';

type Aba = 'emitente' | 'categorias' | 'produtos';
type FiltroProduto = 'todos' | 'incompletos' | 'excecoes';

const REGIMES: { valor: RegimeTributario; rotulo: string; dica: string }[] = [
  { valor: 'SIMPLES_NACIONAL', rotulo: 'Simples Nacional', dica: 'CRT 1 · usa CSOSN' },
  { valor: 'MEI', rotulo: 'MEI', dica: 'CRT 4 · usa CSOSN' },
  { valor: 'SIMPLES_EXCESSO', rotulo: 'Simples (excesso de sublimite)', dica: 'CRT 2 · usa CSOSN' },
  { valor: 'NORMAL', rotulo: 'Lucro Presumido ou Real', dica: 'CRT 3 · usa CST' }
];

interface ErrorBody {
  mensagem?: string;
  mensagemErro?: string;
}

// Tudo o que a NFC-e precisa e o cadastro não tinha: dados do emitente e a tributação dos
// produtos — por categoria (padrão) com exceções por produto. Alimenta "Vendas para Nota Fiscal".
@Component({
  selector: 'app-dados-fiscais',
  standalone: true,
  imports: [RippleDirective, RouterLink, FiscalFieldsFormComponent],
  templateUrl: './dados-fiscais.component.html',
  styleUrl: './dados-fiscais.component.scss'
})
export class DadosFiscaisComponent {
  private readonly service = inject(DadosFiscaisService);
  private readonly cepService = inject(CepService);

  readonly regimes = REGIMES;

  readonly dados = signal<DadosFiscaisResponse | null>(null);
  readonly carregando = signal(true);
  readonly erroCarga = signal<string | null>(null);
  readonly aba = signal<Aba>('emitente');

  // Emitente
  readonly ie = signal('');
  readonly ieIsento = signal(false);
  readonly regime = signal<RegimeTributario | null>(null);
  readonly ibge = signal('');
  readonly salvandoEmitente = signal(false);
  readonly erroEmitente = signal<string | null>(null);
  readonly okEmitente = signal(false);
  readonly buscandoIbge = signal(false);
  readonly avisoIbge = signal<string | null>(null);

  // Categorias / produtos
  readonly editandoId = signal<string | null>(null);
  readonly salvandoId = signal<string | null>(null);
  readonly erroEdicao = signal<string | null>(null);
  readonly salvoId = signal<string | null>(null);
  readonly busca = signal('');
  readonly filtro = signal<FiltroProduto>('incompletos');

  readonly usaCsosn = computed(() => (this.dados()?.emitente.regimeTributario ?? 'SIMPLES_NACIONAL') !== 'NORMAL');
  readonly progresso = computed(() => {
    const c = this.dados()?.completude;
    if (!c || c.produtosAtivos === 0) return 0;
    return Math.round((c.produtosAtivosCompletos / c.produtosAtivos) * 100);
  });
  readonly categoriasPorId = computed(() => new Map((this.dados()?.categorias ?? []).map((c) => [c.id, c])));
  readonly produtosFiltrados = computed(() => {
    const termo = this.busca().trim().toLowerCase();
    return (this.dados()?.produtos ?? []).filter((p) => {
      if (this.filtro() === 'incompletos' && (p.completo || !p.ativo)) return false;
      if (this.filtro() === 'excecoes' && !this.temExcecao(p)) return false;
      if (!termo) return true;
      return p.nome.toLowerCase().includes(termo) || (p.codigo ?? '').toLowerCase().includes(termo)
        || (p.categoriaNome ?? '').toLowerCase().includes(termo);
    });
  });
  readonly totalIncompletos = computed(() => (this.dados()?.produtos ?? []).filter((p) => p.ativo && !p.completo).length);
  readonly emitenteAlterado = computed(() => {
    const e = this.dados()?.emitente;
    if (!e) return false;
    return (this.ieValor() ?? null) !== (e.inscricaoEstadual ?? null)
      || this.regime() !== e.regimeTributario
      || (onlyDigits(this.ibge()) || null) !== (e.codigoMunicipioIbge ?? null);
  });

  constructor() {
    this.carregar();
  }

  // --- Formatação -------------------------------------------------------------

  cnpj(value: string | null | undefined): string {
    return value ? formatCNPJ(value) : '—';
  }

  cep(value: string | null | undefined): string {
    return value ? formatCEP(value) : '—';
  }

  ncm(value: string | null): string {
    if (!value) return '—';
    return value.length === 8 ? `${value.slice(0, 4)}.${value.slice(4, 6)}.${value.slice(6)}` : value;
  }

  temExcecao(produto: ProdutoDadosFiscais): boolean {
    return Object.values(produto.proprio).some((v) => !!v);
  }

  faltando(campos: CamposFiscais): string[] {
    const faltas: string[] = [];
    if (!campos.ncm) faltas.push('NCM');
    if (!campos.cfop) faltas.push('CFOP');
    if (!campos.csosnCst) faltas.push(this.usaCsosn() ? 'CSOSN' : 'CST');
    if (!campos.origem) faltas.push('origem');
    return faltas;
  }

  categoriaFiscal(produto: ProdutoDadosFiscais): CamposFiscais | null {
    return produto.categoriaId ? (this.categoriasPorId().get(produto.categoriaId)?.fiscal ?? null) : null;
  }

  // --- Navegação ----------------------------------------------------------------

  irPara(aba: Aba): void {
    this.aba.set(aba);
    this.editandoId.set(null);
    this.erroEdicao.set(null);
  }

  editar(id: string): void {
    this.editandoId.update((atual) => (atual === id ? null : id));
    this.erroEdicao.set(null);
  }

  // --- Emitente -------------------------------------------------------------------

  onIeInput(event: Event): void {
    this.ie.set((event.target as HTMLInputElement).value.replace(/[^0-9./\- ]/g, '').slice(0, 20));
    this.okEmitente.set(false);
  }

  toggleIsento(): void {
    this.ieIsento.update((v) => !v);
    this.okEmitente.set(false);
  }

  onRegimeChange(value: string): void {
    this.regime.set((value || null) as RegimeTributario | null);
    this.okEmitente.set(false);
  }

  onIbgeInput(event: Event): void {
    this.ibge.set(onlyDigits((event.target as HTMLInputElement).value).slice(0, 7));
    this.okEmitente.set(false);
  }

  buscarIbge(): void {
    const cep = this.dados()?.emitente.cep;
    if (!cep) {
      this.avisoIbge.set('Cadastre o CEP do estabelecimento para buscar o código.');
      return;
    }
    this.buscandoIbge.set(true);
    this.avisoIbge.set(null);
    this.cepService.lookup(cep).subscribe({
      next: (endereco) => {
        this.buscandoIbge.set(false);
        if (endereco?.ibgeCode) {
          this.ibge.set(endereco.ibgeCode);
          this.okEmitente.set(false);
        } else {
          this.avisoIbge.set('Não encontramos o código para este CEP. Consulte no site do IBGE.');
        }
      },
      error: () => {
        this.buscandoIbge.set(false);
        this.avisoIbge.set('A consulta de CEP está indisponível agora. Tente de novo em instantes.');
      }
    });
  }

  salvarEmitente(): void {
    const ibge = onlyDigits(this.ibge());
    if (ibge && ibge.length !== 7) {
      this.erroEmitente.set('O código IBGE do município tem 7 dígitos.');
      return;
    }
    this.salvandoEmitente.set(true);
    this.erroEmitente.set(null);
    this.service.updateEmitter({ inscricaoEstadual: this.ieValor(), regimeTributario: this.regime(), codigoMunicipioIbge: ibge || null })
      .subscribe({
        next: (dados) => {
          this.salvandoEmitente.set(false);
          this.okEmitente.set(true);
          this.aplicar(dados);
        },
        error: (error: HttpErrorResponse) => {
          this.salvandoEmitente.set(false);
          this.erroEmitente.set(this.mensagem(error));
        }
      });
  }

  // --- Categorias e produtos --------------------------------------------------------

  salvarCategoria(categoria: CategoriaDadosFiscais, campos: CamposFiscais): void {
    this.salvar(categoria.id, this.service.updateCategory(categoria.id, campos));
  }

  salvarProduto(produto: ProdutoDadosFiscais, campos: CamposFiscais): void {
    this.salvar(produto.id, this.service.updateItem(produto.id, campos));
  }

  recarregar(): void {
    this.carregar();
  }

  // ---------------------------------------------------------------------------------

  private salvar(id: string, request: ReturnType<DadosFiscaisService['get']>): void {
    this.salvandoId.set(id);
    this.erroEdicao.set(null);
    request.subscribe({
      next: (dados) => {
        this.salvandoId.set(null);
        this.editandoId.set(null);
        this.salvoId.set(id);
        setTimeout(() => this.salvoId.update((atual) => (atual === id ? null : atual)), 2200);
        this.aplicar(dados, false);
      },
      error: (error: HttpErrorResponse) => {
        this.salvandoId.set(null);
        this.erroEdicao.set(this.mensagem(error));
      }
    });
  }

  private carregar(): void {
    this.carregando.set(true);
    this.erroCarga.set(null);
    this.service.get().subscribe({
      next: (dados) => {
        this.carregando.set(false);
        this.aplicar(dados);
        if (dados.completude.emitenteCompleto) {
          this.aba.set(dados.completude.produtosAtivosCompletos < dados.completude.produtosAtivos ? 'categorias' : 'produtos');
        }
      },
      error: () => {
        this.carregando.set(false);
        this.erroCarga.set('Não foi possível carregar os dados fiscais.');
      }
    });
  }

  private aplicar(dados: DadosFiscaisResponse, resetEmitente = true): void {
    this.dados.set(dados);
    if (resetEmitente) {
      const ie = dados.emitente.inscricaoEstadual;
      this.ieIsento.set(ie === 'ISENTO');
      this.ie.set(ie && ie !== 'ISENTO' ? ie : '');
      this.regime.set(dados.emitente.regimeTributario);
      this.ibge.set(dados.emitente.codigoMunicipioIbge ?? '');
    }
  }

  private ieValor(): string | null {
    if (this.ieIsento()) return 'ISENTO';
    return onlyDigits(this.ie()) || null;
  }

  private mensagem(error: HttpErrorResponse): string {
    const body = error.error as ErrorBody | undefined;
    if (body?.mensagemErro) return body.mensagemErro.replace(/^[a-zA-Z]+: /, '');
    if (body?.mensagem) return body.mensagem;
    if (error.status === 403) return 'Você não tem permissão para alterar os dados fiscais.';
    return 'Não foi possível salvar agora. Tente novamente em instantes.';
  }
}
