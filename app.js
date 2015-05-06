var express = require('express');
var app = express();
var random = require('./random-number');

app.set('port', process.env.PORT || 5000);

app.get('/', function (request, response){
   response.send(random(0,100).toString());
});

app.listen(app.get('port'), function(){
    console.log("Node app running on port:", app.get('port'));
});