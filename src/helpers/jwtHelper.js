const jwt = require('jsonwebtoken')

exports.sign = (payload) => {
  return jwt.sign(payload, '65311172c0f318256f4dcc5b46c436c150cdb11d5b791d4807c7b9136bb37fbc4499d2d81cf04a96906385162800911d8aa0c41477029848f8900bf3f0981df8')
}

exports.verify = (token) => {
  return jwt.verify(token, '65311172c0f318256f4dcc5b46c436c150cdb11d5b791d4807c7b9136bb37fbc4499d2d81cf04a96906385162800911d8aa0c41477029848f8900bf3f0981df8')
}
