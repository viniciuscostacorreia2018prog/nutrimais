function calcularMacros(dados) {
  const peso = dados.peso;
  const calorias = dados.calorias;

  const proteina = peso * 2; // g
  const gordura = (calorias * 0.25) / 9; // g
  const caloriasProteina = proteina * 4;
  const caloriasGordura = gordura * 9;
  const carboidrato = (calorias - (caloriasProteina + caloriasGordura)) / 4;

  return {
    proteina: Math.round(proteina),
    gordura: Math.round(gordura),
    carboidrato: Math.round(carboidrato)
  };
}
