// Programa para calcular uma viagem

// Variáveis:
// 1 - Preço do etanol;
// 2 - Preço da gasolina;
// 3 - O tipo de combustível que está no seu carro;
// 4 - Gasto médio de combustível do carro por KM;
// 5 - Distância em KM da viagem;

const vlrEtanol = 7;
const vlrGasolina = 5.5;
const combustivel = "gasolina";
const kmPorLitros = 5;
let kmViagem = 100;

const litrosConsumidos = kmViagem / kmPorLitros;

if (combustivel === "etanol") {
  const gastoTotal = litrosConsumidos * vlrEtanol;
  console.log("Gasto total de etanol: " + gastoTotal.toFixed(2));
} else if (combustivel === "gasolina") {
  const gastoTotal = litrosConsumidos * vlrGasolina;
  console.log("Gasto total de gasolina: " + gastoTotal.toFixed(2));
} else {
  console.log("Combustível inválido");
}
