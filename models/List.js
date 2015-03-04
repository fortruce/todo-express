var mongoose = require('mongoose')

var listSchema = mongoose.Schema({
	name: String
});

module.exports = mongoose.model('List', listSchema);