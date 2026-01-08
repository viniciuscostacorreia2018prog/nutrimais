document.addEventListener("DOMContentLoaded", () => {

  // ===== BARRA DE PROGRESSO (85%) =====
  const barra = document.getElementById("barraProgresso");
  if (barra) {
    barra.style.width = "85%";
  }

  // ===== ANIMAÇÃO DOS PONTOS =====
  const dots = document.getElementById("dots");
  let count = 0;

  setInterval(() => {
    count = (count + 1) % 4;
    dots.textContent = ".".repeat(count);
  }, 500);

  // ===== SIMULA CARREGAMENTO =====
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("resumo").classList.remove("hidden");
    carregarResumo();
  }, 10000);
});

function carregarResumo() {

  // ===== DADOS DO USUÁRIO =====
  const dadosUsuario = JSON.parse(localStorage.getItem("dadosUsuario")) || {};
  const objetivoUsuario = localStorage.getItem("objetivoSelecionado") || "";
  const dietaSelecionada = JSON.parse(localStorage.getItem("dietaSelecionada")) || {};

  // ===== MONTA TEXTO DE DADOS =====
  const dadosTexto = `
    Nome: ${dadosUsuario.nome || "-"} |
    Idade: ${dadosUsuario.idade || "-"} anos |
    Peso: ${dadosUsuario.peso || "-"} kg |
    Altura: ${dadosUsuario.altura || "-"} cm
  `;

  const dadosEl = document.getElementById("dadosUsuario");
  if (dadosEl) {
    dadosEl.innerText = dadosTexto;
  }

  // ===== OBJETIVO =====
  const objetivoEl = document.getElementById("objetivoUsuario");
  if (objetivoEl) {
    objetivoEl.innerText = objetivoUsuario || "-";
  }

  // ===== ALIMENTOS =====
  const lista = document.getElementById("listaAlimentos");
  lista.innerHTML = "";

  let temAlimentos = false;

  Object.keys(dietaSelecionada).forEach(refeicao => {
    const itens = dietaSelecionada[refeicao];

    if (Array.isArray(itens) && itens.length > 0) {
      temAlimentos = true;

      itens.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item.nome || item;
        lista.appendChild(li);
      });
    }
  });

  if (!temAlimentos) {
    const li = document.createElement("li");
    li.innerText = "Nenhum alimento selecionado.";
    lista.appendChild(li);
  }
}

// ===== BOTÃO =====
function irParaPlanos() {
  window.location.href = "planos.html";
}
