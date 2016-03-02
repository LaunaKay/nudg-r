var express = require('express'),
	app = express(),
	jade = require('jade'),
	mongoose = require('mongoose'),
	path = require('path')


function renderJadeFile(template, options) {
  var fn = jade.compile(template, options);
  return fn(options.locals);
}


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


