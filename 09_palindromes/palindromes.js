const palindromes = function (string) {
    let reverse = "";
    initialString = string.toLowerCase().replace(/[^a-z]/g, '');
    for (let i = string.length; i >= 0; i--) {
        reverse += initialString.substr(i, 1); 
    }
    return initialString === reverse;
};

// Do not edit below this line
module.exports = palindromes;
