const prompt = require("prompt-sync")();

let array01 = [];

for (i = 0; i < 10; i++) {
  let num = parseFloat(prompt("Digite um número: "));
  array01.push(num);
}

for (i = 0; i < 10; i++) {
    let cont = 0;

    for (j = 0; j < 10; j++) {
        if (array01[i] > array01[j]) {
            cont = cont + 1;
        }
    }

    console.log("Aluno " + i + ": maior que " + cont + " aluno(s)");
}
