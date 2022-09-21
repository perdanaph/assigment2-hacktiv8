const express = require('express')
const router = express.Router()
const noteController = require('../controllers/noteController')
const authMiddleware = require('../middlewares/authMiddleware')

router.get('/notes', authMiddleware.userVerify, noteController.getAllNotes)

module.exports = router
