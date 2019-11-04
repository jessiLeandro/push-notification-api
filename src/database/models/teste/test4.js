const Sequelize = require("sequelize");

module.exports = sequelize => {
  const test4 = sequelize.define("test4", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },

    name: {
      type: Sequelize.STRING
    }
  });
  return test4;
};
