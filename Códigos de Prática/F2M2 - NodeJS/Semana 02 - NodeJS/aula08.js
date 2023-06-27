//Acessando o módulo Http e definindo a Porta
const http = require("http");
const porta = 443;

//Criar o servidor
const servidor = http.createServer((req, res) => {
    //criando o conteúdo
  res.writeHead(200, { "Content-Type": "text/html" });
  //definindo as requisições ou rotas
  if (req.url == "/") {
    res.write("<h1>Seja bem-vindo</h1>");
  } else if (req.url == "/server") {
    res.write("<h1>Server</h1>");
  } else if (req.url == "/server/node") {
    res.write("<h1>Server Web no Node </h1>");
  } else {
    res.write("<h1>PADRAO</h1>");
  }
  res.end();
});

//Checagem do funcionamento do servidor
servidor.listen(porta, () => {
  console.log("servidor rodando");
});
