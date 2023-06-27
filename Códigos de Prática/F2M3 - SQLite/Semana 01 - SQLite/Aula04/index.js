//Importando as bibliotecas que serão utilizadas
const { Sequelize, Model, DataTypes } = require("sequelize");
//Abrindo uma conexão
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "Empresa.sqlite",
});
//Habilitando sincronização automática
(async () => {
  await sequelize.sync({ force: true });
})();
