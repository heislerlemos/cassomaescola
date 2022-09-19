var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');


var UserSchema = new Schema ({
	email: {
		type: String ,
		required: true,
		unique: true
	},

	username : {
		type: String ,
		unique: true, 
		required: true
	},

	curse : {
		type: String ,
		unique: true,
		required: true
	},

	curse_year : {
		type: Number,
		required: true,
		unique: true
	},
    student_number : {
	type : Number ,
	required : true
	
	
    },
    proprinas : {
	type : String,
	required : true
    },
    
    

})



UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
