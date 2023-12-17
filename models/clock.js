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
            this.belongsTo(models.Room);
            this.belongsTo(models.User);
            this.belongsTo(models.Setting);
        }
    }
    clock.init(
        {
            is_am: DataTypes.BOOLEAN,
            hour_min: DataTypes.STRING,
            day_list: DataTypes.JSON,
            music: DataTypes.STRING,
            alarm_custom: DataTypes.STRING,
            repeat_end_date: DataTypes.STRING,
        },
        {
            sequelize,
            tableName: 'clock',
            modelName: 'Clock',
            timestamps: true,
            charset: 'utf8',
        }
    );
    return clock;
};
