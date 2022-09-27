const express = require('express');
const router  = express.Router();
const controller = require('../controller/calendar.js');
const axios = require('axios');
const Calendar = require('../model/calendarmodel');


router.get('/', async ( req, res) => {	
	
	//Make a get request to the api users

	if(req.query.search) {
		var noneMatch = null;

		const regex = new RegExp(escapeRegex(req.query.search), 'gi');

		Casadb.find({morada: regex},function(err, allcasas){

			if(err){
				console.log(err);
			} else {
				if (allcasas.length < 1) {
					var noneMatch = "Não foi encontrado nenhum valor por favor tente de novo"
				}
				res.render("index", {casas:allcasas, noneMatch: noneMatch});
			}
		})


	} else {
	axios.get('http://0.0.0.0:5000/api/calendars/')

	//axios.get('https://omeular.herokuapp.com/api/casas/')

		.then(function(response){
			console.log(response.data)
					res.render("index", {casas: response.data , noneMatch: noneMatch});

		})

		.catch(err => {
			res.send(err);
		})

	}
})

// API

router.post ('/api/calendars', controller.create);
router.get ('/api/calendars/', controller.find);

router.put ('/api/calendars/:id', controller.update);
router.delete ('/api/calendars/:id', controller.delete);



module.exports = router ;
