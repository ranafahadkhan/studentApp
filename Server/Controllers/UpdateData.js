var StudentModel = require('../ModelDB/db').student;

module.exports = function(req, res) {
	
	StudentModel.update({studentName : req.body[1].studentName}, {studentName : req.body[0].studentName}, function(err, response) {
		if(!err) {
			res.send(response);
		}
	});
}