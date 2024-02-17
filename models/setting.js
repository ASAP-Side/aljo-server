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
      user_id: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
      },
      nickname: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      profile_img_url: {
        // 프로필사진 url (원본은 S3 저장)
        type: DataTypes.STRING,
        allowNull: false,
      },
      alarm_type: {
        // 소리진동(both), 소리(sound), 진동(vibration)
        type: DataTypes.STRING,
        allowNull: false,
      },
      music_title: {
        // 알람 음악 제목
        type: DataTypes.STRING,
        allowNull: false,
      },
      music_volume: {
        // 알람 음악 볼륨
        type: DataTypes.INTEGER,
        allowNull: false,
      },
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
