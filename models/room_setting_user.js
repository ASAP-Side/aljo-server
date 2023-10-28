'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Room_setting_user extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Room)
            this.belongsTo(models.User)
            this.belongsTo(models.Setting)
        }
    }
    Room_setting_user.init(
        {
            room_id: DataTypes.INTEGER,
            setting_id: DataTypes.INTEGER,
            user_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            tableName: 'room_setting_users',
            modelName: 'Room_setting_user',
            timestamps: true,
            charset: 'utf8',
        }
    );
    return Room_setting_user;
};
