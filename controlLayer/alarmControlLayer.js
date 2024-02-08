const express = require('express');
const router = express.Router();
const { findAlarmDateTime, createAlarmDateTime, destroyAlarmDateTime } = require("./alarms");


router.get('/', async (req, res) => {
    return await findAlarmDateTime(req, res);
});

router.post('/', async (req, res) => {
    return await createAlarmDateTime(req, res);
});

router.delete('/', async (req, res) => {
    return await destroyAlarmDateTime(req, res);
});

module.exports = router;
