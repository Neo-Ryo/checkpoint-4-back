const Sequelize = require("sequelize");
const sequelizeInstance = require("../sequelize");

const Conversation = sequelizeInstance.define("Conversation", {
  uuid: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
});

module.exports = Conversation;
