const express = require("express");

const like = express.Router();

const regExIntChck = require("../middleware/regexCheck");
const { uuidv4RegExp } = require("../middleware/regexCheck");

const Like = require("../model/Like.model");

like.get("/:PostUuid", async (req, res) => {
  const { PostUuid } = req.params;
  try {
    const like = await Like.findAll({ where: { PostUuid } });
    res.status(200).json(like);
  } catch (error) {
    res.status(400).json(error);
  }
});

like.post("/user/:UserUuid/post/:PostUuid", async (req, res) => {
  const { UserUuid, PostUuid } = req.params;
  try {
    const like = await Like.create({ UserUuid, PostUuid });
    res.status(200).json(like);
  } catch (error) {
    res.status(400).json(error);
  }
});

like.delete("/:uuid", async (req, res) => {
  const { uuid } = req.params;
  const { UserUuid } = req.body;
  try {
    const like = await Like.destroy({ where: [{ uuid }, { UserUuid }] });
    res.status(200).json(like);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = like;
