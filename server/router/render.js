const axios = require('axios');

exports.homeRoutes = (req, res) => {	
	
	//Make a get request to the api users


	axios.get('https://0.0.0.0:5000/calendar/api/calendars/')

	//axios.get('https://omeular.herokuapp.com/api/casas/')

		.then(function(response){
			console.log(response.data)
					res.render("index", {calendars: response.data});

		})

		.catch(err => {
			res.send(err);
		})

	}



exports.add_user = (req, res) =>{
    res.render('add_user');
}

exports.update_user = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}
