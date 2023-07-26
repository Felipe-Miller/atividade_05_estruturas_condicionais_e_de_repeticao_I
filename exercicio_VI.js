const largura = parseFloat(prompt("Qual a largura do terrreno (em metros)?"));
const comprimento = parseFloat(prompt("Qual o comprimento do terreno (em metros)?"));
const area = largura * comprimento;

document.write(`Área do terreno: ${area} m²<br>`);

if (!isNaN(area) && area > 0) {
  if (area < 100) {
    document.write("Classificação: TERRENO POPULAR");
  } else if (area >= 100 && area <= 500) {
    document.write("Classificação: TERRENO MASTER");
  } else {
    document.write("Classificação: TERRENO VIP");
  }
} else {
  document.write("Não entendi! Digite um valor válido conforme o solicitado.");
}
