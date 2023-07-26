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

/* Crie um algoritmo que leia o valor inicial da contagem, o valor final e
o incremento, mostrando em seguida todos os valores no intervalo:
Ex:
Digite o primeiro Valor: 3
Digite o último Valor: 10
Digite o incremento: 2
Contagem: 3 5 7 9 Acabou! */