const fibonacci = function(member) {
    let fibSequence = [1, 1];
    let fibonacciNo = 0;
    if (member < 0) {
        return "OOPS"
    } else {
        for (let i = 1; i < member - 1; i++) {
            fibonacciNo = fibSequence[i-1] + fibSequence[i];
            fibSequence.push(fibonacciNo);
        }
    }
    return fibSequence[member-1];
};

// Do not edit below this line
module.exports = fibonacci;
