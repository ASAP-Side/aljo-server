#! /bin/sh

npx sequelize-cli db:migrate
sleep 2
npx sequelize-cli db:seed:all