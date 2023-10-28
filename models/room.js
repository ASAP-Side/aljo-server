'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Room extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Room.init(
        {
            title: DataTypes.STRING,
            max_person: DataTypes.INTEGER,
            current_person: DataTypes.INTEGER,
            is_deadline: DataTypes.BOOLEAN,
            alarm_deadline: DataTypes.DATE,
            alarm_hour: DataTypes.DATE,
            alarm_date: DataTypes.JSON,
            is_public: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            tableName: 'rooms',
            modelName: 'Room',
            timestamps: true,
            charset: 'utf8',
        }
    );
    return Room;
};
