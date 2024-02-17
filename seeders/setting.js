module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Settings", [
      {
        user_id: 1,
        nickname: "호빵",
        profile_img_url: "test_img_url_1",
        alarm_type: "sound",
        music_title: "hahahaha",
        createdAt: new Date(),
        updatedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        nickname: "식빵",
        profile_img_url: "test_img_url_2",
        alarm_type: "vibration",
        music_title: "hahahaha",
        createdAt: new Date(),
        updatedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        nickname: "호밀빵",
        profile_img_url: "test_img_url_3",
        alarm_type: "both",
        music_title: "hahahaha",
        createdAt: new Date(),
        updatedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Settings", null, {});
  },
};
