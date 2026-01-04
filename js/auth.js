function login() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));

  if (!usuario || usuario.email !== email || usuario.senha !== senha) {
    alert('Credenciais inválidas');
    return;
  }

  window.location.href = 'portal.html';
}

function logout() {
  localStorage.removeItem('usuarioLogado');
  window.location.href = 'index.html';
}
