const { users } = require('../storage/users.json')

class User {
  static findUser (name) {
    return users.find((user) => user.name === name)
  }
}

module.exports = User
