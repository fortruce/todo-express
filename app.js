var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/todo');

//
//		MIDDLEWARE
//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//
//		ROUTES
//
var lists = require('./routes/lists');
app.use('/lists', lists);

var todos = require('./routes/todos');
app.use('/lists/:listId/todos', todos);


// 404
app.get('/*', function(req, res, next) {
	res.status(404).send('Page Not Found');
});

app.listen(3000);