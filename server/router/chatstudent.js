const router = require('express').Router();
const {getEdit} = require('../controller/openAIControllers.js');


router.post('/', getEdit);

module.exports = router ;
