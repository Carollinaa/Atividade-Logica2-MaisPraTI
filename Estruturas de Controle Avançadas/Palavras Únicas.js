//Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
//todas as palavras únicas e exibi-las em um array.

function remover(texto) {
  const regex = /[a-zA-ZÀ-ÿ0-9_]+/g;
  const palavras = [];
  const resultado = [];

  let match;
  while ((match = regex.exec(texto)) !== null) {
    palavras.push(match[0].toLowerCase());
  }

  for (let i = 0; i < palavras.length; i++) {
    const palavra = palavras[i];
    let jaExiste = false;

    for (let j = 0; j < resultado.length; j++) {
      if (resultado[j] === palavra) {
        jaExiste = true;
        break;
      }
    }

    if (!jaExiste) {
      resultado.push(palavra);
    }
  }

  return resultado;
}

const texto = "temos muito tempo temos todo tempo do mundo";
const semRepeticao = remover(texto).join(" ");
console.log(semRepeticao);