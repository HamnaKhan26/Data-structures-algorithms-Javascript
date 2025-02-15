
function thirdLargest(arr) {
    const sortedArr = arr.sort((a,b)=> a-b);
    return sortedArr[sortedArr.length - 3];
}


// Driver program to test above function 
let arr = [12, 13, 1, 10, 34, 16]; 
console.log(thirdLargest(arr));