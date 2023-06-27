//Programação Assíncrona

//Método async / await

function cadastrarUsuario() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //Aqui estaria a lógica de cadastro
      var erro = true;
      if (!erro) {
        resolve({time: 5, message: "Sucesso."});
      } else {
        reject();
      }
    }, 2000);
  });
}

/* cadastrarUsuario()
  //quando ocorrer o valor resolve
  .then((dados) => {
    console.log(dados.time);
    console.log(dados.message);
  })
  //quando ocorrer o valor reject
  .catch(() => {
    console.log();
    console.log('Ocorreu um erro ao registrar o usuário.');
  }); */

  //ao invés do trecho acima, utilizamos async e await abaixo

  async function main(){
    try{
        var dados = await cadastrarUsuario();
        console.log(dados);
    } catch {
        console.log('Ocorreu um erro ao registrar o usuário.');
    }
  }