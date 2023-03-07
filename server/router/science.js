const express = require('express');
const router = express.Router();

const {
	getAllsciences,
  createScience,
  getScienceById ,
  updateScience,
  deleteScience,
} = require("../controller/science");


console.log(getAllsciences)

router.get('/', (req, res) => {
 	  res.render('science',{
 	  	science : res.data 

 	  })

});


router.route("/").get(getAllsciences).post(createScience);
router.route("/:id").get(getScienceById).put(updateScience).delete(deleteScience);
 




module.exports = router ;
