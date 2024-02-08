const express = require('express');
const router = express.Router();
const { findRoomDateTime, createRoomDateTime, destroyRoomDateTime } = require("./rooms");

router.get('/', async (req, res) => {
    return await findRoomDateTime(req, res);
});

router.post('/', async (req, res) => {
    return await createRoomDateTime(req, res);
});

router.delete('/', async (req, res) => {
    return await destroyRoomDateTime(req, res);
});

module.exports = router;
