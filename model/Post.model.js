const Sequelize = require("sequelize");
const sequelizeInstance = require("../sequelize");

const Post = sequelizeInstance.define("Post", {
  uuid: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  title: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  text: {
    type: Sequelize.STRING(1000),
    allowNull: false,
  },
  picture: {
    type: Sequelize.STRING(250),
    allowNull: true,
  },
});

module.exports = Post;
