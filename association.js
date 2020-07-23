const User = require("./model/User.model");
const Post = require("./model/Post.model");
const Message = require("./model/Message.model");
const Like = require("./model/Like.model");
const Comment = require("./model/Comment.model");
const Conversation = require("./model/Conversation.model");

User.hasMany(Post, {
  foreignKey: { allowNull: false },
});
Post.belongsTo(User);

User.hasMany(Comment, {
  foreignKey: { allowNull: false },
});
Comment.belongsTo(User);

User.hasMany(Like, {
  foreignKey: { allowNull: false },
});
Like.belongsTo(User);

Post.hasMany(Like, {
  foreignKey: { allowNull: false },
});
Like.belongsTo(Post, { foreignKey: { allowNull: false } });

Post.hasMany(Comment, { foreignKey: { allowNull: false } });
Comment.belongsTo(Post);

User.belongsToMany(Conversation, { through: Message }, { onDelete: "CASCADE" });
Conversation.belongsToMany(User, { through: Message });
