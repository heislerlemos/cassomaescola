if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config
}

const express = require('express');
const bodyParser= require('body-parser')
const app = express();
//const MongoClient = require('mongodb').MongoClient
const path = require('path'); 
const connectDB = require('./server/database/connection');
const studentRoute = require('./server/router/student');
const User = require('./server/model/user');
const calendarRoute = require('./server/router/calendar');
const loginRoute = require('./server/router/login');
const registerRoute = require('./server/router/register');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const dotenv = require('dotenv').config()
const bcrypt = require('bcrypt')
const methodOverride = require('method-override');

  


const initializePassport = require('./passport-config');

initializePassport(
  passport, 
  email => User.find(user => user.email === email),
  id => User.find(user => user.id === id)
)

global.users = []





//app.use(bodyParser.urlencoded({ extended: true }))
// Setting up basic middleware for all Express requests
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
app.use(flash())

app.use(session({
secret: process.env.SESSION_SECRET, 
resave: false,
saveUninitialized: false,
   cookie: { sameSite: 'strict' },
}),
);

app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

// Mongo connectiion
connectDB();

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.json())


// routes inside the database connection

app.use('/', studentRoute );
app.use('/login', loginRoute );
app.use('/calendar', calendarRoute );
app.use('/register', registerRoute  );

app.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))






//app.listen(5000, function() {
  //console.log('O servidor esta em produção na porta  5000')
//})

//For avoidong Heroku $PORT error
app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('O Servidor esta correr 🚀 ', app.get('port'));
});




module.exports = app
