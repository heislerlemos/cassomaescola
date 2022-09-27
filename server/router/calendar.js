const express = require('express');
const router  = express.Router();
const controller = require('../controller/calendar.js');
const axios = require('axios');
const Calendar = require('../model/calendarmodel');




// API

router.post ('/api/calendars', controller.create);



module.exports = router ;
