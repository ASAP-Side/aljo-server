module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Room_setting_users', [
            {
                room_id: 1,
                setting_id: 1,
                user_id: 1,
                user_role: "master",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                room_id: 2,
                setting_id: 2,
                user_id: 2,
                user_role: "member",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Room_setting_users', null, {});
    },
};
