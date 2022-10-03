var Calendar = require("../model/calendarmodel");	

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
        date_start: req.body.date_start,
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




exports.find = (req, res ) => {

		if(req.query.id){
			const id = req.query.id;

			Calendar.findById(id)
				.then(data => {
					if(!data){
						res.status(404).send({message: "Não foi encontrado o utilizador pelo id " + id})
					}else {
						res.send(data)
					}
				})
				.catch(err =>{
					res.status(500).send({message: "Erro a obter a casa" + id})
				})
		}else{ 

	Calendar.find().sort({ _id: 'descending' })

		.then(calendar => {
			res.send(calendar)

		})




		.catch(err => {
			res.status(500).send({message: err.message  || "Um erro occoreu enquanto  buscava-se uma casa"})
		})
}
}
