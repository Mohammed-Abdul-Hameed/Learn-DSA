function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const sum = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      // Start from i+1 to avoid duplicates
      if (nums[j] === sum) {
        return [i, j];
      }
    }
  }
  return []; // Return empty array to indicate no solution found
}

let nums = [2,7,11,15];
let target = 9;

console.log(twoSum(nums, target)); // Output: [1, 2]


/**
 Here i used the bruteforce method, it iterates through all possible pairs of elements in the input array to find the two that add up to the target sum. This approach is easy to understand and implement, but it has a time complexity of O(n^2), which means the time it takes to execute the algorithm grows quadratically with the size of the input array. This can be slow for large arrays.

There are more efficient approaches to solve the two-sum problem, such as using a hash table. A hash table allows for faster lookups of elements, leading to a time complexity of O(n) for the two-sum problem.
 */