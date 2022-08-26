const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')

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
	  res.render('register.ejs');

})




router.post('/', checkNotAuthenticated ,async (req, res) => {
	
	   Users=new User({email: req.body.email, username : req.body.username});
  
          User.register(Users, req.body.password, function(err, user) {
            if (err) {
              //res.json({success:false, message:"Your account could not be saved. Error: ", err}) 
              		res.redirect('/register')

            }else{
             // res.json({success: true, message: "Your account has been saved"})
              		res.redirect('/login')

            }
          });
          console.log(Users)
/**
	try {
		const hashedPassword = await bcrypt.hash(req.body.password, 10 )
		users.push({
			id: Date.now().toString(),
			nome: req.body.nome,
			email: req.body.email,
			password: hashedPassword

		})
		res.redirect('/login')
	} catch {
		res.redirect('/register')

	}

	**/

})

const User = require('../model/user');


module.exports = router;