const prompt = require("prompt-sync")();

array = [];
var media;
var soma = 0;

for (var i = 1; i <= 8; i++) {
    let num = parseInt(prompt("Digite um número: "));
    array.push(num);
    soma = soma + num;
}

media = soma / 8;
console.log("Média: ", media);

for (i = 0; i <= 7; i++) {
    if (array[i] > media) {
      console.log(array[i]);
    }
}

