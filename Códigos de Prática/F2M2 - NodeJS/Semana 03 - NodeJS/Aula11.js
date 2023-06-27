//Envio de arquivos no servidor web com o módulo Formidable

//Declarando as constantes
const http = require("http");
const porta = 443;
const formidavel = require("formidable");
const fs = require("fs");

//Criando o servidor e determinando as respostas
const servidor = http.createServer((req, res) => {
  if (req.url != "/enviodearquivo") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      '<form action = "enviodearquivo"method = "post" enctype = "multipat/form-data">'
    );
    res.write('<input type = "file" name = "filetoupload"></br>');
    res.write('<input type = "submit" value = "Enviar">');
    res.write("<form>");
    return res.end();
  } else {
    const form = new formidavel.IncomingForm();
    form.parse(req, (erro, campos, arquivos) => {
      const urlAntiga = arquivos.filetoupload.filepath;
      const urlNova =
        "./enviodearquivo/" + arquivos.filetoupload.originalFilename;
      var rawData = fs.readFileSync(urlAntiga);
      fs.writeFile(urlNova, rawData, function (err) {
        if (err) console.log(err);
        res.write("Arquivo enviado com sucesso!");
        res.end();
      });
    });
  }
});

//Checagem do funcionamento do servidor
servidor.listen(porta, () => {
  console.log("Servidor rodando.");
});

async function readFileByLine(file) {
  const fileStream = fs.createReadStream(file);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  for await (const line of rl) {
    console.log(line);
  }
}

readFileByLine("texte.txt");
