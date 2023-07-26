const distanciaKm = parseFloat(prompt("Digite a distância que deseja percorrer (em Km):"));
let precoPassagem;

if (!isNaN(distanciaKm) && distanciaKm > 0) {
  if (distanciaKm <= 200) {
    precoPassagem = distanciaKm * 0.5;
  } else {
    precoPassagem = distanciaKm * 0.45; 
  }

  document.write(`Distância percorrida: ${distanciaKm.toFixed(2)} Km<br>`);
  document.write(`Preço da passagem: R$ ${precoPassagem.toFixed(2)}`);
} else {
  document.write("Entrada inválida! Certifique-se de que a distância é um número positivo.");
}