const express = require('express');
const bodyParser= require('body-parser')
const app = express();
//const MongoClient = require('mongodb').MongoClient
const path = require('path'); 
const connectDB = require('./server/database/connection');
const studentRoute = require('./server/router/student');


//app.use(bodyParser.urlencoded({ extended: true }))

// Mongo connectiion
connectDB();

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.json())


// routes inside the database connection

app.use('/students', studentRoute  );

app.listen(3000, function() {
  console.log('O servidor esta em produção na porta  3000')
})
