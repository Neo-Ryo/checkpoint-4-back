const Sequelize = require("sequelize");
const sequelizeInstance = require("../sequelize");

const Comment = sequelizeInstance.define("Comment", {
  uuid: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  content: {
    type: Sequelize.STRING(500),
    allowNull: false,
  },
});

module.exports = Comment;
