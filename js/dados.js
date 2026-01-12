document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnContinuar");

  const alergia = document.getElementById("alergia");
  const alergiaDesc = document.getElementById("alergiaDescricao");

  const historico = document.getElementById("historico");
  const historicoDesc = document.getElementById("historicoDescricao");

  function validarCampos() {
    const campos = document.querySelectorAll(
      'input:not(.input-extra), select'
    );

    const extrasAtivos = document.querySelectorAll(".input-extra.ativo");

    const todos = [...campos, ...extrasAtivos];

    btn.disabled = !todos.every(c => c.value && c.value.trim() !== "");
  }

  alergia.addEventListener("change", () => {
    if (alergia.value === "sim") {
      alergiaDesc.classList.add("ativo");
    } else {
      alergiaDesc.classList.remove("ativo");
      alergiaDesc.value = "";
    }
    validarCampos();
  });

  historico.addEventListener("change", () => {
    if (historico.value !== "nao") {
      historicoDesc.classList.add("ativo");
    } else {
      historicoDesc.classList.remove("ativo");
      historicoDesc.value = "";
    }
    validarCampos();
  });

  document.addEventListener("input", validarCampos);
  document.addEventListener("change", validarCampos);

  validarCampos();
});
