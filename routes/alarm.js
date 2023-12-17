const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const { User, Setting } = require("../models/index");

router.get("/list", async (req, res) => {
  // TODO: 알람 리스트 내려주는거 구성하기
  // 1. client에서 받은 게 없어
  // 2. db에서 꺼내오는 코드가 없어
  const setting = await Setting.findAll({ raw: true });
  res.send(setting);
});

router.post("/create", async (req, res) => {
  // TODO: 알람 리스트 내려주는거 구성하기
  res.json({ msg: "list만든다" });
});

module.exports = router;

//유저 아이디, 룸 아이디 받아야함.