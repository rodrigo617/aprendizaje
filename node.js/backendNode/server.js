const express = require('express')
const bodyParser = require('body-parser')
//const router = require('./components/message/network')
const router = require('./network/routes')
const db = require('./db')

db('mongodb+srv://user:user1234@telegrom.l6j9err.mongodb.net/?retryWrites=true&w=majority')
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
//app.use(router)
router(app)


app.use('/app', express.static('public'))


app.listen(3000)
console.log('La aplicación esta escuchando en http://localhost:3000')