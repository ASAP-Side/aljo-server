require('dotenv').config();
const env = process.env;

const development = {
  username: env.MYSQL_USERNAME,
  //env.MYSQL_USERNAME은 불러오고자 하는 데이터의 키값이므로 자유롭게 이름설정이 가능하다.
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DATABASE,
  host: env.MYSQL_LOCAL_HOST,
  port: env.MYSQL_LOCAL_PORT,
  dialect: "mysql",
};

const production = {
  username: env.MYSQL_USERNAME,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DATABASE,
  host: env.MYSQL_PRODUCTION_HOST,
  port: env.MYSQL_PRODUCTION_PORT,
  dialect: "mysql",
};


module.exports = { development, production };