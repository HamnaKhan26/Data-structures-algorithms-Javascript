// Time Complexity of Insertion Sort
// Best case: O(n), If the list is already sorted, where n is the number of elements in the list.
// Average case: O(n2), If the list is randomly ordered
// Worst case: O(n2), If the list is in reverse order
// Space Complexity of Insertion Sort
// Auxiliary Space: O(1), Insertion sort requires O(1) additional space, making it a space-efficient sorting algorithm.

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i];
      let j = i - 1;
  
      // Shift elements to the right to create position for the current element
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = current; // Insert current element into the correct position
    }
    return arr;
  }
  
  const arr = [64, 34, 25, 12, 22, 11, 90];
  console.log("Sorted array:", insertionSort(arr));
  