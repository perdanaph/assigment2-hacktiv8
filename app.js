const express = require('express')
const app = express()
const route = require('./src/routes/index')
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1', route)

app.get('/', (req, res) => {
  res.send('Hola')
})

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`)
})
