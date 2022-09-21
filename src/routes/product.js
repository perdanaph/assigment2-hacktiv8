const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')
const authMiddleware = require('../middlewares/authMiddleware')

router.get('/products', authMiddleware.userVerify, productController.getAllProducts)

module.exports = router
