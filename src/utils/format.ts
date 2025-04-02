export function formatMoney(amount = 0, decimalsDigits = 2) {
  return new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: decimalsDigits,
  }).format(Number.parseFloat(amount.toString()));
}