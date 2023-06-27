const fs = require('fs');
fs.readFile('./Aula08/Aula08Exemplo.json', 'utf-8', (err, data) => {
    const json = JSON.parse(data);
    console.log(json.estados[0].nome);
})