document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".campo-trigger").forEach(trigger => {
    trigger.addEventListener("click", () => {
      trigger.parentElement.classList.toggle("ativo");
    });
  });

  document.getElementById("alergia").addEventListener("change", e => {
    document.getElementById("alergiaDescricao")
      .classList.toggle("ativo", e.target.value === "sim");
  });

  document.getElementById("historico").addEventListener("change", e => {
    document.getElementById("historicoDescricao")
      .classList.toggle("ativo", e.target.value !== "nao");
  });

  document.querySelectorAll(".sexo").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".sexo").forEach(b => b.classList.remove("ativo"));
      btn.classList.add("ativo");
      document.getElementById("sexo").value = btn.dataset.value;
    });
  });

});
