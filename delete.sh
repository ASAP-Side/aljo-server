#! /bin/sh

npx sequelize-cli db:seed:undo:all
sleep 1
npx sequelize-cli db:migrate:undo:all