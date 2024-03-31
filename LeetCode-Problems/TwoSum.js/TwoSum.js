function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return []; // No solution found
}

let nums = [3, 2, 4];
let target = 6;

console.log(twoSum(nums, target)); // Output: [0, 1]



