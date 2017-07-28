var StudentModel = require('../ModelDB/db').student;

module.exports = function(req, res) {
	var studentname = req.params.studentName;
	StudentModel.remove({studentName : studentname}, function(err) {
		if(!err) {
			res.send('Data deleted successfully!');
		}
	});
}