var StudentModel = require('../ModelDB/db').student;

module.exports = function(req, res) {
	StudentModel.find(function(error, response) {
		if(!error) {
			res.send({response : response});
		}
	});
}