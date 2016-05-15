let express = require('express');
let app = express();
let PORT = process.env.PORT || 3000;
let todos = [
	{
		id: 1,
		description: 'Meet mom for lunch',
		completed: false
	},
	{
		id: 2,
		description: 'Go to market',
		completed: false
	},
	{
		id: 3,
		description: 'Add todo item',
		completed: true
	}
];

app.get('/', function(req, res) {
	res.send('Todo API Root');
});

// Get /todos
app.get('/todos', function(req, res) {
	res.json(todos);
});

// Get /todos/:id

app.listen(PORT, function() {
	console.log('Express listening on port ' + PORT + '!');
});