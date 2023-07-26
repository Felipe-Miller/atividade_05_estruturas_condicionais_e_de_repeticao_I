const valorInicial = parseInt(prompt("Digite o primeiro valor:"));
const valorFinal = parseInt(prompt("Digite o último valor:"));
const incremento = parseInt(prompt("Digite o incremento:"));

if (!isNaN(valorInicial) && !isNaN(valorFinal) && !isNaN(incremento)) {
  let contagem = valorInicial;
  let valoresNoIntervalo = "";

  while (contagem <= valorFinal) {
    valoresNoIntervalo += contagem + " ";
    contagem += incremento;
  }

  document.write(`Contagem: ${valoresNoIntervalo} ... Fim!`);
} else {
  document.write("Valor impossível. Digite um número, gentileza.");
}