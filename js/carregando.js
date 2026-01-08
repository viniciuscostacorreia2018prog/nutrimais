// Define progresso da página 4 (~90%)
function definirProgresso(porcentagem) {
  const barra = document.getElementById("barraProgresso");
  if (barra) barra.style.width = porcentagem + "%";
}

// Inicia progresso
definirProgresso(88);

// Simula carregamento de 10s
setTimeout(() => {
  document.getElementById("loading").style.display = "none";
  document.getElementById("resumo").classList.remove("hidden");
  carregarResumo();
}, 10000);

// Dados simulados (depois conecta no localStorage)
function carregarResumo() {
  document.getElementById("dadosUsuario").innerText =
    "Peso: 80kg | Altura: 1,75m | Idade: 25";

  document.getElementById("objetivoUsuario").innerText =
    "Emagrecimento";

  const alimentos = [
    "Arroz",
    "Frango",
    "Ovos",
    "Banana"
  ];

  const lista = document.getElementById("listaAlimentos");
  lista.innerHTML = "";

  alimentos.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    lista.appendChild(li);
  });
}

// Redireciona para planos
function irParaPlanos() {
  window.location.href = "planos.html";
}
