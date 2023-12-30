const { raw } = require("body-parser");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const { Room } = require("../models/index");

router.get("/list", async (req, res) => {
  const room = await Room.findAll({ raw: true });
  res.send(room);
});

router.post("/create", async (req, res) => {
  res.json({ msg: "list만든다" });
});

module.exports = router;

//유저 아이디, 룸 아이디 받아야함.