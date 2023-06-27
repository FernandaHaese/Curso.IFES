const prompt = require('prompt-sync')();

var nome = prompt('Digite o seu nome: ');
var idade = prompt('Digite a sua idade: ');

if(idade > 18){
    console.log(nome + ' é maior de idade');
}else{
    console.log(nome + ' é menor de idade');
}