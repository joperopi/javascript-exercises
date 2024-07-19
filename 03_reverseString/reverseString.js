const reverseString = function(string) {
    stringArray = string.split("");
    stringArray = stringArray.reverse();
    stringReverse = stringArray.join("");
    return stringReverse;
};

// Do not edit below this line
module.exports = reverseString;
