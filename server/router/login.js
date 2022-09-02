const express = require('express');
const router = express.Router();
const passport = require('passport');
//const dotenv = require('dotenv').config()
const bcrypt = require('bcrypt');
const methodOverride = require('method-override');
methodOverride('_method')

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}
  
router.get('/',checkNotAuthenticated, async (req, res ) => {
	  res.render('login.ejs');

})


router.delete('/logout', (req, res) => {
   req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
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