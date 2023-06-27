const prompt = require("prompt-sync")();

var maior = 0; // variável para inicializar a determinação do maior entre os números

do {
  var n = parseInt(prompt("Digite um número: "));
  if (n > maior) {
    maior = n;
  } // para conferir se o número é maior e atualizar quem é o maior
} while (n != 0); // para continuar a calcular enquanto o número for diferente que zero

console.log ("O maior valor: ", maior);