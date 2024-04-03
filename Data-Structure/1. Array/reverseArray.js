/*
Reversing array using Using a Loop (In-place) 
*/


function reverseArrayInPlace(arr) {
  for (let start = 0, end = arr.length - 1; start < end; start++, end--) {
    [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
  }
  return arr;
}

// Example usage
const arr = [1, 2, 3, 4, 5];
console.log("Original array:", arr);
reverseArrayInPlace(arr);
console.log("Reversed array:", arr);
