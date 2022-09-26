var Calendar = require("../model/calendarmodel");	


// create and save calendar

exports.create  = (req, res ) => {


	if(!req.body){
		res.status(400).send({message: "O conteudo não pode estar vazio"})
	}



const calendar = new Calendr ({
	subject_course: req.body.subject_course ,
        detail: req.body.detail,
    date_start: req.body.date_start,
    date_end: req.body.date_end
        

});


calendar
	.save(calendar)
	.then(data => {
		//res.send(data)
		res.redirect('/add-calendar');
	})

	.catch(err => {
		res.status(500).send(	{
			message: err.message || "Algum erro ocorreu enquanto criavamos o calendario"
		});
	});
	
	
}


// retrive  and return users/ retrive and return a single user 

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

		.then(casa => {
			res.send(calendar)

		})




		.catch(err => {
			res.status(500).send({message: err.message  || "Um erro occoreu enquanto  buscava-se uma casa"})
		})
}
}

exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    
    Calendar.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}

// update  new idetinfied user by user id 

exports.delete = (req, res ) => {
	const id = req.params.id;

	Calendar.findByIdAndDelete(id)

	.then(data => {
		if(!data){
			res.status(404).send({message: `Não é possivel apagar o id ${id}, talvez o id esteja errado`})

		}else {
			res.send({
				message : "casa foi apagada!"
			})
		}

	})

	.catch(err => {
		res.status(500).send({
			message: "Não foi possivel apagar utilizador com o id " + id 
		})
	})

	
}
