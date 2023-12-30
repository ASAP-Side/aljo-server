module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        name: "lee geon",
        nick_name: "거니는숏다리",
        kakao_id: "1",
        apple_id: "1",
        image: "이미지_1",
        grade: "초급",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "lee geon2",
        nick_name: "거니는숏다리2",
        kakao_id: "2",
        apple_id: "2",
        image: "이미지_2",
        grade: "중급",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
