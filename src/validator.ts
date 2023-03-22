function calculateDigit(cpf: string, factor: number) {
  let total = 0;
  for (const digit of cpf) {
    if (factor > 1) total += parseInt(digit) * factor--;
  }
  const rest = total % 11;
  return rest < 2 ? 0 : 11 - rest;
}

function clean(cpf: string) {
  return cpf
    .replace(".", "")
    .replace(".", "")
    .replace("-", "")
    .replace(" ", "");
}

function isValidLenght(cpf: string) {
  return cpf.length === 11;
}

function allDigitsTheSame(cpf: string) {
  return cpf.split("").every((c) => c === cpf[0]);
}

export function validate(cpf: string) {
  cpf = clean(cpf);
  if (!isValidLenght(cpf)) return false;
  if (allDigitsTheSame(cpf)) return false;
  const dg1 = calculateDigit(cpf, 10);
  const dg2 = calculateDigit(cpf, 11);
  const digitoVerificadorCalculado = `${dg1}${dg2}`;
  const digitoVerificador: string = cpf.substring(cpf.length - 2, cpf.length);
  return digitoVerificador == digitoVerificadorCalculado;
}
