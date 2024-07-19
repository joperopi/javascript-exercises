const sumAll = function(num1, num2) {
    let sumNum = 0;
    let numLarge;
    let numSmall;

    if (num1 < 0 || num2 < 0){
        return "ERROR"
    } else if (num1 != parseInt(num1) || num2 != parseInt(num2)) {
        return "ERROR"
    } else if (typeof(num1) != "number" || typeof(num2) != "number") {
        return "ERROR"
    }

    if (num2 > num1) {
        numLarge = num2;
         numSmall = num1;
    }else {
        numLarge = num1;
        numSmall = num2;
    }
    console.log("This should be the larger number: ",numLarge);
    console.log("This should be the smaller number: ",numSmall);
    for (i = numSmall; i = (snumLarge+1); i++){
        sumNum += i;
        console.log(sumNum)
    }
    return sumNum;
};

// Do not edit below this line
module.exports = sumAll;
