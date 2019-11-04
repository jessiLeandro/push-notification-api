const Sequelize = require("sequelize");

module.exports = sequelize => {
  const teste = sequelize.define("teste", {
    id: {
      type: Sequelize.INTEGER,
      defaultValue: Sequelize.INTEGER,
      primaryKey: true
    },

    name: {
      type: Sequelize.STRING
    }
  });
  return teste;
};
