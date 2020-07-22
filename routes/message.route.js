const express = require("express");

const message = express.Router();

const regExIntChck = require("../middleware/regexCheck");
const { uuidv4RegExp } = require("../middleware/regexCheck");

const Message = require("../model/Message.model");

message.get("/", async (req, res) => {
  try {
    const message = await Message.findAll();
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json(error);
  }
});

message.get("/:uuid", regExIntChck(uuidv4RegExp), async (req, res) => {
  const { uuid } = req.params;
  try {
    const message = await Message.findByPk(uuid);
    res.status(200).json(message);
  } catch (error) {
    res.status(404).json(error);
  }
});

message.post("/", async (req, res) => {
  const { content } = req.body;
  try {
    const message = await Message.create({
      content,
    });
    res.status(201).json(message);
  } catch (error) {}
});

// post.put("/:uuid", regExIntChck(uuidv4RegExp), async (req, res) => {
//     const { uuid } = req.params;
//     try {
//       const post = await Post.findByPk(uuid);
//       res.status(200).json(post);
//     } catch (error) {
//       res.status(404).json(error);
//     }
//   });

module.exports = message;
