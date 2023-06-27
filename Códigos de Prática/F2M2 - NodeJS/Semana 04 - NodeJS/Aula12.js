//Como enviar email em um servidor web, com o módulo nodemailer

//Declarar as constantes
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const porta = 443;

//Criando as rotas
app.get("/", (req, res) => {
  res.send("Enviando e-mail com o nodemailer.");
});

app.get("/sendemail", async (req, res) => {
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ac053b7ca13ddd",
      pass: "9f6ae82ca0b683",
    },
  });
});

var message = {
  from: "noreplay@reprogramese.com",
  to: "reprogramese@reprogramse.com",
  subject: "Instrução para recuperar a senha",
  text: "Leonardo. \n\n Você soliciou alteração de senha. \n\n Equipe Reprograme-se",
  html: "Prezado Leonardo, <br><br> Você solicitou alteração de senha <br><br> Equipe Reprograme-se.",
};

//Tratamento de erros
transport.sendMail(message, function (err) {
  if (err)
    return res.status(400).json({
      erro: true,
      mensagem: "Erro: Email não enviado!",
    });
  else
    return res.json({
      erro: false,
      mensagem: "Email enviado com sucesso!",
    });
});

//Listener do servidor
app.listen(porta, () => {
  console.log("Servidor rodando");
});
