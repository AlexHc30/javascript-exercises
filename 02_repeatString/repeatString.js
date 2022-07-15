const repeatString = function(string, maxNumber) {
    let stringRepeated = "";
    if(maxNumber < 0) {
        stringRepeated = "ERROR";
    } else {
        for(i = 1; i <= maxNumber; i++) {
            stringRepeated += string;
        }
    }
    return stringRepeated;
};

repeatString('hey', 3)

// Do not edit below this line
module.exports = repeatString;
