//Criando rotas no Servidor Web com URL

//Definindo as constantes
const http = require('http');
const porta = 443;
const url = require('url');

//Criando um Servirdor Web com http
const servidor = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.write(req.url)
    //Determinar os parâmetros
    const parametro = url.parse(req.url, true).query
    res.write('<br>' + parametro.nome)
    res.write('<br>' + parametro.sobrenome);
    res.write('<br>' + parametro.cidade);
    res.end()
});

//Checagem do funcionamento do servidor
servidor.listen(porta, ()=> {console.log('Servidor rodando.')})