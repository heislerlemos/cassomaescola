const express = require('express');
const router  = express.Router();
const controller = require('../controller/calendar.js');
//const services = require('./render');
const calendar = require('../model/calendarmodel');
const axios = require('axios');


//router.get('/', services.homeRoutes);

router.get('/', (req,  res) =>  {
    res.render('index', {
	subject_course : req.calendar.subject_course,
	detail : req.calendar.detail,
	date_start : req.calendar.date_start,
	date_end : req.calendar.date_end

    })
    

})

// API
router.post ('/api/calendars', controller.create);
router.get ('/api/calendars', controller.find);


module.exports = router ;
