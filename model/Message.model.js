const Sequelize = require("sequelize");
const sequelizeInstance = require("../sequelize");

const Message = sequelizeInstance.define("Message", {
  uuid: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Message;
