/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false
    var str = x.toString();
    var reverseString = str.split('').reverse().join('');
    
    //+reverseString converts string to number
    if(+reverseString === x)
        return true
    else
        return false
};