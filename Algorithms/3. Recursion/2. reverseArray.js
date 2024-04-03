function returnName(name, numRepetitions, arr = []) {
  if (numRepetitions === 0) {
    return arr; // Base case: return the accumulated array
  } else {
    arr.push(name); // Add name to the array before recursion
    return returnName(name, numRepetitions - 1, arr);
  }
}

const name = "Alice";
const numRepetitions = 3;
const repeatedNames = returnName(name, numRepetitions);
console.log(repeatedNames); // Output: ["Alice", "Alice", "Alice"]
