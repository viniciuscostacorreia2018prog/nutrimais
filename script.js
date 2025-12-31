let formData = {};

function nextStep(current) {
  // Salvar dados de cada passo
  if(current === 1){
    formData.nome = document.getElementById('nome').value;
    formData.telefone = document.getElementById('telefone').value;
    formData.email = document.getElementById('email').value;
  } else if(current === 2){
    formData.idade = document.getElementById('idade').value;
    formData.endereco = document.getElementById('endereco').value;
    formData.observacoes = document.getElementById('observacoes').value;
    // Continue salvando os outros campos do formulário antigo aqui
  } else if(current === 3){
    const planoSelecionado = document.querySelector('input[name="plano"]:checked');
    if(planoSelecionado) formData.plano = planoSelecionado.value;
    else { alert('Escolha um plano para continuar'); return; }
  }

  document.getElementById(`step${current}`).classList.remove('active');
  document.getElementById(`step${current+1}`).classList.add('active');

  if(current+1 === 4) showResumo();
}

function prevStep(current) {
  document.getElementById(`step${current}`).classList.remove('active');
  document.getElementById(`step${current-1}`).classList.add('active');
}

function showResumo() {
  const resumo = `
    <strong>Nome:</strong> ${formData.nome} <br>
    <strong>Telefone:</strong> ${formData.telefone} <br>
    <strong>E-mail:</strong> ${formData.email} <br>
    <strong>Idade:</strong> ${formData.idade} <br>
    <strong>Endereço:</strong> ${formData.endereco} <br>
    <strong>Observações:</strong> ${formData.observacoes} <br>
    <strong>Plano escolhido:</strong> ${formData.plano} <br>
  `;
  document.getElementById('resumo').innerHTML = resumo;
}

function finalizar() {
  alert('Cadastro finalizado com sucesso!');
  console.log('Dados do usuário:', formData);
  // Aqui você envia os dados para o servidor via fetch/AJAX
}
