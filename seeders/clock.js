module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Clocks", [
      {
        am_pm: 0, // 0: am, 1: pm
        hour: 0, // 시간 (0-23)
        minute: 0, // 분 (0-59)
        days_of_week: JSON.stringify(["Monday", "Tuesday"]), // 요일 목록
        year: 2023, // 년도
        month: 1, // 월 (1-12)
        date: 1, // 날짜 (1-31)
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        am_pm: 1, // 0: am, 1: pm
        hour: 2, // 시간 (0-23)
        minute: 59, // 분 (0-59)
        days_of_week: JSON.stringify(["Monday", "Tuesday"]), // 요일 목록
        year: 2023, // 년도
        month: 2, // 월 (1-12)
        date: 31, // 날짜 (1-31)
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Clocks", null, {});
  },
};
