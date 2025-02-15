
//Using Two Pointers – O(n) Time and O(1) Space
function arrayRev(arr) {
    let start = 0;
    let end = arr.length -1;
    while(start<end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;        
        end--;
    }
    return arr;
}



const result = arrayRev([1, 4, 2, 8, 6, 7]);
console.log(result)

// function to reverse an array
//O(n) Time and O(1) Space
function reverseArray(arr) {
    let n = arr.length;
    let end = arr.length -1;

    for (let i = 0; i < n / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[end];
        arr[end] = temp;
        end--;
    }
}

const arr = [1, 4, 3, 2, 6, 5];

reverseArray(arr);
console.log(arr.join(" "));


// recursive function to reverse an array from l to r
//Time Complexity: O(n)
//Auxiliary Space: O(n), as we are using recursion stack.
function reverseArrayRec(arr, l, r) {
    if (l >= r)
        return;
  
    // Swap the elements at the ends
    [arr[l], arr[r]] = [arr[r], arr[l]];
  
    // Recur for the remaining array
    reverseArrayRec(arr, l + 1, r - 1);
}

function reverseArray(arr) {
    reverseArrayRec(arr, 0, arr.length);
}

const arr1 = [1, 3, 4, 5, 6, 7];

reverseArray(arr1);

console.log(arr1.join(" "));