const express = require('express');
const router = express.Router();
const passport = require('passport');


router.get('/', async (req, res ) => {
	  res.render('login.ejs');

})



router.post('/', passport.authenticate('local', {
sucessRedirect: '/students',
failureRedirect: '/login',
failureFlash: true

})
)



module.exports = router;