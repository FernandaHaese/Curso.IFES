const prompt = require("prompt-sync")();

var n = parseInt(prompt("Digite o valor de n: ")); // solicitação do número
var soma = 0; // inicialização da soma dos divisores
var perft = 0; // inicialização da contagem de números perfeitos

while (perft < 3) {
  n++;
  soma = 0;
  for (let j = 1; j <= n - 1; j++) {
    if (n % j == 0) {
      soma = soma + j;
    } // encontrando os divisores de n
  }

  if (soma == n) {
    console.log(n + " é um número perfeito");
    perft++;
  }  // checaquem se o número é perfeito
}
