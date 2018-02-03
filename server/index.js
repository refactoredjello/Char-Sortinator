const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const { routeToSort } = require('./routes.js')

const app = express()
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname + '/../client/')))
app.post('/sortinator', routeToSort);

module.exports = app