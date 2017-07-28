var StudentModel = require('../ModelDB/db').student;

module.exports = function(req, res) {
	var studentModel = new StudentModel(req.body);
	var promise = studentModel.save();
	promise.then(function(response) {
		res.send(response);
	});
}