
const express = require('express');
const router = express.Router();
var studentModel = require("../model/studentmodel"); 

router.get("/", async (request, response) => {
  response.render('index.ejs', {nome : 'heisler'})
  
    const students = new studentModel.find({});
    try {
        response.send(students);
    } catch (error) {
      response.status(500).send(error);
    }
}); 


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