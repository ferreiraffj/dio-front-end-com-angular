let combustivel = 5.45;
let kmPorLitros = 3;
let distanciaEmKM = 100;

let litrosConsumidos = distanciaEmKM / kmPorLitros;
let gastoTotal = litrosConsumidos * combustivel;

console.log(
  "R$ " +
    gastoTotal.toFixed(2) +
    " => " +
    litrosConsumidos.toFixed(2) +
    " Litros consumidos"
);
