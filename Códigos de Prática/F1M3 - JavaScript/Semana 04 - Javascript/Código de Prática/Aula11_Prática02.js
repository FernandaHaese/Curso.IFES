const prompt = require("prompt-sync")();

array01 = [];
array02 = [];
array03 = [];

console.log("Array 01")
for (i = 0; i <= 3; i++) {
  let num = parseInt(prompt("Digite um número (0 a 9): "));
  array01.push(num);
}

console.log("Array 02")
for (i = 0; i <= 3; i++) {
  let num = parseInt(prompt("Digite um número (0 a 9): "));
  array02.push(num);
}

for (i = 0; i <= 3; i++) {
    let soma = array01[i] + array02[i];
    array03.push(soma);
}

console.log(array03);


