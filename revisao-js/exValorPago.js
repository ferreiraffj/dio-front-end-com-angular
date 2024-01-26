const prod1 = 25;

const debito = prod1 - prod1 * 0.1;
const dinheiro = prod1 - prod1 * 0.15;
const pix = prod1 - prod1 * 0.15;
const cred2x = prod1;
const cred3x = prod1 + prod1 * 0.1;

let formaPagamento = "pix";

if (formaPagamento === "debito") {
  console.log("Valor a pagar: " + debito.toFixed(2));
} else if (formaPagamento === "dinheiro") {
  console.log("Valor a pagar: " + dinheiro.toFixed(2));
} else if (formaPagamento === "pix") {
  console.log("Valor a pagar: " + pix.toFixed(2));
} else if (formaPagamento === "cred2x") {
  console.log("Valor a pagar: " + cred2x.toFixed(2));
} else {
  console.log("Valor a pagar: " + cred3x.toFixed(2));
}
