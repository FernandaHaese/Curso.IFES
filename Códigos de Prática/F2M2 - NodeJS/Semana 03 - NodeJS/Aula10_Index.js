//Criando rotas no Servidor Web com o framework express

//Definindo as constantes
const express = require('express');
const rotas = require('./rotas');
const porta = 443
const app = express();

//Criando as rotas com o Express
app.use('/', rotas);

//Checagem do funcionamento do servidor
servidor.listen(porta, ()=> {console.log('Servidor rodando.')})
