"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Setting extends Model {
    static associate(db) {
      // this.hasMany(db.Room_setting_user, {
      //   foreignKey: "setting_id",
      //   sourceKey: "id",
      // });
    }
  }
  Setting.init(
    {
      user_id: DataTypes.INTEGER, // 유저 id
      nickname: DataTypes.STRING, // 유저 nickname
      profile_img_url: DataTypes.STRING, // 프로필사진 url (원본은 S3 저장)
      alarm_type: DataTypes.STRING, // 소리진동(both), 소리(sound), 진동(vibration)
      music_title: DataTypes.STRING, // 알람 음악 제목
    },
    {
      sequelize,
      tableName: "settings",
      modelName: "Setting",
      timestamps: true,
      charset: "utf8",
    }
  );
  return Setting;
};