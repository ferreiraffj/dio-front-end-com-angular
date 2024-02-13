const { gets, print } = require("./funcoes-auxiliares");

const numeros = gets();
let maiorValor = 0;
for (let i = 0; i < numeros; i++) {
  const numero = gets();
  if (numero > maiorValor) {
    maiorValor = numero;
  }
}

print(maiorValor);
