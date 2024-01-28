class Carro {
  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }

  calcularConsumo(km, vlrCombustivel) {
    const consumo = km * this.gastoMedioPorKm * vlrCombustivel;
    return consumo;
  }
}

const km = 150;
const vlrCombustivel = 5.75;
const carro1 = new Carro("Fiat", "Vermelho", 1 / 10);
const viagem = carro1.calcularConsumo(km, vlrCombustivel);
console.log("Gasto total: R$ " + viagem.toFixed(2));
