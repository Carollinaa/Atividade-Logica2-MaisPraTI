// Escreva duas funções:
// ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.

const pares = [
    ["moradia", "apartamento"], ["produto", "brinquedo"], ["nome", "Marcondez"]
]
const objeto = {
    animal: 'humano',
    carro: 'toyota',
    pedra: 'ruby'
}

function paresParaObjeto(pares) {
    return Object.fromEntries(pares)
}

function objetoParaPares(objeto) {
    return Object.entries(objeto)
}

console.log(paresParaObjeto(pares))
console.log(objetoParaPares(objeto))