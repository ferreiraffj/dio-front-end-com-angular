function incrementaJuros(valor, taxa) {
  const vlrAcrescido = (taxa / 100) * valor;
  return valor + vlrAcrescido;
}

console.log(incrementaJuros(150, 10)); // 110
