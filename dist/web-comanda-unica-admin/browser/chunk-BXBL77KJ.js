// src/app/shared/utils/br-format.util.ts
function onlyDigits(value) {
  return (value ?? "").replace(/\D/g, "");
}
function formatCPF(value) {
  return onlyDigits(value).slice(0, 11).replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}
function formatCNPJ(value) {
  return onlyDigits(value).slice(0, 14).replace(/(\d{2})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1/$2").replace(/(\d{4})(\d{1,2})$/, "$1-$2");
}
function formatCellphone(value) {
  const digits = onlyDigits(value).slice(0, 11);
  if (digits.length <= 10) {
    return digits.replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{4})(\d{1,4})$/, "$1-$2");
  }
  return digits.replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d{1,4})$/, "$1-$2");
}
function formatCEP(value) {
  return onlyDigits(value).slice(0, 8).replace(/(\d{5})(\d{1,3})$/, "$1-$2");
}
function formatCurrencyInput(value) {
  const digits = onlyDigits(value).replace(/^0+(?=\d)/, "");
  if (!digits) {
    return "";
  }
  const cents = digits.padStart(3, "0");
  const integerPart = cents.slice(0, -2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const decimalPart = cents.slice(-2);
  return `R$ ${integerPart},${decimalPart}`;
}
function parseCurrencyInput(value) {
  const digits = onlyDigits(value);
  return digits ? Number(digits) / 100 : null;
}
function isValidCPF(value) {
  const cpf = onlyDigits(value);
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false;
  }
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += Number(cpf[i]) * (10 - i);
  }
  let digit = sum * 10 % 11;
  if (digit === 10)
    digit = 0;
  if (digit !== Number(cpf[9])) {
    return false;
  }
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += Number(cpf[i]) * (11 - i);
  }
  digit = sum * 10 % 11;
  if (digit === 10)
    digit = 0;
  return digit === Number(cpf[10]);
}
function isValidCNPJ(value) {
  const cnpj = onlyDigits(value);
  if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) {
    return false;
  }
  const calcDigit = (base2) => {
    const weights = base2.length === 12 ? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2] : [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const sum = base2.split("").reduce((acc, digit, index) => acc + Number(digit) * weights[index], 0);
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };
  const base = cnpj.slice(0, 12);
  const digit1 = calcDigit(base);
  const digit2 = calcDigit(base + digit1);
  return cnpj === `${base}${digit1}${digit2}`;
}

export {
  onlyDigits,
  formatCPF,
  formatCNPJ,
  formatCellphone,
  formatCEP,
  formatCurrencyInput,
  parseCurrencyInput,
  isValidCPF,
  isValidCNPJ
};
//# sourceMappingURL=chunk-BXBL77KJ.js.map
