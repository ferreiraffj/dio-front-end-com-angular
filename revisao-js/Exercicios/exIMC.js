function calculaIMC(peso, altura) {
  return peso / Math.pow(altura, 2);
  // return peso / (altura * altura)
}

function classificaIMC(imc) {
  let classificacao = "";
  if (imc < 18.5) {
    classificacao = "abaixo do peso";
  } else if (imc < 25) {
    classificacao = "com peso ideal. Parabéns!!!";
  } else if (imc < 30) {
    classificacao = "levemente acima do peso";
  } else if (imc < 35) {
    classificacao = "com obesidade grau I";
  } else if (imc < 40) {
    classificacao = "com obesidade grau II";
  } else {
    classificacao = "com obesidade grau III. Cuidado!!!";
  }
  return classificacao;
}

function main() {
  const peso = 57;
  const altura = 1.75;

  const imc = calculaIMC(peso, altura);
  classificaIMC(imc);
  console.log(`Seu IMC é ${imc.toFixed(2)} e você está ${classificaIMC(imc)}`);
}

// Função não nomeada:

// (function () {
//     const peso = 57;
//     const altura = 1.75;

//     const imc = calculaIMC(peso, altura);
//     classificaIMC(imc);
//     console.log(`Seu IMC é ${imc.toFixed(2)} e você está ${classificaIMC(imc)}`);
// })();

main();
