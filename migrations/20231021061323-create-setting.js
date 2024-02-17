"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("settings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        unique: true,
      },
      nickname: {
        type: Sequelize.STRING,
        unique: true,
      },
      profile_img_url: {
        type: Sequelize.STRING,
      },
      alarm_type: {
        type: Sequelize.STRING,
      },
      music_title: {
        type: Sequelize.STRING,
      },
      music_volume: {
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
    await queryInterface.dropTable("settings");
  },
};
