var express = require('express');
var app = express();
var random = require('./random-number');
var USD = require('./convert-USD');

app.set('port', process.env.PORT || 5000);

app.get('/', function (request, response){
   response.send(USD(random(100,10000)));
});

app.listen(app.get('port'), function(){
    console.log("Node app running on port:", app.get('port'));
});