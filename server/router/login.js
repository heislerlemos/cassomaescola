const express = require('express');
const router = express.Router();

router.get('/', async (req, res ) => {
	  res.render('login.ejs');

})



router.post('/', async(req, res) => {
	
})

module.exports = router;