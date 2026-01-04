function salvarAlimentos() {

  const dados = {
    cafeManha: [],
    almoco: [],
    cafeTarde: [],
    janta: [],
    doce: []
  };

  document.querySelectorAll('h2').forEach(titulo => {
    const refeicao = titulo.innerText;
    const inputs = titulo.nextElementSibling.querySelectorAll('input:checked');

    inputs.forEach(input => {
      if (refeicao.includes('Café da Manhã')) dados.cafeManha.push(input.value);
      if (refeicao.includes('Almoço')) dados.almoco.push(input.value);
      if (refeicao.includes('Café da Tarde')) dados.cafeTarde.push(input.value);
      if (refeicao.includes('Janta')) dados.janta.push(input.value);
      if (refeicao.includes('Doce')) dados.doce.push(input.value);
    });
  });

  localStorage.setItem('alimentosSelecionados', JSON.stringify(dados));

  window.location.href = 'confirmacao.html';
}
