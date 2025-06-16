// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

let produtos = [
    {nome: "idratante", preco: 1.23},
    {nome: "mouse", preco: 200},
    {nome: "tangerina", preco: 123.5},
    {nome: "tatuagem falsa", preco: 12.78}
]
function ordenar(produtos) {
    const ordenados = produtos.sort((a,b)=> a.preco - b.preco)
    .map(p => p.nome)
    return ordenados;
}
console.log(ordenar(produtos))