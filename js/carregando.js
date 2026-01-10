// ===== BARRA DE PROGRESSO =====
document.addEventListener("DOMContentLoaded", () => {

  const barra = document.getElementById("barraProgresso");
  if (barra) barra.style.width = "88%";

  const loading = document.getElementById("loading");
  const resumo = document.getElementById("resumo");

  const nomeSpan = document.getElementById("nomeUsuario");
  const dadosDiv = document.getElementById("dadosResumo");
  const alimentosDiv = document.getElementById("alimentosResumo");

  // ===== DADOS DO LOCALSTORAGE =====
  const dadosUsuario = JSON.parse(localStorage.getItem("dadosUsuario"));
  const dietaSelecionada = JSON.parse(localStorage.getItem("dietaSelecionada"));

  console.log("dadosUsuario:", dadosUsuario);
  console.log("dietaSelecionada:", dietaSelecionada);

  if (!dadosUsuario || !dietaSelecionada) {
    console.error("Dados não encontrados no localStorage");
    return;
  }

  // ===== SIMULA CARREGAMENTO =====
  setTimeout(() => {

    if (loading) loading.style.display = "none";
    if (resumo) resumo.classList.remove("hidden");

    // ===== NOME =====
    if (nomeSpan) {
      nomeSpan.textContent = dadosUsuario.nome || "";
    }

    // ===== DADOS =====
    if (dadosDiv) {
      dadosDiv.innerHTML = `
        <p><strong>Idade:</strong> ${dadosUsuario.idade || "-"} anos</p>
        <p><strong>Peso:</strong> ${dadosUsuario.peso || "-"} kg</p>
        <p><strong>Altura:</strong> ${dadosUsuario.altura || "-"} cm</p>
      `;
    }

    // ===== ALIMENTOS =====
    if (alimentosDiv) {
      let html = "";

      Object.keys(dietaSelecionada).forEach(refeicao => {
        if (Array.isArray(dietaSelecionada[refeicao]) && dietaSelecionada[refeicao].length > 0) {
          html += `<p><strong>${refeicao}:</strong></p><ul>`;
          dietaSelecionada[refeicao].forEach(item => {
            html += `<li>${item}</li>`;
          });
          html += `</ul>`;
        }
      });

      alimentosDiv.innerHTML = html || "<p>Nenhum alimento selecionado.</p>";
    }

  }, 1800);
});

// ===== BOTÃO FINAL =====
function irParaPlanos() {
  window.location.href = "planos.html";
}

