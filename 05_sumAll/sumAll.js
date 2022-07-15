const sumAll = function(arg1, arg2) {
    let sum = 0;
    if(arg1 < 0 || arg2 < 0 || typeof arg1 !== "number" || typeof arg2 !== "number") {
        sum = "ERROR";
    } else if(arg1 < arg2){
            for (let i = arg1; i <= arg2; i++) {
                sum += i;            
            }
    } else if(arg1 > arg2) {
        for (let i = arg2; i <= arg1; i++) {
            sum += i;            
        }        
    }
    return sum;
};

sumAll(1, 4) 
// Do not edit below this line
module.exports = sumAll;
