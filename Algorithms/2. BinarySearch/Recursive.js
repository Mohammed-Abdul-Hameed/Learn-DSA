function binarySearchRecursive(array, target, left, right) {
  if (left > right) {
    return -1; // Target not found
  }

  let mid = Math.floor((left + right) / 2);

  if (array[mid] === target) {
    return mid; // Target found, return index
  } else if (target < array[mid]) {
    return binarySearchRecursive(array, target, left, mid - 1);
  } else {
    return binarySearchRecursive(array, target, mid + 1, right);
  }
}

const array = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 9;
const index = binarySearchRecursive(array, target, 0, array.length - 1);

if (index !== -1) {
  console.log(`The target value ${target} is found at index ${index}.`);
} else {
  console.log(`The target value ${target} is not found in the array.`);
}
