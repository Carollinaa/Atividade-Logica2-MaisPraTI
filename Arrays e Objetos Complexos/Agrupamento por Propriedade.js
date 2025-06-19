// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

let vendas = [
  { cliente: 'Ana', total: 100 },
  { cliente: 'Ana', total: 50 },
  { cliente: 'Valquiria', total: 200 },
  { cliente: 'Jasmine', total: 80 },
  { cliente: 'Tuti', total: 70 },
  { cliente: 'Frankistai', total: 4.55}
]


const totaisPorCliente = vendas.reduce((acumulador, venda) => {
  const { cliente, total } = venda;

  if (acumulador[cliente]) {
    acumulador[cliente] += total;
  } else {
    acumulador[cliente] = total;
  }

  return acumulador;
}, {});

console.log(totaisPorCliente);