const Product = require('../models/products')

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = Product.getAllproducts()
    console.log(products)
    if (products === null) {
      return res.status(200).json({ message: 'product kosong' })
    }
    res.status(200).json({
      message: 'Success',
      result: products
    })
  } catch (error) {
    next(error.name)
  }
}
