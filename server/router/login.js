const express = require('express');
const router = express.Router();
const passport = require('passport');
const dotenv = require('dotenv').config()
const bcrypt = require('bcrypt')

const session = require('express-session');



router.get('/', async (req, res ) => {
	  res.render('login.ejs');

})


/**
router.post('/', passport.authenticate('local', {
sucessRedirect: '/students',
failureRedirect: '/login',
failureFlash: true


  }
 )
)


**/
module.exports = router;