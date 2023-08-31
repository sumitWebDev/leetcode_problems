/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var i = num1.length-1;
    var j = num2.length-1;
    var carry = 0;
    var result = [];
    while(i>=0 || j>=0){
        
        var x = i >=0 ? parseInt(num1[i]) : 0;
        var y = j >=0 ? parseInt(num2[j]) : 0;
        var sum = x+y+carry;
        
        carry = Math.floor(sum/10);
        result.push(sum%10);
        i--;
        j--;
    }

    if(carry>0){
        result.push(carry)
    }
    return result.reverse().join('')
};