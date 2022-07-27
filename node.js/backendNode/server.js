const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(router)

router.get('/message', function(req, res) {
    console.log(req.headers)
    res.header({
        "custom-header": "valor personalizado"
    })
    res.send('Lista de mensaje')
})    
router.post('/message', function(req, res) {
    console.log(req.query)
    console.log(req.body)
    res.status(201).send({error: '', body: 'creado correctamente'})
})

//app.use('/', function(req, res) {
//    res.send('Hola')
//})

app.listen(3000)
console.log('La aplicación esta escuchando en http://localhost:3000')