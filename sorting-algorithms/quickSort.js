
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}


function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

let arr = [3, 2, 1, 4, 5, 6, 7, 8, 9, 10]; // Example array

console.time("Quick Sort");
console.log("Quick Sort Result:", quickSort([...arr]));
console.timeEnd("Quick Sort");

console.time("Merge Sort");
console.log("Merge Sort Result:", mergeSort([...arr]));
console.timeEnd("Merge Sort");

console.time("Selection Sort");
console.log("Selection Sort Result:", selectionSort([...arr]));
console.timeEnd("Selection Sort");

console.time("Insertion Sort");
console.log("Insertion Sort Result:", insertionSort([...arr]));
console.timeEnd("Insertion Sort");

console.time("Bubble Sort");
console.log("Bubble Sort Result:", bubbleSort([...arr]));
console.timeEnd("Bubble Sort");

// ### Analysis:

// - **Quick Sort**:  
//   - **Time Complexity**: Average O(n log n), Worst O(n^2)  
//   - **Space Complexity**: O(log n) (in-place)  
//   - Quick Sort is one of the fastest algorithms on average, but it can degrade to O(n^2) if the pivot is chosen poorly (e.g., in a sorted or nearly sorted array). It is in-place, meaning it doesn't require extra space for sorting.

// - **Merge Sort**:  
//   - **Time Complexity**: O(n log n)  
//   - **Space Complexity**: O(n)  
//   - Merge Sort is stable and always runs in O(n log n) time. It requires additional space for merging, making it less memory-efficient than Quick Sort.

// - **Selection Sort**:  
//   - **Time Complexity**: O(n^2)  
//   - **Space Complexity**: O(1)  
//   - Selection Sort has poor performance on large datasets but requires very little memory since it works in-place. It's easy to implement but inefficient.

// - **Insertion Sort**:  
//   - **Time Complexity**: O(n^2)  
//   - **Space Complexity**: O(1)  
//   - Insertion Sort is very efficient for small datasets or nearly sorted arrays. It works in-place but is slow on larger datasets.

// - **Bubble Sort**:  
//   - **Time Complexity**: O(n^2)  
//   - **Space Complexity**: O(1)  
//   - Bubble Sort is easy to understand but generally inefficient. Its performance is similar to Selection Sort and Insertion Sort, but it often performs more swaps, making it slower.

// ### Final Notes:

// - **Quick Sort** is often the fastest, especially for large arrays, due to its average time complexity of O(n log n).  
// - **Merge Sort** guarantees O(n log n) performance but uses more memory.  
// - **Selection Sort**, **Insertion Sort**, and **Bubble Sort** are typically slower (O(n^2)) and should only be used for small or nearly sorted datasets.