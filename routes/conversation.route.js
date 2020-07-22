// const express = require("express");

// const conversation = express.Router();

// const regExIntChck = require("../middleware/regexCheck");
// const { uuidv4RegExp } = require("../middleware/regexCheck");

// const Conversation = require("../model/Conversation.model");

// conversation.get("/", regExIntChck(uuidv4RegExp), async (req, res) => {
//   try {
//     const conversation = await Conversation.findAll();
//     res.status(200).json(conversation);
//   } catch (error) {
//     res.status(404).json(error);
//   }
// });

// message.get("/:uuid", regExIntChck(uuidv4RegExp), async (req, res) => {
//   const { uuid } = req.params;
//   try {
//     const message = await Message.findByPk(uuid);
//     res.status(200).json(message);
//   } catch (error) {
//     res.status(404).json(error);
//   }
// });

// message.post("/", async (req, res) => {
//   const { UserUuid, RecieverUuid, content } = req.body;
//   try {
//     const message = await Message.findOrCreate({
//       UserUuid,
//       RecieverUuid,
//       content,
//     });
//     res.status(200).json(message);
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });

// message.put("/user/:UserUuid/reciever/:RecieverUuid", async (req, res) => {
//   const { UserUuid, RecieverUuid } = req.params;
//   const { content } = req.body;
//   try {
//     const message = await Message.update(
//       {
//         content,
//       },
//       { where: [{ UserUuid }, { RecieverUuid }] }
//     );
//     res.status(201).json(message);
//   } catch (error) {}
// });

// module.exports = conversation;
