const Sequelize = require("sequelize");

module.exports = sequelize => {
  const test3 = sequelize.define("test3", {
    id: {
      type: Sequelize.INTEGER,
      defaultValue: Sequelize.INTEGER,
      primaryKey: true
    },

    name: {
      type: Sequelize.STRING
    }
  });
  return test3;
};
