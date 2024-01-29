// Percorrendo um array
// const nome = "Felipe Ferreira";
// for (let i = 0; i < nome.length; i++) {
//   console.log(nome[i]);
// }

// Percorrendo um array de notas
const notas = [];

notas.push(10);
notas.push(6);
notas.push(8);
notas.push(7);
// console.log(notas.length); 4

let soma = 0;

function somarNotas(notas) {
  for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma += nota;
  }
  return soma;
}

function calcularMedia(notas) {
  const soma = somarNotas(notas);
  const media = soma / notas.length;
  return media;
}

console.log(calcularMedia(notas)); // 7.75
