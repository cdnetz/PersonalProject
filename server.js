// ========== requires 
var Express = require('express');
var BodyParser = require('body-parser');

// ========== port

var port = 8015;

// ========== middleware 

app.use(Express)
app.use(BodyParser.json()); 

app.listen(port, function () {
	console.log('Listening on port: ' + port);
});