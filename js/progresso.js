function definirProgresso(porcentagem) {
  const barra = document.getElementById("barraProgresso");
  if (barra) {
    barra.style.width = porcentagem + "%";
  }
}
