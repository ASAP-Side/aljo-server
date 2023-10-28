module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            {
                name: 'lee geon',
                nick_name: '거니는숏다리',
                role: '빵빵아',
                image: '아아앙',
                grade: '홍박사님을 아세요?',
                level: 99,
                exp: 1241241255.32,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'ree zeon',
                nick_name: '거니는롱다리',
                role: '옥지얌',
                image: '아이이잉',
                grade: '마산대학교를 아세요?',
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
