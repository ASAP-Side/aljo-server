const { Room } = require('../models/index');

async function findRoomDateTime(req, res) {
    const room = await Room.findAll({ raw: true });
    res.send(room);
}

async function createRoomDateTime(req, res) {
    res.json({ msg: 'list만든다' });
}

async function destroyRoomDateTime(req, res) {
    ////
}

module.exports = { findRoomDateTime, createRoomDateTime, destroyRoomDateTime };

//유저 아이디, 룸 아이디 받아야함.
