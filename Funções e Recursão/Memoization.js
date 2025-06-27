// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.


function memoize(fn) {
    const cache = {};
    return function(...args) {
        const chave = JSON.stringify(args);

        if (cache.hasOwnProperty(chave)) {
            console.log("Retornando do cache:", chave);
            return cache[chave];
        }
        const resultado = fn(...args);
        cache[chave] = resultado;
        console.log("Calculando e armazenando no cache:", chave);
        return resultado;
    };
}
function soma(a, b) {
    console.log("Executando função...");
    return a + b;
}
const somaMemoizada = memoize(soma);
console.log(somaMemoizada(2, 3));
console.log(somaMemoizada(2, 3));
console.log(somaMemoizada(4, 5));
console.log(somaMemoizada(4, 5));