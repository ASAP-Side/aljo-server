module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Room_setting_user', [
            {
                room_id: 1,
                setting_id: 1234,
                user_id: 9876,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                room_id: 2,
                setting_id: 5678,
                user_id: 5432,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Room_setting_user', null, {});
    },
};
