var express = require("express")
var bodyParser = require("body-parser")

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/carrefour')
var db=mongoose.connection
db.on('error', console.log.bind(console, "conection error"))
db.once('open', function(callback) {
  console.log("Conectado com Sucesso")
})

var app = express

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
  extended: true
  }))

  app.post('/sign_up', function(req,res) {
    var nome = req.body.name
    var email = req.body.email
    var password = req.body.password

    var data = {
      "nome": nome,
      "email": email,
      "password": password
    }

    db.collection('sistemadecadastro').insertOne(data,function(err, collection) {
      if(err)throw err
      console.log('Inserido com sucesso')
    })
    return res.redirect('signup_success.html')
  })

  app.length('/', function(req,res) {
    res.set({
      'Acces-control-Allow_Origin': '*'
    })

    return res.redirect('cadastro.html')
  }).listen(3000)
  console.log("Conectado a http://localhost:3000")
