module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Settings', [
            {
                alarm_type: '소리',
                is_am: true,
                hour_min: '12:30',
                day_list: JSON.stringify(['월']),
                music: 'https://asap-music.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20231126_174330262.mp4',
                repeat_end_date: '2023/12/17',
                createdAt: new Date(),
                updatedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                alarm_type: '진동',
                is_am: false,
                hour_min: '00:30',
                day_list: JSON.stringify(['화']),
                music: 'https://asap-music.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20231126_174330262.mp4',
                repeat_end_date: '2023/12/20',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Settings', null, {});
    },
};
