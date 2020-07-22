const express = require("express");

const like = express.Router();

const regExIntChck = require("../middleware/regexCheck");
const { uuidv4RegExp } = require("../middleware/regexCheck");

const Like = require("../model/Like.model");

like.post("/post/:uuid", async (req, res) => {
  const { uuid } = req.params;
  try {
    const like = await Like.create();
    res.status(200).json(like);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = like;
