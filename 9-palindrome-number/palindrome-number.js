/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var str = x.toString();
    var reverseString = str.split('').reverse().join('');
    
    //+reverseString converts string to number
    if(+reverseString === x)
        return true
    else
        return false
};