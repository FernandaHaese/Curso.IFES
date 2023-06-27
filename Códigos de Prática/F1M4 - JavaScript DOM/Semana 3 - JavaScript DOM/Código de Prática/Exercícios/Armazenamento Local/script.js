const contato1 = {
  nome: "Rafael",
  telefone: "(11)11111-1111",
};

const contato2 = {
  nome: "João",
  telefone: "(22)22222-2222",
};

const bd_contatos = [contato1, contato2];

//criamos contatos e um objeto js para salvar em formato json para o JS

localStorage.setItem("bd_contatos", JSON.stringify(bd_contatos));
// armazenando um dado no armazenamento local, usando a biblioteca json

const contatos = JSON.parse(localStorage.getItem("bd_contatos"));
// buscando um dado no armazenamento local, idem

for (let c of contatos) {
  document.write("<p>" + c.nome);
  document.write("<p>" + c.telefone);
}
