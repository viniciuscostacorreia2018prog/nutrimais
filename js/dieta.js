const dietaSelecionada = {
  cafeManha: [],
  almoco: [],
  cafeTarde: [],
  janta: [],
  doce: []
};

function selecionarAlimento(refeicao, alimento, elemento) {
  if (!dietaSelecionada[refeicao].includes(alimento)) {
    dietaSelecionada[refeicao].push(alimento);
    elemento.classList.add('ativo');
  } else {
    dietaSelecionada[refeicao] = dietaSelecionada[refeicao].filter(a => a !== alimento);
    elemento.classList.remove('ativo');
  }

  atualizarBotao();
}

function dietaValida() {
  return (
    dietaSelecionada.cafeManha.length &&
    dietaSelecionada.almoco.length &&
    dietaSelecionada.cafeTarde.length &&
    dietaSelecionada.janta.length
  );
}

function atualizarBotao() {
  const btn = document.getElementById("btnSeguinte");
  if (btn) btn.disabled = !dietaValida();
}

function finalizarDieta() {
  if (!dietaValida()) {
    alert("Selecione pelo menos um alimento em cada refeição.");
    return;
  }

  // 🔑 CHAVE CERTA (bate com carregando.js)
  localStorage.setItem(
    "dietaSelecionada",
    JSON.stringify(dietaSelecionada)
  );

  window.location.href = "carregando.html";
}
