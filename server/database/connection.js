const mongoose = require("mongoose");

const connectDB = async() => {
	try {
		//mongodb connection string
		const con = await mongoose.connect(`mongodb+srv://heisler:dude007@cluster0.oxiqyov.mongodb.net/students?retryWrites=true&w=majority`, {

			useNewUrlParser:true,
			useUnifiedTopology:true,
			//useFindAndModify:false,
			//useCreateIndex: true
		})

		console.log(`O servidor mongodb esta a connectado 💾 )`);
	}catch(err){

		console.log(err);
		process.exit(1);

	}
}

module.exports = connectDB 