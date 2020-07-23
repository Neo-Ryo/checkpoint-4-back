const express = require("express");
const Like = require("../model/Like.model");
const User = require("../model/User.model");
const Comment = require("../model/Comment.model");

const post = express.Router();

const regExIntChck = require("../middleware/regexCheck");
const { uuidv4RegExp } = require("../middleware/regexCheck");

const Post = require("../model/Post.model");

post.get("/", async (req, res) => {
  try {
    const post = await Post.findAll({
      include: [
        {
          model: User,
          attributes: { exclude: ["password"] },
        },
        {
          model: Comment,
        },
      ],
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json(error);
  }
});

post.get("/:uuid", regExIntChck(uuidv4RegExp), async (req, res) => {
  const { uuid } = req.params;
  try {
    const post = await Post.findByPk(uuid, {
      include: [
        {
          model: User,
          attributes: { exclude: ["password"] },
        },
        {
          model: Comment,
        },
      ],
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json(error);
  }
});

post.post("/:UserUuid", async (req, res) => {
  const { UserUuid } = req.params;
  const { title, text, picture } = req.body;
  try {
    const post = await Post.create({
      title,
      text,
      picture,
      UserUuid,
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json(error);
  }
});

post.delete("/:uuid", regExIntChck(uuidv4RegExp), async (req, res) => {
  const { uuid } = req.params;
  try {
    const post = await Post.destroy({ where: { uuid } });
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = post;
