//Importando o sqlite
const sqlite3 = require("sqlite3").verbose();
//Acessar o banco de dados
const db = new sqlite3.Database(
  "arquivo.sqlite",
  //Criar uma função de retorno em caso de erros
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Conectado com sucesso!");
    //Criar as tabelas e seus atributos
    db.run(
      "CREATE TABLE setor(idsetor int, nome warchair(40),ramal varchal(4), e_mail varchar(30))"
    );
    db.run(
      "CREATE TABLE funcionario(matricula int primary key, idsetor int not null, nome varchar(40), nascimento date, telefone varchar(15))"
    );
  }
);

//Inserir valores dentro das tabelas
db.run(
  "INSERT into setor(idsetor,nome,ramal,e_mail) values (1, 'FINANCEIRO', '4254', 'FINANCEIRO@EMPRESA.COM')"
);
db.run(
  "INSERT into setor(idsetor,nome,ramal,e_mail) values (2, 'PORTARIA', '4253', 'PORTARIA@EMPRESA.COM')"
);
db.run(
  "INSERT into setor(idsetor,nome,ramal,e_mail) values (3, 'SECRETARIA', '4237', 'SECRETARIA@EMPRESA.COM')"
);

db.run(
  "INSERT into funcionario(matricula,idsetor,nome,nascimento,telefone) values (1234, 1, 'ANA', '12-04-1978', '01219219')"
);
db.run(
  "INSERT into funcionario(matricula,idsetor,nome,nascimento,telefone) values (1235, 3, 'IVO', '01-12-2000', '07280921')"
);
db.run(
  "INSERT into funcionario(matricula,idsetor,nome,nascimento,telefone) values (1236, 2, 'OTO', '07-02-1987', '06924324')"
);

//Agora vamos consultar o banco de dados
db.each("select matricula, nome from funcionario",(err,row)=>{
if(err){
    console.error(err.message);
} console.log(row.matricula + "\t" + row.nome);
})

//Obs: Lembrar de comentar cada seção após executa-lá, para evitar duplicidade de dados.
