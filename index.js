const express = require("express");
const cors = require("cors");

const sequelize = require("./sequelize");
require("./association");
const user = require("./routes/user.route");
const post = require("./routes/post.route");
// const conversation = require("./routes/conversation.route");
const like = require("./routes/like.route");
const comment = require("./routes/comment.route");

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.use("/users", user);
app.use("/posts", post);
app.use("/likes", like);
// app.use("/conversation", conversation);
app.use("/comments", comment);

app.get("/", function (req, res) {
  res.send("Welcome on BUSHIDO API");
});

async function main() {
  try {
    await sequelize.sync({ alter: true });
    await sequelize.authenticate();
    console.log("You've reached bushido DB !");
    app.listen(PORT, (err) => {
      console.log(`Server is runin on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log("Unable to join DB", err.message);
  }
}

main();
