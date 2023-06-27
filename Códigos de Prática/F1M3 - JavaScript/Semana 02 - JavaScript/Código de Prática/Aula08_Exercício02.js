const prompt = require('prompt-sync')();

var angulo1 = parseFloat(prompt("Digite o valor do ângulo 1: "));
var angulo2 = parseFloat(prompt("Digite o valor do ângulo 2: "));
var angulo3 = parseFloat(prompt("Digite o valor do ângulo 3: "));

if ( angulo1 + angulo2 + angulo3 == 180) {
    if (angulo1 < 90 && angulo2 < 90 && angulo3 < 90) {
        console.log("Triângulo Acutângulo!");
    } else if (angulo1 == 90 || angulo2 == 90 || angulo3 == 90) {
        console.log("Triângulo Retângulo!");
    } else {
        console.log("Triângulo Obstusângulo!");
    }
} else {
    console.log("Não é um triângulo!");
}