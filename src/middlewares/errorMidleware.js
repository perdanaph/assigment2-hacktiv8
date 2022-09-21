const errorMidlewares = (error, req, res, next) => {
  let statusCode = 500
  let message = 'Internal server error'
  switch (error) {
    case 'userNotFound':
      statusCode = 404
      message = 'User Not Found'
      break
    case 'wrongPassword':
      statusCode = 400
      message = 'Wrong Password'
      break
  }
  res.status(statusCode).json({ message })
}

module.exports = errorMidlewares
