"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Room_setting_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Room, {
        foreignKey: "room_id",
        targetKey: "id",
      });
      this.belongsTo(models.User, {
        foreignKey: "user_id",
        targetKey: "id",
      });
      this.belongsTo(models.Setting, {
        foreignKey: "setting_id",
        targetKey: "id",
      });
    }
  }
  Room_setting_user.init(
    {
      room_id: DataTypes.INTEGER,
      setting_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      user_role: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "room_setting_users",
      modelName: "Room_setting_user",
      timestamps: true,
      charset: "utf8",
    }
  );
  return Room_setting_user;
};
