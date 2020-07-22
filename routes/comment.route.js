const express = require("express");

const comment = express.Router();

const regExIntChck = require("../middleware/regexCheck");
const { uuidv4RegExp } = require("../middleware/regexCheck");

const Comment = require("../model/Comment.model");

comment.get("/:PostUuid", async (req, res) => {
  const { PostUuid } = req.params;
  try {
    const comment = await Comment.findAll({ where: { PostUuid } });
    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json(error);
  }
});

comment.post("/:PostUuid/user/:UserUuid", async (req, res) => {
  const { PostUuid, UserUuid } = req.params;
  const { content } = req.body;
  try {
    const comment = await Comment.create(
      {
        content,
        UserUuid,
        PostUuid,
      },
      { where: { PostUuid } }
    );
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = comment;
