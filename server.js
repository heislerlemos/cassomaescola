const express = require('express');
const bodyParser= require('body-parser')
const app = express();
//const MongoClient = require('mongodb').MongoClient
const path = require('path'); 
const connectDB = require('./server/database/connection');
const studentRoute = require('./server/router/student');
const loginRoute = require('./server/router/login');
const registerRoute = require('./server/router/register');




//app.use(bodyParser.urlencoded({ extended: true }))
// Setting up basic middleware for all Express requests
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses


// Mongo connectiion
connectDB();

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.json())


// routes inside the database connection

app.use('/students', studentRoute  );
app.use('/login', loginRoute  );
app.use('/register', registerRoute  );


app.listen(3000, function() {
  console.log('O servidor esta em produção na porta  3000')
})


module.exports = app