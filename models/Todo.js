var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({
	todo: String,
	completed: Boolean
});

module.exports = mongoose.model('Todo', todoSchema);