document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("btnContinuar");

  const camposObrigatorios = [
    "nome", "idade", "peso", "altura",
    "sexo", "objetivo", "calorias", "alergia", "historico"
  ];

  function validar() {
    const ok = camposObrigatorios.every(id => {
      const el = document.getElementById(id);
      return el && el.value.trim() !== "";
    });
    btn.disabled = !ok;
  }

  document.querySelectorAll("input, select").forEach(el => {
    el.addEventListener("input", validar);
    el.addEventListener("change", validar);
  });

  // Alergia
  document.getElementById("alergia").addEventListener("change", e => {
    document.getElementById("alergiaBox").style.display =
      e.target.value.includes("Sim") ? "block" : "none";
    validar();
  });

  // Histórico
  document.getElementById("historico").addEventListener("change", e => {
    document.getElementById("historicoBox").style.display =
      e.target.value.includes("Sim") ? "block" : "none";
    validar();
  });

  btn.addEventListener("click", () => {
    if (btn.disabled) return;
    window.location.href = "alimentos.html";
  });

});
