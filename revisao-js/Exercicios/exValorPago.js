function calculaValorPago(valorProduto, formaPagamento) {
  let valorPago = 0;
  if (formaPagamento === "debito") {
    valorPago = valorProduto - valorProduto * 0.1;
  } else if (formaPagamento === "dinheiro") {
    valorPago = valorProduto - valorProduto * 0.15;
  } else if (formaPagamento === "pix") {
    valorPago = valorProduto - valorProduto * 0.15;
  } else if (formaPagamento === "cred2x") {
    valorPago = valorProduto;
  } else if (formaPagamento === "cred3x") {
    valorPago = prod1 + prod1 * 0.1;
  }

  return valorPago;
}

const prod1 = 35.5;
const formaPagamento = "pix";
const valorPago = calculaValorPago(prod1, formaPagamento);

if (valorPago === 0) {
  console.log("Forma de pagamento inválida");
} else {
  console.log("Valor a pagar: " + valorPago.toFixed(2));
}

// --------------------------- com função + objetos ------------------------- //

// function calculaValorPago(valorProduto, formaPagamento) {
//   let valorPago = 0;
//   let mensagem = "";

//   if (formaPagamento === "debito") {
//     valorPago = valorProduto - valorProduto * 0.1;
//   } else if (formaPagamento === "dinheiro" || formaPagamento === "pix") {
//     valorPago = valorProduto - valorProduto * 0.15;
//   } else if (formaPagamento === "cred2x") {
//     valorPago = valorProduto;
//   } else if (formaPagamento === "cred3x") {
//     valorPago = valorProduto + valorProduto * 0.1;
//   } else {
//     mensagem = "Forma de pagamento inválida";
//   }

//   return { valorPago, mensagem };
// }

// const prod1 = 35.5;
// const formaPagamento = "pixxxxx";

// const resultado = calculaValorPago(prod1, formaPagamento);

// if (resultado.mensagem) {
//   console.log(resultado.mensagem);
// } else {
//   console.log("Valor a pagar: " + resultado.valorPago.toFixed(2));
// }

// -------------------------------- sem função ------------------------------ //

// const prod1 = 25;

// const debito = prod1 - prod1 * 0.1;
// const dinheiro = prod1 - prod1 * 0.15;
// const pix = prod1 - prod1 * 0.15;
// const cred2x = prod1;
// const cred3x = prod1 + prod1 * 0.1;

// let formaPagamento = "pix";

// if (formaPagamento === "debito") {
//   console.log("Valor a pagar: " + debito.toFixed(2));
// } else if (formaPagamento === "dinheiro") {
//   console.log("Valor a pagar: " + dinheiro.toFixed(2));
// } else if (formaPagamento === "pix") {
//   console.log("Valor a pagar: " + pix.toFixed(2));
// } else if (formaPagamento === "cred2x") {
//   console.log("Valor a pagar: " + cred2x.toFixed(2));
// } else {
//   console.log("Valor a pagar: " + cred3x.toFixed(2));
// }
