const express = require("express");
const router = express.Router();
const multer = require("multer");
const aws = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const { Setting } = require("../models/index");
const { where } = require("sequelize");
require("dotenv").config();
const fs = require("fs");

// Multer 설정
const storage = multer.memoryStorage();
const upload = multer({ storage });

// AWS S3 설정
const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

// 기본설정 조회
router.get("/", async (req, res) => {
  const { user_id } = req.query;
  if (!user_id) {
    console.log(`[setting find fail] user_id: ${user_id}`);
    return res.status(404).json({ result: false });
  }
  const userSettingObj = await Setting.findOne(
    {
      where: {
        user_id: Number(user_id),
      },
    },
    { raw: true }
  );
  res.json(userSettingObj);
});

// 기본설정 생성(최초 인입시 사용)
router.post("/", upload.single("profile_img"), async (req, res) => {
  const profileImgObj = req.file;
  console.log(profileImgObj, "profileImgObj");

  const { user_id, nickname, alarm_type, music_title } = req.body;
  if (!user_id) {
    return res.status(404).json({ result: false });
  }
  const imageUrl = profileImgObj
    ? await handleUploadS3(user_id, profileImgObj)
    : null;

  const userSettingObj = await Setting.findOne({
    where: {
      user_id: Number(user_id),
    },
  });

  if (userSettingObj) {
    console.log(
      `[setting create fail alreay exist] user_id: ${userSettingObj.user_id}`
    );
    return res.status(409).json({ result: false });
  }

  await Setting.create({
    user_id: Number(user_id),
    nickname,
    profile_img_url: imageUrl,
    alarm_type,
    music_title,
  });

  res.json({
    user_id: Number(user_id),
    nickname,
    profile_img: imageUrl,
    alarm_type,
    music_title,
  });
});

// 기본설정 업데이트(이미 인입된 사용자가 호출)
router.patch("/", upload.single("profile_img"), async (req, res) => {
  const profileImgObj = req.file;
  const { user_id, nickname, alarm_type, music_title } = req.body;

  if (!user_id) {
    return res.status(404).json({ result: false });
  }

  const userSettingObj = await Setting.findOne({
    where: {
      user_id: Number(user_id),
    },
  });

  if (!userSettingObj) {
    console.log(
      `[setting update fail empty user data] userSettingObj: ${userSettingObj}`
    );
    return res.status(404).json({ result: false });
  }

  if (profileImgObj) {
    const imageUrl = await handleUploadS3(user_id, profileImgObj);
    await Setting.update(
      { nickname, alarm_type, music_title, profile_img_url: imageUrl },
      { where: { user_id: Number(user_id) } }
    );
  } else {
    await Setting.update(
      { nickname, alarm_type, music_title },
      { where: { user_id: Number(user_id) } }
    );
  }

  res.json({ isSuccess: true });
});

async function handleUploadS3(userId, file) {
  // S3에 파일 업로드
  const params = {
    Bucket: "asap-img",
    Key: `${userId}/${uuidv4()}_${file.originalname}`,
    Body: file.buffer,
    // ACL: "public-read", // 업로드된 파일을 공개 가능하도록 설정
  };

  return await uploadToS3(params).catch(console.error);
}

async function uploadToS3(params) {
  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err) {
        console.error(err);
        reject("파일 업로드에 실패했습니다.");
      } else {
        const imageUrl = data.Location;
        resolve(imageUrl);
      }
    });
  });
}

module.exports = router;
