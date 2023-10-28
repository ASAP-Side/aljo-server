module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Settings', [
            {
                alarm_type: '소리',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                alarm_type: '진동',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Settings', null, {});
    },
};
