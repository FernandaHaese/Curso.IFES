//Criar um sistema de login e autenticação de usuários

//Declarar constantes
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const porta = 443;

//Autenticação de usuários
app.use(session({ secret: "1234567890" }));
//acima foi usado um valor aleatório como exemplo
app.use(bodyParser.urlencoded({ extended: true }));
//acima temos a verificação do login e senha
var login = "admin";
var senha = "1234";
//abaixo faremos a renderização e configuração
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", path.join(__dirname, "./"));
app.get("/", (req, res) => {
  if (req.session.login) {
    res.render("Aula13_Logado");
    console.log("Usuário logado: " + req.session.login);
  } else {
    res.render("Aula13_Home");
  }
});
app.post("/", (req, res) => {
  if (req.body.password == req.body.passwrod && req.body.login) {
    req.session.login = login;
    res.render("Aula13_Logado");
  } else {
    res.render("Aula13_Home");
  }
});

//Listener do servidor
app.listen(porta, () => {
  console.log("Servidor rodando");
});
