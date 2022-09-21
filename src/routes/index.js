const express = require('express')
const router = express.Router()
const errorMidleware = require('../middlewares/errorMidleware')

router.use(require('./user'))
router.use(require('./note'))
router.use(errorMidleware)

module.exports = router
