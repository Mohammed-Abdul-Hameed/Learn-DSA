function recursion(n, arr = []) {
  if (n === 0) {
    return arr; // Base case: return the accumulated array
  } else {
    arr.push(n); // Add n to the array before recursion
    return recursion(n - 1, arr);
  }
}

const result = recursion(5);
console.log(result); // Output: [5, 4, 3, 2, 1]
