
const express = require('express');
const router = express.Router();
var studentModel = require("../model/studentmodel"); 

router.get("/", async (request, response) => {
  response.render('index.ejs', {nome : 'ruth'})
  
  /**  const students = await studentModel.find({});

    try {
        response.send(students);

    } catch (error)  {
        response.status(404).json({ error });
        return;
    }
**/
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