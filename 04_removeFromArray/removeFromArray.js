const removeFromArray = function(array, ...args) {
    return array = array.filter(value => !args.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
