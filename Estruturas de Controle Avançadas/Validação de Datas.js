// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

var prompt = require('prompt-sync')();

function ehDataValida(dia, mes, ano) {
  const diaInt = parseInt(dia, 10);
  const mesInt = parseInt(mes, 10) - 1;
  const anoInt = parseInt(ano, 10);

  const data = new Date(anoInt, mesInt, diaInt);

  if (
    data.getFullYear() !== anoInt ||
    data.getMonth() !== mesInt ||
    data.getDate() !== diaInt
  ) {
    return false;
  }

  return true;
}
const dia = prompt("Digite o dia: ");
const mes = prompt("Digite o mês: ");
const ano = prompt("Digite o ano: ");

if (ehDataValida(dia, mes, ano)) {
  console.log("A data é válida.");
} else {
  console.log("A data é inválida.");
}