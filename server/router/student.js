const axios = require('axios');
const express = require('express');
const router = express.Router();
var studentModel = require("../model/studentmodel"); 
const calendar = require('../model/calendarmodel');
const controller = require('../controller/calendar.js');

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
  
router.get("/",  checkAuthenticated, async(req, res) => {
    //axios.get('http://localhost:5000/calendar/api/calendars')
    axios.get('http://cassomaescola.herokuapp.com/calendar/api/calendars')
        .then(function(response){
	                 console.log(response.data)
	    res.render('index', { calendars : response.data, username : req.user.username, curse : req.user.curse, curse_year : req.user.curse_year, student_number : req.user.student_number,
				  proprinas : req.user.proprinas });
        })
        .catch(err =>{
            res.send(err);
        })

    

    /**
res.render('index.ejs', {
    username : req.user.username,
    curse : req.user.curse,
    curse_year : req.user.curse_year,
    student_number : req.user.student_number,
    proprinas : req.user.proprinas,
    calendars : await calendar(),
   
})
**/

   
  /**  const students = await studentModel.find({});

    try {
        response.send(students);

    } catch (error)  {
        response.status(404).json({ error });
        return;
    }
**/
}); 


router.get('/calendar', (req, res) =>  {

    axios.get('http://localhost:5000')
        .then(function(response){
	    console.log(response.data)
            res.render('index', { calendars : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
  
} )

router.post("/add_student", async (request, response) => {
    const student = new studentModel(request.body);
  
    try {
      await student.save();
      response.send(student);
    } catch (error) {
      response.status(500).send(error);
    }
});


router.put('/', (req, res) => {

 

})




router.delete('/', (req, res) => {

})




module.exports = router;
