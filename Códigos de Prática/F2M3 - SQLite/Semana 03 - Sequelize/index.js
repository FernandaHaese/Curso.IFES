//Importando as bibliotecas e arquivos
const database = require('./db');
const Cliente = require('./models/cliente');

///Criando o servidor
const express = require("express");
const app = express();
const porta = 9443;
const bodyParser = require ('body-parser');

// Setar os valores da view e engine
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

//Converter os dados do formulário
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

//Definindo rotas
app.get("/", (req, res) => {
  res.send("Bem vindo ao cadastro de clientes.");
});
  //Rota do formulário
app.get("/cadcliente", function (req, res) {
  res.render("formCliente");
});
 //Receber os dados do bd
app.post("/addcliente", function (req, res) {
  Cliente.create({
    nome: req.body.nome,
    nascimento: req.body.nascimento,
    cidade: req.body.cidade,
    telefone: req.body.telefone,
  }).then(function () {
    res.send("Cliente cadastrado com sucesso!");
  });
});

//Checagem de funcionamento do servidor
app.listen(porta, () => {
  console.log("Servidor rodando");
});

//Sincronismo entre o banco de dados e a tabela (model)
(async () => {
  try {
    const resultado = await database.sync();
    console.log(resultado);
    const clientes = await Cliente.findAll();
    onsole.log("Lista de Clientes \n", clientes);
  } catch (error) {
    console.log(error);
  }
})();
