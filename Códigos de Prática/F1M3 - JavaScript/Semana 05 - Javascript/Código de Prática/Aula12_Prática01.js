function calcular_IMC(peso, altura) {
  let IMV;
  IMC = peso / (altura * altura);
  return IMC;
}

function verificar_situacao(IMC) {
  let codigo;
  if (IMC < 18.5) {
    codigo = 1;
  } else if (IMC <= 24.9) {
    codigo = 2;
  } else if (IMC <= 29.9) {
    codigo = 3;
  } else {
    codigo = 4;
  }
  return codigo;
}

function exibir_descricao(codigo) {
  if (codigo == 1) {
    console.log("Você está abaixo do peso ideal!");
  } else if (codigo == 2) {
    console.log("Parabéns! Você está em seu peso normal!");
  } else if (codigo == 3) {
    console.log("Você está acima do seu peso (sobrepeso)!");
  } else {
    console.log("Obesidade!");
  }
}

const prompt = require("prompt-sync")();

for (i = 0; i < 5; i++) {
  console.log("Pessoa " + i);
  let nome = prompt("Digite seu nome: ");
  let peso = parseFloat(prompt("Digite seu peso: "));
  let altura = parseFloat(prompt("Digite sua altura: "));

  let IMC = calcular_IMC(peso, altura);
  let codigo = verificar_situacao(IMC);
  exibir_descricao(codigo);
}
