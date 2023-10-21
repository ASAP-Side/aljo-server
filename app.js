const express = require('express');
const app = express();
const port = 3000;

const { sequelize } = require('./models'); // db.sequelize 객체

sequelize
    .sync({ force: false }) // 서버 실행시 MySQL 과 연동되도록 하는 sync 메서드
    // force : true 로 해놓으면 서버 재시작마다 테이블이 재생성됨. 테이블을 잘못 만든 경우에 true 로 설정
    .then(() => {
        console.log('데이터 베이스 연결 성공');
    })
    .catch((err) => {
        console.log(err);
    });

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
