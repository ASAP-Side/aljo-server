"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Room_setting_user),
        {
          foreignKey: "user_id",
          sourceKey: "id",
        };
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      nick_name: DataTypes.STRING,
      kakao_id: DataTypes.STRING,
      apple_id: DataTypes.STRING,
      image: DataTypes.STRING,
      grade: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "users",
      modelName: "User",
      timestamps: true,
      charset: "utf8",
    }
  );
  return User;
};
