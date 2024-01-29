class IMC {
    peso;
    altura;
  
    constructor(peso, altura) {
      this.peso = peso;
      this.altura = altura;
    }
  
    calcularIMC() {
      const imc = this.peso / this.altura ** 2;
      return imc;
    }
  
    classificacao() {
      const imc = this.calcularIMC();
      if (imc < 18.5) {
        return "Abaixo do peso";
      } else if (imc < 25) {
        return "Peso normal";
      } else if (imc < 30) {
        return "Sobrepeso";
      } else if (imc < 35) {
        return "Obesidade grau 1";
      } else if (imc < 40) {
        return "Obesidade grau 2";
      } else {
        return "Obesidade grau 3";
      }
    }
  }
  
  const peso = 80;
  const altura = 1.8;
  const imc1 = new IMC(peso, altura);
  
  console.log("IMC: " + imc1.calcularIMC().toFixed(2));
  console.log("Classificação: " + imc1.classificacao());