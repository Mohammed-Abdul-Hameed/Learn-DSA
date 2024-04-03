function linear(n) {
  if (n === 1) {
    return [1]; // Base case: return an array with 1 when n reaches 1
  } else {
    const result = linear(n - 1); // Get the results from 1 to n-1
    result.push(n); // Add the current n to the end of the results
    return result;
  }
}

const n = 5;
const result = linear(n);
console.log(result); // Output: [1, 2, 3, 4, 5]
