module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Rooms', [
            {
                title: '삐삐삐',
                max_person: 5,
                current_person: 1,
                is_deadline: true,
                alarm_deadline: new Date(),
                alarm_hour: new Date(),
                alarm_date: JSON.stringify([new Date(), new Date(), new Date()]),
                is_public: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: '뚜뚜뚜',
                max_person: 5,
                current_person: 3,
                is_deadline: false,
                alarm_deadline: new Date(),
                alarm_hour: new Date(),
                alarm_date: JSON.stringify([new Date(), new Date(), new Date()]),
                is_public: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Rooms', null, {});
    },
};
