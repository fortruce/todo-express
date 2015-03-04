var express = require('express');
var List = require('../models/List');

var router = express.Router();

router.get('/:id', function(req, res, next) {
	List.findById(req.params.id, function(err, list) {
		if (err) return next(err);
		res.json(list);
	});
});

router.post('/', function(req, res, next) {
	if(!req.body)
		return res.sendStatus(400);

	List.create(req.body, function(err, list) {
		if (err) return next(err);
		res.json(list);
	});
});

module.exports = router;