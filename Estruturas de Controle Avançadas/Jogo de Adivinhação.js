// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

var prompt = require('prompt-sync')();

const numAleatorio = (Math.floor(Math.random() * 100) + 1);

let chutes = -1;
let tentativas = 0;

while (true) {
    tentativas++;
    chutes = Number(prompt(`Tentativa número ${tentativas}. Digite um número entre 1 a 100: `));
    if (chutes == numAleatorio) {
        break;
    }
    console.log(numAleatorio)

    if (chutes > numAleatorio) {
        console.log(`Errou, o número sorteado é menor que ${chutes}`);
    }else{
        console.log(`Errou, o número sorteado é maior que ${chutes}`);
    }
}
console.log(`Você acertou em ${tentativas} tentativas, e o número sorteado foi ${numAleatorio}`);