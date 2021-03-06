const express = require("express");

const user = express.Router();

const regExIntChck = require("../middleware/regexCheck");
const { uuidv4RegExp } = require("../middleware/regexCheck");

const User = require("../model/User.model");

user.get("/", async (req, res) => {
  try {
    const user = await User.findAll({ attributes: { exclude: ["password"] } });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

user.get("/:uuid", regExIntChck(uuidv4RegExp), async (req, res) => {
  const { uuid } = req.params;
  try {
    const user = await User.findByPk(uuid, {
      attributes: { exclude: ["password"] },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json(error);
  }
});

user.post("/", async (req, res) => {
  const { email, pseudo, password, avatar } = req.body;
  try {
    const user = await User.create({
      email,
      pseudo,
      password,
      avatar,
    });
    res.status(201).json(user);
  } catch (error) {}
});

user.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (user.validatePassword(password)) {
      const uuid = user.uuid;
      res.status(200).json({ uuid });
    } else {
      throw Error.error;
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = user;
