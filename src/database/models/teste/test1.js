const Sequelize = require("sequelize");

module.exports = sequelize => {
  const test1 = sequelize.define("test1", {
    id: {
      type: Sequelize.INTEGER,
      defaultValue: Sequelize.INTEGER,
      primaryKey: true
    },

    name: {
      type: Sequelize.STRING
    }
  });
  return test1;
};
