const fibonacci = function(num) {
    number = Number(num);
    if (number < 0) {
        return "OOPS"
    } else if (number === 0) {
        return 0;
    } else if (number === 1) {
        return 1;
    };
    let fibonacci = [0, 1, 1];
    for (let i = 0; i < num; i++) {
        fibonacci.push(fibonacci[fibonacci.length-1] + fibonacci[fibonacci.length-2]);
    };
    return fibonacci[num];

};

// Do not edit below this line
module.exports = fibonacci;
