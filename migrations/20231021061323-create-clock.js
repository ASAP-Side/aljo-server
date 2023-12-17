"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Clocks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      is_am: {
        type: Sequelize.BOOLEAN,
      },
      hour_min: {
        type: Sequelize.STRING,
      },
      day_list: {
        type: Sequelize.JSON,
      },
      music: {
        type: Sequelize.STRING,
      },
      alarm_custom: {
        type: Sequelize.STRING,
      },
      repeat_end_date: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Clocks");
  },
};
