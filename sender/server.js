var express = require('express');
var app     = express();
var bodyParser = require('body-parser');



app.use(express.static(__dirname + '/')); 		// set the static files location /public/img will be /img for users
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//require('./app/routes')(app);

app.listen('8081')
console.log('Server connected at 8081');
