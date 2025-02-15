function removeDuplicates(arr) {
    const s = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (!s.has(arr[i])) {
            s.add(arr[i]);
        }
    }
    return s;
}

// Driver code
const arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
const newSize = removeDuplicates(arr);

console.log(newSize);

function removeDuplicates(arr) {
    const n = arr.length;
    if (n <= 1)
        return n;
    let newArr = [];
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] !== arr[i + 1]) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

// Driver code
const arr1 = [1, 2, 2, 3, 4, 4, 4, 5, 5];
const newArr = removeDuplicates(arr1);

console.log(newArr);

