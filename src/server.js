const express = require('express')
const bodyParser = require('body-parser')

const server = express()
// Allow POST/PUT/PATCH request to pass along JSON and it will be decoded for us at 'req.json'
server.use(bodyParser.json())

server.listen(7000, () => {
  console.log('Started at http://localhost:7000')
})