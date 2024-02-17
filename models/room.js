"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Room_setting_user, {
        foreignKey: "room_id",
        sourceKey: "id",
      });
    }
  }
  Room.init(
    {
      title: DataTypes.STRING, // 제목
      max_person: DataTypes.INTEGER, // 최대 인원수
      current_person: DataTypes.INTEGER, // 현재 인원수
      is_deadline: DataTypes.BOOLEAN, // 마감여부
      alarm_deadline: DataTypes.DATE, // 
      alarm_hour: DataTypes.DATE,
      alarm_date: DataTypes.JSON,
      is_public: DataTypes.BOOLEAN,
      view_count: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "rooms",
      modelName: "Room",
      timestamps: true,
      charset: "utf8",
    }
  );
  return Room;
};
