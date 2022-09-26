const express = require('express');
const router  = express.Router();
const controller = require('../controller/calendar.js');



// API

router.post ('/api/calendars', controller.create);
router.get ('/api/calendars/', controller.find);

router.put ('/api/calendars/:id', controller.update);
router.delete ('/api/calendars/:id', controller.delete);



module.exports = router ;
