const reverseString = function(string) {
    let stringLength = string.length;
    let reverse = '';
    for(i = stringLength; i>=0; i--) {
        reverse += string.charAt(i);
    }
    return reverse;
};

reverseString('hello there')
// Do not edit below this line
module.exports = reverseString;
