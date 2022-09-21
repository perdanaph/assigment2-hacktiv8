/* eslint-disable camelcase */
const { products } = require('../storage/product.json')

class Product {
  static getAllproducts () {
    return products.map((product) => product)
  }
}

module.exports = Product
