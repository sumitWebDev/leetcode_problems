/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false
    }
    let isAnagram = checkAnagram(s) === checkAnagram(t) ? true : false;
    return isAnagram
};

function checkAnagram(str){
    return str.split('').sort().join('')
}