export function formatMoney(amount = 0, decimalsDigits = 2) {
  return new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: decimalsDigits,
  }).format(Number.parseFloat(amount.toString()));
}

export function formatDecimal(amount = 0, decimalsDigits = 2) {
  return Number.parseFloat(amount.toString())
    .toFixed(decimalsDigits)
    .replace(".", ",");
}

export function formatToThousands(
  value: string | number,
  forceDecimal: boolean = true
) {
  const valueStr = value.toString();
  let [integerPart, decimalPart] = valueStr.split(".");

  const cleanInteger = integerPart.replace(/[^0-9]/g, "");

  const formattedInteger = cleanInteger.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  if (forceDecimal) {
    decimalPart = (decimalPart || "00").padEnd(2, "0").slice(0, 2);
    return `${formattedInteger},${decimalPart}`;
  } else {
    return decimalPart
      ? `${formattedInteger},${decimalPart.padEnd(2, "0").slice(0, 2)}`
      : formattedInteger;
  }
}

export const removeNonNumeric = (value: string) => {
  return value.replace(/\D/g, "");
};

export function formatCPF(cpf: any) {
  cpf = cpf.replace(/[^\d]/g, "");

  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

export function formatCNPJ(cnpj: any) {
  cnpj = cnpj.replace(/\D/g, "");
  cnpj = cnpj.replace(/^(\d{2})(\d)/, "$1.$2"); 
  cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
  cnpj = cnpj.replace(/\.(\d{3})(\d)/, ".$1/$2");
  cnpj = cnpj.replace(/(\d{4})(\d)/, "$1-$2");
  return cnpj;
}

export function formatDate(date: Date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");

  const ddd = cleaned.slice(0, 2);
  const firstPart = cleaned.slice(2, 7);
  const secondPart = cleaned.slice(7);

  return `(${ddd})${firstPart}-${secondPart}`;
}
