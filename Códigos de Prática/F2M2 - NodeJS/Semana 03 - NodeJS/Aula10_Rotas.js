//Criando rotas no Servidor Web com o framework express

//Definindo as constantes
const express = require('express');
const rotas = express.Router

//Criar uma varíavel do tipo Json, como um banco de dados com as informações
let municipios = [
  { 'cidade': 'vitoria', 'info': 'Vitória: Capital do ES'},
  { 'cidade': 'vilavelha', 'info': 'Vila Velha: Canela Verde'},
  { 'cidade': 'cachoeiro', 'info': 'Cachoeiro de Itapemirim: Princesa do Sul'},
  { 'cidade': 'colatina', 'info': 'Colatina: Princesa do Norte'}
]

//Definindo as requisições e respostas
rotas.get('/', (req, res) => {
    res.json({Olá: 'Seja bem-vindo!'})
    //criando as requisições
    const cidade = req.params.cidadeid
    const cidadeinfo = municipios.find(i => i.cidade == cidade)
    //definindo a resposta
    if (!cidadeinfo) {
        res.status(404).json(
            {erro: 'Cidade não encontrada!', cidadepesquisada: cidade}
        )
    } else {
        res.status(200),json(cidadeinfo)
    }
})

//Enviar as informações do arquivo para o Index.js
module.exports = rotas
