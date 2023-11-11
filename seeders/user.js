module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            {
                name: 'lee geon',
                nick_name: '거니는숏다리',
                image: '이미지_1',
                grade: '초급',
                level: 99,
                exp: 1241241255.32,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'ree zeon',
                nick_name: '거니는롱다리',
                image: '이미지_2',
                grade: '중급',
                level: 0,
                exp: 1623.124124124,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    },
};
