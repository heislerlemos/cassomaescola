console.log('Cassoma escola');

const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient


app.use(bodyParser.urlencoded({ extended: true }))




app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})




app.post('/quotes', (req, res) => {
  console.log('Hellooooooooooooooooo!')
  console.log(req.body)
})


app.listen(3000, function() {
  console.log('O servidor esta em produção na porta  3000')
})
