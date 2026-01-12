document.addEventListener("DOMContentLoaded", () => {

  const camposExpansiveis = document.querySelectorAll(".campo-expansivel");
  const btn = document.getElementById("btnContinuar");

  camposExpansiveis.forEach(campo => {
    const trigger = campo.querySelector(".campo-trigger");
    const conteudo = campo.querySelector(".campo-conteudo");
    const select = campo.querySelector("select");
    const extra = campo.querySelector(".input-extra");

    // Abre/fecha ao clicar
    trigger.addEventListener("click", () => {
      campo.classList.toggle("ativo");
    });

    // Quando escolhe uma opção
    select.addEventListener("change", () => {
      const valor = select.value;
      if (!valor) return;

      // Substitui texto do "botão"
      trigger.textContent = valor;

      // Alergia / Histórico → campo extra
      if (extra) {
        if (valor.toLowerCase().includes("sim")) {
          extra.classList.add("ativo");
        } else {
          extra.classList.remove("ativo");
          extra.value = "";
        }
      }

      campo.classList.remove("ativo");
      validar();
    });
  });

  function validar() {
    const obrigatorios = document.querySelectorAll(
      'input:not(.input-extra), select'
    );

    const ok = [...obrigatorios].every(c =>
      c.value && c.value.trim() !== ""
    );

    btn.disabled = !ok;
  }

  document.addEventListener("input", validar);
  document.addEventListener("change", validar);

});
