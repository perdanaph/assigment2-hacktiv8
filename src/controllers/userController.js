/* eslint-disable no-throw-literal */
const User = require('../models/users')
const { sign } = require('../helpers/jwtHelper')

exports.signIn = async (req, res, next) => {
  const { name, password } = req.body
  try {
    const user = User.findUser(name)
    if (user.name !== name) {
      throw { name: 'User not Found' }
    }
    if (user.password !== password) {
      throw { name: 'wrong password' }
    }
    const token = sign({
      id: user.id,
      name: user.name
    }, { expiresIn: '1d' })
    res.status(200).json({ message: 'login Success', token })
  } catch (error) {
    next(error.name)
  }
}
