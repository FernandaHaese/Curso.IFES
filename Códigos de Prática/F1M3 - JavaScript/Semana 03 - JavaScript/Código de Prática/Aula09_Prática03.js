const prompt = require("prompt-sync")();

var soma = 0; // inicialização da soma

do {
  var n = parseInt(prompt("Digite um número: "));
  var opcao = prompt("Deseja continuar (s/n)?");
  soma = soma + n; // para fazer uma soma acumulada
} while (opcao == "s" || opcao == "S");

console.log("Soma: ", soma); // comando no final de execução do algoritmo para mostrar apenas a soma final, e não cada soma feita