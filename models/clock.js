'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class clock extends Model {
        static associate(models) {
            // define association here
            // this.belongsTo(models.Room);
            // this.belongsTo(models.User);
            // this.belongsTo(models.Setting);
        }
    }
    clock.init(
        {
            user_id: DataTypes.INTEGER, // 유저id
            room_id: DataTypes.INTEGER, // 그룹id

            // TargetDate 
            am_pm: DataTypes.INTEGER, // 0: am, 1: pm
            hour: DataTypes.INTEGER, // 시간 (0-23)
            minute: DataTypes.INTEGER, // 분 (0-59)
            days_of_week: DataTypes.JSON, // 요일 목록 ['Monday', 'Tuesday']

            // EndDate 
            year: DataTypes.INTEGER, // 년도
            month: DataTypes.INTEGER, // 월 (1-12)
            date: DataTypes.INTEGER, // 날짜 (1-31)
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
