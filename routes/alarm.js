const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const { Room_setting_user, Setting, Clock } = require("../models/index");

router.get("/", async (req, res) => {
  const { room_id, user_id } = req.query;
  const clocks = await Clock.findOne({
    where: {
      room_id,
      user_id,
    },
    raw: true,
  });

  if (!clocks) {
    return res.status(404).json({ result: false });
  }
  const { am_pm, hour, minute, days_of_week, year, month, date } = clocks;
  const now = new Date();
  const parsedStartDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  const parsedEndDate = `${year}-${month}-${date}`;
  const timeInfo = { am_pm, hour, minute };

  const AlarmDateTime = createAlarmDateTimeObjects(
    parsedStartDate,
    parsedEndDate,
    days_of_week,
    timeInfo,
    room_id,
    user_id
  );

  res.json({ AlarmDateTime });
});

router.post("/", async (req, res) => {
  const now = new Date();
  const parsedStartDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;

  const { room_id, user_id, TargetDate, EndDate } = req.body;
  const { am_pm, hour, minute, days_of_week } = TargetDate;
  const { year, month, date } = EndDate;
  const parsedEndDate = `${year}-${month}-${date}`;
  const timeInfo = { am_pm, hour, minute };

  const clockResult = await Clock.findOne({
    where: {
      user_id,
      room_id,
    },
    raw: true,
  });
  if (clockResult) {
    return res.status(409).json({ result: false });
  }

  await Clock.create({
    room_id,
    user_id,
    am_pm,
    hour,
    minute,
    days_of_week,
    year,
    month,
    date,
  });

  const AlarmDateTime = createAlarmDateTimeObjects(
    parsedStartDate,
    parsedEndDate,
    days_of_week,
    timeInfo,
    room_id,
    user_id
  );

  if (AlarmDateTime) {
    res.json({ AlarmDateTime });
  } else {
    res.status(500).json({ result: false });
  }
});

router.delete("/", async (req, res) => {
  const { room_id, user_id } = req.body;

  const result = await Clock.destroy({
    where: {
      room_id,
      user_id,
    },
  });
  if (result) {
    res.json({ result: true });
  } else {
    res.json({ result: false });
  }
});

function createAlarmDateTimeObjects(startDate, endDate, daysOfWeek, timeInfo, roomId, userId) {
  // 요일을 숫자로 변환하는 매핑
  const daysOfWeekMap = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 0,
  };
  const targetDays = daysOfWeek.map((day) => daysOfWeekMap[day]);

  let current = new Date(startDate);
  const end = new Date(endDate);
  const AlarmDateTime = [];
  let alarmId = 1; // 알람 ID 초기값

  // 시작 날짜부터 종료 날짜까지 반복
  while (current <= end) {
    if (targetDays.includes(current.getDay())) {
      AlarmDateTime.push({
        id: alarmId++,
        room_id: roomId,
        user_id: userId,
        year: current.getFullYear(),
        month: current.getMonth() + 1, // JavaScript의 월은 0부터 시작
        date: current.getDate(),
        am_pm: timeInfo.am_pm,
        hour: timeInfo.hour,
        minute: timeInfo.minute,
      });
    }
    current.setDate(current.getDate() + 1);
  }

  return AlarmDateTime;
}

module.exports = router;