const express = require('express');
const app = express();
const port = 3000;
const cors = require("cors");
require("dotenv").config();

const morgan = require("morgan");
const { sequelize } = require('./models'); // db.sequelize 객체
const alarmRouter = require("./routes/alarm");

sequelize
    .sync({ force: false }) // 서버 실행시 MySQL 과 연동되도록 하는 sync 메서드
    // force : true 로 해놓으면 서버 재시작마다 테이블이 재생성됨. 테이블을 잘못 만든 경우에 true 로 설정
    .then(() => {
        console.log('데이터 베이스 연결 성공');
    })
    .catch((err) => {
        console.log(err);
    });

app.use(cors());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/alarm", alarmRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
