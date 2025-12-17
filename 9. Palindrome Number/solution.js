var isPalindrome = function(x) {
    x=x+"";
    for(let right=0,left=x.length-1;right<x.length,left>0;right++,left--){
        if(x[right]!==x[left]){
return false;
        }
    }
    return true;
};