#! /bin/sh

npx sequelize-cli db:seed:undo:all
sleep 3
npx sequelize-cli db:migrate:undo:all