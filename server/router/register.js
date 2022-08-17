const express = require('express');
const router = express.Router();
const users = [];
const bcrypt = require('bcrypt')

router.get('/', async (req, res ) => {
	  res.render('register.ejs');

})


router.post('/', async (req, res) => {
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
	console.log(users)

})

module.exports = router;