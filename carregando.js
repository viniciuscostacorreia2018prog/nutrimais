function preencherResumo() {
  const dadosUsuario = JSON.parse(localStorage.getItem("dadosUsuario"));
  const objetivo = localStorage.getItem("objetivoSelecionado");
  const dieta = JSON.parse(localStorage.getItem("dietaSelecionada")) || {};

  if (!dadosUsuario || !objetivo) {
    console.error("Dados do usuário ausentes");
    return;
  }

  // ===== TÍTULO =====
  const titulo = document.querySelector(".card-resumo h2");
  if (titulo) {
    titulo.innerText = "Tudo pronto, confirme e gere a dieta!";
  }

  // ===== DADOS =====
  const dadosEl = document.getElementById("dadosUsuario");
  if (dadosEl) {
    dadosEl.innerHTML = `
      <strong>${dadosUsuario.nome}</strong><br>
      Peso: ${dadosUsuario.peso} |
      Altura: ${dadosUsuario.altura} |
      Idade: ${dadosUsuario.idade}
    `;
  }

  // ===== FRASE IMC =====
  if (dadosUsuario.peso && dadosUsuario.altura && dadosEl) {
    const peso = Number(dadosUsuario.peso);
    const alturaM = Number(dadosUsuario.altura) / 100;
    const imc = peso / (alturaM * alturaM);

    let status = "";
    if (imc < 18.5) status = "abaixo do peso ideal";
    else if (imc < 25) status = "no peso ideal";
    else status = "acima do peso ideal";

    const info = document.createElement("p");
    info.style.marginTop = "6px";
    info.style.fontSize = "14px";
    info.style.color = "#555";
    info.innerText =
      `Temos suas medidas e você está ${status}. Vamos à sua dieta completa abaixo.`;

    dadosEl.after(info);
  }

  // ===== OBJETIVO =====
  const objetivoEl = document.getElementById("objetivoUsuario");
  if (objetivoEl) {
    objetivoEl.textContent = objetivo;
  }

  // ===== ALIMENTOS =====
  const lista = document.getElementById("listaAlimentos");
  if (!lista) return;

  lista.innerHTML = "";

  let temAlimentos = false;
  Object.values(dieta).forEach(refeicao => {
    if (Array.isArray(refeicao)) {
      refeicao.forEach(item => {
        temAlimentos = true;
        const li = document.createElement("li");
        li.textContent = item.nome || item;
        lista.appendChild(li);
      });
    }
  });

  if (!temAlimentos) {
    const li = document.createElement("li");
    li.textContent = "Sua dieta será gerada após a confirmação do plano.";
    lista.appendChild(li);
  }
}
