function mergeSort(arr) {
    if (arr.length <= 1) return arr; // Base case: already sorted
  
    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
  
    return merge(left, right); // Merge the sorted halves
  }
  
  function merge(left, right) {
    let result = [];
    let i = 0, j = 0;
  
    // Compare elements from both halves and merge them in order
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    // Add remaining elements (if any)
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
  
  const arr = [5, 3, 8, 4, 2];
  console.log("Sorted array:", mergeSort(arr));
  