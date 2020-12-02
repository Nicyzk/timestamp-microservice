const express = require('express')
const router = express.Router()
const timeStampControllers = require('../controllers/timestamp')

router.post('/timestamp', timeStampControllers.postTimestamp)

router.get('/timestamp', timeStampControllers.getTimestampEmptyInput)

router.get('/timestamp/:date', timeStampControllers.getTimestampWithInput)

module.exports = router