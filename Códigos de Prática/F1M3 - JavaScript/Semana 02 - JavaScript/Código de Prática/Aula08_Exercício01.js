const prompt = require('prompt-sync')();

var numero1 = parseInt(prompt("Digite aqui o primeiro número: "));
var numero2 = parseInt(prompt("Digite aqui o segundo número: "));

if (numero1 > 0 && numero2 > 0) {
    if (numero1 % 2 == 0 && numero2 % 2 == 0) {
        console.log("Os dois números são pares");
    } else if (numero1 % 2 == 1 && numero2 % 2 == 1) {
        console.log("Os dois números são ímpares");
    } else {
        console.log("Um par e um ímpar");
    }

} else {
    console.log("Existe pelo menos um número 0 ou negativo!");
}


