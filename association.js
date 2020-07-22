const User = require("./model/User.model");
const Post = require("./model/Post.model");
const Message = require("./model/Message.model");
const Like = require("./model/Like.model");
const Comment = require("./model/Comment.model");
const Conversation = require("./model/Conversation.model");

User.hasMany(Post, {
  foreignKey: { allowNull: false },
  as: "Post",
});
User.hasMany(Message, {
  foreignKey: { allowNull: false },
  as: "Message",
});
User.hasMany(Comment, {
  foreignKey: { allowNull: false },
  as: "Comment",
});
User.hasMany(Like, {
  foreignKey: { allowNull: false },
  as: "Like",
});
// User.hasMany(Conversation, {
//   foreignKey: { allowNull: false },
//   as: "Conversation",
// });
Post.belongsTo(User, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});
Post.hasMany(Like, {
  foreignKey: { allowNull: false },
  as: "Like",
});
Like.belongsTo(User, { foreignKey: { allowNull: false }, as: "User" });
Like.belongsTo(Post, { foreignKey: { allowNull: false }, as: "Post" });
Post.hasMany(Comment, { foreignKey: { allowNull: false }, as: "Comment" });
Comment.belongsTo(Post, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});
Comment.belongsTo(User, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});
Message.belongsTo(User, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});
// Conversation.belongsToMany(User, { through: Message });
