//declarar uma string
var string = 'Essa é uma string';
//medir seu comprimento
console.log(string.length);
//retornar um caractere específico
console.log(string[0]);
//retornar o último caractere
console.log(string[16]);
//ou
console.log(string[string.length - 1]);
//tornar maiscula
console.log(string.toUpperCase());
//tornar minuscula
console.log(string.toLowerCase());
//substituir caracteres
console.log(string.replace['uma','minha']);
//retorna o valor booleano (verdade/falso)
if(string.endsWith('g')){
    console.log('Frase termina com a letra g');
}
if(string.startsWith('e')){
    console.log('Frase começa com a letra e');
}
if(string.includes('uma')){
    console.log('Frase possui a palavra uma');
}
//dividir uma string
console.log(string.split(' '));
//remove os espaços em branco das extremidades
console.log(string.trim());
console.log(string.trimEnd());
console.log(string.trimStart());

