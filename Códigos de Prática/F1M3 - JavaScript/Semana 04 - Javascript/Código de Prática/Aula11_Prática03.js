const prompt = require("prompt-sync")();

array01 = [];
array02 = [];
array03 = [];

console.log("Array 01");
for (i = 0; i < 5; i++) {
  let num = parseInt(prompt("Digite um número: "));
  array01.push(num);
}

console.log("Array 02");
for (i = 0; i < 5; i++) {
  let num = parseInt(prompt("Digite um número: "));
  array02.push(num);
}

for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
        if (array01[i] == array02[j]) {
            array03.push(i); //tanto faz colocar o valor i ou j, pois são iguais
        }
    }
}

console.log(array03);
