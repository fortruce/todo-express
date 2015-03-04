var express = require('express');
var Todo = require('../models/Todo');

var router = express.Router({mergeParams: true});

router.get('/', function(req, res, next) {
	Todo.find(function(err, data) {
		if (err) return next(err);
		res.json(data);
	});
});

router.post('/', function(req, res, next) {
	if (!req.body || !req.body.todo)
		return res.sendStatus(400);

	Todo.create({todo: req.body.todo, completed: false}, function(err, todo) {
		if (err) return next(err);
		res.json(todo);
	});
});

router.post('/:id', function(req, res, next) {
	Todo.findById(req.params.id, function(err, todo) {
		if (err) return next(err);
		res.json(todo);
	})
})

module.exports = router;

