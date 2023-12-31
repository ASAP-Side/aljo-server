"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Setting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(db) {
      this.hasMany(db.Room_setting_user, {
        foreignKey: "setting_id",
        sourceKey: "id",
      });
    }
  }
  Setting.init(
    {
      alarm_type: DataTypes.STRING,
      is_am: DataTypes.BOOLEAN,
      hour_min: DataTypes.STRING,
      day_list: DataTypes.JSON,
      music: DataTypes.STRING,
      repeat_end_date: DataTypes.STRING,
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
