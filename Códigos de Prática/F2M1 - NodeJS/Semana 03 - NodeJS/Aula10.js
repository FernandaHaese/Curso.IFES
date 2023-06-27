//Programação Assíncrona

//Exemplo de Função Assíncrona

setTimeout(() => {
    console.log('Espero 2 segundos e meio');
}, 2500);
console.log('Texto');

//Método Callback Exemplo 01
const prompt = require('prompt-sync');

function obterNome(callback){
    var nome = prompt('Entre com o seu nome: ');
    callback(nome);
}

obterNome((nome) => {
    console.log(nome);
});

//Método Callback Exemplo 02

function cadastrarUsuario(callback){
    setTimeout(() => {
        //Lógica de cadastro de usuário estaria aqui
        callback(new Error('Erro no registro do usuário.'));
    }, 2000);
}

cadastrarUsuario((erro) =>{
    if(erro){
        return console.log('Ocorreu um erro: '+ erro.message);
    }
    console.log('Usuário registrado com sucesso.')
});
