let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let PORT = process.env.PORT || 3000;
let todos = [];
let todoNextId = 1;

app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.send('Todo API Root');
});

// GET /todos
app.get('/todos', function(req, res) {
	res.json(todos);
});

// GET /todos/:id
app.get('/todos/:id', function(req, res) {
	let todoId = +req.params.id;
	let matchedTodo;
	
	todos.forEach(function(todo) {
		if (todo.id === todoId) {
			matchedTodo = todo;
		}
	});

	if (matchedTodo) {
		res.json(matchedTodo);
	}
	else {
		res.status(404).send();
	}
});

// POST /todos
app.post('/todos', function(req, res) {
	let body = req.body;

	body.id = todoNextId++;

	todos.push(body);

	console.log('description ' + body.description);
	res.json(body);
});

app.listen(PORT, function() {
	console.log('Express listening on port ' + PORT + '!');
});