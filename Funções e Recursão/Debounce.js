// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

function debounce(fn, delay) { 
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(this,args); 
        }, delay);
    };
}

function enviarBusca(termo) {
    console.log("procurando:", termo);
}

const buscar = debounce(enviarBusca, 1000);

buscar("c");
buscar("ca");
buscar("car");
buscar("caro");
buscar("carol");
buscar("caroli");
buscar("carolin");
buscar("carolina");