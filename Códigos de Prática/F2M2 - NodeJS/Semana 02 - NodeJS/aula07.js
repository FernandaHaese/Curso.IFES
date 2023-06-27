//Acessando o módulo Express e definindo a Porta
const express = require("express");
const app = express();
const porta = 443;

//Definindo as requisições e respostas 
app.get("/contato", function (req, res) {
  res.send("Contato");
});

app.get("/sobre", function (req, res) {
  res.send("Sobre");
});

//Abrir o arquivo html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/aula07.html");
});

//Checagem de funcionamento do servidor
app.listen(porta, () => {
  console.log("Servidor Rodando");
});
