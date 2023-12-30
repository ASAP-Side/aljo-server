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
      user_id: {
        type: Sequelize.INTEGER,
      },
      room_id: {
        type: Sequelize.INTEGER,
      },
      am_pm: {
        type: Sequelize.INTEGER,
      },
      hour: {
        type: Sequelize.INTEGER,
      },
      minute: {
        type: Sequelize.INTEGER,
      },
      days_of_week: {
        type: Sequelize.JSON,
      },
      year: {
        type: Sequelize.INTEGER,
      },
      month: {
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.INTEGER,
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
