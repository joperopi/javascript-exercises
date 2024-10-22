const findTheOldest = function(arr) {
    let arrCopy = arr.map(x => x)
    for (let i = 0; i < arrCopy.length; i++) {
        if (arrCopy[i].yearOfDeath == undefined) {
            arrCopy[i]["age"] = (new Date().getFullYear() - arrCopy[i].yearOfBirth);
        } else {
            arrCopy[i]["age"] = (arrCopy[i].yearOfDeath - arrCopy[i].yearOfBirth);
        };
    };
    arrCopy.sort((a, b) => b.age - a.age);
    return arrCopy[0];
};

// Do not edit below this line
module.exports = findTheOldest;
