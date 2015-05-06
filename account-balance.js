var random = require('./random-number');
var USD = require('./convert-USD');

var getUSD = function () {
    return USD(random(100,10000));
};

var balance = function () {
    return "Account balance : \n";
};

module.exports.getUSD = getUSD;
module.exports.balance = balance;




