/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let str1InBin = parseInt(x).toString(2);
    let str2InBin = parseInt(y).toString(2);

    while(str1InBin.length !== str2InBin.length){
        if(str1InBin.length < str2InBin.length){
            str1InBin = '0'+str1InBin
        }
        else if(str2InBin.length < str1InBin.length) {
            str2InBin = '0'+str2InBin
        }
    }
    let distance = 0;
    for(let i =0; i<str2InBin.length ; i++){
        if(str1InBin[i] !== str2InBin[i]){
            distance ++
        }
    }
    return distance;
};

