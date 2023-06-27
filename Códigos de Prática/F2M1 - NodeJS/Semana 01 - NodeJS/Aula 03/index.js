const prompt = require('prompt-sync')();
const calculadora = require('./calculadora.js')

var num1 = Number(prompt('Digite um número: '));
var num2 = Number(prompt("Digite um número: "));

console.log('A soma entre ' + num1 + ' e ' + num2 + ' é: ', calculadora.add(num1, num2));

console.log(
  "A subtração entre " + num1 + " e " + num2 + " é: ",
  calculadora.sub(num1, num2)
);

console.log(
  "A multiplicação entre " + num1 + " e " + num2 + " é: ",
  calculadora.mult(num1, num2)
);

console.log(
  "A divisão entre " + num1 + " e " + num2 + " é: ",
  calculadora.div(num1, num2)
);
