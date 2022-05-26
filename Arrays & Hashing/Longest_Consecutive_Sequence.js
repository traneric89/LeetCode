var longestConsecutive = function (nums) {
  let newSet = new Set(nums);
  let longestCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!newSet.has(nums[i] - 1)) {
      let length = 0;
      while (newSet.has(nums[i] + length)) {
        length++;
      }
      longestCount = Math.max(longestCount, length);
    }
  }
  return longestCount;
};
