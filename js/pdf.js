function baixarPDF(dieta) {
  const texto = `
DIETA PERSONALIZADA

Café da manhã:
${dieta.cafeManha.join(', ')}

Almoço:
${dieta.almoco.join(', ')}

Café da tarde:
${dieta.cafeTarde.join(', ')}

Janta:
${dieta.janta.join(', ')}

Doce:
${dieta.doce.join(', ')}
`;

  const blob = new Blob([texto], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'minha-dieta.pdf';
  a.click();
}
