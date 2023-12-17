const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.get("/list", (req, res) => {
  // TODO: 알람 리스트 내려주는거 구성하기
  res.send("list 받아라");
});

router.post("/create", (req, res) => {
  // TODO: 알람 리스트 내려주는거 구성하기
  res.json({ msg: "list만든다" });
});

module.exports = router;
