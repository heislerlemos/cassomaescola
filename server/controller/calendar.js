var Calendar = require("../model/calendarmodel");	
var moment = require('moment');

// create and save new user
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new user
    const calendar = new Calendar({
        subject_course : req.body.subject_course,
        detail : req.body.detail,
        date_start: req.body.date_start.toDateString() ,
        date_end : req.body.date_end 
    })

    // save user in the database
    calendar
        .save(calendar)
        .then(data => {
            //res.send(data)
         res.redirect('/');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}




// adding show page

exports.find = (req, res) => {
    Calendar.find()
	.then(calendar => {
	    res.send(calendar)
	    console.log(calendar)
	})

	.catch(err => {
	    res.status(500)-send({message: err.message || "erro a encontrar oos ficheiros "})
	})

}
