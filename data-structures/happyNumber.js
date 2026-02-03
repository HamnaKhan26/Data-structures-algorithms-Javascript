// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.


var isHappy = function(n) {
    let s = new Set();
    while(n!== 1 && !s.has(n)) {
        s.add(n);
        n = sqrtOfNum(n);
    }
    return n===1;
};


function sqrtOfNum(n) {
    let sum = 0;
    while(n>0) {
        let digit = n%10;
        sum += digit*digit;
        n = Math.floor(n/10);
    }
    return sum;
}

//console.log(isHappy(19));
console.log(isHappy(2));
