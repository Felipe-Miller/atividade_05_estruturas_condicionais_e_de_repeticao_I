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

/* Faça um programa que leia a largura e o comprimento de um
terreno retangular, calculando e mostrando a sua área em m2. O
programa também deve mostrar a classificação desse terreno, de
acordo com a lista abaixo:
Abaixo de 100m2 = TERRENO POPULAR
Entre 100m2 e 500m2 = TERRENO MASTER
Acima de 500m2 = TERRENO VIP */
