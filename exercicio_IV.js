const nomeCliente = prompt("Digite o nome do cliente:");
const sexoCliente = prompt("Digite o sexo do cliente (M para masculino, F para feminino):").toUpperCase();
const valorCompras = parseFloat(prompt("Digite o valor das compras do cliente:"));

let desconto = 0;

if (!isNaN(valorCompras)) {
  if (sexoCliente === 'M') {
    desconto = 0.05; // 5% discount for men
  } else if (sexoCliente === 'F') {
    desconto = 0.13; // 13% discount for women
  } else {
    document.write("Sexo inválido! Digite 'M' para masculino ou 'F' para feminino.");
  }

  const valorComDesconto = valorCompras - (valorCompras * desconto);

  document.write(`<p>Cliente: ${nomeCliente}</p>`);
  document.write(`<p>Sexo: ${sexoCliente}</p>`);
  document.write(`<p>Valor das compras: R$ ${valorCompras.toFixed(2)}</p>`);
  document.write(`<p>Desconto: ${desconto * 100}%</p>`);
  document.write(`<p>Valor com desconto: R$ ${valorComDesconto.toFixed(2)}</p>`);
} else {
  document.write("Entrada inválida! Certifique-se de que o valor das compras é um número.");
}