/* eslint-disable camelcase */
const { products } = require('../storage/notes.json')

class Product {
  static getAllproducts () {
    return products.map((product) => product)
  }
}

module.exports = Product
