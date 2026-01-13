document.addEventListener('DOMContentLoaded', function () {

  const btnContinuar = document.getElementById('p4Continuar');
  if (!btnContinuar) return;

  btnContinuar.addEventListener('click', function () {

    btnContinuar.disabled = true;
    btnContinuar.classList.add('desativado');

    window.location.href = 'pagamento.html';

  });

});
