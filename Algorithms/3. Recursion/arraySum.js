function arraySum(array) {
  if (array.length === 0) {
    // Base case: empty array returns 0
    return 0;
  } else {
    let sum = 0; // Initialize sum variable
    for (let i = 0; i < array.length; i++) {
      sum += array[i]; // Add current element to the sum
    }
    return sum;
  }
}

console.log(arraySum([1, 2, 3, 4, 5])); // Output: 15
