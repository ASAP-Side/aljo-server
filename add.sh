#! /bin/sh

npx sequelize-cli db:migrate
sleep 3
npx sequelize-cli db:seed:all