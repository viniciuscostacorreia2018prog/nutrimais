const inputs = document.querySelectorAll("input, select");
const btn = document.getElementById("btnContinuar");

function validar() {
  const tudoPreenchido = [...inputs].every(i => i.value.trim() !== "");
  btn.disabled = !tudoPreenchido;
}
  if (tudoPreenchido) {
    btn.classList.add("ativo");
  } else {
    btn.classList.remove("ativo");
  }
}

inputs.forEach(i => {
  i.addEventListener("input", validarCampos);
  i.addEventListener("change", validarCampos);
});

// força validação ao carregar a página
document.addEventListener("DOMContentLoaded", validarCampos);

btn.addEventListener("click", () => {
  const dadosUsuario = {
    nome: document.querySelector('input[placeholder="Digite seu nome"]').value,
    idade: document.querySelector('input[placeholder="Ex: 25"]').value,
    peso: document.querySelector('input[placeholder="Ex: 70"]').value,
    altura: document.querySelector('input[placeholder="Ex: 175"]').value,
    sexo: document.querySelectorAll("select")[0].value
  };

  const objetivoSelecionado = document.querySelectorAll("select")[1].value;

  localStorage.setItem("dadosUsuario", JSON.stringify(dadosUsuario));
  localStorage.setItem("objetivoSelecionado", objetivoSelecionado);

  window.location.href = "alimentos.html";
});
