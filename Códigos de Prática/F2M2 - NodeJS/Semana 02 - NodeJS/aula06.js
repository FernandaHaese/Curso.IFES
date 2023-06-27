//Acessando o módulo Express
const express = require("express");
const app = express();
const porta = 443;

//Definindo uma resposta
app.get("/", (req, res) => {
  res.send("Bem-vindo ao Servidor Web utilizando Express !");
});

//Checagem de funcionamento do servidor
app.listen(porta, () => {
  console.log("Servidor Rodando");
});
