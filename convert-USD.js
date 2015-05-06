var convertToUSD = function (number) {
    //number *= 100;
    //number = Math.round(number);
    //number /= 100;
    //return "$" + number;

    number/=100;
    var amountwithCommas = number.toLocaleString();
    var array = amountwithCommas.split(".");
    var dollars = array[0];
    var cents = (array.length > 1 ? array[1] : "");
    cents = (cents + "00").substring(0,2);

    return "$" + dollars + '.' + cents;
};

module.exports = convertToUSD;