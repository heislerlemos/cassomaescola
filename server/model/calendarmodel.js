var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CalendarSchema = new Schema ({
	subject_course: {
		type: String ,
		required: true,
		unique: true
	},

	detail : {
		type: String ,
		unique: true 		
	},

	date_start: {
		type: Date,
		default: Date.now() 		
		
	},

	date_end : {
		type: Date
		
	},
    
});


const Calendar = mongoose.model("Calendar", CalendarSchema);

module.exports = Calendar;
