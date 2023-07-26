let totalIdade = 0;
let quantidadeAlunos = 0;
let idade;

do {
  idade = parseInt(prompt("Digite a idade do aluno (ou 999 para parar):"));

  if (idade === 999) {
    break;
  }

  if (!isNaN(idade)) {
    totalIdade += idade;
    quantidadeAlunos++;
  } else {
    alert("Valor inválido! Digite uma idade, por gentileza.");
  }
} while (true);

if (quantidadeAlunos === 0) {
  alert("Nenhum aluno foi adicionado!");
} else {
  const mediaIdade = totalIdade / quantidadeAlunos;
  alert(`Quantidade de alunos: ${quantidadeAlunos}\nMédia de idade: ${mediaIdade}`);
}