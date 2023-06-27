//Programação assíncrona
//Método Promise

function cadastrarUsuario(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //Aqui estaria a lógica de cadastro
            var erro = false;
            if(!erro){
                resolve('Sucesso.');
            } else {
                reject('Ocorreu um erro.');
            }
        }, 2000);
    });
}
cadastrarUsuario()
//quando ocorrer o valor resolve
.then((mensagem) => {
    console.log(mensagem);
})
//quando ocorrer o valor reject
.catch((mensagem)=> {
    console.log(mensagem);
});
