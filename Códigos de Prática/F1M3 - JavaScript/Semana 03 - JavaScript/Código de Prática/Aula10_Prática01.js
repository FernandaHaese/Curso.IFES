
const prompt = require("prompt-sync")();

var n = parseInt(prompt("Digite o valor de n: ")) // solicitação do número
var div = 0; // inicialização dos divisores
var qtd = 0; // inicialização da contagem dos números primos

for (let i = 1; i <= n; i++) {
  div = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) {
      div++;
    } // verificação dos divisores de i
  }
  if (div == 2) {
    qtd++;
  } // contagem dos números primos
}

console.log ("A quantidade de números primos: " + qtd);