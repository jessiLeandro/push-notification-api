const Sequelize = require("sequelize");

module.exports = sequelize => {
  const test2 = sequelize.define("test2", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },

    name: {
      type: Sequelize.STRING
    }
  });
  return test2;
};
