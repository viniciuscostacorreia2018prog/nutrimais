const dieta = {
  cafeManha: [],
  almoco: [],
  cafeTarde: [],
  janta: [],
  doce: []
};

function selecionarAlimento(refeicao, alimento) {
  const index = dieta[refeicao].indexOf(alimento);

  if (index > -1) {
    dieta[refeicao].splice(index, 1);
  } else {
    dieta[refeicao].push(alimento);
  }

  event.currentTarget.classList.toggle('ativo');
}

function finalizarDieta() {
  localStorage.setItem('dietaUsuario', JSON.stringify(dieta));
  window.location.href = 'portal.html';
}
function dietaValida() {
  return (
    dieta.cafeManha.length > 0 &&
    dieta.almoco.length > 0 &&
    dieta.cafeTarde.length > 0 &&
    dieta.janta.length > 0
  );
}

function finalizarDieta() {
  if (!dietaValida()) {
    alert('Por favor, selecione pelo menos um alimento em cada refeição.');
    return;
  }

  localStorage.setItem('dietaUsuario', JSON.stringify(dieta));
  window.location.href = 'portal.html';
}
function atualizarBotao() {
  document.getElementById('btnSeguinte').disabled = !dietaValida();
}
function selecionarCard(elemento, refeicao, alimento) {
  elemento.classList.toggle('ativo');
  selecionarAlimento(refeicao, alimento);
}
const dieta = {
  cafeManha: [],
  almoco: [],
  cafeTarde: [],
  janta: [],
  doce: []
};
