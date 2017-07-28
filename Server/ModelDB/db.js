var mongoose = require('mongoose');
require('mongoose-type-email');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/students');

var student = mongoose.model('student', {
	studentName : String,
	rollNumber : {
		type: Number,
		min: [1, 'Roll Number must not be ZERO or NEGATIVE NUMBER !']
	},
	course : String,
	email : mongoose.SchemaTypes.Email,
	index : Number
});

module.exports.student = student;