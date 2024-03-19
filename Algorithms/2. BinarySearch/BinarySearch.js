function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid; // Target found, return index
    } else if (arr[mid] < target) {
      start = mid + 1; // Search in the right half
    } else {
      end = mid - 1; // Search in the left half
    }
  }

  return -1; // Target not found
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const targetValue = 9;
const index = binarySearch(sortedArray, targetValue);
if (index !== -1) {
  console.log(`The target value ${targetValue} is found at index ${index}.`);
} else {
  console.log(`The target value ${targetValue} is not found in the array.`);
}
