var express = require('express');
var app = express();
var getAccount = require('./account-balance');


app.set('port', process.env.PORT || 5000);

app.get('/', function (request, response){
    response.send(getAccount.balance() + getAccount.getUSD());
});

app.listen(app.get('port'), function(){
    console.log("Node app running on port:", app.get('port'));
});