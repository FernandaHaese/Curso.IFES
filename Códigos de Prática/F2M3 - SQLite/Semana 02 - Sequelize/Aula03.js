//ATENÇÃO NÃO ESQUEÇA DE INSTALAR AS BIBLIOTECAS SQLITE3 E SEQUELIZE
//comando de instalação
// npm install sqlite3 sequelize

// Importando as biliotecas
const { Sequelize, Model, DataTypes } = require("sequelize");

//Abrindo conexão com o Banco de dados ou criando um novo caso não exista
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "empresa.sqlite",
});

//Criar a tabela setor
class Setor extends Model {
  static init(sequelize) {
    super.init(
      {
        idsetor: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        nome: {
          type: DataTypes.STRING(40),
          allowNull: false,
        },
        ramal: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(30),
        },
      },
      { sequelize, modelname: "setor", tablename: "setores" }
    );
  }
}

//Inicializando o modelo create table da tabela Setor
Setor.init(sequelize);

//Criando a tabela funcionário
class Funcionario extends Model {
  static init(sequelize) {
    super.init(
      {
        matricula: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        idsetor: {
          type: DataTypes.INTEGER,
          references: {
            model: Setor,
            key: "idsetor",
          },
        },
        nome: {
          type: DataTypes.STRING(40),
          allowNull: false,
        },
        nascimento: {
          type: DataTypes.DATE,
        },
        telefone: {
          type: DataTypes.STRING(15),
        },
      },
      { sequelize, modelname: "funcionario", tablename: "funcionarios" }
    );
  }
}

//Inicializando o modelo create table da tabela Funcionario
Funcionario.init(sequelize);

//Sincronismo para atualização automática do bd
(async () => {
  await sequelize.sync({ force: true });
  //Adicionar objetos
  const setor_create_F = await Setor.create({
    nome: "Financeiro",
    ramal: "2134",
    email: "financeiro@empresa.com",
  });
  const setor_create_S = await Setor.create({
    nome: "Secretaria",
    ramal: "2135",
    email: "secretaria@empresa.com",
  });
  const setor_create_P = await Setor.create({
    nome: "Portaria",
    ramal: "2136",
    email: "portaria@empresa.com",
  });
  //Listar objetos
  const setores_listar = await Setor.findAll();
  console.log(
    "Lista de setores: \n",
    JSON.stringify(setores_listar, null, 2),
    "\n\n"
    //Obs: No lugar do valor null, também é possível especificar um campo entre []
  );
  //Atualizar a tabela
  const setor_chave = await Setor.findByPk(3);
  setor_chave.nome = "Estoque";
  const resultado = await setor_chave.save();
  console.log(resultado);
  //Vizualizar os resultados atualizados
  setores_update = await Setor.findAll();
  console.log(
    "\nLista de setores atualizada: \n",
    JSON.stringify(setores_update, null, 2),
    "\n\n"
  );
  //Excluir objetos
  const setor_delete = await Setor.findByPk(1);
  setor_delete.destroy();
  //Vizualizar os resultados após exclusão
  const setores_exclusao = await Setor.findAll();
  console.log("Lista de setores após a exclusão: \n",
  JSON.stringify(setores_exclusao, null, 2), "\n\n");
  })();

