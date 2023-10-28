'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      max_person: {
        type: Sequelize.INTEGER
      },
      current_person: {
        type: Sequelize.INTEGER
      },
      is_deadline: {
        type: Sequelize.BOOLEAN
      },
      alarm_deadline: {
        type: Sequelize.DATE
      },
      alarm_hour: {
        type: Sequelize.DATE
      },
      alarm_date: {
        type: Sequelize.JSON
      },
      is_public: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rooms');
  }
};