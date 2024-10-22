const palindromes = function (str) {
    let norm = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let rev = norm.split("").reverse().join("");
    if (norm === rev) {
        return true;
    }else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
