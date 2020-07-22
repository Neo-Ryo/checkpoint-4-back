const Sequelize = require("sequelize");
const sequelizeInstance = require("../sequelize");

const Like = sequelizeInstance.define("Like", {
  uuid: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
});

module.exports = Like;
