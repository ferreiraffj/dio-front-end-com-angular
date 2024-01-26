// let n1 = 10;
// let n2 = 20;

// let soma = n1 + n2;
// console.log(soma);

// preço combustível
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
