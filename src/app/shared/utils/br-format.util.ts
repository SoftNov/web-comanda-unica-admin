export function onlyDigits(value: string | null | undefined): string {
  return (value ?? '').replace(/\D/g, '');
}

export function formatCPF(value: string): string {
  return onlyDigits(value)
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

// Exibição discreta do CPF em telas de listagem (ex.: reservas) — mostra só o primeiro e o
// último dígito de cada bloco, mascarando o resto. "52998224725" -> "5**.***.**7-*5".
export function maskCPF(value: string | null | undefined): string {
  const digits = onlyDigits(value);
  if (digits.length !== 11) {
    return digits ? formatCPF(digits) : '—';
  }
  return `${digits[0]}**.***.**${digits[8]}-*${digits[10]}`;
}

// CNPJ alfanumérico (Receita Federal, a partir de jul/2026): 12 primeiras posições aceitam
// letras maiúsculas e dígitos; os 2 dígitos verificadores continuam numéricos. CNPJs
// numéricos antigos seguem válidos. Retorna só os caracteres válidos, em maiúsculas.
export function normalizeCNPJ(value: string | null | undefined): string {
  const chars = (value ?? '').toUpperCase().replace(/[^A-Z0-9]/g, '');
  let result = '';
  for (const char of chars) {
    if (result.length >= 14) break;
    if (result.length >= 12 && !/\d/.test(char)) continue;
    result += char;
  }
  return result;
}

export function formatCNPJ(value: string): string {
  return normalizeCNPJ(value)
    .replace(/([A-Z0-9]{2})([A-Z0-9])/, '$1.$2')
    .replace(/([A-Z0-9]{3})([A-Z0-9])/, '$1.$2')
    .replace(/([A-Z0-9]{3})([A-Z0-9])/, '$1/$2')
    .replace(/([A-Z0-9]{4})(\d{1,2})$/, '$1-$2');
}

export function formatCellphone(value: string): string {
  const digits = onlyDigits(value).slice(0, 11);
  if (digits.length <= 10) {
    return digits.replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{4})(\d{1,4})$/, '$1-$2');
  }
  return digits.replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d{1,4})$/, '$1-$2');
}

export function formatCEP(value: string): string {
  return onlyDigits(value)
    .slice(0, 8)
    .replace(/(\d{5})(\d{1,3})$/, '$1-$2');
}

// Máscara de valor monetário (BRL): os últimos 2 dígitos digitados são sempre os centavos,
// ex: "1234" -> "R$ 12,34". Usada nos campos de preço para digitação livre estilo caixa eletrônico.
export function formatCurrencyInput(value: string | null | undefined): string {
  const digits = onlyDigits(value).replace(/^0+(?=\d)/, '');
  if (!digits) {
    return '';
  }
  const cents = digits.padStart(3, '0');
  const integerPart = cents.slice(0, -2).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const decimalPart = cents.slice(-2);
  return `R$ ${integerPart},${decimalPart}`;
}

export function parseCurrencyInput(value: string | null | undefined): number | null {
  const digits = onlyDigits(value);
  return digits ? Number(digits) / 100 : null;
}

export function isValidCPF(value: string): boolean {
  const cpf = onlyDigits(value);
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += Number(cpf[i]) * (10 - i);
  }
  let digit = (sum * 10) % 11;
  if (digit === 10) digit = 0;
  if (digit !== Number(cpf[9])) {
    return false;
  }

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += Number(cpf[i]) * (11 - i);
  }
  digit = (sum * 10) % 11;
  if (digit === 10) digit = 0;
  return digit === Number(cpf[10]);
}

export function isValidCNPJ(value: string): boolean {
  const cnpj = normalizeCNPJ(value);
  if (!/^[A-Z0-9]{12}\d{2}$/.test(cnpj) || /^(.)\1{13}$/.test(cnpj)) {
    return false;
  }

  // Valor de cada caractere = código ASCII - 48 ('0'..'9' -> 0..9, 'A' -> 17 ... 'Z' -> 42).
  const calcDigit = (base: string): number => {
    const weights = base.length === 12 ? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2] : [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const sum = base.split('').reduce((acc, char, index) => acc + (char.charCodeAt(0) - 48) * weights[index], 0);
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  const base = cnpj.slice(0, 12);
  const digit1 = calcDigit(base);
  const digit2 = calcDigit(base + digit1);
  return cnpj === `${base}${digit1}${digit2}`;
}
