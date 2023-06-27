(function () {
  "use strict";

  var forms = document.querySelectorAll(".needs-validation");

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          form.classList.add("was-validated");
        } else {
          inserirContato();
          form.classList.remove("was-validated");
          form.reset();
        }
        event.preventDefault();
        event.stopPropagation();
      },
      false
    );
  });
})();
//trecho que código acima serve para validação dos dados, pode ser copiado da documentação do bootstrap na seção validação


function getLocalStorage() {
  return JSON.parse(localStorage.getItem("bd_contatos")) ?? [];
}
//função para acessar os dados do local storage
// ?? [] serve para retornar um array vazio caso não exista dados no local storage
// JSON.parse é para analisar e construir um valor ou objeto js, para que possamos trabalhar em js mais facilmente

function setLocalStorage(bd_contatos) {
  localStorage.setItem("bd_contatos", JSON.stringify(bd_contatos));
}
//função para armazenar ou inserir dados no local storage


function atualizarTabela() {
  limparTabela(); //função para limpar os dados antigos&repetidos
  const bd_contatos = getLocalStorage(); //variável para acessar a função getLocalStorage (que irá buscar dados no local storage e converter em array) e armazenar seus dados. 
  let index = 0;
  for (contato of bd_contatos) {
    const novaLinha = document.createElement("tr"); //determina a crciação de uma nova linha
    novaLinha.innerHTML = `
        <th scope="row">${index}</th>
        <td>${contato.nome}</td>
        <td>${contato.telefone}</td>
        <td>
            <button type="button" class="btn btn-danger" id="${index}" onclick="excluirContato(${index})">Excluir</button> 
        </td>
    `; //determina o conteúdo dentro dessa nova linha
    document.querySelector("#tabelaContato>tbody").appendChild(novaLinha); //determina aonde essa linha irá ser adicionada
    index++;
  } // um for para inserir novas linhas na tabela a cada novo contato que for adicionado aos dados
}
//função para a execução ou visualização dos dados

function limparTabela() {
  var elemento = document.querySelector("#tabelaContato>tbody");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}//função que é chamada sempre que a tabela for atualizada para limpar os dados antigos&repetidos

function inserirContato() {
  const contato = {
    nome: document.getElementById("txtNome").value,
    telefone: document.getElementById("txtTelefone").value,
  }; //objeto baseado nos valores que serão inseridos no formulário
  const bd_contatos = getLocalStorage(); //acessar o banco de dados (para poder adicionar o objeto contato)
  bd_contatos.push(contato);//adicionando o obj contato ao banco de dados
  setLocalStorage(bd_contatos);//armazenando os dados no banco de dados
  atualizarTabela();//atualiza os dados para vizualizar na tabela
}//função para inserir novos contatos

function excluirContato(index) {
  const bd_contatos = getLocalStorage();//acessar os dados
  bd_contatos.splice(index, 1);//remove elemento, index indica o elemento e 1 a quantidade
  setLocalStorage(bd_contatos);//reflete essa alteração nos dados
  atualizarTabela();//atualiza os dados para vizualizar na tabela
}//função para excluir contato

atualizarTabela(); //inicializa a função de atualizar a tabela
