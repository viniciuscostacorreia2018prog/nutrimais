document.addEventListener("DOMContentLoaded", () => {

  // ===== BARRA DE PROGRESSO (IGUAL AO ORIGINAL) =====
  const barra = document.getElementById("barraProgresso");
  if (barra) barra.style.width = "85%";

  // ===== ANIMAÇÃO DOS PONTOS (IGUAL AO ORIGINAL) =====
  const dots = document.getElementById("dots");
  let count = 0;
  setInterval(() => {
    count = (count + 1) % 4;
    if (dots) dots.textContent = ".".repeat(count);
  }, 500);

  // ===== SIMULA CARREGAMENTO (IGUAL AO ORIGINAL) =====
  setTimeout(() => {
    const loading = document.getElementById("loading");
    const resumo = document.getElementById("resumo");

    if (loading) loading.style.display = "none";
    if (resumo) resumo.classList.remove("hidden");

    preencherResumo();
  }, 1000);
});

function preencherResumo() {

  // ===== RECUPERA DADOS (COMPATÍVEL COM MODELO ANTIGO) =====
  const dadosUsuario = JSON.parse(localStorage.getItem("dadosUsuario")) || {};
  const objetivo = localStorage.getItem("objetivoSelecionado") || "";
  const dieta = JSON.parse(localStorage.getItem("dietaSelecionada")) || {};

  // ===== TÍTULO (SÓ TEXTO, NÃO MUDA VISUAL) =====
  const titulo = document.querySelector(".card-resumo h2");
  if (titulo) {
    titulo.innerText = "Tudo pronto, confirme e gere a dieta!";
  }

  // ===== DADOS DO USUÁRIO (MODELO ANTIGO) =====
  const dadosEl = document.getElementById("dadosUsuario");
  if (dadosEl) {

    const nome   = dadosUsuario.nome   || "";
    const peso   = dadosUsuario.peso   || "";
    const altura = dadosUsuario.altura || "";
    const idade  = dadosUsuario.idade  || "";

    dadosEl.innerHTML = `
      ${nome ? `<strong>${nome}</strong><br>` : ""}
      Peso: ${peso} |
      Altura: ${altura} |
      Idade: ${idade}
    `;

    // ===== FRASE IMC (SEM MEXER EM CSS / VISUAL) =====
    if (peso && altura) {
      const pesoNum = Number(peso);
      const alturaM = Number(altura) / 100;

      if (!isNaN(pesoNum) && !isNaN(alturaM) && alturaM > 0) {
        const imc = pesoNum / (alturaM * alturaM);
        let status = "";

        if (imc < 18.5) status = "abaixo do peso ideal";
        else if (imc < 25) status = "no peso ideal";
        else status = "acima do peso ideal";

        const info = document.createElement("p");
        info.innerText =
          `Temos suas medidas e você está ${status}. Vamos à sua dieta completa abaixo.`;

        dadosEl.after(info);
      }
    }
  }

  // ===== OBJETIVO =====
  const objetivoEl = document.getElementById("objetivoUsuario");
  if (objetivoEl) {
    objetivoEl.textContent = objetivo;
  }

  // ===== ALIMENTOS (ACEITA FORMATO ANTIGO E NOVO) =====
  const lista = document.getElementById("listaAlimentos");
  if (!lista) return;

  lista.innerHTML = "";
  let temAlimentos = false;

  if (Array.isArray(dieta)) {
    dieta.forEach(item => {
      temAlimentos = true;
      const li = document.createElement("li");
      li.textContent = item;
      lista.appendChild(li);
    });
  } else {
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
  }

  if (!temAlimentos) {
    const li = document.createElement("li");
    li.textContent = "Nenhum alimento selecionado.";
    lista.appendChild(li);
  }
}

function irParaPlanos() {
  window.location.href = "planos.html";
}
