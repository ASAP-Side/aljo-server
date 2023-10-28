'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Setting extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.hasMany(models.Room_setting_user)
        }
    }
    Setting.init(
        {
            alarm_type: DataTypes.STRING,
        },
        {
            sequelize,
            tableName: 'settings',
            modelName: 'Setting',
            timestamps: true,
            charset: 'utf8',
        }
    );
    return Setting;
};
