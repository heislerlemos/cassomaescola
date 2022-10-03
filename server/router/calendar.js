const express = require('express');
const router  = express.Router();
const controller = require('../controller/calendar.js');
const axios = require('axios');
const Calendar = require('../model/calendarmodel');

router.get('/', async (req, res) =>  {
    axios.get('http://localhost:5000/calendar/api/calendars')
        .then(function(response){
            res.render('index.ejs', { calendars : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
})
	 

// API
router.post ('/api/calendars', controller.create);
router.get ('/api/calendars', controller.find);


module.exports = router ;
