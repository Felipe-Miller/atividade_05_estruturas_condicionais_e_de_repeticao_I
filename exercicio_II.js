let totalSalarioHomens = 0;
let totalSalarioMulheres = 0;
let continuar;

do {
  const salario = parseFloat(prompt("Digite o salário do funcionário:"));
  const sexo = prompt("Digite o sexo do funcionário (M para masculino, F para feminino):").toUpperCase();

  if (!isNaN(salario) && (sexo === 'M' || sexo === 'F')) {
    if (sexo === 'M') {
      totalSalarioHomens += salario;
    } else {
      totalSalarioMulheres += salario;
    }

    continuar = prompt("Deseja continuar? (Digite 'S' para sim ou 'N' para não):").toUpperCase();
  } else {
    alert("Entrada inválida! Por favor, digite um salário válido e 'M' ou 'F' para o sexo.");
    continuar = 'S'; // Definir 'S' para que o loop continue em caso de entrada inválida
  }

} while (continuar === 'S');

alert(`Total de salários pagos aos homens: R$ ${totalSalarioHomens.toFixed(2)}\n
       Total de salários pagos às mulheres: R$ ${totalSalarioMulheres.toFixed(2)}`);