//requisição ao módulo http
const http = require('http')
//definir a porta 443 para https
const porta = 443
//função para criar um servidor
const servidor = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Primeiro Servidor Node');
    res.end();
})
//Checagem de funcionamento padrão do servidor
servidor.listen(porta, () => {
    console.log('Servidor rodando')})