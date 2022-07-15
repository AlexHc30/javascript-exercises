const removeFromArray = function(array) {
    let arrayInput = Array.from(array);
    for(let i = 1; i < arguments.length; i++) {
        let remove = arguments[i];
        for(let j = 0; j < arrayInput.length; j++) {
            if(remove === arrayInput[j]) {
                arrayInput.splice(j, 1);
            }
        }
    }
    return arrayInput;
};

removeFromArray([1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;
