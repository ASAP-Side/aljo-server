'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class clock extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // this.belongsTo(models.Room);
            // this.belongsTo(models.User);
            // this.belongsTo(models.Setting);
        }
    }
    clock.init(
        {
            user_id: DataTypes.INTEGER,
            room_id: DataTypes.INTEGER,
            // TargetDate
            am_pm: DataTypes.INTEGER,
            hour: DataTypes.INTEGER,
            minute: DataTypes.INTEGER,
            days_of_week: DataTypes.JSON,

            // EndDate
            year: DataTypes.INTEGER,
            month: DataTypes.INTEGER,
            date: DataTypes.INTEGER,
        },
        {
            sequelize,
            tableName: 'clocks',
            modelName: 'Clock',
            timestamps: true,
            charset: 'utf8',
        }
    );
    return clock;
};
