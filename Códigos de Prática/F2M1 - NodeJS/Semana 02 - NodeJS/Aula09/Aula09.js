//importar um arquivo json
const fs = require('fs');
//criar um arquivo json
//fs.writeFile('./Aula09.json','{"nome":"Fernanda"}', (erro) => {
    if(erro){
        return console.log('Ocorreu um erro.');
    }
    console.log('Arquivo criado com sucesso.');
//});

//leitura do arquivo json
var data = fs.readFileSync('./Aula09/Aula09.json', 'utf-8');
console.log(data);
//transformar arquivo json em objeto js
var arquivo = JSON.parse(data);
console.log(arquivo);
//adicionar um valor no array js
var pessoas = arquivo.pessoas;
pessoas.push({nome : 'Marcelo', idade: '41'});
console.log(pessoas);
//armazenar no arquivo, transformar objeto js em json
arquivo = JSON.stringify({pessoas: pessoas});
//atualizar arquivo json
fs.writeFile('./Aula09/Aula09.json', arquivo, (err) => {
    
    if(err){
        return console.log('Ocorreu um erro.');
    }
    
    console.log('Arquivo atualizado com sucesso.');
})
