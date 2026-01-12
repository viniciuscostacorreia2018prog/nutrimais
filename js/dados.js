document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     CONTROLE DAS OPÇÕES EXPANSÍVEIS
     =============================== */

  const opcoes = document.querySelectorAll(".opcao");

  opcoes.forEach(opcao => {
    const toggle = opcao.querySelector(".opcao-toggle");
    const body = opcao.querySelector(".opcao-body");
    const select = body.querySelector("select");
    const extraInput = body.querySelector("input");

    // Clique no botão principal (Calorias / Alergia / Histórico)
    toggle.addEventListener("click", () => {
      opcao.classList.toggle("active");
    });

    // Quando selecionar uma opção
    select.addEventListener("change", () => {
      const valor = select.value;

      // Substitui o texto do botão pelo valor escolhido
      toggle.textContent = valor;

      // Regra especial: Alergia / Histórico
      if (extraInput) {
        if (valor.toLowerCase().includes("sim")) {
          extraInput.style.display = "block";
        } else {
          extraInput.style.display = "none";
          extraInput.value = "";
        }
      }

      // Fecha o corpo após seleção
      opcao.classList.remove("active");

      validarCampos();
    });
  });

  /* ===============================
     VALIDAÇÃO DO BOTÃO CONTINUAR
     =============================== */

  const btn = document.getElementById("btnContinuar");

  function validarCampos() {
    const camposObrigatorios = document.querySelectorAll(
      'input:not([style*="display: none"]), select'
    );

    const tudoPreenchido = [...camposObrigatorios].every(campo => {
      return campo.value && campo.value.trim() !== "";
    });

    btn.disabled = !tudoPreenchido;
  }

  document.addEventListener("input", validarCampos);
  document.addEventListener("change", validarCampos);

  validarCampos();

});
