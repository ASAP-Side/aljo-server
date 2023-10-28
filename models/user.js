'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    nick_name: DataTypes.STRING,
    role: DataTypes.STRING,
    image: DataTypes.STRING,
    grade: DataTypes.STRING,
    level: DataTypes.INTEGER,
    exp: DataTypes.INTEGER,
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'User',
    timestamps: true,
    charset: 'utf8',
  });
  return User;
};