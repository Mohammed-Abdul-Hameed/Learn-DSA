/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0;

  for (j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;

      nums[i] = nums[j];
    }
  }

  return i + 1;
};

nums = [1, 1, 2, 2, 3, 3];

console.log(removeDuplicates(nums));
