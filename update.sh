#! /bin/sh

npx sequelize-cli db:seed:undo:all
sleep 2
npx sequelize-cli db:migrate:undo:all
sleep 2
npx sequelize-cli db:migrate
sleep 2
npx sequelize-cli db:seed:all
