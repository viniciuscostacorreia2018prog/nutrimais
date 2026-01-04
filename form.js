let sexoSelecionado = null;

// Seleção de sexo
document.querySelectorAll('.sexo-btn').forEach(botao => {
  botao.addEventListener('click', () => {
    document.querySelectorAll('.sexo-btn').forEach(b => b.classList.remove('ativo'));
    botao.classList.add('ativo');
    sexoSelecionado = botao.dataset.sexo;
  });
});

// Envio do formulário
document.getElementById('formDados').addEventListener('submit', function (e) {
  e.preventDefault();

  if (!sexoSelecionado) {
    alert('Selecione o sexo');
    return;
  }

  const dadosUsuario = {
    peso: document.getElementById('peso').value,
    altura: document.getElementById('altura').value,
    idade: document.getElementById('idade').value,
    objetivo: document.getElementById('objetivo').value,
    calorias: document.getElementById('calorias').value,
    sexo: sexoSelecionado
  };

  localStorage.setItem('dadosUsuario', JSON.stringify(dadosUsuario));

  window.location.href = 'plans.html';
});
