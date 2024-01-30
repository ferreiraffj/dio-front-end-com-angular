const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let valor = 0;
let numeroPar = [];

for (i = 0; i < numeros.length; i++) {
  valor = numeros[i];
  if (valor % 2 === 0) {
    numeroPar.push(valor);
  }
}

console.log(numeroPar);
