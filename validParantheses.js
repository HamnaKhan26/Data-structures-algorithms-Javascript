/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let resultStack = [];
    //keep track of the closing brackets
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (let char of s) {
        if(char === '{' || char === '(' || char === '[') {
            resultStack.push(char);
        } else {
            if(resultStack.pop() != map[char]) {
                return false;
            }
        }
    }
    return resultStack.length === 0;

};


console.log(isValid('({[]})'));
console.log(isValid('()'));

module.exports = isValid;
