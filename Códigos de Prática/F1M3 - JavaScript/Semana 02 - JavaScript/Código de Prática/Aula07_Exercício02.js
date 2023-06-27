const prompt = require('prompt-sync')();

var nome = prompt("Digite seu nome: ");
var valortotal = parseFloat(prompt("Digite o valor total de sua compra: "));


if (valortotal < 1000) {
    var desconto = valortotal * 0.05;
} else if (valortotal <= 5000) {
    var desconto = valortotal * 0.10;
} else {
    var desconto = valortotal * 0.15;
} 

console.log("Nome: ", nome)
console.log("Valor de desconto: ", desconto)